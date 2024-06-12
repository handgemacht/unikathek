import { app } from './handgemacht-main.js';

//START Global Variables
let devMode = false;
const dirPath_Files = './files/';
const dirPath_CollectionJSON = 'json/handgemacht-collection.json';
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

//UI click listener
if (loadAV) {
  window.addEventListener("DOMContentLoaded", function () {
    const scene = document.querySelector("a-scene");

    const domOverlay = document.getElementById("ar-overlay");
    const missionBtn = document.getElementById("missionBtn");
    const toolsBtn = document.getElementById("toolsBtn");
    const toolsCont = document.querySelector(".toggle-container");
    const replaceButton = document.getElementById("replace-button");
    const wireframe = document.getElementById("wireframe");
    const clipping = document.getElementById("clipping");
    const texture = document.getElementById("texture");
    const closeButton = document.querySelector(
      "#close-cont .annotation-close-symbol"
    );




    //after start ar mode
    scene.addEventListener("enter-vr", function () {
      domOverlay.classList.remove("hide");
      activateButton(null);
      toolsCont.classList.add("hide");
      //show welcome message
      //message to start ar
      let message = {
        showClose: false,
        //TODO src
        content: '<img src="" alt="Entdecker-Icon" /> <p>Wilkommen im Entdeckermodus! Hier kannst du das Objekt im Raum platzieren. Danach kannst du spannende Aufgaben lösen oder dir das 3D-Objekt genauer ansehen.</p>',
        color: 'duckyellow',
        button1: { content: 'Los gehts!', color: 'pearlwhite', shadow: 'coalgrey' },
      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', introductionFinished, { once: true });
    });
    function introductionFinished(event) {
      let message = {
        showClose: false,
        //TODO src
        content: '<img src="" alt="Platzierungs-Icon" /> <p>Um das Objekt zu platzieren, suche eine freie Boden- oder Tischfläche. Das Objekt soll dort in realer Größe platziert werden.</p>',
        color: 'terracotta',
        button1: { content: 'Platzierung starten!', color: 'pearlwhite', shadow: 'coalgrey' },
      }

      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', startPlacing, { once: true });

    }
    function startPlacing(event) {
      scene.emit("ready-for-placing", null, true);
    }
    // exit ar mode
    scene.addEventListener("exit-vr", function () {
      domOverlay.classList.add("hide");
      scene.emit("pause-interaction", { rotate: false }, false);
    });

    // menu for mission and tools
    function activateButton(button) {
      missionBtn.classList.remove("active");
      toolsBtn.classList.remove("active");
      if (button != null) button.classList.add("active");
    }

    missionBtn.addEventListener("click", () => {
      activateButton(missionBtn);
      toolsCont.classList.add("hide");
      scene.setAttribute("controller", {
        mission: true,
        tool: false,
        raycaster: true,
        rotate: true,
        inventar: true,
      });
    });

    toolsBtn.addEventListener("click", () => {
      activateButton(toolsBtn);
      toolsCont.classList.remove("hide");
      scene.setAttribute("controller", {
        mission: false,
        tool: true,
        rotate: true,
        raycaster: false,
        inventar: false,
      });
    });

    //replace object button
    replaceButton.addEventListener("click", function () {
      scene.emit("new-placement", null, true);
      scene.setAttribute("controller", {
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
        ? scene.setAttribute("tools", "wireframe", "true")
        : scene.setAttribute("tools", "wireframe", "false");
    });

    texture.addEventListener("change", () => {
      texture.checked
        ? scene.setAttribute("tools", "texture", "true")
        : scene.setAttribute("tools", "texture", "false");
    });

    clipping.addEventListener("change", () => {
      clipping.checked
        ? scene.setAttribute("tools", "clipping", "true")
        : scene.setAttribute("tools", "clipping", "false");
    });

    //close button listener
    closeButton.addEventListener("click", closeAR);

    function closeAR(event) {
      scene.emit("pause-interaction", { rotate: false }, false);
      let message = {
        showClose: false,
        content: '<p>Entdecker-Modus wirklich verlassen?</p>',
        color: 'terracotta',
        button1: { content: 'Ja', color: 'pearlwhite', shadow: 'coalgrey' },
        button2: { content: 'Nein', color: 'pearlwhite', shadow: 'coalgrey' }
      }

      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', exitAR, { once: true });
      app.gui.message.messageButton2El.addEventListener('click', stayInAR, { once: true });
    }
    function exitAR(event) {
      app.gui.message.messageButton2El.removeEventListener('click', stayInAR);
      app.gui.message.hideMessage();
      scene.exitVR();
    }
    function stayInAR(event) {
      app.gui.message.messageButton1El.removeEventListener('click', exitAR);
      app.gui.message.hideMessage();
      scene.emit("play-interaction", { rotate: true }, false);
    }
  });
}
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

    it.loadJSON();
    //inventar
    this.inventar = [];
    this.oneSelected = false;
    this.modelLoaded = false;
    self.addEventListener("model-loaded", function () {
      it.modelLoaded = true;
      app.gui.loadingScreen.hideLoadingScreen();
      //message to start ar
      let message = {
        type: 'Entdeckermodus',
        showClose: false,
        content: '<p>Möchtest du den Entdecker-Modus starten?</p>',
        color: 'skyblue',
        button1: { content: 'Ja', color: 'pearlwhite', shadow: 'coalgrey' },
        button2: { content: 'Nein', color: 'pearlwhite', shadow: 'coalgrey' },
      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener('click', startAR, { once: true });
      app.gui.message.messageButton2El.addEventListener('click', cancelAR, { once: true });
    });

    function startAR(e) {
      self.enterAR();
      app.gui.message.messageButton2El.removeEventListener('click', cancelAR);
      
    }

    function cancelAR(e) {
      //TO DO navigate back to modelviewer
      app.gui.message.messageButton1El.removeEventListener('click', startAR);
      app.gui.message.hideMessage();
    }

    //interaction pause/play listener for rotation
    let currentMission, currentTool;
    self.addEventListener("pause-interaction", function (event) {
      let rotateBool = event.detail.rotate;
      currentMission = it.data.mission;
      currentTool = it.data.tool;
      self.setAttribute("controller", {
        raycaster: false,
        tool: false,
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
    //TODO: guidance steps for first contact --> local storage speichern
    self.addEventListener("placingAchieved", function (e) {
      devMode && console.log("placing Achieved", e.detail);
    });
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
    const rotHandle = document.getElementById("touch-sphere");
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
  loadJSON: function () {
    let it = this;
    if (loadAV && !setError) {
      fetch(dirPath_Files + 'json/' + primaryKey + '.json')
        .then((response) => response.json())
        .then((json) => {
          it.loadModel(json);
          it.loadMissions(json);
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
              description: "Objekt aufheben",
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
              description: "Objekt ablegen",
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
              description: "Punkt aktivieren",
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
              description: "Quiz anzeigen",
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
          //TODO animation
        }

        missionsContainer.appendChild(taskEl);
      }
      function formatPos(position) {
        return position.replace(/m/g, "");
      }
      it.initInventar();
    });
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
    devMode && console.log(completed);
    let it = this;
    let self = this.el;
    let message = {
      type: 'Übersicht',
      showClose: true,
      content: getContent(completed),
      color: 'pearlwhite',
      shadow: 'shadow-terracotta',
      button1: completed ? { content: 'Missionen neu starten', color: 'duckyellow', shadow: 'shadowduckyellow' } : {},

    }

    app.gui.message.setMessage(message);
    if(completed) app.gui.message.messageButton1El.addEventListener('click', this.restartMissions, { once: true });
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
      const missionTexts = [
        "Objekte erfolgreich zugeordnet",
        "Punkte gefunden",
        "Fragen beantwortet",
        "Animationen gestartet",
      ];
      let content = ''
      content += completed ? '<h3>Herzlichen Glückwunsch du hast alle Missionen erfüllt!</h3>' : '<h3>Schließe alle Missionen ab!</h3>';
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
    devMode && console.log("points",this.currentPointsPerCategory);
    devMode && console.log("missions",this.currentPoints);

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
          .requestHitTestSource({ space: this.viewerSpace, offsetRay: new XRRay({y:-0.3}) })
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
    const text = [
      "Bewege die Kamera entlang einer Fläche",
      "Bewege das Objekt, indem du die Kamera bewegst. Wenn du zufrieden bist , klicke auf den Button.",
      "Objekt fertig platziert?",
    ];
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
        button1: { content: 'Platzieren', color: 'coalgrey', shadow: 'shadow-coalgrey' }
      }
      app.gui.message.setMessage(message);
      app.gui.message.messageButton1El.addEventListener("click", this.placeObject, { once: true });
    } else if (step == "placed") {
      message = {
        showClose: false,
        content: '<p>' + text[2] + '</p>',
        color: 'pearlwhite',
        shadow: 'shadow-skyblue',
        button1: { content: 'Ja', color: 'coalgrey', shadow: 'shadow-coalgrey' },
        button2: { content: 'Neu platzieren', color: 'coalgrey', shadow: 'shadow-coalgrey' }

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
    this.el.emit("placingAchieved", this.firstTime, true);
    this.hideMessage();
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
        if (child.isMesh) {
          boundingBox.setFromObject(child);
          boundingBox.getSize(size);
          //get radius
          let radius = size.x > size.z ? size.x / 2 : size.z / 2;
          let radiusInner = radius + 0.01;
          let radiusOuter = radius + 0.02;
          let largest = Math.max(size.x, size.y, size.z);
          //set radius
          ringEl.setAttribute("geometry", {
            radiusInner: radiusInner,
            radiusOuter: radiusOuter,
          });

          let radiusMiddle = (radiusInner + radiusOuter) / 2;
          ringEl.children[0].object3D.position.x = radiusMiddle;
          ringEl.children[0].setAttribute("geometry", "radius", size.y / 3);
          ringEl.children[1].object3D.position.x = radiusMiddle;

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

//DRAG-DROP-TASK: Task with to points, one on the floor to drag and show an image and to drop the image at a point on the object
AFRAME.registerComponent("drag-drop-task", {
  schema: {
    name: { type: "string", default: "XY" },
    description_drag: {
      type: "string",
      default:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    //ToDO 
    src_image: {
      type: "string",
      default:
        "https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2Fillustration.svg?v=1618177344016",
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
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
              description: "Buch anzeigen",
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
          devMode && console.log('--dev drop object', self.sceneEl.object3D)
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
      type: 'Drag & Drop',
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
    const falseMessages = [
      "Ups! Das gehört hier nicht hin. Versuch's mal woanders!",
      "Hoppla! Das passt hier leider nicht. Ab zur richtigen Stelle",
      "Oh nein! Das fühlt sich hier nicht wohl. Versuch’s mal an einem anderen Ort!",
    ];
    const randomIndex = Math.floor(Math.random() * falseMessages.length);
    let message = {
      type: 'Drag & Drop',
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
      description: "Objekt ablegen",
    });
  },
});

//POINT-TASK: task to activate point with popup (text + (image) + (audio))
AFRAME.registerComponent("point-task", {
  schema: {
    name: { type: "string", default: "Headline" },
    description: {
      type: "string",
      default:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
          description: "Buch anzeigen",
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
      type: 'Punkt aktivieren',
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
      description: "Punkt aktivieren",
    });
    it.firstTime = true;
  },
});

//QUIZ TASK: activate a point with single choice quiz
AFRAME.registerComponent("quiz-task", {
  schema: {
    name: { type: "string", default: "Question" },
    answers: { type: "array", default: ["Paris", "London", "Berlin"] },
    rightAnswer: { type: "string", default: "Paris" },
    description: {
      type: "string",
      default:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
      type: 'Quiz',
      showClose: true,
      content: getContent(),
      color: 'terracotta',
      button1: this.solved ? {} : { content: "Antwort überprüfen", color: "pearlwhite", shadow: "coalgrey" }
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

      if (it.solved){
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
          description: "Buch anzeigen",
        });
        this.solved = true;
        //count points
        this.el.emit("point-achieved", { pointID: this.el.classList[0] }, true);
      } else {
        text.textContent = "Leider falsch. Probiere es noch einmal!";
      }
    } else {
      text.textContent = "Bitte wähle etwas aus!";
    }
  },
  disableRadios: function () {
    for (let i = 0; i < this.data.answers.length; i++) {
      let radio = document.getElementById("answer" + (i + 1));
      if(radio.value === this.data.rightAnswer.toLowerCase()){
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
      description: "Punkt aktivieren",
    });
  },
});

//TOOLS: creates a copy of the object and enables stencil clipping, showing or not showing the wireframe and texture
AFRAME.registerComponent("tools", {
  schema: {
    object: { type: "string", default: "object" },
    enabled: { type: "boolean", default: false },
    wireframe: { type: "boolean", default: false },
    texture: { type: "boolean", default: true },
    clipping: { type: "boolean", default: true },
  },
  init: function () {
    const it = this;
    this.scene = this.el.object3D;

    //gltf model scene
    const objectEl = document.getElementById(this.data.object);
    this.oldObject = objectEl.object3D;
    //camera
    this.camera = this.el.camera;
    this.cameraPos = new THREE.Vector3();
    this.cameraDir = new THREE.Vector3();
    //objectOverlay, plane Object
    this.objectOverlay = new THREE.Group();
    this.poGroup = new THREE.Group();
    //plane
    this.planeOne = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
    //plane helper
    this.planeHelper = new THREE.PlaneHelper(this.planeOne, 2, 0xffffff);
    this.planeHelper.visible = this.data.planeHelper;
    if (this.planeHelper.visible) this.scene.add(this.planeHelper);
    // Renderer
    this.renderer = this.el.renderer;
    this.renderer.shadowMap.enabled = true;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    //object to be clipped
    this.object = new THREE.Group();
    this.objectOverlay.add(this.object);
    this.objectOverlay.name = "object_overlay";
    this.scene.add(this.objectOverlay);
    //gltf model to set object geometry and material
    let gltf = this.oldObject.children;
    let objectScene = gltf[0];
    let geometry, texture;
    const plane = this.planeOne;
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
    po.onAfterRender = function (renderer) {
      it.renderer.clearStencil();
    };

    po.renderOrder = 1.1;

    this.object.add(stencilGroup);
    this.poGroup.add(po);

    this.planeObject = po;
    this.poGroup.name = "po_group";
    this.scene.add(this.poGroup);

    let material = new THREE.MeshStandardMaterial({
      metalness: 0.1,
      roughness: 0.75,
      clippingPlanes: [plane],
      clipShadows: true,
      shadowSide: THREE.DoubleSide,
    });

    // add the color
    this.clippedColorFront = new THREE.Mesh(geometry, material);
    this.clippedColorFront.castShadow = true;
    this.clippedColorFront.renderOrder = 6;
    this.object.add(this.clippedColorFront);

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
  },
  update: function () {
    this.enabled = this.data.enabled;
    this.wireframe = this.data.wireframe;
    this.textureBool = this.data.texture;
    this.clipping = this.data.clipping;
    //get the position and rotation of the object in AR
    let arPos = this.oldObject.parent.position;
    let rotY = this.oldObject.parent.rotation.y;

    if (this.enabled) {
      if (this.clipping) {
        this.renderer.localClippingEnabled = true;
      } else {
        this.renderer.localClippingEnabled = false;
      }

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
      this.objectOverlay.visible = false;
      this.poGroup.visible = false;
      this.oldObject.visible = true;
    }
  },
  tick: function () {
    if (!this.enabled || !this.clipping) {
      return;
    }
    //vectors for camera position and direction
    this.camera.getWorldPosition(this.cameraPos);
    this.camera.getWorldDirection(this.cameraDir);

    let vectorInFrontOfCamera = this.cameraPos
      .clone()
      .add(this.cameraDir.clone().multiplyScalar(0.2));

    //set the plane with cameraDirection and a point in front of the camera
    this.planeOne.setFromNormalAndCoplanarPoint(
      this.cameraDir,
      vectorInFrontOfCamera
    );
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
