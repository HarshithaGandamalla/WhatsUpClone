import { async, ComponentFixture, TestBed , fakeAsync, tick} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import {Location} from "@angular/common";
import { LoginComponent } from './login.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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
  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        HttpModule,
        RouterTestingModule, // same any normal route config   
       ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const h5s = fixture.debugElement.queryAll(By.css('h5'));
    h5 = h5s[0].nativeElement;
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    const buttons = fixture.debugElement.queryAll(By.css('button'));
   
    login_btn=buttons[0].nativeElement;
    reg_btn=buttons[1].nativeElement;
    
    username_HtmlElement = inputs[0].nativeElement;
    email_HtmlElement = inputs[1].nativeElement;
    password_HtmlElement = inputs[2].nativeElement;
    
  });

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
        
            it('should invoke the onRegisterSubmit function', async(() => {
              fixture.whenStable().then(() => {
                expect(component.registerUser).toHaveBeenCalled();
              });
            }));


    });

    describe('when the user logs in', () => {
      
          beforeEach(() => {
            regSpy = spyOn(component, 'login');
            reg_btn.click();
          });
      
          it('should invoke the login function', async(() => {
            fixture.whenStable().then(() => {
              expect(component.login).toHaveBeenCalled();
            });
          }));


  });

});
