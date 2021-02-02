/**
 * vue.config
 * created by eds 2019/8/22
 */
const path = require('path');

module.exports = {
  //  打包静态文件访问相对路径设置
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "libs",
  devServer: {
    proxy: {
      "/api": {
        target: "http://172.20.89.88:5001/api",
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  //  多页面
  pages: {
    index: "src/modules/index/main.js",
    login: "src/modules/login/main.js",
  },
  //  打包后分析包大小
  chainWebpack: (config) => {
    /** 环境变量 */
    config
      .plugin('define')
      .tap(args => {
        args[0].API_CONFIG = JSON.stringify(process.env.NODE_ENV)
        return args
      })
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    }
  },
  //  alias
  configureWebpack: {
    resolve: {
      alias: {
        store: path.join(__dirname, 'src/store'),
      },
    },
  },
};