const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const webpack = require('webpack')

const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'boundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use:[MiniCssExtractPlugin.loader, "css-loader"]
			}
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			'...'
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			hash: true
		}),

		new CopyPlugin({
			patterns: [
				{
					from: './src/styles' , to: 'styles'
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new webpack.optimize.ModuleConcatenationPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 3000
	}
};