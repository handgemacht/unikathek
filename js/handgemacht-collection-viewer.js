
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
			this.categoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 4');
			this.categoryModelEl.setAttribute('material', 'color: #46AAC8; shader: flat');
			this.categoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.categoryModelEl);

			//create link category model 
			this.linkCategoryModelEl = document.createElement('a-entity');
			this.linkCategoryModelEl.setAttribute('id', 'link-category-model');
			this.linkCategoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 4');			
			this.linkCategoryModelEl.setAttribute('material', 'color: #46AAC8; shader: flat; opacity: 0.4');
			this.linkCategoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.linkCategoryModelEl);

			//create link tag model 
			this.linkTagModelEl = document.createElement('a-entity');
			this.linkTagModelEl.setAttribute('id', 'link-tag-model');
			this.linkTagModelEl.setAttribute('geometry', 'primitive: sphere; radius: 4');			
			this.linkTagModelEl.setAttribute('material', 'color: #FFC800; shader: flat; opacity: 0.4');
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

			this.el.sceneEl.addEventListener('filter-updated', (e) => {
				comp.assignModelsToNodes(this.data.scaleFactor, this.data.scaleNormalizationFactor);	
				comp.assignMaterialToLinks();
			});
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

			let fgData={ 'nodes': [], 'links': [], 'categorylist': [], 'taglist': [] };
		
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

			fgData.categorylist = json.categorylist;
			fgData.taglist = json.taglist;
		
			return fgData;
		},

		filterFgData: function(fgData, tags = [], categories = []) {
			let filteredFgData = { 'nodes': [], 'links': [] };

			devMode && console.log('dev --- forcegraph filter Data tags: ', tags);
			devMode && console.log('dev --- forcegraph filter Data categories: ', categories);

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

			filteredFgData.nodes = JSON.stringify(filteredFgData.nodes);
			filteredFgData.links = JSON.stringify(filteredFgData.links);

			document.querySelector('#forcegraph').setAttribute('forcegraph', {
				nodes: filteredFgData.nodes,
				links: filteredFgData.links
			});

			let event = new Event('filter-updated');
			document.querySelector('a-scene').dispatchEvent(event);
		},

		loadJSONObjects: function () {
			let fgData = '';
			const fileJSON = dirPath_Files + dirPath_CollectionJSON;
			let objectsJSON = fetch(fileJSON)
				.then((response) => response.json())
				.then((json) => {
					//load models to scene
					let scene = document.querySelector('a-scene').object3D;
					for(let object in json.objects){
						if(json.objects[object].quality512){
							loader.load(dirPath_Files + json.objects[object].quality512, (gltf) => {
								gltf.scene.name = json.objects[object].primaryKey;
								gltf.scene.altName = json.objects[object].name;
								gltf.scene.visible = false;
								scene.add( gltf.scene );
								//devMode && console.log('dev --- load model: ', json.objects[object]);
							}, (xhr) =>{ 
								//devMode && console.log( ( 'dev --- load model: ' + object.name + ' - ' + xhr.loaded / xhr.total * 100 ) + '% loaded' );
							}, (error) => {		
								console.log( 'An error happened: ' + error );
							});
						}
					}

					//create a-entity forcegraph
					let forcegraphEntity = document.createElement('a-entity');
					this.el.sceneEl.appendChild(forcegraphEntity);
					forcegraphEntity.setAttribute('id', 'forcegraph');
					forcegraphEntity.setAttribute('highlight', { noUpdate: true });

					this.fgData = this.getDataFromJSON(json);
					app.collectionViewer.proxyfgData.data = this.fgData;

					//initial display
					this.filterFgData(this.fgData, this.fgData.taglist, this.fgData.categorylist); 					//no tags and all categories 

					forcegraphEntity.setAttribute('forcegraph', {
						warmupTicks: 2000,
						cooldownTicks: 0,
						d3VelocityDecay: 0.6,
						linkWidth: 0.6,
						linkCurvature: 0.15,
						linkThreeObjectExtend: false,
						nodeRelSize: 1.5,
						nodeThreeObjectExtend: false,
						nodeOpacity: 0,
						onLinkHover: link => { 
							app.collectionViewer.tooltip.mouseoverHandler(link);
						},
						//onLinkClick: link => { 
							//devMode && console.log('dev --- onLinkClick: ', link);
							//if(link.type === 'link-tag'){
								//app.collectionViewer.highlight.onclickHandler(link);
								//document.querySelector('#forcegraph').setAttribute('highlight', {source: link});
							//}
							//if(link.type === 'link-category'){
								//app.collectionViewer.highlight.onclickHandler(link.source);
								//document.querySelector('#forcegraph').setAttribute('highlight', {source: link.source});
							//}
						//},
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

			devMode && console.log('dev --- scene: ', scene);

			for(let node in fgComp.nodes){
				let thisNode = fgComp.nodes[node];
				for (let child in scene.children){
					let thisChild = scene.children[child];
					if(thisNode.id != '' && thisChild.name != '' && thisChild.name === thisNode.id && thisNode.type === 'node-object'){
						
						thisNode.gltf = thisChild.children[0].clone();
						//devMode && console.log('dev --- assignModelsToNodes: ', thisNode);

						//find highest value of x, y, z in bounding box of object
						let bBoxSize = new THREE.Vector3();
						let boundingBox = new THREE.Box3();
						boundingBox.setFromObject(thisNode.gltf).getSize(bBoxSize);
						let maxSize = bBoxSize.x;
						bBoxSize.y > maxSize ? maxSize = bBoxSize.y : '';
						bBoxSize.z > maxSize ? maxSize = bBoxSize.z : '';
						//normalize scale
						thisNode.gltf.scale.set(1, 1, 1);
						let normScale =  1 / (maxSize * normFactor + (1-normFactor));
						let newScale = normScale * scaleFactor;

						thisNode.gltf.scale.set(newScale, newScale, newScale);
						
						
						
					}else if(thisNode.id != '' && thisChild.name != '' && thisNode.type === 'node-category' ){
						thisNode.gltf = categoryModel.children[0].clone();
						thisNode.gltf.material = new THREE.MeshBasicMaterial();
						thisNode.gltf.material.copy(categoryModel.children[0].material);
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
						thisLink.materialFaint.opacity = 0.1;
						thisLink.materialInvisible = categoryMaterial.clone();
						thisLink.materialInvisible.visible = false;
						thisLink.material = thisLink.materialNormal.clone();
					}else if(thisLink.type === 'link-tag'){
						thisLink.materialNormal = tagMaterial.clone();
						thisLink.materialHighlight = tagMaterial.clone();
						thisLink.materialHighlight.opacity = 1;
						thisLink.materialFaint = tagMaterial.clone();
						thisLink.materialFaint.opacity = 0.1;
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
		target: { default: '' },
		duration: { default: 1500 }
	},

	init: function () {
		this.cameraEl = document.querySelector('a-camera');
		this.camera = this.cameraEl.object3D;

		this.orbitTargetEl = document.querySelector('#orbit-target');
		this.orbitTarget = document.querySelector('#orbit-target').object3D;
	},

	update: function () {
		this.moveOrbitTarget();
		devMode && console.log('dev --- camera-focus-target: ', this.data.target);
	},

	tick: function () {},

	remove: function () {},

	pause: function () {},

	play: function () {},

	moveOrbitTarget: function() {
		if(!this.data.target){
			this.target = document.querySelector('#forcegraph').object3D;
		}else if(this.data.target.type === 'link-tag'){
			this.target = {};
			this.target.position = this.data.target.__curve.v1;
		}else{
			this.target = this.data.target.__threeObj;
		}

		let newCameraPosition = new THREE.Vector3(); 
		this.target.getWorldPosition(newCameraPosition);

		//animation orbitTarget move to target x
		this.orbitTargetEl.setAttribute('animation__mot-x', {
			'property': 'object3D.position.x',
			'from': this.orbitTarget.position.x,
			'to': newCameraPosition.x,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-orbit-target'
		});	

		//animation orbitTarget move to target y
		this.orbitTargetEl.setAttribute('animation__mot-y', {
			'property': 'object3D.position.y',
			'from': this.orbitTarget.position.y,
			'to': newCameraPosition.y,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-orbit-target'
		});	

		//animation orbitTarget move to target z
		this.orbitTargetEl.setAttribute('animation__mot-z', {
			'property': 'object3D.position.z',
			'from': this.orbitTarget.position.z,
			'to': newCameraPosition.z,
			'dur': this.data.duration, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-orbit-target'
		});	
		
		this.orbitTargetEl.emit('anim-orbit-target', null, false);
	}, 

});
//END camera-focus-target



//START highlight
AFRAME.registerComponent('highlight', {

	schema: {
		source: {default: ''}, 
		highestDistance: { default: 0 }, 
		noUpdate: { default: false }
	}, 

	init: function () {
		this.cameraEl = document.querySelector('a-camera');
		this.camera = document.querySelector('a-camera').object3D;
	},

	update: function () {
		let source = this.data.source;
		this.fgComp = this.el.components.forcegraph.data;

		let newDistance = 0;
		let newDesiredCameraPitch = -5;

		if(this.data.noUpdate){
			this.data.noUpdate = false;
			return;
		};

		if(!source) {
			this.resetHighlight();
			newDistance = this.camera.position.distanceTo(document.querySelector('#forcegraph').object3D.position);
		}

		if(source.type === 'node-object' || source.type === 'node-category') {
			this.highlightModel(source);
			newDistance = this.camera.position.distanceTo(this.data.source.__threeObj.position);
			newDesiredCameraPitch = -12;
		}

		if(source.type === 'link-tag' || source.type === 'link-category') {
			this.highlightLinks(source);
			newDistance = this.camera.position.distanceTo(this.data.source.__curve.v1);
			newDesiredCameraPitch = -12;
		}

		let newDesiredDistance = this.data.highestDistance * 2.5;

		this.cameraEl.setAttribute('orbit-controls', { autoRotate: false, distance: newDistance, desiredDistance: newDesiredDistance, desiredCameraPitch: newDesiredCameraPitch, forceUpdate: true });

		this.data.highestDistance = 0;
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
					thisNode.gltf.material.opacity = 0;
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

		for(let node in fgComp.nodes){
			let thisNode = fgComp.nodes[node];
			if (thisNode.id != '' && thisNode.gltf.material) {
				let distance = thisNode.__threeObj.position.distanceTo(sourceNode.__threeObj.position);
				if(modelArray.includes(thisNode.id)){
					thisNode.gltf.material.opacity = 1;
					thisNode.gltf.material.visible = true;
					this.setHighestDistance(distance);
				}else{
					thisNode.gltf.material.transparent = true;
					thisNode.gltf.material.opacity = 0;
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
				thisNode.gltf.material.opacity = 1;
				thisNode.gltf.material.visible = true;
				let distance = document.querySelector('#forcegraph').object3D.position.distanceTo(thisNode.__threeObj.position);
				this.setHighestDistance(distance);
			}
		}
		document.querySelector('a-camera').setAttribute('camera-focus-target', {target: '', duration: 1200});
	}, 

	setHighestDistance: function(distance) {
		//devMode && console.log('dev --- highlight > distance: ', distance);
		if (this.data.highestDistance < distance) {
			this.data.highestDistance = distance;
			//devMode && console.log('dev --- highlight > new highest distance set: ', distance);
		}
	}, 

	highlightFromPill: function(name, type) {
		let fgComp = this.fgComp;
		let pill = {};
		pill.name = name;
		pill.type = type;

		this.highlightLinks(pill);

		if (type === 'category') {
			for(let node in fgComp.nodes){
				let thisNode = fgComp.nodes[node];
				if (thisNode.type === 'node-category' && thisNode.name === pill.name) {
					this.highlightModel(thisNode);
					return;
				}
			}
		}

		if (type === 'tag') {
			let thisLink = null;
			for(let link in fgComp.links){
				let thisLink = fgComp.links[link];
				if (thisLink.type === 'link-tag' && thisLink.name === name) {
					this.highlightLinks(thisLink);
					return;
				}
			}
		}

	}
});
//END highlight



//START custom orbit-controls
// To avoid recalculation at every mouse movement tick
var PI_2 = Math.PI / 2;

AFRAME.registerComponent('orbit-controls', {

  schema: {
	enabled: { default: false },
	target: { default: '#orbit-target' }, 
	distance: { default: 50 }, 
	desiredDistance: { default: 500 },
	minDistance: { default: 30 },
	maxDistance: { default: 700 }, 
	autoRotate: { default: true }, 
	autoRotateSpeed: { default: 10 }, 
	cameraPitch: { default: 0 },
	desiredCameraPitch: { default: -5 }, 
	forceUpdate: { default: false }
  },

  init: function () {
	this.previousPosition = new THREE.Vector3();
	this.deltaPosition = new THREE.Vector3();
	this.setupMouseControls();
	this.setupHMDControls();
	this.bindMethods();

	if (this.el.components['look-controls']) {
		this.lookControls = this.el.components['look-controls'];
		this.lookControls.pause();
	} else {
		this.el.setAttribute('look-controls', '');
		this.lookControls = this.el.components['look-controls'];
		this.lookControls.pause();
	}
  },

  update: function () {
	if (!this.data.enabled) { return; }

	if(document.querySelector(this.data.target)){
		this.target3D = document.querySelector(this.data.target).object3D;
	}else{
		//create orbit target
		this.orbitTargetEl = document.createElement('a-entity');
		this.orbitTarget = this.orbitTargetEl.object3D;
		this.el.sceneEl.appendChild(this.orbitTargetEl);
		this.orbitTargetEl.setAttribute('id', 'orbit-target');
		devMode && this.orbitTargetEl.setAttribute('geometry', 'primitive: sphere; radius: 1');

		this.target3D = document.querySelector(this.data.target).object3D;
	}

	if(this.data.distance) {
		this.distance = this.data.distance;
	}
	
	//this.controls.update();
	this.updateOrientation();
	this.updatePosition();
  },

  play: function () {
	this.previousPosition.set(0, 0, 0);
	this.addEventListeners();
  },

  pause: function () {
	this.removeEventListeners();
  },

  tick: function (t) {
	if(this.data.enabled){

		this.data.forceUpdate && this.update;

		if(this.distance > this.data.desiredDistance) {
			let distFactor = (this.distance - this.data.desiredDistance)/50;
			this.distance -= 1 + distFactor;
		}

		if(this.distance < this.data.desiredDistance) {
			let distFactor = (this.data.desiredDistance - this.distance)/50;
			this.distance += 1 + distFactor;
		}

		//this.controls.update();
		this.updateOrientation();
		this.updatePosition();

		if(this.data.cameraPitch > this.data.desiredCameraPitch) {
			this.data.cameraPitch -= 0.3;
		}

		if(this.data.cameraPitch < this.data.desiredCameraPitch) {
			this.data.cameraPitch += 0.3;
		}

		this.el.object3D.rotation.x += (this.data.cameraPitch * 0.01745);
	}
  },

  remove: function () {
	this.pause();
  },

  bindMethods: function () {
	this.onMouseDown = this.onMouseDown.bind(this);
	this.onMouseMove = this.onMouseMove.bind(this);
	this.onMouseWheel = this.onMouseWheel.bind(this);
	this.releaseMouse = this.releaseMouse.bind(this);
	this.onTouchStart = this.onTouchStart.bind(this);
	this.onTouchMove = this.onTouchMove.bind(this);
	this.onTouchEnd = this.onTouchEnd.bind(this);
  },

  setupMouseControls: function () {
	// The canvas where the scene is painted
	this.mouseDown = false;
	this.pitchObject = new THREE.Object3D();
	this.yawObject = new THREE.Object3D();
	this.yawObject.position.y = 10;
	this.yawObject.add(this.pitchObject);
  },

  setupHMDControls: function () {
	this.dolly = new THREE.Object3D();
	this.euler = new THREE.Euler();
	//this.controls = new THREE.VRControls(this.dolly);
	this.zeroQuaternion = new THREE.Quaternion();
  },

  addEventListeners: function () {
	var sceneEl = this.el.sceneEl;
	var canvasEl = sceneEl.canvas;

	// listen for canvas to load.
	if (!canvasEl) {
	  sceneEl.addEventListener('render-target-loaded', this.addEventListeners.bind(this));
	  return;
	}

	// Mouse Events
	canvasEl.addEventListener('mousedown', this.onMouseDown, false);
	canvasEl.addEventListener('mousemove', this.onMouseMove, false);
	canvasEl.addEventListener('mouseup', this.releaseMouse, false);
	canvasEl.addEventListener('mouseout', this.releaseMouse, false);
	canvasEl.addEventListener('mousewheel', this.onMouseWheel, false);
	canvasEl.addEventListener('MozMousePixelScroll', this.onMouseWheel, false); // firefox

	// Touch events
	canvasEl.addEventListener('touchstart', this.onTouchStart);
	canvasEl.addEventListener('touchmove', this.onTouchMove);
	canvasEl.addEventListener('touchend', this.onTouchEnd);
  },

  removeEventListeners: function () {
	var sceneEl = document.querySelector('a-scene');
	var canvasEl = sceneEl && sceneEl.canvas;
	if (!canvasEl) { return; }

	// Mouse Events
	canvasEl.removeEventListener('mousedown', this.onMouseDown);
	canvasEl.removeEventListener('mousemove', this.onMouseMove);
	canvasEl.removeEventListener('mouseup', this.releaseMouse);
	canvasEl.removeEventListener('mouseout', this.releaseMouse);
	canvasEl.removeEventListener('mousewheel', this.onMouseWheel, false);
	canvasEl.removeEventListener('MozMousePixelScroll', this.onMouseWheel, false); // firefox

	// Touch events
	canvasEl.removeEventListener('touchstart', this.onTouchStart);
	canvasEl.removeEventListener('touchmove', this.onTouchMove);
	canvasEl.removeEventListener('touchend', this.onTouchEnd);
  },

  updateOrientation: (function () {
	var hmdEuler = new THREE.Euler();
	hmdEuler.order = 'YXZ';
	return function () {
	  var pitchObject = this.pitchObject;
	  var yawObject = this.yawObject;
	  var hmdQuaternion = this.calculateHMDQuaternion();
	  hmdEuler.setFromQuaternion(hmdQuaternion);

	  if(this.data.autoRotate){
	  	yawObject.rotation.y += this.data.autoRotateSpeed * 0.0001;
	  }

	  this.el.setAttribute('rotation', {
		x: (hmdEuler.x * 114.59155903) + (pitchObject.rotation.x * 114.59155903),
		y: (hmdEuler.y * 114.59155903) + (yawObject.rotation.y * 114.59155903),
		z: (hmdEuler.z * 114.59155903) + (yawObject.rotation.z * 114.59155903)
	  });
	};
  })(),

  calculateHMDQuaternion: (function () {
	var hmdQuaternion = new THREE.Quaternion();
	return function () {
	  var dolly = this.dolly;
	  if (!this.zeroed && !dolly.quaternion.equals(this.zeroQuaternion)) {
		this.zeroOrientation();
		this.zeroed = true;
	  }
	  hmdQuaternion.copy(this.zeroQuaternion).multiply(dolly.quaternion);
	  return hmdQuaternion;
	};
  })(),

  updatePosition: (function () {
	var position = new THREE.Vector3();
	var quaternion = new THREE.Quaternion();
	var scale = new THREE.Vector3();
	return function () {
		var el = this.el;
		var deltaPosition = this.calculateDeltaPosition();
		var currentPosition = this.target3D.position;
		this.el.object3D.matrixWorld.decompose(position, quaternion, scale);

		deltaPosition.applyQuaternion(quaternion);

		// Reset the Camera to 0

		el.setAttribute('position', {
			x: this.target3D.position.x,
			y: this.target3D.position.y,
			z: this.target3D.position.z
		});

		if(this.distance < this.data.minDistance) { 
			this.distance = this.data.minDistance;
			this.data.desiredDistance = this.data.minDistance; 
		};
		if(this.distance > this.data.maxDistance) { 
			this.distance = this.data.maxDistance;
			this.data.desiredDistance = this.data.maxDistance; 
		};

		var targetCameraPosition = this.el.object3D.translateOnAxis( new THREE.Vector3(0,0,1), this.distance ).position;

		el.setAttribute('position', {
			x: targetCameraPosition.x,
			y: targetCameraPosition.y,
			z: targetCameraPosition.z
		});
	};
  })(),

  calculateDeltaPosition: function () {
	var dolly = this.dolly;
	var deltaPosition = this.deltaPosition;
	var previousPosition = this.previousPosition;
	deltaPosition.copy(dolly.position);
	deltaPosition.sub(previousPosition);
	previousPosition.copy(dolly.position);
	return deltaPosition;
  },

  updateHMDQuaternion: (function () {
	var hmdQuaternion = new THREE.Quaternion();
	return function () {
	  var dolly = this.dolly;
	  this.controls.update();
	  if (!this.zeroed && !dolly.quaternion.equals(this.zeroQuaternion)) {
		this.zeroOrientation();
		this.zeroed = true;
	  }
	  hmdQuaternion.copy(this.zeroQuaternion).multiply(dolly.quaternion);
	  return hmdQuaternion;
	};
  })(),

  zeroOrientation: function () {
	var euler = new THREE.Euler();
	euler.setFromQuaternion(this.dolly.quaternion.clone().inverse());
	// Cancel out roll and pitch. We want to only reset yaw
	euler.z = 0;
	euler.x = 0;
	this.zeroQuaternion.setFromEuler(euler);
  },

  onMouseMove: function (event) {
	var pitchObject = this.pitchObject;
	var yawObject = this.yawObject;
	var previousMouseEvent = this.previousMouseEvent;

	if (!this.mouseDown || !this.data.enabled) { 
		this.mouseMove = false;
		return;
	}

	this.mouseMove = true;

	var movementX = event.movementX || event.mozMovementX;
	var movementY = event.movementY || event.mozMovementY;

	if (movementX === undefined || movementY === undefined) {
	  movementX = event.screenX - previousMouseEvent.screenX;
	  movementY = event.screenY - previousMouseEvent.screenY;
	}
	this.previousMouseEvent = event;

	yawObject.rotation.y -= movementX * 0.002;
	pitchObject.rotation.x -= movementY * 0.002;
	pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
  },

  onMouseDown: function (event) {
	this.mouseDown = true;
	this.previousMouseEvent = event;

	// Stop Zoom
	this.data.desiredDistance = this.distance;
  },

  releaseMouse: function () {
	this.mouseDown = false;
  },

  onMouseWheel: function (event) {
	if (!this.data.enabled) return;

	event.preventDefault();
	event.stopPropagation();

	var scrollDelta = 0;
	if (event.wheelDelta !== undefined) { // WebKit,Opera,IE 9
		scrollDelta = event.wheelDelta;
	} else if (event.detail !== undefined) { // Firefox
		scrollDelta = -event.detail;
	}

	if (scrollDelta > 0) {
		this.data.desiredDistance += 20;
	} else if (scrollDelta < 0) {
		this.data.desiredDistance -= 20;
	}

  },

  onTouchStart: function (e) {
	if (e.touches.length !== 1) { return; }
	this.touchStart = {
	  x: e.touches[0].pageX,
	  y: e.touches[0].pageY
	};
	this.touchStarted = true;

	// Stop Zoom
	this.data.desiredDistance = this.distance;
  },

  onTouchMove: function (e) {
  	this.touchMove = true;
	var deltaY;
	var deltaX;
	var yawObject = this.yawObject;
	if (!this.touchStarted) { return; }
	deltaY = 2 * Math.PI * (e.touches[0].pageX - this.touchStart.x) / this.el.sceneEl.canvas.clientWidth;
	deltaX = 2 * Math.PI * (e.touches[0].pageY - this.touchStart.y) / this.el.sceneEl.canvas.clientHeight;

	// Limits touch orientaion to to yaw (y axis)
	yawObject.rotation.y -= deltaY * 0.5;

	// Zoom on x Axis
	this.data.desiredDistance -= deltaX * 100;

	this.touchStart = {
	  x: e.touches[0].pageX,
	  y: e.touches[0].pageY
	};
  },

  onTouchEnd: function () {
	this.touchStarted = false;
	this.touchMove = false;
  }
});
//END custom orbit-controls

















// OLD DELETE LATER








// //START camera-focus-target
// AFRAME.registerComponent('camera-focus-target', {

// 	schema: {
// 		target: { default: null },
// 		duration: { default: 1500 }
// 	},

// 	init: function () {
// 		this.cameraEl = this.el;
// 		this.camera = this.el.object3D;

// 		//create focus element in camera reference frame and look at target
// 		this.focusEl = document.createElement('a-entity');
// 		this.focus = this.focusEl.object3D;
// 		this.el.sceneEl.appendChild(this.focusEl);

// 		this.setEventlistener();
// 	},

// 	update: function () {
// 		if(this.data.target) {
// 			this.cameraFocusTarget();
// 			devMode && console.log('dev --- camera-focus-target: ', this.data.target);
// 		}		
// 	},

// 	tick: function () {},

// 	remove: function () {},

// 	pause: function () {},

// 	play: function () {},

// 	cameraFocusTarget: function() {
// 		this.orbitTarget = document.querySelector('#orbit-target');
// 		if(this.data.target.type === 'link-tag'){
// 			this.target = {};
// 			this.target.position = this.data.target.__curve.v1;
// 		}else{
// 			this.target = this.data.target.__threeObj;
// 		}

// 		let posString = '' + this.target.position.x + ' ' + this.target.position.y + ' ' + this.target.position.z + '';
// 		this.orbitTarget.setAttribute('position', posString);
		
// 		//this.cameraEl.setAttribute('my-look-controls', {enabled: false});
// 		//this.cameraEl.setAttribute('wasd-controls', {enabled: false});
// 		//this.cameraEl.setAttribute('orbit-controls', {enabled: false});

// 		//set focus element
// 		this.focusEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);
// 		//geometry for debugging
// 		devMode && this.focusEl.setAttribute('geometry', 'primitive: cone; height: 10; radius-top: 0; radius-bottom: 1');
		
// 		//set new camera rotation
// 		let newCameraRotation = new THREE.Vector3();
// 		this.focus.lookAt(this.target.position);
// 		this.focus.rotateY(Math.PI);
// 		newCameraRotation.x = this.focus.rotation.x;
// 		newCameraRotation.y = this.focus.rotation.y;
// 		newCameraRotation.z = this.focus.rotation.z;

// 		//fix cone geometry to correct direction
// 		devMode ? this.focus.rotation.x -= Math.PI/2 : '';

// 		//rotation values
// 		let newCameraRotX = ((newCameraRotation.x*180)/Math.PI)-15;
// 		let newCameraRotY = ((newCameraRotation.y*180)/Math.PI)%360;
// 		//let newCameraRotZ = (this.focus.rotation.z*180)/Math.PI;
// 		let newCameraRotZ = 0;
// 		let cameraRotX = (this.camera.rotation.x*180)/Math.PI;
// 		let cameraRotY = ((this.camera.rotation.y*180)/Math.PI)%360;
// 		let cameraRotZ = (this.camera.rotation.z*180)/Math.PI;

// 		// Y rotation fix for +-180deg overrotation
// 		cameraRotY > 180 ? cameraRotY = cameraRotY-360 : cameraRotY = cameraRotY;
// 		cameraRotY < -180 ? cameraRotY = cameraRotY+360 : cameraRotY = cameraRotY;

// 		//animation camera point to focus X
// 		this.cameraEl.setAttribute('animation__cft-x', {
// 			'property': 'object3D.rotation.x',
// 			'from': cameraRotX,
// 			'to': newCameraRotX,
// 			'dur': this.data.duration, 
// 			'easing': 'easeInOutQuad',
// 			'startEvent': 'anim-camera-focus-target'
// 		});

// 		//animation camera point to focus Y
// 		this.cameraEl.setAttribute('animation__cft-y', {
// 			'property': 'object3D.rotation.y',
// 			'from': cameraRotY,
// 			'to': newCameraRotY,
// 			'dur': this.data.duration, 
// 			'easing': 'easeInOutQuad',
// 			'startEvent': 'anim-camera-focus-target'
// 		});

// 		//animation camera point to focus Z
// 		this.cameraEl.setAttribute('animation__cft-z', {
// 			'property': 'object3D.rotation.z',
// 			'from': cameraRotZ,
// 			'to': newCameraRotZ,
// 			'dur': this.data.duration, 
// 			'easing': 'easeInOutQuad',
// 			'startEvent': 'anim-camera-focus-target'
// 		});

// 		this.cameraEl.emit('anim-camera-focus-target', null, false);
// 	},

// 	lookAtVector: function (origin, target) {
// 		let targetPosition = new THREE.Vector3();
// 		target.getWorldPosition(targetPosition);
		
// 		let originPosition = new THREE.Vector3();
// 		origin.getWorldPosition(originPosition);
		
// 		let lookAtVector = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z); 
// 		lookAtVector.subVectors(originPosition, lookAtVector);//.add(originPosition);
// 		return lookAtVector;
// 	}, 

// 	setEventlistener: function() {
// 		//set camera-vars for event listener context
// 		let cameraEl = this.cameraEl;
// 		let comp = this;

// 		this.cameraEl.addEventListener('animationcomplete__mot-z', (e) => {
// 			//comp.cameraFocusFinished();
// 		});
// 	}, 

// 	cameraFocusFinished: function() {
// 		//set camera-vars for event listener context
// 		let cameraEl = this.cameraEl;
// 		let camera = this.camera;

// 		cameraEl.removeAttribute('animation__cft-x');
// 		cameraEl.removeAttribute('animation__cft-y');
// 		cameraEl.removeAttribute('animation__cft-z');

// 		let cameraWorldPosition = new THREE.Vector3();
// 		camera.getWorldPosition(cameraWorldPosition);
// 		let cameraWorldRotation = new THREE.Euler();
// 		cameraWorldRotation = camera.rotation;

// 		//cameraEl.setAttribute('my-look-controls', {enabled: true, orientation: {'position': cameraWorldPosition, 'rotation': cameraWorldRotation}});
// 		//cameraEl.setAttribute('wasd-controls', {enabled: true});

// 		this.orbitTarget.setAttribute('rotation', '' + cameraWorldRotation.x + ' ' + cameraWorldRotation.y + ' ' + cameraWorldRotation.z + '')

// 		cameraEl.setAttribute('orbit-controls', {enabled: true, target: '#orbit-target', orientation: {'position': cameraWorldPosition, 'rotation': cameraWorldRotation}});

// 		devMode && console.log('dev --- orbit-controls: ', this.el.components['orbit-controls']);

// 		cameraEl.setAttribute('camera-focus-target', {target: ''});
// 	}

// });
// //END camera-focus-target




// //START camera-move-to-target
// AFRAME.registerComponent('camera-move-to-target', {

// 	schema: {
// 		target: { default: '' },
// 		distance: { default: 60 },
// 		duration: { default: 1500 }
// 	},

// 	init: function () {
// 		this.cameraEl = this.el;
// 		this.camera = this.el.object3D;

// 		//create default camera position
// 		this.defaultCameraEl = document.createElement('a-entity');
// 		this.defaultCamera = this.defaultCameraEl.object3D;
// 		this.el.sceneEl.appendChild(this.defaultCameraEl);
// 		this.defaultCameraEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);

// 		//create focus element in camera reference frame and look at target
// 		this.focusEl = document.createElement('a-entity');
// 		this.focus = this.focusEl.object3D;
// 		this.el.sceneEl.appendChild(this.focusEl);

// 		this.setEventlistener();
// 	},

// 	update: function () {
		
// 		if(this.data.target === 'start'){
// 			devMode && console.log('dev --- camera-move-to-target > this.data.target: ', this.data.target);
// 			this.cameraMoveToTarget(true);
// 		}else if(this.data.target) {
// 			devMode && console.log('dev --- camera-move-to-target > this.data.target: ', this.data.target);
// 			this.defaultCameraEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);
// 			this.cameraMoveToTarget();
// 		}		
// 	},

// 	tick: function () {},

// 	remove: function () {},

// 	pause: function () {},

// 	play: function () {},

// 	cameraMoveToTarget: function(isDefaultCamera = false) {
// 		if(isDefaultCamera){
// 			this.target = this.defaultCamera;
// 			this.data.distance = 0;
// 		}else{
// 			this.target = this.data.target.__threeObj;
// 		}		
		
// 		//this.cameraEl.setAttribute('my-look-controls', {enabled: false});
// 		//this.cameraEl.setAttribute('wasd-controls', {enabled: false});
// 		this.cameraEl.setAttribute('orbit-controls', {enabled: false});

// 		//set focus element
// 		this.focusEl.setAttribute('position', this.camera.position.x + ' ' + this.camera.position.y + ' ' + this.camera.position.z);
// 		//geometry for debugging
// 		devMode && this.focusEl.setAttribute('geometry', 'primitive: cone; height: 10; radius-top: 0; radius-bottom: 1');

// 		//set new camera position in front of object
// 		let newCameraPosition = new THREE.Vector3(); 
// 		this.target.getWorldPosition(newCameraPosition);
// 		this.targetVector = this.lookAtVector(this.camera, this.target);
// 		newCameraPosition.sub(this.targetVector.setLength(this.data.distance).negate());
		
// 		//set new camera rotation
// 		let newCameraRotation = new THREE.Vector3();
// 		this.focusEl.setAttribute('position', newCameraPosition);
// 		this.focus.lookAt(this.target.position);
// 		this.focus.rotateY(Math.PI);
// 		newCameraRotation.x = this.focus.rotation.x;
// 		newCameraRotation.y = this.focus.rotation.y;
// 		newCameraRotation.z = this.focus.rotation.z;

// 		//fix cone geometry to correct direction
// 		devMode ? this.focus.rotation.x -= Math.PI/2 : '';

// 		//animation camera move to target x
// 		this.cameraEl.setAttribute('animation__cmtt-x', {
// 			'property': 'object3D.position.x',
// 			'from': this.camera.position.x,
// 			'to': newCameraPosition.x,
// 			'dur': this.data.duration, 
// 			'easing': 'easeInOutQuad',
// 			'startEvent': 'anim-camera-move-to-target'
// 		});	

// 		//animation camera move to target y
// 		this.cameraEl.setAttribute('animation__cmtt-y', {
// 			'property': 'object3D.position.y',
// 			'from': this.camera.position.y,
// 			'to': newCameraPosition.y,
// 			'dur': this.data.duration, 
// 			'easing': 'easeInOutQuad',
// 			'startEvent': 'anim-camera-move-to-target'
// 		});	

// 		//animation camera move to target z
// 		this.cameraEl.setAttribute('animation__cmtt-z', {
// 			'property': 'object3D.position.z',
// 			'from': this.camera.position.z,
// 			'to': newCameraPosition.z,
// 			'dur': this.data.duration, 
// 			'easing': 'easeInOutQuad',
// 			'startEvent': 'anim-camera-move-to-target'
// 		});	
		
// 		this.cameraEl.emit('anim-camera-move-to-target', null, false);
// 	},

// 	lookAtVector: function (origin, target) {
// 		let targetPosition = new THREE.Vector3();
// 		target.getWorldPosition(targetPosition);
		
// 		let originPosition = new THREE.Vector3();
// 		origin.getWorldPosition(originPosition);
		
// 		let lookAtVector = new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z); 
// 		lookAtVector.subVectors(originPosition, lookAtVector);//.add(originPosition);
// 		return lookAtVector;
// 	}, 

// 	setEventlistener: function() {
// 		//set camera-vars for event listener context
// 		let cameraEl = this.cameraEl;
// 		let comp = this;

// 		this.cameraEl.addEventListener('animationcomplete__cmtt-z', (e) => {
// 			devMode && console.log('dev --- animation fin')
// 			comp.cameraMoveFinished();
// 		});
// 	},

// 	cameraMoveFinished: function() {
// 		//set camera-vars for event listener context
// 		let cameraEl = this.cameraEl;
// 		let camera = this.camera;

// 		cameraEl.removeAttribute('animation__cmtt-x');
// 		cameraEl.removeAttribute('animation__cmtt-y');
// 		cameraEl.removeAttribute('animation__cmtt-z');

// 		let cameraWorldPosition = new THREE.Vector3();
// 		camera.getWorldPosition(cameraWorldPosition);
// 		let cameraWorldRotation = new THREE.Euler();
// 		cameraWorldRotation = camera.rotation;

// 		//cameraEl.setAttribute('my-look-controls', {enabled: true, orientation: {'position': cameraWorldPosition, 'rotation': cameraWorldRotation}});
// 		//cameraEl.setAttribute('wasd-controls', {enabled: true});
// 		cameraEl.setAttribute('orbit-controls', {enabled: true, target: '#orbit-target'});

// 		devMode && console.log('dev --- orbit-controls: ', this.el.components['orbit-controls']);		

// 		cameraEl.setAttribute('camera-move-to-target', {target: ''});
// 	}
// });
// //END camera-move-to-target




// //START custom look-controls
// /* global DeviceOrientationEvent	*/
// //delete AFRAME.components['look-controls'];
// //var registerComponent = AFRAME.registerComponent;
// //var THREE = window.THREE;
// var utils = AFRAME.utils;

// // To avoid recalculation at every mouse movement tick
// var PI_2 = Math.PI / 2;

// /**
//  * look-controls. Update entity pose, factoring mouse, touch, and WebVR API data.
//  */
// AFRAME.registerComponent('my-look-controls', {
// 	dependencies: ['position', 'rotation'],

// 	schema: {
// 		enabled: {default: true},
// 		magicWindowTrackingEnabled: {default: true},
// 		pointerLockEnabled: {default: false},
// 		reverseMouseDrag: {default: false},
// 		reverseTouchDrag: {default: false},
// 		touchEnabled: {default: true},
// 		mouseEnabled: {default: true},
// 		orientation: {default: null}
// 	},

// 	init: function () {
// 		this.deltaYaw = 0;
// 		this.previousHMDPosition = new THREE.Vector3();
// 		this.hmdQuaternion = new THREE.Quaternion();
// 		this.magicWindowAbsoluteEuler = new THREE.Euler();
// 		this.magicWindowDeltaEuler = new THREE.Euler();
// 		this.position = new THREE.Vector3();
// 		this.magicWindowObject = new THREE.Object3D();
// 		this.rotation = {};
// 		this.deltaRotation = {};
// 		this.savedPose = null;
// 		this.pointerLocked = false;
// 		this.setupMouseControls();
// 		this.bindMethods();
// 		this.previousMouseEvent = {};

// 		this.setupMagicWindowControls();

// 		// To save / restore camera pose
// 		this.savedPose = {
// 			position: new THREE.Vector3(),
// 			rotation: new THREE.Euler()
// 		};

// 		// Call enter VR handler if the scene has entered VR before the event listeners attached.
// 		if (this.el.sceneEl.is('vr-mode') || this.el.sceneEl.is('ar-mode')) { this.onEnterVR(); }

// 	},

// 	setupMagicWindowControls: function () {
// 		var magicWindowControls;
// 		var data = this.data;

// 		// Only on mobile devices and only enabled if DeviceOrientation permission has been granted.
// 		if (utils.device.isMobile() || utils.device.isMobileDeviceRequestingDesktopSite()) {
// 			magicWindowControls = this.magicWindowControls = new THREE.DeviceOrientationControls(this.magicWindowObject);
// 			if (typeof DeviceOrientationEvent !== 'undefined' && DeviceOrientationEvent.requestPermission) {
// 				magicWindowControls.enabled = false;
// 				if (this.el.sceneEl.components['device-orientation-permission-ui'].permissionGranted) {
// 					magicWindowControls.enabled = data.magicWindowTrackingEnabled;
// 				} else {
// 					this.el.sceneEl.addEventListener('deviceorientationpermissiongranted', function () {
// 						magicWindowControls.enabled = data.magicWindowTrackingEnabled;
// 					});
// 				}
// 			}
// 		}
// 	},

// 	update: function (oldData) {
// 		var data = this.data;

// 		// Disable grab cursor classes if no longer enabled.
// 		if (data.enabled !== oldData.enabled) {
// 			this.updateGrabCursor(data.enabled);
// 		}

// 		// Reset magic window eulers if tracking is disabled.
// 		if (oldData && !data.magicWindowTrackingEnabled && oldData.magicWindowTrackingEnabled) {
// 			this.magicWindowAbsoluteEuler.set(0, 0, 0);
// 			this.magicWindowDeltaEuler.set(0, 0, 0);
// 		}

// 		// Pass on magic window tracking setting to magicWindowControls.
// 		if (this.magicWindowControls) {
// 			this.magicWindowControls.enabled = data.magicWindowTrackingEnabled;
// 		}

// 		if (oldData && !data.pointerLockEnabled !== oldData.pointerLockEnabled) {
// 			this.removeEventListeners();
// 			this.addEventListeners();
// 			if (this.pointerLocked) { this.exitPointerLock(); }
// 		}
// 	},

// 	tick: function (t) {
// 		var data = this.data;
// 		if (!data.enabled) { return; }
// 		this.updateOrientation();
// 	},

// 	play: function () {
// 		this.addEventListeners();
// 	},

// 	pause: function () {
// 		this.removeEventListeners();
// 		if (this.pointerLocked) { this.exitPointerLock(); }
// 	},

// 	remove: function () {
// 		this.removeEventListeners();
// 		if (this.pointerLocked) { this.exitPointerLock(); }
// 	},

// 	bindMethods: function () {
// 		this.onMouseDown = this.onMouseDown.bind(this);
// 		this.onMouseMove = this.onMouseMove.bind(this);
// 		this.onMouseUp = this.onMouseUp.bind(this);
// 		this.onTouchStart = this.onTouchStart.bind(this);
// 		this.onTouchMove = this.onTouchMove.bind(this);
// 		this.onTouchEnd = this.onTouchEnd.bind(this);
// 		this.onEnterVR = this.onEnterVR.bind(this);
// 		this.onExitVR = this.onExitVR.bind(this);
// 		this.onPointerLockChange = this.onPointerLockChange.bind(this);
// 		this.onPointerLockError = this.onPointerLockError.bind(this);
// 	},

//  /**
// 	* Set up states and Object3Ds needed to store rotation data.
// 	*/
// 	setupMouseControls: function () {
// 		this.mouseDown = false;
// 		this.pitchObject = new THREE.Object3D();
// 		this.yawObject = new THREE.Object3D();
// 		this.yawObject.position.y = 10;
// 		this.yawObject.add(this.pitchObject);
// 	},

// 	/**
// 	 * Add mouse and touch event listeners to canvas.
// 	 */
// 	addEventListeners: function () {
// 		var sceneEl = this.el.sceneEl;
// 		var canvasEl = sceneEl.canvas;

// 		// Wait for canvas to load.
// 		if (!canvasEl) {
// 			sceneEl.addEventListener('render-target-loaded', this.addEventListeners.bind(this));
// 			return;
// 		}

// 		// Mouse events.
// 		canvasEl.addEventListener('mousedown', this.onMouseDown, false);
// 		window.addEventListener('mousemove', this.onMouseMove, false);
// 		window.addEventListener('mouseup', this.onMouseUp, false);

// 		// Touch events.
// 		canvasEl.addEventListener('touchstart', this.onTouchStart);
// 		window.addEventListener('touchmove', this.onTouchMove);
// 		window.addEventListener('touchend', this.onTouchEnd);

// 		// sceneEl events.
// 		sceneEl.addEventListener('enter-vr', this.onEnterVR);
// 		sceneEl.addEventListener('exit-vr', this.onExitVR);

// 		// Pointer Lock events.
// 		if (this.data.pointerLockEnabled) {
// 			document.addEventListener('pointerlockchange', this.onPointerLockChange, false);
// 			document.addEventListener('mozpointerlockchange', this.onPointerLockChange, false);
// 			document.addEventListener('pointerlockerror', this.onPointerLockError, false);
// 		}
// 	},

// 	/**
// 	 * Remove mouse and touch event listeners from canvas.
// 	 */
// 	removeEventListeners: function () {
// 		var sceneEl = this.el.sceneEl;
// 		var canvasEl = sceneEl && sceneEl.canvas;

// 		if (!canvasEl) { return; }

// 		// Mouse events.
// 		canvasEl.removeEventListener('mousedown', this.onMouseDown);
// 		window.removeEventListener('mousemove', this.onMouseMove);
// 		window.removeEventListener('mouseup', this.onMouseUp);

// 		// Touch events.
// 		canvasEl.removeEventListener('touchstart', this.onTouchStart);
// 		window.removeEventListener('touchmove', this.onTouchMove);
// 		window.removeEventListener('touchend', this.onTouchEnd);

// 		// sceneEl events.
// 		sceneEl.removeEventListener('enter-vr', this.onEnterVR);
// 		sceneEl.removeEventListener('exit-vr', this.onExitVR);

// 		// Pointer Lock events.
// 		document.removeEventListener('pointerlockchange', this.onPointerLockChange, false);
// 		document.removeEventListener('mozpointerlockchange', this.onPointerLockChange, false);
// 		document.removeEventListener('pointerlockerror', this.onPointerLockError, false);
// 	},

// 	/**
// 	 * Update orientation for mobile, mouse drag, and headset.
// 	 * Mouse-drag only enabled if HMD is not active.
// 	 */
// 	updateOrientation: function () {
// 		var object3D = this.el.object3D;
// 		var pitchObject = this.pitchObject;
// 		var yawObject = this.yawObject;
// 		var sceneEl = this.el.sceneEl;

// 		// In VR or AR mode, THREE is in charge of updating the camera pose.
// 		if ((sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) && sceneEl.checkHeadsetConnected()) {
// 			// With WebXR THREE applies headset pose to the object3D internally.
// 			return;
// 		}

// 		this.updateMagicWindowOrientation();

// 		//custom fix for twitching camera-focus-target a-frame component
// 		if(this.data.orientation){
// 			pitchObject.rotation.x = this.data.orientation.rotation.x;
// 			yawObject.rotation.y = this.data.orientation.rotation.y;
// 			this.data.orientation = null;
// 		}

// 		// On mobile, do camera rotation with touch events and sensors.
// 		object3D.rotation.x = this.magicWindowDeltaEuler.x + pitchObject.rotation.x;
// 		object3D.rotation.y = this.magicWindowDeltaEuler.y + yawObject.rotation.y;
// 		object3D.rotation.z = this.magicWindowDeltaEuler.z;	
// 	},

// 	updateMagicWindowOrientation: function () {
// 		var magicWindowAbsoluteEuler = this.magicWindowAbsoluteEuler;
// 		var magicWindowDeltaEuler = this.magicWindowDeltaEuler;
// 		// Calculate magic window HMD quaternion.
// 		if (this.magicWindowControls && this.magicWindowControls.enabled) {
// 			this.magicWindowControls.update();
// 			magicWindowAbsoluteEuler.setFromQuaternion(this.magicWindowObject.quaternion, 'YXZ');
// 			if (!this.previousMagicWindowYaw && magicWindowAbsoluteEuler.y !== 0) {
// 				this.previousMagicWindowYaw = magicWindowAbsoluteEuler.y;
// 			}
// 			if (this.previousMagicWindowYaw) {
// 				magicWindowDeltaEuler.x = magicWindowAbsoluteEuler.x;
// 				magicWindowDeltaEuler.y += magicWindowAbsoluteEuler.y - this.previousMagicWindowYaw;
// 				magicWindowDeltaEuler.z = magicWindowAbsoluteEuler.z;
// 				this.previousMagicWindowYaw = magicWindowAbsoluteEuler.y;
// 			}
// 		}
// 	},

// 	/**
// 	 * Translate mouse drag into rotation.
// 	 *
// 	 * Dragging up and down rotates the camera around the X-axis (yaw).
// 	 * Dragging left and right rotates the camera around the Y-axis (pitch).
// 	 */
// 	onMouseMove: function (evt) {
// 		var direction;
// 		var movementX;
// 		var movementY;
// 		var pitchObject = this.pitchObject;
// 		var previousMouseEvent = this.previousMouseEvent;
// 		var yawObject = this.yawObject;

// 		// Not dragging or not enabled.
// 		if (!this.data.enabled || (!this.mouseDown && !this.pointerLocked)) { return; }

// 		// Calculate delta.
// 		if (this.pointerLocked) {
// 			movementX = evt.movementX || evt.mozMovementX || 0;
// 			movementY = evt.movementY || evt.mozMovementY || 0;
// 		} else {
// 			movementX = evt.screenX - previousMouseEvent.screenX;
// 			movementY = evt.screenY - previousMouseEvent.screenY;
// 		}
// 		this.previousMouseEvent.screenX = evt.screenX;
// 		this.previousMouseEvent.screenY = evt.screenY;

// 		// Calculate rotation.
// 		direction = this.data.reverseMouseDrag ? 1 : -1;
// 		yawObject.rotation.y += movementX * 0.002 * direction;
// 		pitchObject.rotation.x += movementY * 0.002 * direction;
// 		pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
// 	},

// 	/**
// 	 * Register mouse down to detect mouse drag.
// 	 */
// 	onMouseDown: function (evt) {
// 		var sceneEl = this.el.sceneEl;
// 		if (!this.data.enabled || !this.data.mouseEnabled || ((sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) && sceneEl.checkHeadsetConnected())) { return; }
// 		// Handle only primary button.
// 		if (evt.button !== 0) { return; }

// 		if(evt.stopPropagation) evt.stopPropagation();
// 		if(evt.preventDefault) evt.preventDefault();
// 		evt.cancelBubble=true;
// 		evt.returnValue=false;

// 		var canvasEl = sceneEl && sceneEl.canvas;

// 		this.mouseDown = true;
// 		this.previousMouseEvent.screenX = evt.screenX;
// 		this.previousMouseEvent.screenY = evt.screenY;
// 		this.showGrabbingCursor();

// 		if (this.data.pointerLockEnabled && !this.pointerLocked) {
// 			if (canvasEl.requestPointerLock) {
// 				canvasEl.requestPointerLock();
// 			} else if (canvasEl.mozRequestPointerLock) {
// 				canvasEl.mozRequestPointerLock();
// 			}
// 		}
// 	},

// 	/**
// 	 * Shows grabbing cursor on scene
// 	 */
// 	showGrabbingCursor: function () {
// 		this.el.sceneEl.canvas.style.cursor = 'grabbing';
// 	},

// 	/**
// 	 * Hides grabbing cursor on scene
// 	 */
// 	hideGrabbingCursor: function () {
// 		this.el.sceneEl.canvas.style.cursor = '';
// 	},

// 	/**
// 	 * Register mouse up to detect release of mouse drag.
// 	 */
// 	onMouseUp: function () {
// 		this.mouseDown = false;
// 		this.hideGrabbingCursor();
// 	},

// 	/**
// 	 * Register touch down to detect touch drag.
// 	 */
// 	onTouchStart: function (evt) {
// 		if (evt.touches.length !== 1 ||
// 				!this.data.touchEnabled ||
// 				this.el.sceneEl.is('vr-mode') ||
// 				this.el.sceneEl.is('ar-mode')) { return; }
// 		this.touchStart = {
// 			x: evt.touches[0].pageX,
// 			y: evt.touches[0].pageY
// 		};
// 		this.touchStarted = true;
// 	},

// 	/**
// 	 * Translate touch move to Y-axis rotation.
// 	 */
// 	onTouchMove: function (evt) {
// 		var direction;
// 		var canvas = this.el.sceneEl.canvas;
// 		var deltaY;
// 		var yawObject = this.yawObject;

// 		if (!this.touchStarted || !this.data.touchEnabled) { return; }

// 		deltaY = 2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x) / canvas.clientWidth;

// 		direction = this.data.reverseTouchDrag ? 1 : -1;
// 		// Limit touch orientation to to yaw (y axis).
// 		yawObject.rotation.y -= deltaY * 0.5 * direction;
// 		this.touchStart = {
// 			x: evt.touches[0].pageX,
// 			y: evt.touches[0].pageY
// 		};
// 	},

// 	/**
// 	 * Register touch end to detect release of touch drag.
// 	 */
// 	onTouchEnd: function () {
// 		this.touchStarted = false;
// 	},

// 	/**
// 	 * Save pose.
// 	 */
// 	onEnterVR: function () {
// 		var sceneEl = this.el.sceneEl;
// 		if (!sceneEl.checkHeadsetConnected()) { return; }
// 		this.saveCameraPose();
// 		this.el.object3D.position.set(0, 0, 0);
// 		this.el.object3D.rotation.set(0, 0, 0);
// 		if (sceneEl.hasWebXR) {
// 			this.el.object3D.matrixAutoUpdate = false;
// 			this.el.object3D.updateMatrix();
// 		}
// 	},

// 	/**
// 	 * Restore the pose.
// 	 */
// 	onExitVR: function () {
// 		if (!this.el.sceneEl.checkHeadsetConnected()) { return; }
// 		this.restoreCameraPose();
// 		this.previousHMDPosition.set(0, 0, 0);
// 		this.el.object3D.matrixAutoUpdate = true;
// 	},

// 	/**
// 	 * Update Pointer Lock state.
// 	 */
// 	onPointerLockChange: function () {
// 		this.pointerLocked = !!(document.pointerLockElement || document.mozPointerLockElement);
// 	},

// 	/**
// 	 * Recover from Pointer Lock error.
// 	 */
// 	onPointerLockError: function () {
// 		this.pointerLocked = false;
// 	},

// 	// Exits pointer-locked mode.
// 	exitPointerLock: function () {
// 		document.exitPointerLock();
// 		this.pointerLocked = false;
// 	},

// 	/**
// 	 * Toggle the feature of showing/hiding the grab cursor.
// 	 */
// 	updateGrabCursor: function (enabled) {
// 		var sceneEl = this.el.sceneEl;

// 		function enableGrabCursor () { sceneEl.canvas.classList.add('a-grab-cursor'); }
// 		function disableGrabCursor () { sceneEl.canvas.classList.remove('a-grab-cursor'); }

// 		if (!sceneEl.canvas) {
// 			if (enabled) {
// 				sceneEl.addEventListener('render-target-loaded', enableGrabCursor);
// 			} else {
// 				sceneEl.addEventListener('render-target-loaded', disableGrabCursor);
// 			}
// 			return;
// 		}

// 		if (enabled) {
// 			enableGrabCursor();
// 			return;
// 		}
// 		disableGrabCursor();
// 	},

// 	/**
// 	 * Save camera pose before entering VR to restore later if exiting.
// 	 */
// 	saveCameraPose: function () {
// 		this.savedPose.position.copy(this.el.object3D.position);
// 		this.savedPose.rotation.copy(this.el.object3D.rotation);
		
// 		this.hasSavedPose = true;
// 	},

// 	/**
// 	 * Reset camera pose to before entering VR.
// 	 */
// 	restoreCameraPose: function () {
// 		if (!this.hasSavedPose) { return; }

// 		// Reset camera orientation.
// 		this.el.object3D.position.copy(this.savedPose.position);
// 		this.el.object3D.rotation.copy(this.savedPose.rotation);
		
// 		this.hasSavedPose = false;
// 	}
// });
// //END custom look-controls


