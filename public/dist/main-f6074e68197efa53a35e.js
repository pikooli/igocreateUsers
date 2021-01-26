/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ \"./js/welcome.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./js/user.js\");\n// css\n__webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\n\n // js\n\n$(function () {\n  (0,_welcome__WEBPACK_IMPORTED_MODULE_0__.createNewUser)();\n  (0,_user__WEBPACK_IMPORTED_MODULE_1__.editUser)();\n});\n\n//# sourceURL=webpack://myproject/./js/main.js?");

/***/ }),

/***/ "./js/user.js":
/*!********************!*\
  !*** ./js/user.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editUser\": function() { return /* binding */ editUser; }\n/* harmony export */ });\n/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/apiRequest */ \"./js/utils/apiRequest.js\");\n\nfunction editUser() {\n  $(\"#editUserForm\").on(\"submit\", function (e) {\n    e.preventDefault();\n    var inputArray = $(\"#editUserForm :input\");\n    var value = {};\n    inputArray.each(function () {\n      if ($(this).attr(\"name\")) value[$(this).attr(\"name\")] = $(this).val();\n    });\n    console.log(value);\n    _utils_apiRequest__WEBPACK_IMPORTED_MODULE_0__.default.put(\"\", value).then(function (data) {});\n  });\n}\n\n//# sourceURL=webpack://myproject/./js/user.js?");

/***/ }),

/***/ "./js/utils/alerts.js":
/*!****************************!*\
  !*** ./js/utils/alerts.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalAlert\": function() { return /* binding */ modalAlert; },\n/* harmony export */   \"modalAlertError\": function() { return /* binding */ modalAlertError; }\n/* harmony export */ });\nfunction modalAlert(text) {\n  alert(text);\n}\nfunction modalAlertError(text) {\n  alert(text ? text : \"Something went wrong please try again or contact your administrator system\");\n}\n\n//# sourceURL=webpack://myproject/./js/utils/alerts.js?");

/***/ }),

/***/ "./js/utils/apiRequest.js":
/*!********************************!*\
  !*** ./js/utils/apiRequest.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts */ \"./js/utils/alerts.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar api = {\n  get: function () {\n    var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!url) {\n                _context2.next = 4;\n                break;\n              }\n\n              _context2.next = 3;\n              return fetch(url).then( /*#__PURE__*/function () {\n                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          if (!(data.status === 200)) {\n                            _context.next = 6;\n                            break;\n                          }\n\n                          _context.next = 3;\n                          return data.json();\n\n                        case 3:\n                          return _context.abrupt(\"return\", _context.sent);\n\n                        case 6:\n                          data.text().then(function (text) {\n                            return (0,_alerts__WEBPACK_IMPORTED_MODULE_0__.modalAlertError)(text);\n                          });\n                          return _context.abrupt(\"return\", null);\n\n                        case 8:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x2) {\n                  return _ref.apply(this, arguments);\n                };\n              }())[\"catch\"](function (error) {\n                return console.log(\"error\", error);\n              });\n\n            case 3:\n              return _context2.abrupt(\"return\", _context2.sent);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function get(_x) {\n      return _get.apply(this, arguments);\n    }\n\n    return get;\n  }(),\n  \"delete\": function () {\n    var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              if (!url) {\n                _context4.next = 4;\n                break;\n              }\n\n              _context4.next = 3;\n              return fetch(url, {\n                method: \"DELETE\"\n              }).then( /*#__PURE__*/function () {\n                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {\n                  return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                    while (1) {\n                      switch (_context3.prev = _context3.next) {\n                        case 0:\n                          if (!(data.status === 202)) {\n                            _context3.next = 4;\n                            break;\n                          }\n\n                          return _context3.abrupt(\"return\", true);\n\n                        case 4:\n                          data.text().then(function (text) {\n                            return (0,_alerts__WEBPACK_IMPORTED_MODULE_0__.modalAlertError)(text);\n                          });\n                          return _context3.abrupt(\"return\", null);\n\n                        case 6:\n                        case \"end\":\n                          return _context3.stop();\n                      }\n                    }\n                  }, _callee3);\n                }));\n\n                return function (_x4) {\n                  return _ref2.apply(this, arguments);\n                };\n              }())[\"catch\"](function (error) {\n                return console.log(\"error\", error);\n              });\n\n            case 3:\n              return _context4.abrupt(\"return\", _context4.sent);\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    function _delete(_x3) {\n      return _delete2.apply(this, arguments);\n    }\n\n    return _delete;\n  }(),\n  post: function () {\n    var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(url, body) {\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              if (!body) {\n                _context6.next = 6;\n                break;\n              }\n\n              _context6.next = 3;\n              return fetch(url, {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(body)\n              }).then( /*#__PURE__*/function () {\n                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {\n                  return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                    while (1) {\n                      switch (_context5.prev = _context5.next) {\n                        case 0:\n                          if (!(data.status === 201)) {\n                            _context5.next = 4;\n                            break;\n                          }\n\n                          return _context5.abrupt(\"return\", true);\n\n                        case 4:\n                          data.text().then(function (text) {\n                            return (0,_alerts__WEBPACK_IMPORTED_MODULE_0__.modalAlertError)(text);\n                          });\n                          return _context5.abrupt(\"return\", null);\n\n                        case 6:\n                        case \"end\":\n                          return _context5.stop();\n                      }\n                    }\n                  }, _callee5);\n                }));\n\n                return function (_x7) {\n                  return _ref3.apply(this, arguments);\n                };\n              }())[\"catch\"](function (error) {\n                return console.log(\"error\", error);\n              });\n\n            case 3:\n              return _context6.abrupt(\"return\", _context6.sent);\n\n            case 6:\n              return _context6.abrupt(\"return\", null);\n\n            case 7:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    function post(_x5, _x6) {\n      return _post.apply(this, arguments);\n    }\n\n    return post;\n  }(),\n  put: function () {\n    var _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(url, body) {\n      return regeneratorRuntime.wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              if (!body) {\n                _context8.next = 6;\n                break;\n              }\n\n              _context8.next = 3;\n              return fetch(url, {\n                method: \"PUT\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(body)\n              }).then( /*#__PURE__*/function () {\n                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {\n                  return regeneratorRuntime.wrap(function _callee7$(_context7) {\n                    while (1) {\n                      switch (_context7.prev = _context7.next) {\n                        case 0:\n                          if (!(data.status === 201)) {\n                            _context7.next = 4;\n                            break;\n                          }\n\n                          return _context7.abrupt(\"return\", true);\n\n                        case 4:\n                          data.text().then(function (text) {\n                            return (0,_alerts__WEBPACK_IMPORTED_MODULE_0__.modalAlertError)(text);\n                          });\n                          return _context7.abrupt(\"return\", null);\n\n                        case 6:\n                        case \"end\":\n                          return _context7.stop();\n                      }\n                    }\n                  }, _callee7);\n                }));\n\n                return function (_x10) {\n                  return _ref4.apply(this, arguments);\n                };\n              }())[\"catch\"](function (error) {\n                return console.log(\"error\", error);\n              });\n\n            case 3:\n              return _context8.abrupt(\"return\", _context8.sent);\n\n            case 6:\n              return _context8.abrupt(\"return\", null);\n\n            case 7:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8);\n    }));\n\n    function put(_x8, _x9) {\n      return _put.apply(this, arguments);\n    }\n\n    return put;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n//# sourceURL=webpack://myproject/./js/utils/apiRequest.js?");

/***/ }),

/***/ "./js/welcome.js":
/*!***********************!*\
  !*** ./js/welcome.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewUser\": function() { return /* binding */ createNewUser; }\n/* harmony export */ });\n/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/apiRequest */ \"./js/utils/apiRequest.js\");\n\nfunction createNewUser() {\n  $(\"#createUserForm\").on(\"submit\", function (e) {\n    e.preventDefault();\n    var inputArray = $(\"#createUserForm :input\");\n    var value = {};\n    inputArray.each(function () {\n      if ($(this).attr(\"name\")) value[$(this).attr(\"name\")] = $(this).val();\n    });\n    _utils_apiRequest__WEBPACK_IMPORTED_MODULE_0__.default.post(\"/\", value).then(function (data) {});\n  });\n}\n\n//# sourceURL=webpack://myproject/./js/welcome.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://myproject/./scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;