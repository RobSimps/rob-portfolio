'use strict';
module.exports = {
	dev: {
		bsFiles: {
			src: [
				'assets/build/css/*.css',
				'assets/build/js/*.js',
				'*.html'
			]
		},
		options: {
			watchTask: true,
			server: './'
		}
	}
};
