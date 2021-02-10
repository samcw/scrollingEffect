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

/***/ "./src/ts/FixElement.ts":
/*!******************************!*\
  !*** ./src/ts/FixElement.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FixElement)\n/* harmony export */ });\nclass FixElement {\n    constructor(target, range) {\n        this.target = target;\n        this.range = range;\n        this.styleMap = new Map();\n    }\n    changeZ(value) {\n        let translate3dZ = value <= this.range[0] ? 0 : value - this.range[0];\n        this.styleMap.set('transform', `transform: perspective(${this.range[1] - this.range[0]}px) translate3d(0px, 0px, ${translate3dZ}px)`);\n    }\n    changeOpacity(value) {\n        let opacityValue = 1;\n        if (value > this.range[1]) {\n            opacityValue = 0;\n        }\n        else if (value < this.range[0] + 0.5 * (this.range[1] - this.range[0])) {\n            opacityValue = 1;\n        }\n        else {\n            let x = (this.range[1] - value) / (0.5 * (this.range[1] - this.range[0]));\n            opacityValue = Math.log2(x + 1);\n        }\n        this.styleMap.set('opacity', `opacity: ${opacityValue}`);\n    }\n    update() {\n        let styleValue = Array.from(this.styleMap.values()).reduce((pre, curr) => pre + ';' + curr);\n        this.target.setAttribute('style', styleValue);\n    }\n}\n\n\n//# sourceURL=webpack://srcoll-effect/./src/ts/FixElement.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FixElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FixElement */ \"./src/ts/FixElement.ts\");\n\nconst HOME = document.querySelector('#home');\nconst INTRODUCTION = document.querySelector('#introduction');\nconst PROJECT = document.querySelector('#project');\nconst NAV = document.querySelector('#nav');\nlet last_known_scroll_position = 0;\nlet ticking = false;\nconst HOME_FIX = new _FixElement__WEBPACK_IMPORTED_MODULE_0__.default(HOME, [0, 1000]);\nconst INTRODUCTION_FIX = new _FixElement__WEBPACK_IMPORTED_MODULE_0__.default(INTRODUCTION, [1000, 2000]);\nconst PROJECT_FIX = new _FixElement__WEBPACK_IMPORTED_MODULE_0__.default(PROJECT, [2000, 3000]);\nNAV.addEventListener('click', (e) => {\n    const TARGET = e.target;\n    moveToTarget(TARGET);\n});\nfunction moveToTarget(target) {\n    let targetValue = document.documentElement.scrollTop || document.body.scrollTop;\n    switch (target.innerHTML) {\n        case 'HOME':\n            targetValue = 0;\n            break;\n        case 'INTRODUCTION':\n            targetValue = 1000;\n            break;\n        case 'PROJECT':\n            targetValue = 2000;\n            break;\n        default:\n            break;\n    }\n    smoothscroll(targetValue);\n}\nfunction smoothscroll(value) {\n    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;\n    let targetValue = Math.abs(value - currentScroll) <= 5 ? value : (currentScroll + (value - currentScroll) / 5);\n    if (currentScroll !== value) {\n        window.requestAnimationFrame(smoothscroll.bind(null, value));\n        window.scrollTo(0, targetValue);\n    }\n}\nfunction changeNavActive(value, target) {\n    const childrenList = target.firstElementChild.getElementsByTagName('li');\n    let activeIndex = 0;\n    if (0 <= value && value < 1000) {\n        activeIndex = 0;\n    }\n    else if (1000 <= value && value < 2000) {\n        activeIndex = 1;\n    }\n    else if (2000 <= value) {\n        activeIndex = 2;\n    }\n    for (let i = 0; i < childrenList.length; i++) {\n        if (i === activeIndex) {\n            childrenList[i].setAttribute('class', 'fix-nav-active');\n        }\n        else {\n            childrenList[i].removeAttribute('class');\n        }\n    }\n}\nwindow.addEventListener('scroll', (e) => {\n    last_known_scroll_position = window.scrollY;\n    if (!ticking) {\n        window.requestAnimationFrame(function () {\n            HOME_FIX.changeZ(last_known_scroll_position);\n            HOME_FIX.changeOpacity(last_known_scroll_position);\n            HOME_FIX.update();\n            INTRODUCTION_FIX.changeZ(last_known_scroll_position);\n            INTRODUCTION_FIX.changeOpacity(last_known_scroll_position);\n            INTRODUCTION_FIX.update();\n            PROJECT_FIX.changeZ(last_known_scroll_position);\n            PROJECT_FIX.changeOpacity(last_known_scroll_position);\n            PROJECT_FIX.update();\n            changeNavActive(last_known_scroll_position, NAV);\n            ticking = false;\n        });\n        ticking = true;\n    }\n});\n\n\n//# sourceURL=webpack://srcoll-effect/./src/ts/index.ts?");

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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/ts/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;