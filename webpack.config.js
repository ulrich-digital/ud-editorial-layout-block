const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'editorial-layout-editor-script': path.resolve(__dirname, 'src/blocks/editorial-layout/index.js'),
		'editorial-layout-editor-style': path.resolve(__dirname, 'src/css/editorial-layout/editor.scss'),
		'editorial-layout-frontend-script': path.resolve(__dirname, 'src/blocks/editorial-layout/frontend.js'),
		'editorial-layout-frontend-style': path.resolve(__dirname, 'src/css/editorial-layout/frontend.scss'),
		'editorial-item-editor-script': path.resolve(__dirname, 'src/blocks/editorial-item/index.js'),
		'editorial-item-editor-style': path.resolve(__dirname, 'src/css/editorial-item/editor.scss'),
		'editorial-item-frontend-script': path.resolve(__dirname, 'src/blocks/editorial-item/frontend.js'),
		'editorial-item-frontend-style': path.resolve(__dirname, 'src/css/editorial-item/frontend.scss'),
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
};
