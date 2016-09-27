module.exports = {
	// entry point of our application
	entry: './main.js',
	// where to place the compiled bundle
	output: {
		path: './examples/',
		filename: 'bundle.js'
	},
	externals: {
		'simpleMDE': 'SimpleMDE'
	},
	resolve: {
		extensions: ['', '.js', '.vue']
	},
	module: {
		// `loaders` is an array of loaders to use.
		// here we are only configuring vue-loader
		loaders: [
			{
				test: /\.vue$/, // a regex for matching all files that end in `.vue`
				loader: 'vue'   // loader to use for matched files
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|libs)/,
				loader: 'babel', // 'babel-loader' is also a valid name to reference
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: []
};
