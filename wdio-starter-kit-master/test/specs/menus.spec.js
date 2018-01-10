// menus.spec.js
var expect = require('chai').expect;
var MenusPage = require('../pageobjects/menus.page');

describe('React HN Application', function () {
    it('Should Open Home Page', function () {
		MenusPage.openHome();
 		expect(browser.getTitle()).to.equal('React HN');
    });
    it('Should Open New Page', function () {
		MenusPage.openNew();
 		expect(browser.getTitle()).to.equal('New Links | React HN');
    });
    it('Should Open Comments Page', function () {
		MenusPage.openComments();
 		expect(browser.getTitle()).to.equal('New Comments | React HN');
    });
    it('Should Open Show Page', function () {
		MenusPage.openShow();
 		expect(browser.getTitle()).to.equal('Show | React HN');
    });
    it('Should Open Ask Page', function () {
		MenusPage.openAsk();
 		expect(browser.getTitle()).to.equal('Ask | React HN');
    });
    it('Should Open Jobs Page', function () {
		MenusPage.openJobs();
 		expect(browser.getTitle()).to.equal('Jobs | React HN');
    });
    it('Should Open Settings', function () {
		MenusPage.settings.click();
		expect(MenusPage.settings.getText()).to.contain('hide settings');
    });
    it('Should Hide Settings', function () {
		MenusPage.settings.click();
		expect(MenusPage.settings.getText()).to.contain('settings');
    });
});