import { browser, element, by } from 'protractor'; 
import { RegPage } from './login.po';

describe('Reg App', () => {

  let page: RegPage; 

  beforeEach(() => {
     page = new RegPage();
  });

  it('Check whether the page appears or not', function() 
  {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please, login into your account');
    
  });

});

 

  it('should not allow the user to register with empty credentials', function() {
    var reg_check = element(by.id('btn_login'));
    reg_check.click();
    var timeout = 100000;
    browser.wait(browser.ExpectedConditions.alertIsPresent(), timeout);
    var alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual("Username can't be empty.");
});

