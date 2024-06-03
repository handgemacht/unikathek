


//START Global Variables
let setError = '';
//END Global Variables



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
			let url='?m=c';
			this.devMode ? url='?m=c&dev=true' : '';
  			window.location.href = url;
		}

		if (this.viewerMode === 'c') {
			this.collectionViewer.init();
			app.gui.loadingScreen.content = 'loading collection';
			app.gui.loadingScreen.show();
		}

		if (this.viewerMode === 'm') {
		}

		if (this.viewerMode === 'a') {
		}		
		
	}, //init

	gui: {
			
		init() {
			this.title.init();
			this.logo.init();
			this.version.init();
			this.loadingScreen.init();
			this.error.init();
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
		
				const guiLoadingAnimation = document.createElement('object');
				this.loadingAnimationEl = guiLoadingAnimation;
				guiLoadingScreen.appendChild(guiLoadingAnimation);
				guiLoadingAnimation.className = 'gui-loading-animation';
				guiLoadingAnimation.type = 'image/svg+xml';
				guiLoadingAnimation.data = 'assets/hand.gemacht loading.svg';
				guiLoadingAnimation.alt = 'hand.gemacht Lade-Animation';
				guiLoadingAnimation.width = '100px';
				guiLoadingAnimation.height = '100px';
		
				const guiLoadingText = document.createElement('div');
				this.loadingTextEl = guiLoadingText;
				guiLoadingScreen.appendChild(guiLoadingText);
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

		error: {
			content: 'error ...',
			buttonText: 'OK',

			init() {
				this.createElements();
			}, 

			createElements() {
				const guiError = document.createElement('div');
				this.errorEl = guiError;
				document.body.appendChild(guiError);
				guiError.className = 'gui-error hide';
				guiError.appendChild(document.createTextNode(this.content));

				const guiErrorButton = document.createElement('button');
				this.errorButtonEl = guiErrorButton;
				guiError.appendChild(guiErrorButton);
				guiErrorButton.className = 'gui-error-button hide';
				guiErrorButton.appendChild(document.createTextNode(this.buttonText));
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
						this.close();
					});
				}
				if(this.burgerEl) {
					this.burgerEl.addEventListener('click', (evt) => {
						this.open();
					});
				}
			},
	
			open() {
				if(this.containerEl && this.burgerEl) {
					this.containerEl.classList.remove('hide');
					this.burgerEl.classList.add('hide');
				}	
			},
	
			close() {
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
		},

		createElements() {

			const collectionViewerElement = document.createElement('a-scene');
			this.collectionViewerEl = collectionViewerElement;
			document.body.appendChild(collectionViewerElement);
			collectionViewerElement.className = 'hide';
			collectionViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			collectionViewerElement.setAttribute('load-json-models', '');
			collectionViewerElement.setAttribute('xr-mode-ui', 'enabled: false');

			const cursorEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(cursorEntity);
			cursorEntity.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: true');
			cursorEntity.setAttribute('raycaster', 'objects: [forcegraph]');

			const camera = document.createElement('a-camera');
			collectionViewerElement.appendChild(camera);
			camera.setAttribute('look-controls', 'pointerLockEnabled: false');
			camera.setAttribute('wasd-controls', 'fly: true; acceleration: 300');
			camera.setAttribute('position', '0 0 150');
			camera.setAttribute('camera-focus-target', '');

			const assets = document.createElement('a-assets');
			collectionViewerElement.appendChild(assets);

			const sky = document.createElement('a-sky');
			collectionViewerElement.appendChild(sky);
			sky.setAttribute('color', '#FAF0E6');

			const forcegraphTooltip = document.createElement('div');
			document.body.appendChild(forcegraphTooltip);
			forcegraphTooltip.className = 'hide';
			forcegraphTooltip.id = 'forcegraph-tooltip';

		}
	},

	getViewerModeFromURL() {
		const queryString = window.location.search;
		this.urlParams = new URLSearchParams(queryString);

		if(this.urlParams.get('m')==='m' ||	this.urlParams.get('m')==='c' || this.urlParams.get('m')==='a') {
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











