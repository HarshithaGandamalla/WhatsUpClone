webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_emoji__ = __webpack_require__("../../../../ng2-emoji/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/:userid', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_11_ng2_emoji__["a" /* Ng2EmojiModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ng2_translate_ng2_translate__["a" /* TranslateModule */].forRoot()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__["Ng2SearchPipeModule"]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_13__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Importing http service starts*/

/* Importing http service ends*/
var ChatService = (function () {
    function ChatService(httpService) {
        this.httpService = httpService;
    }
    /*
    * check if username already exists.
    */
    ChatService.prototype.checkUserNameCheck = function (params, callback) {
        console.log("checkUserNameCheck request :" + JSON.stringify(params));
        this.httpService.userNameCheck(params).subscribe(function (response) {
            callback(response);
        }, function (error) {
            alert('HTTP fail.usernameee');
        });
    };
    ChatService.prototype.login = function (params, callback) {
        console.log("login request :" + JSON.stringify(params));
        this.httpService.login(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
    * method to add new users
    */
    ChatService.prototype.registerUser = function (params, callback) {
        console.log("registerUser request :" + JSON.stringify(params));
        this.httpService.registerUser(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'Failed to register user. Server might be down.');
        });
    };
    /*
    * method to get the messages between two users
    */
    ChatService.prototype.getMessages = function (params, callback) {
        console.log("getMessages request :" + JSON.stringify(params));
        this.httpService.getMessages(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
    * method to get the messages of given group
    */
    ChatService.prototype.getGroupMessages = function (params, callback) {
        console.log("getGroupMessages request :" + JSON.stringify(params));
        this.httpService.getGroupMessages(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    ChatService.prototype.getprofile = function (userId, callback) {
        this.httpService.getprofile({ userId: userId }).subscribe(function (response) {
            console.log("Leading HTTP Request");
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    ChatService.prototype.fetchMembers = function (params, callback) {
        console.log("Entered Fetch Components");
        this.httpService.fetchMembers(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
    * Method to check the session of user.
    */
    ChatService.prototype.userSessionCheck = function (userId, callback) {
        this.httpService.userSessionCheck({ userId: userId }).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
    * Method to add user to chat group.
    */
    ChatService.prototype.registerGroup = function (params, callback) {
        this.httpService.registerGroup(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
    * Method to remove user from chat group.
    */
    ChatService.prototype.deregisterGroup = function (params, callback) {
        this.httpService.deregisterGroup(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
    * Method to remove users from  group list.
    */
    ChatService.prototype.deregisterUsers = function (params, callback) {
        this.httpService.deregisterUsers(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
      * Method to maintain user list of group.
      */
    ChatService.prototype.addGroupUsers = function (params, callback) {
        this.httpService.addGroupUsers(params).subscribe(function (response) {
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP fail.');
        });
    };
    /*
      * Method to add update status of the user.
      */
    ChatService.prototype.updateStatus = function (params, callback) {
        this.httpService.updateStatus(params).subscribe(function (response) {
            console.log(JSON.stringify(response) + " in res");
            callback(false, response);
        }, function (error) {
            callback(true, 'HTTP status fail.');
        });
    };
    ChatService.prototype.updateProfilepic = function (params, callback) {
        this.httpService.updateProfilepic(params).subscribe(function (response) {
            console.log("OOOOOOOOOOOOOOOO");
            console.log(JSON.stringify(response) + " in res");
            callback(false, response);
        }, function (error) {
            console.log(error + " in error");
            callback(true, 'HTTP status fail.');
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    width: 100%;\r\n    max-width:initial;\r\n  }\r\n  #copyright {\r\n      position: relative;\r\n      bottom: 0;\r\n      right: 0;\r\n      width: 100%;\r\n  }\r\n\r\n  .card-panel{\r\n    height: 40px;\r\n    width: 60px;\r\n  }\r\n\r\n  :host ::ng-deep .highlight{\r\n    background-color: #F2E366;\r\n  }\r\n\r\n  .no-padding{\r\n    padding: 0!important;\r\n  }\r\n  .chat-footer {\r\n    width: 64.666667%!important;\r\n    padding: 0 .75rem;\r\n    color:black;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    bottom: 0;\r\n    height: 100px;\r\n    width: 100%;\r\n    overflow:hidden;\r\n}\r\n \r\n/* Just use .scroll1 class to every element you ant to add the custom scroll bar to*/\r\n.scroll1::-webkit-scrollbar {\r\n  width: 0.32em;\r\n}\r\n\r\n.scroll1::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 4px rgba(0,0,1,0.2);\r\n}\r\n\r\n.scroll1::-webkit-scrollbar-thumb {\r\nbackground-color: darkgrey;\r\noutline: 1px solid #F5F5F5;\r\n}\r\n\r\n.main{\r\n  height: -webkit-stretch;\r\n}\r\n\r\n/* Theme color */\r\nnav{\r\n  background-color: #3B8686;\r\n}\r\n\r\n/* .me{\r\n  font-size: 14px;\r\n  border-left: 3px solid #60DF88 !important;\r\n  padding: 5px;\r\n  background-color: rgb(239, 255, 241);\r\n}\r\n\r\n.you{\r\n  font-size: 14px;\r\n  border-right: 3px solid rgb(255, 112, 0) !important;\r\n  padding: 5px;\r\n  background-color: rgb(247, 247, 214);\r\n}\r\n\r\nblockquote.pull-right {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  text-align: right;\r\n  border-left: 5px solid #60DF88;\r\n  border-right: 0;\r\n}\r\n\r\nblockquote.pull-left {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  text-align: left;\r\n  border-right: 5px solid #60DF88;\r\n  border-left: 0;\r\n} */\r\n\r\n.sent > blockquote{\r\n  font-size: 14px;\r\n  border-left: 3px solid #60DF88 !important;\r\n  padding: 5px;\r\n  background-color: rgb(239, 255, 241);\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  text-align: right;\r\n  border-left: 5px solid #60DF88;\r\n  border-right: 0;\r\n  margin: 3px 0;\r\n  float: right!important;\r\n}\r\n\r\n.received > blockquote{\r\n  font-size: 14px;\r\n  border-right: 3px solid rgb(255, 112, 0) !important;\r\n  padding: 5px;\r\n  background-color: rgb(247, 247, 214);\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  text-align: left;\r\n  border-right: 5px solid #60DF88;\r\n  border-left: 0;\r\n  margin: 3px 0;\r\n  float: left!important;\r\n}\r\n.emoji{\r\n  display:inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <!-- Navbar goes here -->\r\n  <div id=\"container \" style=\"height: inherit\">\r\n    <nav class=\"main-nav\">\r\n      <!-- Put a Small Image of profile pic here -->\r\n      <div class=\"nav-wrapper  teal darken-4\">\r\n\r\n        <span>Hello {{username}}\r\n          \r\n        </span>\r\n        <!-- slide button -->\r\n        <a href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\" style=\"display: block!important\">\r\n          <i class=\"material-icons\">menu</i> \r\n        </a>\r\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\" style=\" height: inherit;padding-right: 20px;\">\r\n            <li><a class='dropdown-button waves-effect waves-light' (click)=\"Settings()\" data-activates='dropdown1'>Settings</a></li>    \r\n            <li id='logout' class=\"waves-effect waves-light\" (click)=\"logout()\" >Logout</li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n    <!-- slide  content -->\r\n    <ul id=\"slide-out\" class=\"side-nav scroll1\" style=\"width: 25%;\">\r\n      <li><div class=\"user-view\">\r\n        <div class=\"background\">\r\n          <img src=\"https://userscontent2.emaze.com/images/8946394a-a3cf-499e-a733-d5ccfe180b47/750f1f40ee0c6d21b9ba93a28a18d231.jpg\">\r\n        </div>\r\n        <a href=\"#!user\"><img class=\"circle\" src={{profile_img}}></a>\r\n        \r\n        <a href=\"#!name\"><span class=\"white-text name\">John Doe</span></a>\r\n        <a href=\"#!email\"><span class=\"white-text email\">jdandturk@gmail.com</span></a>\r\n      </div></li>\r\n      <li>\r\n        <div>\r\n          <form action=\"#\">\r\n            <div class=\"file-field input-field\">\r\n              <div class=\"btn\">\r\n                <span>Upload profile pic</span>\r\n                <input name=\"profilepic\" type=\"file\" id=\"profile-pic-upload\" (change) = \"fileEvent($event)\">\r\n              </div>\r\n              <br>\r\n              <div class=\"file-path-wrapper\">\r\n                <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload one or more files\">\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </li>\r\n      <li><a href=\"#!\">Second Link</a></li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li><a class=\"subheader\">Subheader</a></li>\r\n      <li><a class=\"waves-effect\" href=\"#!\">Third Link With Waves</a></li>\r\n    </ul>\r\n\r\n  <!-- Page Layout here -->\r\n  <div class=\"row main-content\">\r\n      <!-- begin s4 column -->\r\n      <div class=\"col s3 no-padding scroll1\" style=\"height: inherit;overflow-y: auto;\">\r\n        <nav>\r\n          <div class=\"nav-wrapper black\">\r\n              <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">   \r\n                <li> <a class=\"waves-effect waves-light modal-trigger\" data-target=\"modal1\">New Group</a></li>   \r\n              </ul>\r\n              <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">   \r\n                <li> <a class=\"waves-effect waves-light modal-trigger\" data-target=\"modal2\">Update Status</a></li>   \r\n              </ul>\r\n          </div>\r\n        </nav>\r\n        \r\n        <ul id='dropdown1' class='dropdown-content'>\r\n            <li><a href=\"#!\">Profile</a></li>\r\n        </ul>\r\n        <!-- modal for new group -->\r\n        <div id=\"modal1\" class=\"modal\">\r\n          <div class=\"modal-content\">\r\n            <h4>Add Group Name</h4>\r\n            <input #newGroup\r\n              class=\"input\" placeholder=\"Enter group name here..\"\r\n              (keyup.enter)=\"addGroup(newGroup.value)\">\r\n              <button id=\"newgroup\" class=\"btn modal-close\" (click)=\"addGroup(newGroup.value)\">Create Group</button> \r\n          </div>\r\n       </div>\r\n         <!-- modal for status update -->\r\n         <div id=\"modal2\" class=\"modal\">\r\n          <div class=\"modal-content\">\r\n            <h4>Update Status</h4>\r\n            <input #newStatus\r\n              class=\"input\" placeholder=\"Enter new status here..\"\r\n              [(ngModel)]=\"status\"\r\n              (keyup.enter)=\"updateStatus(newStatus.value)\">\r\n              <button id = \"status3\" class=\"btn modal-close\" (click)=\"updateStatus(newStatus.value)\">Update Status</button> \r\n          </div>\r\n       </div>\r\n       <form>\r\n          <div>\r\n              <input type=\"text\" placeholder=\"  Search contacts\" id=\"search-box\" name=\"search\">\r\n          </div>  \r\n        </form> \r\n        <ul class=\"user-list\">    \r\n            <!-- click event to handle the selection : selectedUser() -->\r\n            <!-- adding a class to indicate the selection --> \r\n        </ul>\r\n        <nav class=\"nav-extended\">  \r\n          <div class=\"nav-content\">\r\n            <ul class=\"tabs tabs-transparent\">\r\n              <button id = \"online\" class=\"waves-effect waves-light btn\" (click)=\"selectedUsersList=true\" style=\"width:50%\">ONLINE</button>\r\n              <button id = \"offline\" class=\"waves-effect waves-light btn\" (click)=\"selectedUsersList=false\" style=\"width:50%\">OFFLINE</button>\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n        <!-- list of users -->\r\n        <div *ngIf=\"selectedUsersList\">   \r\n          <ul class=\"collection\">\r\n            <li class=\"collection-item active avatar\" \r\n              *ngFor=\"let user of chatListUsers |filter:term\"\r\n              (click)=\"selectedUser(user)\" \r\n              [class.selected-user]=\"isUserSelected(user._id)\">\r\n                <img src={{user.img}} alt=\"\" class=\"circle\">\r\n                <!-- <i class=\"material-icons circle\">folder</i> -->\r\n                <span class=\"title\">{{ user.username}}</span>\r\n                <p> <br></p>\r\n                <p><span class=\"title\">{{ user.status}}</span></p>\r\n                <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n            </li> \r\n            <li class=\"collection-item active avatar\" \r\n              *ngFor=\"let group of groupsList |filter:term\"\r\n              (click)=\"selectedGroup(group)\"\r\n              [class.selected-group]=\"isGroupSelected(group.groupName)\">\r\n              <img src=\"\" alt=\"\" class=\"circle\">\r\n              <!-- <i class=\"material-icons circle\">folder</i>                     -->\r\n              <span class=\"title\">{{ group.groupName}}</span>\r\n              <a class=\"waves-effect waves-light btn modal-trigger right\" href=\"#modal3\" (click)=\"populateNonMembers(group.groupName)\">Add</a>\r\n              <a class=\"waves-effect waves-light btn modal-trigger right\" href=\"#modal4\" (click)=\"populateMembers(group.groupName)\">Delete</a>\r\n              \r\n              <!-- Add users -->\r\n            </li>\r\n          </ul>\r\n        </div> \r\n        <!-- Display all users registered -->\r\n        <div id=\"modal3\" class=\"modal\">\r\n          <div class=\"modal-content\">\r\n            <form action=\"#\" id=\"mySelect\">\r\n                <p *ngFor=\"let user of exsistingUsers; let i = index\">\r\n                  <input type=\"checkbox\" class=\"filled-in\" id=\"test{{i}}\" (click)=\"AddUser(user.username,user.userId)\"/>\r\n                  <label for=\"test{{i}}\">  {{ user.username}} </label>\r\n                </p>\r\n              </form>\r\n              <button class=\"btn modal-close\" (click)=\"AddUsers()\">Add users</button>                \r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"modal4\" class=\"modal\">\r\n          <div class=\"modal-content\">\r\n            <form action=\"#\" id=\"mySelect2\">\r\n                <p *ngFor=\"let user of newUserstoGroup; let i = index\">\r\n                  <input type=\"checkbox\" class=\"filled-in\" id=\"testdelete{{i}}\" (click)=\"DeleteUser(user.username,user.userId)\"/>\r\n                  <label for=\"testdelete{{i}}\">  {{ user.username}} </label>\r\n                </p>\r\n              </form>\r\n              <button class=\"btn modal-close\" (click)=\"DeleteUsers()\">Delete users</button>                \r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!selectedUsersList\">\r\n          <ul class=\"collection\">\r\n            <li class=\"collection-item active avatar\" \r\n                *ngFor=\"let user of chatOfflineUsers |filter:term\"\r\n                (click)=\"selectedUser(user)\" \r\n                [class.selected-user]=\"isUserSelected(user._id)\">\r\n\r\n                  <img src={{user.img}} alt=\"\" class=\"circle\">\r\n                  <!-- <i class=\"material-icons circle\">folder</i> -->\r\n                  <span class=\"title\">{{ user.username}}</span>\r\n                  <p>First Line <br> Second Line</p>\r\n\r\n                  <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n            </li>\r\n          </ul> \r\n        </div>\r\n      </div>\r\n        \r\n      <div class=\"col s9 no-padding scroll1\" style=\"height: inherit;overflow-y: auto;\">\r\n        <nav class=\"chat-title\">     \r\n          <div class=\"nav-wrapper black\">\r\n            <div *ngIf=\"selectedUserName\" \r\n              class=\"opposite-user\">\r\n                Chatting with {{selectedUserName}}\r\n            </div>\r\n            <div *ngIf=\"selectedGroupName\" \r\n            class=\"opposite-user\">\r\n              Chatting in {{selectedGroupName}}\r\n            </div>\r\n          </div>\r\n        </nav>\r\n        <ul class=\"message-thread\">\r\n            <!-- <li class=\"clearfix\"><blockquote class=\"me pull-right right\">Hi</blockquote></li> -->\r\n            <!-- <li class=\"clearfix\"><blockquote class=\"you pull-left left\">Hello</blockquote></li> -->\r\n          <li class=\"clearfix\" *ngFor=\"let message of messages\" \r\n            [ngStyle]=\"{\r\n              'display': inline-block,\r\n              'font-weight': 'bold',\r\n              'background-color': '#c51162 pink accent-4'\r\n            }\"\r\n            [ngClass]=\"alignMessage(message.fromUserId)?'received': 'sent'\">       \r\n            <blockquote >\r\n                <div class=\"message-container\" [innerHTML]=\"message.message\">\r\n                </div>\r\n            </blockquote>\r\n            \r\n          </li>\r\n        </ul>\r\n        <div class=\"page-footer chat-footer\">\r\n          <div id=\"copyright\">\r\n            <div class=\"\">\r\n              <div class=\"input-field\">\r\n                  <input placeholder=\"Enter your text here\" id=\"icon_prefix\" type=\"text\" class=\"validate\"\r\n                  [(ngModel)]=\"message\" \r\n                  (keyup)=\"sendMessage($event)\">\r\n                  \r\n              </div>\r\n            </div>\r\n          </div> \r\n        </div>\r\n      </div>\r\n      <!-- end of s8 column -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--- end of trailpart -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


__webpack_require__("../../../../aws-sdk/dist/aws-sdk.js");

/* Importing services starts*/



/* Importing services ends*/
var HomeComponent = (function () {
    function HomeComponent(chatService, socketService, route, router) {
        this.chatService = chatService;
        this.socketService = socketService;
        this.route = route;
        this.router = router;
        /*
        * UI related variables starts
        */
        this.overlayDisplay = false;
        this.selectedUserId = null;
        this.selectedSocketId = null;
        this.selectedUserName = null;
        this.selectedGroupName = null;
        /*
        * UI related variables ends
        */
        /*
        * Chat and message related variables starts
        */
        this.username = null;
        this.userId = null;
        this.socketId = null;
        this.chatListUsers = [];
        this.chatOfflineUsers = [];
        this.message = '';
        this.messages = [];
        this.groupName = '';
        this.groupsList = [];
        this.selectedUserstoAdd = [];
        this.selectedUserstoDelete = [];
        this.newUserstoGroup = [];
        this.removedUsersfromGroup = [];
        this.exsistingUsers = [];
        this.allUsers = [];
        this.status = null;
        this.profile_img = '';
        /*
        * Chat and message related variables ends
        */
        this.selectedUsersList = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
            $('.modal').modal();
            $(".button-collapse").sideNav();
            //these are hacks to come out with proper alignment of div
            //not recommended but time constraint
            //set height of chat box
            $(".main-content").height(window.innerHeight - parseInt($(".main-nav").css('height'), 10));
            $(".main-content").css({ marginBottom: "0px" });
            $(".message-thread").height(parseInt($(".main-content").css('height'), 10) - parseInt($(".chat-title").css('height'), 10) - parseInt($(".chat-footer").css('height'), 10));
            $(".message-thread").css({ overflow: "hidden", margin: "0", overflowY: "scroll" });
            $('.message-thread').css('background-image', 'url("http://subtlepatterns.com/patterns/geometry2.png")');
            $(".message-thread").addClass("scroll1");
        });
        /*
        * getting userID from URL using 'route.snapshot'
        */
        this.userId = this.route.snapshot.params['userid'];
        if (this.userId === '' || typeof this.userId == 'undefined') {
            this.router.navigate(['/']);
        }
        else {
            this.chatService.updateStatus({
                "userId": this.userId
            }, function (error, response) {
                if (!response.error) {
                    alert("Status updated Successfully");
                }
                else {
                    alert("ERROR updating status");
                }
            });
            this.chatService.getprofile(this.userId, function (error, response) {
                if (error) {
                    console.log(error);
                    _this.router.navigate(['/']); /* Home page redirection */
                }
                else {
                    console.log("*************");
                    console.log(JSON.stringify(response));
                    console.log("**************");
                    _this.profile_img = response.imgurl;
                }
            });
            /*
            * function to check if user is logged in or not starts
            */
            this.chatService.userSessionCheck(this.userId, function (error, response) {
                if (error) {
                    _this.router.navigate(['/']); /* Home page redirection */
                }
                else {
                    _this.username = response.username;
                    _this.overlayDisplay = true;
                    /*
                        * making socket connection by passing UserId.
                        */
                    _this.socketService.connectSocket(_this.userId);
                    /*
                    * Code to get the real time messages goes here
                    */
                    /*
                    * Code for Real time chat list update goes here
                    */
                    _this.socketService.getChatList(_this.userId).subscribe(function (response) {
                        if (!response.error) {
                            if (response.singleUser) {
                                /*
                                * Removing duplicate user from chat list array.
                                */
                                if (_this.chatListUsers.length > 0) {
                                    _this.chatListUsers = _this.chatListUsers.filter(function (obj) {
                                        return obj._id !== response.chatList._id;
                                    });
                                }
                                /*
                                * Adding new online user into chat list array
                                */
                                _this.chatListUsers.push(response.chatList);
                            }
                            else if (response.userDisconnected) {
                                _this.chatListUsers = _this.chatListUsers.filter(function (obj) {
                                    return obj.socketId !== response.socketId;
                                });
                            }
                            else {
                                /*
                                * Updating entire chatlist if user logs in.
                                */
                                _this.chatListUsers = response.chatList;
                                console.log("IIIIIIIIIIIIIIIIIIIIIIIII");
                                console.log("chatlist: " + JSON.stringify(_this.chatListUsers));
                            }
                            //track list of all users
                            console.log("ALL users...: " + JSON.stringify(_this.allUsers));
                        }
                        else {
                            alert('Chat list failure.');
                        }
                    });
                    /*
                    * Code to update groups list of user goes here
                    */
                    _this.socketService.getGroupsList(_this.userId).subscribe(function (response) {
                        //console.log("Trying to update groupslist");
                        if (!response.error) {
                            /*
                            * Updating entire groupslist if user logs in.
                            */
                            if (response.groupList != null) {
                                for (var i = 0; i < response.groupList.length; i++) {
                                    //console.log("Updated groupslist:o "+JSON.stringify( response.groupList[i]));
                                    _this.groupsList.push({
                                        'groupName': response.groupList[i]
                                    });
                                }
                            }
                        }
                        else {
                            alert('Group list update failure.');
                        }
                    });
                    _this.socketService.getOfflineChatList(_this.userId).subscribe(function (response) {
                        if (!response.error) {
                            if (response.singleUser) {
                                /*
                                * Removing duplicate user from chat list array.
                                */
                                if (_this.chatOfflineUsers.length > 0) {
                                    _this.chatOfflineUsers = _this.chatOfflineUsers.filter(function (obj) {
                                        return obj._id !== response.chatList._id;
                                    });
                                }
                                /*
                                * Adding new offline user into chat list array
                                */
                                _this.chatOfflineUsers.push(response.chatList);
                            }
                            else if (response.userDisconnected) {
                                _this.chatOfflineUsers = _this.chatOfflineUsers.filter(function (obj) {
                                    return obj.socketId !== response.socketId;
                                });
                            }
                            else {
                                /*
                                * Updating entire chatlist if user logs out.
                                */
                                _this.chatOfflineUsers = response.chatList;
                            }
                            _this.chatListUsers.forEach(function (element) {
                                _this.allUsers.push(element);
                            });
                            _this.chatOfflineUsers.forEach(function (element) {
                                _this.allUsers.push(element);
                            });
                        }
                        else {
                            alert('Chat list failure.');
                        }
                    });
                    _this.socketService.receiveMessages().subscribe(function (response) {
                        if (_this.selectedUserId && _this.selectedUserId == response.fromUserId) {
                            _this.messages.push(response);
                            setTimeout(function () {
                                document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                            }, 100);
                        }
                    });
                    _this.socketService.receiveGroupMessages().subscribe(function (response) {
                        //check if response type contains message key
                        if (_this.selectedGroupName && _this.selectedGroupName == response.groupName) {
                            _this.messages.push(response);
                            setTimeout(function () {
                                document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                            }, 100);
                        }
                    });
                }
            });
        }
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.socketService.logout({ userId: this.userId }).subscribe(function (response) {
            _this.router.navigate(['/']); /* Home page redirection */
        });
    };
    HomeComponent.prototype.selectedUser = function (user) {
        var _this = this;
        this.selectedGroupName = null;
        this.selectedUserId = user._id;
        this.selectedSocketId = user.socketId;
        this.selectedUserName = user.username;
        //	console.log("Selected user: "+JSON.stringify(user.username));
        /*
        * calling method to get the messages

        */
        this.chatService.getMessages({ userId: this.userId, toUserId: user._id }, function (error, response) {
            console.log("Selected user response: " + JSON.stringify(response));
            if (!response.error) {
                //console.log("Messages requested: "+JSON.stringify(response));
                _this.messages = response.message;
            }
        });
    };
    HomeComponent.prototype.isUserSelected = function (userId) {
        if (!this.selectedUserId) {
            return false;
        }
        return this.selectedUserId === userId ? true : false;
    };
    HomeComponent.prototype.selectedGroup = function (group) {
        var _this = this;
        this.selectedUserName = null;
        this.selectedUserId = null;
        console.log("Selected group: " + JSON.stringify(group));
        this.selectedGroupName = group.groupName;
        /*
        * calling method to get the messages
        */
        this.chatService.getGroupMessages({ groupName: group.groupName }, function (error, response) {
            console.log("Selected group response: " + JSON.stringify(response));
            if (!response.error) {
                _this.messages = response.message;
            }
        });
    };
    HomeComponent.prototype.isGroupSelected = function (groupName) {
        if (!this.selectedGroupName) {
            return false;
        }
        return this.selectedGroupName === groupName ? true : false;
    };
    HomeComponent.prototype.alignMessage = function (userId) {
        return this.userId === userId ? false : true;
    };
    HomeComponent.prototype.userToggle = function () {
        this.selectedUsersList = !this.selectedUsersList;
    };
    HomeComponent.prototype.sendMessage = function (event) {
        if (event.keyCode === 13) {
            console.log("Selected userid: " + this.selectedUserId);
            console.log("Selected groupname: " + this.selectedGroupName);
            if (this.message === '' || this.message === null) {
                alert("Message can't be empty.");
            }
            else {
                if (this.message === '') {
                    alert("Message can't be empty.");
                }
                else if (this.userId === '') {
                    this.router.navigate(['/']);
                }
                else if ((this.selectedUserId === '' || this.selectedUserId == null) && (this.selectedGroupName === '' || this.selectedGroupName == null)) {
                    alert("Select a user or group to chat.");
                }
                else {
                    //  Chatting with user
                    if (this.selectedUserId != null) {
                        var data = {
                            fromUserId: this.userId,
                            message: (this.message).trim(),
                            toUserId: this.selectedUserId,
                            toSocketId: this.selectedSocketId,
                            fromSocketId: this.socketId
                        };
                        console.log("Message: selected userId " + this.selectedUserId);
                        console.log("Message when user s selected " + data.message);
                        this.messages.push(data);
                        setTimeout(function () {
                            document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                        }, 100);
                        /*
                        * calling method to send the messages
                        */
                        this.message = null;
                        this.socketService.sendMessage(data);
                    }
                    else if (this.selectedGroupName != null) {
                        console.log("Chatting in group: selectedgroupname");
                        var data = {
                            groupName: this.selectedGroupName,
                            message: (this.message).trim(),
                            fromUserId: this.userId,
                            fromUser: this.username
                        };
                        this.messages.push(data);
                        setTimeout(function () {
                            document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                        }, 100);
                        /*
                        * calling method to send the messages
                        */
                        this.message = null;
                        this.socketService.sendGroupMessage(data);
                    }
                    else {
                        alert("ERROR!!");
                    }
                }
            }
        }
    };
    HomeComponent.prototype.addGroup = function (newGroup) {
        var _this = this;
        console.log("New group name: " + newGroup);
        if (newGroup === null || newGroup === '' || newGroup === undefined) {
            alert("Please enter group name");
        }
        else {
            this.groupName = newGroup;
            //RegisterGroup
            this.chatService.registerGroup({ 'username': this.username,
                'userId': this.userId,
                'groupName': newGroup
            }, function (error, response) {
                console.log("Addgroup response: " + JSON.stringify(response));
                if (!response.error) {
                    _this.messages.push({ message: 'Successfully created group ' + newGroup });
                    _this.groupsList.push({
                        'groupName': newGroup,
                        'message': 'Successfully created group ' + newGroup
                    });
                }
                else {
                    alert("ERROR registering group");
                }
            });
        }
    };
    HomeComponent.prototype.updateStatus = function (status) {
        this.status = status;
        //  console.log(status +" id dttaud");
        //RegisterGroup
        this.chatService.updateStatus({ "status": this.status,
            "userId": this.userId
        }, function (error, response) {
            if (!response.error) {
                alert("Status updated Successfully");
            }
            else {
                alert("ERROR updating status");
            }
        });
    };
    HomeComponent.prototype.populateMembers = function (groupNameToPopulate) {
        var _this = this;
        this.chatService.fetchMembers({
            "groupName": groupNameToPopulate,
        }, function (error, response) {
            console.log("Response on fecth: " + JSON.stringify(response));
            if (!response.error) {
                console.log("Members: " + JSON.stringify(response.message[0]));
                var j = 0;
                _this.newUserstoGroup.length = 0;
                //let updatemembers=[];
                if (response.message[0] != null) {
                    for (j = 0; j < response.message[0].userIdArray.length; j++) {
                        var value = {
                            "username": response.message[0].userIdArray[j].username,
                            "userId": response.message[0].userIdArray[j].userId
                        };
                        //	updatemembers.push(value);
                        _this.newUserstoGroup.push(value);
                    }
                    //	this.newUserstoGroup=updatemembers;
                }
            }
            else {
                console.log("ERROR populating members");
            }
        });
    };
    HomeComponent.prototype.populateNonMembers = function (groupName) {
        //	let diff = this.allUsers.filter(x => this.newUserstoGroup.indexOf(x) < 0 );
        var _this = this;
        //console.log("diff  members: "+JSON.stringify(diff));
        this.exsistingUsers.length = 0;
        this.chatService.fetchMembers({
            "groupName": groupName,
        }, function (error, response) {
            //console.log("Response on fecth: "+JSON.stringify(response));
            if (!response.error) {
                //console.log("Members: "+JSON.stringify(response.message[0]));
                var j = 0;
                var exsistingmembers = [];
                if (response.message[0] != null) {
                    for (j = 0; j < response.message[0].userIdArray.length; j++) {
                        // let value={
                        // 	"username":response.message[0].userIdArray[j].username,
                        // 	"userId":response.message[0].userIdArray[j].userId
                        // }
                        if (exsistingmembers.indexOf(response.message[0].userIdArray[j].username) < 0)
                            exsistingmembers.push(response.message[0].userIdArray[j].username);
                    }
                    console.log("Exsisting users: " + exsistingmembers);
                }
                if (_this.allUsers != null) {
                    //this.exsistingUsers.length=0;
                    console.log("All users: " + JSON.stringify(_this.allUsers));
                    var j_1 = 0;
                    for (j_1 = 0; j_1 < _this.allUsers.length; j_1++) {
                        var check = {
                            "username": _this.allUsers[j_1].username,
                            "userId": _this.allUsers[j_1]._id
                        };
                        var notMember = false;
                        if (exsistingmembers.indexOf(_this.allUsers[j_1].username) < 0) {
                            console.log("Not a member: " + check.username);
                            notMember = true;
                        }
                        if (_this.exsistingUsers.length == 0 && notMember) {
                            console.log("adding..: " + check.username);
                            _this.exsistingUsers.push(check);
                        }
                        else {
                            if (notMember) {
                                var k = 0;
                                var alreaypresent = false;
                                for (k = 0; k < _this.exsistingUsers.length; k++) {
                                    console.log("In loop with: " + _this.exsistingUsers[k].username + " " + _this.allUsers[j_1].username);
                                    console.log("In loop with: " + _this.exsistingUsers[k].userId + " " + _this.allUsers[j_1]._id);
                                    if (_this.exsistingUsers[k].username == _this.allUsers[j_1].username && _this.exsistingUsers[k].userId == _this.allUsers[j_1]._id) {
                                        console.log("Not a member: but already added: " + check.username);
                                        alreaypresent = true;
                                    }
                                }
                                if (!alreaypresent) {
                                    console.log("Not a member: also not  added: adding " + check.username);
                                    _this.exsistingUsers.push(check);
                                }
                            }
                        }
                        // if(exsistingmembers.indexOf(this.allUsers[j].username)<0 && this.exsistingUsers.indexOf(check)<0){
                        // 	console.log("not a memener of exs users: "+this.allUsers[j].username);
                        // 	let val={
                        // 		"username":this.allUsers[j].username,
                        // 		"userId":this.allUsers[j]._id
                        // 	}
                        // 	if(this.exsistingUsers.indexOf(val)<0)
                        // 	this.exsistingUsers.push(val);
                        // }
                        //console.log("AllUSERS!! "+JSON.stringify(this.allUsers));
                    }
                }
            }
            else {
                console.log("ERROR populating members");
            }
        });
    };
    HomeComponent.prototype.AddUser = function (username, userId) {
        console.log("Trying to add: " + username);
        var i;
        var obj = {
            "username": username,
            "userId": userId,
        };
        var bool = false;
        if (this.selectedUserstoAdd != null && this.selectedUserstoAdd.length != 0) {
            for (i = 0; i < this.selectedUserstoAdd.length; i++) {
                console.log("this.selectedUserstoAdd[i]: " + JSON.stringify(this.selectedUserstoAdd[i]));
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEqual"](obj, this.selectedUserstoAdd[i])) {
                    console.log("Already exsists!!");
                    this.selectedUserstoAdd.splice(i, 1);
                    bool = true;
                }
            }
        }
        if (!bool) {
            console.log("does not  exsist!");
            this.selectedUserstoAdd.push(obj);
        }
    };
    HomeComponent.prototype.AddUsers = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.selectedUserstoAdd) || this.selectedUserstoAdd == null || this.selectedUserstoAdd == undefined) {
            alert("Please select users to Add.");
        }
        else {
            console.log("IS not empty!");
            this.selectedUserstoAdd.forEach(function (element) {
                console.log(element.username + " was added to " + _this.selectedGroupName);
                //registering user to grouparray
                _this.chatService.registerGroup({
                    "username": element.username,
                    "userId": element.userId,
                    "groupName": _this.selectedGroupName
                }, function (error, response) {
                    if (!response.error) {
                        console.log("Added users successfully");
                    }
                    else {
                        alert("ERROR adding user to group");
                    }
                });
            });
            this.chatService.addGroupUsers({
                "userarray": this.selectedUserstoAdd,
                "groupName": this.selectedGroupName
            }, function (error, response) {
                if (!response.error) {
                    console.log("group users updated");
                }
                else {
                    alert("ERROR updating userlist for group");
                }
            });
        }
    };
    HomeComponent.prototype.DeleteUser = function (username, userId) {
        console.log("userid in del user: " + userId);
        var i;
        var obj = {
            "username": username,
            "userId": userId,
        };
        var bool = false;
        if (this.selectedUserstoDelete != null && this.selectedUserstoDelete.length != 0) {
            for (i = 0; i < this.selectedUserstoDelete.length; i++) {
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEqual"](obj, this.selectedUserstoDelete[i])) {
                    this.selectedUserstoDelete.splice(i, 1);
                    bool = true;
                }
            }
        }
        if (!bool)
            this.selectedUserstoDelete.push(obj);
    };
    HomeComponent.prototype.DeleteUsers = function () {
        var _this = this;
        this.selectedUserstoDelete.forEach(function (element) {
            console.log(element.username + " was removed with id " + element.userId);
            _this.chatService.deregisterGroup({
                "username": element.username,
                "userId": element.userId,
                "groupName": _this.selectedGroupName
            }, function (error, response) {
                if (!response.error) {
                    console.log("Deleted users successfully");
                }
                else {
                    alert("ERROR deleting user to group");
                }
            });
            _this.chatService.deregisterUsers({
                "username": element.username,
                "userId": element.userId,
                "groupName": _this.selectedGroupName
            }, function (error, response) {
                if (!response.error) {
                    console.log("removed user from group listsuccessfully");
                }
                else {
                    alert("ERROR removeing user from group lists");
                }
            });
            //pull from groupuser collection also!!!
        });
    };
    HomeComponent.prototype.Settings = function () {
    };
    HomeComponent.prototype.fileEvent = function (fileInput) {
        var file = fileInput.target.files[0];
        this.chatService.updateProfilepic({
            "userId": this.userId,
            "filename": file.name,
            "file": file
        }, function (error, response) {
            if (!response.error) {
                alert("Status updated Successfully");
            }
            else {
                alert("ERROR updating status");
            }
        });
        // Access Keys needs to be changed
        // AWSService.config.accessKeyId = 'AKIAINOO6VT2L4UKJJQQ';
        // AWSService.config.secretAccessKey = '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';
        // Creating an AWS Bucket for the User
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        /*
        * specifying Base URL.
        */
        this.BASE_URL = 'http://localhost:4000/';
        /*
        * Setting the Request headers.
        */
        this.headerOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=UTF-8' })
        });
        this.results = true;
    }
    HttpService.prototype.userNameCheck = function (params) {
        return this.http.post(this.BASE_URL + "usernameCheck", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.login = function (params) {
        return this.http.post(this.BASE_URL + "login", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.registerUser = function (params) {
        return this.http.post(this.BASE_URL + "registerUser", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.deregisterGroup = function (params) {
        return this.http.post(this.BASE_URL + "deregisterGroup", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.deregisterUsers = function (params) {
        return this.http.post(this.BASE_URL + "deregisterUsers", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.userSessionCheck = function (params) {
        return this.http.post(this.BASE_URL + "userSessionCheck", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.getMessages = function (params) {
        return this.http.post(this.BASE_URL + "getMessages", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.fetchMembers = function (params) {
        console.log("Entered HTTP Service");
        return this.http.post(this.BASE_URL + "fetchMembers", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.getGroupMessages = function (params) {
        return this.http.post(this.BASE_URL + "getGroupMessages", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.registerGroup = function (params) {
        return this.http.post(this.BASE_URL + "registerGroup", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.addGroupUsers = function (params) {
        return this.http.post(this.BASE_URL + "addGroupUsers", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.updateStatus = function (params) {
        return this.http.post(this.BASE_URL + "updateStatus", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.updateProfilepic = function (params) {
        return this.http.post(this.BASE_URL + "updateProfilepic", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    HttpService.prototype.getprofile = function (params) {
        console.log("Entered HTTP Service");
        return this.http.post(this.BASE_URL + "getprofile", JSON.stringify(params), this.headerOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  main {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n  }\r\n  \r\n \r\n  body {\r\n    background: #fff;\r\n  }\r\n\r\n  .input-field input[type=date]:focus + label,\r\n  .input-field input[type=text]:focus + label,\r\n  .input-field input[type=email]:focus + label,\r\n  .input-field input[type=username]:focus + label,\r\n  .input-field input[type=password]:focus + label {\r\n    color: #e91e63;\r\n  }\r\n\r\n  .input-field input[type=date]:focus,\r\n  .input-field input[type=text]:focus,\r\n  .input-field input[type=email]:focus,\r\n  .input-field input[type=username]:focus,\r\n  .input-field input[type=password]:focus {\r\n    border-bottom: 2px solid #e91e63;\r\n    box-shadow: none;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n  \r\n  <head>\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css\">\r\n  </head>\r\n  \r\n  <body>\r\n    <div class=\"section\"></div>\r\n    <main>\r\n      <div>\r\n        <div class=\"section\"></div>\r\n        <h5 class=\"indigo-text\">Please, login into your account</h5>\r\n        <div class=\"section\"></div>\r\n  \r\n        <div class=\"container\">\r\n          <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\r\n  \r\n            <form class=\"col s12\" method=\"post\">\r\n              <div class='row'>\r\n                <div class='col s12'>\r\n                </div>\r\n              </div>\r\n\r\n              <div class='row'>\r\n                <div class='input-field col s12'>\r\n                  <input class='validate' type='text' name='username' id='username' \r\n                  [(ngModel)]=\"username\" \r\n\t\t\t\t\t\t\t\t\tvalue=\"{{username}}\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"onkeyup($event)\"\r\n\t\t\t\t\t\t\t\t\t(keydown)=\"onkeydown($event)\"/>\r\n                  <label for='username'>Username</label>\r\n                </div>\r\n                <br *ngIf=\"isuserNameAvailable && username!=''\" />\r\n\t\t\t\t\t\t\t\t<div id=isuserNameAvailable *ngIf=\"isuserNameAvailable && username!=''\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t\t\tusername <strong>{{username}}</strong> is already taken.\r\n\t\t\t\t\t\t\t\t</div>\r\n              </div>\r\n\r\n              <div class='row'>\r\n                <div class='input-field col s12'>\r\n                  <input class='validate' type='email' name='email' id='email' \r\n                  [(ngModel)]=\"email\" \r\n                  value=\"{{email}}\"\r\n                  />\r\n                  <label for='email'>Enter your email</label>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class='row'>\r\n                <div class='input-field col s12'>\r\n                  <input class='validate' type='password' name='password' id='password' \r\n                  [(ngModel)]=\"password\" \r\n\t\t\t\t\t\t\t\t\tvalue=\"{{ password }}\"\r\n\t\t\t\t\t\t\t\t/>\r\n                  <label for='password'>Enter your password</label>\r\n                </div>\r\n                <label style='float: right;'>\r\n                  <a class='pink-text' href='#!'><b>Forgot Password?</b></a>\r\n                </label>\r\n              </div>\r\n  \r\n              <br />\r\n              <div>\r\n                <div class='row'>\r\n                  <button type='submit' \r\n                  id='submit_login'\r\n                  name='btn_login' \r\n                  class='col s12 btn btn-large waves-effect indigo'\r\n                  (click)=\"login()\">Login</button>\r\n                </div>\r\n\r\n                <div class='row'>\r\n                  <button type='submit' \r\n                  id='btn_login' \r\n                  class='col s12 btn btn-large waves-effect indigo'\r\n                  (click)=\"registerUser()\">Create account</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n  \r\n      <div class=\"section\"></div>\r\n      <div class=\"section\"></div>\r\n    </main>\r\n  \r\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js\"></script>\r\n  </body>\r\n  \r\n  </html>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.username = null;
        this.email = null;
        this.password = null;
        this.isuserNameAvailable = false;
        this.userTypingTimeout = 1000;
        this.typingTimer = null;
    }
    LoginComponent.prototype.onkeyup = function (event) {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            _this.chatService.checkUserNameCheck({
                'username': _this.username
            }, function (response) {
                if (response.error) {
                    _this.isuserNameAvailable = true;
                }
                else {
                    _this.isuserNameAvailable = false;
                }
            });
        }, this.userTypingTimeout);
    };
    LoginComponent.prototype.onkeydown = function (event) {
        clearTimeout(this.typingTimer);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.username === '' || this.username === null) {
            alert("Username can't be empty.");
        }
        else if (this.password === '' || this.password === null) {
            alert("Password can't be empty.");
        }
        else {
            this.chatService.login({
                'username': this.username,
                'password': this.password,
            }, function (error, result) {
                console.log("login response :" + JSON.stringify(result));
                if (error) {
                    alert("Invalid Credentials");
                }
                else {
                    if (!result.error) {
                        _this.router.navigate(['/home/' + result.userId]);
                    }
                    else {
                        alert("User not found ,please register");
                    }
                }
            });
        }
    };
    LoginComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.username === '' || this.username === null) {
            alert("Username can't be empty for registration.");
        }
        else if (this.email === '' || this.email === null) {
            alert("Email can't be empty for registration.");
        }
        else if (this.password === '' || this.password === null) {
            alert("Password can't be empty for registration.");
        }
        else if (!this.isuserNameAvailable) {
            this.chatService.registerUser({
                username: this.username,
                email: this.email,
                password: this.password
            }, function (error, result) {
                if (error) {
                    alert(result);
                }
                else {
                    if (!result.error) {
                        _this.router.navigate(['/home/' + result.userId]);
                    }
                    else {
                        alert("Registration failure.");
                    }
                }
            });
        }
        else {
            alert('There is already an existing account with the same username. Please choose a new unique username');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*npm install @types/socket.io-client --save
*/

var SocketService = (function () {
    function SocketService() {
        /*
        * specifying Base URL.
        */
        this.BASE_URL = 'http://localhost:4000';
    }
    /*
    * Method to connect the users to socket
    */
    SocketService.prototype.connectSocket = function (userId) {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.BASE_URL, { query: "userId=" + userId });
    };
    /*
    * Method to emit the add-messages event.
    */
    SocketService.prototype.sendMessage = function (message) {
        console.log("Trying to send normal message");
        this.socket.emit('add-message', message);
    };
    SocketService.prototype.sendGroupMessage = function (message) {
        console.log("Trying to send group message");
        this.socket.emit('group-message', message);
    };
    /*
    * Method to emit the logout event.
    */
    SocketService.prototype.logout = function (userId) {
        var _this = this;
        this.socket.emit('logout', userId);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('logout-response', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    /*
    * Method to receive add-message-response event.
    */
    SocketService.prototype.receiveMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('add-message-response', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveGroupMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('group-message-response', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    /*
    * Method to receive chat-list-response event.
    */
    SocketService.prototype.getChatList = function (userId) {
        var _this = this;
        this.socket.emit('chat-list', { userId: userId });
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('chat-list-response', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    /*
    * Method to receive group-list-response event.
    */
    SocketService.prototype.getGroupsList = function (userId) {
        var _this = this;
        this.socket.emit('groups-list', { userId: userId });
        console.log("socket id waiting for response: " + this.socket.id);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('groups-list-response', function (data) {
                console.log("group list response received" + JSON.stringify(data));
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getOfflineChatList = function (userId) {
        var _this = this;
        this.socket.emit('chat-list-offline', { userId: userId });
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('chat-list-response-offline', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map