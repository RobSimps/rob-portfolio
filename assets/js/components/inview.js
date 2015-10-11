( function() {
	'use strict';

	function Inview( el ) {
		this._$el = el;

		this._classes = {
			inviewClass: 'is-inview'
		};

		this._dataTop = el; //@todo pass through data-top position

		this._attachScrollMonitor();
	}

	Inview.prototype = {
		_attachScrollMonitor: function() {
			var _this = this;
			var scrollMonitor = window.scrollMonitor; //@todo?
			var watcher = new scrollMonitor.create( this._$el, {
				top: -400
			} );

			watcher.enterViewport( function() {
				_this._$el.classList.add( _this._classes.inviewClass );
			} );
		}
	};

	window.Inview = Inview;
} )();
