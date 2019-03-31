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
    }
}

