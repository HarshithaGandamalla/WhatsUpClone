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

it('should allow user to login with empty email', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  let email = page.getLoginFormEmail();
  username.sendKeys('e2e');
  password.sendKeys('e2e'); 
  email.sendKeys('');  
  let btn = page.getLoginButton();
  btn.click();
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

it('should not allow the user to register with empty username', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  let email = page.getLoginFormEmail();
  username.sendKeys('');
  password.sendKeys('jayakrishna'); 
  email.sendKeys('test1@gmail.com');   
  let btn = page.getRegisterButton();
  btn.click();
  browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  var alertDialog = browser.switchTo().alert();
  expect(alertDialog.getText()).toEqual("Username can't be empty for registration.");
  alertDialog.dismiss();
});


it('should not allow the user to register with empty password', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  let email = page.getLoginFormEmail();
  username.sendKeys('test2');
  password.sendKeys(''); 
  email.sendKeys('test2@gmail.com');  
  let btn = page.getRegisterButton();
  btn.click();
  browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  var alertDialog = browser.switchTo().alert();
  expect(alertDialog.getText()).toEqual("Password can't be empty for registration.");
  alertDialog.dismiss();
});

it('should not allow the user to register with empty email', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  let email = page.getLoginFormEmail();
  username.sendKeys('test3');
  password.sendKeys('test3'); 
  email.sendKeys('');  
  let btn = page.getRegisterButton();
  btn.click();
  browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  var alertDialog = browser.switchTo().alert();
  expect(alertDialog.getText()).toEqual("Email can't be empty for registration.");
  alertDialog.dismiss();
});

it('should not allow the already registered user', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  let email = page.getLoginFormEmail();
  username.sendKeys('jay');
  password.sendKeys('jayakrishna'); 
  email.sendKeys('jay@gmail.com');  
  let btn = page.getRegisterButton();
  btn.click();
  browser.wait(browser.ExpectedConditions.alertIsPresent(), 5000);
  var alertDialog = browser.switchTo().alert();
  expect(alertDialog.getText()).toEqual("There is already an existing account with the same username. Please choose a new unique username");
  alertDialog.dismiss();
});

//For this to run successfully every time, we need to manually delete this e2e user from this database
//Or else it'll be considered as duplicate user and hence 
//We get an alert regarding this is a duplicate user
//So after running this test
//Remove the newly created e2e user from mlab database 
it('should allow legit user', () => 
{
  page.navigateTo();
  let password = page.getLoginFormPassword();
  let username = page.getLoginFormUsername();
  let email = page.getLoginFormEmail();
  username.sendKeys('e2e');
  password.sendKeys('e2e'); 
  email.sendKeys('e2e@gmail.com');  
  let btn = page.getRegisterButton();
  btn.click();
});

});
