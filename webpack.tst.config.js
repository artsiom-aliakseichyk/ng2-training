const path = require('path');

module.exports = {
    entry: require('./webpack/entry.jit'),
    context: path.join(process.cwd(), 'src'),
    output: require('./webpack/output'),
    module: require('./webpack/module'),
    plugins: require('./webpack/tst.plugins'),
    resolve: require('./webpack/resolve'),
    devServer: require('./webpack/dev-server'),
    stats: 'errors-only',
    devtool: 'inline-source-map'
}; 