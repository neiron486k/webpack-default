const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSNano = require('cssnano')
const Autoprefixer = require('autoprefixer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;
const getFilename = ext => isProd ? `[name].[hash].${ext}` : `[name].${ext}`
const getLoaders = (extra) => {
    const loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader',
    ]

    if (isProd) {
        loaders.push({
            loader: "postcss-loader",
            options: {
                plugins: [
                    new Autoprefixer,
                    new CSSNano
                ]
            }
        })
    }

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'js/' + getFilename('js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node-mudules/
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: '/\.css/',
                use: getLoaders()
            },
            {
                test: /\.(s[ac]ss)$/,
                use: getLoaders('sass-loader'),
                exclude: /node-modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader'
            }
        ],
    },
    devServer: {
        quiet: true,
        overlay: true,
        port: 3000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/' + getFilename('css'),
        }),
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            filename: path.resolve(__dirname, 'dist/index.html'),
            minify: isProd
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};