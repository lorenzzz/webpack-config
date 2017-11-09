var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'appbundle.js'
    },
    plugins: [  
        new HtmlWebpackPlugin({
            title: 'Yo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
      })
    ]
}