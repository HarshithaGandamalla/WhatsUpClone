 
'use strict';

const helper = require('./helper');

class Routes{

   constructor(app){

       this.app = app;
   }


   /* creating app Routes starts */
   appRoutes(){

//    this.app.post('/search', function (request, response) {
//         console.log("in app/search: request"+request.body);
//         if (request.body.username === "") {
//             response.status(412).json({
//                 error : true,
//                 message : `username cant be empty.`
//             });
//         } else {
//             helper.getUsers(request.body),  (error,result)=>{
//                 let res = {};
//                 if (error) {
//                     res.error = true;
//                     res.list = [];
//                     response.status(404).json(res);
//                  }else{
//                 res.error = false;
//                 res.list= result;
//                 response.status(200).json(res);
//               }
//             });
//         }
//       });

       this.app.post('/usernameCheck',(request,response) =>{
        console.log("in app/usernameCheck");
        
           if (request.body.username === "") {
               response.status(412).json({
                   error : true,
                   message : `username cant be empty.`
               });
           } else {
               helper.userNameCheck( {
                   username : request.body.username.toLowerCase()
               }, (count)=>{

                   let result = {};
                   
                   if (count > 0) {
                       result.error = true;
                   } else {
                       result.error = false;
                   }
                   response.status(200).json(result);
               });
           }
       });
    // Post call for status
       this.app.post('/status',(request,response) =>{
        
                   let userId = request.body.userId;
                   let status = request.body.status;
                   let statusResponse = {}
                   if (userId == '') {
                       statusResponse.error = true;
                       statusResponse.message = `User Id cant be empty.`;
                       response.status(412).json(statusResponse);
                   }
                   else{
        
                   helper.poststatus( userId, status, (error,result)=>{
        
                              if (error || result === null) {
        
                                  statusResponse.error = true;
                                  statusResponse.message = `Server error.`;
                                  response.status(404).json(statusResponse);
                              }
                              
                              else{
                              console.log("User status response detains: "+result);
                                  statusResponse.error = false;
                                //  statusResponse.userId = result.insertedId;
                                //  statusResponse.status = result.
                                  statusResponse.message = `User status changed successfully`;
                                  response.status(200).json(statusResponse);
                              }
                              });
                    }
                });


       this.app.post('/registerUser',(request,response) =>{

           const data = {
               username : (request.body.username).toLowerCase(),
               email : request.body.email,
               password : request.body.password,
               status: "Hey there, I'm using Whatsapp!!"
           };

           console.log("email should be empty: "+data.email);

           let registrationResponse = {}

           if(data.username === ''|| data.username==null) {

               registrationResponse.error = true;
               registrationResponse.message = `username cant be empty.`;
               response.status(412).json(registrationResponse);

           }else if(data.email === ''|| data.email==null){
                           
               registrationResponse.error = true;
               registrationResponse.message = `email cant be empty.`;
               response.status(412).json(registrationResponse);

           }else if(data.password === ''|| data.password==null){
                           
               registrationResponse.error = true;
               registrationResponse.message = `password cant be empty.`;
               response.status(412).json(registrationResponse);

           }else{
               
               data.timestamp = Math.floor(new Date() / 1000);
               data.online = 'Y' ;
               data.socketId = '' ;

                  helper.registerUser( data, (error,result)=>{

                      if (error) {

                          registrationResponse.error = true;
                       registrationResponse.message = `Server error.`;
                          response.status(404).json(registrationResponse);
                      }else{

                        console.log("User registration response detains: "+result);
                          registrationResponse.error = false;
                          registrationResponse.userId = result.insertedId;
                       registrationResponse.message = `User registration successful.`;
                          response.status(200).json(registrationResponse);
                      }
               });
           }
       });

       this.app.post('/login',(request,response) =>{

           const data = {
               username : (request.body.username).toLowerCase(),
               password : request.body.password
           };

           let loginResponse = {}

           if(data.username === '' || data.username === null) {

               loginResponse.error = true;
               loginResponse.message = `username cant be empty.`;
               response.status(412).json(loginResponse);

           }else if(data.password === '' || data.password === null){
                           
               loginResponse.error = true;
               loginResponse.message = `password cant be empty.`;
               response.status(412).json(loginResponse);

           }else{

                  helper.login( data, (error,result)=>{

                      if (error || result === null) {

                          loginResponse.error = true;
                       loginResponse.message = `Server error.`;
                          response.status(404).json(loginResponse);
                      }else{
                          loginResponse.error = false;
                          loginResponse.userId = result._id;
                       loginResponse.message = `User logged in.`;
                          response.status(200).json(loginResponse);
                      }
               });
           }
       });

       this.app.post('/userSessionCheck',(request,response) =>{

           let userId = request.body.userId;
           let sessionCheckResponse = {}
           
           if (userId == '') {

               sessionCheckResponse.error = true;
               sessionCheckResponse.message = `User Id cant be empty.`;
               response.status(412).json(sessionCheckResponse);

           }else{

                  helper.userSessionCheck( { 
                      userId : userId,
                  }, (error,result)=>{
                      
                      if (error || result === null) {

                          sessionCheckResponse.error = true;
                       sessionCheckResponse.message = `Server error.`;
                          response.status(503).json(sessionCheckResponse);
                      }else{

                          sessionCheckResponse.error = false;
                          sessionCheckResponse.username = result.username;
                       sessionCheckResponse.message = `User logged in.`;
                          response.status(200).json(sessionCheckResponse);
                      }
               });
           }
       });

       this.app.post('/getMessages',(request,response) =>{

           let userId = request.body.userId;
           let toUserId = request.body.toUserId;
           let messages = {}
           
           if (userId == '') {
               messages.error = true;
               messages.message = `userId cant be empty.`;
               response.status(200).json(messages);
           }else{

                  helper.getMessages( userId, toUserId, (error,result)=>{

                     if (error) {

                          messages.error = true;
                          messages.message = `Server error.`;
                          response.status(200).json(messages);

                      }else{

                          messages.error = false;
                          messages.message = result;
                          response.status(200).json(messages);
                      }
               });
           }
       });

       this.app.post('/getGroupMessages',(request,response) =>{
       

        console.log("groupmessage request body: "+JSON.stringify(request.body));
        
        let groupName = request.body.groupName;
        let messages = {}
                   
                   if (groupName == '') {
                       messages.error = true;
                       messages.message = `groupName cant be empty.`;
                       response.status(200).json(messages);
                   }else{
        
                          helper.getGroupMessages(groupName, (error,result)=>{
        
                             if (error) {
        
                                  messages.error = true;
                                  messages.message = `Server error.`;
                                  response.status(200).json(messages);
        
                              }else{
        
                                  messages.error = false;
                                  messages.message = result;
                                  response.status(200).json(messages);
                              }
                       });
                   }
               });

       this.app.post('/registerGroup', (request,response) => {
        
         
          let username = request.body.username.toLowerCase();
          let groupName = request.body.groupName;
          let userId = request.body.userId;

          let registrationResponse = {}
          
          
          let groupsArray=[];
          groupsArray.push(groupName);

          const data = {
            username :username,
            userId:userId,
        };

      //  console.log("data object:"+JSON.stringify(data));

        if (request.body.groupName === "") {
            response.status(412).json({
                error : true,
                message : `groupName cant be empty.`
            });
        } else {

            helper.groupUserNameCheck(data, (count) => {
                
                if (count > 0) {
                   //modify exsisting groups array of user

                  helper.updateUserGroups( data ,groupName, (error,result)=>{
                                     
                                         if (error) {
                                           // console.log("Not  updated");
                                            
                                                registrationResponse.error = true;
                                                registrationResponse.message = `Server error.`;
                                                response.status(200).json(registrationResponse);
                        
                                            }else{
                        
                                             //   console.log("Succesfully updated");
                                             registrationResponse.error = false;
                                             registrationResponse.message = result;
                                             response.status(200).json(registrationResponse);
                                            }


                  });
                    

                } else {
                  
                  //console.log("No users found with name: "+data.username);
                 //insert new entry in database
                
                    const registerGroupData = {
                        username :data.username,
                        userId:data.userId,
                        groupsArray:groupsArray
                    };

                   //console.log("registerGroupData: "+JSON.stringify(registerGroupData));
                    
        
                  helper.registerGroup( registerGroupData , (error,result)=>{

                    if (error) {

                        registrationResponse.error = true;
                        registrationResponse.message = `Server error.`;
                        response.status(200).json(registrationResponse);

                    }else{

                     registrationResponse.error = false;
                     registrationResponse.message = result;
                     response.status(200).json(registrationResponse);
                    }
              });
          }
                
     });
  }
});


       this.app.get('*',(request,response) =>{
           response.sendFile(path.join(__dirname,'../dist/index.html'));
       });
       
   }

   routesConfig(){
       this.appRoutes();
   }
}
module.exports = Routes;