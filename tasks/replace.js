'use strict';
module.exports = {
	main: {
		options: {
			patterns: [ {
				match: 'loadFont',
				replacement: '<%= grunt.file.read( "build/assets/js/libs/loadFont.js" )%>',
				expression: false
			}, {
				match: 'icons',
				replacement: '<%= grunt.file.read( "build/assets/img/icons/icons.svg" )%>',
				expression: false
			}, {
				match: 'googleAnalytics',
				replacement: '<%= grunt.file.read( "build/assets/js/libs/googleAnalytics.js" )%>',
				expression: false
			} ]
		},
		files: [ {
			expand: true,
			flatten: true,
			src: [
				'<%= srcFolder %>/_replace/head.html',
				'<%= srcFolder %>/_replace/foot.html'
			],
			dest: '<%= srcFolder %>/_includes/'
		} ]
	},
};
