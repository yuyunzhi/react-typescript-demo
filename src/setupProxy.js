/**
 * 代理跨域配置
 */
console.log("xxxx", process.env.REACT_API_DOMAIN);
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: `${process.env.REACT_API_DOMAIN}`,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
