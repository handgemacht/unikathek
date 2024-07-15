



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
	title: 'appTitle',
	version: 'alpha 1.0 24/07/01',
	devMode: false,
	viewerMode: false,

	filepaths: {
		files: './files/',
		assets: './assets/',
		draco: './draco/'
	},

	assets(filepath) {
		const assets = {
			logo: {
				alt: 'hand.gemacht Logo',
				src: {
					pearlwhite: filepath + 'hand.gemacht logo perlweiss.svg',
					coalgrey: filepath + 'hand.gemacht logo kohlegrau.svg'
				}
			},

			loading: {
				alt: 'hand.gemacht Ladeanimation',
				src: filepath + 'hand.gemacht loading .svg'
			},

			icon: {
			'arrow up': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon arrow up pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon arrow up coalgrey.svg' 
				}
			},
			'arrow right': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon arrow right pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon arrow right coalgrey.svg' 
				}
			},
			'arrow down': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon arrow down pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon arrow down coalgrey.svg' 
				}
			},
			'arrow left': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon arrow left pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon arrow left coalgrey.svg' 
				}
			},
			'category': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon category pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon category coalgrey.svg' 
				}
			},
			'context': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon context pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon context coalgrey.svg' 
				}
			},
			'filter': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon filter pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon filter coalgrey.svg' 
				}
			},
			'info': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon info pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon info coalgrey.svg' 
				}
			},
			'listen': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon listen pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon listen coalgrey.svg' 
				}
			},
			'measurement': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon measurement pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon measurement coalgrey.svg' 
				}
			},
			'menu': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon menu pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon menu coalgrey.svg' 
				}
			},
			'move': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon move pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon move coalgrey.svg' 
				}
			},
			'read': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon read pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon read coalgrey.svg' 
				}
			},
			'reset view': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon reset view pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon reset view coalgrey.svg' 
				}
			},
			'search': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon search pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon search coalgrey.svg' 
				}
			},
			'tag': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon tag pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon tag coalgrey.svg' 
				}
			},
			'watch': {
				alt: 'alttextxy',
				src: {
					pearlwhite: filepath + 'hand.gemacht WebApp icon watch pearlwhite.svg',
					coalgrey: filepath + 'hand.gemacht WebApp icon watch coalgrey.svg' 
				}
			},
			small: {
				'close': {
					alt: 'alttextxy',
					src: {
							pearlwhite: filepath + 'hand.gemacht WebApp icon small close pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon small close coalgrey.svg' 
					}
				},
				'pause': {
					alt: 'alttextxy',
					src: {
							pearlwhite: filepath + 'hand.gemacht WebApp icon small pause pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon small pause coalgrey.svg' 
					}
				},
				'play': {
					alt: 'alttextxy',
					src: {
							pearlwhite: filepath + 'hand.gemacht WebApp icon small play pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon small play coalgrey.svg' 
					}
				},
			}
			},

			cv: {
				marker: {
					'category': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp cv marker category.svg'
					}
				}
			},

			ar: {
				marker: {
					'animation': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker animation.svg'
					},
					'book': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker book.svg'
					},
					'drag': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker drag.svg'
					},
					'drop': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker drop.svg'
					},
					'quest': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker quest.svg'
					},
					'quiz': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker quiz.svg'
					},
					'book': {
						alt: 'alttextxy',
						src: filepath + 'hand.gemacht WebApp ar marker book.svg'
					},
				},
				'rotate arrows': {
					alt: 'alttextxy',
					src: filepath + 'hand.gemacht WebApp ar rotate arrows.svg'
				}
			}, 

			patronage: {
				alt: 'Bayerisches Staatsministerium der Finanzen und für Heimat als Förderer Logo',
				src: filepath + 'stmfh foerderung.png'
			}
		}

		return assets;
	},

	init() {
		document.body.innerHTML = '';

		this.assets = this.assets(this.filepaths.assets);

		this.devMode = this.getParamsModeFromURL('dev');
		this.showStats = this.getParamsModeFromURL('stats');
		this.viewerMode = this.getViewerModeFromURL();
		this.error = this.getErrorFromURL();

		// from: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
		window.mobileCheck = function() {
			let check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		};

		let isMobile = window.mobileCheck();

		if(isMobile) {
			this.devMode && console.log('dev --- mobileAndTabletCheck: ', isMobile);
			//screen.orientation.lock('portrait');
		}

		screen.orientation.addEventListener('change', this.handleScreenOrientation);

		this.gui.init();		

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
			this.gui.title.init();
			this.gui.loadingScreen.content = 'loading collection viewer';
			this.gui.loadingScreen.showLoadingScreen();
			this.collectionViewer.init();
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
			this.gui.loadingScreen.content = 'loading augmented reality';
			this.gui.loadingScreen.showLoadingScreen();
			}else{
				this.devMode && console.log("dev --- WebXR AR is not supported on this browser");
			}
			});
		}else{
			this.devMode && console.log("dev --- WebXR is not supported on this browser");
		}

		this.gui.setupCollapsibles();
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
				const guiTitleContainer = document.createElement('div');
				this.titleContainerEl = guiTitleContainer;
				document.body.appendChild(guiTitleContainer);
				guiTitleContainer.className = 'gui-title-container';

				const guiTitle = document.createElement('h1');
				this.titleEl = guiTitle;
				guiTitleContainer.appendChild(guiTitle);
				guiTitle.className = 'gui-title';
				guiTitle.appendChild(document.createTextNode(app.title));
			}
		},

		logo: {

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
				guiLogoImage.src = app.assets.logo.src.coalgrey;
				guiLogoImage.alt = app.assets.logo.alt;
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
				this.loadingContainerEl = guiLoadingContainer;
				guiLoadingScreen.appendChild(guiLoadingContainer);
				guiLoadingContainer.className = 'gui-loading-container';
		
				const guiLoadingAnimation = document.createElement('object');
				this.loadingAnimationEl = guiLoadingAnimation;
				guiLoadingContainer.appendChild(guiLoadingAnimation);
				guiLoadingAnimation.className = 'gui-loading-animation';
				guiLoadingAnimation.type = 'image/svg+xml';
				guiLoadingAnimation.data = app.assets.loading.src;
				guiLoadingAnimation.alt = app.assets.loading.alt;
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
				this.loadingContainerEl.classList.remove('hide');
				this.loadingScreenEl.classList.remove('transparent');
				this.loadingTextEl.innerHTML = this.content;
				if(app.gui.title.titleEl){
					app.gui.title.titleEl.classList.add('text-pearlwhite');
				}
			}, 

			hideLoadingScreen(timeout = 0) {
				setTimeout(() => {
				  this.loadingScreenEl.classList.add('transparent');
				  this.content = 'loading ...';

				  if(app.gui.title.titleEl){
				  	app.gui.title.titleEl.classList.remove('text-pearlwhite');
				  }

				  this.loadingContainerEl.classList.add('hide');

				  setTimeout(() => {
				  	this.loadingScreenEl.classList.add('hide');
				  }, 1500)

				}, timeout);
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
				this.setEventListener();
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
				guiMessageCloseSymbol.src = app.assets.icon.small['close'].src.pearlwhite;
				guiMessageCloseSymbol.alt = app.assets.icon.small['close'].alt;
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

				const guiMessageButtonText = document.createElement('div');
				this.messageButton1TextEl = guiMessageButtonText;
				guiMessageButton.appendChild(guiMessageButtonText);
				guiMessageButtonText.appendChild(document.createTextNode(this.buttonText));

				const guiMessageButtonIcon = document.createElement('img');
				this.messageButton1IconEl = guiMessageButtonIcon;
				guiMessageButton.appendChild(guiMessageButtonIcon);
				guiMessageButtonIcon.className = 'gui-message-button-icon hide';
				guiMessageButtonIcon.alt = 'Button-Icon';
				guiMessageButtonIcon.width = 100;
				guiMessageButtonIcon.height = 100;

				const guiMessageButton2 = document.createElement('button');
				this.messageButton2El = guiMessageButton2;
				guiMessageButtonContainer.appendChild(guiMessageButton2);
				guiMessageButton2.className = 'gui-message-button hide';

				const guiMessageButton2Text = document.createElement('div');
				this.messageButton2TextEl = guiMessageButton2Text;
				guiMessageButton2.appendChild(guiMessageButton2Text);
				guiMessageButton2Text.appendChild(document.createTextNode(this.button2Text));

				const guiMessageButton2Icon = document.createElement('img');
				this.messageButton2IconEl = guiMessageButton2Icon;
				guiMessageButton2.appendChild(guiMessageButton2Icon);
				guiMessageButton2Icon.className = 'gui-message-button-icon hide';
				guiMessageButton2Icon.alt = 'Button-Icon';
				guiMessageButton2Icon.width = 100;
				guiMessageButton2Icon.height = 100;
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
				scoreImg.src = app.assets.ar.marker['book'].src; 
				scoreImg.alt = app.assets.ar.marker['book'].alt;

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
				closeSymbol.src = app.assets.icon.small['close'].src.coalgrey;
				closeSymbol.alt = app.assets.icon.small['close'].alt;
				closeSymbol.className = 'annotation-close-symbol';
				closeSymbol.width = '24';
				closeSymbol.height = '24';

				const helpContainer = document.createElement('div');
				guiArOverlay.appendChild(helpContainer);
				helpContainer.id = 'help-cont';
				helpContainer.className = 'help-container hide';
				var helpSymbol = document.createElement('img');
				helpContainer.appendChild(helpSymbol);
				helpSymbol.src = app.assets.ar.marker['quiz'].src;
				helpSymbol.alt = app.assets.ar.marker['quiz'].alt;
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

				if(app.collectionViewer.highlight.pillArray.length > 0) {
					app.collectionViewer.highlight.setPillEventlisteners();
				}

				app.gui.toolbar.toggleToolbar(false);
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
				this.messageButton1IconEl.className = 'gui-message-button-icon hide';
				this.messageButton2IconEl.className = 'gui-message-button-icon hide';

				this.messageContentEl.innerHTML = this.content;
				this.messageButton1TextEl.innerHTML = this.buttonText;
				this.messageButton2TextEl.innerHTML = this.button2Text;

				app.gui.toolbar.toggleToolbar(true);
			},

			setEventListener() {
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
					Object.keys(message.button1).includes("icon") ? this.button1.icon = message.button1.icon : '';
				}

				if(Object.keys(message).includes("button2")){
					buttonsActive = true;
					Object.keys(message.button2).includes("content") ? this.button2.content = message.button2.content : '';
					Object.keys(message.button2).includes("color") ? this.button2.color = message.button2.color : '';
					Object.keys(message.button2).includes("shadow") ? this.button2.shadow = 'shadow-'+message.button2.shadow : '';
					Object.keys(message.button2).includes("icon") ? this.button2.icon = message.button2.icon : '';
				}

				Object.keys(message).includes("showClose") ? this.showClose = message.showClose : this.showClose = true;

				this.type && this.messageTypeEl.classList.remove('hide');

				buttonsActive && this.messageEl.classList.add('buttonsActive');
				this.button1.content && this.messageButton1El.classList.remove('hide');
				this.button1.icon && this.messageButton1IconEl.classList.remove('hide');
				this.button2.content && this.messageButton2El.classList.remove('hide');
				this.button2.icon && this.messageButton2IconEl.classList.remove('hide');

				if(this.button1.icon && (this.button1.color === 'coalgrey' || this.button1.color === 'smokegrey' || this.button1.color === 'skyblue' || this.button1.color === 'terracotta')){
					this.messageButton1IconEl.src = app.assets.icon[this.button1.icon].src.pearlwhite;
				}else if(this.button1.icon){
					this.messageButton1IconEl.src = app.assets.icon[this.button1.icon].src.coalgrey;
				}

				if(this.button2.icon && (this.button2.color === 'coalgrey' || this.button2.color === 'smokegrey' || this.button2.color === 'skyblue' || this.button2.color === 'terracotta')){
					this.messageButton1IconEl.src = app.assets.icon[this.button2.icon].src.pearlwhite;
				}else if(this.button2.icon){
					this.messageButton1IconEl.src = app.assets.icon[this.button2.icon].src.coalgrey;
				}


				!this.showClose && this.messageCloseEl.classList.add('hide');

				this.color && this.messageEl.classList.add(this.color);

				if(this.color === 'pearlwhite'){
					this.messageCloseSymbol.src = app.assets.icon.small['close'].src.coalgrey;
					this.color && this.messageTypeEl.classList.add(message.shadow);
				}else{
					this.messageCloseSymbol.src = app.assets.icon.small['close'].src.pearlwhite;
					this.color && this.messageTypeEl.classList.add(this.color);
				}

				this.shadow && this.messageEl.classList.add(this.shadow);

				this.button1.color && this.messageButton1El.classList.add(this.button1.color);
				this.button1.shadow && this.messageButton1El.classList.add(this.button1.shadow);

				this.button2.color && this.messageButton2El.classList.add(this.button2.color);
				this.button2.shadow && this.messageButton2El.classList.add(this.button2.shadow);

				this.messageTypeEl.innerHTML = this.type;

				this.messageContentEl.innerHTML = this.content;

				this.messageButton1TextEl.innerHTML = this.button1.content;
				this.messageButton2TextEl.innerHTML = this.button2.content;

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
				this.setEventListener();
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

			setEventListener() {
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
				burgerSymbol.src = app.assets.icon['menu'].src.coalgrey;
				burgerSymbol.alt = app.assets.icon['menu'].alt;
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
				closeSymbol.src = app.assets.icon.small['close'].src.pearlwhite;
				closeSymbol.alt = app.assets.icon.small['close'].alt;
				closeSymbol.width = 100;
				closeSymbol.height = 100;
	
				const logoContainer = document.createElement('div');
				container.appendChild(logoContainer);
				logoContainer.className = 'gui-menu-logo';
	
				const logoImage = document.createElement('img');
				logoContainer.appendChild(logoImage);
				logoImage.className = 'logo';
				logoImage.src = app.assets.logo.src.pearlwhite;
				logoImage.alt = app.assets.logo.alt;
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
				projectButton.className = 'pearlwhite shadow-smokegrey';
				projectButton.appendChild(document.createTextNode('Das Projekt'));
	
				const buttonsLinkPatronage = document.createElement('a');
				buttonsLinkPatronage.href = '#'; //Links anpassen
				buttons.appendChild(buttonsLinkPatronage);
				const patronageButton = document.createElement('button');
				buttonsLinkPatronage.appendChild(patronageButton);
				patronageButton.className = 'pearlwhite shadow-smokegrey';
				patronageButton.appendChild(document.createTextNode('Die Förderung'));
	
				const links = document.createElement('div');
				container.appendChild(links);
				links.className = 'gui-menu-links';

				const linksLinkContact = document.createElement('a');
				linksLinkContact.href = 'https://dev.handgemacht.bayern?mv=ar&model=00000000-0000-0000-0000-000000000001'; //Links anpassen
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
				patronageImage.src = app.assets.patronage.src;
				patronageImage.alt = app.assets.patronage.alt;
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
			},
	
			createElements() {
				const toolbarBox = document.createElement('div');
				this.toolbarBoxEl = toolbarBox;
				document.body.appendChild(toolbarBox);
				toolbarBox.className = 'gui-toolbar-box';

				const toolbarContainer = document.createElement('div');
				this.toolbarContainerEl = toolbarContainer;
				toolbarBox.appendChild(toolbarContainer);
				toolbarContainer.className = 'gui-toolbar-container';

				const toolbar = document.createElement('div');
				this.toolbarEl = toolbar;
				toolbarContainer.appendChild(toolbar);
				toolbar.className = 'gui-toolbar';

				const toolbarTab = document.createElement('div');
				this.toolbarTabEl = toolbarTab;
				toolbarContainer.appendChild(toolbarTab);
				toolbarTab.className = 'gui-toolbar-tab';

				const toolbarTabBox = document.createElement('div');
				this.toolbarTabBoxEl = toolbarTabBox;
				toolbarTab.appendChild(toolbarTabBox);
				toolbarTabBox.className = 'gui-toolbar-tab-box';

				const toolbarTabContentContainer = document.createElement('div');
				this.toolbarTabContentContainerEl = toolbarTabContentContainer;
				toolbarTabBox.appendChild(toolbarTabContentContainer);
				toolbarTabContentContainer.className = 'gui-toolbar-tab-content-container';

				const toolbarTabContentFade = document.createElement('div');
				this.toolbarTabContentFadeEl = toolbarTabContentFade;
				toolbarTabBox.appendChild(toolbarTabContentFade);
				toolbarTabContentFade.className = 'gui-toolbar-tab-content-fade';

				const toolbarTabContentFadeBar = document.createElement('div');
				this.toolbarTabContentFadeBarEl = toolbarTabContentFadeBar;
				toolbarTabBox.appendChild(toolbarTabContentFadeBar);
				toolbarTabContentFadeBar.className = 'gui-toolbar-tab-content-fade-bar';

				const toolbarTabContent = document.createElement('div');
				this.toolbarTabContentEl = toolbarTabContent;
				toolbarTabContentContainer.appendChild(toolbarTabContent);
				toolbarTabContent.className = 'gui-toolbar-tab-content';

				const toolbarButton1 = document.createElement('button');
				this.toolbarButton1El = toolbarButton1;
				toolbar.appendChild(toolbarButton1);
				toolbarButton1.setAttribute('id', 'toolbar-button-1');
				toolbarButton1.className = 'gui-toolbar-button hide';

				const toolbarButton1Icon = document.createElement('img');
				this.toolbarButton1IconEl = toolbarButton1Icon;
				toolbarButton1.appendChild(toolbarButton1Icon);
				toolbarButton1Icon.className = 'gui-toolbar-button-icon';
				toolbarButton1Icon.width = 100;
				toolbarButton1Icon.height = 100;

				const toolbarButton2 = document.createElement('button');
				this.toolbarButton2El = toolbarButton2;
				toolbar.appendChild(toolbarButton2);
				toolbarButton2.setAttribute('id', 'toolbar-button-2');
				toolbarButton2.className = 'gui-toolbar-button hide';

				const toolbarButton2Icon = document.createElement('img');
				this.toolbarButton2IconEl = toolbarButton2Icon;
				toolbarButton2.appendChild(toolbarButton2Icon);
				toolbarButton2Icon.className = 'gui-toolbar-button-icon';
				toolbarButton2Icon.width = 100;
				toolbarButton2Icon.height = 100;

				const toolbarButton3 = document.createElement('button');
				this.toolbarButton3El = toolbarButton3;
				toolbar.appendChild(toolbarButton3);
				toolbarButton3.setAttribute('id', 'toolbar-button-3');
				toolbarButton3.className = 'gui-toolbar-button hide';

				const toolbarButton3Icon = document.createElement('img');
				this.toolbarButton3IconEl = toolbarButton3Icon;
				toolbarButton3.appendChild(toolbarButton3Icon);
				toolbarButton3Icon.className = 'gui-toolbar-button-icon';
				toolbarButton3Icon.width = 100;
				toolbarButton3Icon.height = 100;

				const toolbarButton4 = document.createElement('button');
				this.toolbarButton4El = toolbarButton4;
				toolbar.appendChild(toolbarButton4);
				toolbarButton4.setAttribute('id', 'toolbar-button-4');
				toolbarButton4.className = 'gui-toolbar-button hide';

				const toolbarButton4Icon = document.createElement('img');
				this.toolbarButton4IconEl = toolbarButton4Icon;
				toolbarButton4.appendChild(toolbarButton4Icon);
				toolbarButton4Icon.className = 'gui-toolbar-button-icon';
				toolbarButton4Icon.width = 100;
				toolbarButton4Icon.height = 100;
			}, 

			setToolbar(color = 'pearlwhite', shadowColor = 'shadow-smokegrey') {
				if(typeof this.toolbarEl != 'undefined'){
					let toolbar = this.toolbarEl;
					color && toolbar.classList.add(color);
					shadowColor && toolbar.classList.add(shadowColor);
					toolbar.classList.add('active');
				}
			},

			toggleToolbar(forceShow = null) {
				if(forceShow === true) {
					this.toolbarEl.classList.remove('active');
					this.toolbarEl.classList.add('active');
					return;
				}
				if(forceShow === false) {
					this.toolbarEl.classList.remove('active');
					return;
				}
				this.toolbarEl.classList.toggle('active');
			},

			setToolbarTab(colors) {
				if(typeof this.toolbarTabEl != 'undefined'){
					let toolbarTab = this.toolbarTabEl;
					let fade = this.toolbarTabContentFadeEl;
					let fadeBar = this.toolbarTabContentFadeBarEl;

					if(toolbarTab.classList.contains('active')){
						toolbarTab.className = 'gui-toolbar-tab active';
					}else{
						toolbarTab.className = 'gui-toolbar-tab';
					}

					fadeBar.className = 'gui-toolbar-tab-content-fade-bar';	

					toolbarTab.classList.add(colors.tabText);
					toolbarTab.classList.add(colors.tabBackground);
					colors.tabShadow && toolbarTab.classList.add(colors.tabShadow);
					colors.tabShadow && fadeBar.classList.add(colors.button);

					let fadeColor = '#000000';

					switch (colors.tabBackground) {
						case 'coalgrey':
							fadeColor = '#41403F';
							break;
						case 'smokegrey':
							fadeColor = '#9B9691';
							break;
						case 'pearlwhite':
							fadeColor = '#FAF0E6';
							break;
						case 'terracotta':
							fadeColor = '#FF7850';
							break;
						case 'duckyellow':
							fadeColor = '#FFC800';
							break;
						case 'skyblue':
							fadeColor = '#46AAC8';
							break;
						default:
							fadeColor = '#41403F';
					}

					fade.style.setProperty('--color-var', fadeColor);
				}
			},

			setButton(setup) {
				if(!setup) {return;}
				let id = setup.id;
				if(typeof document.querySelector(id) != 'undefined' && document.querySelector(id).children.length != 0){
					let element = document.querySelector(id);
					element.setAttribute('data-colors', JSON.stringify(setup.colors));
					element.setAttribute('data-func', setup.func);
					element.setAttribute('data-action', setup.action.type);
					element.setAttribute('data-selector', setup.action.selector);
					element.setAttribute('data-active', false);
					element.classList.add(setup.colors.button);
					let iconElement = element.children[0];

					iconElement.src = app.assets.icon[setup.func].src[setup.colors.buttonIcon];
					
					element.classList.remove('hide');
					iconElement.addEventListener('click', app.gui.toolbar.buttonClickHandler);				
				}				
			}, 

			removeButton(id) {
				if(typeof document.querySelector(id) != 'undefined' && document.querySelector(id).children.length != 0){
					let element = document.querySelector(id);
					let action = element.getAttribute('data-action');
					element.removeAttribute('data-action');
					element.className = 'gui-toolbar-button hide';
					let iconElement = element.children[0];
					iconElement.src = '';
					iconElement.removeEventListener('click', app.gui.toolbar.buttonClickHandler)					
				}	
			}, 

			buttonClickHandler(event){
				let button = event.srcElement.parentElement;
				if(typeof button != 'undefined' && button.children.length != 0){
					let action = button.getAttribute('data-action');

					if(action === 'feedback'){
						app.gui.toolbar.buttonActionFeedback(button);
					}

					if(action === 'slide'){
						app.gui.toolbar.buttonActionSlide(button);
					}

					if(action === 'tab'){
						app.gui.toolbar.buttonActionTab(button);
					}
					
				}
			},

			buttonActionSlide(button) {
				if(typeof button === 'undefined' || button.children.length < 1) { return; }
				
				let toolbar = this.toolbarEl;
				let iconElement = button.children[0];
				let active = (button.getAttribute('data-active') === 'true');
				let selectedContentElement = document.querySelector(button.getAttribute('data-selector'));
				
				if(!active){
					button.setAttribute('data-active', true);
					//set content visibility
					if(selectedContentElement){
						selectedContentElement.classList.remove('hide');
					}
					//add class 'remove' on all buttons
					for(const child of toolbar.children){
						child.classList.remove('remove');
						child.classList.add('remove');
					}
					//set class 'remove' on this button
					button.classList.remove('remove');
					//set class 'slide' on this button
					button.classList.remove('slide');
					button.classList.add('slide');
					//set class 'slide' on this button icon
					iconElement.classList.remove('slide');
					iconElement.classList.add('slide');
				}

				if(active){
					button.setAttribute('data-active', false);
					//set content visibility
					if(selectedContentElement){
						selectedContentElement.classList.remove('hide');
						selectedContentElement.classList.add('hide');
					}
					//remove class 'remove' on all buttons
					for(const child of toolbar.children){
						child.classList.remove('remove');
					}
					//set class 'slide' on this button
					button.classList.remove('slide');
					//set class 'slide' on this button icon
					iconElement.classList.remove('slide');
				}
			}, 

			buttonActionFeedback(button) {
				let toolbar = this.toolbarEl;
				if(typeof button != 'undefined' && button.children.length != 0){
					let iconElement = button.children[0];
					//add button class action
					button.classList.add('feedback');
					//remove button class action after 100ms
					setTimeout(() => {
					  button.classList.remove('feedback');
					}, 200);
				}	
			},

			buttonActionTab(button) {
				let toolbar = this.toolbarEl;
				let toolbarTab = this.toolbarTabEl
				let toolbarTabContent = this.toolbarTabContentEl;
				let toolbarTabFade = this.toolbarTabContentFadeEl;
				if(typeof button != 'undefined' && button.children.length != 0){
					let iconElement = button.children[0];
					let colors = JSON.parse(button.getAttribute('data-colors'));

					for(let child of toolbarTabContent.children){
						child.classList.add('hide');
					}

					let selectedContentElement = document.querySelector(button.getAttribute('data-selector'));
					if(selectedContentElement){
						selectedContentElement.classList.remove('hide');
					}

					//toggle remove on all buttons
					for(let child of toolbar.children){
						child.classList.toggle('inactive');
						iconElement.classList.toggle('inactive');
					}

					//set toolbarTab color to button color
					this.setToolbarTab(colors);

					toolbarTab.classList.toggle('active');

					//toggle button class action
					button.classList.toggle('tab');
					//toggle button class remove
					button.classList.toggle('inactive');
					iconElement.classList.toggle('tab');
				}	
			},
		}, 

		setupCollapsibles() {
			var collapsibles = document.querySelectorAll('.collapsible-button');

			collapsibles.forEach(function(element) {
				var contentElement = element.nextElementSibling;
				if(!contentElement) {return;}
				if(!contentElement.classList.contains('collapsible-content')){return;}
				element.addEventListener("click", function() {
					element.classList.toggle('active');
					contentElement.classList.toggle('active');
				})
			})
		}
	}, //gui

	collectionViewer: {

		proxyfgData: new Proxy({
				data: null, 
				update: new CustomEvent("proxyfgData-update")
			}, 
			{
				set: function(target, prop, value){
					target[prop] = value;
					document.dispatchEvent(app.collectionViewer.proxyfgData.update)
					return true;
				}
			}
		),

		elementColor: {
			object: 'terracotta', 
			category: 'skyblue', 
			tag: 'duckyellow'
		},

		init() {
			this.createElements();
			this.tooltip.init();
			this.highlight.init();

			app.gui.toolbar.setToolbar();

			app.gui.toolbar.setButton(this.info.buttonSetup);
			this.info.init();

			app.gui.toolbar.setButton(this.search.buttonSetup);
			this.search.init();
			app.gui.toolbar.toolbarButton2IconEl.addEventListener('click', (e) => {
				app.collectionViewer.search.resetSearchInput();
			})

			app.gui.toolbar.setButton(this.filter.buttonSetup);
			this.filter.init();
			app.gui.toolbar.toolbarButton3IconEl.addEventListener('click', (e) => {
				app.collectionViewer.filter.filterUpdated ? app.collectionViewer.filter.updateForcegraph() : '';
			})

			app.gui.toolbar.setButton(this.resetView.buttonSetup);
			this.resetView.init();
			app.gui.toolbar.toolbarButton4IconEl.addEventListener('click', (e) => {
				app.collectionViewer.resetView.resetCameraView();
			})
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

			showTooltip(type, content) {
				let typeText = '';
				if(type === 'node-object'){
					typeText = 'Objekt'
					this.tooltipTypeEl.classList.add(app.collectionViewer.elementColor.object);
					this.tooltipContentEl.classList.add(app.collectionViewer.elementColor.object);
				}
				if(type === 'node-category'){
					typeText = 'Kategorie'
					this.tooltipTypeEl.classList.add(app.collectionViewer.elementColor.category);
					this.tooltipContentEl.classList.add(app.collectionViewer.elementColor.category);
				}
				if(type === 'link-tag'){
					typeText = 'Link'
					this.tooltipTypeEl.classList.add(app.collectionViewer.elementColor.tag);
					this.tooltipContentEl.classList.add(app.collectionViewer.elementColor.tag);
				}
				if(type === 'link-category'){
					typeText = 'Link'
					this.tooltipTypeEl.classList.add(app.collectionViewer.elementColor.category);
					this.tooltipContentEl.classList.add(app.collectionViewer.elementColor.category);
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
			
					this.tooltipEl.style.left = x + 25 + 'px';
					this.tooltipEl.style.top = y + 25 + 'px';
				};
			
				document.addEventListener('mousemove', (e) => {
				  move(e);
				});
				document.addEventListener('touchmove', (e) => {
				  move(e);
				});

				let type = '';

				fgData ? type = fgData.type : type = 'none';

				if(type === 'none'){
					return;
				}

				if (fgData.type === 'link-tag' || fgData.type === 'link-category') {
					if (fgData.material.visible === false) {
						return;
					}
				}else if(fgData.type === 'node-object' || fgData.type === 'node-category'){
					if (fgData.model.material.visible === false) {
						return;
					}
				}

				if(isTouchDevice()) { return; }

				this.showTooltip(fgData.type, fgData.name);
			} 
		},

		highlight: {

			pillArray: [],

			init() {
				this.setEventListener();
			},

			setEventListener(){
				if(app.gui.message.messageCloseEl) {
					app.gui.message.messageCloseEl.addEventListener('click', (evt) => {
						app.collectionViewer.resetView.resetCameraView();
					});
				}
			},

			onclickHandler(fgData) {
				let type = '';
				fgData ? type = fgData.type : type = 'none';
			
				if(type !== 'none'){
					app.gui.message.hideMessage();
					app.collectionViewer.highlight.generateMessage(fgData);
				}
			}, 

			generateMessage(fgData) {
				let type = '';
				fgData ? type = fgData.type : type = 'none';

				this.pillArray = [];
				
				if(type === 'node-object'){
					let categoryList = '<div class="categorys">';
					for(let category in fgData.categories) {
						let pillId = 'c-' + self.crypto.randomUUID();;
						categoryList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.category + ' text-coalgrey" '
										+ 'data-model-id="' + fgData.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.category +'" '
										+ 'data-name="' + fgData.categories[category] +'" '
										+ 'data-type="category" data-active="false">' 
										+ fgData.categories[category] 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					categoryList += '</div>';
	
					let tagList = '<div class="tags">';
					for(let tag in fgData.tags) {
						let pillId = 't-' + self.crypto.randomUUID();;
						tagList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.tag + ' text-coalgrey" '
										+ 'data-model-id="' + fgData.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.tag +'" '
										+ 'data-name="' + fgData.tags[tag] +'" '
										+ 'data-type="tag" data-active="false">' 
										+ fgData.tags[tag] 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					tagList += '</div>';

					let message = {
						type: 'Objekt',
						content: '<h3>' + fgData.name + '</h3>'
								+ categoryList
								+ tagList,
						color: 'pearlwhite',
						shadow: app.collectionViewer.elementColor.object,
						button1: { content: 'erkunden', color: app.collectionViewer.elementColor.object, icon: 'arrow right' }
					}

					app.gui.message.setMessage(message);

					app.gui.message.messageButton1El.addEventListener('click', (e) => {
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
						shadow: app.collectionViewer.elementColor.category
					}

					app.gui.message.setMessage(message);
				}

				if(type === 'link-tag'){
					let message = {
						type: 'Tag',
						content: '<h3>' + fgData.name + '</h3>'
								+ '<p>Hier steht später eine Tagbeschreibung</p>',
						color: 'coalgrey',
						shadow: app.collectionViewer.elementColor.tag
					}

					app.gui.message.setMessage(message);
				}
			},

			setPillEventlisteners() {
				let filteredTags = app.collectionViewer.filter.filteredData.tags;
				let filteredCategories = app.collectionViewer.filter.filteredData.categories;
				for(let pill of this.pillArray){
					let element = document.querySelector(pill);
					let name = element.getAttribute('data-name');
					if(filteredTags.includes(name) || filteredCategories.includes(name)){
						element.classList.remove('inactive');
						element.classList.add('inactive');
					}else{
						element.addEventListener('click', this.highlightFromPill);
					}
				}
			},

			highlightFromPill(e) {
				
				let pill = e.srcElement;
				let modelId = pill.getAttribute('data-model-id');
				let name = pill.getAttribute('data-name');
				let type = pill.getAttribute('data-type');
				let color = pill.getAttribute('data-color');
				let active = (pill.getAttribute('data-active') === 'true');
				
				document.querySelector('#forcegraph').components.highlight.highlightFromPill(name, type, active, modelId);

				for(let pill of app.collectionViewer.highlight.pillArray){
					let element = document.querySelector(pill);
					let color = element.getAttribute('data-color');
					element.classList.remove(color);
					element.setAttribute('data-active', false);
				}

				if(!active){
					pill.classList.remove(color);
					pill.classList.add(color);
					pill.setAttribute('data-active', true);
				}else{
					pill.classList.remove(color);
					pill.setAttribute('data-active', false);
				}
			}
		},

		info: {

			buttonSetup: {
				id: '#toolbar-button-1',
				colors: {
					button: 'skyblue',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-skyblue',
					tabText: 'text-coalgrey',
					tabIcon: 'coalgrey'
				}, 
				func: 'info', 
				action: {
					type: 'tab',
					selector: '.cv-info-container' 
				}
			},

			texts: {
				title: '',
				intro: '',
			},

			init() {

			},
		},

		search: {

			buttonSetup: {
				id: '#toolbar-button-2',
				colors: {
					button: 'terracotta',
					buttonText: 'text-pearlwhite',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-terracotta',
					tabText: 'text-coalgrey',
					tabIcon: 'coalgrey'
				}, 
				func: 'search', 
				action: {
					type: 'slide',
					selector: '.cv-search-input-container'
				}
			},

			texts: {
				placeholder: 'Suche...'
			},

			nodeArray: [],

			init() {
				this.createElements();

				document.addEventListener('proxyfgData-update', (event) => {
					//app.devMode && console.log('dev --- cv > search > proxyfgData: ', app.collectionViewer.proxyfgData.data);
					let fgData = app.collectionViewer.proxyfgData.data.nodes;
					for( let index in fgData){
						let object = fgData[index];
						if(object.name){
							this.nodeArray.push(object.name);
						}
					}
					//app.devMode && console.log('dev --- cv > search > nodeArray: ', this.nodeArray);
					this.autocomplete(this.inputEl, this.nodeArray);
				});
			}, 

			createElements() {
				if(typeof document.querySelector(this.buttonSetup.id) === 'undefined'){ return; };

				this.buttonEl = document.querySelector(this.buttonSetup.id);

				let inputContainer = document.createElement('div');
				this.inputContainer = inputContainer;
				this.buttonEl.appendChild(inputContainer);
				inputContainer.className = 'cv-search-input-container hide';

				let input = document.createElement('input');
				this.inputEl = input;
				inputContainer.appendChild(input);
				input.className = 'cv-search-input ' + this.buttonSetup.colors.buttonText + ' ' + this.buttonSetup.colors.button;
				input.setAttribute('id', 'cv-search-input');
				input.setAttribute('type', 'text');
				input.setAttribute('name', 'searchBar');
				input.setAttribute('placeholder', this.texts.placeholder);

				let customCaret = document.createElement('div');
				input.appendChild(customCaret);
				customCaret.className = 'custom-caret';
				customCaret.classList.add(this.buttonSetup.colors.tabBackground);
				customCaret.innerHTML = 'Test &nbsp;';

				let autocompleteListContainer = document.createElement('div');
				this.autocompleteListContainerEL = autocompleteListContainer;
				this.buttonEl.appendChild(autocompleteListContainer);
				autocompleteListContainer.className = 'cv-search-autocomplete-list-container hide';
				autocompleteListContainer.classList.add(this.buttonSetup.colors.tabBackground);
				autocompleteListContainer.classList.add(this.buttonSetup.colors.tabShadow);
			}, 

			autocomplete(element, array) {
				//source: https://www.w3schools.com/howto/howto_js_autocomplete.asp
				var currentFocus;

				element.addEventListener('input', function(e) {
					let inputValue = this.value;
					app.collectionViewer.search.removeAutoCompleteList();
					if (!inputValue || inputValue.length < 1) { return false;}
					
					app.collectionViewer.search.autocompleteListContainerEL.classList.remove('hide');

					let autocompleteList = document.createElement('div');
					app.collectionViewer.search.autocompleteListEl = autocompleteList;
					app.collectionViewer.search.autocompleteListContainerEL.appendChild(autocompleteList);
					autocompleteList.setAttribute('id', 'cv-search-input-autocomplete-list');
					autocompleteList.className = 'cv-search-autocomplete-list ';
					autocompleteList.classList.add(app.collectionViewer.search.buttonSetup.colors.tabText);
	
					currentFocus = -1;
	
					for(let index in array){
						let name = array[index];
						if (name.substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()) {
							let listItemEl = document.createElement('div');
							listItemEl.innerHTML = "<strong>" + name.substr(0, inputValue.length) + "</strong>";
							listItemEl.innerHTML += name.substr(inputValue.length);
							listItemEl.innerHTML += "<input type='hidden' value='" + name + "'>";
							listItemEl.addEventListener("click", function(e) {
								element.value = this.getElementsByTagName("input")[0].value;
								app.collectionViewer.search.removeAutoCompleteList();
								app.gui.toolbar.buttonActionSlide(app.collectionViewer.search.buttonEl);
								app.collectionViewer.search.executeRequest(name);
							});
							app.collectionViewer.search.autocompleteListEl.appendChild(listItemEl);
						}
					}

					if(!app.collectionViewer.search.autocompleteListEl.hasChildNodes()) {
						let listItemEl = document.createElement('div');
						listItemEl.innerHTML = 'keine Ergebnisse';
						app.collectionViewer.search.autocompleteListEl.appendChild(listItemEl);
					}
				});

				element.addEventListener("keydown", function(e) {
					var x = app.collectionViewer.search.autocompleteListEl;
					if (x) x = x.getElementsByTagName("div");
					if (e.keyCode == 40) {
						/*If the arrow DOWN key is pressed,
						increase the currentFocus variable:*/
						currentFocus++;
						/*and and make the current item more visible:*/
						addActive(x);
					} else if (e.keyCode == 38) { //up
						/*If the arrow UP key is pressed,
						decrease the currentFocus variable:*/
						currentFocus--;
						/*and and make the current item more visible:*/
						addActive(x);
					} else if (e.keyCode == 13) {
						/*If the ENTER key is pressed, prevent the form from being submitted,*/
						e.preventDefault();
						if (currentFocus > -1) {
						  /*and simulate a click on the "active" item:*/
						  if (x) x[currentFocus].click();
						}
					}
					function addActive(x) {
						/*a function to classify an item as "active":*/
						if (!x) return false;
						/*start by removing the "active" class on all items:*/
						removeActive(x);
						if (currentFocus >= x.length) currentFocus = 0;
						if (currentFocus < 0) currentFocus = (x.length - 1);
						/*add class "autocomplete-active":*/
						x[currentFocus].classList.add('autocomplete-active');
						x[currentFocus].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
					}
					function removeActive(x) {
						/*a function to remove the "active" class from all autocomplete items:*/
						for (var i = 0; i < x.length; i++) {
							x[i].classList.remove('autocomplete-active');
						}
					}
				});
			}, 

			removeAutoCompleteList() {
				let autocompleteLists = document.getElementsByClassName('cv-search-autocomplete-list');
				
				if(typeof autocompleteLists === 'undefined') { return; }
				if(autocompleteLists.length < 1) { return; };
				for (let list of autocompleteLists) {
					list.parentNode.removeChild(list);
				}
				this.autocompleteListContainerEL.classList.remove('hide');
				this.autocompleteListContainerEL.classList.add('hide');
			}, 

			resetSearchInput() {
				window.setTimeout( () => {
					app.collectionViewer.search.inputEl.focus({ focusVisible: true });
				}, 10)
				this.inputEl.value = null;
				this.removeAutoCompleteList();
			}, 

			executeRequest(name) {
				let fgElement = document.querySelector('#forcegraph');
				let aCameraElement = document.querySelector('a-camera');
				let fgComponent = document.querySelector('#forcegraph').components['forcegraph'];
				let fgNodes = fgComponent.data.nodes;
				let node = null;

				for(let n of fgNodes) {
					if(n.name === name){
						node = n;
					}
				}

				if(!node) { return; }

				aCameraElement.setAttribute('camera-focus-target', {target: node, duration: 1200});
				app.collectionViewer.highlight.onclickHandler(node);
				fgElement.setAttribute('highlight', {source: node});
			}
		},

		filter: {

			buttonSetup: {
				id: '#toolbar-button-3',
				colors: {
					button: 'duckyellow',
					buttonIcon: 'coalgrey', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-duckyellow',
					tabText: 'text-coalgrey',
					tabIcon: 'coalgrey'
				}, 
				func: 'filter', 
				action: {
					type: 'tab',
					selector: '.cv-filter-container' 
				}
			},

			texts: {
				title: 'Filter',
				intro: 'Aktiviere oder deaktiviere Kategorien und Tags um deine Ergebnisse anzupassen.',
				categoriesButton: 'Kategorien',
				tagsButton: 'Tags',
				selectAllButton: 'Alle aus-/abwählen'
			},

			filterUpdated: false,

			filteredData: {
				tags: [], 
				categories: []
			},

			init() {
				this.createElements();

				document.addEventListener('proxyfgData-update', (event) => {
					//app.devMode && console.log('dev --- cv > filter > proxyfgData-update: ', app.collectionViewer.proxyfgData.data);
					this.generateCheckBoxList('#cv-filter-category-list', app.collectionViewer.proxyfgData.data.categorylist, app.collectionViewer.elementColor.category);
					this.generateCheckBoxList('#cv-filter-tag-list', app.collectionViewer.proxyfgData.data.taglist, app.collectionViewer.elementColor.tag);
				});
			},

			createElements() {
				let toolBarTabContent = app.gui.toolbar.toolbarTabContentEl;

				const filterContainer = document.createElement('div');
				toolBarTabContent.appendChild(filterContainer);
				filterContainer.className = 'cv-filter-container';

				const filterHeadline = document.createElement('h3');
				filterContainer.appendChild(filterHeadline);
				filterHeadline.appendChild(document.createTextNode(this.texts.title));

				const filterText = document.createElement('p');
				filterContainer.appendChild(filterText);
				filterText.className = 'text-small';
				filterText.appendChild(document.createTextNode(this.texts.intro));

				const categoryListContainer = document.createElement('div');
				filterContainer.appendChild(categoryListContainer);
				categoryListContainer.className = 'cv-filter-list-container';

				const categoryListButton = document.createElement('button');
				categoryListContainer.appendChild(categoryListButton);
				categoryListButton.className = 'cv-filter-button collapsible-button ' + this.buttonSetup.colors.tabText;

				const categoryListButtonIcon = document.createElement('div');
				categoryListButton.appendChild(categoryListButtonIcon);
				categoryListButtonIcon.className = 'icon skyblue';

				const categoryIcon = document.createElement('img');
				categoryListButtonIcon.appendChild(categoryIcon);
				categoryIcon.src = app.assets.icon['category'].src.pearlwhite;
				categoryIcon.alt = app. assets.icon['category'].alt;
				categoryIcon.width = 100;
				categoryIcon.height = 100;

				categoryListButton.appendChild(document.createTextNode(this.texts.categoriesButton));

				const categoryListButtonArrow = document.createElement('div');
				categoryListButton.appendChild(categoryListButtonArrow);
				categoryListButtonArrow.className = 'arrow right ' + this.buttonSetup.colors.tabIcon;

				const categoryList = document.createElement('div');
				categoryListContainer.appendChild(categoryList);
				categoryList.className = 'cv-filter-container collapsible-content';
				categoryList.setAttribute('id', 'cv-filter-category-list');

				const categorySelectAllButton = document.createElement('button');
				categoryList.appendChild(categorySelectAllButton);
				categorySelectAllButton.className = 'cv-filter-button text-small';
				categorySelectAllButton.setAttribute('data-selected', true);
				categorySelectAllButton.setAttribute('id', 'cv-filter-category-list-select-all');
				categorySelectAllButton.appendChild(document.createTextNode(this.texts.selectAllButton));

				const tagListContainer = document.createElement('div');
				filterContainer.appendChild(tagListContainer);
				tagListContainer.className = 'cv-filter-list-container';

				const tagListButton = document.createElement('button');
				tagListContainer.appendChild(tagListButton);
				tagListButton.className = 'cv-filter-button collapsible-button ' + this.buttonSetup.colors.tabText;

				const tagListButtonIcon = document.createElement('div');
				tagListButton.appendChild(tagListButtonIcon);
				tagListButtonIcon.className = 'icon duckyellow';

				const tagIcon = document.createElement('img');
				tagListButtonIcon.appendChild(tagIcon);
				tagIcon.src = app.assets.icon['tag'].src.coalgrey;
				tagIcon.alt = app. assets.icon['tag'].alt;
				tagIcon.width = 100;
				tagIcon.height = 100;

				tagListButton.appendChild(document.createTextNode(this.texts.tagsButton));

				const tagListButtonArrow = document.createElement('div');
				tagListButton.appendChild(tagListButtonArrow);
				tagListButtonArrow.className = 'arrow right ' + this.buttonSetup.colors.tabIcon;

				const tagList = document.createElement('div');
				tagListContainer.appendChild(tagList);
				tagList.className = 'cv-filter-container collapsible-content';
				tagList.setAttribute('id', 'cv-filter-tag-list');

				const tagSelectAllButton = document.createElement('button');
				tagList.appendChild(tagSelectAllButton);
				tagSelectAllButton.className = 'cv-filter-button text-small';
				tagSelectAllButton.setAttribute('data-selected', true);
				tagSelectAllButton.setAttribute('id', 'cv-filter-tag-list-select-all');
				tagSelectAllButton.appendChild(document.createTextNode(this.texts.selectAllButton));
			}, 

			generateCheckBoxList(id, dataArray, color){
				let element = document.querySelector(id);
				if(!element){return;}
				let selectAllButton = document.querySelector(id+'-select-all');
				selectAllButton.addEventListener('click', (e) => {
					this.selectAllCheckBoxList(id)
				});

				let shadowColor = 'shadow-' + color;

				dataArray.forEach(function(data) {
					let newPill = document.createElement('div');
					element.appendChild(newPill);
					newPill.className = 'pill ' + color + ' ' + shadowColor;
					newPill.setAttribute('data-color', color);
					newPill.setAttribute('data-active', true);
					newPill.appendChild(document.createTextNode(data));

					newPill.addEventListener('click', app.collectionViewer.filter.clickPillHandler);
				})
			}, 

			clickPillHandler(e){
				let element = e.srcElement;
				let color = element.getAttribute('data-color');
				let active = ( element.getAttribute('data-active') === 'true');

				active ? element.setAttribute('data-active', false) : element.setAttribute('data-active', true);

				element.classList.toggle(color);
				element.classList.toggle('inactive');

				this.filterUpdated = true;
			},

			selectAllCheckBoxList(id) {
				let listElement = document.querySelector(id);
				if(!listElement){return;}
				let selectAllButton = document.querySelector(id+'-select-all');
				let selected = (selectAllButton.getAttribute('data-selected') === 'true');

				for(let element of listElement.children) {
					let isPill = element.classList.contains('pill');
					if(isPill) {
						let color = element.getAttribute('data-color');
						let active = (element.getAttribute('data-active') === 'true');
						if(selected){
							element.setAttribute('data-active', false);
							element.classList.remove(color);
							element.classList.remove('inactive');
							element.classList.add('inactive');
						}else{
							element.setAttribute('data-active', true);
							element.classList.remove(color);
							element.classList.add(color);
							element.classList.remove('inactive');
						}
					}
				}

				selected ? selectAllButton.setAttribute('data-selected', false) : selectAllButton.setAttribute('data-selected', true);

				this.filterUpdated = true;
			}, 

			updateForcegraph() {
				let loadJSONModelsComponent = document.querySelector('a-scene').components['load-json-models'];
				let fgData = app.collectionViewer.proxyfgData.data;
				let categoryListElement = document.querySelector('#cv-filter-category-list');
				let tagListElement = document.querySelector('#cv-filter-tag-list');
				let showCategoriesArray = [];
				let showTabsArray = [];
				app.collectionViewer.filter.filteredData.categories = [];
				app.collectionViewer.filter.filteredData.tags = [];

				//app.devMode && console.log('dev --- cv > filter > updateForcegraph > loadJSONModelsComponent', loadJSONModelsComponent);

				for(let element of categoryListElement.children) {
					let active = (element.getAttribute('data-active') === 'true');
					let name = element.innerHTML;
					active ? showCategoriesArray.push(name) : app.collectionViewer.filter.filteredData.categories.push(name);
				}

				for(let element of tagListElement.children) {
					let active = (element.getAttribute('data-active') === 'true');
					let name = element.innerHTML;
					active ? showTabsArray.push(name) : app.collectionViewer.filter.filteredData.tags.push(name);
				}

				document.querySelector('a-scene').setAttribute('load-json-models', 'normFactor: 0')

				loadJSONModelsComponent.filterFgData(fgData, showTabsArray, showCategoriesArray);
			}
		},

		resetView: {

			buttonSetup: {
				id: '#toolbar-button-4',
				colors: {
					button: 'coalgrey',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: null,
					tabText: null,
					tabIcon: null
				}, 
				func: 'reset view', 
				action: { 
					type: 'feedback', 
					selector: null
				}
			},

			init() {

			}, 

			resetCameraView() {
				document.querySelector('#forcegraph').setAttribute('highlight', {source: ''});
				document.querySelector('a-camera').setAttribute('orbit-controls', {
					enabled: true, 
					target: '#orbit-target', 
					desiredDistance: 300, 
					autoRotate: true,
					pitchCamera: true, 
					desiredCameraPitch: 0,
					desiredCameraTilt: -5,
					forceUpdate: true
				});
			}
		},

		createElements() {

			const collectionViewerElement = document.createElement('a-scene');
			this.collectionViewerEl = collectionViewerElement;
			document.body.appendChild(collectionViewerElement);
			collectionViewerElement.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			collectionViewerElement.setAttribute('load-json-models', 'scaleFactor: 0.05; normalization: 0.6');
			collectionViewerElement.setAttribute('xr-mode-ui', 'enabled: false');
			collectionViewerElement.setAttribute('device-orientation-permission-ui', 'enabled: false');
			collectionViewerElement.setAttribute('light', 'defaultLightsEnabled: false');
			app.showStats && collectionViewerElement.setAttribute('stats', '');

			const cursorEntity = document.createElement('a-entity');
			collectionViewerElement.appendChild(cursorEntity);
			cursorEntity.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: true;');
			cursorEntity.setAttribute('raycaster', 'objects: #forcegraph;');

			const camera = document.createElement('a-camera');
			collectionViewerElement.appendChild(camera);
			camera.setAttribute('orbit-controls', 'enabled: true; target: #orbit-target; autoRotate: true');
			camera.setAttribute('wasd-controls', 'enabled: false');

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
		this.startPlacing = '<img src="' + app.assets.icon['move'].src.pearlwhite + '" alt="' + app.assets.icon['move'].alt + '" height="50px" /> <p>Um das Objekt zu platzieren, suche eine freie Boden- oder Tischfläche. Das Objekt soll dort in realer Größe platziert werden.</p>';
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
			imgPlacer.src = app.assets.ar.marker['drop'].src;

			const imgDrag = document.createElement('img');
			assets.appendChild(imgDrag);
			imgDrag.id = 'dragIcon';
			imgDrag.crossOrigin = 'anonymous';
			imgDrag.src = app.assets.ar.marker['drag'].src;

			const imgArrow = document.createElement('img');
			assets.appendChild(imgArrow);
			imgArrow.id = 'arrow';
			imgArrow.crossOrigin = 'anonymous';
			imgArrow.src = app.assets.ar['rotate arrows'].src;

			const imgBook = document.createElement('img');
			assets.appendChild(imgBook);
			imgBook.id = 'book';
			imgBook.crossOrigin = 'anonymous';
			imgBook.src = app.assets.ar.marker['book'].src;

			const imgPlay = document.createElement('img');
			assets.appendChild(imgPlay);
			imgPlay.id = 'playAnim';
			imgPlay.crossOrigin = 'anonymous';
			imgPlay.src = app.assets.ar.marker['animation'].src;

			const imgExcl = document.createElement('img');
			assets.appendChild(imgExcl);
			imgExcl.id = 'exclamation';
			imgExcl.crossOrigin = 'anonymous';
			imgExcl.src = app.assets.ar.marker['quest'].src;

			const imgQuiz = document.createElement('img');
			assets.appendChild(imgQuiz);
			imgQuiz.id = 'question';
			imgQuiz.crossOrigin = 'anonymous';
			imgQuiz.src = app.assets.ar.marker['quiz'].src;

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

	handleScreenOrientation(e) {
		const forcegraph = document.querySelector('#forcegraph');
		if(!forcegraph) { return; };
		forcegraph.setAttribute('highlight', {noUpdate: false});
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

	getParamsModeFromURL(param = null) {
		const queryString = window.location.search;
		this.urlParams = new URLSearchParams(queryString);

		if(!param) {return false;}

		if(this.urlParams.get(param)==='true') {
			return true;
		}

		return false;
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











