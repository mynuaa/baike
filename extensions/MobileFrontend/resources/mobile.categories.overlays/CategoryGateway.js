( function ( M, $ ) {
	var prototype,
		SearchGateway = M.require( 'mobile.search.api/SearchGateway' );

	/**
	 * Api for CategoryOverlay
	 * @class CategoryGateway
	 * @extends SearchGateway
	 */
	function CategoryGateway() {
		CategoryGateway.parent.apply( this, arguments );
	}
	prototype = {
		continueParams: {},
		canContinue: true,
		/**
		 * @inheritdoc
		 */
		searchNamespace: 14,

		/**
		 * Saves the categories passed to this function to the page
		 * @param {String} title Title of the current page (to add the categories to)
		 * @param {String} categories List of Categories to add
		 * @returns {jQuery.Deferred}
		 */
		save: function ( title, categories ) {
			return this.api.postWithToken( 'edit', {
				action: 'edit',
				title: title,
				appendtext: categories,
				summary: mw.msg( 'mobile-frontend-categories-summary' )
			} );
		},

		/**
		 * Returns the categories the title belongs to.
		 * @param {String} title Title of the current page (to add the categories to)
		 * @returns {jQuery.Deferred|Boolean} False, if no further continuation is possible, jQuery.Deferred otherwise.
		 */
		getCategories: function ( title ) {
			var self = this;

			if ( this.canContinue === false ) {
				return false;
			}

			return this.api.get( $.extend( {}, {
				action: 'query',
				prop: 'categories',
				titles: title,
				clprop: 'hidden',
				cllimit: 50
			}, this.continueParams ) ).then( function ( data ) {
				if ( data.hasOwnProperty( 'continue' ) ) {
					self.continueParams = data.continue;
				} else {
					self.canContinue = false;
				}

				return data;
			} );
		}
	};
	OO.inheritClass( CategoryGateway, SearchGateway );
	$.extend( CategoryGateway.prototype, prototype );

	M.define( 'mobile.categories.overlays/CategoryGateway', CategoryGateway );

}( mw.mobileFrontend, jQuery ) );