const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    console.log('是否为开发环境', devMode);
    return {
        entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
        output: {
            // path: __dirname + '/dist',
            // publicPath: '/',
            filename: devMode ? '[name].js' : 'js/[name].[hash:6].js'
        },
        devServer: {
            port: 3000, //端口号
        },

        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                        // other vue-loader options go here
                    }
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    }, ],
                },
                {
                    test: /\.(css|less|scss)$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name]-[hash:6].[ext]',
                        },
                    }, ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : 'styles/[name].[hash:6].css',
                chunkFilename: devMode ? '[name].css' : 'styles/[id].[hash:6].css',
            }),
            new HtmlWebPackPlugin({
                template: './public/index.html',
                filename: './index.html',
            }),
            new CleanWebpackPlugin(['dist'], {
                watch: false
            }),
            new VueLoaderPlugin()
        ],
    };
};