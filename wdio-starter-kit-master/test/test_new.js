describe('My React Application', function() {
    var count;

    before(function(){
        count = Math.floor((Math.random() * 10) % 6);
        browser.url('http://localhost:5000');
    });
   

// *************************************** Checking new page ******************************

    // Opening new page
    it("should open new page",function(){
        $('.App__header').$$('a')[2].click();
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    //opening random heading in new page
    it("should open random topic in new page",function(){
        browser.pause(2000);
        try{
        $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
        }
        catch(err){
            console.log("There is no topic for given index in new page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //opening all profiles in new page
    it("should open a random profile in new page",function(){
        try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[0].click();
        }
            catch(err){
            console.log("There is no profile for given index is new page"+count);
        }
    });

    it("to go back",function(){
        browser.back();
        browser.pause(2000);
    });

    //opening every comment or discuss section in new page
    it("should open either comments or discuss whichever is present in new page",function(){
            try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[1].click();
            browser.back();
            browser.pause(2000);
            }
            catch(err){
                console.log("Neither discuss nor comments are present for this thread in new page");
            }
    });

    it("checking more button in new",function(){
        try{
        $('.Items').$$('.Paginator')[0].$$('a')[0].click();
        }
        catch(err){
            console.log("No more button in new page");
        }
    });

    it("checking previous button",function(){
        try{
            $('Items').$$('Paginator')[0].$$('a')[0].click();
        }
        catch(err){
            console.log("No prev button in new page");
        }
    });
// *************************************** Done with new page ***************************
});

