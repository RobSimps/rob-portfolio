'use strict';
module.exports = {
	all: {
		options: {
			style: 'expanded',
			sourcemap: true
		},
		files: {
			'<%= buildFolder %>/<%= assetsFolder %>/css/fonts-woff.css': '<%= assetsFolder %>/sass/fonts-woff.scss',
			'<%= buildFolder %>/<%= assetsFolder %>/css/fonts-woff2.css': '<%= assetsFolder %>/sass/fonts-woff2.scss',
			'<%= buildFolder %>/<%= assetsFolder %>/css/style.css': '<%= assetsFolder %>/sass/style.scss',
			'<%= buildFolder %>/<%= assetsFolder %>/css/ie.css': '<%= assetsFolder %>/sass/ie.scss'
		}
	}
};
