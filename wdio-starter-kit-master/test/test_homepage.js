describe('React HN homepage', function() {
    var count, listItems;

    beforeEach(function(){   
        browser.url('#/news');
        browser.waitForVisible('.ListItem--loading');
        listItems = browser.elements('.ListItem');
		count = Math.floor((listItems.value.length)/2);
             
    });
   // *************************************** Checking home page ******************************

    // Opening home page
    it("should open home page",function(){
        browser.getTitle().should.be.equal('React HN');
    });

    //opening a random heading in home page
    it("should open a random topic in home page",function(){
        title = listItems.value[count].$$('a')[0].getText();
        listItems.value[count].$$('a')[0].click();
        browser.getTitle().should.not.be.equal('React HN');
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('React HN');
    });

    //opening a random profile in home page
    it("should open a random profile in home",function(){
        title = listItems.value[count].$$('span')[2].$$('a')[0].getText();
        listItems.value[count].$$('span')[2].$$('a')[0].click();
        browser.waitForVisible('.UserProfile--loading'); 
        browser.getTitle().should.be.equal('Profile: '+title+' | React HN');
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('React HN');
    });

    //opening a random comment or discuss section in home page
    it("should open either comments or discuss whichever is present",function(){
        title = listItems.value[count].$$('a')[0].getText();
        listItems.value[count].$$('a')[2].click();
        browser.waitForVisible('.Item__kids--loading');
        browser.getTitle().should.be.equal(title+' | React HN');
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('React HN'); 
    });
    //checking for more button
    it("checking for more button",function(){
        if(browser.element('.Paginator__next'))
        {   
            len = listItems.value.length;
            listItems.element('.Paginator').element('.Paginator__next').click();
            start = browser.getAttribute('.Items__list','start');
            start = parseInt(start);
            start.should.be.equal(len+1);
        }
         else{
             console.log("There is no more button in show page....");
         }   
    });
    
    //checking for prev button
    it("checking for previous button",function(){
        if(browser.element('.Paginator__prev')){
            // $('.Items').$$('.Paginator')[0].$$('a')[0].click();
            listItems.element('.Paginator').element('.Paginator__next').click();
            start = browser.getAttribute('.Items__list','start');
            listItems.element('.Paginator').element('.Paginator__prev').click();
            end = browser.getAttribute('.Items__list','start');
            end = parseInt(end);
            listStart = start - 30;
            listStart.should.be.equal(end);
        }
        else{
            console.log("There is no prev button in show page....");
        }   
        
    });
// ****
    // ************************************ Done with home page ***************************
});

