/* global $ */

( function() {
	'use strict';

	function SocialFooter( el ) {
		this._$el = $( el );
		this._$twitter = this._$el.find( '.js-social-link-twitter' );
		this._$dribbble = this._$el.find( '.js-social-link-dribbble' );
		this._$instagram = this._$el.find( '.js-social-link-instagram' );


		this._classes = {
			twitterClass: 'is-twitter',
			dribbbleClass: 'is-dribbble',
			instagramClass: 'is-instagram'
		};

		this._init();
	}

	SocialFooter.prototype = {
		_init: function() {
			this._attachEventHandlers();
		},

		_attachEventHandlers: function() {
			var _this = this;

			this._$twitter.on( 'mouseover', function() {
				_this._$el.addClass( _this._classes.twitterClass );
			} );

			this._$twitter.on( 'mouseleave', function() {
				_this._$el.removeClass( _this._classes.twitterClass );
			} );

			this._$dribbble.on( 'mouseover', function() {
				_this._$el.addClass( _this._classes.dribbbleClass );
			} );

			this._$dribbble.on( 'mouseleave', function() {
				_this._$el.removeClass( _this._classes.dribbbleClass );
			} );

			this._$instagram.on( 'mouseover', function() {
				_this._$el.addClass( _this._classes.instagramClass );
			} );

			this._$instagram.on( 'mouseleave', function() {
				_this._$el.removeClass( _this._classes.instagramClass );
			} );
		}
	};

	window.SocialFooter = SocialFooter;
} )();
