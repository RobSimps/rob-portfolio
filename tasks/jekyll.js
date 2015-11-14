'use strict';
module.exports = {
	options: {
		config: 'config.yml',
		src: './<%= srcFolder %>'
	},
	dist: {
		options: {
			dest: '<%= buildFolder %>'
		}
	},
	server: {
		options: {
			config: 'config.yml',
			dest: '<%= buildFolder %>'
		}
	}
};
