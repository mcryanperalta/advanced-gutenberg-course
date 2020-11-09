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
/******/ 	return __webpack_require__(__webpack_require__.s = 183);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(17);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(35);
var toPrimitive = __webpack_require__(26);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(34);
var hide = __webpack_require__(7);
var has = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(29)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(56).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(36);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(50);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(33);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(25);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(47);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var defined = __webpack_require__(19);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(27);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(28);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(54);
var toAbsoluteIndex = __webpack_require__(55);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(58);
var step = __webpack_require__(59);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_toc__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_layout_switcher__ = __webpack_require__(192);
/**
 * Import Sidebar Plugins
 *
 */





/***/ }),
/* 184 */
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
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BlockList__ = __webpack_require__(188);
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
      { target: "jsforwpadvgb-toc" },
      __("Table of Contents", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-toc",
        title: __("Table of Contents", "jsforwpadvblocks")
      },
      wp.element.createElement(
        PanelBody,
        null,
        wp.element.createElement(
          PanelRow,
          null,
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_BlockList__["a" /* default */], null)
        )
      )
    )
  );
};

registerPlugin("jsforwpadvgb-toc", {
  icon: __WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */],
  render: TableOfContents
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = wp.element.createElement(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m49.445 60.777h31c0.89063 0 1.668-0.66797 1.668-1.668l-0.003906-12c0-0.89062-0.77734-1.668-1.668-1.668l-30.996 0.003906c-0.89062 0-1.668 0.77734-1.668 1.668v6.7773h-12.223v-24.441c0-0.10938 0-0.22266-0.10938-0.33203h15.109c0.89062 0 1.668-0.66797 1.668-1.668v-12.004c0-0.89062-0.77734-1.668-1.668-1.668h-31c-0.89063 0-1.668 0.77734-1.668 1.668v12c0 0.89063 0.77734 1.668 1.668 1.668h15c-0.10938 0.10938-0.10938 0.21875-0.10938 0.33203v49.445c0 0.33203 0.22266 0.55469 0.55469 0.55469h12.777v5.1094c0 0.89062 0.77734 1.668 1.668 1.668h31c0.89063 0 1.668-0.77734 1.668-1.668l-0.003906-12c0-0.89063-0.77734-1.668-1.668-1.668l-30.996 0.003906c-0.89062 0-1.668 0.77734-1.668 1.668v5.7773l-12.223-0.003907v-23.332h12.223v4.1094c0 0.89062 0.77734 1.668 1.668 1.668zm-30.445-33.332v-12c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469h-31c-0.33203 0-0.55469-0.22266-0.55469-0.55469zm29.891 45.109c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469h-31c-0.33203 0-0.55469-0.22266-0.55469-0.55469zm0-25.445c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469l-31 0.003907c-0.33203 0-0.55469-0.22266-0.55469-0.55469z" }),
  wp.element.createElement("path", { d: "m52.891 53.668h24c0.33203 0 0.55469-0.22266 0.55469-0.55469s-0.22266-0.55469-0.55469-0.55469l-24-0.003906c-0.33203 0-0.55469 0.22266-0.55469 0.55469-0.003907 0.33594 0.21875 0.55859 0.55469 0.55859z" }),
  wp.element.createElement("path", { d: "m52.891 79.109h12c0.33203 0 0.55469-0.22266 0.55469-0.55469 0-0.33203-0.22266-0.55469-0.55469-0.55469h-12c-0.33203 0-0.55469 0.22266-0.55469 0.55469-0.003907 0.33594 0.21875 0.55469 0.55469 0.55469z" })
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockItem__ = __webpack_require__(189);
var withSelect = wp.data.withSelect;




var BlockList = function BlockList(_ref) {
  var blocks = _ref.blocks;

  return wp.element.createElement(
    "ul",
    { className: "jsforwp-toc" },
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
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockButton__ = __webpack_require__(190);


var BlockItem = function BlockItem(_ref) {
  var block = _ref.block;

  var childBlocks = null;

  if (block.innerBlocks) {
    childBlocks = block.innerBlocks.map(function (innerBlock) {
      return wp.element.createElement(BlockItem, { block: innerBlock });
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
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var getBlockType = wp.blocks.getBlockType;
var Button = wp.components.Button;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect;




var BlockButton = function BlockButton(_ref) {
  var block = _ref.block,
      isBlockSelected = _ref.isBlockSelected;

  var blockType = getBlockType(block.name);
  return wp.element.createElement(
    Button,
    {
      className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()("editor-block-navigation__item-button", {
        "is-selected": isBlockSelected
      }),
      onClick: function onClick() {
        return dispatch("core/editor").selectBlock(block.clientId);
      }
    },
    wp.element.createElement(
      "span",
      { className: "editor-block-icon has-colors" },
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
/* 191 */
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
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_SwitcherControls__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugin_scss__);
/**
 * Get dependencies
*/
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var createBlock = wp.blocks.createBlock;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;






var LayoutSwitcher = function LayoutSwitcher() {

    var layouts = {
        default: [createBlock("core/cover", {})],
        hero: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
            text: __("Call to Action", "mcblocks"),
            alignn: "center"
        }), createBlock("core/columns", { columns: 3 })],
        featured: [createBlock("core/heading", {}), createBlock("core/spacer", { heigh: "10" }), createBlock("core/media-text", {
            align: "full"
        }), createBlock("core/spacer", { heigh: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { heigh: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", {
            placeholder: __("Layout Swithcer", "mcblocks") })]
    };
    return wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
            PluginSidebarMoreMenuItem,
            { target: "mc-layout-switcher" },
            __("Layout Switcher", "mcblocks")
        ),
        wp.element.createElement(
            PluginSidebar,
            {
                title: __("Layout Switcher", "mcblocks"),
                name: "mc-layout-switcher" },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_SwitcherControls__["a" /* default */], { icons: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], layouts: layouts })
        )
    );
};

registerPlugin("mc-layout-swithcer", {
    icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */].switcher,
    render: LayoutSwitcher
});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwitcherButton__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResetControls__ = __webpack_require__(195);



/**
 * Get dependencies
*/
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Icon = _wp$components.Icon;


var SwitcherControls = function SwitcherControls(_ref) {
    var blocks = _ref.blocks,
        icons = _ref.icons,
        layouts = _ref.layouts;

    var blocksArray = blocks.map(function (block) {
        return block.clientId;
    });
    return wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
            PanelBody,
            {
                title: __("Layout Choices", "mcblocks"),
                opened: true
            },
            wp.element.createElement(
                PanelRow,
                { className: "layout-switcher" },
                wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
                    icon: icons.hero,
                    label: __("Hero", "mcblocks"),
                    blockIds: blocksArray,
                    layouts: layouts.hero
                }),
                wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
                    icon: icons.featured,
                    label: __("Featured", "mcblocks"),
                    blockIds: blocksArray,
                    layouts: layouts.featured
                })
            )
        ),
        wp.element.createElement(
            PanelBody,
            {
                title: __("Reset Layout", "mcblocks"),
                opened: true
            },
            wp.element.createElement(
                PanelRow,
                { className: "layout-switcher" },
                wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__ResetControls__["a" /* default */], { layouts: layouts.default })
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select) {
    return {
        blocks: select("core/editor").getBlocks()
    };
})(SwitcherControls));

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Get dependencies
*/
var __ = wp.i18n.__;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    withDispatch = _wp$data.withDispatch;
var Icon = wp.components.Icon;


var SwitcherButton = function SwitcherButton(_ref) {
    var label = _ref.label,
        icon = _ref.icon,
        blockIds = _ref.blockIds,
        removeBlocks = _ref.removeBlocks,
        resetBlocks = _ref.resetBlocks,
        insertBlock = _ref.insertBlock,
        insertBlocks = _ref.insertBlocks,
        layouts = _ref.layouts;

    return wp.element.createElement(
        "button",
        {
            onClick: function onClick() {
                // removeBlocks(blockIds);
                resetBlocks([]);
                insertBlocks(layouts);
            }
        },
        wp.element.createElement(Icon, { icon: icon }),
        wp.element.createElement(
            "span",
            null,
            " ",
            label
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
    var _dispatch = dispatch("core/editor"),
        removeBlocks = _dispatch.removeBlocks,
        resetBlocks = _dispatch.resetBlocks,
        insertBlocks = _dispatch.insertBlocks,
        insertBlock = _dispatch.insertBlock;

    return {
        removeBlocks: removeBlocks, resetBlocks: resetBlocks, insertBlock: insertBlock, insertBlocks: insertBlocks
    };
})(SwitcherButton));

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);



/**
 * Get dependencies
*/
var __ = wp.i18n.__;
var withDispatch = wp.data.withDispatch;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal,
    Fragment = _wp$components.Fragment;
var compose = wp.components.compose;
var useState = wp.element.useState;


var ResetControls = function ResetControls(_ref) {
    var resetBlocks = _ref.resetBlocks,
        insertBlocks = _ref.insertBlocks,
        layouts = _ref.layouts;

    var _useState = useState(false),
        _useState2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(
            Button,
            { isPrimary: true,
                onClick: function onClick() {
                    setIsOpen(true);
                }
            },
            __("Reset Layout", "mcblocks")
        ),
        isOpen && wp.element.createElement(
            Modal,
            {
                shouldCloseOnClickOutside: true,
                title: "Reset fields ? ",
                onRequestClose: function onRequestClose() {
                    return setIsOpen(false);
                } },
            wp.element.createElement(
                Button,
                { isPrimary: true, onClick: function onClick() {
                        resetBlocks([]);
                        insertBlocks(layouts);
                        setIsOpen(false);
                    } },
                "Yes!"
            ),
            wp.element.createElement(
                Button,
                { isSecondary: true, onClick: function onClick() {
                        return setIsOpen(false);
                    } },
                "Close"
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
    var _dispatch = dispatch("core/editor"),
        removeBlocks = _dispatch.removeBlocks,
        resetBlocks = _dispatch.resetBlocks,
        insertBlocks = _dispatch.insertBlocks,
        insertBlock = _dispatch.insertBlock;

    return {
        resetBlocks: resetBlocks, insertBlocks: insertBlocks
    };
})(ResetControls));

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(197);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(200);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(198), __esModule: true };

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(43);
module.exports = __webpack_require__(199);


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(119);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(201), __esModule: true };

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(43);
module.exports = __webpack_require__(202);


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var get = __webpack_require__(203);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(119);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icons = {};
icons.switcher = wp.element.createElement(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m12 45.699 5.1992-6c2-2.3008 5-3.6992 8-3.6992h33.898l-2.1992 11c-0.60156 2.8008 2.6016 4.8008 4.8984 3.1016l28.301-21c1.6992-1.1992 1.6992-3.8008 0-5l-28.301-21c-2.3008-1.6992-5.5 0.30078-4.8984 3.1016l2.1992 10.898h-34.598c-8.8008 0-15.898 7.1016-15.898 15.898v11.398c0 1.8008 2.1992 2.7031 3.3984 1.3008z" }),
  wp.element.createElement("path", { d: "m88.801 51c-1.8008-0.69922-3.6992-0.19922-5 1.3008l-4.8008 5.5977c-1.3984 1.6016-3.3984 2.5-5.6016 2.5h-28.699l1.3984-7.1016c0.5-2.3008-0.5-4.6016-2.5-5.8984-2-1.3008-4.5-1.1992-6.3984 0.19922l-26.699 19.902c-1.3984 1.1016-2.3008 2.6992-2.3008 4.5s0.80078 3.5 2.3008 4.5l26.699 19.801c1 0.69922 2.1992 1.1016 3.3984 1.1016 1 0 2.1016-0.30078 3-0.89844 2-1.3008 3-3.6016 2.5-5.8984l-1.3984-7.1016 29.301-0.003906c9.8008 0 17.699-7.8984 17.699-17.699v-10.602c0.10156-1.8984-1.0977-3.5977-2.8984-4.1992zm-2.4023 14.898c0 6.8008-5.5 12.301-12.301 12.301h-32.699c-0.80078 0-1.6016 0.39844-2.1016 1-0.5 0.60156-0.69922 1.3984-0.60156 2.1992l2.1016 10.301c0 0.10156 0 0.19922-0.10156 0.30078-0.19922 0.10156-0.19922 0-0.30078 0l-26.695-19.801s-0.10156-0.10156-0.10156-0.19922c0-0.10156 0.10156-0.19922 0.10156-0.19922l26.699-19.801c0.10156 0 0.10156-0.10156 0.30078 0s0.10156 0.19922 0.10156 0.30078l-2.1016 10.301c-0.19922 0.80078 0 1.6016 0.60156 2.1992 0.5 0.60156 1.3008 1 2.1016 1h32c3.6992 0 7.1992-1.6016 9.6016-4.3984l3.3008-3.8008-0.003907 8.2969z" })
);
icons.hero = wp.element.createElement(
  "svg",
  {
    width: "40px",
    height: "40px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m49.969 7.5c-3.8203 0-6.9062 3.1172-6.9062 6.9375 0 3.8438 3.0859 6.9062 6.9062 6.9062 3.8438 0 6.9688-3.0625 6.9688-6.9062 0-3.8203-3.125-6.9375-6.9688-6.9375zm-30.844 15.312c-4.125 0-4.125 5.4375 0 5.4375h9.3438v-5.4375zm11.406 0v5.4375h10.062v19.438h6.2812v-1.0312h6.2188v1.0312h6.3125v-19.438h10.062v-5.4375zm41 0v5.4375h9.3438c4.125 0 4.125-5.4375 0-5.4375zm-21.562 6.6562l1.3125 3.3125 3.5625 0.1875-2.75 2.2812 0.90625 3.4062-3.0312-1.9375-2.9688 1.9375 0.90625-3.4062-2.75-2.2812 3.5625-0.1875zm-11.438 0.875l-13.438 37.594h13.438zm22.938 0v37.594h13.438zm-20.875 19.438v24.062h7.7812v-17.844h3.25v17.844h7.7812v-24.062h-6.3125v1.0312h-6.2188v-1.0312zm0 26.156v12.688c0 2.1523 1.7227 3.875 3.875 3.875 2.1445 0 3.9062-1.7227 3.9062-3.875v-12.688zm11.031 0v12.688c0 2.1523 1.7617 3.875 3.9062 3.875 2.1523 0 3.875-1.7227 3.875-3.875v-12.688z" })
);
icons.featured = wp.element.createElement(
  "svg",
  {
    width: "40px",
    height: "40px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", {
    d: "m51.91 27.891 4.8594 15.051 15.82-0.03125c2 0 2.75 2.4688 0.98828 3.7383l-12.629 9.1406 4.9102 15.039c0.62891 1.9219-1.6797 3.4297-3.1914 2.1406l-12.66-9.2383-12.781 9.3281c-1.7383 1.2617-3.6602-0.44141-2.9297-2.6484l4.7695-14.621-12.809-9.2695c-1.6289-1.1797-0.67187-3.7383 1.3086-3.6094l15.68 0.03125 4.8594-15.051c0.60156-1.8516 3.2109-1.8203 3.8008 0z",
    fillRule: "evenodd"
  }),
  wp.element.createElement("path", { d: "m50 9.7891c22.199 0 40.211 18.012 40.211 40.211s-18.012 40.211-40.211 40.211-40.211-18.012-40.211-40.211 18.012-40.211 40.211-40.211zm0 4c-20 0-36.211 16.211-36.211 36.211s16.211 36.211 36.211 36.211 36.211-16.211 36.211-36.211-16.211-36.211-36.211-36.211z" })
);
/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ }),
/* 205 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=plugins.editor.js.map