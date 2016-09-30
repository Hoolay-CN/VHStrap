// Gulp plugin - convert markdown to vue .

var path = require('path')
var through = require('through-gulp');
var cheerio = require('cheerio')
var hljs = require('highlight.js')
var markdown = require('markdown-it')

/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
var replaceDelimiters = function (str) {
	return str.replace(/({{|}})/g, '<span>$1</span>')
}

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */
var renderHighlight = function (str, lang) {
	if (!(lang && hljs.getLanguage(lang))) {
		return ''
	}

	try {
		return replaceDelimiters(hljs.highlight(lang, str, true).value)
	} catch (err) {}
}

/**
 * html => vue file template
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */
var renderVueTemplate = function (html) {
	var $ = cheerio.load(html, {decodeEntities: false})
	var output = {
		style: $.html('style'),
		script: $.html('script')
	}
	var result

	$('style').remove()
	$('script').remove()

	result = '<template><section>' + $.html() + '</section></template>\n' +
		output.style + '\n' +
		output.script

	return result
}

function md2vue(options) {

	options = options || {};
	options = Object.assign({ // defaults
		preset: 'default',
		html: true,
		highlight: renderHighlight
	}, options);

	// markdown it plugins
	var plugins = options.use;
	var preprocess = options.preprocess;
	var parser = markdown(options.preset, options)

	delete options.use;
	delete options.preprocess;

	// apply plugins
	if (plugins) {
		plugins.forEach(function (plugin) {
			if (Array.isArray(plugin)) {
				parser.use.apply(parser, plugin)
			} else {
				parser.use(plugin)
			}
		})
	}

	// overload inline code fn for parser
	var codeInlineRender = parser.renderer.rules.code_inline;
	parser.renderer.rules.code_inline = function () {
		return replaceDelimiters(codeInlineRender.apply(this, arguments));
	}

	// creating a stream through which each file will pass
	var stream = through(function(file, encoding, callback) {
		var source = null;

		// do whatever necessary to process the file
		if (file.isNull()) {

		}

		if (file.isBuffer()) {
			source = file.contents.toString();

			if (preprocess) {
				source = preprocess.call(this, parser, source);
			}

			source = source.replace(/@/g, '__at__');
			source = parser.render(source).replace(/__at__/g, '@');
			source = renderVueTemplate(source);

			// Write file buffer
			file.path = file.path.replace('.md', '.vue');
			file.contents = new Buffer(source);
		}

		if (file.isStream()) {

		}
		// just pipe data next, or just do nothing to process file later in flushFunction
		// never forget callback to indicate that the file has been processed.
		this.push(file);
		callback();
	}, function(callback) {
		// just pipe data next, just callback to indicate that the stream's over
		// this.push(something);
		callback();
	});

	// returning the file stream
	return stream;
}

// exports
module.exports = md2vue;
