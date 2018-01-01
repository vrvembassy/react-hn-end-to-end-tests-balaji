describe('my awesome website', function() {
   var i;
   var count;
   before(function(){
       browser.url('#/ask');
       var listItems = browser.elements('.ListItem');
			count = Math.floor((listItems.value.length)/2);
    });

    // *************************************** Checking Ask page ******************************

        // Opening Ask page
        it("should open ask page",function(){
            //$('.App__header').$$('a')[5].click();
            browser.getTitle().should.be.equal('Ask | React HN');
        });

        //opening random heading in Ask page
        it("should open random topic in ask page",function(){
            browser.pause(2000);
            try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
            }
            catch(err){
                console.log("There is no topic for given index in ask page"+count);
            }
        });

        it("to go back",function(){
            browser.back();
            browser.pause(2000);
        });

        //opening all profiles in Ask page
        it("should open a random profile",function(){
            try{
                $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[0].click();
            }
                catch(err){
                console.log("There is no profile for given index is ask page"+count);
            }
        });

        it("to go back",function(){
            browser.back();
            browser.pause(2000);
        });

        //opening every comment or discuss section in Ask page
        it("should open either comments or discuss whichever is present",function(){
                try{
                $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
                browser.back();
                browser.pause(2000);
                }
                catch(err){
                    console.log("Neither discuss nor comments are present for this thread in ask page");
                }
        });
        
        it("checking more button in ask",function(){
            try{
            $('.Items').$$('.Paginator')[0].$$('a')[0].click();
            }
            catch(err){
                console.log("No more button in Ask page");
            }
        });

        it("checking previous button",function(){
            try{
                $('.Items').$$('.Paginator')[0].$$('.Paginator__prev')[0].$$('a')[0].click();
            }
            catch(err){
                console.log("No prev button in Ask page");
            }
        });
    // *************************************** Done with Ask page ***************************
});
