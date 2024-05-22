


//START Global Variables
let devMode = false;
const dirPath_Files = './files/';
const dirPath_CollectionJSON = 'json/handgemacht-collection.json';
let loadCV = false;
let primaryKey;

var loader = new THREE.GLTFLoader();
const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath( './draco/' );
loader.setDRACOLoader( dracoLoader );

//END Global Variables



//START Search URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
urlParams.get('dev')==='true' ? devMode=true : devMode=false;
urlParams.get('m')==='c' ? loadCV=true : loadCV=false;
//END Search URL Parameters



//START DOM Manipulation 
window.addEventListener("DOMContentLoaded", () => {
	devMode && document.querySelector('a-scene').setAttribute('stats', '');
});
//END DOM Manipulation



//START A-Frame load-json-objects
AFRAME.registerComponent('load-json-models', {
		
		schema: {
			//message: {type: 'string', default: 'Hello, World!'}
		},

		init: function () {
			const comp = this;

			//create category model 
			this.categoryModelEl = document.createElement('a-entity');
			this.categoryModelEl.setAttribute('id', 'category-model');
			this.categoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 2');
			this.categoryModelEl.setAttribute('material', 'color: #FFC800; shader: flat');
			this.categoryModelEl.setAttribute('visible', false);
			this.el.sceneEl.appendChild(this.categoryModelEl);

			comp.loadJSONObjects();

			this.el.sceneEl.addEventListener("JSON-models-loaded", (e) => {
				devMode && console.log('dev --- JSON-models-loaded', e);
				comp.assignModelsToNodes();	
			}, {once: true});
		},

		update: function () {},

		tick: function () {},

		remove: function () {},

		pause: function () {},

		play: function () {}, 

		getDataFromJSON: function (json) {
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
		
			//nodes from categorys 
			for(let category of json.categorylist){
				let newCategory = { 
					'id': category, 
					'category': category, 
					'name': category, 
					'type': 'node-category',
					'color': '#FFC800',
					'opacity': 1, 
					'val': 0.1, 
					'gltf': '' 
				};
				if(category !== ''){
					fgData.nodes.push(newCategory);
				}
			}
		
			//nodes from objects
			for(let object of json.objects){
				let newObject = { 
					'id': object.primaryKey, 
					'category': object.categorys[0], 
					'name': object.name, 
					'type': 'node-object',
					'color': '#000000', 
					'opacity': 0, 
					'val': 0, 
					'gltf': ''
				};
				fgData.nodes.push(newObject);
			}
		
			//links by categorys
			for(let category of json.categorylist){
				for(let object of json.objects){
					if(containsObject(category, object.categorys)){
						let newLink = { 
							'source': category, 
							'target': object.primaryKey, 
							'name': category,
							'type': 'link-category',
							'value': 0,
							'color': '#FFC800'
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
								'value': 0,
								'color': '#46AAC8'
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
						let index = fgData.links.indexOf(bLink);
						fgData.links.splice(index-1, 1);
					}
				}
			}
		
			return fgData;
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
								devMode && console.log( ( 'dev --- load model: ' + object.name + ' - ' + xhr.loaded / xhr.total * 100 ) + '% loaded' );
							}, (error) => {		
								console.log( 'An error happened: ' + error );
							});
						}
					}

					//translate json to forcegraph data
					fgData = this.getDataFromJSON(json);
					devMode && console.log('dev --- forcegraph Data: ', fgData);

					//stringify fgData to JSON 
					let newNodes = JSON.stringify(fgData.nodes);
					let newLinks = JSON.stringify(fgData.links);
						
					//create a-entity forcegraph
					let newEntity = document.createElement('a-entity');
					this.el.sceneEl.appendChild(newEntity);
					newEntity.setAttribute('id', 'forcegraph');
					newEntity.setAttribute('forcegraph', {
						nodes: newNodes,
						links: newLinks,
						warmupTicks: 1000,
						cooldownTicks: 1,
						linkWidth: 0.3,
						linkCurvature: 0.15,
						linkThreeObjectExtend: true,
						nodeRelSize: 6,
						nodeThreeObjectExtend: true,
						nodeOpacity: 0,
						onLinkHover: link => { 
							fgTooltipHandler(link);
						},
						onLinkClick: link => { 
							devMode && console.log('dev --- onLinkClick: ', link);
						},
						onNodeHover: node => { 
							fgTooltipHandler(node);
						},
						onNodeClick: node => { 
							document.querySelector('a-camera').setAttribute('camera-focus-target', {target: node, distance: 60}); 
							let event = new Event('camera-focus-target');
							document.querySelector('a-camera').dispatchEvent(event);
						}
					});
					THREE.DefaultLoadingManager.onLoad = function () {
						let event = new Event('JSON-models-loaded');
						document.querySelector('a-scene').dispatchEvent(event);
					};
				});
		}, 

		assignModelsToNodes: function () {
			let sceneEl = document.querySelector('a-scene');
			let scene = document.querySelector('a-scene').object3D;
			let fgComp = document.querySelector('#forcegraph').getAttribute('forcegraph');

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
						let normFactor = 0.3;
						let scaleFactor = 0.03;
						let normScale = (1 / (maxSize+normFactor)) * scaleFactor;
						thisChild.children[0].scale.set(normScale,normScale,normScale);
						//devMode && console.log('dev --- normScale: ', normScale);
						
						thisNode.gltf = thisChild.children[0];
						devMode && console.log('dev --- thisNode: ', thisNode);
					}else if(thisNode.id != '' && thisChild.name != '' && thisNode.type === 'node-category' ){
						thisNode.gltf = sceneEl.querySelector('#category-model').object3D.children[0].clone();
						devMode && console.log('dev --- thisNode: ', thisNode);
					}
				}
			}

			document.querySelector('#forcegraph').setAttribute('forcegraph', {
				nodeThreeObject: node => { return node.gltf; }
			});

		}

});
//END A-Frame load-json-objects



//START camera-focus-target
AFRAME.registerComponent('camera-focus-target', {

	schema: {
		target: { type: 'model', default: '' },
		distance: { type: 'number', default: 60 }
	},

	init: function () {
		this.cameraEl = this.el;
		this.camera = this.el.object3D;

		//create focus element in camera reference frame and look at target
		this.focusEl = document.createElement('a-entity');
		this.focus = this.focusEl.object3D;
		this.el.sceneEl.appendChild(this.focusEl);

		//set camera-vars for event listener context
		let cameraEl = this.cameraEl;
		let camera = this.camera;

		this.cameraEl.addEventListener('camera-focus-target', (e) => {
			this.cameraFocusTarget();
		})

		this.cameraEl.addEventListener('animationcomplete__cptt-z', (e) => {
			cameraEl.removeAttribute('animation__cmtt-x');
			cameraEl.removeAttribute('animation__cmtt-y');
			cameraEl.removeAttribute('animation__cmtt-z');
			cameraEl.removeAttribute('animation__cptt-x');
			cameraEl.removeAttribute('animation__cptt-y');
			cameraEl.removeAttribute('animation__cptt-z');
			devMode && console.log('dev --- animationcomplete', e);
			let cameraWorldPosition = new THREE.Vector3();
			camera.getWorldPosition(cameraWorldPosition);
			cameraEl.setAttribute('look-controls', {enabled: true, orientation: {'position': cameraWorldPosition, 'rotation': camera.rotation}});
			cameraEl.setAttribute('wasd-controls', {enabled: true});
		});
	},

	update: function () {},

	tick: function () {},

	remove: function () {},

	pause: function () {},

	play: function () {},

	cameraFocusTarget: function() {
		devMode && console.log('dev --- camera-focus-target --- this', this);
		this.target = this.data.target.__threeObj;
		
		this.cameraEl.setAttribute('look-controls', {enabled: false});
		this.cameraEl.setAttribute('wasd-controls', {enabled: false});

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
			'dur': 2500, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});	

		//animation camera move to target y
		this.cameraEl.setAttribute('animation__cmtt-y', {
			'property': 'object3D.position.y',
			'from': this.camera.position.y,
			'to': newCameraPosition.y,
			'dur': 2500, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});	

		//animation camera move to target z
		this.cameraEl.setAttribute('animation__cmtt-z', {
			'property': 'object3D.position.z',
			'from': this.camera.position.z,
			'to': newCameraPosition.z,
			'dur': 2500, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});	
		
		//rotation values
		let newCameraRotX = (newCameraRotation.x*180)/Math.PI;
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
		this.cameraEl.setAttribute('animation__cptt-x', {
			'property': 'object3D.rotation.x',
			'from': cameraRotX,
			'to': newCameraRotX,
			'dur': 2500, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});

		//animation camera point to focus Y
		this.cameraEl.setAttribute('animation__cptt-y', {
			'property': 'object3D.rotation.y',
			'from': cameraRotY,
			'to': newCameraRotY,
			'dur': 2500, 
			'easing': 'easeInOutQuad',
			'startEvent': 'anim-camera-focus-target'
		});

		//animation camera point to focus Z
		this.cameraEl.setAttribute('animation__cptt-z', {
			'property': 'object3D.rotation.z',
			'from': cameraRotZ,
			'to': newCameraRotZ,
			'dur': 2500, 
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
	}

});
//END camera-focus-target



//START fgTooltipHandler
function fgTooltipHandler(fgData) {
	let tooltip = document.querySelector('#forcegraph-tooltip');
	
	function isTouchDevice() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}

	const move = (e) => {
		try {
			var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
			var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
		} catch (e) {}

		tooltip.style.left = x + 25 + "px";
		tooltip.style.top = y + 25 + "px";
	};

	document.addEventListener("mousemove", (e) => {
	  move(e);
	});
	document.addEventListener("touchmove", (e) => {
	  move(e);
	});

	let type = '';
	fgData ? type = fgData.type : type = 'none';

	let tooltipType = '';
	let tooltipContent = '';

	type === 'link-category' || type === 'link-tag' ? tooltipType = 'Link' : '';
	type === 'node-object' ? tooltipType = 'Objekt' : '';
	type === 'node-category' ? tooltipType = 'Kategorie' : '';

	fgData ? tooltipContent=fgData.name : tooltipContent='';

	let tooltipInnerHTML = '<div class="type">' + tooltipType + '</div><div class="content">' + tooltipContent + '</div>'

	if(type !== 'none'){
		tooltip.classList.remove('hide');
		tooltip.innerHTML = tooltipInnerHTML;
	}else{
		tooltip.classList.add('hide');
	}
}
//END fgTooltipHandler



//START custom look-controls
/* global DeviceOrientationEvent	*/
delete AFRAME.components['look-controls']
var registerComponent = AFRAME.registerComponent;
//var THREE = window.THREE;
var utils = AFRAME.utils;

// To avoid recalculation at every mouse movement tick
var PI_2 = Math.PI / 2;

/**
 * look-controls. Update entity pose, factoring mouse, touch, and WebVR API data.
 */
AFRAME.registerComponent('look-controls', {
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
