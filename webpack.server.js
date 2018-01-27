const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // to ignore buil-in modules like path, fs, etc.
  externals: [nodeExternals()], // to ignore all modules in node_modules
	entry: {
		server: ['./server/server.js']
	},
	output: {
		path: __dirname + '/build',
		publicPath: 'build',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, // this excludes node_modules/ from being parsed with babel-loader, but not from being bundled
				use: 'babel-loader'
			}
			, {
				test: /\.css$/,
				use: ['node-style-loader', 'css-loader']
			}, {
				test: /\.(sass|scss)$/,
				use: ['node-style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.json']
	},
	devtool: 'source-map'
};
