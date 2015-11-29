( function() {
	'use strict';

	function Header( el ) {
		this._$el = el;
		this._data = this._$el.getAttribute( 'data-header-white' );

		this._classes = {
			inviewClass: 'is-inview'
		};

		this._init();
	}

	Header.prototype = {
		_init: function() {
			if( this._data === 'true' ) {
				this._attachEvents();
				this._checkScroll();
			}
		},

		_attachEvents: function() {
			var _this = this;
			window.addEventListener( 'scroll', this._checkScroll.bind( this ) );
		},

		_checkScroll: function( e ) {
			if( this._scrollTop() > 573 ) {
				this._$el.classList.add( 'c-header--colour' );
			} else {
				this._$el.classList.remove( 'c-header--colour' );
			}
		},

		_scrollTop: function() {
			var doc = document.documentElement;
			return( window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );
		}
	};

	window.Header = Header;
} )();
