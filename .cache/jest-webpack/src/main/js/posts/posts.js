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

/***/ "./node_modules/babel-loader/lib/index.js??ref--4!./src/main/js/posts/posts.js":
/*!****************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./src/main/js/posts/posts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ undefined);

var _react2 = _interopRequireDefault(_react);

var _post = __webpack_require__(/*! ./post */ 1);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_React$Component) {
  _inherits(Posts, _React$Component);

  function Posts(props) {
    _classCallCheck(this, Posts);

    var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

    _this.renderPosts = _this.renderPosts.bind(_this);
    return _this;
  }

  _createClass(Posts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'article',
        { className: 'posts-main' },
        _react2.default.createElement(
          'h1',
          { className: 'posts-title' },
          'Posts'
        ),
        _react2.default.createElement(
          'div',
          { className: 'posts-items' },
          this.renderPosts()
        )
      );
    }
  }, {
    key: 'renderPosts',
    value: function renderPosts() {
      var _this2 = this;

      return this.props.posts.map(function (post) {
        return _react2.default.createElement(_post2.default, { getPosts: _this2.props.getPosts, post: post });
      });
    }
  }]);

  return Posts;
}(_react2.default.Component);

exports.default = Posts;

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** entry reference ./src/main/js/posts/posts.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "1a0bf616c63b50bf1a97598440110707981552ea": function() {return __webpack_require__('./node_modules/babel-loader/lib/index.js??ref--4!./src/main/js/posts/posts.js');}
};


/***/ }),

/***/ 1:
/*!**************************************************************************************!*\
  !*** reference ./src/main/js/posts/post.js.28dbf6e35825764c4f25489a8e6fac15c26a5e88 ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

module.exports = require("./post.js")["28dbf6e35825764c4f25489a8e6fac15c26a5e88"]();

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
//# sourceMappingURL=posts.js.map