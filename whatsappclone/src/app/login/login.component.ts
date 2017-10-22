import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { ChatService } from './../chat.service';
import { HttpService } from './../http.service';

@Component({
	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css'],
  	providers : [ChatService,HttpService]
})
export class LoginComponent{

	private username = null;
  	private email = null;
  	private password = null;

  	private isuserNameAvailable = false;
  	private userTypingTimeout= 500;
      private typingTimer = null;
      
      private isemailAvailable = false;
  	private userTypingTimeoutEmail= 500;
  	private typingTimerEmail = null;

  	constructor(
      	private chatService : ChatService,
  		private router :Router
  	){	}

  	public onkeyup(event){
  		clearTimeout(this.typingTimer);
  		this.typingTimer = setTimeout( ()=>{
  			this.chatService.checkUserNameCheck({
  	  			'username' : this.username
  	  		}, (response)=>{
  	  			if(response.error) {
  	  				this.isuserNameAvailable = true;
  	  			}else{
  	  				this.isuserNameAvailable = false;
  	  			}
  	  		});
  		}, this.userTypingTimeout);
  	}

  	public onkeydown(event){
		clearTimeout(this.typingTimer);
      }
      

    //   public onkeyupEmail(event){
    //     clearTimeout(this.typingTimerEmail);
    //     this.typingTimerEmail = setTimeout( ()=>{
    //         this.chatService.checkEmailCheck({
    //               'email' : this.email
    //           }, (response)=>{
    //               if(response.error) {
    //                   this.isemailAvailable = true;
    //               }else{
    //                   this.isemailAvailable = false;
    //               }
    //           });
    //     }, this.userTypingTimeoutEmail);
    //     console.log(this.isemailAvailable +" emailavailable??")
    // }

    // public onkeydownEmail(event){
    //   clearTimeout(this.typingTimerEmail);
    // }

  	public login():void{

        if(this.username === '' || this.username === null) {
            alert(`Username can't be empty.`);
        }else if(this.password === '' || this.password === null ){
            alert(`Password can't be empty.`);
        }else{
            this.chatService.login({
                  'username' : this.username,
                  'password' : this.password,
            },(error , result)=>{
                if(error) {
                    alert(result);
                }else{
                    if(!result.error) {
                        this.router.navigate(['/home/'+result.userId]);
                    }else{
                        alert(`Invalid Credentials`);
                    }
                }
            });
        }
  	}

    public registerUser():void{
        
        if(this.username === '') {
            alert(`Username can't be empty.`);
        }else if(this.email === ''){
            alert(`Email can't be empty.`);
        }else if(this.password === ''){
            alert(`Password can't be empty.`);
        }else if(!this.isuserNameAvailable){
           this.chatService.registerUser({
                username : this.username,
                email : this.email,
                password : this.password
            },(error , result)=>{
                if(error) {
                    alert("alertttttttQ!"+result);
                }else{
                    if(!result.error) {
                        this.router.navigate(['/home/'+result.userId]);
                    }else{
                        alert(`Registration failure.`);
                    }
                }
            });
        }
        else{
            alert(`Register with new credentials.`);
        }

    }

}