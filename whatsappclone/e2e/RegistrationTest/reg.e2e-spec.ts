import { browser, element, by } from 'protractor'; 
import { RegPage } from './reg.po';

describe('Reg App', () => {

  let page: RegPage; 

  beforeEach(() => {
     page = new RegPage();
  });

  it('Check whether the page appears or not', function() 
  {
    page.navigateTo();
    var alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual("Username can't be empty.");
  });

});

 

  
