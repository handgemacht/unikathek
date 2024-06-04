


//START Global Variables
let setError = '';
//END Global Variables



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



//START app 
const app = {
	title: 'Kulturspur',
	version: 'Version: a0.8-2025/05/16',
	devMode: false,
	viewerMode: false,

	init() {
		this.gui.init();

		this.devMode = this.getDevModeFromURL();
		this.viewerMode = this.getViewerModeFromURL();
		this.devMode && console.log('dev --- viewerMode: ', this.viewerMode);

		if (!this.viewerMode) {
			//redirect to collection viewer if no viewerMode is set in URL
			let url='?m=cv';
			this.devMode ? url='?m=cv&dev=true' : '';
  			window.location.href = url;
		}

		if (this.viewerMode === 'cv') {
			this.collectionViewer.init();
			app.gui.loadingScreen.content = 'loading collection';
			app.gui.loadingScreen.show();
		}

		if (this.viewerMode === 'mv') {
			document.body.innerHTML = modelViewerHTML;
		}

		if (this.viewerMode === 'ar') {
			document.body.innerHTML = arViewerHTML;
		}		
		
	}, //init

	gui: {
			
		init() {
			this.title.init();
			this.logo.init();
			this.version.init();
			this.loadingScreen.init();
			this.message.init();
			this.error.init();
			this.fullScreen.init();
			this.menu.init();
		},

		title: {
			
			init() {
				this.createElements();
			},

			createElements() {
				const guiTitle = document.createElement('div');
				document.body.appendChild(guiTitle);
				guiTitle.className = 'gui-title';
				guiTitle.appendChild(document.createTextNode(app.title));
			}
		},

		logo: {
			src: 'assets/hand.gemacht logo kohlegrau.svg',
			alt: 'hand.gemacht Logo',

			init() {
				this.createElements();
			},

			createElements() {
				const guiLogo = document.createElement('div');
				document.body.appendChild(guiLogo);
				guiLogo.className = 'gui-logo';
		
				const guiLogoImage = document.createElement('img');
				guiLogo.appendChild(guiLogoImage);
				guiLogoImage.className = 'logo';
				guiLogoImage.src = this.src;
				guiLogoImage.alt = this.alt;
				guiLogoImage.width = 100;
				guiLogoImage.height = 100;
			}
		},

		version: {
			
			init() {
				this.createElements();
			},

			createElements() {
				const guiVersion = document.createElement('div');
				document.body.appendChild(guiVersion);
				guiVersion.className = 'gui-version';
				guiVersion.appendChild(document.createTextNode(app.version));
			}
		},

		loadingScreen: {
			content: 'loading...',

			init() {
				this.createElements();
			}, 

			createElements() {
				const guiLoadingScreen = document.createElement('div');
				this.loadingScreenEl = guiLoadingScreen;
				document.body.appendChild(guiLoadingScreen);
				guiLoadingScreen.className = 'gui-loading-screen hide';

				const guiLoadingContainer = document.createElement('div');
				guiLoadingScreen.appendChild(guiLoadingContainer);
				guiLoadingContainer.className = 'gui-loading-container';
		
				const guiLoadingAnimation = document.createElement('object');
				this.loadingAnimationEl = guiLoadingAnimation;
				guiLoadingContainer.appendChild(guiLoadingAnimation);
				guiLoadingAnimation.className = 'gui-loading-animation';
				guiLoadingAnimation.type = 'image/svg+xml';
				guiLoadingAnimation.data = 'assets/hand.gemacht loading.svg';
				guiLoadingAnimation.alt = 'hand.gemacht Lade-Animation';
				guiLoadingAnimation.width = '100px';
				guiLoadingAnimation.height = '100px';
		
				const guiLoadingText = document.createElement('div');
				this.loadingTextEl = guiLoadingText;
				guiLoadingContainer.appendChild(guiLoadingText);
				guiLoadingText.className = 'gui-loading-text';
				guiLoadingText.appendChild(document.createTextNode(this.content));
			}, 

			show() {
				this.loadingScreenEl.classList.remove('hide');
				this.loadingTextEl.innerHTML = this.content;
			}, 

			hide() {
				this.loadingScreenEl.classList.add('hide');
			}
		},

		message: {
			content: 'message ...',
			buttonText: 'OK',

			init() {
				this.createElements();
				this.setEventlistener();
			}, 

			createElements() {
				const guiMessageBox = document.createElement('div');
				this.messageBoxEl = guiMessageBox;
				document.body.appendChild(guiMessageBox);
				guiMessageBox.className = 'gui-message-box';

				const guiMessageContainer = document.createElement('div');
				this.messageContainerEl = guiMessageContainer;
				guiMessageBox.appendChild(guiMessageContainer);
				guiMessageContainer.className = 'gui-message-container hide';

				const guiMessage = document.createElement('div');
				this.messageEl = guiMessage;
				guiMessageContainer.appendChild(guiMessage);
				guiMessage.className = 'gui-message';

				const guiMessageContentContainer = document.createElement('div');
				this.messageContentContainerEl = guiMessageContentContainer;
				guiMessage.appendChild(guiMessageContentContainer);
				guiMessageContentContainer.className = 'gui-error-content-container';

				const guiMessageContent = document.createElement('div');
				this.messageContentEl = guiMessageContent;
				guiMessageContentContainer.appendChild(guiMessageContent);
				guiMessageContent.className = 'gui-message-content';
				guiMessageContent.appendChild(document.createTextNode(this.content));

				const guiMessageButton = document.createElement('button');
				this.messageButtonEl = guiMessageButton;
				guiMessageContainer.appendChild(guiMessageButton);
				guiMessageButton.className = 'gui-message-button';
				guiMessageButton.appendChild(document.createTextNode(this.buttonText));
			}, 

			show() {
				this.messageContainerEl.classList.remove('hide');
				this.messageEl.innerHTML = this.content;
				this.messageButtonEl.innerHTML = this.buttonText;
			}, 

			hide() {
				this.content = 'message ...';
				this.buttonText = 'OK';
				this.messageContainerEl.classList.add('hide');
				this.messageEl.innerHTML = this.content;
				this.messageButtonEl.innerHTML = this.buttonText;
			},

			setEventlistener() {
				if(this.messageButtonEl && !this.messageContainerEl.classList.contains('hide')) {
					this.messageButtonEl.addEventListener('click', (evt) => {
						this.hide();
					});
				}
			}
		},

		error: {
			content: 'error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...error ...',
			buttonText: 'OK',

			init() {
				this.createElements();
				this.setEventlistener();
			}, 

			createElements() {
				const guiErrorContainer = document.createElement('div');
				this.errorContainerEl = guiErrorContainer;
				app.gui.message.messageBoxEl.appendChild(guiErrorContainer);
				guiErrorContainer.className = 'gui-error-container hide';

				const guiError = document.createElement('div');
				this.errorEl = guiError;
				guiErrorContainer.appendChild(guiError);
				guiError.className = 'gui-error';

				const guiErrorContentContainer = document.createElement('div');
				this.errorContentContainerEl = guiErrorContentContainer;
				guiError.appendChild(guiErrorContentContainer);
				guiErrorContentContainer.className = 'gui-error-content-container';

				const guiErrorContent = document.createElement('div');
				this.errorContentEl = guiErrorContent;
				guiErrorContentContainer.appendChild(guiErrorContent);
				guiErrorContent.className = 'gui-error-content';
				guiErrorContent.appendChild(document.createTextNode(this.content));

				const guiErrorButton = document.createElement('button');
				this.errorButtonEl = guiErrorButton;
				guiErrorContainer.appendChild(guiErrorButton);
				guiErrorButton.className = 'gui-error-button';
				guiErrorButton.appendChild(document.createTextNode(this.buttonText));
			}, 

			show() {
				this.errorContainerEl.classList.remove('hide');
				this.errorContentEl.innerHTML = this.content;
				this.errorButtonEl.innerHTML = this.buttonText;
			}, 

			hide() {
				this.content = 'error ...';
				this.buttonText = 'OK';
				this.errorContainerEl.classList.add('hide');
				this.errorContentEl.innerHTML = this.content;
				this.errorButtonEl.innerHTML = this.buttonText;
			}, 

			setEventlistener() {
				if(this.errorButtonEl && !this.errorContainerEl.classList.contains('hide')) {
					this.errorButtonEl.addEventListener('click', (evt) => {
						this.hide();
					});
				}
			}
		},

		fullScreen: {
			src: '',
			alt: '',

			init() {
				this.createElements();
			}, 

			createElements() {
				const guiFullScreenContainer = document.createElement('div');
				this.fullScreenContainerEl = guiFullScreenContainer;
				document.body.appendChild(guiFullScreenContainer);
				guiFullScreenContainer.className = 'gui-fullscreen-image-container hide';

				const guiFullScreenImage = document.createElement('img');
				this.guiFullScreenImageEl = guiFullScreenImage;
				guiFullScreenContainer.appendChild(guiFullScreenImage);
				guiFullScreenImage.className = 'gui-fullscreen-image';
				guiFullScreenImage.src = this.src;
				guiFullScreenImage.alt = this.alt;
				guiFullScreenImage.width = 100;
				guiFullScreenImage.height = 100;
			}, 

			show() {
				this.fullScreenContainerEl.classList.remove('hide');
				this.guiFullScreenImageEl.src = this.src;
				this.guiFullScreenImageEl.alt = this.alt;
			}, 

			hide() {
				this.src = '';
				this.alt = '';
				this.fullScreenContainerEl.classList.add('hide');
				this.guiFullScreenImageEl.src = this.src;
				this.guiFullScreenImageEl.alt = this.alt;
			}
		},
	
		menu: {
			content: 'Mehr über uns erfährst du hier:',
	
			init(){
				this.createElements();
				this.setEventListener();
			},
	
			createElements() {
				const burgerContainer = document.createElement('div');
				this.burgerEl = burgerContainer;
				document.body.appendChild(burgerContainer);
				burgerContainer.className = 'gui-menu-icon';
	
				const burgerSymbol = document.createElement('img');
				this.burgerSymbolEl = burgerSymbol;
				burgerContainer.appendChild(burgerSymbol);
				burgerSymbol.className = 'gui-menu-icon-symbol';
				burgerSymbol.src = 'assets/hand.gemacht WebApp menu kohlegrau.svg';
				burgerSymbol.alt = 'Menu-Icon';
				burgerSymbol.width = 100;
				burgerSymbol.height = 100;
	
				const container = document.createElement('div');
				this.containerEl = container;
				document.body.appendChild(container);
				container.className = 'gui-menu-container hide';
	
				const closeContainer = document.createElement('div');
				this.closeEl = closeContainer;
				container.appendChild(closeContainer);
				closeContainer.className = 'gui-menu-close';
	
				const closeSymbol = document.createElement('img');
				closeContainer.appendChild(closeSymbol);
				closeSymbol.className = 'gui-menu-close-symbol';
				closeSymbol.src = 'assets/hand.gemacht WebApp close perlweiss.svg';
				closeSymbol.alt = 'Schließen-Icon';
				closeSymbol.width = 100;
				closeSymbol.height = 100;
	
				const logoContainer = document.createElement('div');
				container.appendChild(logoContainer);
				logoContainer.className = 'gui-menu-logo';
	
				const logoImage = document.createElement('img');
				logoContainer.appendChild(logoImage);
				logoImage.className = 'logo';
				logoImage.src = 'assets/hand.gemacht logo perlweiss.svg';
				logoImage.alt = 'hand.gemacht Logo';
				logoImage.width = 100;
				logoImage.height = 100;
	
				const title = document.createElement('div');
				container.appendChild(title);
				title.className = 'gui-menu-title';
				title.appendChild(document.createTextNode(app.title));
	
				const content = document.createElement('div');
				container.appendChild(content);
				content.className = 'gui-menu-text';
				content.appendChild(document.createTextNode(this.content));
	
				const buttons = document.createElement('div');
				container.appendChild(buttons);
				buttons.className = 'gui-menu-buttons';
	
				const buttonsLinkProject = document.createElement('a');
				buttonsLinkProject.href = '#'; //Links anpassen
				buttons.appendChild(buttonsLinkProject);
				const projectButton = document.createElement('button');
				buttonsLinkProject.appendChild(projectButton);
				projectButton.appendChild(document.createTextNode('Das Projekt'));
	
				const buttonsLinkPatronage = document.createElement('a');
				buttonsLinkPatronage.href = '#'; //Links anpassen
				buttons.appendChild(buttonsLinkPatronage);
				const patronageButton = document.createElement('button');
				buttonsLinkPatronage.appendChild(patronageButton);
				patronageButton.appendChild(document.createTextNode('Die Förderung'));
	
				const links = document.createElement('div');
				container.appendChild(links);
				links.className = 'gui-menu-links';
	
				const linksLinkContact = document.createElement('a');
				linksLinkContact.href = '#'; //Links anpassen
				links.appendChild(linksLinkContact);
				linksLinkContact.appendChild(document.createTextNode('Kontakt'));
	
				const linksLinkImprint = document.createElement('a');
				linksLinkImprint.href = '#'; //Links anpassen
				links.appendChild(linksLinkImprint);
				linksLinkImprint.appendChild(document.createTextNode('Impressum'));
	
				const version = document.createElement('div');
				container.appendChild(version);
				version.className = 'gui-menu-version';
				version.appendChild(document.createTextNode(app.version));
	
				const patronage = document.createElement('div');
				container.appendChild(patronage);
				patronage.className = 'gui-menu-patronage-logo';
	
				const patronageImage = document.createElement('img');
				patronage.appendChild(patronageImage);
				patronageImage.className = 'logo';
				patronageImage.src = 'assets/stmfh foerderung.png';
				patronageImage.alt = 'Bayerisches Staatsministerium der Finanzen und für Heimat als Förderer Logo';
				patronageImage.width = 100;
				patronageImage.height = 100;
			},
	
			setEventListener() {
				if(this.closeEl) {
					this.closeEl.addEventListener('click', (evt) => {
						this.hide();
					});
				}
				if(this.burgerEl) {
					this.burgerEl.addEventListener('click', (evt) => {
						this.show();
					});
				}
			},
	
			show() {
				if(this.containerEl && this.burgerEl) {
					this.containerEl.classList.remove('hide');
					this.burgerEl.classList.add('hide');
				}	
			},
	
			hide() {
				if(this.containerEl && this.burgerEl) {
					this.containerEl.classList.add('hide');
					this.burgerEl.classList.remove('hide');
				}
			}
		}
	}, //gui

	collectionViewer: {

		init() {
			this.tooltip.init();
			this.createElements();
		},

		tooltip: {

			init() {
				this.createElements();
			},

			createElements() {
				const tooltip = document.createElement('div');
				this.tooltipEl = tooltip;
				document.body.appendChild(tooltip);
				tooltip.className = 'cv-tooltip hide';
	
				const tooltipType = document.createElement('div');
				this.tooltipTypeEl = tooltipType;
				tooltip.appendChild(tooltipType);
				tooltipType.className = 'cv-tooltip-type';
	
				const tooltipContent = document.createElement('div');
				this.tooltipContentEl = tooltipContent;
				tooltip.appendChild(tooltipContent);
				tooltipContent.className = 'cv-tooltip-content';

				const highlight = document.createElement('div');
				this.highlightEl = highlight;
				document.body.appendChild(highlight);
				highlight.className = 'cv-highlight hide';
	
				const highlightType = document.createElement('div');
				this.highlightTypeEl = highlightType;
				highlight.appendChild(highlightType);
				highlightType.className = 'cv-highlight-type';
	
				const highlightContent = document.createElement('div');
				this.highlightContentEl = highlightContent;
				highlight.appendChild(highlightContent);
				highlightContent.className = 'cv-highlight-content';
	
				const highlightArrow = document.createElement('img');
				this.highlightArrowEl = highlightArrow;
				highlightArrow.className = 'cv-highlight-arrow';
				highlightArrow.src = 'assets/hand.gemacht WebApp play perlweiss.svg';
				highlightArrow.alt = 'Pfeil-Icon';
				highlightArrow.width = 100;
				highlightArrow.height = 100;
			}, 

			showTooltip(type, content, showArrow = false) {
				this.tooltipTypeEl.innerHTML = '';
				this.tooltipTypeEl.appendChild(document.createTextNode(type));
				this.tooltipContentEl.innerHTML = '';
				this.tooltipContentEl.appendChild(document.createTextNode(content));
				if(showArrow){
					this.tooltipContentEl.appendChild(tooltipArrowEl);
				};
				this.tooltipEl.classList.remove('hide');
			}, 

			showHighlight(type, content, showArrow = false) {
				this.highlightTypeEl.innerHTML = '';
				this.highlightTypeEl.appendChild(document.createTextNode(type));
				this.highlightContentEl.innerHTML = '';
				this.highlightContentEl.appendChild(document.createTextNode(content));
				if(showArrow){
					this.highlightContentEl.appendChild(this.highlightArrowEl);
				};
				this.highlightEl.classList.remove('hide');
			},

			hideTooltip() {
				this.tooltipEl.classList.add('hide');
				this.tooltipTypeEl.innerHTML = '';
				this.tooltipContentEl.innerHTML = '';
			}, 

			hideHighlight() {
				this.highlightEl.classList.add('hide');
				this.highlightTypeEl.innerHTML = '';
				this.highlightContentEl.innerHTML = '';
			}, 

			mouseoverHandler(fgData) {
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
			
					this.tooltipEl.style.left = x + 25 + "px";
					this.tooltipEl.style.top = y + 25 + "px";
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
			
			
				if(type !== 'none'){
					this.showTooltip(tooltipType, tooltipContent, false);
				}else{
					this.hideTooltip();
				}
			}, 

			onclickHandler(fgData) {

				let type = '';
				fgData ? type = fgData.type : type = 'none';
			
				let tooltipType = '';
				let tooltipContent = '';
			
				type === 'link-category' || type === 'link-tag' ? tooltipType = 'Link' : '';
				type === 'node-object' ? tooltipType = 'Objekt' : '';
				type === 'node-category' ? tooltipType = 'Kategorie' : '';
			
				fgData ? tooltipContent=fgData.name : tooltipContent='';

				this.showHighlight(tooltipType, tooltipContent, true);

				this.highlightArrowEl.addEventListener('click', (e) => {
					this.hideHighlight();
					document.querySelector('a-camera').setAttribute('camera-move-to-target', {target: fgData, distance: 60, duration: 1200});
					
				});

			}, 

		},

		createElements() {

			const collectionViewerElement = document.createElement('a-scene');
			this.collectionViewerEl = collectionViewerElement;
			document.body.appendChild(collectionViewerElement);
			collectionViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			collectionViewerElement.setAttribute('load-json-models', '');
			collectionViewerElement.setAttribute('xr-mode-ui', 'enabled: false');

			const cursorEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(cursorEntity);
			cursorEntity.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: true;');
			cursorEntity.setAttribute('raycaster', 'objects: [forcegraph];');

			const camera = document.createElement('a-camera');
			collectionViewerElement.appendChild(camera);
			camera.setAttribute('my-look-controls', 'pointerLockEnabled: false;');
			camera.setAttribute('wasd-controls', 'fly: true; acceleration: 300;');
			camera.setAttribute('position', '0 0 150');
			camera.setAttribute('camera-focus-target', '');

			const assets = document.createElement('a-assets');
			collectionViewerElement.appendChild(assets);

			const sky = document.createElement('a-sky');
			collectionViewerElement.appendChild(sky);
			sky.setAttribute('color', '#FAF0E6');
		}
	},

	getViewerModeFromURL() {
		const queryString = window.location.search;
		this.urlParams = new URLSearchParams(queryString);

		if(this.urlParams.get('m')==='mv' ||	this.urlParams.get('m')==='cv' || this.urlParams.get('m')==='ar') {
			return this.urlParams.get('m');
		}else{
			return false;
		}
	},

	getDevModeFromURL() {
		const queryString = window.location.search;
		this.urlParams = new URLSearchParams(queryString);

		if(this.urlParams.get('dev')==='true') {
			return true;
		}else{
			return false;
		}
	}
}

//END app 

app.init();
export { app };











