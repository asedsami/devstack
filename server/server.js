import http from 'http';
import reload from 'reload';
import socketio from 'socket.io';
import app from './app';


const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket=> {
	console.log('connected');
});

reload(app);

server.listen(3000, ()=> {
	console.log('magic happens at localhost:3000');
});