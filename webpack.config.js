// development workflow
const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map', // define which kind of source maps, if any webpack should generate
    entry: './src/index.js', //this is where the journey starts
    output: {
        path: path.resolve(__dirname, 'dist'), // where this should be stored,
        filename: 'bundle.js', // where our or how our file should be named
        publicPath: '' /* that's important for webpack to know where our files are put to
                     and if that then is the root folder of the server in the end 
                     or if it's a nested folder.
                     empty string which means you store the files 
                     in a specific folder and you don't need to adjust 
                     any imports or adjust for anything, 
                     the file structure, the folder structure will be 
                     the folder structure as we deployed in the end */
    },
    resolve: {
        /*  tell webpack that it should be
        aware of certain extensions
        and if it encounters an import without an extension, 
        it should try these extensions and see if it finds
        a file of one of these. */
        extentions: ['.js', '.jsx'] 
        
    },
    /*  with loaders we make sure that we do correctly
        handle different file types,
        this is done with a special configuration 
        on the same level as output and resolve which is named module
        because an imported dependency is referred as a module,
        we could kind of translate module with file. */
    module: {
        rules: [
            {
                test: /\.js$/, 
                loader: 'babel-loader', // third party plugin which does smth to the file
                exculed: /node_modules/
            }
        ]
    }
}

