'use strict';
module.exports = {
	options: {
		map: false,
	},
	style: {
		expand: true,
		cwd: '<%= buildFolder %>/<%= assetsFolder %>/css/',
		src: 'style.css',
		dest: '<%= buildFolder %>/<%= assetsFolder %>/css/'
	}
};
