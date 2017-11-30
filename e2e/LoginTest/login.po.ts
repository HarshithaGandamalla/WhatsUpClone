import { browser, by, element } from 'protractor';
       
export class LoginPage {
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

      getLoginButton() {
        return element(by.id('submit_login'));
        }

      getRegisterButton(){
        return element(by.id('btn_login'));
      }

}
