import { browser, element, by } from 'protractor'; 
import { RegPage } from './reg.po';

describe('Reg App', () => {

  let page: RegPage; 

  beforeEach(() => {
     page = new RegPage();
  });

 
 

  it('should throw alert if user already exists. Stay in registration page', function() {
  
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please, login into your account');
    let email = page.getLoginFormEmail();
    let password = page.getLoginFormPassword();
    let username = page.getLoginFormUsername();
    username.sendKeys('New user2');
    email.sendKeys('hamsikag15@gmail.com');
    password.sendKeys('dimpu');
    expect(email.getAttribute('value')).toEqual('hamsikag15@gmail.com');
    expect(password.getAttribute('value')).toEqual('dimpu');
    expect(username.getAttribute('value')).toEqual('New user2');
    expect(element(by.id('isuserNameAvailable'))).toBeTruthy;
    let btn = page.getRegButton();
    btn.click();

    var timeoutInMilliseconds = 100000;
    browser.wait(browser.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Register with new credentials."); 
    
        
   
    // browser.getCurrentUrl().then(function(url){
    //   var user_id=url.split("/")[2];
    //   //it will return exactly user_id value
    //   expect(browser.getCurrentUrl())
    //         .toEqual('http://localhost:49152/home/'+user_id); 
    // });
    // element(by.id('logout')).click();
});

});