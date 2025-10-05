const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
mode: 'production',
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js',
publicPath: '/',
},
module: {
rules: [
{ test: /\.css$/i, use: ['style-loader', 'css-loader'] },
{ test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource' },
],
},
plugins: [
new HtmlWebpackPlugin({ template: 'public/index.html' }),
],
devServer: {
static: './dist',
port: 8080,
}
};