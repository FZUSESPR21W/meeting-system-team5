module.exports = {
  lintOnSave: false,
  devServer:{
    host: "localhost",
      port: 8080,
      proxy: {
          '/api': {
              target: 'http://47.96.1.69',
              changeOrigin: true,
              pathRewrite: {
                  '/api': ''
              }
          }
      }
}
}