

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';


declare var $:any;


 
/* Importing services starts*/
import { SocketService } from './../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';
import { SearchService } from "../search.service";
/* Importing services ends*/



@Component({
	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css'],
  	providers : [ChatService,HttpService,SocketService, SearchService]
})
export class HomeComponent implements OnInit{


	
	/*
	* UI related variables starts
	*/
	private overlayDisplay = false;
	private selectedUserId = null;
	private selectedSocketId = null;
	private selectedUserName = null;
	private selectedGroupName = null;
	
		
	/* 
	* UI related variables ends
	*/
 
	/*
	* Chat and message related variables starts
	*/
	private username = null;
	private userId = null;
	private socketId = null;
	private chatListUsers = [];
	private chatOfflineUsers = [];
	private message = '';
	private messages = [];
	private groupName = '';
	private groupsList= [];
	private newUserstoGroup = [];
	
	/*
	* Chat and message related variables ends
	*/
	private selectedUsersList = true;
 
 
	constructor( 
  	private chatService : ChatService,
		private socketService : SocketService,
		private route :ActivatedRoute,
		private router :Router
	) { }
 
	ngOnInit() {
 
		$(document).ready(function(){
			// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
			$('.modal').modal();
			$(".button-collapse").sideNav();

			//these are hacks to come out with proper alignment of div
			//not recommended but time constraint
			//set height of chat box
			$(".main-content").height(window.innerHeight - parseInt($(".main-nav").css('height'),10));
			$(".main-content").css({marginBottom: "0px"});
			$(".message-thread").height(parseInt($(".main-content").css('height'),10) - parseInt($(".chat-title").css('height'),10) - parseInt($(".chat-footer").css('height'),10));
			$(".message-thread").css({overflow: "hidden",margin: "0", overflowY: "scroll"});
			$('.message-thread').css('background-image', 'url("http://subtlepatterns.com/patterns/geometry2.png")');
			$(".message-thread").addClass("scroll1");
		  });
		/*
		* getting userID from URL using 'route.snapshot'
		*/		
		this.userId = this.route.snapshot.params['userid'];
 
		if(this.userId === '' || typeof this.userId == 'undefined') {
			this.router.navigate(['/']);
		}
			
		else{
		 
					/*
					* function to check if user is logged in or not starts
					*/	
					this.chatService.userSessionCheck(this.userId,( error, response )=>{
				 		
				 		if(error) {
				 			this.router.navigate(['/']); /* Home page redirection */
				 		}else{
				 			
							 	this.username = response.username;
						 		this.overlayDisplay = true;
						 
							 			/*
											* making socket connection by passing UserId.
											*/	
										this.socketService.connectSocket(this.userId);
						 
											/* 
											* Code to get the real time messages goes here
											*/
						 
											/* 
											* Code for Real time chat list update goes here
											*/
											
								this.socketService.getChatList(this.userId).subscribe(response => {
									
									if(!response.error) {
										
										if(response.singleUser) {
						
											/* 
											* Removing duplicate user from chat list array.
											*/
											if(this.chatListUsers.length > 0) {
												this.chatListUsers = this.chatListUsers.filter(function( obj ) {
													return obj._id !== response.chatList._id;
												});
											}
						
											/* 
											* Adding new online user into chat list array
											*/
											this.chatListUsers.push(response.chatList);
						
										}else if(response.userDisconnected){
											this.chatListUsers = this.chatListUsers.filter(function( obj ) {
												return obj.socketId !== response.socketId;
											});
										}else{
											/* 
											* Updating entire chatlist if user logs in.
											*/
											this.chatListUsers = response.chatList;
										//	console.log("chatlist: "+JSON.stringify(this.chatListUsers));
										}
									}else{
										alert('Chat list failure.');
									}
						  });	
						  
						 
						  /* 
						  * Code to update groups list of user goes here
						  */
						 
						  this.socketService.getGroupsList(this.userId).subscribe(response=>{

							//console.log("Trying to update groupslist");

							if(!response.error){
                                /* 
							    * Updating entire groupslist if user logs in.
								*/
								

								if(response.groupList!=null){
								for (var i = 0; i < response.groupList.length ; i++) {

									//console.log("Updated groupslist:o "+JSON.stringify( response.groupList[i]));
									
									this.groupsList.push({
										'groupName': response.groupList[i]
									});
								}
							}


							}
							else{
								alert('Group list update failure.');
							}

						  });
			



						  this.socketService.getOfflineChatList(this.userId).subscribe(response => {
							
							if(!response.error) {
								
								if(response.singleUser) {
				
									/* 
									* Removing duplicate user from chat list array.
									*/
									if(this.chatOfflineUsers.length > 0) {
										this.chatOfflineUsers = this.chatOfflineUsers.filter(function( obj ) {
											return obj._id !== response.chatList._id;
										});
									}
				
									/* 
									* Adding new offline user into chat list array
									*/
									this.chatOfflineUsers.push(response.chatList);
				
								}else if(response.userDisconnected){
									this.chatOfflineUsers = this.chatOfflineUsers.filter(function( obj ) {
										return obj.socketId !== response.socketId;
									});
								}else{
									/* 
									* Updating entire chatlist if user logs out.
									*/
									this.chatOfflineUsers = response.chatList;
								}
							}else{
								alert('Chat list failure.');
							}
				  });	
	


							  this.socketService.receiveMessages().subscribe(response => {
								if(this.selectedUserId && this.selectedUserId == response.fromUserId) {
									this.messages.push(response);
									setTimeout( () =>{
											document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
									},100);
								}
							});

							this.socketService.receiveGroupMessages().subscribe(response => {
								//check if response type contains message key
								if(this.selectedGroupName && this.selectedGroupName == response.groupName) {
									this.messages.push(response);
									setTimeout( () =>{
											document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
									},100);
								}
							});
				 	
				 		}
				 	});
			}
		
				
	}
			
			logout(){
				this.socketService.logout({userId : this.userId}).subscribe(response => {
					this.router.navigate(['/']); /* Home page redirection */
				});
			}
		
			selectedUser(user):void{

				this.selectedGroupName= null;

				this.selectedUserId = user._id;
				this.selectedSocketId = user.socketId;
				this.selectedUserName = user.username;
			//	console.log("Selected user: "+JSON.stringify(user.username));
				
				/* 
				* calling method to get the messages

				*/

				
				this.chatService.getMessages({ userId : this.userId,toUserId :user._id} , ( error , response)=>{
					console.log("Selected user response: "+JSON.stringify(response));
					
					if(!response.error) {
						//console.log("Messages requested: "+JSON.stringify(response));
						this.messages = response.message;
					}
				});
			}
			 
			isUserSelected(userId:string):boolean{
				
				if(!this.selectedUserId){
					return false;
				}
				return this.selectedUserId === userId ? true : false;
			}

			selectedGroup(group):void{
				
				this.selectedUserName=null;
				this.selectedUserId=null;

				console.log("Selected group: "+JSON.stringify(group));
				this.selectedGroupName = group.groupName;
			 
				/* 
				* calling method to get the messages
				*/
				this.chatService.getGroupMessages({groupName:group.groupName} , ( error , response)=>{
					console.log("Selected group response: "+JSON.stringify(response));
					
					if(!response.error) {
						this.messages = response.message;
					}
				});
			}

			isGroupSelected(groupName:string):boolean{
				if(!this.selectedGroupName) {
					return false;
				}
				
				return this.selectedGroupName === groupName ? true : false;
			}
			 
			alignMessage(userId){
				return this.userId === userId ? false : true;
			}

			userToggle(){
				this.selectedUsersList = !this.selectedUsersList;
			}
			sendMessage(event){
				if(event.keyCode === 13) {
					console.log("Selected userid: "+this.selectedUserId);
					console.log("Selected groupname: "+this.selectedGroupName);
					
					if(this.message === '' || this.message === null) {
						alert(`Message can't be empty.`);
					}else{
			 
						if (this.message === '') {
							alert(`Message can't be empty.`);
						}else if(this.userId === ''){
							this.router.navigate(['/']);					
						}else if((this.selectedUserId === ''||this.selectedUserId==null)&&(this.selectedGroupName === ''||this.selectedGroupName==null)){
							alert(`Select a user or group to chat.`);
						}else{
						 
							//  Chatting with user
							if(this.selectedUserId!=null) 
							{
							const data = {
								fromUserId : this.userId,
								message : (this.message).trim(),
								toUserId : this.selectedUserId,
								toSocketId : this.selectedSocketId,
								fromSocketId : this.socketId
							}

							console.log("Message: selected userId "+this.selectedUserId);
							console.log("Message when user s selected "+data.message);
							
							this.messages.push(data);
							setTimeout( () =>{
									document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
							},100);
							
							/* 
							* calling method to send the messages
							*/
							this.message = null;
							this.socketService.sendMessage(data);
							}
							else if(this.selectedGroupName!=null){ //Chatting in group
							
								console.log("Chatting in group: selectedgroupname");
								
								const data = {
									groupName : this.selectedGroupName,
									message : (this.message).trim(),
									fromUserId : this.userId,
									fromUser:this.username								
								}

								

								this.messages.push(data);
								setTimeout( () =>{
									document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
							},100);

							/* 
							* calling method to send the messages
							*/
							this.message = null;
							this.socketService.sendGroupMessage(data);
								



							}else{
								alert("ERROR!!");
							}

						}
					}
				}
			}
		
			addGroup(newGroup:string){
				
				
					if (newGroup) {
					   this.groupName=newGroup; 
						//RegisterGroup
						this.chatService.registerGroup(
							{   'username':this.username,
								'userId':this.userId,
								'groupName':newGroup
							},
							(error,response)=>
							{

								console.log("Addgroup response: "+JSON.stringify(response));
                               if(!response.error){
								
							   	this.messages.push({message:'Successfully created group '+newGroup});
							    this.groupsList.push({
									'groupName':newGroup,
									'message':'Successfully created group '+newGroup 
								  });
							   }else{
								   alert("ERROR registering group");
							   }
							
							});

					}
					else
					{
						alert("Please enter group name");
						
					}
		
		}


		AddUser(username, userId){
		 this.newUserstoGroup.push({
			 "username" : username,
			 "userId" : userId,
		 });
		}

		AddUsers(){
			this.newUserstoGroup.forEach(element => {
				console.log(element.username+ " was added to "+this.selectedGroupName);
				this.chatService.registerGroup(
					{   
						"username":element.username,
						"userId":element.userId,
						"groupName" :this.selectedGroupName
					},
					(error,response)=>
					{
					   if(!response.error){
						console.log("Added users successfully");
					   }else{
						   alert("ERROR adding user to group");
					   }
					});
			});
		}
			
		Settings(){
				
		}
}
	
	
	
