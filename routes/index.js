var express = require('express');
var router = express.Router();
var server = new express(); 

var http = require('http').Server(server);
var io = require('socket.io')(http);

io.on('connection',function(socket) {
  socket.on('stream',function(image) {
    socket.broadcast.emit('stream',image); 
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Video Stream' });
});

module.exports = router;
