import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { AppComponent } from './app.component';
import {LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material';
import { Routes,RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ElasticDirective } from './directives/auto-grow.directive';
import { HighlightSearch } from './highlightsearch.pipe';
 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 

const appRoutes:Routes = [
  {path : '' , component : LoginComponent},
  {path:'home',component: HomeComponent},
  {path : 'home/:userid' , component : HomeComponent},
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ElasticDirective,
    HighlightSearch,    
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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    Ng2SearchPipeModule,
    HighlightSearch    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


