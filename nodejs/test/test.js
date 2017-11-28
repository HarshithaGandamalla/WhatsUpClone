

const chai = require('chai');
var expect  = require('chai').expect;

chai.use(require('chai-http'));

var request = require('request');

var should = require('should');
  
describe('login user',function(){
    
   it('when  valid parameters are passed', function() {
       return chai
           .request('http://localhost:4000')
           .post('/login')
           .send( {
               "password":"whitec",
               "username":"becky",               
           })
           .then(function(res) {
               expect(res).to.have.status(200);
               
               // res.body.SUCCESS.name.should.equal('Java');

               // expect(res.body.success).to.equal(true);
             });
             done();
   });


   it('not when username is not entered', function() {
    return chai
        .request('http://localhost:4000')
        .post('/login')
        .send( {
            "password":"whitec",
      })
        .then(function(res) {

          //  expect(res).to.have.status(200);
            expect(res.body.message).to.equal("username cant be empty.");
            
          
          });
          done();
});

 it('not when  password is not entered', function() {
    return chai
        .request('http://localhost:4000')
        .post('/login')
        .send( {
            "username":"manisha"
      })
        .then(function(res) {

          //  expect(res).to.have.status(200);
            expect(res.body.message).to.equal("password cant be empty.");
            
          
          });
          done();
});
});


 describe(' for user registration',function(){
     
    it('should register user when new user with valid parameters is passed', function() {
        return chai
            .request('http://localhost:4000')
            .post('/registerUser')
            .send( {
                "email":"becky4495@gmail.com",
                "password":"whitec",
                "username":"becky"                
            })
            .then(function(res) {
                expect(res).to.have.status(200);
              });
              done();
    });
    
    it('should not register user when user id is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/registerUser')
            .send( {
                "password":"whitec",
                "email":"email@gmail.com"
          })
            .then(function(res) {
                expect(res.body.message).to.equal("username cant be empty.");              
              });
              done();
    });


    it('should not register user when email id is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/registerUser')
            .send( {
                "password":"whitec",
                 "username":"becky"
          })
            .then(function(res) {
                expect(res.body.message).to.equal("email cant be empty.");
              });
              done();
    });

    it('should not register user when password is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/registerUser')
            .send( {
                "email":"whitec@gmail.com",
                 "username":"becky"
          })
            .then(function(res) {
                expect(res.body.message).to.equal("password cant be empty.");              
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

       it('should not send messages when from userid is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/getMessages')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {

            //  "userId" :"59fbd21d034f29380cf0024a",
             "toUserId" : "59fbd1ed034f29380cf00249"
            
             
             
            })
            .then(function(res) {
                expect(res).to.have.status(200);
                
                // res.body.SUCCESS.name.should.equal('Java');

                // expect(res.body.success).to.equal(true);
              });
              done();
    });
    
    it('should not send messages when to userid is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/getMessages')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {

             "userId" :"59fbd21d034f29380cf0024a",
            //  "toUserId" : "59fbd1ed034f29380cf00249"
            
             
             
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

       it('should get messages from the group', function() {
        return chai
            .request('http://localhost:4000')
            .post('/getGroupMessages')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {
            
             
             
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

    //    it('should not register in a group when username is not entered', function() {
    //     return chai
    //         .request('http://localhost:4000')
    //         .post('/getGroupMessages')
    //         // .field('myparam' , 'test')
    //         //.set('content-type', 'application/x-www-form-urlencoded')
    //         .send( {
            
             
             
    //          "groupName" : "SE",
    //          "userId" : "59ffe4201f33fe33c839aeba"
                              
    //         })
    //         .then(function(res) {
    //             expect(res).to.have.status(200);
                
    //             // res.body.SUCCESS.name.should.equal('Java');

    //             // expect(res.body.success).to.equal(true);
    //           });
    //           done();
    // });

    it('should not register in a group when groupname is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/getGroupMessages')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {
             "username": "dimpu", 
             "userId" : "59ffe4201f33fe33c839aeba"          
            })
            .then(function(res) {
                expect(res).to.have.status(200);
                
                // res.body.SUCCESS.name.should.equal('Java');

                // expect(res.body.success).to.equal(true);
              });
              done();
    });

    it('should not register in a group when groupname is not entered', function() {
        return chai
            .request('http://localhost:4000')
            .post('/getGroupMessages')
            // .field('myparam' , 'test')
            //.set('content-type', 'application/x-www-form-urlencoded')
            .send( {
            
             
             "username": "dimpu",
            "groupName" : "SE"
             
                              
            })
            .then(function(res) {
                expect(res).to.have.status(200);
                
                // res.body.SUCCESS.name.should.equal('Java');

                // expect(res.body.success).to.equal(true);
              });
              done();
    });

    });

    describe('user session check',function(){
        
    //    it('pass when valid parameters are passed', function() {
    //        return chai
    //            .request('http://localhost:4000')
    //            .post('/userSessionCheck')
    //            .send( {
    //             "userId" :"59fbd21d034f29380cf0024a"
    //            })
    //            .then(function(res) {
    //                expect(res).to.have.status(200);
                   
    //                // res.body.SUCCESS.name.should.equal('Java');
    //                expect(res.body.message).to.equal('User logged in.');
                   
    //              });
    //              done();
    //    });

         
    //    it('not pass when invalid parameters are passed', function() {
    //     return chai
    //         .request('http://localhost:4000')
    //         .post('/userSessionCheck')
    //         .send( {
             
    //         })
    //         .then(function(res) {
    //            // expect(res).to.have.status(200);
                
    //             // res.body.SUCCESS.name.should.equal('Java');
    //             expect(res.body.message).to.equal('User Id cant be empty.');
                
    //           });
    //           done();
    // });

    }); 

    xdescribe('user status check',function(){
        
    //    it('pass when valid parameters are passed', function() {
    //        return chai
    //            .request('http://localhost:4000')
    //            .post('/status')
    //            .send( {
    //             "userId" :"59fbd21d034f29380cf0024a",
    //             "status":"Hey there! I am using whatsapp!! buhaha"
    //            })
    //            .then(function(res) {
    //                expect(res).to.have.status(200);
                   
    //                // res.body.SUCCESS.name.should.equal('Java');
    //             //    expect(res.body.message).to.equal('User logged in.');
                   
    //              });
    //              done();
    //    });

    //    it('should not pass when userId is not entered', function() {
    //     return chai
    //         .request('http://localhost:4000')
    //         .post('/status')
    //         .send( {
             
    //             "userId" :"59fbd21d034f29380cf0024a"
             
    //         })
    //         .then(function(res) {
    //             expect(res).to.have.status(200);
                
    //             // res.body.SUCCESS.name.should.equal('Java');
    //          //    expect(res.body.message).to.equal('User logged in.');
                
    //           });
    //           done();
    // });
    

    // it('should not pass when status is not entered', function() {
    //     return chai
    //         .request('http://localhost:4000')
    //         .post('/status')
    //         .send( {
            
    //          "status":"Hey there! I am using whatsapp!! buhaha"
    //         })
    //         .then(function(res) {
    //             expect(res).to.have.status(200);
                
    //             // res.body.SUCCESS.name.should.equal('Java');
    //          //    expect(res.body.message).to.equal('User logged in.');
                
    //           });
    //           done();
    // });

         
       

    }); 

    
   


    
       

    

    


   

   
 