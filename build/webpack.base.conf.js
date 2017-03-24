var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var vuxLoader = require('vux-loader') // 需要使用vux UI库，要加载vux-loader 模块

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/*======多入口文件配置项======*/
var projectRoot = path.resolve(__dirname, '../')
var glob = require('glob');
var entries = getEntry(['./src/module/*.js', './src/module/**/*.js']); // 获得入口js文件（getEntry函数在下面定义）
/*============================*/

var webpackConfig = {
  /*entry: {
    app: './src/main.js'
  },*/
  entry: entries,   // 多入口数组
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'common': path.resolve(__dirname, '../src/common'),  // 添加两个别名 common
      'components': path.resolve(__dirname, '../src/components')   // 添加两个别名 components
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //include: [resolve('src'), resolve('test')]
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },

}

// 如果使用 “VUX” UI组件，需要 将 vuxLoader 合并原来的 webpackConfig （设置对象）再输出
module.exports = vuxLoader.merge(webpackConfig,{
  options:{},
  plugins:[
    {name:'vux-ui'}
  ]
})


function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  if (typeof (globPath) != "object") {
    globPath = [globPath]
  }
  globPath.forEach((itemPath) => {
    glob.sync(itemPath).forEach(function (entry) {
      basename = path.basename(entry, path.extname(entry));
      if (entry.split('/').length > 4) {
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
      } else {
        entries[basename] = entry;
      }
    });
  });
  return entries;
}
