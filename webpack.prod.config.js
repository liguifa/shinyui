var path = require("path");
var webpack = require("webpack");
var extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
        app:["./main.js"],
    },
    output:{
        path:__dirname,
        filename:"./dist/shinyui.min.v1.0.0.js"
    },
    module:{
        loaders:[
            {enforce: "pre",test:/\.js$/,loader:'eslint',include:__dirname + "/src",exclude: /(node_modules)/},
            {test:/\.(js|jsx)/,loader:'babel-loader',exclude: /(node_modules)/},
            {test:/\.css$/,loader:extractTextPlugin.extract("css-loader")},
            {test:/\.(png|jpg)$/,loader:"file-loader",options:{outputPath:"./dist/images/",name:'[hash].[ext]'}},
            {test:/\.(eot|svg|ttf|woff)$/,loader:'file-loader',options:{outputPath:"./dist/font/",name:'[hash].[ext]'}}
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

        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            },
            except:['import']
        }),

        new webpack.HotModuleReplacementPlugin(),

        new extractTextPlugin("./dist/styles.css"),  
    ],
}
