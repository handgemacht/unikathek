


//START Global Variables
let setError = '';
//END Global Variables



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
	version: 'Version: a0.8-2025/05/16',
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
			this.devMode ? url='?m=cv&dev=true' : '';
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

		if (this.viewerMode === 'ar') {
			this.arViewer.init();
			this.gui.loadingScreen.content = 'loading ar viewer';
			this.gui.loadingScreen.showLoadingScreen();
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
			type: 'default type',
			content: 'default message',
			color: 'smokegrey',
			shadow: null,
			button1: {content: '', color:'smokegrey', shadow: 'coalgrey'},
			button2: {content: '', color:'smokegrey', shadow: 'coalgrey'},
			showClose: true,

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

				const guiMessageType = document.createElement('div');
				this.messageTypeEl = guiMessageType;
				guiMessageContainer.appendChild(guiMessageType);
				guiMessageType.className = 'gui-message-type';

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
				guiMessageContainer.appendChild(guiMessageButtonContainer);
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

			showMessage() {
				this.messageContainerEl.classList.remove('hide');
			}, 

			hideMessage() {
				this.type = 'default type';
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

				this.messageTypeEl.className = 'gui-message-type';
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
				Object.keys(message).includes("type") ? this.type = message.type : '';
				Object.keys(message).includes("content") ? this.content = message.content : '';
				Object.keys(message).includes("color") ? this.color = message.color : '';
				Object.keys(message).includes("shadow") ? this.shadow = 'shadow-'+message.shadow : '';
				if(Object.keys(message).includes("button1")){
					Object.keys(message.button1).includes("content") ? this.button1.content = message.button1.content : '';
					Object.keys(message.button1).includes("color") ? this.button1.color = message.button1.color : '';
					Object.keys(message.button1).includes("shadow") ? this.button1.shadow = 'shadow-'+message.button1.shadow : '';
				}
				if(Object.keys(message).includes("button2")){
					Object.keys(message.button2).includes("content") ? this.button2.content = message.button2.content : '';
					Object.keys(message.button2).includes("color") ? this.button2.color = message.button2.color : '';
					Object.keys(message.button2).includes("shadow") ? this.button2.shadow = 'shadow-'+message.button2.shadow : '';
				}
				Object.keys(message).includes("showClose") ? this.showClose = message.showClose : this.showClose = true;

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
				this.hideTooltip()
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

				if(type !== 'none'){
					this.showTooltip(fgData.type, fgData.name, false);
				}else{
					;
				}
			} 
		},

		highlight: {

			init() {
				this.createElements();
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
					this.showHighlight(type, fgData.name, true);
					app.gui.message.hideMessage();
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
					document.querySelector('a-camera').setAttribute('camera-move-to-target', {target: fgData, distance: 60, duration: 1200});
					let message = {
						type: 'Objekt',
						content: '<h3>' + fgData.name + '</h3>'
								+ '<ul><li>' + fgData.type + '</li>'
								+ '<li>' + fgData.category + '</li>'
								+ '<li>' + fgData.id + '</li></ul>',
						color: 'skyblue',
						button1: { content: 'Ansehen', color: 'pearlwhite', shadow: 'coalgrey' }
					}

					app.gui.message.setMessage(message);

					app.gui.message.messageButton1El.addEventListener('click', (e) => {
						let url = '?m=mv&model=' + fgData.id + '';
						window.location.href = url;
					})
				}

				if(type === 'node-category'){
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

		createElements() {

			const collectionViewerElement = document.createElement('a-scene');
			this.collectionViewerEl = collectionViewerElement;
			document.body.appendChild(collectionViewerElement);
			collectionViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			collectionViewerElement.setAttribute('load-json-models', '');
			collectionViewerElement.setAttribute('xr-mode-ui', 'enabled: false');
			app.devMode && collectionViewerElement.setAttribute('stats', '');

			const cursorEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(cursorEntity);
			cursorEntity.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: true;');
			cursorEntity.setAttribute('raycaster', 'objects: [forcegraph];');

			const camera = document.createElement('a-camera');
			collectionViewerElement.appendChild(camera);
			camera.setAttribute('my-look-controls', 'pointerLockEnabled: false; reverseMouseDrag: true');
			camera.setAttribute('wasd-controls', 'fly: true; acceleration: 300;');
			camera.setAttribute('position', '0 0 125');
			camera.setAttribute('camera-focus-target', '');
			camera.setAttribute('camera-move-to-target', '')

			const cursor = document.createElement('a-cursor');
			collectionViewerElement.appendChild(cursor);

			const assets = document.createElement('a-assets');
			collectionViewerElement.appendChild(assets);
		}
	}, //collectionViewer

	arViewer: {

		init(){
			this.createElements();
		},
		createElements() {
			const arViewerElement = document.createElement('a-scene');
			this.arViewerElement = arViewerElement;
			document.body.appendChild(arViewerElement);
			arViewerElement.setAttribute('id', 'scene');
			arViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			//TODO enabled false
			arViewerElement.setAttribute('xr-mode-ui', 'XRMode:ar');
			arViewerElement.setAttribute('webxr', 'requiredFeatures:  hit-test, dom-overlay, anchors; overlayElement: #overlay; referenceSpaceType:local;');
			arViewerElement.setAttribute('controller', '');
			arViewerElement.setAttribute('renderer', 'stencil:true;')

			const assets = document.createElement('a-assets');
			arViewerElement.appendChild(assets);

			const imgSprite = document.createElement('img');
			assets.appendChild(imgSprite);
			imgSprite.id = 'sprite';
			imgSprite.crossOrigin = 'anonymous';
			//TODO our own sprite
			imgSprite.src = 'https://cdn.glitch.global/421736eb-f719-4a40-8df3-054eca30d277/spark.png?v=1715082340035';

			const imgPlacer = document.createElement('img');
			assets.appendChild(imgPlacer);
			imgPlacer.id = 'placer';
			imgPlacer.crossOrigin = 'anonymous';
			//TODO upload or new placer svg or png
			imgPlacer.src = 'https://cdn.glitch.global/5e3e06f0-b4c6-44f7-b937-2c6dd722ebec/placer.png?v=1715762971794';

			const imgBook = document.createElement('img');
			assets.appendChild(imgBook);
			imgBook.id = 'book';
			imgBook.crossOrigin = 'anonymous';
			imgBook.src = 'assets/hand.gemacht WebApp button context-story perlweiss.svg'

			const camera = document.createElement('a-entity');
			arViewerElement.appendChild(camera);
			camera.setAttribute('id', 'camera');
			camera.setAttribute('camera', '');
			camera.setAttribute('position', '0 0.2 0.5');

			const cameraCursor = document.createElement('a-entity');
			camera.appendChild(cameraCursor);
			cameraCursor.setAttribute('id', 'cursor');
			cameraCursor.setAttribute('geometry', 'primitive: circle; radius: 0.001;');
			cameraCursor.setAttribute('material', 'color:black; shader:flat');
			cameraCursor.setAttribute('position', '0 0 -0.01');
			cameraCursor.setAttribute('raycaster', 'objects: .collidable; enabled:false;');
			cameraCursor.setAttribute('scale', '0.1 0.1 0.1');

			const cameraText = document.createElement('a-text');
			cameraCursor.appendChild(cameraText);
			cameraText.setAttribute('visibility-handler', '');
			cameraText.setAttribute('visible','false');
			cameraText.setAttribute('value', 'Objekt aufheben');
			cameraText.setAttribute('position', '0 0.4 0');
			cameraText.setAttribute('align', 'center');
			cameraText.setAttribute('color', 'black');
			cameraText.setAttribute('scale', '0.02 0.02 0.02');

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
			
			const object = document.createElement('a-entity');
			containerObject.appendChild(object);
			object.setAttribute('id', 'object');
			object.setAttribute('class', 'collidable');
			object.setAttribute('get-bounding-box', '');
			object.setAttribute('distance-listener', '');
			object.setAttribute('anchored', 'persistent:true');

			const missionsContainer = document.createElement('a-entity');
			containerObject.appendChild(missionsContainer);
			missionsContainer.setAttribute('id', 'missions');

			const rotationControl = document.createElement('a-entity');
			arViewerElement.appendChild(rotationControl);
			rotationControl.setAttribute('id', 'rotation-ring');
			rotationControl.setAttribute('geometry', 'primitive:ring; radiusInner:0; radiusOuter:0;');
			rotationControl.setAttribute('material', 'color:#9B9691');
			rotationControl.setAttribute('rotation', '-90 0 0');
			rotationControl.setAttribute('turn-to-camera', 'onlyYAxis:true');

			const touchSphere = document.createElement('a-entity');
			rotationControl.appendChild(touchSphere);
			touchSphere.setAttribute('id', 'touch-sphere');
			touchSphere.setAttribute('geometry', 'primitive:sphere; radius: 0.3;');
			touchSphere.setAttribute('material', 'shader:flat;transparent:true; opacity:0;');
			touchSphere.setAttribute('rotation-handler', '');

			const arrow = document.createElement('a-entity');
			rotationControl.appendChild(arrow);
			arrow.setAttribute('geometry', 'primitive:plane; width:0.015; height: 0.015;');
			arrow.setAttribute('position', ' 0 0 0.001');
			arrow.setAttribute('material', 'src:#arrow');
			
			//from ChatGPT
			var overlay = document.createElement('div');
			overlay.id = 'overlay';
			overlay.className = 'hide';

			var bottomMenu = document.createElement('div');
			bottomMenu.className = 'bottom-menu hide';
			var missionBtn = document.createElement('button');
			missionBtn.id = 'missionBtn';
			missionBtn.className = 'menu-btn';
			missionBtn.textContent = 'Mission';
			var toolsBtn = document.createElement('button');
			toolsBtn.id = 'toolsBtn';
			toolsBtn.className = 'menu-btn';
			toolsBtn.textContent = 'Tools';
			bottomMenu.appendChild(missionBtn);
			bottomMenu.appendChild(toolsBtn);
			overlay.appendChild(bottomMenu);

			var toggleContainer = document.createElement('div');
			toggleContainer.className = 'toggle-container hide';
			var replaceButton = document.createElement('button');
			replaceButton.className = 'message-btn';
			replaceButton.id = 'replace-button';
			replaceButton.textContent = 'Neu platzieren';
			toggleContainer.appendChild(replaceButton);

			function createToggle(id, label, checked) {
				var wrapper = document.createElement('div');
				wrapper.className = 'toggle-wrapper';
				var span = document.createElement('span');
				span.className = 'toggle-label';
				span.textContent = label;
				var labelSwitch = document.createElement('label');
				labelSwitch.className = 'switch';
				var input = document.createElement('input');
				input.type = 'checkbox';
				input.id = id;
				if (checked) input.checked = true;
				var slider = document.createElement('span');
				slider.className = 'slider';
				labelSwitch.appendChild(input);
				labelSwitch.appendChild(slider);
				wrapper.appendChild(span);
				wrapper.appendChild(labelSwitch);
				return wrapper;
			}

			toggleContainer.appendChild(createToggle('wireframe', 'Wireframe', false));
			toggleContainer.appendChild(createToggle('texture', 'Textur', true));
			toggleContainer.appendChild(createToggle('clipping', 'Clipping', true));
			overlay.appendChild(toggleContainer);

			var missionOverlay = document.createElement('div');
			missionOverlay.id = 'missionOverlay';

			var scoreContainer = document.createElement('div');
			scoreContainer.id = 'score-container';
			scoreContainer.className = 'book-container';
			var scoreImg = document.createElement('img');
			scoreImg.src = 'assets/hand.gemacht WebApp button context-story perlweiss.svg';
			scoreImg.alt = 'Buch Score';
			var scoreSpan = document.createElement('span');
			scoreSpan.id = 'score';
			scoreSpan.textContent = '0/0';
			var exclamationImg = document.createElement('img');
			//TODO own exclamation mark
			exclamationImg.src = 'https://cdn.glitch.global/5e3e06f0-b4c6-44f7-b937-2c6dd722ebec/14-10-13-121_256.gif?v=1716964501140';
			exclamationImg.alt = 'exclamation mark';
			exclamationImg.height = '40';
			exclamationImg.width = '40';
			exclamationImg.className = 'exclamation-mark hide';
			scoreContainer.appendChild(scoreImg);
			scoreContainer.appendChild(scoreSpan);
			scoreContainer.appendChild(exclamationImg);
			missionOverlay.appendChild(scoreContainer);

			function createPopup(id, title, content) {
				var popup = document.createElement('div');
				popup.id = id;
				popup.className = 'annotation hide';
				var closeContainer = document.createElement('div');
				closeContainer.className = 'annotation-close-container';
				var closeImg = document.createElement('img');
				closeImg.src = 'assets/hand.gemacht WebApp close kohlegrau.svg';
				closeImg.alt = 'Schließen-Icon';
				closeImg.className = 'annotation-close-symbol';
				closeImg.width = '100';
				closeImg.height = '100';
				closeContainer.appendChild(closeImg);
				popup.appendChild(closeContainer);
				var bookImg = document.createElement('img');
				bookImg.src = 'assets/hand.gemacht WebApp button context-story perlweiss.svg ';
				bookImg.alt = 'Buch-Icon';
				bookImg.className = 'annotation-book-symbol hide';
				var headline = document.createElement('h3');
				headline.className = 'headline';
				headline.textContent = title;
				var annotationImage = document.createElement('div');
				annotationImage.className = 'annotation-image';
				var imageBox = document.createElement('div');
				imageBox.className = 'annotation-image-box';
				var img = document.createElement('img');
				img.width = '100';
				img.height = '100';
				imageBox.appendChild(img);
				annotationImage.appendChild(imageBox);
				var caption = document.createElement('p');
				caption.className = 'annotation-image-caption';
				var copyright = document.createElement('span');
				copyright.className = 'copyright';
				caption.appendChild(copyright);
				annotationImage.appendChild(caption);
				var annotationText = document.createElement('p');
				annotationText.className = 'annotation-text';
				annotationText.textContent = content;
				popup.appendChild(bookImg);
				popup.appendChild(headline);
				popup.appendChild(annotationImage);
				popup.appendChild(annotationText);
				return popup;
			}

			missionOverlay.appendChild(createPopup('drag-drop-popup', 'Headline', 'Text'));

			var pointPopup = createPopup('point-popup', 'Headline', 'Text');
			var audio = document.createElement('audio');
			audio.className = 'hide';
			audio.controls = true;
			var source = document.createElement('source');
			source.id = 'audioSrc';
			source.src = '';
			source.type = 'audio/mpeg';
			audio.appendChild(source);
			pointPopup.appendChild(audio);
			missionOverlay.appendChild(pointPopup);

			var quizPopup = createPopup('quiz-popup', 'Question', '');
			var quizForm = document.createElement('form');
			quizForm.id = 'quiz-form';
			function createAnswer(id, value, label) {
				var container = document.createElement('div');
				container.className = 'answer-container';
				var input = document.createElement('input');
				input.type = 'radio';
				input.id = id;
				input.name = 'answer';
				input.value = value;
				var answerLabel = document.createElement('label');
				answerLabel.htmlFor = id;
				answerLabel.className = 'answer-option';
				answerLabel.textContent = label;
				container.appendChild(input);
				container.appendChild(answerLabel);
				return container;
			}
			quizForm.appendChild(createAnswer('answer1', 'paris', 'Paris'));
			quizForm.appendChild(createAnswer('answer2', 'london', 'London'));
			quizForm.appendChild(createAnswer('answer3', 'berlin', 'Berlin'));
			var checkButton = document.createElement('button');
			checkButton.id = 'checkButton';
			checkButton.className = 'message-btn';
			checkButton.type = 'button';
			checkButton.textContent = 'Antwort überprüfen';
			quizForm.appendChild(checkButton);
			quizPopup.appendChild(quizForm);
			quizPopup.appendChild(document.createElement('p')).className = 'annotation-text';
			missionOverlay.appendChild(quizPopup);

			var inventar = document.createElement('div');
			inventar.id = 'inventar';
			missionOverlay.appendChild(inventar);

			var missionOverview = createPopup('mission-overview-popup', 'Missionen', '');
			missionOverview.className = 'annotation mission hide';
			function createMission(id, score, text) {
				var container = document.createElement('div');
				container.className = 'book-container';
				var img = document.createElement('img');
				img.src = 'assets/hand.gemacht WebApp close kohlegrau.svg';
				img.alt = 'Buch Score';
				img.height = '50';
				var p = document.createElement('p');
				p.id = id;
				p.className = 'annotation-text';
				var span = document.createElement('span');
				span.className = 'score';
				span.textContent = score;
				p.appendChild(span);
				p.appendChild(document.createTextNode(text));
				container.appendChild(img);
				container.appendChild(p);
				return container;
			}
			missionOverview.appendChild(createMission('mission1', '0', '/2 Objekte erfolgreich zugeordnet'));
			missionOverview.appendChild(createMission('mission2', '0', '/1 Punkte gefunden'));
			missionOverview.appendChild(createMission('mission3', '0', '/1 Fragen beantwortet'));
			missionOverview.appendChild(createMission('mission4', '0', '/1 Animationen gestartet'));
			var restartText = document.createElement('p');
			restartText.className = 'annotation-text hide';
			restartText.id = 'restart-text';
			restartText.textContent = 'Möchtest du noch einmal starten?';
			missionOverview.appendChild(restartText);
			var missionButtons = document.createElement('div');
			missionButtons.id = 'missionButtons';
			missionButtons.className = 'button-container';
			var yesButton = document.createElement('button');
			yesButton.className = 'message-btn hide';
			yesButton.textContent = 'Ja';
			missionButtons.appendChild(yesButton);
			missionOverview.appendChild(missionButtons);
			missionOverlay.appendChild(missionOverview);
			overlay.appendChild(missionOverlay);

			var smallMessage = document.createElement('div');
			smallMessage.className = 'message hide';
			var smallMessageText = document.createElement('p');
			smallMessageText.className = 'annotation-text';
			smallMessageText.textContent = 'Text';
			var messageContainer = document.createElement('div');
			messageContainer.id = 'message';
			messageContainer.className = 'button-container';
			var msgBtn1 = document.createElement('button');
			msgBtn1.className = 'message-btn hide';
			var msgBtn2 = document.createElement('button');
			msgBtn2.className = 'message-btn hide';
			messageContainer.appendChild(msgBtn1);
			messageContainer.appendChild(msgBtn2);
			smallMessage.appendChild(smallMessageText);
			smallMessage.appendChild(messageContainer);
			overlay.appendChild(smallMessage);

			var bigMessage = document.createElement('div');
			bigMessage.id = 'big-message';
			bigMessage.className = 'annotation hide';
			var bigMessageImg = document.createElement('img');
			bigMessageImg.src = 'assets/hand.gemacht WebApp close kohlegrau.svg';
			bigMessageImg.alt = 'Buch-Icon';
			bigMessageImg.className = 'book-symbol';
			var bigMessageText = document.createElement('p');
			bigMessageText.className = 'annotation-text';
			bigMessageText.textContent = 'Text';
			var navButton = document.createElement('button');
			navButton.className = 'nav';
			navButton.textContent = 'Los gehts!';
			bigMessage.appendChild(bigMessageImg);
			bigMessage.appendChild(bigMessageText);
			bigMessage.appendChild(navButton);
			overlay.appendChild(bigMessage);

			var closeContainer = document.createElement('div');
			closeContainer.id = 'close-cont';
			closeContainer.className = 'annotation-close-container';
			var closeSymbol = document.createElement('img');
			closeSymbol.src = 'assets/hand.gemacht WebApp close kohlegrau.svg';
			closeSymbol.alt = 'Schließen-Icon';
			closeSymbol.className = 'annotation-close-symbol';
			closeSymbol.width = '24';
			closeSymbol.height = '24';
			closeContainer.appendChild(closeSymbol);
			overlay.appendChild(closeContainer);

			document.body.appendChild(overlay);

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











