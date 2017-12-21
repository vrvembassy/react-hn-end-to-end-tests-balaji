describe('My React Application', function() {
  before(function(){
    browser.url('http://localhost:5000');
  });
   
// *************************************** Checking new page ******************************

    // Opening new page
    it("should open new page",function(){
      $('.App__header').$$('a')[2].click();
      browser.getTitle().should.be.equal('New | React HN');
      browser.pause(1000);
  });

  //opening every heading in new page
  it("should open every topic in new page",function(){
      var newItems = $('.Items').$$('ol')[0];
      count = 0;
      for(var i in newItems){
          $('.Items').$$('ol')[0].$$('li')[count].$$('a')[0].click();
          count++;
          browser.pause(1000);
          browser.back();
          browser.pause(1000);
      }
  });

  //opening all profiles in new page
  it("should open profiles",function(){
      var profiles = $('.Items').$$('ol')[0];
      count = 0;
      for(var i in profiles){
          $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[0].click();
          count++;
          browser.pause(1000);
          browser.back();
          browser.pause(1000);
      }
  });

  //opening every comment or discuss section in new page
  it("should open either comments or discuss whichever is present",function(){
      var comments = $('.Items').$$('ol')[0];
      count = 0;
      for(var i in comments){
          try{
          $('.Items').$$('ol')[0].$$('li')[count].$$('span')[1].$$('a')[1].click();
          browser.pause(3000);
          browser.back();
          browser.pause(3000);
          }
          catch(err){
              console.log("Neither discuss nor comments are present for this thread");
          }
          count++;
      }
  });

// *************************************** Done with new page ***************************
});

