webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_canvas_canvas_component__ = __webpack_require__("../../../../../src/app/components/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_group_page_group_page_component__ = __webpack_require__("../../../../../src/app/components/group-page/group-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_contact_page_contact_page_component__["a" /* ContactPageComponent */] },
    { path: 'canvas', component: __WEBPACK_IMPORTED_MODULE_2__components_canvas_canvas_component__["a" /* CanvasComponent */] },
    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_4__components_group_page_group_page_component__["a" /* GroupPageComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-navigations></app-navigations>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navigations_navigations_component__ = __webpack_require__("../../../../../src/app/components/navigations/navigations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_canvas_canvas_component__ = __webpack_require__("../../../../../src/app/components/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_group_page_group_page_component__ = __webpack_require__("../../../../../src/app/components/group-page/group-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_navigations_navigations_component__["a" /* NavigationsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_canvas_canvas_component__["a" /* CanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_group_page_group_page_component__["a" /* GroupPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__services_group_service__["a" /* GroupService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/canvas/canvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\" style=\"text-align: center;\">\n  <canvas (click)=\"drawOnCanvas()\" #myCanvas width=\"300px\" height=\"300px\" style=\"border: 1px solid\">\n\n  </canvas>\n  <div class=\"col-md-12\">\n    <button (click)=\"clearCanvas()\" class=\"btn btn-default\">Clear</button>\n    <button (click)=\"moveCanvas()\" class=\"btn btn-default\">Move</button>\n  </div>\n  <p>{{ x }}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CanvasComponent = (function () {
    function CanvasComponent() {
        this.x = 0;
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        var canvasEl = this.myCanvas.nativeElement;
        this.context = canvasEl.getContext('2d');
        canvasEl.width = 300;
        canvasEl.height = 300;
        this.context.lineWidth = 3;
        this.context.lineCap = 'round';
        this.context.strokeStyle = 'black';
        // this.captureEvents(canvasEl);
    };
    // captureEvents(canvasEl: HTMLCanvasElement) {
    //   Observable
    //     .fromEvent(canvasEl, 'mousedown')
    //     .switchMap((e) => {
    //       return Observable
    //         .fromEvent(canvasEl, 'mousemove')
    //         .takeUntil(Observable.fromEvent(canvasEl, 'mouseup'))
    //         .takeUntil(Observable.fromEvent(canvasEl, 'mouseleave'))
    //         .pairwise();
    //     })
    //     .subscribe(((res: [MouseEvent, MouseEvent]) => {
    //       const rect = canvasEl.getBoundingClientRect();
    //       const prevPos = {
    //         x: res[0].clientX - rect.left,
    //         y: res[0].clientY - rect.top
    //       };
    //
    //       const currentPos = {
    //         x: res[1].clientX - rect.left,
    //         y: res[1].clientY - rect.top
    //       };
    //       this.drawOnCanvas(prevPos, currentPos);
    //     }));
    //   }
    // drawOnCanvas(
    //   prevPos: {x: number, y: number},
    //   currentPos: {x: number, y: number},
    // ) {
    //   if (!this.context) {return; }
    //   this.context.beginPath();
    //   if (prevPos) {
    //     this.context.moveTo( prevPos.x, prevPos.y );
    //     this.context.lineTo( currentPos.x, currentPos.y );
    //     this.context.stroke();
    //   }
    // }
    CanvasComponent.prototype.drawOnCanvas = function () {
        this.context.fillRect(0, 0, 40, 20);
    };
    CanvasComponent.prototype.moveCanvas = function () {
        var _this = this;
        if (this.x <= (300 - 40)) {
            requestAnimationFrame(function () {
                _this.moveCanvas();
            });
            this.context.clearRect(0, 0, 300, 300);
            this.context.fillRect(this.x, 0, 40, 20);
        }
        this.x++;
    };
    CanvasComponent.prototype.clearCanvas = function () {
        this.context.clearRect(0, 0, 300, 300);
        this.x = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CanvasComponent.prototype, "myCanvas", void 0);
    CanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-canvas',
            template: __webpack_require__("../../../../../src/app/components/canvas/canvas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  padding-top: 30px;\n  border-right: 1px solid gainsboro;\n  height: 100vh;\n}\n.controls{\n  text-align: center;\n}\nbutton{\n  margin: 0 20px;\n  width: 75px;\n}\n.list{\n  margin-top: 50px;\n}\n\ntable tr:hover:not(:first-child){\n  cursor: pointer;\n  background-color: cyan;\n}\ntable tr.active td {\n  background-color: cyan ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-12 controls\">\n      <button class=\"btn btn-default\" (click)=\"showCreate()\">Create</button>\n      <button class=\"btn btn-default\" (click)=\"showEdit()\" >Edit</button>\n      <button class=\"btn btn-default\" (click)=\"deleteUser(selectedRow)\">Delete</button>\n    </div>\n    <div *ngIf=\"showCreateFlag\" class=\"col-md-12 create\">\n      <form [formGroup]=\"userForm\" novalidate>\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"surname\">Surname</label>\n          <input type=\"text\" class=\"form-control\" id=\"surname\" formControlName=\"surname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"age\">Age</label>\n          <input type=\"number\" class=\"form-control\" id=\"age\" formControlName=\"age\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"group\">Group</label>\n          <input type=\"text\" class=\"form-control\" id=\"group\" formControlName=\"group\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"note\">Note</label>\n          <input type=\"text\" class=\"form-control\" id=\"note\"  formControlName=\"note\">\n        </div>\n        <button type=\"submit\" (click)=\"addUser()\" class=\"btn btn-default\">Submit</button>\n      </form>\n    </div>\n    <div *ngIf=\"showEditFlag\" class=\"col-md-12 editBlock\">\n\n      <form [formGroup]=\"userEditForm\" novalidate>\n        <div class=\"form-group\">\n          <label for=\"editName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"editName\" [placeholder]=\"users[selectedRow].name\" formControlName=\"editName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editSurname\">Surname</label>\n          <input type=\"text\" class=\"form-control\" id=\"editSurname\" [placeholder]=\"users[selectedRow].surname\"  formControlName=\"editSurname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editAge\">Age</label>\n          <input type=\"number\" class=\"form-control\" id=\"editAge\" [placeholder]=\"users[selectedRow].age\" formControlName=\"editAge\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editDescription\">Description</label>\n          <input type=\"text\" class=\"form-control\" id=\"editDescription\" required [placeholder]=\"users[selectedRow].description\" formControlName=\"editDescription\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editGroup\">Group</label>\n          <input type=\"text\" class=\"form-control\" id=\"editGroup\" [placeholder]=\"users[selectedRow].group\" formControlName=\"editGroup\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"editNote\">Note</label>\n          <input type=\"text\" class=\"form-control\" id=\"editNote\" [placeholder]=\"users[selectedRow].note\"  formControlName=\"editNote\">\n        </div>\n        <button type=\"submit\" (click)=\" editUser()\" class=\"btn btn-default\">Submit</button>\n      </form>\n    </div>\n    <div class=\"col-md-12 list\">\n      <table class=\"table table-bordered table-striped\" width=\"100%\">\n        <tr>\n          <th>Name</th>\n          <th>Surname</th>\n          <th>Age</th>\n          <th>Group</th>\n          <th>Description</th>\n          <th>Note</th>\n        </tr>\n        <tr *ngFor=\"let user of users; let i = index\"\n            (click)=\"setClickedRow(i)\"\n            [class.active]=\"i == selectedRow\">\n          <td>{{ user.name  }}</td>\n          <td>{{ user.surname  }}</td>\n          <td>{{ user.age  }}</td>\n          <td>{{ user.group  }}</td>\n          <td>{{ user.description  }}</td>\n          <td>{{ user.note}}</td>\n        </tr>\n      </table>\n      <!--<div class=\"col-md-12\">-->\n        <!--<p>-->\n          <!--Selected Row : <strong>{{ selectedRow }}</strong>-->\n        <!--</p>-->\n      <!--</div>-->\n    </div>\n  </div>\n</div>\n<div class=\"col-md-3\" style=\"margin-left: 50px;margin-top: 40px;font-size: 20px;\">\n  <p><strong>Name:</strong> {{ users[selectedRow].name }}</p>\n  <p><strong>Surname:</strong> {{ users[selectedRow].surname }}</p>\n  <p><strong>Age:</strong> {{ users[selectedRow].age  }}</p>\n  <p><strong>Group:</strong> {{ users[selectedRow].group  }}</p>\n  <p><strong>Description:</strong> {{ users[selectedRow].description  }}</p>\n  <p><strong>Note:</strong> {{ users[selectedRow].note  }}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPageComponent = (function () {
    function ContactPageComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.selectedRow = 0;
        this.showCreateFlag = false;
        this.showEditFlag = false;
    }
    ContactPageComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            name: '',
            surname: '',
            age: '',
            description: '',
            group: '',
            note: '',
        });
    };
    ContactPageComponent.prototype.createEditForm = function () {
        this.userEditForm = this.fb.group({
            editName: '',
            editSurname: '',
            editAge: '',
            editDescription: '',
            editGroup: '',
            editNote: '',
        });
    };
    ContactPageComponent.prototype.clearForm = function () {
        this.userEditForm = this.fb.group({
            editName: '',
            editSurname: '',
            editAge: '',
            editDescription: '',
            editGroup: '',
            editNote: '',
        });
    };
    ContactPageComponent.prototype.showCreate = function () {
        this.showCreateFlag = !this.showCreateFlag;
    };
    ContactPageComponent.prototype.showEdit = function () {
        this.showEditFlag = !this.showEditFlag;
    };
    ContactPageComponent.prototype.addUser = function () {
        this.users.push(this.userForm.value);
        this.showCreateFlag = false;
    };
    ContactPageComponent.prototype.deleteUser = function () {
        if (this.selectedRow !== undefined) {
            this.users.splice(this.selectedRow, 1);
        }
        this.selectedRow = undefined;
    };
    ContactPageComponent.prototype.editUser = function () {
        if (this.userEditForm.value.editName !== '') {
            this.users[this.selectedRow].name = this.userEditForm.value.editName;
        }
        if (this.userEditForm.value.editSurname !== '') {
            this.users[this.selectedRow].surname = this.userEditForm.value.editSurname;
        }
        if (this.userEditForm.value.editAge !== '') {
            this.users[this.selectedRow].age = this.userEditForm.value.editAge;
        }
        if (this.userEditForm.value.editGroup !== '') {
            this.users[this.selectedRow].group = this.userEditForm.value.editGroup;
        }
        if (this.userEditForm.value.editDescription !== '') {
            this.users[this.selectedRow].desciption = this.userEditForm.value.editDescription;
        }
        if (this.userEditForm.value.editNote !== '') {
            this.users[this.selectedRow].note = this.userEditForm.value.editNote;
        }
        this.clearForm();
        this.showEditFlag = false;
    };
    ContactPageComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    ContactPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
        });
        this.createForm();
        this.createEditForm();
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-page',
            template: __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/group-page/group-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controls{\n  margin: 20px 0;\n}\n.controls button{\n  margin: 0 20px;\n}\n.panel-heading{\n  cursor: pointer;\n}\n.active .panel-heading {\n  background-color: cyan!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/group-page/group-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9 controls\">\n  <button (click)=\"showCreate()\" class=\"btn btn-default\">Create Group</button>\n  <button (click)=\"showEdit()\" class=\"btn btn-default\">Edit Group</button>\n  <button (click)=\"deleteGroup()\" class=\"btn btn-default\">Delete Group</button>\n</div>\n<div *ngIf=\"showCreateFlag\" class=\"col-md-9\" style=\"width: 50%\">\n  <form [formGroup]=\"groupForm\">\n    <div class=\"form-group\">\n      <label for=\"groupName\">Group Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"groupName\" formControlName=\"groupName\">\n    </div>\n    <ol>\n      <li *ngFor=\"let user of listCreateUser\">\n        {{ user['name'] }} {{ user['surname'] }}\n      </li>\n    </ol>\n    <div class=\"form-group\">\n      <label for=\"name\">User Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\">User Surname</label>\n      <input type=\"text\" class=\"form-control\" id=\"surname\" formControlName=\"surname\">\n    </div>\n    <button (click)=\"addUser()\" class=\"btn btn-default\">Add User</button>\n    <button (click)=\"creteGroup()\" class=\"btn btn-default\">Create Group</button>\n  </form>\n</div>\n<div *ngIf=\"showEditFlag\" class=\"col-md-9\">\n  <form [formGroup]=\"groupFormEdit\" novalidate style=\"width: 50%;\">\n    <div class=\"form-group\">\n      <label for=\"editGroupName\">Edit Group Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"editGroupName\" [placeholder]=\"groups[selectedRow].name\" formControlName=\"groupNameEdit\">\n      <!--<ol>-->\n        <!--<li *ngFor=\"let groupUser of groups[selectedRow].members\">-->\n          <!--{{ groupUser.name }}-->\n        <!--</li>-->\n      <!--</ol>-->\n    </div>\n    <ol>\n      <li *ngFor=\"let user of listEditUser\" >\n        {{ user.name }} {{ user.surname }}\n      </li>\n    </ol>\n    <div class=\"form-group\">\n      <label for=\"name\">User Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"editName\" formControlName=\"editName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\">User Surname</label>\n      <input type=\"text\" class=\"form-control\" id=\"editSurname\" formControlName=\"editSurname\">\n    </div>\n    <button class=\"btn btn-default\" style=\"margin-top: 20px;\" (click)=\"editListUser()\" >Add User </button>\n    <button class=\"btn btn-default\" style=\"margin-top: 20px;\" (click)=\"editGroupName()\" >Edit Group </button>\n  </form>\n</div>\n<div class=\"col-md-9\" style=\"margin-top: 50px;\">\n  <div class=\"panel-group\" style=\"width: 50%;\">\n    <div *ngFor=\"let group of groups;let i = index\"\n         class=\"panel panel-default\"\n         (click)=\"setClickedRow(i)\"\n         [class.active]=\"i == selectedRow\">\n      <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n          <a data-toggle=\"collapse\" style=\"cursor: pointer\" [attr.data-target]=\"'#' + i\">{{ group.name }} {{ group['members'].length }}  </a>\n        </h4>\n      </div>\n      <div [attr.id]=\"i\" class=\"panel-collapse collapse\">\n        <ul class=\"list-group\">\n          <li *ngFor=\"let groupUser of group['members']\" class=\"list-group-item\">{{ groupUser.name}} {{ groupUser.surname }}</li>\n        </ul>\n      </div>\n    </div>\n    <!--<div class=\"col-md-9\">-->\n      <!--{{ selectedRow }}-->\n    <!--</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/group-page/group-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupPageComponent = (function () {
    function GroupPageComponent(groupService, fb) {
        this.groupService = groupService;
        this.fb = fb;
        this.selectedRow = 0;
        this.createdGroup = {};
        this.listCreateUser = [];
        this.listEditUser = [];
        this.showCreateFlag = false;
        this.showEditFlag = false;
    }
    GroupPageComponent.prototype.createForm = function () {
        this.groupForm = this.fb.group({
            groupName: '',
            name: '',
            surname: ''
        });
    };
    GroupPageComponent.prototype.createEditForm = function () {
        this.groupFormEdit = this.fb.group({
            groupNameEdit: '',
            editName: '',
            editSurname: ''
        });
    };
    GroupPageComponent.prototype.showCreate = function () {
        this.showCreateFlag = !this.showCreateFlag;
    };
    GroupPageComponent.prototype.showEdit = function () {
        this.showEditFlag = !this.showEditFlag;
    };
    GroupPageComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    GroupPageComponent.prototype.addUser = function () {
        if (this.groupForm.value.name !== '' && this.groupForm.value.surname !== '') {
            this.listCreateUser.push({
                name: this.groupForm.value.name,
                surname: this.groupForm.value.surname
            });
            this.clearFormUsers();
        }
        else {
            alert('Enter please name and surname of User');
        }
    };
    GroupPageComponent.prototype.creteGroup = function () {
        if (this.groupForm.value.groupName !== '') {
            console.log(this.createdGroup);
            this.createdGroup.name = this.groupForm.value.groupName;
            this.createdGroup.members = [];
            this.createdGroup.members = this.createdGroup.members.concat(this.listCreateUser);
            console.log(this.createdGroup);
            this.groups.push(this.createdGroup);
            this.clearFormFull();
            this.listCreateUser = [];
            this.showCreateFlag = false;
        }
    };
    GroupPageComponent.prototype.deleteGroup = function () {
        if (this.selectedRow !== undefined) {
            this.groups.splice(this.selectedRow, 1);
        }
        this.selectedRow = undefined;
    };
    GroupPageComponent.prototype.editListUser = function () {
        if (this.groupFormEdit.value.editName && this.groupFormEdit.value.editSurname) {
            this.listEditUser.push({
                name: this.groupFormEdit.value.editName,
                surname: this.groupFormEdit.value.editSurname
            });
            this.groupFormEdit = this.fb.group({
                groupNameEdit: this.groupFormEdit.value.groupNameEdit,
                editName: '',
                editSurname: ''
            });
        }
    };
    GroupPageComponent.prototype.editGroupName = function () {
        if (this.groupFormEdit.value.groupNameEdit !== '') {
            this.groups[this.selectedRow].name = this.groupFormEdit.value.groupNameEdit;
            this.groups[this.selectedRow].members = this.groups[this.selectedRow].members.concat(this.listEditUser);
            this.showEditFlag = false;
        }
        else {
            alert('Enter group name!');
        }
    };
    GroupPageComponent.prototype.clearFormFull = function () {
        this.groupForm = this.fb.group({
            groupName: '',
            name: '',
            surname: ''
        });
    };
    GroupPageComponent.prototype.clearFormUsers = function () {
        this.groupForm = this.fb.group({
            groupName: this.groupForm.value.groupName,
            name: '',
            surname: ''
        });
    };
    GroupPageComponent.prototype.ngOnChanges = function () {
    };
    GroupPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupService.getGroups().subscribe(function (data) {
            _this.groups = data;
            console.log(_this.groups.members);
        });
        this.createForm();
        this.createEditForm();
    };
    GroupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-group-page',
            template: __webpack_require__("../../../../../src/app/components/group-page/group-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/group-page/group-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], GroupPageComponent);
    return GroupPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigations/navigations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  border-right: 1px solid gainsboro;\n  border-bottom: 1px solid gainsboro;\n  height: 100vh;\n}\n\n.navbar-default{\n  background: none;\n  margin-top: 25px;\n  border: none;\n}\nul{\n  padding-left: 0;\n  text-align: center;\n}\nul li{\n  list-style: none;\n  margin: 10px 0;\n  text-align: left;\n  border: 1px solid black;\n  padding: 5px 10px ;\n}\nli:hover{\n  background-color: #e6e6e6;\n  cursor: pointer;\n}\ni{\n  float: right;\n  margin-top: 3px;\n}\n.activemy {\n  background-color: #e6e6e6;\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigations/navigations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2 wrapper\">\n  <nav class=\"navbar navbar-default navbar-fixed-side\">\n    <ul>\n      <li routerLink=\"/\" routerLinkActive=\"activemy\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n        Contacts <i class=\"fa fa-address-book\" aria-hidden=\"true\"></i>\n      </li>\n      <li routerLink=\"/groups\" routerLinkActive=\"activemy\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n        Groups <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n      </li>\n      <li routerLink=\"/canvas\" routerLinkActive=\"activemy\"\n          [routerLinkActiveOptions]=\"{exact: true}\" >\n        Canvas Page <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigations/navigations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationsComponent = (function () {
    function NavigationsComponent() {
    }
    NavigationsComponent.prototype.ngOnInit = function () {
    };
    NavigationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigations',
            template: __webpack_require__("../../../../../src/app/components/navigations/navigations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigations/navigations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationsComponent);
    return NavigationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupService = (function () {
    function GroupService(http) {
        this.http = http;
        this.dataUrl = './assets/groups.json';
    }
    GroupService.prototype.getGroups = function () {
        return this.http.get(this.dataUrl);
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.dataUrl = './assets/users.json';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.dataUrl);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map