const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin").default;
const PurifyCSSPlugin = require("purifycss-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob");
const path = require("path");

const argv = require("yargs-parser")(process.argv.slice(2));
const merge = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

webpackConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          // "style-loader",
          {
            // loader:"css-loader?modules&localIdentName=[name]__[local]--[hash:base64:5]"
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // new WebpackDeepScopeAnalysisPlugin(),
    new MiniCssExtractPlugin({
      filename: _modeflag ? "styles/[name].[hash:5].css" : "styles/[name].css",
      chunkFilename: _modeflag ? "styles/[id].[hash:5].css" : "styles/[name].css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new CleanWebpackPlugin(),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync(path.join(__dirname, "./dist/*.html"))
    // })
  ]
};


module.exports = merge(_mergeConfig, webpackConfig);