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
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
/******/ })
/************************************************************************/
/******/ ({

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_toc__ = __webpack_require__(184);
/**
 * Import Sidebar Plugins
 *
 */




/***/ }),

/***/ 183:
/***/ (function(module, exports) {

/**
 * Get Dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;


var PluginSidebarDemo = function PluginSidebarDemo(props) {
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-demo" },
      __("Plugin Sidebar Demo", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-demo",
        title: __("Plugin Sidebar Demo", "jsforwpadvblocks")
      },
      wp.element.createElement(
        PanelBody,
        null,
        wp.element.createElement(
          PanelRow,
          null,
          __("Plugin Sidebar Content", "jsforwpadvblocks")
        )
      )
    )
  );
};

registerPlugin("jsforwpadvgb-demo", {
  icon: "admin-plugins",
  render: PluginSidebarDemo
});

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Blocklist__ = __webpack_require__(186);
/**
 * Get Dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;




var TableOfContents = function TableOfContents(props) {
    return wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
            PluginSidebarMoreMenuItem,
            { target: "mc-toc" },
            __("Mc-Table Of Contents", "mcblocks")
        ),
        wp.element.createElement(
            PluginSidebar,
            {
                name: "mc-toc",
                title: __("Mc-Table Of Contents", "mcblocks")
            },
            wp.element.createElement(
                PanelBody,
                null,
                wp.element.createElement(
                    PanelRow,
                    null,
                    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Blocklist__["a" /* default */], null)
                )
            )
        )
    );
};

registerPlugin("mc-toc", {
    icon: "admin-plugins",
    render: TableOfContents
});

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockItem__ = __webpack_require__(187);
/**
 * Get Dependencies
 */

var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;



var BlockList = function BlockList(_ref) {
    var blocks = _ref.blocks;

    // console.log(blocks);
    return wp.element.createElement(
        "ul",
        { className: "mc-toc" },
        blocks.map(function (block) {
            return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__BlockItem__["a" /* default */], { block: block });
        })
    );
};
/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select) {
    return {
        blocks: select("core/editor").getBlocks()
    };
})(BlockList));

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockButton__ = __webpack_require__(188);
/**
 * Get Dependencies
 */


var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;


var BlockItem = function BlockItem(_ref) {
    var block = _ref.block;

    var childBlocks = null;
    // console.log(block.innerBlocks);
    if (block.innerBlocks) {
        childBlocks = block.innerBlocks.map(function (innerBlocks) {
            return wp.element.createElement(BlockItem, { block: innerBlocks });
        });
    }
    return wp.element.createElement(
        "li",
        { key: block.clientId },
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__BlockButton__["a" /* default */], { block: block }),
        childBlocks && wp.element.createElement(
            "ul",
            null,
            childBlocks
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (BlockItem);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 * Get Dependencies
 */



var getBlockType = wp.blocks.getBlockType;
var Button = wp.components.Button;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect;


var BlockButton = function BlockButton(_ref) {
    var block = _ref.block,
        isBlockSelected = _ref.isBlockSelected;

    var blockType = getBlockType(block.name);
    if (isBlockSelected) console.log("Selected!", block.name);
    return wp.element.createElement(
        Button,
        {
            className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()("components-button editor-post-publish-button editor-post-publish-button__button ", { "is-primary": isBlockSelected }, { "is-defaul": !isBlockSelected }),
            onClick: function onClick() {
                return dispatch("core/editor").selectBlock(block.clientId);
            }
        },
        wp.element.createElement(
            "span",
            { className: "block-editor-block-icon has-colors" },
            blockType.icon.src
        ),
        blockType.title
    );
};

/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select, ownProps) {
    var clientId = ownProps.block.clientId;
    return {
        isBlockSelected: select("core/editor").isBlockSelected(clientId)
    };
})(BlockButton));

/***/ }),

/***/ 189:
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


/***/ })

/******/ });
//# sourceMappingURL=plugins.editor.js.map