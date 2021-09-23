(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'research', loadChildren: () => Promise.all(/*! import() | research-research-module */[__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("research-research-module")]).then(__webpack_require__.bind(null, /*! ./research/research.module */ "./src/app/research/research.module.ts")).then(m => m.ResearchModule)
    },
    {
        path: 'price-job', loadChildren: () => Promise.all(/*! import() | price-job-price-job-module */[__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("price-job-price-job-module")]).then(__webpack_require__.bind(null, /*! ./price-job/price-job.module */ "./src/app/price-job/price-job.module.ts")).then(m => m.PriceJobModule)
    },
    {
        path: 'survey', loadChildren: () => Promise.all(/*! import() | survey-survey-module */[__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("survey-survey-module")]).then(__webpack_require__.bind(null, /*! ./survey/survey.module */ "./src/app/survey/survey.module.ts")).then(m => m.SurveyModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'lux2';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth2.service */ "./src/app/services/auth2.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _services_certification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/certification.service */ "./src/app/services/certification.service.ts");
/* harmony import */ var _services_employer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/employer.service */ "./src/app/services/employer.service.ts");
/* harmony import */ var _services_degree_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/degree.service */ "./src/app/services/degree.service.ts");
/* harmony import */ var _services_industry_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/industry.service */ "./src/app/services/industry.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_school_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/school.service */ "./src/app/services/school.service.ts");
/* harmony import */ var _services_skill_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/skill.service */ "./src/app/services/skill.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_popular_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/popular.service */ "./src/app/services/popular.service.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _services_auth2_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
        _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
        _services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"],
        _services_certification_service__WEBPACK_IMPORTED_MODULE_10__["CertificationService"],
        _services_employer_service__WEBPACK_IMPORTED_MODULE_11__["EmployerService"],
        _services_degree_service__WEBPACK_IMPORTED_MODULE_12__["DegreeService"],
        _services_industry_service__WEBPACK_IMPORTED_MODULE_13__["IndustryService"],
        _services_job_service__WEBPACK_IMPORTED_MODULE_14__["JobService"],
        _services_school_service__WEBPACK_IMPORTED_MODULE_15__["SchoolService"],
        _services_skill_service__WEBPACK_IMPORTED_MODULE_16__["SkillService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_17__["CategoryService"],
        _services_popular_service__WEBPACK_IMPORTED_MODULE_18__["PopularService"]
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [
                    _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                    _services_auth2_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                    _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
                    _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"],
                    _services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"],
                    _services_certification_service__WEBPACK_IMPORTED_MODULE_10__["CertificationService"],
                    _services_employer_service__WEBPACK_IMPORTED_MODULE_11__["EmployerService"],
                    _services_degree_service__WEBPACK_IMPORTED_MODULE_12__["DegreeService"],
                    _services_industry_service__WEBPACK_IMPORTED_MODULE_13__["IndustryService"],
                    _services_job_service__WEBPACK_IMPORTED_MODULE_14__["JobService"],
                    _services_school_service__WEBPACK_IMPORTED_MODULE_15__["SchoolService"],
                    _services_skill_service__WEBPACK_IMPORTED_MODULE_16__["SkillService"],
                    _services_category_service__WEBPACK_IMPORTED_MODULE_17__["CategoryService"],
                    _services_popular_service__WEBPACK_IMPORTED_MODULE_18__["PopularService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class ApiService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] {
    postPublic(uri, data) {
        const ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data).subscribe((ret) => {
                if (ret && ret.success) {
                    observer.next(ret.data);
                }
                else {
                    observer.error(ret.error);
                }
            }, (err) => {
                observer.error(err.error);
            });
        });
        return ret;
        //return this.post<any>(environment.API + uri, data);
    }
    getPublic(uri) {
        const ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri).subscribe((ret) => {
                if (ret && ret.success) {
                    observer.next(ret.data);
                }
                else {
                    observer.error(ret.error);
                }
            }, (err) => {
                observer.error(err.error);
            });
        });
        return ret;
    }
    getPrivate(uri) {
        const token = localStorage.getItem("token");
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': token
        });
        const options = {
            headers: httpHeaders
        };
        const ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            if (!token) {
                observer.error('token not existed');
            }
            else {
                this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, options).subscribe((ret) => {
                    if (ret && ret.success) {
                        observer.next(ret.data);
                    }
                    else {
                        observer.error(ret.error);
                    }
                }, (err) => {
                    observer.error(err.error);
                });
            }
        });
        return ret;
    }
    postPrivate(uri, data) {
        const token = localStorage.getItem("token");
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': token
        });
        const options = {
            headers: httpHeaders
        };
        const ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            if (!token) {
                observer.error('token not existed');
            }
            else {
                this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data, options).subscribe((ret) => {
                    if (ret && ret.success) {
                        observer.next(ret.data);
                    }
                    else {
                        observer.error(ret.error);
                    }
                }, (err) => {
                    observer.error(err.error);
                });
            }
        });
        return ret;
    }
    postPrivateFormData(uri, data) {
        const token = localStorage.getItem("token");
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'authorization': token
        });
        const options = {
            headers: httpHeaders
        };
        const ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            if (!token) {
                observer.error('token not existed');
            }
            else {
                this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data, options).subscribe((ret) => {
                    observer.next(ret);
                }, (err) => {
                    observer.error(err.error);
                });
            }
        });
        return ret;
    }
    putPrivate(uri, data) {
        const token = localStorage.getItem("token");
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'authorization': token
        });
        const options = {
            headers: httpHeaders
        };
        const ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            if (!token) {
                observer.error('token not existed');
            }
            else {
                this.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data, options).subscribe((ret) => {
                    if (ret && ret.success) {
                        observer.next(ret.data);
                    }
                    else {
                        observer.error(ret.error);
                    }
                }, (err) => {
                    observer.error(err.error);
                });
            }
        });
        return ret;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return ɵApiService_BaseFactory(t || ApiService); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
const ɵApiService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ApiService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/auth2.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/auth2.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class AuthService {
    constructor(api) {
        this.api = api;
    }
    login(loginParams) {
        return this.api.postPublic('auth/login', loginParams);
    }
    signUp(signUpParams) {
        return this.api.postPublic('auth/register', signUpParams);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class CategoryService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('category', item);
    }
    update(id, item) {
        return this.api.putPrivate('category/' + id, item);
    }
    getAll() {
        return this.api.getPublic('category');
    }
    getAllByType(type) {
        return this.api.getPublic('category/type/' + type);
    }
    getAllByCountryCodeAndType(countryCode, type) {
        return this.api.getPublic('category/countryCode/' + countryCode + '/type/' + type);
    }
    get(id) {
        return this.api.getPublic('category/' + id);
    }
    deleteMany(ids) {
        return this.api.postPrivate('category/deleteMany', ids);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/certification.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/certification.service.ts ***!
  \***************************************************/
/*! exports provided: CertificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationService", function() { return CertificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class CertificationService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('certification', item);
    }
    update(id, item) {
        return this.api.putPrivate('certification/' + id, item);
    }
    getAll() {
        return this.api.getPublic('certification');
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('certification/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    get(id) {
        return this.api.getPublic('certification/' + id);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('certification/countryCode/' + countryCode + '/slug/' + slug);
    }
    deleteMany(ids) {
        return this.api.postPrivate('certification/deleteMany', ids);
    }
}
CertificationService.ɵfac = function CertificationService_Factory(t) { return new (t || CertificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CertificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CertificationService, factory: CertificationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class CityService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('city', item);
    }
    update(id, item) {
        return this.api.putPrivate('city/' + id, item);
    }
    getAll() {
        return this.api.getPrivate('city');
    }
    get(id) {
        return this.api.getPublic('city/' + id);
    }
    deleteMany(ids) {
        return this.api.postPrivate('city/deleteMany', ids);
    }
}
CityService.ɵfac = function CityService_Factory(t) { return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CityService, factory: CityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class CountryService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('country', item);
    }
    update(id, item) {
        return this.api.putPrivate('country/' + id, item);
    }
    getAll() {
        return this.api.getPrivate('country');
    }
    get(id) {
        return this.api.getPublic('country/' + id);
    }
    getByCode(code) {
        return this.api.getPublic('country/code/' + code);
    }
    deleteMany(ids) {
        return this.api.postPrivate('country/deleteMany', ids);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/degree.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/degree.service.ts ***!
  \********************************************/
/*! exports provided: DegreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreeService", function() { return DegreeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class DegreeService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('degree', item);
    }
    update(id, item) {
        return this.api.putPrivate('degree/' + id, item);
    }
    getAll() {
        return this.api.getPublic('degree');
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('degree/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    get(id) {
        return this.api.getPublic('degree/' + id);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('degree/countryCode/' + countryCode + '/slug/' + slug);
    }
    deleteMany(ids) {
        return this.api.postPrivate('degree/deleteMany', ids);
    }
}
DegreeService.ɵfac = function DegreeService_Factory(t) { return new (t || DegreeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
DegreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DegreeService, factory: DegreeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DegreeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/employer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employer.service.ts ***!
  \**********************************************/
/*! exports provided: EmployerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerService", function() { return EmployerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class EmployerService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('employer', item);
    }
    update(id, item) {
        return this.api.putPrivate('employer/' + id, item);
    }
    getAll() {
        return this.api.getPrivate('employer');
    }
    get(id) {
        return this.api.getPublic('employer/' + id);
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('employer/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('employer/countryCode/' + countryCode + '/slug/' + slug);
    }
    deleteMany(ids) {
        return this.api.postPrivate('employer/deleteMany', ids);
    }
}
EmployerService.ɵfac = function EmployerService_Factory(t) { return new (t || EmployerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
EmployerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployerService, factory: EmployerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/industry.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/industry.service.ts ***!
  \**********************************************/
/*! exports provided: IndustryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryService", function() { return IndustryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class IndustryService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('industry', item);
    }
    update(id, item) {
        return this.api.putPrivate('industry/' + id, item);
    }
    getAll() {
        return this.api.getPrivate('industry');
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('industry/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    get(id) {
        return this.api.getPublic('industry/' + id);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('industry/countryCode/' + countryCode + '/slug/' + slug);
    }
    deleteMany(ids) {
        return this.api.postPrivate('industry/deleteMany', ids);
    }
}
IndustryService.ɵfac = function IndustryService_Factory(t) { return new (t || IndustryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
IndustryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndustryService, factory: IndustryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndustryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class JobService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('job', item);
    }
    update(id, item) {
        return this.api.putPrivate('job/' + id, item);
    }
    getAll() {
        return this.api.getPublic('job');
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('job/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    get(id) {
        return this.api.getPublic('job/' + id);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('job/countryCode/' + countryCode + '/slug/' + slug);
    }
    deleteMany(ids) {
        return this.api.postPrivate('job/deleteMany', ids);
    }
}
JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/popular.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/popular.service.ts ***!
  \*********************************************/
/*! exports provided: PopularService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularService", function() { return PopularService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class PopularService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('popular', item);
    }
    update(id, item) {
        return this.api.putPrivate('popular/' + id, item);
    }
    getAll() {
        return this.api.getPublic('popular');
    }
    getAllByType(type) {
        return this.api.getPublic('popular/type/' + type);
    }
    getByCountryCodeAndType(countryCode, type) {
        return this.api.getPublic('popular/countryCode/' + countryCode + '/type/' + type);
    }
    get(id) {
        return this.api.getPublic('popular/' + id);
    }
    deleteMany(ids) {
        return this.api.postPrivate('popular/deleteMany', ids);
    }
}
PopularService.ɵfac = function PopularService_Factory(t) { return new (t || PopularService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
PopularService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PopularService, factory: PopularService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/school.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/school.service.ts ***!
  \********************************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class SchoolService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('school', item);
    }
    update(id, item) {
        return this.api.putPrivate('school/' + id, item);
    }
    getAll() {
        return this.api.getPublic('school');
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('school/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('school/countryCode/' + countryCode + '/slug/' + slug);
    }
    get(id) {
        return this.api.getPublic('school/' + id);
    }
    deleteMany(ids) {
        return this.api.postPrivate('school/deleteMany', ids);
    }
}
SchoolService.ɵfac = function SchoolService_Factory(t) { return new (t || SchoolService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SchoolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchoolService, factory: SchoolService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchoolService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/skill.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/skill.service.ts ***!
  \*******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class SkillService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('skill', item);
    }
    update(id, item) {
        return this.api.putPrivate('skill/' + id, item);
    }
    getAll() {
        return this.api.getPrivate('skill');
    }
    getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
        console.log('categorySlug====', categorySlug);
        return this.api.getPublic('skill/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
    }
    get(id) {
        return this.api.getPublic('skill/' + id);
    }
    getByCountryCodeAndSlug(countryCode, slug) {
        return this.api.getPublic('skill/countryCode/' + countryCode + '/slug/' + slug);
    }
    deleteMany(ids) {
        return this.api.postPrivate('skill/deleteMany', ids);
    }
}
SkillService.ɵfac = function SkillService_Factory(t) { return new (t || SkillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
SkillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkillService, factory: SkillService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");



class StateService {
    constructor(api) {
        this.api = api;
    }
    add(item) {
        return this.api.postPrivate('state', item);
    }
    update(id, item) {
        return this.api.putPrivate('state/' + id, item);
    }
    getAll() {
        return this.api.getPrivate('state');
    }
    get(id) {
        return this.api.getPublic('state/' + id);
    }
    deleteMany(ids) {
        return this.api.postPrivate('state/deleteMany', ids);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API: 'http://localhost:3004/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Library/WebServer/Documents/lux/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map