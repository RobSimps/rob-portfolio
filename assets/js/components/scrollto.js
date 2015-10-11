( function() {
	'use strict';

	function ScrollTo( el ) {
		this._$btn = el;

		this._classes = {
			visibleClass: 'is-visible',
			hiddenClass: 'is-hidden',
			targetClass: this._$btn.getAttribute( 'data-scroll-to' )
		};

		this._$target = document.querySelector( '.' + this._classes.targetClass );

		this._easing = {
			easeInOutQuad: function( t ) {
				return t < .5 ? 2 * t * t : -1 + ( 4 - 2 * t ) * t; // jshint ignore:line
			}
		};

		this._attachEventHandlers();
	}

	ScrollTo.prototype = {
		_attachEventHandlers: function() {
			var _this = this;

			this._$btn.addEventListener( 'click', function() {
				var targetOffset = _this._elOffset( _this._$target );

				_this._$target.classList.add( _this._classes.visibleClass );
				// @todo pass time through from html
				_this._scrollTo( targetOffset.top, 600, _this._easing.easeInOutQuad );
				//@todo this is very rigid
				setTimeout( function() {
					_this._$target.style.marginTop = '0';
					_this._scrollTo( 0, 0, _this._easing.easeInOutQuad );
				}, 600 );
			} );
		},

		_elOffset: function( elt ) {
			var rect = elt.getBoundingClientRect();
			var bodyElt = document.body;

			return {
				top: rect.top + bodyElt.scrollTop + 1,
				left: rect.left + bodyElt.scrollLeft
			};
		},

		_scrollTo: function( Y, duration, easingFunction, callback ) {
			var start = Date.now();
			var elem = document.documentElement.scrollTop ? document.documentElement : document.body;
			var from = elem.scrollTop;

			if( from === Y ) {
				callback();
				return;
			}

			function min( a, b ) {
				return a < b ? a : b;
			}

			function scroll( timestamp ) {
				var currentTime = Date.now();
				var time = min( 1, ( ( currentTime - start ) / duration ) );
				var easedT = easingFunction( time );

				elem.scrollTop = ( easedT * ( Y - from ) ) + from;

				if( time < 1 ) requestAnimationFrame( scroll );
				else
				if( callback ) callback();
			}

			requestAnimationFrame( scroll );
		}
	};

	window.ScrollTo = ScrollTo;
} )();
