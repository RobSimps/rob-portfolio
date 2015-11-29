( function() {
	'use strict';

	function Toggle( el ) {
		this._$toggle = el;
		this._$html = document.querySelector( 'html' );

		this._classes = {
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this._$toggle.getAttribute( 'data-toggle' )
		};

		this._$target = document.querySelector( '.' + this._classes.targetClass );

		this._setAriaHidden();
		this._attachEventHandlers();
	}

	Toggle.prototype = {
		_setAriaHidden: function() {
			if( this._$target.offsetHeight > 0 ) {
				this._$target.setAttribute( 'aria-hidden', false );
			} else {
				this._$target.setAttribute( 'aria-hidden', true );
			}
		},

		_attachEventHandlers: function() {
			var _this = this;

			this._$toggle.addEventListener( 'click', function() {
				if( _this._$html.classList.contains( _this._classes.targetClass + '-' + _this._classes.visibleClass ) ) {
					_this._$html.classList.remove( _this._classes.targetClass + '-' + _this._classes.visibleClass );
					_this._$html.classList.add( _this._classes.targetClass + '-' + _this._classes.hiddenClass );
					_this._$target.setAttribute( 'aria-hidden', true );
				} else {
					_this._$html.classList.remove( _this._classes.targetClass + '-' + _this._classes.hiddenClass );
					_this._$html.classList.add( _this._classes.targetClass + '-' + _this._classes.visibleClass );
					_this._$target.setAttribute( 'aria-hidden', false );
				}
			} );
		}
	};

	window.Toggle = Toggle;
} )();
