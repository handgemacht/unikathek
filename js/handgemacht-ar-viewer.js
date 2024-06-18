import { app } from './handgemacht-main.js';

//START Global Variables
let devMode = false;
const dirPath_Files = './files/';
const dirPath_Media = './files/annotation-media/';
let loadAV = false;
let primaryKey;
let setError = '';

var loader = new THREE.GLTFLoader();
const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath('./draco/');
loader.setDRACOLoader(dracoLoader);



//END Global Variables
//START Search URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
urlParams.get('dev') === 'true' ? devMode = true : devMode = false;
urlParams.get('m') === 'ar' ? loadAV = true : loadAV = false;
urlParams.get('model') ? primaryKey = urlParams.get('model') : setError = '001';
//END Search URL Parameters


//CONTROLLER: loads JSON model and missions, controls different modes: placing, tools, missions, inventar, score
AFRAME.registerComponent("controller", {
  schema: {
    raycaster: { type: "boolean", default: false },
    inventar: { type: "boolean", default: false },
    rotate: { type: "boolean", default: false },
    reverse: { type: "boolean", default: false },
    mission: { type: "boolean", default: false },
    tool: { type: "boolean", default: false },
  },
  init: function () {
    let self = this.el;
    let it = this;

    //bind methods
    this.showMissionPopup = this.showMissionPopup.bind(this);
    this.solveMission = this.solveMission.bind(this);
    this.restartMissions = this.restartMissions.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.startAR = this.startAR.bind(this);
    this.cancelAR = this.cancelAR.bind(this);
    //load JSON 
    it.loadJSON();
    //inventar
    this.inventar = [];
    this.oneSelected = false;
    this.modelLoaded = false;
   
    //model loaded listener
    self.addEventListener("model-loaded", function () {
      it.modelLoaded = true;
      app.gui.loadingScreen.hideLoadingScreen();
      //message to start ar
      //TODO src Icon Entdeckermodus
      let message = {
        type: app.arViewer.name,
        showClose: false,
        content: app.arViewer.welcomeMessage,
        color: 'skyblue',
        button1: { content: app.arViewer.yes, color: 'pearlwhite', shadow: 'coalgrey' },
        button2: { content: app.arViewer.no, color: 'pearlwhite', shadow: 'coalgrey' },
      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', it.startAR, { once: true });
      app.gui.message.messageButton2El.addEventListener('click', it.cancelAR, { once: true });
    });


    //interaction pause/play listener for rotation
    let currentMission, currentTool;
    self.addEventListener("pause-interaction", function (event) {
      let rotateBool = event.detail.rotate;

      let toolsBool = event.detail.tools ? event.detail.tools : false;
      currentMission = it.data.mission;
      currentTool = it.data.tool;
      self.setAttribute("controller", {
        raycaster: false,
        tool: toolsBool,
        mission: false,
        inventar: false,
        rotate: rotateBool,
      });
    });
    self.addEventListener("play-interaction", function (event) {
      let rotateBool = event.detail.rotate;
      self.setAttribute("controller", {
        raycaster: currentMission,
        tool: currentTool,
        mission: currentMission,
        inventar: currentMission,
        rotate: rotateBool,
      });
    });
    //event listener placing
    self.addEventListener("placingAchieved", function (e) {
      let storedValue = JSON.parse(localStorage.getItem('firstContact'));
      if (storedValue === false) it.firstContact = storedValue;
      else it.firstContact = e.detail;
      if (it.firstContact) {
        let message = {
          showClose: true,
          content: it.missionExisting ? app.arViewer.firstContactWithMission : app.arViewer.firstContactWithoutMission,
          color: 'skyblue'
        }
        self.emit("showFirstContactMessage", null, false);
        app.gui.message.setMessage(message);
        
      }

       

    });
    //init gui
      it.initGui();
  },
  update: function () {
    let self = this.el;
    //reverse missions
    if (this.data.reverse) {
      for (let element of this.inventar) {
        element.place.classList.remove("clicked");
        if (!element.place.classList.contains("hide"))
          element.place.classList.add("hide");
        element.el.classList.remove("selected");
      }
      this.inventar.length = 0;

      self.emit("missions-reversed", null, false);
      this.resetActivatedMissions();
      //reset score
      this.resetScore();

      self.setAttribute("controller", "reverse", false);
      return;
    }

    // on or off raycaster
    if (this.data.raycaster) {
      self.camera.el.children[0].setAttribute("raycaster", "enabled", "true");
      self.camera.el.children[0].object3D.visible = true;
    } else {
      self.camera.el.children[0].setAttribute("raycaster", "enabled", "false");
      self.camera.el.children[0].object3D.visible = false;
    }
    // show or hide inventar
    const inventar = document.querySelector("#inventar");
    if (this.data.inventar) {
      inventar.classList.remove("hide");
    } else {
      inventar.classList.add("hide");
    }
    //on or off rotate
    const rotHandle = document.getElementById("touch-circle");
    if (this.data.rotate) {
      rotHandle.setAttribute("rotation-handler", "enabled", "true");
    } else {
      rotHandle.setAttribute("rotation-handler", "enabled", "false");
    }

    //mission mode
    const missionCont = document.getElementById("missions");
    const missionOverlay = document.getElementById("missionOverlay");
    const object = document.getElementById("object");
    if (this.data.mission) {
      missionCont.object3D.visible = true;
      missionOverlay.classList.remove("hide");
      object.setAttribute("distance-listener", "enabled", "true");
    } else {
      missionCont.object3D.visible = false;
      missionOverlay.classList.add("hide");
      object.setAttribute("distance-listener", "enabled", "false");
    }
    //tool mode
    if (this.data.tool) {
      self.setAttribute("tools", "enabled", true);
    } else {
      if (this.modelLoaded) {
        self.setAttribute("tools", "enabled", false);
      }
    }
  },
  startAR: function(){
    this.el.enterAR();
    app.gui.message.messageButton2El.removeEventListener('click', this.cancelAR);
  },
  cancelAR: function() {
    //TO DO navigate back to modelviewer
    app.gui.message.messageButton1El.removeEventListener('click', this.startAR);
    app.gui.message.hideMessage();
  },
  initGui: function(){
    let self = this.el;
    let it = this;
    const domOverlay = document.getElementById("ar-overlay");
    const missionBtn = document.getElementById("missionBtn");
    const toolsBtn = document.getElementById("toolsBtn");
    const toolsCont = document.querySelector(".toggle-container");
    const replaceButton = document.getElementById("replace-button");
    const wireframe = document.getElementById("wireframe");
    const clipping = document.getElementById("clipping");
    const texture = document.getElementById("texture");
    const freezeShot = document.getElementById("shot");
    const distanceSlider = document.getElementById("distance-slider");
    const closeButton = document.querySelector(
      "#close-cont .annotation-close-symbol"
    );

    //first contact variables
    let firstContactMission = false;
    let firstContactTool = false;
    //after start ar mode
    self.addEventListener("enter-vr", function () {
      domOverlay.classList.remove("hide");
      activateButton(null);
      toolsCont.classList.add("hide");
      //show welcome message

      let message = {
        showClose: false,
        //TODO src Icon Platzieren
        content: app.arViewer.startPlacing,
        color: 'terracotta',
        button1: { content: app.arViewer.startPlacingButton, color: 'pearlwhite', shadow: 'coalgrey' },
      }

      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', startPlacing, { once: true });

    });
    function startPlacing(event) {
      self.emit("ready-for-placing", null, true);
    }
    // exit ar mode
    self.addEventListener("exit-vr", function () {
      domOverlay.classList.add("hide");

      self.emit("pause-interaction", { rotate: false }, false);
      if(!firstContactMission && !firstContactTool){
        localStorage.setItem('firstContact', JSON.stringify(false));
      }
      let message = {
        type: 'Entdeckermodus',
        showClose: false,
        content: app.arViewer.goodbyeMessage,
        color: 'skyblue',
        button1: { content: app.arViewer.yes, color: 'pearlwhite', shadow: 'coalgrey' },
        button2: { content: app.arViewer.goodbyeMessageButton, color: 'pearlwhite', shadow: 'coalgrey' },
      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', it.cancelAR, { once: true });
      app.gui.message.messageButton2El.addEventListener('click', it.startAR, { once: true });

    });

    // menu for mission and tools
    function activateButton(button) {
      missionBtn.classList.remove("active");
      toolsBtn.classList.remove("active");
      if (button != null) button.classList.add("active");
    }

    self.addEventListener("showFirstContactMessage", function(){
      firstContactMission = true;
      firstContactTool = true;
    })
    missionBtn.addEventListener("click", () => {
      activateButton(missionBtn);
      toolsCont.classList.add("hide");
      if(firstContactMission){
        let message = {
          showClose: false,
          content: app.arViewer.firstContactMission,
          color: 'terracotta',
          button1: { content: app.arViewer.allRight, color: 'pearlwhite', shadow: 'coalgrey' },
    
        }
  
        app.gui.message.setMessage(message);
        self.setAttribute("controller", {
          mission: true,
          tool: false,
          raycaster: false,
          rotate: false,
          inventar: false,
        });
        app.gui.message.messageButton1El.addEventListener('click', () =>{
          app.gui.message.hideMessage();
          self.setAttribute("controller", {
            mission: true,
            tool: false,
            rotate: false,
            raycaster: true,
            inventar: true,
          });
        }, { once: true });
        firstContactMission = false;
      }else{
        self.setAttribute("controller", {
        mission: true,
        tool: false,
        raycaster: true,
        rotate: true,
        inventar: true,
      });
      }
      
    });


    toolsBtn.addEventListener("click", () => {
      activateButton(toolsBtn);
      if(firstContactTool){
        let message = {
          showClose: false,
          content: app.arViewer.firstContactTool,
          color: 'terracotta',
          button1: { content: app.arViewer.allRight, color: 'pearlwhite', shadow: 'coalgrey' },
    
        }
  
        app.gui.message.setMessage(message);
        self.setAttribute("controller", {
          mission: false,
          tool: false,
          rotate: false,
          raycaster: false,
          inventar: false,
        });
        app.gui.message.messageButton1El.addEventListener('click', () =>{
          app.gui.message.hideMessage();
          toolsCont.classList.remove("hide");
          self.setAttribute("controller", {
            mission: false,
            tool: true,
            rotate: true,
            raycaster: false,
            inventar: false,
          });
        }, { once: true });
        firstContactTool = false;
      }else{
        toolsCont.classList.remove("hide");
      self.setAttribute("controller", {
        mission: false,
        tool: true,
        rotate: true,
        raycaster: false,
        inventar: false,
      });
    }
    });

    //replace object button
    replaceButton.addEventListener("click", function () {
      self.emit("new-placement", null, true);
      self.setAttribute("controller", {
        rotate: false,
        raycaster: false,
        mission: false,
        tool: false,
      });
      activateButton(null);
      toolsCont.classList.add("hide");
    });
    //tools toggle wireframe and texture
    wireframe.addEventListener("change", () => {
      wireframe.checked
        ? self.setAttribute("tools", "wireframe", "true")
        : self.setAttribute("tools", "wireframe", "false");
    });

    texture.addEventListener("change", () => {
      texture.checked
        ? self.setAttribute("tools", "texture", "true")
        : self.setAttribute("tools", "texture", "false");
    });

    clipping.addEventListener("change", () => {
      if (clipping.checked) {
        self.setAttribute("tools", "clipping", "true");
        freezeShot.parentElement.parentElement.classList.remove('hide');
        distanceSlider.parentElement.classList.remove('hide');
      } else {
        self.setAttribute("tools", "clipping", "false");
        freezeShot.parentElement.parentElement.classList.add('hide');
        distanceSlider.parentElement.classList.add('hide');
      }
    });

    freezeShot.addEventListener("change", () => {
      freezeShot.checked
        ? self.setAttribute("tools", "shot", "true")
        : self.setAttribute("tools", "shot", "false");
    });

    distanceSlider.addEventListener('input', (event) => {
      self.emit("distance-changed", { dist: event.target.value }, false);
    })

    toolsCont.addEventListener('touchstart', (event) => {
      self.emit("pause-interaction", { rotate: false, tools: true }, false);
    })

    toolsCont.addEventListener('touchend', (event) => {
      self.emit("play-interaction", { rotate: true }, false);
    })

    //close button listener
    closeButton.addEventListener("click", closeAR);

    function closeAR(event) {
      self.emit("pause-interaction", { rotate: false }, false);
      let message = {
        showClose: false,
        content: app.arViewer.leaveAR,
        color: 'terracotta',
        button1: { content: app.arViewer.yes, color: 'pearlwhite', shadow: 'coalgrey' },
        button2: { content: app.arViewer.no, color: 'pearlwhite', shadow: 'coalgrey' }
      }

      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', exitAR, { once: true });
      app.gui.message.messageButton2El.addEventListener('click', stayInAR, { once: true });
      function exitAR(event) {
        app.gui.message.messageButton2El.removeEventListener('click', stayInAR);
        app.gui.message.hideMessage();
        self.exitVR();
      }
      function stayInAR(event) {
        app.gui.message.messageButton1El.removeEventListener('click', exitAR);
        app.gui.message.hideMessage();
        self.emit("play-interaction", { rotate: true }, false);
      }
    }
  },
  loadJSON: function () {
    let it = this;

    if (loadAV && !setError) {
      fetch(dirPath_Files + 'json/' + primaryKey + '.json')
        .then((response) => response.json())
        .then((json) => {
          it.loadModel(json);

          if (json.appData.tasks.length > 0) {
            it.loadMissions(json);
            it.missionExisting = true;
          } else {
            it.hideMissionBtn();
            it.missionExisting = false;
          }
          //missions
          it.initMissions(json);
          //mission UI
          it.initMissionUI();
          devMode && console.log('dev --- json: ', json);
        })
        .catch((error) => {
          devMode && console.error("There was a problem with the fetch operation:", error);
        });
    } else if (loadAV && setError === '001') {
      falsePrimKey();
    }
    //START falsePrimKey
    function falsePrimKey() {
      let url = '?m=cv&error=001';
      window.location.href = url;
    }
    //END falsePrimKey
  },
  hideMissionBtn: function () {
    let missionButton = document.getElementById('missionBtn');
    missionButton.classList.add("hide");
  },
  loadModel: function (json) {
    const object = document.getElementById("object");
    const placeObject = document.getElementById("place-object");
    const gltf_src = `url(${"./files/" + json.appData.model.quality2k})`;
    object.setAttribute("gltf-model", gltf_src);
    placeObject.setAttribute("gltf-model", gltf_src);
  },
  loadMissions: function (json) {
    let it = this;
    const missionsContainer = document.getElementById("missions");
    this.el.addEventListener("radius-set", function (event) {
      let radius = event.detail.maxSize / 15;

      for (let i = 0; i < json.appData.tasks.length; i++) {
        let currentTask = json.appData.tasks[i];
        let taskEl = document.createElement("a-entity");
        let currentClass = "point" + currentTask.id;
        taskEl.classList.add(currentClass);
        taskEl.classList.add(currentTask.taskType);
        switch (currentTask.taskType) {
          case "dragDrop":
            taskEl.setAttribute("drag-drop-task", {
              name: currentTask.name,
              description_drag: currentTask.descriptionDrag,
              description_drop: currentTask.descriptionDrop,

              src_image: dirPath_Media + currentTask.image.filename,
              alt_image: currentTask.image.imageAlt,
              caption_image: currentTask.image.imageCaption,
              copyright_image: currentTask.image.fileCopyright,

            });
            let dragElement = document.createElement("a-entity");
            dragElement.classList.add(currentClass, "drag");

            dragElement.setAttribute("geometry", {
              primitive: "circle",
              radius: radius,
            });
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
            dragElement.setAttribute("collider-check", {
              description: app.arViewer.dragObject,
            });
            dragElement.setAttribute("distance-tracker", "");
            dragElement.setAttribute(
              "position",
              formatPos(currentTask.positionDrag)
            );
            dragElement.setAttribute("rotation", "-90 0 0");
            if (!currentTask.dependable) {
              dragElement.classList.add("collidable");
            } else {
              dragElement.object3D.visible = false;
            }
            taskEl.appendChild(dragElement);
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
            break;
          case "point":
            taskEl.setAttribute("point-task", {
              name: currentTask.name,
              description: currentTask.description,
            });
            if (currentTask.image) {
              taskEl.setAttribute("point-task", {
                src_image: dirPath_Media + currentTask.image.filename,
                alt_image: currentTask.image.imageAlt,
                caption_image: currentTask.image.imageCaption,
                copyright_image: currentTask.image.fileCopyright,
              })
            }
            if (currentTask.audio) {
              taskEl.setAttribute("point-task", {
                src_audio: dirPath_Media + currentTask.audio.filename,
                copyright_audio: currentTask.audio.fileCopyright
              });
            }
            let element = document.createElement("a-entity");
            element.classList.add(currentClass);

            element.setAttribute("geometry", {
              primitive: "circle",
              radius: radius,
            });
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
            element.setAttribute("collider-check", {
              description: app.arViewer.activatePoint,
            });
            element.setAttribute("distance-tracker", "");
            element.setAttribute("turn-to-camera", "");
            element.setAttribute("position", formatPos(currentTask.position));
            if (!currentTask.dependable) {
              element.classList.add("collidable");
            } else {
              element.object3D.visible = false;
            }
            taskEl.appendChild(element);
            break;
          case "quiz":
            taskEl.setAttribute("quiz-task", {
              name: currentTask.name,
              description: currentTask.description,
              answers: currentTask.answers,
              rightAnswer: currentTask.rightAnswer,
            });
            let quizEl = document.createElement("a-entity");
            quizEl.classList.add(currentClass);

            quizEl.setAttribute("geometry", {
              primitive: "circle",
              radius: radius,
            });
            quizEl.setAttribute("material", {
              shader: "flat",
              color: "#46AAC8",
              transparent: true,
            });
            quizEl.setAttribute("collider-check", {
              description: app.arViewer.activateQuiz,
            });
            quizEl.setAttribute("distance-tracker", "");
            quizEl.setAttribute("turn-to-camera", "");
            quizEl.setAttribute("position", formatPos(currentTask.position));

            if (!currentTask.dependable) {
              quizEl.classList.add("collidable");
            } else {
              quizEl.object3D.visible = false;
            }
            taskEl.appendChild(quizEl);
            break;
          case "animation":
            taskEl.setAttribute("animation-task", {
              name: currentTask.name,
              repetition: currentTask.repetition,
              animName: currentTask.animName,

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
            animationEl.setAttribute("position", formatPos(currentTask.startPoint));

            if (!currentTask.dependable) {
              animationEl.classList.add("collidable");
            } else {
              animationEl.object3D.visible = false;
            }
            taskEl.appendChild(animationEl);
            break;


        }

        missionsContainer.appendChild(taskEl);
      }
      function formatPos(position) {
        return position.replace(/m/g, "");
      }
      it.initInventar();
    }, {once:true});
  },
  initMissionUI: function () {
    let self = this.el;
    let it = this;
    it.completed = false;

    //init points UI overview
    this.scoreField = document.getElementById("score");
    this.scoreField.textContent = `0/${this.sumPoints}`;

    //click listener
    const scoreCont = document.getElementById("score-container");
    scoreCont.addEventListener("click", function (e) {
      scoreCont.classList.add("hide");
      it.showMissionPopup(it.completed);
      self.setAttribute("controller", {
        raycaster: false,
        inventar: false,
        rotate: false,
      });
    });

  },
  initMissions: function (json) {
    let it = this;
    //global variables
    it.missions = [];
    it.sumPointsPerCategory = { dragDrop: 0, point: 0, quiz: 0, animation: 0 };
    it.currentPointsPerCategory = { dragDrop: 0, point: 0, quiz: 0, animation: 0 };
    it.sumPoints = 0
    it.currentPoints = 0;

    // init missions array and sum points per category
    for (let mission of json.appData.tasks) {
      it.missions.push({
        category: mission.taskType,
        id: mission.id,
        done: false,
        activates: mission.activates,
        depends: mission.dependable,
      });
      switch (mission.taskType) {
        case "dragDrop":
          it.sumPointsPerCategory.dragDrop++;
          break;
        case "point":
          it.sumPointsPerCategory.point++;
          break;
        case "quiz":
          it.sumPointsPerCategory.quiz++;
          break;
        case "animation":
          it.sumPointsPerCategory.animation++;
          break;
      }
    }

    //init sum points
    this.sumPoints = it.missions.length;

    //if point is achieved

    this.el.addEventListener("point-achieved", function (event) {
      it.solveMission(event.detail.pointID);
    });
  },
  showMissionPopup: function (completed) {
    let it = this;
    let self = this.el;
    let message = {
      type: app.arViewer.overview,
      showClose: true,
      content: getContent(completed),
      color: 'pearlwhite',
      shadow: 'shadow-terracotta',
      button1: completed ? { content: app.arViewer.restartMissionButton, color: 'duckyellow', shadow: 'shadowduckyellow' } : {},

    }

    app.gui.message.setMessage(message);
    if (completed) app.gui.message.messageButton1El.addEventListener('click', this.restartMissions, { once: true });
    const scoreCont = document.getElementById("score-container");
    app.gui.message.messageCloseEl.addEventListener('click', function (e) {
      scoreCont.classList.remove("hide");
      self.setAttribute("controller", {
        raycaster: true,
        inventar: true,
        rotate: true,
      });
    }, { once: true });
    function getContent(completed) {
      const missionTexts = app.arViewer.missionOverviewText;
      let content = '';
      content += completed ?  app.arViewer.solveAllMissions: app.arViewer.solveMissions;
      let sumPointsValues = Object.values(it.sumPointsPerCategory);
      let currentPointsValues = Object.values(it.currentPointsPerCategory);
      for (let i = 0; i < sumPointsValues.length; i++) {
        if (sumPointsValues[i] < 1) continue;
        let pointLine =
          '<div class="book-container">'
          + '<img src="assets/hand.gemacht WebApp button context-story kohlegrau.svg" alt="Buch Icon" height="50px">'
          + `<p>${currentPointsValues[i]}/${sumPointsValues[i]} ${missionTexts[i]}</p></div>`
        content += pointLine;
      }
      return content;
    }
  },
  initInventar: function () {
    let self = this.el;
    let it = this;

    it.dropZones = document.querySelectorAll(".drop");
    const inventarCont = document.getElementById("inventar");
    for (let zone of it.dropZones) {
      let roundCont = document.createElement("div");
      roundCont.setAttribute("id", "1");
      roundCont.setAttribute("class", "round-container hide");
      let imgElement = document.createElement("img");
      imgElement.setAttribute("alt", "Object Image");
      roundCont.appendChild(imgElement);
      inventarCont.appendChild(roundCont);
    }
    this.initInventarClick();
    self.addEventListener("element-added-inventar", function (event) {
      const place = document.querySelector(
        `#inventar div[id="${it.getId(event.detail.origin.classList[0])}"]`
      );
      place.classList.remove("hide");
      it.inventar.push({ place: place, el: event.detail.origin });
      const img = place.querySelector("img");
      img.src = event.detail.src;

      //show drop zones and make them collidable
      it.dropZones.forEach((element) => {
        element.object3D.visible = true;
      });
    });

    self.addEventListener("element-dropped-inventar", function (event) {
      const place = document.querySelector(
        `#inventar div[id="${it.getId(event.detail.origin.classList[0])}"]`
      );
      event.detail.origin.classList.remove("selected");
      place.classList.add("hide");
      place.classList.remove("clicked");
      it.inventar = it.inventar.filter((item) => item.place !== place);

      //hide drop zones and make them not collidable
      it.dropZones = document.querySelectorAll(".drop");
      it.dropZones.forEach((element) => {
        element.classList.remove("collidable");
      });
    });
  },
  getId: function (origin) {
    let match = origin.match(/\d+/);
    let id = match ? parseInt(match[0], 10) : null;
    return id;
  },
  initInventarClick: function () {
    let places = document.querySelectorAll(".round-container");
    let it = this;
    let i = 0;
    //each round-container(place) listens to a click event
    places.forEach((place) => {
      i++;
      place.addEventListener("click", () => {
        let placeId = i;
        //if place is already clicked
        if (place.classList.contains("clicked")) {
          place.classList.remove("clicked");
          //no drop zone is selectable
          for (let element of it.inventar) {
            element.el.classList.remove("selected");
          }
          it.oneSelected = false;
        }
        // place was not selected
        else {
          for (let element of it.inventar) {
            //other places get not clicked
            if (element.place != place) {
              element.place.classList.remove("clicked");
              element.el.classList.remove("selected");
            } else {
              //set clicked and related drop zone to selected
              element.place.classList.add("clicked");
              element.el.classList.add("selected");

              it.oneSelected = true;
            }
          }
        }
        //if one place is selected the drop zones are colidable, if not not
        const dropZones = document.querySelectorAll(".drop");
        dropZones.forEach((element) => {
          if (it.oneSelected) {
            if (!element.classList.contains("collidable")) {
              element.classList.add("collidable");
            }
          } else {
            element.classList.remove("collidable");
          }
        });
      });
    });
  },
  solveMission: function (pointID) {
    let currentID = this.getId(pointID);
    //add point general
    this.currentPoints++;
    this.scoreField.textContent = `${this.currentPoints}/${this.sumPoints}`;
    for (let i = 0; i < this.missions.length; i++) {
      if (this.missions[i].id === currentID) {
        this.missions[i].done = true;
        if (this.missions[i].activates > 0) {
          this.activateMission(this.missions[i].activates);
        }
      }
    }

    //actualize points per category    

    for (let i = 0; i < this.missions.length; i++) {
      if (this.missions[i].id === currentID) {
        switch (this.missions[i].category) {
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

    //all missions solved
    if (this.currentPoints === this.sumPoints) {
      this.completed = true;
      this.showMissionFinished();

    }
  },
  activateMission: function (id) {
    const missionGroup = document.getElementById("missions");
    const dependableMission = missionGroup.object3D.children[id - 1];
    dependableMission.children[0].visible = true;
    dependableMission.children[0].el.classList.add("collidable");
  },
  showMissionFinished: function () {

    const scoreCont = document.getElementById("score-container");
    const exclamationMark = scoreCont.querySelector(".exclamation-mark");
    exclamationMark.classList.remove("hide");

  },
  restartMissions: function (event) {
    app.gui.message.messageButton1El.removeEventListener("click", this.restartMissions);
    app.gui.message.hideMessage();
    this.completed = false;
    for (let mission of this.missions) {
      mission.done = false;
    }
    this.el.setAttribute("controller", {
      raycaster: true,
      inventar: true,
      reverse: true,
      rotate: true,
    });
  },
  resetActivatedMissions: function () {
    const missionGroup = document.getElementById("missions");
    for (let mission of this.missions) {
      if (mission.depends === true) {
        let missionEl = missionGroup.object3D.children[mission.id - 1];
        missionEl.children[0].visible = false;
        missionEl.children[0].el.classList.remove("collidable");
      }
    }
  },
  resetScore: function () {
    const scoreCont = document.getElementById("score-container");
    const exclamationMark = scoreCont.querySelector(".exclamation-mark");
    exclamationMark.classList.add("hide");
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
    let self = this.el;
    self.sceneEl.addEventListener("start-placing", function () {
      this.wasVisible = self.object3D.visible;
      if (self.sceneEl.is("ar-mode")) {
        self.object3D.visible = false;
      }
    });
  },
});

//AR-HIT-TEST-SPECIAL: place object with 3D-object
AFRAME.registerComponent("ar-hit-test-special", {
  init: function () {
    const self = this.el;
    const it = this;
    it.xrHitTestSource = null;
    it.viewerSpace = null;
    it.refSpace = null;
    it.firstTime = true;
    it.objectEl = document.getElementById("container");

    it.placeObject = it.placeObject.bind(it);
    it.placeEnd = it.placeEnd.bind(it);
    it.placeAgain = it.placeAgain.bind(it);
    it.showMessage = it.showMessage.bind(it);

    self.sceneEl.renderer.xr.addEventListener("sessionend", (ev) => {
      this.viewerSpace = null;
      this.refSpace = null;
      this.xrHitTestSource = null;
    });
    self.sceneEl.addEventListener("ready-for-placing", (ev) => {
      let session = this.el.sceneEl.renderer.xr.getSession();
      it.finished = true;
      it.hideMenu();
      it.finished = false;
      it.firstPose = false;
      self.emit("start-placing", null, true);
      it.showMessage("start");

      session.requestReferenceSpace("viewer").then((space) => {
        this.viewerSpace = space;
        session
          .requestHitTestSource({ space: this.viewerSpace, offsetRay: new XRRay({ y: -0.3 }) })
          .then((hitTestSource) => {
            this.xrHitTestSource = hitTestSource;
          });
      });

      session.requestReferenceSpace("local").then((space) => {
        this.refSpace = space;
      });


      self.addEventListener("first-pose", function () {
        it.showMessage("move");
        self.object3D.visible = true;
      });

      self.sceneEl.addEventListener("new-placement", function () {
        self.emit("start-placing", null, true);
        it.hideMenu();
        self.object3D.visible = true;
        it.finished = false;
        it.showMessage("move");
      });
    });
  },

  showMessage: function (step) {
    const text = app.arViewer.placeMessages;
    let message;
    if (step == "start") {
      message = {
        showClose: false,
        content: '<p>' + text[0] + '</p>',
        color: 'pearlwhite',
        shadow: 'shadow-skyblue'
      }
      app.gui.message.setMessage(message);
    } else if (step == "move") {
      message = {
        showClose: false,
        content: '<p>' + text[1] + '</p>',
        color: 'pearlwhite',
        shadow: 'shadow-skyblue',
        button1: { content: app.arViewer.place, color: 'coalgrey', shadow: 'shadow-coalgrey' }
      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener("click", this.placeObject, { once: true });
    } else if (step == "placed") {
      message = {
        showClose: false,
        content: '<p>' + text[2] + '</p>',
        color: 'pearlwhite',
        shadow: 'shadow-skyblue',
        button1: { content: app.arViewer.yes, color: 'coalgrey', shadow: 'shadow-coalgrey' },
        button2: { content: app.arViewer.placeNew, color: 'coalgrey', shadow: 'shadow-coalgrey' }

      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener("click", this.placeEnd, { once: true });
      app.gui.message.messageButton2El.addEventListener("click", this.placeAgain, { once: true });
    }
  },
  hideMessage: function () {
    app.gui.message.hideMessage();
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

    this.objectEl.object3D.position.set(position.x, position.y, position.z);
    this.objectEl.object3D.visible = true;
    this.el.object3D.visible = false;

    let camera = this.el.sceneEl.camera;
    let cameraPos = new THREE.Vector3();
    camera.getWorldPosition(cameraPos);
    this.objectEl.object3D.lookAt(cameraPos);
    this.objectEl.object3D.rotation.x = 0;
    this.objectEl.object3D.rotation.z = 0;

    //anchor for position
    let anchoredComponent = this.objectEl.components.anchored;
    if (anchoredComponent) {
      anchoredComponent.createAnchor(
        this.objectEl.object3D.position,
        this.objectEl.object3D.quaternion
      );
    }
    this.showMessage("placed");

    this.finished = true;
  },
  placeEnd: function (event) {
    app.gui.message.messageButton2El.removeEventListener("click", this.placeAgain);
    this.el.sceneEl.setAttribute("controller", {
      rotate: true,
      mission: false,
      tool: false,
      raycaster: false,
    });
    this.hideMessage();
    this.el.emit("placingAchieved", this.firstTime, true);
    this.showMenu();
    this.firstTime = false;
  },
  placeAgain: function (event) {
    app.gui.message.messageButton1El.removeEventListener("click", this.placeEnd);
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
  },
});



//COLLIDER-CHECK: first raycast collision, tests if object is in between
AFRAME.registerComponent("collider-check", {
  schema: {
    description: { type: "string", default: "" },
  },

  init: function () {
    let self = this.el;
    this.it = this;

    self.addEventListener("raycaster-intersected", this.it.checkCursor);
    self.addEventListener("raycaster-intersected-cleared", function () {
      self.emit("collided-ended");
    });
  },
  update: function () {
    let self = this.el;
    let it = this;
    self.removeEventListener("raycaster-intersected", it.checkCursor);
    self.addEventListener("raycaster-intersected", it.checkCursor);
  },
  checkCursor: function (event) {
    let cursor = event.detail.el;

    let desc = this.getAttribute("collider-check").description;
    let firstCollidedObject = cursor.components.raycaster.intersectedEls[0];
    if (firstCollidedObject.getAttribute("id") == "object") return;
    this.emit("collided", { description: desc }, true);
  },
});

//ANIMATION-HANDLER: handles cursor animation
AFRAME.registerComponent("animation-handler", {
  init: function () {
    let self = this.el;
    let currentClass;
    let srcElement;
    let animationComplete = false;
    //animation to activate
    self.sceneEl.addEventListener("collided", function (event) {
      // test if a new point is activated
      srcElement = event.srcElement;
      let from =
        currentClass == event.srcElement.classList
          ? self.getAttribute("geometry").thetaLength
          : 0;

      self.setAttribute("animation", {
        dir: "normal",
        from: from,
        to: 360,
        easing: "easeInQuad",
      });
      self.emit(`startRing`, null, false);
      //vibration for starting avtivation
      navigator.vibrate(5);
      //add text
      self.emit(
        "animation-started",
        { description: event.detail.description },
        true
      );
      currentClass = event.srcElement.classList;
    });
    //animation to reverse activation
    self.sceneEl.addEventListener("collided-ended", function (event) {
      self.emit("animation-reverse", null, true);
      if (animationComplete) {
        animationComplete = false;
        self.setAttribute("geometry", "thetaLength", 0);
        return;
      }
      self.setAttribute("animation", {
        dir: "reverse",
        from: 0,
        to: self.getAttribute("geometry").thetaLength,
        easing: "easeOutQuad",
      });
      self.emit(`startRing`, null, false);
      // remove text
    });

    self.addEventListener("animationcomplete", function (event) {
      if (self.getAttribute("geometry").thetaLength == 360) {
        animationComplete = true;
        //vibrate for acitivation
        navigator.vibrate([10, 50, 80]);
        //event for components: place-element
        self.emit("point-to-play-trigger", { point: srcElement }, true);
      }
    });
  },
});

//VISIBILITY-HANDLER: handles cursor text visibility
AFRAME.registerComponent("visibility-handler", {
  init: function () {
    let self = this.el;
    self.sceneEl.addEventListener("animation-started", function (event) {
      self.object3D.visible = true;
      self.setAttribute("value", event.detail.description);
    });
    self.sceneEl.addEventListener("animation-reverse", function (event) {
      self.object3D.visible = false;
    });
  },
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
    let self = this.el;

    //depending on the threshold the opacity is changed
    this.el.sceneEl.addEventListener("distance-far", (event) => {
      self.object3D.children[0].el.setAttribute("material", "opacity", 0);
      if (self.object3D.children[0].el.getAttribute("visible") === true) {
        self.object3D.children[0].el.classList.remove("collidable");
      }
    });
    this.el.sceneEl.addEventListener("distance-middle", (event) => {
      self.object3D.children[0].el.setAttribute("material", "opacity", 0.5);
      if (self.object3D.children[0].el.getAttribute("visible") === true) {
        self.object3D.children[0].el.classList.add("collidable");
      }
    });
    this.el.sceneEl.addEventListener("distance-near", (event) => {
      self.object3D.children[0].el.setAttribute("material", "opacity", 1);
    });
  },
});

//DISTANCE-LISTENER: tracks the distance between camera and object and emit events to distance-tracker
AFRAME.registerComponent("distance-listener", {
  schema: { enabled: { type: "boolean", default: false } },
  init: function () {
    this.camera = document.getElementById("camera");
    this.selfPos = new THREE.Vector3();
  },
  update: function () {
    this.lastGroup = "";
  },
  tick: function () {
    if (this.data.enabled) {
      // tracks the distance betwenn camera and parallel to y axis at the position of the object each frame and emits an event if the threshold is changed
      let cameraPos = this.camera.object3D.position;

      this.el.object3D.getWorldPosition(this.selfPos);
      const dx = cameraPos.x - this.selfPos.x;
      const dz = cameraPos.z - this.selfPos.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      if (distance > 1 && !(this.lastGroup == "far")) {
        this.lastGroup = "far";
        this.el.emit("distance-far", null, true);
      } else if (
        distance < 1 &&
        distance > 0.4 &&
        !(this.lastGroup == "middle")
      ) {
        this.lastGroup = "middle";
        this.el.emit("distance-middle", null, true);
      } else if (distance < 0.4 && !(this.lastGroup == "near")) {
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
    const self = this.el;
    const it = this;
    it.canvas = document.querySelector('.a-dom-overlay');
    it.steps = 12;
    it.arrayPos = it.steps / 2;

    //get circle positions after ring radius is calculated
    self.sceneEl.addEventListener("radius-set", function (event) {
      let radiusInner = event.detail.radius[0];
      let radiusOuter = event.detail.radius[1];
      let r = (radiusInner + radiusOuter) / 2;

      let i = 0;
      it.circlePos = [];
      for (let t = 0; t <= 2 * Math.PI; t += Math.PI / it.steps) {
        var x = r * Math.cos(t);
        var y = r * Math.sin(t);
        it.circlePos.push({ t: t, x: x, y: y });
        i = i + 1;
      }
    });
    it.checkTouch = it.checkTouch.bind(it);
    it.trackTouch = it.trackTouch.bind(it);
    it.endTouch = it.endTouch.bind(it);
  },
  update: function () {
    const it = this;
    const self = this.el;
    const containerEl = document.getElementById("container");

    this.touches = [];

    this.pos = this.steps / 2;
    if (this.data.enabled) {
      const circleContainer = this.el.object3D.parent;
      //set container positon of circle handler
      let posCont = containerEl.object3D.position;
      circleContainer.position.set(posCont.x, posCont.y, posCont.z);
      //set start rotation of object container
      it.arrayPos = findPosition(containerEl.object3D.rotation.y);
      // set init position of the sphere
      circleContainer.visible = true;

      it.canvas.addEventListener("touchstart", this.checkTouch);
    } else {
      this.el.object3D.parent.visible = false;
      it.canvas.removeEventListener("touchstart", this.checkTouch);
    }
    function findPosition(value) {
      value = -value + Math.PI / 2;
      for (let i = 0; i < it.circlePos.length; i++) {
        if (it.circlePos[i].t > value) {
          return i;
        }
      }
      return -1;
    }
  },
  checkTouch: function (event) {
    //tests if self is clicked
    const self = this.el;
    const it = this;
    const mouse = new THREE.Vector2();
    it.camera = it.el.sceneEl.camera;
    mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1; // convert to range (-1, 1)
    mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1; // convert to range (-1, 1)

    // Set the ray's origin and direction based on the camera and mouse coordinates
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, it.camera);

    // Find intersections between the ray and objects in the scene
    const intersects = raycaster.intersectObject(self.object3D);
    //if not clicked return
    if (intersects.length < 1) return;
    const rotHandle = document.getElementById('rot-handle');
    rotHandle.removeAttribute('material', 'src');
    rotHandle.setAttribute('material','color', '#FF7850');
    it.canvas.addEventListener("touchmove", it.trackTouch);
    self.emit("pause-interaction", { rotate: true }, true);
    it.canvas.addEventListener("touchend", it.endTouch);
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
      const containerEl = document.getElementById("container");
      let rot = this.circlePos[this.pos].t;
      containerEl.object3D.rotation.y = -(rot - Math.PI / 2);
    }
  },
  endTouch: function (event) {
    this.canvas.removeEventListener("touchmove", this.trackTouch);
    this.el.emit("play-interaction", { rotate: true }, true);
    this.touches.length = 0;
    this.arrayPos = this.pos;
    const rotHandle = document.getElementById('rot-handle');
    rotHandle.setAttribute('material','src', '#arrow');
    rotHandle.removeAttribute('material', 'color');

    this.canvas.removeEventListener("touchend", this.endTouch);
  },
});

//GET-BOUNDING-BOX: after the model is loaded, it sets the size of the bounding-box and emits the radius of the rotation and the largest side
AFRAME.registerComponent("get-bounding-box", {
  init: function () {
    let self = this.el;
    const boundingBox = new THREE.Box3();
    const size = new THREE.Vector3();
    const ringEl = document.getElementById("rotation-ring");

    //wait until gtlf model is loaded
    self.addEventListener("model-loaded", function () {
      self.object3D.children[0].traverse(function (child) {
        devMode && console.log("child", child);
        if (child.isMesh) {
          boundingBox.setFromObject(child);
          boundingBox.getSize(size);
          //get radius
          let radius = size.x > size.z ? size.x / 2 : size.z / 2;
          let radiusInner = radius + (radius / 6);
          let radiusOuter = radius + (radius/6 + 0.01);
          let largest = Math.max(size.x, size.y, size.z);
          //set radius
         ringEl.setAttribute("geometry", {
            radiusInner: radiusInner,
            radiusOuter: radiusOuter,
          });

          let radiusMiddle = (radiusInner + radiusOuter) / 2;
          ringEl.children[0].object3D.position.x = radiusMiddle;
          ringEl.children[0].setAttribute("geometry", "radius", radiusMiddle);
          ringEl.children[1].object3D.position.x = radiusMiddle;
          ringEl.children[1].setAttribute("geometry", "radius", radiusMiddle / 4);
          //emit radius to rotation handler
          self.emit(
            "radius-set",
            { radius: [radiusInner, radiusOuter], maxSize: largest },
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
 * animation-mixer
 *  from: https://github.com/c-frame/aframe-extras/blob/master/src/loaders/animation-mixer.js
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
    clip: { default: '*' },
    useRegExp: {default: false},
    duration: { default: 0 },
    clampWhenFinished: { default: false, type: 'boolean' },
    crossFadeDuration: { default: 0 },
    loop: { default: 'repeat', oneOf: Object.keys(LoopMode) },
    repetitions: { default: Infinity, min: 0 },
    timeScale: { default: 1 },
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
      });
    }
  },

  load: function (model) {
    const el = this.el;
    this.model = model;
    this.mixer = new THREE.AnimationMixer(model);
    this.mixer.addEventListener('loop', (e) => {
      el.emit('animation-loop', { action: e.action, loopDelta: e.loopDelta });
    });
    this.mixer.addEventListener('finished', (e) => {
      el.emit('animation-finished', { action: e.action, direction: e.direction });
    });
    if (this.data.clip) this.update({});
  },

  remove: function () {
    if (this.mixer) this.mixer.stopAllAction();
  },

  update: function (prevData) {
    if (!prevData) return;

    const data = this.data;
    const changes = AFRAME.utils.diff(data, prevData);

    // If selected clips have changed, restart animation.
    if ('clip' in changes) {
      this.stopAction();
      if (data.clip) this.playAction();
      return;
    }

    // Otherwise, modify running actions.
    this.activeActions.forEach((action) => {
      if ('duration' in changes && data.duration) {
        action.setDuration(data.duration);
      }
      if ('clampWhenFinished' in changes) {
        action.clampWhenFinished = data.clampWhenFinished;
      }
      if ('loop' in changes || 'repetitions' in changes) {
        action.setLoop(LoopMode[data.loop], data.repetitions);
      }
      if ('timeScale' in changes) {
        action.setEffectiveTimeScale(data.timeScale);
      }
    });
  },

  stopAction: function () {
    const data = this.data;
    for (let i = 0; i < this.activeActions.length; i++) {
      data.crossFadeDuration
        ? this.activeActions[i].fadeOut(data.crossFadeDuration)
        : this.activeActions[i].stop();
    }
    this.activeActions.length = 0;
  },

  playAction: function () {
    if (!this.mixer) return;

    const model = this.model,
      data = this.data,
      clips = model.animations || (model.geometry || {}).animations || [];

    if (!clips.length) return;

    const re = data.useRegExp ? data.clip : wildcardToRegExp(data.clip);

    for (let clip, i = 0; (clip = clips[i]); i++) {
      if (clip.name.match(re)) {
        const action = this.mixer.clipAction(clip, model);

        action.enabled = true;
        action.clampWhenFinished = data.clampWhenFinished;
        if (data.duration) action.setDuration(data.duration);
        if (data.timeScale !== 1) action.setEffectiveTimeScale(data.timeScale);
        // animation-mixer.startAt and AnimationAction.startAt have very different meanings.
        // animation-mixer.startAt indicates which frame in the animation to start at, in msecs.
        // AnimationAction.startAt indicates when to start the animation (from the 1st frame),
        // measured in global mixer time, in seconds.
        action.startAt(this.mixer.time - data.startAt / 1000);
        action
          .setLoop(LoopMode[data.loop], data.repetitions)
          .fadeIn(data.crossFadeDuration)
          .play();
        this.activeActions.push(action);
      }
    }
  },

  tick: function (t, dt) {
    if (this.mixer && !isNaN(dt)) this.mixer.update(dt / 1000);
  }
});

/**
 * Creates a RegExp from the given string, converting asterisks to .* expressions,
 * and escaping all other characters.
 */
function wildcardToRegExp(s) {
  return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
}

/**
 * RegExp-escapes all characters in the given string.
 */
function regExpEscape(s) {
  return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

//DRAG-DROP-TASK: Task with to points, one on the floor to drag and show an image and to drop the image at a point on the object
AFRAME.registerComponent("drag-drop-task", {
  schema: {
    name: { type: "string", default: "" },
    description_drag: {
      type: "string",
      default:
        "",
    },
    //ToDO 
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
    let self = this.el;
    let it = this;
    this.showPopUp = this.showPopUp.bind(this);

    this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
      if (evt.detail.point.classList[0] == self.classList[0]) {
        if (evt.detail.point.classList.contains("drag")) {
          evt.detail.point.object3D.visible = false;
          evt.detail.point.classList.remove("collidable");
          //show popup
          it.showPopUp(
            it.data.name,
            it.data.description_drag,
            it.data.src_image,
            it.data.copyright_image,
            it.data.alt_image,
            it.data.caption_image,
            false
          );
          //set inventar
          it.addInventar(it.data.src_image);
        } else if (evt.detail.point.classList.contains("drop")) {
          if (self.classList.contains("selected")) {
            evt.detail.point.setAttribute("material", { src: "#book" });
            evt.detail.point.setAttribute("collider-check", {
              description: app.arViewer.showBook,
            });
            evt.detail.point.setAttribute("distance-tracker", "");
            //change class to book
            evt.detail.point.classList.remove("drop");
            evt.detail.point.classList.add("book", "collidable");
            it.removeInventar();

            it.showPopUp(
              it.data.name,
              it.data.description_drop,
              it.data.src_image,
              it.data.copyright_image,
              it.data.alt_image,
              it.data.caption_image,
              true
            );

            //count points
            self.emit("point-achieved", { pointID: self.classList[0] }, true);
          } else {
            it.showFalseMessage();
          }
        } else if (evt.detail.point.classList.contains("book")) {
          it.showPopUp(
            it.data.name,
            it.data.description_drop,
            it.data.src_image,
            it.data.copyright_image,
            it.data.alt_image,
            it.data.caption_image,
            true
          );
        }
      }
    });
    this.el.sceneEl.addEventListener("missions-reversed", function (e) {
      it.reverse(self);
    });
  },
  showPopUp: function (name, desc, imgSrc, imgCr, imgAlt, imgCaption) {
    let self = this.el;
    let message = {
      type: app.arViewer.dragDropHead,
      showClose: true,
      content: getContent(),
      color: 'skyblue'
    }
    function getContent() {
      let content = '';
      let headline = '<h3>' + name + '</h3>'
      let image = `<div class="annotation-image"><div class = "annotation-image-box">
        <img width="100px" height="100px" src="${imgSrc}" alt="${imgAlt}"></div>
        <p class="annotation-image-caption">${imgCaption}<span class="copyright"> Foto: ${imgCr}</span></p></div>`
      let description = `<p>${desc}</p>`
      return content + headline + image + description;

    }
    app.gui.message.setMessage(message);

    self.sceneEl.setAttribute("controller", {
      raycaster: false,
      inventar: false,
      rotate: false,
    });

    app.gui.message.messageCloseEl.addEventListener('click', function (e) {
      self.sceneEl.setAttribute("controller", {
        raycaster: true,
        inventar: true,
        rotate: true,
      });
    }, { once: true });

  },
  addInventar: function (src) {
    this.el.emit("element-added-inventar", { origin: this.el, src: src }, true);
  },
  removeInventar: function () {
    this.el.emit("element-dropped-inventar", { origin: this.el }, true);
  },
  showFalseMessage: function () {
    const falseMessages = app.arViewer.falseMessages;
    const randomIndex = Math.floor(Math.random() * falseMessages.length);
    let message = {
      type: app.arViewer.dragDropHead,
      showClose: true,
      content: `<p>${falseMessages[randomIndex]}</p>`,
      color: 'smokegrey'
    }
    app.gui.message.setMessage();

  },


  reverse: function (self) {
    self.children[0].object3D.visible = true;
    self.children[0].classList.add("collidable");

    self.children[1].object3D.visible = false;
    self.children[1].classList.remove("book");
    self.children[1].classList.add("drop");
    self.children[1].classList.remove("collidable");
    self.children[1].setAttribute("material", { src: "#placer" });
    self.children[1].setAttribute("collider-check", {
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
  },
  init: function () {
    let self = this.el;
    let it = this;
    this.firstTime = true;

    this.showPopUp = this.showPopUp.bind(this);

    this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
      if (evt.detail.point.classList[0] == self.classList[0]) {
        evt.detail.point.removeAttribute("spritesheet-animation");
        evt.detail.point.setAttribute("material", { src: "#book" });
        evt.detail.point.setAttribute("collider-check", {
          description: app.arViewer.showBook,
        });
        //count points
        if (it.firstTime) {
          self.emit("point-achieved", { pointID: self.classList[0] }, true);
          it.firstTime = false;
        }

        it.showPopUp(
          it.data.name,
          it.data.description,
          it.data.src_audio,
          it.data.copyright_audio,
          it.data.src_image,
          it.data.copyright_image,
          it.data.alt_image,
          it.data.caption_image
        );
      }
    });
    this.el.sceneEl.addEventListener("missions-reversed", function (e) {
      it.reverse(self, it);
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
    let self = this.el;
    let message = {
      type: app.arViewer.pointHead,
      showClose: true,
      content: getContent(),
      color: 'duckyellow'
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
    self.sceneEl.setAttribute("controller", {
      raycaster: false,
      inventar: false,
      rotate: false,
    });

    app.gui.message.messageCloseEl.addEventListener('click', function (e) {

      self.sceneEl.setAttribute("controller", {
        raycaster: true,
        inventar: true,
        rotate: true,
      });
    }, { once: true });
  },
  reverse: function (self, it) {
    self.children[0].setAttribute("spritesheet-animation", {
      rows: 4,
      columns: 4,
      frameDuration: 0.08,
      loop: true,
    }),
      self.children[0].setAttribute("material", { src: "#sprite" });
    self.children[0].setAttribute("collider-check", {
      description: app.arViewer.activatePoint,
    });
    it.firstTime = true;
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
  },
  init: function () {
    let self = this.el;
    let it = this;
    this.solved = false;


    this.checkAnswer = this.checkAnswer.bind(this);
    this.showPopUp = this.showPopUp.bind(this);


    this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
      if (evt.detail.point.classList[0] == self.classList[0]) {
        it.showPopUp(
          it.data.name,
          it.data.answers,
          it.data.answer,
          it.data.description
        );
      }
    });
    this.el.sceneEl.addEventListener("missions-reversed", function (e) {
      it.reverse(self, it);
    });
  },

  showPopUp: function (name, answers, rightAnswer, desc) {
    let self = this.el;
    let it = this;
    let message = {
      type: app.arViewer.quizHead,
      showClose: true,
      content: getContent(),
      color: 'terracotta',
      button1: this.solved ? {} : { content: app.arViewer.quizButton , color: "pearlwhite", shadow: "coalgrey" }
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

      if (it.solved) {
        description = `<p id="quiz-text">${desc}</p>`;
      } else {
        description = '<p id="quiz-text"></p>';
      }
      return content + headline + form + description;

    }

    app.gui.message.setMessage(message);
    app.gui.message.messageButton1El.addEventListener("click", this.checkAnswer);
    if (this.solved) this.disableRadios();
    self.sceneEl.setAttribute("controller", {
      raycaster: false,
      inventar: false,
      rotate: false,
    });

    app.gui.message.messageCloseEl.addEventListener('click', function (e) {

      self.sceneEl.setAttribute("controller", {
        raycaster: true,
        inventar: true,
        rotate: true,
      });
    }, { once: true });


    self.sceneEl.setAttribute("controller", {
      raycaster: false,
      inventar: false,
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
        app.gui.message.messageButton1El.classList.add("hide");
        // Prevent default click behavior on radio buttons
        this.disableRadios();
        this.el.children[0].setAttribute("material", { src: "#book" });
        this.el.children[0].setAttribute("collider-check", {
          description: app.arViewer.showBook,
        });
        this.solved = true;
        //count points
        this.el.emit("point-achieved", { pointID: this.el.classList[0] }, true);
      } else {
        text.textContent = app.arViewer.quizFalse;
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
    it.solved = false;
    self.children[0].setAttribute("material", { src: "" });
    self.children[0].setAttribute("collider-check", {
      description: app.arViewer.activatePoint,
    });
  },
});
//ANIMATION-TASK
AFRAME.registerComponent("animation-task", {
  schema: {
    name: { type: "string", default: "Animation starten" },
    animName: { type: "string", default: ""},
    repetition: { type: "boolean", default: true }
  },
  init: function () {
    let self = this.el;
    let it = this;
    this.solved = false;
    this.firstTime = true;
    this.object = document.getElementById('object');

    this.el.sceneEl.addEventListener("point-to-play-trigger", function (evt) {
      if (evt.detail.point.classList[0] == self.classList[0]) {
        it.object.setAttribute('animation-mixer',`clip:${it.data.animName}; loop:once; clampWhenFinished:true`);
        if (it.firstTime) {
          evt.detail.point.setAttribute("material", { src: "#book" });
        evt.detail.point.setAttribute("collider-check", {
          description: app.arViewer.restartAnim,
        });
        //count points
          self.emit("point-achieved", { pointID: self.classList[0] }, true);
          it.firstTime = false;
        }
        if(!it.data.repetition ){
          evt.detail.point.classList.remove("collidable");
          evt.detail.point.object3D.visible = false;
        }
      }
    });
    this.el.sceneEl.addEventListener("missions-reversed", function (e) {
      it.reverse(self, it);
    });
  },
  reverse: function(self, it){
    self.children[0].classList.add('collidable');
    self.children[0].object3D.visible = true;
    self.children[0].setAttribute("material", {src: '#playAnim'});
    self.children[0].setAttribute("collider-check", {
          description: it.data.name,
        });
        it.firstTime = true;
  }
})
//TOOLS: creates a copy of the object and enables stencil clipping, showing or not showing the wireframe and texture
AFRAME.registerComponent("tools", {
  schema: {
    object: { type: "string", default: "object" },
    enabled: { type: "boolean", default: false },
    wireframe: { type: "boolean", default: false },
    texture: { type: "boolean", default: true },
    clipping: { type: "boolean", default: true },
    shot: { type: "boolean", default: false },
  },
  init: function () {
    const it = this;
    const self = this.el;
    this.scene = this.el.object3D;
    this.el.addEventListener("radius-set", function (e) {
      //set start distance of the plane
      it.distance = e.detail.maxSize / 2;
      const distanceUI = document.getElementById('distance-slider');
      distanceUI.max = e.detail.maxSize;
      distanceUI.value = it.distance;

      self.addEventListener("distance-changed", function (e) {
        it.distance = e.detail.dist;
      })

      //gltf model scene
      const objectEl = document.getElementById(it.data.object);
      it.oldObject = objectEl.object3D;
      //camera
      it.camera = it.el.camera;
      it.cameraPos = new THREE.Vector3();
      it.cameraDir = new THREE.Vector3();
      //objectOverlay, plane Object
      it.objectOverlay = new THREE.Group();
      it.poGroup = new THREE.Group();
      //plane
      it.planeOne = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
      //plane helper
      it.planeHelper = new THREE.PlaneHelper(it.planeOne, 2, 0xffffff);
      it.planeHelper.visible = it.data.planeHelper;
      if (it.planeHelper.visible) it.scene.add(it.planeHelper);
      // Renderer
      it.renderer = it.el.renderer;
      it.renderer.shadowMap.enabled = true;
      it.renderer.setPixelRatio(window.devicePixelRatio);
      it.renderer.setSize(window.innerWidth, window.innerHeight);
      //object to be clipped
      it.object = new THREE.Group();
      it.objectOverlay.add(it.object);
      it.objectOverlay.name = "object_overlay";
      it.scene.add(it.objectOverlay);
      //gltf model to set object geometry and material
      let gltf = it.oldObject.children;
      let objectScene = gltf[0];
      let geometry;
      const plane = it.planeOne;
      objectScene.traverse(function (child) {
        if (child.isMesh) {
          geometry = child.geometry;
          // Access the texture of the material
          it.texture = child.material.map;
          it.position = child.position;
          it.rotation = child.rotation;
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
        it.renderer.clearStencil();
      };

      po.renderOrder = 1.1;

      it.object.add(stencilGroup);
      it.poGroup.add(po);

      it.planeObject = po;
      it.poGroup.name = "po_group";
      it.scene.add(it.poGroup);

      let material = new THREE.MeshStandardMaterial({
        metalness: 0.1,
        roughness: 0.75,
        clippingPlanes: [plane],
        clipShadows: true,
        shadowSide: THREE.DoubleSide,
      });

      // add the color
      it.clippedColorFront = new THREE.Mesh(geometry, material);
      it.clippedColorFront.castShadow = true;
      it.clippedColorFront.renderOrder = 6;
      it.object.add(it.clippedColorFront);

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
      it.objectOverlay.visible = false;
      it.poGroup.visible = false;
      it.oldObject.visible = true;
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
        devMode && console.info("waiting for init clipping objects")
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
