'use strict';
module.exports = {
	css: {
		files: [
			'<%= assetsFolder %>/sass/**/**/*.scss'
		],
		tasks: [
			'sass',
			'autoprefixer',
			'stripmq',
			'pixrem'
		]
	},
	js: {
		files: [
			'<%= assetsFolder %>/js/**/*.js'
		],
		tasks: [
			'jshint',
			'concat'
		]
	},
	// html: {
	// 	files: [
	// 		'*.html',
	// 	],
	// 	tasks: [
	// 		'replace'
	// 	]
	// },

	site: {
		files: [
			'<%= siteFolder %>/**/**/*.hbs',
			'<%= siteFolder %>/**/**/*.json'
		],
		tasks: [
			'assemble:site'
		]
	},
	todo: {
		files: [
			'<%= assetsFolder %>/js/**/*.js',
			'<%= assetsFolder %>/sass/**/*.scss'
		],
		tasks: [ 'todo' ]
	}
};
