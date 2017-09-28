import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  
  messages:string[] = ["Hello Word!","Hey"];
  connection;
  message;
  constructor() { }

  ngOnInit() {
  }

}
