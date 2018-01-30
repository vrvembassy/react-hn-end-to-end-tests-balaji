// comments.page.js
var Page = require('./Page')

var CommentsPage = Object.create(Page, {

	open : {
		value : function() {
			Page.open.call(this, '#newcomments');
		}
	}
	
});

module.exports = CommentsPage;
