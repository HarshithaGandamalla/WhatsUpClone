 
'use strict';

const helper = require('./helper');

class Routes{

   constructor(app){

       this.app = app;
   }


   /* creating app Routes starts */
   appRoutes(){

       this.app.post('/usernameCheck',(request,response) =>{

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

    

       this.app.post('/registerUser',(request,response) =>{

           const data = {
               username : (request.body.username).toLowerCase(),
               email : request.body.email,
               password : request.body.password
           };

           let registrationResponse = {}

           if(data.username === '') {

               registrationResponse.error = true;
               registrationResponse.message = `username cant be empty.`;
               response.status(412).json(registrationResponse);

           }else if(data.email === ''){
                           
               registrationResponse.error = true;
               registrationResponse.message = `email cant be empty.`;
               response.status(412).json(registrationResponse);

           }else if(data.password === ''){
                           
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