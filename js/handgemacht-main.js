



//START modelViewerHTML
let modelViewerHTML = 
'<!-- START MODEL VIEWER -->'
+ '<model-viewer id="main-viewer" loading="eager" ar ar-scale="fixed" xr-environment src="" shadow-intensity="1" camera-controls touch-action="pan-y" disable-tap camera-orbit="" min-camera-orbit="-Infinity 15deg 0.1m" max-camera-orbit="-Infinity 165ddeg 3.5m" camera-target="" field-of-view="" interpolation-decay="150" data-dimension="false">'
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




//START app 
const app = {
	title: 'Kulturspur',
	version: 'alpha 0.9 25/06/27',
	devMode: false,
	viewerMode: false,

	init() {
		document.body.innerHTML = '';

		this.gui.init();

		this.devMode = this.getDevModeFromURL();
		this.viewerMode = this.getViewerModeFromURL();
		this.error = this.getErrorFromURL();

		if(this.error) {
			this.errorHandler(this.error);
		}

		if (!this.viewerMode) {
			//redirect to collection viewer if no viewerMode is set in URL
			let url='?m=cv';
			this.devMode ? url+='&dev=true' : '';
  			window.location.href = url;
		}

		if (this.viewerMode === 'cv') {
			this.collectionViewer.init();
			this.gui.title.init();
			this.gui.loadingScreen.content = 'loading collection';
			this.gui.loadingScreen.showLoadingScreen();
		}

		if (this.viewerMode === 'mv') {
			document.body.innerHTML += modelViewerHTML;
			this.gui.loadingScreen.content = 'loading model viewer';
			this.gui.loadingScreen.showLoadingScreen();
		}

		//test if WebXR AR is supported
		if(navigator.xr){
			navigator.xr.isSessionSupported("immersive-ar").then((isSupported) => {
			this.devMode && console.log("dev --- ar supported:", isSupported);
			if (this.viewerMode === 'ar' && isSupported) {
			//start ARViewer
			this.arViewer.init();
			this.gui.loadingScreen.content = 'loading Entdeckermodus';
			this.gui.loadingScreen.showLoadingScreen();
			}else{
				this.devMode && console.log("dev --- WebXR AR is not supported on this browser");
			}
			});
		}else{
			this.devMode && console.log("dev --- WebXR is not supported on this browser");
		}

				
	}, //init

	gui: {
			
		init() {
			this.logo.init();
			this.version.init();
			this.loadingScreen.init();
			this.message.init();
			this.error.init();
			this.fullScreen.init();
			this.menu.init();
			this.toolbar.init();
		},

		title: {
			
			init() {
				this.createElements();
			},

			createElements() {
				const guiTitle = document.createElement('div');
				this.titleEl = guiTitle;
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
				guiVersion.className = 'gui-version text-smokegrey';
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
				guiLoadingAnimation.width = 100;
				guiLoadingAnimation.height = 100;
		
				const guiLoadingText = document.createElement('div');
				this.loadingTextEl = guiLoadingText;
				guiLoadingContainer.appendChild(guiLoadingText);
				guiLoadingText.className = 'gui-loading-text';
				guiLoadingText.appendChild(document.createTextNode(this.content));
			}, 

			showLoadingScreen() {
				this.loadingScreenEl.classList.remove('hide');
				this.loadingTextEl.innerHTML = this.content;
				if(app.gui.title.titleEl){
					app.gui.title.titleEl.classList.add('text-pearlwhite');
				}
			}, 

			hideLoadingScreen() {
				this.loadingScreenEl.classList.add('hide');
				this.content = 'loading ...';
				if(app.gui.title.titleEl){
					app.gui.title.titleEl.classList.remove('text-pearlwhite');
				}
			}
		},

		message: {
			type: '',
			content: 'default message',
			color: 'smokegrey',
			shadow: null,
			button1: {content: '', color:'smokegrey', shadow: 'coalgrey'},
			button2: {content: '', color:'smokegrey', shadow: 'coalgrey'},
			showClose: true,

			init() {
				this.createElements();
				this.createElementsAR();
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

				const guiMessageType = document.createElement('div');
				this.messageTypeEl = guiMessageType;
				guiMessageContainer.appendChild(guiMessageType);
				guiMessageType.className = 'gui-message-type hide';

				const guiMessageCloseContainer = document.createElement('div');
				this.messageCloseEl = guiMessageCloseContainer;
				guiMessage.appendChild(guiMessageCloseContainer);
				guiMessageCloseContainer.className = 'gui-message-close';
	
				const guiMessageCloseSymbol = document.createElement('img');
				this.messageCloseSymbol = guiMessageCloseSymbol;
				guiMessageCloseContainer.appendChild(guiMessageCloseSymbol);
				guiMessageCloseSymbol.className = 'gui-message-close-symbol';
				guiMessageCloseSymbol.src = 'assets/hand.gemacht WebApp close perlweiss.svg';
				guiMessageCloseSymbol.alt = 'Schließen-Icon';
				guiMessageCloseSymbol.width = 100;
				guiMessageCloseSymbol.height = 100;

				const guiMessageContentContainer = document.createElement('div');
				this.messageContentContainerEl = guiMessageContentContainer;
				guiMessage.appendChild(guiMessageContentContainer);
				guiMessageContentContainer.className = 'gui-message-content-container';

				const guiMessageContent = document.createElement('div');
				this.messageContentEl = guiMessageContent;
				guiMessageContentContainer.appendChild(guiMessageContent);
				guiMessageContent.className = 'gui-message-content';
				guiMessageContent.appendChild(document.createTextNode(this.content));

				const guiMessageButtonContainer = document.createElement('div');
				this.messageButtonContainerEl = guiMessageButtonContainer;
				guiMessage.appendChild(guiMessageButtonContainer);
				guiMessageButtonContainer.className = 'gui-message-button-container';

				const guiMessageButton = document.createElement('button');
				this.messageButton1El = guiMessageButton;
				guiMessageButtonContainer.appendChild(guiMessageButton);
				guiMessageButton.className = 'gui-message-button hide';
				guiMessageButton.appendChild(document.createTextNode(this.buttonText));

				const guiMessageButton2 = document.createElement('button');
				this.messageButton2El = guiMessageButton2;
				guiMessageButtonContainer.appendChild(guiMessageButton2);
				guiMessageButton2.className = 'gui-message-button hide';
				guiMessageButton2.appendChild(document.createTextNode(this.button2Text));

				

			}, 

			createElementsAR() {
				const guiArOverlay = document.createElement('div');
				this.messageBoxEl.appendChild(guiArOverlay);
				guiArOverlay.id = 'ar-overlay';
				guiArOverlay.className = 'hide';

				const bottomMenu = document.createElement('div');
				guiArOverlay.appendChild(bottomMenu);
				bottomMenu.className = 'bottom-menu hide';

				const missionBtn = document.createElement('button');
				bottomMenu.appendChild(missionBtn);
				missionBtn.id = 'missionBtn';
				missionBtn.className = 'menu-btn';
				missionBtn.textContent = 'Mission';

				const toolsBtn = document.createElement('button');
				bottomMenu.appendChild(toolsBtn);
				toolsBtn.id = 'toolsBtn';
				toolsBtn.className = 'menu-btn';
				toolsBtn.textContent = 'Tools';
				
				const toggleContainer = document.createElement('div');
				guiArOverlay.appendChild(toggleContainer);
				toggleContainer.className = 'toggle-container hide';

				const replaceButton = document.createElement('button');
				toggleContainer.appendChild(replaceButton);
				replaceButton.className = 'message-btn';
				replaceButton.id = 'replace-button';
				replaceButton.textContent = 'Neu platzieren';

				function createToggle(id, label, checked) {
					const wrapper = document.createElement('div');
					wrapper.className = 'toggle-wrapper';

					const span = document.createElement('span');
					wrapper.appendChild(span);
					span.className = 'toggle-label';
					span.textContent = label;

					const labelSwitch = document.createElement('label');
					wrapper.appendChild(labelSwitch);
					labelSwitch.className = 'switch';

					const input = document.createElement('input');
					labelSwitch.appendChild(input);
					input.type = 'checkbox';
					input.id = id;

					if (checked) input.checked = true;
					const slider = document.createElement('span');
					labelSwitch.appendChild(slider);
					slider.className = 'slider';
			
					return wrapper;
				}

				toggleContainer.appendChild(createToggle('wireframe', 'Wireframe', false));
				toggleContainer.appendChild(createToggle('texture', 'Textur', true));
				toggleContainer.appendChild(createToggle('clipping', 'Clipping', true));
				toggleContainer.appendChild(createToggle('shot', 'Freeze', false));
				
				function createSlider(id, label, min, max, step, value) {
					const wrapper = document.createElement('div');
					wrapper.className = 'slider-container';
		
					const span = document.createElement('span');
					wrapper.appendChild(span);
					span.className = 'slider-label';
					span.textContent = label;
		
					const input = document.createElement('input');
					wrapper.appendChild(input);
					input.type = 'range';
					input.id = id;
					input.min = min;
					input.max = max;
					input.step = step;
					input.value = value;
		
					return wrapper;
				}
				toggleContainer.appendChild(createSlider('distance-slider', 'Entfernung', 0.1, 1, 0.01, 0.5));

				const missionOverlay = document.createElement('div');
				guiArOverlay.appendChild(missionOverlay);
				missionOverlay.id = 'missionOverlay';
				missionOverlay.className = 'hide';

				const scoreContainer = document.createElement('div');
				missionOverlay.appendChild(scoreContainer);
				scoreContainer.id = 'score-container';
				scoreContainer.className = 'book-container';

				const scoreImg = document.createElement('img');
				scoreContainer.appendChild(scoreImg);
				scoreImg.src = 'assets/hand.gemacht WebApp ar marker book.svg';
				scoreImg.alt = 'Buch Score';

				const scoreSpan = document.createElement('span');
				scoreContainer.appendChild(scoreSpan);
				scoreSpan.id = 'score';
				scoreSpan.textContent = '0/0';

				var inventar = document.createElement('div');
				missionOverlay.appendChild(inventar);
				inventar.id = 'inventar';

				const closeContainer = document.createElement('div');
				guiArOverlay.appendChild(closeContainer);
				closeContainer.id = 'close-cont';
				closeContainer.className = 'annotation-close-container';
				var closeSymbol = document.createElement('img');
				closeContainer.appendChild(closeSymbol);
				closeSymbol.src = 'assets/hand.gemacht WebApp close kohlegrau.svg';
				closeSymbol.alt = 'Schließen-Icon';
				closeSymbol.className = 'annotation-close-symbol';
				closeSymbol.width = '24';
				closeSymbol.height = '24';

				const helpContainer = document.createElement('div');
				guiArOverlay.appendChild(helpContainer);
				helpContainer.id = 'help-cont';
				helpContainer.className = 'help-container hide';
				var helpSymbol = document.createElement('img');
				helpContainer.appendChild(helpSymbol);
				helpSymbol.src = 'assets/hand.gemacht WebApp ar marker quiz.svg';
				helpSymbol.alt = 'Help-Icon';
				helpSymbol.className = 'help-symbol';

				//close popup
				const guiCloseContainer = document.createElement('div');
				this.messageBoxEl.appendChild(guiCloseContainer);
				guiCloseContainer.className = 'gui-message-container hide';
				guiCloseContainer.id = 'gui-close-popup';

				const guiCloseMessage = document.createElement('div');
				guiCloseContainer.appendChild(guiCloseMessage);
				guiCloseMessage.classList.add('gui-message', 'terracotta');

				const guiCloseContentContainer = document.createElement('div');
				guiCloseMessage.appendChild(guiCloseContentContainer);
				guiCloseContentContainer.className = 'gui-message-content-container';

				const guiCloseContent = document.createElement('div');
				guiCloseContentContainer.appendChild(guiCloseContent);
				guiCloseContent.className= 'gui-message-content';
				guiCloseContent.innerHTML = '<p> Entdecker-Modus wirklich verlassen? </p>';

				const guiCloseButtonContainer = document.createElement('div');
				guiCloseContainer.appendChild(guiCloseButtonContainer);
				guiCloseButtonContainer.className = 'gui-message-button-container';

				const guiCloseButton = document.createElement('button');
				this.closeButton1El = guiCloseButton;
				guiCloseButtonContainer.appendChild(guiCloseButton);
				guiCloseButton.classList.add('gui-message-button', 'pearlwhite', 'shadow-coalgrey');
				guiCloseButton.textContent = 'Ja';

				const guiCloseButton2 = document.createElement('button');
				this.closeButton2El = guiCloseButton2;
				guiCloseButtonContainer.appendChild(guiCloseButton2);
				guiCloseButton2.classList.add('gui-message-button', 'pearlwhite', 'shadow-coalgrey');
				guiCloseButton2.textContent = 'Nein';

				const tooltipAR = document.createElement('div');
				this.tooltipElAr = tooltipAR;
				this.messageBoxEl.appendChild(tooltipAR);
				tooltipAR.className = 'cv-tooltip hide';
	
				const tooltipContentAR = document.createElement('div');
				this.tooltipContentElAr = tooltipContentAR;
				tooltipAR.appendChild(tooltipContentAR);
				tooltipContentAR.classList.add('cv-tooltip-content', 'duckyellow');

				const tooltipOverlay = document.createElement('div');
				this.tooltipElOverlay = tooltipOverlay;
				this.messageBoxEl.appendChild(tooltipOverlay);
				tooltipOverlay.className = 'cv-tooltip hide';
	
				const tooltipContentOverlay = document.createElement('div');
				this.tooltipContentElOverlay = tooltipContentOverlay;
				tooltipOverlay.appendChild(tooltipContentOverlay);
				tooltipContentOverlay.classList.add('cv-tooltip-content', 'skyblue');

			},
			showMessage() {
				this.messageContainerEl.classList.remove('hide');
			}, 

			hideMessage() {
				this.type = '';
				this.content = 'default content';
				this.color = 'smokegrey';
				this.shadow = null;
				this.button1.content = '';
				this.button1.color = 'smokegrey';
				this.button1.shadow = 'coalgrey';
				this.button2.content = '';
				this.button2.color = 'smokegrey';
				this.button2.shadow = 'coalgrey';
				this.showClose = true;
				//reset scrolling
				this.messageContentContainerEl.scrollTop = 0;

				this.messageTypeEl.className = 'gui-message-type hide';
				this.messageEl.className = 'gui-message';
				this.messageContainerEl.className = 'gui-message-container hide';
				this.messageCloseEl.className = 'gui-message-close';
				this.messageButton1El.className = 'gui-message-button hide';
				this.messageButton2El.className = 'gui-message-button hide';

				this.messageContentEl.innerHTML = this.content;
				this.messageButton1El.innerHTML = this.buttonText;
				this.messageButton2El.innerHTML = this.button2Text;
			},

			setEventlistener() {
				const self = this;

				if(this.messageCloseEl) {
					this.messageCloseEl.addEventListener('click', (evt) => {
						self.hideMessage();
					});
				}
			},

			setMessage(message) {
				this.hideMessage();

				let buttonsActive = false;

				Object.keys(message).includes("type") ? this.type = message.type : '';
				Object.keys(message).includes("content") ? this.content = message.content : '';
				Object.keys(message).includes("color") ? this.color = message.color : '';
				Object.keys(message).includes("shadow") ? this.shadow = 'shadow-'+message.shadow : '';

				if(Object.keys(message).includes("button1")){
					buttonsActive = true;
					Object.keys(message.button1).includes("content") ? this.button1.content = message.button1.content : '';
					Object.keys(message.button1).includes("color") ? this.button1.color = message.button1.color : '';
					Object.keys(message.button1).includes("shadow") ? this.button1.shadow = 'shadow-'+message.button1.shadow : '';
				}

				if(Object.keys(message).includes("button2")){
					buttonsActive = true;
					Object.keys(message.button2).includes("content") ? this.button2.content = message.button2.content : '';
					Object.keys(message.button2).includes("color") ? this.button2.color = message.button2.color : '';
					Object.keys(message.button2).includes("shadow") ? this.button2.shadow = 'shadow-'+message.button2.shadow : '';
				}

				Object.keys(message).includes("showClose") ? this.showClose = message.showClose : this.showClose = true;

				this.type && this.messageTypeEl.classList.remove('hide');

				buttonsActive && this.messageEl.classList.add('buttonsActive');
				this.button1.content && this.messageButton1El.classList.remove('hide');
				this.button2.content && this.messageButton2El.classList.remove('hide');

				!this.showClose && this.messageCloseEl.classList.add('hide');

				this.color && this.messageEl.classList.add(this.color);

				if(this.color === 'pearlwhite'){
					this.messageCloseSymbol.src = 'assets/hand.gemacht WebApp close kohlegrau.svg';
					this.color && this.messageTypeEl.classList.add(message.shadow);
				}else{
					this.messageCloseSymbol.src = 'assets/hand.gemacht WebApp close perlweiss.svg';
					this.color && this.messageTypeEl.classList.add(this.color);
				}

				this.shadow && this.messageEl.classList.add(this.shadow);
				this.button1.color && this.messageButton1El.classList.add(this.button1.color);
				this.button1.shadow && this.messageButton1El.classList.add(this.button1.shadow);
				this.button2.color && this.messageButton2El.classList.add(this.button2.color);
				this.button2.shadow && this.messageButton2El.classList.add(this.button2.shadow);

				this.messageTypeEl.innerHTML = this.type;
				this.messageContentEl.innerHTML = this.content;
				this.messageButton1El.innerHTML = this.button1.content;
				this.messageButton2El.innerHTML = this.button2.content;

				this.showMessage();
			},
			showTooltipAR(content){
				this.tooltipContentElAr.appendChild(document.createTextNode(content));
				this.tooltipElAr.classList.remove('hide');
			},
			hideTooltipAR(){
				this.tooltipElAr.classList.add('hide');
				this.tooltipContentElAr.innerHTML = '';
			},
			showTooltipOverlay(content){
				this.tooltipContentElOverlay.appendChild(document.createTextNode(content));
				this.tooltipElOverlay.classList.remove('hide');
			},
			hideTooltipOverlay(){
				this.tooltipElOverlay.classList.add('hide');
				this.tooltipContentElOverlay.innerHTML = '';
			}
		},

		error: {
			content: 'error...',
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

			showError() {
				this.errorContainerEl.classList.remove('hide');
				this.errorContentEl.innerHTML = this.content;
				this.errorButtonEl.innerHTML = this.buttonText;
			}, 

			hideError() {
				this.content = 'error ...';
				this.buttonText = 'OK';
				this.errorContainerEl.classList.add('hide');
				this.errorContentEl.innerHTML = this.content;
				this.errorButtonEl.innerHTML = this.buttonText;
			}, 

			setEventlistener() {
				const self = this;
				if(this.errorButtonEl) {
					this.errorButtonEl.addEventListener('click', (evt) => {
						self.hideError();
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

			showFullScreen() {
				this.fullScreenContainerEl.classList.remove('hide');
				this.guiFullScreenImageEl.src = this.src;
				this.guiFullScreenImageEl.alt = this.alt;
			}, 

			hideFullScreen() {
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

				//Test AR Button vor release entfernen
				const linksLinkTest = document.createElement('a');
				linksLinkTest.href = 'https://dev.handgemacht.bayern/?m=ar&model=00000000-0000-0000-0000-000000000000&dev=true';
				links.appendChild(linksLinkTest);
				linksLinkTest.appendChild(document.createTextNode('Test AR'));
	
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
				patronageImage.width = 270;
				patronageImage.height = 97;
			},
	
			setEventListener() {
				if(this.closeEl) {
					this.closeEl.addEventListener('click', (evt) => {
						app.gui.menu.hideMenu();
					});
				}
				if(this.burgerEl) {
					this.burgerEl.addEventListener('click', (evt) => {
						app.gui.menu.showMenu();
					});
				}
			},
	
			showMenu() {
				if(this.containerEl && this.burgerEl) {
					this.containerEl.classList.remove('hide');
					this.burgerEl.classList.add('hide');
				}	
			},
	
			hideMenu() {
				if(this.containerEl && this.burgerEl) {
					this.containerEl.classList.add('hide');
					this.burgerEl.classList.remove('hide');
				}
			}
		}, 

		toolbar: {
			init(){
				this.createElements();
				this.setEventListener();
			},
	
			createElements() {
				const toolbarContainer = document.createElement('div');
				this.toolbarContainerEl = toolbarContainer;
				document.body.appendChild(toolbarContainer);
				toolbarContainer.className = 'gui-toolbar-container';
			}, 

			setEventListener() {

			}
		}
	}, //gui

	collectionViewer: {

		init() {
			this.createElements();
			this.tooltip.init();
			this.highlight.init();
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
			}, 

			showTooltip(type, content, showArrow = false) {
				let typeText = '';

				if(type === 'node-object'){
					typeText = 'Objekt'
					this.tooltipTypeEl.classList.add('skyblue');
					this.tooltipContentEl.classList.add('skyblue');
				}
				if(type === 'node-category'){
					typeText = 'Kategorie'
					this.tooltipTypeEl.classList.add('duckyellow');
					this.tooltipContentEl.classList.add('duckyellow');
				}
				if(type === 'link-tag'){
					typeText = 'Link'
					this.tooltipTypeEl.classList.add('smokegrey');
					this.tooltipContentEl.classList.add('smokegrey');
				}
				if(type === 'link-category'){
					typeText = 'Link'
					this.tooltipTypeEl.classList.add('duckyellow');
					this.tooltipContentEl.classList.add('duckyellow');
				}
				this.tooltipTypeEl.appendChild(document.createTextNode(typeText));
				this.tooltipContentEl.appendChild(document.createTextNode(content));
				this.tooltipEl.classList.remove('hide');
			}, 

			hideTooltip() {
				this.tooltipEl.classList.add('hide');
				this.tooltipTypeEl.innerHTML = '';
				this.tooltipTypeEl.className = 'cv-tooltip-type';
				this.tooltipContentEl.innerHTML = '';
				this.tooltipContentEl.className = 'cv-tooltip-content';
			}, 

			mouseoverHandler(fgData) {
				this.hideTooltip();

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

				if(type === 'none' || !fgData.gltf){
					return;
				}

				if (fgData.type === 'link-tag' || fgData.type === 'link-category') {
					if (fgData.material.visible === false) {
						return;
					}
				}else if(fgData.type === 'node-object' || fgData.type === 'node-category'){
					if (fgData.gltf.material.visible === false) {
						return;
					}
				}

				!isTouchDevice() && this.showTooltip(fgData.type, fgData.name, false);
			} 
		},

		highlight: {

			init() {
				this.createElements();
				this.setEventlistener();
			},

			createElements() {
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

			setEventlistener(){
				if(app.gui.message.messageCloseEl) {
					app.gui.message.messageCloseEl.addEventListener('click', (evt) => {
						document.querySelector('#forcegraph').setAttribute('highlight', {source: ''});
						app.collectionViewer.highlight.hideHighlight();
					});
				}
			},

			showHighlight(type, content, showArrow = false) {
				this.hideHighlight()
				let typeText = '';

				if(type === 'node-object'){
					typeText = 'Objekt'
					this.highlightTypeEl.classList.add('skyblue');
					this.highlightContentEl.classList.add('skyblue');
				}
				if(type === 'node-category'){
					typeText = 'Kategorie'
					this.highlightTypeEl.classList.add('duckyellow');
					this.highlightContentEl.classList.add('duckyellow');
				}
				if(type === 'link-tag'){
					typeText = 'Link'
					this.highlightTypeEl.classList.add('smokegrey');
					this.highlightContentEl.classList.add('smokegrey');
				}
				if(type === 'link-category'){
					typeText = 'Link'
					this.highlightTypeEl.classList.add('duckyellow');
					this.highlightContentEl.classList.add('duckyellow');
				}
				this.highlightTypeEl.innerHTML = '';
				this.highlightTypeEl.appendChild(document.createTextNode(typeText));
				this.highlightContentEl.innerHTML = '';
				this.highlightContentEl.appendChild(document.createTextNode(content));
				if(showArrow){
					this.highlightContentEl.appendChild(this.highlightArrowEl);
				};
				this.highlightEl.classList.remove('hide');
			},

			hideHighlight() {
				if(this.highlightEl.classList.contains('hide')) {
					return;
				}else {
					this.highlightEl.classList.add('hide');
					this.highlightTypeEl.innerHTML = '';
					this.highlightTypeEl.className = 'cv-highlight-type';
					this.highlightContentEl.innerHTML = '';
					this.highlightContentEl.className = 'cv-highlight-content';
				}				
			}, 

			onclickHandler(fgData) {
				let type = '';
				fgData ? type = fgData.type : type = 'none';
			
				if(type !== 'none'){
					//this.showHighlight(type, fgData.name, true);
					app.gui.message.hideMessage();
					app.collectionViewer.highlight.generateMessage(fgData);
				}else{
					this.hideHighlight();;
				}

				this.highlightArrowEl.addEventListener('click', (e) => {
					this.hideHighlight();
					app.collectionViewer.highlight.generateMessage(fgData);
				});
			}, 

			generateMessage(fgData) {
				let type = '';
				fgData ? type = fgData.type : type = 'none';

				

				if(type === 'node-object'){
					let categoryList = fgData.categories.toString();
					categoryList = categoryList.replace(/,/g, ", ");
	
					let tagList = fgData.tags.toString();
					tagList = tagList.replace(/,/g, ", ");

					let message = {
						type: 'Objekt',
						content: '<h3>' + fgData.name + '</h3>'
								+ '<ul><li>Kategorien: ' + categoryList + '</li>'
								+ '<li>Tags: ' + tagList + '</li>'
								+ '<li>ID: ' + fgData.id + '</li></ul>',
						color: 'pearlwhite',
						shadow: 'skyblue',
						button1: { content: 'ansehen', color: 'skyblue', icon: 'eye' },
						button2: { content: 'mehr erfahren', color: 'skyblue', icon: 'arrow' }
					}

					app.gui.message.setMessage(message);

					let button1State = false;

					app.gui.message.messageButton1El.addEventListener('click', (e) => {
						button1State = !button1State;
						if(button1State){
							document.querySelector('a-camera').setAttribute('camera-move-to-target', {target: fgData, distance: 100, duration: 1200});
							message.button1 = {content: 'zurück', color: 'skyblue', icon: 'eye'};
							app.gui.message.setMessage(message);
						}else{
							document.querySelector('a-camera').setAttribute('camera-move-to-target', {target: 'start', distance: 100, duration: 1200});
							message.button1 = { content: 'ansehen', color: 'skyblue', icon: 'eye' };
							app.gui.message.setMessage(message);
						}
					})

					app.gui.message.messageButton2El.addEventListener('click', (e) => {
						let url = '?m=mv&model=' + fgData.id + '';
						window.location.href = url;
					})
				}

				if(type === 'node-category'){
					let categoryList = fgData.categories.toString();
					categoryList = categoryList.replace(/,/g, ", ");
	
					let tagList = fgData.tags.toString();
					tagList = tagList.replace(/,/g, ", ");
					
					let message = {
						type: 'Kategorie',
						content: '<h3>' + fgData.name + '</h3>'
								+ '<p>Hier steht später eine Kategoriebeschreibung</p>',
						color: 'pearlwhite',
						shadow: 'duckyellow'
					}

					app.gui.message.setMessage(message);
				}

				if(type === 'link-tag'){
					let message = {
						type: 'Tag',
						content: '<h3>' + fgData.name + '</h3>'
								+ '<p>Hier steht später eine Tagbeschreibung</p>',
						color: 'pearlwhite',
						shadow: 'smokegrey'
					}

					app.gui.message.setMessage(message);
				}
			},
		},

		filter: {

			init() {
				this.createElements();
			},

			createElements() {
				const filter = document.createElement('div');
				this.filterEl = filter;
				document.body.appendChild(filter);
				filter.className = 'cv-filter hide';
			}, 
		},

		createElements() {

			const collectionViewerElement = document.createElement('a-scene');
			this.collectionViewerEl = collectionViewerElement;
			document.body.appendChild(collectionViewerElement);
			collectionViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			collectionViewerElement.setAttribute('load-json-models', '');
			collectionViewerElement.setAttribute('xr-mode-ui', 'enabled: false');
			collectionViewerElement.setAttribute('light', 'defaultLightsEnabled: false');
			app.devMode && collectionViewerElement.setAttribute('stats', '');

			const cursorEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(cursorEntity);
			cursorEntity.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: true;');
			cursorEntity.setAttribute('raycaster', 'objects: [forcegraph];');

			const camera = document.createElement('a-camera');
			collectionViewerElement.appendChild(camera);
			//camera.setAttribute('my-look-controls', 'pointerLockEnabled: false;'); // reverseMouseDrag: true
			camera.setAttribute('orbit-controls', 'enabled: false');
			//camera.setAttribute('wasd-controls', 'fly: true; acceleration: 300;');
			camera.setAttribute('position', '0 0 0');
			camera.setAttribute('camera-focus-target', '');
			camera.setAttribute('camera-move-to-target', '');


			const ambientLightEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(ambientLightEntity);
			ambientLightEntity.setAttribute('light', 'type: ambient; color: #FAF0E6; intensity: 2');

			const directionalLightEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(directionalLightEntity);
			directionalLightEntity.setAttribute('light', 'type: directional; color: #FAF0E6; intensity: 4');
			directionalLightEntity.setAttribute('position', '-2 0 2');

			const assets = document.createElement('a-assets');
			collectionViewerElement.appendChild(assets);
		}
	}, //collectionViewer

	arViewer: {

		init(){
		this.createElements();
		this.name = "Entdeckermodus";
		this.firstContactWithMission= "<h3>Super! Nun bist du bereit das Objekt zu entdecken.</h3> <p>Schaue Dir das Objekt erst einmal von allen Seiten an. Wenn es möglich ist, gehe um das Objekt herum. Wenn nicht, kannst du das Objekt auch an dem Knopf unterhalb vom Objekt drehen.</br> Es gibt zwei verschiedene Modi: die Mission und die Tools. Bei der Mission bekommst du verschiedene Aufgaben gestellt und kannst so Bücher sammeln. Bei den Tools kannst du das 3D-Objekt genauer erforschen und sehen wie so ein 3D-Objekt aufgebaut ist. </p>";
		this.firstContactWithoutMission= "<h3>Super! Nun bist du bereit das Objekt zu entdecken.</h3><p>Schaue Dir das Objekt erst einmal von allen Seiten an. Wenn es möglich ist, gehe um das Objekt herum. Wenn nicht, kannst du das Objekt auch an dem Knopf unterhalb vom Objekt drehen.</br> Es gibt außerdem den Tools-Modus. Hier kannst du das 3D-Objekt genauer erforschen und sehen wie so ein 3D-Objekt aufgebaut ist. </p>";
		this.welcomeMessage= '<h3>Willkommen im Entdeckermodus!</h3> <p>Hier kannst Du das Objekt im Raum platzieren. Danach kannst du Dir das 3D-Objekt genauer ansehen.</p><p>Möchtest Du den Entdecker-Modus starten?</p>';
		this.firstContactMission = "<h3>Mission</h3> <p>Wilkommen bei deiner Mission. </br>Es gibt verschiedene Aufgaben, die du zu erledigen hast. Für jede erfolgreiche Aufgabe erhälst du ein Buch. </br> Info: Klicke oben links auf das Buch, um die Punkteübersicht anzeigen zu lassen. </br> Tipp: Gehe nah an das Objekt heran und ziele mit dem schwarzen Punkt auf ein Icon.</p>";
		this.firstContactTool = "<h3>Tools</h3> <p>Willkommen bei den Tools. Hier kannst du das Objekt mit Clipping genauer untersuchen. Bewege die Kamera dazu nahe an das Objekt, um das Objekt abzuschneiden. Außerdem kannst du einen Schnitt festhalten mit Freeze oder die Entfernung des Schnitts einstellen. </br> Du kannst die Textur, also die Beschaffenheit der Oberfläche, sowie das Wireframe, also das visuelle Modell des 3D-Object an- bzw. ausschalten.";
		this.goodbyeMessage = "<h3>Entdecker-Modus verlassen</h3> <p>Was möchtest du tun?</p>";
		this.goodbyeMessageButton1 = "Entdeckermodus erneut starten";
		this.goodbyeMessageButton2 = "Zum Modelviewer zurückkehren";
		this.startPlacing = '<img src="assets/hand.gemacht WebApp icon move perlweiss.svg" alt="Platzierungs-Icon" height="50px" /> <p>Um das Objekt zu platzieren, suche eine freie Boden- oder Tischfläche. Das Objekt soll dort in realer Größe platziert werden.</p>';
		this.leaveAR = '<p>Entdecker-Modus wirklich verlassen?</p>';
		this.startPlacingButton = 'Platzierung starten!';

		this.overview = "Übersicht";
		this.restartMissionButton = "Missionen neu starten";
		this.missionOverviewText = [
			"Objekte erfolgreich zugeordnet",
			"Punkte gefunden",
			"Fragen beantwortet",
			"Animationen gestartet",
		  ];
		this.solveMissions = '<h3>Schließe alle Missionen ab!</h3>';
		this.solveAllMissions = '<h3>Herzlichen Glückwunsch du hast alle Missionen erfüllt!</h3>';

		this.yes = "Ja";
		this.no = "Nein";
		this.allRight = "Alles klar";
		this.place = "Platzieren";
		this.placeNew = "Neu platzieren";

		this.placeMessages = [
			"Bewege die Kamera entlang einer Fläche",
			"Bewege das Objekt, indem du die Kamera bewegst. Wenn du zufrieden bist , klicke auf den Button.",
			"Du solltest jetzt das gesamte Objekt direkt vor dir sehen. Ist es korrekt platziert?",
		  ];

		this.dragDropHead = 'Drag & Drop';
		this.falseMessages = [
			"Ups! Das gehört hier nicht hin. Versuch's mal woanders!",
			"Hoppla! Das passt hier leider nicht. Ab zur richtigen Stelle",
			"Oh nein! Das fühlt sich hier nicht wohl. Versuch’s mal an einem anderen Ort!",
		  ];

		this.pointHead = "Punkt gefunden";
		this.quizHead = "Quiz";
		this.animationHead = "Animation";
		this.quizButton = "Antwort überprüfen";
		this.quizFalse = "Leider falsch. Probiere es noch einmal!";
		this.quizNull = "Bitte wähle etwas aus!";

		//texts for cursor animation
		this.dragObject = "Objekt aufheben";
		this.dropObject = "Objekt ablegen";
		this.activatePoint = "Punkt aktivieren";
		this.activateQuiz = "Quiz anzeigen";
		this.showBook = "Buch anzeigen";
		this.restartAnim = "Animation neu starten";

		this.rotationTip = "Klicke und ziehe hier um zu rotieren";
		this.inventarTip = "Klick mich, um mich abzulegen";
		this.farAwayTip = "Gehe näher an das Objekt heran!";
		this.clickTip = "Klicke hier!"
		this.clickMeTip = "Klicke mich zum Ablegen";

		},

		createElements() {
			const arViewerElement = document.createElement('a-scene');
			this.arViewerElement = arViewerElement;
			document.body.appendChild(arViewerElement);
			arViewerElement.setAttribute('id', 'scene');
			arViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			arViewerElement.setAttribute('xr-mode-ui', 'enabled:false');
			arViewerElement.setAttribute('light', 'defaultLightsEnabled: false');
			arViewerElement.setAttribute('webxr', 'requiredFeatures:  hit-test, dom-overlay, anchors; overlayElement: .gui-message-box; referenceSpaceType:local;');
			arViewerElement.setAttribute('controller', '');
			arViewerElement.setAttribute('renderer', 'stencil:true;');
			arViewerElement.setAttribute('tools', 'enabled:false;')

			const assets = document.createElement('a-assets');
			arViewerElement.appendChild(assets);

			const imgSprite = document.createElement('img');
			assets.appendChild(imgSprite);
			imgSprite.id = 'sprite';
			imgSprite.crossOrigin = 'anonymous';
			// TODO our own sprite
			imgSprite.src = 'https://cdn.glitch.global/421736eb-f719-4a40-8df3-054eca30d277/spark.png?v=1715082340035';

			const imgPlacer = document.createElement('img');
			assets.appendChild(imgPlacer);
			imgPlacer.id = 'placer';
			imgPlacer.crossOrigin = 'anonymous';
			imgPlacer.src = 'assets/hand.gemacht WebApp ar marker drop.svg';

			const imgDrag = document.createElement('img');
			assets.appendChild(imgDrag);
			imgDrag.id = 'dragIcon';
			imgDrag.crossOrigin = 'anonymous';
			imgDrag.src = 'assets/hand.gemacht WebApp ar marker drag.svg';

			const imgArrow = document.createElement('img');
			assets.appendChild(imgArrow);
			imgArrow.id = 'arrow';
			imgArrow.crossOrigin = 'anonymous';
			imgArrow.src = 'assets/hand.gemacht WebApp ar rotate arrows rotate.svg';

			const imgBook = document.createElement('img');
			assets.appendChild(imgBook);
			imgBook.id = 'book';
			imgBook.crossOrigin = 'anonymous';
			imgBook.src = 'assets/hand.gemacht WebApp ar marker book.svg'

			const imgPlay = document.createElement('img');
			assets.appendChild(imgPlay);
			imgPlay.id = 'playAnim';
			imgPlay.crossOrigin = 'anonymous';
			imgPlay.src = "assets/hand.gemacht WebApp ar marker animation.svg"

			const imgExcl = document.createElement('img');
			assets.appendChild(imgExcl);
			imgExcl.id = 'exclamation';
			imgExcl.crossOrigin = 'anonymous';
			imgExcl.src = "assets/hand.gemacht WebApp ar marker quest.svg"

			const imgQuiz = document.createElement('img');
			assets.appendChild(imgQuiz);
			imgQuiz.id = 'question';
			imgQuiz.crossOrigin = 'anonymous';
			imgQuiz.src = "assets/hand.gemacht WebApp ar marker quiz.svg"

			const ambientLightEntity = document.createElement('a-entity');
			arViewerElement.appendChild(ambientLightEntity);
			ambientLightEntity.setAttribute('light', 'type: ambient; color: #FAF0E6; intensity: 2');

			const directionalLightEntity = document.createElement('a-entity');
			arViewerElement.appendChild(directionalLightEntity);
			directionalLightEntity.setAttribute('light', 'type: directional; color: #FAF0E6; intensity: 2');
			directionalLightEntity.setAttribute('position', '-2 0 2');

			const camera = document.createElement('a-entity');
			arViewerElement.appendChild(camera);
			camera.setAttribute('id', 'camera');
			camera.setAttribute('camera', '');
			camera.setAttribute('position', '0 0.2 0.5');
			camera.setAttribute('visibility-handler', '');
			const cameraCursor = document.createElement('a-entity');
			camera.appendChild(cameraCursor);
			cameraCursor.setAttribute('id', 'cursor');
			cameraCursor.setAttribute('geometry', 'primitive: circle; radius: 0.001;');
			cameraCursor.setAttribute('material', 'color:black; shader:flat');
			cameraCursor.setAttribute('position', '0 0 -0.01');
			cameraCursor.setAttribute('raycaster', 'objects: .collidable,.toolidable; enabled:false;');
			cameraCursor.setAttribute('scale', '0.1 0.1 0.1');		

			const ring = document.createElement('a-entity');
			cameraCursor.appendChild(ring);
			ring.setAttribute('geometry', 'primitive:ring; radiusInner:0.02; radiusOuter:0.03; thetaLength:0');
			ring.setAttribute('material', 'shader:flat; transparent:true; opacity: 0.5');
			ring.setAttribute('animation-handler', '');
			ring.setAttribute('animation', 'property:geometry.thetaLength; from:0; to: 360; dur:2000; startEvents:startRing; pauseEvents: stopRing');

			const placeObject = document.createElement('a-entity');
			arViewerElement.appendChild(placeObject);
			placeObject.setAttribute('id', 'place-object');
			placeObject.setAttribute('ar-hit-test-special', '');
			placeObject.setAttribute('visible', 'false');

			const containerObject = document.createElement('a-entity');
			arViewerElement.appendChild(containerObject);
			containerObject.setAttribute('id', 'container');
			containerObject.setAttribute('hide-on-start-ar', '');
			containerObject.setAttribute('visible', 'false');
			
			const object = document.createElement('a-entity');
			containerObject.appendChild(object);
			object.setAttribute('id', 'object');
			object.setAttribute('class', 'collidable');
			object.setAttribute('get-bounding-box', '');
			object.setAttribute('distance-listener', '');
			object.setAttribute('animation-mixer', '');
			object.setAttribute('anchored', 'persistent:true');

			const missionsContainer = document.createElement('a-entity');
			containerObject.appendChild(missionsContainer);
			missionsContainer.setAttribute('id', 'missions');

			const noMissionsContainer = document.createElement('a-entity');
			containerObject.appendChild(noMissionsContainer);
			noMissionsContainer.setAttribute('id', 'noMissions');

			const rotationControl = document.createElement('a-entity');
			arViewerElement.appendChild(rotationControl);
			rotationControl.setAttribute('id', 'rotation-ring');
			rotationControl.setAttribute('geometry', 'primitive:circle');
			rotationControl.setAttribute('material','transparent:true;src:#arrow');
			rotationControl.setAttribute('rotation', '-90 0 0');
			rotationControl.setAttribute('turn-to-camera', 'onlyYAxis:true');

			const touchCircle = document.createElement('a-entity');
			rotationControl.appendChild(touchCircle);
			touchCircle.setAttribute('id', 'touch-circle');
			touchCircle.setAttribute('geometry', 'primitive:circle; radius: 0.3;');
			touchCircle.setAttribute('visible', 'false');
			touchCircle.setAttribute("turn-to-camera", '');
			touchCircle.setAttribute('rotation-handler', 'enabled:false');	

			const rotHandle = document.createElement('a-entity');
			rotationControl.appendChild(rotHandle);
			rotHandle.setAttribute('id', 'rot-handle');
			rotHandle.setAttribute('geometry', 'primitive:circle; radius: 0.3;');
			rotHandle.setAttribute('rotation', ' 0 0 0');
			rotHandle.setAttribute('material', 'color:#FAF0E6');
		}

	}, //arViewer

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
	}, 

	getErrorFromURL() {
		const queryString = window.location.search;
		this.urlParams = new URLSearchParams(queryString);

		if(this.urlParams.get('error')) {
			return this.urlParams.get('error');
		}else{
			return false;
		}
	}, 

	errorHandler(error){
		this.devMode && console.log('dev --- error: ', error);

		if(error === '001'){
			this.gui.error.content = 'Error 001: A wrong or no model id was found in the URL.';
			this.gui.error.buttonText = 'OK'
			this.gui.error.showError();
		}
	}
}

//END app 

app.init();
export { app };











