describe('Comment page in React HN', function() {
    var count;
    var comment;

    beforeEach(function(){
        browser.url('#/newcomments');
        browser.waitForVisible('.Comment--loading');
        comment = browser.elements('.Comment');
        console.log(comment.value.length);
		count = Math.floor((comment.value.length)/2);
    });


    // *************************************** Checking comments page **********************
        // opening comments page
        it("should open comments page",function(){
            browser.getTitle().should.be.equal('New Comments | React HN');
        });

        // to open a random profile
        it("should open a random profile in comments page",function(){
            console.log(count);
            title = comment.value[count].element('.Comment__user').getText();
            comment.value[count].$('.Comment__user').click();
            browser.waitForVisible('.UserProfile');
            browser.getTitle().should.be.equal('Profile: '+title+'| React HN')
            //console.log(browser.getText('.Comment__user'));
        });

        //to open a random the link
        it("should open link in the comments page",function(){
            title = comment.value[count].$('.Comment__user').getText();
            comment.value[count].$$('a')[1].click();
            browser.getTitle().should.be.equal('Comment by '+title+'| React HN')
        });


        //to open a random parents link
        it("should open parent in the comments page",function(){    
            comment.value[count].$$('a')[2].click();
            browser.getTitle().should.not.be.equal('New Comments | React HN');
        });

        //to open a random the topic
        it("should open a random topic in the comments page",function(){
            title = comment.value[count].$$('a')[3].getText();
            comment.value[count].$$('a')[3].click();
            browser.getTitle().should.be.equal(title+'| React HN')
        });

    //*************************** *************Done with Comments *****************************
});