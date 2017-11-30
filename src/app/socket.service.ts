


import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
   
/*npm install @types/socket.io-client --save
*/
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

	/* 
	* specifying Base URL.
	*/
	private BASE_URL = 'http://localhost:4000';  
  	private socket;

  	constructor() {}

  	/* 
	* Method to connect the users to socket
	*/
  	connectSocket(userId:string){
  		this.socket = io(this.BASE_URL,{ query: `userId=${userId}`});
  	}
 
 	/* 
	* Method to emit the add-messages event.
	*/
	sendMessage(message:any):void{
		console.log("Trying to send normal message");
		
		this.socket.emit('add-message', message);
	}

	sendGroupMessage(message:any):void{
		console.log("Trying to send group message");
		this.socket.emit('group-message', message);
	}

	/* 
	* Method to emit the logout event.
	*/
	logout(userId):any{

		this.socket.emit('logout', userId);

		let observable = new Observable(observer => {
			this.socket.on('logout-response', (data) => {
				observer.next(data);    
			});

			return () => {
				
				this.socket.disconnect();
			};  
		})     
		return observable;
	}

	/* 
	* Method to receive add-message-response event.
	*/
	receiveMessages():any{ 
		let observable = new Observable(observer => {
			this.socket.on('add-message-response', (data) => {
				observer.next(data);    
			});

			return () => {
				this.socket.disconnect();
			};  
		});
		
		return observable;
	}

	receiveGroupMessages():any{ 
		 let observable = new Observable(observer => {
		 	this.socket.on('group-message-response', (data) => {
		 		observer.next(data);    
		 	});

		 	return () => {
		 		this.socket.disconnect();
		 	};  
		 });
		
	     return observable;
	}

	/* 
	* Method to receive chat-list-response event.
	*/
	getChatList(userId:string):any {

		this.socket.emit('chat-list' , { userId : userId });

		let observable = new Observable(observer => {
			this.socket.on('chat-list-response', (data) => {
				observer.next(data);    
			});

			return () => {
				this.socket.disconnect();
			};  
		})     
		return observable;
	} 

	/* 
	* Method to receive group-list-response event.
	*/
	getGroupsList(userId:string):any {
		
		
				this.socket.emit('groups-list' , { userId : userId });
				console.log("socket id waiting for response: "+this.socket.id);
				
				   let observable = new Observable(observer => {
					this.socket.on('groups-list-response', (data) => {
						console.log("group list response received"+JSON.stringify(data));
						
						observer.next(data);    
					});
		
					return () => {
						this.socket.disconnect();
					};  
				})     
				return observable;
			} 

	getOfflineChatList(userId:string):any {
		
				this.socket.emit('chat-list-offline' , { userId : userId });
		
				let observable = new Observable(observer => {
					this.socket.on('chat-list-response-offline', (data) => {
						observer.next(data);    
					});
		
					return () => {
						this.socket.disconnect();
					};  
				})     
				return observable;
			} 


}
