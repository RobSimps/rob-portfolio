'use strict';
module.exports = {
	options: {
		browsers: [ 'last 2 versions', 'ie 9' ],
		sourcemap: true
	},
	prefix: {
		expand: true,
		flatten: true,
		src: '<%= buildFolder %>/<%= assetsFolder %>/css/style.css',
		dest: '<%= buildFolder %>/<%= assetsFolder %>/css'
	}
};
