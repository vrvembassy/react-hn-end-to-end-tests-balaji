// show.spec.js
var expect = require('chai').expect;
var NewPage = require('../pageobjects/new.page');

describe('React HN Application', function () {
    it('Should Open New Page', function () {
		NewPage.open();
 		expect(browser.getTitle()).to.equal('New Links | React HN');
    });
});
