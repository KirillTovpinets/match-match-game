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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ \"./src/js/Settings.js\");\n/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm */ \"./src/js/UserForm.js\");\n\n\nclass App {\n  timer;\n  userForm;\n  settings;\n  gotItBtn = null;\n  sideBar = null;\n  pannels = [];\n  activeBlock = null;\n  static SLIDE_TO_START = \"slide-to-start\";\n  static SLIDE_TO_RIGHT = \"slide-right\";\n  static ACTIVE_CLASS = \"active\";\n  constructor() {\n    this.gotItBtn = document.querySelector(\"#got-it\");\n    this.pannels = document.querySelectorAll(\".data-item\");\n  }\n  init() {\n    this.gotItBtn.addEventListener(\"click\", this.#gotItBtnHandler);\n    this.pannels[0].classList.add(\"active\");\n    this.activeBlock = this.pannels[0];\n\n    this.pannels.forEach((pannel) => {\n      pannel.addEventListener(\n        \"webkitAnimationEnd\",\n        this.#onAnimationEndAction.bind(this)\n      );\n      pannel.addEventListener(\n        \"animationend\",\n        this.#onAnimationEndAction.bind(this)\n      );\n    });\n  }\n\n  #gotItBtnHandler = () => {\n    this.activeBlock.classList.remove(App.SLIDE_TO_START);\n    this.activeBlock.classList.add(App.SLIDE_TO_RIGHT);\n  };\n\n  #onAnimationEndAction() {\n    if (this.activeBlock.classList.contains(\"slide-to-start\")) {\n      return;\n    }\n    this.activeBlock.style.display = \"none\";\n    let nextItem = this.activeBlock.nextElementSibling;\n    this.activeBlock.classList.remove(App.ACTIVE_CLASS);\n    nextItem.classList.add(App.SLIDE_TO_START);\n    nextItem.classList.add(App.ACTIVE_CLASS);\n    this.activeBlock = nextItem;\n    if (nextItem.classList.contains(\"game-details\")) {\n      this.settings = new _Settings__WEBPACK_IMPORTED_MODULE_0__.Settings();\n      this.gotItBtn.style.display = \"none\";\n      this.settings.init();\n    }\n    if (nextItem.classList.contains(\"user-info\")) {\n      this.userForm = new _UserForm__WEBPACK_IMPORTED_MODULE_1__.UserForm();\n      this.userForm.init(this.gotItBtn);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/App.js?");

/***/ }),

/***/ "./src/js/Card.js":
/*!************************!*\
  !*** ./src/js/Card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\n  card = null;\n  preloader = null;\n\n  imageElement = null;\n\n  constructor(width, height, margin, imageElement) {\n    this.imageElement = imageElement;\n    this.preloader = document.querySelector(\"#preloader\");\n\n    this.card = document.createElement(\"article\");\n    this.card.classList.add(\"card\");\n    this.card.style.marginRight = margin + \"px\";\n    this.card.style.marginBottom = margin + \"px\";\n    this.card.addEventListener(\"click\", this.#openCardAction);\n\n    let back = document.createElement(\"div\");\n    back.style.height = `100%`;\n    back.classList.add(\"back\");\n    const image = localStorage.getItem(\"shirt\");\n    back.style.backgroundImage = `url('${image}')`;\n    back.style.backgroundPosition = \"center\";\n    let front = document.createElement(\"div\");\n    front.classList.add(\"front\");\n    front.style.height = `100%`;\n\n    this.imageElement.style.height = \"100%\";\n    front.appendChild(this.imageElement);\n\n    this.card.appendChild(back);\n    this.card.appendChild(front);\n\n    this.card.style.width = width + \"px\";\n    this.card.style.height = height + \"px\";\n  }\n\n  #openCardAction() {\n    if (this.classList.contains(\"disabled\")) {\n      return;\n    }\n    this.classList.toggle(\"open\");\n    let alreadyOpen = document.querySelectorAll(\".open:not(.correct)\");\n    if (alreadyOpen.length === 2) {\n      if (\n        alreadyOpen[0].children[1].children[0].getAttribute(\"src\") ==\n        alreadyOpen[1].children[1].children[0].getAttribute(\"src\")\n      ) {\n        setTimeout(function () {\n          alreadyOpen.forEach(function (value, index, arr) {\n            value.classList.add(\"correct\");\n          });\n          let remainClosed = document.querySelectorAll(\".card:not(.open)\");\n\n          if (remainClosed.length === 0) {\n            clearInterval(window.game.finish());\n          }\n        }, 700);\n      } else {\n        setTimeout(function () {\n          alreadyOpen.forEach(function (value, index, arr) {\n            alreadyOpen[0].classList.add(\"shake\");\n            alreadyOpen[1].classList.add(\"shake\");\n          });\n        }, 500);\n        setTimeout(function () {\n          alreadyOpen.forEach(function (value, index, arr) {\n            value.classList.remove(...[\"open\", \"shake\"]);\n          });\n        }, 1000);\n      }\n    }\n  }\n\n  valueOf() {\n    return this.card;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Card.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/js/Card.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./src/js/Navbar.js\");\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Time */ \"./src/js/Time.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\n\n\nclass Game {\n  preloader = null;\n  timer = null;\n  navbar = null;\n  fieldHeight = 0;\n  fieldHeight = 0;\n  gameField = null;\n  difficultyConfig = {\n    easy: { height: 2, width: 5 },\n    normal: { height: 3, width: 6 },\n    expert: { height: 3, width: 8 },\n  };\n\n  get totalImageCount() {\n    return this.fieldHeight * this.fieldWidth;\n  }\n\n  get containerWidth() {\n    return this.gameField.clientWidth;\n  }\n  get cardWidth() {\n    return Math.round(\n      this.containerWidth / this.fieldWidth -\n        (this.fieldWidth - 2) * this.cardMargin * 0.7\n    );\n  }\n\n  get cardHeight() {\n    return Math.round(this.cardWidth * 1.5);\n  }\n\n  get cardMargin() {\n    return this.containerWidth / this.fieldWidth / 10;\n  }\n  constructor() {\n    this.preloader = document.querySelector(\"#preloader\");\n    this.gameField = document.querySelector(\".game-field\");\n    this.navbar = new _Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar();\n  }\n  init(difficulty) {\n    const config = this.difficultyConfig[difficulty];\n\n    this.fieldHeight = config.height;\n    this.fieldWidth = config.width;\n\n    this.updateTopList();\n    this.buildGameField();\n  }\n  updateTopList() {\n    const topListElement = document.querySelector(\".top10 ol\");\n    let topListItems = document.querySelectorAll(\".top10 ol li\");\n    let topListStorage = JSON.parse(localStorage.getItem(\"top10\"));\n    const currentUserEmail = localStorage.getItem(\"user-email\");\n\n    if (topListItems.length > 0) {\n      topListItems.forEach((element) => {\n        element.remove();\n      });\n    }\n    if (topListStorage !== null) {\n      topListStorage.sort((a, b) => {\n        let timeA = a.time.split(\":\");\n        let timeB = b.time.split(\":\");\n        return (\n          timeA[0] > timeB[0] || (timeA[0] == timeB[0] && timeA[1] > timeB[1])\n        );\n      });\n      let topList10 = topListStorage.slice(0, 10);\n      for (let item of topList10) {\n        let listItem = document.createElement(\"li\");\n        if (item.email == currentUserEmail) {\n          listItem.style.color = \"#fda403\";\n        }\n        listItem.innerText = `${item.userFname} ${item.userName} - ${item.time}`;\n        topListElement.appendChild(listItem);\n      }\n    }\n  }\n  buildGameField() {\n    preloader.classList.add(\"active\");\n    const statusBar = document.querySelector(\".status-bar\");\n\n    let icon = document.querySelector(\".fa-play\");\n    if (icon !== null) {\n      icon.classList.add(\"fa-pause\");\n      icon.classList.remove(\"fa-play\");\n    }\n\n    this.timer = new _Time__WEBPACK_IMPORTED_MODULE_2__.Time();\n    this.timer.init();\n\n    const cardsOnField = document.querySelectorAll(\".card\");\n    if (cardsOnField.length !== 0) {\n      cardsOnField.forEach(function (element, index, arr) {\n        element.remove();\n      });\n    }\n    const details = document.querySelector(\".wrapper\");\n    details.classList.add(\"slide-top\");\n\n    statusBar.classList.add(\"slide-down\");\n\n    let row = document.createElement(\"div\");\n    row.classList.add(\"clearfix\");\n    row.style.textAlign = \"center\";\n\n    const imageFactory = this.#getImageElement();\n    for (let i = 0; i < this.totalImageCount; i++) {\n      const imageElement = imageFactory();\n      const card = new _Card__WEBPACK_IMPORTED_MODULE_0__.Card(\n        this.cardWidth,\n        this.cardHeight,\n        this.cardMargin,\n        imageElement\n      );\n      row.appendChild(card.valueOf());\n      if ((i + 1) % this.fieldWidth === 0 && i !== 0) {\n        this.gameField.appendChild(row);\n        row = document.createElement(\"div\");\n        row.classList.add(\"clearfix\");\n        row.style.textAlign = \"center\";\n      }\n    }\n    this.gameField.appendChild(row);\n    row = document.createElement(\"div\");\n    this.gameField.style.opacity = \"1\";\n  }\n\n  finish() {\n    this.timer.pause();\n    this.#showResults();\n  }\n\n  #showResults() {\n    const userFname = localStorage.getItem(\"user-fname\");\n    const userName = localStorage.getItem(\"user-name\");\n    const email = localStorage.getItem(\"user-email\");\n    let result = document.createElement(\"h4\");\n    let timer = document.querySelector(\"#timer\");\n\n    result.classList.add(\"result\");\n    result.innerHTML = \"Your time is <br/>\";\n    let time = document.createElement(\"span\");\n    time.style.color = \"#F44336\";\n    time.innerText = timer.innerText;\n\n    let saveData = {\n      userFname,\n      userName,\n      email,\n      time: timer.innerText,\n    };\n\n    let topList = JSON.parse(localStorage.getItem(\"top10\"));\n    if (topList !== null) {\n      topList.push(saveData);\n    } else {\n      topList = [saveData];\n    }\n    localStorage.setItem(\"top10\", JSON.stringify(topList));\n    this.updateTopList();\n    result.appendChild(time);\n    let body = document.querySelector(\"body\");\n    body.prepend(result);\n\n    setTimeout(function () {\n      result.remove();\n    }, 2000);\n  }\n\n  #getImageElement() {\n    const imageIds = [];\n    const loadedImages = [];\n\n    return () => {\n      let randomId;\n\n      if (imageIds.length < this.totalImageCount / 2) {\n        randomId = Math.floor(Math.random() * (_constants__WEBPACK_IMPORTED_MODULE_3__.MAX_ID_NUMBER - 1) + 1);\n        imageIds.push(randomId);\n      } else {\n        let randomIndex = 0;\n        while (imageIds[randomIndex] === -1) {\n          randomIndex = Math.floor(Math.random() * imageIds.length);\n        }\n        randomId = imageIds[randomIndex];\n        imageIds[randomIndex] = -1;\n      }\n\n      const imageElement = document.createElement(\"img\");\n      imageElement.src = `https://i.pravatar.cc/300?img=${randomId}`;\n      imageElement.onload = () => {\n        loadedImages.push(randomId);\n\n        if (loadedImages.length === imageIds.length) {\n          this.preloader.classList.remove(\"active\");\n        }\n      };\n\n      return imageElement;\n    };\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Navbar.js":
/*!**************************!*\
  !*** ./src/js/Navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: () => (/* binding */ Navbar)\n/* harmony export */ });\nclass Navbar {\n  pauseBtn = null;\n  sideBar = null;\n\n  constructor() {\n    this.pauseBtn = document.querySelector(\"#pause\");\n    this.sideBar = document.querySelector(\"#sidebar\");\n  }\n\n  init() {\n    this.pauseBtn.addEventListener(\"click\", this.#pauseBtnHandler);\n    this.sideBar.addEventListener(\"click\", this.#sidebarHandler);\n  }\n\n  #sidebarHandler(event) {\n    let list = document.querySelector(\".top10\");\n    event.target.classList.toggle(\"open\");\n    list.classList.toggle(\"show\");\n    list.classList.toggle(\"hide\");\n  }\n\n  #pauseBtnHandler(event) {\n    let icon = document.querySelector(\"#pause .fa\");\n    let cards = document.querySelectorAll(\"article\");\n    if (icon.classList.contains(\"fa-pause\")) {\n      cards.forEach((element) => {\n        element.classList.add(\"disabled\");\n      });\n    } else {\n      cards.forEach((element) => {\n        element.classList.remove(\"disabled\");\n      });\n      gameTime = setInterval(() => {\n        let current = timer.innerHTML.split(\":\");\n        let minutes = Number(current[0]);\n        let seconds = Number(current[1]);\n\n        let nextSecond = String(seconds + 1);\n        if (seconds == 59) {\n          nextSecond = 0;\n          minutes = String(minutes + 1);\n        }\n\n        if (nextSecond < 10) {\n          nextSecond = \"0\" + nextSecond;\n        }\n        if (minutes < 10) {\n          minutes = \"0\" + minutes;\n        }\n        timer.innerHTML = minutes + \":\" + nextSecond;\n      }, 1000);\n    }\n    icon.classList.toggle(\"fa-pause\");\n    icon.classList.toggle(\"fa-play\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Navbar.js?");

/***/ }),

/***/ "./src/js/Settings.js":
/*!****************************!*\
  !*** ./src/js/Settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Settings: () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\n\nclass Settings {\n  difficulty = null;\n  cardShirt = null;\n\n  dificultyOptions = [];\n  shirts = [];\n\n  startBtn = null;\n\n  get difficultyValue() {\n    return this.difficulty.getAttribute(\"id\");\n  }\n\n  constructor() {\n    this.dificultyOptions = document.querySelectorAll(\".dificulty-setting\");\n    this.shirts = document.querySelectorAll(\".image img\");\n    this.startBtn = document.querySelector(\".start\");\n  }\n\n  init() {\n    this.startBtn.style.display = \"inline-block\";\n    this.dificultyOptions.forEach((item) => {\n      item.addEventListener(\"click\", this.#difficultyItemHandler.bind(this));\n    });\n\n    this.shirts.forEach((item) => {\n      item.addEventListener(\"click\", this.#cardItemHandler.bind(this));\n    });\n\n    this.startBtn.addEventListener(\"click\", this.#initGame.bind(this));\n  }\n\n  #initGame() {\n    const game = new _Game__WEBPACK_IMPORTED_MODULE_0__.Game();\n    game.init(this.difficultyValue);\n    window.game = game;\n  }\n\n  #cardItemHandler(event) {\n    if (this.cardShirt) {\n      this.cardShirt.classList.remove(\"selected-shirt\");\n    }\n    this.cardShirt = event.currentTarget;\n    const selectedShirt = this.cardShirt.getAttribute(\"src\");\n    localStorage.setItem(\"shirt\", selectedShirt);\n    this.cardShirt.classList.add(\"selected-shirt\");\n\n    if (this.difficulty !== null) {\n      this.startBtn.removeAttribute(\"disabled\");\n    }\n  }\n\n  #difficultyItemHandler(event) {\n    this.difficulty = event.currentTarget;\n    localStorage.setItem(\"difficulty\", this.difficulty.getAttribute(\"id\"));\n    if (this.cardShirt !== null) {\n      this.startBtn.removeAttribute(\"disabled\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Settings.js?");

/***/ }),

/***/ "./src/js/Time.js":
/*!************************!*\
  !*** ./src/js/Time.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Time: () => (/* binding */ Time)\n/* harmony export */ });\nclass Time {\n  timerId = null;\n\n  timer = null;\n\n  init() {\n    this.timer = document.querySelector(\"#timer\");\n    this.timer.innerText = \"00:00\";\n    this.timerId = setInterval(() => {\n      let current = timer.innerHTML.split(\":\");\n      let minutes = Number(current[0]);\n      let seconds = Number(current[1]);\n\n      let nextSecond = String(seconds + 1);\n      if (seconds == 59) {\n        nextSecond = 0;\n        minutes = String(minutes + 1);\n      }\n\n      if (nextSecond < 10) {\n        nextSecond = \"0\" + nextSecond;\n      }\n      if (minutes < 10) {\n        minutes = \"0\" + minutes;\n      }\n      timer.innerHTML = minutes + \":\" + nextSecond;\n    }, 1000);\n  }\n\n  pause() {\n    clearInterval(this.timerId);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Time.js?");

/***/ }),

/***/ "./src/js/UserForm.js":
/*!****************************!*\
  !*** ./src/js/UserForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserForm: () => (/* binding */ UserForm)\n/* harmony export */ });\nclass UserForm {\n  lastName = null;\n  firstName = null;\n  formInputs = [];\n  email = null;\n  nextButton = null;\n\n  constructor() {\n    this.formInputs = document.querySelectorAll(\".user-info input\");\n  }\n\n  init(nextButton) {\n    this.nextButton = nextButton;\n    this.#getFormInput(\"first-name\").value = localStorage.getItem(\"first-name\");\n    this.#getFormInput(\"last-name\").value = localStorage.getItem(\"last-name\");\n    this.#getFormInput(\"email\").value = localStorage.getItem(\"email\");\n\n    this.formInputs.forEach((element) => {\n      element.addEventListener(\"keydown\", this.#formInputHanlder.bind(this));\n      element.addEventListener(\"blur\", this.#formInputHanlder.bind(this));\n    });\n    this.nextButton.setAttribute(\"disabled\", \"\");\n  }\n  #getFormInput(name) {\n    for (let i = 0; i < this.formInputs.length; i++) {\n      if (this.formInputs[i].id === name) {\n        return this.formInputs[i];\n      }\n    }\n  }\n  #formInputHanlder = (event) => {\n    let allAreNotEmpty = true;\n    this.formInputs.forEach((element) => {\n      if (element.value == \"\") {\n        allAreNotEmpty = false;\n        return;\n      }\n    });\n    if (allAreNotEmpty) {\n      localStorage.setItem(\n        \"first-name\",\n        this.#getFormInput(\"first-name\")?.value\n      );\n      localStorage.setItem(\"last-name\", this.#getFormInput(\"last-name\")?.value);\n      localStorage.setItem(\"email\", this.#getFormInput(\"email\").value);\n      this.nextButton.removeAttribute(\"disabled\");\n    }\n  };\n}\n\n\n//# sourceURL=webpack:///./src/js/UserForm.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_ID_NUMBER: () => (/* binding */ MAX_ID_NUMBER),\n/* harmony export */   difficultiesMenuItems: () => (/* binding */ difficultiesMenuItems),\n/* harmony export */   dificultyBtn: () => (/* binding */ dificultyBtn),\n/* harmony export */   gameTime: () => (/* binding */ gameTime),\n/* harmony export */   newGameBtn: () => (/* binding */ newGameBtn),\n/* harmony export */   shirtList: () => (/* binding */ shirtList),\n/* harmony export */   shirtsBtn: () => (/* binding */ shirtsBtn)\n/* harmony export */ });\nlet difficultiesMenuItems = document.querySelectorAll(\n  \"#difficulty ul li a\"\n);\nlet newGameBtn = document.querySelector(\"#new-game\");\nlet shirtsBtn = document.querySelector(\"#change-shirts\");\nlet dificultyBtn = document.querySelector(\"#change-dificulty\");\nlet shirtList = document.querySelectorAll(\".submenu ul li img\");\n\nconst MAX_ID_NUMBER = 70;\nlet gameTime;\n\n\n//# sourceURL=webpack:///./src/js/constants.js?");

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