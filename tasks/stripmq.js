'use strict';
module.exports = {
	options: {
		width: '62.5em',
		type: 'screen'
	},
	ie: {
		files: {
			'<%= buildFolder %>/<%= assetsFolder %>/css/ie.css': [ '<%= buildFolder %>/<%= assetsFolder %>/css/ie.css' ]
		}
	}
};
