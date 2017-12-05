

'use strict';

class Helper{

   constructor(){

       this.Mongodb = require("./db");
       var ObjectId = require('mongodb').ObjectID;
       
   }

   /*
   * Name of the Method : userNameCheck
   * Description : To check if username is available or not.
   * Parameter : 
   *		1) data query object for MongDB
   *		2) callback function
   * Return : callback 
   */
  /**		
                 * @api {userNameCheck}		
                 * @APIGroup userNameCheck		
                 * @apidescription checks whether username is available or not				
                 * @apiparam {String} userName  Takes userName as input.                  		
                 * @apiSuccess {String} usernames present in the group or not		
                 *		
                 * @apiSuccessExample Success-Response:		
                 *     HTTP/1.1 200 OK		
                 *     {		
                 *       "error":false, 		
                 *       "message":"username available!."		
                 *     }		
                 *		
            	 *		
                 * @apiErrorExample Error-Response:		
                 *     HTTP/1.1 404 Not Found		
                 *     {		
                 *       error: true,		
                 *       Message: "userNameName cant be empty."		
                 *     }		
                 */

   userNameCheck(data,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           console.log("usernamecheck: "+JSON.stringify(data));
           db.collection('users').find(data).count( (err, result) => {
               db.close();
               callback(result);
           });
       });
   }

/**		
                 * @api {changePassword}		
                 * @APIGroup changepassword		
                 * @apidescription changes the password	and updates it in the database			
                 * @apiparam {String} password.                  		
                 * @apiSuccess {String} updates the new password in the databaes	
                 *		
                 * @apiSuccessExample Success-Response:		
                 *     HTTP/1.1 200 OK		
                 *     {		
                 *       "error":false, 		
                 *       "message":"password updated"		
                 *     }		
                 *		
            	 *		
                 * @apiErrorExample Error-Response:		
                 *     HTTP/1.1 404 Not Found		
                 *     {		
                 *       error: true,		
                 *       Message: "password canot be empty"		
                 *     }		
                 */
changePassword(userId, password, callback){    
    this.Mongodb.onConnect( (db,ObjectID) => {
    //console.log("Status : .........."+status);
    db.collection('users').update( { _id : ObjectID(userId)} ,{$set: {'password':password} } ,(err, result) => {
    //db.collection('users').findAndModify( data ,[], {$set: {'status': status}},{},(err, result) => {
            db.close();
            callback(err,result);
        });
    });
}

updateprofilepic(userId, url, callback){    
    this.Mongodb.onConnect( (db,ObjectID) => {
    //console.log("Status : .........."+status);
    db.collection('users').update( { _id : ObjectID(userId)} ,{$set: {'img':url} } ,(err, result) => {
    //db.collection('users').findAndModify( data ,[], {$set: {'status': status}},{},(err, result) => {
            db.close();
            callback(err,result);
        });
    });
}
   /*
   * Name of the Method : login
   * Description : login the user.
   * Parameter : 
   *		1) data query object for MongDB
   *		2) callback function
   * Return : callback 
   */
   login(data,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('users').findAndModify( data ,[], {$set: {'online': 'Y'}},{},(err, result) => {
               db.close();
               callback(err,result.value);
           });
       });
   }

   /*
   * Name of the Method : registerUser
   * Description : register the User
   * Parameter : 
   *		1) data query object for MongDB
   *		2) callback function
   * Return : callback 
   */
   registerUser(data,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
      
           db.collection('users').insertOne(data, (err, result) =>{
               db.close();
               console.log("regnuser");
               console.log(JSON.stringify(result));
               callback(err,result);
           });
       });
   }

    /*
   * Name of the Method : groupUserNameCheck
   * Description : To check is the user is already in groups collection of database.
   * Parameter : 
   *		1) data query object for MongDB
   *		2) callback function
   * Return : callback 
   */
   groupUserNameCheck(data,callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groups').find(data).count( (err, result) => {
            db.close();
            callback(result);
        });
    });
}

   /*
   * Name of the Method : UserIdCheckInGroup
   * Description : To check is the group is already in usergroup collection of database.
   * Parameter : 
   *		1) data query object for MongDB
   *		2) callback function
   * Return : callback 
   */
  UserIdCheckInGroup(data,callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groupusers').find(data).count( (err, result) => {
            db.close();
            callback(result);
        });
    });
}

fetchGroups(data,groupName,callback){
    this.Mongodb.onConnect( (db,ObjectID) => {

        db.collection("groups").findOneAndUpdate(data,{$pull: {groupsArray:groupName}},(err, result)=> {
            console.log(result);
            console.log("Result of fetch groups: "+JSON.stringify(result));
            
            db.close();
            callback(result);
            
          });
    });
}

pullUserFromGroup(data,val,callback){
    this.Mongodb.onConnect( (db,ObjectID) => {


        db.collection("groupusers").findOneAndUpdate(data,{$pull: {userIdArray:val}},(err, result)=> {            
            db.close();
            callback(result);
            
          });
    });
}

updateUserGroups(findby,groupName,callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groups').findAndModify(findby ,[], {$addToSet: {'groupsArray': groupName}},{upsert:true,new:true},(err, result) => {
            db.close();
            callback(err,result.value);
        });
    });
}

updateGroupUsersList(findby,val,callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groupusers').findAndModify(findby ,[], {$push:  {'userIdArray':{$each:val} }},{upsert:true,new:true},(err, result) => {
            db.close();
            callback(err,result.value);
        });
    });
}

    /*
   * Name of the Method : registerGroup
   * Description : Add user to Group
   * Parameter : 
   *		1) data query object for MongoDB
   *		2) callback function
   * Return : callback 
   */
  registerGroup(data,callback){

    //check if user is already associated wuth a group list
    console.log("username: "+data.username);
    console.log("userId: "+data.userId);

    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groups').insertOne(data, (err, result) =>{
            db.close();
            callback(err,result);
        });
    });
}

    /*
   * Name of the Method : registerUserId
   * Description : Add user to Group
   * Parameter : 
   *		1) data query object for MongoDB
   *		2) callback function
   * Return : callback 
   */
  registerUserId(data,callback){
    
        //check if user is already associated wuth a group list
        console.log("groupName: "+data.groupName);
    
        this.Mongodb.onConnect( (db,ObjectID) => {
            db.collection('groupusers').insertOne(data, (err, result) =>{
                db.close();
                callback(err,result);
            });
        });
    }
       
   /*
   * Name of the Method : userSessionCheck
   * Description : to check if user is online or not.
   * Parameter : 
   *		1) data query object for MongDB
   *		2) callback function
   * Return : callback 
   */
   userSessionCheck(data,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('users').findOne( { _id : ObjectID(data.userId) , online : 'Y'}, (err, result) => {
               db.close();
               callback(err,result);
           });
       });
   }


   /*
   * Name of the Method : getUserInfo
   * Description : to get information of single user.
   * Parameter : 
   *		1) userId of the user
   *		2) callback function
   * Return : callback 
   */
   getUserInfo(userId,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('users').findOne( { _id : ObjectID(userId)}, (err, result) => {
               db.close();
               callback(err,result);
           });
       });
   }

   /*
   * Name of the Method : addSocketId
   * Description : Updates the socket id of single user.
   * Parameter : 
   *		1) userId of the user
   *		2) callback function
   * Return : callback 
   */
   addSocketId(data,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('users').update( { _id : ObjectID(data.id)}, data.value ,(err, result) => {
               db.close();
               callback(err,result.result);
           });
       });
   }
   
   /*
   * Name of the Method : getChatList
   * Description : To get the list of online user.
   * Parameter : 
   *		1) userId (socket id) of the user
   *		2) callback function
   * Return : callback 
   */
   getChatList(userId, callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('users').find({'online':'Y' , socketId : { $ne : userId }}).toArray( (err, result) => {
           db.close();
               callback(err,result);
           });
       });
   }

   /*
   * Name of the Method : getUsers
   * Description : To get the list of all users.
   * Parameter : 
   *		1) userId (socket id) of the user
   *		2) callback function
   * Return : callback 
   */
   getUsers(name, callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('users').find({ 'username': { '$regex' : name} }).toArray( (err, result) => {
        db.close();
            callback(err,result);
        });
    });
}


   getOfflineChatList(userId, callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        
        db.collection('users').find({'online':'N' , socketId : { $ne : userId }}).toArray( (err, result) => {
        db.close();
            callback(err,result);
        });
    });
}


  /*
   * Name of the Method : getGroupsList
   * Description : To get the list groups the user belongs to.
   * Parameter : 
   *		1) userId of the user
   *		2) callback function
   * Return : callback 
   */
  getGroupsList(userId, callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groups').find(userId).toArray( (err, result) => {
        db.close();
            callback(err,result);
        });
    });
}

/*
   * Name of the Method : getMembers
   * Description : To get the  users list of group.
   * Parameter : 
   *		1) groupName of group
   *		2) callback function
   * Return : callback 
   */
  getMembers(groupName, callback){
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groupusers').find(groupName).toArray( (err, result) => {
        db.close();
            callback(err,result);
        });
    });
}

   /*
   * Name of the Method : insertMessages
   * Description : To insert a new message into messages collection in mongo.
   * Parameter : 
   *		1) data comprises of message,fromId,toId
   *		2) callback function
   * Return : callback 
   */
   insertMessages(data,callback){
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('messages').insertOne(data, (err, result) =>{
               db.close();
               callback(err,result);
           });
       });
   }
   getprofile(data,callback){
        this.Mongodb.onConnect( (db,ObjectID) => {
            db.collection('users').findOne( { _id : ObjectID(data.userId)}, (err, result) => {
                db.close();
                callback(err,result);
            });
        });
    }

    /*
   * Name of the Method : insertGroupMessages
   * Description : To insert a new message into groupmessages collection in mongo.
   * Parameter : 
   *		1) data comprises of message,groupName
   *		2) callback function
   * Return : callback 
   */
  insertGroupMessages(data,callback){
      console.log("Trying to insert into groupmessages collection");
    this.Mongodb.onConnect( (db,ObjectID) => {
        db.collection('groupmessages').insertOne(data, (err, result) =>{
            db.close();
            callback(err,result);
        });
    });
}

   /*
   * Name of the Method : getMessages
   * Description : To fetch messages from DB between two users.
   * Parameter : 
   *		1) userId, toUserId
   *		2) callback function
   * Return : callback 
   */
   getMessages(userId, toUserId, callback){

       const data = {
           '$or' : [
               { '$and': [
                       {
                           'toUserId': userId
                       },{
                           'fromUserId': toUserId
                       }
                   ]
               },{
                   '$and': [ 
                       {
                           'toUserId': toUserId
                       }, {
                           'fromUserId': userId
                       }
                   ]
               },
           ]
       };
       this.Mongodb.onConnect( (db,ObjectID) => {
           db.collection('messages').find(data).sort({'timestamp':1}).toArray( (err, result) => {
           db.close();
               callback(err,result);
           });
       });
   }


   getGroupMessages(groupName, callback){
    
           const data = {
              'groupName':groupName
           };

           this.Mongodb.onConnect( (db,ObjectID) => {
               db.collection('groupmessages').find(data).sort({'timestamp':1}).toArray( (err, result) => {
               db.close();
                   callback(err,result);
               });
           });
       }

       

   /*
   * Name of the Method : logout
   * Description : To logout the loggedin user.
   * Parameter : 
   *		1) userID
   *		2) callback function
   * Return : callback 
   */
   logout(userID,isSocketId,callback){
       
       const data = {
             $set :{
                 online : 'N'
             }
         };
       this.Mongodb.onConnect( (db,ObjectID) => {
           
           let condition = {};
           if (isSocketId) {
               condition.socketId = userID;
           }else{
               condition._id = ObjectID(userID);
           }


           db.collection('users').update( condition, data ,(err, result) => {
               db.close();
               callback(err,result.result);
           });
       });
   }

  /*
   * Name of the Method : updateStatus
   * Description : To post the status of the user.
   * Parameter : 
   *		1) userID
   *		2) status
   *        3) callback
   * Return : callback 
   */
  updateStatus(userId, status, callback){    
    this.Mongodb.onConnect( (db,ObjectID) => {
    //console.log("Status : .........."+status);
    db.collection('users').update( { _id : ObjectID(userId)} ,{$set: {'status':status} } ,(err, result) => {
    //db.collection('users').findAndModify( data ,[], {$set: {'status': status}},{},(err, result) => {
            db.close();
            callback(err,result);
        });
    });
}

}

module.exports = new Helper();
