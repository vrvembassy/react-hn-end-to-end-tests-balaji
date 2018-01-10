describe('My React Application', function() {
    var count,listItems,title;

    before(function(){
        browser.url('#/newest');
        browser.waitForVisible('.ListItem--loading', 10000, true);
        listItems = browser.elements('.ListItem');
		count = Math.floor((listItems.value.length)/2);
    });
   

// *************************************** Checking new page ******************************

    // Opening new page
    it("should open new page",function(){
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    //opening random heading in new page
    it("should open random topic in new page",function(){
        browser.waitForVisible('.ListItem--loading', 10000, true);
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[0].click();
        browser.getTitle().should.not.be.equal(' React HN');
    });

    it("to go back",function(){
        browser.back();
        browser.waitForVisible('.ListItem--loading', 10000, true);
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    //opening all profiles in new page
    it("should open a random profile in new page",function(){
        browser.waitForVisible('.ListItem--loading', 10000, true);
        listItems = browser.elements('.ListItem');
        title = listItems.value[count].$$('span')[2].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('span')[2].$$('a')[0].click();
        browser.waitForVisible('.UserProfile--loading', 10000, true); 
       // console.log(browser.getTitle());
        browser.getTitle().should.be.equal('Profile: '+title+' | React HN'); 
    });

    it("to go back",function(){
        browser.back();
        browser.waitForVisible('.ListItem--loading', 10000, true);
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    //opening every comment or discuss section in new page
    it("should open either comments or discuss whichever is present in new page",function(){
        browser.waitForVisible('.ListItem--loading', 10000, true);
        listItems = browser.elements('.ListItem');
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[2].click();
       //console.log(browser.getTitle());
        browser.waitForVisible('.Item__kids--loading', 10000, true);
        browser.getTitle().should.be.equal(title + ' | React HN');
    });
    it("to go back",function(){
        browser.back();
        browser.waitForVisible('.ListItem--loading', 10000, true);
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    it("checking for more button",function(){
        if(browser.element('.Paginator__next'))
        {
            $('.Items').$$('.Paginator')[0].$$('a')[0].click();
        }
         else{
             console.log("There is nomore button in new page....");
         }   
    
        });

        it("checking for previous button",function(){
            if(browser.element('.Paginator__prev'))
            {
                $('.Items').$$('.Paginator')[0].$$('a')[0].click();
            }
             else{
                 console.log("There is nomore button in new page....");
             }   
        
        });
// *************************************** Done with new page ***************************
});

