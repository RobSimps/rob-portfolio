( function() {
	'use strict';

	function Inview( el ) {
		this._$el = el;
		this._pixelsInview = this._$el.getAttribute( 'data-pixels-inview' ) ? this._$el.getAttribute( 'data-pixels-inview' ) : 200;

		this._classes = {
			inviewClass: 'is-inview'
		};

		this._init();
	}

	Inview.prototype = {
		_init: function() {
			this._attachScrollMonitor();
		},

		_attachScrollMonitor: function() {
			var _this = this;
			var scrollMonitor = window.scrollMonitor;
			var watcher = new scrollMonitor.create( this._$el, {
				top: -_this._pixelsInview
			} );

			watcher.enterViewport( function() {
				_this._$el.classList.add( _this._classes.inviewClass );
			} );
		}
	};

	window.Inview = Inview;
} )();
