const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: miniCSSExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new miniCSSExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
