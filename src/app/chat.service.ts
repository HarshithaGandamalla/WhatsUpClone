

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

		console.log("checkUserNameCheck request :"+JSON.stringify(params));
		
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
		console.log("login request :"+JSON.stringify(params));
		
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
		console.log("registerUser request :"+JSON.stringify(params));
		
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
		console.log("getMessages request :"+JSON.stringify(params));
		
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
		console.log("getGroupMessages request :"+JSON.stringify(params));
		
        this.httpService.getGroupMessages(params).subscribe(
                  response => {
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
    }

	public getprofile(userId ,callback):any{
        this.httpService.getprofile({userId : userId}).subscribe(
                  response => {
					  console.log("Leading HTTP Request");
                      callback(false,response);
                  },
                  error => {
                      callback(true,'HTTP fail.');
                  }
              );
    }

	public fetchMembers(params ,callback):any{
		console.log("Entered Fetch Components");
        this.httpService.fetchMembers(params).subscribe(
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
          this.httpService.registerGroup(params).subscribe(
			response => {
				callback(false,response);
			},
			error => {
				callback(true,'HTTP fail.');
			});
		
	}


	
	/* 
	* Method to remove user from chat group.
	*/
	public deregisterGroup(params,callback):any{		
		this.httpService.deregisterGroup(params).subscribe(
		  response => {
			  callback(false,response);
		  },
		  error => {
			  callback(true,'HTTP fail.');
		  });
	  
  }
  
  	
	/* 
	* Method to remove users from  group list.
	*/
	public deregisterUsers(params,callback):any{		
		this.httpService.deregisterUsers(params).subscribe(
		  response => {
			  callback(false,response);
		  },
		  error => {
			  callback(true,'HTTP fail.');
		  });
	  
  }
  
  /* 
	* Method to maintain user list of group.
	*/
	public addGroupUsers(params,callback):any{		
		this.httpService.addGroupUsers(params).subscribe(
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

	public updateProfilepic(params,callback):any{
		this.httpService.updateProfilepic(params).subscribe(
		  response => {
			  console.log("OOOOOOOOOOOOOOOO");
			  console.log(JSON.stringify(response)+" in res");
			  callback(false,response);
		  },
		  error => {
			  console.log(error+" in error");
			  
			  callback(true,'HTTP status fail.');
		  });
  }

}
