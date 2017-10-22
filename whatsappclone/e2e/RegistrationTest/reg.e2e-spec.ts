import { browser, element, by } from 'protractor'; 
<<<<<<< HEAD
import { RegPage } from './reg.po';
=======
import { RegPage } from './login.po';
>>>>>>> acd1381b36dea0f33ef2c7b79ba50bf917e2ea57

describe('Reg App', () => {

  let page: RegPage; 

  beforeEach(() => {
     page = new RegPage();
  });

  it('Check whether the page appears or not', function() 
  {
    page.navigateTo();
<<<<<<< HEAD
    var alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual("Username can't be empty.");
=======
    expect(page.getParagraphText()).toEqual('Please, login into your account');
    
>>>>>>> acd1381b36dea0f33ef2c7b79ba50bf917e2ea57
  });

});

 

<<<<<<< HEAD
  
=======
  it('should not allow the user to register with empty credentials', function() {
    var reg_check = element(by.id('btn_login'));
    reg_check.click();
    var timeout = 100000;
    browser.wait(browser.ExpectedConditions.alertIsPresent(), timeout);
    var alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual("Username can't be empty.");
});

>>>>>>> acd1381b36dea0f33ef2c7b79ba50bf917e2ea57
