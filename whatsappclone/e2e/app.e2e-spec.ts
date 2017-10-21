import {  
      browser, element, by
  }
  from 'protractor'; 

describe('whatsappclone App', () => {
  // let page: AppPage;

  beforeEach(() => {
    // page = new AppPage();
    browser.get('/');
  });
  it('Check whether the page appears or not', function() 
  {
    expect(browser.getTitle()).toBe("Whatsappclone");
  });

   it('should not allow the user to login with empty credentials', function() {
        
      // expect(browser.getTitle()).toBe("Whatsappclone");
        element(by.id('username')).sendKeys('');
        element(by.id('password')).sendKeys('');
        element(by.id('email')).sendKeys('');
        var login_check = element(by.id('submit_login'));
        login_check.click();
        var timeoutInMilliseconds = 100000;
        browser.wait(browser.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual("Username can't be empty.");
  });


  // it('should not allow the user to login with empty credentials', function() {
    
  // // expect(browser.getTitle()).toBe("Whatsappclone");
  //     element(by.id('username')).sendKeys('jay');
  //     element(by.id('email')).sendKeys('jay@ufl.edu');
  //     element(by.id('password')).sendKeys('');
  //     var create_check = element(by.id('create'));
  //     create_check.click();
  //     var timeoutInMilliseconds = 1000000;
  //     browser.wait(browser.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
  //     var alertDialog = browser.switchTo().alert();
  //     // expect(alertDialog.getText()).toEqual("Password can't be empty.");
  //     expect(alertDialog.getText()).toEqual("alertttttttQ!HTTP fail.");
  //     // {Alert text : HTTP fail.usernameee}
  // });
});
