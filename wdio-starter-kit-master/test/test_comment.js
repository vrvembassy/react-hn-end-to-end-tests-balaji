describe('my awesome website', function() {
browser.url('http://localhost:5000/');
	it('should do some chai assertions', function() {
		console.log("executing the tests:" + browser.getTitle());
		browser.getTitle().should.be.equal('React HN');
		browser.pause(3000);
	});
	it('should click on comment section', function() {
		browser.click('a:nth-child(4)');
		browser.pause(3000);
	});
	it('should click link', function() {
		browser.click('=link');
		browser.pause(5000);
	});
	it('should click parent', function() {
		browser.click('=parent');
		browser.pause(5000);
	});
	it('should click view on Hacker News', function() {
		browser.click('=view on Hacker News');
		browser.pause(3000);
		browser.back();
		browser.pause(3000);
	});
	it('should click reply', function() {
		browser.click('=reply');
		browser.pause(3000);
	});
	it('should click Forgot Password', function() {
		browser.click('=Forgot your password?');
		browser.pause(3000);
		browser.back();
		browser.pause(3000);
		browser.back();
		browser.pause(3000);
	});
	it('should click comments', function() {
		browser.click('=comments');
		browser.pause(3000);
	});
	it('should click on 2 parents', function() {
		browser.click('=parent');
		browser.pause(5000);
		browser.click('=parent');
		browser.pause(5000);
	});
	it('should click view on Hacker News', function() {
		browser.click('=view on Hacker News');
		browser.pause(3000);
		browser.back();
		browser.back();
		browser.back();
		browser.pause(3000);
	});
});