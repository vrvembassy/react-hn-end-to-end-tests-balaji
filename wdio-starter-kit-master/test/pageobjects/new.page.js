// show.page.js
var Page = require('./Page')

var NewPage = Object.create(Page, {

	open : {
		value : function() {
			Page.open.call(this, '#newest');
		}
	}	
});

module.exports = NewPage;
