var viewWidth = 1200;        
var viewHeight = 880;        
var fps = 20;        
var delay = getFrame(fps);        
var vanWidth, vanHeight, vanObj;   

function initVan() {        
  vanObj = document.getElementById("logo");        
  vanObj.style.position = "absolute";        
  vanObj.src = "logo.png";        
  vanWidth = 355;        
  vanHeight = 55;        
  var startX = 0-vanWidth;        
  var startY = viewHeight-vanHeight;        
  setPosition(startX,startY);        
  transition(startX,startY,3000);        
}

function transition(startX,startY,time) {        
  //the intention of this is to follow a path y=-25x in mathematical terms
  var endX = viewWidth;        
  var endY = startY-(endX/-25);        
  //note that this is the velocity per millisecond
  var velocityX = (endX-startX)/time;        
  var velocityY = (endY-startY)/time;        
  alert(endY+", "+startY);        
  move(velocityX,velocityY,endX,endY);        
}

function move(vX,vY,eX,eY) {        
  var posX = getX();        
  var posY = getY();        
  if (posX<=eX || posY<=eY) {        
    //velocityX (in milliseconds) * delay = the amount of pixels moved in one frame @fps=30
    var moveX = vX*delay;        
    var moveY = vY*delay;        
    var newX = posX+moveX;        
    var newY = posY+moveY;        
    setPosition(newX,newY);        
    setTimeout(function() {        
        move(vX,vY,eX,eY);        
    }, delay);        
  }        
} 


function getX() {        
  return vanObj.offsetLeft;        
}    

function getY() {        
  return vanObj.offsetTop;        
}  

function setPosition(newX,newY) {        
  vanObj.style.left = newY + "px";        
  vanObj.style.top = newX + "px";        
}        

function setSize(scaleX,scaleY) {        
  vanWidth *= scaleX;        
  vanHeight *= scaleY;        
  vanObj.width = vanWidth;        
  vanObj.height = vanHeight;        
}      

function getFrame(fps) {        
  return Math.floor(1000/fps);        
}  


function clickHotspotImage(event) {
  var xOffset = document.getElementById('hotspot_image').offsetLeft;
  var xCoordinate = event.offsetX;
  var yCoordinate = event.offsetY;
  alert(xCoordinate + ',' + yCoordinate);
  var hotspotlist = document.getElementById('hotspot_list').value;
  document.getElementById('hotspot_list').value = document.getElementById('hotspot_list').value + '\n' + xCoordinate + ',' + yCoordinate;
}