/* global $ */
/* global Snap */
/* global mina */

( function() {
	'use strict';

	function SvgButton( el ) {
		this._$el = el;
		this._$shape = this._$el.querySelector( '.c-button__morph-shape' );
		var snap = Snap( this._$shape.querySelector( 'svg' ) );
		this._$path = snap.select( 'path' );
		this._paths = {
			reset: this._$path.attr( 'd' ),
			active: this._$shape.getAttribute( 'data-morph-active' )
		};

		this._options = {
			speed: {
				reset: 800,
				active: 150
			},
			easing: {
				reset: mina.elastic,
				active: mina.easein
			}
		};

		this._init();
	}

	SvgButton.prototype = {
		_init: function() {
			this._attachEventHandlers();
		},

		_attachEventHandlers: function() {
			this._$el.addEventListener( 'mouseover', this._down.bind( this ) );
			this._$el.addEventListener( 'touchstart', this._down.bind( this ) );

			this._$el.addEventListener( 'mouseout', this._up.bind( this ) );
			this._$el.addEventListener( 'touchend', this._up.bind( this ) );
		},

		_down: function() {
			this._$path.stop().animate( {
				'path': this._paths.active
			}, this._options.speed.active, this._options.easing.active );
		},

		_up: function() {
			this._$path.stop().animate( {
				'path': this._paths.reset
			}, this._options.speed.reset, this._options.easing.reset );
		}
	};

	window.SvgButton = SvgButton;
} )();
