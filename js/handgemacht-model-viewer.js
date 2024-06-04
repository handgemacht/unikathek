


//START Global Variables
let devMode = false;
const dirPath_Files = './files/';
const dirPath_CollectionJSON = 'json/handgemacht-collection.json';
let loadMV = false;
let primaryKey;
let setError = '';
//END Global Variables



//START Search URL Parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
urlParams.get('dev')==='true' ? devMode=true : devMode=false;
urlParams.get('m')==='mv' ? loadMV=true : loadMV=false;
urlParams.get('model') ? primaryKey=urlParams.get('model') : setError = '001';
//END Search URL Parameters



//START DOM Manipulation
window.addEventListener('DOMContentLoaded', () => {

  //JSON fetch and loading model viewer
  if(loadMV && !setError){
    fetch(dirPath_Files + 'json/' + primaryKey + '.json')
    .then((response) => response.json())
    .then((json) => {
      loadModelViewer(json);
    });
  }else if(loadMV && setError === '001'){
    falsePrimKey();
  }

});
//END DOM Manipulation



//START falsePrimKey
function falsePrimKey() {
  let url='?m=cv&error=001';
  window.location.href = url;
}
//END falsePrimKey



//START loadModelViewer
// !!! must be called after DOM is loaded !!! calls loadContent function, sets mobile view, handles loading-animation, checks AR availability, calls interface behaviour-functions
function loadModelViewer(modelJSON) {
  const modelViewer = document.querySelector('#main-viewer');
  const annotationContainer = document.querySelector('#annotation-container');
  
  loadContent(modelJSON, modelViewer, annotationContainer);

  devMode && console.log(modelViewer);

  //hide context story on small screens
  let isMobile = window.matchMedia('only screen and (max-width: 600px)').matches;
  if(isMobile){
    modelViewer.querySelector('#context-story-button').dataset.toolActive = 'false';
    modelViewer.querySelector('#context-story-button').classList.remove('active');
    hideElement(document.querySelector('.context-story'), 0);
    document.querySelector('.context-story').dataset.focus='false';
  }

  //model fade-in after loading
  modelViewer.addEventListener('load', function(event) {
    let loadingAnimation = document.querySelector('.gui-loading-animation');
    hideElement(loadingAnimation, 0);
    if(event.detail.visible != true) {
      modelViewer.animate({
          opacity: ['0', '1']
        }, {
          duration: 2000,
          iterations: 1,
          delay: 1000
      });
      Promise.all(modelViewer.getAnimations({ subtree: true }).map((animation) => animation.finished)).then(function() {
        modelViewer.classList.remove('pre-loading');
      }).catch(e => {console.error(e);});
    }
    // render dimensions
    if(modelViewer.dataset.dimension === 'true'){
      renderModelDimensions(modelViewer);
    };
  });

  //context story fade-in after loading
  modelViewer.addEventListener('load', function(event) {
    if (modelJSON.objectData.usageContext) {
      let contextStory = document.querySelector('.context-story');
      contextStory.animate({
          opacity: ['0', '1']
        }, {
          duration: 2000,
          iterations: 1,
          delay: 1500
      });
      Promise.all(modelViewer.getAnimations({ subtree: true }).map((animation) => animation.finished)).then(function() {
        //attention-animation on context-story for small screens
        if(isMobile){
          modelViewer.querySelector('#context-story-button').classList.add('attention-animation');
        }
        contextStory.classList.remove('pre-loading');
      }).catch(e => {console.error(e);});
    }else{
      modelViewer.querySelector('#context-story-button').classList.add('hide');
    }
  });


  //check if AR is available and hide ar-button if not so
  if(!modelViewer.canActivateAR){
    modelViewer.querySelector('#ar-button').classList.add('hide');
  }

  //call behavior functions
  toolbarBehavior(modelViewer, annotationContainer);

  hotspotBehavior(modelViewer, annotationContainer);

  imageBehaviour(annotationContainer);
}
//END loadModelViewer



//START loadContent
//sets initial camera, creates HTML for contextStory, hotspots and annotations
function loadContent(modelJSON, modelViewer, annotationContainer) {

  //modelViewer data
  modelViewer.src = dirPath_Files + modelJSON.appData.model.quality2k;
  modelViewer.cameraOrbit = modelJSON.appData.modelViewer.cameraOrbit;
  modelViewer.cameraTarget = modelJSON.appData.modelViewer.cameraTarget;
  modelViewer.fieldOfView = modelJSON.appData.modelViewer.cameraField;

  //usage context HTML
  function createUsageContext (modelJSON) {
    
    let usageContextInnerHTML = '<div class="annotation context-story pre-loading" ' 
      + 'data-annotation-id="a00" ' 
      + 'data-type="text" ' 
      + 'data-focus="true">' 
      + '<div class="annotation-close-container"><img src="assets/hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="100px" height="100px"></div><img src="assets/hand.gemacht WebApp button context-story perlweiss.svg" alt="Icon Hintergrundgeschichte" class="context-story-icon" width="100px" height="100px">' 
      + modelJSON.objectData.usageContext
      + '</div>';

    //usageContextInnerHTML to annotationContainer-element
    annotationContainer.innerHTML += usageContextInnerHTML;
    usageContextInnerHTML = '';
  }
  
  //hotspot and annotation HTML
  function createAnnotations (modelJSON) {

    for(let annotation of modelJSON.appData.annotations){

      //set hotspotIcon by type
      let hotspotIcon = '';
      if(annotation.mediaType === 'read'){
        hotspotIcon = '<img src="assets/hand.gemacht WebApp icon read perlweiss.svg" alt="Interaktiver Punkt am 3D Modell" class="hotspot-icon" width="100px" height="100px">';
      }else if(annotation.mediaType === "listen"){
        hotspotIcon = '<img src="assets/hand.gemacht WebApp icon listen perlweiss.svg" alt="Interaktiver Punkt am 3D Modell" class="hotspot-icon" width="100px" height="100px">';
      }else if(annotation.mediaType === "watch"){
        hotspotIcon = '<img src="assets/hand.gemacht WebApp icon watch perlweiss.svg" alt="Interaktiver Punkt am 3D Modell" class="hotspot-icon" width="100px" height="100px">';
      }else if(annotation.mediaType === "move"){
        hotspotIcon = '<img src="assets/hand.gemacht WebApp icon move perlweiss.svg" alt="Interaktiver Punkt am 3D Modell" class="hotspot-icon" width="100px" height="100px">';
      }

      //annotationContentHTML by type
      let annotationContentHTML = '';
      let annotationContentHTMLsArray = annotation.contents;
      for(let annotationContent of annotationContentHTMLsArray) {
        if(annotationContent.type === 'headline'){
          annotationContentHTML = annotationContentHTML.concat('<h3>' + annotationContent.content + '</h3>');
        }else if(annotationContent.type === 'paragraph'){
          annotationContentHTML = annotationContentHTML.concat('<p class="annotation-text">' + annotationContent.content + '</p>');
        }else if(annotationContent.type === 'paragraph+image'){
          let imageHTML = '<div class="annotation-image"><div class="annotation-image-box"><img ' 
          + 'src="' + dirPath_Files + 'annotation-media/' + annotationContent.filename + '" ' 
          + 'alt="' + annotationContent.imageAlt + '" width="100px" height="100px"></div>' 
          + '<p class="annotation-image-caption">' + annotationContent.imageCaption
          + '<span class="copyright"> Foto: ' + annotationContent.fileCopyright + '</span></p></div>';
          annotationContentHTML = annotationContentHTML.concat('<p class="annotation-text">' + imageHTML + annotationContent.content + '</p>');
        }else if(annotationContent.type === 'paragraph+audio'){
          
        }else if(annotationContent.type === 'paragraph+video'){
          
        }else if(annotationContent.type === 'quote'){
          annotationContentHTML = annotationContentHTML.concat('<p class="annotation-text quote">' + annotationContent.content + '</p>');
        }else if(annotationContent.type === 'image'){
          
        }else if(annotationContent.type === 'audio'){
          annotationContentHTML = annotationContentHTML.concat('<audio controls><source src="' + dirPath_Files + 'annotation-media/' + annotationContent.filename + '" type="audio/mpeg"></audio>');
        }else if(annotationContent.type === 'video'){
          
        }else if(annotationContent.type === 'link'){
          annotationContentHTML = annotationContentHTML.concat('<a class="annotation-link" href="">' + annotationContent.content + '</a>');
        }
      }

      //hotspot HTML
      let hotspotInnerHTML = '<button class="hotspot text" ' 
      + 'slot="hotspot-' + annotation.id + '" ' 
      + 'data-hotspot-id="' + annotation.id + '" ' 
      + 'data-position="' + annotation.position + '" ' 
      + 'data-normal="' + annotation.normal + '" ' 
      + 'data-orbit="' + annotation.cameraOrbit + '" ' 
      + 'data-target="' + annotation.cameraTarget + '" ' 
      + 'data-fov="' + annotation.cameraField + '" ' 
      + 'data-visibility-attribute="visible" data-focus="false">'
      + '<div class="hotspot border">' + hotspotIcon + '</div>';

      //hotspotInnerHTML to modelViewer-element
      modelViewer.innerHTML += hotspotInnerHTML;
      hotspotIcon = '';
      hotspotInnerHTML = '';

      //annotation HTML
      let annotationInnerHTML = '<div class="annotation hide" ' 
      + 'data-annotation-id="a' + annotation.id + '" ' 
      + 'data-type="' + annotation.type + '" ' 
      + 'data-focus="false">' 
      + '<div class="annotation-close-container"><img src="assets/hand.gemacht WebApp close kohlegrau.svg" alt="Schließen-Icon" class="annotation-close-symbol" width="100px" height="100px"></div>' 
      + annotationContentHTML
      + '</div>'; 

      //annotationInnerHTML to annotationContainer-element
      annotationContainer.innerHTML += annotationInnerHTML;
      annotationContentHTML = '';
      annotationInnerHTML = '';
    }  
  }
  if (modelJSON.objectData.usageContext) { createUsageContext(modelJSON); };
  if (modelJSON.appData.annotations) { createAnnotations(modelJSON); };
}
//END loadContent



//START toolbarBehavior
//handles toolbar button interaction
function toolbarBehavior(modelViewer, annotationContainer) {
  modelViewer.querySelectorAll('.tool').forEach((button) => {
    button.addEventListener('click', () => {
      let toolFunction = button.dataset.toolFunction;
      let toolActive = button.dataset.toolActive;
      annotationContainer.querySelectorAll('div').forEach((annotation) => {
        if(annotation.dataset.focus === 'true'){
          hotspotBehavior.closeSymbolClicked(annotation);
        }
      });
      if(toolFunction === 'context-story' && toolActive ==='true'){
        return;
      }else{
        toggleToolState(button);
      }
    });
  });  

  //START toggleToolState
  //toggles tool button and functions
  const toggleToolState = (button, state) => {

    let toolFunction = button.dataset.toolFunction;
    let toolActive = button.dataset.toolActive;
  
    //switch all buttons off
    document.querySelector('#main-viewer').querySelectorAll('.tool').forEach((element) => {
      element.dataset.toolActive = 'false';
      element.classList.remove('active');
    });
  
    //toggle button
    if(toolActive === 'true' || state === 'inactive') {
      button.dataset.toolActive = 'false';
      toolActive = 'false';
      button.classList.remove('active');
    }else if(toolActive === 'false'){
      button.dataset.toolActive = 'true';
      toolActive = 'true';
      button.classList.add('active');
      document.querySelector('#context-story-button').classList.remove('attention-animation');
    };
  
    //context-story-button
    if(toolFunction === 'context-story' && toolActive === 'true') {
      showElement(document.querySelector('.context-story'), 1000);
      document.querySelector('.context-story').dataset.focus='true';
    }else if(toolFunction === 'context-story' && (toolActive === 'false' || state === 'inactive')) {
      hideElement(document.querySelector('.context-story'), 750);
      document.querySelector('.context-story').dataset.focus='false';
    };
  
    //ar-button
    if(toolFunction === 'ar' && toolActive === 'true'){
      document.querySelector('#main-viewer').activateAR();
      document.querySelector('.gui-loading-screen').classList.remove('hide');
    }else if(toolFunction === 'ar' && (toolActive === 'false' || state === 'inactive')){
      document.querySelector('.gui-loading-screen').classList.add('hide');
    }  
  };
  toolbarBehavior.toggleToolState = toggleToolState;
  //END toggleToolState
};
//END toolbarBehavior



//START hotspotBehavior
//handles hotspot and annotation interaction
function hotspotBehavior(modelViewer, annotationContainer) {
  //save camera settings before focus movement
  let preFocusOrbit = modelViewer.cameraOrbit;
  let preFocusTarget = modelViewer.cameraTarget;
  let preFocusFOV = modelViewer.fieldOfView;

  //START hotspotClicked
  //Handles hotspot click events
  const hotspotClicked = (clickedHotspot) => {
    //remove interaction prompt (indicating the drag-model-to-turn interaction)
    modelViewer.interactionPrompt = 'none';
    //remove the CSS hover-animation from the clickedHotspot-element
    clickedHotspot.classList.remove('hover-animation');
    //switch all tools to "inactive"
    modelViewer.querySelectorAll('.tool').forEach((tool) => {toolbarBehavior.toggleToolState(tool, 'inactive');});
    //hide all hotspots
    modelViewer.querySelectorAll('.hotspot').forEach((hotspot) => {hideElement(hotspot, 1000);});
    
    //camera focus onto the hotspot position and show annotation (play media etc.)
    clickedHotspot.dataset.focus = (clickedHotspot.dataset.focus === 'true') ? 'false' : 'true';
    if(clickedHotspot.dataset.focus === 'true'){
      modelViewer.cameraTarget = clickedHotspot.dataset.target;
      modelViewer.cameraOrbit = clickedHotspot.dataset.orbit;
      modelViewer.fieldOfView = clickedHotspot.dataset.fov;
      
      let hotspotID = clickedHotspot.dataset.hotspotId;
      annotationContainer.querySelectorAll('.annotation').forEach((annotation) => {
        annotation.dataset.focus = 'false';
        if(annotation.dataset.annotationId == 'a'+hotspotID){
          showElement(annotation, 750);
          annotation.dataset.focus = 'true';
          annotation.querySelectorAll('audio').forEach((audio) => {
            audio.currentTime = 0;
          });
        }
      });
    }
  }
  //END hotspotClicked

  //START closeSymbolClicked
  //Handles close symbol click events on annotation-elements
  const closeSymbolClicked = (annotation) => {
    let annotationID = annotation.dataset.annotationId;
    let connectedHotspotID = annotationID.replace('a', '');

    //switch context-story tool to "inactive" (tool is active by default)
    toolbarBehavior.toggleToolState(modelViewer.querySelector('#context-story-button'), 'inactive');

    //show all hotspots
    modelViewer.querySelectorAll('.hotspot').forEach((hotspot) => {
      showElement(hotspot, 1000);
      if(hotspot.dataset.hotspotId === connectedHotspotID){
        hotspot.dataset.focus = (hotspot.dataset.focus === 'true') ? 'false' : 'true';
      }
    });

    //stop media
    annotation.querySelectorAll('audio').forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });

    //reset camera 
    modelViewer.cameraTarget = preFocusTarget;
    modelViewer.cameraOrbit = preFocusOrbit;
    modelViewer.fieldOfView = preFocusFOV;

    //hide annotation
    hideElement(annotation, 750);
    annotation.dataset.focus = 'false';
  }
  hotspotBehavior.closeSymbolClicked = closeSymbolClicked;
  //END closeSymbolClicked

  //Hotspot Eventlisteners
  modelViewer.querySelectorAll('.hotspot').forEach((hotspot) => {
    hotspot.addEventListener('click', () => hotspotClicked(hotspot));
    hotspot.addEventListener('mouseover', function () {
      if(hotspot.dataset.focus === 'false'){
        hotspot.classList.add('hover-animation');
      }
    });
    hotspot.addEventListener('mouseout', () => hotspot.classList.remove('hover-animation'));
  });

  //Annotation Eventlisteners
  document.querySelectorAll('.annotation').forEach((annotation) => {
    annotation.querySelector('.annotation-close-symbol').addEventListener('click', () => closeSymbolClicked(annotation));
  })
};
//END hotspotBehavior



//START imageBehaviour
//handles annotation image interaction
function imageBehaviour(annotationContainer) {
  annotationContainer.querySelectorAll('.annotation-image').forEach( function(image){
    let img = image.querySelector('img');
    let box = image.querySelector('.annotation-image-box');
    let fullScreenImageContainer = document.querySelector('.gui-fullscreen-image-container');
    let fullScreenImage = document.querySelector('.gui-fullscreen-image');
    
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
};
//END imageBehaviour



//START showElement
//removes "hide"-CSS-Class and animates Transition
function showElement(element, duration) {
  Promise.all(
    element.getAnimations({ subtree: true }).map((animation) => animation.finished),
  ).then(() => {
    element.classList.remove('hide');
    element.animate({
        transform: ['scale(0)', 'scale(1)'],
      }, {
        duration: duration,
        easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
        iterations: 1,
        delay: 0
    });
  }).catch(e => {console.error(e);});
};
//END showElement



//START hideElement
//adds "hide"-CSS-Class and animates Transition
function hideElement(element, duration) {
  element.animate({
        transform: ['scale(1)', 'scale(0)'],
      }, {
        duration: duration,
        easing: 'cubic-bezier(0.545, -0.600, 0.450, 0.530)',
        iterations: 1,
        delay: 0
    });
    Promise.all(
      element.getAnimations({ subtree: true }).map((animation) => animation.finished),
    ).then(() => element.classList.add('hide')).catch(e => {console.error(e);});
};
//END hideElement



//START renderModelDimensions
//renders SVG-Lines to Model Dimensions
//Original Code: https://modelviewer.dev/examples/annotations/index.html#dimensions
function renderModelDimensions(modelViewer) {
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
};
//END renderModelDimensions


