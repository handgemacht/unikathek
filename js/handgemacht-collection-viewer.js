
import { app } from './handgemacht-main.js';

//START Global Variables
let devMode = false;
const dirPath_Files = './files/';
const dirPath_CollectionJSON = 'json/handgemacht-collection.json';

var loader = new THREE.GLTFLoader();
const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath( './draco/' );
loader.setDRACOLoader( dracoLoader );
//END Global Variables



//START Search URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
urlParams.get('dev')==='true' ? devMode=true : devMode=false;
//END Search URL Parameters



//START A-Frame load-json-objects
AFRAME.registerComponent('load-json-models', {
		
		schema: { 
			scaleFactor: { default: 0.03 }, 
			scaleNormalizationFactor: { default: 0.6 }, 
		},

		init: function () {
			const comp = this;

			//create category model 
			this.categoryModelEl = document.createElement('a-entity');
			this.categoryModelEl.setAttribute('id', 'category-model');
			this.categoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 2');
			this.categoryModelEl.setAttribute('material', 'color: #FFC800; shader: flat');
			this.categoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.categoryModelEl);

			//create link category model 
			this.linkCategoryModelEl = document.createElement('a-entity');
			this.linkCategoryModelEl.setAttribute('id', 'link-category-model');
			this.linkCategoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 2');			
			this.linkCategoryModelEl.setAttribute('material', 'color: #FFC800; shader: flat; opacity: 0.2');
			this.linkCategoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.linkCategoryModelEl);

			//create link tag model 
			this.linkTagModelEl = document.createElement('a-entity');
			this.linkTagModelEl.setAttribute('id', 'link-tag-model');
			this.linkTagModelEl.setAttribute('geometry', 'primitive: sphere; radius: 2');			
			this.linkTagModelEl.setAttribute('material', 'color: #9B9691; shader: flat; opacity: 0.2');
			this.linkTagModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.linkTagModelEl);

			comp.loadJSONObjects();

			this.el.sceneEl.addEventListener('JSON-models-loaded', (e) => {
				devMode && console.log('dev --- JSON-models-loaded', e);
				devMode && console.log('dev --- scene', comp.el.sceneEl.object3D);
				devMode && console.log('dev --- forcegraph object3D: ', document.querySelector('#forcegraph').object3D);
				comp.assignModelsToNodes(this.data.scaleFactor, this.data.scaleNormalizationFactor);	
				comp.assignMaterialToLinks();
				app.gui.loadingScreen.hideLoadingScreen();
			}, {once: true});
		},

		update: function () {},

		tick: function () {},

		remove: function () {},

		pause: function () {},

		play: function () {}, 

		getDataFromJSON: function (json) {

			function filterEmptyTag(tag){
				return tag !== '';
			}

			let fgData={ 'nodes': [], 'links': []};
		
			//containsObject
			function containsObject(obj, list) {
				let i;
				for (i = 0; i < list.length; i++) {
					if (list[i] === obj) {
						return true;
					}
				}
				return false;
			}
		
			//nodes from categories 
			for(let category of json.categorylist){
				let newCategory = { 
					'id': category, 
					'categories': [category], 
					'name': category, 
					'type': 'node-category',
					'tags': [], // category.tags.filter(filterEmptyTag)
					'gltf': '',
					'gltfVisible': '',
					'gltfInvisible': ''  
				};
				if(category !== ''){
					fgData.nodes.push(newCategory);
				}
			}
		
			//nodes from objects
			for(let object of json.objects){
				let newObject = { 
					'id': object.primaryKey, 
					'categories': object.categories, 
					'name': object.name, 
					'type': 'node-object',
					'tags': object.tags.filter(filterEmptyTag),
					'gltf': ''
				};
				fgData.nodes.push(newObject);
			}
		
			//links by categories
			for(let category of json.categorylist){
				for(let object of json.objects){
					if(containsObject(category, object.categories)){
						let newLink = { 
							'source': category, 
							'target': object.primaryKey, 
							'name': category,
							'type': 'link-category',
							'material': '',
							'materialNormal': '',
							'materialHighlight': '',
							'materialFaint': '',
							'materialInvisible': ''
						};
						fgData.links.push(newLink);
					}
				}
			}
		
			//links by tags
			for(let object of json.objects){
				for(let tag of object.tags){
					for(let object2 of json.objects){
						if(object!==object2 && tag!=='' && containsObject(tag,object2.tags)) {
							let newLink = { 
								'source': object.primaryKey, 
								'target': object2.primaryKey, 
								'name': tag,
								'type': 'link-tag',
								'material': '',
								'materialNormal': '',
								'materialHighlight': '',
								'materialFaint': '',
								'materialInvisible': ''
							};
							fgData.links.push(newLink);
						}
					}
				}
			}
		
			for(let aLink of fgData.links){
				let aSource = aLink.source;
				let aTarget = aLink.target;
				for(let bLink of fgData.links){
					let bSource = bLink.source;
					let bTarget = bLink.target;
					if(aSource === bTarget && aTarget === bSource){
						aLink.double = true;
						bLink.double = false;
					}
				}
			}

			fgData.links = fgData.links.filter(filterDoubles);

			function filterDoubles(link) {
				return link.double == false || link.type == 'link-category';
			}
		
			return fgData;
		},

		filterFgData: function(fgData, tags = [], categories = []) {
			let filteredFgData = { 'nodes': [], 'links': []};

			devMode && console.log('dev --- filterFgData tags: ', tags);
			devMode && console.log('dev --- filterFgData categories: ', categories);

			for( let link in fgData.links ){
				let thisLink = fgData.links[link];
				if(tags.includes(thisLink.name) || categories.includes(thisLink.name)) {
					filteredFgData.links.push(thisLink);
				}
			}

			for( let node in fgData.nodes ){
				let thisNode = fgData.nodes[node];
				let newNode = null;
				let filteredTags = thisNode.tags.filter(value => tags.includes(value));
				let filteredCategories = thisNode.categories.filter(value => categories.includes(value));
				if(typeof filteredTags !== 'undefined' && filteredTags.length > 0){
					newNode = thisNode;
				}
				if(typeof filteredCategories !== 'undefined' && filteredCategories.length > 0){
					newNode = thisNode;
				}
				if(newNode){
					filteredFgData.nodes.push(newNode);
				}
			}

			devMode && console.log('dev --- filtered forcegraph Data: ', filteredFgData);

			return filteredFgData;
		},

		loadJSONObjects: function () {
			let fgData = '';
			const fileJSON = dirPath_Files + dirPath_CollectionJSON;
			let objectsJSON = fetch(fileJSON)
				.then((response) => response.json())
				.then((json) => {
					devMode && console.log('dev --- objects JSON: ', json.objects);

					//load models to scene
					let scene = document.querySelector('a-scene').object3D;
					for(let object in json.objects){
						if(json.objects[object].quality512){
							loader.load(dirPath_Files + json.objects[object].quality512, (gltf) => {
								gltf.scene.name = json.objects[object].primaryKey;
								gltf.scene.visible = false;
								scene.add( gltf.scene );
							}, (xhr) =>{ 
								//devMode && console.log( ( 'dev --- load model: ' + object.name + ' - ' + xhr.loaded / xhr.total * 100 ) + '% loaded' );
							}, (error) => {		
								console.log( 'An error happened: ' + error );
							});
						}
					}

					//translate json to forcegraph data
					this.fgData = this.getDataFromJSON(json);
					devMode && console.log('dev --- complete forcegraph Data: ', this.fgData);

					//filter out categories for initial display
					//let filteredFgData = this.filterFgData(this.fgData, json.taglist[22]);					 	//tag "Kirwa" and no categories 
					//let filteredFgData = this.filterFgData(this.fgData, json.taglist);							//all tags, no categories
					//let filteredFgData = this.filterFgData(this.fgData, json.taglist, [json.categorylist[1]]); 	//all tags and category "Bräuche"
					//let filteredFgData = this.filterFgData(this.fgData, '', json.categorylist); 					//no tags and all categories 
					let filteredFgData = this.filterFgData(this.fgData, json.taglist[22], json.categorylist); 	//tag "Kirwa" and all categories 

					//stringify fgData to JSON 
					let newNodes = JSON.stringify(filteredFgData.nodes);
					let newLinks = JSON.stringify(filteredFgData.links);
						
					//create a-entity forcegraph
					let newEntity = document.createElement('a-entity');
					this.el.sceneEl.appendChild(newEntity);
					newEntity.setAttribute('id', 'forcegraph');
					newEntity.setAttribute('forcegraph', {
						nodes: newNodes,
						links: newLinks,
						warmupTicks: 0,
						cooldownTicks: 1500,
						d3VelocityDecay: 0.6,
						linkWidth: 0.5,
						linkCurvature: 0.15,
						linkThreeObjectExtend: true,
						nodeRelSize: 1,
						nodeThreeObjectExtend: true,
						nodeOpacity: 0,
						onLinkHover: link => { 
							app.collectionViewer.tooltip.mouseoverHandler(link);
						},
						onLinkClick: link => { 
							devMode && console.log('dev --- onLinkClick: ', link);
							if(link.type === 'link-tag'){
								app.collectionViewer.highlight.onclickHandler(link);
								document.querySelector('#forcegraph').setAttribute('highlight', {source: link});
							}
							if(link.type === 'link-category'){
								app.collectionViewer.highlight.onclickHandler(link.source);
								document.querySelector('#forcegraph').setAttribute('highlight', {source: link.source});
							}
							
						},
						onNodeHover: node => { 
							app.collectionViewer.tooltip.mouseoverHandler(node);
						},
						onNodeClick: node => { 
							devMode && console.log('dev --- onNodeClick: ', node);
							document.querySelector('a-camera').setAttribute('camera-focus-target', {target: node, duration: 1200});
							app.collectionViewer.highlight.onclickHandler(node);
							document.querySelector('#forcegraph').setAttribute('highlight', {source: node});
						}
					});
					THREE.DefaultLoadingManager.onLoad = function () {
						let event = new Event('JSON-models-loaded');
						document.querySelector('a-scene').dispatchEvent(event);
					};
				});
		}, 

		assignModelsToNodes: function (scaleFactor = 1, normFactor = 0) {
			let sceneEl = document.querySelector('a-scene');
			let scene = document.querySelector('a-scene').object3D;
			let fgComp = document.querySelector('#forcegraph').getAttribute('forcegraph');

			let categoryModel = this.categoryModelEl.object3D;

			devMode && console.log('dev --- forcegraph component: ', fgComp);

			for(let node in fgComp.nodes){
				let thisNode = fgComp.nodes[node];
				for (let child in scene.children){
					let thisChild = scene.children[child];
					if(thisNode.id != '' && thisChild.name != '' && thisChild.name === thisNode.id && thisNode.type === 'node-object'){
						
						//find highest value of x, y, z in bounding box of object
						let bBoxSize = new THREE.Vector3();
						let boundingBox = new THREE.Box3();
						boundingBox.setFromObject(thisChild.children[0]).getSize(bBoxSize);
						let maxSize = bBoxSize.x;
						bBoxSize.y > maxSize ? maxSize = bBoxSize.y : '';
						bBoxSize.z > maxSize ? maxSize = bBoxSize.z : '';
						//normalize scale
						let normScale =  1 / (maxSize * normFactor + (1-normFactor));
						let newScale = normScale * scaleFactor;
						thisChild.children[0].scale.set(newScale, newScale, newScale);
						
						thisNode.gltf = thisChild.children[0];
					}else if(thisNode.id != '' && thisChild.name != '' && thisNode.type === 'node-category' ){
						thisNode.gltf = categoryModel.children[0].clone();
						thisNode.gltfVisible = categoryModel.children[0].clone();
						thisNode.gltfVisible.visible = true;
						thisNode.gltfInvisible = categoryModel.children[0].clone();
						thisNode.gltfInvisible.visible = false;
						devMode && console.log('dev --- thisNode.gltfInvisible.material.visible: ', thisNode.gltfInvisible.material.visible);
					}
				}
			}

			document.querySelector('#forcegraph').setAttribute('forcegraph', {
				nodeThreeObject: node => { return node.gltf }
			});
		}, 

		assignMaterialToLinks: function () {
			let sceneEl = document.querySelector('a-scene');
			let scene = document.querySelector('a-scene').object3D;
			let fgComp = document.querySelector('#forcegraph').getAttribute('forcegraph');

			let categoryMaterial = this.linkCategoryModelEl.object3D.children[0].material;
			let tagMaterial = this.linkTagModelEl.object3D.children[0].material;

			for(let link in fgComp.links){
				let thisLink = fgComp.links[link];
					if(thisLink.type === 'link-category'){
						thisLink.materialNormal = categoryMaterial.clone();
						thisLink.materialHighlight = categoryMaterial.clone();
						thisLink.materialHighlight.opacity = 1;
						thisLink.materialFaint = categoryMaterial.clone();
						thisLink.materialFaint.opacity = 0.05;
						thisLink.materialInvisible = categoryMaterial.clone();
						thisLink.materialInvisible.visible = false;
						thisLink.material = thisLink.materialNormal.clone();
					}else if(thisLink.type === 'link-tag'){
						thisLink.materialNormal = tagMaterial.clone();
						thisLink.materialHighlight = tagMaterial.clone();
						thisLink.materialHighlight.opacity = 1;
						thisLink.materialFaint = tagMaterial.clone();
						thisLink.materialFaint.opacity = 0.05;
						thisLink.materialInvisible = tagMaterial.clone();
						thisLink.materialInvisible.visible = false;
						thisLink.material = thisLink.materialNormal.clone();
					}
			}

			document.querySelector('#forcegraph').setAttribute('forcegraph', {
				linkMaterial: link => { return link.material }
			});
		}

});
//END A-Frame load-json-objects



//START camera-focus-target
AFRAME.registerComponent('camera-focus-target', {

	schema: {
		target: { default: null },
		duration: { default: 1500 }
	},

	init: function () {
		this.cameraEl = this.el;
		this.camera = this.el.object3D;

		//create focus element in camera reference frame and look at target
		this.focusEl = document.createElement('a-entity');
		this.focus = this.focusEl.object3D;
		this.el.sceneEl.appendChild(this.focusEl);

		this.setEventlistener();
	},

	update: function () {
		if(this.data.target) {
			this.cameraFocusTarget();
			devMode && console.log('dev --- camera-focus-target: ', this.data.target);
		}		
	},

	tick: function () {},

	remove: function () {},

	pause: function () {},

	play: function () {},

	cameraFocusTarget: function() {
		let orbitTarget = document.querySelector('#orbit-target');
		if(this.data.target.type === 'link-tag'){
			this.target = {};
			this.target.position = this.data.target.__curve.v1;
		}else{
			this.target = this.data.target.__threeObj;
		}

		//orbitTarget.object3D.position.copy(this.target.position);	
		let posString = '' + this.target.position.x + ' ' + this.target.position.y + ' ' + this.target.position.z + '';
		orbitTarget.setAttribute('position', posString);
		
		this.cameraEl.setAttribute('my-look-controls', {enabled: false});
		this.cameraEl.setAttribute('wasd-controls', {enabled: false});

		//set focus element
		this.focusEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);
		//geometry for debugging
		devMode && this.focusEl.setAttribute('geometry', 'primitive: cone; height: 10; radius-top: 0; radius-bottom: 1');
		
		//set new camera rotation
		let newCameraRotation = new THREE.Vector3();
		this.focus.lookAt(this.target.position);
		this.focus.rotateY(Math.PI);
		newCameraRotation.x = this.focus.rotation.x;
		newCameraRotation.y = this.focus.rotation.y;
		newCameraRotation.z = this.focus.rotation.z;

		//fix cone geometry to correct direction
		devMode ? this.focus.rotation.x -= Math.PI/2 : '';

		//rotation values
		let newCameraRotX = ((newCameraRotation.x*180)/Math.PI)-15;
		let newCameraRotY = ((newCameraRotation.y*180)/Math.PI)%360;
		//let newCameraRotZ = (this.focus.rotation.z*180)/Math.PI;
		let newCameraRotZ = 0;
		let cameraRotX = (this.camera.rotation.x*180)/Math.PI;
		let cameraRotY = ((this.camera.rotation.y*180)/Math.PI)%360;
		let cameraRotZ = (this.camera.rotation.z*180)/Math.PI;

		// Y rotation fix for +-180deg overrotation
		cameraRotY > 180 ? cameraRotY = cameraRotY-360 : cameraRotY = cameraRotY;
		cameraRotY < -180 ? cameraRotY = cameraRotY+360 : cameraRotY = cameraRotY;

		//animation camera point to focus X
		this.cameraEl.setAttribute('animation__cft-x', {
			'property': 'object3D.rotation.x',
			'from': cameraRotX,
			'to': newCameraRotX,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});

		//animation camera point to focus Y
		this.cameraEl.setAttribute('animation__cft-y', {
			'property': 'object3D.rotation.y',
			'from': cameraRotY,
			'to': newCameraRotY,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});

		//animation camera point to focus Z
		this.cameraEl.setAttribute('animation__cft-z', {
			'property': 'object3D.rotation.z',
			'from': cameraRotZ,
			'to': newCameraRotZ,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});

		this.cameraEl.emit('anim-camera-focus-target', null, false);
	},

	lookAtVector: function (origin, target) {
		let targetPosition = new THREE.Vector3();
		target.getWorldPosition(targetPosition);
		
		let originPosition = new THREE.Vector3();
		origin.getWorldPosition(originPosition);
		
		let lookAtVector = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z); 
		lookAtVector.subVectors(originPosition, lookAtVector);//.add(originPosition);
		return lookAtVector;
	}, 

	setEventlistener: function() {
		//set camera-vars for event listener context
		let cameraEl = this.cameraEl;
		let comp = this;

		this.cameraEl.addEventListener('animationcomplete__cft-z', (e) => {
			comp.cameraFocusFinished();
		});
	}, 

	cameraFocusFinished: function() {
		//set camera-vars for event listener context
		let cameraEl = this.cameraEl;
		let camera = this.camera;

		cameraEl.removeAttribute('animation__cft-x');
		cameraEl.removeAttribute('animation__cft-y');
		cameraEl.removeAttribute('animation__cft-z');

		let cameraWorldPosition = new THREE.Vector3();
		camera.getWorldPosition(cameraWorldPosition);
		let cameraWorldRotation = new THREE.Euler();
		cameraWorldRotation = camera.rotation;

		//cameraEl.setAttribute('my-look-controls', {enabled: true, orientation: {'position': cameraWorldPosition, 'rotation': cameraWorldRotation}});
		//cameraEl.setAttribute('wasd-controls', {enabled: true});
		cameraEl.setAttribute('orbit-controls', {enabled: true});

		devMode && console.log('dev --- look-controls: ', this.el.components['my-look-controls']);
		devMode && console.log('dev --- wasd-controls: ', this.el.components['wasd-controls']);
		devMode && console.log('dev --- orbit-controls: ', this.el.components['orbit-controls']);

		cameraEl.setAttribute('camera-focus-target', {target: ''});
	}

});
//END camera-focus-target



//START highlight
AFRAME.registerComponent('highlight', {

	schema: {
		source: {default: null}
	}, 

	init: function () {
		this.cameraEl = document.querySelector('a-camera');
		this.camera = document.querySelector('a-camera').object3D;
	},

	update: function () {
		let source = this.data.source;
		this.fgComp = this.el.components.forcegraph.data;

		if(!source) {
			this.resetHighlight();
			return;
		}

		if(source.type === 'node-object' || source.type === 'node-category') {
			this.highlightModel(source);
			return;
		}

		if(source.type === 'link-tag' || source.type === 'link-category') {
			this.highlightLinks(source);
			return;
		}

	},

	tick: function () {
		if(this.data.source){

			let canvas = document.querySelector('.a-canvas');
			let targetPosition = new THREE.Vector3();

			this.camera.children[0].updateMatrixWorld();

			if(this.data.source.type === 'node-object' || this.data.source.type === 'node-category') {
				targetPosition.setFromMatrixPosition(this.data.source.__threeObj.matrixWorld);
				targetPosition.project(this.camera.children[0])
			}
			if( this.data.source.type === 'link-tag') {
				targetPosition.set(this.data.source.__curve.v1.x, this.data.source.__curve.v1.y, this.data.source.__curve.v1.z);
				targetPosition.project(this.camera.children[0])
			}
			if( this.data.source.type === 'link-category') {
				targetPosition.setFromMatrixPosition(this.data.source.source.__threeObj.matrixWorld);
				targetPosition.project(this.camera.children[0])
			}

			let targetScreenPosition = {
				x: Math.round((0.5 + targetPosition.x / 2) * (canvas.width / window.devicePixelRatio)),
				y: Math.round((0.5 - targetPosition.y / 2) * (canvas.height / window.devicePixelRatio))
			}

			app.collectionViewer.highlight.highlightEl.style.left = (targetScreenPosition.x - app.collectionViewer.highlight.highlightContentEl.clientWidth / 2) + "px";
			app.collectionViewer.highlight.highlightEl.style.top = (targetScreenPosition.y + 50) + "px";
		}
	},

	remove: function () {},

	pause: function () {},

	play: function () {},

	highlightLinks: function (sourceLink) {
		let fgComp = this.fgComp;

		for(let link in fgComp.links){
			let thisLink = fgComp.links[link];
			if (thisLink.material) {
				if(thisLink.name === sourceLink.name){
					thisLink.material.copy(thisLink.materialHighlight);
					devMode && console.log('dev --- highlighted Link: ', thisLink);
				}else{
					thisLink.material.copy(thisLink.materialInvisible);
				}
			}
		}

		for(let node in fgComp.nodes){
			let thisNode = fgComp.nodes[node];
			if (thisNode.id != '' && thisNode.gltf.material) {
				if(thisNode.tags.includes(sourceLink.name)){
					thisNode.gltf.material.opacity = 1;
					thisNode.gltf.material.visible = true;
				}else{
					thisNode.gltf.material.transparent = true;
					thisNode.gltf.material.opacity = 0.05;
					thisNode.gltf.material.visible = false;
				}
			}
		}

	}, 

	highlightModel: function (sourceNode) {

		let fgComp = this.fgComp;

		let modelArray = [];

		for(let link in fgComp.links){
			let thisLink = fgComp.links[link];
			if (thisLink.material) {
				if(thisLink.source.id === sourceNode.id || thisLink.target.id === sourceNode.id){
					thisLink.material.copy(thisLink.materialHighlight);
					modelArray.push(thisLink.source.id);
					modelArray.push(thisLink.target.id);
				}else{
					thisLink.material.copy(thisLink.materialInvisible);
				}
			}
		}

		devMode && console.log('dev --- modelArray: ', modelArray)

		for(let node in fgComp.nodes){
			let thisNode = fgComp.nodes[node];
			if (thisNode.id != '' && thisNode.gltf.material) {
				if(modelArray.includes(thisNode.id) && thisNode.type !== 'node-category'){
					thisNode.gltf.material.opacity = 1;
					thisNode.gltf.material.visible = true;
					devMode && console.log('dev --- material change: ', thisNode)
				}else if(modelArray.includes(thisNode.id) && thisNode.type === 'node-category') {
					thisNode.gltf.copy(thisNode.gltfVisible);
					devMode && console.log('dev --- material change: ', thisNode)
				}else if(thisNode.type === 'node-category') {
					thisNode.gltf.copy(thisNode.gltfInvisible);
				}else{
					thisNode.gltf.material.transparent = true;
					thisNode.gltf.material.opacity = 0.05;
					thisNode.gltf.material.visible = false;
				}
			}
		}

	},

	resetHighlight: function () {
		let fgComp = this.fgComp;

		devMode && console.log('dev --- resetHighlight');

		for(let link in fgComp.links){
			let thisLink = fgComp.links[link];
			if(thisLink.material){
				thisLink.material.copy(thisLink.materialNormal);
			}
		}

		for(let node in fgComp.nodes){
			let thisNode = fgComp.nodes[node];
			if (thisNode.id != '' && thisNode.gltf.material) {
				if(thisNode.type === 'node-category') {
					thisNode.gltf.copy(thisNode.gltfVisible);
				}else{
					thisNode.gltf.material.opacity = 1;
					thisNode.gltf.material.visible = true;
				}
			}
		}

	}
});
//ENND highlight



//START camera-move-to-target
AFRAME.registerComponent('camera-move-to-target', {

	schema: {
		target: { default: '' },
		distance: { default: 60 },
		duration: { default: 1500 }
	},

	init: function () {
		this.cameraEl = this.el;
		this.camera = this.el.object3D;

		//create default camera position
		this.defaultCameraEl = document.createElement('a-entity');
		this.defaultCamera = this.defaultCameraEl.object3D;
		this.el.sceneEl.appendChild(this.defaultCameraEl);
		this.defaultCameraEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);

		//create focus element in camera reference frame and look at target
		this.focusEl = document.createElement('a-entity');
		this.focus = this.focusEl.object3D;
		this.el.sceneEl.appendChild(this.focusEl);

		this.setEventlistener();
	},

	update: function () {
		
		if(this.data.target === 'start'){
			devMode && console.log('dev --- camera-move-to-target > this.data.target: ', this.data.target);
			this.cameraMoveToTarget(true);
		}else if(this.data.target) {
			devMode && console.log('dev --- camera-move-to-target > this.data.target: ', this.data.target);
			this.defaultCameraEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);
			this.cameraMoveToTarget();
		}		
	},

	tick: function () {},

	remove: function () {},

	pause: function () {},

	play: function () {},

	cameraMoveToTarget: function(isDefaultCamera = false) {
		if(isDefaultCamera){
			this.target = this.defaultCamera;
			this.data.distance = 0;
		}else{
			this.target = this.data.target.__threeObj;
		}		
		
		this.cameraEl.setAttribute('my-look-controls', {enabled: false});
		this.cameraEl.setAttribute('wasd-controls', {enabled: false});
		this.cameraEl.removeAttribute('orbit-controls');

		//set focus element
		this.focusEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);
		//geometry for debugging
		devMode && this.focusEl.setAttribute('geometry', 'primitive: cone; height: 10; radius-top: 0; radius-bottom: 1');

		//set new camera position in front of object
		let newCameraPosition = new THREE.Vector3(); 
		this.target.getWorldPosition(newCameraPosition);
		this.targetVector = this.lookAtVector(this.camera, this.target);
		newCameraPosition.sub(this.targetVector.setLength(this.data.distance).negate());
		
		//set new camera rotation
		let newCameraRotation = new THREE.Vector3();
		this.focusEl.setAttribute('position', newCameraPosition);
		this.focus.lookAt(this.target.position);
		this.focus.rotateY(Math.PI);
		newCameraRotation.x = this.focus.rotation.x;
		newCameraRotation.y = this.focus.rotation.y;
		newCameraRotation.z = this.focus.rotation.z;

		//fix cone geometry to correct direction
		devMode ? this.focus.rotation.x -= Math.PI/2 : '';

		//animation camera move to target x
		this.cameraEl.setAttribute('animation__cmtt-x', {
			'property': 'object3D.position.x',
			'from': this.camera.position.x,
			'to': newCameraPosition.x,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-move-to-target'
		});	

		//animation camera move to target y
		this.cameraEl.setAttribute('animation__cmtt-y', {
			'property': 'object3D.position.y',
			'from': this.camera.position.y,
			'to': newCameraPosition.y,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-move-to-target'
		});	

		//animation camera move to target z
		this.cameraEl.setAttribute('animation__cmtt-z', {
			'property': 'object3D.position.z',
			'from': this.camera.position.z,
			'to': newCameraPosition.z,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-move-to-target'
		});	
		
		this.cameraEl.emit('anim-camera-move-to-target', null, false);
	},

	lookAtVector: function (origin, target) {
		let targetPosition = new THREE.Vector3();
		target.getWorldPosition(targetPosition);
		
		let originPosition = new THREE.Vector3();
		origin.getWorldPosition(originPosition);
		
		let lookAtVector = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z); 
		lookAtVector.subVectors(originPosition, lookAtVector);//.add(originPosition);
		return lookAtVector;
	}, 

	setEventlistener: function() {
		//set camera-vars for event listener context
		let cameraEl = this.cameraEl;
		let comp = this;

		this.cameraEl.addEventListener('animationcomplete__cmtt-z', (e) => {
			devMode && console.log('dev --- animation fin')
			comp.cameraMoveFinished();
		});
	},

	cameraMoveFinished: function() {
		//set camera-vars for event listener context
		let cameraEl = this.cameraEl;
		let camera = this.camera;

		cameraEl.removeAttribute('animation__cmtt-x');
		cameraEl.removeAttribute('animation__cmtt-y');
		cameraEl.removeAttribute('animation__cmtt-z');

		let cameraWorldPosition = new THREE.Vector3();
		camera.getWorldPosition(cameraWorldPosition);
		let cameraWorldRotation = new THREE.Euler();
		cameraWorldRotation = camera.rotation;

		cameraEl.setAttribute('my-look-controls', {enabled: true, orientation: {'position': cameraWorldPosition, 'rotation': cameraWorldRotation}});
		cameraEl.setAttribute('wasd-controls', {enabled: true});

		devMode && console.log('dev --- look-controls: ', this.el.components['my-look-controls']);
		devMode && console.log('dev --- wasd-controls: ', this.el.components['wasd-controls']);
		devMode && console.log('dev --- orbit-controls: ', this.el.components['orbit-controls']);		

		cameraEl.setAttribute('camera-move-to-target', {target: ''});
	}
});
//END camera-move-to-target



//START custom look-controls
/* global DeviceOrientationEvent	*/
//delete AFRAME.components['look-controls'];
//var registerComponent = AFRAME.registerComponent;
//var THREE = window.THREE;
var utils = AFRAME.utils;

// To avoid recalculation at every mouse movement tick
var PI_2 = Math.PI / 2;

/**
 * look-controls. Update entity pose, factoring mouse, touch, and WebVR API data.
 */
AFRAME.registerComponent('my-look-controls', {
	dependencies: ['position', 'rotation'],

	schema: {
		enabled: {default: true},
		magicWindowTrackingEnabled: {default: true},
		pointerLockEnabled: {default: false},
		reverseMouseDrag: {default: false},
		reverseTouchDrag: {default: false},
		touchEnabled: {default: true},
		mouseEnabled: {default: true},
		orientation: {default: null}
	},

	init: function () {
		this.deltaYaw = 0;
		this.previousHMDPosition = new THREE.Vector3();
		this.hmdQuaternion = new THREE.Quaternion();
		this.magicWindowAbsoluteEuler = new THREE.Euler();
		this.magicWindowDeltaEuler = new THREE.Euler();
		this.position = new THREE.Vector3();
		this.magicWindowObject = new THREE.Object3D();
		this.rotation = {};
		this.deltaRotation = {};
		this.savedPose = null;
		this.pointerLocked = false;
		this.setupMouseControls();
		this.bindMethods();
		this.previousMouseEvent = {};

		this.setupMagicWindowControls();

		// To save / restore camera pose
		this.savedPose = {
			position: new THREE.Vector3(),
			rotation: new THREE.Euler()
		};

		// Call enter VR handler if the scene has entered VR before the event listeners attached.
		if (this.el.sceneEl.is('vr-mode') || this.el.sceneEl.is('ar-mode')) { this.onEnterVR(); }

	},

	setupMagicWindowControls: function () {
		var magicWindowControls;
		var data = this.data;

		// Only on mobile devices and only enabled if DeviceOrientation permission has been granted.
		if (utils.device.isMobile() || utils.device.isMobileDeviceRequestingDesktopSite()) {
			magicWindowControls = this.magicWindowControls = new THREE.DeviceOrientationControls(this.magicWindowObject);
			if (typeof DeviceOrientationEvent !== 'undefined' && DeviceOrientationEvent.requestPermission) {
				magicWindowControls.enabled = false;
				if (this.el.sceneEl.components['device-orientation-permission-ui'].permissionGranted) {
					magicWindowControls.enabled = data.magicWindowTrackingEnabled;
				} else {
					this.el.sceneEl.addEventListener('deviceorientationpermissiongranted', function () {
						magicWindowControls.enabled = data.magicWindowTrackingEnabled;
					});
				}
			}
		}
	},

	update: function (oldData) {
		var data = this.data;

		// Disable grab cursor classes if no longer enabled.
		if (data.enabled !== oldData.enabled) {
			this.updateGrabCursor(data.enabled);
		}

		// Reset magic window eulers if tracking is disabled.
		if (oldData && !data.magicWindowTrackingEnabled && oldData.magicWindowTrackingEnabled) {
			this.magicWindowAbsoluteEuler.set(0, 0, 0);
			this.magicWindowDeltaEuler.set(0, 0, 0);
		}

		// Pass on magic window tracking setting to magicWindowControls.
		if (this.magicWindowControls) {
			this.magicWindowControls.enabled = data.magicWindowTrackingEnabled;
		}

		if (oldData && !data.pointerLockEnabled !== oldData.pointerLockEnabled) {
			this.removeEventListeners();
			this.addEventListeners();
			if (this.pointerLocked) { this.exitPointerLock(); }
		}
	},

	tick: function (t) {
		var data = this.data;
		if (!data.enabled) { return; }
		this.updateOrientation();
	},

	play: function () {
		this.addEventListeners();
	},

	pause: function () {
		this.removeEventListeners();
		if (this.pointerLocked) { this.exitPointerLock(); }
	},

	remove: function () {
		this.removeEventListeners();
		if (this.pointerLocked) { this.exitPointerLock(); }
	},

	bindMethods: function () {
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.onEnterVR = this.onEnterVR.bind(this);
		this.onExitVR = this.onExitVR.bind(this);
		this.onPointerLockChange = this.onPointerLockChange.bind(this);
		this.onPointerLockError = this.onPointerLockError.bind(this);
	},

 /**
	* Set up states and Object3Ds needed to store rotation data.
	*/
	setupMouseControls: function () {
		this.mouseDown = false;
		this.pitchObject = new THREE.Object3D();
		this.yawObject = new THREE.Object3D();
		this.yawObject.position.y = 10;
		this.yawObject.add(this.pitchObject);
	},

	/**
	 * Add mouse and touch event listeners to canvas.
	 */
	addEventListeners: function () {
		var sceneEl = this.el.sceneEl;
		var canvasEl = sceneEl.canvas;

		// Wait for canvas to load.
		if (!canvasEl) {
			sceneEl.addEventListener('render-target-loaded', this.addEventListeners.bind(this));
			return;
		}

		// Mouse events.
		canvasEl.addEventListener('mousedown', this.onMouseDown, false);
		window.addEventListener('mousemove', this.onMouseMove, false);
		window.addEventListener('mouseup', this.onMouseUp, false);

		// Touch events.
		canvasEl.addEventListener('touchstart', this.onTouchStart);
		window.addEventListener('touchmove', this.onTouchMove);
		window.addEventListener('touchend', this.onTouchEnd);

		// sceneEl events.
		sceneEl.addEventListener('enter-vr', this.onEnterVR);
		sceneEl.addEventListener('exit-vr', this.onExitVR);

		// Pointer Lock events.
		if (this.data.pointerLockEnabled) {
			document.addEventListener('pointerlockchange', this.onPointerLockChange, false);
			document.addEventListener('mozpointerlockchange', this.onPointerLockChange, false);
			document.addEventListener('pointerlockerror', this.onPointerLockError, false);
		}
	},

	/**
	 * Remove mouse and touch event listeners from canvas.
	 */
	removeEventListeners: function () {
		var sceneEl = this.el.sceneEl;
		var canvasEl = sceneEl && sceneEl.canvas;

		if (!canvasEl) { return; }

		// Mouse events.
		canvasEl.removeEventListener('mousedown', this.onMouseDown);
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('mouseup', this.onMouseUp);

		// Touch events.
		canvasEl.removeEventListener('touchstart', this.onTouchStart);
		window.removeEventListener('touchmove', this.onTouchMove);
		window.removeEventListener('touchend', this.onTouchEnd);

		// sceneEl events.
		sceneEl.removeEventListener('enter-vr', this.onEnterVR);
		sceneEl.removeEventListener('exit-vr', this.onExitVR);

		// Pointer Lock events.
		document.removeEventListener('pointerlockchange', this.onPointerLockChange, false);
		document.removeEventListener('mozpointerlockchange', this.onPointerLockChange, false);
		document.removeEventListener('pointerlockerror', this.onPointerLockError, false);
	},

	/**
	 * Update orientation for mobile, mouse drag, and headset.
	 * Mouse-drag only enabled if HMD is not active.
	 */
	updateOrientation: function () {
		var object3D = this.el.object3D;
		var pitchObject = this.pitchObject;
		var yawObject = this.yawObject;
		var sceneEl = this.el.sceneEl;

		// In VR or AR mode, THREE is in charge of updating the camera pose.
		if ((sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) && sceneEl.checkHeadsetConnected()) {
			// With WebXR THREE applies headset pose to the object3D internally.
			return;
		}

		this.updateMagicWindowOrientation();

		//custom fix for twitching camera-focus-target a-frame component
		if(this.data.orientation){
			pitchObject.rotation.x = this.data.orientation.rotation.x;
			yawObject.rotation.y = this.data.orientation.rotation.y;
			this.data.orientation = null;
		}

		// On mobile, do camera rotation with touch events and sensors.
		object3D.rotation.x = this.magicWindowDeltaEuler.x + pitchObject.rotation.x;
		object3D.rotation.y = this.magicWindowDeltaEuler.y + yawObject.rotation.y;
		object3D.rotation.z = this.magicWindowDeltaEuler.z;	
	},

	updateMagicWindowOrientation: function () {
		var magicWindowAbsoluteEuler = this.magicWindowAbsoluteEuler;
		var magicWindowDeltaEuler = this.magicWindowDeltaEuler;
		// Calculate magic window HMD quaternion.
		if (this.magicWindowControls && this.magicWindowControls.enabled) {
			this.magicWindowControls.update();
			magicWindowAbsoluteEuler.setFromQuaternion(this.magicWindowObject.quaternion, 'YXZ');
			if (!this.previousMagicWindowYaw && magicWindowAbsoluteEuler.y !== 0) {
				this.previousMagicWindowYaw = magicWindowAbsoluteEuler.y;
			}
			if (this.previousMagicWindowYaw) {
				magicWindowDeltaEuler.x = magicWindowAbsoluteEuler.x;
				magicWindowDeltaEuler.y += magicWindowAbsoluteEuler.y - this.previousMagicWindowYaw;
				magicWindowDeltaEuler.z = magicWindowAbsoluteEuler.z;
				this.previousMagicWindowYaw = magicWindowAbsoluteEuler.y;
			}
		}
	},

	/**
	 * Translate mouse drag into rotation.
	 *
	 * Dragging up and down rotates the camera around the X-axis (yaw).
	 * Dragging left and right rotates the camera around the Y-axis (pitch).
	 */
	onMouseMove: function (evt) {
		var direction;
		var movementX;
		var movementY;
		var pitchObject = this.pitchObject;
		var previousMouseEvent = this.previousMouseEvent;
		var yawObject = this.yawObject;

		// Not dragging or not enabled.
		if (!this.data.enabled || (!this.mouseDown && !this.pointerLocked)) { return; }

		// Calculate delta.
		if (this.pointerLocked) {
			movementX = evt.movementX || evt.mozMovementX || 0;
			movementY = evt.movementY || evt.mozMovementY || 0;
		} else {
			movementX = evt.screenX - previousMouseEvent.screenX;
			movementY = evt.screenY - previousMouseEvent.screenY;
		}
		this.previousMouseEvent.screenX = evt.screenX;
		this.previousMouseEvent.screenY = evt.screenY;

		// Calculate rotation.
		direction = this.data.reverseMouseDrag ? 1 : -1;
		yawObject.rotation.y += movementX * 0.002 * direction;
		pitchObject.rotation.x += movementY * 0.002 * direction;
		pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
	},

	/**
	 * Register mouse down to detect mouse drag.
	 */
	onMouseDown: function (evt) {
		var sceneEl = this.el.sceneEl;
		if (!this.data.enabled || !this.data.mouseEnabled || ((sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) && sceneEl.checkHeadsetConnected())) { return; }
		// Handle only primary button.
		if (evt.button !== 0) { return; }

		if(evt.stopPropagation) evt.stopPropagation();
	    if(evt.preventDefault) evt.preventDefault();
	    evt.cancelBubble=true;
	    evt.returnValue=false;

		var canvasEl = sceneEl && sceneEl.canvas;

		this.mouseDown = true;
		this.previousMouseEvent.screenX = evt.screenX;
		this.previousMouseEvent.screenY = evt.screenY;
		this.showGrabbingCursor();

		if (this.data.pointerLockEnabled && !this.pointerLocked) {
			if (canvasEl.requestPointerLock) {
				canvasEl.requestPointerLock();
			} else if (canvasEl.mozRequestPointerLock) {
				canvasEl.mozRequestPointerLock();
			}
		}
	},

	/**
	 * Shows grabbing cursor on scene
	 */
	showGrabbingCursor: function () {
		this.el.sceneEl.canvas.style.cursor = 'grabbing';
		
	},

	/**
	 * Hides grabbing cursor on scene
	 */
	hideGrabbingCursor: function () {
		this.el.sceneEl.canvas.style.cursor = '';
	},

	/**
	 * Register mouse up to detect release of mouse drag.
	 */
	onMouseUp: function () {
		this.mouseDown = false;
		this.hideGrabbingCursor();
	},

	/**
	 * Register touch down to detect touch drag.
	 */
	onTouchStart: function (evt) {
		if (evt.touches.length !== 1 ||
				!this.data.touchEnabled ||
				this.el.sceneEl.is('vr-mode') ||
				this.el.sceneEl.is('ar-mode')) { return; }
		this.touchStart = {
			x: evt.touches[0].pageX,
			y: evt.touches[0].pageY
		};
		this.touchStarted = true;
	},

	/**
	 * Translate touch move to Y-axis rotation.
	 */
	onTouchMove: function (evt) {
		var direction;
		var canvas = this.el.sceneEl.canvas;
		var deltaY;
		var yawObject = this.yawObject;

		if (!this.touchStarted || !this.data.touchEnabled) { return; }

		deltaY = 2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x) / canvas.clientWidth;

		direction = this.data.reverseTouchDrag ? 1 : -1;
		// Limit touch orientation to to yaw (y axis).
		yawObject.rotation.y -= deltaY * 0.5 * direction;
		this.touchStart = {
			x: evt.touches[0].pageX,
			y: evt.touches[0].pageY
		};
	},

	/**
	 * Register touch end to detect release of touch drag.
	 */
	onTouchEnd: function () {
		this.touchStarted = false;
	},

	/**
	 * Save pose.
	 */
	onEnterVR: function () {
		var sceneEl = this.el.sceneEl;
		if (!sceneEl.checkHeadsetConnected()) { return; }
		this.saveCameraPose();
		this.el.object3D.position.set(0, 0, 0);
		this.el.object3D.rotation.set(0, 0, 0);
		if (sceneEl.hasWebXR) {
			this.el.object3D.matrixAutoUpdate = false;
			this.el.object3D.updateMatrix();
		}
	},

	/**
	 * Restore the pose.
	 */
	onExitVR: function () {
		if (!this.el.sceneEl.checkHeadsetConnected()) { return; }
		this.restoreCameraPose();
		this.previousHMDPosition.set(0, 0, 0);
		this.el.object3D.matrixAutoUpdate = true;
	},

	/**
	 * Update Pointer Lock state.
	 */
	onPointerLockChange: function () {
		this.pointerLocked = !!(document.pointerLockElement || document.mozPointerLockElement);
	},

	/**
	 * Recover from Pointer Lock error.
	 */
	onPointerLockError: function () {
		this.pointerLocked = false;
	},

	// Exits pointer-locked mode.
	exitPointerLock: function () {
		document.exitPointerLock();
		this.pointerLocked = false;
	},

	/**
	 * Toggle the feature of showing/hiding the grab cursor.
	 */
	updateGrabCursor: function (enabled) {
		var sceneEl = this.el.sceneEl;

		function enableGrabCursor () { sceneEl.canvas.classList.add('a-grab-cursor'); }
		function disableGrabCursor () { sceneEl.canvas.classList.remove('a-grab-cursor'); }

		if (!sceneEl.canvas) {
			if (enabled) {
				sceneEl.addEventListener('render-target-loaded', enableGrabCursor);
			} else {
				sceneEl.addEventListener('render-target-loaded', disableGrabCursor);
			}
			return;
		}

		if (enabled) {
			enableGrabCursor();
			return;
		}
		disableGrabCursor();
	},

	/**
	 * Save camera pose before entering VR to restore later if exiting.
	 */
	saveCameraPose: function () {
		this.savedPose.position.copy(this.el.object3D.position);
		this.savedPose.rotation.copy(this.el.object3D.rotation);
		
		this.hasSavedPose = true;
	},

	/**
	 * Reset camera pose to before entering VR.
	 */
	restoreCameraPose: function () {
		if (!this.hasSavedPose) { return; }

		// Reset camera orientation.
		this.el.object3D.position.copy(this.savedPose.position);
		this.el.object3D.rotation.copy(this.savedPose.rotation);
		
		this.hasSavedPose = false;
	}
});
//END custom look-controls



//START custom orbit-controls
//source from: https://github.com/tizzle/aframe-orbit-controls-component/tree/master
/* global AFRAME THREE */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}


	/**
	 * Example component for A-Frame.
	 */
	AFRAME.registerComponent('orbit-controls', {
	  dependencies: ['position', 'rotation'],
	  schema: {
	    enabled: {
	      default: false
	    },
	    target: {
	      default: ''
	    },
	    isPosition: {
	      default: false
	    },
	    orientation: {
	      default: null
	    },
	    distance: {
	      default: 1
	    },
	    enableRotate: {
	      default: true
	    },
	    rotateSpeed: {
	      default: 1.0
	    },
	    enableZoom: {
	      default: true
	    },
	    zoomSpeed: {
	      default: 1.0
	    },
	    enablePan: {
	      default: true
	    },
	    keyPanSpeed: {
	      default: 7.0
	    },
	    enableDamping: {
	      default: false
	    },
	    dampingFactor: {
	      default: 0.25
	    },
	    autoRotate: {
	      default: false
	    },
	    autoRotateSpeed: {
	      default: 2.0
	    },
	    enableKeys: {
	      default: true
	    },
	    minAzimuthAngle: {
	      default: -Infinity
	    },
	    maxAzimuthAngle: {
	      default: Infinity
	    },
	    minPolarAngle: {
	      default: 0
	    },
	    maxPolarAngle: {
	      default: Math.PI
	    },
	    minZoom: {
	      default: 0
	    },
	    maxZoom: {
	      default: Infinity
	    },
	    invertZoom: {
	      default: false
	    },
	    minDistance: {
	      default: 0
	    },
	    maxDistance: {
	      default: Infinity
	    },
	    rotateTo: {
	      type: 'vec3',
	      default: {x: 0, y: 0, z: 0}
	    },
	    rotateToSpeed: {
	      type: 'number',
	      default: 0.05
	    },
	    logPosition: {
	      type: 'boolean',
	      default: false
	    },
	    autoVRLookCam: {
	      type: 'boolean',
	      default: true
	    }
	  },

	  /**
	   * Set if component needs multiple instancing.
	   */
	  multiple: false,

	  /**
	   * Called once when component is attached. Generally for initial setup.
	   */
	  init: function () {
	    this.sceneEl = this.el.sceneEl;
	    this.object = this.el.object3D;

	    //create target object
		this.targetObjectEl = document.createElement('a-entity');
		this.targetObject = this.targetObjectEl.object3D;
		this.el.sceneEl.appendChild(this.targetObjectEl);
		this.targetObjectEl.setAttribute('id', 'orbit-target');

		this.data.target = '#orbit-target';


	    // Find the look-controls component on this camera, or create if it doesn't exist.
	    this.isRunning = false;
	    this.lookControls = null;

	    if (this.data.autoVRLookCam) {
	      if (this.el.components['look-controls']) {
	        this.lookControls = this.el.components['look-controls'];
	      } else {
	        this.el.setAttribute('look-controls', '');
	        this.lookControls = this.el.components['look-controls'];
	      }
	      this.lookControls.pause();
	      this.el.sceneEl.addEventListener('enter-vr', this.onEnterVR.bind(this), false);
	      this.el.sceneEl.addEventListener('exit-vr', this.onExitVR.bind(this), false);
	    }

	    this.dolly = new THREE.Object3D();
	    this.dolly.position.copy(this.object.position);

	    this.savedPose = null;

	    this.STATE = {
	      NONE: -1,
	      ROTATE: 0,
	      DOLLY: 1,
	      PAN: 2,
	      TOUCH_ROTATE: 3,
	      TOUCH_DOLLY: 4,
	      TOUCH_PAN: 5,
	      ROTATE_TO: 6
	    };

	    this.state = this.STATE.NONE;

	    this.EPS = 0.000001;
	    this.lastPosition = new THREE.Vector3();
	    this.lastQuaternion = new THREE.Quaternion();

	    this.spherical = new THREE.Spherical();
	    this.sphericalDelta = new THREE.Spherical();

	    this.scale = 1.0;
	    this.zoomChanged = false;

	    this.rotateStart = new THREE.Vector2();
	    this.rotateEnd = new THREE.Vector2();
	    this.rotateDelta = new THREE.Vector2();

	    this.panStart = new THREE.Vector2();
	    this.panEnd = new THREE.Vector2();
	    this.panDelta = new THREE.Vector2();
	    this.panOffset = new THREE.Vector3();

	    this.dollyStart = new THREE.Vector2();
	    this.dollyEnd = new THREE.Vector2();
	    this.dollyDelta = new THREE.Vector2();

	    this.vector = new THREE.Vector3();
	    this.desiredPosition = new THREE.Vector3();

	    this.mouseButtons = {
	      ORBIT: THREE.MOUSE.LEFT,
	      ZOOM: THREE.MOUSE.MIDDLE,
	      PAN: THREE.MOUSE.RIGHT
	    };

	    this.keys = {
	      LEFT: 37,
	      UP: 38,
	      RIGHT: 39,
	      BOTTOM: 40
	    };

	    this.bindMethods();
	  },

	  /**
	   * Called when component is attached and when component data changes.
	   * Generally modifies the entity based on the data.
	   */
	  update: function (oldData) {
	  	if(!this.data.enabled){return;}
	  	devMode && console.log('dev --- orbit-controls position: ', this.data.target);

	  	if(this.data.isPosition){
	    	this.target = this.data.target;
	    }else {
	    	this.target = this.sceneEl.querySelector(this.data.target).object3D.position;
	    }
	  	
	    if (this.data.rotateTo) {
	      var rotateToVec3 = new THREE.Vector3(this.data.rotateTo.x, this.data.rotateTo.y, this.data.rotateTo.z);
	      // Check if rotateToVec3 is already desiredPosition
	      if (!this.desiredPosition.equals(rotateToVec3)) {
	        this.desiredPosition.copy(rotateToVec3);
	        this.rotateTo(this.desiredPosition);
	      }
	    }

	    this.dolly.position.copy(this.object.position);
	    this.updateView(true);
	  },

	  /**
	   * Called when a component is removed (e.g., via removeAttribute).
	   * Generally undoes all modifications to the entity.
	   */
	  remove: function () {
	    // console.log("component remove");
	    this.isRunning = false;
	    this.removeEventListeners();
	    this.el.sceneEl.removeEventListener('enter-vr', this.onEnterVR, false);
	    this.el.sceneEl.removeEventListener('exit-vr', this.onExitVR, false);
	  },

	  /**
	   * Called on each scene tick.
	   */
	  tick: function (t) {
	    var render = this.data.enabled && this.isRunning ? this.updateView() : false;
	    if (render === true && this.data.logPosition === true) {
	      console.log(this.el.object3D.position);
	    }
	  },

	  /*
	   * Called when entering VR mode
	  */
	  onEnterVR: function (event) {
	    // console.log('enter vr', this);

	    this.saveCameraPose();

	    this.el.setAttribute('position', {x: 0, y: 2, z: 5});
	    this.el.setAttribute('rotation', {x: 0, y: 0, z: 0});

	    this.pause();
	    this.lookControls.play();
	    if (this.data.autoRotate) console.warn('orbit-controls: Sorry, autoRotate is not implemented in VR mode');
	  },

	  /*
	   * Called when exiting VR mode
	  */
	  onExitVR: function (event) {
	    // console.log('exit vr');

	    this.lookControls.pause();
	    this.play();

	    this.restoreCameraPose();
	    this.updateView(true);
	  },

	  /**
	   * Called when entity pauses.
	   * Use to stop or remove any dynamic or background behavior such as events.
	   */
	  pause: function () {
	    // console.log("component pause");
	    this.isRunning  = false;
	    this.removeEventListeners();
	  },

	  /**
	   * Called when entity resumes.
	   * Use to continue or add any dynamic or background behavior such as events.
	   */
	  play: function () {
	    // console.log("component play");
	    this.isRunning = true;

	    var camera, cameraType;
	    this.object.traverse(function (child) {
	      if (child instanceof THREE.PerspectiveCamera) {
	        camera = child;
	        cameraType = 'PerspectiveCamera';
	      } else if (child instanceof THREE.OrthographicCamera) {
	        camera = child;
	        cameraType = 'OrthographicCamera';
	      }
	    });

	    this.camera = camera;
	    this.cameraType = cameraType;

	    this.sceneEl.addEventListener('renderstart', this.onRenderTargetLoaded, false);

	    if (this.lookControls) this.lookControls.pause();
	    if (this.canvasEl) this.addEventListeners();
	  },

	  /*
	   * Called when Render Target is completely loaded
	   * Then set canvasEl and add event listeners
	   */
	  onRenderTargetLoaded: function () {
	    this.sceneEl.removeEventListener('renderstart', this.onRenderTargetLoaded, false);
	    this.canvasEl = this.sceneEl.canvas;
	    this.addEventListeners();
	  },

	  /*
	   * Bind this to all event handlera
	   */
	  bindMethods: function () {
	    this.onRenderTargetLoaded = this.onRenderTargetLoaded.bind(this);

	    this.onContextMenu = this.onContextMenu.bind(this);
	    this.onMouseDown = this.onMouseDown.bind(this);
	    this.onMouseWheel = this.onMouseWheel.bind(this);
	    this.onMouseMove = this.onMouseMove.bind(this);
	    this.onMouseUp = this.onMouseUp.bind(this);
	    this.onTouchStart = this.onTouchStart.bind(this);
	    this.onTouchMove = this.onTouchMove.bind(this);
	    this.onTouchEnd = this.onTouchEnd.bind(this);
	    this.onKeyDown = this.onKeyDown.bind(this);
	  },

	  /*
	   * Add event listeners
	   */
	  addEventListeners: function () {
	    this.canvasEl.addEventListener('contextmenu', this.onContextMenu, false);

	    this.canvasEl.addEventListener('mousedown', this.onMouseDown, false);
	    this.canvasEl.addEventListener('mousewheel', this.onMouseWheel, false);
	    this.canvasEl.addEventListener('MozMousePixelScroll', this.onMouseWheel, false); // firefox

	    this.canvasEl.addEventListener('touchstart', this.onTouchStart, false);
	    this.canvasEl.addEventListener('touchend', this.onTouchEnd, false);
	    this.canvasEl.addEventListener('touchmove', this.onTouchMove, false);

	    window.addEventListener('keydown', this.onKeyDown, false);
	  },

	  /*
	   * Remove event listeners
	   */
	  removeEventListeners: function () {

	    if(this.canvasEl){
	        this.canvasEl.removeEventListener('contextmenu', this.onContextMenu, false);
	        this.canvasEl.removeEventListener('mousedown', this.onMouseDown, false);
	        this.canvasEl.removeEventListener('mousewheel', this.onMouseWheel, false);
	        this.canvasEl.removeEventListener('MozMousePixelScroll', this.onMouseWheel, false); // firefox

	        this.canvasEl.removeEventListener('touchstart', this.onTouchStart, false);
	        this.canvasEl.removeEventListener('touchend', this.onTouchEnd, false);
	        this.canvasEl.removeEventListener('touchmove', this.onTouchMove, false);

	        this.canvasEl.removeEventListener('mousemove', this.onMouseMove, false);
	        this.canvasEl.removeEventListener('mouseup', this.onMouseUp, false);
	        this.canvasEl.removeEventListener('mouseout', this.onMouseUp, false);
	    }

	    window.removeEventListener('keydown', this.onKeyDown, false);
	  },

	  /*
	   * EVENT LISTENERS
	   */

	  /*
	   * Called when right clicking the A-Frame component
	   */

	  onContextMenu: function (event) {
	    event.preventDefault();
	  },

	  /*
	   * MOUSE CLICK EVENT LISTENERS
	   */

	  onMouseDown: function (event) {
	    // console.log('onMouseDown');

	    if (!this.data.enabled || !this.isRunning) return;

	    if (event.button === this.mouseButtons.ORBIT && (event.shiftKey || event.ctrlKey)) {
	      if (this.data.enablePan === false) return;
	      this.handleMouseDownPan(event);
	      this.state = this.STATE.PAN;
	    } else if (event.button === this.mouseButtons.ORBIT) {
	      this.panOffset.set(0, 0, 0);
	      if (this.data.enableRotate === false) return;
	      this.handleMouseDownRotate(event);
	      this.state = this.STATE.ROTATE;
	    } else if (event.button === this.mouseButtons.ZOOM) {
	      this.panOffset.set(0, 0, 0);
	      if (this.data.enableZoom === false) return;
	      this.handleMouseDownDolly(event);
	      this.state = this.STATE.DOLLY;
	    } else if (event.button === this.mouseButtons.PAN) {
	      if (this.data.enablePan === false) return;
	      this.handleMouseDownPan(event);
	      this.state = this.STATE.PAN;
	    }

	    if (this.state !== this.STATE.NONE) {
	      this.canvasEl.addEventListener('mousemove', this.onMouseMove, false);
	      this.canvasEl.addEventListener('mouseup', this.onMouseUp, false);
	      this.canvasEl.addEventListener('mouseout', this.onMouseUp, false);

	      this.el.emit('start-drag-orbit-controls', null, false);
	    }
	  },

	  onMouseMove: function (event) {
	    // console.log('onMouseMove');

	    if (!this.data.enabled || !this.isRunning) return;

	    event.preventDefault();

	    if (this.state === this.STATE.ROTATE) {
	      if (this.data.enableRotate === false) return;
	      this.handleMouseMoveRotate(event);
	    } else if (this.state === this.STATE.DOLLY) {
	      if (this.data.enableZoom === false) return;
	      this.handleMouseMoveDolly(event);
	    } else if (this.state === this.STATE.PAN) {
	      if (this.data.enablePan === false) return;
	      this.handleMouseMovePan(event);
	    }
	  },

	  onMouseUp: function (event) {
	    // console.log('onMouseUp');

	    if (!this.data.enabled || !this.isRunning) return;

	    if (this.state === this.STATE.ROTATE_TO) return;

	    event.preventDefault();
	    event.stopPropagation();

	    this.handleMouseUp(event);

	    this.canvasEl.removeEventListener('mousemove', this.onMouseMove, false);
	    this.canvasEl.removeEventListener('mouseup', this.onMouseUp, false);
	    this.canvasEl.removeEventListener('mouseout', this.onMouseUp, false);

	    this.state = this.STATE.NONE;

	    this.el.emit('end-drag-orbit-controls', null, false);
	  },

	  /*
	   * MOUSE WHEEL EVENT LISTENERS
	   */

	  onMouseWheel: function (event) {
	    // console.log('onMouseWheel');

	    if (!this.data.enabled || !this.isRunning || this.data.enableZoom === false || (this.state !== this.STATE.NONE && this.state !== this.STATE.ROTATE)) return;

	    event.preventDefault();
	    event.stopPropagation();
	    this.handleMouseWheel(event);
	  },

	  /*
	   * TOUCH EVENT LISTENERS
	   */

	  onTouchStart: function (event) {
	    // console.log('onTouchStart');

	    if (!this.data.enabled || !this.isRunning) return;

	    switch (event.touches.length) {
	      case 1: // one-fingered touch: rotate
	        if (this.data.enableRotate === false) return;
	        this.handleTouchStartRotate(event);
	        this.state = this.STATE.TOUCH_ROTATE;
	        break;
	      case 2: // two-fingered touch: dolly
	        if (this.data.enableZoom === false) return;
	        this.handleTouchStartDolly(event);
	        this.state = this.STATE.TOUCH_DOLLY;
	        break;
	      case 3: // three-fingered touch: pan
	        if (this.data.enablePan === false) return;
	        this.handleTouchStartPan(event);
	        this.state = this.STATE.TOUCH_PAN;
	        break;
	      default:
	        this.state = this.STATE.NONE;
	    }

	    if (this.state !== this.STATE.NONE) {
	      this.el.emit('start-drag-orbit-controls', null, false);
	    }
	  },

	  onTouchMove: function (event) {
	    // console.log('onTouchMove');

	    if (!this.data.enabled || !this.isRunning) return;

	    event.preventDefault();
	    event.stopPropagation();

	    switch (event.touches.length) {
	      case 1: // one-fingered touch: rotate
	        if (this.enableRotate === false) return;
	        if (this.state !== this.STATE.TOUCH_ROTATE) return; // is this needed?...
	        this.handleTouchMoveRotate(event);
	        break;

	      case 2: // two-fingered touch: dolly
	        if (this.data.enableZoom === false) return;
	        if (this.state !== this.STATE.TOUCH_DOLLY) return; // is this needed?...
	        this.handleTouchMoveDolly(event);
	        break;

	      case 3: // three-fingered touch: pan
	        if (this.data.enablePan === false) return;
	        if (this.state !== this.STATE.TOUCH_PAN) return; // is this needed?...
	        this.handleTouchMovePan(event);
	        break;

	      default:
	        this.state = this.STATE.NONE;
	    }
	  },

	  onTouchEnd: function (event) {
	    // console.log('onTouchEnd');

	    if (!this.data.enabled || !this.isRunning) return;

	    this.handleTouchEnd(event);

	    this.el.emit('end-drag-orbit-controls', null, false);

	    this.state = this.STATE.NONE;
	  },

	  /*
	   * KEYBOARD EVENT LISTENERS
	   */

	  onKeyDown: function (event) {
	    // console.log('onKeyDown');

	    if (!this.data.enabled || !this.isRunning || this.data.enableKeys === false || this.data.enablePan === false) return;

	    this.handleKeyDown(event);
	  },

	  /*
	   * EVENT HANDLERS
	   */

	  /*
	   * MOUSE CLICK EVENT HANDLERS
	   */

	  handleMouseDownRotate: function (event) {
	    // console.log( 'handleMouseDownRotate' );
	    this.rotateStart.set(event.clientX, event.clientY);
	  },

	  handleMouseDownDolly: function (event) {
	    // console.log( 'handleMouseDownDolly' );
	    this.dollyStart.set(event.clientX, event.clientY);
	  },

	  handleMouseDownPan: function (event) {
	    // console.log( 'handleMouseDownPan' );
	    this.panStart.set(event.clientX, event.clientY);
	  },

	  handleMouseMoveRotate: function (event) {
	    // console.log( 'handleMouseMoveRotate' );

	    this.rotateEnd.set(event.clientX, event.clientY);
	    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

	    var canvas = this.canvasEl === document ? this.canvasEl.body : this.canvasEl;

	    // rotating across whole screen goes 360 degrees around
	    this.rotateLeft(2 * Math.PI * this.rotateDelta.x / canvas.clientWidth * this.data.rotateSpeed);

	    // rotating up and down along whole screen attempts to go 360, but limited to 180
	    this.rotateUp(2 * Math.PI * this.rotateDelta.y / canvas.clientHeight * this.data.rotateSpeed);

	    this.rotateStart.copy(this.rotateEnd);

	    this.updateView();
	  },

	  handleMouseMoveDolly: function (event) {
	    // console.log( 'handleMouseMoveDolly' );

	    this.dollyEnd.set(event.clientX, event.clientY);
	    this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

	    if (this.dollyDelta.y > 0) {
	      !this.data.invertZoom ? this.dollyIn(this.getZoomScale()) : this.dollyOut(this.getZoomScale());
	    } else if (this.dollyDelta.y < 0) {
	      !this.data.invertZoom ? this.dollyOut(this.getZoomScale()) : this.dollyIn(this.getZoomScale());
	    }

	    this.dollyStart.copy(this.dollyEnd);

	    this.updateView();
	  },

	  handleMouseMovePan: function (event) {
	    // console.log( 'handleMouseMovePan' );

	    this.panEnd.set(event.clientX, event.clientY);
	    this.panDelta.subVectors(this.panEnd, this.panStart);
	    this.pan(this.panDelta.x, this.panDelta.y);
	    this.panStart.copy(this.panEnd);

	    this.updateView();
	  },

	  handleMouseUp: function (event) {
	    // console.log( 'handleMouseUp' );
	  },

	  /*
	   * MOUSE WHEEL EVENT HANDLERS
	   */

	  handleMouseWheel: function (event) {
	    // console.log( 'handleMouseWheel' );

	    var delta = 0;
	    if (event.wheelDelta !== undefined) {
	      // WebKit / Opera / Explorer 9
	      delta = event.wheelDelta;
	    } else if (event.detail !== undefined) {
	      // Firefox
	      delta = -event.detail;
	    }

	    if (delta > 0) {
	      !this.data.invertZoom ? this.dollyOut(this.getZoomScale()) : this.dollyIn(this.getZoomScale());
	    } else if (delta < 0) {
	      !this.data.invertZoom ? this.dollyIn(this.getZoomScale()) : this.dollyOut(this.getZoomScale());
	    }

	    this.updateView();
	  },

	  /*
	   * TOUCH EVENT HANDLERS
	   */

	  handleTouchStartRotate: function (event) {
	    // console.log( 'handleTouchStartRotate' );

	    this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
	  },

	  handleTouchStartDolly: function (event) {
	    // console.log( 'handleTouchStartDolly' );

	    var dx = event.touches[0].pageX - event.touches[1].pageX;
	    var dy = event.touches[0].pageY - event.touches[1].pageY;
	    var distance = Math.sqrt(dx * dx + dy * dy);
	    this.dollyStart.set(0, distance);
	  },

	  handleTouchStartPan: function (event) {
	    // console.log( 'handleTouchStartPan' );

	    this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
	  },

	  handleTouchMoveRotate: function (event) {
	    // console.log( 'handleTouchMoveRotate' );

	    this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
	    this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

	    var canvas = this.canvasEl === document ? this.canvasEl.body : this.canvasEl;
	    // rotating across whole screen goes 360 degrees around
	    this.rotateLeft(2 * Math.PI * this.rotateDelta.x / canvas.clientWidth * this.data.rotateSpeed);
	    // rotating up and down along whole screen attempts to go 360, but limited to 180
	    this.rotateUp(2 * Math.PI * this.rotateDelta.y / canvas.clientHeight * this.data.rotateSpeed);
	    this.rotateStart.copy(this.rotateEnd);
	    this.updateView();
	  },

	  handleTouchMoveDolly: function (event) {
	    // console.log( 'handleTouchMoveDolly' );

	    var dx = event.touches[0].pageX - event.touches[1].pageX;
	    var dy = event.touches[0].pageY - event.touches[1].pageY;

	    var distance = Math.sqrt(dx * dx + dy * dy);

	    this.dollyEnd.set(0, distance);
	    this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);
	    if (this.dollyDelta.y > 0) {
	      this.dollyIn(this.getZoomScale());
	    } else if (this.dollyDelta.y < 0) {
	      this.dollyOut(this.getZoomScale());
	    }

	    this.dollyStart.copy(this.dollyEnd);
	    this.updateView();
	  },

	  handleTouchMovePan: function (event) {
	    // console.log( 'handleTouchMovePan' );

	    this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
	    this.panDelta.subVectors(this.panEnd, this.panStart);
	    this.pan(this.panDelta.x, this.panDelta.y);
	    this.panStart.copy(this.panEnd);
	    this.updateView();
	  },

	  handleTouchEnd: function (event) {
	    // console.log( 'handleTouchEnd' );
	  },

	  /*
	   * KEYBOARD EVENT HANDLERS
	   */

	  handleKeyDown: function (event) {
	    // console.log( 'handleKeyDown' );

	    switch (event.keyCode) {
	      case this.keys.UP:
	        this.pan(0, this.data.keyPanSpeed);
	        this.updateView();
	        break;
	      case this.keys.BOTTOM:
	        this.pan(0, -this.data.keyPanSpeed);
	        this.updateView();
	        break;
	      case this.keys.LEFT:
	        this.pan(this.data.keyPanSpeed, 0);
	        this.updateView();
	        break;
	      case this.keys.RIGHT:
	        this.pan(-this.data.keyPanSpeed, 0);
	        this.updateView();
	        break;
	    }
	  },

	  /*
	   * HELPER FUNCTIONS
	   */

	  getAutoRotationAngle: function () {
	    return 2 * Math.PI / 60 / 60 * this.data.autoRotateSpeed;
	  },

	  getZoomScale: function () {
	    return Math.pow(0.95, this.data.zoomSpeed);
	  },

	  rotateLeft: function (angle) {
	    this.sphericalDelta.theta -= angle;
	  },

	  rotateUp: function (angle) {
	    this.sphericalDelta.phi -= angle;
	  },

	  rotateTo: function (vec3) {
	    this.state = this.STATE.ROTATE_TO;
	    this.desiredPosition.copy(vec3);
	  },

	  panHorizontally: function (distance, objectMatrix) {
	    // console.log('pan horizontally', distance, objectMatrix);
	    var v = new THREE.Vector3();
	    v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
	    v.multiplyScalar(-distance);
	    this.panOffset.add(v);
	  },

	  panVertically: function (distance, objectMatrix) {
	    // console.log('pan vertically', distance, objectMatrix);
	    var v = new THREE.Vector3();
	    v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
	    v.multiplyScalar(distance);
	    this.panOffset.add(v);
	  },

	  pan: function (deltaX, deltaY) { // deltaX and deltaY are in pixels; right and down are positive
	    // console.log('panning', deltaX, deltaY );
	    var offset = new THREE.Vector3();
	    var canvas = this.canvasEl === document ? this.canvasEl.body : this.canvasEl;

	    if (this.cameraType === 'PerspectiveCamera') {
	      // perspective
	      var position = this.dolly.position;
	      offset.copy(position).sub(this.target);
	      var targetDistance = offset.length();
	      targetDistance *= Math.tan((this.camera.fov / 2) * Math.PI / 180.0); // half of the fov is center to top of screen
	      this.panHorizontally(2 * deltaX * targetDistance / canvas.clientHeight, this.object.matrix); // we actually don't use screenWidth, since perspective camera is fixed to screen height
	      this.panVertically(2 * deltaY * targetDistance / canvas.clientHeight, this.object.matrix);
	    } else if (this.cameraType === 'OrthographicCamera') {
	      // orthographic
	      this.panHorizontally(deltaX * (this.dolly.right - this.dolly.left) / this.camera.zoom / canvas.clientWidth, this.object.matrix);
	      this.panVertically(deltaY * (this.dolly.top - this.dolly.bottom) / this.camera.zoom / canvas.clientHeight, this.object.matrix);
	    } else {
	      // camera neither orthographic nor perspective
	      console.warn('Trying to pan: WARNING: Orbit Controls encountered an unknown camera type - pan disabled.');
	      this.data.enablePan = false;
	    }
	  },

	  dollyIn: function (dollyScale) {
	    // console.log( "dollyIn camera" );
	    if (this.cameraType === 'PerspectiveCamera') {
	      this.scale *= dollyScale;
	    } else if (this.cameraType === 'OrthographicCamera') {
	      this.camera.zoom = Math.max(this.data.minZoom, Math.min(this.data.maxZoom, this.camera.zoom * dollyScale));
	      this.camera.updateProjectionMatrix();
	      this.zoomChanged = true;
	    } else {
	      console.warn('Trying to dolly in: WARNING: Orbit Controls encountered an unknown camera type - dolly/zoom disabled.');
	      this.data.enableZoom = false;
	    }
	  },

	  dollyOut: function (dollyScale) {
	    // console.log( "dollyOut camera" );
	    if (this.cameraType === 'PerspectiveCamera') {
	      this.scale /= dollyScale;
	    } else if (this.cameraType === 'OrthographicCamera') {
	      this.camera.zoom = Math.max(this.data.minZoom, Math.min(this.data.maxZoom, this.camera.zoom / dollyScale));
	      this.camera.updateProjectionMatrix();
	      this.zoomChanged = true;
	    } else {
	      console.warn('Trying to dolly out: WARNING: Orbit Controls encountered an unknown camera type - dolly/zoom disabled.');
	      this.data.enableZoom = false;
	    }
	  },

	  lookAtTarget: function (object, target) {
	    var v = new THREE.Vector3();
	    v.subVectors(object.position, target).add(object.position);
	    object.lookAt(v);
	  },

	  /*
	   * SAVES CAMERA POSE (WHEN ENTERING VR)
	   */

	  saveCameraPose: function () {
	    if (this.savedPose) { return; }
	    this.savedPose = {
	      position: this.dolly.position,
	      rotation: this.dolly.rotation
	    };
	  },

	  /*
	   * RESTORE CAMERA POSE (WHEN EXITING VR)
	   */

	  restoreCameraPose: function () {
	    if (!this.savedPose) { return; }
	    this.dolly.position.copy(this.savedPose.position);
	    this.dolly.rotation.copy(this.savedPose.rotation);
	    this.savedPose = null;
	  },

	  /*
	   * VIEW UPDATE
	   */

	  updateView: function (forceUpdate) {
	    if (this.desiredPosition && this.state === this.STATE.ROTATE_TO) {
	      var desiredSpherical = new THREE.Spherical();
	      desiredSpherical.setFromVector3(this.desiredPosition);
	      var phiDiff = desiredSpherical.phi - this.spherical.phi;
	      var thetaDiff = desiredSpherical.theta - this.spherical.theta;
	      this.sphericalDelta.set(this.spherical.radius, phiDiff * this.data.rotateToSpeed, thetaDiff * this.data.rotateToSpeed);
	    }

	    var offset = new THREE.Vector3();

	    var quat = new THREE.Quaternion().setFromUnitVectors(this.dolly.up, new THREE.Vector3(0, 1, 0)); // so camera.up is the orbit axis
	    var quatInverse = quat.clone().invert();

	    offset.copy(this.dolly.position).sub(this.target);
	    offset.applyQuaternion(quat); // rotate offset to "y-axis-is-up" space
	    this.spherical.setFromVector3(offset); // angle from z-axis around y-axis

	    if (this.data.autoRotate && this.state === this.STATE.NONE) this.rotateLeft(this.getAutoRotationAngle());

	    this.spherical.theta += this.sphericalDelta.theta;
	    this.spherical.phi += this.sphericalDelta.phi;
	    this.spherical.theta = Math.max(this.data.minAzimuthAngle, Math.min(this.data.maxAzimuthAngle, this.spherical.theta)); // restrict theta to be inside desired limits
	    this.spherical.phi = Math.max(this.data.minPolarAngle, Math.min(this.data.maxPolarAngle, this.spherical.phi)); // restrict phi to be inside desired limits
	    this.spherical.makeSafe();
	    this.spherical.radius *= this.scale;
	    this.spherical.radius = Math.max(this.data.minDistance, Math.min(this.data.maxDistance, this.spherical.radius)); // restrict radius to be inside desired limits

	    this.target.add(this.panOffset); // move target to panned location

	    offset.setFromSpherical(this.spherical);
	    offset.applyQuaternion(quatInverse); // rotate offset back to "camera-up-vector-is-up" space

	    this.dolly.position.copy(this.target).add(offset);

	    if (this.target) {
	      this.lookAtTarget(this.dolly, this.target);
	    }

	    if (this.data.enableDamping === true) {
	      this.sphericalDelta.theta *= (1 - this.data.dampingFactor);
	      this.sphericalDelta.phi *= (1 - this.data.dampingFactor);
	    } else {
	      this.sphericalDelta.set(0, 0, 0);
	    }

	    this.scale = 1;
	    this.panOffset.set(0, 0, 0);

	    // update condition is:
	    // min(camera displacement, camera rotation in radians)^2 > EPS
	    // using small-angle approximation cos(x/2) = 1 - x^2 / 8

	    if (forceUpdate === true ||
	      this.zoomChanged ||
	      this.lastPosition.distanceToSquared(this.dolly.position) > this.EPS ||
	      8 * (1 - this.lastQuaternion.dot(this.dolly.quaternion)) > this.EPS) {
	      // this.el.emit('change-drag-orbit-controls', null, false);

	      var hmdQuaternion = this.calculateHMDQuaternion();
	      var hmdEuler = new THREE.Euler();
	      hmdEuler.setFromQuaternion(hmdQuaternion, 'YXZ');

	      this.el.setAttribute('position', {
	        x: this.dolly.position.x,
	        y: this.dolly.position.y,
	        z: this.dolly.position.z
	      });

	      this.el.setAttribute('rotation', {
	        x: (hmdEuler.x * 114.59155903),
	        y: (hmdEuler.y * 114.59155903),
	        z: (hmdEuler.z * 114.59155903)
	      });

	      this.lastPosition.copy(this.dolly.position);
	      this.lastQuaternion.copy(this.dolly.quaternion);

	      this.zoomChanged = false;

	      return true;
	    }

	    return false;
	  },

	  calculateHMDQuaternion: (function () {
	    var hmdQuaternion = new THREE.Quaternion();
	    return function () {
	      hmdQuaternion.copy(this.dolly.quaternion);
	      return hmdQuaternion;
	    };
	  })()

	});
