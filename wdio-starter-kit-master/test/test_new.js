describe('New Page in React HN', function() {
    var count,listItems,title;

    beforeEach(function(){
        browser.url('#/newest');
        browser.waitForVisible('.ListItem--loading');
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
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[0].click();
        browser.getTitle().should.not.be.equal(' React HN');
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    //opening all profiles in new page
    it("should open a random profile in new page",function(){
        title = listItems.value[count].$$('span')[2].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('span')[2].$$('a')[0].click();
        browser.waitForVisible('.UserProfile--loading'); 
       // console.log(browser.getTitle());
        browser.getTitle().should.be.equal('Profile: '+title+' | React HN'); 
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('New Links | React HN');
    });

    //opening every comment or discuss section in new page
    it("should open either comments or discuss whichever is present in new page",function(){
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[2].click();
       //console.log(browser.getTitle());
        browser.waitForVisible('.Item__kids--loading');
        browser.getTitle().should.be.equal(title + ' | React HN');
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('New Links | React HN');
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
// *************************************** Done with new page ***************************
});

