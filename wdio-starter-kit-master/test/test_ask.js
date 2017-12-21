describe('my awesome website', function() {
   var i;
   before(function(){
    browser.url('http://localhost:5000');
    });
   
// *************************************** Checking Ask page ******************************

    // Opening Ask page
    it("should open ask page",function(){
        $('.App__header').$$('a')[5].click();
        browser.getTitle().should.be.equal('Ask | React HN');
        browser.pause(1000);
    });

    //opening every heading in Ask page
    it("should open every topic in ask page",function(){
        var askItems = $('.Items').$$('ol')[0];
        count = 0;
        for(var i in askItems){
            $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
            count++;
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
        }
    });

    //opening all profiles in Ask page
    it("should open profiles",function(){
        var profiles = $('.Items').$$('ol')[0];
        count = 0;
        for(var i in profiles){
            $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[0].click();
            count++;
            browser.pause(1000);
            browser.back();
            browser.pause(1000);
        }
    });

    //opening every comment or discuss section in Ask page
    it("should open either comments or discuss whichever is present",function(){
        var comments = $('.Items').$$('ol')[0];
        count = 0;
        for(var i in comments){
            try{
            $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[1].click();
            browser.pause(3000);
            browser.back();
            browser.pause(3000);
            }
            catch(err){
                console.log("Neither discuss nor comments are present for this thread");
            }
            count++;
        }
    });

// *************************************** Done with Ask page ***************************
});

