// show.spec.js
var expect = require('chai').expect;
var ShowPage = require('../pageobjects/show.page');

describe('React HN Application', function () {
    it('should open show page', function () {
		ShowPage.open();
 		expect(browser.getTitle()).to.equal('Show | React HN');
    });
});
