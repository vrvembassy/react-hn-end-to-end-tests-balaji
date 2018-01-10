// jobs.spec.js
var expect = require('chai').expect;
var JobsPage = require('../pageobjects/jobs.page');

describe('React HN Application', function () {
    it('Should Open Jobs Page', function () {
		JobsPage.open();
 		expect(browser.getTitle()).to.equal('Jobs | React HN');
    });
});
