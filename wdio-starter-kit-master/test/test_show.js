describe('my awesome website', function() {
    var count;

    before(function(){
             browser.url('#/show');
             var listItems = browser.elements('.ListItem');
			count = Math.floor((listItems.value.length)/2);
    });
   // *************************************** Checking show page ******************************

    // Opening show page
    it("should open show page",function(){
        //$('.App__header').$$('a')[4].click();
        browser.getTitle().should.be.equal('Show | React HN');
    });

    //opening a random heading in show page
    it("should open a random topic in show page",function(){
        browser.pause(2000);
        try{
        $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
        }
        catch(err){
            console.log("There is no topic for given index in show page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //opening a random profile in show page
    it("should open a random profile in show",function(){
        try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('span')[2].$$('a')[0].click();
        }
        catch(err){
            console.log("profile of following index is not available in show page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //opening a random comment or discuss section in show page
    it("should open either comments or discuss whichever is present",function(){
            try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
            }
            catch(err){
                console.log("Neither discuss nor comments are present for this thread in show page");
            }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    it("checking more button in show page",function(){
        try{
        $('.Items').$$('.Paginator')[0].$$('a')[0].click();
        }
        catch(err){
            console.log("No more button in show page");
        }
    });
    it("checking previous button",function(){
        try{
            $('.Items').$$('.Paginator')[0].$$('.Paginator__prev')[0].$$('a')[0].click();
        }
        catch(err){
            console.log("No prev button in show page");
        }
    });
// ************************************ Done with show page ***************************
});

