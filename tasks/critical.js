'use strict';
module.exports = {
	options: {
		base: './',
		css: [ '<%= buildFolder %>/<%= assetsFolder %>/css/style.css' ],
		height: 900,
		width: 1200
	},
	index: {
		src: '<%= buildFolder %>/index.html',
		dest: '<%= buildFolder %>/index.html'
	}
};
