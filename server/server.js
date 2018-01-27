import http from 'http';
import reload from 'reload';
import app from './app';

const server = http.createServer(app);

reload(app);

server.listen(3000, ()=> {
	console.log('magic happens at localhost:3000');
});