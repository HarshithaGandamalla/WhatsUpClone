

const chai = require('chai');
var expect  = require('chai').expect;

chai.use(require('chai-http'));

var request = require('request');

var should = require('should');
  

 describe(' for user registration',function(){
     
    it('should register user when new user with valid parameters is passed', function() {
        return chai
            .request('http://localhost:4000')
            .post('/registerUser')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {
                "email":"becky4495@gmail.com",
                "password":"whitec",
                "username":"becky"                
            })
            .then(function(res) {
                expect(res).to.have.status(200);
                
                // res.body.SUCCESS.name.should.equal('Java');

                // expect(res.body.success).to.equal(true);
              });
              done();
    });
    
    it('should not register user when email id is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/registerUser')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {
                "password":"whitec",
                "username":"xx"
          })
            .then(function(res) {
              //  expect(res).to.have.status(412);
                expect(res.body.message).to.equal("email cant be empty");
                
                // res.body.SUCCESS.name.should.equal('Java');

                // expect(res.body.success).to.equal(true);
              });
              done();
    });
    
    
       

    });


    describe(' for user login',function(){
        
       it('should login user when  valid parameters are passed', function() {
           return chai
               .request('http://localhost:4000')
               .post('/registerUser')
               // .field('myparam' , 'test')
               //.set('content-type', 'application/x-www-form-urlencoded')
               .send( {
                   "username":"becky",                
                   
                   "password":"whitec"
               })
               .then(function(res) {
                   expect(res).to.have.status(200);
                   
                   // res.body.SUCCESS.name.should.equal('Java');
   
                   // expect(res.body.success).to.equal(true);
                 });
                 done();
       });

    });

    describe(' for getting messages from one user to another',function(){
        
       it('should get messages from one user to another', function() {
           return chai
               .request('http://localhost:4000')
               .post('/getMessages')
               // .field('myparam' , 'test')
               //.set('content-type', 'application/x-www-form-urlencoded')
               .send( {

                "userId" :"59fbd21d034f29380cf0024a",
                "toUserId" : "59fbd1ed034f29380cf00249"
               
                
                
               })
               .then(function(res) {
                   expect(res).to.have.status(200);
                   
                   // res.body.SUCCESS.name.should.equal('Java');
   
                   // expect(res.body.success).to.equal(true);
                 });
                 done();
       });

    });



    describe(' for getting group messages',function(){
        
       it('should get messages from the group', function() {
           return chai
               .request('http://localhost:4000')
               .post('/getGroupMessages')
               // .field('myparam' , 'test')
               //.set('content-type', 'application/x-www-form-urlencoded')
               .send( {
               
                "groupName":"SE"
                
               })
               .then(function(res) {
                   expect(res).to.have.status(200);
                   
                   // res.body.SUCCESS.name.should.equal('Java');
   
                   // expect(res.body.success).to.equal(true);
                 });
                 done();
       });

    });

    describe(' for group registration',function(){
        
       it('should register in a group', function() {
           return chai
               .request('http://localhost:4000')
               .post('/getGroupMessages')
               // .field('myparam' , 'test')
               //.set('content-type', 'application/x-www-form-urlencoded')
               .send( {
               
                
                "username" : "dimpu",
                "groupName" : "SE",
                "userId" : "59ffe4201f33fe33c839aeba"
                                 
               })
               .then(function(res) {
                   expect(res).to.have.status(200);
                   
                   // res.body.SUCCESS.name.should.equal('Java');
   
                   // expect(res.body.success).to.equal(true);
                 });
                 done();
       });

    });

   


    
       

    

    


   

   
 