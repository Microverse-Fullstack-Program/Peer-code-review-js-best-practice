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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #d6d6d2;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  width: 43%;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 50px;\\r\\n  background: #fffdff;\\r\\n  box-shadow: 5px 5px 20px #a39f9f;\\r\\n}\\r\\n\\r\\n.todo-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 10px;\\r\\n  border-bottom: 1px solid #c2c1bd;\\r\\n}\\r\\n\\r\\n.form-controls {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #b8b7b4;\\r\\n}\\r\\n\\r\\n.form-controls label {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.todo-item-input {\\r\\n  padding: 10px;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.clear-item {\\r\\n  padding: 10px;\\r\\n  background: #edede9;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.clear-btn {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 15px;\\r\\n  color: #888;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.list-container {\\r\\n  display: block;\\r\\n  background-color: rgb(241, 245, 245);\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  gap: 10px;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 7px;\\r\\n  border-bottom: 1px solid #c2c1bd;\\r\\n}\\r\\n\\r\\n.todo-desc {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.icons {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  padding-right: 5px;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.fa-trash {\\r\\n  display: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.hide-optionBtn {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.show-trashBtn {\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.editing-input {\\r\\n  width: 95%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: #e9d8a6;\\r\\n  padding: 0;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.edit-task {\\r\\n  background: #e9d8a6;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addNewItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addNewItem.js */ \"./src/modules/addNewItem.js\");\n/* harmony import */ var _modules_displayTodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayTodoList.js */ \"./src/modules/displayTodoList.js\");\n/* harmony import */ var _modules_removeAllSelected_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeAllSelected.js */ \"./src/modules/removeAllSelected.js\");\n\n\n\n\n\nconst form = document.querySelector('.form');\nconst clearBtn = document.querySelector('.clear-btn');\n\n// Add new todo list on form submission\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_addNewItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n// Remove all selected items and reset index\nclearBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_removeAllSelected_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  let todoListList = localStorage.getItem('todo_List');\n  if (todoListList) {\n    todoListList = JSON.parse(todoListList);\n    todoListList.forEach(_modules_displayTodoList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addNewItem.js":
/*!***********************************!*\
  !*** ./src/modules/addNewItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoList.js */ \"./src/modules/displayTodoList.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\n\nconst inputData = document.querySelector('.todo-item-input');\nconst addTodoItem = () => {\n  if (inputData.value) {\n    const todoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const newItem = {};\n    newItem.description = inputData.value;\n    newItem.completed = false;\n    newItem.index = (todoList.length + 1).toString();\n    todoList.push(newItem);\n    localStorage.setItem('todo_List', JSON.stringify(todoList));\n    inputData.value = '';\n    (0,_displayTodoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newItem);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoItem);\n\n//# sourceURL=webpack://todo-list/./src/modules/addNewItem.js?");

/***/ }),

/***/ "./src/modules/displayTodoList.js":
/*!****************************************!*\
  !*** ./src/modules/displayTodoList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n\n\n\n\nconst todoItems = document.querySelector('.todo-list');\nconst displayTodoList = (listElement) => {\n  // Create to-do item container\n  const divElement = document.createElement('div');\n  divElement.classList.add('list-item');\n  const attr = document.createAttribute('data-index');\n  attr.value = listElement.index;\n  divElement.setAttributeNode(attr);\n  todoItems.insertBefore(divElement, todoItems.firstElementChild);\n\n  // Create checkbox and todo-tasks title container\n  const todoTitle = document.createElement('div');\n  todoTitle.classList.add('todo-desc');\n  divElement.appendChild(todoTitle);\n\n  // Add checkbox input\n  const checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.classList.add('checkBtn');\n  todoTitle.appendChild(checkbox);\n\n  // Create container for todo tasks title\n  const newItem = document.createElement('div');\n  newItem.classList.add('todoTitle');\n  newItem.innerHTML = `<p> ${listElement.description} </p>`;\n  todoTitle.appendChild(newItem);\n\n  // Add icons for todo Tasks\n  const iconContainer = document.createElement('div');\n  iconContainer.classList.add('icons');\n  iconContainer.innerHTML = `<i class=\"fa-solid fa-ellipsis-vertical\"></i>\n        <i class=\"fa-solid fa-trash-clock fa-trash\"></i>`;\n  divElement.appendChild(iconContainer);\n\n  // Add event listener for checkbox\n  const checkboxes = document.querySelectorAll('.checkBtn');\n  checkboxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', (e) => {\n      const todoTaskTitle = e.target.nextElementSibling.childNodes[0];\n      const todoTaskContainer = e.target.parentElement.parentElement;\n      const { index } = todoTaskContainer.dataset;\n      const todoListList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      if (checkbox.checked === true) {\n        todoTaskTitle.style.textDecoration = 'line-through';\n        todoListList.filter((todoTask) => {\n          if (todoTask.index === index) {\n            todoTask.completed = true;\n          }\n          return false;\n        });\n      } else {\n        todoTaskTitle.style.textDecoration = 'none';\n        todoListList.filter((todoTask) => {\n          if (todoTask.index === index) {\n            todoTask.completed = false;\n          }\n          return false;\n        });\n      }\n      localStorage.setItem('todo_List', JSON.stringify(todoListList));\n    });\n  });\n\n  // Add event listener to icons\n  const optionBtn = document.querySelectorAll('.fa-ellipsis-vertical');\n  const deleteBtn = document.querySelectorAll('.fa-trash');\n  optionBtn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      btn.classList.add('hide-optionBtn');\n      const delBtn = e.target.nextElementSibling;\n      delBtn.classList.add('show-trashBtn');\n      (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, divElement, btn, delBtn);\n    });\n  });\n\n  deleteBtn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      e.preventDefault();\n      (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodoList);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/displayTodoList.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nconst editTodoTask = (event, taskContainer, OptionBtn, delBtn) => {\n  const parent = event.target.parentElement;\n  parent.parentElement.classList.add('edit-task');\n\n  const editingTask = document.createElement('input');\n  editingTask.type = 'text';\n  editingTask.className = 'editing-input';\n  const att = document.createAttribute('autofocus');\n  att.value = true;\n  editingTask.setAttributeNode(att);\n\n  const selectedTask = parent.parentElement.childNodes[0].lastElementChild.childNodes[0];\n  const currentTodoTitle = parent.previousElementSibling.lastElementChild;\n  currentTodoTitle.removeChild(selectedTask);\n  currentTodoTitle.appendChild(editingTask);\n  editingTask.value = selectedTask.textContent.trim();\n  const editIndex = parent.parentElement.dataset.index;\n\n  editingTask.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      selectedTask.textContent = editingTask.value;\n\n      currentTodoTitle.appendChild(selectedTask);\n      currentTodoTitle.removeChild(editingTask);\n      taskContainer.classList.remove('edit-task');\n      OptionBtn.classList.remove('hide-optionBtn');\n      delBtn.classList.remove('show-trash');\n\n      const updateTodoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      updateTodoList.forEach((todoTask) => {\n        if (todoTask.index === editIndex && selectedTask.textContent) {\n          todoTask.description = selectedTask.textContent;\n        }\n      });\n      localStorage.setItem('todo_List', JSON.stringify(updateTodoList));\n      window.location.reload();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodoTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/removeAllSelected.js":
/*!******************************************!*\
  !*** ./src/modules/removeAllSelected.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _resetIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetIndex.js */ \"./src/modules/resetIndex.js\");\n\n\n\nconst removeAllCheckedItem = () => {\n  let todoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  // Remove all checked todo items\n  todoList = todoList.filter((todoTask) => {\n    if (todoTask.completed !== true) {\n      return true;\n    }\n    return false;\n  });\n  if (todoList.length > 0) {\n    localStorage.setItem('todo_List', JSON.stringify(todoList));\n    (0,_resetIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  } else {\n    window.location.reload();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllCheckedItem);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/removeAllSelected.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _resetIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetIndex.js */ \"./src/modules/resetIndex.js\");\n\n\n\nconst todoLists = document.querySelector('.todo-list');\nconst removeTask = (event) => {\n  const todoTask = event.target.parentElement.parentElement;\n  const { index } = todoTask.dataset;\n\n  todoLists.removeChild(todoTask);\n  if (todoLists.children.length === 0) {\n    todoLists.classList.toggle('list-container');\n  }\n\n  // Remove todo items\n  let todoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  todoList = todoList.filter((todoTask) => {\n    if (todoTask.index !== index) {\n      return true;\n    }\n    return false;\n  });\n  if (todoList.length > 0) {\n    localStorage.setItem('todo_List', JSON.stringify(todoList));\n    (0,_resetIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  } else {\n    window.location.reload();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/resetIndex.js":
/*!***********************************!*\
  !*** ./src/modules/resetIndex.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nconst resetIndex = () => {\n  const todoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  // Reset index of exist todo tasks\n  const newList = [];\n  todoList.forEach((todoTask) => {\n    const newTodoItem = { ...todoTask, index: (newList.length + 1).toString() };\n    newList.push(newTodoItem);\n  });\n  localStorage.setItem('todo_List', JSON.stringify(newList));\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetIndex);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/resetIndex.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst readLocalStorage = () => {\n  let todoList = localStorage.getItem('todo_List');\n  if (todoList === null) {\n    todoList = [];\n  } else {\n    todoList = JSON.parse(todoList);\n    localStorage.removeItem('todo_List');\n  }\n  return todoList;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readLocalStorage);\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;