'use strict';
module.exports = {
	all: {
		files: {
			'<%= buildFolder %>/<%= assetsFolder %>/js/main.js': '<%= assetsBuildFolder %>/js/main.js'
		}
	},
	inline: {
		files: {
			'<%= buildFolder %>/<%= assetsFolder %>/js/libs/loadFont.js': '<%= assetsFolder %>/js/libs/loadFont.js',
			'<%= buildFolder %>/<%= assetsFolder %>/js/libs/googleAnalytics.js': '<%= assetsFolder %>/js/libs/googleAnalytics.js'
		}
	}
};
