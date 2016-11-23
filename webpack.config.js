module.exports = {  
    entry: [
        './src/app.ts'
    ],
    output: {
        publicPath: './public',
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
            // { 
            //     test: /\.less$/,
            //     loader: "style!css!autoprefixer!less"
            // }
        ]
    }
}