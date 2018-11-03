var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    entry: './dist/build.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.css/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }]
            },
            {
                test: /\.(jpg|png)$/,
                loaders: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};