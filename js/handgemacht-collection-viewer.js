
import { app } from './handgemacht-main.js';

//START Global Variables
const dirPath_CollectionJSON = 'json/handgemacht-collection.json';

var loader = new THREE.GLTFLoader();
const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath( './draco/' );
loader.setDRACOLoader( dracoLoader );
//END Global Variables




//START A-Frame load-json-objects
AFRAME.registerComponent('load-json-models', {
		
		schema: { 
			scaleFactor: { default: 1 }, 
			normalization: { default: 0 } 
		},

		init: function () {
			const comp = this;
			this.nodeModelSet = false;
			this.linkMaterialSet = false;
			this.scaleFactor = this.data.scaleFactor;
			this.normalization = this.data.normalization;
			this.cameraPos = new THREE.Vector3();

			this.setEventlisteners();
			this.createCategoryAndTagModels();
			this.createForceGraph();
			this.loadJSONModels();
		},

		update: function () {
			this.fgComp = document.querySelector('#forcegraph').getAttribute('forcegraph');
			this.scaleFactor = this.data.scaleFactor;
			this.normalization = this.data.normalization;
			//app.dev && console.log('dev --- scaleFactor: ', this.scaleFactor);
			//app.dev && console.log('dev --- normalization: ', this.normalization);
			if(this.nodeModelSet){
				this.normalizeScale(this.scaleFactor, this.normalization);
			}
		},

		tick: function () {
			if(this.nodeModelSet && this.fgComp){
				for(let node of this.fgComp.nodes){
					if(node.type === 'node-category' && node.__threeObj) {
						this.el.sceneEl.camera.getWorldPosition(this.cameraPos);
						node.__threeObj.lookAt(this.cameraPos);
					}
				}
			}
		},

		remove: function () {},

		pause: function () {},

		play: function () {}, 

		setEventlisteners: function() {
			const comp = this;

			//listen for filter-updated event
			this.el.sceneEl.addEventListener('filter-updated', (e) => {
				comp.assignModelsToNodes();	
				comp.assignMaterialToLinks();
				comp.normalizeScale(this.scaleFactor, this.normalization);
				document.querySelector('#forcegraph').setAttribute('highlight', {noUpdate: false});
				app.gui.loadingScreen.hideLoadingScreen();
			});

			//listen for JSON-models-loaded event
			this.el.sceneEl.addEventListener('JSON-models-loaded', (e) => {
				
				if(comp.json) {
					//prepare JSON data for forcegraph
					comp.fgData = comp.getDataFromJSON(comp.json);
					//parse forcegraph data to app.collectionViewer
					app.collectionViewer.proxyfgData.data = comp.fgData;
					//filter forcegraph data for default view
					comp.filterFgData(comp.fgData, comp.fgData.taglist, comp.fgData.categorylist); //default: all tags, all categories
				}
			}, {once: true});
		},

		createCategoryAndTagModels: function() {
			this.imgCategory = document.createElement('img');
			this.imgCategory.id = 'icon-category';
			this.imgCategory.crossOrigin = 'anonymous';
			this.imgCategory.src = app.assets.cv.marker['category'].src;
			this.el.sceneEl.querySelector('a-assets').appendChild(this.imgCategory);
			
			//create category model 
			this.categoryModelEl = document.createElement('a-entity');
			this.categoryModelEl.setAttribute('id', 'category-model');
			this.categoryModelEl.setAttribute('geometry', 'primitive: circle; radius: 5');
			this.categoryModelEl.setAttribute('material', 'src: #icon-category');
			this.categoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.categoryModelEl);

			//create link category model 
			this.linkCategoryModelEl = document.createElement('a-entity');
			this.linkCategoryModelEl.setAttribute('id', 'link-category-model');
			this.linkCategoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 1');			
			this.linkCategoryModelEl.setAttribute('material', 'color: #46AAC8; shader: flat; opacity: 0.4, transparent: true');
			this.linkCategoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.linkCategoryModelEl);

			//create link tag model 
			this.linkTagModelEl = document.createElement('a-entity');
			this.linkTagModelEl.setAttribute('id', 'link-tag-model');
			this.linkTagModelEl.setAttribute('geometry', 'primitive: sphere; radius: 1');			
			this.linkTagModelEl.setAttribute('material', 'color: #FFC800; shader: flat; opacity: 0.4, transparent: true');
			this.linkTagModelEl.setAttribute('visible', false);
			this.el.sceneEl.querySelector('a-assets').appendChild(this.linkTagModelEl);
		},

		loadJSONModels: function () {
			const fgData = '';
			const fileJSON = app.filepaths.files + dirPath_CollectionJSON;

			//fetch json data from file
			const objectsJSON = fetch(fileJSON)
				.then((response) => response.json())
				.then((json) => {
					this.json = json;
					//load models to scene
					const scene = document.querySelector('a-scene').object3D;
					for(let object of json.objects){
						if(object.quality512){
							loader.load(app.filepaths.files + object.quality512, (gltf) => {
								gltf.scene.name = object.primaryKey;
								gltf.scene.altName = object.name;
								gltf.scene.visible = false;
								scene.add( gltf.scene );
							}, (xhr) =>{ 
								//app.dev && console.log( ( 'dev --- load model: ' + object.name + ' - ' + xhr.loaded / xhr.total * 100 ) + '% loaded' );
							}, (error) => {		
								console.log( 'An error happened: ' + error );
							});
						}
					}

					//event dispatcher for JSON-models-loaded event
					THREE.DefaultLoadingManager.onLoad = function () {
						let event = new Event('JSON-models-loaded');
						document.querySelector('a-scene').dispatchEvent(event);
					};
				});
		},

		getDataFromJSON: function (json) {
			if(!this.json) {return;};
			const fgData={ 'nodes': [], 'links': [], 'categorylist': [], 'taglist': [] };

			function filterEmptyTag(tag){
				return tag !== '';
			}

			function containsObject(obj, list) {
				for(let item of list){
					if (item === obj) {
						return true;
					}
				}
				return false;
			}

			function filterDoubles(link) {
				return link.double == false || link.type == 'link-category';
			}
		
			//create nodes from categories 
			for(let category of json.categorylist){
				if(category === '') { continue; }
				const newNode = {}
				newNode.id = category;
				newNode.categories = [category];
				newNode.name = category;
				newNode.type = 'node-category';
				newNode.tags = [];
				newNode.size = 0;
				newNode.model = '';
				fgData.nodes.push(newNode);
			}
		
			//create nodes from objects
			for(let object of json.objects){
				const newNode = {}
				newNode.id = object.primaryKey;
				newNode.categories = object.categories;
				newNode.name = object.name;
				newNode.type = 'node-object';
				newNode.tags = object.tags.filter(filterEmptyTag);
				newNode.size = 100;
				newNode.model = ''
				fgData.nodes.push(newNode);
			}
		
			//create links for categories
			for(let category of json.categorylist){
				for(let object of json.objects){
					if(containsObject(category, object.categories)){
						const newLink = {};
						newLink.source = category; 
						newLink.target = object.primaryKey; 
						newLink.name = category;
						newLink.type = 'link-category';
						newLink.material = '';
						fgData.links.push(newLink);
					}
				}
			}
		
			//create links for tags
			for(let objectSource of json.objects){
				for(let tag of objectSource.tags){
					for(let objectTarget of json.objects){
						if(objectSource !== objectTarget && tag !== '' && containsObject(tag, objectTarget.tags)) {
							const newLink = {}; 
							newLink.source = objectSource.primaryKey; 
							newLink.target = objectTarget.primaryKey; 
							newLink.name = tag;
							newLink.type = 'link-tag';
							newLink.material = '';
							fgData.links.push(newLink);
						}
					}
				}
			}
			
			//mark doubled link
			for(let linkA of fgData.links){
				let sourceA = linkA.source;
				let targetA = linkA.target;
				for(let linkB of fgData.links){
					let sourceB = linkB.source;
					let targetB = linkB.target;
					if(sourceA === targetB && targetA === sourceB){
						linkA.double = true;
						linkB.double = false;
					}
				}
			}

			//remove marked doubled links
			fgData.links = fgData.links.filter(filterDoubles);

			fgData.categorylist = json.categorylist;
			fgData.taglist = json.taglist;
		
			return fgData;
		},

		filterFgData: function(fgData, tags = [], categories = []) {
			let filteredFgData = { 'nodes': [], 'links': [] };

			app.dev && console.log('dev --- forcegraph filter Data tags: ', tags);
			app.dev && console.log('dev --- forcegraph filter Data categories: ', categories);

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

		createForceGraph: function() {
			//create a-entity forcegraph
			let forcegraphEntity = document.createElement('a-entity');
			this.el.sceneEl.appendChild(forcegraphEntity);
			forcegraphEntity.setAttribute('id', 'forcegraph');
			forcegraphEntity.setAttribute('highlight', { noUpdate: true });
			forcegraphEntity.setAttribute('forcegraph', {
				forceEngine: 'd3', //'d3' (default) or 'ngraph'
				warmupTicks: 2000,
				cooldownTicks: 0,
				d3AlphaMin: 0.5,
				d3AlphaDecay: 0.028,
				d3VelocityDecay: 0.6,
				linkWidth: 0.6,
				linkCurvature: 0.15,
				linkThreeObjectExtend: false,
				nodeRelSize: 1,
				nodeVal: node => { return node.size },
				nodeThreeObject: node => {
					node.material.visible = false;
				},
				nodeThreeObjectExtend: true,
				nodeOpacity: 0,
				onLinkHover: link => { 
					app.collectionViewer.tooltip.mouseoverHandler(link);
					//app.dev && console.log('dev --- onLinkHover: ', link);
				},
				onLinkClick: link => { 
					//app.dev && console.log('dev --- onLinkClick: ', link);
				},
				onNodeHover: node => { 
					app.collectionViewer.tooltip.mouseoverHandler(node);
					//app.dev && console.log('dev --- onNodeHover: ', node);
				},
				onNodeClick: node => { 
					//app.dev && console.log('dev --- onNodeClick: ', node);
					if(document.querySelector('a-camera').components['orbit-controls'].hasUserInput) {return;}
					document.querySelector('a-camera').setAttribute('camera-focus-target', {target: node, duration: 1200});
					app.collectionViewer.highlight.onclickHandler(node);
					forcegraphEntity.setAttribute('highlight', {source: node});
				}
			});
		},

		assignModelsToNodes: function () {
			const scene = document.querySelector('a-scene').object3D;
			if(!this.fgComp.nodes){ return; }
			const fgComp = this.fgComp;
			this.categoryArray = [];

			const categoryModel = this.categoryModelEl.object3D;

			//set JSON-model or category-model for each node
			for(let node of fgComp.nodes){
				if(node.id === ''){continue;}
				for (let child of scene.children){
					if(child.name === ''){continue;}
					//set model for objects
					if(child.name === node.id && node.type === 'node-object'){
						node.model = child.children[0].clone();
					}
					//set model for categories
					if(node.type === 'node-category'){
						node.model = categoryModel.children[0].clone();
						node.model.material = new THREE.MeshBasicMaterial();
						node.model.material.copy(categoryModel.children[0].material);
					}
					//skip if no model was set
					if(!node.model) {continue;}
				}
			}

			document.querySelector('#forcegraph').setAttribute('forcegraph', {
				nodeThreeObject: node => { return node.model }
			});

			this.nodeModelSet = true;
		}, 

		assignMaterialToLinks: function () {
			let scene = document.querySelector('a-scene').object3D;
			if(!this.fgComp.links){ return; }
			const fgComp = this.fgComp;

			let categoryMaterial = this.linkCategoryModelEl.object3D.children[0].material;
			let tagMaterial = this.linkTagModelEl.object3D.children[0].material;

			//set tag-material or category-material for each link
			for(let link of fgComp.links){
				if(link.type === 'link-category'){
					link.material = new THREE.MeshBasicMaterial();
					link.material.copy(categoryMaterial);
				}else if(link.type === 'link-tag'){
					link.material = new THREE.MeshBasicMaterial();
					link.material.copy(tagMaterial);
				}
			}

			document.querySelector('#forcegraph').setAttribute('forcegraph', {
				linkMaterial: link => { return link.material }
			});

			this.linkMaterialSet = true;
		},

		normalizeScale: function(scaleFactor, normalization) {
			if(typeof scaleFactor !== 'number'){
				app.dev && console.log('dev --- normalizeScale error! > scaleFactor is not a Number! Setting factor to 1. Old value: ', scaleFactor);
				scaleFactor = 1;
			}
			if(typeof normalization !== 'number'){
				app.dev && console.log('dev --- normalizeScale error! > normalization is not a Number! Setting factor to 0. Old value: ', normalization);
				normalization = 0;
			}

			//normalization must range from 0 to 1
			if(normalization > 1){
				normalization = 1;
			}else if( normalization < 0) {
				normalization = 1;
			}

			const mapToRange = (number, [inputMinRange, inputMaxRange], [outputMinRange, outputMaxRange]) => {
				return (number - inputMinRange) / (inputMaxRange - inputMinRange) * (outputMaxRange - outputMinRange) + outputMinRange;
			}

			if(!this.fgComp.nodes){ return; }
			const fgComp = this.fgComp;

			let sizeLog = {
				mean: 0,
				min: Infinity, 
				minObject: '',
				max: 0, 
				maxObject: ''
			}

			//find mean, max and min sizes of every non category model bounding box
			for(let node of fgComp.nodes){
				if(node.type === 'node-category') { continue; };

				node.model.scale.set(1, 1, 1);
				node.boundingBox = new THREE.Box3();
				node.boundingBox.size = new THREE.Vector3();
				node.boundingBox.setFromObject(node.model).getSize(node.boundingBox.size);

				//find highest value of x, y, z in bounding box of object
				node.boundingBox.size.max = node.boundingBox.size.x;
				node.boundingBox.size.y > node.boundingBox.size.max ? node.boundingBox.size.max = node.boundingBox.size.y : '';
				node.boundingBox.size.z > node.boundingBox.size.max ? node.boundingBox.size.max = node.boundingBox.size.z : '';
				sizeLog.mean += node.boundingBox.size.max;
				if(sizeLog.min > node.boundingBox.size.max) {
					sizeLog.min = node.boundingBox.size.max;
					sizeLog.minObject = node;
				}
				if(sizeLog.max < node.boundingBox.size.max) {
					sizeLog.max = node.boundingBox.size.max;
					sizeLog.maxObject = node;
				}
			}
			sizeLog.mean = sizeLog.mean / fgComp.nodes.length;

			//calculate normalized scale for every node and set node size
			for(let node of fgComp.nodes){
				if(node.type === 'node-category') { 
					node.size = sizeLog.mean * 10 * scaleFactor;
					continue;
				};
				const sizeDeviation = sizeLog.mean - node.boundingBox.size.max;
				const sizeFactor = 1 + mapToRange(sizeDeviation, [sizeLog.min, sizeLog.max], [0, 1]); // range from 0 to 2 with 1 as median
				const normFactor = normalization * sizeFactor;
				const normalizedScale = scaleFactor * ((1 + normFactor) - normalization);
				//app.dev && console.log(`dev --- normalizeScale node: ${node.name} > \nnormalization: ${normalization}, \nsizeFactor: ${sizeFactor}, \nnormFactor: ${normFactor}, \nscaleFactor: ${scaleFactor}, \nnormalizedScale: ${normalizedScale}`);
				node.model.scale.set(normalizedScale, normalizedScale, normalizedScale);
			}

			app.dev && console.log(`dev --- normalizeScale > \nsizeLog: `, sizeLog);
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
		//app.dev && console.log('dev --- camera-focus-target: ', this.data.target);
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
		source: { default: '' }, 
		highestDistance: { default: 0 }, 
		noUpdate: { default: null }
	}, 

	init: function () {
		this.cameraEl = document.querySelector('a-camera');
		this.camera = document.querySelector('a-camera').object3D;
		this.data.highestDistance = {
			max: 110,
			value: 0
		}
	},

	update: function () {
		let source = this.data.source;
		this.fgComp = this.el.components.forcegraph.data;

		if(this.data.noUpdate){
			return;
		};
		this.data.noUpdate = null;

		let newDistance = 0;
		let newDesiredCameraTilt = 0;
		let newDesiredDistance = 0
		let newTarget = '';
		let newHighestDistance = 0;

		if(!source) {
			this.resetHighlight();
			newTarget = document.querySelector('#forcegraph').object3D.position;
			newHighestDistance = this.data.highestDistance.max;
			newDesiredCameraTilt = -5;
		}

		if(source.type === 'node-object' || source.type === 'node-category') {
			this.highlightModel(source);
			newTarget = this.data.source.__threeObj.position;
			newHighestDistance = this.data.highestDistance.value;
			newDesiredCameraTilt = -12;
		}

		if(source.type === 'link-tag' || source.type === 'link-category') {
			return;
		}

		newDistance = this.camera.position.distanceTo(newTarget);

		if(screen.orientation.type === 'landscape-primary') {
			newDesiredDistance = newHighestDistance * (2 * (newHighestDistance / window.innerWidth)) + newHighestDistance;
		}else{
			newDesiredDistance = newHighestDistance * (5 * (newHighestDistance / window.innerWidth)) + newHighestDistance;
		}

		const distanceLog = {
			newDistance: newDistance,
			newDesiredDistance: newDesiredDistance,
			highestDistance: newHighestDistance,
			screenOrientation: screen.orientation.type, 
			windowInnerWidth: window.innerWidth
		}

		app.dev && console.log('dev -- camera-focus-target > distanceLog: ', distanceLog)

		this.cameraEl.setAttribute('orbit-controls', { 
			autoRotate: false, 
			distance: newDistance, 
			desiredDistance: newDesiredDistance, 
			pitchCamera: true, 
			desiredCameraPitch: 0, 
			desiredCameraTilt: newDesiredCameraTilt, 
			forceUpdate: true 
		});

		this.data.highestDistance.value = 0;
	},

	tick: function () {
		if(this.data.source){

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
		}
	},

	remove: function () {},

	pause: function () {},

	play: function () {},

	highlightLinks: function (sourceLink) {
		let fgComp = this.fgComp;

		for(let link of fgComp.links){
			if (link.material) {
				if(link.name === sourceLink.name){
					link.material.opacity = 1;
					link.material.visible = true;
				}else{
					link.material.visible = false;
				}
			}
		}

		for(let node of fgComp.nodes){
			if (node.id != '' && node.model.material) {
				if(node.tags.includes(sourceLink.name)){
					node.model.material.opacity = 1;
					node.model.material.visible = true;
				}else{
					node.model.material.visible = false;
				}
			}
		}
	}, 

	highlightModel: function (sourceNode) {
		let fgComp = this.fgComp;
		let distance = 0;

		let modelArray = [];

		for(let link of fgComp.links){
			if (link.material) {
				if(link.source.id === sourceNode.id || link.target.id === sourceNode.id){
					link.material.opacity = 1;
					link.material.visible = true;
					modelArray.push(link.source.id);
					modelArray.push(link.target.id);
				}else{
					link.material.visible = false;
				}
			}
		}

		for(let node of fgComp.nodes){
			if (node.id != '' && node.model.material && typeof node.__threeObj !== 'undefined' && typeof sourceNode.__threeObj !== 'undefined') {
				distance = node.__threeObj.position.distanceTo(sourceNode.__threeObj.position);
				if(modelArray.includes(node.id)){
					node.model.material.opacity = 1;
					node.model.material.visible = true;
					this.setHighestDistance(distance);
					node.__threeObj.visible = true;
				}else{
					node.model.material.visible = false;
					node.__threeObj.visible = false;
				}
			}
		}
	},

	resetHighlight: function () {
		let fgComp = this.fgComp;

		//app.dev && console.log('dev --- resetHighlight');

		for(let link of fgComp.links){
			if(link.material){
				link.material.opacity = 0.4;
				link.material.visible = true;
			}
		}

		for(let node of fgComp.nodes){
			if (node.id != '' && node.model.material && typeof node.__threeObj !== 'undefined') {
				node.model.material.opacity = 1;
				node.model.material.visible = true;
				let distance = this.data.highestDistance.max;
				this.setHighestDistance(distance);
				node.__threeObj.visible = true;
			}
		}
		document.querySelector('a-camera').setAttribute('camera-focus-target', {target: '', duration: 1200});
	}, 

	setHighestDistance: function(distance = this.data.highestDistance.max) {
		if(typeof distance !== 'number') { return; }
		//app.dev && console.log('dev --- highlight > distance: ', distance);
		if (this.data.highestDistance.value < distance) {
			this.data.highestDistance.value = distance;
			this.data.highestDistance.max = distance;
			//app.dev && console.log('dev --- highlight > new highest distance set: ', distance);
		}
	}, 

	highlightFromPill: function(name, type, active, modelId) {
		let fgComp = this.fgComp;
		let pill = {};
		pill.id = modelId;
		pill.name = name;
		pill.type = type;
		pill.active = active;

		if (active) {
			this.highlightModel(pill);
			return;
		}

		this.highlightLinks(pill);

		if (pill.type === 'category' || pill.type === 'object') {
			for(let node of fgComp.nodes){
				if ((node.type === 'node-category' || node.type === 'node-object') && node.name === pill.name) {
					this.highlightModel(node);
					return;
				}
			}
		}

		if (pill.type === 'tag') {
			for(let link of fgComp.links){
				if (link.type === 'link-tag' && link.name === name) {
					this.highlightLinks(link);
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
		desiredDistance: { default: 300 },
		minDistance: { default: 30 },
		maxDistance: { default: 700 }, 
		autoRotate: { default: true }, 
		autoRotateSpeed: { default: 10 },
		pitchCamera: { default: false },
		desiredCameraPitch: { default: 0 }, 
		cameraTilt: { default: 0 },
		desiredCameraTilt: { default: -5 }, 
		forceUpdate: { default: false }
	},

	init: function () {
		this.touchEventCache = [];
		this.previousDistance = -1;
		this.hasUserInput = false;
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
			app.dev && this.orbitTargetEl.setAttribute('geometry', 'primitive: sphere; radius: 1');
	
			this.target3D = document.querySelector(this.data.target).object3D;
		}
	
		if(this.data.distance) {
			this.distance = this.data.distance;
			this.data.distance = null;
		}

		if(this.data.desiredDistance){
			this.desiredDistance = this.data.desiredDistance;
			this.data.desiredDistance = null;
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

			this.data.forceUpdate && this.update();
			this.data.forceUpdate = false;

			//this.controls.update();
			this.updateOrientation();
			this.updatePosition();
			this.updateCameraTilt();
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
		this.pointerdownHandler = this.pointerdownHandler.bind(this);
		this.pointermoveHandler = this.pointermoveHandler.bind(this);
		this.pointerupHandler = this.pointerupHandler.bind(this);
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
		canvasEl.addEventListener('mousewheel', this.onMouseWheel, app.passiveSupported ? { passive: true } : false);
		canvasEl.addEventListener('MozMousePixelScroll', this.onMouseWheel, app.passiveSupported ? { passive: true } : false); // firefox
	
		// Touch events
		canvasEl.addEventListener('touchstart', this.onTouchStart, app.passiveSupported ? { passive: true } : false);
		canvasEl.addEventListener('touchmove', this.onTouchMove, app.passiveSupported ? { passive: true } : false);
		canvasEl.addEventListener('touchend', this.onTouchEnd);
	
		// Touch pinch events
		canvasEl.addEventListener('pointerdown', this.pointerdownHandler);
		canvasEl.addEventListener('pointermove', this.pointermoveHandler);
	
		canvasEl.addEventListener('pointerup', this.pointerupHandler);
		canvasEl.addEventListener('pointercancel', this.pointerupHandler);
		canvasEl.addEventListener('pointerout', this.pointerupHandler);
		canvasEl.addEventListener('pointerleave', this.pointerupHandler);
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
	
		// Touch pinch events
		canvasEl.removeEventListener('pointerdown', this.pointerdownHandler);
		canvasEl.removeEventListener('pointermove', this.pointermoveHandler);
	
		canvasEl.removeEventListener('pointerup', this.pointerupHandler);
		canvasEl.removeEventListener('pointercancel', this.pointerupHandler);
		canvasEl.removeEventListener('pointerout', this.pointerupHandler);
		canvasEl.removeEventListener('pointerleave', this.pointerupHandler);
	},

	updateOrientation: (function () {
		var hmdEuler = new THREE.Euler();
		hmdEuler.order = 'YXZ';
		return function () {
			var pitchObject = this.pitchObject;
			var yawObject = this.yawObject;
			var desiredCameraPitch = (this.data.desiredCameraPitch * 0.01745);
			var hmdQuaternion = this.calculateHMDQuaternion();
			hmdEuler.setFromQuaternion(hmdQuaternion);
	
			if(this.data.autoRotate){
				yawObject.rotation.y += this.data.autoRotateSpeed * 0.0001;
			}

			if((pitchObject.rotation.x > desiredCameraPitch) && this.data.pitchCamera) {
				pitchObject.rotation.x -= 0.005;
			}
	
			if((pitchObject.rotation.x < desiredCameraPitch) && this.data.pitchCamera) {
				pitchObject.rotation.x += 0.005;
			}

			if((pitchObject.rotation.x < (desiredCameraPitch + 0.01)) && (pitchObject.rotation.x > (desiredCameraPitch - 0.01))) {
				this.data.pitchCamera = false;
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

			if(this.distance > this.desiredDistance) {
				let distFactor = (this.distance - this.desiredDistance)/50;
				this.distance -= 1 + distFactor;
			}
			
			if(this.distance < this.desiredDistance) {
				let distFactor = (this.desiredDistance - this.distance)/50;
				this.distance += 1 + distFactor;
			}
	
			if(this.distance < this.data.minDistance) { 
				this.distance = this.data.minDistance;
				this.desiredDistance = this.data.minDistance; 
			};

			if(this.distance > this.data.maxDistance) { 
				this.distance = this.data.maxDistance;
				this.desiredDistance = this.data.maxDistance; 
			};

			var targetCameraPosition = this.el.object3D.translateOnAxis( new THREE.Vector3(0,0,1), this.distance ).position;
	
			el.setAttribute('position', {
				x: targetCameraPosition.x,
				y: targetCameraPosition.y,
				z: targetCameraPosition.z
			});
		};
	})(),

	updateCameraTilt: function () {
		if(this.data.cameraTilt > this.data.desiredCameraTilt) {
			this.data.cameraTilt -= 0.3;
		}
		
		if(this.data.cameraTilt < this.data.desiredCameraTilt) {
			this.data.cameraTilt += 0.3;
		}
		
		this.el.object3D.rotation.x += (this.data.cameraTilt * 0.01745);
	},

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

		if(!this.hasUserInput) {
			setTimeout(() => {
				this.hasUserInput = true;
			}, 100)
		}
	
		var movementX = event.movementX || event.mozMovementX;
		var movementY = event.movementY || event.mozMovementY;
	
		if (movementX === undefined || movementY === undefined) {
			movementX = event.screenX - previousMouseEvent.screenX;
			movementY = event.screenY - previousMouseEvent.screenY;
		}
		this.previousMouseEvent = event;
	
		yawObject.rotation.y -= movementX * 0.002;
		pitchObject.rotation.x -= movementY * 0.002;
		pitchObject.rotation.x = Math.max(-PI_2/2, Math.min(PI_2/2, pitchObject.rotation.x));
	},

	onMouseDown: function (event) {
		this.mouseDown = true;
		this.previousMouseEvent = event;

		// Stop Auto Rotation
		this.data.autoRotate = false;
	},

	releaseMouse: function () {
		this.mouseDown = false;

		if(this.hasUserInput) {
			setTimeout(() => {
				this.hasUserInput = false;
			}, 300)
		}
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
			this.desiredDistance -= 20;
		} else if (scrollDelta < 0) {
			this.desiredDistance += 20;
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
		this.desiredDistance = this.distance;

		// Stop Auto Rotation
		this.data.autoRotate = false;

		if(!this.hasUserInput) {
			setTimeout(() => {
				this.hasUserInput = true;
			}, 100)
		}
	},

	onTouchMove: function (e) {
		if (e.touches.length !== 1) { return; }
		this.touchMove = true;
		var deltaY;
		var deltaX;
		var yawObject = this.yawObject;
		var pitchObject = this.pitchObject;
		if (!this.touchStarted) { return; }
		deltaY = 2 * Math.PI * (e.touches[0].pageX - this.touchStart.x) / this.el.sceneEl.canvas.clientWidth;
		deltaX = 2 * Math.PI * (e.touches[0].pageY - this.touchStart.y) / this.el.sceneEl.canvas.clientHeight;
	
		// Limits touch orientaion to to yaw (y axis)
		yawObject.rotation.y -= deltaY * 0.5;

		// Limits touch orientation to pitch (x axis)
		pitchObject.rotation.x -= deltaX * 0.5;
		pitchObject.rotation.x = Math.max(-PI_2/2, Math.min(PI_2/2, pitchObject.rotation.x));
	
		this.touchStart = {
			x: e.touches[0].pageX,
			y: e.touches[0].pageY
		};
	},

	onTouchEnd: function () {
		this.touchStarted = false;
		this.touchMove = false;

		if(this.hasUserInput) {
			setTimeout(() => {
				this.hasUserInput = false;
			}, 300)
		}
	}, 

	pointerdownHandler: function (e) {
		if(!this.touchEventCache) {
			this.touchEventCache = [];
		}
		this.touchEventCache.push(e);

		if(!this.hasUserInput) {
			setTimeout(() => {
				this.hasUserInput = true;
			}, 100)
		}
	},

	pointermoveHandler: function (e) {
		let currentDistance = 0;
		let difference = 0;

		const index = this.touchEventCache.findIndex(
			(cachedEvent) => cachedEvent.pointerId === e.pointerId,
		);

		this.touchEventCache[index] = e;

		if (this.touchEventCache.length === 2) {
			let currentDistanceY = Math.abs(this.touchEventCache[0].clientY - this.touchEventCache[1].clientY);
			let currentDistanceX = Math.abs(this.touchEventCache[0].clientX - this.touchEventCache[1].clientX);
			currentDistance = Math.sqrt(currentDistanceY*currentDistanceY  + currentDistanceX*currentDistanceX)
			difference = currentDistance - this.previousDistance;
			if (this.previousDistance > 0) {
				this.desiredDistance -= difference;
			}
			this.previousDistance = currentDistance;
		}
	},

	pointerupHandler: function (e) {
		// Remove this event from the target's cache
		const index = this.touchEventCache.findIndex(
			(cachedEvent) => cachedEvent.pointerId === e.pointerId,
		);

		this.touchEventCache.splice(index, 1);
		// If the number of pointers down is less than two then reset diff tracker
		if (this.touchEventCache.length < 2) {
			this.previousDistance = -1;
		}	

		if(this.hasUserInput) {
			setTimeout(() => {
				this.hasUserInput = false;
			}, 300)
		}
	}
});
//END custom orbit-controls