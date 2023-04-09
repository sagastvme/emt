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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['status'],
  components: {
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
      activeTab: null
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
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
              return axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/forgotPassword', {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _EyePassword_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EyePassword.vue */ "./assets/components/EyePassword.vue");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
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
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/register', {
                username: _this.username,
                password: _this.password,
                confirmedStatus: 1
              });
            case 4:
              response = _context.sent;
              _this.registering = false;
              if (response.data.message) {
                _this.status = response.data.message;
              } else {
                _this.exception = response.data.message;
              }
              //this.error=response.data.message
            case 7:
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogin.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogin.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgLogin"
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
  "class": "flex justify-center mt-8 md:mt-16"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_the_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-header");
  var _component_the_before_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-before-menu");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_before_menu, {
    onChangeTab: $options.changeTab
  }, null, 8 /* PROPS */, ["onChangeTab"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($data.selectedTab)))])], 64 /* STABLE_FRAGMENT */);
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
  "class": "bg-gray-100 rounded-lg overflow-hidden shadow-lg"
};
var _hoisted_2 = {
  "class": "flex justify-between items-center px-4 py-3 md:py-4 md:hidden"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6 fill-current text-gray-800",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
})], -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "hidden md:block"
};
var _hoisted_6 = {
  "class": "flex w-full"
};
var _hoisted_7 = {
  "class": "md:hidden"
};
var _hoisted_8 = {
  "class": "px-2 pt-2 pb-3"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Consulta tu parada de autobus", -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Iniciar sesion", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Registrate", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_bus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-bus");
  var _component_svg_login = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-login");
  var _component_svg_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-user");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "block",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showMobileMenu = !$data.showMobileMenu;
    })
  }, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('bus-time'),
      'bg-gray-400': !$options.isTabActive('bus-time')
    }]),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.changeTabMobile('bus-time');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Consulta tu parada de autobus"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_bus, {
    "class": "absolute right-0 top-0 mt-1 mr-1"
  })], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('the-login'),
      'bg-gray-400': !$options.isTabActive('the-login')
    }]),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.changeTabMobile('the-login');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Iniciar sesion "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_login, {
    "class": "absolute right-0 top-0 mt-1 mr-1"
  })], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('the-register'),
      'bg-gray-400': !$options.isTabActive('the-register')
    }]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.changeTabMobile('the-register');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Registrate "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user, {
    "class": "absolute right-0 top-0 mt-1 mr-1"
  })], 2 /* CLASS */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.showMobileMenu]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.changeTab('bus-time');
    })
  }, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_bus, {
    "class": "ml-2 h-5 w-5"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.changeTab('the-login');
    })
  }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_login, {
    "class": "ml-2 h-5 w-5"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.changeTab('the-register');
    })
  }, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user, {
    "class": "ml-2 h-5 w-5"
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
  "class": "flex flex-col items-center justify-center"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl"
}, "Iniciar sesión", -1 /* HOISTED */);
var _hoisted_3 = {
  key: 0,
  "class": "mt-5 shadow-lg rounded-lg p-4 bg-white"
};
var _hoisted_4 = {
  action: "/home",
  "class": "grid grid-cols-2 gap-3",
  method: "post"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "flex items-center text-gray-700 font-bold",
  "for": "_username"
}, "Email", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "flex items-center text-gray-700 font-bold",
  ref: "password",
  htmlFor: "_password"
};
var _hoisted_7 = ["type"];
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "flex items-center text-gray-700 font-bold",
  "for": "remember"
}, "Remember Me", -1 /* HOISTED */);
var _hoisted_9 = {
  key: 1,
  "class": "mt-5 shadow-lg rounded-lg p-4 bg-white"
};
var _hoisted_10 = {
  id: "",
  ref: "forgotEmail",
  name: "",
  placeholder: "Introduzca su email",
  type: "email",
  "class": "border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 w-full"
};
var _hoisted_11 = {
  key: 0,
  "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3",
  disabled: ""
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin mx-auto h-10 w-10 text-white inline-block align-middle",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-75",
  cx: "12",
  cy: "12",
  r: "8",
  stroke: "currentColor",
  "stroke-width": "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-25",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
})], -1 /* HOISTED */);
var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, !$data.forgotPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "_username",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.username = $event;
    }),
    "class": "border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500",
    name: "_username",
    type: "text"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_6, "Password", 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "_password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    type: $data.showPassword ? 'text' : 'password',
    "class": "border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500",
    name: "_password"
  }, null, 8 /* PROPS */, _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $data.password]]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "remember",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.rememberMe = $event;
    }),
    type: "checkbox",
    "class": "form-checkbox border-gray-300 rounded focus:outline-none focus:border-blue-500"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.rememberMe]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer col-span-2",
    type: "submit",
    value: "Iniciar sesión",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.remember && $options.remember.apply($options, arguments);
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.forgotPassword = true;
    })
  }, "Olvidaste la contraseña?")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $data.forgotPassword = false;
    })
  }, "Cancelar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.sendForgotPassword && $options.sendForgotPassword.apply($options, arguments);
    }, ["prevent"])),
    "class": "flex items-center mt-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_10, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [!$data.emailSending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.sendForgotPassword && $options.sendForgotPassword.apply($options, arguments);
    })
  }, " Enviar email de confirmación ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.emailSending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_11, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })])], 32 /* HYDRATE_EVENTS */)])), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
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
  "class": "flex flex-col items-center justify-center"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl"
}, "Registrate", -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "username",
  "class": "flex-row justify-end mr-3 text-gray-700 font-bold"
}, "Correo electrónico", -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password",
  "class": "flex-row justify-end mr-3 text-gray-700 font-bold"
}, "Contraseña", -1 /* HOISTED */);
var _hoisted_5 = ["type"];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "passwordRepeat",
  "class": "flex-row justify-end mr-3 text-gray-700 font-bold"
}, "Repita su contraseña", -1 /* HOISTED */);
var _hoisted_7 = ["type"];
var _hoisted_8 = {
  key: 0,
  "class": "bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2 relative h-10"
};
var _hoisted_9 = {
  key: 0
};
var _hoisted_10 = {
  key: 0,
  "class": "absolute inset-0 flex items-center justify-center"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
})], -1 /* HOISTED */);
var _hoisted_12 = [_hoisted_11];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "grid grid-cols-2 gap-3 mt-5 shadow-lg rounded-lg p-4 bg-white",
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.register && $options.register.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "username",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.username = $event;
    }),
    "class": "flex-row border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",
    name: "username",
    type: "email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    type: $data.showPassword ? 'text' : 'password',
    "class": "flex-row border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",
    name: "password"
  }, null, 8 /* PROPS */, _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $data.password]]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "passwordRepeat",
    ref: "passwordRepeat",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.passwordRepeat = $event;
    }),
    type: $data.showPasswordRepeat ? 'text' : 'password',
    "class": "flex-row border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500",
    name: "passwordRepeat"
  }, null, 8 /* PROPS */, _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $data.passwordRepeat]]), $options.samePassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_8, [!$data.registering ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, "Registrarse")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.registering ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* HYDRATE_EVENTS */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [$data.status ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 0,
    message: "Se le ha enviado un correo para que verifique su cuenta",
    onCloseError: _cache[4] || (_cache[4] = function ($event) {
      return $data.status = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.exception ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 1,
    message: "Esta email ya esta registrado",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogin.vue?vue&type=template&id=a755b01a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogin.vue?vue&type=template&id=a755b01a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  fill: "#000000",
  height: "32px",
  width: "32px",
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 481.5 481.5",
  "xml:space": "preserve"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g><g><path d=\"M0,240.7c0,7.5,6,13.5,13.5,13.5h326.1l-69.9,69.9c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l93-93 c5.3-5.3,5.3-13.8,0-19.1l-93-93c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l69.9,69.9h-326C6,227.2,0,233.2,0,240.7z\"></path> <path d=\"M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5 c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5 c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z\"></path></g></g></g>", 3);
var _hoisted_5 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
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

/***/ "./assets/components/SvgIcons/SvgLogin.vue":
/*!*************************************************!*\
  !*** ./assets/components/SvgIcons/SvgLogin.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgLogin_vue_vue_type_template_id_a755b01a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgLogin.vue?vue&type=template&id=a755b01a */ "./assets/components/SvgIcons/SvgLogin.vue?vue&type=template&id=a755b01a");
/* harmony import */ var _SvgLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgLogin.vue?vue&type=script&lang=js */ "./assets/components/SvgIcons/SvgLogin.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SvgLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SvgLogin_vue_vue_type_template_id_a755b01a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgLogin.vue"]])
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

/***/ "./assets/components/SvgIcons/SvgLogin.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgLogin.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgLogin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogin.vue?vue&type=script&lang=js");
 

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


/***/ }),

/***/ "./assets/components/SvgIcons/SvgLogin.vue?vue&type=template&id=a755b01a":
/*!*******************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgLogin.vue?vue&type=template&id=a755b01a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogin_vue_vue_type_template_id_a755b01a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogin_vue_vue_type_template_id_a755b01a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgLogin.vue?vue&type=template&id=a755b01a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogin.vue?vue&type=template&id=a755b01a");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vue_dist_vue_esm-bundler_js","vendors-node_modules_axios_lib_axios_js","assets_styles_app_css","assets_styles_app_css-assets_components_BusApp_TheHeader_vue-assets_components_Messages_Confi-a04abb","assets_components_BusApp_BikeTime_vue-assets_components_BusApp_BusTime_vue-assets_components_-6a595f"], () => (__webpack_exec__("./assets/js/AppBeforeLogin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCeUQ7QUFDVjtBQUNMOztBQUV6RCxDQUE2RztBQUM3RyxpQ0FBaUMsa0hBQWUsQ0FBQyxnRkFBTSxhQUFhLGtGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ5RDtBQUNWO0FBQ0w7O0FBRXpELENBQTZHO0FBQzdHLGlDQUFpQyxrSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnNEO0FBQ1Y7QUFDTDs7QUFFdEQsQ0FBNkc7QUFDN0csaUNBQWlDLGtIQUFlLENBQUMsNkVBQU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0Qm1MOzs7Ozs7Ozs7Ozs7Ozs7QUNBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0FMOzs7Ozs7Ozs7Ozs7Ozs7QUNBRzs7Ozs7Ozs7Ozs7Ozs7O0FDQU47Ozs7Ozs7Ozs7Ozs7OztBQ0FHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0FwcEJlZm9yZUxvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHBCZWZvcmUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVCZWZvcmVNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlTG9naW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVSZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXllUGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQXBwQmVmb3JlLnZ1ZT9mM2Q5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVCZWZvcmVNZW51LnZ1ZT8wMDJkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVMb2dpbi52dWU/OTU3ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlUmVnaXN0ZXIudnVlPzJhZWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXllUGFzc3dvcmQudnVlP2IyNWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3ZnSWNvbnMvU3ZnTG9naW4udnVlP2ExZWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcEJlZm9yZS52dWU/YjFhOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlQmVmb3JlTWVudS52dWU/NTkyOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlTG9naW4udnVlP2RmMjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVJlZ2lzdGVyLnZ1ZT80NjRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0V5ZVBhc3N3b3JkLnZ1ZT9jZjRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0xvZ2luLnZ1ZT9jNTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBCZWZvcmUgZnJvbSAnLi4vQXBwQmVmb3JlLnZ1ZSdcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnO1xud2luZG93Ll9fVlVFX09QVElPTlNfQVBJX18gPSB0cnVlO1xud2luZG93Ll9fVlVFX1BST0RfREVWVE9PTFNfXyA9IGZhbHNlO1xuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuXG5cbmNyZWF0ZUFwcChBcHBCZWZvcmUpLm1vdW50KCcjYmVmb3JlJykiLCI8dGVtcGxhdGU+XHJcbiAgPHRoZS1oZWFkZXI+PC90aGUtaGVhZGVyPlxyXG4gIDx0aGUtYmVmb3JlLW1lbnUgQGNoYW5nZS10YWI9XCJjaGFuZ2VUYWJcIj48L3RoZS1iZWZvcmUtbWVudT5cclxuICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04IG1kOm10LTE2XCI+XHJcbiAgICA8Y29tcG9uZW50IDppcz1cInNlbGVjdGVkVGFiXCI+PC9jb21wb25lbnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IFRoZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9UaGVIZWFkZXIudnVlXCI7XHJcbmltcG9ydCBiaWtlVGltZSBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9CaWtlVGltZS52dWVcIjtcclxuaW1wb3J0IEJ1c1RpbWUgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvQnVzVGltZS52dWVcIjtcclxuaW1wb3J0IFRoZUJlZm9yZU1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvVGhlQmVmb3JlTWVudS52dWVcIjtcclxuaW1wb3J0IFRoZUxvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvQnVzQXBwL1RoZUxvZ2luLnZ1ZVwiO1xyXG5pbXBvcnQgVGhlUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvVGhlUmVnaXN0ZXIudnVlXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9NZXNzYWdlcy9FcnJvck1lc3NhZ2UudnVlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7VGhlQmVmb3JlTWVudSwgQnVzVGltZSxUaGVMb2dpbiwgIFRoZUhlYWRlciwgVGhlUmVnaXN0ZXIsIGJpa2VUaW1lLEVycm9yTWVzc2FnZX0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRUYWI6ICdidXMtdGltZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNob3dTZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XHJcblxyXG4gICAgfSxcclxuICAgIGNoYW5nZVRhYih0YWIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFRhYik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XG4gIDxuYXYgY2xhc3M9XCJiZy1ncmF5LTEwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTQgcHktMyBtZDpweS00IG1kOmhpZGRlblwiPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2sgXCIgQGNsaWNrPVwic2hvd01vYmlsZU1lbnUgPSAhc2hvd01vYmlsZU1lbnVcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cInctNiBoLTYgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LXNob3c9XCIhc2hvd01vYmlsZU1lbnVcIiBjbGFzcz1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSByZWxhdGl2ZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JnLWdyYXktNTAwJzogaXNUYWJBY3RpdmUoJ2J1cy10aW1lJyksICdiZy1ncmF5LTQwMCc6ICFpc1RhYkFjdGl2ZSgnYnVzLXRpbWUnKSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYk1vYmlsZSgnYnVzLXRpbWUnKVwiXG4gICAgICAgID5cbiAgICAgICAgICBDb25zdWx0YSB0dSBwYXJhZGEgZGUgYXV0b2J1czxzdmctYnVzIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBtdC0xIG1yLTFcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJtci0yICBob3ZlcjpiZy1ncmF5LTUwMCBmbGV4LTEgdGV4dC13aGl0ZSBmb250LWJvbGQgcm91bmRlZC1tZCBweC00IHB5LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHJlbGF0aXZlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnYmctZ3JheS01MDAnOiBpc1RhYkFjdGl2ZSgndGhlLWxvZ2luJyksICdiZy1ncmF5LTQwMCc6ICFpc1RhYkFjdGl2ZSgndGhlLWxvZ2luJykgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUYWJNb2JpbGUoJ3RoZS1sb2dpbicpXCJcbiAgICAgICAgPlxuICAgICAgICAgIEluaWNpYXIgc2VzaW9uXG4gICAgICAgICAgPHN2Zy1sb2dpbiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgbXQtMSBtci0xXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSByZWxhdGl2ZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JnLWdyYXktNTAwJzogaXNUYWJBY3RpdmUoJ3RoZS1yZWdpc3RlcicpLCAnYmctZ3JheS00MDAnOiAhaXNUYWJBY3RpdmUoJ3RoZS1yZWdpc3RlcicpIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiTW9iaWxlKCd0aGUtcmVnaXN0ZXInKVwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RyYXRlXG4gICAgICAgICAgPHN2Zy11c2VyIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBtdC0xIG1yLTFcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IHYtc2hvdz1cInNob3dNb2JpbGVNZW51XCIgY2xhc3M9XCJtZDpoaWRkZW5cIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInB4LTIgcHQtMiBwYi0zXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiKCdidXMtdGltZScpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPkNvbnN1bHRhIHR1IHBhcmFkYSBkZSBhdXRvYnVzPC9zcGFuPlxuICAgICAgICAgIDxzdmctYnVzIGNsYXNzPVwibWwtMiBoLTUgdy01XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiKCd0aGUtbG9naW4nKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5JbmljaWFyIHNlc2lvbjwvc3Bhbj5cbiAgICAgICAgICA8c3ZnLWxvZ2luIGNsYXNzPVwibWwtMiBoLTUgdy01XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiKCd0aGUtcmVnaXN0ZXInKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5SZWdpc3RyYXRlPC9zcGFuPlxuICAgICAgICAgIDxzdmctdXNlciBjbGFzcz1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cblxuXG4gICAgPHNjcmlwdD5cbmltcG9ydCBTdmdCdXMgZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0J1cy52dWVcIjtcbmltcG9ydCBTdmdTdGFyIGZyb20gXCIuLi9TdmdJY29ucy9TdmdTdGFyRW1wdHkudnVlXCI7XG5pbXBvcnQgU3ZnRm9ydW0gZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0ZvcnVtLnZ1ZVwiO1xuaW1wb3J0IFN2Z1VzZXIgZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z1VzZXIudnVlXCI7XG5pbXBvcnQgU3ZnTG9naW4gZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0xvZ2luLnZ1ZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnc3RhdHVzJ10sXG4gIGNvbXBvbmVudHM6IHtTdmdMb2dpbiwgU3ZnVXNlciwgU3ZnRm9ydW0sIFN2Z1N0YXIsIFN2Z0J1c30sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2VUYWIodGFiKSB7XG4gICAgICB0aGlzLnNob3dNb2JpbGVNZW51ID0gIXRoaXMuc2hvd01vYmlsZU1lbnVcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZS10YWInLCB0YWIpXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICB9LFxuICAgIGNoYW5nZVRhYk1vYmlsZSh0YWIpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZS10YWInLCB0YWIpXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dNb2JpbGVNZW51OiBmYWxzZSxcbiAgICAgIGFjdGl2ZVRhYjogbnVsbCxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNUYWJBY3RpdmUoKSB7XG4gICAgICByZXR1cm4gKHRhYikgPT4gdGhpcy5hY3RpdmVUYWIgPT09IHRhYjtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICA8aDIgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtci0zIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIHRleHQtM3hsXCI+SW5pY2lhciBzZXNpw7NuPC9oMj5cbiAgICA8ZGl2IHYtaWY9XCIhZm9yZ290UGFzc3dvcmRcIiBjbGFzcz1cIm10LTUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC00IGJnLXdoaXRlXCI+XG4gICAgICA8Zm9ybSBhY3Rpb249XCIvaG9tZVwiIGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTcwMCBmb250LWJvbGRcIiBmb3I9XCJfdXNlcm5hbWVcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIl91c2VybmFtZVwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweS0yIHB4LTMgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgbmFtZT1cIl91c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS03MDAgZm9udC1ib2xkXCIgcmVmPVwicGFzc3dvcmRcIiBodG1sRm9yPVwiX3Bhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJfcGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiA6dHlwZT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB5LTIgcHgtMyByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgbmFtZT1cIl9wYXNzd29yZFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZFwiIGZvcj1cInJlbWVtYmVyXCI+UmVtZW1iZXIgTWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJyZW1lbWJlclwiIHYtbW9kZWw9XCJyZW1lbWJlck1lXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrYm94IGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgY29sLXNwYW4tMlwiXG4gICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJJbmljaWFyIHNlc2nDs25cIiBAY2xpY2s9XCJyZW1lbWJlclwiPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtM1wiXG4gICAgICAgICAgICAgIEBjbGljaz1cImZvcmdvdFBhc3N3b3JkPXRydWVcIj5PbHZpZGFzdGUgbGEgY29udHJhc2XDsWE/PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm10LTUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC00IGJnLXdoaXRlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJmb3Jnb3RQYXNzd29yZD1mYWxzZVwiPkNhbmNlbGFyPC9idXR0b24+XG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzZW5kRm9yZ290UGFzc3dvcmRcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIG10LTNcIj5cbiAgICAgICAgPGlucHV0IGlkPVwiXCIgcmVmPVwiZm9yZ290RW1haWxcIiBuYW1lPVwiXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1emNhIHN1IGVtYWlsXCIgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweS0yIHB4LTMgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIHctZnVsbFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdi1pZj1cIiFlbWFpbFNlbmRpbmdcIiBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG1sLTNcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VuZEZvcmdvdFBhc3N3b3JkXCI+XG4gICAgICAgICAgICBFbnZpYXIgZW1haWwgZGUgY29uZmlybWFjacOzblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJlbWFpbFNlbmRpbmdcIiBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG1sLTNcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImFuaW1hdGUtc3BpbiBteC1hdXRvIGgtMTAgdy0xMCB0ZXh0LXdoaXRlIGlubGluZS1ibG9jayBhbGlnbi1taWRkbGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cIm9wYWNpdHktNzVcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI4XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPjwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwib3BhY2l0eS0yNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RyYW5zaXRpb24+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDx0ZWxlcG9ydCB0bz1cImJvZHlcIj5cbiAgICAgIDxlcnJvci1tZXNzYWdlIHYtaWY9XCJzaG93UmVzdWx0XCIgOm1lc3NhZ2U9XCJ0aGlzLnJlc3VsdE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgQGNsb3NlLWVycm9yPVwic2hvd1Jlc3VsdD1mYWxzZSx0aGlzLmZvcmdvdFBhc3N3b3JkID0gZmFsc2VcIi8+XG4gICAgPC90ZWxlcG9ydD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3ZnRXllT3BlbmVkIGZyb20gXCIuLi9TdmdJY29ucy9TdmdFeWVPcGVuZWQudnVlXCI7XG5pbXBvcnQgU3ZnRXllQ2xvc2VkIGZyb20gXCIuLi9TdmdJY29ucy9TdmdFeWVDbG9zZWQudnVlXCI7XG5pbXBvcnQgRXllUGFzc3dvcmQgZnJvbSBcIi4uL0V5ZVBhc3N3b3JkLnZ1ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi4vTWVzc2FnZXMvRXJyb3JNZXNzYWdlLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtFcnJvck1lc3NhZ2UsIEV5ZVBhc3N3b3JkLCBTdmdFeWVPcGVuZWQsIFN2Z0V5ZUNsb3NlZH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHJlbWVtYmVyTWU6IGZhbHNlLFxuICAgICAgc2hvd1Bhc3N3b3JkOiBmYWxzZSxcbiAgICAgIGZvcmdvdFBhc3N3b3JkOiBmYWxzZSxcbiAgICAgIHNob3dSZXN1bHQ6IGZhbHNlLFxuICAgICAgcmVzdWx0TWVzc2FnZTogbnVsbCxcbiAgICAgIGVtYWlsU2VuZGluZzpudWxsXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpXG4gICAgbGV0IHBhc3N3b3JkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJylcbiAgICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZVxuICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkXG4gICAgICB0aGlzLnJlbWVtYmVyTWUgPSB0cnVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVtZW1iZXIoKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGUgaGFzIGRhZG8gY2xpY2sgYWwgYm90b24geSBlc3RveSBndWFyZGFkbmRvIHR1cyBkYXRvcycpXG4gICAgICBpZiAodGhpcy5yZW1lbWJlck1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb3MgZGF0b3MgeWEgZXhpc3RlbiB5IGxvcyBlc3RveSBzYWNhbmRvICcpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHRoaXMudXNlcm5hbWUpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHRoaXMucGFzc3dvcmQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gcXVpZXJlIHF1ZSB0ZSByZWN1ZXJlZGUgYXNpIHF1ZSBlc3RveXUgYm9ycmFuZG8gbG9zIGRhdG9zJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJuYW1lJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Bhc3N3b3JkJylcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICAgIH0sXG4gICAgYXN5bmMgc2VuZEZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgICAgaWYgKHRoaXMuJHJlZnMuZm9yZ290RW1haWwudmFsdWUudHJpbSgpICE9ICcnICYmIGVtYWlsUmVnZXgudGVzdCh0aGlzLiRyZWZzLmZvcmdvdEVtYWlsLnZhbHVlKSkge1xuICAgICAgICB0aGlzLmVtYWlsU2VuZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2ZvcmdvdFBhc3N3b3JkJywge1xuICAgICAgICAgICdlbWFpbCc6IHRoaXMuJHJlZnMuZm9yZ290RW1haWwudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5lbWFpbFNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9ICdFc3RlIGVtYWlsIG5vIGV4aXN0ZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSAnU2UgbGUgaGUgZW52aWFkbyB1biBjb3JyZW8gYSAnICsgdGhpcy4kcmVmcy5mb3Jnb3RFbWFpbC52YWx1ZVxuICAgICAgICB9XG5cblxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9ICdQb3IgZmF2b3IgaW50cm9kdXpjYSB1biBlbWFpbCB2YWxpZG8nXG5cbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd1Jlc3VsdCA9IHRydWVcblxuXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxuICAgIDxoMiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1yLTMgdGV4dC1ncmF5LTcwMCBmb250LWJvbGQgdGV4dC0zeGxcIj5SZWdpc3RyYXRlPC9oMj5cbiAgICA8Zm9ybSBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgbXQtNSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTQgYmctd2hpdGVcIiBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiPlxuXG4gICAgICA8bGFiZWwgIGZvcj1cInVzZXJuYW1lXCIgY2xhc3M9XCJmbGV4LXJvdyBqdXN0aWZ5LWVuZCBtci0zIHRleHQtZ3JheS03MDAgZm9udC1ib2xkXCI+Q29ycmVvIGVsZWN0csOzbmljbzwvbGFiZWw+XG4gICAgICA8aW5wdXQgIGlkPVwidXNlcm5hbWVcIiB2LW1vZGVsPVwidXNlcm5hbWVcIiBjbGFzcz1cImZsZXgtcm93IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cImVtYWlsXCI+XG5cblxuICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmbGV4LXJvdyBqdXN0aWZ5LWVuZCBtci0zIHRleHQtZ3JheS03MDAgZm9udC1ib2xkXCI+Q29udHJhc2XDsWE8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiA6dHlwZT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIiBjbGFzcz1cImZsZXgtcm93IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgbmFtZT1cInBhc3N3b3JkXCI+XG5cblxuXG4gICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRSZXBlYXRcIiBjbGFzcz1cImZsZXgtcm93IGp1c3RpZnktZW5kIG1yLTMgdGV4dC1ncmF5LTcwMCBmb250LWJvbGRcIj5SZXBpdGEgc3UgY29udHJhc2XDsWE8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRSZXBlYXRcIiByZWY9XCJwYXNzd29yZFJlcGVhdFwiIHYtbW9kZWw9XCJwYXNzd29yZFJlcGVhdFwiIDp0eXBlPVwic2hvd1Bhc3N3b3JkUmVwZWF0ID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiIGNsYXNzPVwiZmxleC1yb3cgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIiBuYW1lPVwicGFzc3dvcmRSZXBlYXRcIj5cblxuXG4gICAgICA8YnV0dG9uIHYtaWY9XCJzYW1lUGFzc3dvcmRcIiBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGNvbC1zcGFuLTIgcmVsYXRpdmUgaC0xMFwiPlxuICAgICAgICA8c3BhbiB2LWlmPVwiIXJlZ2lzdGVyaW5nXCI+UmVnaXN0cmFyc2U8L3NwYW4+XG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XG4gICAgPHNwYW4gdi1pZj1cInJlZ2lzdGVyaW5nXCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8c3ZnIGNsYXNzPVwiYW5pbWF0ZS1zcGluIGgtNSB3LTUgdGV4dC13aGl0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPGNpcmNsZSBjbGFzcz1cIm9wYWNpdHktMjVcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjRcIj48L2NpcmNsZT5cbiAgICAgICAgPHBhdGggY2xhc3M9XCJvcGFjaXR5LTc1XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6XCI+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICA8L2J1dHRvbj5cblxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gIDx0ZWxlcG9ydCB0bz1cImJvZHlcIj5cbiAgICA8ZXJyb3ItbWVzc2FnZSB2LWlmPVwic3RhdHVzXCIgbWVzc2FnZT1cIlNlIGxlIGhhIGVudmlhZG8gdW4gY29ycmVvIHBhcmEgcXVlIHZlcmlmaXF1ZSBzdSBjdWVudGFcIlxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1lcnJvcj1cInN0YXR1cz1mYWxzZVwiLz5cbiAgICA8ZXJyb3ItbWVzc2FnZSB2LWlmPVwiIWV4Y2VwdGlvblwiIG1lc3NhZ2U9XCJFc3RhIGVtYWlsIHlhIGVzdGEgcmVnaXN0cmFkb1wiXG4gICAgICAgICAgICAgICAgICAgQGNsb3NlLWVycm9yPVwiZXhjZXB0aW9uPXRydWVcIi8+XG5cbiAgPC90ZWxlcG9ydD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBFeWVQYXNzd29yZCBmcm9tIFwiLi4vRXllUGFzc3dvcmQudnVlXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9NZXNzYWdlcy9FcnJvck1lc3NhZ2UudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtFeWVQYXNzd29yZCxFcnJvck1lc3NhZ2V9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZFJlcGVhdDogJycsXG4gICAgICBzaG93UGFzc3dvcmQ6IGZhbHNlLFxuICAgICAgc2hvd1Bhc3N3b3JkUmVwZWF0OiBmYWxzZSxcbiAgICAgIHN0YXR1czpmYWxzZSxcbiAgICAgIHJlZ2lzdGVyaW5nOm51bGwsXG4gICAgICBleGNlcHRpb246dHJ1ZVxuXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNhbWVQYXNzd29yZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlc3RveSByZXZpc2FuZG8nKVxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VybmFtZSlcbiAgICAgIGlmICh0aGlzLnBhc3N3b3JkID09IHRoaXMucGFzc3dvcmRSZXBlYXRcbiAgICAgICAgICAmJiB0aGlzLnBhc3N3b3JkICE9ICcnICYmIHRoaXMucGFzc3dvcmRSZXBlYXQgIT0gJydcblxuICAgICAgICAgICYmIHRoaXMudXNlcm5hbWUgIT0gJycgJiYgL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdCh0aGlzLnVzZXJuYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgcmVnaXN0ZXIoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW52aWFuZG8nKVxuICAgICAgdGhpcy5yZWdpc3RlcmluZz10cnVlXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9yZWdpc3RlcicsIHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICBjb25maXJtZWRTdGF0dXM6IDFcbiAgICAgIH0pXG4gICAgICB0aGlzLnJlZ2lzdGVyaW5nPWZhbHNlXG4gICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2Upe1xuXG4gICAgICAgIHRoaXMuc3RhdHVzPXJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uPXJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgfVxuICAgICAgLy90aGlzLmVycm9yPXJlc3BvbnNlLmRhdGEubWVzc2FnZVxuXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHlcIj5cbiAgICA8c3ZnLWV5ZS1vcGVuZWQgdi1pZj1cInNob3dQYXNzd29yZFwiLz5cbiAgICA8c3ZnLWV5ZS1jbG9zZWQgdi1lbHNlIC8+XG4gIDwvYnV0dG9uPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN2Z0V5ZU9wZW5lZCBmcm9tIFwiLi9TdmdJY29ucy9TdmdFeWVPcGVuZWQudnVlXCI7XG5pbXBvcnQgU3ZnRXllQ2xvc2VkIGZyb20gXCIuL1N2Z0ljb25zL1N2Z0V5ZUNsb3NlZC52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1N2Z0V5ZU9wZW5lZCwgU3ZnRXllQ2xvc2VkfSxcbiAgZGF0YSgpe1xuICAgIHJldHVybntcbiAgICAgIHNob3dQYXNzd29yZDpmYWxzZVxuICAgIH1cbiAgfSxcbm1ldGhvZHM6e1xuICB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zaG93UGFzc3dvcmQgPSAhdGhpcy5zaG93UGFzc3dvcmQ7XG4gICAgdGhpcy4kZW1pdCgnY2hhbmdlLXBhc3N3b3JkJylcbiAgfVxufVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMzJweFwiIHdpZHRoPVwiMzJweFwiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDQ4MS41IDQ4MS41XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPGc+IDxnPiA8cGF0aCBkPVwiTTAsMjQwLjdjMCw3LjUsNiwxMy41LDEzLjUsMTMuNWgzMjYuMWwtNjkuOSw2OS45Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsOTMtOTMgYzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC05My05M2MtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xbDY5LjksNjkuOWgtMzI2QzYsMjI3LjIsMCwyMzMuMiwwLDI0MC43elwiPjwvcGF0aD4gPHBhdGggZD1cIk0zODIuNCwwSDk5QzQ0LjQsMCwwLDQ0LjQsMCw5OXY1OC4yYzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNVY5OWMwLTM5LjcsMzIuMy03Miw3Mi03MmgyODMuNSBjMzkuNywwLDcyLDMyLjMsNzIsNzJ2MjgzLjVjMCwzOS43LTMyLjMsNzItNzIsNzJIOTljLTM5LjcsMC03Mi0zMi4zLTcyLTcyVjMyNWMwLTcuNS02LTEzLjUtMTMuNS0xMy41UzAsMzE3LjUsMCwzMjV2NTcuNSBjMCw1NC42LDQ0LjQsOTksOTksOTloMjgzLjVjNTQuNiwwLDk5LTQ0LjQsOTktOTlWOTlDNDgxLjQsNDQuNCw0MzcsMCwzODIuNCwwelwiPjwvcGF0aD4gPC9nPiA8L2c+IDwvZz48L3N2Zz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3ZnTG9naW5cIlxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwQmVmb3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMTI0OTIzY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcEJlZm9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwQmVmb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvQXBwQmVmb3JlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJlMTI0OTIzY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2UxMjQ5MjNjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZTEyNDkyM2MnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcEJlZm9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTEyNDkyM2NcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZTEyNDkyM2MnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RoZUJlZm9yZU1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYwMTMyY2M4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlQmVmb3JlTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlQmVmb3JlTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZUJlZm9yZU1lbnUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImYwMTMyY2M4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZjAxMzJjYzgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdmMDEzMmNjOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhlQmVmb3JlTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjAxMzJjYzhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZjAxMzJjYzgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RoZUxvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMzAwNTU4YVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZUxvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZUxvZ2luLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJhMzAwNTU4YVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2EzMDA1NThhJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnYTMwMDU1OGEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZUxvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMzAwNTU4YVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdhMzAwNTU4YScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVGhlUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjNWZmNWMxXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlUmVnaXN0ZXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZjNWZmNWMxXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmM1ZmY1YzEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2YzVmZjVjMScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhlUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjNWZmNWMxXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzZjNWZmNWMxJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9FeWVQYXNzd29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDA5NGJmN2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeWVQYXNzd29yZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL0V5ZVBhc3N3b3JkLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwMDk0YmY3ZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzAwOTRiZjdlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDA5NGJmN2UnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V5ZVBhc3N3b3JkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMDk0YmY3ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwMDk0YmY3ZScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vU3ZnTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3NTViMDFhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3ZnTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N2Z0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdMb2dpbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiYTc1NWIwMWFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdhNzU1YjAxYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2E3NTViMDFhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdmdMb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc1NWIwMWFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignYTc1NWIwMWEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcEJlZm9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHBCZWZvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVCZWZvcmVNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZUJlZm9yZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZVJlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRXllUGFzc3dvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdMb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJBcHBCZWZvcmUiLCJ3aW5kb3ciLCJfX1ZVRV9PUFRJT05TX0FQSV9fIiwiX19WVUVfUFJPRF9ERVZUT09MU19fIiwiY3JlYXRlQXBwIiwibW91bnQiLCJUaGVIZWFkZXIiLCJiaWtlVGltZSIsIkJ1c1RpbWUiLCJUaGVCZWZvcmVNZW51IiwiVGhlTG9naW4iLCJUaGVSZWdpc3RlciIsIkVycm9yTWVzc2FnZSIsImNvbXBvbmVudHMiLCJkYXRhIiwic2hvdyIsInNlbGVjdGVkVGFiIiwibWV0aG9kcyIsInNob3dTZWFyY2giLCJjaGFuZ2VUYWIiLCJ0YWIiLCJjb25zb2xlIiwibG9nIiwiU3ZnQnVzIiwiU3ZnU3RhciIsIlN2Z0ZvcnVtIiwiU3ZnVXNlciIsIlN2Z0xvZ2luIiwicHJvcHMiLCJzaG93TW9iaWxlTWVudSIsIiRlbWl0IiwiYWN0aXZlVGFiIiwiY2hhbmdlVGFiTW9iaWxlIiwiY29tcHV0ZWQiLCJpc1RhYkFjdGl2ZSIsIl90aGlzIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiU3ZnRXllT3BlbmVkIiwiU3ZnRXllQ2xvc2VkIiwiRXllUGFzc3dvcmQiLCJheGlvcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZW1lbWJlck1lIiwic2hvd1Bhc3N3b3JkIiwiZm9yZ290UGFzc3dvcmQiLCJzaG93UmVzdWx0IiwicmVzdWx0TWVzc2FnZSIsImVtYWlsU2VuZGluZyIsIm1vdW50ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtZW1iZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInNlbmRGb3Jnb3RQYXNzd29yZCIsIl9jYWxsZWUiLCJlbWFpbFJlZ2V4IiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIiRyZWZzIiwiZm9yZ290RW1haWwiLCJ0cmltIiwidGVzdCIsInBvc3QiLCJwYXNzd29yZFJlcGVhdCIsInNob3dQYXNzd29yZFJlcGVhdCIsInN0YXR1cyIsInJlZ2lzdGVyaW5nIiwic2FtZVBhc3N3b3JkIiwicmVnaXN0ZXIiLCJjb25maXJtZWRTdGF0dXMiLCJtZXNzYWdlIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF90aGVfaGVhZGVyIiwiX2NvbXBvbmVudF90aGVfYmVmb3JlX21lbnUiLCJvbkNoYW5nZVRhYiIsIiRvcHRpb25zIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlQmxvY2siLCJfcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQiLCIkZGF0YSIsInZpZXdCb3giLCJkIiwiX2hvaXN0ZWRfMyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8yIiwib25DbGljayIsIl9jYWNoZSIsIiRldmVudCIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NvbXBvbmVudF9zdmdfYnVzIiwiX2NvbXBvbmVudF9zdmdfbG9naW4iLCJfY29tcG9uZW50X3N2Z191c2VyIiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsImFjdGlvbiIsInJlZiIsImh0bWxGb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJ4bWxucyIsImZpbGwiLCJjeCIsImN5IiwiciIsInN0cm9rZSIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfNCIsIm9uU3VibWl0IiwiX3dpdGhNb2RpZmllcnMiLCJfVHJhbnNpdGlvbiIsIl9ob2lzdGVkXzEzIiwiX1RlbGVwb3J0IiwidG8iLCJfY29tcG9uZW50X2Vycm9yX21lc3NhZ2UiLCJvbkNsb3NlRXJyb3IiLCJfY29tcG9uZW50X3N2Z19leWVfb3BlbmVkIiwiX2NvbXBvbmVudF9zdmdfZXllX2Nsb3NlZCIsImhlaWdodCIsIndpZHRoIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=