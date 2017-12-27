describe('my awesome website', function() {
    before(function(){
      browser.url('');
    }); 
 // *************************************** Checking settings ******************************


/***********open React-hn**********************/
    it('should open React HN', function() {
        browser.getTitle().should.be.equal('React HN');
    });
/***********open settings**********************/
    it('should be open settings',function(){
        browser.click('=settings');
    });
/***********Auto collapse status change**********************/
    it('should change the autoCollapse checkbox status',function(){
        var check1 = $('#autoCollapse');
        var name = check1.getAttribute('name');
        if(check1.isSelected())
        {
            //console.log("\n"+name+":"+check1.isSelected());
            check1.click();
            //console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
        else{
           // console.log("\n"+name+":"+check1.isSelected());
            check1.click();
            //console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
    });
/***********replaylink status change**********************/
    it('should change the replyLinks checkbox status',function(){
        browser.click('=settings');
        var check1 = $('#replyLinks');
        var name = check1.getAttribute('name');
        if(check1.isSelected())
        {
            //console.log("\n"+name+":"+check1.isSelected());
            check1.click();
            //console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
        else{
            //console.log("\n"+name+":"+check1.isSelected());
            check1.click();
            //console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
    });
/***********offlinemode status change**********************/
    it('should change the offlineMode checkbox status',function(){
        browser.click('=settings');
        var check1 = $('#offlineMode');
        var name = check1.getAttribute('name');
        if(check1.isSelected())
        {
           // console.log("\n"+name+":"+check1.isSelected());
            check1.click();
           // console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
        else{
           // console.log("\n"+name+":"+check1.isSelected());
            check1.click();
           // console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
    });
/***********showDead status change**********************/
    it('should change  the showDead checkbox status',function(){
        browser.click('=settings');
        var check1 = $('#showDead');
        var name = check1.getAttribute('name');
        if(check1.isSelected())
        {
           // console.log("\n"+name+":"+check1.isSelected());
           check1.click();
           //console.log(name+":"+check1.isSelected());
           browser.refresh();
        }
        else{
           // console.log("\n"+name+":"+check1.isSelected());
            check1.click();
           // console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
    });
/***********showDeleted status change**********************/
    it('should change the showDeleted checkbox status',function(){
        browser.click('=settings');
        var check1 = $('#showDeleted');
        var name = check1.getAttribute('name');
        if(check1.isSelected())
        {
           // console.log("\n"+name+":"+check1.isSelected());
           check1.click();
         //  console.log(name+":"+check1.isSelected());
           browser.refresh();
        }
        else{
           // console.log("\n"+name+":"+check1.isSelected());
            check1.click();
           // console.log(name+":"+check1.isSelected());
            browser.refresh();
        }
    });
/*********** change text size **********************/
    it('should change the text size',function(){
        browser.click('=settings');
        var text = $('#titleFontSize');
        text.setValue('45');
        browser.refresh();
        browser.click('=settings');
        var text = $('#titleFontSize');
        text.setValue('18');
        browser.refresh();
        browser.click('=settings');
    });
/*********** change line padding**********************/
    it('should change the list spacing',function(){
        var text = $('#listSpacing');
        text.setValue('0');
        browser.refresh();
        browser.click('=settings');
        var text = $('#listSpacing');
        text.setValue('18');
        browser.refresh();
        browser.click('=settings');
    });
/**************** Should hide the settings ***********/
    it('should hide the settings',function(){
        browser.click('=hide settings');
    });

// ************************************ Done with settings ************************************
});
    
    