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

/***/ "./node_modules/babel-loader/lib/index.js??ref--4!./src/main/js/posts/PostsBuilder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./src/main/js/posts/PostsBuilder.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "undefined?3d22");

var _react2 = _interopRequireDefault(_react);

var _posts = __webpack_require__(/*! ./posts */ 1);

var _posts2 = _interopRequireDefault(_posts);

var _newpost = __webpack_require__(/*! ./newpost */ 2);

var _newpost2 = _interopRequireDefault(_newpost);

var _axios = __webpack_require__(/*! axios */ "undefined?c7a5");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsBuilder = function (_React$Component) {
  _inherits(PostsBuilder, _React$Component);

  function PostsBuilder(props) {
    _classCallCheck(this, PostsBuilder);

    var _this = _possibleConstructorReturn(this, (PostsBuilder.__proto__ || Object.getPrototypeOf(PostsBuilder)).call(this, props));

    _this.state = { posts: [] };
    _this.getPosts = _this.getPosts.bind(_this);
    return _this;
  }

  _createClass(PostsBuilder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getPosts();
    }
  }, {
    key: 'getPosts',
    value: function getPosts() {
      var _this2 = this;

      _axios2.default.get('/api/posts').then(function (response) {
        console.log(response);
        _this2.setState({ posts: response.data._embedded.posts });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_newpost2.default, { getPosts: this.getPosts }),
        _react2.default.createElement(_posts2.default, { getPosts: this.getPosts, posts: this.state.posts })
      );
    }
  }]);

  return PostsBuilder;
}(_react2.default.Component);

exports.default = PostsBuilder;

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** entry reference ./src/main/js/posts/PostsBuilder.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "024c133bf47416628f707bb49319c0af83978179": function() {return __webpack_require__('./node_modules/babel-loader/lib/index.js??ref--4!./src/main/js/posts/PostsBuilder.js');}
};


/***/ }),

/***/ 1:
/*!***************************************************************************************!*\
  !*** reference ./src/main/js/posts/posts.js.1a0bf616c63b50bf1a97598440110707981552ea ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

module.exports = require("./posts.js")["1a0bf616c63b50bf1a97598440110707981552ea"]();

/***/ }),

/***/ 2:
/*!*****************************************************************************************!*\
  !*** reference ./src/main/js/posts/newpost.js.660c486642b18c8f4e89dc36cb030a326a6d1156 ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

module.exports = require("./newpost.js")["660c486642b18c8f4e89dc36cb030a326a6d1156"]();

/***/ }),

/***/ "undefined?3d22":
/*!****************************************************************!*\
  !*** external "../../../../../../node_modules/react/index.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("../../../../../../node_modules/react/index.js");

/***/ }),

/***/ "undefined?c7a5":
/*!****************************************************************!*\
  !*** external "../../../../../../node_modules/axios/index.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("../../../../../../node_modules/axios/index.js");

/***/ })

/******/ });
//# sourceMappingURL=PostsBuilder.js.map