// development workflow
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'cheap-module-eval-source-map', // define which kind of source maps, if any webpack should generate
	entry: './src/index.js', //this is where the journey starts
	output: {
		path: path.resolve(__dirname, 'dist'), // where this should be stored,
		filename: 'bundle.js', // where our or how our file should be named
		publicPath:
			'' /* that's important for webpack to know where our files are put to
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
		extentions: [ '.js', '.jsx' ]
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
			},
			{
				/* we can define which type of loader we want to use here.
        Now for css, I actually need a more complex setup than for .js....
        we'll configure it here in the webpack config file.
        So instead of loader I can use `use`  */
				test: /\.css$/,
				exculed: /node_modules/,
				/* if we want to set up multiple loaders or a loader with config, 
         we should use `use` here.
        It takes an array of the loaders we want to apply */
				use: [
					/* 
        the order does matter! 
        webpack parses loaders in this `use` array and applies them from right to left,
        so from bottom to top if we write it like this. 
        So it first takes the css loader which it should 
        because that makes it understand the css imports
        and don't throw an error
        and then it applies the style loader on the extracted css code
        and that's exactly the order we need here.*/
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1, // inform css loader that we run 1 loader before this one.
							modules: true, // enable css modules
							//localIdentName: define how the generated css classes due to css modules should look like
							localIdentName: '[name]__[local]__[hash:base64:5'
						}
					},
					{
						/* postcss-loader: sounds like it does something to css after we parse that, here
        it'll actually runs before the css loader, 
        dives into the css file and adjust our code before css
        loader pulls it out and adjusts the class names and so on. 
        It is a loader which
        allows us to transform the css,
        for example we could also use post css loader to handle sass and stuff like this */
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({
									browsers: [ '> 1%', 'last 2 versions' ]
								})
							]
						}
					}
				]
			}
		]
	}
};
