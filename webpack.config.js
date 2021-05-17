const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

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
      new CleanWebpackPlugin()
  ],
  module: {
    rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
            // test: /\.m?js$/,
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
          }
      ]
  },
  resolve: {
       modules: [`${__dirname}/static_src`, 'node_modules'],
       extensions: ['.js', '.jsx'],
  }
};
