/* tslint:disable:no-unused-variable */
import {
    JsonpModule,
    Jsonp,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    Http,
    HttpModule
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {SocketService} from './socket.service';

var io = require('socket.io-client');

describe('Suite of unit tests', function() {

    var socket;
    let service: SocketService;
;
    
    beforeEach(function(done) {
        TestBed.configureTestingModule({
            imports: [JsonpModule, HttpModule],
            providers: [
                SocketService
            ]
        })
        service = TestBed.get(SocketService);
        
              socket = io.connect('http://localhost:3001', {
            'reconnection delay' : 0
            , 'reopen delay' : 0
            , 'force new connection' : true
        });
        socket.on('connect', function() {
            console.log('worked...');
            done();
        });
        socket.on('disconnect', function() {
            console.log('disconnected...');
        })
    });

    afterEach(function(done) {
        // Cleanup
        if(socket.connected) {
            console.log('disconnecting...');
            socket.disconnect();
        } else {
            // There will not be a connection unless you have done() in beforeEach, socket.on('connect'...)
            console.log('no connection to break...');
        }
        done();
    });

    // describe('First (hopefully useful) test', function() {

    //     it('Doing some things with indexOf()', function(done) {
          
    //         done();
    //     });

      

    // });

});