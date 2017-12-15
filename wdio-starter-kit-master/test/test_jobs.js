describe('my awesome website', function() {
    it('should open React HN', function() {
        browser.url('http://localhost:5000');
	    var title = browser.getTitle();
        console.log('\n'+title);
        browser.getTitle().should.be.equal('React HN');
        browser.pause(1000);
    });
    it('should open jobs',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.click('a:nth-child(7)');
        browser.getTitle().should.be.equal('Jobs | React HN');
        browser.pause(3000);
    });
	it("open the 7th job",function(){
        browser.url('http://localhost:5000');
        browser.click('a:nth-child(7)');
		browser.click('li:nth-child(7) .Item__title a');
		//browser.getTitle().should.be.equal('Jobs at Stripe');
		browser.pause(3000);
	});
});