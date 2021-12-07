/* eslint @typescript-eslint/no-var-requires: "off" */
const openInEditor = require("launch-editor-middleware");

module.exports = {
  devServer: {
    setup(app) {
      app.use("/__open-in-editor", openInEditor("code"));
    },
  },
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
