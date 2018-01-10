// home.page.js
var Page = require('./Page');

var HomePage = Object.create(Page, {
	open : {
		value : function() {
			Page.open.call(this,'#news');
		}
	}
});

module.exports = HomePage;
