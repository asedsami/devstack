import mongoose from 'mongoose';

export default function connectToDB({URI, debugFlag}, cb) {
	mongoose.Promise = global.Promise;
	mongoose.connect(URI, {useMongoClient: true});
	mongoose.set('debug', debugFlag);

	let db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', ()=> {
		console.log(`connected to mongo: ${URI}`);
	});
};