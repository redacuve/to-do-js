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
/*! exports provided: createElement, getElement, setInner, addToInner, addToClass, setToClass, removeToClass, setClickListener, setValue, appendChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInner\", function() { return setInner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToInner\", function() { return addToInner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToClass\", function() { return addToClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToClass\", function() { return setToClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeToClass\", function() { return removeToClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickListener\", function() { return setClickListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return appendChild; });\nfunction createElement(type, inner = '', classLst = '') {\n  const elem = document.createElement(type);\n  elem.innerHTML = inner;\n  elem.classList.add(classLst);\n  return elem;\n}\n\nfunction getElement(id) {\n  const element = document.getElementById(id);\n  return element;\n}\n\nfunction setInner(elem, str) {\n  elem.innerHTML = str;\n}\n\nfunction addToInner(elem, str) {\n  elem.innerHTML += str;\n}\n\nfunction addToClass(elem, clss) {\n  elem.classList.add(clss);\n}\n\nfunction setToClass(elem, clss) {\n  elem.classList.value = clss;\n}\n\nfunction removeToClass(elem, clss) {\n  elem.classList.remove(clss);\n}\n\nfunction setClickListener(elem, funct) {\n  elem.addEventListener('click', funct);\n}\n\nfunction setValue(elem, val) {\n  elem.value = val;\n}\n\nfunction appendChild(elem, child) {\n  elem.appendChild(child);\n}\n\n//# sourceURL=webpack:///./src/elementsHander.js?");

/***/ }),

/***/ "./src/events_handler.js":
/*!*******************************!*\
  !*** ./src/events_handler.js ***!
  \*******************************/
/*! exports provided: projectSelected, firstProjectSelected, renderProjects, addListenerToProjects, addListenerToToDos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectSelected\", function() { return projectSelected; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstProjectSelected\", function() { return firstProjectSelected; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListenerToProjects\", function() { return addListenerToProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListenerToToDos\", function() { return addListenerToToDos; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _elementsHander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementsHander */ \"./src/elementsHander.js\");\n\n\n\n// import { notification } from './dom_handler';\n\n// PROJECT MANIPULATION HELPERS\nfunction projectSelected(index) {\n  const project = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][index];\n  const hide = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('span', index, 'hide');\n  const descriptionNode = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('desc-project');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('title-project'), project.name);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(descriptionNode, project.description);\n  descriptionNode.appendChild(hide);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('delete-project'), deleteProject);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('edit-project'), editProject);\n  isHighlited(index);\n}\n\nfunction firstProjectSelected() {\n  projectSelected(0);\n}\n\nfunction describeProject(e) {\n  const index = String(e.target.id).match(/(\\d+)/)[0];\n  projectSelected(index);\n}\n// PROJECT MANIPULATION HELPERS\n\n// DOM MANIPULATION\nfunction disableAddP() {\n  const addButton = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('add-project');\n  if (Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('form-hide').classList.contains('hide')) {    \n    addButton.disabled = false;\n  }\n  else {\n    addButton.disabled = true;\n  }\n}\n\nfunction cleanProjectForm() {\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setValue\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-project-name'), '');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setValue\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-project-description'), '');\n}\n\nfunction toggleFormProject() {\n  document.getElementById('form-hide').classList.toggle('hide');\n  cleanProjectForm();\n  disableAddP();\n}\n\nfunction dismissNotification() {\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"addToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('notification'), 'hide');\n}\n\nfunction setListener() {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((elem, index) => {\n    Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])(`project-n-${index}`), describeProject);\n  });\n}\n\nfunction openNotification(text, nClass = 'is-success') {\n  const notification = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('notification');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setToClass\"])(notification, `notification ${nClass}`);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('text-notification'), text);\n  window.scrollTo(0,0);\n}\n\nfunction renderProjects() {\n  const listNode = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('projects-list');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setInner\"])(listNode, '');\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((elem, index) => {\n    Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"addToInner\"])(listNode, `<li id=\"project-n-${index}\">${elem.name}</li>`);\n  });\n  setListener();\n}\n\nfunction addListenerToProjects() {\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('add-project'), toggleFormProject);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('button-save-project'), saveProject);\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('delete-form'), toggleFormProject);\n  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);\n}\n\nfunction isHighlited(i) {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].forEach((elem, index) => {\n    Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"removeToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])(`project-n-${index}`), 'has-background-grey-light');\n  });\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"addToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])(`project-n-${i}`), 'has-background-grey-light');\n}\n// DOM MANIPULATION\n\n// PROJECT MANIPULATION SECTION\nfunction saveProject() {\n  const name = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-project-name');\n  const description = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-project-description');\n  const titleNode = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('title-project');\n  let indexProject = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].length - 1;\n  if (name.value != '') {\n    if (titleNode.lastChild.classList) {\n      indexProject = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('desc-project').lastChild.innerHTML;\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indexProject].name = name.value;\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indexProject].description = description.value;\n      openNotification(`notificationProject <strong>'${name.value}'</strong> was edited succefully`, 'is-warning');\n    } else {\n      const project = new _classes_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name.value, description.value);\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].push(project);\n      openNotification(`Project <strong>'${name.value}'</strong> was saved succefully`);\n      indexProject += 1;\n    }\n    cleanProjectForm();\n    renderProjects();\n    projectSelected(indexProject);\n    disableAddP();\n    document.getElementById('add-project').disabled = false;\n  } else {\n    openNotification('The name can\\'t be blank', 'is-warning');\n  }\n}\n\nfunction editProject() {\n  const hide = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])('span', 'edit', 'hide');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"appendChild\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('title-project'), hide);\n  const indx = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('desc-project').lastChild.innerHTML;\n  const project = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indx];\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"removeToClass\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('form-hide'), 'hide');\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-project-name').value = project.name;\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-project-description').value = project.description;\n  disableAddP();\n}\n\nfunction deleteProject() {\n  const indx = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('desc-project').lastChild.innerHTML;\n  const { name } = _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][indx];\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].length > 1) {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"].splice(indx, 1);\n  } else {\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][0] = new _classes_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('My First Project', 'This is your first project, you can edit it! or add a to-do');\n  }\n  openNotification(`Project <strong>'${name}'</strong> was deleted succefully`, 'is-danger');\n  renderProjects();\n  projectSelected(0);\n}\n\n// PROJECT MANIPULATION SECTION\n\n// TODO MANIPULATION\n\nfunction saveTodo(){\n  const title = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-todo-title');\n  const description = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-todo-description');\n  const date = Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('new-todo-date');\n  //const radioGroup = getElement('new-todo-radio');\n  // const radios  = radioGroup.elements.todo_priority;\n  const priority = document.querySelector('input[name=\"todo-priority\"]:checked').id.replace(/priority-/g, '');\n  console.log(`This will be saved: \n               Title: ${title.value}\n               Description: ${description.value}\n               Date: ${date.value}\n               Priority: ${priority}`);\n  //const titleNode = getElement('title-project');\n}\n\nfunction addListenerToToDos() {\n  Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"setClickListener\"])(Object(_elementsHander__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])('button-save-todo'), saveTodo);\n}\n\nfunction toggleFormToDo() {\n  document.getElementById('form-hide').classList.toggle('hide');\n  cleanProjectForm();\n  disableAddP();\n}\n// TODO MANIPULATION\n\n//# sourceURL=webpack:///./src/events_handler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/project */ \"./src/classes/project.js\");\n/* harmony import */ var _events_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events_handler */ \"./src/events_handler.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n\n\n\n// import {   } from './dom_handler';\n\nconst project1 = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('My First Project', 'This is your first project, you can edit it! or add a to-do');\nconst project2 = new _classes_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Office', 'Office description');\n_variables__WEBPACK_IMPORTED_MODULE_2__[\"projects\"].push(project1, project2);\n\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"renderProjects\"])();\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"addListenerToProjects\"])();\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"addListenerToToDos\"])();\nObject(_events_handler__WEBPACK_IMPORTED_MODULE_1__[\"firstProjectSelected\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

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