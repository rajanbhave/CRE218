webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-container set-full-height\" style=\"background-image: url('images/paper-2.jpeg')\">\r\n    \r\n    <!--   Big container   -->\r\n    <div class=\"container\" style=\"width:100%\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"page-header\">            \r\n            <img class=\"pull-left\" src=\"images/dmLogo.png\" alt=\"dmLogo\" width=\"150px\">\r\n            <h1 class=\"text-center\" style=\"color:#fff;\">Cloud Recommendation Engine <small>Your Cloud Savings, Done Right!</small></h1>            \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n          <!--      Wizard container        -->\r\n          <div class=\"wizard-container\" style=\"padding:50px\">\r\n            <div class=\"card wizard-card\" data-color=\"green\" id=\"wizard\">\r\n              \r\n                <router-outlet></router-outlet>\r\n              \r\n            </div>\r\n          </div>\r\n          <!-- wizard container -->\r\n        </div>\r\n      </div>\r\n      <!-- row -->\r\n    </div>\r\n    <!--  big container -->\r\n  \r\n    <div class=\"footer\">\r\n      <div class=\"container text-center\">\r\n        Made with <i class=\"fa fa-heart heart\"></i> by Cloud Brewers, DataMetica.\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_keys_pipe__ = __webpack_require__("./src/app/shared/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recommendation_recommendation_component__ = __webpack_require__("./src/app/recommendation/recommendation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_data_service__ = __webpack_require__("./src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components and Routes






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__shared_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__recommendation_recommendation_component__["a" /* RecommendationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recommendation_recommendation_component__ = __webpack_require__("./src/app/recommendation/recommendation.component.ts");


var AppRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'recommendation',
        component: __WEBPACK_IMPORTED_MODULE_1__recommendation_recommendation_component__["a" /* RecommendationComponent */]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wizard-header\">\r\n    <h3 class=\"wizard-title\">Refining your Cloud Solutions</h3>\r\n    <p class=\"category\">This information will help us recommed you the best Cloud Solutions.</p>\r\n  </div>\r\n\r\n<div class=\"wizard-navigation\">\r\n  <div class=\"progress-with-circle\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"1\" aria-valuemin=\"1\" aria-valuemax=\"4\" style=\"width: 15%;\"></div>\r\n  </div>\r\n  <ul>\r\n    <li *ngFor=\"let name of questionTabs\">\r\n      <a href=\"#{{name}}\" data-toggle=\"tab\">\r\n        <div class=\"icon-circle\">\r\n          <i class=\"ti-map\"></i>\r\n        </div>\r\n        {{name}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div class=\"tab-content\">\r\n  <div class=\"tab-pane\" id=\"{{name}}\" *ngFor=\"let name of questionTabs\">\r\n    <div class=\"row\">\r\n      <!-- <div class=\"col-sm-12\">\r\n        <h5 class=\"info-text\"> Let's start with the basic details</h5>\r\n      </div> -->\r\n\r\n      <div class=\"col-sm-10 col-sm-offset-1\" *ngFor=\"let qs of questions[name] | entries \">\r\n        <div class=\"form-group\">\r\n          <label>{{qs.value.q}}</label>\r\n          <div *ngIf=\"!qs.value.options\">\r\n            <input type=\"{{qs.value.type}}\" min=\"{{qs.value.min}}\" max=\"{{qs.value.max}}\" /> {{opt}}\r\n          </div>\r\n          <div *ngIf=\"qs.value.options\">\r\n            <span *ngFor=\"let opt of qs.value.options; let idx=index\">\r\n                    <input *ngIf=\"qs.value.type == 'radio'\"\r\n                      attr.name=\"{{name + qs.key}}\"\r\n                      [value] = \"idx+1\" \r\n                      (change) = \"answers[name][qs.key] = $event.target.value\"\r\n                      type=\"{{qs.value.type}}\" />\r\n                    \r\n                    <input *ngIf=\"qs.value.type == 'checkbox'\" \r\n                      attr.name=\"{{name + qs.key}}\"\r\n                      [value] = \"idx+1\" \r\n                      (change) = \"updateCheckboxes(answers[name], qs.key, idx, $event.target.checked)\"\r\n                      type=\"{{qs.value.type}}\" /> \r\n                    \r\n                     {{opt}}\r\n                </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wizard-footer\">\r\n  <div class=\"pull-right\">\r\n    <input type='button' class='btn btn-next btn-fill btn-success btn-wd' name='next' value='Next' />\r\n    <input type='button' class='btn btn-finish btn-fill btn-success btn-wd' name='finish' value='Finish' (click)=\"submit()\" />\r\n\r\n  </div>\r\n\r\n  <div class=\"pull-left\">\r\n    <input type='button' class='btn btn-previous btn-default btn-wd' name='previous' value='Previous' />\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("./src/app/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router, ds) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.ds = ds;
        this.title = 'app';
        this.questions = {
            storage: {
                q1: {
                    q: 'What type of data is present in your system?',
                    options: ['Structured', 'Semi Structured', 'UnStructured'],
                    type: 'radio'
                },
                q2: {
                    q: 'What type of workloads are you targeting?',
                    options: ['Analytical', 'Transactional'],
                    type: 'radio'
                },
                q3: {
                    q: "Is your data relational and need fully managed, high performance database service?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q4: {
                    q: "Do you need transactional consistency, global scale and high availability?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q5: {
                    q: "Do you need a NoSQL DB that simplifies storing, syncing, and querying data for mobile and web apps at global scale?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q6: {
                    q: "Is your project a data migration project with need of Enterprise Data Warehouse(EDW)?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q7: {
                    q: "Do you need to handle transactional data and need high-throughput?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q8: {
                    q: "Do you need to store and serve user-generated content, such as photos or videos through mobile app?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q9: {
                    q: "Do you need to access your files anywhere through web, apps and sync with clients (Collaborative Sharing)?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q10: {
                    q: "Do you need to store data on Virtual Machines and Containers  OR Do you need to share data across multiple virtual machines OR Need to take backup of  running virtual machines?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q11: {
                    q: "What is the frequency of data access required?",
                    options: ['Frequent Access from anywhere in the world', 'Frequent access from specific region', 'Accessed once a month at max', 'Accessed once a year at max'],
                    type: 'radio'
                },
                q12: {
                    q: "What is the expected data size in your application?",
                    options: ['GigaBytes', 'TeraBytes', 'PetaBytes', 'Greater than PetaBytes'],
                    type: 'radio'
                }
                // ,
                // test: {
                // q: 'How do we handle numbers with constraints?',
                // type: 'number',
                // min: 1,
                // max: 8
                // }
            },
            compute: {
                q1: {
                    q: 'Are you building a mobile or HTML application that does its heavy lifting, processing-wise, on the client?',
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q2: {
                    q: 'Are you building a system based more on events than user interaction? In other words, are you building an app that responds to uploaded files, or maybe logins to other applications?',
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q3: {
                    q: "Does your application needs specific OS,Kernel and GPU’s ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q4: {
                    q: "Does your application need hybrid or cloud deployment ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q5: {
                    q: "5.Does your app licensed software ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q6: {
                    q: "Do you have any already existing app ",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q7: {
                    q: "Does your app contains container ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q8: {
                    q: "Do you have plan to use Kubernetes as orchestrator ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q9: {
                    q: "Kindly select the different areas in which your business resides?",
                    options: ['US-East',
                        'US-Central',
                        'US-West',
                        'Europe West',
                        'Asia East',
                        'Asia SouthEast',
                        'Asia NorthEast',
                        'Asia South',
                        'Australia SouthEast',
                        'SouthAmerica-East',
                        'NorthAmerica-NorthEast'],
                    type: 'radio'
                },
                q10: {
                    q: "10.Please select the configuration you need for your machines - Select cores",
                    min: 1,
                    max: 8,
                    type: 'number'
                },
                q11: {
                    q: "Which OS you need to install for running your application?",
                    options: ['Windows', 'Linux'],
                    type: 'radio'
                },
                q12: {
                    q: "Select the type of boot disk you would prefer -",
                    options: ['Install a new OS image to create a boot disk', 'Create a boot disk with pre-configured application images'],
                    type: 'radio'
                },
                q13: {
                    q: "Select the storage options you need for your compute engine instances.",
                    options: ['Standard Persistent Disks', 'SSD Persistant Disks', 'Local SSDs', 'Cloud Storage Bucktet'],
                    type: 'radio'
                },
                q14: {
                    q: "Which type of storage options does your application need from below –",
                    options: ['1.Efficient and reliable block storage for data upto 64 TB', '2.Fast and reliable block storage with data upto 64 TB ~ SSD Persistent Disks', '3.High throughput & lower latency storage for storing temporary data.', '4.Lower throughput & higher latency & need to share data easily between multiple instances or zones.'],
                    type: 'radio'
                },
                q15: {
                    q: "Does your application need all the instances to be up 24x7?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q16: {
                    q: "Do you want to use Hadoop stack (Hive,pig,Spark) for processing your data ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q17: {
                    q: "Do you want to create unified pipeline (Batch/Stream) with fully managed cluster and no operation?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q18: {
                    q: "Do you want to perform some data preparation (visually exploring, cleaning, and preparing structured and unstructured data) using UI?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                }
            },
            ingest: {
                q1: {
                    q: 'Type of data you are expecting as input?',
                    options: ['Batch', 'Streaming', 'Application Data'],
                    type: 'radio'
                },
                q2: {
                    q: 'Does your application contains live streaming data,events or messages ?',
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q3: {
                    q: "Does your application contain relational data that has to be accessed by sql ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q4: {
                    q: "Does your application wants horizontal scaling with relational database ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q5: {
                    q: "Does your application wants horizontal scaling with relational database ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q6: {
                    q: "Does your application require NOSQL DB ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q7: {
                    q: "Does your application requires NOSQL document DB ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                },
                q8: {
                    q: "Does your application want to store data on cloud for staging purpose ?",
                    options: ['Yes', 'No'],
                    type: 'radio'
                }
            }
        };
        this.questionTabs = Object.keys(this.questions);
        this.answers = {};
        this.questionTabs.forEach(function (name) {
            _this.answers[name] = {};
            Object.keys(_this.questions[name]).forEach(function (q) {
                _this.answers[name][q] = null;
            });
        });
    }
    DashboardComponent.prototype.updateCheckboxes = function (model, key, value, checked) {
        // Init the model if not already set
        model[key] = model[key] || [];
        var array = model[key];
        var index = array.indexOf(value);
        if (checked && index < 0)
            array.push(value);
        if (!checked && index >= 0)
            array.splice(index, 1);
    };
    DashboardComponent.prototype.submit = function () {
        console.log('object is', this.answers);
        var parentObject = {
            "types": []
        };
        var types = parentObject.types;
        for (var key in this.answers) {
            var metricObject = {};
            metricObject["categoryType"] = key;
            metricObject["quesChoiceMap"] = {};
            for (var subKey in this.answers[key]) {
                if (this.questions[key][subKey].type == 'checkbox') {
                    var selections = this.answers[key][subKey];
                    if (!selections)
                        continue;
                    metricObject["quesChoiceMap"][subKey] = selections.join(",");
                }
                else {
                    metricObject["quesChoiceMap"][subKey] = this.answers[key][subKey];
                }
            }
            types.push(metricObject);
        }
        console.log('Object is', parentObject);
        // make http call
         this.http.post('http://localhost:8080/CRESpring4MVCAngularJS/submit/',parentObject)
         .subscribe(response => {
           this.ds.setData(response.json());
            this.router.navigate(['recommendation']);              
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* DataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/recommendation/recommendation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wizard-header\">\r\n    <h3 class=\"wizard-title\">Refined your Cloud Solutions.</h3>\r\n    <p class=\"category\" style=\"font-size:20px\">Here is the summary of our best recommendations. </p>\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n\r\n          \r\n            <ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n\r\n          \r\n\r\n        <!-- \r\n        <table *ngFor=\"let category of items['types']\" class=\"table table-condensed table-border table-striped table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\">Component</th>\r\n                    <th class=\"text-center\">Description</th>\r\n                    <th class=\"text-center\">Pricing</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class=\"text-center bold\">\r\n                <tr *ngFor=\"let component of category['components']\">\r\n                    <td>\r\n                        {{component.componentName}}\r\n                    </td>\r\n                    <td>\r\n                        {{component.description}}\r\n                    </td>\r\n                    <td>\r\n                        <a href=\"{{component.pricingLink}}\">\r\n                        {{component.pricingLink}}\r\n                    </a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table> -->\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngFor=\"let category of items['types']; let idx = index\" style=\"margin: 0px !important;\r\ntext-align: center;\">\r\n\r\n    <h1>{{category.categoryType}}</h1>\r\n    <div class=\"col-sm-6 col-md-6\" *ngFor=\"let component of category['components']\">\r\n        <div class=\"thumbnail\">\r\n            <div class=\"caption\">\r\n                <h3>{{component.componentName}}</h3>\r\n                <p>{{component.description}}</p>\r\n                <p><a href=\"{{component.pricingLink}}\"  target=\"_blank\" class=\"btn btn-primary\" role=\"button\">Check Pricing</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" style=\"margin: 0px !important;\r\ntext-align: center;\">\r\n    <div class=\"col-sm-12\">\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"navToDashboard()\">{{showFillFormBtn}}</button> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/recommendation/recommendation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("./src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendationComponent = /** @class */ (function () {
    function RecommendationComponent(router, ds, slimLoadingBarService) {
        var _this = this;
        this.router = router;
        this.ds = ds;
        this.slimLoadingBarService = slimLoadingBarService;
        this.ticks = 0;
        this.colors = ['#F7941D', '#FFFFFF', '#01233F'];
        this.showFillFormBtn = '';
        setTimeout(function () {
            _this.slimLoadingBarService.complete();
            _this.showFillFormBtn = 'Fill the form again';
            _this.items = _this.ds.getData();
            if (!_this.items || '')
                router.navigate(['']);
        }, 2000);
    }
    RecommendationComponent.prototype.navToDashboard = function () {
        this.router.navigate(['']);
        window.location.reload();
    };
    RecommendationComponent.prototype.integrateData = function () {
    };
    RecommendationComponent.prototype.ngOnInit = function () {
        // Start the loader here!
        this.slimLoadingBarService.start();
    };
    RecommendationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'recommendation',
            template: __webpack_require__("./src/app/recommendation/recommendation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]])
    ], RecommendationComponent);
    return RecommendationComponent;
}());



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var DataService = /** @class */ (function () {
    function DataService() {
        this.data = null;
    }
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.setData = function (newData) {
        this.data = newData;
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'entries' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during
// build.
// The build system defaults to the dev environment which uses `environment.ts`,
// but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
// # sourceMappingURL=main.bundle.js.map
