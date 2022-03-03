const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
       
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {
                test: /\.(js)$/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg | png | webp | jpeg | svg | gif)$/,
                loader: require.resolve('file-loader')
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}