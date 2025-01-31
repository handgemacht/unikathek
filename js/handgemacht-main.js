



//START app 
const app = {
	title: 'Unikathek',
	version: 'beta 1.7 25/01/17',
	dev: false,
	stats: false,
	viewerMode: false,
	viewerModes: [ 'cv', 'mv' ],

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
				'arrow back': {
					alt: 'Pfeil zurück',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow back pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow back coalgrey.svg' 
					}
				},
				'arrow wide up': {
					alt: 'Breiter Pfeil nach oben',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow up wide pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow up wide coalgrey.svg' 
					}
				},
				'arrow wide down': {
					alt: 'Breiter Pfeil nach unten',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon arrow down wide pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon arrow down wide coalgrey.svg' 
					}
				},
				'topic': {
					alt: 'Merkmal-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon topic pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon topic coalgrey.svg' 
					}
				},
				'category': {
					alt: 'Kontext-Symbol',
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
				'quiz': {
					alt: 'Quiz-Symbol',
					src: {
						pearlwhite: filepath + 'hand.gemacht WebApp icon quiz pearlwhite.svg',
						coalgrey: filepath + 'hand.gemacht WebApp icon quiz coalgrey.svg' 
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
						alt: 'Kontext-Marker',
						src: filepath + 'hand.gemacht WebApp cv marker category.svg'
					},
					'topic': {
						alt: 'Merkmal-Marker',
						src: filepath + 'hand.gemacht WebApp cv marker topic.svg'
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

		this.handleLocalStorage();

		this.isMobile = this.checkMobile();
		this.isWebXRCapable = this.checkWebXRSupport();
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
			this.embedded ? url += '&embedded=true' : '';
			window.location.href = url;
		}

		if (this.viewerMode === 'cv') {
			this.collectionViewer.init();
			this.gui.title.init();
			this.gui.loadingScreen.showLoadingScreen('Unikathek wird geladen');
		}

		if (this.viewerMode === 'mv') {
			this.modelViewer.init();
			this.arViewer.registerComponents();
			this.gui.title.init();
			this.gui.loadingScreen.showLoadingScreen('Modelviewer wird geladen');
		}

		this.gui.setupCollapsibles();
	}, 

	gui: {
			
		init() {
			this.logo.init();
			//this.version.init();
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
				this.set();
			},

			createElements() {
				this.containerEl = document.createElement('div');
				document.body.appendChild(this.containerEl);
				this.containerEl.className = 'gui-title-container';

				this.arrowEl = document.createElement('span');
				this.arrowEl.className = 'arrow';

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
			}, 

			set(breadcrumb = null, breadcrumbType = null, nodeId = null, modelViewer = false) {
				let url = '?m=cv';
				
				if(nodeId){
					nodeId = '&node=' + nodeId;
					url += nodeId;
				}

				if(app.embedded){
					this.element.innerHTML = '<span></span>';
					this.containerEl.className = 'gui-title-container';
					this.containerEl.removeEventListener('click', app.gui.title.titleClickHandler);
					return;
				}

				this.element.innerHTML = '<span>' + app.title + '</span>';

				if(breadcrumb) {
					this.element.innerHTML += '<div class="arrow"><img class="icon" src="' + app.assets.icon['arrow right'].src.coalgrey + '" alt="' + app.assets.icon['arrow right'].alt + '" width="100" height="100" loading="lazy"></div>'
					this.element.innerHTML += '<span>' + breadcrumb + '</span>';
				}

				if(modelViewer) {
					this.element.innerHTML += '<div class="arrow"><img class="icon" src="' + app.assets.icon['arrow right'].src.coalgrey + '" alt="' + app.assets.icon['arrow right'].alt + '" width="100" height="100" loading="lazy"></div>'
					this.element.innerHTML += '<span>Modelviewer</span>';
				}

				this.containerEl.className = 'gui-title-container';

				this.containerEl.classList.add('clickable');

				this.containerEl.setAttribute('data-url', url);
				this.containerEl.removeEventListener('click', app.gui.title.titleClickHandler);
				this.containerEl.addEventListener('click', app.gui.title.titleClickHandler);
			}, 

			titleClickHandler() {
				app.gui.title.containerEl.removeEventListener('click', app.gui.title.titleClickHandler);
				let url = app.gui.title.containerEl.getAttribute('data-url');
				app.dev ? url+='&dev=true' : '';
				app.stats ? url+='&dev=stats' : '';
				app.embedded ? url+='&embeddded=true' : '';
				app.tour ? url+='&tour=' + app.tour : '';
				app.step ? url+='&step=' + app.step : '';

				if(app.collectionViewer.highlight.focusedNode) {
					app.collectionViewer.resetView.resetCameraView();
					app.gui.message.hideMessage(true);
					app.gui.title.set();
				}else{
					window.location.href = url;
				}
			}
		},

		logo: {

			init() {
				this.createElements();
				app.hideGUI && this.element.classList.add('hide');
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
				app.hideGUI && this.element.classList.add('hide');
			},

			createElements() {
				this.element = document.createElement('div');
				document.body.appendChild(this.element);
				this.element.className = 'gui-version text-smokegrey';
				this.element.textContent = app.version;
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
				this.animation.textEl.textContent = this.content.value;
			}, 

			showLoadingScreen(text) {
				this.element.classList.remove('hide');
				this.animation.containerEl.classList.remove('hide');
				this.element.classList.remove('transparent');
				this.animation.textEl.innerHTML = text;
			}, 

			hideLoadingScreen(timeout = 0) {
				setTimeout(() => {
					this.element.classList.add('transparent');
					this.animation.textEl.innerHTML = this.content.value;

					this.animation.containerEl.classList.add('hide');

					setTimeout(() => {
						this.element.classList.add('hide');
						app.dev && console.log('dev --- loadingScreen > hidden');
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
				this.setEventListener();
				this.abortController = new AbortController();
			}, 

			createElements() {
				this.boxEl = document.createElement('div');
				document.body.appendChild(this.boxEl);
				this.boxEl.className = 'gui-message-box';

				this.containerEl = document.createElement('div');
				this.boxEl.appendChild(this.containerEl);
				this.containerEl.className = 'gui-message-container hide';

				this.type.element = document.createElement('div');
				this.containerEl.appendChild(this.type.element);
				this.type.element.className = 'type hide';

				this.sizeControlEl = document.createElement('button');
				this.containerEl.appendChild(this.sizeControlEl);
				this.sizeControlEl.className = 'size-control';
				this.sizeControlEl.setAttribute('data-extended', 'false');

				this.element = document.createElement('div');
				this.containerEl.appendChild(this.element);
				this.element.className = 'gui-message';

				this.sizeControlEl.icon = document.createElement('img');
				this.sizeControlEl.appendChild(this.sizeControlEl.icon);
				this.sizeControlEl.icon.className = 'arrow-wide';
				this.sizeControlEl.icon.src = app.assets.icon['arrow wide up'].src.coalgrey;
				this.sizeControlEl.icon.alt = app.assets.icon['arrow wide up'].alt;
				this.sizeControlEl.icon.width = 100;
				this.sizeControlEl.icon.height = 100;
				this.sizeControlEl.icon.setAttribute('loading', 'lazy');

				this.closeEl = document.createElement('button');
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

				this.backEl = document.createElement('button');
				this.containerEl.appendChild(this.backEl);
				this.backEl.className = 'back';

				this.backEl.icon = document.createElement('img');
				this.backEl.appendChild(this.backEl.icon);
				this.backEl.icon.className = 'back-icon';
				this.backEl.icon.src = app.assets.icon['arrow back'].src.coalgrey;
				this.backEl.icon.alt = app.assets.icon['arrow back'].alt;
				this.backEl.icon.width = 100;
				this.backEl.icon.height = 100;
				this.backEl.icon.setAttribute('loading', 'lazy');

				this.content.containerEl = document.createElement('div');
				this.element.appendChild(this.content.containerEl);
				this.content.containerEl.className = 'content-container';

				this.content.element = document.createElement('div');
				this.content.containerEl.appendChild(this.content.element);
				this.content.element.className = 'content';
				this.content.element.textContent = this.content;

				this.buttons = {};

				this.buttons.containerEl = document.createElement('div');
				this.element.appendChild(this.buttons.containerEl);
				this.buttons.containerEl.className = 'button-container';

				this.buttons.fadeEl = document.createElement('div');
				this.buttons.containerEl.appendChild(this.buttons.fadeEl)
				this.buttons.fadeEl.className = 'button-fade';

				this.buttons.button = [{},{}];

				this.buttons.button[0].element = document.createElement('button');
				this.buttons.containerEl.appendChild(this.buttons.button[0].element);
				this.buttons.button[0].element.className = 'button hide';

				this.buttons.button[0].labelEl = document.createElement('div');
				this.buttons.button[0].element.appendChild(this.buttons.button[0].labelEl);
				this.buttons.button[0].labelEl.className = 'label';
				this.buttons.button[0].labelEl.textContent = this.buttonSetup[0].label;

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
				this.buttons.button[1].labelEl.textContent = this.buttonSetup[1].label;

				this.buttons.button[1].iconEl = document.createElement('img');
				this.buttons.button[1].element.appendChild(this.buttons.button[1].iconEl);
				this.buttons.button[1].iconEl.className = 'button-icon hide';
				this.buttons.button[1].iconEl.alt = 'Button-Icon';
				this.buttons.button[1].iconEl.width = 100;
				this.buttons.button[1].iconEl.height = 100;
				this.buttons.button[1].iconEl.setAttribute('loading', 'lazy');
			},

			showMessage() {
				this.containerEl.classList.remove('hide');

				//auto extend message
				if(this.content.containerEl.offsetHeight*1.5 < this.content.element.offsetHeight && app.isMobile === false) {
					this.containerEl.classList.add('extended');
					this.sizeControlEl.setAttribute('data-extended', true);
				}

				if(document.querySelector('a-scene')){
					document.querySelector('a-scene').classList.remove('active-message');
					document.querySelector('a-scene').classList.add('active-message');
				}

				if(document.querySelector('model-viewer')){
					document.querySelector('model-viewer').classList.remove('active-message');
					document.querySelector('model-viewer').classList.add('active-message');
				}

				if(app.collectionViewer.highlight.pillArray.length > 0) {
					app.collectionViewer.highlight.setPillEventlisteners();
				}

				app.contentImageHandler();

				app.gui.toolbar.toggleToolbar(false);
			}, 

			hideMessage(callAbortController = false) {
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
				this.boxEl.className = 'gui-message-box';
				this.closeEl.className = 'close';
				this.backEl.className = 'back';
				this.sizeControlEl.className = 'size-control';
				this.sizeControlEl.setAttribute('data-extended', false);

				//remove Eventlisteners
				callAbortController ? this.abortController.abort() : '';
				callAbortController ? this.abortController = new AbortController() : '';
				//callAbortController && app.dev ? console.log('dev --- abortController: abort called') : '';

				this.buttons.button[0].element.className = 'button hide';
				this.buttons.button[1].element.className = 'button hide';
				this.buttons.button[0].iconEl.className = 'button-icon hide';
				this.buttons.button[1].iconEl.className = 'button-icon hide';

				this.content.element.innerHTML = this.content.value;
				this.buttons.button[0].labelEl.innerHTML = this.buttonSetup[0].label;
				this.buttons.button[1].labelEl.innerHTML = this.buttonSetup[1].label;

				app.gui.toolbar.toggleToolbar(true);

				if(document.querySelector('a-scene')){
					document.querySelector('a-scene').classList.remove('active-message');
				}

				if(document.querySelector('model-viewer')){
					document.querySelector('model-viewer').classList.remove('active-message');
				}
			},

			setEventListener() {
				const self = this;

				if(this.backEl) {
					this.backEl.addEventListener('click', (evt) => {
						self.hideMessage(true);
						if(!app.collectionViewer.initialized) { return; }
						app.gui.title.set();
						app.collectionViewer.resetView.resetCameraView();
					});
				}

				if(this.closeEl) {
					this.closeEl.addEventListener('click', (evt) => {
						self.hideMessage(true);
						if(app.tour) {
							app.tour = null;
							app.step = null;
						}
					});
				}

				if(this.sizeControlEl) {
					this.sizeControlEl.addEventListener('click', (evt) => {
						let isExtended = self.sizeControlEl.getAttribute('data-extended');
						if(isExtended === 'true'){
							app.dev && console.log('dev --- message isExtended (true): ', isExtended)
							self.containerEl.classList.remove('extended');
							self.sizeControlEl.setAttribute('data-extended', 'false');
							
						}else{
							app.dev && console.log('dev --- message isExtended (false): ', isExtended)
							self.containerEl.classList.remove('extended');
							self.containerEl.classList.add('extended');
							self.sizeControlEl.setAttribute('data-extended', 'true');
						}
					});
				}
			},

			setMessage(message) {
				this.hideMessage(true);

				let buttonsActive = false;

				Object.keys(message).includes("type") ? this.type.value = message.type : '';
				Object.keys(message).includes("content") ? this.content.value = message.content : '';
				Object.keys(message).includes("color") ? this.color = message.color : '';
				Object.keys(message).includes("shadow") ? this.shadow = message.shadow : '';
				Object.keys(message).includes("options") ? this.options = message.options : this.options = {};

				if(Object.keys(message).includes("buttonSetup")){
					buttonsActive = true;
					for(let s in message.buttonSetup) {
						const thisSetup = message.buttonSetup[s];
						Object.keys(thisSetup).includes("label") ? this.buttonSetup[s].label = thisSetup.label : '';
						Object.keys(thisSetup).includes("color") ? this.buttonSetup[s].color = thisSetup.color : '';
						Object.keys(thisSetup).includes("shadow") ? this.buttonSetup[s].shadow = thisSetup.shadow : '';
						Object.keys(thisSetup).includes("icon") ? this.buttonSetup[s].icon = thisSetup.icon : '';
					}
				}

				Object.keys(message).includes("showClose") ? this.showClose = message.showClose : this.showClose = true;
				Object.keys(message).includes("showBack") ? this.showBack = message.showBack : this.showBack = false;

				this.type.value && this.type.element.classList.remove('hide');
				this.type.value === 'Objekt' ? this.containerEl.classList.add('object') : '';

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

				this.content.element.innerHTML += '<div class="content-footer">footer</div>';

				!this.showClose && this.closeEl.classList.add('hide');

				!this.showBack && this.backEl.classList.add('hide');

				this.color && this.element.classList.add(this.color);

				if(this.color === 'pearlwhite'){
					this.closeEl.icon.src = app.assets.icon.small['close'].src.coalgrey;
					this.backEl.icon.src = app.assets.icon['arrow back'].src.coalgrey;
				}else{
					this.closeEl.icon.src = app.assets.icon.small['close'].src.pearlwhite;
					this.backEl.icon.src = app.assets.icon['arrow back'].src.pearlwhite;
				}

				this.shadow && this.type.element.classList.add(this.shadow.replace('shadow-', ''));
				this.shadow && this.element.classList.add(this.shadow);

				if(Object.keys(this.options).includes("extended")){
					this.options.extended ? this.containerEl.classList.add('extended') : '';
					this.options.extended ? this.sizeControlEl.setAttribute('data-extended', true) : '';
				}

				if(Object.keys(this.options).includes("sizeControl")){
					!this.options.sizeControl ? this.sizeControlEl.classList.add('hide') : '';
				}

				app.dev && console.log('dev --- message: ', this)
				this.showMessage();
			},

			showTooltipAR(content){
				app.arViewer.tooltipContentElAr.textContent = content;
				app.arViewer.tooltipElAr.classList.remove('hide');
			},

			hideTooltipAR(){
				app.arViewer.tooltipElAr.classList.add('hide');
				app.arViewer.tooltipContentElAr.innerHTML = '';
			},

			showTooltipOverlay(content){
				app.arViewer.tooltipContentElOverlay.textContent = content;
				app.arViewer.tooltipElOverlay.classList.remove('hide');
			},

			hideTooltipOverlay(){
				app.arViewer.tooltipElOverlay.classList.add('hide');
				app.arViewer.tooltipContentElOverlay.innerHTML = '';
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
				this.content.element.textContent = this.content.value;

				this.buttonEl = document.createElement('button');
				this.containerEl.appendChild(this.buttonEl);
				this.buttonEl.className = 'button pearlwhite shadow-smokegrey';
				this.buttonEl.textContent = this.button.label;
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

				const self = this;

				this.containerEl.addEventListener('click', function(){
					self.image.src = '';
					self.image.alt = '';
					self.containerEl.classList.add('hide'); 
					self.image.classList.add('hide');
				});
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
				app.hideGUI && this.containerEl.classList.add('hide');
				app.hideGUI && this.button.element.classList.add('hide');
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
				this.content.title.element.textContent = app.title;
				
				this.content.text = {};
				this.content.text = document.createElement('div');
				this.content.element.appendChild(this.content.text);
				this.content.text.className = 'text';
				this.content.text.textContent = this.text;

				this.content.buttons = {};
				this.content.buttons.containerEl = document.createElement('div');
				this.content.element.appendChild(this.content.buttons.containerEl);
				this.content.buttons.containerEl.className = 'button-container';
				
				this.content.buttons.project = {};
				this.content.buttons['project'].linkEl = document.createElement('a');
				this.content.buttons['project'].linkEl.href = 'https://handgemacht.bayern/projekt';
				this.content.buttons['project'].linkEl.target = '_blank';
				this.content.buttons.containerEl.appendChild(this.content.buttons['project'].linkEl);
				this.content.buttons['project'].element = document.createElement('button');
				this.content.buttons['project'].linkEl.appendChild(this.content.buttons['project'].element);
				this.content.buttons['project'].element.className = 'pearlwhite shadow-smokegrey';
				this.content.buttons['project'].element.textContent = 'Das Projekt';
				
				this.content.buttons.patronage = {};
				this.content.buttons['patronage'].linkEl = document.createElement('a');
				this.content.buttons['patronage'].linkEl.href = 'https://www.stmfh.bayern.de/heimat/regionale_identitaet/';
				this.content.buttons['patronage'].linkEl.target = '_blank';
				this.content.buttons.containerEl.appendChild(this.content.buttons['patronage'].linkEl);
				this.content.buttons['patronage'].element = document.createElement('button');
				this.content.buttons['patronage'].linkEl.appendChild(this.content.buttons['patronage'].element);
				this.content.buttons['patronage'].element.className = 'pearlwhite shadow-smokegrey';
				this.content.buttons['patronage'].element.textContent = 'Die Förderung';
				
				this.content.links = {};
				this.content.links.containerEl = document.createElement('div');
				this.content.element.appendChild(this.content.links.containerEl);
				this.content.links.containerEl.className = 'link-container';

				this.content.links.contact = {};
				this.content.links['contact'].element = document.createElement('a');
				this.content.links['contact'].element.href = 'https://handgemacht.bayern/#Kontakt';
				this.content.links['contact'].element.target = '_blank';
				this.content.links.containerEl.appendChild(this.content.links['contact'].element);
				this.content.links['contact'].element.textContent = 'Kontakt';
	
				this.content.links.imprint = {};
				this.content.links['imprint'].element = document.createElement('a');
				this.content.links['imprint'].element.href = 'https://handgemacht.bayern/impressum';
				this.content.links['imprint'].element.target = '_blank';
				this.content.links.containerEl.appendChild(this.content.links['imprint'].element);
				this.content.links['imprint'].element.textContent = 'Impressum';
	
				this.content.versionEl = document.createElement('div');
				this.content.element.appendChild(this.content.versionEl);
				this.content.versionEl.className = 'version';
				this.content.versionEl.textContent = app.version;
	
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

				this.overlay.addEventListener('click', (e) => {
					const button = document.querySelector('#'+app.gui.toolbar.overlay.getAttribute('data-button'));
					app.gui.toolbar.buttonActionTab(button);
				})
				//app.hideGUI && this.boxEl.classList.add('hide');
			},
	
			createElements() {
				this.boxEl = document.createElement('div');
				document.body.appendChild(this.boxEl);
				this.boxEl.className = 'gui-toolbar-box';

				this.overlay = document.createElement('div');
				this.boxEl.appendChild(this.overlay);
				this.overlay.className = 'gui-toolbar-overlay hide';

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
					this.setToolbarTab();
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

					if(!colors) { return; }

					toolbarTab.classList.add(colors.tab.text);
					toolbarTab.classList.add(colors.tab.background);
					colors.tab.shadow && toolbarTab.classList.add(colors.tab.shadow);
					colors.tab.shadow && fadeBar.classList.add(colors.button.background);

					let fadeColor = '#000000';

					switch (colors.tab.background) {
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
					element.classList.add(setup.colors.button.background);
					let iconElement = element.children[0];

					iconElement.src = app.assets.icon[setup.func].src[setup.colors.button.icon];
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

					this.overlay.setAttribute('data-button', button.id);

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
				if(toolbarTab.classList.contains('active')){
					this.overlay.classList.remove('hide');
				}else{
					this.overlay.classList.add('hide');
					this.overlay.setAttribute('data-button', '');
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
	},

	collectionViewer: {

		initialized: false,

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
					app.dev && console.log('event --- proxyfgData-update')
					return true;
				}
			}
		),

		elementColor: {
			object: 'duckyellow', 
			topic: 'terracotta',
			category: 'skyblue', 
			tag: 'duckyellow', 
			productionTag: 'smokegrey'
		},

		components: {
			'load-json-models': {
				ready: false
			},
			'camera-focus-target': {
				ready: false
			}, 
			'highlight': {
				ready: false
			}, 
			'forcegraph': {
				first: false,
				ready: false
			}
		},

		init() {
			this.createElements();
			this.tooltip.init();
			this.highlight.init();
			this.info.init();
			this.search.init();
			this.filter.init();
			this.resetView.init();
			this.onboarding.init();
			this.tour.init();
			this.registerComponents();
			this.setEventListeners();			

			app.gui.toolbar.setToolbar(this.toolBarSetup.color, this.toolBarSetup.shadowColor);

			app.gui.toolbar.setButton(this.info.buttonSetup);

			app.gui.toolbar.setButton(this.search.buttonSetup);
			app.gui.toolbar.button[1].icon.addEventListener('click', (e) => {
				app.collectionViewer.search.resetSearchInput();
			})

			app.gui.toolbar.setButton(this.filter.buttonSetup);
			app.gui.toolbar.button[2].icon.addEventListener('click', (e) => {
				//app.collectionViewer.filter.filterUpdated ? app.collectionViewer.filter.updateForcegraph() : '';
			})

			app.gui.toolbar.setButton(this.resetView.buttonSetup);
			app.gui.toolbar.button[3].icon.addEventListener('click', (e) => {
				app.collectionViewer.resetView.resetCameraView();
			})

			this.initialized = true;
			app.dev && console.log('dev --- collectionViewer initialized');
		},

		onboarding: {

			setSteps() {
				this.steps = {
					start: {
						type: 'message',
						buttons: [
							{
								label: 'los geht\'s',
								color: 'coalgrey',
								icon: 'arrow right'
							}
						],
						options: {
							extended: true,
							sizeControl: true
						},
						content: [
							{
								"content" : "Willkommen in der Unikathek!",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "headline"
							},
							{
								"content" : "Mehr als 100 handgemachte Oberpfälzer Objekte kannst du hier mitsamt ihren Geschichten entdecken. Erfahre anhand der Gegenstände, was die Menschen in der Oberpfalz in den letzten 80 Jahren beschäftigte – und was sie immer wieder dazu antrieb und antreibt, Dinge selbst in die Hand zu nehmen.",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							}
						]
					}, 
					collection: {
						type: 'message',
						buttons: [
							{
								label: 'zurück',
								color: 'smokegrey',
								icon: ''
							},
							{
								label: 'weiter',
								color: 'coalgrey',
								icon: 'arrow right'
							}
						],
						options: {
							extended: true,
							sizeControl: false
						},
						content: [
							{
								"content" : "Stöbern, Suchen, Filtern",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "headline"
							},
							{
								"content" : "Die Objekte in unserer Sammlung haben zwei Gemeinsamkeiten: Sie sind selbstgemacht – und sie haben Beziehungen zur Oberpfalz. Doch was können uns die handgemachten Oberpfälzer Gegenstände über die Region und die Menschen hier erzählen? Was vereint die Unikate? Was trennt sie? Das kannst du in der Unikathek herausfinden.",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							},
							{
								"content" : "<strong>Die blauen Felder</strong> (Kontexte <span class='icon skyblue'><img src='" + app.assets.icon['category'].src.pearlwhite + "' alt='" + app.assets.icon['category'].alt + "'></span>) fassen zusammen, zu welchen Zwecken und vor welchen Hintergründen die Einzelstücke hergestellt und verwendet worden sind – und werden.<br> <strong>Die roten Felder</strong> (Merkmale <span class='icon terracotta'><img src='" + app.assets.icon['topic'].src.pearlwhite + "' alt='" + app.assets.icon['topic'].alt + "'></span>) veranschaulichen dagegen, welche Eigenschaften speziell die handgemachten Oberpfälzer Gegenstände besitzen. Dabei kann es sich sowohl um Motivationen als auch um Effekte des Selbermachens handeln.<br> <strong>Die grauen Linien</strong> (Herstellungs-Tags <span class='icon smokegrey'><img src='" + app.assets.icon['tag'].src.pearlwhite + "' alt='" + app.assets.icon['tag'].alt + "'></span>) geben Hinweise auf verwendete Materialien und Herstellungstechniken, während <strong>die gelben Linien</strong> (Themen-Tags <span class='icon duckyellow'><img src='" + app.assets.icon['tag'].src.coalgrey + "' alt='" + app.assets.icon['tag'].alt + "'></span>) spezifische Kontexte anzeigen.",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							},
							{
								"content" : "Übrigens: Je mehr die Gegenstände gemeinsam haben, desto näher stehen sie sich auch in unserer interaktiven Sammlungsansicht!",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							},
							{
								"content" : "In der Unikathek kannst du freilich nicht nur die Zusammenhänge zwischen einzelnen Objekten entdecken, sondern auch die individuelle Geschichte eines jeden Gegenstandes unter die Lupe nehmen.",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							}
						]
					}, 
					tools: {
						type: 'message',
						buttons: [
							{
								label: 'zurück',
								color: 'smokegrey',
								icon: ''
							},
							{
								label: 'ausprobieren',
								color: 'coalgrey',
								icon: 'arrow right'
							}
						],
						showClose: false,
						options: {
							extended: true,
							sizeControl: false
						},
						content: [
							{
								"content" : "Durch die Unikathek navigieren",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"iconBackgroundColor" : "",
								"imageCaption" : "",
								"type" : "headline"
							},
							{
								"content" : "<strong>Bewegung</strong>: Klicken/Tippen und eine Zieh-Bewegung drehen die Ansicht um den Fokuspunkt in der Mitte des Bildschirms herum. Gerade ist die gesamte Unikathek im Fokus.<br> <strong>Zoom</strong>: Mit dem Mausrad oder entsprechenden Gesten auf Trackpads oder mobilen Geräten kann die Ansicht näher heran oder weiter weg vom Fokuspunkt gesetzt werden.<br> <strong>Fokussieren</strong>: Um einen Gegenstand, ein Merkmal oder einen Kontext in den Fokus zu nehmen tippe oder klicke ihn einfach an. ",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							},
							{
								"content" : "Werkzeuge",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "headline"
							},
							{
								"content" : "Die Werkzeuge am unteren Bildschirmrand verändern die Anordnung und das Aussehen der Unikathek. Mit ihnen kannst du sie deinen Wünschen und Interessen nach anpassen oder durchsuchen.",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							},
							{
								"content" : "Suche",
								"fileCopyright" : "",
								"filename" : app.assets.icon['search'].src.pearlwhite,
								"imageAlt" : app.assets.icon['search'].alt,
								"iconBackgroundColor" : "terracotta",
								"imageCaption" : "",
								"type" : "subheadline"
							},
							{
								"content" : "Suche Objekte, Merkmale und Kontexte mit einer einfachen Texteingabe. Nur die gefilterten Ergebnisse sind sichtbar. ",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							},
							{
								"content" : "Filter und Einstellungen",
								"fileCopyright" : "",
								"filename" : app.assets.icon['filter'].src.coalgrey,
								"imageAlt" : app.assets.icon['filter'].alt,
								"iconBackgroundColor" : "duckyellow",
								"imageCaption" : "",
								"type" : "subheadline"
							},
							{
								"content" : "Durch die Filterfunktion kannst du das Netzwerk deinen Interessen nach neu anordnen. Jedes an- oder abgewählte Merkmal, jeder Kontext und jeder Herstellungs- oder Themen-Tag ändern dabei die räumliche Anordnung.",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							}, 
							{
								"content" : "Ansicht zurücksetzen",
								"fileCopyright" : "",
								"filename" : app.assets.icon['reset view'].src.pearlwhite,
								"imageAlt" : app.assets.icon['reset view'].alt,
								"iconBackgroundColor" : "coalgrey",
								"imageCaption" : "",
								"type" : "subheadline"
							},
							{
								"content" : "Falls du dich mal nicht mehr zurecht findest, kannst du das gesamte Netzwerk anzeigen. ",
								"fileCopyright" : "",
								"filename" : "",
								"imageAlt" : "",
								"imageCaption" : "",
								"type" : "paragraph"
							}
						]
					}
				}
			},

			init() {
				this.setSteps();

				if(app.showOnboarding) {
					this.show('start');
				}
				app.dev && console.log('dev --- cv > onboarding: initialized');
			}, 

			show(step = 'start', type = 'message') {
				if(!(step in this.steps)) {return;}

				this.setOnboardingMessage(step);

				app.dev && console.log('dev --- show onboarding: ', step)

				if(step === 'start') {
					app.gui.toolbar.toggleToolbar(false);
					app.gui.message.setMessage(this.onboardingMessage);
					app.gui.message.boxEl.classList.add('first-contact');

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true)
						this.show('collection');
					}, { signal: app.gui.message.abortController.signal });
					return;
				}

				if(step === 'collection') {
					app.gui.toolbar.toggleToolbar(false);
					app.gui.message.setMessage(this.onboardingMessage);

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true);
						this.show('start');
					}, { signal: app.gui.message.abortController.signal });

					app.gui.message.buttons.button[1].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true);
						this.show('tools');
					}, { signal: app.gui.message.abortController.signal });
					return;
				}

				if(step === 'tools') {
					app.gui.message.setMessage(this.onboardingMessage);
					app.gui.toolbar.toggleToolbar(true);

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true);
						this.show('collection');
					}, { signal: app.gui.message.abortController.signal });

					app.gui.message.buttons.button[1].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true);
						localStorage.setItem('onboardingComplete', 'true');
					}, { signal: app.gui.message.abortController.signal });
					return;
				}
			}, 

			setOnboardingMessage(step) {
				this.onboardingMessage = {
					content: app.createHTMLContentFromJSON(this.steps[step].content),
					color: 'pearlwhite',
					shadow: 'shadow-coalgrey',
					buttonSetup: [
						{ label: this.steps[step].buttons[0].label, color: this.steps[step].buttons[0].color, icon: this.steps[step].buttons[0].icon }
					], 
					showClose: false,
					options: {
						extended: false, 
						sizeControl: false
					}
				}

				if(this.steps[step].buttons[1]) {
					this.onboardingMessage.buttonSetup = [
						{ label: this.steps[step].buttons[0].label, color: this.steps[step].buttons[0].color, icon: this.steps[step].buttons[0].icon },
						{ label: this.steps[step].buttons[1].label, color: this.steps[step].buttons[1].color, icon: this.steps[step].buttons[1].icon }
					]
				}

				if('options' in this.steps[step]) {
					('extended' in this.steps[step].options) ? this.onboardingMessage.options.extended = this.steps[step].options.extended : '';
					('sizeControl' in this.steps[step].options) ? this.onboardingMessage.options.sizeControl = this.steps[step].options.sizeControl : '';
				}
			}
		},

		tooltip: {

			mouseDown: false,

			init() {
				this.createElements();

				document.addEventListener("mousedown", (e) => {
					this.mouseDown = true;
					this.pointerStyleHandler(null, e);
				});
				document.addEventListener("mouseup", (e) => {
					this.mouseDown = false;
					this.pointerStyleHandler(null, e);
				});
				app.dev && console.log('dev --- cv > tooltip: initialized');
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

			showTooltip(type, content, id = null) {
				let typeText = '';
				if(type === 'node-object'){
					typeText = 'Objekt'
					this.typeEl.classList.add(app.collectionViewer.elementColor.object);
					this.contentEl.classList.add(app.collectionViewer.elementColor.object);
				}
				if(type === 'node-category'){
					typeText = 'Kontext'
					this.typeEl.classList.add(app.collectionViewer.elementColor.category);
					this.contentEl.classList.add(app.collectionViewer.elementColor.category);
				}
				if(type === 'node-topic'){
					typeText = 'Merkmal'
					this.typeEl.classList.add(app.collectionViewer.elementColor.topic);
					this.contentEl.classList.add(app.collectionViewer.elementColor.topic);
				}
				if(type === 'link-tag'){
					typeText = 'Tag-Link'
					this.typeEl.classList.add(app.collectionViewer.elementColor.tag);
					this.contentEl.classList.add(app.collectionViewer.elementColor.tag);
				}
				if(type === 'link-productionTag'){
					typeText = 'Herstellungs-Link'
					this.typeEl.classList.add(app.collectionViewer.elementColor.productionTag);
					this.contentEl.classList.add(app.collectionViewer.elementColor.productionTag);
				}
				if(type === 'link-category'){
					typeText = 'Kontext-Link'
					this.typeEl.classList.add(app.collectionViewer.elementColor.category);
					this.contentEl.classList.add(app.collectionViewer.elementColor.category);
				}
				if(type === 'link-topic'){
					typeText = 'Merkmal-Link'
					this.typeEl.classList.add(app.collectionViewer.elementColor.topic);
					this.contentEl.classList.add(app.collectionViewer.elementColor.topic);
				}
				this.typeEl.textContent = typeText;
				this.contentEl.textContent = content;
				
				this.typeEl.classList.remove('hide');
				this.element.classList.remove('cta');
				this.element.classList.remove('hide');

				if(type === 'node-object' && app.collectionViewer.highlight.focusedNode === id){
					this.contentEl.textContent = 'ansehen';

					this.element.classList.add('cta');
					this.typeEl.classList.add('hide');
				}
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
			
					this.element.style.left = x + 12 + 'px';
					this.element.style.top = y + 24 + 'px';
				}
			
				document.addEventListener('mousemove', (e) => {
					move(e);
				});

				document.addEventListener('touchmove', (e) => {
					move(e);
				});

				this.pointerStyleHandler(null)

				let type = '';

				fgElement ? type = fgElement.type : type = 'none';

				if(type === 'none'){
					return;
				}

				if (fgElement.visibility === 'hidden') {
					return;
				}
				
				if(isTouchDevice()) { return; }

				this.showTooltip(fgElement.type, fgElement.name, fgElement.id);

				this.pointerStyleHandler(fgElement);
			},

			pointerStyleHandler(fgElement = null, event = null) {
				fgElement === null ? document.querySelector('canvas.a-canvas').style.cursor = 'grab' : '';
				
				if(this.mouseDown){
					document.querySelector('canvas.a-canvas').style.cursor = 'grabbing';
					//event && event.preventDefault();
					//event && event.stopPropagation();
					return;
				}

				if(!fgElement) { return; }

				let fgType = null;

				fgElement ? fgType = fgElement.type : '';

				fgType === 'node-object' ? document.querySelector('canvas.a-canvas').style.cursor = 'pointer' : '';
				fgType === 'node-category' ? document.querySelector('canvas.a-canvas').style.cursor = 'pointer' : '';
				fgType === 'node-topic' ? document.querySelector('canvas.a-canvas').style.cursor = 'pointer' : '';
				fgType === 'link-object' ? document.querySelector('canvas.a-canvas').style.cursor = 'default' : '';
				fgType === 'link-category' ? document.querySelector('canvas.a-canvas').style.cursor = 'default' : '';
				fgType === 'link-topic' ? document.querySelector('canvas.a-canvas').style.cursor = 'default' : '';

				if(fgElement.id !== app.collectionViewer.highlight.focusedNode) { return; }
				if(fgType !== 'node-category' && fgType !== 'node-topic') { return; }
				document.querySelector('canvas.a-canvas').style.cursor = 'default';
			}
		},

		highlight: {

			focusedNode: null,

			pillArray: [],

			init() {
				app.dev && console.log('dev --- cv > highlight: initialized');
			},

			onclickHandler(fgNode, showMessage = true) {
				let type = '';
				fgNode ? type = fgNode.type : type = 'none';
			
				if(type !== 'none'){
					showMessage && app.gui.message.hideMessage(true);
					if(!fgNode.model.material.visible) {return;}
					app.gui.title.set(fgNode.name, fgNode.type);
					showMessage && app.collectionViewer.highlight.generateMessage(fgNode);
				}
			}, 

			generateMessage(fgNode) {
				let type = '';
				fgNode ? type = fgNode.type : type = 'none';

				this.pillArray = [];
				
				if(type === 'node-object'){
					let categoryList = '';
					for(let category of fgNode.categories) {
						if(category === ''){ continue; }
						let pillId = 'category-' + self.crypto.randomUUID();
						categoryList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.category + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.category +'" '
										+ 'data-name="' + category.replace(/"/g, '&quot;') +'" '
										+ 'data-type="category" data-active="false">' 
										+ category 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					if(categoryList !== '') {
						categoryList = '<div class="pill-container categories"><h6 class="text-smokegrey">Kontexte: </h6>' + categoryList + '</div>';
					}

					let topicList = '';
					for(let topic of fgNode.topics) {
						if(topic === ''){ continue; }
						let pillId = 'topic-' + self.crypto.randomUUID();
						topicList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.topic + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.topic +'" '
										+ 'data-name="' + topic.replace(/"/g, '&quot;') +'" '
										+ 'data-type="topic" data-active="false">' 
										+ topic 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					if(topicList !== '') {
						topicList = '<div class="pill-container topics"><h6 class="text-smokegrey">Merkmale: </h6>' + topicList + '</div>';
					}
	
					let tagList = '';
					for(let tag of fgNode.tags) {
						if(tag === ''){ continue; }
						let pillId = 'tag-' + self.crypto.randomUUID();
						tagList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.tag + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.tag +'" '
										+ 'data-name="' + tag.replace(/"/g, '&quot;') +'" '
										+ 'data-type="tag" data-active="false">' 
										+ tag 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					if(tagList !== '') {
						tagList = '<div class="pill-container tags"><h6 class="text-smokegrey">Tags: </h6>' + tagList + '</div>';
					}

					let productionTagList = '';
					for(let productionTag of fgNode.productionTags) {
						if(productionTag === ''){ continue; }
						let pillId = 'ptag-' + self.crypto.randomUUID();
						productionTagList += '<div id="' + pillId +'" '
										+ 'class="pill shadow-' + app.collectionViewer.elementColor.productionTag + ' text-coalgrey" '
										+ 'data-model-id="' + fgNode.id +'" '
										+ 'data-color="' + app.collectionViewer.elementColor.productionTag +'" '
										+ 'data-name="' + productionTag.replace(/"/g, '&quot;') +'" '
										+ 'data-type="productionTag" data-active="false">' 
										+ productionTag 
										+ '</div>';
						this.pillArray.push('#'+pillId);
					}
					if(productionTagList !== '') {
						productionTagList = '<div class="pill-container production-tags"><h6 class="text-smokegrey">Tags zur Herstellung: </h6>' + productionTagList + '</div>';
					}

					let objectContent = app.createHTMLContentFromJSON(fgNode.contents);

					let message = {
						type: 'Objekt',
						content: objectContent
								+ categoryList
								+ topicList
								+ tagList
								+ productionTagList,
						color: 'pearlwhite',
						shadow: 'shadow-' + app.collectionViewer.elementColor.object,
						buttonSetup: [
							{ label: 'ansehen', color: app.collectionViewer.elementColor.object, icon: 'arrow right' }
							], 
						showClose: false, 
						showBack: true
					}

					app.gui.message.setMessage(message);

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						app.collectionViewer.highlight.messageClickEvent(fgNode);
					}, { signal: app.gui.message.abortController.signal }); // 
				}

				if(type === 'node-category'){
					let objectList = '';
					for(let node of app.collectionViewer.proxyfgData.data.nodes) {
						if(!node.categories.includes(fgNode.name) || node.type === 'node-category'){ continue; }
						let pillId = 'object-' + self.crypto.randomUUID();;
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

					if(objectList !== '') {
						objectList = '<div class="pill-container objects"><h6 class="text-smokegrey">Verbundene Objekte: </h6>' + objectList + '</div>';
					}

					let categoryContent = app.createHTMLContentFromJSON(fgNode.contents);
					
					let message = {
						type: 'Kontext',
						content: categoryContent + objectList,
						color: 'pearlwhite',
						shadow: 'shadow-' + app.collectionViewer.elementColor.category,
						showClose: false, 
						showBack: true
					}

					app.gui.message.setMessage(message);
				}

				if(type === 'node-topic'){
					let objectList = '';
					for(let node of app.collectionViewer.proxyfgData.data.nodes) {
						if(!node.topics.includes(fgNode.name) || node.type === 'node-topic'){ continue; }
						let pillId = 'object-' + self.crypto.randomUUID();;
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

					if(objectList !== '') {
						objectList = '<div class="pill-container objects"><h6 class="text-smokegrey">Verbundene Objekte: </h6>' + objectList + '</div>';
					}
					
					let topicContent = app.createHTMLContentFromJSON(fgNode.contents)
					
					let message = {
						type: 'Merkmal',
						content: topicContent + objectList,
						color: 'pearlwhite',
						shadow: 'shadow-' + app.collectionViewer.elementColor.topic,
						showClose: false, 
						showBack: true
					}

					app.gui.message.setMessage(message);
				}
			},

			messageClickEvent(fgNode) {
				let url = '?m=mv';
				app.dev ? url += '&dev=true' : '';
				app.stats ? url += '&stats=true' : '';
				app.embedded ? url += '&embedded=true' : '';
				url += '&model=' + fgNode.id;
				window.location.href = url;
			},

			setPillEventlisteners() {
				let filteredTags = app.collectionViewer.filter.filteredData.tags;
				let filteredProductionTags = app.collectionViewer.filter.filteredData.productionTags;
				let filteredCategories = app.collectionViewer.filter.filteredData.categories;
				let filteredTopics = app.collectionViewer.filter.filteredData.topics;

				if(this.pillArray.length <= 0) { return; }

				for(let pill of this.pillArray){
					let element = document.querySelector(pill);
					let name = element.getAttribute('data-name');
					if(filteredTags.includes(name) || filteredProductionTags.includes(name) || filteredCategories.includes(name) || filteredTopics.includes(name)){
						element.classList.remove('inactive');
						element.classList.add('inactive');
					}else{
						element.addEventListener('click', this.highlightFromPill);
					}
				}

				this.pillArray = [];
			},

			highlightFromPill(e) {
				
				let pill = e.srcElement;
				let pillArray = document.querySelectorAll('.pill-container > div')
				let modelId = pill.getAttribute('data-model-id');
				let name = pill.getAttribute('data-name');
				let type = pill.getAttribute('data-type');
				let color = pill.getAttribute('data-color');
				let active = (pill.getAttribute('data-active') === 'true');
				let textColor = 'text-coalgrey';
				let textColorNew = 'text-coalgrey';
				
				document.querySelector('#forcegraph').components.highlight.highlightFromPill(name, type, active, modelId);

				if(color === 'terracotta' || color === 'skyblue' || color === 'smokegrey'){
					textColorNew = 'text-pearlwhite';
				}

				for(let pill of pillArray){
					let element = pill;
					let elementColor = element.getAttribute('data-color');
					element.classList.remove(elementColor);
					element.classList.remove('text-pearlwhite');
					element.classList.remove('text-coalgrey');
					element.setAttribute('data-active', false);
				}

				if(!active){
					pill.classList.add(color);
					pill.classList.add(textColorNew);
					pill.setAttribute('data-active', true);
				}else{
					pill.classList.add(textColor);
					pill.setAttribute('data-active', false);
				}
			}
		},

		info: {

			buttonSetup: {
				id: '#toolbar-button-0',
				name: 'Informationen',
				colors: {
					button: {
						background: 'coalgrey',
						text: null,
						icon: 'pearlwhite'
					},
					tab: {
						background: 'pearlwhite',
						shadow: 'shadow-coalgrey',
						text: 'text-coalgrey',
						icon: 'coalgrey'
					}
				}, 
				func: 'info', 
				action: {
					type: 'tab',
					selector: '.cv-info-container' 
				}
			},

			texts: {
				title: 'Die Unikathek',
				intro: 'Mehr als 100 handgemachte Oberpfälzer Objekte kannst du hier mitsamt ihren Geschichten entdecken. Erfahre anhand der Gegenstände, was die Menschen in der Oberpfalz in den letzten 80 Jahren beschäftigte – und was sie immer wieder dazu antrieb und antreibt, Dinge selbst in die Hand zu nehmen. ',
				toursTitle: 'Themen:',
				collectionTitle: 'Sammlungsinformation'
			},

			collectionData: {
				releaseDate: 'noDate', 
				objectCount: 'noCount',
				objectVisibleCount: 'noCount',
				linkCount: 'noCount',
				linkVisibleCount: 'noCount',
				categoryCount: 'noCount',
				categoryVisibleCount: 'noCount',
				topicCount: 'noCount',
				topicVisibleCount: 'noCount',
				tagCount: 'noCount',
				tagVisibleCount: 'noCount',
				productionTagCount: 'noCount',
				productionTagVisibleCount: 'noCount',
			},

			init() {
				let self = this;
				
				document.addEventListener('proxyfgData-update', (event) => {
					let collectionCounts = self.setCollectionCounts(app.collectionViewer.proxyfgData.data);
					self.collectionData.releaseDate = app.collectionViewer.proxyfgData.data.releaseDate;
					self.collectionData.objectCount = collectionCounts.objects;
					self.collectionData.objectVisibleCount = collectionCounts.objectsVisible;
					self.collectionData.linkCount = collectionCounts.links;
					self.collectionData.linkVisibleCount = collectionCounts.linksVisible;
					self.collectionData.categoryCount = collectionCounts.categories;
					self.collectionData.topicCount = collectionCounts.topics;
					self.collectionData.tagCount = collectionCounts.tags;
					self.collectionData.productionTagCount = collectionCounts.productionTags;
					self.createElements();
					self.setEventlisteners();
				});

				document.addEventListener('loadingScreen-ready', (event) => {
					let collectionCounts = self.setCollectionCounts(app.collectionViewer.proxyfgData.data);
					self.collectionData.objectVisibleCount = collectionCounts.objectsVisible;
					self.collectionData.linkVisibleCount = collectionCounts.linksVisible;
					self.collectionData.categoryVisibleCount = app.collectionViewer.filter.filteredData.categories.length;
					self.collectionData.topicVisibleCount = app.collectionViewer.filter.filteredData.topics.length;
					self.collectionData.tagVisibleCount = app.collectionViewer.filter.filteredData.tags.length;
					self.collectionData.productionTagVisibleCount = app.collectionViewer.filter.filteredData.productionTags.length;
					self.updateCollectionInfo();
					self.setTourList();
				});
				app.dev && console.log('dev --- cv > info: initialized');
			},

			createElements() {
				let infoTabContent = app.gui.toolbar.tab.content.element;

				const infoContainer = document.createElement('div');
				infoTabContent.appendChild(infoContainer);
				infoContainer.className = 'cv-info-container';

				const infoHeadline = document.createElement('h3');
				infoContainer.appendChild(infoHeadline);
				infoHeadline.textContent = this.texts.title;

				const infoText = document.createElement('p');
				infoContainer.appendChild(infoText);
				infoText.className = 'text-small';
				infoText.textContent = this.texts.intro;

				const onboardingButton = document.createElement('button');
				this.onboardingButtonEl = onboardingButton;
				infoContainer.appendChild(onboardingButton);
				onboardingButton.className = 'link text-smokegrey';

				onboardingButton.textContent = 'Leitfaden anzeigen';

				const toursHeadline = document.createElement('h3');
				infoContainer.appendChild(toursHeadline);
				toursHeadline.textContent = this.texts.toursTitle;

				const toursList = document.createElement('dl');
				this.toursListEl = toursList;
				infoContainer.appendChild(toursList);

				const collectionHeadline = document.createElement('h3');
				infoContainer.appendChild(collectionHeadline);
				collectionHeadline.textContent = this.texts.collectionTitle;

				const listBasicEl = document.createElement('dl');
				infoContainer.appendChild(listBasicEl);

				const releaseDateEl = document.createElement('dt');
				listBasicEl.appendChild(releaseDateEl);
				const releaseDateHeadline = document.createElement('h6');
				releaseDateEl.appendChild(releaseDateHeadline);
				releaseDateHeadline.textContent = 'Datenstand vom: ';
				releaseDateHeadline.className = 'text-smokegrey';
				const releaseDateValueEl = document.createElement('dd');
				listBasicEl.appendChild(releaseDateValueEl);
				releaseDateValueEl.textContent = this.collectionData.releaseDate;

				const objectCountEl = document.createElement('dt');
				listBasicEl.appendChild(objectCountEl);
				const objectCountHeadline = document.createElement('h6');
				objectCountEl.appendChild(objectCountHeadline);
				objectCountHeadline.textContent = 'Objekte: ';
				objectCountHeadline.className = 'text-smokegrey';
				this.objectCountValueEl = document.createElement('dd');
				listBasicEl.appendChild(this.objectCountValueEl);
				this.objectCountValueEl.textContent = this.collectionData.objectCount + ' (' + this.collectionData.objectVisibleCount + ' gefiltert)';

				const linkCountEl = document.createElement('dt');
				listBasicEl.appendChild(linkCountEl);
				const linkCountHeadline = document.createElement('h6');
				linkCountEl.appendChild(linkCountHeadline);
				linkCountHeadline.textContent = 'Verknüpfungen: ';
				linkCountHeadline.className = 'text-smokegrey';
				this.linkCountValueEl = document.createElement('dd');
				listBasicEl.appendChild(this.linkCountValueEl);
				this.linkCountValueEl.textContent = this.collectionData.linkCount + ' (' + this.collectionData.linkVisibleCount + ' gefiltert)';

				const categoryCountEl = document.createElement('dt');
				listBasicEl.appendChild(categoryCountEl);
				const categoryCountHeadline = document.createElement('h6');
				categoryCountEl.appendChild(categoryCountHeadline);
				categoryCountHeadline.textContent = 'Kontexte: ';
				categoryCountHeadline.className = 'text-smokegrey';
				this.categoryCountValueEl = document.createElement('dd');
				listBasicEl.appendChild(this.categoryCountValueEl);
				this.categoryCountValueEl.textContent = this.collectionData.categoryCount + ' (' + this.collectionData.categoryVisibleCount + ' gefiltert)';

				const topicCountEl = document.createElement('dt');
				listBasicEl.appendChild(topicCountEl);
				const topicCountHeadline = document.createElement('h6');
				topicCountEl.appendChild(topicCountHeadline);
				topicCountHeadline.textContent = 'Merkmale: ';
				topicCountHeadline.className = 'text-smokegrey';
				this.topicCountValueEl = document.createElement('dd');
				listBasicEl.appendChild(this.topicCountValueEl);
				this.topicCountValueEl.textContent = this.collectionData.topicCount + ' (' + this.collectionData.topicVisibleCount + ' gefiltert)';

				const tagCountEl = document.createElement('dt');
				listBasicEl.appendChild(tagCountEl);
				const tagCountHeadline = document.createElement('h6');
				tagCountEl.appendChild(tagCountHeadline);
				tagCountHeadline.textContent = 'Themen-Tags: ';
				tagCountHeadline.className = 'text-smokegrey';
				this.tagCountValueEl = document.createElement('dd');
				listBasicEl.appendChild(this.tagCountValueEl);
				this.tagCountValueEl.textContent = this.collectionData.tagCount + ' (' + this.collectionData.tagVisibleCount + ' gefiltert)';

				const productionTagCountEl = document.createElement('dt');
				listBasicEl.appendChild(productionTagCountEl);
				const productionTagCountHeadline = document.createElement('h6');
				productionTagCountEl.appendChild(productionTagCountHeadline);
				productionTagCountHeadline.textContent = 'Herstellungs-Tags: ';
				productionTagCountHeadline.className = 'text-smokegrey';
				this.productionTagCountValueEl = document.createElement('dd');
				listBasicEl.appendChild(this.productionTagCountValueEl);
				this.productionTagCountValueEl.textContent = this.collectionData.productionTagCount + ' (' + this.collectionData.productionTagVisibleCount + ' gefiltert)';
			},			

			setEventlisteners() {
				this.onboardingButtonEl.addEventListener('click', (e) => {
					app.gui.toolbar.toggleToolbar(false);
					app.gui.toolbar.buttonActionTab(document.querySelector(this.buttonSetup.id));
					app.collectionViewer.onboarding.show();
				});
			}, 

			setCollectionCounts(fgData) {
				let objectCount = 0;
				let objectVisibleCount = 0;
				if(typeof fgData.nodes === 'object') {
					for(let node of fgData.nodes) {
						if(node.type === 'node-object'){ 
							objectCount++; 
							if(node.visibility === 'hidden'){ objectVisibleCount++; }
						}
					}
				}

				let linkCount = 0;
				let linkVisibleCount = 0;
				if(typeof fgData.links === 'object') {
					for(let link of fgData.links) {
						linkCount++; 
						if(link.visibility === 'hidden'){ linkVisibleCount++; }
					}
				}


				return { 
							objects: objectCount,
							objectsVisible: objectVisibleCount,
							links: linkCount,
							linksVisible: linkVisibleCount,
							categories: fgData.categorylist.length,
							topics: fgData.topiclist.length,
							tags: fgData.taglist.length,
							productionTags: fgData.productionTaglist.length 
						}
			}, 

			updateCollectionInfo() {
				this.objectCountValueEl.textContent = this.collectionData.objectCount + ' (' + this.collectionData.objectVisibleCount + ' gefiltert)';
				this.linkCountValueEl.textContent = this.collectionData.linkCount + ' (' + this.collectionData.linkVisibleCount + ' gefiltert)';
				this.categoryCountValueEl.textContent = this.collectionData.categoryCount + ' (' + this.collectionData.categoryVisibleCount + ' gefiltert)';
				this.topicCountValueEl.textContent = this.collectionData.topicCount + ' (' + this.collectionData.topicVisibleCount + ' gefiltert)';
				this.tagCountValueEl.textContent = this.collectionData.tagCount + ' (' + this.collectionData.tagVisibleCount + ' gefiltert)';
				this.productionTagCountValueEl.textContent = this.collectionData.productionTagCount + ' (' + this.collectionData.productionTagVisibleCount + ' gefiltert)';
			}, 

			setTourList() {
				for (let name in app.collectionViewer.tour.list) {
					const tour = app.collectionViewer.tour.list[name];
					const tourButtonEl = document.createElement('button');
					this.toursListEl.appendChild(tourButtonEl);
					tourButtonEl.textContent = tour.title;
					tourButtonEl.className = 'button duckyellow';

					tourButtonEl.addEventListener('click', (e) => {
						let url = '?m=cv';
						app.dev ? url+='&dev=true' : '';
						app.stats ? url+='&dev=stats' : '';
						app.embedded ? url+='&embeddded=true' : '';
						url+='&tour=' + tour.short;
						url+='&step=0';
						window.location.href = url;
					});
				}
			}
		},

		search: {

			buttonSetup: {
				id: '#toolbar-button-1',
				name: 'Suche',
				colors: {
					button: {
						background: 'terracotta',
						text: 'text-pearlwhite',
						icon: 'pearlwhite'
					},
					tab: {
						background: 'pearlwhite',
						shadow: 'shadow-terracotta',
						text: 'text-coalgrey',
						icon: 'coalgrey'
					}
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
							this.nodeArray.push(object);
						}
					}
					//app.dev && console.log('dev --- cv > search > nodeArray: ', this.nodeArray);
					this.autocomplete(this.inputEl, this.nodeArray);
				});

				this.button.closeEl.addEventListener('click', (e) => {
					app.gui.toolbar.buttonClickHandler(e);
					app.collectionViewer.search.resetSearchInput();
				});
				app.dev && console.log('dev --- cv > search: initialized');
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
				this.button.input.element.className = 'cv-search-input ' + this.buttonSetup.colors.button.background + ' ' + this.buttonSetup.colors.button.text;
				this.button.input.element.setAttribute('id', 'cv-search-input');
				this.button.input.element.setAttribute('type', 'text');
				this.button.input.element.setAttribute('name', 'searchBar');
				this.button.input.element.setAttribute('placeholder', this.texts.placeholder);

				this.button.closeEl = document.createElement('div');
				this.button.element.appendChild(this.button.closeEl);
				this.button.closeEl.className = 'close';
				
				this.button.closeEl.icon = document.createElement('img');
				this.button.closeEl.appendChild(this.button.closeEl.icon);
				this.button.closeEl.icon.className = 'close-icon';
				this.button.closeEl.icon.src = app.assets.icon.small['close'].src.pearlwhite;
				this.button.closeEl.icon.alt = app.assets.icon.small['close'].alt;
				this.button.closeEl.icon.width = 100;
				this.button.closeEl.icon.height = 100;
				this.button.closeEl.icon.setAttribute('loading', 'lazy');

				this.button.autocomplete = {};
				this.button.autocomplete.list = {};
				this.button.autocomplete.list.containerEl = document.createElement('div');
				this.button.element.appendChild(this.button.autocomplete.list.containerEl);
				this.button.autocomplete.list.containerEl.className = 'autocomplete-list-container hide';
				this.button.autocomplete.list.containerEl.classList.add(this.buttonSetup.colors.tab.background);
				this.button.autocomplete.list.containerEl.classList.add(this.buttonSetup.colors.tab.shadow);
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
					autocompleteList.classList.add(app.collectionViewer.search.buttonSetup.colors.tab.text);
	
					currentFocus = -1;
	
					for(let index in array){
						let name = array[index].name;
						if (name.substr(0, inputValue.length).toUpperCase() == inputValue.toUpperCase()) {
							let listItemEl = document.createElement('div');
							listItemEl.innerHTML = "<strong>" + name.substr(0, inputValue.length) + "</strong>";
							listItemEl.innerHTML += name.substr(inputValue.length);
							array[index].visibility === 'hidden' ? listItemEl.innerHTML += ' (gefiltert)' : '';
							listItemEl.innerHTML += "<input type='hidden' value='" + name + "'>";
							autocompleteList.appendChild(listItemEl);
							if(array[index].visibility === 'hidden'){
								listItemEl.classList.add('disabled');
								continue;
							}
							listItemEl.addEventListener("click", function(e) {
								element.value = this.getElementsByTagName("input")[0].value;
								app.collectionViewer.search.removeAutoCompleteList();
								app.gui.toolbar.buttonActionSlide(app.collectionViewer.search.button.element);
								app.collectionViewer.search.executeRequest(name);
							});
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
				window.setTimeout( (e) => {
					app.collectionViewer.search.inputEl.focus({ focusVisible: true });
				}, 100)
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
						app.dev && console.log('dev --- search model: ', node);
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
				name: 'Filter und Einstellungen',
				colors: {
					button: {
						background: 'duckyellow',
						text: null,
						icon: 'coalgrey'
					},
					tab: {
						background: 'pearlwhite',
						shadow: 'shadow-duckyellow',
						text: 'text-coalgrey',
						icon: 'coalgrey'
					}
				}, 
				func: 'filter', 
				action: {
					type: 'tab',
					selector: '.cv-filter-container' 
				}
			},

			texts: {
				changeButton: {
					label: 'anwenden'
				},
				intro: {
					title: 'Filter und Einstellungen',
					description: 'Die Unikathek',
				},
				filter: {
					title: 'Filter',
					description: 'Die Unikathek versammelt Objekte, die aus verschiedenen Kontexten stammen und unterschiedliche Merkmale aufweisen. Daraus ergeben sich vielfältige Verbindungen. Hier kannst du einzelne Elemente ein- oder ausblenden, um die Unikathek nach deinen Interessen zu filtern. ',
					categoriesButton: 'Kontexte',
					topicsButton: 'Merkmale',
					tagsButton: 'Themen-Tags',
					productionTagsButton: 'Herstellungs-Tags',
					selectAllButton: 'Alle aus-/abwählen'
				},
				settings: {
					title: 'Einstellungen',
					description: '',
					normalizeCheckbox: 'Modellgrößen normalisieren'
				}
				
			},

			filterUpdated: false,

			filteredData: {
				tags: [], 
				productionTags: [], 
				categories: [],
				topics: []
			},

			settingsData: {
				normalize: true
			},

			init() {
				let self = this;
				this.createElements();

				document.querySelector('#cv-settings-normalize').parentElement.addEventListener('click', (e) => {
					let checked = document.querySelector('#cv-settings-normalize').checked;
					self.settingsData.normalize === checked ? '' : app.collectionViewer.filter.filterUpdated = true;
				})

				document.querySelector('.filter-change').addEventListener('click', (e) => {
					app.collectionViewer.filter.filterUpdated ? app.collectionViewer.filter.updateForcegraph() : '';
					app.collectionViewer.resetView.resetCameraView();
					app.gui.toolbar.buttonActionTab(document.querySelector(self.buttonSetup.id))
				})

				document.addEventListener('proxyfgData-update', (event) => {
					//app.dev && console.log('dev --- cv > filter > proxyfgData-update: ', app.collectionViewer.proxyfgData.data);
					this.generateCheckBoxList('#cv-filter-category-list', app.collectionViewer.proxyfgData.data.categorylist, app.collectionViewer.elementColor.category);
					this.generateCheckBoxList('#cv-filter-topic-list', app.collectionViewer.proxyfgData.data.topiclist, app.collectionViewer.elementColor.topic);
					this.generateCheckBoxList('#cv-filter-tag-list', app.collectionViewer.proxyfgData.data.taglist, app.collectionViewer.elementColor.tag);
					this.generateCheckBoxList('#cv-filter-production-tag-list', app.collectionViewer.proxyfgData.data.productionTaglist, app.collectionViewer.elementColor.productionTag, false);

					app.collectionViewer.filter.updateForcegraph();
				});
				app.dev && console.log('dev --- cv > filter: initialized');
			},

			createElements() {
				let toolBarTabContent = app.gui.toolbar.tab.content.element;

				const filterContainer = document.createElement('div');
				toolBarTabContent.appendChild(filterContainer);
				filterContainer.className = 'cv-filter-container';

				const filterChangeButton = document.createElement('button');
				filterContainer.appendChild(filterChangeButton);
				filterChangeButton.className = 'button filter-change ' + this.buttonSetup.colors.tab.text + ' ' + this.buttonSetup.colors.button.background;
				filterChangeButton.appendChild(document.createTextNode(this.texts.changeButton.label));

				//Intro

				const introHeadline = document.createElement('h3');
				filterContainer.appendChild(introHeadline);
				introHeadline.textContent = this.texts.intro.title;

				//Filter

				const filterHeadline = document.createElement('h5');
				filterContainer.appendChild(filterHeadline);
				filterHeadline.textContent = this.texts.filter.title;

				const filterText = document.createElement('p');
				filterContainer.appendChild(filterText);
				filterText.className = 'text-small';
				filterText.textContent = this.texts.filter.description;

				//Filter > Categories

				const categoryListContainer = document.createElement('div');
				filterContainer.appendChild(categoryListContainer);
				categoryListContainer.className = 'list-container';

				const categoryListButton = document.createElement('button');
				categoryListContainer.appendChild(categoryListButton);
				categoryListButton.className = 'button collapsible-button ' + this.buttonSetup.colors.tab.text;

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

				categoryListButton.appendChild(document.createTextNode(this.texts.filter.categoriesButton));

				const categoryListButtonArrow = document.createElement('div');
				categoryListButton.appendChild(categoryListButtonArrow);
				categoryListButtonArrow.className = 'arrow right ' + this.buttonSetup.colors.tab.icon;

				const categoryList = document.createElement('div');
				categoryListContainer.appendChild(categoryList);
				categoryList.className = 'cv-filter-container collapsible-content';
				categoryList.setAttribute('id', 'cv-filter-category-list');

				const categorySelectAllButton = document.createElement('button');
				categoryList.appendChild(categorySelectAllButton);
				categorySelectAllButton.className = 'button text-small';
				categorySelectAllButton.setAttribute('data-selected', true);
				categorySelectAllButton.setAttribute('id', 'cv-filter-category-list-select-all');
				categorySelectAllButton.textContent = this.texts.filter.selectAllButton;

				//Filter > Topics

				const topicListContainer = document.createElement('div');
				filterContainer.appendChild(topicListContainer);
				topicListContainer.className = 'list-container';

				const topicListButton = document.createElement('button');
				topicListContainer.appendChild(topicListButton);
				topicListButton.className = 'button collapsible-button ' + this.buttonSetup.colors.tab.text;

				const topicListButtonIcon = document.createElement('div');
				topicListButton.appendChild(topicListButtonIcon);
				topicListButtonIcon.className = 'icon ' + app.collectionViewer.elementColor.topic;

				const topicIcon = document.createElement('img');
				topicListButtonIcon.appendChild(topicIcon);
				topicIcon.src = app.assets.icon['topic'].src.pearlwhite;
				topicIcon.alt = app. assets.icon['topic'].alt;
				topicIcon.width = 100;
				topicIcon.height = 100;
				topicIcon.setAttribute('loading', 'lazy');

				topicListButton.appendChild(document.createTextNode(this.texts.filter.topicsButton));

				const topicListButtonArrow = document.createElement('div');
				topicListButton.appendChild(topicListButtonArrow);
				topicListButtonArrow.className = 'arrow right ' + this.buttonSetup.colors.tab.icon;

				const topicList = document.createElement('div');
				topicListContainer.appendChild(topicList);
				topicList.className = 'cv-filter-container collapsible-content';
				topicList.setAttribute('id', 'cv-filter-topic-list');

				const topicSelectAllButton = document.createElement('button');
				topicList.appendChild(topicSelectAllButton);
				topicSelectAllButton.className = 'button text-small';
				topicSelectAllButton.setAttribute('data-selected', true);
				topicSelectAllButton.setAttribute('id', 'cv-filter-topic-list-select-all');
				topicSelectAllButton.textContent = this.texts.filter.selectAllButton;

				//Filter > Tags

				const tagListContainer = document.createElement('div');
				filterContainer.appendChild(tagListContainer);
				tagListContainer.className = 'list-container';

				const tagListButton = document.createElement('button');
				tagListContainer.appendChild(tagListButton);
				tagListButton.className = 'button collapsible-button ' + this.buttonSetup.colors.tab.text;

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

				tagListButton.appendChild(document.createTextNode(this.texts.filter.tagsButton));

				const tagListButtonArrow = document.createElement('div');
				tagListButton.appendChild(tagListButtonArrow);
				tagListButtonArrow.className = 'arrow right ' + this.buttonSetup.colors.tab.icon;

				const tagList = document.createElement('div');
				tagListContainer.appendChild(tagList);
				tagList.className = 'cv-filter-container collapsible-content';
				tagList.setAttribute('id', 'cv-filter-tag-list');

				const tagSelectAllButton = document.createElement('button');
				tagList.appendChild(tagSelectAllButton);
				tagSelectAllButton.className = 'button text-small';
				tagSelectAllButton.setAttribute('data-selected', true);
				tagSelectAllButton.setAttribute('id', 'cv-filter-tag-list-select-all');
				tagSelectAllButton.textContent = this.texts.filter.selectAllButton;

				//Filter > ProductionTags

				const productionTagListContainer = document.createElement('div');
				filterContainer.appendChild(productionTagListContainer);
				productionTagListContainer.className = 'list-container';

				const productionTagListButton = document.createElement('button');
				productionTagListContainer.appendChild(productionTagListButton);
				productionTagListButton.className = 'button collapsible-button ' + this.buttonSetup.colors.tab.text;

				const productionTagListButtonIcon = document.createElement('div');
				productionTagListButton.appendChild(productionTagListButtonIcon);
				productionTagListButtonIcon.className = 'icon ' + app.collectionViewer.elementColor.productionTag;

				const productionTagIcon = document.createElement('img');
				productionTagListButtonIcon.appendChild(productionTagIcon);
				productionTagIcon.src = app.assets.icon['tag'].src.pearlwhite;
				productionTagIcon.alt = app. assets.icon['tag'].alt;
				productionTagIcon.width = 100;
				productionTagIcon.height = 100;
				productionTagIcon.setAttribute('loading', 'lazy');

				productionTagListButton.appendChild(document.createTextNode(this.texts.filter.productionTagsButton));

				const productionTagListButtonArrow = document.createElement('div');
				productionTagListButton.appendChild(productionTagListButtonArrow);
				productionTagListButtonArrow.className = 'arrow right ' + this.buttonSetup.colors.tab.icon;

				const productionTagList = document.createElement('div');
				productionTagListContainer.appendChild(productionTagList);
				productionTagList.className = 'cv-filter-container collapsible-content';
				productionTagList.setAttribute('id', 'cv-filter-production-tag-list');

				const productionTagSelectAllButton = document.createElement('button');
				productionTagList.appendChild(productionTagSelectAllButton);
				productionTagSelectAllButton.className = 'button text-small';
				productionTagSelectAllButton.setAttribute('data-selected', true);
				productionTagSelectAllButton.setAttribute('id', 'cv-filter-production-tag-list-select-all');
				productionTagSelectAllButton.textContent = this.texts.filter.selectAllButton;

				//Settings

				const settingsHeadline = document.createElement('h5');
				filterContainer.appendChild(settingsHeadline);
				settingsHeadline.textContent = this.texts.settings.title;

				const settingsText = document.createElement('p');
				filterContainer.appendChild(settingsText);
				settingsText.className = 'text-small';
				settingsText.textContent = this.texts.settings.description;

				const normalizeContainer = document.createElement('div');
				filterContainer.appendChild(normalizeContainer);
				normalizeContainer.className = 'normalize-container';

				const normalizeLabel = document.createElement('label');
				normalizeContainer.appendChild(normalizeLabel);
				normalizeLabel.className = 'checkbox-container';	

				const normalizeInput = document.createElement('input');
				normalizeLabel.appendChild(normalizeInput);
				normalizeInput.setAttribute('id', 'cv-settings-normalize');
				normalizeInput.setAttribute('type', 'checkbox');
				normalizeInput.setAttribute('checked', 'checked');
				normalizeInput.className = 'checkbox';

				const normalizeInputSpan = document.createElement('span');
				normalizeLabel.appendChild(normalizeInputSpan);
				normalizeInputSpan.className = 'checkmark';	

				normalizeLabel.appendChild(document.createTextNode(this.texts.settings.normalizeCheckbox));			
			}, 

			generateCheckBoxList(id, dataArray, color, active = true){
				let element = document.querySelector(id);
				if(!element){return;}
				let selectAllButton = document.querySelector(id+'-select-all');
				!active ? selectAllButton.setAttribute('data-selected', false) : '';
				selectAllButton.addEventListener('click', (e) => {
					this.selectAllCheckBoxList(id)
				});

				let shadowColor = 'shadow-' + color;

				dataArray.forEach(function(data) {
					let newPill = document.createElement('div');
					element.appendChild(newPill);
					newPill.className = 'pill ' + ' ' + shadowColor;
					newPill.setAttribute('data-color', color);
					active ? newPill.classList.add(color) : '';
					!active ? newPill.classList.add('inactive') : '';
					newPill.setAttribute('data-active', active);
					newPill.textContent = data;

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

				app.collectionViewer.filter.filterUpdated = true;
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

				app.collectionViewer.filter.filterUpdated = true;
			}, 

			updateForcegraph() {
				let normalizeCheckboxValue = document.querySelector('#cv-settings-normalize').checked;
				let normalizeValue = null;
				let loadJSONModelsComponent = document.querySelector('a-scene').components['load-json-models'];
				let fgData = app.collectionViewer.proxyfgData.data;
				let categoryListElement = document.querySelector('#cv-filter-category-list');
				let topicListElement = document.querySelector('#cv-filter-topic-list');
				let tagListElement = document.querySelector('#cv-filter-tag-list');
				let productionTagListElement = document.querySelector('#cv-filter-production-tag-list');
				let showCategoriesArray = [];
				let showTopicsArray = [];
				let showTagsArray = [];
				let showProductionTagsArray = [];
				app.collectionViewer.filter.filteredData.categories = [];
				app.collectionViewer.filter.filteredData.topics = [];
				app.collectionViewer.filter.filteredData.tags = [];
				app.collectionViewer.filter.filteredData.productionTags = [];

				//app.dev && console.log('dev --- cv > filter > updateForcegraph > loadJSONModelsComponent', loadJSONModelsComponent);

				for(let element of categoryListElement.children) {
					let active = (element.getAttribute('data-active') === 'true');
					let name = element.innerHTML;
					if(name === 'Alle aus-/abwählen') {continue;};
					active ? showCategoriesArray.push(name) : app.collectionViewer.filter.filteredData.categories.push(name);
				}

				for(let element of topicListElement.children) {
					let active = (element.getAttribute('data-active') === 'true');
					let name = element.innerHTML;
					if(name === 'Alle aus-/abwählen') {continue;};
					active ? showTopicsArray.push(name) : app.collectionViewer.filter.filteredData.topics.push(name);
				}

				for(let element of tagListElement.children) {
					let active = (element.getAttribute('data-active') === 'true');
					let name = element.innerHTML;
					if(name === 'Alle aus-/abwählen') {continue;};
					active ? showTagsArray.push(name) : app.collectionViewer.filter.filteredData.tags.push(name);
				}

				for(let element of productionTagListElement.children) {
					let active = (element.getAttribute('data-active') === 'true');
					let name = element.innerHTML;
					if(name === 'Alle aus-/abwählen') {continue;};
					active ? showProductionTagsArray.push(name) : app.collectionViewer.filter.filteredData.productionTags.push(name);
				}

				normalizeCheckboxValue === true ? normalizeValue = '1' : normalizeValue = '0';
				this.settingsData.normalize = normalizeCheckboxValue;

				document.querySelector('a-scene').setAttribute('load-json-models', 'normalization: ' + normalizeValue)

				loadJSONModelsComponent.filterFgData(fgData, showTagsArray, showProductionTagsArray, showCategoriesArray, showTopicsArray);
			}, 

			updateCheckboxList() {
				let categoryListElement = document.querySelector('#cv-filter-category-list');
				let topicListElement = document.querySelector('#cv-filter-topic-list');
				let tagListElement = document.querySelector('#cv-filter-tag-list');
				let productionTagListElement = document.querySelector('#cv-filter-production-tag-list');

				app.dev && console.log('dev --- filteredData: ', this.filteredData);

				for(let element of categoryListElement.children) {
					let name = element.innerHTML;
					let color = element.getAttribute('data-color');
					element.classList.remove(color);
					element.classList.add('inactive');
					element.setAttribute('data-active', false);
					if(this.filteredData.categories.includes(name)){
						element.classList.add(color);
						element.classList.remove('inactive');
						element.setAttribute('data-active', true);
					}
				}

				for(let element of topicListElement.children) {
					let name = element.innerHTML;
					let color = element.getAttribute('data-color');
					element.classList.remove(color);
					element.classList.add('inactive');
					element.setAttribute('data-active', false);
					if(this.filteredData.topics.includes(name)){
						element.classList.add(color);
						element.classList.remove('inactive');
						element.setAttribute('data-active', true);
					}
				}

				for(let element of tagListElement.children) {
					let name = element.innerHTML;
					let color = element.getAttribute('data-color');
					element.classList.remove(color);
					element.classList.add('inactive');
					element.setAttribute('data-active', false);
					if(this.filteredData.tags.includes(name)){
						element.classList.add(color);
						element.classList.remove('inactive');
						element.setAttribute('data-active', true);
					}
				}

				for(let element of productionTagListElement.children) {
					let name = element.innerHTML;
					let color = element.getAttribute('data-color');
					element.classList.remove(color);
					element.classList.add('inactive');
					element.setAttribute('data-active', false);
					if(this.filteredData.productionTags.includes(name)){
						element.classList.add(color);
						element.classList.remove('inactive');
						element.setAttribute('data-active', true);
					}
				}
			}
		},

		resetView: {

			buttonSetup: {
				id: '#toolbar-button-3',
				name: 'Ansicht Zurücksetzen',
				colors: {
					button: {
						background: 'coalgrey',
						text: null,
						icon: 'pearlwhite'
					},
					tab: {
						background: null,
						shadow: null,
						text: null,
						icon: null
					}
				}, 
				func: 'reset view', 
				action: { 
					type: 'feedback', 
					selector: null
				}
			},

			init() {
				app.dev && console.log('dev --- cv > resetView: initialized');
			}, 

			resetCameraView() {
				document.querySelector('#forcegraph').setAttribute('highlight', {source: ''});
				document.querySelector('a-camera').setAttribute('orbit-controls', {
					enabled: true, 
					target: '#orbit-target', 
					desiredDistance: 175, 
					autoRotate: true,
					// removed pitch reset due to user feedback
					//activeRotX: true, 
					//desiredRotX: 0,
					//desiredCameraPitch: 0,
					forceUpdate: true
				});
			}
		},

		tour: {

			fgFilterUpdated: false,

			list: {
				waa: {
					title: 'WAA Wackersdorf',
					short: 'waa', 
					steps: '9'
				},
			},

			setSteps(tour) {

				if(tour === 'waa'){
					this.fgFilter = {
								tags: ['WAA Wackersdorf'],
								productionTags: [''],
								categories: [''],
								topics: ['']
							}

					this.steps = [
						{
							highlightObject: '',
							message: {
								type: 'Thema: ' + this.list[tour].title,
								buttons: [
									{
										label: 'los geht\'s',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								options: {
									extended: true
								},
								content: [
									{
										"content" : "WAA Wackersdorf",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Anfang der 1980er-Jahre. In der „beschaulichen“ Oberpfalz macht sich Unruhe breit. Da soll möglicherweise etwas Großes gebaut werden: eine Wiederaufbereitungsanlage für Kernbrennstäbe aus Atomkraftwerken. Während sich einige Bürger davon einen wirtschaftlichen Aufschwung erhoffen und das Großprojekt befürworten, sind andere skeptisch. Einer davon ist der 31-jährige Wolfgang. Begleite ihn auf seiner Reise!",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "",
										"fileCopyright" : "Bürgerinitiative Schwandorf",
										"filename" : "waa tour - Intro Stimmungsbild.jpg",
										"imageAlt" : "Musikanten bei den WAA-Protesten",
										"imageCaption" : "",
										"type" : "image"
									}
								]
							}
						},
						{
							highlightObject: '',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Start',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								options: {
									extended: true
								},
								content: [
									{
										"content" : "Wackersdorf und die WAA",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Die wirtschaftliche Lage rund um Wackersdorf ist angespannt. Zu Beginn der 1980er-Jahre findet der Braunkohleabbau, der jahrhundertelang bestimmend für die Identität und Wirtschaft der Region gewesen ist, ein Ende. Rund 1.600 Menschen verlieren damit auch ihre Arbeitsstelle.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Gleichzeitig ist die „Deutsche Gesellschaft für die Wiederaufarbeitung von Kernbrennstoffen“ (DWK) auf der Suche nach einem geeigneten Standort für eine Anlage, in der radioaktive Abfälle aus Atomkraftwerken aufbereitet werden sollen. Es zeichnet sich ab, dass Wackersdorf dafür in Frage kommen könnte. Entschieden unterstützt wird das Projekt auch von der bayerischen Staatsregierung unter Ministerpräsident Franz Josef Strauß (CSU).",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Schon 1981 rumort es in der einheimischen Bevölkerung. Es gehen noch recht vage Gerüchte herum: „Da kommen Fremde und wollen in unserer Heimat was machen.“ Wenngleich das Ganze noch nicht so recht fassbar ist, verursachen die Informationen bei vielen Bürgern vor Ort ein schlechtes Bauchgefühl. Menschen wie Wolfgang werden skeptisch. 1981 gründet sich in Schwandorf eine Bürgerinitiative. Wolfgang hört davon, wird neugierig und nimmt gemeinsam mit einem Nachbarn am zweiten Treffen dieser Vereinigung teil.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Was? Da kommen Fremde und wollen in unserer Heimat was machen? Da müssen wir schon ein bisschen mit hinschauen… Das kann ja nichts Gutes sein, sonst würde es ja woanders hinkommen, oder? Schauen wir halt mal zum Treffen dieser neuen Bürgerinitiative.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "personal+wolfgang"
									}
								]
							}
						},
						{
							highlightObject: '6379EA32-A534-C246-8D96-4BFCE2179CF2',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Teil 1',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								content: [
									{
										"content" : "Finanzierung der gewaltfreien Proteste",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Wolfgang, gelernter Industriekaufmann, wird flugs zum Kassier der Bürgerinitiative Schwandorf ernannt. Zwar gibt er diesen Posten aus Angst, seine Arbeitsstelle zu verlieren, bald darauf offiziell ab und übernimmt stattdessen die Funktion des Kassenprüfers. Inoffiziell jedoch übt er die Tätigkeiten des Kassiers aus. In den folgenden Jahren treibt ihn deshalb die Frage um, wie sich der friedliche Protest gegen die WAA finanzieren lässt.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Puh, ob das jetzt so ne gute Idee war mit dem Kassier… Nicht, dass die Cilly, meine Frau, Recht hat und ich wirklich entlassen werde, wenn ich da in der Öffentlichkeit als Vorstandschaftsmitglied der verrufenen Bürgerinitiative auftrete. Die Arbeit kann ich ja machen, aber offiziell halte ich mich da lieber mal im Hintergrund.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "personal+wolfgang"
									},
									{
										"content" : "Weil man das Projekt auf dem rechtlichen Wege verhindern möchte, wird insbesondere für die Zusammenarbeit mit einem Anwalt Geld gebraucht. Darüber hinaus fallen Kosten für die Öffentlichkeitsarbeit des Vereins sowie für Fachbücher an. Auch Sprit- und Telefonkosten, die privat nicht tragbar wären, sollen möglichst erstattet werden. Die Aktivisten sind daher froh um jede Mark, die in die Kasse der Bürgerinitiative fließt, und schlagen mitunter kreative Wege ein. So werden bei Demonstrationen zum Beispiel selbstgemachte Buttons verkauft – und gehen weg wie warme Semmeln.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Anstecker \"WAA Nein\"",
										"fileCopyright" : "",
										"filename" : "6379EA32-A534-C246-8D96-4BFCE2179CF2",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "object-link"
									},
									{
										"content" : "",
										"fileCopyright" : "Bürgerinitiative Schwandorf",
										"filename" : "waa tour - WAA_Flugblatt Sonntagsspaziergang.jpg",
										"imageAlt" : "Flugblatt der WAA Sonntagsspaziergänge",
										"imageCaption" : "Finanziert werden musste beispielsweise der Druck zehntausender Flugblätter.",
										"type" : "image"
									}
								]
							}
						}, 
						{
							highlightObject: 'F07C89FE-D514-6148-9480-457DD951729D',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Teil 2',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								content: [
									{
										"content" : "Legale Proteste in einer Demokratie",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Im Zuge des Widerstands gegen die WAA befassen sich die Akteure zunehmend mit der Frage, welche Rechte ihnen als Bürger zukommen. Was können sie in einem demokratisch verfassten Staat tun, um ein solches Projekt auszubremsen und zu verhindern?",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Übrigens ist angesichts der finanziellen Situation der Bürgerinitiative auch hier Eigenleistung gefragt. Wolfgang beteiligt sich und steuert Material und Werkzeug bei, das beim Bau seines Hauses übriggeblieben ist.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									}, 
									{
										"content" : "Franziskusmarterl",
										"fileCopyright" : "",
										"filename" : "F07C89FE-D514-6148-9480-457DD951729D",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "object-link"
									},
									{
										"content" : "„Also ich bin fast schon überrascht von mir selber. Widerstand! Das hat ja so gar nicht in mein Weltbild gepasst. Und wie sowas gehen soll, das hab ich als frommer Bürger und braver CSU-Wähler schon gleich dreimal nicht gewusst. Aber in der letzten Zeit haben wir viel dazugelernt. Wir haben eine Stimme, die wir erheben dürfen und können. Mutig und selbstbewusst sind wir geworden!“",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "personal+wolfgang"
									}
								]
							}
						},
						{
							highlightObject: '64AB9AAE-ABA6-E043-94D0-EC5CE4450E7C',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Teil 3',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								content: [
									{
										"content" : "Gesten des Zusammenhalts",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Viele Menschen investieren einen Großteil ihrer Freizeit in die Protestaktionen und werden auf verschiedenste Weise tätig. Frauen sorgen zum Beispiel für die Verpflegung der Demonstrierenden. Einheimische stellen Mahlzeiten für die aus der gesamten Bundesrepublik angereisten WAA-Gegner bereit, die Ende 1985 ein Hüttendorf auf dem WAA-Gelände aufschlagen und das Areal so besetzen.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "",
										"fileCopyright" : "Bürgerinitiative Schwandorf",
										"filename" : "waa tour - Box 5 Hüttendorf Verpflegung.jpg",
										"imageAlt" : "Verpflegung im WAA Hüttendorf",
										"imageCaption" : "Einheimische gewährleisten die Versorgung der Demonstranten im Hüttendorf 1985/1986.",
										"type" : "image"
									},
									{
										"content" : "Außerordentlich engagiert im Widerstand ist Irmgard Gietl. Sie leistet einen ganz besonderen Beitrag: Als leidenschaftliche Strickerin verteilt sie selbstgemachte Socken an die Teilnehmer der Demonstrationen, damit diese keine kalten Füße bekommen. Ein Paar dieser “Widerstandssocken” erhält Wolfgang im Jahr 1985, den nun infolge des monate- und jahrelangen Protestes eine enge Freundschaft mit Irmgard verbindet. Solche kleinen Anerkennungen festigen den Zusammenhalt und sind ein Ansporn zum Weitermachen, wie Wolfgang sagt. Auch Landrat Hans Schuierer wird mit einem Paar Socken beschenkt.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									}, 
									{
										"content" : "Widerstandssocken",
										"fileCopyright" : "",
										"filename" : "64AB9AAE-ABA6-E043-94D0-EC5CE4450E7C",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "object-link"
									},
									{
										"content" : "Ganz schön anstrengend… Jede freie Minute geht drauf für die Aktivitäten der BI. Aber kleine Gesten wie die Widerstandssocken, die Irmgard mir geschenkt hat, erinnern mich daran, dass es sich lohnt. Fühlt sich schon an wie eine große Familie, die da mittlerweile entstanden ist.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "personal+wolfgang"
									}
								]
							}
						},
						{
							highlightObject: '',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Teil 4',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								options: {
									extended: true
								},
								content: [
									{
										"content" : "Portrait: Hans Schuierer",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Hans Schuierer gilt heute als Symbolfigur des friedlichen Widerstandes gegen die WAA. Als damaliger SPD-Landrat, der sich um das wirtschaftliche Wohl des Landkreises sorgte, war er dem viele Arbeitsplätze versprechenden Bauvorhaben gegenüber zunächst nicht abgeneigt. Diese Haltung änderte sich jedoch schlagartig, als er von einem 200 Meter hohen Kamin erfuhr, der auf dem Gelände gebaut werden sollte. „Wozu der Kamin?“, fragte er die Herren von der DWK. „Damit die radioaktiven Schadstoffe möglichst weit verteilt werden“, lautete die Antwort.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Spätestens jetzt wurde Hans Schuierer klar, dass er das Projekt nicht befürworten konnte. Nachdem er eine vonseiten des Landratsamtes notwendige Baugenehmigung verweigert hatte, wurde 1985 ein Gesetz, die „Lex Schuierer“, verabschiedet, wodurch die Mitwirkung des Landratsamtes bei dieser Angelegenheit nicht mehr nötig war.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									}
								]
							}
						},
						{
							highlightObject: '',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Teil 5',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								options: {
									extended: true
								},
								content: [
									{
										"content" : "Verschiedene Formen des Widerstands",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Am Widerstand beteiligen sich die unterschiedlichsten Charaktere. Die Großzahl der WAA-Gegner, darunter auch Wolfgang, war darauf bedacht, dass der Widerstand möglichst friedlich vonstattengeht. Dennoch griffen manche zu härteren Mitteln. Sogenannte Krähenfüße – handtellergroße Gebilde aus Metall mit vier angespitzten Zinken – wurden auf das Baugelände geworfen, um die Reifen der Polizeiautos zu zerstören.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									}
								]
							}
						},
						{
							highlightObject: '732C44A9-308C-454C-9A2F-1C1599CE5A48',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Teil 6',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								content: [
									{
										"content" : "Erinnerung an eine turbulente Zeit",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "1989 wurde das Großprojekt WAA Wackersdorf aus verschiedenen Gründen aufgegeben und der Bau der Anlage eingestellt. Über all die Jahre hat der Widerstand gegen das Großprojekt viele Menschen geprägt. Manche von ihnen haben Erinnerungsstücke an diese Zeit geschaffen. Jahrzehnte später ist Wolfgangs Alltag davon bestimmt, die Erinnerung an das bürgerliche Engagement und den Einsatz für die Demokratie zu hüten und weiterzugeben.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Unser Ziel haben wir erreicht: Die WAA ist nicht gekommen. Über 35 Jahre ist das jetzt her. Damals hab ich auch deswegen alles dokumentiert, um später sagen zu können: Wir haben was getan. Schön wär‘s, wenn wir das Erlebte jetzt auch der jungen Generation vermitteln könnten.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "personal+wolfgang"
									}, 
									{
										"content" : "Bauzaun WAA-Gelände",
										"fileCopyright" : "",
										"filename" : "732C44A9-308C-454C-9A2F-1C1599CE5A48",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "object-link"
									}
								]
							}
						},
						{
							highlightObject: '',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Ende',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'weiter',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								options: {
									extended: true
								},
								content: [
									{
										"content" : "Wackersdorf heute",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Auf dem ehemaligen WAA-Gelände befindet sich heute keine atomare Wiederaufbereitungsanlage, sondern ein Industriepark. Das ist wohl nicht zuletzt Menschen wie Wolfgang zu verdanken, die sich jahrelang mit großem Erfindergeist, mit kreativer Schaffenskraft und Durchhaltevermögen gegen das Vorhaben WAA einsetzten. Von ihrem Engagement und Tatendrang zeugen die hier präsentierten selbstgemachten Gegenstände. Die Akteure entwickelten dabei ein besonderes Selbstbewusstsein, lernten viel über ihre bürgerlichen Rechte in einer Demokratie und auch, nicht zu allem „Ja und Amen“ zu sagen. Diese Erfahrungen prägten sie ihr Leben lang und bestimmen teilweise noch immer einen Großteil ihres Alltags. So ist auch Wolfgang immer noch darauf bedacht, seine Geschichte zu erzählen.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									}
								]
							}
						},
						{
							highlightObject: '',
							message: {
								type: 'Thema: ' + this.list[tour].title + ', Literatur',
								buttons: [
									{
										label: 'zurück',
										color: 'coalgrey',
										icon: ''
									},
									{
										label: 'beenden',
										color: 'coalgrey',
										icon: 'arrow right'
									}
								],
								options: {
									extended: true
								},
								content: [
									{
										"content" : "Mehr zum Thema",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "headline"
									},
									{
										"content" : "Du willst mehr zum Thema erfahren? Dann schau doch mal hier rein:",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "paragraph"
									},
									{
										"content" : "Döring, Alois: Franziskus in Wackersdorf. Christliche Symbolik im politischen Widerstand – religiöse Riten und Formen in ökologischen und friedensethischen Protestbewegungen, in: Brednich, Rolf Wilhelm/Schmitt, Heinz (Hg.): Symbole. Zur Bedeutung der Zeichen in der Kultur, Münster 1997, S. 435-449.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "literature"
									},
									{
										"content" : "Duschinger, Oskar: Hans Schuierer. Symbolfigur des friedlichen Widerstandes gegen die WAA, Regenstauf 2018.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "literature"
									},
									{
										"content" : "Duschinger, Oskar/Zech-Kleber, Bernhard von: Wiederaufbereitungsanlage Wackersdorf, URL: <a href='https://www.historisches-lexikon-bayerns.de/Lexikon/Wiederaufbereitungsanlage_Wackersdorf' target='_blank'>https://www.historisches-lexikon-bayerns.de/Lexikon/Wiederaufbereitungsanlage_Wackersdorf</a>.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "literature"
									},
									{
										"content" : "Stauber, Michaela: Das Franziskusmarterl bei Wackersdorf. 3D-Scan eines Objekts des Widerstands, URL: <a href='https://wissen.freilandmuseum-oberpfalz.de/franziskusmarterl-3d-scan-hand-gemacht/' target='_blank'>https://wissen.freilandmuseum-oberpfalz.de/franziskusmarterl-3d-scan-hand-gemacht/</a>.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "literature"
									},
									{
										"content" : "BR-Beitrag über Irmgard Gietl: <a href='https://www.br.de/br-fernsehen/sendungen/lebenslinien/irmgard-und-die-widerstandssocken-irmgard-gietl-wackersdorf-oberpfalz-ganze-folge102.html' target='_blank'>https://www.br.de/br-fernsehen/sendungen/lebenslinien/irmgard-und-die-widerstandssocken-irmgard-gietl-wackersdorf-oberpfalz-ganze-folge102.html</a>.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "literature"
									},
									{
										"content" : "Zeitzeugeninterviews des Hauses der Bayerischen Geschichte: <a href='https://hdbg.eu/zeitzeugen/themen/waa-wackersdorf/60' target='_blank'>https://hdbg.eu/zeitzeugen/themen/waa-wackersdorf/60</a>.",
										"fileCopyright" : "",
										"filename" : "",
										"imageAlt" : "",
										"imageCaption" : "",
										"type" : "literature"
									}
								]
							}
						}
					]
					return true;
				}
				return false;
			},

			init() {
				this.setEventListeners();
				app.dev && console.log('dev --- cv > tour: initialized');
			}, 

			show(step) {
				if(0 > step || this.steps.length <= step) {return;}
				app.step = step;
				this.setTourMessage(step);

				if(this.fgFilter && this.fgFilterUpdated === false){
					let fgData = app.collectionViewer.proxyfgData.data
					let loadJSONModelsComponent = document.querySelector('a-scene').components['load-json-models'];
					loadJSONModelsComponent.filterFgData(fgData, this.fgFilter.tags, this.fgFilter.productionTags, this.fgFilter.categories, this.fgFilter.topics);
					
					app.collectionViewer.filter.filteredData.tags = [];
					app.collectionViewer.filter.filteredData.productionTags = [];
					app.collectionViewer.filter.filteredData.categories = [];
					app.collectionViewer.filter.filteredData.topics = [];

					for(let e of this.fgFilter.tags){
						app.collectionViewer.filter.filteredData.tags.push(e)
					}
					for(let e of this.fgFilter.productionTags){
						app.collectionViewer.filter.filteredData.productionTags.push(e)
					}
					for(let e of this.fgFilter.categories){
						app.collectionViewer.filter.filteredData.categories.push(e)
					}
					for(let e of this.fgFilter.topics){
						app.collectionViewer.filter.filteredData.topics.push(e)
					}
					app.collectionViewer.filter.updateCheckboxList();

					this.fgFilterUpdated = true;
				}

				setTimeout(() => {
					this.highlightObject(this.steps[step].highlightObject)
				}, 100);

				let url = '?m=cv';
				app.dev ? url += '&dev=true' : '';
				app.stats ? url += '&stats=true' : '';
				url += '&tour=' + app.tour;
				url += '&step=' + app.step;
				window.history.pushState(null, null, url)

				if(step === 0) {
					app.gui.toolbar.toggleToolbar(false);
					app.gui.message.setMessage(this.tourMessage);
					app.gui.message.boxEl.classList.add('first-contact');

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true)
						this.show(step+1);
					}, { signal: app.gui.message.abortController.signal });
					return;
				}

				if(step > 0 && step < this.steps.length) {
					app.gui.toolbar.toggleToolbar(false);
					app.gui.message.setMessage(this.tourMessage);

					app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true);
						this.show(step-1);
					}, { signal: app.gui.message.abortController.signal });

					app.gui.message.buttons.button[1].element.addEventListener('click', (e) => {
						app.gui.message.hideMessage(true);
						if(step >= app.collectionViewer.tour.list[app.tour].steps){
							app.tour = null;
							app.step = null;
							return;
						}
						this.show(step+1);
					}, { signal: app.gui.message.abortController.signal });
					return;
				}
			}, 

			setTourMessage(step) {
				let thisMessageExtended = false;
				let thisMessageSizeControl = true;
				let thisMessageShowClose = true;
				if(Object.keys(this.steps[step].message).includes('showClose')){
					thisMessageShowClose = this.steps[step].message.showClose;
				}
				if(Object.keys(this.steps[step].message).includes('options')){
					if(Object.keys(this.steps[step].message.options).includes('extended')) {
						thisMessageExtended = this.steps[step].message.options.extended;
					}
					if(Object.keys(this.steps[step].message.options).includes('sizeControl')) {
						thisMessageSizeControl = this.steps[step].message.options.sizeControl;
					}
				}
				this.tourMessage = {
					type: this.steps[step].message.type,
					content: app.createHTMLContentFromJSON(this.steps[step].message.content),
					color: 'pearlwhite',
					shadow: 'shadow-coalgrey',
					buttonSetup: [
						{ label: this.steps[step].message.buttons[0].label, color: this.steps[step].message.buttons[0].color, icon: this.steps[step].message.buttons[0].icon }
					], 
					showClose: thisMessageShowClose,
					options: {
						extended: thisMessageExtended, 
						sizeControl: thisMessageSizeControl
					}
				}

				if(this.steps[step].message.buttons[1]) {
					this.tourMessage.buttonSetup = [
						{ label: this.steps[step].message.buttons[0].label, color: this.steps[step].message.buttons[0].color, icon: this.steps[step].message.buttons[0].icon },
						{ label: this.steps[step].message.buttons[1].label, color: this.steps[step].message.buttons[1].color, icon: this.steps[step].message.buttons[1].icon }
					]
				}

				if('options' in this.steps[step].message) {
					('extended' in this.steps[step].message.options) ? this.tourMessage.options.extended = this.steps[step].message.options.extended : '';
					('sizeControl' in this.steps[step].message.options) ? this.tourMessage.options.sizeControl = this.steps[step].message.options.sizeControl : '';
				}
			}, 

			highlightObject(id) {
				if(!app.collectionViewer.components['forcegraph'].ready) {return;}
				let fgElement = document.querySelector('#forcegraph');
				let aCameraElement = document.querySelector('a-camera');
				let fgComponent = document.querySelector('#forcegraph').components['forcegraph'];
				let fgNodes = fgComponent.data.nodes;
				let node = null;

				for(let n of fgNodes) {
					if(n.id === id){
						node = n;
						app.dev && console.log('dev --- tour highlight model: ', node);
					}
				}

				if(!node) { 
					app.collectionViewer.resetView.resetCameraView();
					app.gui.title.set();
					return;
				 }

				aCameraElement.setAttribute('camera-focus-target', {target: node, duration: 1200});
				app.collectionViewer.highlight.onclickHandler(node, false);
				fgElement.setAttribute('highlight', {source: node});
			}, 

			setEventListeners() {
				document.addEventListener('loadingScreen-ready', (event) => {
					if(app.tour){
						if(typeof this.list[app.tour] !== 'object'){ return; }
						const tourFound = this.setSteps(app.tour);
						const stepFound = (typeof this.steps[app.step] === 'object');

						if(tourFound) {
							app.dev && console.log('dev --- tour found: ', app.tour);
							app.dev && console.log('dev --- tour found > step found: ', app.step);
							stepFound ? '' : app.step = 0;
							stepFound ? this.show(app.step) : this.show(0);
						}else{
							app.dev && console.log('dev --- tour not found: ', app.tour);
							app.tour = null;
						}
					}
				});
			}
		},

		createElements() {

			this.sceneEl = document.createElement('a-scene');
			document.body.appendChild(this.sceneEl);
			this.sceneEl.setAttribute('gltf-model', 'dracoDecoderPath: ' + app.filepaths.draco);
			this.sceneEl.setAttribute('load-json-models', 'scaleFactor: 20; normalization: 1');
			this.sceneEl.setAttribute('xr-mode-ui', 'enabled: false');
			this.sceneEl.setAttribute('device-orientation-permission-ui', 'enabled: false');
			this.sceneEl.setAttribute('light', 'defaultLightsEnabled: false');
			this.sceneEl.setAttribute('embedded', '');
			this.sceneEl.setAttribute('renderer', 'logarithmicDepthBuffer: true');
			app.stats && this.sceneEl.setAttribute('stats', '');

			this.cursorEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.cursorEl);
			this.cursorEl.setAttribute('cursor', 'rayOrigin: mouse; mouseCursorStylesEnabled: false;');
			this.cursorEl.setAttribute('raycaster', 'objects: #forcegraph;');
			//app.dev && this.cursorEl.setAttribute('raycaster', 'objects: #forcegraph; showLine: true;');
			this.cursorEl.setAttribute('position', '0 0 -0.01');
			this.cursorEl.setAttribute('id', 'cursor');

			this.cameraEl = document.createElement('a-camera');
			this.sceneEl.appendChild(this.cameraEl);
			this.cameraEl.setAttribute('orbit-controls', 'enabled: true; target: #orbit-target; autoRotate: true');
			this.cameraEl.setAttribute('wasd-controls', 'enabled: false');

			this.ambientLightEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.ambientLightEl);
			this.ambientLightEl.setAttribute('light', 'type: hemisphere; color: #FAF0E6; groundColor: #9B9691; intensity: 2');

			this.directionalLightEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.directionalLightEl); //scene light
			this.directionalLightEl.setAttribute('light', 'type: directional; color: #FAF0E6; intensity: 4');
			this.directionalLightEl.setAttribute('position', '-10 1 10');

			this.directionalLight2El = document.createElement('a-entity');
			this.sceneEl.appendChild(this.directionalLight2El); //scene light 2
			this.directionalLight2El.setAttribute('light', 'type: directional; color: #FAF0E6; intensity: 4');
			this.directionalLight2El.setAttribute('position', '10 -5 -5');

			this.cameraLightEl = document.createElement('a-entity');
			this.cameraEl.appendChild(this.cameraLightEl); //camera light
			this.cameraLightEl.setAttribute('light', 'type: point; color: #FAF0E6; intensity: 10; distance: 150; decay: 0.5');
			this.cameraLightEl.setAttribute('position', '0 0 0');

			this.assetsEl = document.createElement('a-assets');
			this.sceneEl.appendChild(this.assetsEl);
		}, 

		registerComponents() {
			//START A-Frame load-json-objects
			AFRAME.registerComponent('load-json-models', {
					
					schema: { 
						scaleFactor: { default: 1 }, 
						normalization: { default: 1 } 
					},

					init: function () {
						const comp = this;
						this.nodeModelSet = false;
						this.linkMaterialSet = false;
						this.scaleFactor = this.data.scaleFactor;
						this.normalization = this.data.normalization;
						this.cameraPos = new THREE.Vector3();

						this.setEventlisteners();
						this.createCategoryAndTagModels();
						this.createForceGraph();
						this.loadJSONModels();
					},

					update: function () {
						this.fgComp = document.querySelector('#forcegraph').getAttribute('forcegraph');
						this.scaleFactor = this.data.scaleFactor;
						this.normalization = this.data.normalization;
					},

					tick: function () {
						if(this.nodeModelSet && this.fgComp){
							for(let node of this.fgComp.nodes){
								if((node.type === 'node-category' || node.type === 'node-topic') && node.__threeObj) {
									this.el.sceneEl.camera.getWorldPosition(this.cameraPos);
									node.__threeObj.lookAt(this.cameraPos);
									this.positionObjectNames(node);
								}
							}
						}
					},

					remove: function () {},

					pause: function () {},

					play: function () {}, 

					setEventlisteners: function() {
						const comp = this;

						//listen for filter-updated event
						this.el.sceneEl.addEventListener('filter-updated', (e) => {
							comp.assignModelsToNodes();	
							comp.assignMaterialToLinks();
							comp.normalizeScale(this.scaleFactor, this.normalization);
							comp.setObjectNames(comp.fgComp.nodes);
							document.querySelector('#forcegraph').setAttribute('highlight', {noUpdate: false});
							let event = new Event('load-json-models-ready');
							document.querySelector('a-scene').dispatchEvent(event);
							app.dev && console.log('event --- load-json-models-ready')
						});

						//listen for JSON-models-loaded event
						this.el.sceneEl.addEventListener('JSON-models-loaded', (e) => {
							if(comp.json) {
								//prepare JSON data for forcegraph
								comp.fgData = comp.getDataFromJSON(comp.json);
								//parse forcegraph data to app.collectionViewer
								app.collectionViewer.proxyfgData.data = comp.fgData;
								//filter forcegraph data for default view
								comp.filterFgData(comp.fgData, comp.fgData.taglist, [], comp.fgData.categorylist, comp.fgData.topiclist); //default: all tags, no production tags, all categories, all topics
							}
						}, {once: true});
					},

					createCategoryAndTagModels: function() {
						this.imgCategory = document.createElement('img');
						this.imgCategory.id = 'icon-category';
						this.imgCategory.crossOrigin = 'anonymous';
						this.imgCategory.src = app.assets.cv.marker['category'].src;
						this.el.sceneEl.querySelector('a-assets').appendChild(this.imgCategory);

						this.imgTopic = document.createElement('img');
						this.imgTopic.id = 'icon-topic';
						this.imgTopic.crossOrigin = 'anonymous';
						this.imgTopic.src = app.assets.cv.marker['topic'].src;
						this.el.sceneEl.querySelector('a-assets').appendChild(this.imgTopic);

						//create category model 
						this.categoryModelEl = document.createElement('a-entity');
						this.categoryModelEl.setAttribute('id', 'category-model');
						this.categoryModelEl.setAttribute('geometry', 'primitive: circle; radius: 4');
						this.categoryModelEl.setAttribute('material', 'src: #icon-category');
						this.categoryModelEl.setAttribute('visible', false);
						this.el.sceneEl.querySelector('a-assets').appendChild(this.categoryModelEl);

						//create topic model 
						this.topicModelEl = document.createElement('a-entity');
						this.topicModelEl.setAttribute('id', 'topic-model');
						this.topicModelEl.setAttribute('geometry', 'primitive: circle; radius: 3');
						this.topicModelEl.setAttribute('material', 'src: #icon-topic');
						this.topicModelEl.setAttribute('visible', false);
						this.el.sceneEl.querySelector('a-assets').appendChild(this.topicModelEl);

						//create link category model 
						this.linkCategoryModelEl = document.createElement('a-entity');
						this.linkCategoryModelEl.setAttribute('id', 'link-category-model');
						this.linkCategoryModelEl.setAttribute('geometry', 'primitive: sphere; radius: 1');			
						this.linkCategoryModelEl.setAttribute('material', 'color: #46AAC8; shader: flat; opacity: 0.4, transparent: true');
						this.linkCategoryModelEl.setAttribute('visible', false);
						this.el.sceneEl.querySelector('a-assets').appendChild(this.linkCategoryModelEl);

						//create link topic model 
						this.linkTopicModelEl = document.createElement('a-entity');
						this.linkTopicModelEl.setAttribute('id', 'link-topic-model');
						this.linkTopicModelEl.setAttribute('geometry', 'primitive: sphere; radius: 1');			
						this.linkTopicModelEl.setAttribute('material', 'color: #FF7850; shader: flat; opacity: 0.4, transparent: true');
						this.linkTopicModelEl.setAttribute('visible', false);
						this.el.sceneEl.querySelector('a-assets').appendChild(this.linkTopicModelEl);

						//create link tag model 
						this.linkTagModelEl = document.createElement('a-entity');
						this.linkTagModelEl.setAttribute('id', 'link-tag-model');
						this.linkTagModelEl.setAttribute('geometry', 'primitive: sphere; radius: 1');			
						this.linkTagModelEl.setAttribute('material', 'color: #FFC800; shader: flat; opacity: 0.4, transparent: true');
						this.linkTagModelEl.setAttribute('visible', false);
						this.el.sceneEl.querySelector('a-assets').appendChild(this.linkTagModelEl);

						//create production link tag model 
						this.linkProductionTagModelEl = document.createElement('a-entity');
						this.linkProductionTagModelEl.setAttribute('id', 'link-production-tag-model');
						this.linkProductionTagModelEl.setAttribute('geometry', 'primitive: sphere; radius: 1');			
						this.linkProductionTagModelEl.setAttribute('material', 'color: #9B9691; shader: flat; opacity: 0.4, transparent: true');
						this.linkProductionTagModelEl.setAttribute('visible', false);
						this.el.sceneEl.querySelector('a-assets').appendChild(this.linkProductionTagModelEl);
					},

					loadJSONModels: function () {
						const fgData = '';
						const fileJSON = app.filepaths.files + app.filepaths.collectionJSON;

						//fetch json data from file
						const objectsJSON = fetch(fileJSON)
							.then((response) => response.json())
							.then((json) => {
								this.json = json;
								//load models to scene
								const scene = document.querySelector('a-scene').object3D;
								for(let object of json.objects){
									if(object.quality512){
										app.gltfLoader.load(app.filepaths.files + object.quality512, (gltf) => {
											gltf.scene.name = object.primaryKey;
											gltf.scene.altName = object.name;
											gltf.scene.visible = false;
											scene.add( gltf.scene );
										}, (xhr) =>{ 
											app.dev && console.log( ( 'dev --- load model: ' + object.name + ' - ' + xhr.loaded / xhr.total * 100 ) + '% loaded' );
										}, (error) => {		
											console.log( 'An error happened: ', error );
										});
									}
								}

								//event dispatcher for JSON-models-loaded event
								THREE.DefaultLoadingManager.onLoad = function () {
									let event = new Event('JSON-models-loaded');
									document.querySelector('a-scene').dispatchEvent(event);
									app.dev && console.log('event --- JSON-models-loaded')
								};
							});
					},

					getDataFromJSON: function (json) {
						if(!this.json) {return;};
						const fgData={ 'nodes': [], 'links': [], 'categorylist': [], 'topiclist': [], 'taglist': [], 'productionTaglist': [], 'releaseDate': '' };

						function filterEmptyTag(tag){
							return tag !== '';
						}

						function containsObject(obj, list) {
							if (list == null) { return false; };
							for(let item of list){
								if (item === obj) {
									return true;
								}
							}
							return false;
						}

						function filterDoubles(link) {
							return link.double == false || link.type == 'link-category' || link.type == 'link-topic';
						}

						fgData.releaseDate = json.releaseDate;
					
						//create nodes from categories 
						for(let category of json.categorylist){
							if(category === '') { continue; }
							if(category.title === '') { continue; }
							if(category.type === '') { continue; }
							if(category.type === 'Merkmal') { continue; }
							const newNode = {}
							newNode.id = category.title;
							newNode.categories = [category.title];
							newNode.topics = [];
							newNode.name = category.title;
							newNode.contents = category.contents;
							newNode.type = 'node-category';
							newNode.tags = [];
							newNode.productionTags = [];
							newNode.size = 0;
							newNode.model = {material: {visible: false}};
							newNode.visibility = 'visible';
							fgData.nodes.push(newNode);
						}

						//create nodes from topics 
						for(let topic of json.categorylist){
							if(topic === '') { continue; }
							if(topic.title === '') { continue; }
							if(topic.type === '') { continue; }
							if(topic.type === 'Kategorie') { continue; }
							const newNode = {}
							newNode.id = topic.title;
							newNode.categories = [];
							newNode.topics = [topic.title];
							newNode.name = topic.title;
							newNode.contents = topic.contents;
							newNode.type = 'node-topic';
							newNode.tags = [];
							newNode.productionTags = [];
							newNode.size = 0;
							newNode.model = {material: {visible: false}};
							newNode.visibility = 'visible';
							fgData.nodes.push(newNode);
						}
					
						//create nodes from objects
						for(let object of json.objects){
							const newNode = {}
							newNode.id = object.primaryKey;
							let filteredCategoryList = Array.from(json.categorylist.filter((c) => c.type === "Kategorie"), (category) => category.title);
							let filteredTopicList = Array.from(json.categorylist.filter((c) => c.type === "Merkmal"), (category) => category.title);
							newNode.categories = object.categories.filter((c) => filteredCategoryList.includes(c));
							newNode.topics = object.categories.filter((c) => filteredTopicList.includes(c));
							newNode.name = object.name;
							newNode.contents = [{
												"content" : object.name,
												"fileCopyright" : "",
												"filename" : "",
												"imageAlt" : "",
												"imageCaption" : "",
												"type" : "headline"
							},{
												"content" : object.description,
												"fileCopyright" : "",
												"filename" : "",
												"imageAlt" : "",
												"imageCaption" : "",
												"type" : "paragraph"
							}];
							newNode.type = 'node-object';
							newNode.tags = object.tags.filter(filterEmptyTag);
							newNode.productionTags = object.productionTags.filter(filterEmptyTag);
							newNode.size = 100;
							newNode.model = {material: {visible: false}};
							newNode.visibility = 'visible';
							fgData.nodes.push(newNode);
						}
					
						//create links for categories
						for(let category of json.categorylist){
							if(category.type === 'Merkmal') { continue; }
							for(let object of json.objects){
								if(containsObject(category.title, object.categories)){
									const newLink = {};
									newLink.source = category.title; 
									newLink.target = object.primaryKey; 
									newLink.name = category.title;
									newLink.type = 'link-category';
									newLink.material = '';
									newLink.visibility = 'visible';
									fgData.links.push(newLink);
								}
							}
						}

						//create links for topics
						for(let topic of json.categorylist){
							if(topic.type === 'Kategorie') { continue; }
							for(let object of json.objects){
								if(containsObject(topic.title, object.categories)){
									const newLink = {};
									newLink.source = topic.title; 
									newLink.target = object.primaryKey; 
									newLink.name = topic.title;
									newLink.type = 'link-topic';
									newLink.material = '';
									newLink.visibility = 'visible';
									fgData.links.push(newLink);
								}
							}
						}
					
						//create links for tags
						for(let objectSource of json.objects){
							if (objectSource.tags == null) { return false; }
							for(let tag of objectSource.tags){
								for(let objectTarget of json.objects){
									if(objectSource !== objectTarget && tag !== '' && containsObject(tag, objectTarget.tags)) {
										const newLink = {}; 
										newLink.source = objectSource.primaryKey; 
										newLink.target = objectTarget.primaryKey; 
										newLink.name = tag;
										newLink.type = 'link-tag';
										newLink.material = '';
										newLink.visibility = 'visible';
										fgData.links.push(newLink);
									}
								}
							}
						}

						//create links for production tags
						for(let objectSource of json.objects){
							if (objectSource.productionTags == null) { return false; }
							for(let productionTag of objectSource.productionTags){
								for(let objectTarget of json.objects){
									if(objectSource !== objectTarget && productionTag !== '' && containsObject(productionTag, objectTarget.productionTags)) {
										const newLink = {}; 
										newLink.source = objectSource.primaryKey; 
										newLink.target = objectTarget.primaryKey; 
										newLink.name = productionTag;
										newLink.type = 'link-productionTag';
										newLink.material = '';
										newLink.visibility = 'hidden';
										fgData.links.push(newLink);
									}
								}
							}
						}
						
						//mark doubled link
						for(let linkA of fgData.links){
							let sourceA = linkA.source;
							let targetA = linkA.target;
							for(let linkB of fgData.links){
								let sourceB = linkB.source;
								let targetB = linkB.target;
								if(sourceA === targetB && targetA === sourceB && linkA.type === linkB.type){
									linkA.double = true;
									linkB.double = false;
								}
							}
						}

						//remove marked doubled links
						fgData.links = fgData.links.filter(filterDoubles);

						for(let category of json.categorylist){
							if(category.title === '') { continue; }
							if(category.type === '') { continue; }
							if(category.type === 'Merkmal') { continue; }
							fgData.categorylist.push(category.title);
						}

						for(let topic of json.categorylist){
							if(topic.title === '') { continue; }
							if(topic.type === '') { continue; }
							if(topic.type === 'Kategorie') { continue; }
							fgData.topiclist.push(topic.title);
						}

						fgData.taglist = json.taglist;
						fgData.productionTaglist = json.productionTaglist;

						return fgData;
					},

					filterFgData: function(fgData, tags = [], productionTags = [], categories = [], topics = []) {
						let filteredFgData = { 'nodes': [], 'links': [] };

						app.dev && console.log('dev --- forcegraph filter fgData: ', fgData);
						app.dev && console.log('dev --- forcegraph filter Data tags: ', tags);
						app.dev && console.log('dev --- forcegraph filter Data production tags: ', productionTags);
						app.dev && console.log('dev --- forcegraph filter Data categories: ', categories);
						app.dev && console.log('dev --- forcegraph filter Data topics: ', topics);

						for( let link of fgData.links ){
							if(link.type === 'link-tag' && tags.includes(link.name)){
								filteredFgData.links.push(link);
							}
							if(link.type === 'link-productionTag' && productionTags.includes(link.name)){
								filteredFgData.links.push(link);
							}
							if(link.type === 'link-category' && categories.includes(link.name)){
								filteredFgData.links.push(link);
							}
							if(link.type === 'link-topic' && topics.includes(link.name)){
								filteredFgData.links.push(link);
							}
						}

						for( let node of fgData.nodes ){
							let newNode = null;
							let filteredTags = node.tags.filter(value => tags.includes(value));
							let filteredProductionTags = node.productionTags.filter(value => productionTags.includes(value));
							let filteredCategories = node.categories.filter(value => categories.includes(value));
							let filteredTopics = node.topics.filter(value => topics.includes(value));
							node.visibility = 'hidden';
							if(typeof filteredTags !== 'undefined' && filteredTags.length > 0){
								newNode = node;
							}
							if(typeof filteredProductionTags !== 'undefined' && filteredProductionTags.length > 0){
								newNode = node;
							}
							if(typeof filteredCategories !== 'undefined' && filteredCategories.length > 0){
								newNode = node;
							}
							if(typeof filteredTopics !== 'undefined' && filteredTopics.length > 0){
								newNode = node;
							}
							if(newNode){
								newNode.visibility = 'visible';
								filteredFgData.nodes.push(newNode);
							}
						}

						filteredFgData.nodes = JSON.stringify(filteredFgData.nodes);
						filteredFgData.links = JSON.stringify(filteredFgData.links);

						document.querySelector('#forcegraph').setAttribute('forcegraph', {
							nodes: filteredFgData.nodes,
							links: filteredFgData.links
						});

						let event = new Event('filter-updated');
						document.querySelector('a-scene').dispatchEvent(event);
						app.dev && console.log('event --- filter-updated')
					},

					createForceGraph: function() {
						//create a-entity forcegraph
						let forcegraphEntity = document.createElement('a-entity');
						this.el.sceneEl.appendChild(forcegraphEntity);
						forcegraphEntity.setAttribute('id', 'forcegraph');
						forcegraphEntity.setAttribute('highlight', { noUpdate: true });
						forcegraphEntity.setAttribute('forcegraph', {
							forceEngine: 'd3', //'d3' (default) or 'ngraph'
							warmupTicks: 15000,
							cooldownTicks: 0,
							cooldownTime: 0,
							onEngineStop: e => {
								let event = new Event('forcegraph-ready');
								document.querySelector('a-scene').dispatchEvent(event);
								app.dev && console.log('event --- forcegraph-ready')
							},
							d3AlphaMin: 0.5,
							d3AlphaDecay: 0.028,
							d3VelocityDecay: 0.6,
							linkWidth: 0.6,
							linkCurvature: 0.15,
							linkThreeObjectExtend: false,
							nodeRelSize: 1,
							nodeVal: node => { return node.size },
							nodeThreeObject: node => {
								node.model.material.visible = false;
							},
							nodeThreeObjectExtend: true,
							nodeOpacity: 0,
							onLinkHover: link => { 
								//app.dev && console.log('dev --- onLinkHover: ', link);
								app.collectionViewer.tooltip.mouseoverHandler(link);
							},
							onLinkClick: link => { 
								//app.dev && console.log('dev --- onLinkClick: ', link);
							},
							onNodeHover: node => { 
								//app.dev && console.log('dev --- onNodeHover > node: ', node);
								app.collectionViewer.tooltip.mouseoverHandler(node);
							},
							onNodeClick: node => { 
								app.dev && console.log('dev --- onNodeClick: ', node);
								if(node.visibility === 'hidden'){ return; };
								if(document.querySelector('a-camera').components['orbit-controls'].hasUserInput) {return;}
								if(node.id === app.collectionViewer.highlight.focusedNode) {
									if(node.type === 'node-object'){
										window.location.href = '?m=mv&model=' + node.id;
										return;
									}
								}								
								document.querySelector('a-camera').setAttribute('camera-focus-target', {target: node, duration: 1200});
								app.collectionViewer.highlight.onclickHandler(node);
								forcegraphEntity.setAttribute('highlight', {source: node});
							}
						});
					},

					assignModelsToNodes: function () {
						const scene = document.querySelector('a-scene').object3D;
						if(!this.fgComp.nodes){ return; }
						const fgComp = this.fgComp;
						this.categoryArray = [];

						const categoryModel = this.categoryModelEl.object3D;
						const topicModel = this.topicModelEl.object3D;

						//set JSON-model or category-model for each node
						for(let node of fgComp.nodes){
							if(node.id === ''){continue;}
							for (let child of scene.children){
								if(child.name === ''){continue;}
								//set model for objects
								if(child.name === node.id && node.type === 'node-object'){
									node.model = child.children[0].clone();
								}
								//set model for categories
								if(node.type === 'node-category'){
									node.model = categoryModel.children[0].clone();
									node.model.material = new THREE.MeshBasicMaterial();
									node.model.material.copy(categoryModel.children[0].material);
								}
								//set model for topics
								if(node.type === 'node-topic'){
									node.model = topicModel.children[0].clone();
									node.model.material = new THREE.MeshBasicMaterial();
									node.model.material.copy(topicModel.children[0].material);
								}
								//skip if no model was set
								if(!node.model) {continue;}
							}
						}

						document.querySelector('#forcegraph').setAttribute('forcegraph', {
							nodeThreeObject: node => { return node.model }
						});

						this.nodeModelSet = true;
					}, 

					assignMaterialToLinks: function () {
						let scene = document.querySelector('a-scene').object3D;
						if(!this.fgComp.links){ return; }
						const fgComp = this.fgComp;

						let categoryMaterial = this.linkCategoryModelEl.object3D.children[0].material;
						let topicMaterial = this.linkTopicModelEl.object3D.children[0].material;
						let tagMaterial = this.linkTagModelEl.object3D.children[0].material;
						let productionTagMaterial = this.linkProductionTagModelEl.object3D.children[0].material;

						//set tag-material or category-material for each link
						for(let link of fgComp.links){
							link.material = new THREE.MeshBasicMaterial();
							if(link.type === 'link-category'){
								link.material.copy(categoryMaterial);
								link.curvature = 0.15;
								link.width = 0.8;
							}else if(link.type === 'link-tag'){
								link.material.copy(tagMaterial);
								link.curvature = 0.15;
								link.width = 0.4;
							}else if(link.type === 'link-productionTag'){
								link.material.copy(productionTagMaterial);
								link.curvature = 0.25;
								link.width = 0.4;
							}else if(link.type === 'link-topic'){
								link.material.copy(topicMaterial);
								link.curvature = 0.15;
								link.width = 0.8;
							}
						}

						document.querySelector('#forcegraph').setAttribute('forcegraph', {
							linkCurvature: link => { return link.curvature },
							linkWidth: link => { return link.width },
							linkMaterial: link => { return link.material }
						});

						this.linkMaterialSet = true;
					},

					normalizeScale: function(scaleFactor, normalization) {
						if(typeof scaleFactor !== 'number'){
							app.dev && console.log('dev --- normalizeScale error! > scaleFactor is not a Number! Setting factor to 1. Old value: ', scaleFactor);
							scaleFactor = 1;
						}
						if(typeof normalization !== 'number'){
							app.dev && console.log('dev --- normalizeScale error! > normalization is not a Number! Setting factor to 0. Old value: ', normalization);
							normalization = 0;
						}

						//normalization must range from 0 to 1
						if(normalization > 1){
							normalization = 1;
						}else if( normalization < 0) {
							normalization = 0;
						}

						const mapToRange = (number, [inputMinRange, inputMaxRange], [outputMinRange, outputMaxRange]) => {
							return (number - inputMinRange) / (inputMaxRange - inputMinRange) * (outputMaxRange - outputMinRange) + outputMinRange;
						}

						if(!this.fgComp.nodes){ return; }
						const fgComp = this.fgComp;

						//app.dev && console.log(`dev --- normalizeScale > fgComp.nodes: \n`, fgComp.nodes);

						let sizeLog = {
							mean: 0,
							min: Infinity, 
							minObject: '',
							max: 0, 
							maxObject: '', 
							scaleList: []
						}

						//find mean, max and min sizes of every non category model bounding box
						for(let node of fgComp.nodes){
							if(node.type === 'node-category' || node.type === 'node-topic') { continue; };
							//app.dev && console.log(`dev --- normalizeScale > node: \n`, node);							

							node.model.scale.set(1, 1, 1);
							node.boundingBox = new THREE.Box3();
							node.boundingBox.size = new THREE.Vector3();
							node.boundingBox.setFromObject(node.model).getSize(node.boundingBox.size);

							//find highest value of x, y, z in bounding box of object
							node.boundingBox.size.max = node.boundingBox.size.x;
							node.boundingBox.size.y > node.boundingBox.size.max ? node.boundingBox.size.max = node.boundingBox.size.y : '';
							node.boundingBox.size.z > node.boundingBox.size.max ? node.boundingBox.size.max = node.boundingBox.size.z : '';
							sizeLog.mean += node.boundingBox.size.max;
							if(sizeLog.min > node.boundingBox.size.max) {
								sizeLog.min = node.boundingBox.size.max;
								sizeLog.minObject = node;
							}
							if(sizeLog.max < node.boundingBox.size.max) {
								sizeLog.max = node.boundingBox.size.max;
								sizeLog.maxObject = node;
							}
						}
						sizeLog.mean = sizeLog.mean / fgComp.nodes.length;

						//calculate normalized scale for every node and set node size
						for(let node of fgComp.nodes){
							if(node.type === 'node-category' || node.type === 'node-topic') { 
								node.size = sizeLog.mean * 10 * scaleFactor;
								continue;
							};
							const sizeDeviation = sizeLog.mean - node.boundingBox.size.max;
							const maxSizeDeviation = sizeLog.mean - sizeLog.max;
							const minSizeDeviation = sizeLog.mean - sizeLog.min;
							const sizeFactor = 1 + mapToRange(sizeDeviation, [minSizeDeviation, maxSizeDeviation], [1, 0]); 
							let normFactor = normalization * (0.25 + Math.pow(sizeFactor, 4) / 10);

							const threshold = 1.95; //boost size of small objects
							if(sizeFactor > threshold) {
								let boostFactor = 1 + sizeFactor - threshold;
								normFactor = normFactor * (Math.pow(boostFactor, 4)*2);
							} 
							const normalizedScale = scaleFactor * (((1 + normFactor) - normalization));
							sizeLog.scaleList.push({'name': node.name, 'sizeFactor': sizeFactor,'normalizedScale': normalizedScale, 'node': node})
							//app.dev && console.log(`dev --- normalizeScale node: ${node.name} > \nnormalization: ${normalization}, \nsizeFactor: ${sizeFactor}, \nnormFactor: ${normFactor}, \nscaleFactor: ${scaleFactor}, \nnormalizedScale: ${normalizedScale}`);
							node.model.scale.set(normalizedScale, normalizedScale, normalizedScale);
						}

						app.dev && console.log(`dev --- normalizeScale > \nsizeLog: `, sizeLog);
					}, 

					setObjectNames(nodes){
						if(typeof nodes === 'undefined'){ return; };

						let container = document.querySelector('.cv-object-names-container');

						if(!container) {
							container = document.createElement('div');
							container.className = 'cv-object-names-container';
							document.body.appendChild(container);
						}

						container.innerHTML = '';

						for(let node of nodes){
							if(node.type !== 'node-category' && node.type !== 'node-topic'){ return; }
							let objectNameEl = document.createElement('div');
							objectNameEl.setAttribute('id', node.id);
							objectNameEl.className = 'object-name hide';
							container.appendChild(objectNameEl);
							objectNameEl.appendChild(document.createTextNode(node.name))
							node.type === 'node-category' ? objectNameEl.classList.add('text-' + app.collectionViewer.elementColor.category) : objectNameEl.classList.add('text-' + app.collectionViewer.elementColor.topic);
						}
					},

					positionObjectNames(node){

						const mapToRange = (number, [inputMinRange, inputMaxRange], [outputMinRange, outputMaxRange]) => {
							let output = (number - inputMinRange) / (inputMaxRange - inputMinRange) * (outputMaxRange - outputMinRange) + outputMinRange;
							output > 1 ? output = 1 : '';
							output < 0 ? output = 0 : '';
							return output;
						}

						const container = document.querySelector('.cv-object-names-container');
						const camera = document.querySelector('a-camera').object3D;
						const threeCamera = document.querySelector('a-camera').components['camera'].camera;
						if(!container || !threeCamera) { return; }

						for(let element of container.children){
							let elementId = element.getAttribute('id');
							if(elementId === node.id){
								element.classList.add('hide');
								//app.dev && console.log('dev --- positionObjectNames > node.visibility: ', node.visibility)
								if(node.visibility === 'hidden'){ continue; };

								const nodeObject = node.__threeObj;
								const width = window.innerWidth;
								const height = window.innerHeight;
								const widthHalf = width / 2;
								const heightHalf = height / 2;

								const vector = new THREE.Vector3();
								vector.copy(nodeObject.position);
								vector.project(threeCamera);

								vector.x = ( vector.x * widthHalf ) + widthHalf;
								vector.y = - ( vector.y * heightHalf ) + heightHalf;

								element.style.top = vector.y + 'px';
								element.style.left = vector.x + 'px';

								const meshDistance = camera.position.distanceTo(nodeObject.position);
								const opacity = mapToRange(meshDistance, [250,150], [0,1]);
								element.style.opacity = opacity;
								element.classList.remove('hide');

								const scale = mapToRange(opacity, [0, 1], [0.6, 1]);
								element.style.scale = scale;
							}
						}
					}
			});
			//END A-Frame load-json-objects



			//START camera-focus-target
			AFRAME.registerComponent('camera-focus-target', {

				schema: {
					target: { default: '' },
					duration: { default: 1500 }
				},

				init: function () {
					this.cameraEl = document.querySelector('a-camera');
					this.camera = this.cameraEl.object3D;

					this.orbitTargetEl = document.querySelector('#orbit-target');
					this.orbitTarget = document.querySelector('#orbit-target').object3D;
				},

				update: function () {
					//app.dev && console.log('dev --- camera-focus-target: ', this.data.target);
					this.moveOrbitTarget();
					let event = new Event('camera-focus-target-ready');
					document.querySelector('a-scene').dispatchEvent(event);
					app.dev && console.log('event --- lcamera-focus-target-ready')
				},

				tick: function () {},

				remove: function () {},

				pause: function () {},

				play: function () {},

				moveOrbitTarget: function() {
					if(!this.data.target){
						this.target = document.querySelector('#forcegraph').object3D;
						app.dev && console.log('dev --- camera-focus-target > target > forcegraph: ', this.target);
					}else if(this.data.target.type === 'link-tag' || this.data.target.type === 'link-productionTag'){
						this.target = {};
						this.target.position = this.data.target.__curve.v1;
						app.dev && console.log('dev --- camera-focus-target > target > link: ', this.target);
					}else{
						this.target = this.data.target.__threeObj;
						app.dev && console.log('dev --- camera-focus-target > target > object: ', this.target);
					}

					let newCameraPosition = new THREE.Vector3(); 
					this.target.getWorldPosition(newCameraPosition);
					app.dev && console.log('dev --- camera-focus-target position: ', newCameraPosition);

					//animation orbitTarget move to target x
					this.orbitTargetEl.setAttribute('animation__mot-x', {
						'property': 'object3D.position.x',
						'from': this.orbitTarget.position.x,
						'to': newCameraPosition.x,
						'dur': this.data.duration, 
						'easing': 'easeInOutQuad',
						'startEvent': 'anim-orbit-target'
					});	

					//animation orbitTarget move to target y
					this.orbitTargetEl.setAttribute('animation__mot-y', {
						'property': 'object3D.position.y',
						'from': this.orbitTarget.position.y,
						'to': newCameraPosition.y,
						'dur': this.data.duration, 
						'easing': 'easeInOutQuad',
						'startEvent': 'anim-orbit-target'
					});	

					//animation orbitTarget move to target z
					this.orbitTargetEl.setAttribute('animation__mot-z', {
						'property': 'object3D.position.z',
						'from': this.orbitTarget.position.z,
						'to': newCameraPosition.z,
						'dur': this.data.duration, 
						'easing': 'easeInOutQuad',
						'startEvent': 'anim-orbit-target'
					});	
					
					this.orbitTargetEl.emit('anim-orbit-target', null, false);
				}, 
			});
			//END camera-focus-target



			//START highlight
			AFRAME.registerComponent('highlight', {

				schema: {
					source: { default: '' }, 
					highestDistance: { default: 0 }, 
					noUpdate: { default: null }
				}, 

				init: function () {
					this.cameraEl = document.querySelector('a-camera');
					this.camera = document.querySelector('a-camera').object3D;
					this.data.highestDistance = {
						max: 110,
						value: 0
					}

					this.containerEl = document.createElement('div');
					document.body.appendChild(this.containerEl);
					this.containerEl.className = 'cv-highlight-marker-container';

					this.highlightMarker = {};
					this.highlightMarker.element = document.createElement('div');
					this.containerEl.appendChild(this.highlightMarker.element);
					this.highlightMarker.element.className = 'cv-highlight-marker';
					this.highlightMarker.element.setAttribute('id', 'cv-highlight-marker');

					this.highlightMarker.bracket = {};

					this.highlightMarker.bracket.upper = {};
					this.highlightMarker.bracket.upper.element = document.createElement('div');
					this.highlightMarker.element.appendChild(this.highlightMarker.bracket.upper.element);
					this.highlightMarker.bracket.upper.element.className = 'bracket upper';

					this.highlightMarker.bracket.lower = {};
					this.highlightMarker.bracket.lower.element = document.createElement('div');
					this.highlightMarker.element.appendChild(this.highlightMarker.bracket.lower.element);
					this.highlightMarker.bracket.lower.element.className = 'bracket lower';
				},

				update: function () {
					let source = this.data.source;
					this.fgComp = this.el.components.forcegraph.data;

					if(this.data.noUpdate){
						return;
					};
					this.data.noUpdate = null;

					let newDistance = 0;
					let newDesiredCameraPitch = 0;
					let newDesiredDistance = 0
					let newTarget = '';
					let newHighestDistance = 0;

					if(!source) {
						this.resetHighlight();
						newTarget = document.querySelector('#forcegraph').object3D.position;
						newHighestDistance = this.data.highestDistance.max;
						newDesiredCameraPitch = -5;
					}

					source ? app.collectionViewer.highlight.focusedNode = source.id : app.collectionViewer.highlight.focusedNode = null;

					if(source.type === 'node-object' || source.type === 'node-category' || source.type === 'node-topic' ) {
						this.highlightModel(source);
						newTarget = this.data.source.__threeObj.position;
						newHighestDistance = this.data.highestDistance.value;
						newDesiredCameraPitch = -10;
					}

					if(source.type === 'link-tag' || source.type === 'link-category' || source.type === 'link-topic' || source.type === 'link-productionTag' ) {
						return;
					}

					newDistance = this.camera.position.distanceTo(newTarget);

					newDesiredDistance = newHighestDistance * (2 * (newHighestDistance / window.innerWidth)) + newHighestDistance;

					const distanceLog = {
						newDistance: newDistance,
						newDesiredDistance: newDesiredDistance,
						highestDistance: newHighestDistance,
						screenOrientation: screen.orientation.type, 
						windowInnerWidth: window.innerWidth
					}

					app.dev && console.log('dev -- highlight > distanceLog: ', distanceLog)

					this.cameraEl.setAttribute('orbit-controls', { 
						autoRotate: false, 
						distance: newDistance, 
						desiredDistance: newDesiredDistance, 
						activeRotX: true, 
						desiredRotX: -5, 
						desiredCameraPitch: newDesiredCameraPitch,
						forceUpdate: true 
					});

					this.data.highestDistance.value = 0;

					let event = new Event('highlight-ready');
					document.querySelector('a-scene').dispatchEvent(event);
					app.dev && console.log('event --- highlight-ready')
				},

				tick: function () {
					if(this.data.source){

						let targetPosition = new THREE.Vector3();

						let perspectiveCamera = this.camera.children[1];

						perspectiveCamera.updateMatrixWorld();

						if(this.data.source.type === 'node-object' || this.data.source.type === 'node-category' || this.data.source.type === 'node-topic' ) {
							targetPosition.setFromMatrixPosition(this.data.source.__threeObj.matrixWorld);
							targetPosition.project(perspectiveCamera)
						}
						if( this.data.source.type === 'link-tag' || this.data.source.type === 'link-productionTag') {
							targetPosition.set(this.data.source.__curve.v1.x, this.data.source.__curve.v1.y, this.data.source.__curve.v1.z);
							targetPosition.project(perspectiveCamera)
						}
						if( this.data.source.type === 'link-category' || this.data.source.type === 'link-topic') {
							targetPosition.setFromMatrixPosition(this.data.source.source.__threeObj.matrixWorld);
							targetPosition.project(perspectiveCamera)
						}
					}
					this.positionHighlightMarker()
				},

				remove: function () {},

				pause: function () {},

				play: function () {},

				highlightLinks: function (sourceLink) {
					let fgComp = this.fgComp;

					for(let link of fgComp.links){
						if (link.material) {
							if(link.name === sourceLink.name){
								link.visibility = 'visible';
								link.material.opacity = 1;
								link.material.visible = true;
							}else{
								link.visibility = 'hidden';
								link.material.visible = false;
							}
						}
					}

					for(let node of fgComp.nodes){
						if (node.model.material) {
							if(node.tags.includes(sourceLink.name) || node.productionTags.includes(sourceLink.name)){
								node.visibility = 'visible';
								node.model.material.opacity = 1;
								node.model.material.visible = true;
								node.__threeObj.visible = true;
							}else{
								node.visibility = 'hidden';
								node.model.material.visible = false;
								node.__threeObj.visible = false;
							}
						}
					}
				}, 

				highlightModel: function (sourceNode, focusTarget = null) {
					let fgComp = this.fgComp;
					let distance = 0;

					let modelArray = [];

					//show links connecting the sourceNode
					for(let link of fgComp.links){
						if (link.material) {
							if(link.source.id === sourceNode.id || link.target.id === sourceNode.id){
								link.visibility = 'visible';
								link.material.opacity = 1;
								link.material.visible = true;
								modelArray.push(link.source.id);
								modelArray.push(link.target.id);
							}else{
								link.visibility = 'hidden';
								link.material.visible = false;
							}
						}
					}

					//show links connecting the focusTarget with objects in modelArray
					for(let link of fgComp.links){
						if(link.source.name === focusTarget && modelArray.includes(link.target.id)){
							link.visibility = 'visible';
							link.material.opacity = 1;
							link.material.visible = true;
						}
					}

					//show nodes in modelArray 
					for(let node of fgComp.nodes){
						if (node.model.material && typeof node.__threeObj !== 'undefined') {
							typeof sourceNode.__threeObj !== 'undefined' ? distance = node.__threeObj.position.distanceTo(sourceNode.__threeObj.position) : distance = 0;
							if(modelArray.includes(node.id)){
								node.visibility = 'visible';
								node.model.material.opacity = 1;
								node.model.material.visible = true;
								this.setHighestDistance(distance);
								node.__threeObj.visible = true;
								//app.dev && console.log('dev --- node: ', node)
							}else{
								node.visibility = 'hidden';
								node.model.material.visible = false;
								node.__threeObj.visible = false;
							}
						}
					}
				},

				resetHighlight: function () {
					let fgComp = this.fgComp;

					for(let link of fgComp.links){
						if(link.material){
							link.visibility = 'visible';
							link.material.opacity = 0.4;
							link.material.visible = true;
						}
					}

					for(let node of fgComp.nodes){
						if (node.id != '' && node.model.material && typeof node.__threeObj !== 'undefined') {
							node.visibility = 'visible';
							node.model.material.opacity = 1;
							node.model.material.visible = true;
							let distance = this.data.highestDistance.max;
							this.setHighestDistance(distance);
							node.__threeObj.visible = true;
						}
					}

					document.querySelector('a-camera').setAttribute('camera-focus-target', {target: '', duration: 1200});
				}, 

				setHighestDistance: function(distance = this.data.highestDistance.max) {
					if(typeof distance !== 'number') { return; }
					//app.dev && console.log('dev --- highlight > distance: ', distance);
					if (this.data.highestDistance.value < distance) {
						this.data.highestDistance.value = distance;
						this.data.highestDistance.max = distance;
						//app.dev && console.log('dev --- highlight > new highest distance set: ', distance);
					}
				}, 

				highlightFromPill: function(name, type, active, modelId) {
					let fgComp = this.fgComp;
					let pill = {};
					pill.id = modelId;
					pill.name = name;
					pill.type = type;
					pill.active = active;

					if (active) {
						this.highlightModel(pill);
						return;
					}

					this.highlightLinks(pill);

					//highlight pill target model
					if (type === 'category' || type === 'object' || type === 'topic') {
						for(let node of fgComp.nodes){
							if ((node.type === 'node-category' || node.type === 'node-object' || node.type === 'node-topic') && node.name === name) {
								this.highlightModel(node, pill.id);
								return;
							}
						}
					}

					//highlight pill target links
					if (type === 'tag' || type === 'productionTag') {
						for(let link of fgComp.links){
							if ((link.type === 'link-tag' || link.type === 'link-productionTag') && link.name === name) {
								this.highlightLinks(link, pill.id);
								return;
							}
						}
					}
				}, 

				positionHighlightMarker: function() {

					const mapToRange = (number, [inputMinRange, inputMaxRange], [outputMinRange, outputMaxRange]) => {
						let output = (number - inputMinRange) / (inputMaxRange - inputMinRange) * (outputMaxRange - outputMinRange) + outputMinRange;
						output > 1 ? output = 1 : '';
						output < 0 ? output = 0 : '';
						return output;
					}

					const width = window.innerWidth;
					const height = window.innerHeight;
					const widthHalf = width / 2;
					const heightHalf = height / 2;

					this.highlightMarker.element.classList.add('hide');

					//check if target highlighted
					if(!this.data.source) { return; }

					const camera = document.querySelector('a-camera').object3D;
					const threeCamera = document.querySelector('a-camera').components['camera'].camera;
					const vector = new THREE.Vector3();
					vector.copy(this.data.source.__threeObj.position);
					vector.project(threeCamera);

					vector.x = ( vector.x * widthHalf ) + widthHalf;
					vector.y = - ( vector.y * heightHalf ) + heightHalf;

					this.highlightMarker.element.classList.remove('hide');
					this.highlightMarker.element.style.top = vector.y + 'px';
					this.highlightMarker.element.style.left = vector.x + 'px';

					const meshDistance = camera.position.distanceTo(this.data.source.__threeObj.position);
					const scale = mapToRange(meshDistance, [150,0], [0.4,1]);
					const radius = mapToRange(meshDistance, [250,0], [0.8,1]);
					const opacity = mapToRange(meshDistance, [450,50], [1,0]);
					this.highlightMarker.element.style.width = (scale * 200) + 30 + 'px';
					this.highlightMarker.element.style.height = (scale * 200) + 30 + 'px';
					this.highlightMarker.element.style.opacity = opacity;
					this.highlightMarker.bracket.upper.element.style.borderRadius = (radius * 20) + 'px 0';
					this.highlightMarker.bracket.lower.element.style.borderRadius = (radius * 20) + 'px 0';

				}
			});
			//END highlight



			//START custom orbit-controls
			// To avoid recalculation at every mouse movement tick
			var PI_2 = Math.PI / 2;

			AFRAME.registerComponent('orbit-controls', {

				schema: {
					enabled: { default: false },
					target: { default: '#orbit-target' }, 
					distance: { default: 50 }, 
					desiredDistance: { default: 200 },
					minDistance: { default: 30 },
					maxDistance: { default: 700 }, 
					autoRotate: { default: true }, 
					autoRotateSpeed: { default: 10 },
					activeRotX: { default: false },
					desiredRotX: { default: -5 }, 
					cameraPitch: { default: 0 },
					desiredCameraPitch: { default: 0 },
					forceUpdate: { default: false }
				},

				init: function () {
					this.touchEventCache = [];
					this.previousDistance = -1;
					this.hasUserInput = false;
					this.previousPosition = new THREE.Vector3();
					this.deltaPosition = new THREE.Vector3();
					this.setupMouseControls();
					this.setupHMDControls();
					this.bindMethods();
				
					if (this.el.components['look-controls']) {
						this.lookControls = this.el.components['look-controls'];
						this.lookControls.pause();
					} else {
						this.el.setAttribute('look-controls', '');
						this.lookControls = this.el.components['look-controls'];
						this.lookControls.pause();
					}
				},

				update: function () {
					if (!this.data.enabled) { return; }

					if(document.querySelector(this.data.target)){
						this.target3D = document.querySelector(this.data.target).object3D;
					}else{
						//create orbit target
						this.orbitTargetEl = document.createElement('a-entity');
						this.orbitTarget = this.orbitTargetEl.object3D;
						this.el.sceneEl.appendChild(this.orbitTargetEl);
						this.orbitTargetEl.setAttribute('id', 'orbit-target');
						app.dev && this.orbitTargetEl.setAttribute('geometry', 'primitive: sphere; radius: 1');
				
						this.target3D = document.querySelector(this.data.target).object3D;
					}
				
					if(this.data.distance) {
						this.distance = this.data.distance;
						this.data.distance = null;
					}

					if(this.data.desiredDistance){
						this.desiredDistance = this.data.desiredDistance;

						//app.dev && console.log('dev --- orbit-controls > screen.orientation: ', screen.orientation.type);
						if(screen.orientation.type === 'portrait-primary'){
							this.desiredDistance = this.desiredDistance * 1.5;
						}
						//app.dev && console.log('dev --- orbit-controls > this.distance: ', this.desiredDistance);

						this.data.desiredDistance = null;
					}
					
					//this.controls.update();
					this.updateOrientation();
					this.updatePosition();
				},

				play: function () {
					this.previousPosition.set(0, 0, 0);
					this.addEventListeners();
				},

				pause: function () {
					this.removeEventListeners();
				},

				tick: function (t) {
					if(this.data.enabled){

						this.data.forceUpdate && this.update();
						this.data.forceUpdate = false;

						//this.controls.update();
						this.updateOrientation();
						this.updatePosition();
						this.updateCameraPitch();
					}
				},

				remove: function () {
					this.pause();
				},

				bindMethods: function () {
					this.onMouseDown = this.onMouseDown.bind(this);
					this.onMouseMove = this.onMouseMove.bind(this);
					this.onMouseWheel = this.onMouseWheel.bind(this);
					this.releaseMouse = this.releaseMouse.bind(this);
					this.onTouchStart = this.onTouchStart.bind(this);
					this.onTouchMove = this.onTouchMove.bind(this);
					this.onTouchEnd = this.onTouchEnd.bind(this);
					this.pointerdownHandler = this.pointerdownHandler.bind(this);
					this.pointermoveHandler = this.pointermoveHandler.bind(this);
					this.pointerupHandler = this.pointerupHandler.bind(this);
				},

				setupMouseControls: function () {
					// The canvas where the scene is painted
					this.mouseDown = false;
					this.pitchObject = new THREE.Object3D();
					this.yawObject = new THREE.Object3D();
					this.yawObject.position.y = 10;
					this.yawObject.add(this.pitchObject);
				},

				setupHMDControls: function () {
					this.dolly = new THREE.Object3D();
					this.euler = new THREE.Euler();
					//this.controls = new THREE.VRControls(this.dolly);
					this.zeroQuaternion = new THREE.Quaternion();
				},

				addEventListeners: function () {
					var sceneEl = this.el.sceneEl;
					var canvasEl = sceneEl.canvas;
				
					// listen for canvas to load.
					if (!canvasEl) {
						sceneEl.addEventListener('render-target-loaded', this.addEventListeners.bind(this));
						return;
					}
				
					// Mouse Events
					canvasEl.addEventListener('mousedown', this.onMouseDown, false);
					canvasEl.addEventListener('mousemove', this.onMouseMove, false);
					canvasEl.addEventListener('mouseup', this.releaseMouse, false);
					canvasEl.addEventListener('mouseout', this.releaseMouse, false);
					canvasEl.addEventListener('mousewheel', this.onMouseWheel, false);
					canvasEl.addEventListener('MozMousePixelScroll', this.onMouseWheel, false); // firefox
				
					// Touch events
					canvasEl.addEventListener('touchstart', this.onTouchStart, app.passiveSupported ? { passive: true } : false);
					canvasEl.addEventListener('touchmove', this.onTouchMove, app.passiveSupported ? { passive: true } : false);
					canvasEl.addEventListener('touchend', this.onTouchEnd);
				
					// Touch pinch events
					canvasEl.addEventListener('pointerdown', this.pointerdownHandler);
					canvasEl.addEventListener('pointermove', this.pointermoveHandler);
				
					canvasEl.addEventListener('pointerup', this.pointerupHandler);
					canvasEl.addEventListener('pointercancel', this.pointerupHandler);
					canvasEl.addEventListener('pointerout', this.pointerupHandler);
					canvasEl.addEventListener('pointerleave', this.pointerupHandler);
				},

				removeEventListeners: function () {
					var sceneEl = document.querySelector('a-scene');
					var canvasEl = sceneEl && sceneEl.canvas;
					if (!canvasEl) { return; }
				
					// Mouse Events
					canvasEl.removeEventListener('mousedown', this.onMouseDown);
					canvasEl.removeEventListener('mousemove', this.onMouseMove);
					canvasEl.removeEventListener('mouseup', this.releaseMouse);
					canvasEl.removeEventListener('mouseout', this.releaseMouse);
					canvasEl.removeEventListener('mousewheel', this.onMouseWheel, false);
					canvasEl.removeEventListener('MozMousePixelScroll', this.onMouseWheel, false); // firefox
				
					// Touch events
					canvasEl.removeEventListener('touchstart', this.onTouchStart);
					canvasEl.removeEventListener('touchmove', this.onTouchMove);
					canvasEl.removeEventListener('touchend', this.onTouchEnd);
				
					// Touch pinch events
					canvasEl.removeEventListener('pointerdown', this.pointerdownHandler);
					canvasEl.removeEventListener('pointermove', this.pointermoveHandler);
				
					canvasEl.removeEventListener('pointerup', this.pointerupHandler);
					canvasEl.removeEventListener('pointercancel', this.pointerupHandler);
					canvasEl.removeEventListener('pointerout', this.pointerupHandler);
					canvasEl.removeEventListener('pointerleave', this.pointerupHandler);
				},

				updateOrientation: (function () {
					var hmdEuler = new THREE.Euler();
					hmdEuler.order = 'YXZ';
					return function () {
						var pitchObject = this.pitchObject;
						var yawObject = this.yawObject;
						var desiredRotX = (this.data.desiredRotX * 0.01745);
						var hmdQuaternion = this.calculateHMDQuaternion();
						hmdEuler.setFromQuaternion(hmdQuaternion);
				
						if(this.data.autoRotate){
							yawObject.rotation.y += this.data.autoRotateSpeed * 0.0001;
						}

						if((pitchObject.rotation.x > desiredRotX) && this.data.activeRotX) {
							pitchObject.rotation.x -= 0.005;
						}
				
						if((pitchObject.rotation.x < desiredRotX) && this.data.activeRotX) {
							pitchObject.rotation.x += 0.005;
						}

						if((pitchObject.rotation.x < (desiredRotX + 0.01)) && (pitchObject.rotation.x > (desiredRotX - 0.01))) {
							this.data.activeRotX = false;
						}
				
						this.el.setAttribute('rotation', {
							x: (hmdEuler.x * 114.59155903) + (pitchObject.rotation.x * 114.59155903),
							y: (hmdEuler.y * 114.59155903) + (yawObject.rotation.y * 114.59155903),
							z: (hmdEuler.z * 114.59155903) + (yawObject.rotation.z * 114.59155903)
						});

						if(this.touchStarted) { return; }
						if(this.mouseDown){ return; }
						this.hasUserInput = false;
					};
				})(),

				calculateHMDQuaternion: (function () {
					var hmdQuaternion = new THREE.Quaternion();
					return function () {
						var dolly = this.dolly;
						if (!this.zeroed && !dolly.quaternion.equals(this.zeroQuaternion)) {
						this.zeroOrientation();
						this.zeroed = true;
						}
						hmdQuaternion.copy(this.zeroQuaternion).multiply(dolly.quaternion);
						return hmdQuaternion;
					};
				})(),

				updatePosition: (function () {
					var position = new THREE.Vector3();
					var quaternion = new THREE.Quaternion();
					var scale = new THREE.Vector3();
					return function () {
						var el = this.el;
						var deltaPosition = this.calculateDeltaPosition();
						var currentPosition = this.target3D.position;
						this.el.object3D.matrixWorld.decompose(position, quaternion, scale);
				
						deltaPosition.applyQuaternion(quaternion);
				
						// Reset the Camera to 0
				
						el.setAttribute('position', {
							x: this.target3D.position.x,
							y: this.target3D.position.y,
							z: this.target3D.position.z
						});

						if(this.distance > this.desiredDistance) {
							let distFactor = (this.distance - this.desiredDistance)/50;
							this.distance -= 1 + distFactor;
						}
						
						if(this.distance < this.desiredDistance) {
							let distFactor = (this.desiredDistance - this.distance)/50;
							this.distance += 1 + distFactor;
						}
				
						if(this.distance < this.data.minDistance) { 
							this.distance = this.data.minDistance;
							this.desiredDistance = this.data.minDistance; 
						};

						if(this.distance > this.data.maxDistance) { 
							this.distance = this.data.maxDistance;
							this.desiredDistance = this.data.maxDistance; 
						};

						//app.dev && console.log('orbit-controls > distance: ', {distance: this.distance, desiredDistance: this.desiredDistance})

						var targetCameraPosition = this.el.object3D.translateOnAxis( new THREE.Vector3(0,0,1), this.distance ).position;
				
						el.setAttribute('position', {
							x: targetCameraPosition.x,
							y: targetCameraPosition.y,
							z: targetCameraPosition.z
						});

						document.querySelector('#cursor').setAttribute('position', {
							x: targetCameraPosition.x,
							y: targetCameraPosition.y,
							z: targetCameraPosition.z
						});
					};
				})(),

				updateCameraPitch: function () {
					if(this.data.cameraPitch > this.data.desiredCameraPitch) {
						this.data.cameraPitch -= 0.3;
					}
					
					if(this.data.cameraPitch < this.data.desiredCameraPitch) {
						this.data.cameraPitch += 0.3;
					}
					
					this.el.object3D.rotation.x += (this.data.cameraPitch * 0.01745);
				},

				calculateDeltaPosition: function () {
					var dolly = this.dolly;
					var deltaPosition = this.deltaPosition;
					var previousPosition = this.previousPosition;
					deltaPosition.copy(dolly.position);
					deltaPosition.sub(previousPosition);
					previousPosition.copy(dolly.position);
					return deltaPosition;
				},

				updateHMDQuaternion: (function () {
					var hmdQuaternion = new THREE.Quaternion();
					return function () {
						var dolly = this.dolly;
						this.controls.update();
						if (!this.zeroed && !dolly.quaternion.equals(this.zeroQuaternion)) {
						this.zeroOrientation();
						this.zeroed = true;
						}
						hmdQuaternion.copy(this.zeroQuaternion).multiply(dolly.quaternion);
						return hmdQuaternion;
					};
				})(),

				zeroOrientation: function () {
					var euler = new THREE.Euler();
					euler.setFromQuaternion(this.dolly.quaternion.clone().inverse());
					// Cancel out roll and pitch. We want to only reset yaw
					euler.z = 0;
					euler.x = 0;
					this.zeroQuaternion.setFromEuler(euler);
				},

				onMouseMove: function (event) {
					var pitchObject = this.pitchObject;
					var yawObject = this.yawObject;
					var previousMouseEvent = this.previousMouseEvent;
				
					if (!this.mouseDown || !this.data.enabled) { 
						this.mouseMove = false;
						return;
					}
				
					this.mouseMove = true;

					if(!this.hasUserInput) {
						setTimeout(() => {
							this.hasUserInput = true;
						}, 100)
					}
				
					var movementX = event.movementX || event.mozMovementX;
					var movementY = event.movementY || event.mozMovementY;
				
					if (movementX === undefined || movementY === undefined) {
						movementX = event.screenX - previousMouseEvent.screenX;
						movementY = event.screenY - previousMouseEvent.screenY;
					}
					this.previousMouseEvent = event;
				
					yawObject.rotation.y -= movementX * 0.002;
					pitchObject.rotation.x -= movementY * 0.002;
					pitchObject.rotation.x = Math.max(-PI_2/2, Math.min(PI_2/2, pitchObject.rotation.x));
				},

				onMouseDown: function (event) {
					this.mouseDown = true;
					this.previousMouseEvent = event;

					// Stop Auto Rotation
					this.data.autoRotate = false;
				},

				releaseMouse: function () {
					this.mouseDown = false;

					if(this.hasUserInput) {
						setTimeout(() => {
							this.hasUserInput = false;
						}, 300)
					}
				},

				onMouseWheel: function (event) {
					if (!this.data.enabled) return;
				
					event.preventDefault();
					event.stopPropagation();
				
					var scrollDelta = 0;
					if (event.wheelDelta !== undefined) { // WebKit,Opera,IE 9
						scrollDelta = event.wheelDelta;
					} else if (event.detail !== undefined) { // Firefox
						scrollDelta = -event.detail;
					}
				
					if (scrollDelta > 0) {
						this.desiredDistance -= 20;
					} else if (scrollDelta < 0) {
						this.desiredDistance += 20;
					}
				},

				onTouchStart: function (e) {
					if (e.touches.length !== 1) { return; }
					this.touchStart = {
						x: e.touches[0].pageX,
						y: e.touches[0].pageY
					};
					this.touchStarted = true;
				
					// Stop Zoom
					this.desiredDistance = this.distance;

					// Stop Auto Rotation
					this.data.autoRotate = false;

					if(!this.hasUserInput) {
						setTimeout(() => {
							this.hasUserInput = true;
						}, 100)
					}
				},

				onTouchMove: function (e) {
					if (e.touches.length !== 1) { return; }
					this.touchMove = true;
					var deltaY;
					var deltaX;
					var yawObject = this.yawObject;
					var pitchObject = this.pitchObject;
					if (!this.touchStarted) { return; }
					deltaY = 2 * Math.PI * (e.touches[0].pageX - this.touchStart.x) / this.el.sceneEl.canvas.clientWidth;
					deltaX = 2 * Math.PI * (e.touches[0].pageY - this.touchStart.y) / this.el.sceneEl.canvas.clientHeight;
				
					// Limits touch orientaion to to yaw (y axis)
					yawObject.rotation.y -= deltaY * 0.5;

					// Limits touch orientation to pitch (x axis)
					pitchObject.rotation.x -= deltaX * 0.5;
					pitchObject.rotation.x = Math.max(-PI_2/2, Math.min(PI_2/2, pitchObject.rotation.x));
				
					this.touchStart = {
						x: e.touches[0].pageX,
						y: e.touches[0].pageY
					};
				},

				onTouchEnd: function () {
					this.touchStarted = false;
					this.touchMove = false;

					if(this.hasUserInput) {
						setTimeout(() => {
							this.hasUserInput = false;
						}, 300)
					}
				}, 

				pointerdownHandler: function (e) {
					if(!this.touchEventCache) {
						this.touchEventCache = [];
					}
					this.touchEventCache.push(e);
				},

				pointermoveHandler: function (e) {
					let currentDistance = 0;
					let difference = 0;

					const index = this.touchEventCache.findIndex(
						(cachedEvent) => cachedEvent.pointerId === e.pointerId,
					);

					this.touchEventCache[index] = e;

					if (this.touchEventCache.length === 2) {
						let currentDistanceY = Math.abs(this.touchEventCache[0].clientY - this.touchEventCache[1].clientY);
						let currentDistanceX = Math.abs(this.touchEventCache[0].clientX - this.touchEventCache[1].clientX);
						currentDistance = Math.sqrt(currentDistanceY*currentDistanceY  + currentDistanceX*currentDistanceX)
						difference = currentDistance - this.previousDistance;
						if (this.previousDistance > 0) {
							this.desiredDistance -= difference;
						}
						this.previousDistance = currentDistance;
					}
				},

				pointerupHandler: function (e) {
					// Remove this event from the target's cache
					const index = this.touchEventCache.findIndex(
						(cachedEvent) => cachedEvent.pointerId === e.pointerId,
					);

					this.touchEventCache.splice(index, 1);
					// If the number of pointers down is less than two then reset diff tracker
					if (this.touchEventCache.length < 2) {
						this.previousDistance = -1;
					}	
				}
			});
			//END custom orbit-controls
		}, 

		setEventListeners() {
			this.sceneEl.addEventListener('load-json-models-ready', (evt) => {
				app.collectionViewer.components['load-json-models'].ready = true;
				let event = new Event('collectionViewer-ready');
				document.querySelector('a-scene').dispatchEvent(event);
				app.dev && console.log('event --- collectionViewer-ready')
			}, {once:true});

			this.sceneEl.addEventListener('camera-focus-target-ready', (evt) => {
				app.collectionViewer.components['camera-focus-target'].ready = true;
				let event = new Event('collectionViewer-ready');
				document.querySelector('a-scene').dispatchEvent(event);
				app.dev && console.log('event --- collectionViewer-ready')
			}, {once:true});

			this.sceneEl.addEventListener('highlight-ready', (evt) => {
				app.collectionViewer.components['highlight'].ready = true;
				let event = new Event('collectionViewer-ready');
				document.querySelector('a-scene').dispatchEvent(event);
				app.dev && console.log('event --- collectionViewer-ready')
			}, {once:true});

			this.sceneEl.addEventListener('forcegraph-ready', (evt) => {
				if(!app.collectionViewer.components['forcegraph'].first) {
					app.collectionViewer.components['forcegraph'].first = true;
					return;
				}
				app.collectionViewer.components['forcegraph'].ready = true;
				let event = new Event('collectionViewer-ready');
				document.querySelector('a-scene').dispatchEvent(event);
				app.dev && console.log('event --- collectionViewer-ready')
			});

			this.sceneEl.addEventListener('collectionViewer-ready', (evt) => {
				if( !app.collectionViewer.components['load-json-models'].ready || 
					!app.collectionViewer.components['camera-focus-target'].ready || 
					!app.collectionViewer.components['highlight'].ready ||
					!app.collectionViewer.components['forcegraph'].ready
					){return;}

				if(app.collectionViewer.node && !app.tour) {
					let nodeID = app.collectionViewer.node;
					let fgElement = document.querySelector('#forcegraph');
					let aCameraElement = document.querySelector('a-camera');
					let fgComponent = document.querySelector('#forcegraph').components['forcegraph'];
					let fgNodes = fgComponent.data.nodes;
					let node = null;

					for(let n of fgNodes) {
						if(n.id === nodeID){
							node = n;
							app.dev && console.log('dev --- URL model: ', node)
						}
					}

					if(node) { 
						setTimeout(() => {
							aCameraElement.setAttribute('camera-focus-target', {target: node, duration: 1200});
						}, 0);					
						app.collectionViewer.highlight.onclickHandler(node);
						fgElement.setAttribute('highlight', {source: node});
						app.collectionViewer.node = null;
					}else {
						app.collectionViewer.resetView.resetCameraView();
					}					
				}else {
					app.collectionViewer.resetView.resetCameraView();
				}

				app.gui.loadingScreen.hideLoadingScreen();
				let event = new Event('loadingScreen-ready');
				document.dispatchEvent(event);
				app.dev && console.log('event --- loadingScreen-ready')
			});
		}
	},

	modelViewer: {

		initialized: false,

		toolBarSetup: {
			color: 'pearlwhite', 
			shadowColor: 'shadow-smokegrey'
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
					document.dispatchEvent(app.modelViewer.proxyJSON.update);
					app.dev && console.log('dev --- proxyJSON-update', app.modelViewer.proxyJSON);
					return true;
				}
			}
		),

		init() {
			this.createElements();
			this.setEventListeners();
			this.getJSONData(app.filepaths.files + 'json/' + app.primaryKey + '.json');

			app.gui.toolbar.setToolbar(this.toolBarSetup.color, this.toolBarSetup.shadowColor);

			app.gui.toolbar.setButton(this.info.buttonSetup);
			app.gui.toolbar.setButton(this.contextStory.buttonSetup);
			app.gui.toolbar.button[1].addEventListener('click', (e) => app.modelViewer.contextStory.setContextStory() );
			app.gui.toolbar.setButton(this.measurement.buttonSetup);
			this.measurement.init();
			app.gui.toolbar.button[2].addEventListener('click', (e) => app.modelViewer.measurement.toggleMeasurements() );
			app.gui.toolbar.setButton(this.ar.buttonSetup);

			this.initialized = true;
			app.dev && console.log('dev --- modelViewer initialized');
		},

		info: {

			buttonSetup: {
				id: '#toolbar-button-0',
				name: 'Informationen',
				colors: {
					button: {
						background: 'coalgrey',
						text: null,
						icon: 'pearlwhite'
					},
					tab: {
						background: 'pearlwhite',
						shadow: 'shadow-coalgrey',
						text: 'text-coalgrey',
						icon: 'coalgrey'
					}
				}, 
				func: 'info', 
				action: {
					type: 'tab',
					selector: '.mv-info-container' 
				}
			},

			createTabContent(modelJSON) {
				const tabContentEl = app.gui.toolbar.tab.content.element;
				const basicData = modelJSON.basicData;
				const collectionData = modelJSON.collectionData;
				const objectData = modelJSON.objectData;

				const mvInfoContainerEl = document.createElement('div');
				tabContentEl.appendChild(mvInfoContainerEl);
				mvInfoContainerEl.className = 'mv-info-container';

				const objectDataHeadline = document.createElement('h3');
				mvInfoContainerEl.appendChild(objectDataHeadline);
				objectDataHeadline.textContent = 'Objektdaten: ';

				const descriptionListBasicEl = document.createElement('dl');
				mvInfoContainerEl.appendChild(descriptionListBasicEl);

				if(basicData.name){
					const nameTermEl = document.createElement('dt');
					descriptionListBasicEl.appendChild(nameTermEl);
					const nameTermHeadline = document.createElement('h6');
					nameTermEl.appendChild(nameTermHeadline);
					nameTermHeadline.textContent = 'Bezeichnung: ';
					nameTermHeadline.className = 'text-smokegrey';
	
					const nameValueEl = document.createElement('dd');
					descriptionListBasicEl.appendChild(nameValueEl);
					const nameValueHeadline = document.createElement('h4');
					nameValueEl.appendChild(nameValueHeadline);
					nameValueHeadline.textContent = basicData.name;
				}
				
				if(basicData.key){
					const keyTermEl = document.createElement('dt');
					descriptionListBasicEl.appendChild(keyTermEl);
					const keyTermHeadline = document.createElement('h6');
					keyTermEl.appendChild(keyTermHeadline);
					keyTermHeadline.textContent = 'Objektnummer: ';
					keyTermHeadline.className = 'text-smokegrey';
	
					const keyValueEl = document.createElement('dd');
					descriptionListBasicEl.appendChild(keyValueEl);
					keyValueEl.textContent = basicData.key;
				}

				if(basicData.categories.length > 0) {
					const categoryTermEl = document.createElement('dt');
					descriptionListBasicEl.appendChild(categoryTermEl);
					const categoryTermHeadline = document.createElement('h6');
					categoryTermEl.appendChild(categoryTermHeadline);
					categoryTermHeadline.textContent = 'Kontexte: ';
					categoryTermHeadline.className = 'text-smokegrey';
	
					const categoryValueEl = document.createElement('dd');
					descriptionListBasicEl.appendChild(categoryValueEl);
					for(let category of basicData.categories) {
						if(category === ''){ continue; }
						const categoryEl = document.createElement('span');
						categoryEl.textContent = category;
						categoryEl.className = 'pill ' + app.collectionViewer.elementColor.category;
						categoryValueEl.appendChild(categoryEl);
					}
					if(categoryValueEl.innerHTML === '') {
						categoryValueEl.remove();
						categoryTermEl.remove();
					}
				}


				if(basicData.tags.length > 0) {
					const tagTermEl = document.createElement('dt');
					descriptionListBasicEl.appendChild(tagTermEl);
					const tagTermHeadline = document.createElement('h6');
					tagTermEl.appendChild(tagTermHeadline);
					tagTermHeadline.textContent = 'Tags: ';
					tagTermHeadline.className = 'text-smokegrey';
				
					const tagValueEl = document.createElement('dd');
					descriptionListBasicEl.appendChild(tagValueEl);
					for(let tag of basicData.tags) {
						if(tag === ''){ continue; }
						const tagEl = document.createElement('span');
						tagEl.textContent = tag;
						tagEl.className = 'pill ' + app.collectionViewer.elementColor.tag;
						tagValueEl.appendChild(tagEl);
					}
					if(tagValueEl.innerHTML === '') {
						tagValueEl.remove();
						tagTermEl.remove();
					}
				}

				const descriptionListObjectEl = document.createElement('dl');
				mvInfoContainerEl.appendChild(descriptionListObjectEl);

				if(objectData.alternativeName){
					const altNameTermEl = document.createElement('dt');
					descriptionListObjectEl.appendChild(altNameTermEl);
					const altNameTermHeadline = document.createElement('h6');
					altNameTermEl.appendChild(altNameTermHeadline);
					altNameTermHeadline.textContent = 'Alternative Bezeichnung: ';
					altNameTermHeadline.className = 'text-smokegrey';
	
					const altNameValueEl = document.createElement('dd');
					descriptionListObjectEl.appendChild(altNameValueEl);
					altNameValueEl.textContent = objectData.alternativeName;
				}

				if(objectData.datingFrom && objectData.datingTo){
					var datingFromTo = 'von ' + objectData.datingFrom + ' bis ' + objectData.datingTo;
					objectData.datingFrom === objectData.datingTo ? datingFromTo = objectData.datingFrom : '';

					const datingFromToTermEl = document.createElement('dt');
					descriptionListObjectEl.appendChild(datingFromToTermEl);
					const datingFromToTermHeadline = document.createElement('h6');
					datingFromToTermEl.appendChild(datingFromToTermHeadline);
					datingFromToTermHeadline.textContent = 'Datierung: ';
					datingFromToTermHeadline.className = 'text-smokegrey';
	
					const datingFromToValueEl = document.createElement('dd');
					descriptionListObjectEl.appendChild(datingFromToValueEl);
					datingFromToValueEl.textContent = datingFromTo;
				}

				if(objectData.location && objectData.locationCode){
					var location = objectData.location + ' (' + objectData.locationCode+ ')';

					const locationTermEl = document.createElement('dt');
					descriptionListObjectEl.appendChild(locationTermEl);
					const locationTermHeadline = document.createElement('h6');
					locationTermEl.appendChild(locationTermHeadline);
					locationTermHeadline.textContent = 'Verortung: ';
					locationTermHeadline.className = 'text-smokegrey';
	
					const locationValueEl = document.createElement('dd');
					descriptionListObjectEl.appendChild(locationValueEl);
					locationValueEl.textContent = location;
				}

				if(objectData.origin && objectData.originCode){
					var origin = objectData.origin + ' (' + objectData.originCode+ ')';

					const originTermEl = document.createElement('dt');
					descriptionListObjectEl.appendChild(originTermEl);
					const originTermHeadline = document.createElement('h6');
					originTermEl.appendChild(originTermHeadline);
					originTermHeadline.textContent = 'Enstehungsort: ';
					originTermHeadline.className = 'text-smokegrey';
	
					const originValueEl = document.createElement('dd');
					descriptionListObjectEl.appendChild(originValueEl);
					originValueEl.textContent = origin;
				}

				const collectionDataHeadline = document.createElement('h3');
				mvInfoContainerEl.appendChild(collectionDataHeadline);
				collectionDataHeadline.textContent = 'Sammlungsdaten: ';

				const descriptionListCollectionEl = document.createElement('dl');
				mvInfoContainerEl.appendChild(descriptionListCollectionEl);

				if(collectionData.collectionDate){
					const collectionDateTermEl = document.createElement('dt');
					descriptionListCollectionEl.appendChild(collectionDateTermEl);
					const collectionDateTermHeadline = document.createElement('h6');
					collectionDateTermEl.appendChild(collectionDateTermHeadline);
					collectionDateTermHeadline.textContent = 'Erhebungsdatum: ';
					collectionDateTermHeadline.className = 'text-smokegrey';
	
					const collectionDateValueEl = document.createElement('dd');
					descriptionListCollectionEl.appendChild(collectionDateValueEl);
					collectionDateValueEl.textContent = collectionData.collectionDate;
				}

				if(collectionData.collectionLocation && collectionData.collectionLocationCode){
					var collectionLocation = collectionData.collectionLocation + ' (' + collectionData.collectionLocationCode+ ')';

					const collectionLocationTermEl = document.createElement('dt');
					descriptionListCollectionEl.appendChild(collectionLocationTermEl);
					const collectionLocationTermHeadline = document.createElement('h6');
					collectionLocationTermEl.appendChild(collectionLocationTermHeadline);
					collectionLocationTermHeadline.textContent = 'Erhebungsort: ';
					collectionLocationTermHeadline.className = 'text-smokegrey';
	
					const collectionLocationValueEl = document.createElement('dd');
					descriptionListCollectionEl.appendChild(collectionLocationValueEl);
					collectionLocationValueEl.textContent = collectionLocation;
				}

				if(collectionData.collectionScanner){
					const collectionScannerTermEl = document.createElement('dt');
					descriptionListCollectionEl.appendChild(collectionScannerTermEl);
					const collectionScannerTermHeadline = document.createElement('h6');
					collectionScannerTermEl.appendChild(collectionScannerTermHeadline);
					collectionScannerTermHeadline.textContent = '3D-Scanner: ';
					collectionScannerTermHeadline.className = 'text-smokegrey';
	
					const collectionScannerValueEl = document.createElement('dd');
					descriptionListCollectionEl.appendChild(collectionScannerValueEl);
					collectionScannerValueEl.textContent = collectionData.collectionScanner;
				}
			}
		},

		contextStory: {

			buttonSetup: {
				id: '#toolbar-button-1',
				name: 'Geschichte',
				colors: {
					button: {
						background: 'skyblue',
						text: null,
						icon: 'pearlwhite'
					},
					tab: {
						background: 'pearlwhite',
						shadow: 'shadow-skyblue',
						text: 'text-coalgrey',
						icon: 'coalgrey'
					}
				}, 
				func: 'context', 
				action: {
					type: 'message',
					selector: '.mv-context-story-container' 
				}
			},

			messageSetup: {
				colors: { 
					background: 'pearlwhite', 
					shadow: 'shadow-skyblue' 
				}
			},

			loadContextStory(modelJSON) {
				const modelViewer = app.modelViewer.element;
				let contentHTML = '';

				if(typeof modelJSON.objectData.usageContext === 'object') {
					contentHTML = app.createHTMLContentFromJSON(modelJSON.objectData.usageContext)
					this.message = {
						type: 'Objekt-Kontext',
						content: contentHTML,
						color: this.messageSetup.colors.background,
						shadow: this.messageSetup.colors.shadow
					}
				}

				if(typeof modelJSON.objectData.usageContext === 'string') { 
					contentHTML = '<h3>' + modelJSON.basicData.name + '</h3><p>' + modelJSON.objectData.usageContext + '</p>';
					this.message = {
						type: 'Objekt-Kontext',
						content: contentHTML,
						color: this.messageSetup.colors.background,
						shadow: this.messageSetup.colors.shadow
					}
				}

				

				
			}, 

			setContextStory() {
				app.gui.message.setMessage(this.message);
			}
		},

		measurement: {

			enabled: false,

			buttonSetup: {
				id: '#toolbar-button-2',
				name: 'Abmessungen',
				colors: {
					button: {
						background: 'duckyellow',
						text: null,
						icon: 'coalgrey'
					},
					tab: {
						background: null,
						shadow: null,
						text: null,
						icon: null
					}
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

				modelViewer.addEventListener('camera-change', () => {
					app.modelViewer.measurement.enabled ? renderSVG() : '';
				});
								
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
					button.classList.add(this.buttonSetup.colors.tab.text);
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
					button: {
						background: 'terracotta',
						text: null,
						icon: 'pearlwhite'
					},
					tab: {
						background: null,
						shadow: null,
						text: null,
						icon: null
					}
				}, 
				func: 'ar', 
				action: {
					type: 'feedback',
					selector: null 
				}
			},

			setARButton() {
				const modelViewer = app.modelViewer.element;
				const buttonEl = document.querySelector(this.buttonSetup.id);
				const colors = JSON.parse(buttonEl.getAttribute('data-colors'));
				const func = buttonEl.getAttribute('data-func');
				const iconElement = buttonEl.querySelector('.icon');

				iconElement.src = app.assets.icon[func].src['pearlwhite'];
				buttonEl.classList.remove(colors.button.background);
				buttonEl.className = 'button smokegrey disabled';

				app.dev && console.log('dev --- setARButton: ', {isWebXRCapable: app.isWebXRCapable, isARCapable: app.isARCapable});

				if(app.isMobile && app.isWebXRCapable) {
					buttonEl.setAttribute('data-webxr', true);
					//app.arViewer.init();
					buttonEl.addEventListener('click', (e) => {
						app.arViewer.init();
						app.arViewer.close.element.classList.remove('hide');
						app.modelViewer.removeElements();
					})
					return;
				}

				if(app.isMobile && app.isARCapable) {
					buttonEl.setAttribute('data-webxr', false);
					buttonEl.addEventListener('click', (e) => {
						app.gui.loadingScreen.showLoadingScreen('Augmented Reality wird geladen');
						modelViewer.activateAR();
						//hide loading screen with 10s delay
						app.gui.loadingScreen.hideLoadingScreen(10000);
					})
					iconElement.src = app.assets.icon[func].src['pearlwhite'];
					buttonEl.classList.add(colors.button.background);
					buttonEl.classList.remove('disabled');
					return;
				}
			}
		},

		annotations: {

			annotationSetup: {
					read: {
						icon: 'read',
						buttonColor: 'skyblue', 
						messageColor: 'pearlwhite', 
						messageShadowColor: 'shadow-skyblue'
					}, 
					listen: {
						icon: 'listen',
						buttonColor: 'skyblue', 
						messageColor: 'pearlwhite', 
						messageShadowColor: 'shadow-skyblue'
					}, 
					watch: {
						icon: 'watch',
						buttonColor: 'skyblue', 
						messageColor: 'pearlwhite', 
						messageShadowColor: 'shadow-skyblue'
					}, 
					contact: {
						icon: 'quiz',
						buttonColor: 'terracotta', 
						messageColor: 'pearlwhite', 
						messageShadowColor: 'shadow-terracotta'
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
					iconContainer.classList.add(this.annotationSetup[annotation.mediaType].buttonColor);
					iconContainer.classList.add(annotation.mediaType);

					this.annotationArray[a].button.icon.image = document.createElement('img');
					const image = this.annotationArray[a].button.icon.image;
					iconContainer.appendChild(image);
					image.className = 'hotspot-icon';
					image.width = 100;
					image.height = 100;
					image.src = app.assets.icon[this.annotationSetup[annotation.mediaType].icon].src.pearlwhite;
					image.alt = app.assets.icon[this.annotationSetup[annotation.mediaType].icon].alt;

					//button eventlistener
					button.addEventListener('click', () => this.clickHandler(a));
					button.addEventListener('mouseover', () => button.classList.add('hover-animation'));
					button.addEventListener('mouseout', () => button.classList.remove('hover-animation'));

					//annotation creation

					this.annotationArray[a].message = {
						type: 'Annotation',
						content: app.createHTMLContentFromJSON(annotation.contents),
						color: this.annotationSetup[annotation.mediaType].messageColor,
						shadow: this.annotationSetup[annotation.mediaType].messageShadowColor,
						showClose: false,
						showBack: true
					}
				}  

				app.gui.message.backEl.addEventListener('click', () => {
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

				app.contentImageHandler();

				modelViewer.cameraTarget = button.dataset.target;
				modelViewer.cameraOrbit = button.dataset.orbit;
				modelViewer.fieldOfView = button.dataset.fov;
			}
		},

		setEventListeners: function() {
			const self = this;

			document.addEventListener('proxyJSON-update', (e) => {
				const json = app.modelViewer.proxyJSON.data;
				self.loadModel(json);
				json.appData.annotations && self.annotations.loadAnnotations(json);
				json.objectData.usageContext && self.contextStory.loadContextStory(json);
				self.info.createTabContent(json);
			});

			this.element.addEventListener('load', function(event) {
				app.isARCapable = app.modelViewer.checkARSupport();
				app.modelViewer.ar.setARButton();
				app.gui.loadingScreen.hideLoadingScreen();
				if(app.embedded){ return; }
				app.modelViewer.contextStory.setContextStory();
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
				app.handleError('mv-002')
			}
		},

		loadModel(modelJSON) {
			const modelViewer = this.element;
			//set title
			app.gui.title.set(modelJSON.basicData.name, 'node-object', modelJSON.primaryKey, true)

			//set modelViewer data
			app.hideGUI ? modelViewer.src = app.filepaths.files + modelJSON.appData.model.quality512 : modelViewer.src = app.filepaths.files + modelJSON.appData.model.quality2k;
			modelViewer.cameraOrbit = modelJSON.appData.modelViewer.cameraOrbit;
			modelViewer.cameraTarget = modelJSON.appData.modelViewer.cameraTarget;
			modelViewer.fieldOfView = modelJSON.appData.modelViewer.cameraField;
		},

		checkARSupport() {
			const modelViewer = app.modelViewer.element;
			//test if WebXR AR is supported
			if(modelViewer.canActivateAR){
				app.dev && console.log('dev --- checkARSupport:', true);
				return true;
			}else{
				app.dev && console.log('dev --- checkARSupport:', false);
				return false;
			}
			return false;
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
			//this.element.setAttribute('touch-action', 'pan-y');
			this.element.setAttribute('disable-tap', '');
			this.element.setAttribute('camera-orbit', '');
			this.element.setAttribute('orbit-sensitivity', '2');
			this.element.setAttribute('min-camera-orbit', '-Infinity 15deg 0.1m');
			this.element.setAttribute('max-camera-orbit', '-Infinity 165ddeg 12.5m');
			this.element.setAttribute('camera-target', '');
			this.element.setAttribute('field-of-view', '');
			this.element.setAttribute('interpolation-decay', '150');
			this.element.setAttribute('data-dimension', 'false');
			//app.hideGUI && this.element.setAttribute('auto-rotate', '');
			app.hideGUI && this.element.setAttribute('rotation-per-second', '0.3rad');
			app.hideGUI && this.element.setAttribute('disable-zoom', '');
			app.hideGUI && this.element.setAttribute('interaction-prompt', 'none');

			this.default = {};

			this.default.arButtonEl = document.createElement('button');
			this.element.appendChild(this.default.arButtonEl);
			this.default.arButtonEl.setAttribute('slot', 'ar-button');
			this.default.arButtonEl.className = 'hide';

			this.default.progressBarEl = document.createElement('div');
			this.element.appendChild(this.default.progressBarEl);
			this.default.progressBarEl.setAttribute('slot', 'progress-bar');
			this.default.progressBarEl.className = 'hide';
		}, 

		removeElements() {
			this.element.remove();
			app.gui.toolbar.button[1].removeEventListener('click', (e) => app.modelViewer.contextStory.setContextStory() );
			app.gui.toolbar.button[2].removeEventListener('click', (e) => app.modelViewer.measurement.toggleMeasurements() );
		}
	},

	arViewer: {

		originalObject: {},
		missionMode: false,
		toolMode: false,
		inMission: false,

		toolBarSetup: {
			color: 'pearlwhite', 
			shadowColor: 'shadow-smokegrey'
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
			this.inventoryTip = "Klick mich, um mich abzulegen";
			this.farAwayTip = "Gehe näher an das Objekt heran!";
			this.clickTip = "Klicke hier!"
			this.clickMeTip = "Klicke mich zum Ablegen";
		},

		createElements() {
			this.sceneEl = document.createElement('a-scene');
			document.body.appendChild(this.sceneEl);
			this.sceneEl.setAttribute('id', 'scene');
			this.sceneEl.setAttribute('gltf-model', 'dracoDecoderPath: ' + app.filepaths.draco);
			this.sceneEl.setAttribute('xr-mode-ui', 'enabled:false');
			this.sceneEl.setAttribute('light', 'defaultLightsEnabled: false');
			this.sceneEl.setAttribute('webxr', 'requiredFeatures: hit-test, dom-overlay, anchors; overlayElement: .gui-message-box; referenceSpaceType:local;');
			this.sceneEl.setAttribute('controller', '');
			this.sceneEl.setAttribute('renderer', 'stencil:true;');
			this.sceneEl.setAttribute('tools', 'enabled:false;');

			this.assets = {};
			this.assets.element = document.createElement('a-assets');
			this.sceneEl.appendChild(this.assets.element);

			this.assets.sprite = document.createElement('img');
			this.assets.element.appendChild(this.assets.sprite);
			this.assets.sprite.id = 'sprite';
			this.assets.sprite.crossOrigin = 'anonymous';
			// TODO our own sprite
			this.assets.sprite.src = 'https://cdn.glitch.global/421736eb-f719-4a40-8df3-054eca30d277/spark.png?v=1715082340035';

			this.assets.drop = document.createElement('img');
			this.assets.element.appendChild(this.assets.drop);
			this.assets.drop.id = 'placer';
			this.assets.drop.crossOrigin = 'anonymous';
			this.assets.drop.src = app.assets.ar.marker['drop'].src;

			this.assets.drag = document.createElement('img');
			this.assets.element.appendChild(this.assets.drag);
			this.assets.drag.id = 'dragIcon';
			this.assets.drag.crossOrigin = 'anonymous';
			this.assets.drag.src = app.assets.ar.marker['drag'].src;

			this.assets.rotateArrows = document.createElement('img');
			this.assets.element.appendChild(this.assets.rotateArrows);
			this.assets.rotateArrows.id = 'rotateArrows';
			this.assets.rotateArrows.crossOrigin = 'anonymous';
			this.assets.rotateArrows.src = app.assets.ar['rotate arrows'].src;

			this.assets.book = document.createElement('img');
			this.assets.element.appendChild(this.assets.book);
			this.assets.book.id = 'book';
			this.assets.book.crossOrigin = 'anonymous';
			this.assets.book.src = app.assets.ar.marker['book'].src;

			this.assets.play = document.createElement('img');
			this.assets.element.appendChild(this.assets.play);
			this.assets.play.id = 'playAnim';
			this.assets.play.crossOrigin = 'anonymous';
			this.assets.play.src = app.assets.ar.marker['animation'].src;

			this.assets.quest = document.createElement('img');
			this.assets.element.appendChild(this.assets.quest);
			this.assets.quest.id = 'exclamation';
			this.assets.quest.crossOrigin = 'anonymous';
			this.assets.quest.src = app.assets.ar.marker['quest'].src;

			this.assets.quiz = document.createElement('img');
			this.assets.element.appendChild(this.assets.quiz);
			this.assets.quiz.id = 'question';
			this.assets.quiz.crossOrigin = 'anonymous';
			this.assets.quiz.src = app.assets.ar.marker['quiz'].src;

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

			this.objectContainerEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.objectContainerEl);
			this.objectContainerEl.setAttribute('id', 'ar-object-container');
			this.objectContainerEl.setAttribute('hide-on-start-ar', '');
			this.objectContainerEl.setAttribute('visible', 'false');
			
			this.objectEl = document.createElement('a-entity');
			this.objectContainerEl.appendChild(this.objectEl);
			this.objectEl.setAttribute('id', 'ar-object');
			this.objectEl.setAttribute('class', 'collidable');
			this.objectEl.setAttribute('get-bounding-box', '');
			this.objectEl.setAttribute('distance-listener', '');
			this.objectEl.setAttribute('animation-mixer', '');
			this.objectEl.setAttribute('anchored', 'persistent:true');

			this.placeObjectEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.placeObjectEl);
			this.placeObjectEl.setAttribute('id', 'ar-place-object');
			this.placeObjectEl.setAttribute('ar-hit-test-special', '');
			this.placeObjectEl.setAttribute('visible', 'false');

			this.missionContainerEl = document.createElement('a-entity');
			this.objectContainerEl.appendChild(this.missionContainerEl);
			this.missionContainerEl.setAttribute('id', 'missions');

			this.noMissionContainerEl = document.createElement('a-entity');
			this.objectContainerEl.appendChild(this.noMissionContainerEl);
			this.noMissionContainerEl.setAttribute('id', 'noMissions');

			this.rotationControlEl = document.createElement('a-entity');
			this.sceneEl.appendChild(this.rotationControlEl);
			this.rotationControlEl.setAttribute('id', 'rotation-ring');
			this.rotationControlEl.setAttribute('geometry', 'primitive:circle');
			this.rotationControlEl.setAttribute('material','transparent:true;src:#rotateArrows');
			this.rotationControlEl.setAttribute('rotation', '-90 0 0');
			this.rotationControlEl.setAttribute('turn-to-camera', 'onlyYAxis:true');

			this.touchCircleEl = document.createElement('a-entity');
			this.rotationControlEl.appendChild(this.touchCircleEl);
			this.touchCircleEl.setAttribute('id', 'touch-circle');
			this.touchCircleEl.setAttribute('geometry', 'primitive:circle; radius: 0.3;');
			this.touchCircleEl.setAttribute('visible', 'false');
			this.touchCircleEl.setAttribute('turn-to-camera', '');
			this.touchCircleEl.setAttribute('rotation-handler', 'enabled:false');	

			this.rotHandleEl = document.createElement('a-entity');
			this.rotationControlEl.appendChild(this.rotHandleEl);
			this.rotHandleEl.setAttribute('id', 'rot-handle');
			this.rotHandleEl.setAttribute('geometry', 'primitive:circle; radius: 0.3;');
			this.rotHandleEl.setAttribute('rotation', ' 0 0 0');
			this.rotHandleEl.setAttribute('material', 'color:#FAF0E6');

			const guiArOverlay = document.createElement('div');
			app.gui.message.boxEl.appendChild(guiArOverlay);
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

			this.score = {};
			this.score.containerEl = document.createElement('div');
			missionOverlay.appendChild(this.score.containerEl);
			this.score.containerEl.id = 'score-container';
			this.score.containerEl.className = 'book-container';

			this.score.image = document.createElement('img');
			this.score.containerEl.appendChild(this.score.image);
			this.score.image.src = app.assets.ar.marker['book'].src; 
			this.score.image.alt = app.assets.ar.marker['book'].alt;
			this.score.image.setAttribute('loading', 'lazy');

			this.score.element = document.createElement('span');
			this.score.containerEl.appendChild(this.score.element);
			this.score.element.id = 'score';
			this.score.element.textContent = '0/0';

			this.inventoryEl = document.createElement('div');
			missionOverlay.appendChild(this.inventoryEl);
			this.inventoryEl.id = 'inventory';

			this.close = {};
			this.close.element = document.createElement('button');
			document.body.appendChild(this.close.element);
			this.close.element.id = 'gui-ar-close-button';
			this.close.element.className = 'gui-ar-close-button hide';
			this.close.element.setAttribute('aria-label', 'AR-Schließen-Button');

			this.close.element.image = document.createElement('img');
			this.close.element.appendChild(this.close.element.image);
			this.close.element.image.src = app.assets.icon.small['close'].src.pearlwhite;
			this.close.element.image.alt = app.assets.icon.small['close'].alt;
			this.close.element.image.className = 'icon';
			this.close.element.image.width = 100;
			this.close.element.image.height = 100;
			this.close.element.image.setAttribute('loading', 'lazy');

			//close popup
			this.close.popup = {};
			this.close.popup.containerEl = document.createElement('div');
			app.gui.message.boxEl.appendChild(this.close.popup.containerEl);
			this.close.popup.containerEl.className = 'gui-ar-close-popup-container hide';
			this.close.popup.containerEl.id = 'gui-ar-close-popup';

			this.close.popup.element = document.createElement('div');
			this.close.popup.containerEl.appendChild(this.close.popup.element);
			this.close.popup.element.classList.add('gui-ar-close-popup', 'terracotta');

			this.close.popup.content = {};
			this.close.popup.content.containerEl = document.createElement('div');
			this.close.popup.element.appendChild(this.close.popup.content.containerEl);
			this.close.popup.content.containerEl.className = 'content-container';

			this.close.popup.content.element = document.createElement('div');
			this.close.popup.content.containerEl.appendChild(this.close.popup.content.element);
			this.close.popup.content.element.className= 'content';
			this.close.popup.content.element.innerHTML = '<p> Entdecker-Modus wirklich verlassen? </p>';
			
			this.close.popup.button = {};
			this.close.popup.button.containerEl = document.createElement('div');
			this.close.popup.element.appendChild(this.close.popup.button.containerEl);
			this.close.popup.button.containerEl.className = 'button-container';
			
			this.close.popup.button.buttonArray = [];
			this.close.popup.button.buttonArray[0] = document.createElement('button');
			this.close.popup.button.containerEl.appendChild(this.close.popup.button.buttonArray[0]);
			this.close.popup.button.buttonArray[0].classList.add('button', 'pearlwhite', 'shadow-coalgrey');
			this.close.popup.button.buttonArray[0].textContent = 'Ja';
			this.close.popup.button.buttonArray[0].setAttribute('aria-label', 'Ja-Button');
			
			this.close.popup.button.buttonArray[1] = document.createElement('button');
			this.close.popup.button.containerEl.appendChild(this.close.popup.button.buttonArray[1]);
			this.close.popup.button.buttonArray[1].classList.add('button', 'pearlwhite', 'shadow-coalgrey');
			this.close.popup.button.buttonArray[1].textContent = 'Nein';
			this.close.popup.button.buttonArray[1].setAttribute('aria-label', 'Nein-Button');

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
			
			const tooltipAR = document.createElement('div');
			this.tooltipElAr = tooltipAR;
			app.gui.message.boxEl.appendChild(tooltipAR);
			tooltipAR.className = 'cv-tooltip hide';
		
			const tooltipContentAR = document.createElement('div');
			this.tooltipContentElAr = tooltipContentAR;
			tooltipAR.appendChild(tooltipContentAR);
			tooltipContentAR.classList.add('cv-tooltip-content', 'duckyellow');
			
			const tooltipOverlay = document.createElement('div');
			this.tooltipElOverlay = tooltipOverlay;
			app.gui.message.boxEl.appendChild(tooltipOverlay);
			tooltipOverlay.className = 'cv-tooltip hide';
		
			const tooltipContentOverlay = document.createElement('div');
			this.tooltipContentElOverlay = tooltipContentOverlay;
			tooltipOverlay.appendChild(tooltipContentOverlay);
			tooltipContentOverlay.classList.add('cv-tooltip-content', 'skyblue');
		}, 

		registerComponents() {
			//CONTROLLER: loads JSON model, missions, gui | controls start and first Contact | states:  raycaster, tools, missions, inventory, score, reverse, noMissions
			AFRAME.registerComponent("controller", {

			  schema: {
				raycaster: { type: "boolean", default: false },
				inventory: { type: "boolean", default: false },
				rotate: { type: "boolean", default: false },
				reverse: { type: "boolean", default: false },
				mission: { type: "boolean", default: false },
				tool: { type: "boolean", default: false },
				noMission: { type: "boolean", default: false },
			  },

			  init: function () {
				let self = this;

				//bind methods
				this.showMissionPopup = this.showMissionPopup.bind(this);
				this.solveMission = this.solveMission.bind(this);
				this.restartMissions = this.restartMissions.bind(this);
				this.resetScore = this.resetScore.bind(this);
				this.startAR = this.startAR.bind(this);
				this.cancelAR = this.cancelAR.bind(this);
				this.activatePreparation = this.activatePreparation.bind(this);
				this.activateMission = this.activateMission.bind(this);
				this.resetActivatedMissions = this.resetActivatedMissions.bind(this);

				//load JSON 
				self.loadJSON();

				//init gui
				self.initGui();

				//interaction pause/play listener for rotation and popups
				let currentMission, currentTool;
				self.el.addEventListener("pause-interaction", function (event) {
				  let rotateBool = event.detail.rotate;

				  let toolsBool = event.detail.tools ? event.detail.tools : false;
				  currentMission = self.data.mission;
				  currentTool = self.data.tool;
				  self.el.setAttribute("controller", {
					raycaster: false,
					tool: toolsBool,
					mission: false,
					inventory: false,
					rotate: rotateBool,
					noMission: false,
				  });
				});

				self.el.addEventListener("play-interaction", function (event) {
				  let rotateBool = event.detail.rotate;
				  let noMissionBool = !app.arViewer.inMission && !currentMission && !currentTool ? true : false;
				  self.el.setAttribute("controller", {
					raycaster: noMissionBool ? noMissionBool : currentMission,
					tool: currentTool,
					mission: currentMission,
					inventory: currentMission,
					rotate: rotateBool,
					noMission: noMissionBool,
				  });
				});
			  },

			  update: function () {
				//turns on or off the components or/and the visibility

				let self = this;

				//reverse missions
				if (this.data.reverse) {
				  for (let element of this.inventory) {
					element.place.classList.remove("clicked");
					if (!element.place.classList.contains("hide"))
					  element.place.classList.add("hide");
					element.el.classList.remove("selected");
				  }

				  this.inventory.length = 0;

				  self.el.emit("missions-reversed", null, false);
				  this.resetActivatedMissions();

				  //reset score
				  this.resetScore();
				  self.el.setAttribute("controller", "reverse", false);

				  return;
				}

				// on or off raycaster
				if (this.data.raycaster && self.el.camera.el.children[0]) {
				  self.el.camera.el.children[0].setAttribute("raycaster", "enabled", "true");
				  self.el.camera.el.children[0].object3D.visible = true;
				} else if(self.el.camera.el.children[0]){
				  self.el.camera.el.children[0].setAttribute("raycaster", "enabled", "false");
				  self.el.camera.el.children[0].object3D.visible = false;
				}

				// show or hide inventory
				const inventory = document.querySelector("#inventory");
				if (this.data.inventory) {
				  inventory.classList.remove("hide");
				} else {
				  inventory.classList.add("hide");
				}

				//on or off rotate
				const rotHandle = document.getElementById("touch-circle");
				if (this.data.rotate) {
				  rotHandle.setAttribute("rotation-handler", "enabled", "true");
				} else {
				  rotHandle.setAttribute("rotation-handler", "enabled", "false");
				}

				//no mission mode 
				const noMissionCont = document.getElementById("noMissions");
				const object = document.getElementById("ar-object");
				if (this.data.noMission) {
				  noMissionCont.object3D.visible = true;
				} else {
				  noMissionCont.object3D.visible = false;
				}

				//mission mode
				const missionCont = document.getElementById("missions");
				const missionOverlay = document.getElementById("missionOverlay");

				if (this.data.mission) {
				  app.arViewer.missionMode = true;
				  missionCont.object3D.visible = true;
				  missionOverlay.classList.remove("hide");
				  object.setAttribute("distance-listener", "enabled", "true");
				} else {
				  app.arViewer.missionMode = false;
				  missionCont.object3D.visible = false;
				  missionOverlay.classList.add("hide");
				  object.setAttribute("distance-listener", "enabled", "false");
				}

				//tool mode
				const toolsCont = document.querySelector(".toggle-container");
				if (this.data.tool) {
				  app.arViewer.toolMode = true;
				  self.el.setAttribute("tools", "enabled", true);
				  toolsCont.classList.remove('hide');
				} else {
				  if (this.modelLoaded) {
					app.arViewer.toolMode = false;
					self.el.setAttribute("tools", "enabled", false);
					toolsCont.classList.add('hide');
				  }
				}
			  },

			  startAR: function () {
				app.gui.message.buttons.button[1].element.removeEventListener('click', this.cancelAR);
				this.el.enterAR();
			  },

			  cancelAR: function () {
				let url = '?m=mv&model=' + app.primaryKey;
				app.dev ? url += '&dev=true' : '';
				app.stats ? url += '&stats=true' : '';
				app.embedded ? url += '&embedded=true' : '';
				window.location.href = url;
			  },

			  initGui: function () {
				let self = this;

				const domOverlay = document.getElementById("ar-overlay");
				const missionBtn = document.getElementById("missionBtn");
				const toolsBtn = document.getElementById("toolsBtn");
				const replaceButton = document.getElementById("replace-button");
				const wireframe = document.getElementById("wireframe");
				const clipping = document.getElementById("clipping");
				const texture = document.getElementById("texture");
				const freezeShot = document.getElementById("shot");
				const distanceSlider = document.getElementById("distance-slider");
				const closeButton = document.querySelector("#gui-ar-close-button");
				const helpCont = document.querySelector('.help-container');
				const helpButton = document.querySelector('.help-symbol');

				//first contact variables
				self.firstContactMission = false;
				self.firstContactTool = false;
				self.firstContactInventory = false;

				//after model loaded show welcome message
				self.el.addEventListener("model-loaded", function (e) {
					const arButtonEl = document.querySelector(app.modelViewer.ar.buttonSetup.id);
					const colors = JSON.parse(arButtonEl.getAttribute('data-colors'));
					const func = arButtonEl.getAttribute('data-func');
					const iconElement = arButtonEl.querySelector('.icon');
					iconElement.src = app.assets.icon[func].src['pearlwhite'];
					arButtonEl.classList.add(colors.button.background);
					arButtonEl.classList.remove('disabled');
				  !self.modelLoaded && arButtonEl.addEventListener('click', self.startAR, { once: true });
				  self.modelLoaded = true;
				});

				//after start AR
				self.el.addEventListener("enter-vr", function (e) {
				  //show welcome message
				  let message = {
					type: null,
					content: app.arViewer.startPlacing,
					color: 'terracotta',
					shadow: null,
					buttonSetup: [
					  { label: app.arViewer.startPlacingButton, color: 'pearlwhite', shadow: 'coalgrey' }
					  ],
					showClose: false,
				  }

				  app.gui.message.setMessage(message);
				  app.gui.message.buttons.button[0].element.addEventListener('click', (e) => {
					self.el.emit("ready-for-placing", null, true);
				  }, { once: true });

				  domOverlay.classList.remove("hide");
				  activateButton(null);
				});

				//after object is placed, gets information if first contact from local storage
				self.el.addEventListener("placingAchieved", function (e) {
				  helpCont.classList.remove("hide");
				  let storedValue = JSON.parse(localStorage.getItem('firstContact'));
				  if (storedValue === false) self.firstContact = storedValue;
				  else self.firstContact = e.detail;
				  if (self.firstContact) {
					let message = {
					  type: null,
					  content: self.missionExisting ? app.arViewer.firstContactWithMission : app.arViewer.firstContactWithoutMission,
					  color: 'skyblue', 
					  shadow: null,
					  buttonSetup: null,
					  showClose: true
					}
					self.el.emit("showFirstContactMessage", null, false);
					app.gui.message.setMessage(message);
					app.gui.message.closeEl.addEventListener('click', (evt) => {
					  let rotation = document.getElementById('rot-handle');
					  self.el.setAttribute('controller', {
						raycaster: true,
						tool: false,
						mission: false,
						inventory: false,
						rotate: true,
						noMission: true
					  });
					  self.el.emit('start-tooltip', { description: app.arViewer.rotationTip, point: rotation }, true);
					}, { once: true });
				  } else {
					self.el.setAttribute('controller', {
					  raycaster: true,
					  tool: false,
					  mission: false,
					  inventory: false,
					  rotate: true,
					  noMission: true
					});
				  }
				});

				// exit ar mode
				self.el.addEventListener("exit-vr", function () {
				  self.cancelAR();
				});

				// menu for mission and tools
				function activateButton(button) {
				  missionBtn.classList.remove("active");
				  toolsBtn.classList.remove("active");
				  if (button != null) button.classList.add("active");
				}
				//if ar mode is used for the first time
				self.el.addEventListener("showFirstContactMessage", function () {
				  self.firstContactMission = true;
				  self.firstContactTool = true;
				  self.firstContactInventory = true;
				})
				// mission menu button clicked
				missionBtn.addEventListener("click", () => {
				  if (missionBtn.classList.contains('active')) {
					self.el.setAttribute("controller", {
					  mission: false,
					  tool: false,
					  rotate: true,
					  raycaster: app.arViewer.inMission ? false : true,
					  inventory: false,
					  noMission: app.arViewer.inMission ? false : true,
					})
					activateButton(null);

				  } else {
					activateButton(missionBtn);
					if (self.firstContactMission) {
					  let message = {
						type: null,
						content: app.arViewer.firstContactMission,
						color: 'terracotta',
						shadow: null,
						buttonSetup: [
						  { label: app.arViewer.allRight, color: 'pearlwhite', shadow: 'coalgrey' }
						  ],
						showClose: false
					  }
					  app.gui.message.setMessage(message);
					  self.el.setAttribute("controller", {
						mission: true,
						tool: false,
						raycaster: false,
						rotate: false,
						inventory: false,
						noMission: false
					  });
					  app.gui.message.buttons.button[0].element.addEventListener('click', () => {
						app.gui.message.hideMessage(true);
						self.el.setAttribute("controller", {
						  mission: true,
						  tool: false,
						  rotate: true,
						  raycaster: true,
						  inventory: true,
						  noMission: false
						});
					  }, { once: true });
					  self.firstContactMission = false;

					} else {
					  self.el.setAttribute("controller", {
						mission: true,
						tool: false,
						raycaster: true,
						rotate: true,
						inventory: true,
						noMission: false
					  });
					}
					if (!app.arViewer.inMission) {
					  app.arViewer.inMission = true;
					  //start preparation
					  self.activatePreparation();
					}
				  }
				});

				//tools menu button clicked
				toolsBtn.addEventListener("click", () => {
				  if (toolsBtn.classList.contains('active')) {
					self.el.setAttribute("controller", {
					  mission: false,
					  tool: false,
					  rotate: true,
					  raycaster: app.arViewer.inMission ? false : true,
					  inventory: false,
					  noMission: app.arViewer.inMission ? false : true,
					})
					activateButton(null);
				  } else {
					activateButton(toolsBtn);
					if (self.firstContactTool) {

					  self.el.setAttribute("controller", {
						mission: false,
						tool: false,
						rotate: false,
						raycaster: false,
						inventory: false,
						noMission: false
					  });

					  let message = {
						type: null,
						content: app.arViewer.firstContactTool,
						color: 'terracotta',
						shadow: null,
						buttonSetup: [
						  { label: app.arViewer.allRight, color: 'pearlwhite', shadow: 'coalgrey' }
						  ], 
						showClose: false
					  }
					  app.gui.message.setMessage(message);

					  app.gui.message.buttons.button[0].element.addEventListener('click', () => {
						app.gui.message.hideMessage(true);
						self.el.setAttribute("controller", {
						  mission: false,
						  tool: true,
						  rotate: true,
						  raycaster: false,
						  inventory: false,
						  noMission: false
						});
					  }, { once: true });

					  self.firstContactTool = false;
					} else {
					  self.el.setAttribute("controller", {
						mission: false,
						tool: true,
						rotate: true,
						raycaster: false,
						inventory: false,
						noMission: false
					  });
					}
				  }

				});
				//replace object button
				replaceButton.addEventListener("click", function () {
				  self.el.emit("new-placement", null, true);
				  self.el.setAttribute("controller", {
					rotate: false,
					raycaster: false,
					mission: false,
					tool: false,
				  });
				  activateButton(null);
				});
				//tools toggle wireframe
				wireframe.addEventListener("change", () => {
				  wireframe.checked
					? self.el.setAttribute("tools", "wireframe", "true")
					: self.el.setAttribute("tools", "wireframe", "false");
				});
				//tools toggle texture
				texture.addEventListener("change", () => {
				  texture.checked
					? self.el.setAttribute("tools", "texture", "true")
					: self.el.setAttribute("tools", "texture", "false");
				});
				//tools toggle clipping
				clipping.addEventListener("change", () => {
				  if (clipping.checked) {
					self.el.setAttribute("tools", "clipping", "true");
					freezeShot.parentElement.parentElement.classList.remove('hide');
					distanceSlider.parentElement.classList.remove('hide');
				  } else {
					self.el.setAttribute("tools", "clipping", "false");
					freezeShot.parentElement.parentElement.classList.add('hide');
					distanceSlider.parentElement.classList.add('hide');
				  }
				});
				//tools toggle freeze
				freezeShot.addEventListener("change", () => {
				  freezeShot.checked
					? self.el.setAttribute("tools", "shot", "true")
					: self.el.setAttribute("tools", "shot", "false");
				});
				//tools slider distance plane
				distanceSlider.addEventListener('input', (event) => {
				  self.el.emit("distance-changed", { dist: event.target.value }, false);
				})
				//blocks rotation for slider input
				distanceSlider.addEventListener('touchstart', (event) => {
				  self.el.emit("pause-interaction", { rotate: false, tools: true }, false);
				})

				distanceSlider.addEventListener('touchend', (event) => {
				  self.el.emit("play-interaction", { rotate: true }, false);
				})

				//close button listener
				closeButton.addEventListener("click", closeAR);

				function closeAR(event) {
				  self.el.emit("pause-interaction", { rotate: false }, false);
				  let noMessage = app.gui.message.containerEl.classList.contains("hide");
				  if (!noMessage) {
					app.gui.message.containerEl.classList.add('hide');
				  }
				  const closePopup = document.getElementById('gui-ar-close-popup');
				  closePopup.classList.remove('hide');

				  app.gui.arViewer.close.button.buttonArray[0].addEventListener('click', exitAR, { once: true });
				  app.gui.arViewer.close.button.buttonArray[1].addEventListener('click', stayInAR, { once: true });
				  function exitAR(event) {
					app.gui.arViewer.close.button.buttonArray[0].removeEventListener('click', stayInAR);
					closePopup.classList.add('hide');
					self.el.exitVR();
				  }
				  function stayInAR(event) {
					if (!noMessage) {
					  app.gui.message.containerEl.classList.remove('hide');
					}
					app.gui.arViewer.close.button.buttonArray[0].removeEventListener('click', exitAR);
					closePopup.classList.add('hide');
					self.el.emit("play-interaction", { rotate: true }, false);
				  }
				}

				//help button
				helpButton.addEventListener("click", (e) => {
				  let message;
				  if (app.arViewer.toolMode) {
					message = {
					  type: null,
					  content: app.arViewer.firstContactTool,
					  color: 'terracotta',
					  shadow: null,
					  buttonSetup: null,
					  showClose: true
					}
				  }
				  else if (app.arViewer.missionMode) {
					message = {
					  type: null,
					  content: app.arViewer.firstContactMission,
					  color: 'skyblue',
					  shadow: null,
					  buttonSetup: null,
					  showClose: true
					}
				  } else {
					message = {
					  type: null,
					  content: self.missionExisting ? app.arViewer.firstContactWithMission : app.arViewer.firstContactWithoutMission,
					  color: 'duckyellow',
					  shadow: null,
					  buttonSetup: null,
					  showClose: true
					}
				  }
				  self.el.emit("pause-interaction", { rotate: false }, true);
				  app.gui.message.setMessage(message);
				  app.gui.message.closeEl.addEventListener('click', () => {
					app.gui.message.hideMessage(true);
					self.el.emit("play-interaction", { rotate: true }, false);
				  }, { once: true });
				})
			  },

			  loadJSON: function () {
				let self = this;
				fetch(app.filepaths.files + 'json/' + app.primaryKey + '.json')
				  .then((response) => response.json())
				  .then((json) => {
					self.loadModel(json);
					// init mission if tasks is declared
					if(!json.appData.tasks) { return; }
					if (json.appData.tasks.length > 0) {
					  self.loadMissions(json);
					  self.missionExisting = true;
					  //missions
					  self.initMissions(json);
					  //mission UI
					  self.initMissionUI();
					} else {
					  self.hideMissionBtn();
					  self.missionExisting = false;
					}
					app.dev && console.log('dev --- arViewer > json: \n', json);
				  })
				  .catch((error) => {
					app.dev && console.error("There was a problem with the fetch operation:", error);
				  });
			  },

			  hideMissionBtn: function () {
				let missionButton = document.getElementById('missionBtn');
				missionButton.classList.add("hide");
			  },

			  loadModel: function (json) {
				const object = document.getElementById("ar-object");
				const placeObject = document.getElementById("ar-place-object");
				const gltf_src = json.appData.model.animation ? `url(${app.filepaths.files + json.appData.model.animation})` : `url(${app.filepaths.files + json.appData.model.quality2k})`;
				const gltf_src_orig = app.filepaths.files + json.appData.model.quality2k;

				app.gltfLoader.load(
				  gltf_src_orig,
				  function (gltf) {
					//app.dev && console.log("dev --- gltf.scene", gltf.scene);
					app.arViewer.originalObject = gltf.scene;
					object.setAttribute("gltf-model", gltf_src);
					placeObject.setAttribute("gltf-model", gltf_src);
				  },
				  function (xhr) {
					//app.dev && console.log('dev --- ' + (xhr.loaded / xhr.total * 100) + '% loaded');
				  },
				  // called when loading has errors
				  function (error) {
					app.dev && console.log('An error happened', error);
				  }
				)
			  },

			  loadMissions: function (json) {
				let self = this;
				const missionsContainer = document.getElementById("missions");
				const noMissionsContainer = document.getElementById("noMissions");
				//radius of model calculated
				this.el.addEventListener("radius-set", function (event) {
				  //radius of the collidable visible points
				  let radius = event.detail.maxSize / 15;
				  //radius of the toolidable unvisible points
				  let bigRadius = event.detail.maxSize / 5;

				  for (let i = 0; i < json.appData.tasks.length; i++) {
					let currentTask = json.appData.tasks[i];
					let taskEl = document.createElement("a-entity");
					let currentClass = currentTask.id;
					taskEl.classList.add(currentClass);
					taskEl.classList.add(currentTask.taskType);
					switch (currentTask.taskType) {
					  case "dragDrop":
						taskEl.setAttribute("drag-drop-task", {
						  name: currentTask.name,
						  description_drag: currentTask.descriptionDrag,
						  description_drop: currentTask.descriptionDrop,
						  src_image: currentTask.symbol.imageType === "image" ? app.filepaths.files + app.filepaths.annotationMedia + currentTask.symbol.filename : app.filepaths.assets + currentTask.symbol.filename,
						  alt_image: currentTask.symbol.imageAlt,
						  caption_image: currentTask.symbol.imageCaption,
						  copyright_image: currentTask.symbol.fileCopyright,

						});
						let dragElement = document.createElement("a-entity");
						dragElement.classList.add(currentClass, "drag");

						dragElement.setAttribute("geometry", {
						  primitive: "circle",
						  radius: radius,
						});
						if (currentTask.searchable == 0) {
						  dragElement.setAttribute("material", {
							shader: "flat",
							src: '#dragIcon',
							transparent: true,
						  });
						} else {
						  dragElement.setAttribute("material", {
							shader: "flat",
							src: "#sprite",
							transparent: true,
						  });
						  dragElement.setAttribute("spritesheet-animation", {
							rows: 4,
							columns: 4,
							frameDuration: 0.08,
							loop: true,
						  });
						}
						dragElement.setAttribute("collider-check", {
						  description: app.arViewer.dragObject,
						});
						dragElement.setAttribute("distance-tracker", "");
						dragElement.setAttribute(
						  "position",
						  formatPos(currentTask.positionDrag)
						);
						dragElement.setAttribute("rotation", "-90 0 0");

						taskEl.appendChild(dragElement);
						let dragTipElement = document.createElement("a-entity");
						dragTipElement.classList.add(currentClass, "drag");
						dragTipElement.setAttribute("geometry", {
						  primitive: "circle",
						  radius: bigRadius,
						});
						dragTipElement.setAttribute("collider-check", {
						  description: app.arViewer.dragObject,
						});
						dragTipElement.setAttribute("position",
						  formatPos(currentTask.positionDrag));
						dragTipElement.setAttribute("rotation", "-90 0 0");
						dragTipElement.object3D.visible = false;
						taskEl.appendChild(dragTipElement);
						if (!currentTask.dependable) {
						  dragElement.classList.add("collidable");
						  dragTipElement.classList.add("toolidable");
						} else {
						  dragElement.object3D.visible = false;
						}

						let dropElement = document.createElement("a-entity");
						dropElement.classList.add(currentClass, "drop");
						dropElement.setAttribute("geometry", {
						  primitive: "plane",
						  height: radius * 2,
						  width: radius * 2,
						});
						dropElement.setAttribute("material", {
						  shader: "flat",
						  src: "#placer",
						  transparent: true,
						});
						dropElement.setAttribute("collider-check", {
						  description: app.arViewer.dropObject,
						});
						dropElement.setAttribute("turn-to-camera", "");
						dropElement.object3D.visible = false;
						dropElement.setAttribute(
						  "position",
						  formatPos(currentTask.positionDrop)
						);
						taskEl.appendChild(dropElement);
						let dropTipElement = document.createElement("a-entity");
						dropTipElement.classList.add(currentClass, "tipDrop");
						dropTipElement.setAttribute("geometry", {
						  primitive: "circle",
						  radius: bigRadius,
						});
						dropTipElement.setAttribute("collider-check", {
						  description: app.arViewer.dropObject,
						});
						dropTipElement.setAttribute("position",
						  formatPos(currentTask.positionDrop));
						dropTipElement.setAttribute("turn-to-camera", "");
						dropTipElement.object3D.visible = false;
						taskEl.appendChild(dropTipElement);
						break;
					  case "point":
						taskEl.setAttribute("point-task", {
						  name: currentTask.name,
						  description: currentTask.description,
						  searchable: currentTask.searchable,
						});
						if (currentTask.image) {
						  taskEl.setAttribute("point-task", {
							src_image: app.filepaths.files + app.filepaths.annotationMedia + currentTask.image.filename,
							alt_image: currentTask.image.imageAlt,
							caption_image: currentTask.image.imageCaption,
							copyright_image: currentTask.image.fileCopyright,
						  })
						}
						if (currentTask.audio) {
						  taskEl.setAttribute("point-task", {
							src_audio: app.filepaths.files + app.filepaths.annotationMedia + currentTask.audio.filename,
							copyright_audio: currentTask.audio.fileCopyright
						  });
						}
						let element = document.createElement("a-entity");
						element.classList.add(currentClass);

						element.setAttribute("geometry", {
						  primitive: "circle",
						  radius: radius,
						});
						if (currentTask.searchable == 0) {
						  element.setAttribute("material", {
							shader: "flat",
							src: '#exclamation',
							transparent: true,
						  });
						} else {
						  element.setAttribute("material", {
							shader: "flat",
							src: "#sprite",
							transparent: true,
						  });
						  element.setAttribute("spritesheet-animation", {
							rows: 4,
							columns: 4,
							frameDuration: 0.08,
							loop: true,
						  });
						}
						element.setAttribute("collider-check", {
						  description: app.arViewer.activatePoint,
						});
						element.setAttribute("distance-tracker", "");
						element.setAttribute("turn-to-camera", "");
						element.setAttribute("position", formatPos(currentTask.position));
						taskEl.appendChild(element);
						let tipElement = document.createElement("a-entity");
						tipElement.classList.add(currentClass);
						tipElement.setAttribute("geometry", {
						  primitive: "circle",
						  radius: bigRadius,
						});
						tipElement.setAttribute("collider-check", {
						  description: app.arViewer.activatePoint,
						});
						tipElement.setAttribute("position",
						  formatPos(currentTask.position));
						tipElement.setAttribute("turn-to-camera", "");
						tipElement.object3D.visible = false;
						taskEl.appendChild(tipElement);
						if (!currentTask.dependable) {
						  element.classList.add("collidable");
						  tipElement.classList.add("toolidable");
						} else {
						  element.object3D.visible = false;
						}

						break;
					  case "quiz":
						taskEl.setAttribute("quiz-task", {
						  name: currentTask.name,
						  description: currentTask.description,
						  answers: currentTask.answers,
						  rightAnswer: currentTask.rightAnswer,
						  searchable: currentTask.searchable,
						});
						let quizEl = document.createElement("a-entity");
						quizEl.classList.add(currentClass);

						quizEl.setAttribute("geometry", {
						  primitive: "circle",
						  radius: radius,
						});
						if (currentTask.searchable === 0) {
						  quizEl.setAttribute("material", {
							shader: "flat",
							src: "#question",
							transparent: true,
						  });
						}
						else {
						  quizEl.setAttribute("material", {
							shader: "flat",
							src: "#sprite",
							transparent: true,
						  });
						  quizEl.setAttribute("spritesheet-animation", {
							rows: 4,
							columns: 4,
							frameDuration: 0.08,
							loop: true,
						  });
						}

						quizEl.setAttribute("collider-check", {
						  description: app.arViewer.activateQuiz,
						});
						quizEl.setAttribute("distance-tracker", "");
						quizEl.setAttribute("turn-to-camera", "");
						quizEl.setAttribute("position", formatPos(currentTask.position));
						taskEl.appendChild(quizEl);
						let tipQuizEl = document.createElement("a-entity");
						tipQuizEl.classList.add(currentClass);
						tipQuizEl.setAttribute("geometry", {
						  primitive: "circle",
						  radius: bigRadius,
						});
						tipQuizEl.setAttribute("collider-check", {
						  description: app.arViewer.activateQuiz,
						});
						tipQuizEl.setAttribute("position",
						  formatPos(currentTask.position));
						tipQuizEl.setAttribute("turn-to-camera", "");
						tipQuizEl.object3D.visible = false;
						taskEl.appendChild(tipQuizEl);
						if (!currentTask.dependable) {
						  quizEl.classList.add("collidable");
						  tipQuizEl.classList.add("toolidable");
						} else {
						  quizEl.object3D.visible = false;
						}

						break;
					  case "animation":
						taskEl.setAttribute("animation-task", {
						  name: currentTask.name,
						  repetition: currentTask.animLoop,
						  animName: currentTask.animName,
						  animFinished: currentTask.animFinished,
						  deactivatesAnimName: currentTask.deactivatesAnimName,
						  descriptionStart: currentTask.descriptionStart,
						  descriptionEnd: currentTask.descriptionEnd

						})
						let animationEl = document.createElement("a-entity");
						animationEl.classList.add(currentClass);
						animationEl.setAttribute("geometry", {
						  primitive: "circle",
						  radius: radius,
						});
						animationEl.setAttribute("material", {
						  shader: "flat",
						  src: "#playAnim",
						  transparent: true,
						});
						animationEl.setAttribute("collider-check", {
						  description: currentTask.name,
						});
						animationEl.setAttribute("distance-tracker", "");
						animationEl.setAttribute("turn-to-camera", "");
						animationEl.setAttribute("position", formatPos(currentTask.position));
						taskEl.appendChild(animationEl);

						let tipAnimEl = document.createElement("a-entity");
						tipAnimEl.classList.add(currentClass);
						tipAnimEl.setAttribute("geometry", {
						  primitive: "circle",
						  radius: bigRadius,
						});
						tipAnimEl.setAttribute("collider-check", {
						  description: currentTask.name,
						});
						tipAnimEl.setAttribute("position",
						  formatPos(currentTask.position));
						tipAnimEl.setAttribute("turn-to-camera", "");
						tipAnimEl.object3D.visible = false;
						taskEl.appendChild(tipAnimEl);
						if (!currentTask.dependable) {
						  animationEl.classList.add("collidable");
						  tipAnimEl.classList.add("toolidable");
						} else {
						  animationEl.object3D.visible = false;
						}

						break;
					  case "preparation":
						self.preparation = currentTask.animName;
						continue;
					}

					if (currentTask.mission) {
					  missionsContainer.appendChild(taskEl);
					} else {
					  taskEl.classList.add("noMission");
					  noMissionsContainer.appendChild(taskEl);
					}
				  }
				  function formatPos(position) {
					return position.replace(/m/g, "");
				  }
				  self.initInventory();
				}, { once: true });
			  },

			  initMissionUI: function () {
				let self = this;
				self.completed = false;

				//init points UI overview
				this.scoreField = document.getElementById("score");
				this.scoreField.textContent = `0/${this.sumPoints}`;

				//click listener
				const scoreCont = document.getElementById("score-container");
				scoreCont.addEventListener("click", function (e) {
				  scoreCont.classList.add("hide");
				  self.showMissionPopup(self.completed);
				  self.el.setAttribute("controller", {
					raycaster: false,
					inventory: false,
					rotate: false,
				  });
				});
			  },

			  initMissions: function (json) {
				let self = this;
				//global variables
				self.missions = [];
				self.noMissions = [];
				self.sumPointsPerCategory = { dragDrop: 0, point: 0, quiz: 0, animation: 0 };
				self.currentPointsPerCategory = { dragDrop: 0, point: 0, quiz: 0, animation: 0 };
				self.sumPoints = 0
				self.currentPoints = 0;

				// init missions array and sum points per category
				for (let mission of json.appData.tasks) {
				  if (mission.mission) {
					self.missions.push({
					  taskType: mission.taskType,
					  id: mission.id,
					  done: false,
					  activates: mission.activates,
					  depends: mission.dependable,
					});
					switch (mission.taskType) {
					  case "dragDrop":
						self.sumPointsPerCategory.dragDrop++;
						break;
					  case "point":
						self.sumPointsPerCategory.point++;
						break;
					  case "quiz":
						self.sumPointsPerCategory.quiz++;
						break;
					  case "animation":
						self.sumPointsPerCategory.animation++;
						break;
					}
					if (!(mission.taskType == "preparation")) {
					  self.sumPoints++;
					}

				  } else {
					self.noMissions.push({
					  taskType: mission.taskType,
					  id: mission.id,
					  activates: mission.activates,
					  depends: mission.dependable,
					})
				  }
				}

				//if point is achieved
				this.el.addEventListener("point-achieved", function (event) {
				  self.solveMission(event.detail.pointID);
				});
			  },

			  showMissionPopup: function(completed) {
				let self = this;

				let message = {
				  type: app.arViewer.overview,
				  content: getContent(completed),
				  color: 'pearlwhite',
				  shadow: 'shadow-terracotta',
				  buttonSetup: [
					completed ? { label: app.arViewer.restartMissionButton, color: 'duckyellow', shadow: 'shadowduckyellow' } : {}
					],
				  showClose: true,
				}

				app.gui.message.setMessage(message);

				if (completed) app.gui.message.buttons.button[0].element.addEventListener('click', this.restartMissions, { once: true });

				const scoreCont = document.getElementById("score-container");

				app.gui.message.closeEl.addEventListener('click', function (e) {
				  scoreCont.classList.remove("hide");
				  self.el.setAttribute("controller", {
					raycaster: true,
					inventory: true,
					rotate: true,
				  });
				}, { once: true });

				function getContent(completed) {
				  const missionTexts = app.arViewer.missionOverviewText;
				  let content = '';
				  content += completed ? app.arViewer.solveAllMissions : app.arViewer.solveMissions;
				  let sumPointsValues = Object.values(self.sumPointsPerCategory);
				  let currentPointsValues = Object.values(self.currentPointsPerCategory);
				  for (let i = 0; i < sumPointsValues.length; i++) {
					if (sumPointsValues[i] < 1) continue;
					let pointLine =
					  '<div class="book-container">'
					  + `<img src="${app.assets.ar.marker['book'].src}" alt="${app.assets.ar.marker['book'].alt}" height="50px">`
					  + `<p>${currentPointsValues[i]}/${sumPointsValues[i]} ${missionTexts[i]}</p></div>`
					content += pointLine;
				  }
				  return content;
				}
			  },

			  initInventory: function () {
				let self = this;
				//inventory variables
				self.inventory = [];
				self.oneSelected = false;
				self.modelLoaded = false;

				//each dropzone has one specific place gui element
				self.dropZones = document.querySelectorAll(".drop");
				const inventoryCont = document.getElementById("inventory");
				for (let i = 0; i < self.dropZones.length; i++) {
				  let roundCont = document.createElement("div");
				  roundCont.setAttribute("id", self.getId(self.dropZones[i].classList[0]));
				  roundCont.setAttribute("class", "round-container hide");
				  let imgElement = document.createElement("img");
				  imgElement.setAttribute("alt", "Object Image");
				  roundCont.appendChild(imgElement);
				  inventoryCont.appendChild(roundCont);
				}
				this.initInventoryClick();
				//element gets draged
				self.el.addEventListener("element-added-inventory", function (event) {
				  if (self.firstContactInventory) {
					app.gui.message.showTooltipOverlay(app.arViewer.clickMeTip);
					app.gui.message.tooltipElOverlay.style.left = '20%';
					app.gui.message.tooltipElOverlay.style.top = '70%';
				  }
				  const place = document.querySelector(
					`#inventory div[id="${self.getId(event.detail.origin.classList[0])}"]`
				  );
				  place.classList.remove("hide");
				  self.inventory.push({ place: place, el: event.detail.origin });
				  const img = place.querySelector("img");
				  img.src = event.detail.src;
				  self.dropZones = document.querySelectorAll(".drop");
				  //show all drop zones 
				  self.dropZones.forEach((element) => {
					element.object3D.visible = true;
				  });
				});
				//element gets dropped
				self.el.addEventListener("element-dropped-inventory", function (event) {
				  const place = document.querySelector(
					`#inventory div[id="${self.getId(event.detail.origin.classList[0])}"]`
				  );
				  event.detail.origin.classList.remove("selected");
				  place.classList.add("hide");
				  place.classList.remove("clicked");
				  self.inventory = self.inventory.filter((item) => item.place !== place);
				  self.oneSelected = false;
				  //hide drop zones and make them not collidable
				  self.dropZones = document.querySelectorAll(".drop");
				  self.dropZones.forEach((element) => {
					element.classList.remove("collidable");
				  });
				  self.tipDropZones = document.querySelectorAll(".tipDrop");
				  self.tipDropZones.forEach((element) => {
					element.classList.remove("toolidable");
				  });
				});
			  },

			  getId: function (origin) {
				let match = origin.match(/\d+/);
				let id = match ? parseInt(match[0], 10) : null;
				return id;
			  },

			  initInventoryClick: function () {
				let places = document.querySelectorAll(".round-container");
				let self = this;
				let i = 0;
				//each round-container(place) listens to a click event
				places.forEach((place) => {
				  i++;
				  place.addEventListener("click", () => {
					if (self.firstContactInventory) {
					  app.gui.message.hideTooltipOverlay();
					  self.firstContactInventory = false;
					}
					let placeId = i;
					//if place is already clicked
					if (place.classList.contains("clicked")) {
					  place.classList.remove("clicked");
					  //no drop zone is selectable
					  for (let element of self.inventory) {
						element.el.classList.remove("selected");
					  }
					  self.oneSelected = false;
					}
					// place was not selected
					else {
					  for (let element of self.inventory) {
						//other places get not clicked
						if (element.place != place) {
						  element.place.classList.remove("clicked");
						  element.el.classList.remove("selected");
						} else {
						  //set clicked and related drop zone to selected
						  element.place.classList.add("clicked");
						  element.el.classList.add("selected");

						  self.oneSelected = true;
						}
					  }
					}
					//if one place is selected the drop zones are collidable, if not not
					const dropZones = document.querySelectorAll(".drop");
					dropZones.forEach((element) => {
					  if (self.oneSelected) {
						if (!element.classList.contains("collidable")) {
						  element.classList.add("collidable");
						}
					  } else {
						element.classList.remove("collidable");
					  }
					});
					const tipDropZones = document.querySelectorAll(".tipDrop");
					tipDropZones.forEach((element) => {
					  if (self.oneSelected) {
						if (!element.classList.contains("toolidable")) {
						  element.classList.add("toolidable");
						}
					  } else {
						element.classList.remove("toolidable");
					  }
					});
				  });
				});
			  },

			  solveMission: function (pointID) {
				//mission is done

				let currentID = pointID;
				if (app.arViewer.missionMode) {
				  //add point general
				  this.currentPoints++;
				  this.scoreField.textContent = `${this.currentPoints}/${this.sumPoints}`;
				  for (let i = 0; i < this.missions.length; i++) {
					if (this.missions[i].id === currentID) {
					  this.missions[i].done = true;
					  if (this.missions[i].activates) {
						this.activateMission(this.missions[i].activates);
					  }
					}
				  }

				  //actualize points per category    
				  for (let i = 0; i < this.missions.length; i++) {
					if (this.missions[i].id === currentID) {
					  switch (this.missions[i].taskType) {
						case "dragDrop":
						  this.currentPointsPerCategory.dragDrop++;
						  break;
						case "point":
						  this.currentPointsPerCategory.point++;
						  break;
						case "quiz":
						  this.currentPointsPerCategory.quiz++;
						  break;
						case "animation":
						  this.currentPointsPerCategory.animation++;
						  break;
					  }
					}
				  }
				} else {

				  for (let i = 0; i < this.noMissions.length; i++) {
					if (this.noMissions[i].id === currentID) {

					  if (this.noMissions[i].activates) {
						this.activateNoMission(this.noMissions[i].activates);
					  }
					}
				  }
				}

				//all missions solved
				if (this.currentPoints === this.sumPoints) {
				  this.completed = true;
				  this.showMissionFinishedTip();
				  app.arViewer.inMission = false;

				}
			  },

			  activatePreparation: function () {
				let self = this;
				if (self.preparation) {
				  this.el.emit('startPreparation', { animNames: self.preparation }, false);

				  for (let i = 0; i < self.missions.length; i++) {
					if (self.missions[i].taskType === "preparation") {
					  self.missions[i].done = true;
					  if (self.missions[i].activates) {

						self.activateMission(self.missions[i].activates);
					  }
					}
				  }
				}
			  },

			  activateMission: function (depId) {
				const missionGroup = document.getElementById("missions");
				const dependableMission = missionGroup.querySelector("." + depId).object3D;
				dependableMission.children[0].visible = true;
				dependableMission.children[0].el.classList.add("collidable");
				dependableMission.children[1].el.classList.add("toolidable");
				this.el.emit('mission-activated', { id: depId }, false);
			  },

			  activateNoMission: function (id) {
				const noMissionGroup = document.getElementById("noMissions");
				const dependableNoMission = noMissionGroup.querySelector("." + id).object3D;
				dependableNoMission.children[0].visible = true;
				dependableNoMission.children[0].el.classList.add("collidable");
				dependableNoMission.children[1].el.classList.add("toolidable");
			  },

			  showMissionFinishedTip: function () {
				app.gui.message.showTooltipOverlay(app.arViewer.clickTip);
				app.gui.message.tooltipElOverlay.style.left = '5%';
				app.gui.message.tooltipElOverlay.style.top = '7%';
			  },

			  restartMissions: function (event) {
				app.gui.message.buttons.button[0].element.removeEventListener("click", this.restartMissions);
				app.gui.message.hideMessage(true);
				this.completed = false;
				for (let mission of this.missions) {
				  mission.done = false;
				}
				this.el.setAttribute("controller", {
				  raycaster: true,
				  inventory: true,
				  reverse: true,
				  rotate: true,
				});
			  },

			  resetActivatedMissions: function () {
				const self = this;
				const missionGroup = document.getElementById("missions");
				for (let mission of this.missions) {
				  if (mission.depends === true) {
					let missionEl = missionGroup.querySelector("." + mission.id).object3D;
					missionEl.children[0].visible = false;
					missionEl.children[0].el.classList.remove("collidable");
					missionEl.children[1].el.classList.remove("toolidable");
				  }
				}
				self.activatePreparation();
			  },

			  resetScore: function () {
				const scoreCont = document.getElementById("score-container");
				app.gui.message.hideTooltipOverlay();
				scoreCont.classList.remove("hide");
				this.currentPoints = 0;
				Object.keys(this.currentPointsPerCategory).forEach(key => {
				  this.currentPointsPerCategory[key] = 0;
				});

				this.scoreField.textContent = `${this.currentPoints}/${this.sumPoints}`;
			  },
			});

			//HIDE-ON-START-AR: hide 3d objects in AR while placing them
			AFRAME.registerComponent("hide-on-start-ar", {
			  init: function () {
				let self = this;
				self.el.sceneEl.addEventListener("start-placing", function () {
				  this.wasVisible = self.el.object3D.visible;
				  if (self.el.sceneEl.is("ar-mode")) {
					self.el.object3D.visible = false;
				  }
				});
			  },
			});

			//AR-HIT-TEST-SPECIAL: place object with 3D-object
			AFRAME.registerComponent("ar-hit-test-special", {

			  init: function () {
				const self = this;
				self.xrHitTestSource = null;
				self.viewerSpace = null;
				self.refSpace = null;
				self.firstTime = true;
				self.objectContainerEl = document.getElementById("ar-object-container");

				self.placeObject = self.placeObject.bind(self);
				self.placeEnd = self.placeEnd.bind(self);
				self.placeAgain = self.placeAgain.bind(self);
				self.showMessage = self.showMessage.bind(self);

				self.el.sceneEl.renderer.xr.addEventListener("sessionend", (ev) => {
				  self.el.viewerSpace = null;
				  self.el.refSpace = null;
				  self.el.xrHitTestSource = null;
				});

				self.el.sceneEl.addEventListener("ready-for-placing", (ev) => {
				  let session = self.el.sceneEl.renderer.xr.getSession();
				  self.hideMenu();
				  self.firstPose = false;
				  self.el.emit("start-placing", null, true);
				  self.showMessage("start");

				  session.requestReferenceSpace("viewer").then((space) => {
					self.viewerSpace = space;
					session.requestHitTestSource({ space: self.viewerSpace, offsetRay: new XRRay({ y: -0.3 }) })
					  .then((hitTestSource) => {
						self.xrHitTestSource = hitTestSource;
					  });
				  });

				  session.requestReferenceSpace("local").then((space) => {
					self.refSpace = space;
				  });

				  self.el.addEventListener("first-pose", function () {
					self.showMessage("move");
					self.el.object3D.visible = true;
				  });

				  self.el.sceneEl.addEventListener("new-placement", function () {
					self.el.emit("start-placing", null, true);
					self.hideMenu();
					self.el.object3D.visible = true;
					self.finished = false;
					self.showMessage("move");
				  });
				});
			  },

			  showMessage: function (step) {
				const text = app.arViewer.placeMessages;
				let message;
				if (step == "start") {
				  message = {
					type: null,
					content: '<p>' + text[0] + '</p>',
					color: 'pearlwhite',
					shadow: 'shadow-skyblue',
					buttonSetup: null,
					showClose: false,
				  }
				  app.gui.message.setMessage(message);
				} else if (step == "move") {
				  message = {
					type: null,
					content: '<p>' + text[1] + '</p>',
					color: 'pearlwhite',
					shadow: 'shadow-skyblue',
					buttonSetup: [
					  { label: app.arViewer.place, color: 'coalgrey', shadow: 'shadow-coalgrey' }
					  ],
					showClose: false
				  }
				  app.gui.message.setMessage(message);
				  app.gui.message.buttons.button[0].element.addEventListener("click", this.placeObject, { once: true });
				} else if (step == "placed") {
				  message = {
					type: null,
					content: '<p>' + text[2] + '</p>',
					color: 'pearlwhite',
					shadow: 'shadow-skyblue',
					buttonSetup: [
					  { label: app.arViewer.yes, color: 'coalgrey', shadow: 'shadow-coalgrey' },
					  { label: app.arViewer.placeNew, color: 'coalgrey', shadow: 'shadow-coalgrey' }
					  ],
					showClose: false
				  }
				  app.gui.message.setMessage(message);
				  app.gui.message.buttons.button[0].element.addEventListener("click", this.placeEnd, { once: true });
				  app.gui.message.buttons.button[1].element.addEventListener("click", this.placeAgain, { once: true });
				}
			  },

			  showMenu: function () {
				const menu = document.querySelector(".bottom-menu");
				menu.classList.remove("hide");
			  },

			  hideMenu: function () {
				const menu = document.querySelector(".bottom-menu");
				menu.classList.add("hide");
			  },

			  placeObject: function (event) {
				let position = this.el.getAttribute("position");

				this.objectContainerEl.object3D.position.set(position.x, position.y, position.z);
				this.objectContainerEl.object3D.visible = true;
				this.el.object3D.visible = false;

				let camera = this.el.sceneEl.camera;
				let cameraPos = new THREE.Vector3();
				camera.getWorldPosition(cameraPos);
				this.objectContainerEl.object3D.lookAt(cameraPos);
				this.objectContainerEl.object3D.rotation.x = 0;
				this.objectContainerEl.object3D.rotation.z = 0;

				//anchor for position
				let anchoredComponent = this.objectContainerEl.components.anchored;
				if (anchoredComponent) {
				  anchoredComponent.createAnchor(
					this.objectContainerEl.object3D.position,
					this.objectContainerEl.object3D.quaternion
				  );
				}
				this.showMessage("placed");

				this.finished = true;
			  },

			  placeEnd: function (event) {
				app.gui.message.buttons.button[1].element.removeEventListener("click", this.placeAgain);
				app.gui.message.hideMessage(true)
				this.el.emit("placingAchieved", this.firstTime, true);
				this.showMenu();
				this.firstTime = false;
			  },

			  placeAgain: function (event) {
				app.gui.message.buttons.button[0].element.removeEventListener("click", this.placeEnd);
				this.el.emit("new-placement", null, true);
			  },

			  tick: function () {
				if (this.el.sceneEl.is("ar-mode")) {

				  if (!this.viewerSpace || this.finished) return;

				  let frame = this.el.sceneEl.frame;
				  let xrViewerPose = frame.getViewerPose(this.refSpace);

				  if (this.xrHitTestSource && xrViewerPose) {
					let hitTestResults = frame.getHitTestResults(this.xrHitTestSource);

					if (hitTestResults.length > 0) {
					  if (!this.firstPose) {
						this.el.emit("first-pose", null, false);
						this.firstPose = true;
					  }

					  let pose = hitTestResults[0].getPose(this.refSpace);

					  let inputMat = new THREE.Matrix4();
					  inputMat.fromArray(pose.transform.matrix);

					  let position = new THREE.Vector3();
					  position.setFromMatrixPosition(inputMat);
					  this.el.object3D.position.set(position.x, position.y, position.z);
					}
				  }
				}
			  }
			});

			//COLLIDER-CHECK: tracks raycast collision on each collidable/toolidable element, tests if object is in between
			AFRAME.registerComponent("collider-check", {
			  schema: {
				description: { type: "string", default: "" },
			  },

			  init: function () {
				let self = this;

				this.checkCursor = this.checkCursor.bind(this);
				self.el.addEventListener("raycaster-intersected", this.checkCursor);
				self.el.addEventListener("raycaster-intersected-cleared", (e) => {
				  if (self.el.classList.contains("collidable")) self.el.emit("collided-ended");
				  else if (self.el.classList.contains("toolidable")) self.el.emit("tool-collided-ended");
				});
			  },
			  update: function () {
				let self = this;
				self.el.removeEventListener("raycaster-intersected", self.checkCursor);
				self.el.addEventListener("raycaster-intersected", self.checkCursor);
			  },
			  checkCursor: function (event) {
				let self = this;
				let cursor = event.detail.el;
				let desc = this.data.description;
				let firstCollidedObject = cursor.components.raycaster.intersectedEls[0];
				if (firstCollidedObject.getAttribute("id") == "ar-object") return;
				//tests if mission element is collided but it is not app.arViewer.missionMode or the other way around then it returns
				if ((app.arViewer.missionMode && self.el.parentElement.classList.contains("noMission")) || (app.arViewer.inMission && self.el.parentElement.classList.contains("noMission"))) {
				  return;
				}
				if ((!app.arViewer.missionMode) && (!self.el.parentElement.classList.contains("noMission"))) {
				  return;
				}
				if (self.el.classList.contains("toolidable")) self.el.emit("tool-collided", { description: desc }, true);

				if (self.el.classList.contains("collidable")) {
				  self.el.emit("collided", true);
				  self.el.emit("tool-collided", { description: desc }, true);
				}

			  },
			});

			//ANIMATION-HANDLER: handles cursor animation
			AFRAME.registerComponent("animation-handler", {
			  init: function () {
				let self = this;
				let currentClass;
				let srcElement;
				let srcTipElement;
				let animationComplete = false;
				//animation to activate
				self.el.sceneEl.addEventListener("collided", function (event) {
				  // test if a new point is activated
				  srcElement = event.srcElement;
				  let from =
					currentClass == event.srcElement.classList
					  ? self.el.getAttribute("geometry").thetaLength
					  : 0;

				  self.el.setAttribute("animation", {
					dir: "normal",
					from: from,
					to: 360,
					easing: "easeInQuad",
				  });
				  self.el.emit(`startRing`, null, false);
				  //vibration for starting avtivation
				  navigator.vibrate(5);

				  currentClass = event.srcElement.classList;
				});
				//activate tooltip
				self.el.sceneEl.addEventListener("tool-collided", function (event) {
				  //add text
				  self.el.emit(
					"start-tooltip",
					{ description: event.detail.description, point: event.srcElement },
					true
				  );
				})
				//animation to reverse activation
				self.el.sceneEl.addEventListener("collided-ended", function (event) {

				  if (animationComplete) {

					return;
				  }
				  self.el.setAttribute("animation", {
					dir: "reverse",
					from: 0,
					to: self.el.getAttribute("geometry").thetaLength,
					easing: "easeOutQuad",
				  });
				  self.el.emit(`startRing`, null, false);
				  // remove text
				});
				self.el.sceneEl.addEventListener("tool-collided-ended", function (event) {
				  self.el.emit("stop-tooltip", null, true);
				});

				self.el.addEventListener("animationcomplete", function (event) {
				  if (self.el.getAttribute("geometry").thetaLength == 360) {
					self.el.setAttribute("geometry", "thetaLength", 0);
					//vibrate for acitivation
					navigator.vibrate([10, 50, 80]);
					srcTipElement = srcElement.nextElementSibling;
					//event for components: place-element
					self.el.emit("point-to-play-trigger", { point: srcElement, tipPoint: srcTipElement }, true);

					self.el.emit("stop-tooltip", null, true);
				  }
				});
			  },
			});

			//VISIBILITY-HANDLER: handles tooltip visibility
			AFRAME.registerComponent("visibility-handler", {
			  init: function () {
				let self = this;
				this.show = false;
				this.point = null;
				this.camera = this.el.object3D;
				self.el.sceneEl.addEventListener("start-tooltip", function (event) {
				  app.gui.message.hideTooltipAR();
				  self.show = true;
				  self.point = event.detail.point.object3D;
				  app.gui.message.showTooltipAR(event.detail.description);
				});
				self.el.sceneEl.addEventListener("stop-tooltip", function (event) {
				  app.gui.message.hideTooltipAR();
				  self.show = false;
				});
			  },
			  tick: function () {
				if (this.show) {
				  let targetPosition = new THREE.Vector3();
				  let canvas = document.querySelector('.a-canvas');
				  targetPosition.setFromMatrixPosition(this.point.matrixWorld);
				  targetPosition.project(this.camera.children[1]);

				  let targetScreenPosition = {
					x: Math.round((0.5 + targetPosition.x / 2) * (canvas.width / window.devicePixelRatio)),
					y: Math.round((0.5 - targetPosition.y / 2) * (canvas.height / window.devicePixelRatio))
				  }

				  app.gui.message.tooltipElAr.style.left = (targetScreenPosition.x - app.gui.message.tooltipElAr.clientWidth) + "px";
				  app.gui.message.tooltipElAr.style.top = (targetScreenPosition.y + 50) + "px";

				}
			  }
			});

			//TURN-TO-CAMERA: points turn to camera for better raycast interaction
			AFRAME.registerComponent("turn-to-camera", {
			  schema: { onlyYAxis: { type: "boolean", default: false } },
			  init: function () {
				this.cameraPos = new THREE.Vector3();
			  },
			  tick: function () {
				this.el.sceneEl.camera.getWorldPosition(this.cameraPos);
				let x = this.el.object3D.rotation.x;
				let z = this.el.object3D.rotation.z;
				this.el.object3D.lookAt(this.cameraPos);
				if (this.data.onlyYAxis) {
				  this.el.object3D.rotation.x = x;
				  this.el.object3D.rotation.z = z;
				  this.el.object3D.rotation.y = this.el.object3D.rotation.y - Math.PI / 2;
				}
			  },
			});

			//DISTANCE-TRACKER: the visibility of the points change dependend on the distance to the object,
			//if the points are not visible, they are also not collidable
			AFRAME.registerComponent("distance-tracker", {
			  init: function () {
				this.camera = document.getElementById("camera");
				this.selfPos = new THREE.Vector3();
				this.lastGroup = "";
				let self = this;

				//depending on the threshold the opacity is changed
				this.el.sceneEl.addEventListener("distance-far", (event) => {
				  self.el.object3D.children[0].el.setAttribute("material", "opacity", 0);
				  if (self.el.object3D.children[0].el.getAttribute("visible") === true) {
					self.el.object3D.children[0].el.classList.remove("collidable");
				  }

				});
				this.el.sceneEl.addEventListener("distance-middle", (event) => {
				  self.el.object3D.children[0].el.setAttribute("material", "opacity", 0.5);
				  if (self.el.object3D.children[0].el.getAttribute("visible") === true) {
					self.el.object3D.children[0].el.classList.add("collidable");
				  }
				});
				this.el.sceneEl.addEventListener("distance-near", (event) => {
				  self.el.object3D.children[0].el.setAttribute("material", "opacity", 1);
				});
			  },
			});

			//DISTANCE-LISTENER: tracks the distance between camera and object and emit events to distance-tracker
			AFRAME.registerComponent("distance-listener", {
			  schema: { enabled: { type: "boolean", default: false } },
			  init: function () {
				let self = this;
				this.camera = document.getElementById("camera");
				this.selfPos = new THREE.Vector3();

				this.el.sceneEl.addEventListener("radius-set", function (evt) {
				  let radius = evt.detail.radius;
				  self.distanceMiddle = radius * 2.5;
				  self.distanceLong = radius * 5;
				})
			  },
			  update: function () {
				this.lastGroup = "";
			  },
			  tick: function () {
				if (this.data.enabled) {
				  // tracks the distance between camera and parallel to y axis at the position of the object each frame and emits an event if the threshold is changed
				  let cameraPos = this.camera.object3D.position;
				  this.el.object3D.getWorldPosition(this.selfPos);
				  const dx = cameraPos.x - this.selfPos.x;
				  const dz = cameraPos.z - this.selfPos.z;
				  const distance = Math.sqrt(dx * dx + dz * dz);
				  if (distance > this.distanceLong && !(this.lastGroup == "far")) {
					this.lastGroup = "far";
					this.el.emit("distance-far", null, true);
					app.gui.message.showTooltipOverlay(app.arViewer.farAwayTip);
					app.gui.message.tooltipElOverlay.style.left = '5%';
					app.gui.message.tooltipElOverlay.style.top = '60%';
				  } else if (
					distance < this.distanceLong &&
					distance > this.distanceMiddle &&
					!(this.lastGroup == "middle")
				  ) {
					if (this.lastGroup == "far") {
					  app.gui.message.hideTooltipOverlay();
					}
					this.lastGroup = "middle";
					this.el.emit("distance-middle", null, true);
				  } else if (distance < this.distanceMiddle && !(this.lastGroup == "near")) {
					this.lastGroup = "near";
					this.el.emit("distance-near", null, true);
				  }
				}
			  },
			});

			//ROTATION-HANDLER: handles touch input and rotation angle
			AFRAME.registerComponent("rotation-handler", {
			  schema: { enabled: { type: "boolean", default: false } },
			  init: function () {
				const self = this;
				self.firstTime = true;
				self.canvas = document.querySelector('.a-dom-overlay');
				self.steps = 12;
				self.arrayPos = self.steps / 2;
				//get circle positions after radius is calculated
				self.el.sceneEl.addEventListener("radius-set", function (event) {
				  self.circlePos = [];
				  for (let t = 0; t <= 2 * Math.PI; t += Math.PI / self.steps) {
					self.circlePos.push({ t: t });
				  }
				});
				self.checkTouch = self.checkTouch.bind(self);
				self.trackTouch = self.trackTouch.bind(self);
				self.endTouch = self.endTouch.bind(self);
			  },
			  update: function () {
				const self = this;
				const containerEl = document.getElementById("ar-object-container");

				this.touches = [];

				this.pos = this.steps / 2;
				if (this.data.enabled) {
				  const circleContainer = this.el.object3D.parent;
				  //set container positon of circle handler
				  let posCont = containerEl.object3D.position;
				  circleContainer.position.set(posCont.x, posCont.y, posCont.z);
				  circleContainer.visible = true;

				  self.canvas.addEventListener("touchstart", this.checkTouch);
				} else {
				  this.el.object3D.parent.visible = false;
				  self.canvas.removeEventListener("touchstart", this.checkTouch);
				}
			  },
			  checkTouch: function (event) {
				//tests if self is clicked

				const self = this;
				const mouse = new THREE.Vector2();
				self.camera = self.el.sceneEl.camera;
				mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1; // convert to range (-1, 1)
				mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1; // convert to range (-1, 1)

				// Set the ray's origin and direction based on the camera and mouse coordinates
				const raycaster = new THREE.Raycaster();
				raycaster.setFromCamera(mouse, self.camera);

				// Find intersections between the ray and objects in the scene
				const intersects = raycaster.intersectObject(self.el.object3D);
				//if not clicked return
				if (intersects.length < 1) return;
				const rotHandle = document.getElementById('rot-handle');
				rotHandle.removeAttribute('material', 'src');
				rotHandle.setAttribute('material', 'color', '#FF7850');
				self.canvas.addEventListener("touchmove", self.trackTouch);
				self.el.emit("pause-interaction", { rotate: true }, true);
				if (self.firstTime) {
				  self.el.emit('stop-tooltip', null, true);
				  self.firstTime = false;
				}
				self.canvas.addEventListener("touchend", self.endTouch);
			  },
			  trackTouch: function (event) {
				this.touches.push(event.touches[0].clientX);
				let currentTouchDifference, convertedDifference;
				if (this.touches.length > 1) {
				  currentTouchDifference =
					this.touches[this.touches.length - 1] - this.touches[0];
				  convertedDifference = (currentTouchDifference / 10).toFixed(0);
				  this.pos = this.arrayPos - convertedDifference;
				  if (this.pos > this.circlePos.length - 1) {
					this.pos = this.pos - this.circlePos.length;
				  } else if (this.pos < 0) {
					this.pos = this.circlePos.length + this.pos;
				  }

				  //rotate container
				  const containerEl = document.getElementById("ar-object-container");
				  let rot = this.circlePos[this.pos].t;
				  containerEl.object3D.rotation.y = -(rot - Math.PI / 2);
				}
			  },
			  endTouch: function (event) {
				this.canvas.removeEventListener("touchmove", this.trackTouch);
				this.el.emit("play-interaction", { rotate: true }, true);
				this.touches.length = 0;
				this.arrayPos = this.pos;
				const rotControl = document.getElementById('rotation-ring');
				const rotHandle = document.getElementById('rot-handle');
				rotControl.setAttribute('material', 'src', '#rotateArrows');
				rotHandle.setAttribute('material', 'color', '#FAF0E6');

				this.canvas.removeEventListener("touchend", this.endTouch);
			  },
			});

			//GET-BOUNDING-BOX: after the model is loaded, it sets the size of the bounding-box and emits the radius of the rotation and the largest side
			AFRAME.registerComponent("get-bounding-box", {
			  init: function () {
				let self = this;
				const boundingBox = new THREE.Box3();
				const size = new THREE.Vector3();
				const ringEl = document.getElementById("rotation-ring");

				//wait until gtlf model is loaded
				self.el.addEventListener("model-loaded", function () {
				  app.arViewer.originalObject.traverse(function (child) {
					if (child.isMesh) {
					  boundingBox.setFromObject(child);
					  boundingBox.getSize(size);
					  //get radius
					  let radius = size.x > size.z ? size.x / 2 : size.z / 2;
					  let radiusWide = radius + (radius / 6);
					  let largest = Math.max(size.x, size.y, size.z);
					  //set radius
					  ringEl.setAttribute("geometry", {
						radius: radiusWide,
					  });
					  ringEl.children[0].object3D.position.x = radiusWide;
					  ringEl.children[0].setAttribute("geometry", "radius", radiusWide);
					  ringEl.children[1].object3D.position.x = radiusWide;
					  ringEl.children[1].setAttribute("geometry", "radius", radiusWide / 6);
					  //emit radius to rotation handler
					  self.el.emit(
						"radius-set",
						{ radius: radiusWide, maxSize: largest },
						true
					  );
					}
				  });
				});
			  },
			});

			/**
				SPRITESHEET-ANIMATION: Plays a spritesheet-based animation.
				Author: Lee Stemkoski
			*/
			AFRAME.registerComponent("spritesheet-animation", {
			  schema: {
				rows: { type: "number", default: 1 },
				columns: { type: "number", default: 1 },

				// set these values to play a (consecutive) subset of frames from spritesheet
				firstFrameIndex: { type: "number", default: 0 },
				lastFrameIndex: { type: "number", default: -1 }, // index is inclusive

				// goes from top-left to bottom-right.
				frameDuration: { type: "number", default: 1 }, // seconds to display each frame
				loop: { type: "boolean", default: true },
			  },

			  init: function () {
				this.repeatX = 1 / this.data.columns;
				this.repeatY = 1 / this.data.rows;

				if (this.data.lastFrameIndex == -1)
				  // indicates value not set; default to full sheet
				  this.data.lastFrameIndex = this.data.columns * this.data.rows - 1;

				this.mesh = this.el.getObject3D("mesh");

				this.frameTimer = 0;
				this.currentFrameIndex = this.data.firstFrameIndex;
				this.animationFinished = false;
			  },

			  tick: function (time, timeDelta) {
				// return if animation finished.
				if (this.animationFinished) return;

				this.frameTimer += timeDelta / 1000;

				while (this.frameTimer > this.data.frameDuration) {
				  this.currentFrameIndex += 1;
				  this.frameTimer -= this.data.frameDuration;

				  if (this.currentFrameIndex > this.data.lastFrameIndex) {
					if (this.data.loop) {
					  this.currentFrameIndex = this.data.firstFrameIndex;
					} else {
					  this.animationFinished = true;
					  return;
					}
				  }
				}

				let rowNumber = Math.floor(this.currentFrameIndex / this.data.columns);
				let columnNumber = this.currentFrameIndex % this.data.columns;

				let offsetY = (this.data.rows - rowNumber - 1) / this.data.rows;
				let offsetX = columnNumber / this.data.columns;

				if (this.mesh.material.map) {
				  this.mesh.material.map.repeat.set(this.repeatX, this.repeatY);
				  this.mesh.material.map.offset.set(offsetX, offsetY);
				}
			  },
			  remove: function () {
				this.mesh.material.map = null;
			  },
			});

			/**
			 * ANIMATION-MIXER
			 *  from: https://github.com/c-frame/aframe-extras/blob/master/src/loaders/animation-mixer.js and edited
			 * Player for animation clips. Intended to be compatible with any model format that supports
			 * skeletal or morph animations through THREE.AnimationMixer.
			 * See: https://threejs.org/docs/?q=animation#Reference/Animation/AnimationMixer
			 */
			const LoopMode = {
			  once: THREE.LoopOnce,
			  repeat: THREE.LoopRepeat,
			  pingpong: THREE.LoopPingPong
			};

			AFRAME.registerComponent('animation-mixer', {
			  schema: {
				startClip: { default: null },
				stopClip: { default: null },
				stopAllClip: { default: false },
				clampWhenFinished: { default: false, type: 'boolean' },
				repetition: { default: false, type: 'boolean' },
				startAt: { default: 0 }
			  },

			  init: function () {
				/** @type {THREE.Mesh} */
				this.model = null;
				/** @type {THREE.AnimationMixer} */
				this.mixer = null;
				/** @type {Array<THREE.AnimationAction>} */
				this.activeActions = [];

				const model = this.el.getObject3D('mesh');


				if (model) {
				  this.load(model);
				} else {
				  this.el.addEventListener('model-loaded', (e) => {
					this.load(e.detail.model);
					//app.dev && console.log("dev --- model", e.detail.model);
				  });
				}
			  },

			  load: function (model) {
				const el = this.el;
				const self = this;
				this.model = model;
				this.mixer = new THREE.AnimationMixer(model);
				this.animations = model.animations;
				this.mixer.addEventListener('loop', (e) => {
				  el.emit('animation-loop', { action: e.action, loopDelta: e.loopDelta });
				});
				this.mixer.addEventListener('finished', (e) => {
				  el.emit('animation-finished', { action: e.action, direction: e.direction });
				});
				el.sceneEl.addEventListener('startPreparation', (e) => {
				  self.stopAllAction();
				  let animNames = e.detail.animNames;
				  for (let anim of animNames) {
					self.playAction(anim, false, 0, true);
				  }


				});
				if (this.data.clip) this.update({});
			  },

			  remove: function () {
				if (this.mixer) this.mixer.stopAllAction();
			  },

			  update: function (prevData) {
				if (!prevData) return;
				if (this.data.startClip) {
				  this.playAction(this.data.startClip, this.data.repetition, this.data.startAt, this.data.clampWhenFinished);
				}
				if (this.data.stopClip) {
				  this.stopAction(this.data.stopClip);
				}
				if (this.data.stopAllClip) {
				  this.stopAllAction();
				}

			  },

			  stopAction: function (animName) {
				for (let i = 0; i < this.activeActions.length; i++) {
				  if (this.activeActions[i].getClip().name == animName) {
					this.activeActions[i].stop();
				  }
				}

			  },
			  stopAllAction: function () {
				for (let i = 0; i < this.activeActions.length; i++) {
				  this.activeActions[i].stop();
				}
				this.activeActions.length = 0;
			  },

			  playAction: function (animName, repetition, startAt, clamp) {
				if (!this.mixer) return;

				const model = this.model,
				  clips = model.animations;

				if (!clips.length) return;

				for (let clip, i = 0; (clip = clips[i]); i++) {
				  if (clip.name == animName) {
					const action = this.mixer.clipAction(clip, model);
					action.enabled = true;
					action.clampWhenFinished = clamp;
					// animation-mixer.startAt and AnimationAction.startAt have very different meanings.
					// animation-mixer.startAt indicates which frame in the animation to start at, in msecs.
					// AnimationAction.startAt indicates when to start the animation (from the 1st frame),
					// measured in global mixer time, in seconds.
					action.startAt(this.mixer.time - startAt / 1000);
					let loopMode = repetition ? THREE.LoopRepeat : THREE.LoopOnce;
					let rep = repetition ? Infinity : 1;
					action
					  .setLoop(LoopMode[loopMode], rep)
					  .play();
					this.activeActions.push(action);
				  }
				}
			  },
			  tick: function (t, dt) {
				if (this.mixer && !isNaN(dt)) this.mixer.update(dt / 1000);
			  }
			});

			//DRAG-DROP-TASK: Task with to points, one on the floor to drag and show an image and to drop the image at a point on the object
			AFRAME.registerComponent("drag-drop-task", {
			  schema: {
				name: { type: "string", default: "" },
				description_drag: {
				  type: "string",
				  default:
					"",
				},
				src_image: {
				  type: "string",
				  default:
					"",
				},
				copyright_image: {
				  type: "string",
				  default: "",
				},
				alt_image: {
				  type: "string",
				  default: "",
				},
				caption_image: {
				  type: "string",
				  default: "",
				},
				description_drop: {
				  type: "string",
				  default:
					"",
				},
			  },
			  init: function () {
				let self = this;
				this.showPopUp = this.showPopUp.bind(this);

				this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
				  if (evt.detail.point.classList[0] == self.el.classList[0]) {
					if (evt.detail.point.classList.contains("drag")) {
					  evt.detail.point.object3D.visible = false;
					  evt.detail.point.classList.remove("collidable");
					  evt.detail.tipPoint.classList.remove("toolidable");
					  //show popup
					  self.showPopUp(
						self.data.name,
						self.data.description_drag,
						self.data.src_image,
						self.data.copyright_image,
						self.data.alt_image,
						self.data.caption_image,
						false
					  );
					  //set inventory
					  self.addInventory(self.data.src_image);
					} else if (evt.detail.point.classList.contains("drop")) {
					  if (self.el.classList.contains("selected")) {

						evt.detail.point.setAttribute("material", { src: "#book" });
						evt.detail.point.setAttribute("collider-check", {
						  description: app.arViewer.showBook,
						});
						evt.detail.tipPoint.setAttribute("collider-check", {
						  description: app.arViewer.showBook,
						});
						evt.detail.point.setAttribute("distance-tracker", "");
						//change class to book
						evt.detail.point.classList.remove("drop");
						evt.detail.tipPoint.classList.remove("tipDrop");
						evt.detail.point.classList.add("book", "collidable");
						evt.detail.tipPoint.classList.add("book", "toolidable");
						self.removeInventory();

						self.showPopUp(
						  self.data.name,
						  self.data.description_drop,
						  self.data.src_image,
						  self.data.copyright_image,
						  self.data.alt_image,
						  self.data.caption_image,
						  true
						);

						//count points
						self.el.emit("point-achieved", { pointID: self.el.classList[0] }, true);
					  } else {
						self.showFalseMessage();
					  }
					} else if (evt.detail.point.classList.contains("book")) {
					  self.showPopUp(
						self.data.name,
						self.data.description_drop,
						self.data.src_image,
						self.data.copyright_image,
						self.data.alt_image,
						self.data.caption_image,
						true
					  );
					}
				  }
				});
				this.el.sceneEl.addEventListener("missions-reversed", function (e) {
				  self.reverse(self);
				});
			  },
			  showPopUp: function (name, desc, imgSrc, imgCr, imgAlt, imgCaption) {
				let self = this;

				let message = {
				  type: app.arViewer.dragDropHead,
				  content: getContent(),
				  color: 'skyblue',
				  shadow: null,
				  buttonSetup: null,
				  showClose: true,
				}

				function getContent() {
				  let content = '';
				  let headline = '<h3>' + name + '</h3>'
				  let copyright = imgCr ? `<span class="copyright"> Foto: ${imgCr}</span>` : '';
				  let image = `<div class="annotation-image"><div class = "annotation-image-box">
					<img width="100px" height="100px" src="${imgSrc}" alt="${imgAlt}"></div>
					<p class="annotation-image-caption">${imgCaption}${copyright}</p></div>`

				  let description = `<p>${desc}</p>`
				  return content + headline + image + description;

				}
				app.gui.message.setMessage(message);

				self.el.sceneEl.setAttribute("controller", {
				  raycaster: false,
				  inventory: false,
				  rotate: false,
				});

				app.gui.message.closeEl.addEventListener('click', function (e) {
				  self.el.sceneEl.setAttribute("controller", {
					raycaster: true,
					inventory: true,
					rotate: true,
				  });
				}, { once: true });

			  },
			  addInventory: function (src) {
				this.el.emit("element-added-inventory", { origin: this.el, src: src }, true);
			  },
			  removeInventory: function () {
				this.el.emit("element-dropped-inventory", { origin: this.el }, true);
			  },
			  showFalseMessage: function () {
				const falseMessages = app.arViewer.falseMessages;
				const randomIndex = Math.floor(Math.random() * falseMessages.length);
				let message = {
				  type: app.arViewer.dragDropHead,
				  content: `<p>${falseMessages[randomIndex]}</p>`,
				  color: 'smokegrey', 
				  shadow: null,
				  buttonSetup: null,
				  showClose: true
				}
				app.gui.message.setMessage(message);

			  },
			  reverse: function (self) {
				self.el.children[0].object3D.visible = true;
				self.el.children[0].classList.add("collidable");
				self.el.children[1].classList.add("toolidable");

				self.el.children[2].object3D.visible = false;
				self.el.children[2].classList.remove("book");
				self.el.children[3].classList.remove("book");
				self.el.children[2].classList.add("drop");
				self.el.children[3].classList.add("tipDrop");
				self.el.children[2].classList.remove("collidable");
				self.el.children[3].classList.remove("toolidable");
				self.el.children[2].setAttribute("material", { src: "#placer" });
				self.el.children[2].setAttribute("collider-check", {
				  description: app.arViewer.dropObject,
				});
				self.el.children[3].setAttribute("collider-check", {
				  description: app.arViewer.dropObject,
				});
			  },
			});

			//POINT-TASK: task to activate point with popup (text + (image) + (audio))
			AFRAME.registerComponent("point-task", {
			  schema: {
				name: { type: "string", default: "" },
				description: {
				  type: "string",
				  default:
					"",
				},
				src_audio: {
				  type: "string",
				  default: "",
				},
				copyright_audio: {
				  type: "string",
				  default: "",
				},
				src_image: {
				  type: "string",
				  default: "",
				},
				copyright_image: {
				  type: "string",
				  default: "",
				},
				alt_image: {
				  type: "string",
				  default: "",
				},
				caption_image: {
				  type: "string",
				  default: "",
				},
				searchable: {
				  type: "int",
				  default: 1,
				}
			  },
			  init: function () {
				let self = this;
				this.firstTime = true;
				this.showPopUp = this.showPopUp.bind(this);
				this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
				  if (evt.detail.point.classList[0] == self.el.classList[0]) {
					evt.detail.point.removeAttribute("spritesheet-animation");
					evt.detail.point.setAttribute("material", { src: "#book" });
					evt.detail.point.setAttribute("collider-check", {
					  description: app.arViewer.showBook,
					});
					evt.detail.tipPoint.setAttribute("collider-check", {
					  description: app.arViewer.showBook,
					});
					//count points
					if (self.firstTime) {
					  self.el.emit("point-achieved", { pointID: self.el.classList[0] }, true);
					  self.firstTime = false;
					}
					self.showPopUp(
					  self.data.name,
					  self.data.description,
					  self.data.src_audio,
					  self.data.copyright_audio,
					  self.data.src_image,
					  self.data.copyright_image,
					  self.data.alt_image,
					  self.data.caption_image
					);
				  }
				});
				this.el.sceneEl.addEventListener("missions-reversed", function (e) {
				  self.reverse(self, it);
				});
			  },

			  showPopUp: function (
				name,
				desc,
				src_audio,
				cr_audio,
				src_image,
				cr_image,
				alt_image,
				caption_image
			  ) {
				let self = this;
				let message = {
				  type: app.arViewer.pointHead,
				  content: getContent(),
				  color: 'duckyellow', 
				  shadow: null,
				  buttonSetup: null,
				  showClose: true
				}
				function getContent() {
				  let content = '';
				  let image = '';
				  let audioEl = '';
				  let headline = '<h3>' + name + '</h3>'
				  if (src_image != "") {
					image = `<div class="annotation-image><div class = "annotation-image-box>
					<img width="100px" height="100px" src="${src_image}" alt="${alt_image}></div>
					<p class="annotation-image-caption">${caption_image}<span class="copyright">Foto: ${cr_image}</span></p></div>`
				  }
				  if (src_audio != "") {
					audioEl = `<audio controls autoplay><source src="${src_audio}" type"audio/mpeg"></audio>`
				  }
				  let description = `<p>${desc}</p></div>`
				  return content + headline + image + audioEl + description;
				}
				app.gui.message.setMessage(message);
				self.el.sceneEl.setAttribute("controller", {
				  raycaster: false,
				  inventory: false,
				  rotate: false,
				});

				app.gui.message.closeEl.addEventListener('click', function (e) {

				  self.el.sceneEl.setAttribute("controller", {
					raycaster: true,
					inventory: true,
					rotate: true,
				  });
				}, { once: true });
			  },
			  reverse: function (self, it) {
				if (self.data.searchable == 0) {
				  self.el.children[0].setAttribute("material", {
					shader: "flat",
					src: '#exclamation',
					transparent: true,
				  });
				} else {
				  self.el.children[0].setAttribute("spritesheet-animation", {
					rows: 4,
					columns: 4,
					frameDuration: 0.08,
					loop: true,
				  });


				  self.el.children[0].setAttribute("material", { src: "#sprite" });
				}
				self.el.children[0].setAttribute("collider-check", {
				  description: app.arViewer.activatePoint,
				});
				self.el.children[1].setAttribute("collider-check", {
				  description: app.arViewer.activatePoint,
				});
				self.firstTime = true;
			  },
			});

			//QUIZ TASK: activate a point with single choice quiz
			AFRAME.registerComponent("quiz-task", {
			  schema: {
				name: { type: "string", default: "Question" },
				answers: { type: "array", default: ["", "", ""] },
				rightAnswer: { type: "string", default: "" },
				description: {
				  type: "string",
				  default:
					"",
				},
				searchable: { type: 'int', default: 1 },
			  },
			  init: function () {
				let self = this;
				this.solved = false;


				this.checkAnswer = this.checkAnswer.bind(this);
				this.showPopUp = this.showPopUp.bind(this);


				this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
				  if (evt.detail.point.classList[0] == self.el.classList[0]) {
					self.showPopUp(
					  self.data.name,
					  self.data.answers,
					  self.data.answer,
					  self.data.description
					);
				  }
				});
				this.el.sceneEl.addEventListener("missions-reversed", function (e) {
				  self.reverse(self, it);
				});
			  },

			  showPopUp: function (name, answers, rightAnswer, desc) {
				let self = this;
				let message = {
				  type: app.arViewer.quizHead,
				  content: getContent(),
				  color: 'terracotta',
				  shadow: null,
				  buttonSetup: [
					this.solved ? {} : { label: app.arViewer.quizButton, color: "pearlwhite", shadow: "coalgrey" }
					],
				  showClose: true
				}
				function getContent() {
				  let content = '';
				  let description = '';
				  let headline = '<h3>' + name + '</h3>'
				  let form = '<form id="quiz-form">' +
					`<div class="answer-container"><input type="radio" id="answer1" name="answer" value="${answers[0].toLowerCase()}">
					<label for="answer1" class="answer-option">${answers[0]}</label></div>` +
					`<div class="answer-container"><input type="radio" id="answer2" name="answer" value="${answers[1].toLowerCase()}">
					<label for="answer2" class="answer-option">${answers[1]}</label></div>` +
					`<div class="answer-container"><input type="radio" id="answer3" name="answer" value="${answers[2].toLowerCase()}">
					<label for="answer3" class="answer-option">${answers[2]}</label></div> </form>`

				  if (self.solved) {
					description = `<p id="quiz-text">${desc}</p>`;
				  } else {
					description = '<p id="quiz-text"></p>';
				  }
				  return content + headline + form + description;
				}
				app.gui.message.setMessage(message);
				app.gui.message.buttons.button[0].element.addEventListener("click", this.checkAnswer);
				if (this.solved) this.disableRadios();
				self.el.sceneEl.setAttribute("controller", {
				  raycaster: false,
				  inventory: false,
				  rotate: false,
				});
				app.gui.message.messageCloseEl.addEventListener('click', function (e) {
				  self.el.sceneEl.setAttribute("controller", {
					raycaster: true,
					inventory: true,
					rotate: true,
				  });
				}, { once: true });
				self.el.sceneEl.setAttribute("controller", {
				  raycaster: false,
				  inventory: false,
				  rotate: false,
				});
			  },
			  checkAnswer: function (event) {
				const form = document.getElementById("quiz-form");
				const selectedOption = form.querySelector('input[name="answer"]:checked');
				const text = document.querySelector("#quiz-text");
				if (selectedOption) {
				  if (selectedOption.value === this.data.rightAnswer.toLowerCase()) {
					text.innerHTML = "Richtig!<br>" + this.data.description;
					event.target.removeEventListener("click", this.checkAnswer);
					app.gui.message.buttons.button[0].element.classList.add("hide");
					//scroll to end
					scrollToEnd()
					// Prevent default click behavior on radio buttons
					this.disableRadios();
					this.el.children[0].setAttribute("material", { src: "#book" });
					this.el.children[0].setAttribute("collider-check", {
					  description: app.arViewer.showBook,
					});
					this.el.children[1].setAttribute("collider-check", {
					  description: app.arViewer.showBook,
					});
					this.solved = true;
					//count points
					this.el.emit("point-achieved", { pointID: this.el.classList[0] }, true);
				  } else {
					text.textContent = app.arViewer.quizFalse;
					scrollToEnd();
				  }
				  function scrollToEnd() {
					app.gui.message.content.containerEl.scrollTo({
					  top: app.gui.message.content.containerEl.scrollHeight,
					  behavior: 'smooth'
					});
				  }
				} else {
				  text.textContent = app.arViewer.quizNull;
				}
			  },
			  disableRadios: function () {
				for (let i = 0; i < this.data.answers.length; i++) {
				  let radio = document.getElementById("answer" + (i + 1));
				  if (radio.value === this.data.rightAnswer.toLowerCase()) {
					radio.checked = true;
				  }
				  // Prevent default click behavior on radio buttons
				  radio.addEventListener("click", this.preventClick);
				}
			  },

			  preventClick: function (event) {
				event.preventDefault();
			  },
			  reverse: function (self, it) {
				self.solved = false;
				if (self.data.searchable == 0) {
				  self.el.children[0].setAttribute("material", {
					shader: "flat",
					src: '#question',
					transparent: true,
				  });
				} else {
				  self.el.children[0].setAttribute("spritesheet-animation", {
					rows: 4,
					columns: 4,
					frameDuration: 0.08,
					loop: true,
				  });
				  self.el.children[0].setAttribute("material", { src: "#sprite" });
				}
				self.el.children[0].setAttribute("collider-check", {
				  description: app.arViewer.activateQuiz,
				});
				self.el.children[1].setAttribute("collider-check", {
				  description: app.arViewer.activateQuiz,
				});
			  },
			});
			//ANIMATION-TASK
			AFRAME.registerComponent("animation-task", {
			  schema: {
				name: { type: "string", default: "Animation starten" },
				animName: { type: "string", default: null },
				repetition: { type: "boolean", default: true },
				animFinished: { type: "int", default: 0 },
				deactivatesAnimName: { type: "string", default: null },
				descriptionStart: { type: "string", default: null },
				descriptionEnd: { type: "string", default: null },
			  },
			  init: function () {
				let self = this;
				this.solved = false;
				this.firstTime = true;
				this.object = document.getElementById('ar-object');

				if (self.data.descriptionStart) {
				  this.el.sceneEl.addEventListener('mission-activated', function (evt) {
					if (self.el.classList[0] === evt.detail.id) {
					  self.showPopUp(self.data.descriptionStart);
					}
				  })
				}
				if (self.data.descriptionEnd) {
				  self.el.sceneEl.addEventListener('animation-finished', function (evt) {
					if (self.data.animName == evt.detail.action.getClip().name && !self.firstTime) {
					  self.showPopUp(self.data.descriptionEnd);
					}
				  })
				}
				this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
				  if (evt.detail.point.classList[0] == self.el.classList[0]) {
					self.object.setAttribute('animation-mixer', `startClip:${self.data.animName}; stopClip:${self.data.deactivatesAnimName}; repetition:${self.data.repetition}; clampWhenFinished:true; startAt: ${self.data.animFinished}`);
					if (self.firstTime || !app.arViewer.missionMode) {
					  if (app.arViewer.missionMode) {
						evt.detail.point.setAttribute("material", { src: "#book" });
					  }
					  //emit to mission or noMission list
					  self.el.emit("point-achieved", { pointID: self.el.classList[0] }, true);
					  self.firstTime = false;
					}
					if (!self.data.repetition) {
					  evt.detail.point.classList.remove("collidable");
					  evt.detail.tipPoint.classList.remove("toolidable");
					  evt.detail.point.object3D.visible = false;
					}
				  }
				});
				this.el.sceneEl.addEventListener("missions-reversed", function (e) {
				  self.reverse(self, it);
				});
			  },
			  showPopUp: function (desc) {
				let self = this;
				let message = {
				  type: app.arViewer.animationHead,
				  content: getContent(),
				  color: 'skyblue', 
				  shadow: null,
				  buttonSetup: null,
				  showClose: true
				}
				function getContent() {
				  let description = `<p>${desc}</p>`
				  return description;

				}
				app.gui.message.setMessage(message);
				self.el.sceneEl.setAttribute("controller", {
				  raycaster: false,
				  inventory: false,
				  rotate: false,
				});
				app.gui.message.closeEl.addEventListener('click', function (e) {
				  self.el.sceneEl.setAttribute("controller", {
					raycaster: true,
					inventory: true,
					rotate: true,
				  });
				}, { once: true });

			  },
			  reverse: function (self, it) {
				self.el.children[0].classList.add('collidable');
				self.el.children[1].classList.add('toolidable');
				self.el.children[0].object3D.visible = true;
				self.el.children[0].setAttribute("material", { src: '#playAnim' });
				self.firstTime = true;
			  }
			})
			//TOOLS: creates a copy of the object and enables stencil clipping, showing or not showing the wireframe and texture
			AFRAME.registerComponent("tools", {

			  schema: {
				object: { type: "string", default: "ar-object" },
				enabled: { type: "boolean", default: false },
				wireframe: { type: "boolean", default: false },
				texture: { type: "boolean", default: true },
				clipping: { type: "boolean", default: true },
				shot: { type: "boolean", default: false },
			  },

			  init: function () {
				const self = this;
				this.scene = this.el.object3D;
				this.el.addEventListener("radius-set", function (e) {
				  //set start distance of the plane
				  self.distance = e.detail.maxSize / 2;
				  const distanceUI = document.getElementById('distance-slider');
				  distanceUI.max = e.detail.maxSize;
				  distanceUI.value = self.distance;

				  self.el.addEventListener("distance-changed", function (e) {
					self.distance = e.detail.dist;
				  })

				  //gltf model scene
				  const objectEl = document.getElementById(self.data.object);
				  self.oldObject = objectEl.object3D;
				  //camera
				  self.camera = self.el.camera;
				  self.cameraPos = new THREE.Vector3();
				  self.cameraDir = new THREE.Vector3();
				  //objectOverlay, plane Object
				  self.objectOverlay = new THREE.Group();
				  self.poGroup = new THREE.Group();
				  //plane
				  self.planeOne = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
				  //plane helper
				  self.planeHelper = new THREE.PlaneHelper(self.planeOne, 2, 0xffffff);
				  self.planeHelper.visible = self.data.planeHelper;
				  if (self.planeHelper.visible) self.scene.add(self.planeHelper);
				  // Renderer
				  self.renderer = self.el.renderer;
				  self.renderer.shadowMap.enabled = true;
				  self.renderer.setPixelRatio(window.devicePixelRatio);
				  self.renderer.setSize(window.innerWidth, window.innerHeight);
				  //object to be clipped
				  self.object = new THREE.Group();
				  self.objectOverlay.add(self.object);
				  self.objectOverlay.name = "object_overlay";
				  self.scene.add(self.objectOverlay);
				  //gltf model to set object geometry and material
				  let objectScene = app.arViewer.originalObject;
				  let geometry;
				  const plane = self.planeOne;
				  objectScene.traverse(function (child) {
					if (child.isMesh) {
					  geometry = child.geometry;
					  // Access the texture of the material
					  self.texture = child.material.map;
					  self.position = child.position;
					  self.rotation = child.rotation;
					}
				  });
				  const stencilGroup = createPlaneStencilGroup(geometry, plane, 1);
				  const planeGeom = new THREE.PlaneGeometry(4, 4, 2, 2);

				  // plane is clipped by the other clipping planes
				  const planeMat = new THREE.MeshStandardMaterial({
					side: THREE.DoubleSide,
					color: 0xffc800,
					metalness: 0.1,
					roughness: 0.75,

					stencilWrite: true,
					stencilRef: 0,
					stencilFunc: THREE.NotEqualStencilFunc,
					stencilFail: THREE.ReplaceStencilOp,
					stencilZFail: THREE.ReplaceStencilOp,
					stencilZPass: THREE.ReplaceStencilOp,
				  });
				  const po = new THREE.Mesh(planeGeom, planeMat);
				  po.onAfterRender = function () {
					self.renderer.clearStencil();
				  };

				  po.renderOrder = 1.1;
				  self.object.add(stencilGroup);
				  self.poGroup.add(po);
				  self.planeObject = po;
				  self.poGroup.name = "po_group";
				  self.scene.add(self.poGroup);
				  let material = new THREE.MeshStandardMaterial({
					metalness: 0.1,
					roughness: 0.75,
					clippingPlanes: [plane],
					clipShadows: true,
					shadowSide: THREE.DoubleSide,
				  });

				  // add the color
				  self.clippedColorFront = new THREE.Mesh(geometry, material);
				  self.clippedColorFront.castShadow = true;
				  self.clippedColorFront.renderOrder = 6;
				  self.object.add(self.clippedColorFront);

				  function createPlaneStencilGroup(geometry, plane, renderOrder) {
					const group = new THREE.Group();

					const baseMat = new THREE.MeshBasicMaterial();

					baseMat.depthWrite = false;
					baseMat.depthTest = false;
					baseMat.colorWrite = false;
					baseMat.stencilWrite = true;
					baseMat.stencilFunc = THREE.AlwaysStencilFunc;

					// back faces
					const mat0 = baseMat.clone();
					mat0.side = THREE.BackSide;
					mat0.clippingPlanes = [plane];
					mat0.stencilFail = THREE.IncrementWrapStencilOp;
					mat0.stencilZFail = THREE.IncrementWrapStencilOp;
					mat0.stencilZPass = THREE.IncrementWrapStencilOp;

					const mesh0 = new THREE.Mesh(geometry, mat0);
					mesh0.renderOrder = renderOrder;
					group.add(mesh0);

					// front faces
					const mat1 = baseMat.clone();
					mat1.side = THREE.FrontSide;
					mat1.clippingPlanes = [plane];
					mat1.stencilFail = THREE.DecrementWrapStencilOp;
					mat1.stencilZFail = THREE.DecrementWrapStencilOp;
					mat1.stencilZPass = THREE.DecrementWrapStencilOp;

					const mesh1 = new THREE.Mesh(geometry, mat1);
					mesh1.renderOrder = renderOrder;

					group.add(mesh1);

					return group;
				  }
				  self.objectOverlay.visible = false;
				  self.poGroup.visible = false;
				  self.oldObject.visible = true;
				});
			  },

			  update: function () {
				this.enabled = this.data.enabled;
				this.wireframe = this.data.wireframe;
				this.textureBool = this.data.texture;
				this.clipping = this.data.clipping;
				this.shot = this.data.shot;

				if (this.enabled) {
				  if (this.clipping) {
					this.renderer.localClippingEnabled = true;
				  } else {
					this.renderer.localClippingEnabled = false;
				  }
				  //get the position and rotation of the object in AR
				  let arPos = this.oldObject.parent.position;
				  let rotY = this.oldObject.parent.rotation.y;
				  this.poGroup.visible = true;
				  this.objectOverlay.visible = true;
				  //make current object invisible
				  this.oldObject.visible = false;

				  //set position of the container
				  this.objectOverlay.position.set(arPos.x, arPos.y, arPos.z);
				  this.objectOverlay.rotation.y = rotY;

				  this.object.rotation.set(
					this.rotation.x,
					this.rotation.y,
					this.rotation.z
				  );
				  this.object.position.set(
					this.position.x,
					this.position.y,
					this.position.z
				  );

				  if (this.textureBool) {
					this.clippedColorFront.material.map = this.texture;
				  } else {
					this.clippedColorFront.material.map = null;
				  }
				  if (this.wireframe) {
					this.clippedColorFront.material.wireframe = true;
				  } else {
					this.clippedColorFront.material.wireframe = false;
				  }
				  this.clippedColorFront.material.needsUpdate = true;
				}
				//if stencil clipping is not enabled
				else {
				  try {
					this.objectOverlay.visible = false;
					this.poGroup.visible = false;
					this.oldObject.visible = true;
				  } catch {
					app.dev && console.info("dev --- waiting for init clipping objects")
				  }

				}
			  },

			  tick: function () {
				if (!this.enabled || !this.clipping) {
				  return;
				}

				if (!this.shot) {
				  //vectors for camera position and direction
				  this.camera.getWorldPosition(this.cameraPos);
				  this.camera.getWorldDirection(this.cameraDir);
				}

				this.vectorInFrontOfCamera = this.cameraPos
				  .clone()
				  .add(this.cameraDir.clone().multiplyScalar(this.distance));

				//set the plane with cameraDirection and a point in front of the camera

				this.planeOne.setFromNormalAndCoplanarPoint(
				  this.cameraDir,
				  this.vectorInFrontOfCamera);
				const plane = this.planeOne;

				const po = this.planeObject;
				plane.coplanarPoint(po.position);
				po.lookAt(
				  po.position.x - plane.normal.x,
				  po.position.y - plane.normal.y,
				  po.position.z - plane.normal.z
				);
			  },
			});
		}
	},

	createHTMLContentFromJSON(contents) {
		let contentHTML = '';

		for(let content of contents) {

			if(content.type === 'headline'){
				const headlineHTML = '<h3>' + content.content + '</h3>';
				contentHTML = contentHTML.concat(headlineHTML);

			}else if(content.type === 'subheadline'){
				let imageHTML = '';
				if(content.filename) {
					let iconBackgroundColor = '';
					('iconBackgroundColor' in content) ? iconBackgroundColor = content.iconBackgroundColor : '';
					imageHTML = '<div class="icon ' + iconBackgroundColor + '"><img src="' + content.filename + '" alt="' + content.imageAlt + '" width="100px" height="100px"></div>'
				}
				const subHeadlineHTML = '<h5>' + imageHTML + content.content + '</h5>';
				contentHTML = contentHTML.concat(subHeadlineHTML);

			}else if(content.type === 'paragraph'){
				const paragraphHTML = '<p class="content-text">' + content.content + '</p>';
				contentHTML = contentHTML.concat(paragraphHTML);

			}else if(content.type === 'paragraph+image'){
				const imageHTML = '<img src="' + app.filepaths.files + app.filepaths.annotationMedia + content.filename + '" alt="' + content.imageAlt + '" width="100px" height="100px">' 
				const captionHTML = '<span class="content-image-caption">' + content.imageCaption + '<span class="copyright"> Foto: ' + content.fileCopyright + '</span></span>';
				const paragraphAndImageHTML = '<div class="content-image in-paragraph"><div class="content-image-box">' + imageHTML + '</div>' + captionHTML + '</div><p class="content-text">' + content.content + '</p>';
				contentHTML = contentHTML.concat(paragraphAndImageHTML);

			}else if(content.type === 'paragraph+audio'){
				
			}else if(content.type === 'paragraph+video'){
				
			}else if(content.type === 'quote'){
				const quoteHTML = '<p class="content-text quote">' + content.content + '</p>';
				contentHTML = contentHTML.concat(quoteHTML);

			}else if(content.type === 'literature'){
				const quoteHTML = '<p class="content-text literature">' + content.content + '</p>';
				contentHTML = contentHTML.concat(quoteHTML);

			}else if(content.type === 'image'){
				const imageHTML = '<img src="' + app.filepaths.files + app.filepaths.annotationMedia + content.filename + '" alt="' + content.imageAlt + '" width="100px" height="100px">' 
				const captionHTML = '<p class="content-image-caption">' + content.imageCaption + '<span class="copyright"> Foto: ' + content.fileCopyright + '</span></p>';
				const imageAndCaptionHTML = '<div class="content-image"><div class="content-image-box">' + imageHTML + '</div>' + captionHTML + '</div>';
				contentHTML = contentHTML.concat(imageAndCaptionHTML);

			}else if(content.type === 'audio'){
				const audioHTML = '<audio controls><source src="' + app.filepaths.files + app.filepaths.annotationMedia + content.filename + '" type="audio/mpeg"></audio>';
				contentHTML = contentHTML.concat(audioHTML);

			}else if(content.type === 'video'){
				
			}else if(content.type === 'link'){
				const linkHTML = '<a class="content-link" href="">' + content.content + '</a>';
				contentHTML = contentHTML.concat(linkHTML);

			}else if(content.type === 'button'){
				const linkHTML = '<a href="' + content.filename + '"><button class="button duckyellow">' + content.content + '</button></a>';
				contentHTML = contentHTML.concat(linkHTML);

			}else if(content.type === 'object-link'){
				let href = '?m=mv';
				app.dev ? href += '&dev=true': '';
				if(app.tour) {
					href += '&tour=' + app.tour;
					href += '&step=' + app.step;
				}
				href += '&model=' + content.filename;

				const linkHTML = '<a href="' + href + '"><button class="button content-object-link duckyellow"><img src="' + app.assets.icon['watch'].src.coalgrey + '" alt="' + app.assets.icon['watch'].alt + '" width="100" height="100">' + content.content + '</button></a>';
				contentHTML = contentHTML.concat(linkHTML);

			}else if(content.type === 'personal+wolfgang'){
				const imageHTML = '<img src="" alt="Illustration von Wolfgang" width="100px" height="100px">' 
				const paragraphAndImageHTML = '<div class="content-image in-paragraph personal"><div class="content-image-box">' + imageHTML + '</div></div><p class="content-text personal">' + content.content + '</p>';
				contentHTML = contentHTML.concat(paragraphAndImageHTML);
			}
		}
		return contentHTML;
	},

	contentImageHandler() {
		app.gui.message.content.element.querySelectorAll('.content-image').forEach( function(image){
			const img = image.querySelector('img');
			const box = image.querySelector('.content-image-box');
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
		});
	},

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
		const node = this.getURLParameter('node');
		const model = this.getURLParameter('model');
		const isFrom = this.getURLParameter('from');
		this.tour = this.getURLParameter('tour');
		this.step = Number(this.getURLParameter('step'));
		this.dev = (this.getURLParameter('dev') === 'true');
		this.stats = (this.getURLParameter('stats') === 'true');
		this.hideGUI = (this.getURLParameter('gui') === 'false');
		this.embedded = (this.getURLParameter('embedded') === 'true');

		this.embedded ? this.hideGUI = true : '';

		//set viewerMode
		if(!this.viewerModes.includes(mode)){
			this.viewerMode = false;
		}else{
			this.viewerMode = mode;
		}

		//handle mv model uuid
		(this.viewerMode === 'mv' && !model) && this.handleError('mv-000');
		(this.viewerMode === 'mv' && !regex.test(model)) && this.handleError('mv-001');
		(this.viewerMode === 'mv' && regex.test(model)) ? this.primaryKey = model : '';

		//handle from parameter
		(this.viewerMode === 'cv' && node) ? this.collectionViewer.node = node : '';

		//reset URL with pushState if node is set
		let url = '?m=' + this.viewerMode;
		this.dev ? url += '&dev=true' : '';
		this.stats ? url += '&stats=true' : '';
		this.hideGUI ? url += '&gui=false' : '';
		this.embedded ? url += '&embedded=true' : '';
		(this.viewerMode === 'cv' && node) ? window.history.pushState(null, null, url) : '';
	}, 

	handleLocalStorage() {
		this.showOnboarding = (localStorage.getItem('onboardingComplete') !== 'true');
		app.dev && console.log('dev --- handleLocalStorage > showOnboarding: ', this.showOnboarding);
	},

	checkMobile() {
		// from: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
		let check = false;
		(function(a){
			if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {
				check = true;
			}
		})(navigator.userAgent||navigator.vendor||window.opera);
		app.dev && console.log('dev --- checkMobile:', check);
		return check;
	},

	checkWebXRSupport() {
		//test if WebXR AR is supported
		if(navigator.xr){
			return true;
			navigator.xr.isSessionSupported('immersive-ar').then((isSupported) => {
				app.dev && console.log('dev --- checkWebXRSupport:', isSupported);
				
			});
		}else{
			app.dev && console.log('dev --- checkWebXRSupport:', false);
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

	handleError(error){
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