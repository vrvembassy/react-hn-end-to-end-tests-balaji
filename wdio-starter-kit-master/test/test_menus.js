describe('menu links',function(){
    it('should new page',function(){
        browser.url('#/newest');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        console.log('\n'+browser.getTitle());
        browser.getTitle().should.be.equal('New Links | React HN');
    });
    it('should comments page',function(){
        browser.url('#/newcomments');
        console.log(browser.getTitle());
        browser.getTitle().should.be.equal('New Comments | React HN');
    });
    it('should show page',function(){
        browser.url('#/show');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        console.log(browser.getTitle());
        browser.getTitle().should.be.equal('Show | React HN');
    });
    it('should ask page',function(){
        browser.url('#/ask');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        console.log(browser.getTitle());
        browser.getTitle().should.be.equal('Ask | React HN');
    });
    it('should job page',function(){
        browser.url('#/jobs');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        console.log(browser.getTitle());
        browser.getTitle().should.be.equal('Jobs | React HN');
    });
    it('should settings page',function(){
        browser.url('');
        browser.click('=settings');
        browser.waitForVisible('.Settings_setting--loading', 10000, true);
        console.log('Settings');
        browser.click('=hide settings');
    });
    it('should home page',function(){
        browser.url('#/news');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        console.log('Homepage:'+browser.getTitle()+'\n');
        browser.getTitle().should.be.equal('React HN');
    });
});