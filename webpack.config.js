const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname,'src'), 
  mode:'development',
  entry: {
      main:'./js/index.js'
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',    
  },
  plugins:[
      new HTMLWebpackPlugin({
          title:'Picture Gallery',
          filename:'./index.html',
          template:'./index.html'
      }),
      new CleanWebpackPlugin(),
      new miniCss({
         filename: 'style.scss',
      }),
  ],
  module: {
    rules: [
          {
            test:/\.(s*)css$/,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
      },
      {
            test:/\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env',
                            '@babel/react',{
                            'plugins': ['@babel/plugin-proposal-class-properties']}]
              }
            }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
       modules: [`${__dirname}/static_src`, 'node_modules'],
       extensions: ['.js', '.jsx'],
  }
};
