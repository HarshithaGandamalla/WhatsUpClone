import { browser, element, by } from 'protractor'; 
import { LoginPage } from './login.po';

describe('Login App', () => {

  let page: LoginPage; 

  beforeEach(() => {
     page = new LoginPage();
  });

  it('Check whether the page appears or not', function() 
  {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please, login into your account');
    
  });

});

  it('should not allow the user to login with empty credentials', function() {
        
    expect(browser.getTitle()).toBe("Whatsappclone");
    var login_check = element(by.id('submit_login'));
    login_check.click();
    var timeoutInMilliseconds = 100000;
    browser.wait(browser.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Username can't be empty.");
  });

