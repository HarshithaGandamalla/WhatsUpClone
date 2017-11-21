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
import {ChatService} from './chat.service';
import { HttpService } from './http.service';


describe('Service: Chat ', () => {

  let service: ChatService;
  let backend: MockBackend;
  let httpservice: HttpService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule, HttpModule],
      providers: [
        ChatService,
        HttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(ChatService);

  });

  it('search should return username true or false', fakeAsync(() => {
    let response = {
    
                "id": "59e503b3333b2d08d8edc3f0",
                 "results" : "true",
                "username": "dimpu",
                "email": "hamsikag15@gmail.com",
                "password": "dimpu",
                "timestamp": 1508180915,
                "online": "Y",
                "socketId": "V033uGP_v6Cue5UKAAAC",
            
        
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
    service.checkUserNameCheck("dimpu",(res) =>{
            expect(res.results).toBe("true");
            }
        )

        service.checkUserNameCheck("abcd",(res) =>{
            expect(window.alert).toBeDefined;
        });
   
        service.login({"username": "manisha", "password":"manisha"}, (res) => {
      expect(res).toBeTruthy;
      });

    service.userSessionCheck("59e503b3333b2d08d8edc3f0", (res) => {
      expect(res).toBeTruthy;
      });
    service.getMessages({ userId :"59e503b3333b2d08d8edc3f0", toUserId :"59e503b3333b2d08d8edc3f0" }, (res) => {
      expect(res).toBeTruthy;
      });
    service.getGroupMessages({"groupName":"Hi"}, (res) => {
      expect(res).toBeTruthy;
      });
    service.registerGroup({"username":"dimpu", 'userId':"59e503b3333b2d08d8edc3f0", 'groupName': "newGroup"}, (res) => {
    expect(res).toBeTruthy;
    });
    service.updateStatus("dimpu",(res) =>{
        expect(res).toBeTruthy;
        }
    )
}));


  });

