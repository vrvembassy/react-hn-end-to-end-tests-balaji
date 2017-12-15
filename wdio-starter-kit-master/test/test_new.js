describe('My React Application', function() {
  it('Should open React HN', function() {
      browser.url('http://localhost:5000');
      console.log("Executing The Test:" + browser.getTitle());
      browser.getTitle().should.be.equal('React HN');
    });
  it('Should open New Links | React HN', function() {
      browser.url('http://localhost:5000');
      browser.getTitle().should.be.equal('React HN');
      browser.pause(3000);
      browser.click('a:nth-child(3)')
      var title = browser.getTitle()
      console.log(title);
      browser.getTitle().should.be.equal('New Links | React HN');
      browser.pause(3000);
    });
  it('Should open A Link', function() {
      browser.url('http://localhost:5000');
      browser.getTitle().should.be.equal('React HN');
      browser.pause(3000);
      browser.click('a:nth-child(3)')
      var title = browser.getTitle()
      console.log(title);
      browser.getTitle().should.be.equal('New Links | React HN');
      browser.pause(3000);
      browser.element('li:first-child .Item__title a').click();
      var title = browser.getTitle();
      console.log(title);
      browser.pause(3000);
    });
  it('Should open Authors profile' , function() {
      browser.url('http://localhost:5000');
      browser.getTitle().should.be.equal('React HN');
      browser.pause(3000);
      browser.click('a:nth-child(3)')
      var title = browser.getTitle()
      console.log(title);
      browser.getTitle().should.be.equal('New Links | React HN');
      browser.pause(3000);
      browser.element('li:first-child .Item__meta .Item__by a').click();
      var title = browser.getTitle();
      console.log(title);
      browser.pause(3000);
    });
  it('Should open Authors profile' , function() {
      browser.url('http://localhost:5000');
      browser.getTitle().should.be.equal('React HN');
      browser.pause(3000);
      browser.click('a:nth-child(3)')
      var title = browser.getTitle()
      console.log(title);
      browser.getTitle().should.be.equal('New Links | React HN');
      browser.pause(3000);
      browser.element('li:first-child .Item__meta').click('=discuss');
      var title = browser.getTitle();
      console.log(title);
      browser.pause(3000);
    });
  it('Should click More' , function() {
      browser.url('http://localhost:5000');
      browser.getTitle().should.be.equal('React HN');
      browser.pause(3000);
      browser.click('a:nth-child(3)')
      var title = browser.getTitle()
      console.log(title);
      browser.getTitle().should.be.equal('New Links | React HN');
      browser.pause(3000);
      browser.element('.Paginator__next a').click('');
      var title = browser.getTitle();
      console.log(title);
      browser.pause(3000);
    });
});

