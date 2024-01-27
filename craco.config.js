// craco.config.js
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@generated": path.resolve(__dirname, "./src/generated"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@ui-kit": path.resolve(__dirname, "./src/ui-kit"),
      "@config": path.resolve(__dirname, "./src/config"),
    },
    configure: (webpackConfig) => {
      if (process.argv.indexOf("--analyze") > -1) {
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
      }

      return webpackConfig;
    }
  },
};
