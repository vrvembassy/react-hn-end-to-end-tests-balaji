describe('LocalStorage',function(){
    it('should access localstorage contents',function(){
        browser.url('');
        browser.waitForVisible('.ListItem--loading');
        console.log('localStorage contents: \n',browser.localStorage());
    });
});