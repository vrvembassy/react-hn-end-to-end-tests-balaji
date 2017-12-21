describe('my awesome website', function() {
	before(function(){
        browser.url('http://localhost:5000');
    });
	
// *************************************** Checking comments page ***********************

    // opening comments page
    it("should open comments page",function(){
        $('.App__header').$$('a')[3].click();
        browser.getTitle().should.be.equal('New Comments | React HN');
        browser.pause(5000);
    });

    // to open all profiles
    it("should open all profiles in comments page",function(){
        var profiles = $('.Updates');
        count = 0;
        for(var i in profiles){
            $('.Updates').$$('.Comment')[count].$$('a')[0].click();
            count++;
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
        }
    });

    //to open all the link
    it("should open all link in the comments page",function(){
        var links = $('.Updates');
        count = 0;
        for(var i in links){
            $('.Updates').$$('.Comment')[count].$$('a')[1].click();
            count++;
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
        }
    });

    //to open all the parents link
    it("should open all parent in the comments page",function(){
        var parents = $('.Updates');
        count = 0;
        for(var i in parents){
            try{
            $('.Updates').$$('.Comment')[count].$$('a')[2].click();
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
            }
            catch(err){
                console.log("parent not found for this particular thread");
            }
            count++;
        }
    });

    //to open all the topics
    it("should open all topics in the comments page",function(){
        var topics = $('.Updates');
        count = 0;
        for(var i in topics){
            try{
            $('.Updates').$$('.Comment')[count].$$('a')[3].click();
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
            }
            catch(err){
                console.log("topics not found for this particular thread");
            }
            count++;
        }
    });

//*************************** *************Done with Comments *****************************
});