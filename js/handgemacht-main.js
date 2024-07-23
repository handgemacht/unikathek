



//START modelViewerHTML
let modelViewerHTML = 
'<!-- START MODEL VIEWER -->'
+ '<model-viewer id="main-viewer" loading="eager" ar ar-scale="fixed" xr-environment src="" shadow-intensity="1" camera-controls touch-action="pan-y" disable-tap camera-orbit="" min-camera-orbit="-Infinity 15deg 0.1m" max-camera-orbit="-Infinity 165ddeg 3.5m" camera-target="" field-of-view="" interpolation-decay="150" data-dimension="false">'
+ '<!-- START INTERFACE -->'
+ '	<!-- left-side toolbar -->'
+ '	<section class="toolbar">'
+ '		<button id="context-story-button" class="tool active" data-tool-function="context-story" data-tool-active="true">'
+ '		 <img id="context-story-symbol" src="assets/hand.gemacht WebApp button context-story kohlegrau.svg" alt="Button Hintergrundgeschichte" class="tool-symbol" width="100px" height="100px">'
+ '		</button>'
+ '		<button id="hotspots-button" class="tool hide" data-tool-function="hotspots" data-tool-active="false">'
+ '		 <svg id="hide-hotspot-symbol" class="tool-symbol" xmlns="http://www.w3.org/2000/svg">'
+ '			 <circle cx="50%" cy="50%" r="50%" fill="#41403F"/>'
+ '		 </svg>'
+ '		</button>'
+ '		<button id="dimensions-button" class="tool hide" data-tool-function="dimensions" data-tool-active="false">'
+ '		 <svg id="dimmensions-symbol" class="tool-symbol" xmlns="http://www.w3.org/2000/svg">'
+ '			 <circle cx="50%" cy="50%" r="50%" fill="#41403F"/>'
+ '		 </svg>'
+ '		</button>'
+ '		<button id="ar-button" class="tool" data-tool-function="ar" data-tool-active="false">'
+ '			<img id="ar-symbol" src="assets/hand.gemacht WebApp button ar kohlegrau.svg" alt="Button Augmented Reality" class="tool-symbol" width="100px" height="100px">'
+ '		</button>'
+ '	</section>'
+ '	<!-- remove default ar button -->'
+ '	<button class="hide" slot="ar-button"></button>'
+ '	<!-- removes default progress bar -->'
+ '	<div class="hide" slot="progress-bar"></div>'
+ '	<!-- END INTERFACE -->'
+ '	<!-- START DIMENSIONS -->'
+ '	<button disabled aria-hidden="true" slot="hotspot-dot+X-Y+Z" class="dot" data-position="1 -1 1" data-normal="1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dim+X-Y" class="dim" data-position="1 -1 0" data-normal="1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dot+X-Y-Z" class="dot" data-position="1 -1 -1" data-normal="1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dim+X-Z" class="dim" data-position="1 0 -1" data-normal="1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dot+X+Y-Z" class="dot" data-position="1 1 -1" data-normal="0 1 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dim+Y-Z" class="dim" data-position="0 -1 -1" data-normal="0 1 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dot-X+Y-Z" class="dot" data-position="-1 1 -1" data-normal="0 1 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dim-X-Z" class="dim" data-position="-1 0 -1" data-normal="-1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dot-X-Y-Z" class="dot" data-position="-1 -1 -1" data-normal="-1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dim-X-Y" class="dim" data-position="-1 -1 0" data-normal="-1 0 0"></button>'
+ '	<button disabled aria-hidden="true" slot="hotspot-dot-X-Y+Z" class="dot" data-position="-1 -1 1" data-normal="-1 0 0"></button>'
+ '	<svg id="dimLines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="dimensionLineContainer">'
+ '		<line class="dimensionLine"></line>'
+ '		<line class="dimensionLine"></line>'
+ '		<line class="dimensionLine"></line>'
+ '		<line class="dimensionLine"></line>'
+ '		<line class="dimensionLine"></line>'
+ '	</svg>'
+ '	<!-- END DIMENSIONS -->'
+ '</model-viewer>'
+ '<!-- START MODEL VIEWER ANNOTATIONS -->'
+ '<div id="annotation-container" class="annotation-container"></div>'
+ '<!-- END MODEL VIEWER ANNOTATIONS -->'
+ '<!-- END MODEL VIEWER -->'
//END modelViewerHTML




//START app 
const app = {
	title: 'appTitle',
	version: 'alpha 1.1 24/07/17',
	dev: false,
	stats: false,
	viewerMode: false,
	viewerModes: [ 'cv', 'mv', 'ar'],

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
				alt: 'Lade-Animation',
				src: filepath + 'hand.gemacht loading.svg'
			},

			icon: {
				'arrow up': {
					alt: 'Pfeil nach oben',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow up pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow up coalgrey.svg' 
					}
				},
				'arrow right': {
					alt: 'Pfeil nach rechts',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow right pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow right coalgrey.svg' 
					}
				},
				'arrow down': {
					alt: 'Pfeil nach unten',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow down pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow down coalgrey.svg' 
					}
				},
				'arrow left': {
					alt: 'Pfeil nach links',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow left pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow left coalgrey.svg' 
					}
				},
				'category': {
					alt: 'Kategorie-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon category pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon category coalgrey.svg' 
					}
				},
				'context': {
					alt: 'Geschichte-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon context pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon context coalgrey.svg' 
					}
				},
				'filter': {
					alt: 'Filter-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon filter pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon filter coalgrey.svg' 
					}
				},
				'info': {
					alt: 'Informations-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon info pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon info coalgrey.svg' 
					}
				},
				'listen': {
					alt: 'Anhören-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon listen pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon listen coalgrey.svg' 
					}
				},
				'measurement': {
					alt: 'Maß-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon measurement pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon measurement coalgrey.svg' 
					}
				},
				'menu': {
					alt: 'Menü-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon menu pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon menu coalgrey.svg' 
					}
				},
				'move': {
					alt: 'Bewegungs-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon move pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon move coalgrey.svg' 
					}
				},
				'read': {
					alt: 'Lesen-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon read pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon read coalgrey.svg' 
					}
				},
				'reset view': {
					alt: 'Ansicht-Rücksetzen-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon reset view pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon reset view coalgrey.svg' 
					}
				},
				'search': {
					alt: 'Suche-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon search pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon search coalgrey.svg' 
					}
				},
				'tag': {
					alt: 'Tag-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon tag pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon tag coalgrey.svg' 
					}
				},
				'watch': {
					alt: 'Ansehen-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon watch pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon watch coalgrey.svg' 
					}
				},

				small: {
					'close': {
						alt: 'Schließen-Symbol',
						src: {
								pearlwhite: filepath + 'hand.gemacht WebApp icon small close pearlwhite.svg',
							coalgrey: filepath + 'hand.gemacht WebApp icon small close coalgrey.svg' 
						}
					},
					'pause': {
						alt: 'Pause-Symbol',
						src: {
								pearlwhite: filepath + 'hand.gemacht WebApp icon small pause pearlwhite.svg',
							coalgrey: filepath + 'hand.gemacht WebApp icon small pause coalgrey.svg' 
						}
					},
					'play': {
						alt: 'Abspielen-Symbol',
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
						alt: 'Kategorie-Marker',
						src: filepath + 'hand.gemacht WebApp cv marker category.svg'
					}
				}
			},

			ar: {
				marker: {
					'animation': {
						alt: 'Animation-Marker',
						src: filepath + 'hand.gemacht WebApp ar marker animation.svg'
					},
					'book': {
						alt: 'Buch-Marker',
						src: filepath + 'hand.gemacht WebApp ar marker book.svg'
					},
					'drag': {
						alt: 'Ziehen-Marker',
						src: filepath + 'hand.gemacht WebApp ar marker drag.svg'
					},
					'drop': {
						alt: 'Platzieren-Marker',
						src: filepath + 'hand.gemacht WebApp ar marker drop.svg'
					},
					'quest': {
						alt: 'Aufgabe-Marker',
						src: filepath + 'hand.gemacht WebApp ar marker quest.svg'
					},
					'quiz': {
						alt: 'Quiz-Marker',
						src: filepath + 'hand.gemacht WebApp ar marker quiz.svg'
					}
				},
				'rotate arrows': {
					alt: 'Drehen-Marker',
					src: filepath + 'hand.gemacht WebApp ar rotate arrows.svg'
				}
			}, 

			patronage: {
				alt: 'Bayerisches Staatsministerium der Finanzen und für Heimat als Förderer Logo',
				src: filepath + 'stmfh foerderung.webp'
			}
		}

		return assets;
	},

	init() {
		document.body.innerHTML = '';

		this.assets = this.assets(this.filepaths.assets);

		this.handleURLParameter();

		// from: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
		window.mobileCheck = function() {
			let check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		};

		this.isMobile = window.mobileCheck();

		if(this.isMobile) {
			this.dev && console.log('dev --- mobileAndTabletCheck: ', isMobile);
		}

		window.addEventListener('orientationchange', this.handleScreenOrientation);

		// check for passive flag support
		this.passiveSupported = false;

		try {
			const options = {
				get passive() {
					// This function will be called when the browser
					// attempts to access the passive property.
					this.passiveSupported = true;
					app.dev && console.log('dev --- passiveSupport: ',this.passiveSupported)
					return false;
				},
			};

			window.addEventListener("test", null, options);
			window.removeEventListener("test", null, options);
		} catch (err) {
			this.passiveSupported = false;
		}

		this.gui.init();		

		if(this.error) {
			this.errorHandler(this.error);
		}

		if (!this.viewerMode) {
			//redirect to collection viewer if no m is set in URL
			let url='?m=cv';
			this.dev ? url+='&dev=true' : '';
			this.stats ? url+='&dev=stats' : '';
			window.location.href = url;
		}

		if (this.viewerMode === 'cv') {
			this.gui.title.init();
			this.gui.loadingScreen.showLoadingScreen('loading collection viewer');
			this.collectionViewer.init();
		}

		if (this.viewerMode === 'mv') {
			document.body.innerHTML += modelViewerHTML;
			this.gui.loadingScreen.showLoadingScreen('loading model viewer');
		}

		//test if WebXR AR is supported
		if(navigator.xr){
			navigator.xr.isSessionSupported("immersive-ar").then((isSupported) => {
			this.dev && console.log("dev --- ar supported:", isSupported);
			if (this.viewerMode === 'ar' && isSupported) {
			//start ARViewer
			this.arViewer.init();
			this.gui.loadingScreen.showLoadingScreen('loading augmented reality');
			}else{
				this.dev && console.log("dev --- WebXR AR is not supported on this browser");
			}
			});
		}else{
			this.dev && console.log("dev --- WebXR is not supported on this browser");
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
				this.containerEl = document.createElement('div');
				document.body.appendChild(this.containerEl);
				this.containerEl.className = 'gui-title-container';

				this.element = document.createElement('h1');
				this.containerEl.appendChild(this.element);
				this.element.className = 'title';
				this.element.appendChild(document.createTextNode(app.title));
			}
		},

		logo: {

			init() {
				this.createElements();
			},

			createElements() {
				this.element = document.createElement('div');
				document.body.appendChild(this.element);
				this.element.className = 'gui-logo';
		
				this.element.image = document.createElement('img');
				this.element.appendChild(this.element.image);
				this.element.image.className = 'logo';
				this.element.image.src = app.assets.logo.src.coalgrey;
				this.element.image.alt = app.assets.logo.alt;
				this.element.image.width = 100;
				this.element.image.height = 100;
				this.element.image.setAttribute('loading', 'lazy');
			}
		},

		version: {
			
			init() {
				this.createElements();
			},

			createElements() {
				this.element = document.createElement('div');
				document.body.appendChild(this.element);
				this.element.className = 'gui-version text-smokegrey';
				this.element.appendChild(document.createTextNode(app.version));
			}
		},

		loadingScreen: {
			content: {
				value: 'loading...',
			},

			init() {
				this.createElements();
			}, 

			createElements() {
				this.element = document.createElement('div');
				document.body.appendChild(this.element);
				this.element.className = 'gui-loading-screen hide';

				this.animation = {};

				this.animation.containerEl = document.createElement('div');
				this.element.appendChild(this.animation.containerEl);
				this.animation.containerEl.className = 'animation-container';

				this.animation.object = document.createElement('object');
				this.animation.containerEl.appendChild(this.animation.object);
				this.animation.object.className = 'animation';
				this.animation.object.type = 'image/svg+xml';
				this.animation.object.data = app.assets.loading.src;
				this.animation.object.alt = app.assets.loading.alt;
				this.animation.object.width = 100;
				this.animation.object.height = 100;
		
				this.animation.textEl = document.createElement('div');
				this.animation.textEl = this.animation.textEl;
				this.animation.containerEl.appendChild(this.animation.textEl);
				this.animation.textEl.className = 'text';
				this.animation.textEl.appendChild(document.createTextNode(this.content.value));
			}, 

			showLoadingScreen(text) {
				this.element.classList.remove('hide');
				this.animation.containerEl.classList.remove('hide');
				this.element.classList.remove('transparent');
				this.animation.textEl.innerHTML = text;
				if(app.gui.title.element){
					app.gui.title.element.classList.add('text-pearlwhite');
				}
			}, 

			hideLoadingScreen(timeout = 0) {
				setTimeout(() => {
					this.element.classList.add('transparent');
					this.animation.textEl.innerHTML = this.content.value;

					if(app.gui.title.element){
						app.gui.title.element.classList.remove('text-pearlwhite');
					}

					this.animation.containerEl.classList.add('hide');

					setTimeout(() => {
						this.element.classList.add('hide');
					}, 1500)

				}, timeout);
			}
		},

		message: {
			type: {
				value: '',
			},
			content: {
				value: 'default message',
			},
			color: 'smokegrey',
			shadow: null,
			buttonSetup: [
				{label: '', color:'smokegrey', shadow: 'coalgrey'},
				{label: '', color:'smokegrey', shadow: 'coalgrey'}
				],
			showClose: true,

			init() {
				this.createElements();
				this.createElementsAR();
				this.setEventListener();
			}, 

			createElements() {
				this.boxEl = document.createElement('div');
				document.body.appendChild(this.boxEl);
				this.boxEl.className = 'gui-message-box';

				this.containerEl = document.createElement('div');
				this.boxEl.appendChild(this.containerEl);
				this.containerEl.className = 'gui-message-container hide';

				this.element = document.createElement('div');
				this.containerEl.appendChild(this.element);
				this.element.className = 'gui-message';

				this.type.element = document.createElement('div');
				this.containerEl.appendChild(this.type.element);
				this.type.element.className = 'type hide';

				this.closeEl = document.createElement('div');
				this.element.appendChild(this.closeEl);
				this.closeEl.className = 'close';
	
				this.closeEl.icon = document.createElement('img');
				this.closeEl.appendChild(this.closeEl.icon);
				this.closeEl.icon.className = 'close-icon';
				this.closeEl.icon.src = app.assets.icon.small['close'].src.pearlwhite;
				this.closeEl.icon.alt = app.assets.icon.small['close'].alt;
				this.closeEl.icon.width = 100;
				this.closeEl.icon.height = 100;
				this.closeEl.icon.setAttribute('loading', 'lazy');

				this.content.containerEl = document.createElement('div');
				this.element.appendChild(this.content.containerEl);
				this.content.containerEl.className = 'content-container';

				this.content.element = document.createElement('div');
				this.content.containerEl.appendChild(this.content.element);
				this.content.element.className = 'content';
				this.content.element.appendChild(document.createTextNode(this.content));

				this.buttons = {};

				this.buttons.containerEl = document.createElement('div');
				this.element.appendChild(this.buttons.containerEl);
				this.buttons.containerEl.className = 'button-container';

				this.buttons.button = [{},{}];

				this.buttons.button[0].element = document.createElement('button');
				this.buttons.containerEl.appendChild(this.buttons.button[0].element);
				this.buttons.button[0].element.className = 'button hide';

				this.buttons.button[0].labelEl = document.createElement('div');
				this.buttons.button[0].element.appendChild(this.buttons.button[0].labelEl);
				this.buttons.button[0].labelEl.className = 'label';
				this.buttons.button[0].labelEl.appendChild(document.createTextNode(this.buttonSetup[0].label));

				this.buttons.button[0].iconEl = document.createElement('img');
				this.buttons.button[0].element.appendChild(this.buttons.button[0].iconEl);
				this.buttons.button[0].iconEl.className = 'button-icon hide';
				this.buttons.button[0].iconEl.alt = 'Button-Icon';
				this.buttons.button[0].iconEl.width = 100;
				this.buttons.button[0].iconEl.height = 100;
				this.buttons.button[0].iconEl.setAttribute('loading', 'lazy');

				this.buttons.button[1].element = document.createElement('button');
				this.buttons.containerEl.appendChild(this.buttons.button[1].element);
				this.buttons.button[1].className = 'button hide';

				this.buttons.button[1].labelEl = document.createElement('div');
				this.buttons.button[1].element.appendChild(this.buttons.button[1].labelEl);
				this.buttons.button[1].labelEl.className = 'label';
				this.buttons.button[1].labelEl.appendChild(document.createTextNode(this.buttonSetup[1].label));

				this.buttons.button[1].iconEl = document.createElement('img');
				this.buttons.button[1].element.appendChild(this.buttons.button[1].iconEl);
				this.buttons.button[1].iconEl.className = 'button-icon hide';
				this.buttons.button[1].iconEl.alt = 'Button-Icon';
				this.buttons.button[1].iconEl.width = 100;
				this.buttons.button[1].iconEl.height = 100;
				this.buttons.button[1].iconEl.setAttribute('loading', 'lazy');
			}, 

			createElementsAR() {
				const guiArOverlay = document.createElement('div');
				this.boxEl.appendChild(guiArOverlay);
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
				scoreImg.setAttribute('loading', 'lazy');

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
				closeSymbol.className = 'annotation-close-icon';
				closeSymbol.width = '24';
				closeSymbol.height = '24';
				closeSymbol.setAttribute('loading', 'lazy');

				const helpContainer = document.createElement('div');
				guiArOverlay.appendChild(helpContainer);
				helpContainer.id = 'help-cont';
				helpContainer.className = 'help-container hide';
				var helpSymbol = document.createElement('img');
				helpContainer.appendChild(helpSymbol);
				helpSymbol.src = app.assets.ar.marker['quiz'].src;
				helpSymbol.alt = app.assets.ar.marker['quiz'].alt;
				helpSymbol.className = 'help-symbol';
				helpSymbol.setAttribute('loading', 'lazy');

				//close popup
				const guiCloseContainer = document.createElement('div');
				this.boxEl.appendChild(guiCloseContainer);
				guiCloseContainer.className = 'gui-message-container hide';
				guiCloseContainer.id = 'gui-close-popup';

				const guiCloseMessage = document.createElement('div');
				guiCloseContainer.appendChild(guiCloseMessage);
				guiCloseMessage.classList.add('gui-message', 'terracotta');

				const guiCloseContentContainer = document.createElement('div');
				guiCloseMessage.appendChild(guiCloseContentContainer);
				guiCloseContentContainer.className = 'content-container';

				const guiCloseContent = document.createElement('div');
				guiCloseContentContainer.appendChild(guiCloseContent);
				guiCloseContent.className= 'content';
				guiCloseContent.innerHTML = '<p> Entdecker-Modus wirklich verlassen? </p>';

				const guiCloseButtonContainer = document.createElement('div');
				guiCloseContainer.appendChild(guiCloseButtonContainer);
				guiCloseButtonContainer.className = 'button-container';

				const guiCloseButton = document.createElement('button');
				this.closeButton1El = guiCloseButton;
				guiCloseButtonContainer.appendChild(guiCloseButton);
				guiCloseButton.classList.add('button', 'pearlwhite', 'shadow-coalgrey');
				guiCloseButton.textContent = 'Ja';

				const guiCloseButton2 = document.createElement('button');
				this.closeButton2El = guiCloseButton2;
				guiCloseButtonContainer.appendChild(guiCloseButton2);
				guiCloseButton2.classList.add('button', 'pearlwhite', 'shadow-coalgrey');
				guiCloseButton2.textContent = 'Nein';

				const tooltipAR = document.createElement('div');
				this.tooltipElAr = tooltipAR;
				this.boxEl.appendChild(tooltipAR);
				tooltipAR.className = 'cv-tooltip hide';
	
				const tooltipContentAR = document.createElement('div');
				this.tooltipContentElAr = tooltipContentAR;
				tooltipAR.appendChild(tooltipContentAR);
				tooltipContentAR.classList.add('cv-tooltip-content', 'duckyellow');

				const tooltipOverlay = document.createElement('div');
				this.tooltipElOverlay = tooltipOverlay;
				this.boxEl.appendChild(tooltipOverlay);
				tooltipOverlay.className = 'cv-tooltip hide';
	
				const tooltipContentOverlay = document.createElement('div');
				this.tooltipContentElOverlay = tooltipContentOverlay;
				tooltipOverlay.appendChild(tooltipContentOverlay);
				tooltipContentOverlay.classList.add('cv-tooltip-content', 'skyblue');
			},

			showMessage() {
				this.containerEl.classList.remove('hide');

				if(app.collectionViewer.highlight.pillArray.length > 0) {
					app.collectionViewer.highlight.setPillEventlisteners();
				}

				app.gui.toolbar.toggleToolbar(false);
			}, 

			hideMessage() {
				this.type.value = '';
				this.content.value = 'default content';
				this.color = 'smokegrey';
				this.shadow = null;
				this.buttonSetup[0].label = '';
				this.buttonSetup[0].color = 'smokegrey';
				this.buttonSetup[0].shadow = 'coalgrey';
				this.buttonSetup[1].label = '';
				this.buttonSetup[1].color = 'smokegrey';
				this.buttonSetup[1].shadow = 'coalgrey';
				this.showClose = true;

				//reset scrolling
				this.content.containerEl.scrollTop = 0;

				this.type.element.className = 'type hide';
				this.element.className = 'gui-message';
				this.containerEl.className = 'gui-message-container hide';
				this.closeEl.className = 'close';
				this.buttons.button[0].element.className = 'button hide';
				this.buttons.button[1].element.className = 'button hide';
				this.buttons.button[0].iconEl.className = 'button-icon hide';
				this.buttons.button[1].iconEl.className = 'button-icon hide';

				this.content.element.innerHTML = this.content.value;
				this.buttons.button[0].labelEl.innerHTML = this.buttonSetup[0].label;
				this.buttons.button[1].labelEl.innerHTML = this.buttonSetup[1].label;

				app.gui.toolbar.toggleToolbar(true);
			},

			setEventListener() {
				const self = this;

				if(this.closeEl) {
					this.closeEl.addEventListener('click', (evt) => {
						self.hideMessage();
					});
				}
			},

			setMessage(message) {
				this.hideMessage();

				let buttonsActive = false;

				Object.keys(message).includes("type") ? this.type.value = message.type : '';
				Object.keys(message).includes("content") ? this.content.value = message.content : '';
				Object.keys(message).includes("color") ? this.color = message.color : '';
				Object.keys(message).includes("shadow") ? this.shadow = 'shadow-' + message.shadow : '';

				if(Object.keys(message).includes("buttonSetup")){
					buttonsActive = true;
					for(let s in message.buttonSetup) {
						const thisSetup = message.buttonSetup[s];
						Object.keys(thisSetup).includes("label") ? this.buttonSetup[s].label = thisSetup.label : '';
						Object.keys(thisSetup).includes("color") ? this.buttonSetup[s].color = thisSetup.color : '';
						Object.keys(thisSetup).includes("shadow") ? this.buttonSetup[s].shadow = 'shadow-' + thisSetup.shadow : '';
						Object.keys(thisSetup).includes("icon") ? this.buttonSetup[s].iconEl = thisSetup.icon : '';
					}
				}

				Object.keys(message).includes("showClose") ? this.showClose = message.showClose : this.showClose = true;

				this.type.value && this.type.element.classList.remove('hide');

				buttonsActive && this.element.classList.add('buttonsActive');

				for(let s in this.buttonSetup){
					const thisSetup = this.buttonSetup[s];
					thisSetup.label && this.buttons.button[s].element.classList.remove('hide');
					thisSetup.icon && this.buttons.button[s].iconEl.classList.remove('hide');

					if(thisSetup.icon && (thisSetup.color === 'coalgrey' || thisSetup.color === 'smokegrey' || thisSetup.color === 'skyblue' || thisSetup.color === 'terracotta')){
						this.buttons.button[s].iconEl.src = app.assets.icon[thisSetup.icon].src.pearlwhite;
					}else if(thisSetup.icon){
						this.buttons.button[s].iconEl.src = app.assets.icon[thisSetup.icon].src.coalgrey;
					}

					thisSetup.color && this.buttons.button[s].element.classList.add(thisSetup.color);
					thisSetup.shadow && this.buttons.button[s].element.classList.add(thisSetup.shadow);

					this.buttons.button[s].labelEl.innerHTML = thisSetup.label;
				}

				this.type.element.innerHTML = this.type.value;

				this.content.element.innerHTML = this.content.value;
			
				!this.showClose && this.closeEl.classList.add('hide');

				this.color && this.element.classList.add(this.color);

				if(this.color === 'pearlwhite'){
					this.closeEl.icon.src = app.assets.icon.small['close'].src.coalgrey;
					this.color && this.type.element.classList.add(message.shadow);
				}else{
					this.closeEl.icon.src = app.assets.icon.small['close'].src.pearlwhite;
					this.color && this.type.element.classList.add(this.color);
				}

				this.shadow && this.element.classList.add(this.shadow);

				app.dev && console.log('dev --- message: ', this)
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
			content: {
				value: 'error...',
			},
			button: {
				label: 'OK',
			},

			init() {
				this.createElements();
				this.setEventListener();
			}, 

			createElements() {
				this.containerEl = document.createElement('div');
				app.gui.message.boxEl.appendChild(this.containerEl);
				this.containerEl.className = 'gui-error-container hide';

				this.element = document.createElement('div');
				this.containerEl.appendChild(this.element);
				this.element.className = 'gui-error pearlwhite shadow-smokegrey';

				this.content.containerEl = document.createElement('div');
				this.element.appendChild(this.content.containerEl);
				this.content.containerEl.className = 'content-container';

				this.content.element = document.createElement('div');
				this.content.containerEl.appendChild(this.content.element);
				this.content.element.className = 'content';
				this.content.element.appendChild(document.createTextNode(this.content.value));

				this.buttonEl = document.createElement('button');
				this.containerEl.appendChild(this.buttonEl);
				this.buttonEl.className = 'button pearlwhite shadow-smokegrey';
				this.buttonEl.appendChild(document.createTextNode(this.button.label));
			}, 

			showError() {
				this.containerEl.classList.remove('hide');
				this.content.element.innerHTML = this.content.value;
				this.buttonEl.innerHTML = this.button.label;
			}, 

			hideError() {
				this.content.value = 'error ...';
				this.button.label = 'OK';
				this.containerEl.classList.add('hide');
				this.content.element.innerHTML = this.content.value;
				this.buttonEl.innerHTML = this.button.label;
			}, 

			setEventListener() {
				const self = this;
				if(this.buttonEl) {
					this.buttonEl.addEventListener('click', (evt) => {
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
				this.containerEl = document.createElement('div');
				document.body.appendChild(this.containerEl);
				this.containerEl.className = 'gui-fullscreen-container hide';

				this.image = document.createElement('img');
				this.containerEl.appendChild(this.image);
				this.image.className = 'image';
				this.image.src = this.src;
				this.image.alt = this.alt;
				this.image.width = 100;
				this.image.height = 100;
				this.image.setAttribute('loading', 'lazy');
			}, 

			showFullScreen() {
				this.containerEl.classList.remove('hide');
				this.image.src = this.src;
				this.image.alt = this.alt;
			}, 

			hideFullScreen() {
				this.src = '';
				this.alt = '';
				this.containerEl.classList.add('hide');
				this.image.src = this.src;
				this.image.alt = this.alt;
			}
		},
	
		menu: {
			text: 'Mehr über uns erfährst du hier:',
	
			init(){
				this.createElements();
				this.setEventListener();
			},
	
			createElements() {
				this.button = {};
				this.button.element = document.createElement('button');
				document.body.appendChild(this.button.element);
				this.button.element.className = 'gui-menu-button';
				this.button.element.setAttribute('aria-label', 'Menü-Button');
	
				this.button.image = document.createElement('img');
				this.button.element.appendChild(this.button.image);
				this.button.image.className = 'icon';
				this.button.image.src = app.assets.icon['menu'].src.coalgrey;
				this.button.image.alt = app.assets.icon['menu'].alt;
				this.button.image.width = 100;
				this.button.image.height = 100;
				this.button.image.setAttribute('loading', 'lazy');
	
				this.containerEl = document.createElement('div');
				document.body.appendChild(this.containerEl);
				this.containerEl.className = 'gui-menu-container hide';

				this.closeEl = document.createElement('div');
				this.containerEl.appendChild(this.closeEl);
				this.closeEl.className = 'close';
	
				this.closeEl.icon = document.createElement('img');
				this.closeEl.appendChild(this.closeEl.icon);
				this.closeEl.icon.className = 'close-icon';
				this.closeEl.icon.src = app.assets.icon.small['close'].src.pearlwhite;
				this.closeEl.icon.alt = app.assets.icon.small['close'].alt;
				this.closeEl.icon.width = 100;
				this.closeEl.icon.height = 100;
				this.closeEl.icon.setAttribute('loading', 'lazy');

				this.content = {};
				this.content.element = document.createElement('div');
				this.containerEl.appendChild(this.content.element);
				this.content.element.className = 'content';

				this.content.logo = {};
				this.content.logo.element = document.createElement('div');
				this.content.element.appendChild(this.content.logo.element);
				this.content.logo.element.className = 'menu-logo';
	
				this.content.logo.image = document.createElement('img');
				this.content.logo.element.appendChild(this.content.logo.image);
				this.content.logo.image.className = 'logo';
				this.content.logo.image.src = app.assets.logo.src.pearlwhite;
				this.content.logo.image.alt = app.assets.logo.alt;
				this.content.logo.image.width = 100;
				this.content.logo.image.height = 100;
				this.content.logo.image.setAttribute('loading', 'lazy');

				this.content.title = {};
				this.content.title.element = document.createElement('div');
				this.content.element.appendChild(this.content.title.element);
				this.content.title.element.className = 'title';
				this.content.title.element.appendChild(document.createTextNode(app.title));
				
				this.content.text = {};
				this.content.text = document.createElement('div');
				this.content.element.appendChild(this.content.text);
				this.content.text.className = 'text';
				this.content.text.appendChild(document.createTextNode(this.text));

				this.content.buttons = {};
				this.content.buttons.containerEl = document.createElement('div');
				this.content.element.appendChild(this.content.buttons.containerEl);
				this.content.buttons.containerEl.className = 'button-container';
				
				this.content.buttons.project = {};
				this.content.buttons['project'].linkEl = document.createElement('a');
				this.content.buttons['project'].linkEl.href = '#'; //Links anpassen
				this.content.buttons.containerEl.appendChild(this.content.buttons['project'].linkEl);
				this.content.buttons['project'].element = document.createElement('button');
				this.content.buttons['project'].linkEl.appendChild(this.content.buttons['project'].element);
				this.content.buttons['project'].element.className = 'pearlwhite shadow-smokegrey';
				this.content.buttons['project'].element.appendChild(document.createTextNode('Das Projekt'));
				
				this.content.buttons.patronage = {};
				this.content.buttons['patronage'].linkEl = document.createElement('a');
				this.content.buttons['patronage'].linkEl.href = '#'; //Links anpassen
				this.content.buttons.containerEl.appendChild(this.content.buttons['patronage'].linkEl);
				this.content.buttons['patronage'].element = document.createElement('button');
				this.content.buttons['patronage'].linkEl.appendChild(this.content.buttons['patronage'].element);
				this.content.buttons['patronage'].element.className = 'pearlwhite shadow-smokegrey';
				this.content.buttons['patronage'].element.appendChild(document.createTextNode('Die Förderung'));
				
				this.content.links = {};
				this.content.links.containerEl = document.createElement('div');
				this.content.element.appendChild(this.content.links.containerEl);
				this.content.links.containerEl.className = 'link-container';

				this.content.links.contact = {};
				this.content.links['contact'].element = document.createElement('a');
				this.content.links['contact'].element.href = 'https://dev.handgemacht.bayern?mv=ar&model=00000000-0000-0000-0000-000000000001'; //Links anpassen
				this.content.links.containerEl.appendChild(this.content.links['contact'].element);
				this.content.links['contact'].element.appendChild(document.createTextNode('Kontakt'));
	
				this.content.links.imprint = {};
				this.content.links['imprint'].element = document.createElement('a');
				this.content.links['imprint'].element.href = '#'; //Links anpassen
				this.content.links.containerEl.appendChild(this.content.links['imprint'].element);
				this.content.links['imprint'].element.appendChild(document.createTextNode('Impressum'));
	
				this.content.versionEl = document.createElement('div');
				this.content.element.appendChild(this.content.versionEl);
				this.content.versionEl.className = 'version';
				this.content.versionEl.appendChild(document.createTextNode(app.version));
	
				this.content.patronageEl = document.createElement('div');
				this.containerEl.appendChild(this.content.patronageEl);
				this.content.patronageEl.className = 'patronage-logo';
	
				this.content.patronageEl.image = document.createElement('img');
				this.content.patronageEl.appendChild(this.content.patronageEl.image);
				this.content.patronageEl.image.className = 'logo';
				this.content.patronageEl.image.src = app.assets.patronage.src;
				this.content.patronageEl.image.alt = app.assets.patronage.alt;
				this.content.patronageEl.image.width = 270;
				this.content.patronageEl.image.height = 97;
				this.content.patronageEl.image.setAttribute('loading', 'lazy');
			},
	
			setEventListener() {
				if(this.closeEl) {
					this.closeEl.addEventListener('click', (evt) => {
						app.gui.menu.hideMenu();
					});
				}
				if(this.button.element) {
					this.button.element.addEventListener('click', (evt) => {
						app.gui.menu.showMenu();
					});
				}
			},
	
			showMenu() {
				if(this.containerEl && this.button.element) {
					this.containerEl.classList.remove('hide');
					this.button.element.classList.add('hide');
				}	
			},
	
			hideMenu() {
				if(this.containerEl && this.button.element) {
					this.containerEl.classList.add('hide');
					this.button.element.classList.remove('hide');
				}
			}
		}, 

		toolbar: {
			init(){
				this.createElements();
			},
	
			createElements() {
				this.boxEl = document.createElement('div');
				document.body.appendChild(this.boxEl);
				this.boxEl.className = 'gui-toolbar-box';

				this.containerEl = document.createElement('div');
				this.boxEl.appendChild(this.containerEl);
				this.containerEl.className = 'gui-toolbar-container';

				this.element = document.createElement('div');
				this.containerEl.appendChild(this.element);
				this.element.className = 'gui-toolbar';

				this.tab = {};
				this.tab.boxEl = document.createElement('div');
				this.containerEl.appendChild(this.tab.boxEl);
				this.tab.boxEl.className = 'tab-container';

				this.tab.element = document.createElement('div');
				this.tab.boxEl.appendChild(this.tab.element);
				this.tab.element.className = 'tab';

				this.tab.content = {};
				this.tab.content.containerEl = document.createElement('div');
				this.tab.element.appendChild(this.tab.content.containerEl);
				this.tab.content.containerEl.className = 'content-container';

				this.tab.content.fadeEl = document.createElement('div');
				this.tab.element.appendChild(this.tab.content.fadeEl);
				this.tab.content.fadeEl.className = 'fade';

				this.tab.content.barEl = document.createElement('div');
				this.tab.element.appendChild(this.tab.content.barEl);
				this.tab.content.barEl.className = 'bar';

				this.tab.content.element = document.createElement('div');
				this.tab.content.containerEl.appendChild(this.tab.content.element);
				this.tab.content.element.className = 'content';

				this.button = [];
				for (var i = 0; i < 4; i++) {
					this.button[i] = document.createElement('button');
					this.element.appendChild(this.button[i]);
					this.button[i].setAttribute('id', 'toolbar-button-'+i);
					this.button[i].setAttribute('aria-label', 'Button');
					this.button[i].className = 'button hide';

					this.button[i].icon = document.createElement('img');
					this.button[i].appendChild(this.button[i].icon);
					this.button[i].icon.className = 'icon';
					this.button[i].icon.alt = 'Button-Icon';
					this.button[i].icon.width = 100;
					this.button[i].icon.height = 100;
					this.button[i].icon.setAttribute('loading', 'lazy');
				}
			}, 

			setToolbar(color = 'pearlwhite', shadowColor = 'shadow-smokegrey') {
				if(typeof this.element != 'undefined'){
					let toolbar = this.element;
					color && toolbar.classList.add(color);
					shadowColor && toolbar.classList.add(shadowColor);
					toolbar.classList.add('active');
				}
			},

			toggleToolbar(forceShow = null) {
				if(forceShow === true) {
					this.element.classList.remove('active');
					this.element.classList.add('active');
					return;
				}
				if(forceShow === false) {
					this.element.classList.remove('active');
					return;
				}
				this.element.classList.toggle('active');
			},

			setToolbarTab(colors) {
				if(typeof this.tab.element != 'undefined'){
					let toolbarTab = this.tab.element;
					let fade = this.tab.content.fadeEl;
					let fadeBar = this.tab.content.barEl;

					if(toolbarTab.classList.contains('active')){
						toolbarTab.className = 'tab active';
					}else{
						toolbarTab.className = 'tab';
					}

					fadeBar.className = 'bar';	

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
					element.setAttribute('aria-label', setup.name)
					element.classList.add(setup.colors.button);
					let iconElement = element.children[0];

					iconElement.src = app.assets.icon[setup.func].src[setup.colors.buttonIcon];
					iconElement.alt = app.assets.icon[setup.func].alt;
					
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
				
				let toolbar = this.element;
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
				let toolbar = this.element;
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
				let toolbar = this.element;
				let toolbarTab = this.tab.element
				let toolbarTabContent = this.tab.content.element;
				let toolbarTabFade = this.tab.content.fadeEl;
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
			app.gui.toolbar.button[1].icon.addEventListener('click', (e) => {
				app.collectionViewer.search.resetSearchInput();
			})

			app.gui.toolbar.setButton(this.filter.buttonSetup);
			this.filter.init();
			app.gui.toolbar.button[2].icon.addEventListener('click', (e) => {
				app.collectionViewer.filter.filterUpdated ? app.collectionViewer.filter.updateForcegraph() : '';
			})

			app.gui.toolbar.setButton(this.resetView.buttonSetup);
			this.resetView.init();
			app.gui.toolbar.button[3].icon.addEventListener('click', (e) => {
				app.collectionViewer.resetView.resetCameraView();
			})
		},

		tooltip: {

			init() {
				this.createElements();
			},

			createElements() {
				this.element = document.createElement('div');
				document.body.appendChild(this.element);
				this.element.className = 'cv-tooltip hide';
	
				this.typeEl = document.createElement('div');
				this.typeEl = this.typeEl;
				this.element.appendChild(this.typeEl);
				this.typeEl.className = 'type';
	
				this.contentEl = document.createElement('div');
				this.contentEl = this.contentEl;
				this.element.appendChild(this.contentEl);
				this.contentEl.className = 'content';
			}, 

			showTooltip(type, content) {
				let typeText = '';
				if(type === 'node-object'){
					typeText = 'Objekt'
					this.typeEl.classList.add(app.collectionViewer.elementColor.object);
					this.contentEl.classList.add(app.collectionViewer.elementColor.object);
				}
				if(type === 'node-category'){
					typeText = 'Kategorie'
					this.typeEl.classList.add(app.collectionViewer.elementColor.category);
					this.contentEl.classList.add(app.collectionViewer.elementColor.category);
				}
				if(type === 'link-tag'){
					typeText = 'Tag-Link'
					this.typeEl.classList.add(app.collectionViewer.elementColor.tag);
					this.contentEl.classList.add(app.collectionViewer.elementColor.tag);
				}
				if(type === 'link-category'){
					typeText = 'Kategorie-Link'
					this.typeEl.classList.add(app.collectionViewer.elementColor.category);
					this.contentEl.classList.add(app.collectionViewer.elementColor.category);
				}
				this.typeEl.appendChild(document.createTextNode(typeText));
				this.contentEl.appendChild(document.createTextNode(content));
				this.element.classList.remove('hide');
			}, 

			hideTooltip() {
				this.element.classList.add('hide');
				this.typeEl.innerHTML = '';
				this.typeEl.className = 'type';
				this.contentEl.innerHTML = '';
				this.contentEl.className = 'content';
			}, 

			mouseoverHandler(fgElement) {
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
			
					this.element.style.left = x + 25 + 'px';
					this.element.style.top = y + 25 + 'px';
				};
			
				document.addEventListener('mousemove', (e) => {
					move(e);
				});
				document.addEventListener('touchmove', (e) => {
					move(e);
				});

				let type = '';

				fgElement ? type = fgElement.type : type = 'none';

				if(type === 'none'){
					return;
				}

				if (fgElement.type === 'link-tag' || fgElement.type === 'link-category') {
					if (fgElement.material.visible === false) {
						return;
					}
				}else if(fgElement.type === 'node-object' || fgElement.type === 'node-category'){
					if (fgElement.model.material.visible === false) {
						return;
					}
				}

				if(isTouchDevice()) { return; }

				this.showTooltip(fgElement.type, fgElement.name);
			} 
		},

		highlight: {

			pillArray: [],

			init() {
				this.setEventListener();
			},

			setEventListener(){
				if(app.gui.message.closeEl) {
					app.gui.message.closeEl.addEventListener('click', (evt) => {
						app.collectionViewer.resetView.resetCameraView();
					});
				}
			},

			onclickHandler(fgNode) {
				let type = '';
				fgNode ? type = fgNode.type : type = 'none';
			
				if(type !== 'none'){
					app.gui.message.hideMessage();
					app.collectionViewer.highlight.generateMessage(fgNode);
				}
			}, 

			generateMessage(fgNode) {
				let type = '';
				fgNode ? type = fgNode.type : type = 'none';

				this.pillArray = [];
				
				if(type === 'node-object'){
					let categoryList = '<div class="categories"><h6 class="text-smokegrey">Kategorien: </h6>';
					for(let category in fgNode.categories) {
						let pillId = 'c-' + self.crypto.randomUUID();;
						categoryList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.category + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.category +'" '
										+ 'data-name="' + fgNode.categories[category].replace(/"/g, '&quot;') +'" '
										+ 'data-type="category" data-active="false">' 
										+ fgNode.categories[category] 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					categoryList += '</div>';
	
					let tagList = '<div class="tags"><h6 class="text-smokegrey">Tags: </h6>';
					for(let tag in fgNode.tags) {
						let pillId = 't-' + self.crypto.randomUUID();;
						tagList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.tag + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.tag +'" '
										+ 'data-name="' + fgNode.tags[tag].replace(/"/g, '&quot;') +'" '
										+ 'data-type="tag" data-active="false">' 
										+ fgNode.tags[tag] 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					tagList += '</div>';

					let message = {
						type: 'Objekt',
						content: '<h3>' + fgNode.name + '</h3>'
								+ '<p>Hier steht später eine Objektbeschreibung</p>'
								+ categoryList
								+ tagList,
						color: 'pearlwhite',
						shadow: app.collectionViewer.elementColor.object,
						buttonSetup: [
							{ label: 'erkunden', color: app.collectionViewer.elementColor.object, icon: 'arrow right' }
							]
					}

					app.gui.message.setMessage(message);

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						let url = '?m=mv&model=' + fgNode.id + '';
						window.location.href = url;
					})
				}

				if(type === 'node-category'){
					let objectList = '<div class="objects"><h6 class="text-smokegrey">Verbundene Objekte: </h6>';
					for(let node of app.collectionViewer.proxyfgData.data.nodes) {
						if(!node.categories.includes(fgNode.name) || node.type === 'node-category'){ continue; }
						let pillId = 'c-' + self.crypto.randomUUID();;
						objectList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.object + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.object +'" '
										+ 'data-name="' + node.name.replace(/"/g, '&quot;') +'" '
										+ 'data-type="object" data-active="false">' 
										+ node.name
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					
					let message = {
						type: 'Kategorie',
						content: '<h3>' + fgNode.name + '</h3>'
								+ '<p>Hier steht später eine Kategoriebeschreibung</p>'
								+ objectList,
						color: 'pearlwhite',
						shadow: app.collectionViewer.elementColor.category
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
				id: '#toolbar-button-0',
				name: 'Informationen',
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
				id: '#toolbar-button-1',
				name: 'Suche',
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
					//app.dev && console.log('dev --- cv > search > proxyfgData: ', app.collectionViewer.proxyfgData.data);
					let fgData = app.collectionViewer.proxyfgData.data.nodes;
					for( let index in fgData){
						let object = fgData[index];
						if(object.name){
							this.nodeArray.push(object.name);
						}
					}
					//app.dev && console.log('dev --- cv > search > nodeArray: ', this.nodeArray);
					this.autocomplete(this.inputEl, this.nodeArray);
				});
			}, 

			createElements() {
				if(typeof document.querySelector(this.buttonSetup.id) === 'undefined'){ return; };

				this.button = {};
				this.button.element = document.querySelector(this.buttonSetup.id);

				this.button.input = {};
				this.button.input.containerEl = document.createElement('div');
				this.button.element.appendChild(this.button.input.containerEl);
				this.button.input.containerEl.className = 'cv-search-input-container hide';

				this.button.input.element = document.createElement('input');
				this.inputEl = this.button.input.element;
				this.button.input.containerEl.appendChild(this.button.input.element);
				this.button.input.element.className = 'cv-search-input ' + this.buttonSetup.colors.buttonText + ' ' + this.buttonSetup.colors.button;
				this.button.input.element.setAttribute('id', 'cv-search-input');
				this.button.input.element.setAttribute('type', 'text');
				this.button.input.element.setAttribute('name', 'searchBar');
				this.button.input.element.setAttribute('placeholder', this.texts.placeholder);

				this.button.autocomplete = {};
				this.button.autocomplete.list = {};
				this.button.autocomplete.list.containerEl = document.createElement('div');
				this.button.element.appendChild(this.button.autocomplete.list.containerEl);
				this.button.autocomplete.list.containerEl.className = 'autocomplete-list-container hide';
				this.button.autocomplete.list.containerEl.classList.add(this.buttonSetup.colors.tabBackground);
				this.button.autocomplete.list.containerEl.classList.add(this.buttonSetup.colors.tabShadow);
			}, 

			autocomplete(element, array) {
				//source: https://www.w3schools.com/howto/howto_js_autocomplete.asp
				var currentFocus;

				element.addEventListener('input', function(e) {
					let inputValue = this.value;
					app.collectionViewer.search.removeAutoCompleteList();
					if (!inputValue || inputValue.length < 1) { return false;}
					
					app.collectionViewer.search.button.autocomplete.list.containerEl.classList.remove('hide');

					app.collectionViewer.search.button.autocomplete.list.element = document.createElement('div');
					let autocompleteList = app.collectionViewer.search.button.autocomplete.list.element;
					app.collectionViewer.search.button.autocomplete.list.element = autocompleteList;
					app.collectionViewer.search.button.autocomplete.list.containerEl.appendChild(autocompleteList);
					autocompleteList.setAttribute('id', 'cv-search-input-autocomplete-list');
					autocompleteList.className = 'autocomplete-list ';
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
								app.gui.toolbar.buttonActionSlide(app.collectionViewer.search.button.element);
								app.collectionViewer.search.executeRequest(name);
							});
							autocompleteList.appendChild(listItemEl);
						}
					}

					if(!autocompleteList.hasChildNodes()) {
						let listItemEl = document.createElement('div');
						listItemEl.innerHTML = 'keine Ergebnisse';
						autocompleteList.appendChild(listItemEl);
					}
				});

				element.addEventListener("keydown", function(e) {
					var x = app.collectionViewer.search.button.autocomplete.list.element;
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
				let autocompleteLists = document.getElementsByClassName('autocomplete-list');
				
				if(typeof autocompleteLists === 'undefined') { return; }
				if(autocompleteLists.length < 1) { return; };
				for (let list of autocompleteLists) {
					list.parentNode.removeChild(list);
				}
				this.button.autocomplete.list.containerEl.classList.remove('hide');
				this.button.autocomplete.list.containerEl.classList.add('hide');
			}, 

			resetSearchInput() {
				window.setTimeout( () => {
					app.collectionViewer.search.inputEl.focus({ focusVisible: true });
				}, 10)
				this.button.input.element.value = null;
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
				id: '#toolbar-button-2',
				name: 'Filter',
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
					//app.dev && console.log('dev --- cv > filter > proxyfgData-update: ', app.collectionViewer.proxyfgData.data);
					this.generateCheckBoxList('#cv-filter-category-list', app.collectionViewer.proxyfgData.data.categorylist, app.collectionViewer.elementColor.category);
					this.generateCheckBoxList('#cv-filter-tag-list', app.collectionViewer.proxyfgData.data.taglist, app.collectionViewer.elementColor.tag);
				});
			},

			createElements() {
				let toolBarTabContent = app.gui.toolbar.tab.content.element;

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
				categoryListContainer.className = 'list-container';

				const categoryListButton = document.createElement('button');
				categoryListContainer.appendChild(categoryListButton);
				categoryListButton.className = 'button collapsible-button ' + this.buttonSetup.colors.tabText;

				const categoryListButtonIcon = document.createElement('div');
				categoryListButton.appendChild(categoryListButtonIcon);
				categoryListButtonIcon.className = 'icon ' + app.collectionViewer.elementColor.category;

				const categoryIcon = document.createElement('img');
				categoryListButtonIcon.appendChild(categoryIcon);
				categoryIcon.src = app.assets.icon['category'].src.pearlwhite;
				categoryIcon.alt = app. assets.icon['category'].alt;
				categoryIcon.width = 100;
				categoryIcon.height = 100;
				categoryIcon.setAttribute('loading', 'lazy');

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
				categorySelectAllButton.className = 'button text-small';
				categorySelectAllButton.setAttribute('data-selected', true);
				categorySelectAllButton.setAttribute('id', 'cv-filter-category-list-select-all');
				categorySelectAllButton.appendChild(document.createTextNode(this.texts.selectAllButton));

				const tagListContainer = document.createElement('div');
				filterContainer.appendChild(tagListContainer);
				tagListContainer.className = 'list-container';

				const tagListButton = document.createElement('button');
				tagListContainer.appendChild(tagListButton);
				tagListButton.className = 'button collapsible-button ' + this.buttonSetup.colors.tabText;

				const tagListButtonIcon = document.createElement('div');
				tagListButton.appendChild(tagListButtonIcon);
				tagListButtonIcon.className = 'icon ' + app.collectionViewer.elementColor.tag;

				const tagIcon = document.createElement('img');
				tagListButtonIcon.appendChild(tagIcon);
				tagIcon.src = app.assets.icon['tag'].src.coalgrey;
				tagIcon.alt = app. assets.icon['tag'].alt;
				tagIcon.width = 100;
				tagIcon.height = 100;
				tagIcon.setAttribute('loading', 'lazy');

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
				tagSelectAllButton.className = 'button text-small';
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

				//app.dev && console.log('dev --- cv > filter > updateForcegraph > loadJSONModelsComponent', loadJSONModelsComponent);

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
				id: '#toolbar-button-3',
				name: 'Ansicht Zurücksetzen',
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
			app.stats && collectionViewerElement.setAttribute('stats', '');

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
		this.startPlacing = '<img src="' + app.assets.icon['move'].src.pearlwhite + '" alt="' + app.assets.icon['move'].alt + '" height="50px" loading="lazy" /> <p>Um das Objekt zu platzieren, suche eine freie Boden- oder Tischfläche. Das Objekt soll dort in realer Größe platziert werden.</p>';
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
			arViewerElement.setAttribute('webxr', 'requiredFeatures:	hit-test, dom-overlay, anchors; overlayElement: .gui-message-box; referenceSpaceType:local;');
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
			imgSprite.setAttribute('loading', 'lazy');

			const imgPlacer = document.createElement('img');
			assets.appendChild(imgPlacer);
			imgPlacer.id = 'placer';
			imgPlacer.crossOrigin = 'anonymous';
			imgPlacer.src = app.assets.ar.marker['drop'].src;
			imgPlacer.setAttribute('loading', 'lazy');

			const imgDrag = document.createElement('img');
			assets.appendChild(imgDrag);
			imgDrag.id = 'dragIcon';
			imgDrag.crossOrigin = 'anonymous';
			imgDrag.src = app.assets.ar.marker['drag'].src;
			imgDrag.setAttribute('loading', 'lazy');

			const imgArrow = document.createElement('img');
			assets.appendChild(imgArrow);
			imgArrow.id = 'arrow';
			imgArrow.crossOrigin = 'anonymous';
			imgArrow.src = app.assets.ar['rotate arrows'].src;
			imgArrow.setAttribute('loading', 'lazy');

			const imgBook = document.createElement('img');
			assets.appendChild(imgBook);
			imgBook.id = 'book';
			imgBook.crossOrigin = 'anonymous';
			imgBook.src = app.assets.ar.marker['book'].src;
			imgBook.setAttribute('loading', 'lazy');

			const imgPlay = document.createElement('img');
			assets.appendChild(imgPlay);
			imgPlay.id = 'playAnim';
			imgPlay.crossOrigin = 'anonymous';
			imgPlay.src = app.assets.ar.marker['animation'].src;
			imgPlay.setAttribute('loading', 'lazy');

			const imgExcl = document.createElement('img');
			assets.appendChild(imgExcl);
			imgExcl.id = 'exclamation';
			imgExcl.crossOrigin = 'anonymous';
			imgExcl.src = app.assets.ar.marker['quest'].src;
			imgExcl.setAttribute('loading', 'lazy');

			const imgQuiz = document.createElement('img');
			assets.appendChild(imgQuiz);
			imgQuiz.id = 'question';
			imgQuiz.crossOrigin = 'anonymous';
			imgQuiz.src = app.assets.ar.marker['quiz'].src;
			imgQuiz.setAttribute('loading', 'lazy');

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

	getURLParameter(param = null) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		if(!param) { return false; }

		if(urlParams.get(param)) {
			return urlParams.get(param);
		}

		return false;
	}, 

	handleURLParameter() {
		this.dev = (this.getURLParameter('dev') === 'true');
		this.stats = (this.getURLParameter('stats') === 'true');
		const mode = this.getURLParameter('m');
		const error = this.getURLParameter('error');

		if(!this.viewerModes.includes(mode)){
			this.viewerMode = false;
		}else{
			this.viewerMode = mode;
		}

		if(error && error.match('[0-9]+') && error.length === 3) {
			this.error = error;
		}
	}, 

	errorHandler(error){
		app.dev && console.log('dev --- error: ', error);

		if(error === '000'){
			this.gui.error.content.value = '<h3>Error-Code: 000</h3>\nWrong URL Parameter for viewerMode.';
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}

		if(error === '001'){
			this.gui.error.content.value = '<h3>Error-Code: 001</h3>\nA wrong or no model id was found in the URL.';
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}
	}
}

//END app 

app.init();
app.dev && console.log('dev --- app: ', app)
export { app };