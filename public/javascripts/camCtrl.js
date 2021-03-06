var canvas = document.getElementById('preview');
var context = canvas.getContext('2d');
//var promise = navigator.mediaDevices.getUserMedia({ audio: true, video: true });
// Prefer camera resolution nearest to 1280x720.
//var constraints = { audio: true, video: { width: 1280, height: 720 } };
// Frame
var offset = 0; 
canvas.width = 800 ;
canvas.height = 600 ;
context.height = canvas.width ; 
context.height = canvas.height ; 

var video = document.getElementById('video'); 
//var socket = io(); 

function logger(message){
  $('#logger').text(message); 
}
function loadCam(stream){
  video.src = window.URL.createObjectURL(stream);
  logger('Camera connected');
}
function loadFail(){
  logger('Camera could not connect');
}
function viewVideo(video,context){
  context.drawImage(video,0,0,context.width,context.height);
  //socket.emit('stream',canvas.toDataURL('image/webp')); 
}

$(document).ready(function() {
  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || 
                            navigator.mozGetUserMedia || navigator.msgGetUserMeida);
  if(navigator.getUserMedia){
    navigator.getUserMedia({video:true},loadCam,loadFail); 
  }
  setInterval(function(){
    viewVideo(video,context);
  },60);
});