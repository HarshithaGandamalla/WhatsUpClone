 
'use strict';

const helper = require('./helper');
const async = require('async');
class Routes{

   constructor(app){

       this.app = app;
   }


   /* creating app Routes starts */
   appRoutes(){

       this.app.post('/usernameCheck',(request,response) =>{       
           if (request.body.username === "" || request.body.username==undefined ) {
               response.status(200).json({
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

                this.app.post('/updatePic',(request,response) =>{
                    
                                console.log("Posted Request");
                               let userId = request.body.userId;
                               let url = request.body.url;
                               console.log("Routes.JS");
                               console.log(url);
                               let picResponse = {}
                               //console.log("In routes req: " +request);
                               helper.updatePic( userId, url, (error,result)=>{
                    
                                          if (error || result === null||result===undefined) {
                                            console.log(" status error: ");
                                            
                                              picResponse.error = true;
                                              picResponse.message = `Server error in routes.`;
                                              response.status(200).json(picResponse);
                                          }
                                          else{
                                          console.log("User status response details: "+result);
                                              picResponse.error = false;
                                              picResponse.message = `User status changed successfully`;
                                              response.status(200).json(picResponse);
                                          }
                                          });
                                        
                            });
            
    
    // Post call for status
       this.app.post('/getprofile',(request,response) =>{
        console.log("Hello ");

        let userId = request.body.userId;
        let getProfileResponse = {}


        if (userId == ''||userId===undefined) {

            getProfileResponse.error = true;
            getProfileResponse.message = `User Id cant be empty.`;
            response.status(200).json(getProfileResponse);

        }else{

               helper.getprofile( { 
                   userId : userId,
               }, (error,result)=>{
                   
                   if (error || result === null) {

                    getProfileResponse.error = true;
                    getProfileResponse.message = `Server error.`;
                       response.status(200).json(getProfileResponse);
                   }else{

                    console.log(JSON.stringify(result));
                    getProfileResponse.error = false;
                    getProfileResponse.username = result.username;
                    getProfileResponse.message = `User logged in.`;
                    getProfileResponse.imgurl = result.img;
                    response.status(200).json(getProfileResponse);
                   }
            });
        }
                    
    });

        this.app.post('/updateProfilepic',(request,response) =>{
            
                        // console.log(JSON.stringify(request));
                        let filename = request.body.filename;
                        console.log("UUUUUUUUUUUUUUUUUUUUUU");
                        console.log(filename);
                        let file = request.body.file;
                        let userId = request.body.userId;

                        console.log("UUUUUUUUUUUUUUUUUUUUUU");
                        console.log(userId);
                        let profilepicResponse = {}
                        console.log("Jay IS AN IDIOT");
                        var AWS = require('aws-sdk');
                        AWS.config.update({ accessKeyId: 'AKIAIVBW6BO5TNNGUNCQ', secretAccessKey: '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' });
                        var s3 = new AWS.S3({region: 'us-west-1'});
                        var bucketName= "profilepic"+ userId;
                        var fs = require('fs')
                        var input = fs.createReadStream(file);
                        const bucketParams = {
                            Bucket : bucketName
                         };  

                        s3.headBucket(bucketParams, function(err, data) {
                            console.log("getting access to bucket");
                            if (err) {
                                    console.log("ErrorHeadBucket", err)
                                    s3.createBucket(bucketParams, function(err, data) {
                                        if (err) {
                                            console.log("Error", err);
                                        } else {
                                            console.log("Created Bucket Successfully");
                                        }
                                });
                            } 
                        })
                        var img_data = {
                                        Bucket: bucketName, 
                                        Key: userId+"profilepic", 
                                        ACL: 'public-read', 
                                        Body: image
                                    };

                        s3.putObject(img_data, function (err, data) {
                            if (err) {
                                console.log("Error uploading image: ", err);
                                // callback(err, null)
                            } else {
                                console.log("Successfully uploaded image on S3");
                                console.log(data);
                                // callback(null, data)
                            }
                        })  
                        // s3.upload(img_data, function(err, res){
                        //    if (err) 
                        //      { 
                        //         console.log('Error uploading data'); 
                        //         console.log(err);
                        //      } else {
                        //        console.log('succesfully uploaded the image!');
                        //        console.log(res);
                        //      }
                        //  });
                        var urlParams = {Bucket: bucketName, Key: userId+"profilepic"};
                        s3.getSignedUrl('getObject', urlParams, function(err, url){
                            console.log('the url of the image is', url);
                            helper.updateprofilepic( userId, url, (error,result)=>{
                                
                                if (error || result === null||result===undefined) {
                                console.log(" status error: ");
                                
                                    profilepicResponse.error = true;
                                    profilepicResponse.message = `Server error in routes.`;
                                    response.status(200).json(profilepicResponse);
                                }
                                else{
                                console.log("User status response details: "+result);
                                    profilepicResponse.error = false;
                                    profilepicResponse.message = `User profile pic changed successfully`;
                                    profilepicResponse.url = url;
                                    response.status(200).json(profilepicResponse);
                                }

                            });

                        });
                                 
        });
    
       this.app.post('/registerUser',(request,response) =>{


            let username = request.body.username;
            let email = request.body.email;
            let password = request.body.password;
            let status =  "Hey there, I'm using Whatsapp!!";
            

           let registrationResponse = {}
           

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
            status: "Hey there, I'm using Whatsapp!!",
            img: "http://www.cdn.innesvienna.net//Content/user-default.png"
        };

               data.timestamp = Math.floor(new Date() / 1000);
               data.online = 'Y' ;
               data.socketId = '' ;
               

                helper.registerUser( data, (error,result)=>{
                    console.log("result when reg:  "+JSON.stringify(result));

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
      
      
    //   let groupsArray=[];
    //   groupsArray.push(groupName);

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

        helper.fetchGroups(data,groupName, (result) => {
            
            //pulled from collection
           console.log("Fetched: "+JSON.stringify(result));
            
      });
}
});

this.app.post('/deregisterUsers', (request,response) => {
    
     
      let username = request.body.username.toLowerCase();
      let groupName = request.body.groupName;
      let userId = request.body.userId;
      
      let deregistrationResponse = {}


      const pullvalue={
          "username":username,
          "userId":userId
      }
      
     

      const data = {
        groupName :groupName,
    };

    //console.log("Deregistering "+username+" "+userId);

    if (request.body.groupName === "") {
        response.status(200).json({
            error : true,
            message : `groupName cant be empty.`
        });
    } else {

        helper.pullUserFromGroup(data,pullvalue, (result) => {
            
            //pulled from collection return original i believe
           console.log("Fetched: "+JSON.stringify(result));
            
      });
}
});


  this.app.post('/addGroupUsers',(request,response) =>{
    
    let userarray= request.body.userarray;
    let groupName = request.body.groupName;
    
    let messages = {}
    let registrationResponse = {}

    // let array=[];
    // array=userarray;
    


    console.log("Userarray: "+userarray);
    // const val = {

    //     "username":username,
    //     "userId":userId
    // }
    // let usersArray=[];
    // usersArray.push(val);

    const data = {
        groupName:groupName
  };
               
               if (groupName == ''||groupName==undefined||groupName==null) {
                   messages.error = true;
                   messages.message = `groupName cant be empty.`;
                   response.status(200).json(messages);
               }else{
                helper.UserIdCheckInGroup(data, (count) => {
                    
                    if (count > 0) {
                        console.log("group revelant userid array found");
                       //modify exsisting groups array of user
                       userarray.forEach(element => {
                        
                        let val={
                            "username":element.username,
                            "userId":element.userId 
                        }

                      helper.updateGroupUsersList( data ,val, (error,result)=>{
                                         
                       
                        
                             if (error) {
                                               // console.log("Not  updated");
                                                
                                      registrationResponse.error = true;
                                     registrationResponse.message = `Server error.`;
                                     response.status(200).json(registrationResponse);
                            
                                    }else{
                            
                                                 // console.log("Succesfully updated");
                                     registrationResponse.error = false;
                                        registrationResponse.message = result;
                                     response.status(200).json(registrationResponse);
                                    }
    
    
                      });
                        
                    });
    
                    } else {
                      
                      console.log("No group relevant users found: ");
                     //insert new entry in database
                    
                        const registerUserData = {
                            userIdArray:userarray,
                            groupName:groupName
                        };
    
                        
            
                      helper.registerUserId( registerUserData , (error,result)=>{
    
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

           this.app.post('/fetchMembers',(request,response) =>{
            
                let groupName = request.body.groupName;
                       
                       const data = {
                        groupName:groupName
                  };

                  let messages = {}
                  let registrationResponse = {}


                       if (groupName == ''||groupName==undefined||groupName==null) {
                           messages.error = true;
                           messages.message = `groupName cant be empty.`;
                           response.status(200).json(messages);
                       }else{
            
                              helper.getMembers(data, (error,result)=>{
            
                                if (error){
                                    
                                            registrationResponse.error = true;
                                            registrationResponse.message = `Server error.`;
                                            response.status(200).json(registrationResponse);
                                    
                                        }else{
                                    
                                             console.log("Fetched members result: "+JSON.stringify(result));
                                             registrationResponse.error = false;
                                             registrationResponse.message = result;
                                             response.status(200).json(registrationResponse);
                                         }
                           });
                       }
                   });



       this.app.get('*',(request,response) =>{
        let userId = request.body.userId;
         helper.logout(userId,(error,result)=>{
                              
                             if (error) {
                
                                    console.log("Error logging out on *");
                
                                }else{
                
                                    console.log("Successfully logged out on  *");
                                        
                                 }
         });       
           response.sendFile(path.join(__dirname,'../dist/index.html'));
       });
       
   }

   routesConfig(){
       this.appRoutes();
   }
}
module.exports = Routes;
