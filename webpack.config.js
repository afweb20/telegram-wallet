const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/telegramWallet.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "telegram-wallet"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./telegram-wallet"),
    },
    compress: true,
    hot: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./favicon.ico",
      filename: "./index.html",
      template: "./src/index.html"
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};