'use strict';
module.exports = {
	all: {
		options: {
			jpegMini: false,
			imageAlpha: false,
			quitAfter: false
		},
		src: [
			'<%= buildFolder %>/<%= assetsFolder %>/img/**/*.{png,gif,jpg}'
		]
	}
};
