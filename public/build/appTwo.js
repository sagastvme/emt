"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["appTwo"],{

/***/ "./assets/js/AppBeforeLogin.js":
/*!*************************************!*\
  !*** ./assets/js/AppBeforeLogin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBefore_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppBefore.vue */ "./assets/AppBefore.vue");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;

(0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)(_AppBefore_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).mount('#before');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/AppBefore.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/AppBefore.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BusApp_TheHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/BusApp/TheHeader.vue */ "./assets/components/BusApp/TheHeader.vue");
/* harmony import */ var _components_BusApp_BikeTime_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BusApp/BikeTime.vue */ "./assets/components/BusApp/BikeTime.vue");
/* harmony import */ var _components_BusApp_BusTime_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BusApp/BusTime.vue */ "./assets/components/BusApp/BusTime.vue");
/* harmony import */ var _components_BusApp_TheBeforeMenu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BusApp/TheBeforeMenu.vue */ "./assets/components/BusApp/TheBeforeMenu.vue");
/* harmony import */ var _components_BusApp_TheLogin_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BusApp/TheLogin.vue */ "./assets/components/BusApp/TheLogin.vue");
/* harmony import */ var _components_BusApp_TheRegister_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BusApp/TheRegister.vue */ "./assets/components/BusApp/TheRegister.vue");
/* harmony import */ var _components_Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TheBeforeMenu: _components_BusApp_TheBeforeMenu_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BusTime: _components_BusApp_BusTime_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheLogin: _components_BusApp_TheLogin_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TheHeader: _components_BusApp_TheHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheRegister: _components_BusApp_TheRegister_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    bikeTime: _components_BusApp_BikeTime_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ErrorMessage: _components_Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      show: false,
      selectedTab: 'bus-time'
    };
  },
  methods: {
    showSearch: function showSearch() {
      this.show = !this.show;
    },
    changeTab: function changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheBeforeMenu.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheBeforeMenu.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgIcons_SvgBus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SvgIcons/SvgBus.vue */ "./assets/components/SvgIcons/SvgBus.vue");
/* harmony import */ var _SvgIcons_SvgStarEmpty_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SvgIcons/SvgStarEmpty.vue */ "./assets/components/SvgIcons/SvgStarEmpty.vue");
/* harmony import */ var _SvgIcons_SvgForum_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SvgIcons/SvgForum.vue */ "./assets/components/SvgIcons/SvgForum.vue");
/* harmony import */ var _SvgIcons_SvgUser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SvgIcons/SvgUser.vue */ "./assets/components/SvgIcons/SvgUser.vue");
/* harmony import */ var _SvgIcons_SvgLogin_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SvgIcons/SvgLogin.vue */ "./assets/components/SvgIcons/SvgLogin.vue");
/* harmony import */ var _TheHeader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TheHeader.vue */ "./assets/components/BusApp/TheHeader.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['status'],
  components: {
    TheHeader: _TheHeader_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SvgLogin: _SvgIcons_SvgLogin_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SvgUser: _SvgIcons_SvgUser_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SvgForum: _SvgIcons_SvgForum_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SvgStar: _SvgIcons_SvgStarEmpty_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SvgBus: _SvgIcons_SvgBus_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    changeTab: function changeTab(tab) {
      this.showMobileMenu = !this.showMobileMenu;
      this.$emit('change-tab', tab);
      this.activeTab = tab;
    },
    changeTabMobile: function changeTabMobile(tab) {
      this.$emit('change-tab', tab);
      this.activeTab = tab;
    }
  },
  data: function data() {
    return {
      showMobileMenu: false,
      activeTab: 'bus-time'
    };
  },
  computed: {
    isTabActive: function isTabActive() {
      var _this = this;
      return function (tab) {
        return _this.activeTab === tab;
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheLogin.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheLogin.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgIcons_SvgEyeOpened_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SvgIcons/SvgEyeOpened.vue */ "./assets/components/SvgIcons/SvgEyeOpened.vue");
/* harmony import */ var _SvgIcons_SvgEyeClosed_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SvgIcons/SvgEyeClosed.vue */ "./assets/components/SvgIcons/SvgEyeClosed.vue");
/* harmony import */ var _EyePassword_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EyePassword.vue */ "./assets/components/EyePassword.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
/* harmony import */ var _SvgIcons_SvgLogin_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SvgIcons/SvgLogin.vue */ "./assets/components/SvgIcons/SvgLogin.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SvgLogin: _SvgIcons_SvgLogin_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ErrorMessage: _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EyePassword: _EyePassword_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SvgEyeOpened: _SvgIcons_SvgEyeOpened_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SvgEyeClosed: _SvgIcons_SvgEyeClosed_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      showPassword: false,
      forgotPassword: false,
      showResult: false,
      resultMessage: null,
      emailSending: null
    };
  },
  mounted: function mounted() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    if (username && password) {
      this.username = username;
      this.password = password;
      this.rememberMe = true;
    }
  },
  methods: {
    remember: function remember() {
      console.log('le has dado click al boton y estoy guardadndo tus datos');
      if (this.rememberMe) {
        console.log('los datos ya existen y los estoy sacando ');
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
      } else {
        console.log('no quiere que te recuerede asi que estoyu borrando los datos');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
    },
    togglePasswordVisibility: function togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    sendForgotPassword: function sendForgotPassword() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var emailRegex, response, success;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!(_this.$refs.forgotEmail.value.trim() != '' && emailRegex.test(_this.$refs.forgotEmail.value))) {
                _context.next = 11;
                break;
              }
              _this.emailSending = true;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5__["default"].post('/forgotPassword', {
                'email': _this.$refs.forgotEmail.value
              });
            case 5:
              response = _context.sent;
              _this.emailSending = false;
              success = response.data.success;
              if (!success) {
                _this.resultMessage = 'Este email no existe';
              } else {
                _this.resultMessage = 'Se le he enviado un correo a ' + _this.$refs.forgotEmail.value;
              }
              _context.next = 12;
              break;
            case 11:
              _this.resultMessage = 'Por favor introduzca un email valido';
            case 12:
              _this.showResult = true;
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheRegister.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheRegister.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _EyePassword_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EyePassword.vue */ "./assets/components/EyePassword.vue");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
/* harmony import */ var _SvgIcons_SvgUser_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SvgIcons/SvgUser.vue */ "./assets/components/SvgIcons/SvgUser.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SvgUser: _SvgIcons_SvgUser_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EyePassword: _EyePassword_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ErrorMessage: _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      username: '',
      password: '',
      passwordRepeat: '',
      showPassword: false,
      showPasswordRepeat: false,
      status: false,
      registering: null,
      exception: true
    };
  },
  computed: {
    samePassword: function samePassword() {
      console.log('estoy revisando');
      console.log(this.username);
      if (this.password == this.passwordRepeat && this.password != '' && this.passwordRepeat != '' && this.username != '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.username)) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    register: function register() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('enviando');
              _this.registering = true;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/register', {
                username: _this.username,
                password: _this.password,
                confirmedStatus: 1
              });
            case 4:
              response = _context.sent;
              _this.password = '';
              _this.username = '';
              _this.passwordRepeat = '';
              _this.registering = false;
              if (response.data.message) {
                _this.status = response.data.message;
              } else {
                _this.exception = response.data.message;
              }
              //this.error=response.data.message
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EyePassword.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EyePassword.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgIcons_SvgEyeOpened_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcons/SvgEyeOpened.vue */ "./assets/components/SvgIcons/SvgEyeOpened.vue");
/* harmony import */ var _SvgIcons_SvgEyeClosed_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcons/SvgEyeClosed.vue */ "./assets/components/SvgIcons/SvgEyeClosed.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SvgEyeOpened: _SvgIcons_SvgEyeOpened_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SvgEyeClosed: _SvgIcons_SvgEyeClosed_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility: function togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.$emit('change-password');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/AppBefore.vue?vue&type=template&id=e124923c":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/AppBefore.vue?vue&type=template&id=e124923c ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "hidden lg:block"
};
var _hoisted_2 = {
  "class": "flex justify-center mt-8 lg:mt-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_the_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-header");
  var _component_the_before_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-before-menu");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_header)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_before_menu, {
    onChangeTab: $options.changeTab
  }, null, 8 /* PROPS */, ["onChangeTab"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($data.selectedTab)))])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheBeforeMenu.vue?vue&type=template&id=f0132cc8":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheBeforeMenu.vue?vue&type=template&id=f0132cc8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "rounded-lg overflow-hidden shadow-lg"
};
var _hoisted_2 = {
  "class": "bg-[#1d70a2] rounded"
};
var _hoisted_3 = {
  "class": "flex justify-center items-center px-3 py-3 lg:py-4 lg:hidden"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-20 h-20 fill-current text-gray-800",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
})], -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  "class": "mx-auto pr-32 pl-8"
};
var _hoisted_7 = {
  "class": "hidden lg:block text-lg"
};
var _hoisted_8 = {
  "class": "flex flex-col lg:flex-row items-center w-full"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pr-3"
}, "Autobus", -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pr-3"
}, "Iniciar sesion", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pr-3"
}, "Registrate", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "lg:hidden"
};
var _hoisted_13 = {
  "class": "px-10 py-10"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Autobus", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Iniciar sesión", -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Regístrate", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_the_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-header");
  var _component_svg_bus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-bus");
  var _component_svg_login = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-login");
  var _component_svg_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-user");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "block flex-shrink-0",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showMobileMenu = !$data.showMobileMenu;
    })
  }, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_header)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Desktop Menu"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-[#173753]': $options.isTabActive('bus-time'),
      'bg-[#1d70a2]': !$options.isTabActive('bus-time')
    }, "ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"]),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.changeTabMobile('bus-time');
    })
  }, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_bus, {
    "class": "h-14 w-14 mx-auto"
  })], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-[#173753]': $options.isTabActive('the-login'),
      'bg-[#1d70a2]': !$options.isTabActive('the-login')
    }, "mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"]),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.changeTabMobile('the-login');
    })
  }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_login, {
    "class": "h-14 w-14 mx-auto"
  })], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-[#173753]': $options.isTabActive('the-register'),
      'bg-[#1d70a2]': !$options.isTabActive('the-register')
    }, "mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.changeTabMobile('the-register');
    })
  }, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user, {
    "class": "h-14 w-14 mx-auto"
  })], 2 /* CLASS */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.showMobileMenu]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Burguer menu"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mb-5 flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.changeTab('bus-time');
    })
  }, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_bus, {
    "class": "ml-2 h-10 w-10"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mb-5 flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.changeTab('the-login');
    })
  }, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_login, {
    "class": "ml-2 h-10 w-10"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.changeTab('the-register');
    })
  }, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user, {
    "class": "ml-2 h-10 w-10"
  })])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.showMobileMenu]])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheLogin.vue?vue&type=template&id=a300558a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheLogin.vue?vue&type=template&id=a300558a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col items-center justify-center lg:w-3/6"
};
var _hoisted_2 = {
  "class": "flex justify-center items-center mt-5 lg:hidden"
};
var _hoisted_3 = {
  key: 0,
  "class": "mt-8 shadow-lg rounded-lg p-4 bg-white h-full text-4xl lg:text-xl lg:mt-14 lg:w-full"
};
var _hoisted_4 = {
  action: "/home",
  "class": "flex flex-col gap-8 lg:gap-0",
  method: "post"
};
var _hoisted_5 = {
  "class": "flex items-center lg:mb-4"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "ml-2 text-gray-700 font-bold",
  "for": "remember"
}, "Recuérdame", -1 /* HOISTED */);
var _hoisted_7 = {
  key: 1,
  "class": "mt-8 shadow-lg rounded-lg p-4 bg-white h-full text-4xl lg:mt-14 lg:w-full lg:text-xl"
};
var _hoisted_8 = {
  id: "forgot-email",
  ref: "forgotEmail",
  name: "forgot-email",
  type: "email",
  placeholder: "Correo electrónico",
  "class": "border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 w-full mb-5 h-16"
};
var _hoisted_9 = {
  "class": "flex justify-center"
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin h-14 w-14 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-75",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "black",
  "stroke-width": "3"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-25",
  fill: "black",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
})], -1 /* HOISTED */);
var _hoisted_12 = [_hoisted_11];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_svg_login = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-login");
  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_login, {
    "class": "w-52 h-52"
  })]), !$data.forgotPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    placeholder: "Correo electrónico",
    id: "_username",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.username = $event;
    }),
    "class": "lg:h-14 lg:w-full h-24 border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 mb-4",
    name: "_username",
    type: "text"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "_password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    type: "password",
    placeholder: "Contraseña",
    "class": "h-24 lg:h-14 border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 mb-4",
    name: "_password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "remember",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.rememberMe = $event;
    }),
    type: "checkbox",
    "class": "lg:h-4 lg:w-4 mt-1.5 w-7 h-24 text-2xl font form-checkbox border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-2"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.rememberMe]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "lg:h-14 h-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded hover:cursor-pointer",
    type: "submit",
    value: "Iniciar sesión",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.remember && $options.remember.apply($options, arguments);
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "lg:h-14 h-24 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mt-3 lg:w-full",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.forgotPassword = true;
    })
  }, "¿Olvidaste tu contraseña?")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-5",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $data.forgotPassword = false;
    })
  }, "Cancelar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.sendForgotPassword && $options.sendForgotPassword.apply($options, arguments);
    }, ["prevent"])),
    "class": "mt-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_8, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [!$data.emailSending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "lg:h-14 h-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded hover:cursor-pointer",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.sendForgotPassword && $options.sendForgotPassword.apply($options, arguments);
    })
  }, " Enviar correo de confirmación ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.emailSending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })])], 32 /* HYDRATE_EVENTS */)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("    <div v-else class=\"mt-5 shadow-lg rounded-lg p-4 bg-white\">\n          <button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded\"\n                  @click=\"forgotPassword=false\">Cancelar</button>\n          <form @submit.prevent=\"sendForgotPassword\" class=\"flex items-center mt-3\">\n            <input id=\"\" ref=\"forgotEmail\" name=\"\" placeholder=\"Introduzca su email\" type=\"email\"\n                   class=\"border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 w-full\">\n            <div>\n              <button v-if=\"!emailSending\" class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-3\"\n                      @click=\"sendForgotPassword\">\n                Enviar email de confirmación\n              </button>\n              <transition name=\"fade\">\n                <button v-if=\"emailSending\" class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-3\"\n                        disabled>\n                  <svg class=\"animate-spin mx-auto h-10 w-10 text-white inline-block align-middle\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\">\n                    <circle class=\"opacity-75\" cx=\"12\" cy=\"12\" r=\"8\" stroke=\"currentColor\" stroke-width=\"2\"></circle>\n                    <path class=\"opacity-25\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z\"></path>\n                  </svg>\n                </button>\n              </transition>\n            </div>\n          </form>\n        </div>"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [$data.showResult ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 0,
    message: this.resultMessage,
    onCloseError: _cache[8] || (_cache[8] = function ($event) {
      return $data.showResult = false, _this.forgotPassword = false;
    })
  }, null, 8 /* PROPS */, ["message"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheRegister.vue?vue&type=template&id=6c5ff5c1":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheRegister.vue?vue&type=template&id=6c5ff5c1 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col items-center justify-center lg:w-3/6"
};
var _hoisted_2 = {
  "class": "flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl lg:hidden"
};
var _hoisted_3 = {
  "class": "flex items-center mb-8"
};
var _hoisted_4 = {
  "class": "flex items-center mb-8"
};
var _hoisted_5 = {
  "class": "flex items-center mb-8"
};
var _hoisted_6 = {
  "class": "flex items-center justify-center"
};
var _hoisted_7 = {
  key: 0,
  "class": "lg:h-14 h-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded hover:cursor-pointer"
};
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin h-14 w-14 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-75",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "black",
  "stroke-width": "3"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-25",
  fill: "black",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
})], -1 /* HOISTED */);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-user");
  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user, {
    "class": "w-52 h-52"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "mt-8 shadow-lg rounded-lg p-4 bg-white h-full text-4xl w-full max-w-screen-lg mx-auto lg:text-xl lg:mt-14 lg:w-full",
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.register && $options.register.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    placeholder: "Correo electrónico",
    id: "username",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.username = $event;
    }),
    "class": "lg:h-14 lg:w-full h-24 text-left flex-1 border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",
    name: "username",
    type: "email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    placeholder: "Contraseña",
    type: "password",
    id: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    "class": "lg:h-14 lg:w-full h-24 text-left flex-1 border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",
    name: "password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    placeholder: "Repita su contraseña",
    type: "password",
    id: "passwordRepeat",
    ref: "passwordRepeat",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.passwordRepeat = $event;
    }),
    "class": "lg:h-14 lg:w-full h-24 flex-1 border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",
    name: "passwordRepeat"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.passwordRepeat]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_6, [$options.samePassword && !$data.registering ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_7, " Registrarse ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.registering ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })])])], 32 /* HYDRATE_EVENTS */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [$data.status ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 0,
    message: "Se le ha enviado un correo para que verifique su cuenta",
    onCloseError: _cache[4] || (_cache[4] = function ($event) {
      return $data.status = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.exception ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 1,
    message: "Este correo electrónico ya esta registrado",
    onCloseError: _cache[5] || (_cache[5] = function ($event) {
      return $data.exception = true;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EyePassword.vue?vue&type=template&id=0094bf7e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EyePassword.vue?vue&type=template&id=0094bf7e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_eye_opened = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-eye-opened");
  var _component_svg_eye_closed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-eye-closed");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.togglePasswordVisibility && $options.togglePasswordVisibility.apply($options, arguments);
    }, ["prevent"]))
  }, [$data.showPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_svg_eye_opened, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_svg_eye_closed, {
    key: 1
  }))]);
}

/***/ }),

/***/ "./assets/AppBefore.vue":
/*!******************************!*\
  !*** ./assets/AppBefore.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppBefore_vue_vue_type_template_id_e124923c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBefore.vue?vue&type=template&id=e124923c */ "./assets/AppBefore.vue?vue&type=template&id=e124923c");
/* harmony import */ var _AppBefore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBefore.vue?vue&type=script&lang=js */ "./assets/AppBefore.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AppBefore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AppBefore_vue_vue_type_template_id_e124923c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/AppBefore.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/TheBeforeMenu.vue":
/*!****************************************************!*\
  !*** ./assets/components/BusApp/TheBeforeMenu.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheBeforeMenu_vue_vue_type_template_id_f0132cc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheBeforeMenu.vue?vue&type=template&id=f0132cc8 */ "./assets/components/BusApp/TheBeforeMenu.vue?vue&type=template&id=f0132cc8");
/* harmony import */ var _TheBeforeMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheBeforeMenu.vue?vue&type=script&lang=js */ "./assets/components/BusApp/TheBeforeMenu.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheBeforeMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheBeforeMenu_vue_vue_type_template_id_f0132cc8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/TheBeforeMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/TheLogin.vue":
/*!***********************************************!*\
  !*** ./assets/components/BusApp/TheLogin.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheLogin_vue_vue_type_template_id_a300558a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheLogin.vue?vue&type=template&id=a300558a */ "./assets/components/BusApp/TheLogin.vue?vue&type=template&id=a300558a");
/* harmony import */ var _TheLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheLogin.vue?vue&type=script&lang=js */ "./assets/components/BusApp/TheLogin.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheLogin_vue_vue_type_template_id_a300558a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/TheLogin.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/TheRegister.vue":
/*!**************************************************!*\
  !*** ./assets/components/BusApp/TheRegister.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheRegister_vue_vue_type_template_id_6c5ff5c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheRegister.vue?vue&type=template&id=6c5ff5c1 */ "./assets/components/BusApp/TheRegister.vue?vue&type=template&id=6c5ff5c1");
/* harmony import */ var _TheRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheRegister.vue?vue&type=script&lang=js */ "./assets/components/BusApp/TheRegister.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheRegister_vue_vue_type_template_id_6c5ff5c1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/TheRegister.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/EyePassword.vue":
/*!*******************************************!*\
  !*** ./assets/components/EyePassword.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EyePassword_vue_vue_type_template_id_0094bf7e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EyePassword.vue?vue&type=template&id=0094bf7e */ "./assets/components/EyePassword.vue?vue&type=template&id=0094bf7e");
/* harmony import */ var _EyePassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EyePassword.vue?vue&type=script&lang=js */ "./assets/components/EyePassword.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EyePassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EyePassword_vue_vue_type_template_id_0094bf7e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/EyePassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/AppBefore.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./assets/AppBefore.vue?vue&type=script&lang=js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBefore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBefore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppBefore.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/AppBefore.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/TheBeforeMenu.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./assets/components/BusApp/TheBeforeMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheBeforeMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheBeforeMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheBeforeMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheBeforeMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/TheLogin.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./assets/components/BusApp/TheLogin.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheLogin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheLogin.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/TheRegister.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/BusApp/TheRegister.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheRegister.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheRegister.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/EyePassword.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./assets/components/EyePassword.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyePassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyePassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EyePassword.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EyePassword.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/AppBefore.vue?vue&type=template&id=e124923c":
/*!************************************************************!*\
  !*** ./assets/AppBefore.vue?vue&type=template&id=e124923c ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBefore_vue_vue_type_template_id_e124923c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBefore_vue_vue_type_template_id_e124923c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppBefore.vue?vue&type=template&id=e124923c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/AppBefore.vue?vue&type=template&id=e124923c");


/***/ }),

/***/ "./assets/components/BusApp/TheBeforeMenu.vue?vue&type=template&id=f0132cc8":
/*!**********************************************************************************!*\
  !*** ./assets/components/BusApp/TheBeforeMenu.vue?vue&type=template&id=f0132cc8 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheBeforeMenu_vue_vue_type_template_id_f0132cc8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheBeforeMenu_vue_vue_type_template_id_f0132cc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheBeforeMenu.vue?vue&type=template&id=f0132cc8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheBeforeMenu.vue?vue&type=template&id=f0132cc8");


/***/ }),

/***/ "./assets/components/BusApp/TheLogin.vue?vue&type=template&id=a300558a":
/*!*****************************************************************************!*\
  !*** ./assets/components/BusApp/TheLogin.vue?vue&type=template&id=a300558a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheLogin_vue_vue_type_template_id_a300558a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheLogin_vue_vue_type_template_id_a300558a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheLogin.vue?vue&type=template&id=a300558a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheLogin.vue?vue&type=template&id=a300558a");


/***/ }),

/***/ "./assets/components/BusApp/TheRegister.vue?vue&type=template&id=6c5ff5c1":
/*!********************************************************************************!*\
  !*** ./assets/components/BusApp/TheRegister.vue?vue&type=template&id=6c5ff5c1 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheRegister_vue_vue_type_template_id_6c5ff5c1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheRegister_vue_vue_type_template_id_6c5ff5c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheRegister.vue?vue&type=template&id=6c5ff5c1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheRegister.vue?vue&type=template&id=6c5ff5c1");


/***/ }),

/***/ "./assets/components/EyePassword.vue?vue&type=template&id=0094bf7e":
/*!*************************************************************************!*\
  !*** ./assets/components/EyePassword.vue?vue&type=template&id=0094bf7e ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyePassword_vue_vue_type_template_id_0094bf7e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyePassword_vue_vue_type_template_id_0094bf7e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EyePassword.vue?vue&type=template&id=0094bf7e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/EyePassword.vue?vue&type=template&id=0094bf7e");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vue_dist_vue_esm-bundler_js","vendors-node_modules_axios_lib_axios_js","assets_styles_app_css","assets_styles_app_css-assets_components_BusApp_TheHeader_vue-assets_components_Messages_Confi-a04abb","assets_components_BusApp_BikeTime_vue-assets_components_BusApp_BusTime_vue-assets_components_-c91fbb"], () => (__webpack_exec__("./assets/js/AppBeforeLogin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUN0QjJEO0FBQ1Y7QUFDTDs7QUFFM0QsQ0FBNkc7QUFDN0csaUNBQWlDLGtIQUFlLENBQUMsa0ZBQU0sYUFBYSxvRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCc0Q7QUFDVjtBQUNMOztBQUV0RCxDQUE2RztBQUM3RyxpQ0FBaUMsa0hBQWUsQ0FBQyw2RUFBTSxhQUFhLCtFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ5RDtBQUNWO0FBQ0w7O0FBRXpELENBQTZHO0FBQzdHLGlDQUFpQyxrSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnlEO0FBQ1Y7QUFDTDs7QUFFekQsQ0FBNkc7QUFDN0csaUNBQWlDLGtIQUFlLENBQUMsZ0ZBQU0sYUFBYSxrRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0Qm1MOzs7Ozs7Ozs7Ozs7Ozs7QUNBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0FMOzs7Ozs7Ozs7Ozs7Ozs7QUNBRzs7Ozs7Ozs7Ozs7Ozs7O0FDQU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQXBwQmVmb3JlTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcEJlZm9yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZUJlZm9yZU1lbnUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVMb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVJlZ2lzdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FeWVQYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcEJlZm9yZS52dWU/ZjNkOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlQmVmb3JlTWVudS52dWU/MDAyZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlTG9naW4udnVlPzk1N2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVJlZ2lzdGVyLnZ1ZT8yYWVhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V5ZVBhc3N3b3JkLnZ1ZT9iMjViIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHBCZWZvcmUudnVlP2IxYTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZUJlZm9yZU1lbnUudnVlPzU5MjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZUxvZ2luLnZ1ZT9kZjIyIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVSZWdpc3Rlci52dWU/NDY0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FeWVQYXNzd29yZC52dWU/Y2Y0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmVmb3JlIGZyb20gJy4uL0FwcEJlZm9yZS52dWUnXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJztcbndpbmRvdy5fX1ZVRV9PUFRJT05TX0FQSV9fID0gdHJ1ZTtcbndpbmRvdy5fX1ZVRV9QUk9EX0RFVlRPT0xTX18gPSBmYWxzZTtcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcblxuXG5jcmVhdGVBcHAoQXBwQmVmb3JlKS5tb3VudCgnI2JlZm9yZScpIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJoaWRkZW4gbGc6YmxvY2tcIj5cclxuICAgIDx0aGUtaGVhZGVyPjwvdGhlLWhlYWRlcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHRoZS1iZWZvcmUtbWVudSBAY2hhbmdlLXRhYj1cImNoYW5nZVRhYlwiPjwvdGhlLWJlZm9yZS1tZW51PlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTggbGc6bXQtMCBcIj5cclxuICAgIDxjb21wb25lbnQgOmlzPVwic2VsZWN0ZWRUYWJcIj48L2NvbXBvbmVudD5cclxuICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IFRoZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9UaGVIZWFkZXIudnVlXCI7XHJcbmltcG9ydCBiaWtlVGltZSBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9CaWtlVGltZS52dWVcIjtcclxuaW1wb3J0IEJ1c1RpbWUgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvQnVzVGltZS52dWVcIjtcclxuaW1wb3J0IFRoZUJlZm9yZU1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvVGhlQmVmb3JlTWVudS52dWVcIjtcclxuaW1wb3J0IFRoZUxvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvQnVzQXBwL1RoZUxvZ2luLnZ1ZVwiO1xyXG5pbXBvcnQgVGhlUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvVGhlUmVnaXN0ZXIudnVlXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9NZXNzYWdlcy9FcnJvck1lc3NhZ2UudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1RoZUJlZm9yZU1lbnUsIEJ1c1RpbWUsIFRoZUxvZ2luLCBUaGVIZWFkZXIsIFRoZVJlZ2lzdGVyLCBiaWtlVGltZSwgRXJyb3JNZXNzYWdlfSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFRhYjogJ2J1cy10aW1lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2hvd1NlYXJjaCgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuXHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVGFiKHRhYikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkVGFiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiBjbGFzcz1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZ1wiPlxuXG4gICAgPGRpdiBjbGFzcz1cImJnLVsjMWQ3MGEyXSAgcm91bmRlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTMgcHktMyBsZzpweS00IGxnOmhpZGRlblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2sgZmxleC1zaHJpbmstMFwiIEBjbGljaz1cInNob3dNb2JpbGVNZW51ID0gIXNob3dNb2JpbGVNZW51XCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInctMjAgaC0yMCBmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcIiAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJteC1hdXRvIHByLTMyIHBsLThcIj5cbiAgICAgICAgICA8dGhlLWhlYWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuXG4gICAgPCEtLURlc2t0b3AgTWVudS0tPlxuICAgIDxkaXYgdi1zaG93PVwiIXNob3dNb2JpbGVNZW51XCIgY2xhc3M9XCJoaWRkZW4gbGc6YmxvY2sgdGV4dC1sZ1wiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JnLVsjMTczNzUzXSc6IGlzVGFiQWN0aXZlKCdidXMtdGltZScpLCAnYmctWyMxZDcwYTJdJzogIWlzVGFiQWN0aXZlKCdidXMtdGltZScpIH1cIlxuICAgICAgICAgICAgY2xhc3M9XCIgbWwtMSBtci0yIGhvdmVyOmJnLVsjMTczNzUzXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTMgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgcmVsYXRpdmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4LTEgbWItMiBzbTptYi0wXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYk1vYmlsZSgnYnVzLXRpbWUnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByLTNcIj5BdXRvYnVzPC9zcGFuPlxuICAgICAgICAgIDxzdmctYnVzIGNsYXNzPVwiaC0xNCB3LTE0IG14LWF1dG9cIi8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdiZy1bIzE3Mzc1M10nOiBpc1RhYkFjdGl2ZSgndGhlLWxvZ2luJyksICdiZy1bIzFkNzBhMl0nOiAhaXNUYWJBY3RpdmUoJ3RoZS1sb2dpbicpIH1cIlxuICAgICAgICAgICAgY2xhc3M9XCIgbXItMiBob3ZlcjpiZy1bIzE3Mzc1M10gdGV4dC13aGl0ZSBmb250LWJvbGQgcm91bmRlZC1tZCBweC0zIHB5LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHJlbGF0aXZlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZmxleC0xIG1iLTIgc206bWItMFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUYWJNb2JpbGUoJ3RoZS1sb2dpbicpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHItM1wiPkluaWNpYXIgc2VzaW9uPC9zcGFuPlxuICAgICAgICAgIDxzdmctbG9naW4gY2xhc3M9XCJoLTE0IHctMTQgbXgtYXV0b1wiLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JnLVsjMTczNzUzXSc6IGlzVGFiQWN0aXZlKCd0aGUtcmVnaXN0ZXInKSwgJ2JnLVsjMWQ3MGEyXSc6ICFpc1RhYkFjdGl2ZSgndGhlLXJlZ2lzdGVyJykgfVwiXG4gICAgICAgICAgICBjbGFzcz1cIiBtci0yIGhvdmVyOmJnLVsjMTczNzUzXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTMgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgcmVsYXRpdmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4LTEgbWItMiBzbTptYi0wXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYk1vYmlsZSgndGhlLXJlZ2lzdGVyJylcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwci0zXCI+UmVnaXN0cmF0ZTwvc3Bhbj5cbiAgICAgICAgICA8c3ZnLXVzZXIgY2xhc3M9XCJoLTE0IHctMTQgbXgtYXV0b1wiLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPCEtLUJ1cmd1ZXIgbWVudS0tPlxuICAgIDxkaXYgdi1zaG93PVwic2hvd01vYmlsZU1lbnVcIiBjbGFzcz1cImxnOmhpZGRlblwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicHgtMTAgcHktMTAgIFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1iLTUgIGZsZXggdGV4dC01eGwgaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWNlbnRlciBweS0yIHB4LTMgcm91bmRlZC1tZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiKCdidXMtdGltZScpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPkF1dG9idXM8L3NwYW4+XG4gICAgICAgICAgPHN2Zy1idXMgY2xhc3M9XCJtbC0yIGgtMTAgdy0xMFwiLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibWItNSBmbGV4IHRleHQtNXhsIGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC1jZW50ZXIgcHktMiBweC0zIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYigndGhlLWxvZ2luJylcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+SW5pY2lhciBzZXNpw7NuPC9zcGFuPlxuICAgICAgICAgIDxzdmctbG9naW4gY2xhc3M9XCJtbC0yIGgtMTAgdy0xMFwiLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCB0ZXh0LTV4bCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtY2VudGVyIHB5LTIgcHgtMyByb3VuZGVkLW1kIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIGhvdmVyOmJnLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1ncmF5LTQwMFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3RoZS1yZWdpc3RlcicpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPlJlZ8Otc3RyYXRlPC9zcGFuPlxuICAgICAgICAgIDxzdmctdXNlciBjbGFzcz1cIm1sLTIgaC0xMCB3LTEwXCIvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3ZnQnVzIGZyb20gXCIuLi9TdmdJY29ucy9TdmdCdXMudnVlXCI7XG5pbXBvcnQgU3ZnU3RhciBmcm9tIFwiLi4vU3ZnSWNvbnMvU3ZnU3RhckVtcHR5LnZ1ZVwiO1xuaW1wb3J0IFN2Z0ZvcnVtIGZyb20gXCIuLi9TdmdJY29ucy9TdmdGb3J1bS52dWVcIjtcbmltcG9ydCBTdmdVc2VyIGZyb20gXCIuLi9TdmdJY29ucy9TdmdVc2VyLnZ1ZVwiO1xuaW1wb3J0IFN2Z0xvZ2luIGZyb20gXCIuLi9TdmdJY29ucy9TdmdMb2dpbi52dWVcIjtcbmltcG9ydCBUaGVIZWFkZXIgZnJvbSBcIi4vVGhlSGVhZGVyLnZ1ZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnc3RhdHVzJ10sXG4gIGNvbXBvbmVudHM6IHtUaGVIZWFkZXIsIFN2Z0xvZ2luLCBTdmdVc2VyLCBTdmdGb3J1bSwgU3ZnU3RhciwgU3ZnQnVzfSxcbiAgbWV0aG9kczoge1xuICAgIGNoYW5nZVRhYih0YWIpIHtcbiAgICAgIHRoaXMuc2hvd01vYmlsZU1lbnUgPSAhdGhpcy5zaG93TW9iaWxlTWVudVxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLXRhYicsIHRhYilcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuICAgIH0sXG4gICAgY2hhbmdlVGFiTW9iaWxlKHRhYikge1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLXRhYicsIHRhYilcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd01vYmlsZU1lbnU6IGZhbHNlLFxuICAgICAgYWN0aXZlVGFiOiAnYnVzLXRpbWUnLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc1RhYkFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiAodGFiKSA9PiB0aGlzLmFjdGl2ZVRhYiA9PT0gdGFiO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsZzp3LTMvNlwiPlxuICAgIDxoMiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTUgbGc6aGlkZGVuXCI+IDxzdmctbG9naW4gY2xhc3M9XCJ3LTUyIGgtNTIgXCIvPiA8L2gyPlxuXG5cbiAgICA8ZGl2IHYtaWY9XCIhZm9yZ290UGFzc3dvcmRcIiBjbGFzcz1cIm10LTggc2hhZG93LWxnIHJvdW5kZWQtbGcgcC00IGJnLXdoaXRlIGgtZnVsbCB0ZXh0LTR4bCBsZzp0ZXh0LXhsIGxnOm10LTE0IGxnOnctZnVsbFwiPlxuXG4gICAgICA8Zm9ybSBhY3Rpb249XCIvaG9tZVwiIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBnYXAtOCAgbGc6Z2FwLTBcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ29ycmVvIGVsZWN0csOzbmljb1wiIGlkPVwiX3VzZXJuYW1lXCIgdi1tb2RlbD1cInVzZXJuYW1lXCIgY2xhc3M9XCJsZzpoLTE0IGxnOnctZnVsbCBoLTI0IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHktMiBweC0zIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBtYi00XCIgbmFtZT1cIl91c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCI+XG5cbiAgICAgIDxpbnB1dCBpZD1cIl9wYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiICAgICBjbGFzcz1cImgtMjQgbGc6aC0xNCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB5LTIgcHgtMyByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAgbWItNFwiXG4gICAgICAgICAgICAgICBuYW1lPVwiX3Bhc3N3b3JkXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGxnOm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtbC0yIHRleHQtZ3JheS03MDAgZm9udC1ib2xkXCIgZm9yPVwicmVtZW1iZXJcIj5SZWN1w6lyZGFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwicmVtZW1iZXJcIiB2LW1vZGVsPVwicmVtZW1iZXJNZVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwibGc6aC00IGxnOnctNCBtdC0xLjUgdy03IGgtMjQgdGV4dC0yeGwgZm9udCBmb3JtLWNoZWNrYm94IGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAgbWwtMlwiPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImxnOmgtMTQgaC0yNCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTMgcm91bmRlZCBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJJbmljaWFyIHNlc2nDs25cIiBAY2xpY2s9XCJyZW1lbWJlclwiPlxuICAgICAgPC9mb3JtPlxuXG5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJsZzpoLTE0IGgtMjQgbXQtNSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTMgcm91bmRlZCBtdC0zIGxnOnctZnVsbFwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImZvcmdvdFBhc3N3b3JkPXRydWVcIj7Cv09sdmlkYXN0ZSB0dSBjb250cmFzZcOxYT88L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibXQtOCBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTQgYmctd2hpdGUgaC1mdWxsIHRleHQtNHhsIGxnOm10LTE0IGxnOnctZnVsbCBsZzp0ZXh0LXhsXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMyByb3VuZGVkIG1iLTVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJmb3Jnb3RQYXNzd29yZD1mYWxzZVwiPkNhbmNlbGFyPC9idXR0b24+XG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzZW5kRm9yZ290UGFzc3dvcmRcIiBjbGFzcz1cIm10LTNcIj5cbiAgICAgICA8aW5wdXQgaWQ9XCJmb3Jnb3QtZW1haWxcIiByZWY9XCJmb3Jnb3RFbWFpbFwiIG5hbWU9XCJmb3Jnb3QtZW1haWxcIiB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIiBjbGFzcz1cIiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB5LTIgcHgtMyByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDAgdy1mdWxsIG1iLTUgIGgtMTZcIj5cblxuICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiIWVtYWlsU2VuZGluZ1wiIGNsYXNzPVwibGc6aC0xNCBoLTI0IGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMyByb3VuZGVkIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbmRGb3Jnb3RQYXNzd29yZFwiPlxuICAgICAgICAgICAgRW52aWFyIGNvcnJlbyBkZSBjb25maXJtYWNpw7NuXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgICAgICA8IS0tICA8YnV0dG9uIHYtaWY9XCJlbWFpbFNlbmRpbmdcIiBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMyByb3VuZGVkIG10LTNcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImFuaW1hdGUtc3BpbiBteC1hdXRvIGgtMTAgdy0xMCB0ZXh0LXdoaXRlIGlubGluZS1ibG9jayBhbGlnbi1taWRkbGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cIm9wYWNpdHktNzVcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwib3BhY2l0eS0yNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVtYWlsU2VuZGluZ1wiID5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImFuaW1hdGUtc3BpbiAgaC0xNCB3LTE0IHRleHQtd2hpdGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cIm9wYWNpdHktNzVcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiM1wiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwib3BhY2l0eS0yNVwiIGZpbGw9XCJibGFja1wiIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibXQtNSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTQgYmctd2hpdGVcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0zIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9yZ290UGFzc3dvcmQ9ZmFsc2VcIj5DYW5jZWxhcjwvYnV0dG9uPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInNlbmRGb3Jnb3RQYXNzd29yZFwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiXCIgcmVmPVwiZm9yZ290RW1haWxcIiBuYW1lPVwiXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1emNhIHN1IGVtYWlsXCIgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcHktMiBweC0zIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cIiFlbWFpbFNlbmRpbmdcIiBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMyByb3VuZGVkIG1sLTNcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbmRGb3Jnb3RQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIEVudmlhciBlbWFpbCBkZSBjb25maXJtYWNpw7NuXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImVtYWlsU2VuZGluZ1wiIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0zIHJvdW5kZWQgbWwtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhbmltYXRlLXNwaW4gbXgtYXV0byBoLTEwIHctMTAgdGV4dC13aGl0ZSBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwib3BhY2l0eS03NVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjhcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwib3BhY2l0eS0yNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2Pi0tPlxuXG4gICAgPHRlbGVwb3J0IHRvPVwiYm9keVwiPlxuICAgICAgPGVycm9yLW1lc3NhZ2Ugdi1pZj1cInNob3dSZXN1bHRcIiA6bWVzc2FnZT1cInRoaXMucmVzdWx0TWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICBAY2xvc2UtZXJyb3I9XCJzaG93UmVzdWx0PWZhbHNlLHRoaXMuZm9yZ290UGFzc3dvcmQgPSBmYWxzZVwiLz5cbiAgICA8L3RlbGVwb3J0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBTdmdFeWVPcGVuZWQgZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0V5ZU9wZW5lZC52dWVcIjtcbmltcG9ydCBTdmdFeWVDbG9zZWQgZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0V5ZUNsb3NlZC52dWVcIjtcbmltcG9ydCBFeWVQYXNzd29yZCBmcm9tIFwiLi4vRXllUGFzc3dvcmQudnVlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9NZXNzYWdlcy9FcnJvck1lc3NhZ2UudnVlXCI7XG5pbXBvcnQgU3ZnTG9naW4gZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0xvZ2luLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtTdmdMb2dpbiwgRXJyb3JNZXNzYWdlLCBFeWVQYXNzd29yZCwgU3ZnRXllT3BlbmVkLCBTdmdFeWVDbG9zZWR9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICByZW1lbWJlck1lOiBmYWxzZSxcbiAgICAgIHNob3dQYXNzd29yZDogZmFsc2UsXG4gICAgICBmb3Jnb3RQYXNzd29yZDogZmFsc2UsXG4gICAgICBzaG93UmVzdWx0OiBmYWxzZSxcbiAgICAgIHJlc3VsdE1lc3NhZ2U6IG51bGwsXG4gICAgICBlbWFpbFNlbmRpbmc6bnVsbFxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBsZXQgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKVxuICAgIGxldCBwYXNzd29yZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpXG4gICAgaWYgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWVcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZFxuICAgICAgdGhpcy5yZW1lbWJlck1lID0gdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlbWVtYmVyKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xlIGhhcyBkYWRvIGNsaWNrIGFsIGJvdG9uIHkgZXN0b3kgZ3VhcmRhZG5kbyB0dXMgZGF0b3MnKVxuICAgICAgaWYgKHRoaXMucmVtZW1iZXJNZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9zIGRhdG9zIHlhIGV4aXN0ZW4geSBsb3MgZXN0b3kgc2FjYW5kbyAnKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB0aGlzLnVzZXJuYW1lKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHF1aWVyZSBxdWUgdGUgcmVjdWVyZWRlIGFzaSBxdWUgZXN0b3l1IGJvcnJhbmRvIGxvcyBkYXRvcycpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VybmFtZScpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXNzd29yZCcpXG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG4gICAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZDtcbiAgICB9LFxuICAgIGFzeW5jIHNlbmRGb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcbiAgICAgIGlmICh0aGlzLiRyZWZzLmZvcmdvdEVtYWlsLnZhbHVlLnRyaW0oKSAhPSAnJyAmJiBlbWFpbFJlZ2V4LnRlc3QodGhpcy4kcmVmcy5mb3Jnb3RFbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5lbWFpbFNlbmRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mb3Jnb3RQYXNzd29yZCcsIHtcbiAgICAgICAgICAnZW1haWwnOiB0aGlzLiRyZWZzLmZvcmdvdEVtYWlsLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZW1haWxTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAocmVzcG9uc2UuZGF0YS5zdWNjZXNzKVxuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSAnRXN0ZSBlbWFpbCBubyBleGlzdGUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRNZXNzYWdlID0gJ1NlIGxlIGhlIGVudmlhZG8gdW4gY29ycmVvIGEgJyArIHRoaXMuJHJlZnMuZm9yZ290RW1haWwudmFsdWVcbiAgICAgICAgfVxuXG5cbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSAnUG9yIGZhdm9yIGludHJvZHV6Y2EgdW4gZW1haWwgdmFsaWRvJ1xuXG4gICAgICB9XG4gICAgICB0aGlzLnNob3dSZXN1bHQgPSB0cnVlXG5cblxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsZzp3LTMvNiBcIj5cbiAgICA8aDIgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtci0zIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIHRleHQtM3hsIGxnOmhpZGRlblwiPiA8c3ZnLXVzZXIgY2xhc3M9XCJ3LTUyIGgtNTJcIi8+IDwvaDI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cIm10LTggc2hhZG93LWxnIHJvdW5kZWQtbGcgcC00IGJnLXdoaXRlIGgtZnVsbCB0ZXh0LTR4bCB3LWZ1bGwgbWF4LXctc2NyZWVuLWxnIG14LWF1dG8gbGc6dGV4dC14bCBsZzptdC0xNCBsZzp3LWZ1bGxcIiBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiPlxuICAgICAgPHVsID5cbiAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNvcnJlbyBlbGVjdHLDs25pY29cIiBpZD1cInVzZXJuYW1lXCIgdi1tb2RlbD1cInVzZXJuYW1lXCIgY2xhc3M9XCJsZzpoLTE0IGxnOnctZnVsbCBoLTI0IHRleHQtbGVmdCBmbGV4LTEgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIiBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwiZW1haWxcIj5cbiAgICAgICAgPC9saT5cblxuICAgICAgICA8bGkgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgY2xhc3M9XCJsZzpoLTE0IGxnOnctZnVsbCAgaC0yNCAgdGV4dC1sZWZ0IGZsZXgtMSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgcHktMiBweC0zIHRleHQtZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIG1iLThcIiA+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUmVwaXRhIHN1IGNvbnRyYXNlw7FhXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFJlcGVhdFwiIHJlZj1cInBhc3N3b3JkUmVwZWF0XCIgdi1tb2RlbD1cInBhc3N3b3JkUmVwZWF0XCIgIGNsYXNzPVwibGc6aC0xNCBsZzp3LWZ1bGwgaC0yNCAgZmxleC0xIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgbmFtZT1cInBhc3N3b3JkUmVwZWF0XCI+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJzYW1lUGFzc3dvcmQgJiYgIXJlZ2lzdGVyaW5nXCIgY2xhc3M9XCJsZzpoLTE0IGgtMjQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0zIHJvdW5kZWQgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIFJlZ2lzdHJhcnNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInJlZ2lzdGVyaW5nXCIgPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYW5pbWF0ZS1zcGluICBoLTE0IHctMTQgdGV4dC13aGl0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwib3BhY2l0eS03NVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9XCIzXCI+PC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJvcGFjaXR5LTI1XCIgZmlsbD1cImJsYWNrXCIgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHpcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Zvcm0+XG5cblxuXG5cbiAgPC9kaXY+XG4gIDx0ZWxlcG9ydCB0bz1cImJvZHlcIj5cbiAgICA8ZXJyb3ItbWVzc2FnZSB2LWlmPVwic3RhdHVzXCIgbWVzc2FnZT1cIlNlIGxlIGhhIGVudmlhZG8gdW4gY29ycmVvIHBhcmEgcXVlIHZlcmlmaXF1ZSBzdSBjdWVudGFcIlxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1lcnJvcj1cInN0YXR1cz1mYWxzZVwiLz5cbiAgICA8ZXJyb3ItbWVzc2FnZSB2LWlmPVwiIWV4Y2VwdGlvblwiIG1lc3NhZ2U9XCJFc3RlIGNvcnJlbyBlbGVjdHLDs25pY28geWEgZXN0YSByZWdpc3RyYWRvXCJcbiAgICAgICAgICAgICAgICAgICBAY2xvc2UtZXJyb3I9XCJleGNlcHRpb249dHJ1ZVwiLz5cblxuICA8L3RlbGVwb3J0PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEV5ZVBhc3N3b3JkIGZyb20gXCIuLi9FeWVQYXNzd29yZC52dWVcIjtcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4uL01lc3NhZ2VzL0Vycm9yTWVzc2FnZS52dWVcIjtcbmltcG9ydCBTdmdVc2VyIGZyb20gXCIuLi9TdmdJY29ucy9TdmdVc2VyLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7U3ZnVXNlciwgRXllUGFzc3dvcmQsRXJyb3JNZXNzYWdlfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRSZXBlYXQ6ICcnLFxuICAgICAgc2hvd1Bhc3N3b3JkOiBmYWxzZSxcbiAgICAgIHNob3dQYXNzd29yZFJlcGVhdDogZmFsc2UsXG4gICAgICBzdGF0dXM6ZmFsc2UsXG4gICAgICByZWdpc3RlcmluZzpudWxsLFxuICAgICAgZXhjZXB0aW9uOnRydWVcblxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzYW1lUGFzc3dvcmQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXN0b3kgcmV2aXNhbmRvJylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcm5hbWUpXG4gICAgICBpZiAodGhpcy5wYXNzd29yZCA9PSB0aGlzLnBhc3N3b3JkUmVwZWF0XG4gICAgICAgICAgJiYgdGhpcy5wYXNzd29yZCAhPSAnJyAmJiB0aGlzLnBhc3N3b3JkUmVwZWF0ICE9ICcnXG5cbiAgICAgICAgICAmJiB0aGlzLnVzZXJuYW1lICE9ICcnICYmIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QodGhpcy51c2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHJlZ2lzdGVyKCkge1xuICAgICAgY29uc29sZS5sb2coJ2VudmlhbmRvJylcbiAgICAgIHRoaXMucmVnaXN0ZXJpbmc9dHJ1ZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvcmVnaXN0ZXInLCB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgY29uZmlybWVkU3RhdHVzOiAxXG4gICAgICB9KVxuICAgICAgdGhpcy5wYXNzd29yZD0nJztcbiAgICAgIHRoaXMudXNlcm5hbWU9Jyc7XG4gICAgICB0aGlzLnBhc3N3b3JkUmVwZWF0PScnO1xuICAgICAgdGhpcy5yZWdpc3RlcmluZz1mYWxzZVxuICAgICAgaWYocmVzcG9uc2UuZGF0YS5tZXNzYWdlKXtcblxuICAgICAgICB0aGlzLnN0YXR1cz1yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbj1yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5lcnJvcj1yZXNwb25zZS5kYXRhLm1lc3NhZ2VcblxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5XCI+XG4gICAgPHN2Zy1leWUtb3BlbmVkIHYtaWY9XCJzaG93UGFzc3dvcmRcIi8+XG4gICAgPHN2Zy1leWUtY2xvc2VkIHYtZWxzZSAvPlxuICA8L2J1dHRvbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTdmdFeWVPcGVuZWQgZnJvbSBcIi4vU3ZnSWNvbnMvU3ZnRXllT3BlbmVkLnZ1ZVwiO1xuaW1wb3J0IFN2Z0V5ZUNsb3NlZCBmcm9tIFwiLi9TdmdJY29ucy9TdmdFeWVDbG9zZWQudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtTdmdFeWVPcGVuZWQsIFN2Z0V5ZUNsb3NlZH0sXG4gIGRhdGEoKXtcbiAgICByZXR1cm57XG4gICAgICBzaG93UGFzc3dvcmQ6ZmFsc2VcbiAgICB9XG4gIH0sXG5tZXRob2RzOntcbiAgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICAgIHRoaXMuJGVtaXQoJ2NoYW5nZS1wYXNzd29yZCcpXG4gIH1cbn1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0FwcEJlZm9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTEyNDkyM2NcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHBCZWZvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcEJlZm9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL0FwcEJlZm9yZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZTEyNDkyM2NcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdlMTI0OTIzYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2UxMjQ5MjNjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHBCZWZvcmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUxMjQ5MjNjXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2UxMjQ5MjNjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9UaGVCZWZvcmVNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMDEzMmNjOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZUJlZm9yZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZUJlZm9yZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVCZWZvcmVNZW51LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJmMDEzMmNjOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2YwMTMyY2M4JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZjAxMzJjYzgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZUJlZm9yZU1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYwMTMyY2M4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2YwMTMyY2M4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTMwMDU1OGFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVMb2dpbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiYTMwMDU1OGFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdhMzAwNTU4YScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2EzMDA1NThhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTMwMDU1OGFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignYTMwMDU1OGEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzVmZjVjMVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UaGVSZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVJlZ2lzdGVyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2YzVmZjVjMVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZjNWZmNWMxJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNmM1ZmY1YzEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzVmZjVjMVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2YzVmZjVjMScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAwOTRiZjdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V5ZVBhc3N3b3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9FeWVQYXNzd29yZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMDA5NGJmN2VcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwMDk0YmY3ZScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzAwOTRiZjdlJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeWVQYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDA5NGJmN2VcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMDA5NGJmN2UnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcEJlZm9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHBCZWZvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVCZWZvcmVNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZUJlZm9yZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiQXBwQmVmb3JlIiwid2luZG93IiwiX19WVUVfT1BUSU9OU19BUElfXyIsIl9fVlVFX1BST0RfREVWVE9PTFNfXyIsImNyZWF0ZUFwcCIsIm1vdW50IiwiVGhlSGVhZGVyIiwiYmlrZVRpbWUiLCJCdXNUaW1lIiwiVGhlQmVmb3JlTWVudSIsIlRoZUxvZ2luIiwiVGhlUmVnaXN0ZXIiLCJFcnJvck1lc3NhZ2UiLCJjb21wb25lbnRzIiwiZGF0YSIsInNob3ciLCJzZWxlY3RlZFRhYiIsIm1ldGhvZHMiLCJzaG93U2VhcmNoIiwiY2hhbmdlVGFiIiwidGFiIiwiY29uc29sZSIsImxvZyIsIlN2Z0J1cyIsIlN2Z1N0YXIiLCJTdmdGb3J1bSIsIlN2Z1VzZXIiLCJTdmdMb2dpbiIsInByb3BzIiwic2hvd01vYmlsZU1lbnUiLCIkZW1pdCIsImFjdGl2ZVRhYiIsImNoYW5nZVRhYk1vYmlsZSIsImNvbXB1dGVkIiwiaXNUYWJBY3RpdmUiLCJfdGhpcyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIlN2Z0V5ZU9wZW5lZCIsIlN2Z0V5ZUNsb3NlZCIsIkV5ZVBhc3N3b3JkIiwiYXhpb3MiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVtZW1iZXJNZSIsInNob3dQYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkIiwic2hvd1Jlc3VsdCIsInJlc3VsdE1lc3NhZ2UiLCJlbWFpbFNlbmRpbmciLCJtb3VudGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbWVtYmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJzZW5kRm9yZ290UGFzc3dvcmQiLCJfY2FsbGVlIiwiZW1haWxSZWdleCIsInJlc3BvbnNlIiwic3VjY2VzcyIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCIkcmVmcyIsImZvcmdvdEVtYWlsIiwidHJpbSIsInRlc3QiLCJwb3N0IiwicGFzc3dvcmRSZXBlYXQiLCJzaG93UGFzc3dvcmRSZXBlYXQiLCJzdGF0dXMiLCJyZWdpc3RlcmluZyIsInNhbWVQYXNzd29yZCIsInJlZ2lzdGVyIiwiY29uZmlybWVkU3RhdHVzIiwibWVzc2FnZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF90aGVfaGVhZGVyIiwiX2NvbXBvbmVudF90aGVfYmVmb3JlX21lbnUiLCJvbkNoYW5nZVRhYiIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVCbG9jayIsIl9yZXNvbHZlRHluYW1pY0NvbXBvbmVudCIsIiRkYXRhIiwidmlld0JveCIsImQiLCJfaG9pc3RlZF80IiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzMiLCJvbkNsaWNrIiwiX2NhY2hlIiwiJGV2ZW50IiwiX2hvaXN0ZWRfNiIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9ub3JtYWxpemVDbGFzcyIsIl9ob2lzdGVkXzkiLCJfY29tcG9uZW50X3N2Z19idXMiLCJfaG9pc3RlZF8xMCIsIl9jb21wb25lbnRfc3ZnX2xvZ2luIiwiX2hvaXN0ZWRfMTEiLCJfY29tcG9uZW50X3N2Z191c2VyIiwiX2hvaXN0ZWRfMTIiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsImFjdGlvbiIsImlkIiwicmVmIiwicGxhY2Vob2xkZXIiLCJ4bWxucyIsImZpbGwiLCJjeCIsImN5IiwiciIsInN0cm9rZSIsIl9ob2lzdGVkXzUiLCJvblN1Ym1pdCIsIl93aXRoTW9kaWZpZXJzIiwiX1RyYW5zaXRpb24iLCJfVGVsZXBvcnQiLCJ0byIsIl9jb21wb25lbnRfZXJyb3JfbWVzc2FnZSIsIm9uQ2xvc2VFcnJvciIsIl9jb21wb25lbnRfc3ZnX2V5ZV9vcGVuZWQiLCJfY29tcG9uZW50X3N2Z19leWVfY2xvc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==