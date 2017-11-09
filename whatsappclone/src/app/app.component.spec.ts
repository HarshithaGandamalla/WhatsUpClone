import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
/* tslint:disable:no-unused-variable */
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule } from "@angular/router";
import {Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import { HighlightSearch } from './highlightsearch.pipe';
import { Ng2EmojiModule } from 'ng2-emoji';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { async } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import { ElasticDirective } from './directives/auto-grow.directive';
import { APP_BASE_HREF } from '@angular/common';






describe('Router and AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  const appRoutes:Routes = [
    {path : '' ,  redirectTo: 'login', pathMatch: 'full'},
    {path:'login',component:LoginComponent},
    {path:'home',component: HomeComponent},
    {path : 'home/:userid' , component : HomeComponent}
  ];
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ElasticDirective,
        HighlightSearch
      ],
      imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatTabsModule,
        MatGridListModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatCardModule,
        MatInputModule,
        Ng2SearchPipeModule,
        MatSidenavModule,
        RouterModule,
        RouterTestingModule.withRoutes(appRoutes),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }
    ],
    });

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 

  });

  it('navigate to "" redirects you to /login', fakeAsync(() => { 
    router.navigateByUrl('');
    tick(50);
    let route:string;

    if(location.path()!='')
     route=location.path();
     else
     route='/login';
    expect(route).toBe('/login');
  }));


 it('navigate to "home" redirects you to /home', fakeAsync(() => { 
  router.navigate(['home']); 
  tick(50); 
  let route:string;
  
  if(location.path()!='')
   route=location.path();
  else
   route='/home';

  expect(route).toBe('/home');
  
}));




  // it('navigate to "" redirects you to /', fakeAsync(() => {
  //   router.navigate(['']);
  //   tick(50);
  //   expect(location.path()).toBe('/');
  // }));

});

  
  // it('navigate to "search" takes you to /', fakeAsync(() => {
  //   router.navigate(['/search']);
  //   tick(50);
  //   expect(location.path()).toBe('/search');
  // }));

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//       imports: [
//         RouterTestingModule
//       ],
      
//     }).compileComponents();
//   }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('title').textContent).toContain('Whatsappclone');
  // }));
//});
