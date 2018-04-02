const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './example.ts',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
		],
	},

	devtool: 'source-map',
	mode: 'development',
	watch: true,

	resolve: {
		extensions: ['.ts'],
	},

	// plugins: [new UglifyJSPlugin()],
};
