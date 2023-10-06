/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/animation.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/animation.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@keyframes slideright{\n    from { \n        margin-left: 0;\n        opacity: 1;\n    }\n    to{ \n        margin-left: 50%;\n        opacity: 0;\n    }\n}\n@keyframes slideFromLeft{\n    from { \n        right: -310px;\n    }\n    to{ \n        right: 0;\n    }\n}\n@keyframes slideToLeft{\n    from { \n        right: 0;\n    }\n    to{ \n        right: -310px;\n    }\n}\n@keyframes slideToStart{\n    from{\n        margin-left:-50%;\n        opacity: 0;\n    }\n    to{\n        margin-left: 0px;\n        opacity: 1;\n    }\n}\n@keyframes slideTop{\n    from{\n        margin-top:0;\n        opacity: 1;\n    }\n    to{\n        margin-top: -600px;\n        opacity: 0;\n    }\n}\n@keyframes slideDown{\n    from{\n        top: -60px;\n    }to{\n        top: 0px;\n    }\n}\n\n@keyframes shake {\n    10%, 90% {\n      transform: translate3d(-1px, 0, 0);\n    }\n    \n    20%, 80% {\n      transform: translate3d(2px, 0, 0);\n    }\n  \n    30%, 50%, 70% {\n      transform: translate3d(-4px, 0, 0);\n    }\n  \n    40%, 60% {\n      transform: translate3d(4px, 0, 0);\n    }\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/animation.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./animation.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/animation.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n}\naside {\n  padding: 0px 20px;\n}\n:hover {\n  cursor: pointer;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  font-family: \"Montserrat\", sans-serif;\n  counter-reset: li;\n}\nbody {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.btn {\n  height: 36px;\n  line-height: 27px;\n  background-color: #f2f2f2;\n  border-radius: 2px;\n  border: 1px solid #f2f2f2;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 0 16px;\n}\n.btn:focus {\n  outline: none;\n}\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.btn:hover {\n  box-shadow: 0 0 2px #666;\n  outline: none;\n  cursor: pointer;\n}\n\n.btn-success {\n  background: #00897b;\n  color: #fff;\n  border: 1px solid #00897b;\n}\n.form-group {\n  margin-bottom: 10px;\n}\n.form-control {\n  width: 100%;\n  padding: 8px 16px;\n  font-size: 16px;\n  border: 1px solid #ddd;\n}\n.form-control:hover {\n  cursor: default;\n}\n.form-control:focus {\n  outline: none;\n  box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.3);\n}\n.wrapper,\n.game-field {\n  width: 80%;\n  padding: 30px;\n  margin: 50px auto;\n  background-color: #fff;\n}\n.game-field {\n  opacity: 0;\n}\n.title h1 {\n  text-align: center;\n  color: #8a1253;\n  font-weight: 400;\n}\n.data-item {\n  padding: 20px;\n}\n\n.description ul {\n  list-style-type: none;\n}\n.description ul li {\n  margin-bottom: 10px;\n}\n.description ul li:before {\n  content: counter(li);\n  counter-increment: li;\n  text-align: center;\n  padding: 2px;\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n  display: block;\n  background-color: #fda403;\n  color: #fff;\n  float: left;\n}\n.intro-data {\n  float: left;\n}\n.active {\n  display: block;\n}\n.container {\n  width: 100%;\n  min-height: 400px;\n  overflow: hidden;\n  position: relative;\n  margin-bottom: 20px;\n}\n.user-info,\n.game-details {\n  max-width: 500px;\n  margin-left: -100%;\n  opacity: 0;\n}\n.user-info.active,\n.game-details.active {\n  opacity: 1;\n}\n.start {\n  display: none;\n}\n.btn:disabled {\n  filter: grayscale(100%);\n}\n.game-details {\n  margin-left: -100%;\n}\n.data-item {\n  position: absolute;\n  min-height: 300px;\n}\nform label {\n  display: block;\n  margin-bottom: 5px;\n}\n.slide-right {\n  animation-name: slideright;\n  animation-duration: 0.5s;\n}\n.slide-to-start {\n  animation-name: slideToStart;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.slide-down {\n  animation-name: slideDown;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.slide-top {\n  animation-name: slideTop;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.shake {\n  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  backface-visibility: hidden;\n  perspective: 1000px;\n  transform: translate3d(0, 0, 0);\n}\n.game-details {\n  max-width: 1000px;\n}\n.images {\n  margin-right: 20px;\n  max-width: 500px;\n  float: left;\n}\n.dificulty {\n  float: right;\n}\n.dificulty input {\n  display: none;\n}\n.dificulty input + label {\n  display: block;\n  position: relative;\n  float: left;\n  margin-right: 10px;\n  width: 20px;\n  height: 20px;\n  background-color: #ccc;\n  border-radius: 50%;\n}\n\n.dificulty input:checked + label:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: calc(50% - 6px);\n  left: calc(50% - 6px);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #fda403;\n}\n.image {\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.image img {\n  height: 150px;\n}\n.image:hover img,\n.status-bar .submenu img:hover {\n  box-shadow: 0 0 10px #fda403;\n  cursor: pointer;\n}\n.selected-shirt {\n  box-shadow: 0 0 10px #fda403;\n}\n.card {\n  display: inline-block;\n  background-size: cover;\n  position: relative;\n  transition: all 0.5s linear;\n}\n.card.disabled {\n  opacity: 0.5;\n}\n.card.correct {\n  opacity: 0;\n}\n.front,\n.back {\n  width: 100%;\n  position: absolute;\n  background-size: cover;\n  backface-visibility: hidden;\n  background-repeat: no-repeat;\n  transition: transform 0.5s linear;\n  box-shadow: 0 0 5px #666;\n}\n\n.front {\n  background-color: #ccc;\n  transform: perspective(600px) rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n}\n.back {\n  transform: perspective(600px) rotateY(0deg);\n}\n.card.open > .front {\n  transform: perspective(600px) rotateY(0deg);\n}\n.card.open > .back {\n  transform: perspective(600px) rotateY(-180deg);\n}\n\n.status-bar {\n  padding: 20px 60px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #009688;\n  position: fixed;\n  top: -62px;\n  width: 100%;\n  z-index: 5;\n}\n.status-bar nav > a {\n  display: inline-block;\n  font-size: 16px;\n  text-decoration: none;\n  background: none;\n  border: none;\n  color: #fff;\n  padding: 1px 20px;\n}\n#timer {\n  display: inline-block;\n  min-width: 50px;\n}\n.status-bar nav > a:not(:last-child) {\n  border-right: 1px solid #fff;\n}\n.status-bar nav > a:last-child {\n  float: right;\n}\n.result {\n  font-size: 140px;\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  width: 100%;\n  top: 30%;\n}\n\n.submenu {\n  display: none;\n  position: absolute;\n  color: #333;\n  padding: 0px 39px;\n  max-width: 300px;\n  background-color: #fff;\n  left: 168px;\n  top: 49px;\n}\n.submenu#difficulty {\n  left: 254px;\n}\n.submenu.open {\n  display: block;\n}\n.submenu ul {\n  list-style: none;\n  padding: 0px;\n}\n.submenu ul li a {\n  color: #333;\n}\n.submenu ul li {\n  display: inline-block;\n  margin-bottom: 12px;\n}\n.submenu#difficulty ul li {\n  display: block;\n}\n.submenu ul li img {\n  width: 70px;\n}\n\n.top10 {\n  position: fixed;\n  width: 300px;\n  top: 61px;\n  background: #fff;\n  box-shadow: 0 0 10px #333;\n  right: -310px;\n  z-index: 1;\n}\n\n.top10.show {\n  animation-name: slideFromLeft;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.top10.hide {\n  animation-name: slideToLeft;\n  animation-duration: 0.5s;\n  animation-fill-mode: forwards;\n}\n.fa-bars {\n  transition: all 0.5s linear;\n}\n.fa-bars.open {\n  transform: rotate(90deg);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ \"./src/js/Settings.js\");\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Time */ \"./src/js/Time.js\");\n/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserForm */ \"./src/js/UserForm.js\");\n\n\n\nclass App {\n  timer;\n  userForm;\n  settings;\n  game;\n  gotItBtn = null;\n  startBtn = null;\n  sideBar = null;\n  pannels = [];\n  activeBlock = null;\n  static SLIDE_TO_START = \"slide-to-start\";\n  static SLIDE_TO_RIGHT = \"slide-right\";\n  static ACTIVE_CLASS = \"active\";\n  constructor() {\n    this.gotItBtn = document.querySelector(\"#got-it\");\n    this.pannels = document.querySelectorAll(\".data-item\");\n  }\n  init() {\n    this.timer = new _Time__WEBPACK_IMPORTED_MODULE_1__.Time();\n    this.gotItBtn.addEventListener(\"click\", this.#gotItBtnHandler);\n    this.pannels[0].classList.add(\"active\");\n    this.activeBlock = this.pannels[0];\n\n    this.pannels.forEach((pannel) => {\n      pannel.addEventListener(\n        \"webkitAnimationEnd\",\n        this.#onAnimationEndAction.bind(this)\n      );\n      pannel.addEventListener(\n        \"animationend\",\n        this.#onAnimationEndAction.bind(this)\n      );\n    });\n  }\n\n  #gotItBtnHandler = () => {\n    this.activeBlock.classList.remove(App.SLIDE_TO_START);\n    this.activeBlock.classList.add(App.SLIDE_TO_RIGHT);\n  };\n\n  #onAnimationEndAction() {\n    if (this.activeBlock.classList.contains(\"slide-to-start\")) {\n      return;\n    }\n    this.activeBlock.style.display = \"none\";\n    let nextItem = this.activeBlock.nextElementSibling;\n    this.activeBlock.classList.remove(App.ACTIVE_CLASS);\n    nextItem.classList.add(App.SLIDE_TO_START);\n    nextItem.classList.add(App.ACTIVE_CLASS);\n    this.activeBlock = nextItem;\n    if (nextItem.classList.contains(\"game-details\")) {\n      this.settings = new _Settings__WEBPACK_IMPORTED_MODULE_0__.Settings();\n      this.gotItBtn.style.display = \"none\";\n    }\n    if (nextItem.classList.contains(\"user-info\")) {\n      this.userForm = new _UserForm__WEBPACK_IMPORTED_MODULE_2__.UserForm();\n      this.userForm.init(this.gotItBtn);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/App.js?");

/***/ }),

/***/ "./src/js/Settings.js":
/*!****************************!*\
  !*** ./src/js/Settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Settings: () => (/* binding */ Settings)\n/* harmony export */ });\nclass Settings {\n  difficulty = null;\n  cardShirt = null;\n\n  dificultyOptions = [];\n  shirts = [];\n\n  startBtn = null;\n\n  constructor() {\n    this.dificultyOptions = document.querySelectorAll(\".dificulty-setting\");\n    this.shirts = document.querySelectorAll(\".image img\");\n    this.startBtn = document.querySelector(\".start\");\n  }\n\n  init() {\n    this.startBtn.style.display = \"inline-block\";\n    this.dificultyOptions.forEach((item) => {\n      item.addEventListener(\"click\", this.#difficultyItemHandler);\n    });\n\n    this.shirts.forEach((item, index, arr) => {\n      item.addEventListener(\"click\", this.#cardItemHandler);\n    });\n  }\n\n  #cardItemHandler(event) {\n    let current = document.querySelector(\".selected-shirt\");\n    if (current !== null) {\n      current.classList.remove(\"selected-shirt\");\n    }\n    const selectedShirt = this.getAttribute(\"src\");\n    localStorage.setItem(\"shirt\", selectedShirt);\n    this.classList.add(\"selected-shirt\");\n    const dificulty = document.querySelector(\".dificulty input:checked\");\n    if (dificulty !== null) {\n      startBtn.removeAttribute(\"disabled\");\n    }\n  }\n\n  #difficultyItemHandler(event) {\n    localStorage.setItem(\"difficulty\", this.getAttribute(\"id\"));\n    const card = document.querySelector(\".images .selected-shirt\");\n    if (card !== null) {\n      startBtn.removeAttribute(\"disabled\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Settings.js?");

/***/ }),

/***/ "./src/js/Time.js":
/*!************************!*\
  !*** ./src/js/Time.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Time: () => (/* binding */ Time)\n/* harmony export */ });\nclass Time {\n  timerId = null;\n\n  init() {\n    this.timerId = setInterval(() => {\n      let current = timer.innerHTML.split(\":\");\n      let minutes = Number(current[0]);\n      let seconds = Number(current[1]);\n\n      let nextSecond = String(seconds + 1);\n      if (seconds == 59) {\n        nextSecond = 0;\n        minutes = String(minutes + 1);\n      }\n\n      if (nextSecond < 10) {\n        nextSecond = \"0\" + nextSecond;\n      }\n      if (minutes < 10) {\n        minutes = \"0\" + minutes;\n      }\n      timer.innerHTML = minutes + \":\" + nextSecond;\n    }, 1000);\n  }\n\n  pause() {\n    clearInterval(this.timerId);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Time.js?");

/***/ }),

/***/ "./src/js/UserForm.js":
/*!****************************!*\
  !*** ./src/js/UserForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserForm: () => (/* binding */ UserForm)\n/* harmony export */ });\nclass UserForm {\n  lastName = null;\n  firstName = null;\n  formInputs = [];\n  email = null;\n  nextButton = null;\n\n  constructor() {\n    this.formInputs = document.querySelectorAll(\".user-info input\");\n  }\n\n  init(nextButton) {\n    this.nextButton = nextButton;\n    this.#getFormInput(\"first-name\").value = localStorage.getItem(\"first-name\");\n    this.#getFormInput(\"last-name\").value = localStorage.getItem(\"last-name\");\n    this.#getFormInput(\"email\").value = localStorage.getItem(\"email\");\n\n    this.formInputs.forEach((element) => {\n      element.addEventListener(\"keydown\", this.#formInputHanlder.bind(this));\n      element.addEventListener(\"blur\", this.#formInputHanlder.bind(this));\n    });\n    this.nextButton.setAttribute(\"disabled\", \"\");\n  }\n  #getFormInput(name) {\n    for (let i = 0; i < this.formInputs.length; i++) {\n      if (this.formInputs[i].id === name) {\n        return this.formInputs[i];\n      }\n    }\n  }\n  #formInputHanlder = (event) => {\n    let allAreNotEmpty = true;\n    this.formInputs.forEach((element) => {\n      if (element.value == \"\") {\n        allAreNotEmpty = false;\n        return;\n      }\n    });\n    if (allAreNotEmpty) {\n      localStorage.setItem(\n        \"first-name\",\n        this.#getFormInput(\"first-name\")?.value\n      );\n      localStorage.setItem(\"last-name\", this.#getFormInput(\"last-name\")?.value);\n      localStorage.setItem(\"email\", this.#getFormInput(\"email\").value);\n      this.nextButton.removeAttribute(\"disabled\");\n    }\n  };\n}\n\n\n//# sourceURL=webpack:///./src/js/UserForm.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/js/App.js\");\n\n\n\nconst app = new _App__WEBPACK_IMPORTED_MODULE_1__.App();\napp.init();\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;