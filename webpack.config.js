const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'appbundle.js'
    },
    module:{
        rules : [
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: ['css-loader', 'sass-loader']                        
                    }
                )
            }
        ]
    },
    plugins: [  
        new HtmlWebpackPlugin({
            title: 'Yo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
      }),
      new ExtractTextPlugin("app.css"),
    ]
}