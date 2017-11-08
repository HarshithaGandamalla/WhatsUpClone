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



  it('should not allow the user to login with empty credentials', function() {
        
    expect(browser.getTitle()).toBe("Whatsappclone");
    var login_check = element(by.id('submit_login'));
    login_check.click();
    var timeoutInMilliseconds = 100000;
    browser.wait(browser.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Username can't be empty.");
  });

  it('should fill in the login form', () => {
    
    browser.switchTo().alert().then(
      function (alert) { alert.accept(); },
    );   
    page.navigateTo();
   // let email = page.getLoginFormEmail();
    let password = page.getLoginFormPassword();
    let username = page.getLoginFormUsername();
    username.sendKeys('dimpu');
   // email.sendKeys('hamsikag15@gmail.com');
    password.sendKeys('dimpu');
   // expect(email.getAttribute('value')).toEqual('hamsikag15@gmail.com');
    expect(password.getAttribute('value')).toEqual('dimpu');
    expect(username.getAttribute('value')).toEqual('dimpu');
    
    let btn = page.getLoginButton();
    btn.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home/59fbd21d034f29380cf0024a');
    element(by.id('logout')).click();

});

});