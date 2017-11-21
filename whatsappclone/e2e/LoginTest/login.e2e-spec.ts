import { browser, element, by } from 'protractor'; 
import { LoginPage } from './login.po';

describe('Login App', () => {

  let page: LoginPage; 

  beforeEach(() => {
     page = new LoginPage();
  });

  it('Check the page atitle', function() 
  {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Whatsappclone');
  });

  it('Check whether the page appears or not', function() 
  {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please, login into your account');
  });

  it('should display username input', () => {
    const userNameInput = page.getLoginFormUsername();
    expect(userNameInput).toBeTruthy();
  });

  it('should display email input', () => {
    const emailInput = page.getLoginFormEmail();
    expect(emailInput).toBeTruthy();
  });

  it('should display password input', () => {
    const passwordInput = page.getLoginFormPassword();
    expect(passwordInput).toBeTruthy();
  });

  it('should fill in the login form', () => 
  {
    page.navigateTo();
    let password = page.getLoginFormPassword();
    let username = page.getLoginFormUsername();
    username.sendKeys('jay');
    password.sendKeys('jayakrishna');   
    let btn = page.getLoginButton();
    btn.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49159/home/5a137b30a75e121758df3713');
    element(by.id('logout')).click();
 });

  it('should not allow the user to login with empty username', () => 
  {
    page.navigateTo();
    let password = page.getLoginFormPassword();
    let username = page.getLoginFormUsername();
    username.sendKeys('');
    password.sendKeys('jayakrishna');   
    let btn = page.getLoginButton();
    btn.click();
    browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.getText()).toEqual("Username can't be empty.");
    alertDialog.dismiss();
 });

 it('should not allow the user to login with empty password', () => 
 {
   page.navigateTo();
   let password = page.getLoginFormPassword();
   let username = page.getLoginFormUsername();
   username.sendKeys('jay');
   password.sendKeys('');   
   let btn = page.getLoginButton();
   btn.click();
   browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
   var alertDialog = browser.switchTo().alert();
   expect(alertDialog.getText()).toEqual("Password can't be empty.");
   alertDialog.dismiss();
});

it('should not allow unregistered users', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  username.sendKeys('unregistered');
  password.sendKeys('unregistered');   
  let btn = page.getLoginButton();
  btn.click();
  browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  var alertDialog = browser.switchTo().alert();
  expect(alertDialog.getText()).toEqual("User not found ,please register");
  alertDialog.dismiss();
});

it('should not allow the user to login with incorrect credentials', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  username.sendKeys('jay');
  password.sendKeys('abcd');   
  let btn = page.getLoginButton();
  btn.click();
  browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  var alertDialog = browser.switchTo().alert();
  expect(alertDialog.getText()).toEqual("User not found ,please register");
  alertDialog.dismiss();
});

});
