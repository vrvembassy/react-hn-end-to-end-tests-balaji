describe('my awesome website', function() {
    var count,listItems,title;

    before(function(){
        count = Math.floor((Math.random() * 10) % 6);
            browser.url('#/jobs');
            browser.waitForVisible('.ListItem--loading', 10000, true);
        listItems = browser.elements('.ListItems');
           
    });
   
    // ****************************************    checking jobs page ****************************

    // Opening jobs page
    it('should open jobs',function(){
        browser.getTitle().should.be.equal('Jobs | React HN');
       // browser.waitForVisible('.ListItems--loading', 10000, true);
    });

    //Opening a random job in jobs page
    it("should open a random job",function(){
        browser.waitForVisible('.ListItem--loading', 10000, true);
        listItems = browser.elements('.ListItem');
        title = listItems.value[count].$$('a')[0].getText();
        //console.log(title);
        listItems.value[count].$$('a')[0].click();
        browser.getTitle().should.not.be.equal(' React HN');
    });

    it("to go back",function(){
        browser.back();
        browser.waitForVisible('.listItems--loading', 2000, true);
    });
    // *************************************** Done with jobs page ****************************
});