const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;
const getFilename = ext => isProd ? `[name].[hash].${ext}` : `[name].${ext}`

const getLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader',
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimize = true;
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin({
                exclude: /node_modules/
            })
        ]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: ['@babel/polyfill', './index.js']
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
                exclude: /node_modules/
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]
                        ],
                        // decoratorsBeforeExport: true
                    },
                },
                exclude: /node_modules/
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
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'images',
                        name: getFilename('[ext]'),
                    }
                }
            }
        ],
    },
    devServer: {
        quiet: true,
        overlay: true,
        port: 3000
    },
    devtool: isDev ? 'source-map' : '',
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
    optimization: optimization()
};