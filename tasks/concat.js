'use strict';
module.exports = {
	main: {
		src: [
			'<%= assetsFolder %>/bower_components/fastclick/lib/fastclick.js',
			'<%= assetsFolder %>/bower_components/snap.svg/dist/snap.svg.js',
			'<%= assetsFolder %>/bower_components/scrollMonitor/scrollMonitor.js',
			'<%= assetsFolder %>/bower_components/jribbble/dist/jribbble.js',
			'<%= assetsFolder %>/js/utils/*.js',
			'<%= assetsFolder %>/js/components/**/*.js',
			'<%= assetsFolder %>/js/main.js'
		],
		dest: '<%= buildFolder %>/<%= assetsFolder %>/js/main.js'
	},
	head: {
		src: [
			'<%= assetsFolder %>/js/lib/modernizr.js'
		],
		dest: '<%= buildFolder %>/<%= assetsFolder %>/js/head.js'
	}
};
