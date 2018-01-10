// show.page.js
var Page = require('./Page')

var ShowPage = Object.create(Page, {

	open : {
		value : function() {
			Page.open.call(this, '#show');
		}
	}
	
});

module.exports = ShowPage;
