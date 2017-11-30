import { HomePage } from './home.po';
import { browser,protractor,element,by } from "protractor/built";

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


  it('should not send a message without recipient', () => 
  {
    page.navigateTo();
    var chat = page.getChatFooter();
    chat.sendKeys("Hi",protractor.Key.ENTER);
    browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Select a user or group to chat.");
    alertDialog.dismiss();
  });
  
  it('should find update status', () => 
  {
    page.navigateTo();
    var text = page.getStatus();
    expect(text).toEqual("");
  });
  
  it('should find create group', () => 
  {
    page.navigateTo();
    var text = page.getGroup();
    expect(text).toEqual("");
  });

  // it('should not register a group without group name', () => 
  // {
  //   page.navigateTo();
  //   var newg = element(by.id('group1'));
  //   newg.click();
  //   var input = element(by.id('group2'));
  //   input.sendKeys("",protractor.Key.ENTER);
  //   browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  //   var alertDialog = browser.switchTo().alert();
  //   expect(alertDialog.getText()).toEqual("Please enter group name");
  //   alertDialog.dismiss();
  // });

  // it('should successfully update status', () => 
  // {
  //   page.navigateTo();
  //   var newg = element(by.id('status1'));
  //   newg.click();
  //   var input = element(by.id('newstatus'));
  //   input.sendKeys("I can update status",protractor.Key.ENTER);
  //   browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  //   var alertDialog = browser.switchTo().alert();
  //   expect(alertDialog.getText()).toEqual("Status updated Successfully");
  //   alertDialog.dismiss();
  // });

  it('should successfully find the search box', () => 
  {
    page.navigateTo();
    var search = element(by.id('search-box'));
    expect(search).toBeTruthy();
  });
  
});
