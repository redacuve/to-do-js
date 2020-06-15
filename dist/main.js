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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(name, description = null, todos = {}) {\n    this.name = name;\n    this.description = description;\n    this.todos = todos;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/classes/project.js?");

/***/ }),

/***/ "./src/elementsHander.js":
/*!*******************************!*\
  !*** ./src/elementsHander.js ***!
  \*******************************/
/*! exports provided: createElement, getElement, setInner, addToInner, addToClass, setToClass, removeToClass, setClickListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInner\", function() { return setInner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToInner\", function() { return addToInner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToClass\", function() { return addToClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToClass\", function() { return setToClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeToClass\", function() { return removeToClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickListener\", function() { return setClickListener; });\nfunction createElement(type, inner = \"\", classLst = \"\"){\n    const elem = document.createElement(type);\n    elem.innerHTML = inner;\n    elem.classList.add(classLst);\n    return elem;\n}\n\nfunction getElement(id){\n    const element = document.getElementById(id);\n    return element;\n}\n\nfunction setInner(elem, str){\n    elem.innerHTML = str;\n}\n\nfunction addToInner(elem, str){\n    elem.innerHTML += str;\n}\n\nfunction addToClass(elem, clss){\n    elem.classList.add(clss);\n}\n\nfunction setToClass(elem, clss){\n    elem.classList.value = clss\n}\n\nfunction removeToClass(elem, clss){\n    elem.classList.remove(clss);\n}\n\nfunction setClickListener(elem, funct){\n    elem.addEventListener(\"click\",funct);\n}\n\n//# sourceURL=webpack:///./src/elementsHander.js?");

/***/ }),

/***/ "./src/events_handler.js":
/*!*******************************!*\
  !*** ./src/events_handler.js ***!
  \*******************************/
/*! exports provided: projectSelected, firstProjectSelected, notification, renderProjects, addListenerToProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectSelected\", function() { return projectSelected; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstProjectSelected\", function() { return firstProjectSelected; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notification\", function() { return notification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListenerToProjects\", function() { return addListenerToProjects; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _elementsHander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementsHander */ \"./src/elementsHander.js\");\n\n\n\n// import { notification } from './dom_handler';\n\n// PROJECT MANIPULATION HELPERS\nfunction projectSelected(index) {\n  const project = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][index];\n  const hide = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('span',index,'hide');\n  const descriptionNode = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('desc-project');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('title-project'),project.name)\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(descriptionNode, project.description);\n  descriptionNode.appendChild(hide);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('delete-project'),deleteProject);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('edit-project'),editProject);\n  isHighlited(index);\n  if(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('edit-project').disabled) disableEditP();\n  if(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('add-project').disabled) disableAddP();\n}\n\nfunction firstProjectSelected() {\n  projectSelected(0);\n}\n\nfunction describeProject(e) {\n  const index = String(e.target.id).match(/(\\d+)/)[0];\n  projectSelected(index);\n}\n// PROJECT MANIPULATION HELPERS\n\n// DOM MANIPULATION\nfunction disableAddP() {\n  const disable = document.getElementById('add-project').disabled;\n  document.getElementById('add-project').disabled = !disable;\n}\n\nfunction disableEditP() {\n  const disable = document.getElementById('edit-project').disabled;\n  document.getElementById('edit-project').disabled = !disable;\n}\n\nfunction toggleForm() {\n  document.getElementById('form-hide').classList.toggle('hide');\n  document.getElementById('new-project-name').value = '';\n  document.getElementById('new-project-description').value = '';\n  disableEditP();\n}\n\nfunction dismissNotification() {\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"addToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('notification'), 'hide');\n}\n\nfunction setListener() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((elem, index) => {\n    Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])(`project-n-${index}`), describeProject);\n  });\n}\n\nfunction notification(text, nClass = 'is-success') {\n  const notContainer = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('text-notification');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setToClass\"])(notContainer,`notification ${nClass}`);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(notContainer, text);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"removeToClass\"])(notContainer,'hide');\n}\n\nfunction renderProjects() {\n  const listNode = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('projects-list');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(listNode, '');\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((elem, index) => {\n    Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"addToInner\"])(listNode,`<li id=\"project-n-${index}\">${elem.name}</li>`);\n  });\n  setListener();\n}\n// check later\nfunction addListenerToProjects() {\n  document.getElementById('add-project').addEventListener('click', toggleForm);\n  document.getElementById('button-save-project').addEventListener('click', saveProject);\n  document.getElementById('delete-form').addEventListener('click', toggleForm);\n  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);\n}\n\nfunction isHighlited(i) {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((elem, index) => {\n    Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"removeToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])(`project-n-${index}`),'has-background-grey-light');\n  });\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"addToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])(`project-n-${i}`),'has-background-grey-light'); \n}\n// DOM MANIPULATION\n\n// PROJECT MANIPULATION SECTION\nfunction saveProject() {\n  const name = document.getElementById('new-project-name');\n  const description = document.getElementById('new-project-description');\n  const titleNode = document.getElementById('title-project');\n  let indexProject = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].length - 1;\n  if (titleNode.lastChild.classList) {\n    // SAVE EDITION\n    indexProject = document.getElementById('desc-project').lastChild.innerHTML;\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indexProject].name = name.value;\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indexProject].description = description.value;\n    document.body.innerHtml += notification(`Project <strong>'${name.value}'</strong> was edited succefully`, 'is-warning');\n    renderProjects();\n    projectSelected(indexProject);\n  } else {\n    // NEW REGISTER\n    const project = new _classes_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name.value, description.value);\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].push(project);\n    document.body.innerHtml += notification(`Project <strong>'${name.value}'</strong> was saved succefully`);\n    renderProjects();\n    projectSelected(indexProject + 1);\n  }\n  name.value = '';\n  description.value = '';\n  disableAddP();\n  document.getElementById('add-project').disabled = false;\n  \n}\n\nfunction editProject() {\n  const hide = document.createElement('span');\n  hide.classList.add('hide');\n  hide.innerHTML = 'edit';\n  document.getElementById('title-project').appendChild(hide);\n  const indx = document.getElementById('desc-project').lastChild.innerHTML;\n  const project = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indx];\n  const form = document.getElementById('form-hide');\n  form.classList.remove('hide');\n  document.getElementById('new-project-name').value = project.name;\n  document.getElementById('new-project-description').value = project.description;\n  disableAddP();\n}\n\nfunction deleteProject() {\n  const indx = document.getElementById('desc-project').lastChild.innerHTML;\n  const { name } = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indx];\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].length > 1) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].splice(indx, 1);\n  } else {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][0] = new _classes_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('My First Project', 'This is your first project, you can edit it! or add a to-do');\n  }\n  document.body.innerHtml += notification(`Project <strong>'${name}'</deleted> was deleted succefully`, 'is-danger');\n  renderProjects();\n  projectSelected(0);\n}\n// PROJECT MANIPULATION SECTION\n\n\n//# sourceURL=webpack:///./src/events_handler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _events_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events_handler */ \"./src/events_handler.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\n\n\n// import {   } from './dom_handler';\n\nconst project1 = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('My First Project', 'This is your first project, you can edit it! or add a to-do');\nconst project2 = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Office', 'Office description');\n_variables__WEBPACK_IMPORTED_MODULE_2__[\"projects\"].push(project1, project2);\n\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"renderProjects\"])();\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"addListenerToProjects\"])();\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"firstProjectSelected\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\nconst projects = [];\n\n// export default { projects };\n\n\n//# sourceURL=webpack:///./src/variables.js?");

/***/ })

/******/ });