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
import { SearchService } from "../search.service";

var window = document.defaultView;
var $ = require('jquery')(window);




describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let searchspy : jasmine.Spy;
  let group_name:  HTMLInputElement;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        HttpModule,
        RouterTestingModule, // same any normal route config   
        Ng2SearchPipeModule,
        BrowserModule
       ],
      declarations: [ HomeComponent ],
      providers : [ChatService,HttpService,SocketService, SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    const input = fixture.debugElement.queryAll(By.css('input'));
    group_name = input[0].nativeElement;
    
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
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

  // it('checks logout button', async(() => {
  //   searchspy = spyOn(comp, 'logout').and.callThrough();
  //   const  btns = fixture.debugElement.queryAll(By.css('button'));
  //   breakfast_html = btns[1].nativeElement;
    
  //   breakfast_html.click();
  //    fixture.whenStable().then(()=>{
  //     expect(comp.SearchByTags).toHaveBeenCalled(); 
  //   });      
  //   }));



});
