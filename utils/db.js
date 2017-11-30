"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');
 
class Db{
 
	constructor(){
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
		this.mongoURL = `mongodb://abc:abc@ds119565.mlab.com:19565/whatsappse`;
	}
 
	onConnect(callback){
		this.mongoClient.connect(this.mongoURL, (err, db) => {
			assert.equal(null, err);
			callback(db,this.ObjectID);
		});
	}
}
module.exports = new Db();