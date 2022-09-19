
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin    = require('copy-webpack-plugin');

const cssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    output:{
        clean:true, // limpia la salida de producción
        filename: 'main.[contenthash].js'
    },

    module: {

        rules:[
            {
                test: /\.html$/, // barre con los archivos html
                loader: 'html-loader', // carga el loader
                options: {
                     sources: false // crea vinculos hash a solicitudes externas
                }
            },
            {
                test: /\.css$/, // barre con los archivos html
                exclude: /styles.css$/, // excluye la busqueda para que pueda verificar la siguiente regla
                use:['style-loader','css-loader']
              },
              {
                test: /styles.css$/,
                use:[MiniCssExtract.loader, 'css-loader']
              },
              {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }


        ]
    },

    optimization: {
        minimize:true,
        minimizer:[
            new cssMinimizer(),
            new Terser(),
        ]
    },

    plugins: [
        new HtmlWebpack({
            title: ' RORO APP',
            //filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin(
            {
                patterns: [
                    { from: 'src/assets', to: 'asssets/' }
                ]
            }
        ),

    ],


}