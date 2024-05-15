


//START Global Variables
//END Global Variables



//START collectionViewerHTML for initCollectionViewer
let appStartHTML=
'<!-- START AR VIEWER -->'
+ '<div class="flex-container">'
+ '  <button id="collection" class="nav">Sammlung</button>'
+ '  <button id="model" class="nav">Modell</button>'
+ '  <button id="ar" class="nav">AR</button>'
+ '</div>'
+ '<!-- END AR VIEWER -->'
//END collectionViewerHTML for initCollectionViewer



//START modelViewerHTML for initViewer
let modelViewerHTML = 
'<!-- START INFO AND UTILITY -->'
+ '<div class="version-container">Version: a0.7-2024/04/24</div>'
+ '<div class="logo-container">'
+ '  <img src="assets/hand.gemacht Logo-kohlegrau.svg" alt="hand.gemacht Logo" class="logo" width="100px" height="100px">'
+ '</div>'
+ '<div class="loading-animation-container" style="position: absolute; display: flex; align-items: center; justify-content: center; width: 100%; height: 100vh; pointer-events: none;">'
+ '  <object type="image/svg+xml" data="assets/hand.gemacht loading.svg" alt="hand.gemacht Lade-Animation" class="loading-animation" width="100px" height="100px"></object>'
+ '</div>'
+ '<div class="fullscreen-image-container hide">'
+ ' <img class="fullscreen-image hide" src="" alt="" width="100px" height="100px">'
+ '</div>'
+ '<div class="ar-loading-container hide" onmousedown="hideElement(this);">'
+ ' <img src="assets/hand.gemacht loading.svg" alt="hand.gemacht Lade-Animation" class="ar-loading" width="100px" height="100px">'
+ ' <div>Augmented Reality laden</div>'
+ '</div>'
+ '<!-- END INFO AND UTILITY -->'
+ '<!-- START MODEL VIEWER -->'
+ '<model-viewer id="main-viewer" class="pre-loading" loading="eager" ar ar-scale="fixed" xr-environment src="" shadow-intensity="1" camera-controls touch-action="pan-y" disable-tap camera-orbit="" min-camera-orbit="-Infinity 15deg 0.1m" max-camera-orbit="-Infinity 165ddeg 3.5m" camera-target="" field-of-view="" interpolation-decay="150" data-dimension="false">'
+ '<!-- START INTERFACE -->'
+ '  <!-- left-side toolbar -->'
+ '  <section class="toolbar">'
+ '    <button id="context-story-button" class="tool active" data-tool-function="context-story" data-tool-active="true">'
+ '     <img id="context-story-symbol" src="assets/hand.gemacht WebApp button context-story kohlegrau.svg" alt="Button Hintergrundgeschichte" class="tool-symbol" width="100px" height="100px">'
+ '    </button>'
+ '    <button id="hotspots-button" class="tool hide" data-tool-function="hotspots" data-tool-active="false">'
+ '     <svg id="hide-hotspot-symbol" class="tool-symbol" xmlns="http://www.w3.org/2000/svg">'
+ '       <circle cx="50%" cy="50%" r="50%" fill="#41403F"/>'
+ '     </svg>'
+ '    </button>'
+ '    <button id="dimensions-button" class="tool hide" data-tool-function="dimensions" data-tool-active="false">'
+ '     <svg id="dimmensions-symbol" class="tool-symbol" xmlns="http://www.w3.org/2000/svg">'
+ '       <circle cx="50%" cy="50%" r="50%" fill="#41403F"/>'
+ '     </svg>'
+ '    </button>'
+ '    <button id="ar-button" class="tool" data-tool-function="ar" data-tool-active="false">'
+ '      <img id="ar-symbol" src="assets/hand.gemacht WebApp button ar kohlegrau.svg" alt="Button Augmented Reality" class="tool-symbol" width="100px" height="100px">'
+ '    </button>'
+ '  </section>'
+ '  <!-- remove default ar button -->'
+ '  <button class="hide" slot="ar-button"></button>'
+ '  <!-- removes default progress bar -->'
+ '  <div class="hide" slot="progress-bar"></div>'
+ '  <!-- END INTERFACE -->'
+ '  <!-- START DIMENSIONS -->'
+ '  <button disabled aria-hidden="true" slot="hotspot-dot+X-Y+Z" class="dot" data-position="1 -1 1" data-normal="1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dim+X-Y" class="dim" data-position="1 -1 0" data-normal="1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dot+X-Y-Z" class="dot" data-position="1 -1 -1" data-normal="1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dim+X-Z" class="dim" data-position="1 0 -1" data-normal="1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dot+X+Y-Z" class="dot" data-position="1 1 -1" data-normal="0 1 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dim+Y-Z" class="dim" data-position="0 -1 -1" data-normal="0 1 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dot-X+Y-Z" class="dot" data-position="-1 1 -1" data-normal="0 1 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dim-X-Z" class="dim" data-position="-1 0 -1" data-normal="-1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dot-X-Y-Z" class="dot" data-position="-1 -1 -1" data-normal="-1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dim-X-Y" class="dim" data-position="-1 -1 0" data-normal="-1 0 0"></button>'
+ '  <button disabled aria-hidden="true" slot="hotspot-dot-X-Y+Z" class="dot" data-position="-1 -1 1" data-normal="-1 0 0"></button>'
+ '  <svg id="dimLines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="dimensionLineContainer">'
+ '    <line class="dimensionLine"></line>'
+ '    <line class="dimensionLine"></line>'
+ '    <line class="dimensionLine"></line>'
+ '    <line class="dimensionLine"></line>'
+ '    <line class="dimensionLine"></line>'
+ '  </svg>'
+ '  <!-- END DIMENSIONS -->'
+ '</model-viewer>'
+ '<!-- START MODEL VIEWER ANNOTATIONS -->'
+ '<div id="annotation-container" class="annotation-container"></div>'
+ '<!-- END MODEL VIEWER ANNOTATIONS -->'
+ '<!-- END MODEL VIEWER -->'
//END modelViewerHTML for initViewer



//START collectionViewerHTML for initCollectionViewer
let collectionViewerHTML=
'<!-- START COLLECTION VIEWER -->'
+ '<a-scene gltf-model="dracoDecoderPath: ./draco/" load-json-models>'
+ '	 <a-entity cursor="rayOrigin: mouse; mouseCursorStylesEnabled: true;" raycaster="objects: [forcegraph];"></a-entity>'
+ '  <a-camera look-controls="pointerLockEnabled: false" wasd-controls="fly: true; acceleration: 300;" position="0 0 150" camera-focus-target></a-camera>'
//+ '    <a-entity position="0 0 0">'
//+ '      <a-text id="forcegraph-tooltip" font="./assets/font3d/RobotoSlab-Regular-msdf.json" position="0 0 0" width="0.5" align="left" color="#9B9691"></a-text>'
//+ '    </a-entity>'
+ '  <a-assets></a-assets>'
+ '  <a-sky color="#FAF0E6"></a-sky>'
+ '</a-scene>'
+ '<div id="forcegraph-tooltip"></div>'
+ '<!-- END COLLECTION VIEWER -->'
//END collectionViewerHTML for initCollectionViewer



//START collectionViewerHTML for initCollectionViewer
let arViewerHTML=
'<!-- START AR VIEWER -->'
+ '<a-scene gltf-model="dracoDecoderPath: ./draco/">'
+ '</a-scene>'
+ '<!-- END AR VIEWER -->'
//END collectionViewerHTML for initCollectionViewer



//START Search URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(urlParams.get('m')!=='m' ||	urlParams.get('m')!=='c' ||	urlParams.get('m')!=='a') {
	initViewer(appStartHTML);
	navListener();
};
urlParams.get('m')==='m' && initViewer(modelViewerHTML);
urlParams.get('m')==='c' && initViewer(collectionViewerHTML);
urlParams.get('m')==='a' && initViewer(arViewerHTML);
//END Search URL Parameters



//START initViewer
function initViewer(html) {
	document.querySelector('body').innerHTML = html;
}
//END initViewer



//START nav EventListener
function navListener() {
	document.querySelector('#collection').addEventListener('click', (evt) => {
		let url='?m=c&dev=true';
  		window.location.href = url;
	});
	document.querySelector('#model').addEventListener('click', (evt) => {
		let url='?m=m&model=6D0549BE-3890-8245-9D95-9B5E526327DB';
  		window.location.href = url;
	});
	document.querySelector('#ar').addEventListener('click', (evt) => {
		let url='?m=a&model=6D0549BE-3890-8245-9D95-9B5E526327DB';
  		window.location.href = url;
	});
}
//END nav EventListener




