import { async, ComponentFixture, TestBed , fakeAsync, tick} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import {Location} from "@angular/common";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule  } from '@angular/platform-browser';
import {DebugElement} from "@angular/core"; 
import {By} from "@angular/platform-browser";        
import { SocketService } from './../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';


var window = document.defaultView;
var $ = require('jquery')(window);



describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let searchspy : jasmine.Spy;
  let group_name:  HTMLInputElement;
  let logout:   HTMLElement;
  let settings:   HTMLElement;
  let filter : Ng2SearchPipeModule;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent],      
      imports: [ 
        FormsModule,
        HttpModule,
        RouterTestingModule, // same any normal route config   
        Ng2SearchPipeModule,
        BrowserModule
       ],
      providers : [ChatService,HttpService,SocketService, Ng2SearchPipeModule]
    })
    
    
      fixture = TestBed.createComponent(HomeComponent);
      comp= fixture.componentInstance;
      fixture.detectChanges();
     // const input = fixture.debugElement.query(By.css('#theid')); 
      

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    const input = fixture.debugElement.queryAll(By.css('input'));
    group_name = input[0].nativeElement;
    
  });


  it('checks group button', async(() => {
    searchspy = spyOn(comp, 'addGroup').and.callThrough();
    const addGroupBtn = fixture.debugElement.nativeElement.querySelector('button');
    addGroupBtn.click();
    fixture.whenStable().then(()=>{
     expect(comp.addGroup).toHaveBeenCalled() 
     expect(group_name.textContent).toEqual('');
     
    });      
  }));

  it('should be set user chat name', () => {
    
   });


  it('checks logout button', async(() => {
    searchspy = spyOn(comp, 'logout').and.callThrough();
    const  list = fixture.debugElement.queryAll(By.css('li'));
    logout = list[1].nativeElement;
    
    logout.click();
     fixture.whenStable().then(()=>{
      expect(comp.logout).toHaveBeenCalled(); 
    });      
    }));

    it('checks settings button', async(() => {
      searchspy = spyOn(comp, 'Settings').and.callThrough();
      const  list = fixture.debugElement.queryAll(By.css('li'));
      settings = list[0].nativeElement;
      
      settings.click();
       fixture.whenStable().then(()=>{
        expect(comp.Settings).toHaveBeenCalled(); 
      });      
      }));



});
