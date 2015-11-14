'use strict';
module.exports = {
	options: {
		prefix: 'icon--'
	},
	icons: {
		files: {
			'<%= buildFolder %>/<%= assetsFolder %>/img/icons/icons.svg': [ '<%= assetsFolder %>/img/icons/*.svg' ]
		}
	}
};
