// home.spec.js
var expect = require('chai').expect;
var HomePage = require('../pageobjects/home.page');

describe('React HN Application', function () {
    it('Should Open Home Page', function () {
		HomePage.open();
 		expect(browser.getTitle()).to.equal('React HN');
    });
  	it('Should Open A Random Authors Name In Home Page', function () {
		HomePage.openAuthorName();
		browser.waitForVisible('.UserProfile--loading', 10000, true);
		expect(browser.getTitle()).to.not.equal('React HN');
		browser.back();
	});
  	it('Should Open A Random Heading In Home Page', function () {
		HomePage.openHeadingElements();
		expect(browser.getTitle()).to.not.equal('React HN');
		browser.back();
	});
  	it('Should Open A Random Comment In Home Page', function () {
		HomePage.openCommentElements();
		expect(browser.getTitle()).to.not.equal('React HN');
	});
});
