const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}