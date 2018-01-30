// jobs.page.js
var Page = require('./Page')

var JobsPage = Object.create(Page, {

	open : {
		value : function() {
			Page.open.call(this, '#jobs');
		}
	}
	
});

module.exports = JobsPage;

