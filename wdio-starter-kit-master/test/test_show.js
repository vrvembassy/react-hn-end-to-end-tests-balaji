describe('Show page in ReactHN', function() {
    var count;
    var listItems,title;
    
    beforeEach(function(){
             browser.url('#/show');
             browser.waitForVisible('.ListItem--loading');
             listItems = browser.elements('.ListItem');
             count = Math.floor((listItems.value.length)/2);
    });
   // *************************************** Checking show page ******************************

    // Opening show page
    it("should open show page",function(){
        browser.getTitle().should.be.equal('Show | React HN');
    });

    //opening a random heading in show page
    it("should open a random topic in show page",function(){
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[0].click();
        browser.getTitle().should.not.be.equal(' React HN');
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('Show | React HN');

    });

    //opening a random profile in show page
    it("should open a random profile in show",function(){
        title = listItems.value[count].$$('span')[2].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('span')[2].$$('a')[0].click();
        browser.waitForVisible('.UserProfile--loading'); 
        //console.log(browser.getTitle());
        browser.getTitle().should.be.equal('Profile: '+title+' | React HN'); 
        browser.back();
        browser.waitForVisible('.ListItem--loading');
        browser.getTitle().should.be.equal('Show | React HN');
    });

   //opening a random comment or discuss section in show page
    it("should open either comments or discuss whichever is present",function(){
            title = listItems.value[count].$$('a')[0].getText();
            //console.log(title);
            listItems.value[count].$$('a')[2].click();
           //console.log(browser.getTitle());
            browser.waitForVisible('.Item__kids--loading');
            browser.getTitle().should.be.equal(title + ' | React HN');
            browser.back();
            browser.waitForVisible('.ListItem--loading');
            browser.getTitle().should.be.equal('Show | React HN');
    });

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

        it("checking for previous button",function(){
            if(browser.element('.Paginator__prev'))
            {
              
               // $('.Items').$$('.Paginator')[0].$$('a')[0].click();
                listItems.element('.Paginator').element('.Paginator__next').click();
                start = browser.getAttribute('.Items__list','start');
                listItems.element('.Paginator').element('.Paginator__prev').click();
                end = browser.getAttribute('.Items__list','start');
                console.log(start);
                end = parseInt(end);
                listStart = start - 30;
                listStart.should.be.equal(end);
            }
            else{
                 console.log("There is no prev button in show page....");
            }   
        
        });
// ************************************ Done with show page ***************************
});

