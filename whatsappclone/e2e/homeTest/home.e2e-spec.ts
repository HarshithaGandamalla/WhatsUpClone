import { HomePage } from './home.po';
import { browser } from "protractor/built";

describe('whatsappclone App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  // it('should display messages between current user and selected user', () => {
  //  page.navigateTo();
    
  //   expect(page.getParagraphText()).toEqual('Hello');
  // });
});

