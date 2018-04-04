const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  module: {
    rules: [
      /**
      Babel 通过语法转换器支持最新版本的 JavaScript 。
      这些插件允许你立刻使用新语法（ES6\ES5），无需等待浏览器支持。
      ./babelrc属于babel的配置文件
      **/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      /**
      使用html模板并且压缩到最小
      **/
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      /**
      提取css的加载器配合插件使用
      **/
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ // 自动生成html
      template: "./src/util/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({ // 提取css的插件配合加载器使用
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([ // 项目配置文件：项目的显示名称、后台服务地址、、、
      {
        from: 'src/util/configuration.js',
        to: './configuration.js'
      }],{copyUnmodified: true}
    )
  ]
};
