

import { Injectable } from '@angular/core';

/* Importing http service starts*/
import { HttpService } from './http.service';
/* Importing http service ends*/

@Injectable()
export class ChatService {

	constructor(private httpService : HttpService) { }

	/* 
	* check if username already exists.
	*/
	public checkUserNameCheck(params,callback){
		this.httpService.userNameCheck(params).subscribe(
  				response => {
  					callback(response);
  				},
  				error => {
  					alert('HTTP fail.usernameee');
  				}
  			);
	}

  	public login(params ,callback):any{
  		this.httpService.login(params).subscribe(
  				response => {
  					callback(false,response);
  				},
  				error => {
  					callback(true,'HTTP fail.');
  				}
  			);
  	}


  	/* 
	* method to add new users
	*/
  	public registerUser(params,callback):any{
  		this.httpService.registerUser(params).subscribe(
  				response => {
                  callback(false,response);
                },
                error => {
                  callback(true,'Failed to register user. Server might be down.');
                }
  			);
  	}


  	/* 
	* method to get the messages between two users
	*/
    public getMessages(params ,callback):any{
        this.httpService.getMessages(params).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
	}
	
	
  	/* 
	* method to get the messages of given group
	*/
    public getGroupMessages(params ,callback):any{
        this.httpService.getGroupMessages(params).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
    }


    /* 
	* Method to check the session of user.
	*/
    public userSessionCheck(userId , callback):any{
    	this.httpService.userSessionCheck({userId : userId}).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
	}
	
	/* 
	* Method to add user to chat group.
	*/
	public registerGroup(params,callback):any{

		console.log("In registrop grp chat service");
		
          this.httpService.registerGroup(params).subscribe(
			response => {
				callback(false,response);
			},
			error => {
				callback(true,'HTTP fail.');
			});
		
	}
  
  /* 
	* Method to add update status of the user.
	*/
	public updateStatus(params,callback):any{
          this.httpService.updateStatus(params).subscribe(
			response => {
				console.log(JSON.stringify(response)+" in res");
				callback(false,response);
			},
			error => {			
				callback(true,'HTTP status fail.');
			});
	}

}
