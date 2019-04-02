const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
/*  here I'll remove the `eval` to create more optimal source maps 
which are less resource intensive,
you can then always decide whether you want to deploy them or not
but it's nice to have source maps here too,
 to quickly find some bugs in the production workflow, if there
are any. */
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    /* 
    we want to apply the same transformations as in development
    so we don't need to touch the loaders,
    ... I also want to uglify my output, 
    I want to optimize it and that actually is a plugin 
    that's built into webpack,
    So, I'll simply import webpack itself into that file,
    and then we can use one of the build in plugins.
    */
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                     },
                     { 
                         loader: 'postcss-loader',
                         options: {
                             ident: 'postcss',
                             plugins: () => [
                                 autoprefixer({
                                     browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                     ]
                                 })
                             ]
                         }
                      }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
		]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        /* 
        with `UglifyJsPlugin` I optimize my production workflow, 
        where I minify the files and ship as little code as possible.
        */
        new webpack.optimize.UglifyJsPlugin()  
    ]
};
