const path = require('path');

module.exports = {
	entry: {
		client: ['./index.js']
	},
	output: {
		path: __dirname + '/../public',
		publicPath: '/../public',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, {
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		// modules: [path.resolve(__dirname, './client'), 'node_modules'],
		extensions: ['*', '.js', '.json']
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};
