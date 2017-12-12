var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:{
        app:["./main.js"],
    },
    output:{
        path:__dirname,
        filename:"./dist/shinyui.v1.0.0.js"
    },
    module:{
        loaders:[
            {test:/\.(js|jsx)/,loader:'babel-loader',exclude: /(node_modules)/},
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(png|jpg)$/,loader:'url-loader'},
            {test:/\.(eot|svg|ttf|woff)$/,loader:'url-loader'}
        ]
    },
    plugins:[
        new webpack.BannerPlugin(`
        ShinyUI v1.0.0
        (c) 2017 http://liguifa.github.io/shinyui
        License: MIT
       `),

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

 