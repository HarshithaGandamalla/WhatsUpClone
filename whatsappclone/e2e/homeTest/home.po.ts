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
    return element(by.className('greeting-message')).getText();
  }

  getSettings(){
    return element(by.className('dropdown-button waves-effect waves-light')).getText();
  }

  getLogout(){
    return element(by.id('logout')); 
  }

  getOnline(){
    return element(by.id('online'));
  }

  getOffline(){
    return element(by.id('offline'));
  }
  
   getChatFooter(){
    return element(by.id('icon_prefix'));
  }
  
  getStatus(){
    return element(by.id('status3')).getText();
  }

  getGroup(){
    return element(by.id('newgroup')).getText();
  }
}
