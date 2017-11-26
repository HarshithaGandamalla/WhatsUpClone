import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    browser.get('/');
    element(by.id('username')).sendKeys('jay');
    element(by.id('password')).sendKeys('jayakrishna');    
    element(by.id('email')).sendKeys('jay@gmail.com');
    element(by.id('submit_login')).click();
    browser.sleep(500);
  }

  getParagraphText() {
    return element(by.id('container')).getText();
  }

  getUserText(){
    return element(by.className('jay')).getText();
  }

  getSettings(){
    return element(by.className('dropdown-button waves-effect waves-light')).getText();
  }

  getLogout(){
    return element(by.id('logout')); 
  }

  getOnline(){
    return element(by.className('active'));
  }

  getOffline(){
    return element(by.className('inactive'));
  }
}
