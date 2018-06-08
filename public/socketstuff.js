console.log('socketstuff.js');	
var socket = io.connect('http://localhost:3000');
socket.on('test', str=> console.log(`socket.onTest ${str}`));
socket.emit('test', 'test from client');