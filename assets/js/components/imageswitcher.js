( function() {
	'use strict';

	function ImageSwitcher( el ) {
		this._classes = {
			active: 'is-active'
		};

		this._data = {
			src: 'data-src',
			alt: 'data-alt'
		};

		this._$el = el;
		this._$buttons = this._$el.querySelectorAll( '.js-img-switcher-button' );
		this._$activeButton = this._$el.querySelector( '.js-img-switcher-button.' + this._classes.active );
		this._$target = this._$el.querySelector( '.js-img-switcher-target' );

		this._init();
	}

	ImageSwitcher.prototype = {
		_init: function() {
			this._attachEventHandlers();
		},

		_attachEventHandlers: function() {
			var _this = this;

			Array.prototype.forEach.call( _this._$buttons, function( $button, i ) {
				$button.addEventListener( 'click', function() {
					var newImgSrc = this.getAttribute( _this._data.src );
					var newImgAlt = this.getAttribute( _this._data.alt );

					_this._$target.src = newImgSrc;
					_this._$target.alt = newImgAlt;
					_this._updateActiveButton( $button );
				} );
			} );
		},

		_updateActiveButton: function( $button ) {
			this._$activeButton.classList.remove( this._classes.active );
			$button.classList.add( this._classes.active );
			this._$activeButton = $button;
		}
	};

	window.ImageSwitcher = ImageSwitcher;
} )();
