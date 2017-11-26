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

  it('should have the correct userId', () => 
  {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('5a137b30a75e121758df3713');
  });

  it('should have the correct username', () => 
  {
    page.navigateTo();
    expect(page.getUserText()).toContain('jay');
  });

  it('should have user settings', () => 
  {
    page.navigateTo();
    expect(page.getSettings()).toBe('Settings');
  });

  it('should logout when user asks it to', () => 
  {
    page.navigateTo();
    var l = page.getLogout();
    var EC = browser.ExpectedConditions;
    l.click();  
  });

  it('should check all the offline users', () => 
  {
    page.navigateTo();
    page.getOffline().click();
  });

  it('should check all the online users', () => 
  {
    page.navigateTo();
    page.getOnline().click();
  });

  it('should check all the online users', () => 
  {
    page.navigateTo();
    page.getOnline().click();
  });

  
});
