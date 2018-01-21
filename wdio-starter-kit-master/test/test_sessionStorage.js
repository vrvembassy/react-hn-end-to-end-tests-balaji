describe('Session Storage',function(){
    it('should access sessionStorage contents',function(){
        browser.url('');
        browser.waitForVisible('.ListItem--loading', 10000 , true);
        console.log('sessionStorage contents: \n',browser.sessionStorage());
    });
});