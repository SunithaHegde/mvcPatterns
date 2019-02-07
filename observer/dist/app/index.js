/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/Controller.js":
/*!*******************************!*\
  !*** ./src/app/Controller.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = function () {\n  function Controller(model) {\n    _classCallCheck(this, Controller);\n\n    this.model = model;\n    this.clickHandler = this.clickHandler.bind(this);\n  }\n\n  _createClass(Controller, [{\n    key: \"handleEvent\",\n    value: function handleEvent(e) {\n      e.stopPropagation();\n      //let self = this;\n      //  console.log(this.clickHandler);\n      switch (e.type) {\n        case \"click\":\n          this.clickHandler(e.target);\n          break;\n        default:\n          console.log(\"Something else\");\n      }\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(elm) {\n      this.model.heading = \"World\";\n      this.model.notifyAll();\n      //elm.innerText = this.model.heading;\n    }\n  }, {\n    key: \"getModelHeading\",\n    value: function getModelHeading() {\n      return this.model.heading;\n    }\n  }]);\n\n  return Controller;\n}();\n\nexports.default = Controller;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL0NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9Db250cm9sbGVyLmpzPzRhYmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IobW9kZWwpe1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBoYW5kbGVFdmVudChlKXtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvL2xldCBzZWxmID0gdGhpcztcclxuICAvLyAgY29uc29sZS5sb2codGhpcy5jbGlja0hhbmRsZXIpO1xyXG4gICAgc3dpdGNoKGUudHlwZSl7XHJcbiAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyKGUudGFyZ2V0KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIGVsc2VcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsaWNrSGFuZGxlcihlbG0pe1xyXG4gICAgdGhpcy5tb2RlbC5oZWFkaW5nID0gXCJXb3JsZFwiO1xyXG4gICAgdGhpcy5tb2RlbC5ub3RpZnlBbGwoKTtcclxuICAgIC8vZWxtLmlubmVyVGV4dCA9IHRoaXMubW9kZWwuaGVhZGluZztcclxuICB9XHJcbiAgZ2V0TW9kZWxIZWFkaW5nKCl7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5oZWFkaW5nO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBdkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/Controller.js\n");

/***/ }),

/***/ "./src/app/Model.js":
/*!**************************!*\
  !*** ./src/app/Model.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Model = function () {\n  function Model() {\n    _classCallCheck(this, Model);\n\n    this.heading = \"Hello\";\n    this.observers = [];\n  }\n\n  _createClass(Model, [{\n    key: \"registerObserver\",\n    value: function registerObserver(observer) {\n      this.observers.push(observer);\n    }\n  }, {\n    key: \"notifyAll\",\n    value: function notifyAll() {\n      var _this = this;\n\n      this.observers.forEach(function (observer) {\n        observer.update(_this);\n      });\n    }\n  }]);\n\n  return Model;\n}();\n\nexports.default = Model;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL01vZGVsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvTW9kZWwuanM/MmQzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaGVhZGluZyA9IFwiSGVsbG9cIjtcclxuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXIpe1xyXG4gICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgfVxyXG4gIG5vdGlmeUFsbCgpe1xyXG4gICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgb2JzZXJ2ZXIudXBkYXRlKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/Model.js\n");

/***/ }),

/***/ "./src/app/View.js":
/*!*************************!*\
  !*** ./src/app/View.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n  function View(controller) {\n    _classCallCheck(this, View);\n\n    this.controller = controller;\n    this.heading = document.getElementById(\"heading\");\n    this.heading.addEventListener('click', function () {\n      controller.handleEvent(event);\n    });\n    this.controller.model.registerObserver(this);\n  }\n\n  _createClass(View, [{\n    key: \"update\",\n    value: function update() {\n      this.heading.innerText = controller.getModelHeading();\n    }\n  }]);\n\n  return View;\n}();\n\nexports.default = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL1ZpZXcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9WaWV3LmpzPzlkODgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IoY29udHJvbGxlcil7XHJcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkaW5nXCIpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgIGNvbnRyb2xsZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRyb2xsZXIubW9kZWwucmVnaXN0ZXJPYnNlcnZlcih0aGlzKTtcclxuICB9XHJcbiAgdXBkYXRlKCl7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gY29udHJvbGxlci5nZXRNb2RlbEhlYWRpbmcoKTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQVhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/View.js\n");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Model = __webpack_require__(/*! ./Model.js */ \"./src/app/Model.js\");\n\nvar _Model2 = _interopRequireDefault(_Model);\n\nvar _Controller = __webpack_require__(/*! ./Controller.js */ \"./src/app/Controller.js\");\n\nvar _Controller2 = _interopRequireDefault(_Controller);\n\nvar _View = __webpack_require__(/*! ./View.js */ \"./src/app/View.js\");\n\nvar _View2 = _interopRequireDefault(_View);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction main() {\n  var model = new _Model2.default();\n  var controller = new _Controller2.default(model);\n  var view = new _View2.default(controller);\n  //console.log(document.getElementById(\"heading\"));\n}\nmain();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvaW5kZXguanM/NmZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIE1vZGVsICBmcm9tICcuL01vZGVsLmpzJztcclxuaW1wb3J0ICBDb250cm9sbGVyICBmcm9tICcuL0NvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgIFZpZXcgIGZyb20gJy4vVmlldy5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYWluKCl7XHJcbiAgbGV0IG1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbiAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCk7XHJcbiAgbGV0IHZpZXcgPSBuZXcgVmlldyhjb250cm9sbGVyKTtcclxuICAvL2NvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGluZ1wiKSk7XHJcbn1cclxubWFpbigpO1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/index.js\n");

/***/ })

/******/ });