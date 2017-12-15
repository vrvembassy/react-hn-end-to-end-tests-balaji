describe('my awesome website', function() {
   var i;
    it('should open React HN', function() {
        browser.url('http://localhost:5000');
	    var title = browser.getTitle();
        console.log('\n'+title);
        browser.getTitle().should.be.equal('React HN');
        browser.pause(1000);
    });
    it('should open ask',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.click('a:nth-child(6)');
        var title = browser.getTitle();
        console.log('\n'+title);
        browser.getTitle().should.be.equal('Ask | React HN');
        browser.pause(3000);
    });
    it('should open first news in ask ',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.pause(3000);
        browser.click('a:nth-child(6)');
        browser.pause(3000);
        browser.element('li:first-child .Item__title a').click();
        var title = browser.getTitle();
        console.log( '\n'+title);
        browser.pause(3000);
    });
    it('should open author of the first news in ask ',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.pause(3000);
        browser.click('a:nth-child(6)');
        browser.pause(3000);
        browser.element('li:first-child .Item__meta .Item__by a').click();
        var title = browser.getTitle();
        console.log( '\n'+title);
        browser.pause(3000);
    });
    it('should open comments of the first news in ask ',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.pause(3000);
        browser.click('a:nth-child(6)');
        browser.pause(3000);
        browser.element('li:first-child .Item__meta').click('*=comments');
        var title = browser.getTitle();
        console.log('\n'+title);
        browser.pause(3000);
    });
    it('should move to next page in ask ',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.pause(3000);
        browser.click('a:nth-child(6)');
        browser.pause(3000);
        browser.element('.Paginator__next a').click();
        var title = browser.getTitle();
        console.log('\n'+title);
        browser.pause(3000);
    });
    it('should open reacthn git link',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.pause(3000);
        browser.click('a:nth-child(6)');
        browser.pause(3000);
        browser.element('.App__footer a').click();
        var title = browser.getTitle();
        console.log('\n'+title);
        browser.pause(3000);
    });
    it('should open news one by one in ask ',function(){
        browser.url('http://localhost:5000');
        browser.getTitle().should.be.equal('React HN');
        browser.pause(3000);
        browser.click('a:nth-child(6)');
        browser.pause(3000);
        for(i=2;i<10;i++){
            browser.element('li:nth-child('+i+') .Item__title a').click();
            var title = browser.getTitle();
            console.log( '\n'+title);
            browser.pause(3000);
            browser.back();
        }
    });
});

