var path = require('path'); // node内置path模块
var webpack = require('webpack'); // webpack打包工具
// var Dashboard = require('webpack-dashboard');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// var dashboard = new Dashboard();

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包输出目录
    filename: 'main.js',
    // publicPath: path.resolve(__dirname, '/dist/')
  },
  module: {
    rules: [
      /**
      Babel 通过语法转换器支持最新版本的 JavaScript 。
      这些插件允许你立刻使用新语法（ES6\ES5），无需等待浏览器支持。
      ./babelrc属于babel的配置文件
      transform-class-properties想要在class中使用箭头函数等语法需要这个
      **/
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
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
      css-loader提取css的加载器配合插件使用
      style-loader注入style标签使用
      **/
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      /*
        图片加载器
      */
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'img/[hash]-[name].[ext]'
            }
          }
        ]
      },
      /*
        可以将图片打包到执行文件夹并且对于小文件打包为数据 地址
      */
      //less加载器
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader", // compiles Less to CSS
            options: { javascriptEnabled: true }
        }]
      }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 当前项目目录而不是dist目录
    compress: true,
    historyApiFallback: true,
    port: 8987
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
    ),
    new webpack.ProvidePlugin({ // 定义全局jquery
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    }),
    // new DashboardPlugin(dashboard.setData), //输出日志分类并且类似仪表盘界面，很炫
  ],
  resolve: {
    alias: { // 对间隔比较远的文件可以进行重命名
      components: path.resolve(__dirname, 'src/component/'),
      commonFunc: path.resolve(__dirname, 'src/util/commonFunction/'),
    }
  }
};
