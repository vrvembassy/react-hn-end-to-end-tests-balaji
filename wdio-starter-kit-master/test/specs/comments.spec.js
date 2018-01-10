// comments.spec.js
var expect = require('chai').expect;
var CommentsPage = require('../pageobjects/comments.page');

describe('React HN Application', function () {
    it('should open comments page', function () {
		CommentsPage.open();
 		expect(browser.getTitle()).to.equal('New Comments | React HN');
    });
});
