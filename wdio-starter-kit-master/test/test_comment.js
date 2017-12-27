describe('my awesome website', function() {
    var count;

    before(function(){
           browser.url('#/newcomments');
           var listItems = browser.elements('.Comment');
			count = Math.floor((listItems.value.length)/2);
    });
	

// *************************************** Checking comments page ***********************

    // opening comments page
    it("should open comments page",function(){
        //$('.App__header').$$('a')[3].click();
        browser.getTitle().should.be.equal('New Comments | React HN');
    });

    // to open a random profile
    it("should open a random profile in comments page",function(){
        browser.pause(2000);
        try{
        $('.Updates').$$('.Comment')[count].$$('a')[0].click();
        }
        catch(err){
            console.log("There is no profile for given index in comments page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //to open a random the link
    it("should open a random link in the comments page",function(){
        browser.pause(2000);
        try{
        $('.Updates').$$('.Comment')[count].$$('a')[1].click();
        }
        catch(err){
            console.log("There is no link for given index in comments page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //to open a random parents link
    it("should open all parent in the comments page",function(){
            try{
            $('.Updates').$$('.Comment')[count].$$('a')[2].click();
            }
            catch(err){
                console.log("parent not found for this particular thread in comments page");
            }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //to open a random the topic
    it("should open a random topic in the comments page",function(){
            try{
            $('.Updates').$$('.Comment')[count].$$('a')[3].click();
            }
            catch(err){
                console.log("topics not found for this particular thread in comments page");
            }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

//*************************** *************Done with Comments *****************************
});