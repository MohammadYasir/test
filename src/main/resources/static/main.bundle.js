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

module.exports = "<div class=\"row\">\n  <mat-toolbar color=\"primary\">\n    <span class=\"header-margin\">A simple TODO list app</span>\n  </mat-toolbar>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <mat-card>\n      <mat-card-title>\n        <mat-form-field>\n          <mat-select placeholder=\"Selected tasks\" [(value)]=\"selectedStatus\" (change)=\"statusValueChanged()\">\n            <mat-option value=\"COMPLETED\">\n              Completed\n            </mat-option>\n            <mat-option value=\"PENDING\">\n              Pending\n            </mat-option>\n            <mat-option value=\"ALL\">\n              All\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-card-title>\n      <mat-card-content>\n        <mat-list>\n          <mat-list-item *ngFor=\"let task of displayTasks\" >\n            <h3 matLine> {{task.title}} -----<i>{{task.status}}</i></h3>\n            <p matLine> {{task.description}}\n              </p>\n              <p>\n            <button *ngIf=\"task.status==='PENDING'\" mat-raised-button mat-button (click)=\"markCompleted(task)\">MarkCompleted</button> </p>\n            <p>\n            <button mat-raised-button mat-button (click)=\"delete(task)\">Delete</button>\n          </p>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n        </mat-list>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div class=\"col-md-5\">\n    <mat-card>\n      <form [formGroup]=\"form\" (ngSubmit)=\"add(form.value)\">\n      <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"Title\" formControlName=title>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Description\" formControlName=\"description\">\n          </mat-form-field>\n          <input type=\"hidden\" formControlName=\"status\" value=\"PENDING\">\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button type=\"submit\" mat-raised-button>Add</button>\n      </mat-card-actions>\n      </form>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.displayTasks = [];
        this.tasks = [];
        this.selectedTask = {};
        this.selectedStatus = "ALL";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/tasks').subscribe(function (data) {
            console.log(data);
            _this.tasks = data;
            _this.displayTasks = data;
        });
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('PENDING')
        });
    };
    AppComponent.prototype.add = function (task) {
        var _this = this;
        this.http.post('/api/tasks', task).subscribe(function (data) {
            _this.tasks.push(data);
            _this.statusValueChanged();
        });
    };
    AppComponent.prototype.delete = function (task) {
        var _this = this;
        this.http.delete('/api/tasks/' + task.id).subscribe(function (data) {
            console.log("task deleted");
        });
        this.http.get('/api/tasks').subscribe(function (data) {
            _this.tasks = data;
            _this.statusValueChanged();
        });
    };
    AppComponent.prototype.statusValueChanged = function () {
        var _this = this;
        console.log("done");
        if (this.selectedStatus === 'COMPLETED') {
            this.displayTasks = [];
            this.tasks.map(function (task) {
                if (task.status === 'COMPLETED') {
                    _this.displayTasks.push(task);
                }
            });
        }
        else if (this.selectedStatus === 'PENDING') {
            this.displayTasks = [];
            this.tasks.map(function (task) {
                if (task.status === 'PENDING') {
                    _this.displayTasks.push(task);
                }
            });
        }
        else {
            this.displayTasks = [];
            this.tasks.map(function (task) {
                _this.displayTasks.push(task);
            });
        }
    };
    AppComponent.prototype.markCompleted = function (task) {
        var _this = this;
        task.status = "COMPLETED";
        this.http.put('/api/tasks/' + task.id, task).subscribe(function (data) {
            console.log("task updated");
        });
        this.http.get('/api/tasks').subscribe(function (data) {
            _this.tasks = data;
            _this.statusValueChanged();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());

/*const TASKS = [
    {
        "id": 2,
        "title": "Task2",
        "description": "New Task2",
        "status": "PENDING"
    },
    {
        "id": 33,
        "title": "Task3",
        "description": "New Task 3",
        "status": "PENDING"
    },
    {
        "id": 34,
        "title": "Task3",
        "description": "New Task 3",
        "status": "PENDING"
    }
]*/


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatSelectModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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