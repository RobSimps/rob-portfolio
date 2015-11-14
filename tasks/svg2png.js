'use strict';
module.exports = {
	svgImages: {
		files: [ {
			cwd: '<%= buildFolder %>/<%= assetsFolder %>/img/',
			src: [ '**/*.svg' ],
			dest: '<%= buildFolder %>/<%= assetsFolder %>/img/'
		} ]
	}
};
