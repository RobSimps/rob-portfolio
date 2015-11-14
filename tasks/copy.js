'use strict';
module.exports = {
	images: {
		files: [ {
			flatten: false,
			expand: true,
			cwd: '<%= assetsFolder %>/img',
			src: '**/*',
			dest: '<%= buildFolder %>/<%= assetsFolder %>/img/'
		} ]
	},
	js: {
		files: [ {
			flatten: false,
			expand: true,
			cwd: '<%= assetsFolder %>/bower_components/html5shiv/dist/',
			src: 'html5shiv.min.js',
			dest: '<%= buildFolder %>/<%= assetsFolder %>/js/libs/'
		} ]
	}
};
