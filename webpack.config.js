var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: path.join(__dirname, 'app/index.html'),
        filename: 'index.html',
        inject: 'body'
    });

const config = {
    devtool: "inline-source-map",

    entry: {
        'polyfills': path.join(__dirname, 'app/config/polyfills.ts'),
        'vendor': path.join(__dirname, 'app/config/vendor.ts'),
        'app': path.join(__dirname, 'app/app.ts')
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
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
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'less-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        HTMLWebpackPluginConfig
    ],
    tslint: {
        emitErrors: true,
        failOnHint: true,
        configuration: require('./tslint.json')
    }
};

module.exports = config;
