const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(process.cwd(), 'src/index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.join(process.cwd(), 'src')
    ),
    new CopyWebpackPlugin([
        { from: 'index.html' }
    ]),

    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false)
    })
]; 
