'use strict';
module.exports = {
	dev: {
		bsFiles: {
			src: [
				'<%= buildFolder %>/<%= assetsFolder %>/css/*.css',
				'<%= buildFolder %>/<%= assetsFolder %>/js/*.js',
				'<%= buildFolder %>/*.html'
			]
		},
		options: {
			watchTask: true,
			server: './<%= buildFolder %>'
		}
	}
};
