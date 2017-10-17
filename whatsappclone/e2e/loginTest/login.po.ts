import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/home/59e503b3333b2d08d8edc3f0');
  }
  getUsernameText() {
    return element(by.id('username')).getText();
  }

  getEmailText() {
    return element(by.id('email')).getText();
  }
  getPasswordText() {
    return element(by.id('password')).getText();
  }
}
