describe('my awesome website', function() {
    before(function(){
        browser.url('http://localhost:5000');
    });
     // Opening jobs page
     it('should open jobs',function(){
        $('.App__header').$$('a')[6].click();
        browser.getTitle().should.be.equal('Jobs | React HN');
        browser.pause(1000);
    });

    //Opening every jobs in jobs page
    it("should open all jobs",function(){
        var jobItems = $('.Items').$$('ol')[0];
        count = 0;
        for(var i in jobItems){
            $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
            count++;
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
        }
    });
});