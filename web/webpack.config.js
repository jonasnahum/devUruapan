// para que funcione como nodemon webpack --progress --colors --watch
// para ejecutar, solo escribir webpack
const webpack = require('webpack');
 module.exports = {
     context: __dirname,
     entry: './public/angular/bin/main.js',
     output: {
         path: __dirname + '/public/angular/bundle',
         filename: 'main.min.js'
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
