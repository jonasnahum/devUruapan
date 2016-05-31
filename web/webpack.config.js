 module.exports = {
     context: __dirname,
     entry: './public/angular/bin/main.js',
     output: {
         path: __dirname + '/public/angular/bundle',
         filename: 'main.min.js'
     },
     module: {
        loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            include: __dirname + '/public/angular/src',
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
 };