
declare var require: any;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
<any>require('aws-sdk/dist/aws-sdk');
import * as _ from "lodash";


declare var $:any;



/* Importing services starts*/
import { SocketService } from './../socket.service';
import { HttpService } from './../http.service';
import { ChatService } from './../chat.service';
/* Importing services ends*/



@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css'],
providers : [ChatService,HttpService,SocketService]
})
export class HomeComponent implements OnInit{



/*
* UI related variables starts
*/
public overlayDisplay = false;
public selectedUserId = null;
public selectedSocketId = null;
public selectedUserName = null;
public selectedGroupName = null;

	
/* 
* UI related variables ends
*/

/*
* Chat and message related variables starts
*/
public username = null;
public userId = null;
public socketId = null;
public chatListUsers = [];
public chatOfflineUsers = [];
public message = '';
public messages = [];
public groupName = '';
public groupsList= [];

public selectedUserstoAdd=[];
public selectedUserstoDelete=[];

public newUserstoGroup = [];
public removedUsersfromGroup = [];
public exsistingUsers=[];

public allUsers = [];
public status = null;
public profile_img = '';
/*
* Chat and message related variables ends
*/
public selectedUsersList = true;


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


			
			this.chatService.updateStatus(
					{
						"userId":this.userId
					},
					(error,response)=>
					{
						if(!response.error){
							console.log("Status updated Successfully");
						}else{
							console.log("ERROR updating status");
						}						
				});

				this.chatService.getprofile(this.userId,( error, response )=>{
			
					if(error) {
						console.log(error);
						this.router.navigate(['/']); /* Home page redirection */
					}
					else
					{
						console.log("*************");
						console.log(JSON.stringify(response));
						console.log("**************");
						this.profile_img = response.imgurl;
					}
				});
				
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
										console.log("IIIIIIIIIIIIIIIIIIIIIIIII");
										console.log("chatlist: "+JSON.stringify(this.chatListUsers));
									}

									//track list of all users
									

										console.log("ALL users...: "+JSON.stringify(this.allUsers));
											
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

							this.chatListUsers.forEach(element => {
								this.allUsers.push(element);
								});
							this.chatOfflineUsers.forEach(element => {
									this.allUsers.push(element);
							});

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
			//	console.log("Selected user response: "+JSON.stringify(response));
				
				if(!response.error) {
					//console.log("Messages requested: "+JSON.stringify(response));
					this.messages = response.message;
				}
				else{
					alert("Error getting messages");
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
			
			console.log("New group name: "+newGroup);
			
				if (newGroup ===null||newGroup ===''||newGroup===undefined) {
					
					alert("Please enter group name");
					
				}
				else
				{

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
	
	}

	updateStatus(status:string){
		
				this.status=status;
				//  console.log(status +" id dttaud");
				//RegisterGroup
				this.chatService.updateStatus(
					{   "status":this.status,
							"userId":this.userId
					},
					(error,response)=>
					{
						if(!response.error){
							alert("Status updated Successfully");
						}else{
							alert("ERROR updating status");
						}						
					});
}


	populateMembers(groupNameToPopulate){
		this.chatService.fetchMembers(
			{  
					"groupName":groupNameToPopulate,
			},
			(error,response)=>
			{
			
				console.log("Response on fecth: "+JSON.stringify(response));
				if(!response.error){

				console.log("Members: "+JSON.stringify(response.message[0]));
				let j=0;

				this.newUserstoGroup.length=0;

				//let updatemembers=[];

				if(response.message[0]!=null)
				{
					for(j=0;j<response.message[0].userIdArray.length;j++)
				{
					let value={
						"username":response.message[0].userIdArray[j].username,
						"userId":response.message[0].userIdArray[j].userId
					}
				//	updatemembers.push(value);
					this.newUserstoGroup.push(value);
					
				}

			//	this.newUserstoGroup=updatemembers;
				
				}

				}else{
					console.log("ERROR populating members");
				}						
			});
	}

	populateNonMembers(groupName){
		
	//	let diff = this.allUsers.filter(x => this.newUserstoGroup.indexOf(x) < 0 );
		
		//console.log("diff  members: "+JSON.stringify(diff));
		
		this.exsistingUsers.length=0;


		this.chatService.fetchMembers(
			{  
					"groupName":groupName,
			},
			(error,response)=>
			{
			
				//console.log("Response on fecth: "+JSON.stringify(response));
				if(!response.error){

				//console.log("Members: "+JSON.stringify(response.message[0]));
				let j=0;

				let exsistingmembers=[];

				
				if(response.message[0]!=null)
				{
					for(j=0;j<response.message[0].userIdArray.length;j++)
				{
					// let value={
					// 	"username":response.message[0].userIdArray[j].username,
					// 	"userId":response.message[0].userIdArray[j].userId
					// }
					if(exsistingmembers.indexOf(response.message[0].userIdArray[j].username)<0)
						exsistingmembers.push(response.message[0].userIdArray[j].username);
					
				}

				console.log("Exsisting users: "+exsistingmembers);

				
				}


				if(this.allUsers!=null)
				{
					//this.exsistingUsers.length=0;

					console.log("All users: "+JSON.stringify(this.allUsers));
					let j=0;
					for(j=0;j<this.allUsers.length;j++){
						
						let check = {
							"username":this.allUsers[j].username,
							"userId":this.allUsers[j]._id
						}
							
						let notMember=false;

					
						if(exsistingmembers.indexOf(this.allUsers[j].username)<0){
							console.log("Not a member: "+check.username);
							notMember=true;
						}
							
							if(this.exsistingUsers.length==0 && notMember){
							console.log("adding..: "+check.username);
							
								this.exsistingUsers.push(check);
								
							}else{

								if(notMember){
									let k=0;
									let alreaypresent=false;
									for(k=0;k<this.exsistingUsers.length;k++)
									{	
										console.log("In loop with: "+this.exsistingUsers[k].username+" "+this.allUsers[j].username);
										console.log("In loop with: "+this.exsistingUsers[k].userId+" "+this.allUsers[j]._id);
										
											if(this.exsistingUsers[k].username==this.allUsers[j].username && this.exsistingUsers[k].userId==this.allUsers[j]._id ){
											console.log("Not a member: but already added: "+check.username);
											
											alreaypresent=true;
											}
									}

									if(!alreaypresent){
										console.log("Not a member: also not  added: adding "+check.username);
										
										this.exsistingUsers.push(check);
										
									}
								
								}

							}
								
								
							

						

						

						// if(exsistingmembers.indexOf(this.allUsers[j].username)<0 && this.exsistingUsers.indexOf(check)<0){
							
						// 	console.log("not a memener of exs users: "+this.allUsers[j].username);
							
						// 	let val={
						// 		"username":this.allUsers[j].username,
						// 		"userId":this.allUsers[j]._id
						// 	}

						// 	if(this.exsistingUsers.indexOf(val)<0)
						// 	this.exsistingUsers.push(val);
						// }
						//console.log("AllUSERS!! "+JSON.stringify(this.allUsers));
					}
				}

				}else{
					console.log("ERROR populating members");
				}						
			});
		
		}
		

	

	AddUser(username, userId){
		console.log("Trying to add: "+username);
		let i;
		let obj = {
			"username" : username,
			"userId" : userId,
		};
		let bool=false;

		if(this.selectedUserstoAdd!=null &&this.selectedUserstoAdd.length!=0 )
		{
			for (i = 0; i < this.selectedUserstoAdd.length; i++) {
			
				console.log("this.selectedUserstoAdd[i]: "+JSON.stringify(this.selectedUserstoAdd[i]));
			if(_.isEqual(obj,this.selectedUserstoAdd[i]))
				{
				console.log("Already exsists!!");
				this.selectedUserstoAdd.splice(i, 1);
				bool=true;
				}
		}
	}
	
		if(!bool)
		{
		console.log("does not  exsist!");
		this.selectedUserstoAdd.push(obj);
		}
	}

	AddUsers(){



		if(_.isEmpty(this.selectedUserstoAdd)||this.selectedUserstoAdd==null||this.selectedUserstoAdd==undefined){

			alert("Please select users to Add.");

		}else{

			console.log("IS not empty!");
		this.selectedUserstoAdd.forEach(element => {
			console.log(element.username+ " was added to "+this.selectedGroupName);

			//registering user to grouparray
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

				this.chatService.addGroupUsers(
					{   
						"userarray":this.selectedUserstoAdd,							
						"groupName" :this.selectedGroupName
					},
					(error,response)=>
					{
						if(!response.error){
						console.log("group users updated");
						}else{
							alert("ERROR updating userlist for group");
						}
					});

				}

	}

	
	DeleteUser(username, userId){
		console.log("userid in del user: "+userId);
		
		let i;
		let obj={
			"username" : username,
			"userId" : userId,
		};
		let bool=false;

		if(this.selectedUserstoDelete!=null &&this.selectedUserstoDelete.length!=0 ){
		
		for (i = 0; i < this.selectedUserstoDelete.length; i++) {
			
			if(_.isEqual(obj,this.selectedUserstoDelete[i]))
			{
				this.selectedUserstoDelete.splice(i, 1);	
				bool=true;
			}
		}
	}
		if(!bool)
		this.selectedUserstoDelete.push(obj);
	}

	

	DeleteUsers(){
		this.selectedUserstoDelete.forEach(element => {

			console.log(element.username+ " was removed with id "+element.userId);

			this.chatService.deregisterGroup(
				{   
					"username":element.username,
					"userId":element.userId,
					"groupName" :this.selectedGroupName
				},
				(error,response)=>
				{
					if(!response.error){
					console.log("Deleted users successfully");
					}else{
						alert("ERROR deleting user to group");
					}
				});

				this.chatService.deregisterUsers(
					{   
						"username":element.username,
						"userId":element.userId,
						"groupName" :this.selectedGroupName
					},
					(error,response)=>
					{
						if(!response.error){
						console.log("removed user from group listsuccessfully");
						}else{
							alert("ERROR removeing user from group lists");
						}
					});


				//pull from groupuser collection also!!!
		});
	}
		
	Settings(){
			
	}
	fileEvent(fileInput:any){

		let file = fileInput.target.files[0];
		this.chatService.updateProfilepic(
			{   
				"userId":this.userId,
				"filename":file.name,
				"file":file
			},
			(error,response)=>
			{
				if(!response.error){
					alert("Status updated Successfully");
				}else{
					alert("ERROR updating status");
				}						
			});

		// Access Keys needs to be changed

		// AWSService.config.accessKeyId = 'AKIAINOO6VT2L4UKJJQQ';
		// AWSService.config.secretAccessKey = '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';
		
		// Creating an AWS Bucket for the User
	}
}





