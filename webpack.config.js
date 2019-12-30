var path = require('path');
var webpack = require('webpack');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
var uglify = require("uglifyjs-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, './src'),
    build: path.join(__dirname, './dist')
};

module.exports = {
    mode: 'development',
    entry: {
        'utils': PATHS.src + '/index.ts'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        library: 'Utils',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new uglify(),
        new WebpackBuildNotifierPlugin({
            title: 'My Project Webpack Build'
        }),
        new webpack.IgnorePlugin(/test\.ts$/)
    ]
};
