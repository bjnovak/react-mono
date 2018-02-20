const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    externals: '@angular/core',
    entry: {
        app: './src/index.ts'
    },
    plugins: [
        new CleanWebpackPlugin(['lib']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        forceEnv: 'production'
                    }
                },
                {
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib')
    }
};
