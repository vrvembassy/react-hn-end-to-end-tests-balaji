// ask.spec.js
var expect = require('chai').expect;
var AskPage = require('../pageobjects/ask.page');

describe('React HN Application', function () {
    it('should open ask page', function () {
		AskPage.open();
 		expect(browser.getTitle()).to.equal('Ask | React HN');
    });
});
