var path = require("path");
var webpack = require("webpack");
var replace = require('rollup-plugin-replace');

module.exports = {
    entry:{
        app:["./sui.component.module.js"],
    },
    output:{
        path:__dirname,
        filename:"./dist/shinyui.min.v1.0.0.js"
    },
    module:{
        loaders:[
            {test:/\.(js|jsx)/,loader:'babel-loader',exclude: /(node_modules)/, query: {
                presets: ['es2015', 'react']
            }},
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(png|jpg)$/,loader:'url-loader'},
            {test:/\.(eot|svg|ttf|woff)$/,loader:'file-loader'}
        ]
    },
    plugins:[
        //new webpack.BannerPlugin("Hello World"),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings:false
        //     },
        //     except:['import']
        // }),

        new webpack.HotModuleReplacementPlugin()
    ],
}

 