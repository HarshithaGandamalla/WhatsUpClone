import { async, ComponentFixture, TestBed , fakeAsync, tick} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import {Location} from "@angular/common";
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
var window = document.defaultView;
var $ = require('jquery')(window);

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let h5: HTMLElement;
  let username_HtmlElement: HTMLElement;
  let email_HtmlElement: HTMLElement;
  let password_HtmlElement: HTMLElement;
  let reg_btn: HTMLElement;
  let login_btn: HTMLElement;
  let regSpy: jasmine.Spy;
  
  
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        HttpModule,
        RouterTestingModule, // same any normal route config   
       ],
      declarations: [ LoginComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const h5s = fixture.debugElement.queryAll(By.css('h5'));
      h5 = h5s[0].nativeElement;
      const inputs = fixture.debugElement.queryAll(By.css('input'));
      const buttons = fixture.debugElement.queryAll(By.css('button'));
     
      login_btn=buttons[0].nativeElement;
      reg_btn=fixture.debugElement.query(By.css('#btn_login')).nativeElement;
      
      username_HtmlElement = fixture.debugElement.query(By.css('#username')).nativeElement;
      email_HtmlElement =  fixture.debugElement.query(By.css('#email')).nativeElement;
      password_HtmlElement = fixture.debugElement.query(By.css('#password')).nativeElement;
      
    });;
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   const h5s = fixture.debugElement.queryAll(By.css('h5'));
  //   h5 = h5s[0].nativeElement;
  //   const inputs = fixture.debugElement.queryAll(By.css('input'));
  //   const buttons = fixture.debugElement.queryAll(By.css('button'));
   
  //   login_btn=buttons[0].nativeElement;
  //   reg_btn=buttons[1].nativeElement;
    
  //   username_HtmlElement = inputs[0].nativeElement;
  //   email_HtmlElement = inputs[1].nativeElement;
  //   password_HtmlElement = inputs[2].nativeElement;
    
  // });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('On page load', () => {
    
    
        it('should check login page text content', () => {
          expect(h5.textContent).toEqual('Please, login into your account');
        });
    
        
        it('should display a blank user input field', () => {
          expect(username_HtmlElement.textContent).toEqual('');
        });

        it('should display a blank email input field', () => {
          expect(email_HtmlElement.textContent).toEqual('');
        });
    
        it('should display a blank password input field', () => {
          expect(password_HtmlElement.textContent).toEqual('');
        });
      });

      describe('when the user submits the registration form', () => {
        
            beforeEach(() => {
              regSpy = spyOn(component, 'registerUser');
              reg_btn.click();
            });
        
            it('should invoke the onRegisterSubmit function', fakeAsync(() => {
              fixture.whenStable().then(() => {
                expect(component.registerUser).toHaveBeenCalled();
              });
            }));


    });

    describe('when the user logs in', () => {
      
          beforeEach(() => {
            regSpy = spyOn(component, 'login');
            login_btn.click();
          });
      
          it('should invoke the login function', fakeAsync(() => {
            fixture.whenStable().then(() => {
              expect(component.login).toHaveBeenCalled();
            });
          }));


  });

    describe('when the user logs with empty username throws alert', () => {
   
   
    beforeEach(() => {
      spyOn(window, 'alert');       
    });

        it('should throw suername cant be empty alert', fakeAsync(() => {
          fixture.whenStable().then(() => {           
            login_btn.click();
            expect(username_HtmlElement.textContent).toEqual('');        
            expect(window.alert).toHaveBeenCalledWith("Username can't be empty.");         
          });
        }));

        it('should throw password cant be empty alert', fakeAsync(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            
            let input = fixture.debugElement.query(By.css('#username')).nativeElement;
            expect(input.value).toBe('');
            input.value = "dimpu";
            input.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(password_HtmlElement.textContent).toEqual('');
            expect(input.value).toBe('dimpu');
            login_btn.click();
             expect(window.alert).toHaveBeenCalledWith("Password can't be empty.");                  
           });
        }));

      
});


describe('when the user registers with empty username throws alert', () => {
  
  
   beforeEach(() => {
     spyOn(window, "alert");
         
   });

       it('should throw username cant be empty alert', fakeAsync(() => 
       {
        fixture.detectChanges();
        
        let input = fixture.debugElement.query(By.css('#username')).nativeElement;
        let email = fixture.debugElement.query(By.css('#email')).nativeElement;
        let password = fixture.debugElement.query(By.css('#password')).nativeElement;

        expect(input.value).toBe('');
        input.value="newperson";
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(input.value).toEqual('newperson');
        
        expect(email.value).toBe('');        
        email.value="newemail"; 
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(email.value).toEqual('newemail');    
        expect(password.value).toEqual('');
        reg_btn.click();
        fixture.detectChanges();
        //  fixture.whenStable().then(() => {    
        //    expect(component).toHaveBeenCalled();         
        //  });
       }));
});

});


