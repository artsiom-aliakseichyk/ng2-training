module.exports = config => {
    config.set({
        autoWatch: true,
        browsers: ['Chrome'],
        files: ['./karma.entry.js'],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: false,
        webpack: require('./webpack.tst.config.js'),
        webpackServer: {
            noInfo: true
        }
    });
}; 