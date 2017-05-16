System.register('ucommerce-extension-module', ['@angular/common', '@angular/core', '@angular/http'], function($__export) {
  var Angularcommon, Angularcore, Angularhttp;


  function $__register__main__exports(exports) {
    for (var exportName in exports) {
	  $__export(exportName, exports[exportName]);
    }
  }

  function $__wsr__interop(m) {
	return m.__useDefault ? m.default : m;
  }

  return {
    setters: [
      function(m) {
        Angularcommon = $__wsr__interop(m);
      },
      function(m) {
        Angularcore = $__wsr__interop(m);
      },
      function(m) {
        Angularhttp = $__wsr__interop(m);
      }
    ],
    execute: function() {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Angularcore;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Angularhttp;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(1);
var core_1 = __webpack_require__(0);
var SomeService = (function () {
    function SomeService(http) {
        this.http = http;
    }
    return SomeService;
}());
SomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SomeService);
exports.SomeService = SomeService;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Angularcommon;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(1);
var some_service_1 = __webpack_require__(2);
var CustomEditor = (function () {
    function CustomEditor(http, someService) {
        this.http = http;
        this.someService = someService;
    }
    CustomEditor.prototype.ngOnInit = function () {
    };
    return CustomEditor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CustomEditor.prototype, "model", void 0);
CustomEditor = __decorate([
    core_1.Component({
        selector: 'custom-editor',
        template: '<h1>HELLO WORLD123</h1>',
        providers: []
    }),
    __metadata("design:paramtypes", [http_1.Http, some_service_1.SomeService])
], CustomEditor);
exports.CustomEditor = CustomEditor;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var custom_editor_1 = __webpack_require__(4);
var some_service_1 = __webpack_require__(2);
var http_1 = __webpack_require__(1);
var ExtensionsModule = (function () {
    function ExtensionsModule() {
    }
    return ExtensionsModule;
}());
ExtensionsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule
        ],
        exports: [
            core_1.forwardRef(function () { return custom_editor_1.CustomEditor; }),
            http_1.HttpModule
        ],
        declarations: [
            core_1.forwardRef(function () { return custom_editor_1.CustomEditor; })
        ],
        providers: [
            some_service_1.SomeService
        ]
    })
], ExtensionsModule);
exports.ExtensionsModule = ExtensionsModule;

$__register__main__exports(exports);

/***/ })
/******/ ]);
    }
  }
});
