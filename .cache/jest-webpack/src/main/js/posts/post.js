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

/***/ "./node_modules/babel-loader/lib/index.js??ref--4!./src/main/js/posts/post.js":
/*!***************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./src/main/js/posts/post.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ undefined);

var _react2 = _interopRequireDefault(_react);

var _delete = __webpack_require__(/*! ./delete.js */ 1);

var _delete2 = _interopRequireDefault(_delete);

var _update = __webpack_require__(/*! ./update.js */ 2);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
	console.log(props);
	// var key = get digit of props.post._links.href
	return _react2.default.createElement(
		'div',
		{ className: 'post-main' },
		_react2.default.createElement(_delete2.default, { getPosts: props.getPosts, post: props.post }),
		_react2.default.createElement(_update2.default, { content: props.post.content, post: props.post }),
		_react2.default.createElement(
			'div',
			{ className: 'post-content' },
			props.post.content
		)
	);
};

exports.default = Post;

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** entry reference ./src/main/js/posts/post.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "28dbf6e35825764c4f25489a8e6fac15c26a5e88": function() {return __webpack_require__('./node_modules/babel-loader/lib/index.js??ref--4!./src/main/js/posts/post.js');}
};


/***/ }),

/***/ 1:
/*!****************************************************************************************!*\
  !*** reference ./src/main/js/posts/delete.js.14b9355f556a0ca5198e5246803b96dbfcb644de ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

module.exports = require("./delete.js")["14b9355f556a0ca5198e5246803b96dbfcb644de"]();

/***/ }),

/***/ 2:
/*!****************************************************************************************!*\
  !*** reference ./src/main/js/posts/update.js.d76c55725d50be8988daa75f2bfe2b6e99ee4d48 ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

module.exports = require("./update.js")["d76c55725d50be8988daa75f2bfe2b6e99ee4d48"]();

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
//# sourceMappingURL=post.js.map