var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_module/,
            use: [
                {
                    loader: 'react-hot-loader/webpack'
                },
                {
                    loader: 'babel-loader',
                    query:
                        {
                            presets: ['stage-2', 'react']
                        }
                }],
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};