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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/pexels-aaron-ulsh-2860705.jpg */ \"./src/images/pexels-aaron-ulsh-2860705.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/pexels-pok-rie-2049422.jpg */ \"./src/images/pexels-pok-rie-2049422.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    background-color: #2a4f80;\r\n    color: rgb(0, 0, 0);\r\n    font-family: 'Martian Mono', monospace;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 80px;\r\n    position: fixed;\r\n    z-index: 2;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\nheader h1 {\r\n    font-weight: bold;\r\n}\r\n\r\n#main {\r\n    width: 1300px;\r\n    height: 600px;\r\n    background-color: rgba(255, 255, 255, 0.332);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#main h3 {\r\n    margin-top: 0;\r\n}\r\n\r\n#gameboards {\r\n    width: 100%;\r\n    height: 90%;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#gameboards_footer {\r\n    width: 100%;\r\n    height: 10%;\r\n\r\n    background-color: #ffffffa2;\r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n#gameboards_footer .left_half {\r\n    width: 16%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#gameboards_footer .left_half button {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n\r\n    background-color: #ffffff00;\r\n    border-width: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n#gameboards_footer .left_half button:hover {\r\n    color: rgb(19, 187, 10);\r\n}\r\n\r\n#gameboards_footer .right_half {\r\n    width: 60%;\r\n}\r\n\r\n#player_grid,\r\n#computer_grid {\r\n    width: 400px;\r\n    height: 400px;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 1fr);\r\n    grid-template-columns: repeat(10, 1fr);\r\n}\r\n\r\n#player_grid {\r\n    display: grid;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n}\r\n\r\n#computer_grid {\r\n    display: grid;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-size: cover;\r\n}\r\n\r\n.tile {\r\n    width: 40px;\r\n    height: 40px;\r\n\r\n    font-size: 2rem;\r\n    background-color: rgba(0, 0, 0, 0.523);\r\n    color: #ffffff;\r\n\r\n    border-width: 1px;\r\n    border-color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n\r\n.no_enemies_found_icon {\r\n    display: none;\r\n    width: 15%;\r\n    position: relative;\r\n    bottom: 25%;\r\n    filter: invert(100%);\r\n}\r\n\r\n.enemies_found_icon {\r\n    display: none;\r\n    width: 60%;\r\n    position: relative;\r\n    bottom: 11%;\r\n}\r\n\r\n.board_heading {\r\n    text-decoration: underline;\r\n}\r\n\r\n.player_stats,\r\n.computer_stats {\r\n    display: flex;\r\n    width: 45%;\r\n    height: 100%;\r\n\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#document {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: aliceblue;\r\n\r\n    position: absolute;\r\n    padding: 20px;\r\n    width: max(30vw, 600px);\r\n    left: 35vw;\r\n    top: 12vh;\r\n    z-index: 5;\r\n\r\n    filter: drop-shadow(2px 2px 4px #323232);\r\n    border-width: 1px;\r\n    border-color: black;\r\n    border-style: solid;\r\n}\r\n\r\n#document div {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#document div h3 {\r\n    margin: 0;\r\n    margin-top: 15px;\r\n}\r\n\r\n#document div img {\r\n    margin-right: 20px;\r\n}\r\n\r\n#document button {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    height: 30px;\r\n\r\n    color: rgb(221, 15, 15);\r\n    border-color: rgb(221, 15, 15);\r\n    background-color: white;\r\n}\r\n\r\n#document button:active {\r\n    color: black;\r\n    border-color: black;\r\n}\r\n\r\n#document .fields {\r\n    color: blue;\r\n    background-color: white;\r\n}\r\n\r\n#document .important {\r\n    color: rgb(221, 15, 15);\r\n    background-color: white;\r\n}\r\n\r\n#win {\r\n    display: flex;\r\n}\r\n\r\n#lose {\r\n    display: none;\r\n}\r\n\r\n.display_winner {\r\n    background-color: #ffffff;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 800px;\r\n    height: 400px;\r\n    position: absolute;\r\n    z-index: 5;\r\n}\r\n\r\n.display_winner img {\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.display_winner div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 45%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.display_winner div h2 {\r\n    margin-bottom: 16px;\r\n    margin-top: 0;\r\n}\r\n\r\n.display_winner div p {\r\n    margin-top: 5px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.display_winner .rating_and_restart {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n\r\n.display_winner .star_rating {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.display_winner .star {\r\n    width: 20px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.display_winner .stars div{\r\n    width: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.display_winner .star_icon{\r\n    display: none;\r\n}\r\n\r\n.display_winner button {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.display_winner .stars {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n}\r\n\r\n\r\n#filter {\r\n    position: fixed;\r\n    z-index: 3;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #000000d9;\r\n\r\n    transition: ease-in-out 0.15s;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domFunctions.js":
/*!*****************************!*\
  !*** ./src/domFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAttackOnDom: () => (/* binding */ displayAttackOnDom),\n/* harmony export */   displayComputerWinner: () => (/* binding */ displayComputerWinner),\n/* harmony export */   displayPlayerShips: () => (/* binding */ displayPlayerShips),\n/* harmony export */   displayPlayerWinner: () => (/* binding */ displayPlayerWinner),\n/* harmony export */   displayShipsRemaining: () => (/* binding */ displayShipsRemaining),\n/* harmony export */   removeHelpText: () => (/* binding */ removeHelpText)\n/* harmony export */ });\nconst playerGameboard = document.getElementById(\"player_grid\");\r\nconst computerGameboard = document.getElementById(\"computer_grid\");\r\n\r\nfunction createTile(path) {\r\n    const tile = document.createElement(\"button\");\r\n    tile.className = \"tile\";\r\n    tile.id = `${path[0]}, ${path[1]}`;\r\n\r\n    const noEnemiesFoundIcon = document.createElement(\"img\");\r\n    noEnemiesFoundIcon.src = \"../src/icons/2203520_circle_dot_record_round_icon.svg\";\r\n    noEnemiesFoundIcon.className = \"no_enemies_found_icon\";\r\n\r\n    const enemiesFoundIcon = document.createElement(\"img\");\r\n    enemiesFoundIcon.src = \"../src/icons/116853_fire_icon.svg\";\r\n    enemiesFoundIcon.className = \"enemies_found_icon\";\r\n\r\n    tile.appendChild(enemiesFoundIcon);\r\n    tile.appendChild(noEnemiesFoundIcon);\r\n\r\n    return tile;\r\n}\r\n\r\ndocument.getElementById(\"cancel_briefing_button\").addEventListener(\"click\", () => {\r\n    const backgroundFilter = document.getElementById(\"filter\");\r\n    backgroundFilter.style.backgroundColor = \"#00000000\";\r\n    document.getElementById(\"document\").style.display = \"none\";\r\n    setTimeout(() => {\r\n        backgroundFilter.style.display = \"none\";\r\n    }, 400);\r\n});\r\n\r\ndocument.querySelectorAll(\".restart_button\").forEach(button => {\r\n    button.addEventListener(\"click\", () => {\r\n        window.location.reload();\r\n    });\r\n})\r\n\r\nfor (let i = 0; i <= 9; i++) {\r\n    for (let j = 0; j <= 9; j++) {\r\n        playerGameboard.appendChild(createTile([j, i]));\r\n    }\r\n}\r\nfor (let i = 0; i <= 9; i++) {\r\n    for (let j = 0; j <= 9; j++) {\r\n        computerGameboard.appendChild(createTile([j, i]));\r\n    }\r\n}\r\n\r\nfunction displayAttackOnDom(isShipFound, path, player = \"\") {\r\n    const pathString = path.join(\", \");\r\n    const grid = document.getElementById(`${player}_grid`);\r\n    grid.querySelectorAll(\".tile\").forEach(tile => { displayAttack(tile, pathString, isShipFound) });\r\n\r\n}\r\n\r\nfunction displayAttack(tile, pathString, isShipFound) {\r\n    if (tile.id === pathString) {\r\n        tile.className = \"tile clicked\";\r\n        if (isShipFound === \"shipFound\") {\r\n            tile.style.backgroundColor = \"rgba(0, 0, 0, 0.881)\";\r\n            tile.querySelector(\".enemies_found_icon\").style.display = \"inline\";\r\n        } else {\r\n            tile.style.backgroundColor = \"rgba(0, 0, 0, 0.881)\";\r\n            tile.querySelector(\".no_enemies_found_icon\").style.display = \"inline\";\r\n        }\r\n    };\r\n}\r\n\r\nfunction removeHelpText() {\r\n    document.querySelectorAll(\".help_text\").forEach(node => {\r\n        node.style.display = \"none\";\r\n    });\r\n\r\n}\r\n\r\nfunction displayShipsRemaining(numOfShips, player = \"\") {\r\n    document.getElementById(`${player}_ships_remaining`).textContent = numOfShips;\r\n}\r\n\r\nfunction displayPlayerShips(coordinates) {\r\n    document.querySelectorAll(\".tile\").forEach(tile => {\r\n        tile.style.backgroundColor = \"rgba(0, 0, 0, 0.523)\";\r\n    });\r\n    coordinates.forEach(coord => {\r\n        const pathString = coord.join(\", \");\r\n        const tile = document.getElementById(pathString);\r\n        tile.style.backgroundColor = \"rgba(12, 190, 42, 0.732)\";\r\n    });\r\n}\r\n\r\nfunction displayComputerWinner() {\r\n    const backgroundFilter = document.getElementById(\"filter\");\r\n    backgroundFilter.style.display = \"flex\";\r\n    setTimeout(() => {\r\n        backgroundFilter.style.backgroundColor = \"##000000d9\";\r\n        document.getElementById(\"lose\").style.display = \"flex\";\r\n    }, 400);\r\n}\r\n\r\nfunction displayPlayerWinner(shipsDestroyed) {\r\n    const backgroundFilter = document.getElementById(\"filter\");\r\n    const winTextContainer = document.getElementById(\"win\");\r\n    backgroundFilter.style.display = \"flex\";\r\n    setTimeout(() => {\r\n        backgroundFilter.style.backgroundColor = \"#000000d9\";\r\n        winTextContainer.style.display = \"flex\";\r\n    }, 400);\r\n\r\n    for (let i = 0; i <= shipsDestroyed; i++) {\r\n        const stars = document.querySelectorAll(\".stars\");\r\n        stars.forEach(star => {\r\n        });\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://battleship/./src/domFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFunctions.js */ \"./src/domFunctions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\r\n\r\n\r\nclass Ship {\r\n    constructor(coordinates = [], length = 0, timesHit = 0, sunk = false) {\r\n        this.coordinates = coordinates;\r\n        this.length = length;\r\n        this.timesHit = timesHit;\r\n        this.sunk = sunk;\r\n    }\r\n\r\n    hit() {\r\n        this.timesHit++;\r\n        this._isSunk();\r\n    }\r\n\r\n    _isSunk() {\r\n        if (this.timesHit >= this.length) this.sunk = true;\r\n    }\r\n}\r\n\r\nclass Gameboard {\r\n    constructor() {\r\n        this.board = [];\r\n        this.ships = [];\r\n        this.sunkenShips = [];\r\n    }\r\n\r\n    initializeBoard() {\r\n        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\r\n        for (let i = 0; i < array.length; i++) {\r\n            for (let j = 0; j < array.length; j++) {\r\n                this.board.push([j, i]);\r\n            }\r\n        }\r\n    }\r\n\r\n    resetGame() {\r\n        this.board = [];\r\n        this.ships = [];\r\n        this.sunkenShips = [];\r\n    }\r\n\r\n    placeShip(s, e) {\r\n        let coordinates = [];\r\n        let length = 0;\r\n\r\n        // 4, 4 >>> 2, 4\r\n        if (s[0] === e[0] && s[1] < e[1]) {\r\n            for (let i = s[1]; i <= e[1]; i++) {\r\n                length++;\r\n                coordinates.push([s[0], i]);\r\n            };\r\n        } else if (s[0] === e[0] && s[1] > e[1]) {\r\n            for (let i = s[1]; i >= e[1]; i--) {\r\n                length++;\r\n                coordinates.push([s[0], i]);\r\n            };\r\n        } else if (s[1] === e[1] && s[0] < e[0]) {\r\n            for (let i = s[0]; i <= e[0]; i++) {\r\n                length++;\r\n                coordinates.push([i, s[1]]);\r\n            };\r\n        } else if (s[1] === e[1] && s[0] > e[0]) {\r\n            for (let i = s[0]; i >= e[0]; i--) {\r\n                length++;\r\n                coordinates.push([i, s[1]]);\r\n            };\r\n        } else if (s[0] === e[0] && s[1] === e[1]) {\r\n            length++;\r\n            coordinates.push([s[0], s[1]]);\r\n        }\r\n\r\n        let ship = new Ship(coordinates, length);\r\n        this.ships.push(ship);\r\n        return coordinates;\r\n    }\r\n\r\n    receiveAttack(path) {\r\n        let isShipHit = \"noShipFound\";\r\n        this.board.forEach(point => {\r\n            if (point[0] === path[0] && point[1] === path[1]) {\r\n                point[0] = \"x\";\r\n                point[1] = \"x\";\r\n            }\r\n        });\r\n        for (let i = 0; i < this.ships.length; i++) {\r\n            let currantShip = this.ships[i];\r\n            for (let j = 0; j < currantShip.coordinates.length; j++) {\r\n                if (path[0] === currantShip.coordinates[j][0] && path[1] === currantShip.coordinates[j][1]) {\r\n                    currantShip.hit();\r\n                    if (currantShip.sunk) {\r\n                        this.sunkenShips.push(currantShip);\r\n                        this.ships.splice(i, 1);\r\n                    }\r\n                    isShipHit = \"shipFound\";\r\n                }\r\n            }\r\n        }\r\n        return isShipHit;\r\n    }\r\n\r\n    hasShipsLeft() {\r\n        return this.ships.length === 0 ? false : true;\r\n    }\r\n\r\n    setRandomShips() {\r\n        this.ships = [];\r\n        let shipLengths = [5, 6, 4, 3, 2];\r\n        const randomShip = (lenOfShip) => {\r\n\r\n            let startX = this._getRandomInt(0, 9);\r\n            let startY = this._getRandomInt(0, 9);\r\n            let endX = 0;\r\n            let endY = 0;\r\n\r\n            if ((startX + lenOfShip) > 9 && (startY + lenOfShip) > 9) {\r\n                return randomShip(lenOfShip);\r\n            }\r\n            // [4, 3] ship is of length 5;\r\n            if (startX > startY) {\r\n                endY = (startY + lenOfShip) - 1;\r\n                endX = startX;\r\n            }\r\n            else {\r\n                endX = (startX + lenOfShip) - 1;\r\n                endY = startY;\r\n            }\r\n\r\n            if (this.ships.length != 0) {\r\n                this.placeShip([startX, startY], [endX, endY]);\r\n                const newShip = this.ships.pop();\r\n\r\n                let coords = this.getAllShipCoordinates();\r\n\r\n                const currantShipCoords = newShip.coordinates;\r\n                for (let i = 0; i < coords.length; i++) {\r\n                    for (let j = 0; j < currantShipCoords.length; j++) {\r\n                        if (coords[i][0] === currantShipCoords[j][0] && coords[i][1] === currantShipCoords[j][1]) {\r\n                            return randomShip(lenOfShip);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            this.placeShip([startX, startY], [endX, endY]);\r\n        }\r\n\r\n        shipLengths.forEach(length => {\r\n            randomShip(length);\r\n        });\r\n    }\r\n\r\n    getAllShipCoordinates() {\r\n        let coords = [];\r\n        this.ships.forEach(ship => {\r\n            ship.coordinates.forEach(coord => {\r\n                coords.push(coord);\r\n            });\r\n        });\r\n        return coords;\r\n    }\r\n\r\n    randomAttack() {\r\n        let startX = this._getRandomInt(0, 9);\r\n        let startY = this._getRandomInt(0, 9);\r\n        return [startX, startY];\r\n    }\r\n\r\n    _getRandomInt(min, max) {\r\n        min = Math.ceil(min);\r\n        max = Math.floor(max);\r\n        return Math.floor(Math.random() * (max - min + 1)) + min;\r\n    }\r\n}\r\n\r\nclass Player {\r\n    constructor() {\r\n        this.player = \"player\";\r\n        this.gameboard = new Gameboard();\r\n        this.hasShips = false;\r\n        this.numberOfShips = 0;\r\n    }\r\n}\r\n\r\nclass Computer {\r\n    constructor() {\r\n        this.player = \"computer\";\r\n        this.gameboard = new Gameboard();\r\n        this.hasShips = false;\r\n        this.numberOfShips = 0;\r\n    }\r\n}\r\n\r\nfunction handleAttack(tile, player) {\r\n    let stringPath = tile.id.split(\", \");\r\n    let path = stringPath.map(Number);\r\n    let numOfShipsLeft = player.gameboard.ships.length;\r\n    let isShipFound = player.gameboard.receiveAttack(path);\r\n\r\n    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayAttackOnDom)(isShipFound, path, player.player);\r\n    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayShipsRemaining)(player.gameboard.ships.length, player.player);\r\n\r\n    if (numOfShipsLeft > player.gameboard.ships.length) {\r\n        let adjacentTiles = adjacentTilesReveal(player);\r\n        attackAllAdjacentTiles(adjacentTiles, player);\r\n    }\r\n}\r\n\r\nfunction adjacentTilesReveal(player) {\r\n    const adjacentTileMoves = [[1, 0],\r\n    [1, 1],\r\n    [0, 1],\r\n    [-1, 1],\r\n    [-1, 0],\r\n    [-1, -1],\r\n    [0, -1],\r\n    [1, -1]];\r\n    let ship = player.gameboard.sunkenShips.shift();\r\n    let queue = ship.coordinates;\r\n    let adjacentTiles = [];\r\n    while (queue.length) {\r\n        let coord = queue.shift();\r\n        for (let i = 0; i < adjacentTileMoves.length; i++) {\r\n            let x = adjacentTileMoves[i][0] + coord[0];\r\n            let y = adjacentTileMoves[i][1] + coord[1];\r\n            adjacentTiles.push([x, y]);\r\n        }\r\n    }\r\n    return adjacentTiles;\r\n}\r\n\r\nfunction attackAllAdjacentTiles(adjacentTiles, player) {\r\n    while (adjacentTiles.length) {\r\n        const currantTile = adjacentTiles.shift();\r\n        const currantTileString = currantTile.join(\", \");\r\n        const grid = document.getElementById(`${player.player}_grid`);\r\n        grid.querySelectorAll(\".tile\").forEach(tile => {\r\n            if (tile.id === currantTileString) {\r\n                if (tile.className != \"tile clicked\") {\r\n                    handleAttack(tile, player);\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nfunction game() {\r\n\r\n    const computer = new Computer();\r\n    computer.gameboard.initializeBoard();\r\n    computer.gameboard.setRandomShips();\r\n\r\n    const player = new Player();\r\n    player.gameboard.initializeBoard();\r\n    player.gameboard.setRandomShips();\r\n    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayPlayerShips)(player.gameboard.getAllShipCoordinates());\r\n\r\n    document.getElementById(\"randomise_button\").addEventListener(\"click\", () => {\r\n        player.gameboard.setRandomShips(5);\r\n        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayPlayerShips)(player.gameboard.getAllShipCoordinates());\r\n    });\r\n\r\n    document.getElementById(\"reset_button\").addEventListener(\"click\", () => {\r\n        window.location.reload();\r\n    });\r\n\r\n    document.getElementById(\"start_game_button\").addEventListener(\"click\", () => {\r\n\r\n        document.getElementById(\"start_game_button\").disabled = true;\r\n        document.getElementById(\"randomise_button\").disabled = true;\r\n\r\n        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.removeHelpText)();\r\n        const grid = document.getElementById(`${computer.player}_grid`);\r\n        grid.querySelectorAll(\".tile\").forEach(tile => {\r\n            tile.addEventListener(\"click\", function handleTileClicks() {\r\n                if (tile.className != \"tile clicked\") {\r\n                    handleAttack(tile, computer);\r\n                    handleAttack(getRandomTile(computer), player);\r\n                    if (!computer.gameboard.hasShipsLeft()) {\r\n                        console.log(player.gameboard.ships.length);\r\n                        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayPlayerWinner)(player.gameboard.ships.length);\r\n                    }\r\n                    if (!player.gameboard.hasShipsLeft()) {\r\n                        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayComputerWinner)();\r\n                    }\r\n                }\r\n            });\r\n        });\r\n    });\r\n}\r\n\r\nfunction getRandomTile(player) {\r\n    const grid = document.getElementById(`${player.player}_grid`);\r\n    const path = player.gameboard.randomAttack();\r\n    const pathString = path.join(\", \");\r\n    let tile;\r\n    grid.querySelectorAll(\".tile\").forEach(coord => {\r\n        if (coord.id === pathString) {\r\n            tile = coord;\r\n        }\r\n    });\r\n    if (tile.className === \"tile clicked\") {\r\n        getRandomTile(player);\r\n    }\r\n    return tile;\r\n\r\n}\r\n\r\ngame();\r\n\r\nmodule.exports = { Ship, Gameboard, Player, Computer };\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/images/pexels-aaron-ulsh-2860705.jpg":
/*!**************************************************!*\
  !*** ./src/images/pexels-aaron-ulsh-2860705.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b58c205681c7e73260d.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/pexels-aaron-ulsh-2860705.jpg?");

/***/ }),

/***/ "./src/images/pexels-pok-rie-2049422.jpg":
/*!***********************************************!*\
  !*** ./src/images/pexels-pok-rie-2049422.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0570b32b21c901b6f01.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/pexels-pok-rie-2049422.jpg?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;