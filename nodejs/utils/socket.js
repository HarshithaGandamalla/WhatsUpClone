
'use strict';

const path = require('path');
const helper = require('./helper');

class Socket{

   constructor(socket){
       this.io = socket;
   }
   
   socketEvents(){

       this.io.on('connection', (socket) => {

           /**
           * get the user's Chat list
           */
           socket.on('chat-list', (data) => {

               let chatListResponse = {};

               if (data.userId == '') {

                   chatListResponse.error = true;
                   chatListResponse.message = `User does not exits.`;
                   
                   this.io.emit('chat-list-response',chatListResponse);

               }else{

                   helper.getUserInfo( data.userId,(err, UserInfoResponse)=>{
                       
                       delete UserInfoResponse.password;

                       helper.getChatList( socket.id,(err, response)=>{
                       
                           this.io.to(socket.id).emit('chat-list-response',{
                               error : false ,
                               singleUser : false ,
                               chatList : response
                           });

                           socket.broadcast.emit('chat-list-response',{
                               error : false ,
                               singleUser : true ,
                               chatList : UserInfoResponse
                           });

                       });
                   });
               }
           });


           socket.on('chat-list-offline', (data) => {
            
                           let chatListResponse = {};
            
                           if (data.userId == '') {
            
                               chatListResponse.error = true;
                               chatListResponse.message = `User does not exits.`;
                               
                               this.io.emit('chat-list-response-offline',chatListResponse);
            
                           }else{
            
                               helper.getUserInfo( data.userId,(err, UserInfoResponse)=>{
                                   
                                   delete UserInfoResponse.password;
            
                                   helper.getOfflineChatList( socket.id,(err, response)=>{
                                   
                                       this.io.to(socket.id).emit('chat-list-response-offline',{
                                           error : false ,
                                           singleUser : false ,
                                           chatList : response
                                       });
            
                                       socket.broadcast.emit('chat-list-response-offline',{
                                           error : false ,
                                           singleUser : true ,
                                           chatList : UserInfoResponse
                                       });
            
                                   });
                               });
                           }
                       });


           /**
           * get the user's groups list
           */

           socket.on('groups-list',(data)=>{
            

            let groupListResponse = {};
            
                           if (data.userId == '') {
            
                            groupListResponse.error = true;
                            groupListResponse.message = `User does not exits.`;
                               
                            this.io.emit('groups-list-response',groupListResponse);
            
                           }else{
            
                               helper.getGroupsList( data,(err, UserGroupInfoResponse)=>{
                                                                   
                                   console.log("Groupslist array: "+JSON.stringify(UserGroupInfoResponse[0]));
                                    
                                   let array=[];

                                   if(UserGroupInfoResponse[0]!=null)
                                     {
                                        array=UserGroupInfoResponse[0].groupsArray; 
                                     }
                                     else{
                                        array=[];
                                     }
                                   const data = {
                                    error : false,                                      
                                    groupList : array
                                   };
                                   
                                   this.io.to(socket.id).emit('groups-list-response',data);
                                      
                                       
                                   
                               });
                           }

           });

           /**
           * send the messages to the user
           */
           socket.on('add-message', (data) => {
               
               if (data.message === '') {
                   
                   this.io.to(socket.id).emit(`add-message-response`,`Message cant be empty`); 

               }else if(data.fromUserId === ''){
                   
                   this.io.to(socket.id).emit(`add-message-response`,`Unexpected error, Login again.`); 

               }else if(data.toUserId === ''){
                   
                   this.io.to(socket.id).emit(`add-message-response`,`Select a user to chat.`); 

               }else{
                   
                   let toSocketId = data.toSocketId;
                   let fromSocketId = data.fromSocketId;
                   delete data.toSocketId;
                   data.timestamp = Math.floor(new Date() / 1000);

                   helper.insertMessages(data,( error , response)=>{
                       this.io.to(toSocketId).emit(`add-message-response`,data); 
                   });

               }				
           });


           socket.on('group-message', (data) => {
            
            if (data.message === '') {
                
                this.io.to(socket.id).emit(`group-message-response`,`Message cant be empty`); 

            }else if(data.fromUserIdGroup === ''){
                
                this.io.to(socket.id).emit(`group-message-response`,`Unexpected error, Login again.`); 

            }else if(data.groupName === ''){
                
                this.io.to(socket.id).emit(`group-message-response`,`Select a group to chat.`); 

            }else{
                
                data.timestamp = Math.floor(new Date() / 1000);


                helper.insertGroupMessages(data,( error , response)=>{
                    this.io.to(data.groupName).emit(`group-message-response`,data); //emits messages to given room name
                });

            }				
        });

           /**
           * Logout the user
           */
           socket.on('logout',(data)=>{

               const userId = data.userId;
               
               helper.logout(userId , false, (error, result)=>{

                   this.io.to(socket.id).emit('logout-response',{
                       error : false
                   });

                   socket.broadcast.emit('chat-list-response',{
                       error : false ,
                       userDisconnected : true ,
                       socketId : socket.id
                   });
               });	
           });


           /**
           * sending the disconnected user to all socket users. 
           */
           socket.on('disconnect',()=>{
               socket.broadcast.emit('chat-list-response',{
                   error : false ,
                   userDisconnected : true ,
                   socketId : socket.id
               });
           });

       });

   }
   
   socketConfig(){

       this.io.use(function(socket, next) {
           let userID = socket.request._query['userId'];
             let userSocketId = socket.id;
             const data = {
                 id : userID,
                 value : {
                     $set :{
                         socketId : userSocketId,
                         online : 'Y'
                     }
                 }
             }

             helper.addSocketId( data ,(error,response)=>{
                 // socket id updated.
             });
             next();
       });

       this.socketEvents();
   }
}
module.exports = Socket;