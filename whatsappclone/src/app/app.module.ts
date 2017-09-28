import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { ChatsComponent } from './chats/chats.component';
import { MatInputModule } from '@angular/material';
import { Routes,RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';


const appRoutes:Routes = [
  {path:'users',component: UsersComponent},
  {path:'chats',component: ChatsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ChatsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
