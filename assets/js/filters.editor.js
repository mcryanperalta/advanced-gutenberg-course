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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 226);
/******/ })
/************************************************************************/
/******/ ({

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extendCodeBlockDemo__ = __webpack_require__(227);
//filters entry point

// import './registerBlockType';
// import './getSaveElement';
// import './getSaveContentExtraProps';
// import "./getBlockDefaultClassName";



/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;




addFilter("blocks.registerBlockType", "mcblocks/add-code-attributes", addCodeAttributes);

addFilter("editor.BlockEdit", "mcblocks/add-code-inspector-controls", addCodeInspectorControls);

addFilter("blocks.getSaveElement", "mcblocks/modify-code-save settings", modifyCodeSaveSettings);

function addCodeAttributes(settings, name) {

    if ("core/code" !== name) return settings;

    settings.supports = lodash.merge({}, settings.supports, {
        align: ["full", "wide"]
    });
    settings.attributes.align = {
        type: "string",
        default: "full"
    };
    settings.attributes.highContrast = {
        type: "boolean",
        default: false
    };

    return settings;
}

function addCodeInspectorControls(BlockEdit) {

    var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {
        return function (props) {
            if ("core/code" !== props.name) return wp.element.createElement(BlockEdit, props);

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    "div",
                    { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
                            "high-contrast": props.attributes.highContrast
                        })
                    },
                    wp.element.createElement(BlockEdit, props)
                ),
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        {
                            title: __("Custom Settings", "mcblocks")
                        },
                        wp.element.createElement(ToggleControl, {
                            label: __("High Contrast", "mcblocks"),
                            checked: props.attributes.highContrast,
                            onChange: function onChange(highContrast) {
                                props.setAttributes({ highContrast: highContrast });
                            }
                        })
                    )
                )
            );
        };
    });

    return withInspectorControls(BlockEdit);
}

function modifyCodeSaveSettings(el, block, attributes) {

    if ("core/code" === block.name && attributes.highContrast) {
        el.props.className = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(el.props.className, {
            "high-contrast": attributes.highContrast
        });
    }

    return el;
}

/***/ })

/******/ });
//# sourceMappingURL=filters.editor.js.map