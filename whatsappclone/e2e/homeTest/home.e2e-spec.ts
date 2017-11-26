import { HomePage } from './home.po';
import { browser } from "protractor/built";

describe('whatsappclone App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have gone into the home page', () => 
  {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49159/home/5a137b30a75e121758df3713');
  });

  it('should have the correct title', () => 
  {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Whatsappclone');
  });

  
});

