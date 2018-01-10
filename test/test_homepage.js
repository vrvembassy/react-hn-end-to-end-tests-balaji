describe('my awesome website', function() {
    var count;

    before(function(){
       
             browser.url('#/news');
            var listItems = browser.elements('.ListItem');
			count = Math.floor((listItems.value.length)/2);
             
    });
   // *************************************** Checking home page ******************************

    // Opening home page
    it("should open home page",function(){
        browser.getTitle().should.be.equal('React HN');
    });

    //opening a random heading in home page
    it("should open a random topic in home page",function(){
        browser.pause(2000);
        try{
        $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
        }
        catch(err){
            console.log("There is no topic for given index in home page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //opening a random profile in home page
    it("should open a random profile in home",function(){
        try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('span')[2].$$('a')[0].click();
        }
        catch(err){
            console.log("profile of following index is not available in home page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //opening a random comment or discuss section in home page
    it("should open either comments or discuss whichever is present",function(){
            try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('a')[1].click();
            }
            catch(err){
                console.log("Neither discuss nor comments are present for this thread in home page");
            }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    it("checking more button in home page",function(){
        try{
        $('.Items').$$('.Paginator')[0].$$('a')[0].click();
        }
        catch(err){
            console.log("No more button in home page");
        }
    });
    it("checking previous button",function(){
        try{
            $('.Items').$$('.Paginator')[0].$$('.Paginator__prev')[0].$$('a')[0].click();
        }
        catch(err){
            console.log("No prev button in home page");
        }
    });
    // ************************************ Done with home page ***************************
});

