var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}], 'stage-2', 'react']
                    }
                }],
            exclude: /node_module/
        }]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};