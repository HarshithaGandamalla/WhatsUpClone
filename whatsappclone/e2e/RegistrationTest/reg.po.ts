import { browser, by, element } from 'protractor';

export class RegPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.indigo-text')).getText();
  }

  getLoginFormEmail(){
		return element(by.id('email'));               
    }

	getLoginFormPassword(){
		return element(by.id('password'));         
    }

    getLoginFormUsername() {
      return element(by.id('username'));   }

      getRegButton() {
        return element(by.id('btn_login'));
        }
}