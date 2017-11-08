import { async, ComponentFixture, TestBed , fakeAsync, tick} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import {Location} from "@angular/common";
import {DebugElement} from "@angular/core"; 
import {By} from "@angular/platform-browser"; 

import { SocketService } from './../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';
import { SearchService } from "../search.service";

var window = document.defaultView;
var $ = require('jquery')(window);


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement; 
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],      
      imports: [ 
        FormsModule,
        HttpModule,
        RouterTestingModule, // same any normal route config   
       ],
       providers : [ChatService,HttpService,SocketService, SearchService],
    })
    
    
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
     // const input = fixture.debugElement.query(By.css('#theid')); 
      

  }));

 
  // it('should be created', () => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it('should be set user chat name', () => {
   
  });


});
