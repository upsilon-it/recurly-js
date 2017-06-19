var recurly =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _recurly = __webpack_require__(1);

	/**
	 * Export a single instance.
	 */

	module.exports = exports = new _recurly.Recurly();

	/**
	 * Hack for testing.
	 */

	exports.Recurly = _recurly.Recurly;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Recurly = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentType = __webpack_require__(2);

	var _componentType2 = _interopRequireDefault(_componentType);

	var _componentClone = __webpack_require__(3);

	var _componentClone2 = _interopRequireDefault(_componentClone);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _jsonp2 = __webpack_require__(6);

	var _jsonp3 = _interopRequireDefault(_jsonp2);

	var _qs = __webpack_require__(10);

	var _qs2 = _interopRequireDefault(_qs);

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	var _version = __webpack_require__(14);

	var _version2 = _interopRequireDefault(_version);

	var _bankAccount = __webpack_require__(15);

	var _bankAccount2 = _interopRequireDefault(_bankAccount);

	var _frame = __webpack_require__(25);

	var _applePay = __webpack_require__(27);

	var _paypal = __webpack_require__(44);

	var _direct = __webpack_require__(46);

	var _bus = __webpack_require__(52);

	var _fraud = __webpack_require__(54);

	var _hostedFields = __webpack_require__(55);

	var _message = __webpack_require__(53);

	var _uuid = __webpack_require__(26);

	var _pricing = __webpack_require__(28);

	var _pricing2 = _interopRequireDefault(_pricing);

	var _giftcard = __webpack_require__(58);

	var _giftcard2 = _interopRequireDefault(_giftcard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint -W058 */

	var debug = __webpack_require__(7)('recurly');

	/**
	 * Default configuration values.
	 *
	 * currency: ISO 4217
	 * timeout: API request timeout in ms
	 * publicKey: Recurly site public key
	 * cors: Whether to use XHR2/XDR+CORS over jsonp for API requests
	 * fraud: fraud configuration
	 * api: URL of API
	 * fields: field behavior and styling configuration
	 *
	 * @private
	 * @type {Object}
	 */

	var defaults = {
	  currency: 'USD',
	  timeout: 60000,
	  publicKey: '',
	  parent: true,
	  parentVersion: _version2.default,
	  cors: true,
	  fraud: {
	    kount: { dataCollector: false },
	    litle: { sessionId: null }
	  },
	  api: 'https://api.recurly.com/js/v1',
	  fields: {
	    all: {
	      style: {}
	    },
	    number: {
	      selector: '[data-recurly=number]',
	      style: {}
	    },
	    month: {
	      selector: '[data-recurly=month]',
	      style: {}
	    },
	    year: {
	      selector: '[data-recurly=year]',
	      style: {}
	    },
	    cvv: {
	      selector: '[data-recurly=cvv]',
	      style: {}
	    }
	  }
	};

	/**
	 * Initialize defaults.
	 *
	 * @param {Object} options
	 * @constructor
	 * @public
	 */

	var Recurly = exports.Recurly = function (_Emitter) {
	  _inherits(Recurly, _Emitter);

	  function Recurly(options) {
	    _classCallCheck(this, Recurly);

	    var _this = _possibleConstructorReturn(this, (Recurly.__proto__ || Object.getPrototypeOf(Recurly)).call(this));

	    _this.id = (0, _uuid.uuid)();
	    _this.version = _version2.default;
	    _this.configured = false;
	    _this.readyState = 0;
	    _this.config = (0, _lodash2.default)({}, defaults);
	    if (options) _this.configure(options);
	    _this.bankAccount = {
	      token: _bankAccount2.default.token.bind(_this),
	      bankInfo: _bankAccount2.default.bankInfo.bind(_this)
	    };
	    return _this;
	  }

	  _createClass(Recurly, [{
	    key: 'ready',
	    value: function ready(done) {
	      if (this.readyState > 1) done();else this.once('ready', done);
	    }

	    /**
	     * Configure settings.
	     *
	     * @param {String|Object} options Either publicKey or object containing
	     *                                publicKey and other optional members
	     * @param {String} options.publicKey
	     * @param {String} [options.currency] sets a default currency
	     * @param {String} [options.api]
	     * @param {Boolean} [options.cors] Enables data transmission over XHR+CORS
	     * @param {Array} [options.required] Adds additional field requirements for
	     *                                   tokenization. ex: ['cvv']
	     * @public
	     */

	  }, {
	    key: 'configure',
	    value: function configure(options) {
	      debug('configure');

	      options = (0, _componentClone2.default)(options);

	      if ((0, _componentType2.default)(options) === 'string') options = { publicKey: options };

	      options = normalizeOptions(options);

	      if (options.publicKey) {
	        this.config.publicKey = options.publicKey;
	      } else if (!this.config.publicKey) {
	        throw (0, _errors2.default)('config-missing-public-key');
	      }

	      if (options.api) {
	        this.config.api = options.api;
	      }

	      if (options.currency) {
	        this.config.currency = options.currency;
	      }

	      if ('cors' in options) {
	        this.config.cors = options.cors;
	      }

	      if ('fraud' in options) {
	        (0, _lodash2.default)(this.config.fraud, options.fraud);
	      }

	      if ('parent' in options) {
	        this.config.parent = options.parent;
	      }

	      if ((0, _componentType2.default)(options.fields) === 'object') {
	        (0, _lodash2.default)(this.config.fields, options.fields);
	      }

	      this.config.required = options.required || this.config.required || [];

	      // Begin parent role configuration and setup
	      if (this.config.parent) this.parent();else {
	        if (options.parentVersion) this.config.parentVersion = options.parentVersion;
	      }

	      this.configured = true;
	    }

	    /**
	     * Initialize the parent recurly instance concerns: hosted fields and message bus
	     *
	     * sets this.readyState
	     *   0: unconfigured
	     *   1: begun intializing hosted fields
	     *   2: done initializing hosted fields
	     *   3: done initializing (no hosted fields)
	     *
	     * @private
	     */

	  }, {
	    key: 'parent',
	    value: function parent() {
	      var _this2 = this;

	      var reset = false;

	      if (this.hostedFields) {
	        // Check integrity of hostedFields. If fields are dead or do not match chosen selectors, reset
	        if (this.readyState > 1 && !this.hostedFields.integrityCheck(this.config.fields)) reset = true;
	      }

	      if (reset) {
	        this.readyState = 0;
	        this.hostedFields.reset();
	      }

	      if (this.readyState > 0) {
	        this.bus.send('hostedFields:configure');
	        return;
	      }

	      if (!this.fraud) this.fraud = new _fraud.Fraud(this);

	      if (this.bus) this.bus.stop();
	      this.bus = new _bus.Bus({ api: this.config.api });
	      this.bus.add(this);

	      if (!this.hostedFields || reset) {
	        this.hostedFields = new _hostedFields.HostedFields({ recurly: this.config });
	      }

	      if (this.hostedFields.errors.length === 0) {
	        this.bus.add(this.hostedFields);
	        this.once('hostedFields:ready', function (body) {
	          _this2.readyState = 2;
	          _this2.emit('ready');
	        });
	        this.on('hostedFields:state:change', function (body) {
	          return _this2.emit('change', { fields: body });
	        });
	        this.on('hostedField:submit', function () {
	          return _this2.emit('field:submit');
	        });
	        this.readyState = 1;
	      } else {
	        this.readyState = 3;
	        this.emit('ready');
	      }
	    }

	    /**
	     * Assembles the API endpoint.
	     *
	     * @return {String} route
	     * @private
	     */

	  }, {
	    key: 'url',
	    value: function url(route) {
	      return this.config.api + route;
	    }

	    /**
	     * Issues an API request.
	     *
	     * @param {String} method
	     * @param {String} route
	     * @param {Object} [data]
	     * @param {Function} done
	     * @throws {Error} If `configure` has not been called.
	     * @private
	     */

	  }, {
	    key: 'request',
	    value: function request(method, route, data, done) {
	      debug('request', method, route, data);

	      if (!this.configured) {
	        throw (0, _errors2.default)('not-configured');
	      }

	      if ('function' == (0, _componentType2.default)(data)) {
	        done = data;
	        data = {};
	      }

	      if (this.config.parent) {
	        data.version = this.version;
	      } else {
	        data.version = this.config.parentVersion;
	      }

	      data.key = this.config.publicKey;

	      if (this.config.cors) {
	        return this.xhr(method, route, data, done);
	      } else {
	        return this.jsonp(route, data, done);
	      }
	    }

	    /**
	     * Issues an API request over xhr.
	     *
	     * @param {String} method
	     * @param {String} route
	     * @param {Object} [data]
	     * @param {Function} done
	     * @private
	     */

	  }, {
	    key: 'xhr',
	    value: function xhr(method, route, data, done) {
	      debug('xhr');

	      var XHR = function () {
	        var XHR = window.XMLHttpRequest;
	        var XDM = window.XDomainRequest;
	        if (XHR && 'withCredentials' in new XHR()) return XHR;
	        if (XDM) return XDM;
	      }();

	      var req = new XHR();
	      var url = this.url(route);
	      var payload = _qs2.default.stringify(data);

	      if (method === 'get') {
	        url += '?' + payload;
	      }

	      req.open(method, url);
	      req.timeout = this.config.timeout;
	      req.ontimeout = function () {
	        done((0, _errors2.default)('api-timeout'));
	      };
	      req.onerror = function () {
	        done((0, _errors2.default)('api-error'));
	      };
	      req.onprogress = function () {};
	      req.onload = function () {
	        var res;

	        try {
	          res = JSON.parse(this.responseText);
	        } catch (e) {
	          debug(this.responseText, e);
	          return done((0, _errors2.default)('api-error', { message: 'There was a problem parsing the API response with: ' + this.responseText }));
	        }

	        if (res && res.error) {
	          done((0, _errors2.default)('api-error', res.error));
	        } else {
	          done(null, res);
	        }
	      };

	      // XDR requests will abort if too many are sent simultaneously
	      setTimeout(send, 0);

	      function send() {
	        if (method === 'post') {
	          // XDR cannot set Content-type
	          if (req.setRequestHeader) {
	            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	          }
	          req.send(payload);
	        } else {
	          req.send();
	        }
	      }
	    }

	    /**
	     * Issues an API request over jsonp.
	     *
	     * @param {String} route
	     * @param {Object} [data]
	     * @param {Function} done
	     * @private
	     */

	  }, {
	    key: 'jsonp',
	    value: function jsonp(route, data, done) {
	      debug('jsonp');

	      var url = this.url(route) + '?' + _qs2.default.stringify(data);

	      (0, _jsonp3.default)(url, { timeout: this.config.timeout, prefix: '__rjs' }, function (err, res) {
	        if (err) return done(err);
	        if (res.error) {
	          done((0, _errors2.default)('api-error', res.error));
	        } else {
	          done(null, res);
	        }
	      });
	    }
	  }, {
	    key: 'Pricing',
	    value: function Pricing() {
	      return new _pricing2.default(this);
	    }
	  }]);

	  return Recurly;
	}(_componentEmitter2.default);

	Recurly.prototype.Frame = _frame.factory;
	Recurly.prototype.coupon = __webpack_require__(59);
	Recurly.prototype.giftcard = _giftcard2.default;
	Recurly.prototype.ApplePay = _applePay.factory;
	Recurly.prototype.PayPal = _paypal.factory;
	Recurly.prototype.paypal = _direct.deprecated;
	Recurly.prototype.plan = __webpack_require__(60);
	Recurly.prototype.tax = __webpack_require__(61);
	Recurly.prototype.token = __webpack_require__(62);
	Recurly.prototype.validate = __webpack_require__(63);

	/**
	 * Standardizes old configuration structure to current
	 *
	 * 1. options.fields.[field] {String} -> options.fields.[field].selector {String}
	 * 2. options.style.[field] {Object} -> options.fields.[field].style {Object}
	 * 3. options.style.all {Object} -> options.fields.all.style {Object}
	 *
	 * @param  {Object} options
	 * @return {Object}
	 */
	function normalizeOptions(options) {
	  var baseStyleConfig = options.style || {};

	  delete options.style;

	  _hostedFields.FIELD_TYPES.forEach(function (type) {
	    // 1
	    if (options.fields && typeof options.fields[type] === 'string') {
	      options.fields[type] = { selector: options.fields[type] };
	    }
	    // 2
	    if (baseStyleConfig[type]) {
	      options.fields = options.fields || {};
	      options.fields[type] = options.fields[type] || {};
	      options.fields[type].style = (0, _lodash2.default)({}, baseStyleConfig[type], options.fields[type].style);
	    }
	  });

	  // 3
	  if (baseStyleConfig.all) {
	    options.fields = options.fields || {};
	    options.fields.all = { style: baseStyleConfig.all };
	  }

	  return options;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	/**
	 * toString ref.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */

	module.exports = function(val){
	  switch (toString.call(val)) {
	    case '[object Function]': return 'function';
	    case '[object Date]': return 'date';
	    case '[object RegExp]': return 'regexp';
	    case '[object Arguments]': return 'arguments';
	    case '[object Array]': return 'array';
	    case '[object String]': return 'string';
	  }

	  if (val === null) return 'null';
	  if (val === undefined) return 'undefined';
	  if (val && val.nodeType === 1) return 'element';
	  if (val === Object(val)) return 'object';

	  return typeof val;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var type;
	try {
	  type = __webpack_require__(2);
	} catch (_) {
	  type = __webpack_require__(2);
	}

	/**
	 * Module exports.
	 */

	module.exports = clone;

	/**
	 * Clones objects.
	 *
	 * @param {Mixed} any object
	 * @api public
	 */

	function clone(obj){
	  switch (type(obj)) {
	    case 'object':
	      var copy = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          copy[key] = clone(obj[key]);
	        }
	      }
	      return copy;

	    case 'array':
	      var copy = new Array(obj.length);
	      for (var i = 0, l = obj.length; i < l; i++) {
	        copy[i] = clone(obj[i]);
	      }
	      return copy;

	    case 'regexp':
	      // from millermedeiros/amd-utils - MIT
	      var flags = '';
	      flags += obj.multiline ? 'm' : '';
	      flags += obj.global ? 'g' : '';
	      flags += obj.ignoreCase ? 'i' : '';
	      return new RegExp(obj.source, flags);

	    case 'date':
	      return new Date(obj.getTime());

	    default: // string, number, boolean, …
	      return obj;
	  }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = merge;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var debug = __webpack_require__(7)('jsonp');

	/**
	 * Module exports.
	 */

	module.exports = jsonp;

	/**
	 * Callback index.
	 */

	var count = 0;

	/**
	 * Noop function.
	 */

	function noop(){}

	/**
	 * JSONP handler
	 *
	 * Options:
	 *  - param {String} qs parameter (`callback`)
	 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
	 *
	 * @param {String} url
	 * @param {Object|Function} optional options / callback
	 * @param {Function} optional callback
	 */

	function jsonp(url, opts, fn){
	  if ('function' == typeof opts) {
	    fn = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};

	  var prefix = opts.prefix || '__jp';
	  var param = opts.param || 'callback';
	  var timeout = null != opts.timeout ? opts.timeout : 60000;
	  var enc = encodeURIComponent;
	  var target = document.getElementsByTagName('script')[0] || document.head;
	  var script;
	  var timer;

	  // generate a unique id for this request
	  var id = prefix + (count++);

	  if (timeout) {
	    timer = setTimeout(function(){
	      cleanup();
	      if (fn) fn(new Error('Timeout'));
	    }, timeout);
	  }

	  function cleanup(){
	    script.parentNode.removeChild(script);
	    window[id] = noop;
	  }

	  window[id] = function(data){
	    debug('jsonp got', data);
	    if (timer) clearTimeout(timer);
	    cleanup();
	    if (fn) fn(null, data);
	  };

	  // add qs component
	  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
	  url = url.replace('?&', '?');

	  debug('jsonp req "%s"', url);

	  // create script
	  script = document.createElement('script');
	  script.src = url;
	  target.parentNode.insertBefore(script, target);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(8);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(9);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Object#toString() ref for stringify().
	 */

	var toString = Object.prototype.toString;

	/**
	 * Object#hasOwnProperty ref
	 */

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Array#indexOf shim.
	 */

	var indexOf = typeof Array.prototype.indexOf === 'function'
	  ? function(arr, el) { return arr.indexOf(el); }
	  : function(arr, el) {
	      for (var i = 0; i < arr.length; i++) {
	        if (arr[i] === el) return i;
	      }
	      return -1;
	    };

	/**
	 * Array.isArray shim.
	 */

	var isArray = Array.isArray || function(arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/**
	 * Object.keys shim.
	 */

	var objectKeys = Object.keys || function(obj) {
	  var ret = [];
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      ret.push(key);
	    }
	  }
	  return ret;
	};

	/**
	 * Array#forEach shim.
	 */

	var forEach = typeof Array.prototype.forEach === 'function'
	  ? function(arr, fn) { return arr.forEach(fn); }
	  : function(arr, fn) {
	      for (var i = 0; i < arr.length; i++) fn(arr[i]);
	    };

	/**
	 * Array#reduce shim.
	 */

	var reduce = function(arr, fn, initial) {
	  if (typeof arr.reduce === 'function') return arr.reduce(fn, initial);
	  var res = initial;
	  for (var i = 0; i < arr.length; i++) res = fn(res, arr[i]);
	  return res;
	};

	/**
	 * Cache non-integer test regexp.
	 */

	var isint = /^[0-9]+$/;

	function promote(parent, key) {
	  if (parent[key].length == 0) return parent[key] = {}
	  var t = {};
	  for (var i in parent[key]) {
	    if (hasOwnProperty.call(parent[key], i)) {
	      t[i] = parent[key][i];
	    }
	  }
	  parent[key] = t;
	  return t;
	}

	function parse(parts, parent, key, val) {
	  var part = parts.shift();
	  
	  // illegal
	  if (Object.getOwnPropertyDescriptor(Object.prototype, key)) return;
	  
	  // end
	  if (!part) {
	    if (isArray(parent[key])) {
	      parent[key].push(val);
	    } else if ('object' == typeof parent[key]) {
	      parent[key] = val;
	    } else if ('undefined' == typeof parent[key]) {
	      parent[key] = val;
	    } else {
	      parent[key] = [parent[key], val];
	    }
	    // array
	  } else {
	    var obj = parent[key] = parent[key] || [];
	    if (']' == part) {
	      if (isArray(obj)) {
	        if ('' != val) obj.push(val);
	      } else if ('object' == typeof obj) {
	        obj[objectKeys(obj).length] = val;
	      } else {
	        obj = parent[key] = [parent[key], val];
	      }
	      // prop
	    } else if (~indexOf(part, ']')) {
	      part = part.substr(0, part.length - 1);
	      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
	      parse(parts, obj, part, val);
	      // key
	    } else {
	      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
	      parse(parts, obj, part, val);
	    }
	  }
	}

	/**
	 * Merge parent key/val pair.
	 */

	function merge(parent, key, val){
	  if (~indexOf(key, ']')) {
	    var parts = key.split('[')
	      , len = parts.length
	      , last = len - 1;
	    parse(parts, parent, 'base', val);
	    // optimize
	  } else {
	    if (!isint.test(key) && isArray(parent.base)) {
	      var t = {};
	      for (var k in parent.base) t[k] = parent.base[k];
	      parent.base = t;
	    }
	    set(parent.base, key, val);
	  }

	  return parent;
	}

	/**
	 * Compact sparse arrays.
	 */

	function compact(obj) {
	  if ('object' != typeof obj) return obj;

	  if (isArray(obj)) {
	    var ret = [];

	    for (var i in obj) {
	      if (hasOwnProperty.call(obj, i)) {
	        ret.push(obj[i]);
	      }
	    }

	    return ret;
	  }

	  for (var key in obj) {
	    obj[key] = compact(obj[key]);
	  }

	  return obj;
	}

	/**
	 * Parse the given obj.
	 */

	function parseObject(obj){
	  var ret = { base: {} };

	  forEach(objectKeys(obj), function(name){
	    merge(ret, name, obj[name]);
	  });

	  return compact(ret.base);
	}

	/**
	 * Parse the given str.
	 */

	function parseString(str){
	  var ret = reduce(String(str).split('&'), function(ret, pair){
	    var eql = indexOf(pair, '=')
	      , brace = lastBraceInKey(pair)
	      , key = pair.substr(0, brace || eql)
	      , val = pair.substr(brace || eql, pair.length)
	      , val = val.substr(indexOf(val, '=') + 1, val.length);

	    // ?foo
	    if ('' == key) key = pair, val = '';
	    if ('' == key) return ret;

	    return merge(ret, decode(key), decode(val));
	  }, { base: {} }).base;

	  return compact(ret);
	}

	/**
	 * Parse the given query `str` or `obj`, returning an object.
	 *
	 * @param {String} str | {Object} obj
	 * @return {Object}
	 * @api public
	 */

	exports.parse = function(str){
	  if (null == str || '' == str) return {};
	  return 'object' == typeof str
	    ? parseObject(str)
	    : parseString(str);
	};

	/**
	 * Turn the given `obj` into a query string
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */

	var stringify = exports.stringify = function(obj, prefix) {
	  if (isArray(obj)) {
	    return stringifyArray(obj, prefix);
	  } else if ('[object Object]' == toString.call(obj)) {
	    return stringifyObject(obj, prefix);
	  } else if ('string' == typeof obj) {
	    return stringifyString(obj, prefix);
	  } else {
	    return prefix + '=' + encodeURIComponent(String(obj));
	  }
	};

	/**
	 * Stringify the given `str`.
	 *
	 * @param {String} str
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyString(str, prefix) {
	  if (!prefix) throw new TypeError('stringify expects an object');
	  return prefix + '=' + encodeURIComponent(str);
	}

	/**
	 * Stringify the given `arr`.
	 *
	 * @param {Array} arr
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyArray(arr, prefix) {
	  var ret = [];
	  if (!prefix) throw new TypeError('stringify expects an object');
	  for (var i = 0; i < arr.length; i++) {
	    ret.push(stringify(arr[i], prefix + '[' + i + ']'));
	  }
	  return ret.join('&');
	}

	/**
	 * Stringify the given `obj`.
	 *
	 * @param {Object} obj
	 * @param {String} prefix
	 * @return {String}
	 * @api private
	 */

	function stringifyObject(obj, prefix) {
	  var ret = []
	    , keys = objectKeys(obj)
	    , key;

	  for (var i = 0, len = keys.length; i < len; ++i) {
	    key = keys[i];
	    if ('' == key) continue;
	    if (null == obj[key]) {
	      ret.push(encodeURIComponent(key) + '=');
	    } else {
	      ret.push(stringify(obj[key], prefix
	        ? prefix + '[' + encodeURIComponent(key) + ']'
	        : encodeURIComponent(key)));
	    }
	  }

	  return ret.join('&');
	}

	/**
	 * Set `obj`'s `key` to `val` respecting
	 * the weird and wonderful syntax of a qs,
	 * where "foo=bar&foo=baz" becomes an array.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {String} val
	 * @api private
	 */

	function set(obj, key, val) {
	  var v = obj[key];
	  if (Object.getOwnPropertyDescriptor(Object.prototype, key)) return;
	  if (undefined === v) {
	    obj[key] = val;
	  } else if (isArray(v)) {
	    v.push(val);
	  } else {
	    obj[key] = [v, val];
	  }
	}

	/**
	 * Locate last brace in `str` within the key.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function lastBraceInKey(str) {
	  var len = str.length
	    , brace
	    , c;
	  for (var i = 0; i < len; ++i) {
	    c = str[i];
	    if (']' == c) brace = false;
	    if ('[' == c) brace = true;
	    if ('=' == c && !brace) return i;
	  }
	}

	/**
	 * Decode `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function decode(str) {
	  try {
	    return decodeURIComponent(str.replace(/\+/g, ' '));
	  } catch (err) {
	    return str;
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * dependencies
	 */

	var mixin = __webpack_require__(13);

	/**
	 * Export `errors`.
	 */

	module.exports = errors;

	/**
	 * Error accessor.
	 *
	 * @param {String} name
	 * @param {Object} options
	 * @return {Error}
	 */

	function errors(name, options) {
	  return errors.get(name, options);
	}

	/**
	 * Defined errors.
	 *
	 * @type {Object}
	 * @private
	 */

	errors.map = {};

	/**
	 * Base url for documention.
	 *
	 * @type {String}
	 * @private
	 */

	errors.baseURL = '';

	/**
	 * Sets the `baseURL` for docs.
	 *
	 * @param {String} url
	 * @public
	 */

	errors.doc = function (baseURL) {
	  errors.baseURL = baseURL;
	};

	/**
	 * Gets errors defined by `name`.
	 *
	 * @param {String} name
	 * @param {Object} context
	 * @return {Error}
	 * @public
	 */

	errors.get = function (name, context) {
	  if (!(name in errors.map)) {
	    throw new Error('invalid error');
	  } else {
	    return new errors.map[name](context);
	  }
	};

	/**
	 * Registers an error defined by `name` with `config`.
	 *
	 * @param {String} name
	 * @param {Object} config
	 * @return {Error}
	 * @public
	 */

	errors.add = function (name, config) {
	  config = config || {};

	  function RecurlyError(context) {
	    Error.call(this);

	    this.name = this.code = name;
	    if (config.message instanceof Function) {
	      this.message = config.message(context);
	    } else {
	      this.message = config.message;
	    }
	    mixin(this, context || {});

	    if (config.help) {
	      this.help = errors.baseURL + config.help;
	      this.message += ' (need help? ' + this.help + ')';
	    }
	  };

	  RecurlyError.prototype = new Error();
	  return errors.map[name] = RecurlyError;
	};

	/**
	 * Internal definations.
	 *
	 * TODO(gjohnson): open source this as a component
	 * and move these out.
	 */

	errors.doc('https://docs.recurly.com/js');

	errors.add('already-configured', {
	  message: 'Configuration may only be set once.',
	  help: '#identify-your-site'
	});

	errors.add('not-configured', {
	  message: 'Not configured. You must first call recurly.configure().',
	  help: '#identify-your-site'
	});

	errors.add('config-missing-public-key', {
	  message: 'The publicKey setting is required.',
	  help: '#identify-your-site'
	});

	errors.add('config-missing-fields', {
	  message: 'The fields setting is required.'
	  // TODO: Link to docs
	  // help: '#identify-your-site'
	});

	errors.add('missing-hosted-field-target', {
	  message: function message(c) {
	    return 'Target element not found for ' + c.type + ' field using selector \'' + c.selector + '\'';
	  }
	});

	errors.add('api-error', {
	  message: 'There was an error with your request.'
	});

	errors.add('api-timeout', {
	  message: 'The API request timed out.'
	});

	errors.add('validation', {
	  message: 'There was an error validating your request.'
	});

	errors.add('missing-callback', {
	  message: 'Missing callback'
	});

	errors.add('invalid-options', {
	  message: 'Options must be an object'
	});

	errors.add('missing-plan', {
	  message: 'A plan must be specified.'
	});

	errors.add('missing-coupon', {
	  message: 'A coupon must be specified.'
	});

	errors.add('invalid-item', {
	  message: 'The given item does not appear to be a valid recurly plan, coupon, addon, or taxable address.'
	});

	errors.add('invalid-addon', {
	  message: 'The given addon_code is not among the valid addons for the specified plan.'
	});

	errors.add('invalid-currency', {
	  message: 'The given currency is not among the valid codes for the specified plan.'
	});

	errors.add('unremovable-item', {
	  message: 'The given item cannot be removed.'
	});

	errors.add('fraud-data-collector-request-failed', {
	  message: function message(c) {
	    return 'There was an error getting the data collector fields: ' + c.error;
	  }
	});

	errors.add('fraud-data-collector-missing-form', {
	  message: function message(c) {
	    return 'There was an error finding a form to inject the data collector fields using selector \'' + c.selector + '\'';
	  }
	});

	errors.add('gift-card-currency-mismatch', {
	  message: 'The giftcard currency does not match the given currency.'
	});

	errors.add('apple-pay-not-supported', {
	  message: 'Apple Pay is not supported by this device or browser.'
	});

	errors.add('apple-pay-not-available', {
	  message: 'Apple Pay is supported by this device, but the customer has not configured Apple Pay.'
	});

	errors.add('apple-pay-config-missing', {
	  message: function message(c) {
	    return 'Missing Apple Pay configuration option: \'' + c.opt + '\'';
	  }
	});

	errors.add('apple-pay-config-invalid', {
	  message: function message(c) {
	    return 'Apple Pay configuration option \'' + c.opt + '\' is not among your available options: ' + c.set + '.\n                 Please refer to your site configuration if the available options is incorrect.';
	  }
	});

	errors.add('apple-pay-factory-only', {
	  message: 'Apple Pay must be initialized by calling recurly.ApplePay'
	});

	errors.add('apple-pay-init-error', {
	  message: function message(c) {
	    var message = 'Apple Pay did not initialize due to a fatal error';
	    if (c.err) message += ': ' + c.err.message;
	    return message;
	  }
	});

	errors.add('apple-pay-payment-failure', {
	  message: 'Apply Pay could not charge the customer'
	});

	errors.add('paypal-factory-only', {
	  message: 'PayPal must be initialized by calling recurly.PayPal'
	});

	errors.add('paypal-config-missing', {
	  message: function message(c) {
	    return 'Missing PayPal configuration option: \'' + c.opt + '\'';
	  }
	});

	errors.add('paypal-load-error', {
	  message: 'Client libraries failed to load'
	});

	errors.add('paypal-client-error', {
	  message: 'PayPal encountered an unexpected error'
	});

	errors.add('paypal-tokenize-error', {
	  message: 'An error occurred while attempting to generate the PayPal token'
	});

	errors.add('paypal-tokenize-recurly-error', {
	  message: 'An error occurred while attempting to generate the Recurly token'
	});

	errors.add('paypal-braintree-not-ready', {
	  message: 'Braintree PayPal is not yet ready to create a checkout flow'
	});

	errors.add('paypal-braintree-api-error', {
	  message: 'Braintree API experienced an error'
	});

	errors.add('paypal-braintree-tokenize-braintree-error', {
	  message: 'An error occurred while attempting to generate the Braintree token'
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	if (typeof Object.keys === 'function') {
	  module.exports = function(to, from) {
	    Object.keys(from).forEach(function(property) {
	      Object.defineProperty(to, property, Object.getOwnPropertyDescriptor(from, property));
	    });
	  };
	} else {
	  module.exports = function(to, from) {
	    for (var property in from) {
	      if (from.hasOwnProperty(property)) {
	        to[property] = from[property];
	      }
	    }
	  };
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Current package/component version.
	 */

	module.exports = '4.6.0';

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _componentEach = __webpack_require__(16);

	var _componentEach2 = _interopRequireDefault(_componentEach);

	var _componentType = __webpack_require__(2);

	var _componentType2 = _interopRequireDefault(_componentType);

	var _normalize = __webpack_require__(19);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var debug = __webpack_require__(7)('recurly:bankAccount');

	module.exports = {
	  token: token,
	  bankInfo: bankInfo
	};

	/**
	 * Fields that are sent to API.
	 *
	 * @type {Array}
	 * @private
	 */

	var fields = ['account_number', 'account_number_confirmation', 'routing_number', 'name_on_account', 'account_type', 'address1', 'address2', 'country', 'city', 'state', 'postal_code', 'phone', 'vat_number', 'token'];

	var requiredFields = ['account_number', 'account_number_confirmation', 'routing_number', 'account_type', 'name_on_account', 'country'];

	/**
	 * Generates a token from customer data.
	 *
	 * The callback signature: `err, response` where `err` is a
	 * connection, request, or server error, and `response` is the
	 * recurly service response. The generated token is accessed
	 * at `response.token`.
	 *
	 * @param {Object|HTMLFormElement} options Billing properties or an HTMLFormElement
	 * with children corresponding to billing properties via 'data-reurly' attributes.
	 * @param {String} options.name_on_account customer name on bank account
	 * @param {String} options.account_number bank account number
	 * @param {String} options.account_number_confirmation bank account number confirmation
	 * @param {String} options.routing_number bank routing number
	 * @param {String} options.account_type type of bank account (checking/savings)
	 * @param {String} [options.address1]
	 * @param {String} [options.address2]
	 * @param {String} [options.country]
	 * @param {String} [options.city]
	 * @param {String} [options.state]
	 * @param {String|Number} [options.postal_code]
	 * @param {Function} done callback
	 */

	function token(options, done) {
	  debug('token');

	  var data = (0, _normalize.normalize)(fields, options);
	  var input = data.values;
	  var userErrors = validate(input);

	  if ('function' !== (0, _componentType2.default)(done)) {
	    throw (0, _errors2.default)('missing-callback');
	  }

	  if (userErrors.length) {
	    return done((0, _errors2.default)('validation', { fields: userErrors }));
	  }

	  this.request('post', '/token', input, function (err, res) {
	    if (err) return done(err);
	    if (data.fields.token && res.id) {
	      data.fields.token.value = res.id;
	    }
	    done(null, res);
	  });
	}

	/**
	 * performs a bank lookup
	 *
	 * The callback signature: `err, response` where `err` is
	 * a lookup or server error and `response` and the object containing
	 * the found bank info.
	 *
	 * At this time, the only parameter accepted in the options argument
	 * is `routingNumber`.
	 *
	 * @param  {Object} options lookup properties
	 * @param  {String} options.routingNumber the rounting number to use for the bank lookup
	 * @param  {Function} done callback
	 */
	function bankInfo(options, done) {
	  debug('bankInfo');

	  if ('function' !== (0, _componentType2.default)(done)) {
	    throw (0, _errors2.default)('missing-callback');
	  }

	  var routingNumber = options && options.routingNumber;
	  if (!routingNumber || (0, _componentType2.default)(routingNumber) !== 'string') {
	    return done((0, _errors2.default)('validation', { fields: ['routingNumber'] }));
	  }

	  this.request('get', '/bank', { routing_number: routingNumber }, function (err, res) {
	    if (err) return done(err);
	    done(null, res);
	  });
	}

	/**
	 * Checks user input on a token call
	 *
	 * @param {Object} input
	 * @return {Array} indicates which fields are not valid
	 */

	function validate(input) {
	  var errors = [];

	  (0, _componentEach2.default)(requiredFields, function (field) {
	    if (!input[field] || (0, _componentType2.default)(input[field]) !== 'string') {
	      errors.push(field);
	    }
	  });

	  if (input.account_number !== input.account_number_confirmation) {
	    errors.push('account_number_confirmation');
	  }

	  debug('validate errors', errors);

	  return errors;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	try {
	  var type = __webpack_require__(2);
	} catch (err) {
	  var type = __webpack_require__(2);
	}

	var toFunction = __webpack_require__(17);

	/**
	 * HOP reference.
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Iterate the given `obj` and invoke `fn(val, i)`
	 * in optional context `ctx`.
	 *
	 * @param {String|Array|Object} obj
	 * @param {Function} fn
	 * @param {Object} [ctx]
	 * @api public
	 */

	module.exports = function(obj, fn, ctx){
	  fn = toFunction(fn);
	  ctx = ctx || this;
	  switch (type(obj)) {
	    case 'array':
	      return array(obj, fn, ctx);
	    case 'object':
	      if ('number' == typeof obj.length) return array(obj, fn, ctx);
	      return object(obj, fn, ctx);
	    case 'string':
	      return string(obj, fn, ctx);
	  }
	};

	/**
	 * Iterate string chars.
	 *
	 * @param {String} obj
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @api private
	 */

	function string(obj, fn, ctx) {
	  for (var i = 0; i < obj.length; ++i) {
	    fn.call(ctx, obj.charAt(i), i);
	  }
	}

	/**
	 * Iterate object keys.
	 *
	 * @param {Object} obj
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @api private
	 */

	function object(obj, fn, ctx) {
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      fn.call(ctx, key, obj[key]);
	    }
	  }
	}

	/**
	 * Iterate array-ish.
	 *
	 * @param {Array|Object} obj
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @api private
	 */

	function array(obj, fn, ctx) {
	  for (var i = 0; i < obj.length; ++i) {
	    fn.call(ctx, obj[i], i);
	  }
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module Dependencies
	 */

	var expr;
	try {
	  expr = __webpack_require__(18);
	} catch(e) {
	  expr = __webpack_require__(18);
	}

	/**
	 * Expose `toFunction()`.
	 */

	module.exports = toFunction;

	/**
	 * Convert `obj` to a `Function`.
	 *
	 * @param {Mixed} obj
	 * @return {Function}
	 * @api private
	 */

	function toFunction(obj) {
	  switch ({}.toString.call(obj)) {
	    case '[object Object]':
	      return objectToFunction(obj);
	    case '[object Function]':
	      return obj;
	    case '[object String]':
	      return stringToFunction(obj);
	    case '[object RegExp]':
	      return regexpToFunction(obj);
	    default:
	      return defaultToFunction(obj);
	  }
	}

	/**
	 * Default to strict equality.
	 *
	 * @param {Mixed} val
	 * @return {Function}
	 * @api private
	 */

	function defaultToFunction(val) {
	  return function(obj){
	    return val === obj;
	  };
	}

	/**
	 * Convert `re` to a function.
	 *
	 * @param {RegExp} re
	 * @return {Function}
	 * @api private
	 */

	function regexpToFunction(re) {
	  return function(obj){
	    return re.test(obj);
	  };
	}

	/**
	 * Convert property `str` to a function.
	 *
	 * @param {String} str
	 * @return {Function}
	 * @api private
	 */

	function stringToFunction(str) {
	  // immediate such as "> 20"
	  if (/^ *\W+/.test(str)) return new Function('_', 'return _ ' + str);

	  // properties such as "name.first" or "age > 18" or "age > 18 && age < 36"
	  return new Function('_', 'return ' + get(str));
	}

	/**
	 * Convert `object` to a function.
	 *
	 * @param {Object} object
	 * @return {Function}
	 * @api private
	 */

	function objectToFunction(obj) {
	  var match = {};
	  for (var key in obj) {
	    match[key] = typeof obj[key] === 'string'
	      ? defaultToFunction(obj[key])
	      : toFunction(obj[key]);
	  }
	  return function(val){
	    if (typeof val !== 'object') return false;
	    for (var key in match) {
	      if (!(key in val)) return false;
	      if (!match[key](val[key])) return false;
	    }
	    return true;
	  };
	}

	/**
	 * Built the getter function. Supports getter style functions
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function get(str) {
	  var props = expr(str);
	  if (!props.length) return '_.' + str;

	  var val, i, prop;
	  for (i = 0; i < props.length; i++) {
	    prop = props[i];
	    val = '_.' + prop;
	    val = "('function' == typeof " + val + " ? " + val + "() : " + val + ")";

	    // mimic negative lookbehind to avoid problems with nested properties
	    str = stripNested(prop, str, val);
	  }

	  return str;
	}

	/**
	 * Mimic negative lookbehind to avoid problems with nested properties.
	 *
	 * See: http://blog.stevenlevithan.com/archives/mimic-lookbehind-javascript
	 *
	 * @param {String} prop
	 * @param {String} str
	 * @param {String} val
	 * @return {String}
	 * @api private
	 */

	function stripNested (prop, str, val) {
	  return str.replace(new RegExp('(\\.)?' + prop, 'g'), function($0, $1) {
	    return $1 ? $0 : val;
	  });
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Global Names
	 */

	var globals = /\b(Array|Date|Object|Math|JSON)\b/g;

	/**
	 * Return immediate identifiers parsed from `str`.
	 *
	 * @param {String} str
	 * @param {String|Function} map function or prefix
	 * @return {Array}
	 * @api public
	 */

	module.exports = function(str, fn){
	  var p = unique(props(str));
	  if (fn && 'string' == typeof fn) fn = prefixed(fn);
	  if (fn) return map(str, p, fn);
	  return p;
	};

	/**
	 * Return immediate identifiers in `str`.
	 *
	 * @param {String} str
	 * @return {Array}
	 * @api private
	 */

	function props(str) {
	  return str
	    .replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\//g, '')
	    .replace(globals, '')
	    .match(/[a-zA-Z_]\w*/g)
	    || [];
	}

	/**
	 * Return `str` with `props` mapped with `fn`.
	 *
	 * @param {String} str
	 * @param {Array} props
	 * @param {Function} fn
	 * @return {String}
	 * @api private
	 */

	function map(str, props, fn) {
	  var re = /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g;
	  return str.replace(re, function(_){
	    if ('(' == _[_.length - 1]) return fn(_);
	    if (!~props.indexOf(_)) return _;
	    return fn(_);
	  });
	}

	/**
	 * Return unique array.
	 *
	 * @param {Array} arr
	 * @return {Array}
	 * @api private
	 */

	function unique(arr) {
	  var ret = [];

	  for (var i = 0; i < arr.length; i++) {
	    if (~ret.indexOf(arr[i])) continue;
	    ret.push(arr[i]);
	  }

	  return ret;
	}

	/**
	 * Map with prefix `str`.
	 */

	function prefixed(str) {
	  return function(_){
	    return str + _;
	  };
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalize = normalize;

	var _componentEach = __webpack_require__(16);

	var _componentEach2 = _interopRequireDefault(_componentEach);

	var _dom = __webpack_require__(20);

	var _dom2 = _interopRequireDefault(_dom);

	var _parseCard = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Parses options out of a form element and normalizes according to a whitelist.
	 *
	 * @param {Array} whitelist of field names
	 * @param {Object|HTMLFormElement} input
	 * @return {Object}
	 */

	function normalize(whitelist, input, options) {
	  var el = _dom2.default.element(input);
	  var data = { fields: {}, values: {} };

	  options = options || {};

	  if (el && 'form' === el.nodeName.toLowerCase()) {
	    (0, _componentEach2.default)(el.querySelectorAll('[data-recurly]'), function (field) {
	      var name = _dom2.default.data(field, 'recurly');
	      if (~whitelist.indexOf(name)) {
	        data.fields[name] = field;
	        data.values[name] = _dom2.default.value(field);
	      }
	    });
	  } else {
	    data.values = input;
	  }

	  if (options.parseCard) {
	    data.values.number = (0, _parseCard.parseCard)(data.values.number);
	  }

	  return data;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * dependencies
	 */

	var slug = __webpack_require__(21);
	var type = __webpack_require__(2);
	var each = __webpack_require__(16);

	/**
	 * expose
	 */

	module.exports = {
	  element: element,
	  value: value,
	  data: data,
	  findNodeInParents: findNodeInParents
	};

	/**
	 * Detects whether an object is an html element.
	 *
	 * @param {Mixed} node
	 * @return {HTMLElement|Boolean} node
	 */

	function element(node) {
	  var jQuery = window.jQuery;
	  var isJQuery = jQuery && node instanceof jQuery;
	  var isArray = type(node) === 'array';
	  var isElem;

	  if (isJQuery || isArray) node = node[0];

	  if (!node) {
	    return false;
	  }

	  if (typeof HTMLElement !== 'undefined') {
	    isElem = node instanceof HTMLElement;
	  } else {
	    isElem = node.nodeType === 1;
	  }

	  return isElem && node;
	}

	/**
	 * Gets or sets the value of a given HTML form element
	 *
	 * supports text inputs, radio inputs, and selects
	 *
	 * @param {HTMLElement} node
	 * @return {String} val value of the element
	 */

	function value(node, val) {
	  if (!element(node)) return null;
	  if (typeof val !== 'undefined') {
	    return valueSet(node, val);
	  } else {
	    return valueGet(node);
	  }
	}

	/**
	 * Gets an HTMLElement's value property in the context of a form
	 *
	 * @private
	 * @param {HTMLElement} node
	 * @return {String} node's value
	 */

	function valueGet(node) {
	  node = element(node);

	  var nodeType = node && node.type && node.type.toLowerCase();
	  var value;

	  if (!nodeType) {
	    value = '';
	  } else if ('options' in node) {
	    var option = node.options[node.selectedIndex] || node.options[0] || { value: '' };
	    value = option.value;
	  } else if (nodeType === 'checkbox') {
	    if (node.checked) value = node.value;
	  } else if (nodeType === 'radio') {
	    var radios = document.querySelectorAll('input[data-recurly="' + data(node, 'recurly') + '"]');
	    each(radios, function (radio) {
	      if (radio.checked) value = radio.value;
	    });
	  } else if ('value' in node) {
	    value = node.value;
	  }

	  return value;
	}

	/**
	 * Updates an element's value property if
	 * one exists; else innerText if it exists
	 *
	 * @private
	 * @param {Array[HTMLElement]} nodes
	 * @param {Mixed} value
	 */

	function valueSet(nodes, value) {
	  if (type(nodes) !== 'array') nodes = [nodes];
	  each(nodes, function (node) {
	    if (!node) return;else if ('value' in node) node.value = value;else if ('textContent' in node) node.textContent = value;else if ('innerText' in node) node.innerText = value;
	  });
	}

	/**
	 * Gets or sets a node's data attribute
	 *
	 * @param {HTMLElement} node
	 * @param {String} key
	 * @param {Mixed} [value]
	 * @return {String} value
	 */

	function data(node, key, value) {
	  node = element(node);
	  if (!node) return;
	  if (typeof value !== 'undefined') {
	    return dataSet(node, key, value);
	  } else {
	    return dataGet(node, key);
	  }
	}

	/**
	 * Gets a node's data attribute
	 *
	 * @private
	 * @param {HTMLElement} node
	 * @param {String} key
	 * @return {String} attribute value
	 */

	function dataGet(node, key) {
	  if (node.dataset) {
	    return node.dataset[key];
	  } else {
	    return node.getAttribute('data-' + slug(key));
	  }
	}

	/**
	 * sets a node's data attribute
	 *
	 * @private
	 * @param {HTMLElement} node
	 * @param {String} key
	 * @param {Mixed} value
	 * @return {String} value
	 */

	function dataSet(node, key, value) {
	  if (node.dataset) {
	    node.dataset[key] = value;
	  } else {
	    node.setAttribute('data-' + slug(key), value);
	  }
	  return '' + value;
	}

	/**
	 * take an html node and find a parent node with a target tag name
	 * example tag names: 'div', 'form'
	 *
	 * @param  {HTMLElement} node
	 * @param  {String} targetTagName the name of the target element type
	 * @return {HTMLElement} the found node if available
	 */
	function findNodeInParents(node, targetTagName) {
	  node = element(node);
	  if (!node) return null;
	  if (node.tagName.match(RegExp(targetTagName, 'i'))) return node;
	  return findNodeInParents(node.parentNode, targetTagName);
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	var toSpace = __webpack_require__(22);


	/**
	 * Expose `toSlugCase`.
	 */

	module.exports = toSlugCase;


	/**
	 * Convert a `string` to slug case.
	 *
	 * @param {String} string
	 * @return {String}
	 */


	function toSlugCase (string) {
	  return toSpace(string).replace(/\s/g, '-');
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	var clean = __webpack_require__(23);


	/**
	 * Expose `toSpaceCase`.
	 */

	module.exports = toSpaceCase;


	/**
	 * Convert a `string` to space case.
	 *
	 * @param {String} string
	 * @return {String}
	 */


	function toSpaceCase (string) {
	  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
	    return match ? ' ' + match : '';
	  });
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	
	/**
	 * Expose `toNoCase`.
	 */

	module.exports = toNoCase;


	/**
	 * Test whether a string is camel-case.
	 */

	var hasSpace = /\s/;
	var hasCamel = /[a-z][A-Z]/;
	var hasSeparator = /[\W_]/;


	/**
	 * Remove any starting case from a `string`, like camel or snake, but keep
	 * spaces and punctuation that may be important otherwise.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toNoCase (string) {
	  if (hasSpace.test(string)) return string.toLowerCase();

	  if (hasSeparator.test(string)) string = unseparate(string);
	  if (hasCamel.test(string)) string = uncamelize(string);
	  return string.toLowerCase();
	}


	/**
	 * Separator splitter.
	 */

	var separatorSplitter = /[\W_]+(.|$)/g;


	/**
	 * Un-separate a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function unseparate (string) {
	  return string.replace(separatorSplitter, function (m, next) {
	    return next ? ' ' + next : '';
	  });
	}


	/**
	 * Camelcase splitter.
	 */

	var camelSplitter = /(.)([A-Z]+)/g;


	/**
	 * Un-camelcase a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function uncamelize (string) {
	  return string.replace(camelSplitter, function (m, previous, uppers) {
	    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
	  });
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseCard = parseCard;
	/**
	 * Removes dashes and spaces from a card number.
	 *
	 * @param {Number|String} number
	 * @return {String} parsed card number
	 */

	function parseCard(number) {
	  return (number || '').toString().replace(/[-\s]/g, '');
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.factory = factory;

	var _qs = __webpack_require__(10);

	var _qs2 = _interopRequireDefault(_qs);

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _uuid = __webpack_require__(26);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:frame');

	var DEFAULTS = {
	  width: 450,
	  height: 535
	};

	function factory(options) {
	  options = Object.assign({}, options, { recurly: this });
	  return new Frame(options);
	}

	/**
	 * Issues an API request to a popup window.
	 *
	 * @param {Object} options
	 * @param {String} options.path
	 * @param {Object} [options.payload]
	 */

	var Frame = function (_Emitter) {
	  _inherits(Frame, _Emitter);

	  function Frame(options) {
	    _classCallCheck(this, Frame);

	    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this));

	    _this.id = (0, _uuid.uuid)();
	    _this.recurly = options.recurly;
	    _this.name = 'recurly-frame-' + _this.recurly.id + '-' + _this.id;
	    _this.width = options.width || DEFAULTS.width;
	    _this.height = options.height || DEFAULTS.height;
	    _this.prepare(options.path, options.payload);
	    _this.listen();
	    return _this;
	  }

	  /**
	   * Prepares window for launch
	   *
	   * @private
	   * @param  {String} path - API path to load
	   * @param  {Object} payload - Request payload
	   */


	  _createClass(Frame, [{
	    key: 'prepare',
	    value: function prepare(path) {
	      var _this2 = this;

	      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      debug('creating request frame');

	      payload.version = this.recurly.version;
	      payload.event = this.name;
	      payload.key = this.recurly.config.publicKey;

	      this.once(payload.event, function (res) {
	        if (_this2.relay) global.document.body.removeChild(_this2.relay);
	        if (res.error) _this2.emit('error', res.error);else _this2.emit('done', res);
	      });

	      this.url = this.recurly.url(path);
	      this.url += (~this.url.indexOf('?') ? '&' : '?') + _qs2.default.stringify(payload);
	    }
	  }, {
	    key: 'listen',
	    value: function listen(done) {
	      var _this3 = this;

	      this.recurly.bus.add(this);

	      // IE will not allow communication between windows;
	      // thus we must create a frame relay
	      if ('documentMode' in document) {
	        debug('Creating relay');
	        var relay = document.createElement('iframe');
	        relay.width = relay.height = 0;
	        relay.src = this.recurly.url('/relay');
	        relay.name = 'recurly-relay-' + this.recurly.id + '-' + this.id;
	        relay.style.display = 'none';
	        relay.onload = function () {
	          return _this3.create();
	        };
	        global.document.body.appendChild(relay);
	        this.relay = relay;
	      } else {
	        this.create();
	      }
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      debug('opening frame window', this.url, this.name, this.attributes);
	      global.open(this.url, this.name, this.attributes);
	    }
	  }, {
	    key: 'attributes',
	    get: function get() {
	      return '\n      resizable,scrollbars,\n      width=' + this.width + ',\n      height=' + this.height + ',\n      top=' + this.top + ',\n      left=' + this.left + '\n    ';
	    }
	  }, {
	    key: 'top',
	    get: function get() {
	      var outerHeight = global.outerHeight || global.document.documentElement.clientHeight;
	      var outerTop = global.screenY === null ? global.screenTop : global.screenY;

	      return center(outerHeight, this.height, outerTop);
	    }
	  }, {
	    key: 'left',
	    get: function get() {
	      var outerWidth = global.outerWidth || global.document.documentElement.clientWidth;
	      var outerLeft = global.screenX === null ? global.screenLeft : global.screenX;

	      return center(outerWidth, this.width, outerLeft);
	    }
	  }]);

	  return Frame;
	}(_componentEmitter2.default);

	function center(outer, inner, offset) {
	  return (outer - inner) / 2 + offset;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Generates a simple uuid
	 *
	 * @param {Number} len - Length of uuid. Maxiumum is 12.
	 */

	var uuid = exports.uuid = function uuid() {
	  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	  return Math.random().toString(36).substr(2, len);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.factory = factory;

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	var _pricing = __webpack_require__(28);

	var _normalize = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:apple-pay');

	var SESSION_TIMEOUT = 300000; // 5m
	var APPLE_PAY_API_VERSION = 2;

	/**
	 * Instantiation factory
	 *
	 * @param  {Object} options
	 * @return {ApplePay}
	 */
	function factory(options) {
	  return new ApplePay(Object.assign({}, options, { recurly: this }));
	};

	/**
	 * Fields that are sent to API.
	 *
	 * @type {Array}
	 * @private
	 */

	var fields = ['first_name', 'last_name', 'address1', 'address2', 'country', 'city', 'state', 'postal_code', 'phone', 'vat_number', 'fraud_session_id', 'token'];

	/**
	 * Initializes an Apple Pay session.
	 *
	 * @param {Object} options
	 * @constructor
	 * @public
	 */

	var ApplePay = function (_Emitter) {
	  _inherits(ApplePay, _Emitter);

	  function ApplePay(options) {
	    _classCallCheck(this, ApplePay);

	    var _this = _possibleConstructorReturn(this, (ApplePay.__proto__ || Object.getPrototypeOf(ApplePay)).call(this));

	    _this._ready = false;
	    _this.config = {};
	    _this.once('ready', function () {
	      return _this._ready = true;
	    });

	    // Detect whether Apple Pay is available
	    if (!global.ApplePaySession) {
	      _this.initError = _this.error('apple-pay-not-supported');
	    } else if (!global.ApplePaySession.canMakePayments()) {
	      _this.initError = _this.error('apple-pay-not-available');
	    }

	    if (!_this.initError) {
	      _this.configure(options);
	    }
	    return _this;
	  }

	  /**
	   * @return {ApplePaySession} Bound Apple Pay session
	   * @private
	   */


	  _createClass(ApplePay, [{
	    key: 'ready',


	    /**
	     * Initialized state callback registry
	     *
	     * @param  {Function} cb callback
	     * @private
	     */
	    value: function ready(cb) {
	      if (this._ready) cb();else this.once('ready', cb);
	    }

	    /**
	     * Configures a new instance
	     *
	     * @param  {Object} options
	     * @emit 'ready'
	     * @private
	     */

	  }, {
	    key: 'configure',
	    value: function configure(options) {
	      var _this2 = this;

	      if ('form' in options) this.config.form = options.form;else return this.initError = this.error('apple-pay-config-missing', { opt: 'form' });

	      if ('label' in options) this.config.label = options.label;else return this.initError = this.error('apple-pay-config-missing', { opt: 'label' });

	      // Initialize with no line items
	      this.config.lineItems = [];

	      // Determine pricing determination mechanism
	      if ('pricing' in options) {
	        this.config.pricing = options.pricing;
	        this.config.pricing.on('change', this.onPricingChange.bind(this));
	      } else if ('total' in options) {
	        this.config.total = options.total;
	      } else {
	        return this.initError = this.error('apple-pay-config-missing', { opt: 'total' });
	      }

	      if ('recurly' in options) this.recurly = options.recurly;else return this.initError = this.error('apple-pay-factory-only');

	      // Retrieve remote configuration
	      this.recurly.request('get', '/apple_pay/info', function (err, info) {
	        if (err) return _this2.initError = _this2.error(err);

	        if ('countries' in info && ~info.countries.indexOf(options.country)) _this2.config.country = options.country;else return _this2.initError = _this2.error('apple-pay-config-invalid', { opt: 'country', set: info.countries });

	        if ('currencies' in info && ~info.currencies.indexOf(options.currency)) _this2.config.currency = options.currency;else return _this2.initError = _this2.error('apple-pay-config-invalid', { opt: 'currency', set: info.currencies });

	        _this2.config.merchantCapabilities = info.merchantCapabilities || [];
	        _this2.config.supportedNetworks = info.supportedNetworks || [];

	        _this2.emit('ready');
	      });
	    }

	    /**
	     * Begins Apple Pay transaction
	     *
	     * @public
	     */

	  }, {
	    key: 'begin',
	    value: function begin() {
	      if (this.initError) return this.error('apple-pay-init-error', { err: this.initError });
	      delete this._session;
	      this.session.begin();
	    }

	    /**
	     * Updates line items and total price on pricing module changes
	     *
	     * @param  {Object} price Pricing.price
	     * @private
	     */

	  }, {
	    key: 'onPricingChange',
	    value: function onPricingChange(price) {
	      // Reset line items
	      this.config.lineItems = [];
	      this.config.total = price.now.total;
	    }

	    /**
	     * Validates the merchant session
	     *
	     * @param  {Event} event ApplePayValidateMerchantEvent
	     * @return {[type]}       [description]
	     * @private
	     */

	  }, {
	    key: 'onValidateMerchant',
	    value: function onValidateMerchant(event) {
	      var _this3 = this;

	      debug('Validating Apple Pay merchant session', event);

	      var validationURL = event.validationURL;

	      this.recurly.request('post', '/apple_pay/start', { validationURL: validationURL }, function (err, merchantSession) {
	        if (err) return _this3.error(err);
	        _this3.session.completeMerchantValidation(merchantSession);
	      });
	    }

	    /**
	     * Handles payment method selection
	     *
	     * @param  {Event} event
	     * @private
	     */

	  }, {
	    key: 'onPaymentMethodSelected',
	    value: function onPaymentMethodSelected(event) {
	      debug('Payment method selected', event);
	      this.session.completePaymentMethodSelection(this.total, this.lineItems);
	    }

	    /**
	     * Handles shipping contact selection. Not utilized
	     *
	     * @param  {Event} event
	     * @private
	     */

	  }, {
	    key: 'onShippingContactSelected',
	    value: function onShippingContactSelected(event) {
	      var status = this.session.STATUS_SUCCESS;
	      var newShippingMethods = [];
	      this.session.completeShippingContactSelection(status, newShippingMethods, this.total, this.lineItems);
	    }

	    /**
	     * Handles shipping method selection. Not utilized
	     *
	     * @param  {Event} event
	     * @private
	     */

	  }, {
	    key: 'onShippingMethodSelected',
	    value: function onShippingMethodSelected(event) {
	      this.session.completeShippingMethodSelection(this.total, this.lineItems);
	    }

	    /**
	     * Handles payment authorization. Submits payment token and
	     * emits the resultant authorization token
	     *
	     * @param  {Event} event
	     * @emit 'token'
	     * @private
	     */

	  }, {
	    key: 'onPaymentAuthorized',
	    value: function onPaymentAuthorized(event) {
	      var _this4 = this;

	      debug('Payment authorization received', event);

	      var data = (0, _normalize.normalize)(fields, this.config.form, { parseCard: false });
	      var inputs = data.values || {};

	      inputs['paymentData'] = event.payment.token['paymentData'];
	      inputs['paymentMethod'] = event.payment.token['paymentMethod'];

	      this.recurly.request('post', '/apple_pay/token', inputs, function (err, token) {
	        if (err) {
	          _this4.session.completePayment(_this4.session.STATUS_FAILURE);
	          return _this4.error('apple-pay-payment-failure', err);
	        }

	        debug('Token received', token);

	        _this4.session.completePayment(_this4.session.STATUS_SUCCESS);
	        _this4.emit('token', token);
	      });
	    }

	    /**
	     * Handles customer cancelation. Passes on the event
	     *
	     * @param  {Event} event
	     * @emit 'cancel'
	     * @private
	     */

	  }, {
	    key: 'onCancel',
	    value: function onCancel(event) {
	      debug('User canceled Apple Pay payment', event);

	      this.emit('cancel', event);
	    }

	    /**
	     * Creates and emits a RecurlyError
	     *
	     * @param  {...Mixed} params to be passed to the Recurlyerror factory
	     * @return {RecurlyError}
	     * @emit 'error'
	     * @private
	     */

	  }, {
	    key: 'error',
	    value: function error() {
	      var err = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error ? arguments.length <= 0 ? undefined : arguments[0] : _errors2.default.apply(undefined, arguments);
	      this.emit('error', err);
	      return err;
	    }
	  }, {
	    key: 'session',
	    get: function get() {
	      if (this._session) return this._session;

	      debug('Creating new Apple Pay session');

	      var session = new global.ApplePaySession(APPLE_PAY_API_VERSION, {
	        countryCode: this.config.country,
	        currencyCode: this.config.currency,
	        supportedNetworks: this.config.supportedNetworks,
	        merchantCapabilities: this.config.merchantCapabilities,
	        total: { label: this.config.label, amount: this.config.total }
	      });

	      session.onvalidatemerchant = this.onValidateMerchant.bind(this);
	      session.onshippingcontactselected = this.onShippingContactSelected.bind(this);
	      session.onshippingmethodselected = this.onShippingMethodSelected.bind(this);
	      session.onpaymentmethodselected = this.onPaymentMethodSelected.bind(this);
	      session.onpaymentauthorized = this.onPaymentAuthorized.bind(this);
	      session.oncancel = this.onCancel.bind(this);

	      return this._session = session;
	    }

	    /**
	     * @return {Array} subtotal line items for display on payment sheet
	     */

	  }, {
	    key: 'lineItems',
	    get: function get() {
	      // Clone configured line items
	      return [].concat(this.config.lineItems);
	    }

	    /**
	     * @return {Object} total cost line item
	     * @private
	     */

	  }, {
	    key: 'total',
	    get: function get() {
	      return { type: 'final', label: this.config.label, amount: this.config.total };
	    }

	    /**
	     * @return {String} name for plan line item
	     * @private
	     */

	  }, {
	    key: 'planLabel',
	    get: function get() {
	      if (this.config.pricing && this.config.pricing.items.plan) return this.config.pricing.items.plan.name;else return 'Subscription plan';
	    }
	  }]);

	  return ApplePay;
	}(_componentEmitter2.default);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _componentType = __webpack_require__(2);

	var _componentType2 = _interopRequireDefault(_componentType);

	var _componentFind = __webpack_require__(29);

	var _componentFind2 = _interopRequireDefault(_componentFind);

	var _promise = __webpack_require__(30);

	var _promise2 = _interopRequireDefault(_promise);

	var _calculations = __webpack_require__(42);

	var _calculations2 = _interopRequireDefault(_calculations);

	var _attachment = __webpack_require__(43);

	var _attachment2 = _interopRequireDefault(_attachment);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:pricing');

	var PROPERTIES = ['plan', 'addon', 'coupon', 'address', 'currency', 'gift_card', 'shipping_address'];

	/**
	 * Pricing
	 *
	 * @constructor
	 * @param {Recurly} recurly
	 * @public
	 */

	var Pricing = function (_Emitter) {
	  _inherits(Pricing, _Emitter);

	  function Pricing(recurly) {
	    _classCallCheck(this, Pricing);

	    var _this = _possibleConstructorReturn(this, (Pricing.__proto__ || Object.getPrototypeOf(Pricing)).call(this));

	    _this.recurly = recurly;
	    _this.reset();
	    return _this;
	  }

	  /**
	   * Attachment factory
	   *
	   * @param {HTMLElement} container - element on which to attach
	   */

	  _createClass(Pricing, [{
	    key: 'attach',
	    value: function attach(container) {
	      if (this.attachment) this.attachment.detach();
	      this.attachment = new _attachment2.default(this, container);
	      return this.attachment;
	    }

	    /**
	     * Resets the pricing calculator
	     *
	     * @public
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.items = {};
	      this.items.addons = [];
	      this.currency(this.recurly.config.currency);
	    }

	    /**
	     * Removes an object from the pricing model
	     *
	     * example
	     *
	     *   .remove({ plan: 'plan_code' });
	     *   .remove({ addon: 'addon_code' });
	     *   .remove({ coupon: 'coupon_code' });
	     *   .remove({ address: true }); // to remove without specifying a code
	     *
	     * @param {Object} opts
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'remove',
	    value: function remove(opts, done) {
	      var self = this;
	      var item = void 0;
	      debug('remove');

	      return new _promise2.default(function (resolve, reject) {
	        var prop = Object.keys(opts)[0];
	        var id = opts[prop];
	        if (!~PROPERTIES.indexOf(prop)) return self.error((0, _errors2.default)('invalid-item'), reject);
	        if (prop === 'addon') {
	          var pos = self.items.addons.indexOf(findAddon(self.items.addons, { code: id }));
	          if (~pos) {
	            item = self.items.addons.splice(pos);
	          }
	        } else if (self.items[prop] && (id === self.items[prop].code || id === true)) {
	          item = self.items[prop];
	          delete self.items[prop];
	        } else {
	          return self.error((0, _errors2.default)('unremovable-item', {
	            type: prop,
	            id: id,
	            reason: 'does not exist on this pricing instance.'
	          }), reject);
	        }
	      }, this).nodeify(done);
	    }

	    /**
	     * Provides a subscription price estimate using current state
	     *
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'reprice',
	    value: function reprice(done) {
	      var self = this;
	      debug('reprice');

	      return new _promise2.default(function (resolve, reject) {
	        if (!self.items.plan) return self.error((0, _errors2.default)('missing-plan'), reject, 'plan');

	        (0, _calculations2.default)(self, function (price) {
	          if (JSON.stringify(price) === JSON.stringify(self.price)) return resolve(price);
	          self.price = price;
	          self.emit('change', price);
	          resolve(price);
	        });
	      }, this).nodeify(done);
	    }

	    /**
	     * Updates plan
	     *
	     * @param {String} planCode
	     * @param {Object} [meta]
	     * @param {Number} [meta.quantity]
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'plan',
	    value: function plan(planCode, meta, done) {
	      var self = this;
	      var plan = this.items.plan;
	      var quantity = void 0;

	      if ((0, _componentType2.default)(meta) === 'function') {
	        done = meta;
	        meta = undefined;
	      }

	      meta = meta || {};

	      // meta.quantity, plan.quantity, 1
	      if (plan && plan.quantity) quantity = plan.quantity;
	      if (meta.quantity) quantity = parseInt(meta.quantity, 10);
	      if (!quantity || quantity < 1) quantity = 1;

	      return new _promise2.default(function (resolve, reject) {
	        if (plan && plan.code === planCode) {
	          plan.quantity = quantity;
	          return resolve(plan);
	        }

	        self.recurly.plan(planCode, function (err, plan) {
	          if (err) return self.error(err, reject, 'plan');

	          plan.quantity = quantity;
	          self.items.plan = plan;

	          if (!(self.items.currency in plan.price)) {
	            self.currency(Object.keys(plan.price)[0]);
	          }

	          // If we have a coupon, it must be reapplied
	          if (self.items.coupon) {
	            self.coupon(self.items.coupon.code).then(finish, finish);
	          } else {
	            finish();
	          }

	          function finish() {
	            debug('set.plan');
	            self.emit('set.plan', plan);
	            resolve(plan);
	          }
	        });
	      }, this).nodeify(done);
	    }

	    /**
	     * Updates addon
	     *
	     * @param {String} addonCode
	     * @param {Object} [meta]
	     * @param {Number} [meta.quantity]
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'addon',
	    value: function addon(addonCode, meta, done) {
	      var self = this;

	      if ((0, _componentType2.default)(meta) === 'function') {
	        done = meta;
	        meta = undefined;
	      }

	      meta = meta || {};

	      return new _promise2.default(function (resolve, reject) {
	        if (!self.items.plan) return self.error((0, _errors2.default)('missing-plan'), reject, 'addon');

	        var planAddon = findAddon(self.items.plan.addons, addonCode);
	        if (!planAddon) {
	          return self.error((0, _errors2.default)('invalid-addon', {
	            planCode: self.items.plan.code,
	            addonCode: addonCode
	          }), reject, 'addon');
	        }

	        var quantity = addonQuantity(meta, planAddon);
	        var addon = findAddon(self.items.addons, addonCode);

	        if (quantity === 0) {
	          self.remove({ addon: addonCode });
	        }

	        if (addon) {
	          addon.quantity = quantity;
	        } else {
	          addon = JSON.parse(JSON.stringify(planAddon));
	          addon.quantity = quantity;
	          self.items.addons.push(addon);
	        }

	        debug('set.addon');
	        self.emit('set.addon', addon);
	        resolve(addon);
	      }, this).nodeify(done);
	    }

	    /**
	     * Updates Giftcard
	     *
	     * @param {String} giftcardCode
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'giftcard',
	    value: function giftcard(giftcardCode, done) {
	      var self = this;

	      return new _promise2.default(function (resolve, reject) {
	        unsetGiftcard();

	        if (!giftcardCode) return resolve();

	        self.recurly.giftcard({ giftcard: giftcardCode }, function (err, gift_card) {
	          if (err && err.code === 'not-found') unsetGiftcard();

	          if (err) {
	            return self.error(err, reject, 'gift_card');
	          } else {
	            if (self.items.currency !== gift_card.currency) {
	              unsetGiftcard();
	              return self.error((0, _errors2.default)('gift-card-currency-mismatch'), reject, 'gift_card');
	            } else {
	              setGiftcard(gift_card);
	              resolve(gift_card);
	            }
	          }
	        });
	      }, this).nodeify(done);

	      function setGiftcard(gift_card) {
	        debug('set.gift_card');
	        self.items.gift_card = gift_card;
	        self.emit('set.gift_card', gift_card);
	      }

	      function unsetGiftcard(err) {
	        debug('unset.gift_card');
	        delete self.items.gift_card;
	        self.emit('unset.gift_card');
	      }
	    }

	    /**
	     * Updates coupon
	     *
	     * @param {String} couponCode
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'coupon',
	    value: function coupon(couponCode, done) {
	      var self = this;
	      var coupon = this.items.coupon;

	      return new _promise2.default(function (resolve, reject) {
	        if (!self.items.plan) return self.error((0, _errors2.default)('missing-plan'), reject, 'coupon');
	        if (coupon) self.remove({ coupon: coupon.code });

	        // A blank coupon is handled as ok
	        if (!couponCode) {
	          unsetCoupon();
	          return resolve();
	        }

	        self.recurly.coupon({ plan: self.items.plan.code, coupon: couponCode }, function (err, coupon) {
	          if (err && err.code === 'not-found') unsetCoupon();

	          if (err) {
	            return self.error(err, reject, 'coupon');
	          } else {
	            setCoupon(coupon);
	            resolve(coupon);
	          }
	        });
	      }, this).nodeify(done);

	      function setCoupon(coupon) {
	        debug('set.coupon');
	        self.items.coupon = coupon;
	        self.emit('set.coupon', coupon);
	      }

	      function unsetCoupon(err) {
	        debug('unset.coupon');
	        delete self.items.coupon;
	        self.emit('unset.coupon');
	      }
	    }

	    /**
	     * Updates address
	     *
	     * @param {Object} address
	     * @param {String} address.country
	     * @param {String|Number} address.postal_code
	     * @param {String} address.vat_number
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'address',
	    value: function address(_address, done) {
	      return new _promise2.default(updateFactory(this, 'address', _address), this).nodeify(done);
	    }

	    /**
	     * Updates shipping address
	     *
	     * @param {Object} address
	     * @param {String} address.country
	     * @param {String|Number} address.postal_code
	     * @param {String} address.vat_number
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'shippingAddress',
	    value: function shippingAddress(address, done) {
	      return new _promise2.default(updateFactory(this, 'shipping_address', address), this).nodeify(done);
	    }

	    /**
	     * Updates tax info
	     *
	     * @param {Object} tax
	     * @param {String} tax.tax_code
	     * @param {String} tax.vat_number
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'tax',
	    value: function tax(_tax, done) {
	      return new _promise2.default(updateFactory(this, 'tax', _tax), this).nodeify(done);
	    }

	    /**
	     * Updates or retrieves currency code
	     *
	     * @param {String} code
	     * @param {Function} [done] callback
	     * @public
	     */

	  }, {
	    key: 'currency',
	    value: function currency(code, done) {
	      var self = this;
	      var plan = this.items.plan;
	      var currency = this.items.currency;

	      return new _promise2.default(function (resolve, reject) {
	        if (currency === code) return resolve(currency);
	        if (plan && !(code in plan.price)) {
	          return self.error((0, _errors2.default)('invalid-currency', {
	            currencyCode: code,
	            planCurrencies: Object.keys(plan.price)
	          }), reject, 'currency');
	        }

	        self.items.currency = code;

	        debug('set.currency');
	        self.emit('set.currency', code);
	        resolve(code);
	      }, this).nodeify(done);
	    }

	    /**
	     * Emits a namespaced error
	     * @param {Error} error
	     * @param {Function} reject - Promise rejection function
	     * @param {[String]} namespace - dot-delimited error namespace
	     * @private
	     */

	  }, {
	    key: 'error',
	    value: function error(_error, reject, namespace) {
	      var _this2 = this;

	      if (namespace) {
	        namespace.split('.').reduce(function (memo, name) {
	          return _this2.emit(memo + '.' + name, _error);
	        }, 'error');
	      }
	      this.emit('error', _error);
	      return reject(_error);
	    }
	  }]);

	  return Pricing;
	}(_componentEmitter2.default);

	/**
	 * Utility functions
	 */

	exports.default = Pricing;
	function updateFactory(self, name, object) {
	  return function (resolve, reject) {
	    if (JSON.stringify(object) === JSON.stringify(self.items[name])) {
	      return resolve(self.items[name]);
	    }

	    self.items[name] = object;

	    debug('set.' + name);
	    self.emit('set.' + name, object);
	    resolve(object);
	  };
	}

	function addonQuantity(meta, planAddon) {
	  var qty = 1;
	  if ('quantity' in planAddon) qty = planAddon.quantity;
	  if ('quantity' in meta) qty = meta.quantity;
	  return parseInt(qty, 10) || 0;
	}

	function findAddon(addons, code) {
	  return addons && (0, _componentFind2.default)(addons, { code: code });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var toFunction = __webpack_require__(17);

	/**
	 * Find the first value in `arr` with when `fn(val, i)` is truthy.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @return {Array}
	 * @api public
	 */

	module.exports = function(arr, fn){
	  // callback
	  if ('function' != typeof fn) {
	    if (Object(fn) === fn) fn = objectToFunction(fn);
	    else fn = toFunction(fn);
	  }

	  // filter
	  for (var i = 0, len = arr.length; i < len; ++i) {
	    if (fn(arr[i], i)) return arr[i];
	  }
	};

	/**
	 * Convert `obj` into a match function.
	 *
	 * @param {Object} obj
	 * @return {Function}
	 * @api private
	 */

	function objectToFunction(obj) {
	  return function(o){
	    for (var key in obj) {
	      if (o[key] != obj[key]) return false;
	    }
	    return true;
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Dependencies
	 */

	var Promise = __webpack_require__(31);
	var mixin = __webpack_require__(13);
	var each = __webpack_require__(16);
	var type = __webpack_require__(2);
	var par = __webpack_require__(41);
	var debug = __webpack_require__(7)('recurly:pricing:promise');

	var PRICING_METHODS = ['tax', 'plan', 'addon', 'coupon', 'address', 'currency', 'reset', 'remove', 'reprice', 'giftcard', 'shippingAddress'];

	/**
	 * Expose
	 */

	module.exports = PricingPromise;

	/**
	 * PricingPromise
	 *
	 * issues repricing when .done
	 *
	 * contains .then wrappers for Pricing property methods
	 *
	 * Usage
	 *
	 *   var pricing = recurly.Pricing();
	 *
	 *   pricing
	 *     .plan('basic')
	 *     .addon('addon1')
	 *     .then(process)
	 *     .catch(errors)
	 *     .done();
	 *
	 * @param {Function} resolver
	 * @param {Pricing} pricing bound instance
	 * @constructor
	 * @public
	 */

	function PricingPromise(resolver, pricing) {
	  if (!(this instanceof PricingPromise)) return new PricingPromise(resolver, pricing);
	  debug('create');

	  var self = this;
	  this.pricing = pricing;
	  this.constructor = par.rpartial(this.constructor, pricing);

	  Promise.call(this, resolver);

	  // for each pricing method, create a promise wrapper method
	  each(PRICING_METHODS, function (method) {
	    self[method] = function () {
	      var args = arguments;
	      return self.then(function () {
	        return self.pricing[method].apply(self.pricing, args);
	      });
	    };
	  });
	}

	mixin(PricingPromise.prototype, Promise.prototype);
	PricingPromise.prototype.constructor = PricingPromise;

	/**
	 * Adds a reprice and completes the control flow
	 *
	 * @param {Function} onFulfilled
	 * @param {Function} onRejected
	 * @return {Pricing} bound pricing instance
	 * @public
	 */

	PricingPromise.prototype.done = function () {
	  debug('repricing');
	  Promise.prototype.done.apply(this.then(this.reprice), arguments);
	  return this.pricing;
	};

	/**
	 * Adds a reprice if a callback is passed
	 *
	 * @param {Function} [done] callback
	 * @public
	 */

	PricingPromise.prototype.nodeify = function (done) {
	  if (type(done) === 'function') this.reprice();
	  return Promise.prototype.nodeify.apply(this, arguments);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(32)


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(33);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(40);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(34);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.


	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}

	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}

	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(33);

	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(33);

	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(33);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This file contains then/promise specific extensions that are only useful
	// for node.js interop

	var Promise = __webpack_require__(33);
	var asap = __webpack_require__(39);

	module.exports = Promise;

	/* Static Functions */

	Promise.denodeify = function (fn, argumentCount) {
	  if (
	    typeof argumentCount === 'number' && argumentCount !== Infinity
	  ) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	}

	var callbackFn = (
	  'function (err, res) {' +
	  'if (err) { rj(err); } else { rs(res); }' +
	  '}'
	);
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'return new Promise(function (rs, rj) {',
	    'var res = fn.call(',
	    ['self'].concat(args).concat([callbackFn]).join(','),
	    ');',
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'var args;',
	    'var argLength = arguments.length;',
	    'if (arguments.length > ' + fnLength + ') {',
	    'args = new Array(arguments.length + 1);',
	    'for (var i = 0; i < arguments.length; i++) {',
	    'args[i] = arguments[i];',
	    '}',
	    '}',
	    'return new Promise(function (rs, rj) {',
	    'var cb = ' + callbackFn + ';',
	    'var res;',
	    'switch (argLength) {',
	    args.concat(['extra']).map(function (_, index) {
	      return (
	        'case ' + (index) + ':' +
	        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
	        'break;'
	      );
	    }).join(''),
	    'default:',
	    'args[argLength] = cb;',
	    'res = fn.apply(self, args);',
	    '}',
	    
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');

	  return Function(
	    ['Promise', 'fn'],
	    body
	  )(Promise, fn);
	}

	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	}

	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;

	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(34);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(33);

	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function() {
	    return this.getState() == 0;
	  };

	  Promise.prototype.isFulfilled = function() {
	    return this.getState() == 1;
	  };

	  Promise.prototype.isRejected = function() {
	    return this.getState() == 2;
	  };

	  Promise.prototype.getValue = function () {
	    if (this._81 === 3) {
	      return this._65.getValue();
	    }

	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }

	    return this._65;
	  };

	  Promise.prototype.getReason = function () {
	    if (this._81 === 3) {
	      return this._65.getReason();
	    }

	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }

	    return this._65;
	  };

	  Promise.prototype.getState = function () {
	    if (this._81 === 3) {
	      return this._65.getState();
	    }
	    if (this._81 === -1 || this._81 === -2) {
	      return 0;
	    }

	    return this._81;
	  };
	};

	Promise.disableSynchronous = function() {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	/*! par 0.3.0 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */
	var slice = Array.prototype.slice;

	function par(fn) {
	    var args0 = slice.call(arguments, 1);
	    return function() {
	        var argsN = slice.call(arguments, 0),
	            args = [];
	        args.push.apply(args, args0);
	        args.push.apply(args, argsN);
	        return fn.apply(this, args);
	    };
	}

	function rpartial(fn) {
	    var argsN = slice.call(arguments, 1);
	    return function() {
	        var args = slice.call(arguments, 0);
	        args.push.apply(args, argsN);
	        return fn.apply(this, args);
	    };
	}

	par.rpartial = rpartial;
	par.lpartial = par;

	module.exports = par;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * dependencies
	 */

	var each = __webpack_require__(16);
	var find = __webpack_require__(29);
	var merge = __webpack_require__(4);

	/**
	 * expose
	 */

	module.exports = Calculations;

	/**
	 * Subscription pricing calculation handler
	 *
	 * @param {Pricing} pricing
	 * @constructor
	 * @public
	 */

	function Calculations(pricing, done) {
	  if (!(this instanceof Calculations)) {
	    return new Calculations(pricing, done);
	  }

	  this.pricing = pricing;
	  this.items = pricing.items;

	  this.price = {
	    now: {},
	    next: {},
	    base: {
	      plan: {},
	      addons: {}
	    },
	    addons: {}, // DEPRECATED
	    currency: {
	      code: this.items.currency,
	      symbol: this.planPrice().symbol
	    }
	  };

	  this.subtotal();

	  this.tax(function () {
	    this.total();
	    this.giftcard();
	    each(this.price.base.plan, decimal, this.price.base.plan);
	    each(this.price.base.addons, decimal, this.price.base.addons);
	    each(this.price.addons, decimal, this.price.addons); // DEPRECATED
	    each(this.price.now, decimal, this.price.now);
	    each(this.price.next, decimal, this.price.next);
	    done(this.price);
	  });
	}

	/**
	 * Calculates subtotal
	 *
	 * @private
	 */

	Calculations.prototype.subtotal = function () {
	  this.price.now.subtotal = 0;
	  this.price.next.subtotal = 0;

	  this.plan();
	  this.price.now.subtotal += this.price.now.plan;
	  this.price.next.subtotal += this.price.next.plan;

	  this.addons();
	  this.price.now.subtotal += this.price.now.addons;
	  this.price.next.subtotal += this.price.next.addons;

	  this.discount();
	  this.price.now.subtotal -= this.price.now.discount;
	  this.price.next.subtotal -= this.price.next.discount;

	  this.setupFee();
	  this.price.now.subtotal += this.price.now.setup_fee;
	};

	/**
	 * Calculates tax
	 *
	 * tax info precedence: `tax` > `shipping_address` > `address`
	 *
	 * @param {Function} done
	 * @private
	 */

	Calculations.prototype.tax = function (done) {
	  this.price.now.tax = 0;
	  this.price.next.tax = 0;

	  var address = this.items.shipping_address || this.items.address;
	  var taxInfo = merge({}, address);

	  merge(taxInfo, this.items.tax);

	  if (taxInfo) {
	    var self = this;
	    this.pricing.recurly.tax(taxInfo, function applyTax(err, taxes) {
	      if (err) {
	        self.pricing.emit('error', err);
	      } else {
	        self.price.taxes = [];
	        each(taxes, function (tax) {
	          if (self.items.plan.tax_exempt) return;
	          self.price.now.tax += parseFloat((self.price.now.subtotal * tax.rate).toFixed(6));
	          self.price.next.tax += parseFloat((self.price.next.subtotal * tax.rate).toFixed(6));
	          // If we have taxes, we may want to display the rate...
	          // push the taxes so we know what they are...
	          self.price.taxes.push(tax);
	        });

	        // tax estimation prefers partial cents to always round up
	        self.price.now.tax = taxCeil(self.price.now.tax);
	        self.price.next.tax = taxCeil(self.price.next.tax);
	      }
	      done.call(self);
	    });
	  } else done.call(this);
	};

	/**
	 * Calculates total
	 *
	 * @private
	 */

	Calculations.prototype.total = function () {
	  this.price.now.total = this.price.now.subtotal + this.price.now.tax;
	  this.price.next.total = this.price.next.subtotal + this.price.next.tax;
	};

	/**
	 * Subtracts any giftcard value from the total
	 *
	 * @private
	 */

	Calculations.prototype.giftcard = function () {
	  if (this.pricing.items.gift_card) {
	    var nowTotal = this.price.now.total;
	    var nextTotal = this.price.next.total;
	    var giftcardNow = useGiftcard(nowTotal, this.pricing.items.gift_card.unit_amount);
	    var giftcardNext = useGiftcard(nextTotal, giftcardNow.remains);

	    this.price.now.gift_card = giftcardNow.used;
	    this.price.next.gift_card = giftcardNext.used;

	    this.price.now.total = nowTotal - giftcardNow.used;
	    this.price.next.total = nextTotal - giftcardNext.used;
	  }

	  function useGiftcard(price, giftcardValue) {
	    var used = 0;
	    var remains = 0;
	    if (giftcardValue > price) {
	      used = price;
	      remains = giftcardValue - price;
	    } else {
	      used = giftcardValue;
	    }
	    return { used: used, remains: remains };
	  }
	};

	/**
	 * Computes plan prices
	 *
	 * @private
	 */

	Calculations.prototype.plan = function () {
	  var base = this.items.plan.price[this.items.currency];
	  this.price.base.plan.unit = base.unit_amount;
	  this.price.base.plan.setup_fee = base.setup_fee;

	  var amount = this.planPrice().amount;
	  this.price.now.plan = amount;
	  this.price.next.plan = amount;
	  if (this.isTrial()) this.price.now.plan = 0;
	};

	/**
	 * Computes addon prices and applies addons to the subtotal
	 *
	 * @private
	 */

	Calculations.prototype.addons = function () {
	  var _this = this;

	  this.price.now.addons = 0;
	  this.price.next.addons = 0;
	  // exclude usage addons.
	  if (!Array.isArray(this.items.plan.addons)) {
	    return;
	  }

	  var fixedAddons = this.items.plan.addons.filter(function (addon) {
	    return addon.add_on_type === "fixed";
	  });

	  fixedAddons.forEach(function (addon) {
	    var price = addon.price[_this.items.currency].unit_amount;

	    _this.price.base.addons[addon.code] = price;
	    _this.price.addons[addon.code] = price; // DEPRECATED

	    var selected = find(_this.items.addons, { code: addon.code });
	    if (selected) {
	      price = price * selected.quantity;
	      if (!_this.isTrial()) _this.price.now.addons += price;
	      _this.price.next.addons += price;
	    }
	  });
	};

	/**
	 * Applies coupon discount to the subtotal
	 *
	 * @private
	 */

	Calculations.prototype.discount = function () {
	  var coupon = this.items.coupon;

	  this.price.now.discount = 0;
	  this.price.next.discount = 0;

	  if (coupon) {
	    if (coupon.discount.rate) {
	      var discountNow = parseFloat((this.price.now.subtotal * coupon.discount.rate).toFixed(6));
	      var discountNext = coupon.single_use ? 0 : parseFloat((this.price.next.subtotal * coupon.discount.rate).toFixed(6));
	      this.price.now.discount = Math.round(discountNow * 100) / 100;
	      this.price.next.discount = Math.round(discountNext * 100) / 100;
	    } else if (coupon.discount.type === 'free_trial') {
	      // Handled in separate trial logic
	    } else {
	      this.price.now.discount = coupon.discount.amount[this.items.currency];
	      this.price.next.discount = coupon.single_use ? 0 : coupon.discount.amount[this.items.currency];
	    }
	  }
	};

	/**
	 * Applies plan setup fee to the subtotal
	 *
	 * @private
	 */

	Calculations.prototype.setupFee = function () {
	  this.price.now.setup_fee = this.planPrice().setup_fee;
	  this.price.next.setup_fee = 0;
	};

	/**
	 * Get the price structure of a plan based on currency
	 *
	 * @return {Object}
	 * @private
	 */

	Calculations.prototype.planPrice = function () {
	  var plan = this.items.plan;
	  var price = plan.price[this.items.currency];
	  price.amount = price.unit_amount * (plan.quantity || 1);
	  return price;
	};

	Calculations.prototype.isTrial = function () {
	  var coupon = this.items.coupon;
	  if (coupon && coupon.discount.type === 'free_trial') return true;
	  return this.items.plan.trial;
	};

	/**
	 * Applies a decimal transform on an object's member
	 *
	 * @param {String} prop Property on {this} to transform
	 * @this {Object} on which to apply decimal transformation
	 * @private
	 */

	function decimal(prop) {
	  this[prop] = (Math.round(Math.max(this[prop], 0) * 100) / 100).toFixed(2);
	}

	/**
	 * Ceilings the second decimal of a number without risk of
	 * floating point math errors
	 *
	 * @param {Number} number
	 * @return {Number}
	 * @private
	 */

	function taxCeil(number) {
	  return +(Math.ceil(number + 'e+2') + 'e-2');
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentFind = __webpack_require__(29);

	var _componentFind2 = _interopRequireDefault(_componentFind);

	var _dom = __webpack_require__(20);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var debug = __webpack_require__(7)('recurly:pricing:attachment');

	var INIT_RUN = 'init-all';

	/**
	 * bind a dom element to pricing values
	 *
	 * @param {Pricing} pricing
	 * @param {HTMLElement} container Element on which to attach
	 */

	var Attachment = function () {
	  function Attachment(pricing, container) {
	    var _this = this;

	    _classCallCheck(this, Attachment);

	    this.pricing = pricing;
	    this.container = _dom2.default.element(container);

	    if (!this.container) throw new Error('invalid dom element');

	    this.change = this.change.bind(this);
	    this.update = this.update.bind(this);

	    this.pricing.on('change', this.update);

	    this.elements.all.forEach(function (elem) {
	      elem.addEventListener('change', _this.change);
	      elem.addEventListener('propertychange', _this.change);
	    });

	    this.change(INIT_RUN);
	  }

	  _createClass(Attachment, [{
	    key: 'change',


	    /**
	     * Handles input element changes
	     */

	    value: function change(event) {
	      var _this2 = this;

	      debug('change');

	      var elems = this.elements;
	      var target = event.target || event.srcElement;
	      var targetName = _dom2.default.data(target, 'recurly');
	      var updating = function updating(name) {
	        return name in elems && event === INIT_RUN || targetName === name;
	      };
	      var updateAddon = elems.addon && updating('addon');
	      var updateAddress = updating('country') || updating('postal_code');
	      var updateCurrency = updating('currency');
	      var updateCoupon = elems.coupon && (updating('coupon') || updating('plan'));
	      var updateGiftcard = elems.gift_card && updating('gift_card');
	      var updateShippingAddress = updating('shipping_address.country') || updating('shipping_address.postal_code');
	      var updateTax = updating('vat_number') || updating('tax_code');

	      var pricing = this.pricing.plan(_dom2.default.value(elems.plan), { quantity: _dom2.default.value(elems.plan_quantity) });

	      if (updateCurrency) {
	        pricing = pricing.currency(_dom2.default.value(elems.currency));
	      }

	      if (updateAddon) {
	        pricing = pricing.then(function () {
	          elems.addon.forEach(function (elem) {
	            var plan = _this2.pricing.items.plan;
	            var code = _dom2.default.data(elem, 'recurlyAddon');
	            var quantity = _dom2.default.value(elem);

	            if (plan.addons && (0, _componentFind2.default)(plan.addons, { code: code })) {
	              pricing = pricing.addon(code, { quantity: quantity });
	            }
	          });
	        });
	      }

	      if (updateCoupon) {
	        pricing = pricing.coupon(_dom2.default.value(elems.coupon).trim()).then(null, ignoreNotFound);
	      }

	      if (updateGiftcard) {
	        pricing = pricing.giftcard(_dom2.default.value(elems.gift_card).trim()).then(null, ignoreNotFound);
	      }

	      if (updateAddress) {
	        pricing = pricing.address({
	          country: _dom2.default.value(elems.country),
	          postal_code: _dom2.default.value(elems.postal_code)
	        });
	      }

	      if (updateShippingAddress) {
	        pricing = pricing.shippingAddress({
	          country: _dom2.default.value(elems['shipping_address.country']),
	          postal_code: _dom2.default.value(elems['shipping_address.postal_code'])
	        });
	      }

	      if (updateTax) {
	        pricing = pricing.tax({
	          vat_number: _dom2.default.value(elems.vat_number),
	          tax_code: _dom2.default.value(elems.tax_code)
	        });
	      }

	      this.pricing = pricing.done();
	    }

	    /**
	     * Updates output elements
	     */

	  }, {
	    key: 'update',
	    value: function update(price) {
	      var elems = this.elements;

	      _dom2.default.value(elems.currency_code, price.currency.code);
	      _dom2.default.value(elems.currency_symbol, price.currency.symbol);

	      _dom2.default.value(elems.plan_base, price.base.plan.unit);
	      _dom2.default.value(elems.plan_interval, price.base.plan.interval);

	      ['plan', 'addons', 'discount', 'setup_fee', 'subtotal', 'tax', 'total', 'gift_card'].forEach(function (value) {
	        _dom2.default.value(elems[value + '_now'], price.now[value]);
	        _dom2.default.value(elems[value + '_next'], price.next[value]);
	      });

	      if (elems.addon_price) {
	        elems.addon_price.forEach(function (elem) {
	          var addonPrice = price.base.addons[_dom2.default.data(elem, 'recurlyAddon')];
	          if (addonPrice) _dom2.default.value(elem, addonPrice);
	        });
	      }
	    }
	  }, {
	    key: 'detach',
	    value: function detach() {
	      var _this3 = this;

	      this.pricing.off('change', this.update);

	      this.elements.all.forEach(function (elem) {
	        elem.removeEventListener('change', _this3.change);
	        elem.removeEventListener('propertychange', _this3.change);
	      });
	    }
	  }, {
	    key: 'elements',
	    get: function get() {
	      if (this._elements) return this._elements;

	      var elements = { all: [].slice.call(this.container.querySelectorAll('[data-recurly]')) };

	      elements.all.forEach(function (node) {
	        var name = _dom2.default.data(node, 'recurly');
	        if (!(name in elements)) elements[name] = [];
	        elements[name].push(node);
	      });

	      this._elements = elements;
	      return elements;
	    }
	  }]);

	  return Attachment;
	}();

	exports.default = Attachment;


	function ignoreNotFound(err) {
	  if (err.code === 'not-found') return;else throw err;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.factory = factory;

	var _lodash = __webpack_require__(45);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _direct = __webpack_require__(46);

	var _braintree = __webpack_require__(49);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:paypal');

	/**
	 * PayPal instantiation factory
	 *
	 * @param {Object} options
	 * @return {PayPal}
	 */
	function factory(options) {
	  options = Object.assign({}, options, { recurly: this });
	  return new PayPal(options);
	}

	var DEFERRED_EVENTS = ['ready', 'token', 'error'];

	/**
	 * PayPal strategy interface
	 */

	var PayPal = function (_Emitter) {
	  _inherits(PayPal, _Emitter);

	  function PayPal(options) {
	    _classCallCheck(this, PayPal);

	    var _this = _possibleConstructorReturn(this, (PayPal.__proto__ || Object.getPrototypeOf(PayPal)).call(this));

	    _this.isReady = false;
	    _this.options = options;

	    _this.once('ready', function () {
	      return _this.isReady = true;
	    });

	    if (options.braintree) {
	      _this.strategy = new _braintree.BraintreeStrategy(options);
	      _this.strategy.onFail(_this.fallback.bind(_this));
	    } else {
	      _this.strategy = new _direct.DirectStrategy(options);
	    }

	    _this.bindStrategy();
	    return _this;
	  }

	  _createClass(PayPal, [{
	    key: 'ready',
	    value: function ready(done) {
	      if (this.isReady) done();else this.once('ready', done);
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      var _strategy;

	      return (_strategy = this.strategy).start.apply(_strategy, arguments);
	    }

	    /**
	     * Handles strategy failure scenario
	     *
	     * @private
	     */

	  }, {
	    key: 'fallback',
	    value: function fallback() {
	      var _this2 = this;

	      debug('Initializing strategy fallback');
	      this.strategy = new _direct.DirectStrategy((0, _lodash2.default)(this.options, 'braintree'));
	      this.bindStrategy();
	      this.strategy.ready(function () {
	        return _this2.emit('ready');
	      });
	    }

	    /**
	     * Binds external interface events to those on the strategy
	     *
	     * @private
	     */

	  }, {
	    key: 'bindStrategy',
	    value: function bindStrategy() {
	      var _this3 = this;

	      DEFERRED_EVENTS.forEach(function (ev) {
	        return _this3.strategy.on(ev, _this3.emit.bind(_this3, ev));
	      });
	    }
	  }]);

	  return PayPal;
	}(_componentEmitter2.default);

/***/ },
/* 45 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice,
	    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Creates an array of the own and inherited enumerable symbol properties
	 * of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable string keyed properties of `object` that are
	 * not omitted.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to omit.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = baseRest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(baseFlatten(props, 1), toKey);
	  return basePick(object, baseDifference(getAllKeysIn(object), props));
	});

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = omit;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DirectStrategy = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.deprecated = deprecated;

	var _promise = __webpack_require__(31);

	var _promise2 = _interopRequireDefault(_promise);

	var _index = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:paypal:strategy:direct');

	/**
	 * Direct PayPal Express Checkout strategy
	 */

	var DirectStrategy = exports.DirectStrategy = function (_PayPalStrategy) {
	  _inherits(DirectStrategy, _PayPalStrategy);

	  function DirectStrategy() {
	    var _ref;

	    _classCallCheck(this, DirectStrategy);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = DirectStrategy.__proto__ || Object.getPrototypeOf(DirectStrategy)).call.apply(_ref, [this].concat(args)));

	    _this.emit('ready');
	    return _this;
	  }

	  _createClass(DirectStrategy, [{
	    key: 'start',
	    value: function start() {
	      var _this2 = this;

	      // TODO: More parameters here
	      var payload = { description: this.config.display.displayName };
	      var frame = this.recurly.Frame({ path: '/paypal/start', payload: payload });
	      frame.once('error', function (cause) {
	        return _this2.error('paypal-tokenize-error', { cause: cause });
	      });
	      frame.once('done', function (token) {
	        return _this2.emit('token', token);
	      });
	    }
	  }]);

	  return DirectStrategy;
	}(_index.PayPalStrategy);

	/**
	 * Deprecated Paypal mixin.
	 *
	 * @deprecated
	 * @param {Object} payload
	 * @param {String} payload.description - transaction description
	 * @param {Function} done callback
	 */

	function deprecated(payload, done) {
	  debug('start');
	  var frame = this.Frame({ path: '/paypal/start', payload: payload });
	  frame.once('error', function (error) {
	    return done(error);
	  });
	  frame.once('done', function (token) {
	    return done(null, token);
	  });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PayPalStrategy = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(48);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _recurly = __webpack_require__(1);

	var _pricing = __webpack_require__(28);

	var _pricing2 = _interopRequireDefault(_pricing);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:paypal:strategy');

	var PAYPAL_CLIENT_URI = 'https://www.paypalobjects.com/api/checkout.js';
	var DISPLAY_OPTIONS = ['amount', 'currency', 'displayName', 'locale', 'enableShippingAddress', 'shippingAddressOverride', 'shippingAddressEditable', 'billingAgreementDescription', 'landingPageType'];
	var DEFAULTS = {
	  display: {
	    locale: 'en_US'
	  }
	};

	/**
	 * PayPal base interface strategy
	 *
	 * @abstract
	 */

	var PayPalStrategy = exports.PayPalStrategy = function (_Emitter) {
	  _inherits(PayPalStrategy, _Emitter);

	  function PayPalStrategy(options) {
	    _classCallCheck(this, PayPalStrategy);

	    var _this = _possibleConstructorReturn(this, (PayPalStrategy.__proto__ || Object.getPrototypeOf(PayPalStrategy)).call(this));

	    _this.isReady = false;
	    _this.config = {};

	    _this.once('ready', function () {
	      return _this.isReady = true;
	    });

	    _this.configure(options);
	    return _this;
	  }

	  _createClass(PayPalStrategy, [{
	    key: 'ready',
	    value: function ready(done) {
	      if (this.isReady) done();else this.once('ready', done);
	    }
	  }, {
	    key: 'configure',
	    value: function configure(options) {
	      var _this2 = this;

	      if (!(options.recurly instanceof _recurly.Recurly)) throw this.error('paypal-factory-only');
	      this.recurly = options.recurly;

	      this.config.display = {};

	      // PayPal EC flow display customization
	      if (_typeof(options.display) === 'object') {
	        this.config.display = (0, _lodash2.default)(options.display, DISPLAY_OPTIONS);
	      }

	      if (!this.config.display.locale) this.config.display.locale = DEFAULTS.display.locale;

	      // Bind pricing information to display options
	      if (options.pricing instanceof _pricing2.default) {
	        this.pricing = options.pricing;

	        // Set initial price if available
	        if (this.pricing.price) {
	          this.config.display.amount = this.pricing.price.now.total;
	          this.config.display.currency = this.pricing.price.currency.code;
	        }

	        // React to price changes
	        this.pricing.on('change', function (price) {
	          _this2.config.display.amount = price.now.total;
	          _this2.config.display.currency = price.currency.code;
	        });
	      }
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      debug('Method \'initialize\' not implemented');
	    }

	    /**
	     * Starts the PayPal flow
	     * > must be on the call chain with a user interaction (click, touch) on it
	     */

	  }, {
	    key: 'start',
	    value: function start() {
	      debug('Method \'start\' not implemented');
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.emit('cancel');
	    }

	    /**
	     * Registers or immediately invokes a failure handler
	     *
	     * @param {Function} done Failure handler
	     */

	  }, {
	    key: 'onFail',
	    value: function onFail(done) {
	      if (this.failure) done();else this.once('fail', done);
	    }

	    /**
	     * Logs and announces a failure to initialize a strategy
	     *
	     * @private
	     * @param  {String} reason
	     * @param  {Object} [options]
	     */

	  }, {
	    key: 'fail',
	    value: function fail(reason, options) {
	      if (this.failure) return;
	      debug('Failure scenario encountered', reason, options);
	      var failure = this.failure = this.error(reason, options);
	      this.emit('fail', failure);
	    }

	    /**
	     * Creates and emits a RecurlyError
	     *
	     * @protected
	     * @param  {...Mixed} params to be passed to the Recurlyerror factory
	     * @return {RecurlyError}
	     * @emit 'error'
	     */

	  }, {
	    key: 'error',
	    value: function error() {
	      var err = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error ? arguments.length <= 0 ? undefined : arguments[0] : _errors2.default.apply(undefined, arguments);
	      this.emit('error', err);
	      return err;
	    }
	  }]);

	  return PayPalStrategy;
	}(_componentEmitter2.default);

/***/ },
/* 48 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = baseRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
	});

	module.exports = pick;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BraintreeStrategy = exports.BRAINTREE_CLIENT_VERSION = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _lodash = __webpack_require__(50);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _loadScript = __webpack_require__(51);

	var _loadScript2 = _interopRequireDefault(_loadScript);

	var _index = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:paypal:strategy:braintree');

	var BRAINTREE_CLIENT_VERSION = exports.BRAINTREE_CLIENT_VERSION = '3.11.0';

	/**
	 * Braintree-specific PayPal handler
	 */

	var BraintreeStrategy = exports.BraintreeStrategy = function (_PayPalStrategy) {
	  _inherits(BraintreeStrategy, _PayPalStrategy);

	  function BraintreeStrategy() {
	    var _ref;

	    _classCallCheck(this, BraintreeStrategy);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = BraintreeStrategy.__proto__ || Object.getPrototypeOf(BraintreeStrategy)).call.apply(_ref, [this].concat(args)));

	    _this.load();
	    return _this;
	  }

	  _createClass(BraintreeStrategy, [{
	    key: 'configure',
	    value: function configure(options) {
	      _get(BraintreeStrategy.prototype.__proto__ || Object.getPrototypeOf(BraintreeStrategy.prototype), 'configure', this).call(this, options);
	      if (!options.braintree || !options.braintree.clientAuthorization) {
	        throw this.error('paypal-config-missing', { opt: 'braintree.clientAuthorization' });
	      }
	      this.config.clientAuthorization = options.braintree.clientAuthorization;
	    }

	    /**
	     * Loads Braintree client and modules
	     *
	     * @todo semver client detection
	     */

	  }, {
	    key: 'load',
	    value: function load() {
	      var _this2 = this;

	      debug('loading Braintree libraries');

	      var initialize = this.initialize.bind(this);
	      var part = (0, _lodash2.default)(2, initialize);
	      var get = function get(lib) {
	        var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

	        var uri = 'https://js.braintreegateway.com/web/' + BRAINTREE_CLIENT_VERSION + '/js/' + lib + '.min.js';
	        (0, _loadScript2.default)(uri, function (error) {
	          if (error) _this2.error('paypal-load-error', { cause: error });else done();
	        });
	      };

	      var modules = function modules() {
	        if (_this2.braintreeClientAvailable('paypal')) part();else get('paypal', part);
	        if (_this2.braintreeClientAvailable('dataCollector')) part();else get('data-collector', part);
	      };

	      if (this.braintreeClientAvailable()) modules();else get('client', modules);
	    }

	    /**
	     * Initializes a Braintree client, device data collection module, and paypal client
	     */

	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      var _this3 = this;

	      debug('Initializing Braintree client');

	      var authorization = this.config.clientAuthorization;
	      var braintree = global.braintree;

	      braintree.client.create({ authorization: authorization }, function (error, client) {
	        if (error) return _this3.fail('paypal-braintree-api-error', { cause: error });
	        debug('Braintree client created');
	        braintree.dataCollector.create({ client: client, paypal: true }, function (error, collector) {
	          if (error) return _this3.fail('paypal-braintree-api-error', { cause: error });
	          debug('Device data collector created');
	          _this3.deviceFingerprint = collector.deviceData;
	          braintree.paypal.create({ client: client }, function (error, paypal) {
	            if (error) return _this3.fail('paypal-braintree-api-error', { error: error });
	            debug('PayPal client created');
	            _this3.paypal = paypal;
	            _this3.emit('ready');
	          });
	        });
	      });
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      var _this4 = this;

	      var tokenOpts = Object.assign({}, this.config.display, { flow: 'vault' });

	      // Tokenize with Braintree
	      this.paypal.tokenize(tokenOpts, function (error, payload) {
	        if (error) {
	          if (error.code === 'PAYPAL_POPUP_CLOSED') return _this4.emit('cancel');
	          return _this4.error('paypal-braintree-tokenize-braintree-error', { error: error });
	        }

	        debug('Token payload received', payload);

	        if (_this4.deviceFingerprint) {
	          payload.deviceFingerprint = _this4.deviceFingerprint;
	        }

	        // Tokenize with Recurly
	        _this4.recurly.request('post', '/paypal/token', { type: 'braintree', payload: payload }, function (error, token) {
	          if (error) return _this4.error('paypal-braintree-tokenize-recurly-error', { error: error });
	          _this4.emit('token', token);
	        });
	      });
	    }
	  }, {
	    key: 'braintreeClientAvailable',
	    value: function braintreeClientAvailable(module) {
	      var bt = global.braintree;
	      return bt && bt.client && bt.client.VERSION === BRAINTREE_CLIENT_VERSION && (module ? module in bt : true);
	    }
	  }]);

	  return BraintreeStrategy;
	}(_index.PayPalStrategy);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The opposite of `_.before`; this method creates a function that invokes
	 * `func` once it's called `n` or more times.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {number} n The number of calls before `func` is invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var saves = ['profile', 'settings'];
	 *
	 * var done = _.after(saves.length, function() {
	 *   console.log('done saving!');
	 * });
	 *
	 * _.forEach(saves, function(type) {
	 *   asyncSave({ 'type': type, 'complete': done });
	 * });
	 * // => Logs 'done saving!' after the two async saves have completed.
	 */
	function after(n, func) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n < 1) {
	      return func.apply(this, arguments);
	    }
	  };
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = after;


/***/ },
/* 51 */
/***/ function(module, exports) {

	
	module.exports = function load (src, opts, cb) {
	  var head = document.head || document.getElementsByTagName('head')[0]
	  var script = document.createElement('script')

	  if (typeof opts === 'function') {
	    cb = opts
	    opts = {}
	  }

	  opts = opts || {}
	  cb = cb || function() {}

	  script.type = opts.type || 'text/javascript'
	  script.charset = opts.charset || 'utf8';
	  script.async = 'async' in opts ? !!opts.async : true
	  script.src = src

	  if (opts.attrs) {
	    setAttributes(script, opts.attrs)
	  }

	  if (opts.text) {
	    script.text = '' + opts.text
	  }

	  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
	  onend(script, cb)

	  // some good legacy browsers (firefox) fail the 'in' detection above
	  // so as a fallback we always set onload
	  // old IE will ignore this and new IE will set onload
	  if (!script.onload) {
	    stdOnEnd(script, cb);
	  }

	  head.appendChild(script)
	}

	function setAttributes(script, attrs) {
	  for (var attr in attrs) {
	    script.setAttribute(attr, attrs[attr]);
	  }
	}

	function stdOnEnd (script, cb) {
	  script.onload = function () {
	    this.onerror = this.onload = null
	    cb(null, script)
	  }
	  script.onerror = function () {
	    // this.onload = null here is necessary
	    // because even IE9 works not like others
	    this.onerror = this.onload = null
	    cb(new Error('Failed to load ' + this.src), script)
	  }
	}

	function ieOnEnd (script, cb) {
	  script.onreadystatechange = function () {
	    if (this.readyState != 'complete' && this.readyState != 'loaded') return
	    this.onreadystatechange = null
	    cb(null, script) // there is no way to catch loading errors in IE8
	  }
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Bus = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _message = __webpack_require__(53);

	var _uuid = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Hosted field generic message bus
	 *
	 * Listens to message events on the window, filters recurly messages,
	 * and emits them to all registered recipients
	 *
	 * May also receive generic messages, which it sends to all recipients
	 */

	var Bus = exports.Bus = function (_Emitter) {
	  _inherits(Bus, _Emitter);

	  function Bus() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Bus);

	    var _this = _possibleConstructorReturn(this, (Bus.__proto__ || Object.getPrototypeOf(Bus)).call(this));

	    _this.id = (0, _uuid.uuid)();
	    _this.debug = __webpack_require__(7)('recurly:bus:' + _this.id);
	    _this.emitters = [];
	    _this.recipients = [];
	    _this.receive = _this.receive.bind(_this);
	    _this.config = { api: options.api };
	    _this.connect();
	    _this.send = _this.send.bind(_this);
	    return _this;
	  }

	  _createClass(Bus, [{
	    key: 'connect',
	    value: function connect() {
	      window.addEventListener('message', this.receive, false);
	      this.debug('listening for postMessage events on', window);
	    }

	    /**
	     * Receives a postMessage, filters it, and sends it out
	     *
	     * @private
	     * @param {MessageEvent} message
	     */

	  }, {
	    key: 'receive',
	    value: function receive(message) {
	      if (!this.originMatches(message.origin)) return;
	      if (typeof message.data === 'string') return this.receiveFromRelay(message);
	      if (!message.data.event) return;
	      this.debug('message received', message.data);
	      this.send(new _message.Message(message), null, { exclude: [message.srcElement] });
	    }

	    /**
	     * Parses message properties from a JSON-encoded string
	     *
	     * @private
	     * @param  {String} message
	     * @return {Object} message
	     */

	  }, {
	    key: 'receiveFromRelay',
	    value: function receiveFromRelay(message) {
	      try {
	        var data = JSON.parse(message.data);
	        this.send(new _message.Message(data.recurly_event, data.recurly_message));
	      } catch (e) {
	        this.debug('failed to parse a string message', e, message);
	      }
	    }

	    /**
	     * Adds a recipient to the bus
	     *
	     * @todo add identifier, return that
	     *
	     * @public
	     * @param {Window|Emitter} recipient that may receive messages from `send`
	     */

	  }, {
	    key: 'add',
	    value: function add(recipient) {
	      if (~this.recipients.indexOf(recipient)) return;
	      this.recipients.push(recipient);
	      if (typeof recipient.emit === 'function') recipient.emit('bus:added', this);
	      this.debug('added recipient', recipient);
	    }

	    /**
	     * Sends a generic message to all recipients
	     *
	     * @public
	     * @param {String} event name of the message's event
	     * @param {Object} body message contents
	     */

	  }, {
	    key: 'send',
	    value: function send(event, body) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { exclude: [] };

	      var message = new _message.Message(event, body);
	      var exclude = options.exclude;


	      this.debug('sending message to ' + this.recipients.length + ' recipients', message);
	      this.recipients.forEach(function (r) {
	        if (r.postMessage) r.postMessage(message, '*');else if (typeof r.emit === 'function') r.emit(message.event, message.body);
	      });
	    }

	    /**
	     * Stops the bus
	     *  - Empties recipients
	     *  - disconnects listener
	     *
	     * @public
	     */

	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.recipients = [];
	      window.removeEventListener('message', this.receive, false);
	    }

	    /**
	     * Checks a message origin for compatibility
	     *
	     * @private
	     */

	  }, {
	    key: 'originMatches',
	    value: function originMatches(url) {
	      return origin(url) === origin(this.config.api);
	    }
	  }]);

	  return Bus;
	}(_componentEmitter2.default);

	/**
	 * Parses an origin from a url
	 *
	 * @private
	 * @param  {String} url
	 * @return {Boolean}
	 */


	function origin(url) {
	  var parser = global.document.createElement('a');
	  parser.href = url;
	  return parser.protocol + '//' + parser.host;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Message
	 *
	 * @param {String|Message|MessageEvent} event message event name or Message or MessageEvent
	 * @param {Object} body message contents
	 */

	var Message = exports.Message = function () {
	  function Message(event) {
	    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Message);

	    if (event instanceof Message) return event;
	    if (event instanceof window.MessageEvent) {
	      body = event.data.body;
	      event = event.data.event;
	    }
	    this.event = event;
	    this.body = body;
	  }

	  _createClass(Message, [{
	    key: "format",
	    value: function format() {
	      return {
	        event: this.event,
	        body: this.body
	      };
	    }
	  }]);

	  return Message;
	}();

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fraud = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentEach = __webpack_require__(16);

	var _componentEach2 = _interopRequireDefault(_componentEach);

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _dom = __webpack_require__(20);

	var _dom2 = _interopRequireDefault(_dom);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:fraud');

	var Fraud = exports.Fraud = function (_Emitter) {
	  _inherits(Fraud, _Emitter);

	  function Fraud(recurly) {
	    _classCallCheck(this, Fraud);

	    var _this = _possibleConstructorReturn(this, (Fraud.__proto__ || Object.getPrototypeOf(Fraud)).call(this));

	    _this.recurly = recurly;
	    _this.selector = _this.recurly.config.fields.number.selector;
	    _this.dataCollectorInitiated = false;
	    _this.form = null;

	    recurly.ready(_this.dataCollector.bind(_this));
	    return _this;
	  }

	  /**
	   * gets the fraud params present including injected form fields
	   * as well as grabbing litle session id if configured
	   */


	  _createClass(Fraud, [{
	    key: 'params',
	    value: function params(data) {
	      if (!data) return null;

	      var fraudParams = [];

	      if (this.recurly.config.fraud.kount.dataCollector && data['fraud_session_id']) {
	        fraudParams.push({
	          processor: 'kount',
	          session_id: data['fraud_session_id']
	        });
	      }

	      if (this.recurly.config.fraud.litle.sessionId) {
	        fraudParams.push({
	          processor: 'litle_threat_metrix',
	          session_id: this.recurly.config.fraud.litle.sessionId
	        });
	      }

	      return fraudParams;
	    }

	    /**
	     * requests the data collector form fields from the
	     * Recurly server and injects them into the payment form
	     */

	  }, {
	    key: 'dataCollector',
	    value: function dataCollector() {
	      var _this2 = this;

	      if (!this.recurly.config.fraud.kount.dataCollector || this.dataCollectorInitiated) return;
	      this.dataCollectorInitiated = true;

	      this.getForm();

	      this.recurly.request('get', '/fraud_data_collector', function (error, response) {
	        debug("response from recurly data collector", error, response);
	        if (error) {
	          throw (0, _errors2.default)('fraud-data-collector-request-failed', { error: error });
	        } else if (response.content) {
	          _this2.addNodes(response.content);
	          _this2.emit('ready');
	        }
	      });
	    }
	  }, {
	    key: 'addNodes',
	    value: function addNodes(contentString) {
	      var _this3 = this;

	      var tempContainer = document.createElement("div");
	      tempContainer.innerHTML = contentString;

	      (0, _componentEach2.default)(tempContainer.childNodes, function (node) {
	        return _this3.form.appendChild(node);
	      });
	    }
	  }, {
	    key: 'getForm',
	    value: function getForm() {
	      this.form = _dom2.default.findNodeInParents(window.document.querySelector(this.selector), 'form');

	      if (!_dom2.default.element(this.form)) {
	        throw (0, _errors2.default)('fraud-data-collector-missing-form', { selector: this.selector });
	      }
	    }
	  }]);

	  return Fraud;
	}(_componentEmitter2.default);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HostedFields = exports.FIELD_TYPES = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentClone = __webpack_require__(3);

	var _componentClone2 = _interopRequireDefault(_componentClone);

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(45);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _lodash5 = __webpack_require__(56);

	var _lodash6 = _interopRequireDefault(_lodash5);

	var _hostedField = __webpack_require__(57);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:hostedFields');

	var REQUIRED_FIELDS = ['number', 'month', 'year'];
	var FIELD_TYPES = exports.FIELD_TYPES = ['cvv'].concat(REQUIRED_FIELDS);

	/**
	 * HostedFields
	 *
	 * @constructor
	 * @param {Object} options
	 * @param {Object} options.recurly options to init a recurly instance
	 * @param {String} options.version
	 * @public
	 */

	var HostedFields = exports.HostedFields = function (_Emitter) {
	  _inherits(HostedFields, _Emitter);

	  function HostedFields(options) {
	    _classCallCheck(this, HostedFields);

	    var _this = _possibleConstructorReturn(this, (HostedFields.__proto__ || Object.getPrototypeOf(HostedFields)).call(this));

	    _this.ready = false;
	    _this.state = {};
	    _this.fields = [];
	    _this.errors = [];
	    _this.initQueue = [];
	    _this.readyState = 0;
	    _this.configure(options);
	    _this.inject();
	    _this.on('hostedField:state:change', _this.update.bind(_this));
	    _this.on('bus:added', function (bus) {
	      _this.bus = bus;
	      _this.fields.forEach(function (hf) {
	        return bus.add(hf);
	      });
	    });
	    return _this;
	  }

	  /**
	   * checks integrity of constituent fields
	   * optionally compares fields configuration with current state for parity
	   *
	   * @param {Object} fields fields configuration to compare against
	   * @return {Boolean} whether all fields are present and receivable
	   */


	  _createClass(HostedFields, [{
	    key: 'integrityCheck',
	    value: function integrityCheck(fields) {
	      if (!this.ready) return false;
	      if (this.fields.length === 0) return false;
	      if (fields) {
	        var newSelectors = (0, _lodash6.default)(fields, function (f) {
	          return f.selector;
	        }).join('');
	        var currentSelectors = (0, _lodash6.default)(this.config.recurly.fields, function (f) {
	          return f.selector;
	        }).join('');
	        if (newSelectors !== currentSelectors) return false;
	      }
	      return !~this.fields.map(function (f) {
	        return f.integrityCheck();
	      }).indexOf(false);
	    }

	    // Private

	  }, {
	    key: 'configure',
	    value: function configure(options) {
	      this.config = (0, _componentClone2.default)(options || {});
	    }
	  }, {
	    key: 'inject',
	    value: function inject() {
	      var _this2 = this;

	      this.on('hostedField:ready', this.readyHandler.bind(this));
	      FIELD_TYPES.forEach(function (type) {
	        try {
	          _this2.fields.push(new _hostedField.HostedField(_this2.fieldConfig(type)));
	          _this2.initQueue.push(type);
	        } catch (e) {
	          if (e.name === 'missing-hosted-field-target') {
	            if (~REQUIRED_FIELDS.indexOf(type)) {
	              _this2.errors.push(e);
	            }
	          } else throw e;
	        }
	      });
	      this.on('hostedFields:configure', function () {
	        _this2.fields.forEach(function (field) {
	          if (_this2.bus) _this2.bus.send('hostedField:configure', _this2.fieldConfig(field.type));
	        });
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.off();
	      this.ready = false;
	      this.readyState = 0;
	      this.fields.forEach(function (field) {
	        return field.reset();
	      });
	      this.fields = [];
	      this.errors = [];
	      this.initQueue = [];
	    }
	  }, {
	    key: 'readyHandler',
	    value: function readyHandler(body) {
	      var pos = this.initQueue.indexOf(body.type);
	      if (~pos) this.initQueue.splice(pos, 1);
	      if (this.initQueue.length === 0) {
	        this.off('hostedField:ready', this.readyHandler);
	        this.bus.send('hostedFields:ready');
	        this.ready = true;
	      }
	      this.update(body);
	    }
	  }, {
	    key: 'update',
	    value: function update(body) {
	      this.state[body.type] = (0, _lodash4.default)(body, 'type');
	      if (!this.ready) return;
	      this.bus.send('hostedFields:state:change', this.state);
	    }
	  }, {
	    key: 'fieldConfig',
	    value: function fieldConfig(type) {
	      var fields = this.config.recurly.fields;
	      var selector = fields[type].selector;
	      var format = fields[type].format || fields.all.format;
	      var style = (0, _lodash2.default)({}, fields.all.style, fields[type].style);
	      return {
	        type: type,
	        selector: selector,
	        format: format,
	        style: style,
	        recurly: this.config.recurly
	      };
	    }
	  }]);

	  return HostedFields;
	}(_componentEmitter2.default);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = map;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)(module)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HostedField = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _componentEmitter = __webpack_require__(11);

	var _componentEmitter2 = _interopRequireDefault(_componentEmitter);

	var _componentClone = __webpack_require__(3);

	var _componentClone2 = _interopRequireDefault(_componentClone);

	var _dom = __webpack_require__(20);

	var _dom2 = _interopRequireDefault(_dom);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(7)('recurly:hostedField');

	/**
	 * HostedField
	 *
	 * @constructor
	 * @param {Object} options
	 * @param {String} options.selector target selector
	 * @private
	 */

	var HostedField = exports.HostedField = function (_Emitter) {
	  _inherits(HostedField, _Emitter);

	  function HostedField(options) {
	    _classCallCheck(this, HostedField);

	    var _this = _possibleConstructorReturn(this, (HostedField.__proto__ || Object.getPrototypeOf(HostedField)).call(this));

	    _this.focus = _this.focus.bind(_this);
	    _this.onBlur = _this.onBlur.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);

	    _this.isFocused = false;
	    _this.configure(options);
	    _this.inject();
	    _this.bindLabel();

	    _this.on('bus:added', function (bus) {
	      _this.bus = bus;
	      _this.bus.add(_this.window);
	    });

	    // TODO: need these to be specific to this instance
	    _this.on('hostedField:focus', _this.onFocus.bind(_this));
	    _this.on('hostedField:blur', _this.onBlur.bind(_this));
	    _this.on('hostedField:change', _this.onChange.bind(_this));
	    return _this;
	  }

	  _createClass(HostedField, [{
	    key: 'integrityCheck',


	    /**
	     * Checks that the elements necessary to display the hostedField are in the document.body
	     *
	     * @return {Boolean}
	     */
	    value: function integrityCheck() {
	      var els = [this.target, this.container, this.iframe];
	      var present = document.body.contains.bind(document.body);
	      return !~els.map(present).indexOf(false);
	    }

	    // Private

	  }, {
	    key: 'configure',
	    value: function configure(options) {
	      options = (0, _componentClone2.default)(options);
	      this.target = _dom2.default.element(global.document.querySelector(options.selector));
	      if (!this.target) {
	        var _options = options,
	            type = _options.type,
	            selector = _options.selector;

	        throw (0, _errors2.default)('missing-hosted-field-target', { type: type, selector: selector });
	      }
	      this.config = options;
	    }
	  }, {
	    key: 'inject',
	    value: function inject() {
	      this.target.innerHTML = '\n      <div class="' + this.classList + '">\n        <iframe\n          src="' + this.url + '"\n          border="0"\n          frameborder="0"\n          allowtransparency="true"\n          scrolling="no">\n        </iframe>\n      </div>\n    ';

	      this.container = this.target.children[0];
	      this.iframe = this.container.children[0];
	      this.window = this.iframe.contentWindow;

	      this.iframe.style.height = '100%';
	      this.iframe.style.width = '100%';
	      this.iframe.style.background = 'transparent';
	    }
	  }, {
	    key: 'bindLabel',
	    value: function bindLabel() {
	      var _this2 = this;

	      if (!this.target.id) return;
	      var labels = global.document.querySelectorAll('label[for=' + this.target.id + ']');
	      [].slice.apply(labels).forEach(function (label) {
	        label.addEventListener('click', _this2.focus);
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.off();
	      this.target.innerHTML = '';
	      delete this.target;
	      delete this.iframe;
	      delete this.window;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.container.className = this.classList;
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus(body) {
	      if (body.type !== this.type) return;
	      this.isFocused = true;
	      this.update();
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(body) {
	      if (body.type !== this.type) return;
	      this.isFocused = false;
	      this.update();
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(body) {
	      if (body.type !== this.type) return;
	      this.update();
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this.bus) return;
	      this.bus.send('hostedField:' + this.type + ':focus!');
	    }
	  }, {
	    key: 'type',
	    get: function get() {
	      return this.config.type;
	    }
	  }, {
	    key: 'url',
	    get: function get() {
	      var config = encodeURIComponent(JSON.stringify(this.config));
	      return this.config.recurly.api + '/field.html#config=' + config;
	    }
	  }, {
	    key: 'classList',
	    get: function get() {
	      var prefix = 'recurly-hosted-field';
	      var classes = [prefix];

	      classes.push(prefix + '-' + this.config.type);
	      if (this.isFocused) {
	        classes.push(prefix + '-focus');
	        classes.push(prefix + '-' + this.config.type + '-focus');
	      }

	      return classes.join(' ');
	    }
	  }]);

	  return HostedField;
	}(_componentEmitter2.default);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = giftcard;

	var _componentType = __webpack_require__(2);

	var _componentType2 = _interopRequireDefault(_componentType);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var debug = __webpack_require__(7)('recurly:giftcard');

	/**
	 * Giftcard mixin.
	 *
	 * Retrieves giftcard pricing info based on a redemption code. The `callback` signature
	 * is `err, gift_card` where `err` may be a request or server error and `gift_card` is
	 * giftcard pricing data.
	 *
	 * @param {Object} options
	 * @param {Function} callback
	 */

	function giftcard(options, callback) {
	  debug('%j', options);

	  if ('function' !== (0, _componentType2.default)(callback)) {
	    throw (0, _errors2.default)('missing-callback');
	  }

	  if ('object' !== (0, _componentType2.default)(options)) {
	    throw (0, _errors2.default)('invalid-options');
	  }

	  if (!('giftcard' in options)) {
	    throw (0, _errors2.default)('missing-giftcard');
	  }

	  this.request('get', '/gift_cards/' + options.giftcard, options, callback);
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var type = __webpack_require__(2);
	var debug = __webpack_require__(7)('recurly:coupon');
	var errors = __webpack_require__(12);

	module.exports = coupon;

	/**
	 * Coupon mixin.
	 *
	 * Retrieves coupon information for the `plan`. The `callback` signature
	 * is `err, plan` where `err` may be a request or server error, and `plan`
	 * is a representation of the requested plan.
	 *
	 * @param {Object} options
	 * @param {Function} callback
	 */

	function coupon(options, callback) {
	  debug('%j', options);

	  if ('function' !== type(callback)) {
	    throw errors('missing-callback');
	  }

	  if ('object' !== type(options)) {
	    throw errors('invalid-options');
	  }

	  if (!('plan' in options)) {
	    throw errors('missing-plan');
	  }

	  if (!('coupon' in options)) {
	    throw errors('missing-coupon');
	  }

	  this.request('get', '/plans/' + options.plan + '/coupons/' + options.coupon, options, callback);
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var type = __webpack_require__(2);
	var debug = __webpack_require__(7)('recurly:plan');

	module.exports = plan;

	/**
	 * Plan mixin.
	 *
	 * Retrieves information for the `plan`. The `callback` signature
	 * is `err, plan` where `err` may be a request or server error, and `plan`
	 * is a representation of the requested plan.
	 *
	 * @param {String} code
	 * @param {Function} callback
	 */

	function plan(code, callback) {
	  debug('%s', code);

	  if ('function' != type(callback)) {
	    throw new Error('Missing callback');
	  }

	  if ('undefined' == type(code)) {
	    return callback(new Error('Missing plan code'));
	  }

	  this.request('get', '/plans/' + code, callback);
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var type = __webpack_require__(2);
	var clone = __webpack_require__(3);

	module.exports = tax;

	/**
	 * Tax mixin.
	 *
	 * Provides a tax estimate for the given address.
	 *
	 * @param {Object} options
	 * @param {Object} options.postal_code
	 * @param {Object} options.country
	 * @param {Object} [options.tax_code]
	 * @param {Object} [options.vat_number] Used for VAT exemptions
	 * @param {Function} callback
	 */

	function tax(options, callback) {
	  var request = clone(options);

	  if ('function' != type(callback)) {
	    throw new Error('Missing callback');
	  }

	  if (!('currency' in request)) {
	    request.currency = this.config.currency;
	  }

	  this.request('get', '/tax', request, callback);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _componentEach = __webpack_require__(16);

	var _componentEach2 = _interopRequireDefault(_componentEach);

	var _componentType = __webpack_require__(2);

	var _componentType2 = _interopRequireDefault(_componentType);

	var _normalize = __webpack_require__(19);

	var _errors = __webpack_require__(12);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var debug = __webpack_require__(7)('recurly:token');

	module.exports = token;

	/**
	 * Fields that are sent to API.
	 *
	 * @type {Array}
	 * @private
	 */

	var fields = ['first_name', 'last_name', 'address1', 'address2', 'country', 'city', 'state', 'postal_code', 'phone', 'vat_number', 'fraud_session_id', 'token'];

	/**
	 * Generates a token from customer data.
	 *
	 * The callback signature: `err, response` where `err` is a
	 * connection, request, or server error, and `response` is the
	 * recurly service response. The generated token is accessed
	 * at `response.token`.
	 *
	 * @param {Object|HTMLFormElement} options Billing properties or an HTMLFormElement
	 * with children corresponding to billing properties via 'data-reurly' attributes.
	 * @param {String} options.first_name customer first name
	 * @param {String} options.last_name customer last name
	 * @param {String} [options.address1]
	 * @param {String} [options.address2]
	 * @param {String} [options.country]
	 * @param {String} [options.city]
	 * @param {String} [options.state]
	 * @param {String|Number} [options.postal_code]
	 * @param {Function} done callback
	 */

	function token(options, done) {
	  debug('token');

	  var data = (0, _normalize.normalize)(fields, options, { parseCard: true });
	  var inputs = data.values;

	  if (!this.configured) {
	    throw (0, _errors2.default)('not-configured');
	  }

	  if ((0, _componentType2.default)(done) !== 'function') {
	    throw (0, _errors2.default)('missing-callback');
	  }

	  if (this.config.parent) {
	    inputs.fraud = this.fraud.params(inputs);

	    if (this.hostedFields.errors.length) {
	      throw this.hostedFields.errors[0];
	    }
	    var id = Math.floor(Math.random() * 1e10);
	    this.bus.send('token:init', { id: id, inputs: inputs });
	    this.once('token:done:' + id, function (msg) {
	      return complete(msg.err, msg.token);
	    });
	  } else {
	    var userErrors = validate.call(this, inputs);
	    if (userErrors.length) {
	      return done((0, _errors2.default)('validation', { fields: userErrors }));
	    }

	    this.request('post', '/token', inputs, complete);
	  }

	  function complete(err, res) {
	    if (err) return done(err);
	    if (data.fields.token && res.id) {
	      data.fields.token.value = res.id;
	    }
	    done(null, res);
	  }
	}

	/**
	 * Checks user input on a token call
	 *
	 * @param {Object} input
	 * @return {Array} indicates which fields are not valid
	 */

	function validate(input) {
	  var errors = [];

	  if (!this.validate.cardNumber(input.number)) {
	    errors.push('number');
	  }

	  if (!this.validate.expiry(input.month, input.year)) {
	    errors.push('month', 'year');
	  }

	  if (!input.first_name) {
	    errors.push('first_name');
	  }

	  if (!input.last_name) {
	    errors.push('last_name');
	  }

	  if ((~this.config.required.indexOf('cvv') || input.cvv) && !this.validate.cvv(input.cvv)) {
	    errors.push('cvv');
	  }

	  (0, _componentEach2.default)(this.config.required, function (field) {
	    if (!input[field] && ~fields.indexOf(field)) {
	      errors.push(field);
	    }
	  });

	  debug('validate errors', errors);

	  return errors;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cardNumber = cardNumber;
	exports.cardType = cardType;
	exports.expiry = expiry;
	exports.cvv = cvv;

	var _componentFind = __webpack_require__(29);

	var _componentFind2 = _interopRequireDefault(_componentFind);

	var _parseCard = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Card patterns.
	 *
	 * @private
	 */

	/*jshint -W058 */

	var TYPES = [{
	  type: 'discover',
	  pattern: /^(6011|622|64[4-9]|65)/,
	  lengths: [16]
	}, {
	  type: 'master',
	  pattern: {
	    test: function test(n) {
	      var firstSix = parseInt(n.substr(0, 6), 10);
	      if (/^5[1-5]/.test(n)) return true;
	      if (firstSix >= 222100 && firstSix <= 272099) return true;
	      return false;
	    }
	  },
	  lengths: [16]
	}, {
	  type: 'american_express',
	  pattern: /^3[47]/,
	  lengths: [15]
	}, {
	  type: 'visa',
	  pattern: /^4/,
	  lengths: [13, 16]
	}, {
	  type: 'jcb',
	  pattern: /^35[2-8]\d/,
	  lengths: [16]
	}, {
	  type: 'diners_club',
	  pattern: /^(30[0-5]|309|36|3[89]|54|55|2014|2149)/,
	  lengths: [14]
	}];

	/**
	 * Validates a credit card number via length check and luhn algorithm.
	 *
	 * @param {Number|String} number The card number.
	 * @return {Boolean}
	 * @see https://sites.google.com/site/abapexamples/javascript/luhn-validation
	 */

	function cardNumber(number) {
	  var str = (0, _parseCard.parseCard)(number);
	  var ca = void 0,
	      sum = 0,
	      mul = 1;
	  var i = str.length;

	  if (i < 12 || i > 19) return false;

	  while (i--) {
	    ca = parseInt(str.charAt(i), 10) * mul;
	    sum += ca - (ca > 9) * 9;
	    mul ^= 3;
	  }

	  return sum % 10 === 0 && sum > 0;
	}

	/**
	 * Returns the type of the card number as a string.
	 *
	 * @param {Number|String} number The card number
	 * @param {Boolean} partial detect card type on a partial (incomplete) number
	 * @return {String} card type
	 */

	function cardType(number) {
	  var partial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var str = (0, _parseCard.parseCard)(number);
	  var len = str.length;
	  var card = (0, _componentFind2.default)(TYPES, function (card) {
	    return card.pattern.test(str) && (partial || ~card.lengths.indexOf(len));
	  });
	  return card && card.type || 'unknown';
	}

	/**
	 * Validates whether an expiry month is present or future.
	 *
	 * @param {Numer|String} month The 2 digit month
	 * @param {Numer|String} year The 2 or 4 digit year
	 * @return {Boolean}
	 */

	function expiry(month, year) {
	  month = Number(month) - 1;
	  if (month < 0 || month > 11) return false;
	  year = Number(year);
	  year += year < 100 ? 2000 : 0;

	  var expiry = new Date();
	  expiry.setYear(year);
	  expiry.setDate(1);
	  expiry.setHours(0);
	  expiry.setMinutes(0);
	  expiry.setSeconds(0);
	  expiry.setMonth(month + 1);
	  return new Date() < expiry;
	}

	/**
	 * Validates whether a number looks like a cvv.
	 *
	 * e.g.: '123', '0321'
	 *
	 * @param {Number|String} number The card verification value
	 * @return {Boolean}
	 */

	function cvv(number) {
	  number = String(number).trim();
	  if (!~[3, 4].indexOf(number.length)) return false;
	  return (/^\d+$/.test(number)
	  );
	}

/***/ }
/******/ ]);