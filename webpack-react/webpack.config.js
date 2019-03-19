const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
            rules: [{
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
                    test: /\.(css|less)$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
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
            // new CleanWebpackPlugin(['dist']),
            new CleanWebpackPlugin(['dist'], {
                watch: false
            }),
        ],
    };
};