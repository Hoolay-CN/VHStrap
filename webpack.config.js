var webpack = require('webpack');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/",
        filename: "[name]-[hash].js"
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
    },
    module: {
        preLoaders: [{
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include: /src/,
                exclude: /node_modules/
            },
        ],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test: /\.vue$/, loader: 'vue'}
        ]
    }
}
