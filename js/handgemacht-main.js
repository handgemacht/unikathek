



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
		draco: './draco/',
		annotationMedia: 'annotation-media/',
		collectionJSON: 'json/handgemacht-collection.json'
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
				'ar': {
					alt: 'Augmented-Reality-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon ar pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon ar coalgrey.svg' 
					}
				},
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

		this.isMobile = this.checkMobile();
		this.isArCapable = this.checkArSupport();
		this.passiveSupported = this.checkEventlistenerPassiveSupport();

		window.addEventListener('orientationchange', this.handleScreenOrientation);

		this.gui.init();		

		this.gltfLoader = new THREE.GLTFLoader();
		this.dracoLoader = new THREE.DRACOLoader();
		this.dracoLoader.setDecoderPath( this.filepaths.draco );
		this.gltfLoader.setDRACOLoader( this.dracoLoader );

		if (!this.viewerMode) {
			//redirect to collection viewer if no m is set in URL
			let url='?m=cv';
			this.dev ? url+='&dev=true' : '';
			this.stats ? url+='&dev=stats' : '';
			window.location.href = url;
		}

		if (this.viewerMode === 'cv') {
			this.collectionViewer.init();
			this.gui.title.init();
			this.gui.loadingScreen.showLoadingScreen('loading collection viewer');
		}

		if (this.viewerMode === 'mv') {
			this.modelViewer.init();
			this.gui.title.init();
			this.gui.loadingScreen.showLoadingScreen('loading model viewer');
		}

		if (this.viewerMode === 'ar' && this.isArCapable) {
			this.arViewer.init();
			this.gui.loadingScreen.showLoadingScreen('loading augmented reality');
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

				this.arrowEl = document.createElement('div');
				this.containerEl.appendChild(this.arrowEl);
				this.arrowEl.className = 'arrow hide';

				this.arrowEl.icon = document.createElement('img');
				this.arrowEl.appendChild(this.arrowEl.icon);
				this.arrowEl.icon.className = 'icon';
				this.arrowEl.icon.src = app.assets.icon['arrow left'].src.coalgrey;
				this.arrowEl.icon.alt = app.assets.icon['arrow left'].alt;
				this.arrowEl.icon.width = 100;
				this.arrowEl.icon.height = 100;
				this.arrowEl.icon.setAttribute('loading', 'lazy');

				this.element = document.createElement('h1');
				this.containerEl.appendChild(this.element);
				this.element.className = 'title';
				this.element.appendChild(document.createTextNode(app.title));
			}, 

			set(title = app.title, showArrow = false, from = null) {
				if(from){
					from = '&from=' + from;
				}
				this.element.innerHTML = title;
				this.containerEl.className = 'gui-title-container';
				this.arrowEl.className = 'arrow hide';

				showArrow && this.arrowEl.classList.remove('hide');
				showArrow && this.containerEl.classList.add('clickable');

				showArrow && this.containerEl.addEventListener('click', (e) => {
					let url='?m=cv&' + from;
					app.dev ? url+='&dev=true' : '';
					app.stats ? url+='&dev=stats' : '';
					window.location.href = url;
				})

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
				Object.keys(message).includes("shadow") ? this.shadow = message.shadow : '';

				if(Object.keys(message).includes("buttonSetup")){
					buttonsActive = true;
					for(let s in message.buttonSetup) {
						const thisSetup = message.buttonSetup[s];
						Object.keys(thisSetup).includes("label") ? this.buttonSetup[s].label = thisSetup.label : '';
						Object.keys(thisSetup).includes("color") ? this.buttonSetup[s].color = thisSetup.color : '';
						Object.keys(thisSetup).includes("shadow") ? this.buttonSetup[s].shadow = thisSetup.shadow : '';
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
				}else{
					this.closeEl.icon.src = app.assets.icon.small['close'].src.pearlwhite;
				}

				this.shadow && this.type.element.classList.add(this.shadow.replace('shadow-', ''));
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

		toolBarSetup: {
			color: 'pearlwhite', 
			shadowColor: 'shadow-smokegrey'
		},

		proxyfgData: new Proxy({
				data: null, 
				update: new CustomEvent("proxyfgData-update")
			}, 
			{
				set: function(target, prop, value){
					target[prop] = value;
					document.dispatchEvent(app.collectionViewer.proxyfgData.update);
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

			app.gui.toolbar.setToolbar(this.toolBarSetup.color, this.toolBarSetup.shadowColor);

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
						shadow: 'shadow-' + app.collectionViewer.elementColor.object,
						buttonSetup: [
							{ label: 'erkunden', color: app.collectionViewer.elementColor.object, icon: 'arrow right' }
							]
					}

					app.gui.message.setMessage(message);

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						let url = '?m=mv&history=true';
						app.dev ? url += '&dev=true' : '';
						app.stats ? url += '&stats=true' : '';
						url += '&model=' + fgNode.id;
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
						shadow: 'shadow-' + app.collectionViewer.elementColor.category
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
					button: 'coalgrey',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-coalgrey',
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

			this.sceneEl = document.createElement('a-scene');
			document.body.appendChild(this.sceneEl);
			this.sceneEl.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			this.sceneEl.setAttribute('load-json-models', 'scaleFactor: 0.05; normalization: 0.65');
			this.sceneEl.setAttribute('xr-mode-ui', 'enabled: false');
			this.sceneEl.setAttribute('device-orientation-permission-ui', 'enabled: false');
			this.sceneEl.setAttribute('light', 'defaultLightsEnabled: false');
			app.stats && this.sceneEl.setAttribute('stats', '');

			this.cursorEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.cursorEl);
			this.cursorEl.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: true;');
			this.cursorEl.setAttribute('raycaster', 'objects: #forcegraph;');

			this.cameraEl = document.createElement('a-camera');
			this.sceneEl.appendChild(this.cameraEl);
			this.cameraEl.setAttribute('orbit-controls', 'enabled: true; target: #orbit-target; autoRotate: true');
			this.cameraEl.setAttribute('wasd-controls', 'enabled: false');

			this.ambientLightEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.ambientLightEl);
			this.ambientLightEl.setAttribute('light', 'type: ambient; color: #FAF0E6; intensity: 2');

			this.directionalLightEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.directionalLightEl);
			this.directionalLightEl.setAttribute('light', 'type: directional; color: #FAF0E6; intensity: 4');
			this.directionalLightEl.setAttribute('position', '-2 0 2');

			this.assetsEl = document.createElement('a-assets');
			this.sceneEl.appendChild(this.assetsEl);
		}
	}, //collectionViewer

	modelViewer: {

		toolBarSetup: {
			color: 'pearlwhite', 
			shadowColor: 'shadow-terracotta'
		},

		proxyJSON: new Proxy({
				data: null, 
				update: new CustomEvent("proxyJSON-update")
			}, 
			{
				set: function(target, prop, value){
					target[prop] = value;
					if(typeof app.modelViewer.proxyJSON === 'undefined') { return false; };
					if(!app.modelViewer.proxyJSON.data) { return false; };
					app.dev && console.log('dev --- proxyJSON-update', app.modelViewer.proxyJSON);
					document.dispatchEvent(app.modelViewer.proxyJSON.update);
					return true;
				}
			}
		),

		init() {
			this.createElements();

			app.gui.toolbar.setToolbar(this.toolBarSetup.color, this.toolBarSetup.shadowColor);

			app.gui.toolbar.setButton(this.info.buttonSetup);

			app.gui.toolbar.setButton(this.contextStory.buttonSetup);

			app.gui.toolbar.setButton(this.measurement.buttonSetup);
			this.measurement.init();
			app.gui.toolbar.button[2].addEventListener('click', (e) => {
				app.modelViewer.measurement.toggleMeasurements();
			})

			app.gui.toolbar.setButton(this.ar.buttonSetup);
			this.ar.init();

			this.setEventListeners();

			this.getJSONData(app.filepaths.files + 'json/' + app.primaryKey + '.json')
		},

		info: {

			buttonSetup: {
				id: '#toolbar-button-0',
				name: 'Informationen',
				colors: {
					button: 'coalgrey',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-coalgrey',
					tabText: 'text-coalgrey',
					tabIcon: 'coalgrey'
				}, 
				func: 'info', 
				action: {
					type: 'tab',
					selector: '.mv-info-container' 
				}
			},
		},

		contextStory: {

			buttonSetup: {
				id: '#toolbar-button-1',
				name: 'Geschichte',
				colors: {
					button: 'skyblue',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-skyblue',
					tabText: 'text-coalgrey',
					tabIcon: 'coalgrey'
				}, 
				func: 'context', 
				action: {
					type: 'message',
					selector: '.mv-context-story-container' 
				}
			},
		},

		measurement: {

			enabled: false,

			buttonSetup: {
				id: '#toolbar-button-2',
				name: 'Abmessungen',
				colors: {
					button: 'duckyellow',
					buttonIcon: 'coalgrey', 
					tabBackground: 'pearlwhite',
					tabShadow: 'shadow-coalgrey',
					tabText: 'text-coalgrey',
					tabIcon: 'text-coalgrey'
				}, 
				func: 'measurement', 
				action: {
					type: 'feedback',
					selector: null 
				}
			},

			hotspot: {
				setupArray: [
					{ slot: 'hotspot-dot+X-Y+Z', class: 'dot', position: '1 -1 1', normal: '1 0 0' },
					{ slot: 'hotspot-dim+X-Y', class: 'dim', position: '1 -1 0', normal: '1 0 0' },
					{ slot: 'hotspot-dot+X-Y-Z', class: 'dot', position: '1 -1 -1', normal: '1 0 0' },
					{ slot: 'hotspot-dim+X-Z', class: 'dim', position: '1 0 -1', normal: '1 0 0' },
					{ slot: 'hotspot-dot+X+Y-Z', class: 'dot', position: '1 1 -1', normal: '0 1 0' },
					{ slot: 'hotspot-dim+Y-Z', class: 'dim', position: '0 -1 -1', normal: '0 1 0' },
					{ slot: 'hotspot-dot-X+Y-Z', class: 'dot', position: '-1 1 -1', normal: '0 1 0' },
					{ slot: 'hotspot-dim-X-Z', class: 'dim', position: '-1 0 -1', normal: '-1 0 0' },
					{ slot: 'hotspot-dot-X-Y-Z', class: 'dot', position: '-1 -1 -1', normal: '-1 0 0' },
					{ slot: 'hotspot-dim-X-Y', class: 'dim', position: '-1 -1 0', normal: '-1 0 0' },
					{ slot: 'hotspot-dot-X-Y+Z', class: 'dot', position: '-1 -1 1', normal: '-1 0 0' }
				],

				buttonArray: [],
			},

			lines: {
				lineArray: []
			},

			init() {

				this.createElements();
				this.renderModelDimensions();
			},

			renderModelDimensions() {
				//Original Code: https://modelviewer.dev/examples/annotations/index.html#dimensions

				const modelViewer = app.modelViewer.element;

				// update svg
				function drawLine(svgLine, dotHotspot1, dotHotspot2, dimensionHotspot) {
					if (dotHotspot1 && dotHotspot2) {
						svgLine.setAttribute('x1', dotHotspot1.canvasPosition.x);
						svgLine.setAttribute('y1', dotHotspot1.canvasPosition.y);
						svgLine.setAttribute('x2', dotHotspot2.canvasPosition.x);
						svgLine.setAttribute('y2', dotHotspot2.canvasPosition.y);

						// use provided optional hotspot to tie visibility of this svg line to
						if (dimensionHotspot && !dimensionHotspot.facingCamera) {
							svgLine.classList.add('hide');
						}
						else {
							svgLine.classList.remove('hide');
						}
					}
				}

				const dimLines = modelViewer.querySelectorAll('line');

				const renderSVG = () => {
					drawLine(dimLines[0], modelViewer.queryHotspot('hotspot-dot+X-Y+Z'), modelViewer.queryHotspot('hotspot-dot+X-Y-Z'), modelViewer.queryHotspot('hotspot-dim+X-Y'));
					drawLine(dimLines[1], modelViewer.queryHotspot('hotspot-dot+X-Y-Z'), modelViewer.queryHotspot('hotspot-dot+X+Y-Z'), modelViewer.queryHotspot('hotspot-dim+X-Z'));
					drawLine(dimLines[2], modelViewer.queryHotspot('hotspot-dot+X+Y-Z'), modelViewer.queryHotspot('hotspot-dot-X+Y-Z')); // always visible
					drawLine(dimLines[3], modelViewer.queryHotspot('hotspot-dot-X+Y-Z'), modelViewer.queryHotspot('hotspot-dot-X-Y-Z'), modelViewer.queryHotspot('hotspot-dim-X-Z'));
					drawLine(dimLines[4], modelViewer.queryHotspot('hotspot-dot-X-Y-Z'), modelViewer.queryHotspot('hotspot-dot-X-Y+Z'), modelViewer.queryHotspot('hotspot-dim-X-Y'));
				};

				modelViewer.addEventListener('camera-change', renderSVG);
								
				modelViewer.addEventListener('load', () => {
					const center = modelViewer.getBoundingBoxCenter();
					const size = modelViewer.getDimensions();
					const x2 = size.x / 2;
					const y2 = size.y / 2;
					const z2 = size.z / 2;

					modelViewer.updateHotspot({
						name: 'hotspot-dot+X-Y+Z',
						position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`
					});

					modelViewer.updateHotspot({
						name: 'hotspot-dim+X-Y',
						position: `${center.x + x2 * 1.2} ${center.y - y2 * 0.9} ${center.z}`
					});
					modelViewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
							`${(size.z * 100).toFixed(0)} cm`; //depth right

					modelViewer.updateHotspot({
						name: 'hotspot-dot+X-Y-Z',
						position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`
					});

					modelViewer.updateHotspot({
						name: 'hotspot-dim+X-Z',
						position: `${center.x + x2 * 1.2} ${center.y} ${center.z - z2 * 1.2}`
					});
					modelViewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
							`${(size.y * 100).toFixed(0)} cm`; //height right

					modelViewer.updateHotspot({
						name: 'hotspot-dot+X+Y-Z',
						position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
					});

					modelViewer.updateHotspot({
						name: 'hotspot-dim+Y-Z',
						position: `${center.x} ${center.y + y2 * 1.2} ${center.z - z2 * 1.2}`
					});
					modelViewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
							`${(size.x * 100).toFixed(0)} cm`; //width

					modelViewer.updateHotspot({
						name: 'hotspot-dot-X+Y-Z',
						position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
					});

					modelViewer.updateHotspot({
						name: 'hotspot-dim-X-Z',
						position: `${center.x - x2 * 1.2} ${center.y} ${center.z - z2 * 1.2}`
					});
					modelViewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
							`${(size.y * 100).toFixed(0)} cm`; //height left

					modelViewer.updateHotspot({
						name: 'hotspot-dot-X-Y-Z',
						position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
					});

					modelViewer.updateHotspot({
						name: 'hotspot-dim-X-Y',
						position: `${center.x - x2 * 1.2} ${center.y - y2 * 0.9} ${center.z}`
					});
					modelViewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
							`${(size.z * 100).toFixed(0)} cm`; //depth left

					modelViewer.updateHotspot({
						name: 'hotspot-dot-X-Y+Z',
						position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
					});

					renderSVG();
							
				});
			},

			toggleMeasurements() {
				app.modelViewer.measurement.enabled ? app.modelViewer.measurement.enabled = false : app.modelViewer.measurement.enabled = true;
				
				if(!app.modelViewer.measurement.enabled) {
					this.lines.element.classList.remove('hide');
					this.lines.element.classList.add('hide');
					document.querySelectorAll('button.dim, button.dot').forEach((element) => {
						element.classList.remove('hide');
						element.classList.add('hide');
					})

				}else {
					this.lines.element.classList.remove('hide');
					document.querySelectorAll('button.dim, button.dot').forEach((element) => {
						element.classList.remove('hide');
					})

				}
			},

			createElements() {
				for(let h in this.hotspot.setupArray){
					this.hotspot.buttonArray[h] = document.createElement('button');
					const button = this.hotspot.buttonArray[h];
					app.modelViewer.element.appendChild(button);
					button.setAttribute('disabled', '');
					button.setAttribute('aria-hidden', 'true');
					button.setAttribute('slot', this.hotspot.setupArray[h].slot);
					button.className = this.hotspot.setupArray[h].class;
					button.classList.add(this.buttonSetup.colors.tabText);
					button.classList.add('hide');
					button.setAttribute('data-position', this.hotspot.setupArray[h].position);
					button.setAttribute('data-normal', this.hotspot.setupArray[h].normal);
				}

				const svgHTML = '<svg id="dimLines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="dimensionLineContainer hide"></svg>';
				app.modelViewer.element.innerHTML += svgHTML;
				this.lines.element = document.querySelector('#dimLines');

				for (var i = 0; i < 5; i++) {
					const lineHTML = '<line class="dimensionLine" x1="0" y1="0" x2="1" y2="1"></line>';
					this.lines.element.innerHTML += lineHTML;
				}
			}
		},

		ar: {

			buttonSetup: {
				id: '#toolbar-button-3',
				name: 'Augmented Reality',
				colors: {
					button: 'terracotta',
					buttonIcon: 'pearlwhite', 
					tabBackground: 'pearlwhite',
					tabShadow: null,
					tabText: null,
					tabIcon: null
				}, 
				func: 'ar', 
				action: {
					type: 'feedback',
					selector: null 
				}
			},

			init() {
				const buttonEl = document.querySelector(this.buttonSetup.id);
				if(!app.isArCapable) {
					buttonEl.classList.add('inactive');
				}
			}
		},

		annotations: {

			annotationSetup: {
				colors: {
					buttonColor: 'skyblue', 
					messageColor: 'pearlwhite', 
					messageShadowColor: 'shadow-skyblue' 
				}
			},

			annotationArray: [], 

			loadAnnotations(modelJSON) {
				const modelViewer = app.modelViewer.element;

				//save camera settings for focus movement
				const preFocusOrbit = modelViewer.cameraOrbit;
				const preFocusTarget = modelViewer.cameraTarget;
				const preFocusFOV = modelViewer.fieldOfView;			

				for(let a in modelJSON.appData.annotations){
					const annotation = modelJSON.appData.annotations[a];

					//button creation
					this.annotationArray[a] = {};
					this.annotationArray[a].button = {};
					this.annotationArray[a].button.id = 'hotspot-' + annotation.id;
					this.annotationArray[a].button.element = document.createElement('button');
					const button = this.annotationArray[a].button.element;
					modelViewer.appendChild(button);
					button.className = 'hotspot text';
					button.setAttribute('slot', 'hotspot-' + annotation.id);
					button.setAttribute('data-hotspot-id', 'hotspot-' + annotation.id);
					button.setAttribute('data-position', annotation.position);
					button.setAttribute('data-normal', annotation.normal);
					button.setAttribute('data-orbit', annotation.cameraOrbit);
					button.setAttribute('data-target', annotation.cameraTarget);
					button.setAttribute('data-fov', annotation.cameraField);
					button.setAttribute('data-visibility-attribute', 'visible');

					this.annotationArray[a].button.icon = {}
					this.annotationArray[a].button.icon.containerEl = document.createElement('div');
					const iconContainer = this.annotationArray[a].button.icon.containerEl;
					button.appendChild(iconContainer);
					iconContainer.className = 'hotspot border';
					iconContainer.classList.add(this.annotationSetup.colors.buttonColor)

					this.annotationArray[a].button.icon.image = document.createElement('img');
					const image = this.annotationArray[a].button.icon.image;
					iconContainer.appendChild(image);
					image.className = 'hotspot-icon';
					image.width = 100;
					image.height = 100;
					image.src = app.assets.icon[annotation.mediaType].src.pearlwhite;
					image.alt = app.assets.icon[annotation.mediaType].alt;

					//button eventlistener
					button.addEventListener('click', () => this.clickHandler(a));
					button.addEventListener('mouseover', () => button.classList.add('hover-animation'));
					button.addEventListener('mouseout', () => button.classList.remove('hover-animation'));

					//annotation creation

					//annotationContentHTML by type
					let annotationContentHTML = '';
					for(let annotationContent of annotation.contents) {
						if(annotationContent.type === 'headline'){
							const headlineHTML = '<h3>' + annotationContent.content + '</h3>';
							annotationContentHTML = annotationContentHTML.concat(headlineHTML);
						}else if(annotationContent.type === 'subheadline'){
							const subHeadlineHTML = '<h5>' + annotationContent.content + '</h5>';
							annotationContentHTML = annotationContentHTML.concat(subHeadlineHTML);
						}else if(annotationContent.type === 'paragraph'){
							const paragraphHTML = '<p class="annotation-text">' + annotationContent.content + '</p>';
							annotationContentHTML = annotationContentHTML.concat(paragraphHTML);
						}else if(annotationContent.type === 'paragraph+image'){
							const imageHTML = '<img src="' + app.filepaths.files + app.filepaths.annotationMedia + annotationContent.filename + '" alt="' + annotationContent.imageAlt + '" width="100px" height="100px">' 
							const captionHTML = '<span class="annotation-image-caption">' + annotationContent.imageCaption + '<span class="copyright"> Foto: ' + annotationContent.fileCopyright + '</span></span>';
							const paragraphAndImageHTML = '<p class="annotation-text"><span class="annotation-image"><span class="annotation-image-box">' + imageHTML + '</span>' + captionHTML + '</span>' + annotationContent.content + '</p>';
							annotationContentHTML = annotationContentHTML.concat(paragraphAndImageHTML);
						}else if(annotationContent.type === 'paragraph+audio'){
							
						}else if(annotationContent.type === 'paragraph+video'){
							
						}else if(annotationContent.type === 'quote'){
							const quoteHTML = '<p class="annotation-text quote">' + annotationContent.content + '</p>';
							annotationContentHTML = annotationContentHTML.concat(quoteHTML);
						}else if(annotationContent.type === 'image'){
							const imageHTML = '<img src="' + app.filepaths.files + app.filepaths.annotationMedia + annotationContent.filename + '" alt="' + annotationContent.imageAlt + '" width="100px" height="100px">' 
							const captionHTML = '<p class="annotation-image-caption">' + annotationContent.imageCaption + '<span class="copyright"> Foto: ' + annotationContent.fileCopyright + '</span></p>';
							const imageAndCaptionHTML = '<div class="annotation-image"><div class="annotation-image-box">' + imageHTML + '</div>' + captionHTML + '</div>';
							annotationContentHTML = annotationContentHTML.concat(imageAndCaptionHTML);
						}else if(annotationContent.type === 'audio'){
							const audioHTML = '<audio controls><source src="' + app.filepaths.files + app.filepaths.annotationMedia + annotationContent.filename + '" type="audio/mpeg"></audio>';
							annotationContentHTML = annotationContentHTML.concat(audioHTML);
						}else if(annotationContent.type === 'video'){
							
						}else if(annotationContent.type === 'link'){
							const linkHTML = '<a class="annotation-link" href="">' + annotationContent.content + '</a>';
							annotationContentHTML = annotationContentHTML.concat(linkHTML);
						}
					}

					this.annotationArray[a].message = {
						content: annotationContentHTML,
						color: this.annotationSetup.colors.messageColor,
						shadow: this.annotationSetup.colors.messageShadowColor
					}
				}  

				app.gui.message.closeEl.addEventListener('click', () => {
					for(let a in this.annotationArray){
						const thisButton = this.annotationArray[a].button.element;
						thisButton.classList.remove('focus');
					}

					//reset camera 
					modelViewer.cameraTarget = preFocusTarget;
					modelViewer.cameraOrbit = preFocusOrbit;
					modelViewer.fieldOfView = preFocusFOV;
				})
			},

			clickHandler(arrayPos) {
				const modelViewer = app.modelViewer.element;
				const button = this.annotationArray[arrayPos].button.element;

				for(let a in this.annotationArray){
					const thisButton = this.annotationArray[a].button.element;
					thisButton.classList.remove('focus');
				}

				button.classList.add('focus');

				//remove interaction prompt (indicating the drag-model-to-turn interaction)
				modelViewer.interactionPrompt = 'none';

				//remove the CSS hover-animation from the clickedHotspot-element
				button.classList.remove('hover-animation');

				app.gui.message.setMessage(this.annotationArray[arrayPos].message);

				this.imageHandler();

				modelViewer.cameraTarget = button.dataset.target;
				modelViewer.cameraOrbit = button.dataset.orbit;
				modelViewer.fieldOfView = button.dataset.fov;
			}, 

			imageHandler() {
				const modelViewer = app.modelViewer.element;
				app.gui.message.content.element.querySelectorAll('.annotation-image').forEach( function(image){
					const img = image.querySelector('img');
					const box = image.querySelector('.annotation-image-box');
					const fullScreenImageContainer = app.gui.fullScreen.containerEl;
					const fullScreenImage = app.gui.fullScreen.image;
					
					//image Eventlisteners
					//copies the src and alt from clicked image to the full-screen img-element and switches visibility
					box.addEventListener('click', function(){
						fullScreenImage.src = img.src;
						fullScreenImage.alt = img.alt;
						fullScreenImageContainer.classList.remove('hide'); 
						fullScreenImage.classList.remove('hide');
					});
					fullScreenImageContainer.addEventListener('click', function(){
						fullScreenImage.src = '';
						fullScreenImage.alt = '';
						fullScreenImageContainer.classList.add('hide'); 
						fullScreenImage.classList.add('hide');
					});
				});
			}
		},

		setEventListeners: function() {
			const self = this;

			document.addEventListener('proxyJSON-update', (e) => {
				const json = app.modelViewer.proxyJSON.data;
				self.loadModel(json);
				json.appData.annotations && self.annotations.loadAnnotations(json);
			});

			this.element.addEventListener('load', function(event) {
				app.gui.loadingScreen.hideLoadingScreen();
			});
		},

		getJSONData: async function(url) {
			//JSON fetch and loading model viewer
			try{
				const response = await fetch(url);
				if(!response.ok) {
					throw new Error(`Response status: ${response.status}`);
					return false;
				}
				await response.json().then((json) => {
					app.modelViewer.proxyJSON.data = json;
				});
			} catch (e) {
				app.dev && console.error('dev --- fetch error: ', e);
				app.errorHandler('mv-002')
			}
		},

		loadModel(modelJSON) {
			const modelViewer = this.element;
			//set title
			app.gui.title.set(modelJSON.basicData.name, true, app.hasHistory, modelJSON.primaryKey)

			//set modelViewer data
			modelViewer.src = app.filepaths.files + modelJSON.appData.model.quality2k;
			modelViewer.cameraOrbit = modelJSON.appData.modelViewer.cameraOrbit;
			modelViewer.cameraTarget = modelJSON.appData.modelViewer.cameraTarget;
			modelViewer.fieldOfView = modelJSON.appData.modelViewer.cameraField;
		},

		createElements() {

			this.element = document.createElement('model-viewer');
			document.body.appendChild(this.element);
			this.element.setAttribute('id', 'main-viewer');
			this.element.setAttribute('loading', 'eager');
			this.element.setAttribute('ar', '');
			this.element.setAttribute('ar-scale', 'fixed');
			this.element.setAttribute('xr-environment', '');
			this.element.setAttribute('src', '');
			this.element.setAttribute('shadow-intensity', '1');
			this.element.setAttribute('camera-controls', '');
			this.element.setAttribute('touch-action', 'pan-y');
			this.element.setAttribute('disable-tap', '');
			this.element.setAttribute('camera-orbit', '');
			this.element.setAttribute('min-camera-orbit', '-Infinity 15deg 0.1m');
			this.element.setAttribute('max-camera-orbit', '-Infinity 165ddeg 5.5m');
			this.element.setAttribute('camera-target', '');
			this.element.setAttribute('field-of-view', '');
			this.element.setAttribute('interpolation-decay', '150');
			this.element.setAttribute('data-dimension', 'false');

			this.default = {};

			this.default.arButtonEl = document.createElement('button');
			this.element.appendChild(this.default.arButtonEl);
			this.default.arButtonEl.setAttribute('slot', 'ar-button');
			this.default.arButtonEl.className = 'hide';

			this.default.progressBarEl = document.createElement('div');
			this.element.appendChild(this.default.progressBarEl);
			this.default.progressBarEl.setAttribute('slot', 'progress-bar');
			this.default.progressBarEl.className = 'hide';
		}
	}, //modelViewer

	arViewer: {

		toolBarSetup: {
			color: 'pearlwhite', 
			shadowColor: 'shadow-terracotta'
		},

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
			this.sceneEl = document.createElement('a-scene');
			document.body.appendChild(this.sceneEl);
			this.sceneEl.setAttribute('id', 'scene');
			this.sceneEl.setAttribute('gltf-model', 'dracoDecoderPath: ./draco/');
			this.sceneEl.setAttribute('xr-mode-ui', 'enabled:false');
			this.sceneEl.setAttribute('light', 'defaultLightsEnabled: false');
			this.sceneEl.setAttribute('webxr', 'requiredFeatures:	hit-test, dom-overlay, anchors; overlayElement: .gui-message-box; referenceSpaceType:local;');
			this.sceneEl.setAttribute('controller', '');
			this.sceneEl.setAttribute('renderer', 'stencil:true;');
			this.sceneEl.setAttribute('tools', 'enabled:false;')

			this.assets = {};
			this.assets.element = document.createElement('a-assets');
			this.sceneEl.appendChild(this.assets.element);

			this.assets.sprite = document.createElement('img');
			this.assets.element.appendChild(this.assets.sprite);
			this.assets.sprite.id = 'sprite';
			this.assets.sprite.crossOrigin = 'anonymous';
			// TODO our own sprite
			this.assets.sprite.src = 'https://cdn.glitch.global/421736eb-f719-4a40-8df3-054eca30d277/spark.png?v=1715082340035';
			this.assets.sprite.setAttribute('loading', 'lazy');

			this.assets.drop = document.createElement('img');
			this.assets.element.appendChild(this.assets.drop);
			this.assets.drop.id = 'placer';
			this.assets.drop.crossOrigin = 'anonymous';
			this.assets.drop.src = app.assets.ar.marker['drop'].src;
			this.assets.drop.setAttribute('loading', 'lazy');

			this.assets.drag = document.createElement('img');
			this.assets.element.appendChild(this.assets.drag);
			this.assets.drag.id = 'dragIcon';
			this.assets.drag.crossOrigin = 'anonymous';
			this.assets.drag.src = app.assets.ar.marker['drag'].src;
			this.assets.drag.setAttribute('loading', 'lazy');

			this.assets.arrow = document.createElement('img');
			this.assets.element.appendChild(this.assets.arrow);
			this.assets.arrow.id = 'arrow';
			this.assets.arrow.crossOrigin = 'anonymous';
			this.assets.arrow.src = app.assets.ar['rotate arrows'].src;
			this.assets.arrow.setAttribute('loading', 'lazy');

			this.assets.book = document.createElement('img');
			this.assets.element.appendChild(this.assets.book);
			this.assets.book.id = 'book';
			this.assets.book.crossOrigin = 'anonymous';
			this.assets.book.src = app.assets.ar.marker['book'].src;
			this.assets.book.setAttribute('loading', 'lazy');

			this.assets.play = document.createElement('img');
			this.assets.element.appendChild(this.assets.play);
			this.assets.play.id = 'playAnim';
			this.assets.play.crossOrigin = 'anonymous';
			this.assets.play.src = app.assets.ar.marker['animation'].src;
			this.assets.play.setAttribute('loading', 'lazy');

			this.assets.quest = document.createElement('img');
			this.assets.element.appendChild(this.assets.quest);
			this.assets.quest.id = 'exclamation';
			this.assets.quest.crossOrigin = 'anonymous';
			this.assets.quest.src = app.assets.ar.marker['quest'].src;
			this.assets.quest.setAttribute('loading', 'lazy');

			this.assets.quiz = document.createElement('img');
			this.assets.element.appendChild(this.assets.quiz);
			this.assets.quiz.id = 'question';
			this.assets.quiz.crossOrigin = 'anonymous';
			this.assets.quiz.src = app.assets.ar.marker['quiz'].src;
			this.assets.quiz.setAttribute('loading', 'lazy');

			this.ambientLightEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.ambientLightEl);
			this.ambientLightEl.setAttribute('light', 'type: ambient; color: #FAF0E6; intensity: 2');

			this.directionalLightEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.directionalLightEl);
			this.directionalLightEl.setAttribute('light', 'type: directional; color: #FAF0E6; intensity: 2');
			this.directionalLightEl.setAttribute('position', '-2 0 2');

			this.cameraEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.cameraEl);
			this.cameraEl.setAttribute('id', 'camera');
			this.cameraEl.setAttribute('camera', '');
			this.cameraEl.setAttribute('position', '0 0.2 0.5');
			this.cameraEl.setAttribute('visibility-handler', '');

			this.cursorEl = document.createElement('a-entity');
			this.cameraEl.appendChild(this.cursorEl);
			this.cursorEl.setAttribute('id', 'cursor');
			this.cursorEl.setAttribute('geometry', 'primitive: circle; radius: 0.001;');
			this.cursorEl.setAttribute('material', 'color:black; shader:flat');
			this.cursorEl.setAttribute('position', '0 0 -0.01');
			this.cursorEl.setAttribute('raycaster', 'objects: .collidable,.toolidable; enabled:false;');
			this.cursorEl.setAttribute('scale', '0.1 0.1 0.1');		

			this.gazeRingEl = document.createElement('a-entity');
			this.cursorEl.appendChild(this.gazeRingEl);
			this.gazeRingEl.setAttribute('geometry', 'primitive:ring; radiusInner:0.02; radiusOuter:0.03; thetaLength:0');
			this.gazeRingEl.setAttribute('material', 'shader:flat; transparent:true; opacity: 0.5');
			this.gazeRingEl.setAttribute('animation-handler', '');
			this.gazeRingEl.setAttribute('animation', 'property:geometry.thetaLength; from:0; to: 360; dur:2000; startEvents:startRing; pauseEvents: stopRing');

			this.dropObjectEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.dropObjectEl);
			this.dropObjectEl.setAttribute('id', 'place-object');
			this.dropObjectEl.setAttribute('ar-hit-test-special', '');
			this.dropObjectEl.setAttribute('visible', 'false');

			this.containerObjectEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.containerObjectEl);
			this.containerObjectEl.setAttribute('id', 'container');
			this.containerObjectEl.setAttribute('hide-on-start-ar', '');
			this.containerObjectEl.setAttribute('visible', 'false');
			
			this.objectEl = document.createElement('a-entity');
			this.containerObjectEl.appendChild(this.objectEl);
			this.objectEl.setAttribute('id', 'object');
			this.objectEl.setAttribute('class', 'collidable');
			this.objectEl.setAttribute('get-bounding-box', '');
			this.objectEl.setAttribute('distance-listener', '');
			this.objectEl.setAttribute('animation-mixer', '');
			this.objectEl.setAttribute('anchored', 'persistent:true');

			this.missionContainerEl = document.createElement('a-entity');
			this.containerObjectEl.appendChild(this.missionContainerEl);
			this.missionContainerEl.setAttribute('id', 'missions');

			this.noMissionContainerEl = document.createElement('a-entity');
			this.containerObjectEl.appendChild(this.noMissionContainerEl);
			this.noMissionContainerEl.setAttribute('id', 'noMissions');

			this.rotationControlEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.rotationControlEl);
			this.rotationControlEl.setAttribute('id', 'rotation-ring');
			this.rotationControlEl.setAttribute('geometry', 'primitive:circle');
			this.rotationControlEl.setAttribute('material','transparent:true;src:#arrow');
			this.rotationControlEl.setAttribute('rotation', '-90 0 0');
			this.rotationControlEl.setAttribute('turn-to-camera', 'onlyYAxis:true');

			this.touchCircleEl = document.createElement('a-entity');
			this.rotationControlEl.appendChild(this.touchCircleEl);
			this.touchCircleEl.setAttribute('id', 'touch-circle');
			this.touchCircleEl.setAttribute('geometry', 'primitive:circle; radius: 0.3;');
			this.touchCircleEl.setAttribute('visible', 'false');
			this.touchCircleEl.setAttribute("turn-to-camera", '');
			this.touchCircleEl.setAttribute('rotation-handler', 'enabled:false');	

			this.rotHandleEl = document.createElement('a-entity');
			this.rotationControlEl.appendChild(this.rotHandleEl);
			this.rotHandleEl.setAttribute('id', 'rot-handle');
			this.rotHandleEl.setAttribute('geometry', 'primitive:circle; radius: 0.3;');
			this.rotHandleEl.setAttribute('rotation', ' 0 0 0');
			this.rotHandleEl.setAttribute('material', 'color:#FAF0E6');
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
		const regex = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
		const mode = this.getURLParameter('m');
		const model = this.getURLParameter('model');
		const isFrom = this.getURLParameter('from');
		this.dev = (this.getURLParameter('dev') === 'true');
		this.stats = (this.getURLParameter('stats') === 'true');

		//set viewerMode
		if(!this.viewerModes.includes(mode)){
			this.viewerMode = false;
		}else{
			this.viewerMode = mode;
		}

		//handle model uuid
		(this.viewerMode === 'mv' && !model) && this.errorHandler('mv-000');
		(this.viewerMode === 'mv' && !regex.test(model)) && this.errorHandler('mv-001');
		(this.viewerMode === 'mv' && regex.test(model)) ? this.primaryKey = model : '';

		//handle from parameter
		(this.viewerMode === 'cv' && regex.test(model)) ? this.isFrom = isFrom : '';
	}, 

	// from: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
	checkMobile() {
		let check = false;
		(function(a){
			if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {
				check = true;
			}
		})(navigator.userAgent||navigator.vendor||window.opera);
		app.dev && console.log('dev --- checkMobile:', check);
		return check;
	},

	checkArSupport() {
		//test if WebXR AR is supported
		if(navigator.xr){
			navigator.xr.isSessionSupported('immersive-ar').then((isSupported) => {
				app.dev && console.log('dev --- checkArSupport:', isSupported);
				return isSupported;
			});
		}else{
			app.dev && console.log('dev --- checkArSupport:', false);
			return false;
		}
	},

	checkEventlistenerPassiveSupport() {
		let passiveSupported = false;
		try {
			const options = {
				get passive() {
					// This function will be called when the browser attempts to access the passive property.
					passiveSupported = true;
				}
			};
			window.addEventListener("test", null, options);
			window.removeEventListener("test", null, options);
		} catch (err) {
			passiveSupported = false;
		} finally {
			app.dev && console.log('dev --- checkEventlistenerPassiveSupport: ', passiveSupported)
			return passiveSupported;
		}
	},

	errorHandler(error){
		let consoleOutput = null;

		//collectionViewer errors

		if(error === 'cv-000'){
			consoleOutput = {};
			this.gui.error.content.value = `<h3>Fehler-Code: ${error}</h3>\n<p>...</p>`;
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}

		if(error === 'cv-001'){
			consoleOutput = {};
			this.gui.error.content.value = `<h3>Fehler-Code: ${error}</h3>\n<p>...</p>`;
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}




		//modevViewer errors

		if(error === 'mv-000'){
			consoleOutput = { primaryKey: this.primaryKey };
			this.gui.error.content.value = `<h3>Fehler-Code: ${error}</h3>\n<p>Keine Objekt-Id in der URL gefunden. </p>`;
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}

		if(error === 'mv-001'){
			consoleOutput = { primaryKey: this.primaryKey };
			this.gui.error.content.value = `<h3>Fehler-Code: ${error}</h3>\n<p>Validierung der Objekt-Id fehlgeschlagen. </p>`;
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}

		if(error === 'mv-002'){
			consoleOutput = { primaryKey: this.primaryKey };
			this.gui.error.content.value = `<h3>Fehler-Code: ${error}</h3>\n<p>Laden der JSON-Datei (Objekt-Id: ${this.primaryKey}) fehlgeschlagen. </p>`;
			this.gui.error.button.label = 'OK';
			this.gui.error.showError();
		}

		app.dev && console.log('dev --- error: ', consoleOutput);
	}
}

//END app 

app.init();
app.dev && console.log('dev --- app: ', app)
export { app };