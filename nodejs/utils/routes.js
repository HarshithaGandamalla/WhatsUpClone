 
'use strict';

const helper = require('./helper');

class Routes{

   constructor(app){

       this.app = app;
   }


   /* creating app Routes starts */
   appRoutes(){

<<<<<<< HEAD
       this.app.post('/usernameCheck',(request,response) =>{
       // console.log("in app/usernameCheck");
  //     console.log("User session request: "+JSON.stringify(request));
       
=======
       this.app.post('/usernameCheck',(request,response) =>{       
>>>>>>> Mocked backed for testing and added delete from group functionality
           if (request.body.username === "" || request.body.username==undefined ) {
               response.status(200).json({
                   error : true,
                   message : `username cant be empty.`
               });
           } else {
               helper.userNameCheck( {
                   username : request.body.username.toLowerCase()
               }, (count)=>{
<<<<<<< HEAD

            //    console.log("User name response: "+JSON.stringify(result));
=======
>>>>>>> Mocked backed for testing and added delete from group functionality
                
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
       this.app.post('/updateStatus',(request,response) =>{
        
                   let userId = request.body.userId;
                   let status = request.body.status;
                   let statusResponse = {}
                   //console.log("In routes req: " +request);
                   helper.updateStatus( userId, status, (error,result)=>{
        
                              if (error || result === null||result===undefined) {
                                console.log(" status error: ");
                                
                                  statusResponse.error = true;
                                  statusResponse.message = `Server error in routes.`;
                                  response.status(200).json(statusResponse);
                              }
                              else{
                              console.log("User status response details: "+result);
                                  statusResponse.error = false;
                                  statusResponse.message = `User status changed successfully`;
                                  response.status(200).json(statusResponse);
                              }
                              });
                            
                });
    
       this.app.post('/registerUser',(request,response) =>{


            let username = request.body.username;
            let email = request.body.email;
            let password = request.body.password;
            let satus =  "Hey there, I'm using Whatsapp!!";

           let registrationResponse = {}
<<<<<<< HEAD

        //   console.log("request.body.email: "+JSON.stringify(request.body));
        //   console.log("email "+email);
=======
>>>>>>> Mocked backed for testing and added delete from group functionality
           

           if(typeof username=='undefined'||username==null||username=="") {

            console.log("USername not defined!");
               registrationResponse.error = true;
               registrationResponse.message = `username cant be empty.`;
               response.status(200).json(registrationResponse);

           }else if(email ==''||email==undefined||email==null){
                           
               registrationResponse.error = true;
               registrationResponse.message = `email cant be empty.`;
               response.status(200).json(registrationResponse);

           }else if(password === ''||password===undefined||password===null){
                           
               registrationResponse.error = true;
               registrationResponse.message = `password cant be empty.`;
               response.status(200).json(registrationResponse);

           }else{
               
            
           const data = {
            username : (request.body.username).toLowerCase(),
            email : request.body.email,
            password : request.body.password,
            status: "Hey there, I'm using Whatsapp!!"
        };

               data.timestamp = Math.floor(new Date() / 1000);
               data.online = 'Y' ;
               data.socketId = '' ;

                  helper.registerUser( data, (error,result)=>{

                      if (error) {

                          registrationResponse.error = true;
                       registrationResponse.message = `Server error.`;
                          response.status(200).json(registrationResponse);
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


        let username = request.body.username;
        let password = request.body.password;

         

           let loginResponse = {}

           if(username === '' || username === null||username==undefined) {

               loginResponse.error = true;
               loginResponse.message = `username cant be empty.`;
               response.status(200).json(loginResponse);

           }else if(password === '' ||password==undefined|| password === null){
                           
               loginResponse.error = true;
               loginResponse.message = `password cant be empty.`;
               response.status(200).json(loginResponse);

           }else{

            const data = {
                username : (request.body.username).toLowerCase(),
                password : request.body.password
            };
                  helper.login( data, (error,result)=>{

                      if (error || result === null) {

                          loginResponse.error = true;
                       loginResponse.message = `Server error.`;
                          response.status(200).json(loginResponse);
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
<<<<<<< HEAD
           
           //console.log("User session request: "+JSON.stringify(request));
=======
        
>>>>>>> Mocked backed for testing and added delete from group functionality

           if (userId == ''||userId===undefined) {

               sessionCheckResponse.error = true;
               sessionCheckResponse.message = `User Id cant be empty.`;
               response.status(200).json(sessionCheckResponse);

           }else{

                  helper.userSessionCheck( { 
                      userId : userId,
                  }, (error,result)=>{
                      if (error || result === null) {

                          sessionCheckResponse.error = true;
                       sessionCheckResponse.message = `Server error.`;
                          response.status(200).json(sessionCheckResponse);
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
<<<<<<< HEAD
       

      //  console.log("groupmessage request body: "+JSON.stringify(request.body));
        
=======
>>>>>>> Mocked backed for testing and added delete from group functionality
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

        if (request.body.groupName === "") {
            response.status(200).json({
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

this.app.post('/deregisterGroup', (request,response) => {
    
     
      let username = request.body.username.toLowerCase();
      let groupName = request.body.groupName;
      let userId = request.body.userId;
      
      let deregistrationResponse = {}
      
      
      let groupsArray=[];
      groupsArray.push(groupName);

      const data = {
        username :username,
        userId:userId,
    };

    console.log("Deregistering "+username+" "+userId);

    if (request.body.groupName === "") {
        response.status(200).json({
            error : true,
            message : `groupName cant be empty.`
        });
    } else {

        helper.fetchGroups(data,groupName, (count) => {
            
           console.log("Fetched: "+count);

            
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
