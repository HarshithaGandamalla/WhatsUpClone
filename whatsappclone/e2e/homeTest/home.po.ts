import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home/59e503b3333b2d08d8edc3f0');
  }

  getParagraphText() {
    return element(by.id('container')).getText();
  }
}
