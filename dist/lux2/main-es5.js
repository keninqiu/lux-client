(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'research',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | research-research-module */
          [__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("research-research-module")]).then(__webpack_require__.bind(null,
          /*! ./research/research.module */
          "./src/app/research/research.module.ts")).then(function (m) {
            return m.ResearchModule;
          });
        }
      }, {
        path: 'price-job',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | price-job-price-job-module */
          [__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("price-job-price-job-module")]).then(__webpack_require__.bind(null,
          /*! ./price-job/price-job.module */
          "./src/app/price-job/price-job.module.ts")).then(function (m) {
            return m.PriceJobModule;
          });
        }
      }, {
        path: 'survey',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | survey-survey-module */
          [__webpack_require__.e("default~home-home-module~price-job-price-job-module~research-research-module~survey-survey-module"), __webpack_require__.e("survey-survey-module")]).then(__webpack_require__.bind(null,
          /*! ./survey/survey.module */
          "./src/app/survey/survey.module.ts")).then(function (m) {
            return m.SurveyModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'lux2';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _services_auth2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/auth2.service */
      "./src/app/services/auth2.service.ts");
      /* harmony import */


      var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/country.service */
      "./src/app/services/country.service.ts");
      /* harmony import */


      var _services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/state.service */
      "./src/app/services/state.service.ts");
      /* harmony import */


      var _services_city_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/city.service */
      "./src/app/services/city.service.ts");
      /* harmony import */


      var _services_certification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/certification.service */
      "./src/app/services/certification.service.ts");
      /* harmony import */


      var _services_employer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/employer.service */
      "./src/app/services/employer.service.ts");
      /* harmony import */


      var _services_degree_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/degree.service */
      "./src/app/services/degree.service.ts");
      /* harmony import */


      var _services_industry_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/industry.service */
      "./src/app/services/industry.service.ts");
      /* harmony import */


      var _services_job_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/job.service */
      "./src/app/services/job.service.ts");
      /* harmony import */


      var _services_school_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/school.service */
      "./src/app/services/school.service.ts");
      /* harmony import */


      var _services_skill_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/skill.service */
      "./src/app/services/skill.service.ts");
      /* harmony import */


      var _services_category_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/category.service */
      "./src/app/services/category.service.ts");
      /* harmony import */


      var _services_popular_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/popular.service */
      "./src/app/services/popular.service.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_auth2_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"], _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"], _services_certification_service__WEBPACK_IMPORTED_MODULE_10__["CertificationService"], _services_employer_service__WEBPACK_IMPORTED_MODULE_11__["EmployerService"], _services_degree_service__WEBPACK_IMPORTED_MODULE_12__["DegreeService"], _services_industry_service__WEBPACK_IMPORTED_MODULE_13__["IndustryService"], _services_job_service__WEBPACK_IMPORTED_MODULE_14__["JobService"], _services_school_service__WEBPACK_IMPORTED_MODULE_15__["SchoolService"], _services_skill_service__WEBPACK_IMPORTED_MODULE_16__["SkillService"], _services_category_service__WEBPACK_IMPORTED_MODULE_17__["CategoryService"], _services_popular_service__WEBPACK_IMPORTED_MODULE_18__["PopularService"]],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_auth2_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"], _services_state_service__WEBPACK_IMPORTED_MODULE_8__["StateService"], _services_city_service__WEBPACK_IMPORTED_MODULE_9__["CityService"], _services_certification_service__WEBPACK_IMPORTED_MODULE_10__["CertificationService"], _services_employer_service__WEBPACK_IMPORTED_MODULE_11__["EmployerService"], _services_degree_service__WEBPACK_IMPORTED_MODULE_12__["DegreeService"], _services_industry_service__WEBPACK_IMPORTED_MODULE_13__["IndustryService"], _services_job_service__WEBPACK_IMPORTED_MODULE_14__["JobService"], _services_school_service__WEBPACK_IMPORTED_MODULE_15__["SchoolService"], _services_skill_service__WEBPACK_IMPORTED_MODULE_16__["SkillService"], _services_category_service__WEBPACK_IMPORTED_MODULE_17__["CategoryService"], _services_popular_service__WEBPACK_IMPORTED_MODULE_18__["PopularService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/api.service.ts": function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ApiService = /*#__PURE__*/function (_angular_common_http_) {
        _inherits(ApiService, _angular_common_http_);

        var _super = _createSuper(ApiService);

        function ApiService() {
          _classCallCheck(this, ApiService);

          return _super.apply(this, arguments);
        }

        _createClass(ApiService, [{
          key: "postPublic",
          value: function postPublic(uri, data) {
            var _this = this;

            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              _this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data).subscribe(function (ret) {
                if (ret && ret.success) {
                  observer.next(ret.data);
                } else {
                  observer.error(ret.error);
                }
              }, function (err) {
                observer.error(err.error);
              });
            });
            return ret; //return this.post<any>(environment.API + uri, data);
          }
        }, {
          key: "getPublic",
          value: function getPublic(uri) {
            var _this2 = this;

            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              _this2.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri).subscribe(function (ret) {
                if (ret && ret.success) {
                  observer.next(ret.data);
                } else {
                  observer.error(ret.error);
                }
              }, function (err) {
                observer.error(err.error);
              });
            });
            return ret;
          }
        }, {
          key: "getPrivate",
          value: function getPrivate(uri) {
            var _this3 = this;

            var token = localStorage.getItem("token");
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'authorization': token
            });
            var options = {
              headers: httpHeaders
            };
            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              if (!token) {
                observer.error('token not existed');
              } else {
                _this3.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, options).subscribe(function (ret) {
                  if (ret && ret.success) {
                    observer.next(ret.data);
                  } else {
                    observer.error(ret.error);
                  }
                }, function (err) {
                  observer.error(err.error);
                });
              }
            });
            return ret;
          }
        }, {
          key: "postPrivate",
          value: function postPrivate(uri, data) {
            var _this4 = this;

            var token = localStorage.getItem("token");
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'authorization': token
            });
            var options = {
              headers: httpHeaders
            };
            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              if (!token) {
                observer.error('token not existed');
              } else {
                _this4.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data, options).subscribe(function (ret) {
                  if (ret && ret.success) {
                    observer.next(ret.data);
                  } else {
                    observer.error(ret.error);
                  }
                }, function (err) {
                  observer.error(err.error);
                });
              }
            });
            return ret;
          }
        }, {
          key: "postPrivateFormData",
          value: function postPrivateFormData(uri, data) {
            var _this5 = this;

            var token = localStorage.getItem("token");
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'authorization': token
            });
            var options = {
              headers: httpHeaders
            };
            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              if (!token) {
                observer.error('token not existed');
              } else {
                _this5.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data, options).subscribe(function (ret) {
                  observer.next(ret);
                }, function (err) {
                  observer.error(err.error);
                });
              }
            });
            return ret;
          }
        }, {
          key: "putPrivate",
          value: function putPrivate(uri, data) {
            var _this6 = this;

            var token = localStorage.getItem("token");
            var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'authorization': token
            });
            var options = {
              headers: httpHeaders
            };
            var ret = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              if (!token) {
                observer.error('token not existed');
              } else {
                _this6.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API + uri, data, options).subscribe(function (ret) {
                  if (ret && ret.success) {
                    observer.next(ret.data);
                  } else {
                    observer.error(ret.error);
                  }
                }, function (err) {
                  observer.error(err.error);
                });
              }
            });
            return ret;
          }
        }]);

        return ApiService;
      }(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);

      ApiService.ɵfac = function ApiService_Factory(t) {
        return ɵApiService_BaseFactory(t || ApiService);
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac
      });

      var ɵApiService_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ApiService);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/auth2.service.ts": function srcAppServicesAuth2ServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(api) {
          _classCallCheck(this, AuthService);

          this.api = api;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(loginParams) {
            return this.api.postPublic('auth/login', loginParams);
          }
        }, {
          key: "signUp",
          value: function signUp(signUpParams) {
            return this.api.postPublic('auth/register', signUpParams);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/category.service.ts": function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
        return CategoryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var CategoryService = /*#__PURE__*/function () {
        function CategoryService(api) {
          _classCallCheck(this, CategoryService);

          this.api = api;
        }

        _createClass(CategoryService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('category', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('category/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPublic('category');
          }
        }, {
          key: "getAllByType",
          value: function getAllByType(type) {
            return this.api.getPublic('category/type/' + type);
          }
        }, {
          key: "getAllByCountryCodeAndType",
          value: function getAllByCountryCodeAndType(countryCode, type) {
            return this.api.getPublic('category/countryCode/' + countryCode + '/type/' + type);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('category/' + id);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('category/deleteMany', ids);
          }
        }]);

        return CategoryService;
      }();

      CategoryService.ɵfac = function CategoryService_Factory(t) {
        return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CategoryService,
        factory: CategoryService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/certification.service.ts": function srcAppServicesCertificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationService", function () {
        return CertificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var CertificationService = /*#__PURE__*/function () {
        function CertificationService(api) {
          _classCallCheck(this, CertificationService);

          this.api = api;
        }

        _createClass(CertificationService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('certification', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('certification/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPublic('certification');
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('certification/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('certification/' + id);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('certification/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('certification/deleteMany', ids);
          }
        }]);

        return CertificationService;
      }();

      CertificationService.ɵfac = function CertificationService_Factory(t) {
        return new (t || CertificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      CertificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CertificationService,
        factory: CertificationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/city.service.ts": function srcAppServicesCityServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CityService", function () {
        return CityService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var CityService = /*#__PURE__*/function () {
        function CityService(api) {
          _classCallCheck(this, CityService);

          this.api = api;
        }

        _createClass(CityService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('city', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('city/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPrivate('city');
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('city/' + id);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('city/deleteMany', ids);
          }
        }]);

        return CityService;
      }();

      CityService.ɵfac = function CityService_Factory(t) {
        return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      CityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CityService,
        factory: CityService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/country.service.ts": function srcAppServicesCountryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var CountryService = /*#__PURE__*/function () {
        function CountryService(api) {
          _classCallCheck(this, CountryService);

          this.api = api;
        }

        _createClass(CountryService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('country', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('country/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPrivate('country');
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('country/' + id);
          }
        }, {
          key: "getByCode",
          value: function getByCode(code) {
            return this.api.getPublic('country/code/' + code);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('country/deleteMany', ids);
          }
        }]);

        return CountryService;
      }();

      CountryService.ɵfac = function CountryService_Factory(t) {
        return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CountryService,
        factory: CountryService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/degree.service.ts": function srcAppServicesDegreeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DegreeService", function () {
        return DegreeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var DegreeService = /*#__PURE__*/function () {
        function DegreeService(api) {
          _classCallCheck(this, DegreeService);

          this.api = api;
        }

        _createClass(DegreeService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('degree', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('degree/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPublic('degree');
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('degree/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('degree/' + id);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('degree/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('degree/deleteMany', ids);
          }
        }]);

        return DegreeService;
      }();

      DegreeService.ɵfac = function DegreeService_Factory(t) {
        return new (t || DegreeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      DegreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DegreeService,
        factory: DegreeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DegreeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/employer.service.ts": function srcAppServicesEmployerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployerService", function () {
        return EmployerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var EmployerService = /*#__PURE__*/function () {
        function EmployerService(api) {
          _classCallCheck(this, EmployerService);

          this.api = api;
        }

        _createClass(EmployerService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('employer', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('employer/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPrivate('employer');
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('employer/' + id);
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('employer/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('employer/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('employer/deleteMany', ids);
          }
        }]);

        return EmployerService;
      }();

      EmployerService.ɵfac = function EmployerService_Factory(t) {
        return new (t || EmployerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      EmployerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployerService,
        factory: EmployerService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/industry.service.ts": function srcAppServicesIndustryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndustryService", function () {
        return IndustryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var IndustryService = /*#__PURE__*/function () {
        function IndustryService(api) {
          _classCallCheck(this, IndustryService);

          this.api = api;
        }

        _createClass(IndustryService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('industry', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('industry/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPrivate('industry');
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('industry/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('industry/' + id);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('industry/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('industry/deleteMany', ids);
          }
        }]);

        return IndustryService;
      }();

      IndustryService.ɵfac = function IndustryService_Factory(t) {
        return new (t || IndustryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      IndustryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: IndustryService,
        factory: IndustryService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndustryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/job.service.ts": function srcAppServicesJobServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobService", function () {
        return JobService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var JobService = /*#__PURE__*/function () {
        function JobService(api) {
          _classCallCheck(this, JobService);

          this.api = api;
        }

        _createClass(JobService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('job', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('job/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPublic('job');
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('job/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('job/' + id);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('job/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('job/deleteMany', ids);
          }
        }]);

        return JobService;
      }();

      JobService.ɵfac = function JobService_Factory(t) {
        return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JobService,
        factory: JobService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/popular.service.ts": function srcAppServicesPopularServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularService", function () {
        return PopularService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var PopularService = /*#__PURE__*/function () {
        function PopularService(api) {
          _classCallCheck(this, PopularService);

          this.api = api;
        }

        _createClass(PopularService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('popular', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('popular/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPublic('popular');
          }
        }, {
          key: "getAllByType",
          value: function getAllByType(type) {
            return this.api.getPublic('popular/type/' + type);
          }
        }, {
          key: "getByCountryCodeAndType",
          value: function getByCountryCodeAndType(countryCode, type) {
            return this.api.getPublic('popular/countryCode/' + countryCode + '/type/' + type);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('popular/' + id);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('popular/deleteMany', ids);
          }
        }]);

        return PopularService;
      }();

      PopularService.ɵfac = function PopularService_Factory(t) {
        return new (t || PopularService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      PopularService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PopularService,
        factory: PopularService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/school.service.ts": function srcAppServicesSchoolServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolService", function () {
        return SchoolService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var SchoolService = /*#__PURE__*/function () {
        function SchoolService(api) {
          _classCallCheck(this, SchoolService);

          this.api = api;
        }

        _createClass(SchoolService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('school', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('school/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPublic('school');
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('school/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('school/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('school/' + id);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('school/deleteMany', ids);
          }
        }]);

        return SchoolService;
      }();

      SchoolService.ɵfac = function SchoolService_Factory(t) {
        return new (t || SchoolService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      SchoolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SchoolService,
        factory: SchoolService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchoolService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/skill.service.ts": function srcAppServicesSkillServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillService", function () {
        return SkillService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var SkillService = /*#__PURE__*/function () {
        function SkillService(api) {
          _classCallCheck(this, SkillService);

          this.api = api;
        }

        _createClass(SkillService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('skill', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('skill/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPrivate('skill');
          }
        }, {
          key: "getAllByCountryCodeAndCategorySlug",
          value: function getAllByCountryCodeAndCategorySlug(countryCode, categorySlug) {
            console.log('categorySlug====', categorySlug);
            return this.api.getPublic('skill/countryCode/' + countryCode + '/categorySlug/' + categorySlug);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('skill/' + id);
          }
        }, {
          key: "getByCountryCodeAndSlug",
          value: function getByCountryCodeAndSlug(countryCode, slug) {
            return this.api.getPublic('skill/countryCode/' + countryCode + '/slug/' + slug);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('skill/deleteMany', ids);
          }
        }]);

        return SkillService;
      }();

      SkillService.ɵfac = function SkillService_Factory(t) {
        return new (t || SkillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      SkillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SkillService,
        factory: SkillService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/state.service.ts": function srcAppServicesStateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");

      var StateService = /*#__PURE__*/function () {
        function StateService(api) {
          _classCallCheck(this, StateService);

          this.api = api;
        }

        _createClass(StateService, [{
          key: "add",
          value: function add(item) {
            return this.api.postPrivate('state', item);
          }
        }, {
          key: "update",
          value: function update(id, item) {
            return this.api.putPrivate('state/' + id, item);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.api.getPrivate('state');
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.api.getPublic('state/' + id);
          }
        }, {
          key: "deleteMany",
          value: function deleteMany(ids) {
            return this.api.postPrivate('state/deleteMany', ids);
          }
        }]);

        return StateService;
      }();

      StateService.ɵfac = function StateService_Factory(t) {
        return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StateService,
        factory: StateService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Library/WebServer/Documents/lux/client/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map