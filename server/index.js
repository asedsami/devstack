require('babel-register')({
	presets: [
		"es2015",
		"react",
		"stage-0"
	],
	ignore: ["node_modules"],
	plugins: [
		"transform-runtime",
		"transform-class-properties"
	],
	sourceMaps: true,
	retainLines: true
});
/*
require.extensions['.scss'] = ()=> {
	return;
};
require.extensions['.css'] = ()=> {
	return;
};
*/
module.exports = require('./server.js');