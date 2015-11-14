'use strict';
module.exports = {
	options: {
		plugins: [ {
			removeViewBox: false
		}, {
			removeUselessStrokeAndFill: true
		}, {
			removeEmptyAttrs: true
		} ]
	},
	svgImages: {
		files: [ {
			expand: true,
			cwd: '<%= buildFolder %>/<%= assetsFolder %>/img/**',
			src: '*.svg',
			dest: '<%= buildFolder %>/<%= assetsFolder %>/img',
			ext: '.svg'
		} ]
	}
};
