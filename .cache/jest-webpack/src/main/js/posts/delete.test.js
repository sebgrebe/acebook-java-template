module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/js/posts/delete.test.js":
/*!******************************************!*\
  !*** ./src/main/js/posts/delete.test.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ undefined);

var _react2 = _interopRequireDefault(_react);

var _PostsBuilder = __webpack_require__(/*! ./PostsBuilder */ 1);

var _PostsBuilder2 = _interopRequireDefault(_PostsBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("when setting up testing", function () {
  it("should fail", function () {
    expect(1 + 1).toBe(2);
  });
});

describe("Testing delete", function () {

  // beforeAll(() => {
  //   const testBuilder = new PostsBuilder();
  //   testBuilder.state.push("string")
  //   console.log(testBuilder.state)
  // });

  it("should delete post with delete", function () {
    var testBuilder = new _PostsBuilder2.default();
    testBuilder.state = { posts: "string" };
    console.log(testBuilder.state);
    // expect(testBuilder.state).toBe(undefined)
  });
});
// function Delete(delete)

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** entry reference ./src/main/js/posts/delete.test.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "b2083c6d649ec4e4a02a8e039b67e1af9bb2a057": function() {return __webpack_require__('./src/main/js/posts/delete.test.js');}
};
module.exports["b2083c6d649ec4e4a02a8e039b67e1af9bb2a057"]();


/***/ }),

/***/ 1:
/*!**********************************************************************************************!*\
  !*** reference ./src/main/js/posts/PostsBuilder.js.024c133bf47416628f707bb49319c0af83978179 ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

module.exports = require("./PostsBuilder.js")["024c133bf47416628f707bb49319c0af83978179"]();

/***/ }),

/***/ undefined:
/*!****************************************************************!*\
  !*** external "../../../../../../node_modules/react/index.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("../../../../../../node_modules/react/index.js");

/***/ })

/******/ });
//# sourceMappingURL=delete.test.js.map