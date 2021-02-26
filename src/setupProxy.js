/**
 * 代理跨域配置
 */
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: `${process.env.REACT_APP_DOMAIN}`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
