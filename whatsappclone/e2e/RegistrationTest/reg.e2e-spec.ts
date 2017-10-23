import { browser, element, by } from 'protractor'; 
import { RegPage } from './reg.po';

describe('Reg App', () => {

  let page: RegPage; 

  beforeEach(() => {
     page = new RegPage();
  });

 
 

  it('should navigate to registration page', function() {
  
    // page.navigateTo();
    // expect(page.getParagraphText()).toEqual('Please, login into your account');
    expect(browser.switchTo().alert().getText()).toEqual("Username can't be empty.");
});

});