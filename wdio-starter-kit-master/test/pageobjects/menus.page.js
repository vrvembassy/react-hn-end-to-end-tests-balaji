// menus.page.js
var Page = require('./Page');
var MenusPage = Object.create(Page, {

	openHome : {
		value : function() {
			Page.openHome.call(this, '#news');
		}
	},
	openNew : {
		value : function() {
			Page.openNew.call(this, '#newest');
		}
	},
	openComments : {
		value : function() {
			Page.openNew.call(this, '#newcomments');
		}
	},
	openShow : {
		value : function() {
			Page.openShow.call(this, '#show');
		}
	},
	openAsk : {
		value : function() {
			Page.openAsk.call(this, '#ask');
		}
	},
	openJobs : {
		value : function() {
			Page.openJobs.call(this, '#jobs');
		}
	},
	settings : {
		get : function () {
			return browser.element('.App__settings');
		}
	}
});

module.exports = MenusPage;
