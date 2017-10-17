import { LoginPage } from './login.po';
import { element, by, protractor } from "protractor/built";

describe('whatsappclone App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

 
it('should provide credentials and login',()=>{
  expect(page.getEmailText()).toEqual('');
  expect(page.getPasswordText()).toEqual('');
  expect(page.getUsernameText()).toEqual('');

  var continueBtn = element(by.id('submit_login'));
  continueBtn.click().then(function() {
      expect(page.navigateTo);

});
});

});
