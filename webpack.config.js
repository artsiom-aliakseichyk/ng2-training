'use strict';
var webpack             = require("webpack"),
    ExtractTextPlugin   = require("extract-text-webpack-plugin");

module.exports = {  
    entry: [
        './src/app.ts'
    ],
    output: {
        path: './public',
        publicPath: '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            { 
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less?resolve url')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
}