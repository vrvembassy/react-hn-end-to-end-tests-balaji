describe('my awesome website', function() {
   var i;
   var count,listItems,title;
   before(function(){
        browser.url('#/ask');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        listItems = browser.elements('.ListItem');
		count = Math.floor((listItems.value.length)/2);
    });
   

    // *************************************** Checking Ask page ******************************

        // Opening Ask page
        it("should open ask page",function(){
            browser.getTitle().should.be.equal('Ask | React HN');
        });

        //opening random heading in Ask page
        it("should open random topic in ask page",function(){
           browser.waitForVisible('.ListItem--loading', 10000, true);
           title = listItems.value[count].$$('a')[0].getText();
           //console.log(title);
           listItems.value[count].$$('a')[0].click();
           browser.getTitle().should.be.equal(title + ' | React HN');
        });

        it("to go back",function(){
            browser.back();
            browser.waitForVisible('.ListItem--loading', 10000, true);
            browser.getTitle().should.be.equal('Ask | React HN');
        });

        //opening all profiles in Ask page
        it("should open a random profile",function(){
            browser.waitForVisible('.ListItem--loading', 10000, true);
            listItems = browser.elements('.ListItem');
            title = listItems.value[count].$$('span')[1].$$('a')[0].getText();
            listItems.value[count].$$('span')[1].$$('a')[0].click();
            browser.waitForVisible('.UserProfile--loading', 10000, true); 
            //console.log(browser.getTitle());
            browser.getTitle().should.be.equal('Profile: '+title+' | React HN');    
        });

        it("to go back",function(){
            browser.back();
            browser.waitForVisible('.ListItem--loading', 10000, true);
            browser.getTitle().should.be.equal('Ask | React HN');
        });

        //opening every comment or discuss section in Ask page
        it("should open either comments or discuss whichever is present",function(){
            browser.waitForVisible('.ListItem--loading', 10000, true);
            listItems = browser.elements('.ListItem');
            listItems.value[count].$$('a')[0].click();
            browser.waitForVisible('.Item__kids--loading', 10000, true);
            browser.back();
        });
        it("checking for more button",function(){
        if(browser.element('.Paginator__next'))
        {
            $('.Items').$$('.Paginator')[0].$$('a')[0].click();
        }
         else{
             console.log("There is nomore button in ask page....");
         }   
    
        });

        it("checking for previous button",function(){
            if(browser.element('.Paginator__prev'))
            {
                $('.Items').$$('.Paginator')[0].$$('a')[0].click();
            }
             else{
                 console.log("There is nomore button in ask page....");
             }   
        
        });
    // *************************************** Done with Ask page ***************************
});
