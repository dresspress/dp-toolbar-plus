const mix = require('laravel-mix')
const path = require('path')

mix.alias({
	'components': path.join(__dirname, 'src/js/components'),
});

const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

mix.webpackConfig({
	plugins: [new DependencyExtractionWebpackPlugin()],
});

mix.setPublicPath('/');

mix.options({
	processCssUrls: false,
});

mix.js('src/js/settings.js', 'build/js').react()

mix.sass('src/scss/admin.scss', 'build/css');
// mix.sourceMaps(false, 'source-map').version()
mix.sourceMaps().version(); // evel source map