/* global $ */

( function() {
	'use strict';

	function Validation( el ) {
		this._$el = $( el );
		this._$input = $( this._$el ).find( 'input' );
		this._$checkbox = $( this._$el ).find( ':checkbox[required]' );
		this._$radio = $( this._$el ).find( ':radio[required]' );

		this._classes = {
			invalidClass: 'is-invalid',
			validClass: 'is-valid'
		};

		this._init();
	}

	Validation.prototype = {
		_init: function() {
			this._validate();
		},

		_validate: function() {
			var _this = this;

			this._$input.on( 'blur', function() {
				if( $( this ).is( ':invalid' ) ) {
					_this._$el.addClass( _this._classes.invalidClass );
					_this._$el.removeClass( _this._classes.validClass );
				}

				if( $( this ).is( ':valid' ) ) {
					_this._$el.addClass( _this._classes.validClass );
					_this._$el.removeClass( _this._classes.invalidClass );
				}
			} );

			this._$checkbox.on( 'change', function() {
				_this._checkValidate( _this._$checkbox );
				$( this ).parents( '.o-fieldset__item' ).toggleClass( 'is-checked' );
			} );

			this._$radio.on( 'change', function() {
				_this._checkValidate( _this._$radio );
				_this._$radio.parents( '.o-fieldset__item' ).removeClass( 'is-checked' );
				$( this ).parents( '.o-fieldset__item' ).addClass( 'is-checked' );
			} );
		},

		_checkValidate: function( $el ) {
			if( $el.is( ':checked' ) ) {
				$el.removeAttr( 'required' );
			} else {
				$el.attr( 'required', 'required' );
			}
		}
	};

	window.Validation = Validation;
} )();
