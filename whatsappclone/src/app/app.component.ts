import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // inView='Chats';
  users:string[] = ["Becky","Dimpu"]; 
  
  // onNavigate(selectedModule: string)
  // {
  //     if(selectedModule === 'Users')
  //         this.inView ='Users';
  //     if(selectedModule === 'Chats')
  //         this.inView ='Chats';

      
  // }

}
