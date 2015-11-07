/* global $ */

( function() {
	'use strict';

	function DribbbleShots( el ) {
		this._$el = el;
		this._$col = $( this._$el ).find( '.js-dribbble-col' );
		this._$figure = $( this._$el ).find( '.js-dribbble-figure' );

		this._dribbble = {
			token: '53c869dad47de1b59ea256e6348bda5a0dcab65637e8a897ba96210d349f5fa4',
			teamName: 'geckotree',
			perPage: 9
		};

		this._classes = {
			figure: 'js-dribbble-figure',
			link: 'c-dribbble-shots__link',
			image: 'c-dribbble-shots__img',
			hover: 'is-hovered',
			notHover: 'is-not-hovered'
		};

		this._init();
	}

	DribbbleShots.prototype = {
		_init: function() {
			this._createShots();
			this._attachEventHandlers();
		},

		_createShots: function() {
			var _this = this;

			$.jribbble.setToken( this._dribbble.token );

			$.jribbble.teams( this._dribbble.teamName ).shots( {
				per_page: this._dribbble.perPage
			} ).then( function( data ) {
				data.forEach( function( shot, i ) {
					var $figure = _this._$col.eq( i ).find( '.' + _this._classes.figure );
					var markup = [];
					console.log( shot );

					markup.push( '<a href="' + shot.html_url + '" target="_blank" class="' + _this._classes.link + '">' );
					markup.push( '<img src="' + shot.images.hidpi + '" alt="' + shot.title + '" class="' + _this._classes.image + '">' );
					markup.push( '</a>' );

					$figure.html( markup.join( '' ) );
				} );
			} );
		},

		_attachEventHandlers: function() {
			var _this = this;

			this._$figure.on( 'mouseover', function() {
				_this._$figure.addClass( _this._classes.notHover );
				$( this ).addClass( _this._classes.hover );
			} );

			this._$figure.on( 'mouseleave', function() {
				_this._$figure.removeClass( _this._classes.notHover );
				$( this ).removeClass( _this._classes.hover );
			} );
		}
	};

	window.DribbbleShots = DribbbleShots;
} )();
