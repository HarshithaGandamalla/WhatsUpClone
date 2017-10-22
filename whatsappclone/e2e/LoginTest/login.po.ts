import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.indigo-text')).getText();
  }
}