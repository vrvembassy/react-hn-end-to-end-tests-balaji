// ask.page.js
var Page = require('./Page')

var AskPage = Object.create(Page, {

	open : {
		value : function() {
			Page.open.call(this, '#ask');
		}
	}
	
});

module.exports = AskPage;
