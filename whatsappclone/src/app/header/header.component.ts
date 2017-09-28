import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerModule=new EventEmitter<string>();  
  
  // routeLinks:any[];
  
    
    // constructor(private router: Router) {
    //   this.routeLinks = [
    //   {label: 'Users', link: 'users'},
    //   {label: 'Chats', link: 'chats'}];
  
    // }
   

  ngOnInit() {
  }

  onSelect(selected:string){
   // this.activeLinkIndex = i;
    this.headerModule.emit(selected);  
    
    
  }

}
