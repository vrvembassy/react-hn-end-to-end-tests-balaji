// home.spec.js
var expect = require('chai').expect;
var HomePage = require('../pageobjects/home.page');

describe('React HN Application', function () {
    it('Should Open Home Page', function () {
		HomePage.open();
 		expect(browser.getTitle()).to.equal('React HN');
    });
});
