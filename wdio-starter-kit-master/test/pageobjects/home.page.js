// home.page.js
var Page = require('./Page');
var faker = require('faker');
var HomePage = Object.create(Page, {
  	titleLink : {
		get : function () {
			var randomNumber = faker.random.number(30);
			browser.waitForVisible('.Item__title > a');
			return browser.element('.Items > ol > li:nth-child('+randomNumber+') > div.Item__title > a');
		}
	},
  	commentLink : {
		get : function () {
			var randomNumber = faker.random.number(30);
			browser.waitForVisible('.Item__title > a');
			return browser.element('.Items > ol > li:nth-child('+randomNumber+') > div.Item__meta > a');
		}
	},
 	authorLink : {
		get : function () {
			var randomNumber = faker.random.number(30);
			browser.waitForVisible('.Items > ol > li:nth-child('+randomNumber+') > div.Item__meta > span.Item__by > a');
			return browser.element('.Items > ol > li:nth-child('+randomNumber+') > div.Item__meta > span.Item__by > a');
		}
	},
	open : {
		value : function() {
			Page.open.call(this,'#news');
		}
	},
 	openHeadingElements : {
		value : function () {
			this.titleLink.click();
		}
	},
 	openCommentElements : {
		value : function () {
			this.commentLink.click();
		}
	},
	openAuthorName : {
		value : function () {
			this.authorLink.click();
		}
	}
});

module.exports = HomePage;
