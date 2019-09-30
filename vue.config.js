module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      proxy: {
        "/netease-api": {
          target: "http://localhost:3000",
          pathRewrite: { "^/netease-api": "" },
          changeOrigin: true,
          secure: false
        }
      },
      port: 8888
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/style/mixin.scss";
        `
      }
    }
  }
};
