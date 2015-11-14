'use strict';
module.exports = {
	style: {
		expand: true,
		cwd: '<%= buildFolder %>/<%= assetsFolder %>/css/',
		src: 'style.css',
		dest: '<%= buildFolder %>/<%= assetsFolder %>/css/',
		ext: '.css'
	},
	ie: {
		expand: true,
		cwd: '<%= buildFolder %>/<%= assetsFolder %>/css/',
		src: 'ie.css',
		dest: '<%= buildFolder %>/<%= assetsFolder %>/css/',
		ext: '.css'
	}
};
