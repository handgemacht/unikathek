


//START Global Variables
//END Global Variables

//START infoHTML
let infoHTML =
'<!-- START INFO AND UTILITY -->'
+ '<div class="version-container">Version: a0.8-2025/05/16</div>'
+ '<div class="logo-container">'
+ '  <img src="assets/hand.gemacht Logo-kohlegrau.svg" alt="hand.gemacht Logo" class="logo" width="100px" height="100px">'
+ '</div>'
+ '<div class="loading-animation-container">'
+ '  <object type="image/svg+xml" data="assets/hand.gemacht loading.svg" alt="hand.gemacht Lade-Animation" class="loading-animation" width="100px" height="100px"></object>'
+ '</div>'
+ '<div class="fullscreen-image-container hide">'
+ ' <img class="fullscreen-image hide" src="" alt="" width="100px" height="100px">'
+ '</div>'
+ '<!-- END INFO AND UTILITY -->'
//END infoHTML


//START appStartHTML
let appStartHTML=
'<!-- START AR VIEWER -->'
+ '<div class="flex-container">'
+ '  <button id="collection" class="nav">Sammlung</button>'
+ '  <button id="model" class="nav">Modell</button>'
+ '  <button id="ar" class="nav">AR</button>'
+ '</div>'
+ '<!-- END AR VIEWER -->'
//END appStartHTML



//START modelViewerHTML
let modelViewerHTML = 
'<!-- START MODEL VIEWER -->'
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
//END modelViewerHTML



//START collectionViewerHTML
let collectionViewerHTML=
'<!-- START COLLECTION VIEWER -->'
+ '<a-scene gltf-model="dracoDecoderPath: ./draco/" load-json-models xr-mode-ui="enabled: false">'
+ '	 <a-entity cursor="rayOrigin: mouse; mouseCursorStylesEnabled: true;" raycaster="objects: [forcegraph];"></a-entity>'
+ '  <a-camera look-controls="pointerLockEnabled: false" wasd-controls="fly: true; acceleration: 300;" position="0 0 150" camera-focus-target></a-camera>'
//+ '    <a-entity position="0 0 0">'
//+ '      <a-text id="forcegraph-tooltip" font="./assets/font3d/RobotoSlab-Regular-msdf.json" position="0 0 0" width="0.5" align="left" color="#9B9691"></a-text>'
//+ '    </a-entity>'
+ '  <a-assets></a-assets>'
+ '  <a-sky color="#FAF0E6"></a-sky>'
+ '</a-scene>'
+ '<div id="forcegraph-tooltip" class="hide"></div>'
+ '<!-- END COLLECTION VIEWER -->'
//END collectionViewerHTML



//START arViewerHTML
let arViewerHTML=
'<!-- START AR VIEWER -->'
+'<!-- A Scene -->'
+'    <a-scene id="scene" gltf-model="dracoDecoderPath: ./draco/;" xr-mode-ui="XRMode:ar;" webxr="requiredFeatures:  hit-test, dom-overlay, anchors; overlayElement: #overlay; referenceSpaceType:local;" controller>'
+'      <a-assets>'
+'      <img  id="sprite" crossorigin="anonymous" src="https://cdn.glitch.global/421736eb-f719-4a40-8df3-054eca30d277/spark.png?v=1715082340035" />'
+'  <img  id="placer" crossorigin="anonymous" src="https://cdn.glitch.global/5e3e06f0-b4c6-44f7-b937-2c6dd722ebec/placer.png?v=1715762971794" />'
+'  <img  id="book" crossorigin="anonymous"  src="../assets/hand.gemacht WebApp button context-story perlweiss.svg"/>'
+'  <img  id="arrow" crossorigin="anonymous" src="https://cdn.glitch.global/5e3e06f0-b4c6-44f7-b937-2c6dd722ebec/Sideways_Arrow_Icon.png?v=1716899874858" />'
+'</a-assets>'
+'<!--camera with one raycaster for click control and one for camera raycast with ring animation-->'
+'  <a-entity id="camera" camera position="0 0.2 0.5">'
+'   <a-entity id="cursor" geometry="primitive: circle; radius: 0.001; " material="color:black; shader:flat" position="0 0 -0.01" raycaster="objects: .collidable; enabled:false;" scale="0.1 0.1 0.1">'
+'            <a-text visibility-handler visible="false" value="Objekt aufheben" position="0 0.04 0" align="center" color="black" scale="0.02 0.02 0.02"></a-text>'
+'          <a-entity geometry="primitive:ring; radiusInner:0.02; radiusOuter:0.03; thetaLength:0" material="shader:flat; transparent:true; opacity: 0.5" animation-handler animation="property:geometry.thetaLength; from:0; to: 360; dur:2000; startEvents:startRing; pauseEvents: stopRing"></a-entity>'
+'        </a-entity></a-entity>'
+'   <!--placing object in AR -->'
+'  <a-entity id="place-object" ar-hit-test-special visible="false"></a-entity>'
+'      <!--container for all elements which get placed in AR -->'
+'      <a-entity id="container" hide-on-start-ar>'
+'<a-entity class="collidable" id="object" get-bounding-box distance-listener anchored="persistent: true"></a-entity>'
+'        <!-- missions need to be add -->'
+'        <a-entity id="missions"> </a-entity></a-entity>'
+'      <!-- circle for rotation control  -->'
+'      <a-entity turn-to-camera="onlyYAxis:true" id="rotation-ring" geometry="primitive:ring;" rotation="-90 0 0" material=" color:#9B9691;">'
+'        <a-entity id="touch-sphere" rotation-handler geometry="primitive:sphere; radius: 0.3" material="shader:flat;transparent:true; opacity:0"></a-entity>'
+'        <a-entity geometry="primitive:plane; width:0.015; height: 0.015; " position="0 0 0.001" material="src:#arrow;"></a-entity></a-entity>'
+'    </a-scene>'
+'    <!-- OVERLAY -->'
+'    <div id="overlay" class="hide">'
+'      <!-- Menu Mission/Tools -->'
+'      <div class="bottom-menu hide"><button id="missionBtn" class="menu-btn">Mission</button><button id="toolsBtn" class="menu-btn">Tools</button></div>'
+'      <!-- Tool toggles -->'
+'      <div class="toggle-container hide"><button class="message-btn" id="replace-button">Neu platzieren</button><div class="toggle-wrapper"><span class="toggle-label">Wireframe</span><label class="switch"><input type="checkbox" id="wireframe" /><span class="slider"></span></label></div>'
+'        <div class="toggle-wrapper"><span class="toggle-label">Textur</span><label class="switch"><input type="checkbox" id="texture" checked /><span class="slider"></span></label></div>'
+'        <div class="toggle-wrapper"><span class="toggle-label">Clipping</span><label class="switch"><input type="checkbox" id="clipping" checked /><span class="slider"></span></label></div></div>'
+'      <div id="missionOverlay">'
+'        <!-- score container-->'
+'        <div id="score-container" class="book-container">'
+'          <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch Score"/>'
+'          <span id="score"> 0/0</span>'
+'          <img src="https://cdn.glitch.global/5e3e06f0-b4c6-44f7-b937-2c6dd722ebec/14-10-13-121_256.gif?v=1716964501140" alt="exclamation mark" height="40px" width="40px" class="exclamation-mark hide"/>'
+'        </div>'
+'        <!--Popup for drag&Drop Task -->'
+'        <div id="drag-drop-popup" class="annotation hide">'
+'          <div class="annotation-close-container">'
+'            <img src="..\assets\hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="100px" height="100px"/>'
+'          </div>'
+'          <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch-Icon" class="annotation-book-symbol hide"/>'
+'          <h3 class="headline">Headline</h3><div class="annotation-image"><div class="annotation-image-box"><img width="100px" height="100px" /></div><p class="annotation-image-caption"><span class="copyright"></span></p></div>'
+'          <p class="annotation-text">Text</p></div>'
+'        <!--Popup for point task -->'
+'       <div id="point-popup" class="annotation hide">'
+'          <div class="annotation-close-container">'
+'            <img src="..\assets\hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="100px" height="100px"/>'
+'          </div>'
+'          <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch-Icon" class="annotation-book-symbol"/>'
+'          <h3 class="headline">Headline</h3><div class="annotation-image hide"><div class="annotation-image-box"><img width="100px" height="100px" /></div><p class="annotation-image-caption"><span class="copyright"></span></p></div>'
+'          <audio class="hide" controls><source id="audioSrc" src="" type="audio/mpeg" /></audio>'
+'          <p class="annotation-text">Text</p></div>'
+'        <!--Popup for quiz -->'
+'        <div id="quiz-popup" class="annotation hide">'
+'          <div class="annotation-close-container">'
+'            <img src="..\assets\hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="100px" height="100px"/>'
+'          </div>'
+'          <h3 class="headline">Question</h3>'
+'          <form id="quiz-form">'
+'            <div class="answer-container"><input type="radio" id="answer1" name="answer" value="paris" /><label for="answer1" class="answer-option">Paris</label></div>'
+'            <div class="answer-container"><input type="radio" id="answer2" name="answer" value="london" /><label for="answer2" class="answer-option">London</label></div>'
+'            <div class="answer-container"><input type="radio" id="answer3" name="answer" value="berlin" /><label for="answer3" class="answer-option">Berlin</label></div>'
+'            <button id="checkButton" class="message-btn" type="button">Antwort überprüfen</button></form>'
+'          <p class="annotation-text"></p></div>'
+'        <!-- inventar -->'
+'        <div id="inventar"></div>'
+'        <!-- mission overview-->'
+'        <div id="mission-overview-popup" class="annotation mission hide">'
+'          <div class="annotation-close-container"><img src="..\assets\hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="100px" height="100px"/></div>'
+'          <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch-Icon" class="book-symbol"/>'
+'          <h3 class="headline">Missionen</h3> <div class="book-container">'
+'            <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch Score" height="50px"/>'
+'            <p id="mission1" class="annotation-text"><span class="score">0</span>/2 Objekte erfolgreich zugeordnet </p></div>'
+'          <div class="book-container">'
+'           <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch Score"height="50px"/>'
+'            <p id="mission2" class="annotation-text"><span class="score">0</span>/1 Punkte gefunden</p></div>'
+'          <div class="book-container">'
+'            <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch Score"height="50px"/>'
+'            <p id="mission3" class="annotation-text"><span class="score">0</span>/1 Fragen beantwortet</p></div>'
+'          <div class="book-container">'
+'            <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch Score"height="50px"/>'
+'            <p id="mission4" class="annotation-text"><span class="score">0</span>/1 Animationen gestartet</p></div>'
+'          <p class="annotation-text hide" id="restart-text">Möchtest du noch einmal starten?</p>'
+'          <div id="missionButtons" class="button-container"><button class="message-btn hide">Ja</button></div></div></div>'
+'      <!-- small message -->'
+'      <div class="message hide"><p class="annotation-text">Text</p><div id="message" class="button-container"><button class="message-btn hide"></button><button class="message-btn hide"></button></div></div>'
+'      <!-- big message -->'
+'      <div id="big-message" class="annotation hide">'
+'        <img src="..\assets\hand.gemacht WebApp button context-story perlweiss.svg" alt="Buch-Icon" class="book-symbol"/>'
+'        <p class="annotation-text">Text</p><button class="nav">Los gehts!</button></div>'
+'      <!-- close button -->'
+'      <div id="close-cont" class="annotation-close-container">'
+'        <img src="..\assets\hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="24px" height="24px"/></div>'
+'    </div>'
+ '<!-- END AR VIEWER -->'
//END arViewerHTML



//START Search URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(urlParams.get('m')!=='m' ||	urlParams.get('m')!=='c' ||	urlParams.get('m')!=='a') {
	initViewer(appStartHTML);
	navListener();
};
urlParams.get('m')==='m' && initViewer(infoHTML+modelViewerHTML);
urlParams.get('m')==='c' && initViewer(infoHTML+collectionViewerHTML);
urlParams.get('m')==='a' && initViewer(infoHTML+arViewerHTML);
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
		let url='?m=a&model=00000000-0000-0000-0000-000000000000';
  		window.location.href = url;
	});
}
//END nav EventListener




