describe('Offline mode', function(){
    it('should access session details', function(){
        browser.url('');
        browser.click('=settings');
        var check1 = $('#offlineMode');
        console.log(check1.isSelected());
        if(check1.isSelected() == false)
        {
            check1.click();
            browser.refresh();
            console.log('localStorage contents=', browser.localStorage());
        }
        else{
            console.log('already in offline mode');
            console.log('localStorage contents=', browser.localStorage());
        }
    });
});