describe('my awesome website', function() {
    var count;

    before(function(){
        count = Math.floor((Math.random() * 10) + 1);
            browser.url('http://localhost:5000');
    });
     // ****************************************    checking jobs page ****************************

    // Opening jobs page
    it('should open jobs',function(){
        $('.App__header').$$('a')[6].click();
        browser.getTitle().should.be.equal('Jobs | React HN');
        browser.pause(2000);
    });

    //Opening a random job in jobs page
    it("should open a random job",function(){
        try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
        }
        catch(err){
            console.log("Job of following index is not available "+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });
// *************************************** Done with jobs page ****************************
});