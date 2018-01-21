describe('Jobs page in React HN', function() {
    var count,listItems,title;

    beforeEach(function(){
        count = Math.floor((Math.random() * 10) % 6);
            browser.url('#/jobs');
            browser.waitForVisible('.ListItem--loading');
        listItems = browser.elements('.ListItems');
           
    });
   
    // ****************************************    checking jobs page ****************************

    // Opening jobs page
    it('should open jobs',function(){
        browser.getTitle().should.be.equal('Jobs | React HN');
    });

    //Opening a random job in jobs page
    it("should open a random job",function(){
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[0].click();
        browser.getTitle().should.not.be.equal(' React HN');
        browser.back();
        browser.waitForVisible('.listItems--loading');
        browser.getTitle().should.be.equal('Jobs | React HN');
    });

    // *************************************** Done with jobs page ****************************
});