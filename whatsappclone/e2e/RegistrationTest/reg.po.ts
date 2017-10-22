import { browser, by, element } from 'protractor';

export class RegPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.indigo-text')).getText();
  }
}