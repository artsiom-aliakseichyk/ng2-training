var webpack             = require("webpack"),
    path                = require('path'),
    ExtractTextPlugin   = require("extract-text-webpack-plugin");

module.exports = {  
    entry: {
        main: './src/scripts/app',
    },
    output: {
        path: './public',
        publicPath: '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],
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
    ],
    tslint: {
        emitErrors: true,
        failOnHint: true,
        configuration: require('./tslint.json')
    }
}