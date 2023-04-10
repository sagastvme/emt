"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.vue */ "./assets/App.vue");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;
(0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).mount('#app');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BusApp_TheHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/BusApp/TheHeader.vue */ "./assets/components/BusApp/TheHeader.vue");
/* harmony import */ var _components_BusApp_TheMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BusApp/TheMenu.vue */ "./assets/components/BusApp/TheMenu.vue");
/* harmony import */ var _components_BusApp_BusTime_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BusApp/BusTime.vue */ "./assets/components/BusApp/BusTime.vue");
/* harmony import */ var _components_BusApp_TheUserData_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BusApp/TheUserData.vue */ "./assets/components/BusApp/TheUserData.vue");
/* harmony import */ var _components_BusApp_ThePlans_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BusApp/ThePlans.vue */ "./assets/components/BusApp/ThePlans.vue");
/* harmony import */ var _components_BusApp_TransportPrices_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BusApp/TransportPrices.vue */ "./assets/components/BusApp/TransportPrices.vue");
/* harmony import */ var _components_BusApp_BikeTime_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BusApp/BikeTime.vue */ "./assets/components/BusApp/BikeTime.vue");
/* harmony import */ var _components_BusApp_FavouriteStops_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BusApp/FavouriteStops.vue */ "./assets/components/BusApp/FavouriteStops.vue");
/* harmony import */ var _components_BusApp_MostVisited_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BusApp/MostVisited.vue */ "./assets/components/BusApp/MostVisited.vue");
/* harmony import */ var _components_Forum_ForumHomePage_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Forum/ForumHomePage.vue */ "./assets/components/Forum/ForumHomePage.vue");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BusTime: _components_BusApp_BusTime_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheMenu: _components_BusApp_TheMenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheHeader: _components_BusApp_TheHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheUserData: _components_BusApp_TheUserData_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ThePlans: _components_BusApp_ThePlans_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TransportPrices: _components_BusApp_TransportPrices_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BikeTime: _components_BusApp_BikeTime_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    FavouriteStops: _components_BusApp_FavouriteStops_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    MostVisited: _components_BusApp_MostVisited_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ForumHomePage: _components_Forum_ForumHomePage_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      selectedTab: 'bus-time'
    };
  },
  methods: {
    changeTab: function changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/FavouriteStops.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/FavouriteStops.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _SvgIcons_SvgDelete_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SvgIcons/SvgDelete.vue */ "./assets/components/SvgIcons/SvgDelete.vue");
/* harmony import */ var _Messages_ConfirmMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Messages/ConfirmMessage.vue */ "./assets/components/Messages/ConfirmMessage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ConfirmMessage: _Messages_ConfirmMessage_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SvgDelete: _SvgIcons_SvgDelete_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dataExists: null,
      stopsArray: [],
      askConfirm: false
    };
  },
  mounted: function mounted() {
    this.getFavouriteStops();
  },
  methods: {
    getFavouriteStops: function getFavouriteStops() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('/askForUserFavourites');
            case 2:
              response = _context.sent;
              console.log(response.data.stopsArray);
              if (response.data.stopsArray !== 'Empty') {
                _this.stopsArray = response.data.stopsArray;
                console.log(response.data.stopsArray);
                _this.dataExists = true;
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    confirmDeleteStop: function confirmDeleteStop(stopId) {
      this.askConfirm = true;
      this.confirmStopId = stopId;
    },
    deleteStop: function deleteStop(stop) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              delete _this2.stopsArray[stop];
              if (Object.keys(_this2.stopsArray).length == 0) {
                _this2.dataExists = false;
              }
              console.log(stop);
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/removeFavourite', {
                'busCode': stop
              });
            case 5:
              response = _context2.sent;
              _this2.askConfirm = false;
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/MostVisited.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/MostVisited.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getMostVisited();
  },
  data: function data() {
    return {
      stopsArray: []
    };
  },
  methods: {
    getMostVisited: function getMostVisited() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('lo llamo');
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/getMostVisited');
            case 3:
              response = _context.sent;
              _this.stopsArray = response.data.stopsArray;
              console.log(response.data.stopsArray);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheMenu.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheMenu.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgIcons_SvgBus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SvgIcons/SvgBus.vue */ "./assets/components/SvgIcons/SvgBus.vue");
/* harmony import */ var _SvgIcons_SvgStarEmpty_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SvgIcons/SvgStarEmpty.vue */ "./assets/components/SvgIcons/SvgStarEmpty.vue");
/* harmony import */ var _SvgIcons_SvgForum_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SvgIcons/SvgForum.vue */ "./assets/components/SvgIcons/SvgForum.vue");
/* harmony import */ var _SvgIcons_SvgUser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SvgIcons/SvgUser.vue */ "./assets/components/SvgIcons/SvgUser.vue");
/* harmony import */ var _SvgIcons_SvgLogout_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SvgIcons/SvgLogout.vue */ "./assets/components/SvgIcons/SvgLogout.vue");
/* harmony import */ var _SvgIcons_SvgMap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SvgIcons/SvgMap.vue */ "./assets/components/SvgIcons/SvgMap.vue");
/* harmony import */ var _SvgIcons_SvgPrice_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SvgIcons/SvgPrice.vue */ "./assets/components/SvgIcons/SvgPrice.vue");
/* harmony import */ var _SvgIcons_SvgBike_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SvgIcons/SvgBike.vue */ "./assets/components/SvgIcons/SvgBike.vue");
/* harmony import */ var _SvgIcons_SvgTrophy_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SvgIcons/SvgTrophy.vue */ "./assets/components/SvgIcons/SvgTrophy.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SvgTrophy: _SvgIcons_SvgTrophy_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    SvgBike: _SvgIcons_SvgBike_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    SvgPrice: _SvgIcons_SvgPrice_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    SvgMap: _SvgIcons_SvgMap_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SvgLogout: _SvgIcons_SvgLogout_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/ThePlans.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/ThePlans.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.askForImages();
  },
  methods: {
    askForImages: function askForImages() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/plans').then(function (response) {
                console.log(response);
                _this.plans = response.data;
                console.log(_this.plans);
              })["catch"](function (error) {
                console.error(error);
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    viewImage: function viewImage(plan) {
      window.location.href = plan;
    }
  },
  data: function data() {
    return {
      plans: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheUserData.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheUserData.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
/* harmony import */ var _Messages_ConfirmMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Messages/ConfirmMessage.vue */ "./assets/components/Messages/ConfirmMessage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ConfirmMessage: _Messages_ConfirmMessage_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ErrorMessage: _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      myData: false,
      username: '',
      profilePic: '',
      passInput: '',
      middleStep: false,
      showErrorMessage: false,
      change: false,
      lastStep: false,
      "final": true,
      checkPassword: '',
      passwordRepeat: '',
      success: false,
      newPicture: '',
      wrongFilePic: false,
      deleteAccount: false,
      secondStepDeleteAccount: false,
      finalDeleteMessage: false,
      posts: null,
      deletedPost: null,
      deletedPostId: null,
      postsPublished: null,
      dateCreated: null,
      role: null
    };
  },
  computed: {
    samePassword: function samePassword() {
      console.log(this.checkPassword, this.passwordRepeat);
      if (this.checkPassword == this.passwordRepeat && this.checkPassword != '' && this.passwordRepeat != '') {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function mounted() {
    this.fetchData();
    this.getPostsPublished();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('/userData').then(function (response) {
        console.log(response.data);

        // Set data properties
        _this.username = response.data.username;
        _this.profilePic = response.data.profilePicture;
        _this.postsPublished = response.data.postsPublished;
        _this.dateCreated = response.data.dateCreated;
        _this.role = response.data.role;
        _this.myData = true;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    deleteUserCommit: function deleteUserCommit() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('lo quiere borrar');
              _this2.posts = _this2.posts.filter(function (post) {
                return post.id !== _this2.deletedPostId;
              });
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/deletePost', {
                id: _this2.deletedPostId
              });
            case 4:
              response = _context.sent;
              console.log(response);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    deletePost: function deletePost(post) {
      console.log(post);
      this.deletedPost = post.title;
      this.deletedPostId = post.id;
      console.log(this.deletedPlan);
    },
    getPostsPublished: function getPostsPublished() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/getPostsPublishedByUser');
            case 2:
              response = _context2.sent;
              console.log(response);
              _this3.posts = response.data.posts;
              console.log(response.data.posts);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    changePassword: function changePassword() {
      this.change = true;
      this["final"] = true;
    },
    secondStep: function secondStep() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this4.passInput = _this4.$refs.passInput.value;
              console.log(_this4.passInput);
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/checkPassword', {
                'password': _this4.passInput
              });
            case 4:
              response = _context3.sent;
              result = response.data.isPasswordCorrect;
              if (result) {
                console.log('cbum');
                _this4.lastStep = true;
                _this4["final"] = false;
                console.log(_this4.middleStep);
              } else {
                _this4.showErrorMessage = true;
                _this4.$refs.passInput.value = '';
              }
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    changeFinalPassword: function changeFinalPassword() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/changeP', {
                password: _this5.checkPassword
              });
            case 2:
              response = _context4.sent;
              console.log(response.data);
              _this5.success = true;
              _this5.change = false;
              _this5.lastStep = false;
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    changePicture: function changePicture() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var fileName, formData, response, success;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              fileName = _this6.$refs.newPicture.files[0].type;
              console.log(fileName);
              if (!(fileName == 'image/jpeg' || fileName == 'image/png' || fileName == 'image/gif' || fileName == 'image/webp')) {
                _context5.next = 13;
                break;
              }
              formData = new FormData();
              formData.append('profilePic', _this6.$refs.newPicture.files[0]);
              _context5.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/profile', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 7:
              response = _context5.sent;
              success = response.data.success;
              console.log(response);
              if (success) {
                console.log(response.data);
                _this6.profilePic = response.data.newPicture + '?t=' + new Date().getTime();
              }
              _context5.next = 14;
              break;
            case 13:
              _this6.wrongFilePic = true;
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    deleteAccountMethod: function deleteAccountMethod() {
      console.log(0);
      this.deleteAccount = true;
    },
    checkDeleteAccountPassword: function checkDeleteAccountPassword() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var response, result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this7.passInput = _this7.$refs.deletePassword.value;
              console.log(_this7.passInput);
              _context6.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/checkPassword', {
                'password': _this7.passInput
              });
            case 4:
              response = _context6.sent;
              result = response.data.isPasswordCorrect;
              if (result) {
                console.log(0);
                _this7.secondStepDeleteAccount = true;
              } else {
                _this7.showErrorMessage = true;
                _this7.$refs.deletePassword.value = '';
              }
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    deleteAccountLasStep: function deleteAccountLasStep() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this8.finalDeleteMessage = true;
              console.log('Falta por hacer el enviar correo desde el server y toda la logica restante');
              _context7.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/sendDeleteEmail');
            case 4:
              response = _context7.sent;
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TransportPrices.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TransportPrices.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TransportPrices",
  mounted: function mounted() {
    this.loadPlans();
  },
  methods: {
    loadPlans: function loadPlans() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/loadAllPlans');
            case 2:
              response = _context.sent;
              console.log(response);
              _this.plans = response.data.plans;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  data: function data() {
    return {
      plans: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumCategories.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumCategories.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ForumCategories",
  props: ['categories'],
  data: function data() {
    return {
      showCategories: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumHomePage.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumHomePage.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumMenu.vue */ "./assets/components/Forum/ForumMenu.vue");
/* harmony import */ var _ForumCategories_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumCategories.vue */ "./assets/components/Forum/ForumCategories.vue");
/* harmony import */ var _ForumNewPost_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForumNewPost.vue */ "./assets/components/Forum/ForumNewPost.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
/* harmony import */ var _ForumSearch_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ForumSearch.vue */ "./assets/components/Forum/ForumSearch.vue");
/* harmony import */ var _ForumSavedPosts_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ForumSavedPosts.vue */ "./assets/components/Forum/ForumSavedPosts.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ForumHomePage",
  components: {
    ForumMenu: _ForumMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ForumCategories: _ForumCategories_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ForumNewPost: _ForumNewPost_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ErrorMessage: _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ForumSearch: _ForumSearch_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ForumSavedPosts: _ForumSavedPosts_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      selectedTab: 'forum-categories',
      categories: null
    };
  },
  methods: {
    changeTab: function changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    },
    getCategories: function getCategories() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6__["default"].get('/allCategories');
            case 2:
              response = _context.sent;
              console.log(response);
              _this.categories = response.data.categories;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.getCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumMenu.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumMenu.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ForumMenu",
  methods: {
    changeTab: function changeTab(tab) {
      this.$emit('change-tab', tab);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumNewPost.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumNewPost.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Messages/ErrorMessage.vue */ "./assets/components/Messages/ErrorMessage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ErrorMessage: _Messages_ErrorMessage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['categories'],
  name: "ForumNewPost",
  data: function data() {
    return {
      selectedCategory: null,
      success: false,
      img: null
    };
  },
  methods: {
    newPost: function newPost() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var formData, _iterator, _step, file, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log();
              console.log(_this.$refs.title.value);
              console.log();
              formData = new FormData();
              formData.append('title', _this.$refs.title.value);
              formData.append('body', _this.$refs.body.value);
              formData.append('category', _this.$refs.selectedCategory.value);
              _iterator = _createForOfIteratorHelper(_this.$refs.newPicture.files);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  file = _step.value;
                  formData.append('images[]', file);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/newPost', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 11:
              response = _context.sent;
              console.log(response);
              _this.success = response.data.success;
              _this.$refs.title.value = '';
              _this.$refs.body.value = '';
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    print: function print() {
      var files = this.$refs.newPicture.files;
      console.log(files);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSavedPosts.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSavedPosts.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Messages_ConfirmMessage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Messages/ConfirmMessage.vue */ "./assets/components/Messages/ConfirmMessage.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ForumSavedPosts",
  components: {
    ConfirmMessage: _Messages_ConfirmMessage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    getSavedPosts: function getSavedPosts() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/getSavedPosts');
            case 2:
              response = _context.sent;
              _this.posts = response.data.posts;
              console.log(response.data.posts);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    deleteUserCommit: function deleteUserCommit() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log('lo quiere borrar');
              _this2.posts = _this2.posts.filter(function (post) {
                return post.id !== _this2.deletedPostId;
              });
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/deleteSavedPost', {
                id: _this2.deletedPostId
              });
            case 4:
              response = _context2.sent;
              console.log(response);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    deletePost: function deletePost(post) {
      console.log(post);
      this.deletedPost = post.title;
      this.deletedPostId = post.id;
      console.log(this.deletedPlan);
    }
  },
  mounted: function mounted() {
    this.getSavedPosts();
    console.log(this.posts);
  },
  data: function data() {
    return {
      posts: null,
      deletedPost: null,
      deletedPostId: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSearch.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSearch.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ForumSearch",
  methods: {
    searchForPosts: function searchForPosts() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/searchPosts', {
                query: _this.$refs.query.value
              });
            case 2:
              response = _context.sent;
              console.log(response);
              _this.results = response.data;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  data: function data() {
    return {
      query: null,
      results: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgDelete.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgDelete.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgDelete"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogout.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogout.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgLogout"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgMap.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgMap.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgMap"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgPrice.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgPrice.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgPrice"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgTrophy.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgTrophy.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgTrophy"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  var _component_the_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-menu");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_menu, {
    onChangeTab: $options.changeTab
  }, null, 8 /* PROPS */, ["onChangeTab"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($data.selectedTab)))])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/FavouriteStops.vue?vue&type=template&id=4fef0d0b":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/FavouriteStops.vue?vue&type=template&id=4fef0d0b ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-gray-100"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-3xl font-bold text-center py-8"
}, "Tus paradas favoritas", -1 /* HOISTED */);
var _hoisted_3 = {
  key: 0,
  "class": "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
};
var _hoisted_4 = {
  "class": "overflow-x-auto"
};
var _hoisted_5 = {
  "class": "table-auto border-collapse border border-gray-500 w-full"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Codigo de la parada"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left hidden lg:block"
}, "Nombre de la parada"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Nombre personalizado"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Autobuses que paran ahi"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left hidden lg:block"
}, "Numero de veces que has visitado la parada"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
})])], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "divide-y divide-gray-200"
};
var _hoisted_8 = {
  "class": "border px-4 py-2"
};
var _hoisted_9 = {
  "class": "border px-4 py-2 hidden lg:block"
};
var _hoisted_10 = {
  "class": "border px-4 py-2"
};
var _hoisted_11 = {
  "class": "border px-4 py-2"
};
var _hoisted_12 = {
  "class": "flex flex-wrap gap-2"
};
var _hoisted_13 = {
  "class": "bg-blue-200 rounded-full py-1 px-3"
};
var _hoisted_14 = {
  "class": "border px-4 py-2 hidden lg:block"
};
var _hoisted_15 = {
  "class": "border px-4 py-2"
};
var _hoisted_16 = ["onClick"];
var _hoisted_17 = {
  key: 1,
  "class": "text-center py-8"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Aun no tienes paradas favoritas", -1 /* HOISTED */);
var _hoisted_19 = [_hoisted_18];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_confirm_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-message");
  var _component_svg_delete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-delete");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, $data.dataExists ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.stopsArray, function (stop) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: stop.stopId
    }, [$data.askConfirm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
      key: 0,
      to: "body"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_confirm_message, {
      message: 'Estás seguro de que quieres borrar la parada ' + _ctx.confirmStopId,
      onCloseError: _cache[2] || (_cache[2] = function ($event) {
        return _this.askConfirm = false;
      })
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: _cache[0] || (_cache[0] = function ($event) {
            return $options.deleteStop(_ctx.confirmStopId);
          }),
          "class": "bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition-colors duration-300"
        }, "SI"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "bg-gray-300 text-gray-700 font-bold py-1 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _this.askConfirm = false;
          })
        }, "NO")];
      }),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["message"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stop.stopId), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stop.stopName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stop.customName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(stop.buses, function (bus) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(bus), 1 /* TEXT */);
    }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stop.timesVisited), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.confirmDeleteStop(stop.stopId);
      },
      "class": "bg-gray-200 hover:bg-gray-300 rounded-full p-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_delete, {
      "class": "w-6 h-6"
    })], 8 /* PROPS */, _hoisted_16)])]);
  }), 128 /* KEYED_FRAGMENT */))])])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, _hoisted_19))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/MostVisited.vue?vue&type=template&id=1f7a9834":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/MostVisited.vue?vue&type=template&id=1f7a9834 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center justify-center"
};
var _hoisted_2 = {
  "class": "w-full p-4 mb-10"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-3xl font-bold text-center"
}, "Top 10 paradas más visitadas", -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "overflow-x-auto"
};
var _hoisted_5 = {
  "class": "w-full table-auto mt-2"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "bg-gray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border border-gray-400 py-2 px-4"
}, "Código de parada"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border border-gray-400 py-2 px-4"
}, "Veces visitada")])], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "border border-gray-400 py-2 px-4"
};
var _hoisted_8 = {
  "class": "border border-gray-400 py-2 px-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.stopsArray, function (stop) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: stop.stopId
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stop.stopId), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(stop.timesVisited), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheMenu.vue?vue&type=template&id=fc6ddd06":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheMenu.vue?vue&type=template&id=fc6ddd06 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  href: "/logout",
  "class": "mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors bg-gray-400"
};
var _hoisted_8 = {
  "class": "md:hidden"
};
var _hoisted_9 = {
  "class": "px-2 pt-2 pb-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Consulta tu parada de autobus", -1 /* HOISTED */);
var _hoisted_11 = {
  href: "/logout",
  "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_bus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-bus");
  var _component_svg_star = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-star");
  var _component_svg_forum = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-forum");
  var _component_svg_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-user");
  var _component_svg_map = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-map");
  var _component_svg_price = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-price");
  var _component_svg_bike = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-bike");
  var _component_svg_trophy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-trophy");
  var _component_svg_logout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-logout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <menu class=\"bg-gray-100 rounded-lg overflow-hidden shadow-lg\">\n    <div class=\"flex w-full\">\n      <button  @click=\"changeTab('bus-time')\">Parada<svg-bus/></button>\n      <button @click=\"changeTab('favourite-stops')\">Mis sitios<svg-star/></button>\n      <button  @click=\"changeTab('forum-home-page')\">Foro<svg-forum/></button>\n      <button   @click=\"changeTab('the-user-data')\">Mi perfil<svg-user/></button>\n      <button  @click=\"changeTab('the-plans')\">Planos de metro<svg-map/></button>\n      <button  @click=\"changeTab('transport-prices')\">Precios y tarifas<svg-price/></button>\n      <button @click=\"changeTab('bike-time')\">Consulta tu parada de biciMAD<svg-bike/></button>\n\n\n\n      <button  @click=\"changeTab('most-visited')\">Paradas mas visitadas <svg-trophy/> </button>\n\n      <a href=\"/logout\" class=\"mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline block text-center\">Cerrar sesión<svg-logout/></a>\n    </div>\n  </menu>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("hamburguer button"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "block",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.showMobileMenu = !$data.showMobileMenu;
    })
  }, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Categories for the hamburguer menu"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
      'bg-gray-500': $options.isTabActive('favourite-stops'),
      'bg-gray-400': !$options.isTabActive('favourite-stops')
    }]),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.changeTabMobile('favourite-stops');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Mis sitios"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_star)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('forum-home-page'),
      'bg-gray-400': !$options.isTabActive('forum-home-page')
    }]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.changeTabMobile('forum-home-page');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Foro"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_forum)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('the-user-data'),
      'bg-gray-400': !$options.isTabActive('the-user-data')
    }]),
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.changeTabMobile('the-user-data');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Mi perfil"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('the-plans'),
      'bg-gray-400': !$options.isTabActive('the-plans')
    }]),
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.changeTabMobile('the-plans');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Planos de metro"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_map)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('transport-prices'),
      'bg-gray-400': !$options.isTabActive('transport-prices')
    }]),
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $options.changeTabMobile('transport-prices');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Precios y tarifas"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_price)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('bike-time'),
      'bg-gray-400': !$options.isTabActive('bike-time')
    }]),
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $options.changeTabMobile('bike-time');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Consulta tu parada de biciMAD"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_bike)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mr-2 hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors", {
      'bg-gray-500': $options.isTabActive('most-visited'),
      'bg-gray-400': !$options.isTabActive('most-visited')
    }]),
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.changeTabMobile('most-visited');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Paradas mas visitadas "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_trophy)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cerrar sesión"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_logout)])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.showMobileMenu]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.changeTab('bus-time');
    })
  }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_bus, {
    "class": "ml-2 h-5 w-5"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $options.changeTab('favourite-stops');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Mis sitios"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_star)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.changeTab('forum-home-page');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Foro"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_forum)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.changeTab('the-user-data');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Mi perfil"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_user)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $options.changeTab('the-plans');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Planos de metro"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_map)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $options.changeTab('transport-prices');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Precios y tarifas"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_price)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex items-center w-full text-left py-2 px-4 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $options.changeTab('most-visited');
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Paradas mas visitadas "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_trophy)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cerrar sesión"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_logout)])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.showMobileMenu]])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/ThePlans.vue?vue&type=template&id=d9515088":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/ThePlans.vue?vue&type=template&id=d9515088 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-3xl font-bold text-center py-8"
}, "Planos de transporte", -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "flex flex-wrap justify-center md:flex-row"
};
var _hoisted_4 = {
  "class": "rounded border-2 border-red-400 w-80 h-80 flex flex-col justify-center items-center sm:mx-auto"
};
var _hoisted_5 = {
  "class": "text-lg font-bold mb-4"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.plans ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.plans, function (plan, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": "m-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: plan,
      "class": "h-48 object-contain mb-4"
    }, null, 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.viewImage(plan);
      },
      "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    }, " View full size ", 8 /* PROPS */, _hoisted_7)])]);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheUserData.vue?vue&type=template&id=0f073033":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheUserData.vue?vue&type=template&id=0f073033 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-3xl font-bold text-center mb-2"
}, "Tu perfil", -1 /* HOISTED */);
var _hoisted_2 = {
  key: 0,
  "class": "flex justify-center inline-block"
};
var _hoisted_3 = {
  "class": "border-collapse border border-gray-400 w-full"
};
var _hoisted_4 = {
  "class": "bg-gray-100"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border border-gray-400 px-4 py-2 font-bold text-left"
}, "Username:", -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border border-gray-400 px-4 py-2 font-bold text-left"
}, "Foto de perfil:", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "border border-gray-400 px-4 py-2 font-bold text-left"
}, "Posts publicados:", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "border border-gray-400 px-4 py-2 font-bold text-left"
}, "Fecha de creacion de la cuenta:", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "border border-gray-400 px-4 py-2 font-bold text-left"
}, "Rol:", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_16 = {
  key: 0,
  "class": "bg-green-500 text-white font-bold py-1 px-2 rounded-full"
};
var _hoisted_17 = {
  key: 1,
  "class": "bg-red-500 text-white font-bold py-1 px-2 rounded-full"
};
var _hoisted_18 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_19 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_20 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_21 = {
  "class": "border border-gray-400 px-4 py-2 text-left"
};
var _hoisted_22 = ["onClick"];
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "border border-gray-400 px-4 py-2 text-left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer",
  "for": "picture"
}, " Cambiar foto de perfil ")], -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "border border-gray-400 px-4 py-2"
};
var _hoisted_25 = {
  "class": "border border-gray-400 px-4 py-2"
};
var _hoisted_26 = {
  "class": "border border-gray-400 px-4 py-2"
};
var _hoisted_27 = {
  key: 1,
  id: "DeleteAccount",
  "class": "mt-4"
};
var _hoisted_28 = {
  id: "CancelButton",
  "class": "flex justify-end"
};
var _hoisted_29 = {
  id: "",
  ref: "deletePassword",
  name: "",
  placeholder: "Introduzca su contrasena",
  type: "password",
  "class": "border border-gray-300 rounded-md p-2 mr-2"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
}, "Siguiente paso", -1 /* HOISTED */);
var _hoisted_31 = {
  key: 2
};
var _hoisted_32 = {
  key: 0
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg font-semibold mt-4"
}, "Cambio de contrasena", -1 /* HOISTED */);
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block mt-4",
  "for": "currentPassword"
}, "Introduzca su contrasena actual", -1 /* HOISTED */);
var _hoisted_35 = {
  id: "currentPassword",
  ref: "passInput",
  "class": "border border-gray-300 rounded-md p-2",
  type: "password"
};
var _hoisted_36 = {
  key: 1
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block mt-4",
  "for": "password"
}, "Contraseña", -1 /* HOISTED */);
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block mt-4",
  "for": "passwordRepeat"
}, "Repita su contraseña", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");
  var _component_confirm_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, $data.myData && !$data.change && !$data.deleteAccount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.username), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.profilePic,
    alt: "",
    "class": "w-5 h-5"
  }, null, 8 /* PROPS */, _hoisted_9)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.postsPublished), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.dateCreated), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [this.role === 'U' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, " Usuario ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, " Administrador "))])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.posts, function (post) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.category), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.deletePost(post);
      },
      "class": "bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full"
    }, " Borrar publicacion ", 8 /* PROPS */, _hoisted_22)])]);
  }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "picture",
    ref: "newPicture",
    accept: "image/jpeg,image/png,image/gif,image/webp",
    "class": "hidden",
    type: "file",
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.changePicture && $options.changePicture.apply($options, arguments);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.changePassword && $options.changePassword.apply($options, arguments);
    })
  }, " Cambiar contraseña ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.deleteAccountMethod && $options.deleteAccountMethod.apply($options, arguments);
    })
  }, " Borrar cuenta ")])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.deleteAccount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-500 text-white px-4 py-2 rounded-md mr-2",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _this.deleteAccount = false, _this.secondStepDeleteAccount = false;
    })
  }, "Cancelar"), !this.secondStepDeleteAccount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 0,
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.checkDeleteAccountPassword && $options.checkDeleteAccountPassword.apply($options, arguments);
    }, ["prevent"])),
    "class": "flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_29, null, 512 /* NEED_PATCH */), _hoisted_30], 32 /* HYDRATE_EVENTS */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.deleteAccountLasStep && $options.deleteAccountLasStep.apply($options, arguments);
    }),
    "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
  }, "Estas seguro de que quieres borrar tu cuenta?"))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.change ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-red-500 text-white px-4 py-2 rounded-md",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      _this.change = false;
      _this.middleStep = false;
      _this.lastStep = false;
    })
  }, "Cancel "), $data["final"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [_hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_35, null, 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-blue-500 text-white px-4 py-2 rounded-md mt-4",
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.secondStep && $options.secondStep.apply($options, arguments);
    })
  }, "Siguiente paso")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.lastStep ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "password",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.checkPassword = $event;
    }),
    "class": "border border-gray-300 rounded-md p-2",
    name: "checkPassword",
    type: "password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.checkPassword]]), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "passwordRepeat",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.passwordRepeat = $event;
    }),
    "class": "border border-gray-300 rounded-md p-2",
    name: "passwordRepeat",
    type: "password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.passwordRepeat]]), $options.samePassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "bg-blue-500 text-white px-4 py-2 rounded-md mt-4",
    onClick: _cache[10] || (_cache[10] = function () {
      return $options.changeFinalPassword && $options.changeFinalPassword.apply($options, arguments);
    })
  }, "Cambiar contraseña")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [$data.showErrorMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 0,
    message: "La contrasena no coincide",
    onCloseError: _cache[11] || (_cache[11] = function ($event) {
      return $data.showErrorMessage = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.wrongFilePic ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 1,
    message: "El tipo de imagen no es valido por favor intente otro",
    onCloseError: _cache[12] || (_cache[12] = function ($event) {
      return $data.wrongFilePic = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 2,
    message: "La contrasena se ha cambiado correctamente",
    onCloseError: _cache[13] || (_cache[13] = function ($event) {
      return $data.success = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.finalDeleteMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 3,
    message: "Se le ha enviado un correo para que pueda borrar la cuenta",
    onCloseError: _cache[14] || (_cache[14] = function ($event) {
      return $data.finalDeleteMessage = false, _this.deleteAccount = false, _this.secondStepDeleteAccount = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.deletedPost !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_confirm_message, {
    key: 4,
    message: 'Estás seguro de que quieres borrar la publicacion ' + $data.deletedPost,
    onCloseError: _cache[17] || (_cache[17] = function ($event) {
      return _this.deletedPost = null;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[15] || (_cache[15] = function () {
          return $options.deleteUserCommit && $options.deleteUserCommit.apply($options, arguments);
        })
      }, "SI"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "ml-8",
        onClick: _cache[16] || (_cache[16] = function ($event) {
          return _this.deletedPost = null;
        })
      }, "NO")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["message"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TransportPrices.vue?vue&type=template&id=0c805260":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TransportPrices.vue?vue&type=template&id=0c805260 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center justify-center"
};
var _hoisted_2 = {
  "class": "w-full p-4 mb-10"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-3xl font-bold text-center py-8"
}, "Precios y tarifas", -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "overflow-x-auto"
};
var _hoisted_5 = {
  "class": "w-full table-auto"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "bg-gray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border border-gray-400 py-2 px-4"
}, "Abono"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border border-gray-400 py-2 px-4"
}, "Precio")])], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "border border-gray-400 py-2 px-4"
};
var _hoisted_8 = {
  "class": "border border-gray-400 py-2 px-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.plans, function (plan) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: plan.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.price), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumCategories.vue?vue&type=template&id=227e80b8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumCategories.vue?vue&type=template&id=227e80b8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "table-fixed w-full"
};
var _hoisted_3 = {
  "class": "px-4 py-2 border border-gray-300"
};
var _hoisted_4 = ["href"];
var _hoisted_5 = {
  "class": "mt-2 text-sm text-gray-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.showCategories ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: category.id,
      "class": "bg-white hover:bg-gray-200"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/show/' + category.name + '/' + category.id,
      "class": "text-lg font-bold text-gray-800"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 9 /* TEXT, PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.description), 1 /* TEXT */)])]);
  }), 128 /* KEYED_FRAGMENT */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumHomePage.vue?vue&type=template&id=c09e1ed4":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumHomePage.vue?vue&type=template&id=c09e1ed4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-max"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_forum_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("forum-menu");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_forum_menu, {
    onChangeTab: $options.changeTab
  }, null, 8 /* PROPS */, ["onChangeTab"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($data.selectedTab), {
    categories: $data.categories
  }, null, 8 /* PROPS */, ["categories"]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumMenu.vue?vue&type=template&id=b238ad32":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumMenu.vue?vue&type=template&id=b238ad32 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-gray-100 rounded-lg shadow-lg mt-3"
};
var _hoisted_2 = {
  "class": "flex w-full"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.changeTab('forum-new-post');
    })
  }, "+"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.changeTab('forum-categories');
    })
  }, "Foro"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.changeTab('forum-search');
    })
  }, "Buscar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.changeTab('forum-saved-posts');
    })
  }, "Publicaciones guardadas")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumNewPost.vue?vue&type=template&id=4830da08":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumNewPost.vue?vue&type=template&id=4830da08 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col justify-center items-center py-6"
};
var _hoisted_2 = {
  "class": "mb-4"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-white font-bold mb-2",
  "for": "title"
}, "Título", -1 /* HOISTED */);
var _hoisted_4 = {
  id: "title",
  ref: "title",
  "class": "bg-white bg-opacity-70 shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline",
  required: "",
  type: "text"
};
var _hoisted_5 = {
  "class": "mb-4"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-white font-bold mb-2",
  "for": "body"
}, "Cuerpo del post", -1 /* HOISTED */);
var _hoisted_7 = {
  id: "body",
  ref: "body",
  "class": "bg-white bg-opacity-70 shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline",
  cols: "30",
  name: "body",
  required: "",
  rows: "10"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer",
  "for": "picture"
}, " Anadir imagenes a tu publicacion ", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "mb-4"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-white font-bold mb-2",
  "for": "category"
}, "Categoría", -1 /* HOISTED */);
var _hoisted_11 = {
  id: "category",
  ref: "selectedCategory",
  "class": "bg-white bg-opacity-70 shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline",
  name: "category",
  required: ""
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  value: ""
}, "Selecciona una categoría", -1 /* HOISTED */);
var _hoisted_13 = ["value"];
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full",
  type: "submit",
  value: "Crear post"
})], -1 /* HOISTED */);
var _hoisted_15 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "bg-black bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto px-4 sm:px-6 lg:px-8 w-full",
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.newPost && $options.newPost.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_4, null, 512 /* NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", _hoisted_7, null, 512 /* NEED_PATCH */), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "picture",
    ref: "newPicture",
    accept: "image/jpeg,image/png,image/gif,image/webp",
    "class": "hidden",
    multiple: "true",
    name: "images[]",
    type: "file",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.print && $options.print.apply($options, arguments);
    })
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_11, [_hoisted_12, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: category.id,
      value: category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 9 /* TEXT, PROPS */, _hoisted_13);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)]), _hoisted_14], 32 /* HYDRATE_EVENTS */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [$data.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_error_message, {
    key: 0,
    message: "El post se ha creado correctamente",
    onCloseError: _cache[2] || (_cache[2] = function ($event) {
      return $data.success = false;
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: this.img,
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_15)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSavedPosts.vue?vue&type=template&id=3dce5b14":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSavedPosts.vue?vue&type=template&id=3dce5b14 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "text-3xl font-bold text-center py-8"
};
var _hoisted_2 = {
  key: 1,
  "class": "text-3xl font-bold text-center py-8"
};
var _hoisted_3 = {
  key: 2,
  "class": "table-auto border-collapse border border-gray-500 w-full"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Enlace"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Titulo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Usuario"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-2 text-left"
}, "Categoria")])], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "divide-y divide-gray-200"
};
var _hoisted_6 = ["href"];
var _hoisted_7 = {
  "class": "border px-4 py-2"
};
var _hoisted_8 = {
  "class": "border px-4 py-2"
};
var _hoisted_9 = {
  "class": "border px-4 py-2 hidden lg:block"
};
var _hoisted_10 = {
  "class": "border px-4 py-2"
};
var _hoisted_11 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_confirm_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-message");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$data.posts === null || $data.posts.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_1, "No hay nada")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.posts, function (post) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: post.postId
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/read/' + post.category + '/' + post.title + '/' + post.postId
    }, "Visitar el post", 8 /* PROPS */, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.username), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.category), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $options.deletePost(post);
      },
      "class": "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    }, " Quitar de favs ", 8 /* PROPS */, _hoisted_11)])]);
  }), 128 /* KEYED_FRAGMENT */))])])), $data.deletedPost !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_confirm_message, {
    key: 3,
    message: 'Estás seguro de que quieres borrar la publicacion ' + $data.deletedPost,
    onCloseError: _cache[2] || (_cache[2] = function ($event) {
      return _this.deletedPost = null;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.deleteUserCommit && $options.deleteUserCommit.apply($options, arguments);
        })
      }, "SI"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "ml-8",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _this.deletedPost = null;
        })
      }, "NO")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["message"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSearch.vue?vue&type=template&id=aa7d9da0":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSearch.vue?vue&type=template&id=aa7d9da0 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "my-8 mx-auto w-full max-w-md"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "search",
  "class": "sr-only"
}, "Buscador", -1 /* HOISTED */);
var _hoisted_3 = {
  required: "",
  id: "search",
  type: "text",
  "class": "border border-gray-400 rounded-l py-2 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
  placeholder: "Buscar...",
  ref: "query"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "flex-shrink-0 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white text-base font-semibold py-2 px-4 rounded-r"
}, " Buscar ", -1 /* HOISTED */);
var _hoisted_5 = {
  key: 0,
  "class": "mt-8"
};
var _hoisted_6 = {
  "class": "w-full border-collapse table-auto"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "bg-gray-200 text-gray-700 uppercase text-sm font-semibold"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "py-2 px-3"
}, "Titulo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "py-2 px-3"
}, "Fecha de creacion"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "py-2 px-3"
}, "Autor"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "py-2 px-3"
}, "Categoria")])], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "text-gray-600 text-sm font-light"
};
var _hoisted_9 = {
  "class": "py-2 px-3"
};
var _hoisted_10 = ["href"];
var _hoisted_11 = {
  "class": "py-2 px-3"
};
var _hoisted_12 = {
  "class": "py-2 px-3"
};
var _hoisted_13 = {
  "class": "py-2 px-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.searchForPosts && $options.searchForPosts.apply($options, arguments);
    }, ["prevent"])),
    "class": "flex"
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_3, null, 512 /* NEED_PATCH */), _hoisted_4], 32 /* HYDRATE_EVENTS */), $data.results !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.results, function (result) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: result.id,
      "class": "border-b border-gray-200 hover:bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/read/' + result.category + '/' + result.title + '/' + result.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(result.title), 9 /* TEXT, PROPS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(result.date_created), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(result.author), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(result.category), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgBike.vue?vue&type=template&id=f3e2f572":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgBike.vue?vue&type=template&id=f3e2f572 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  width: "32px",
  height: "32px",
  viewBox: "0 -15.5 1055 1055",
  "class": "icon",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M354.614054 430.364318l67.91349 138.460135 33.964581-23.510324-47.020648-112.332328zM636.737943 404.252185l78.367746 222.0315 39.183874-10.438584-67.91349-235.10324z\" fill=\"#C0EAFF\"></path><path d=\"M335.022117 767.345629c-70.577993 0-128.005878-57.427885-128.005877-128.005877s57.427885-128.005878 128.005877-128.005878c3.745978 0 7.460609 0.172409 11.112547 0.470207 8.620452 0.736657 15.01526 8.338328 14.294277 16.95878-0.736657 8.620452-8.369675 14.999587-16.95878 14.294277a96.784167 96.784167 0 0 0-105.106822 96.298287c0 53.290068 43.353038 96.658779 96.658778 96.658779a96.75282 96.75282 0 0 0 95.326528-112.755514 15.673549 15.673549 0 1 1 30.908239-5.172271c1.175516 6.974729 1.755438 14.121868 1.755437 21.269006 0 70.577993-57.412211 127.990204-127.990204 127.990204zM709.870724 767.345629c-76.345859 0-138.444461-62.114276-138.444462-138.444461a137.660784 137.660784 0 0 1 53.384109-109.244639 15.657876 15.657876 0 1 1 19.262793 24.717187 106.501768 106.501768 0 0 0-41.299803 84.527452 107.207078 107.207078 0 0 0 107.097363 107.097363 107.207078 107.207078 0 0 0 107.097363-107.097363 107.066016 107.066016 0 0 0-47.240078-88.822004 15.673549 15.673549 0 0 1 17.554375-25.986745 138.397441 138.397441 0 0 1 61.032801 114.793075c0.015674 76.361532-62.098603 138.460135-138.444461 138.460135z\" fill=\"#1F87DD\"></path><path d=\"M418.609156 591.347344a15.689223 15.689223 0 0 1-14.498033-9.733275l-56.017265-136.877106h-27.444385a15.673549 15.673549 0 0 1 0-31.347099h128.005877a15.673549 15.673549 0 0 1 0 31.347099h-10.987158l36.942556 94.276399a15.673549 15.673549 0 0 1-5.219292 18.275359l-41.409517 30.95526a15.642202 15.642202 0 0 1-9.372783 3.103363z m-36.644758-146.610381l43.478426 106.266665 15.626528-11.676795-37.067944-94.58987H381.964398z\" fill=\"#1F87DD\"></path><path d=\"M335.037791 655.028975a15.657876 15.657876 0 0 1-9.1847-28.384798l309.5526-223.348079a15.689223 15.689223 0 0 1 18.338053 25.422498l-309.5526 223.348078a15.657876 15.657876 0 0 1-9.153353 2.962301zM613.227619 345.476375h-78.367747a15.673549 15.673549 0 0 1 0-31.347099h78.367747a15.673549 15.673549 0 0 1 0 31.347099z\" fill=\"#1F87DD\"></path><path d=\"M715.105689 651.110587a15.610855 15.610855 0 0 1-14.968239-11.049852l-108.946842-352.059266h-103.382731a15.673549 15.673549 0 0 1 0-31.347098h114.934137a15.673549 15.673549 0 0 1 14.96824 11.049852l34.168337 110.404482 30.829872-10.281849a15.736244 15.736244 0 0 1 19.905407 10.140787l74.44936 235.10324a15.673549 15.673549 0 0 1-9.435477 19.403854l-47.020648 17.632743a15.45412 15.45412 0 0 1-5.501416 1.003107z m-53.948357-243.04973l63.995102 206.859505 17.538702-6.567217-65.154944-205.746683-16.37886 5.454395z\" fill=\"#1F87DD\"></path></g>", 3);
var _hoisted_5 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgDelete.vue?vue&type=template&id=9b6f52de":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgDelete.vue?vue&type=template&id=9b6f52de ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  width: "12px",
  height: "12px",
  viewBox: "0 -0.5 21 21",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "#000000"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs></defs> <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Dribbble-Light-Preview\" transform=\"translate(-179.000000, -360.000000)\" fill=\"#000000\"><g id=\"icons\" transform=\"translate(56.000000, 160.000000)\"><path d=\"M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z\" id=\"delete-[#1487]\"></path></g></g></g></g>", 3);
var _hoisted_5 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogout.vue?vue&type=template&id=2b60def0":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogout.vue?vue&type=template&id=2b60def0 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  version: "1.1",
  width: "32px",
  height: "32px",
  viewBox: "0 0 256 256",
  "xml:space": "preserve"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  style: {
    "stroke": "none",
    "stroke-width": "0",
    "stroke-dasharray": "none",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-miterlimit": "10",
    "fill": "none",
    "fill-rule": "nonzero",
    "opacity": "1"
  },
  transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z",
  style: {
    "stroke": "none",
    "stroke-width": "1",
    "stroke-dasharray": "none",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-miterlimit": "10",
    "fill": "rgb(0,0,0)",
    "fill-rule": "nonzero",
    "opacity": "1"
  },
  transform: " matrix(1 0 0 1 0 0) ",
  "stroke-linecap": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z M 38.775 84.698 L 11.759 70.576 V 5.302 l 27.016 14.122 V 84.698 z",
  style: {
    "stroke": "none",
    "stroke-width": "1",
    "stroke-dasharray": "none",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-miterlimit": "10",
    "fill": "rgb(0,0,0)",
    "fill-rule": "nonzero",
    "opacity": "1"
  },
  transform: " matrix(1 0 0 1 0 0) ",
  "stroke-linecap": "round"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z",
  style: {
    "stroke": "none",
    "stroke-width": "1",
    "stroke-dasharray": "none",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-miterlimit": "10",
    "fill": "rgb(0,0,0)",
    "fill-rule": "nonzero",
    "opacity": "1"
  },
  transform: " matrix(1 0 0 1 0 0) ",
  "stroke-linecap": "round"
})], -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgMap.vue?vue&type=template&id=3c2ebe34":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgMap.vue?vue&type=template&id=3c2ebe34 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  width: "32px",
  height: "32px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_bgCarrier",
  "stroke-width": "0"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_tracerCarrier",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  id: "SVGRepo_iconCarrier"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19.9 4.09001C19.6576 3.92895 19.3789 3.83088 19.089 3.80469C18.7992 3.7785 18.5073 3.82501 18.24 3.94001L14.67 5.47001L9.92 3.47001C9.73338 3.3908 9.53273 3.34998 9.33 3.34998C9.12727 3.34998 8.92661 3.3908 8.74 3.47001L4.38 5.31001C4.04012 5.45784 3.75151 5.70283 3.55046 6.01419C3.3494 6.32556 3.24487 6.68941 3.25 7.06001V18.31C3.24816 18.6262 3.32486 18.938 3.47321 19.2172C3.62157 19.4965 3.83694 19.7345 4.1 19.91C4.3424 20.0711 4.62114 20.1691 4.91099 20.1953C5.20084 20.2215 5.49265 20.175 5.76 20.06L9.33 18.53L14.08 20.53C14.2661 20.6109 14.4671 20.6517 14.67 20.65C14.8727 20.6498 15.0733 20.609 15.26 20.53L19.62 18.66C19.9599 18.5122 20.2485 18.2672 20.4495 17.9558C20.6506 17.6445 20.7551 17.2806 20.75 16.91V5.69001C20.7518 5.3738 20.6751 5.06207 20.5268 4.78281C20.3784 4.50356 20.1631 4.2655 19.9 4.09001ZM10.08 5.09001L13.92 6.73001V18.86L10.08 17.22V5.09001ZM5.17 18.68C5.13199 18.702 5.08888 18.7135 5.045 18.7135C5.00111 18.7135 4.958 18.702 4.92 18.68C4.86421 18.641 4.81932 18.5883 4.78957 18.5271C4.75982 18.4658 4.7462 18.398 4.75 18.33V7.06001C4.74877 6.98016 4.77209 6.90186 4.8168 6.83569C4.86151 6.76952 4.92546 6.71867 5 6.69001L8.58 5.14001V17.22L5.17 18.68ZM19.25 16.94C19.2537 17.0165 19.2348 17.0923 19.1957 17.1581C19.1565 17.2239 19.0989 17.2767 19.03 17.31L15.42 18.86V6.78001L18.83 5.32001C18.868 5.29807 18.9111 5.28652 18.955 5.28652C18.9989 5.28652 19.042 5.29807 19.08 5.32001C19.1358 5.35906 19.1807 5.4117 19.2104 5.47295C19.2402 5.5342 19.2538 5.60203 19.25 5.67001V16.94Z",
  fill: "#000000"
})], -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgPrice.vue?vue&type=template&id=d7ca0c5a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgPrice.vue?vue&type=template&id=d7ca0c5a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  fill: "#000000",
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 307.318 307.318",
  "xml:space": "preserve",
  width: "32px",
  height: "32px"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><g><g><path d=\"M34.633,0v307.318l44.657-36.057l37.164,29.999l37.179-30l37.166,29.999l37.194-30.001l44.692,36.05V0H34.633z M257.686,275.938l-29.692-23.95l-37.19,29.999l-37.168-30.001l-37.179,30l-37.168-30.001l-29.655,23.943V15h208.053v260.938 H257.686z\"></path> <path d=\"M164.799,187.666c20.139,0,38.465-10.301,49.023-27.554l-12.795-7.83c-7.811,12.764-21.354,20.384-36.229,20.384 c-16.873,0-31.478-9.885-38.334-24.168H156.2v-15h-33.753c-0.086-1.099-0.143-2.206-0.143-3.326c0-1.121,0.057-2.228,0.143-3.327 H156.2v-15h-29.735c6.856-14.282,21.461-24.167,38.333-24.167c14.875,0,28.418,7.62,36.229,20.384l12.795-7.83 c-10.559-17.253-28.885-27.554-49.023-27.554c-25.294,0-46.811,16.427-54.481,39.167H93.15v15h14.258 c-0.063,1.102-0.103,2.21-0.103,3.327s0.04,2.225,0.103,3.326H93.15v15h17.167C117.988,171.239,139.504,187.666,164.799,187.666z\"></path> <rect x=\"93.15\" y=\"206.617\" width=\"114.274\" height=\"15\"></rect></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g></g></g>", 3);
var _hoisted_5 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgTrophy.vue?vue&type=template&id=2efe66d4":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgTrophy.vue?vue&type=template&id=2efe66d4 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  width: "32px",
  height: "32px",
  viewBox: "0 0 1024 1024",
  "class": "icon",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#000000"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M454.5 675.5l-32.4 107.9h181.8L574.5 678\" fill=\"#FBBA22\"></path><path d=\"M510.1 682.3c215.1 0 215.1-165.2 215.1-165.2V197.4H300.9v319.7s0 165.2 215.1 165.2h-5.9z\" fill=\"#FBBA22\"></path><path d=\"M515.4 783.4h91.1s89.5 2.3 89.5 80.8H332.4c0-78.6 89.5-80.8 89.5-80.8H513\" fill=\"#C04931\"></path><path d=\"M816.5 383.8V259.3c0-11.2-9-20.2-20.2-20.2h-50.9v-41.7c0-11.2-9-20.2-20.2-20.2H300.9c-11.2 0-20.2 9-20.2 20.2v41.7h-50.9c-11.2 0-20.2 9-20.2 20.2v124.5c0 1.2-0.7 42.2 27.2 70.9 11.7 12 26.5 19.9 43.9 23.8v38.6c0 1.6 2.1 135.7 147.8 174.7l-21.8 72.7c-39 5.7-94.5 31.2-94.5 99.7 0 11.2 9 20.2 20.2 20.2H696c11.2 0 20.2-9 20.2-20.2 0-69.6-57.2-94.7-96.6-99.9l-20.4-72.9c144.1-39.6 146.2-172.7 146.2-174.3v-38.6c17.4-3.9 32.1-11.8 43.9-23.8 27.9-28.7 27.2-69.7 27.2-70.9z m-550.8 42.7c-16-16.4-15.8-41.9-15.8-42.1V279.6h30.7v156.7c-5.7-2.4-10.8-5.6-14.9-9.8z m338.2 377.1c0.1 0 0.1 0 0 0h2c6.2 0.2 54 3 66.8 40.4h-317c12.8-37.4 60.5-40.2 66.2-40.4h182z m-154.6-40.4l19.1-63.6c12.5 1.6 25.9 2.5 40.1 2.8 0.5 0 1.1 0.1 1.6 0.1h5.9c0.5 0 1.1 0 1.6-0.1 14.9-0.3 28.8-1.3 41.9-3l17.9 63.9H449.3zM705 517c-0.1 5.9-3.5 143.6-191.9 145-17.6-0.1-33.6-1.4-48.1-3.7-1.5-0.9-3-1.7-4.7-2.2-3.2-0.9-6.3-1-9.4-0.4-127.1-27.3-129.7-133.5-129.8-138.6V217.6H705V517z m55.3-90.5c-4.1 4.2-9.1 7.4-15 9.8V279.5H776v104.8c0.1 0.3 0.3 25.8-15.7 42.2z\" fill=\"#211F1E\"></path><path d=\"M446.7 449.5l-11.2 65.2c-1 5.7 1.4 11.4 6 14.8 4.7 3.4 10.8 3.8 16 1.1l58.5-30.8 58.5 30.8c2.2 1.2 4.6 1.7 7.1 1.7 3.1 0 6.3-1 8.9-2.9 4.7-3.4 7-9.1 6-14.8l-11.2-65.2 47.4-46.2c4.1-4 5.6-10.1 3.8-15.5-1.8-5.5-6.5-9.5-12.2-10.3L559 368l-29.3-59.3c-2.6-5.2-7.8-8.4-13.6-8.4s-11 3.3-13.6 8.4L473.2 368l-65.5 9.5c-5.7 0.8-10.4 4.8-12.2 10.3-1.8 5.5-0.3 11.5 3.8 15.5l47.4 46.2z m38.8-52.6c4.9-0.7 9.2-3.8 11.4-8.3l19.2-38.9 19.2 38.9c2.2 4.5 6.5 7.6 11.4 8.3l43 6.2-31.1 30.3c-3.6 3.5-5.2 8.5-4.4 13.4l7.3 42.8-38.4-20.2c-4.4-2.3-9.7-2.3-14.1 0l-38.4 20.2 7.3-42.8c0.8-4.9-0.8-9.9-4.4-13.4l-31.1-30.3 43.1-6.2z\" fill=\"#211F1E\"></path></g>", 3);
var _hoisted_5 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}

/***/ }),

/***/ "./assets/App.vue":
/*!************************!*\
  !*** ./assets/App.vue ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5bcdaf03 */ "./assets/App.vue?vue&type=template&id=5bcdaf03");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./assets/App.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/FavouriteStops.vue":
/*!*****************************************************!*\
  !*** ./assets/components/BusApp/FavouriteStops.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FavouriteStops_vue_vue_type_template_id_4fef0d0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavouriteStops.vue?vue&type=template&id=4fef0d0b */ "./assets/components/BusApp/FavouriteStops.vue?vue&type=template&id=4fef0d0b");
/* harmony import */ var _FavouriteStops_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavouriteStops.vue?vue&type=script&lang=js */ "./assets/components/BusApp/FavouriteStops.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FavouriteStops_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FavouriteStops_vue_vue_type_template_id_4fef0d0b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/FavouriteStops.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/MostVisited.vue":
/*!**************************************************!*\
  !*** ./assets/components/BusApp/MostVisited.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MostVisited_vue_vue_type_template_id_1f7a9834__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostVisited.vue?vue&type=template&id=1f7a9834 */ "./assets/components/BusApp/MostVisited.vue?vue&type=template&id=1f7a9834");
/* harmony import */ var _MostVisited_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostVisited.vue?vue&type=script&lang=js */ "./assets/components/BusApp/MostVisited.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MostVisited_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MostVisited_vue_vue_type_template_id_1f7a9834__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/MostVisited.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/TheMenu.vue":
/*!**********************************************!*\
  !*** ./assets/components/BusApp/TheMenu.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheMenu_vue_vue_type_template_id_fc6ddd06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheMenu.vue?vue&type=template&id=fc6ddd06 */ "./assets/components/BusApp/TheMenu.vue?vue&type=template&id=fc6ddd06");
/* harmony import */ var _TheMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheMenu.vue?vue&type=script&lang=js */ "./assets/components/BusApp/TheMenu.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheMenu_vue_vue_type_template_id_fc6ddd06__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/TheMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/ThePlans.vue":
/*!***********************************************!*\
  !*** ./assets/components/BusApp/ThePlans.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ThePlans_vue_vue_type_template_id_d9515088__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThePlans.vue?vue&type=template&id=d9515088 */ "./assets/components/BusApp/ThePlans.vue?vue&type=template&id=d9515088");
/* harmony import */ var _ThePlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThePlans.vue?vue&type=script&lang=js */ "./assets/components/BusApp/ThePlans.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ThePlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ThePlans_vue_vue_type_template_id_d9515088__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/ThePlans.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/TheUserData.vue":
/*!**************************************************!*\
  !*** ./assets/components/BusApp/TheUserData.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheUserData_vue_vue_type_template_id_0f073033__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheUserData.vue?vue&type=template&id=0f073033 */ "./assets/components/BusApp/TheUserData.vue?vue&type=template&id=0f073033");
/* harmony import */ var _TheUserData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheUserData.vue?vue&type=script&lang=js */ "./assets/components/BusApp/TheUserData.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TheUserData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TheUserData_vue_vue_type_template_id_0f073033__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/TheUserData.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/BusApp/TransportPrices.vue":
/*!******************************************************!*\
  !*** ./assets/components/BusApp/TransportPrices.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransportPrices_vue_vue_type_template_id_0c805260__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransportPrices.vue?vue&type=template&id=0c805260 */ "./assets/components/BusApp/TransportPrices.vue?vue&type=template&id=0c805260");
/* harmony import */ var _TransportPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransportPrices.vue?vue&type=script&lang=js */ "./assets/components/BusApp/TransportPrices.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TransportPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TransportPrices_vue_vue_type_template_id_0c805260__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/BusApp/TransportPrices.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Forum/ForumCategories.vue":
/*!*****************************************************!*\
  !*** ./assets/components/Forum/ForumCategories.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumCategories_vue_vue_type_template_id_227e80b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumCategories.vue?vue&type=template&id=227e80b8 */ "./assets/components/Forum/ForumCategories.vue?vue&type=template&id=227e80b8");
/* harmony import */ var _ForumCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumCategories.vue?vue&type=script&lang=js */ "./assets/components/Forum/ForumCategories.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForumCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForumCategories_vue_vue_type_template_id_227e80b8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Forum/ForumCategories.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Forum/ForumHomePage.vue":
/*!***************************************************!*\
  !*** ./assets/components/Forum/ForumHomePage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumHomePage_vue_vue_type_template_id_c09e1ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumHomePage.vue?vue&type=template&id=c09e1ed4 */ "./assets/components/Forum/ForumHomePage.vue?vue&type=template&id=c09e1ed4");
/* harmony import */ var _ForumHomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumHomePage.vue?vue&type=script&lang=js */ "./assets/components/Forum/ForumHomePage.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForumHomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForumHomePage_vue_vue_type_template_id_c09e1ed4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Forum/ForumHomePage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Forum/ForumMenu.vue":
/*!***********************************************!*\
  !*** ./assets/components/Forum/ForumMenu.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumMenu_vue_vue_type_template_id_b238ad32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumMenu.vue?vue&type=template&id=b238ad32 */ "./assets/components/Forum/ForumMenu.vue?vue&type=template&id=b238ad32");
/* harmony import */ var _ForumMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumMenu.vue?vue&type=script&lang=js */ "./assets/components/Forum/ForumMenu.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForumMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForumMenu_vue_vue_type_template_id_b238ad32__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Forum/ForumMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Forum/ForumNewPost.vue":
/*!**************************************************!*\
  !*** ./assets/components/Forum/ForumNewPost.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumNewPost_vue_vue_type_template_id_4830da08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumNewPost.vue?vue&type=template&id=4830da08 */ "./assets/components/Forum/ForumNewPost.vue?vue&type=template&id=4830da08");
/* harmony import */ var _ForumNewPost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumNewPost.vue?vue&type=script&lang=js */ "./assets/components/Forum/ForumNewPost.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForumNewPost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForumNewPost_vue_vue_type_template_id_4830da08__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Forum/ForumNewPost.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Forum/ForumSavedPosts.vue":
/*!*****************************************************!*\
  !*** ./assets/components/Forum/ForumSavedPosts.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumSavedPosts_vue_vue_type_template_id_3dce5b14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumSavedPosts.vue?vue&type=template&id=3dce5b14 */ "./assets/components/Forum/ForumSavedPosts.vue?vue&type=template&id=3dce5b14");
/* harmony import */ var _ForumSavedPosts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumSavedPosts.vue?vue&type=script&lang=js */ "./assets/components/Forum/ForumSavedPosts.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForumSavedPosts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForumSavedPosts_vue_vue_type_template_id_3dce5b14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Forum/ForumSavedPosts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/Forum/ForumSearch.vue":
/*!*************************************************!*\
  !*** ./assets/components/Forum/ForumSearch.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForumSearch_vue_vue_type_template_id_aa7d9da0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForumSearch.vue?vue&type=template&id=aa7d9da0 */ "./assets/components/Forum/ForumSearch.vue?vue&type=template&id=aa7d9da0");
/* harmony import */ var _ForumSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForumSearch.vue?vue&type=script&lang=js */ "./assets/components/Forum/ForumSearch.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForumSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForumSearch_vue_vue_type_template_id_aa7d9da0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/Forum/ForumSearch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/SvgIcons/SvgBike.vue":
/*!************************************************!*\
  !*** ./assets/components/SvgIcons/SvgBike.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgBike_vue_vue_type_template_id_f3e2f572__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgBike.vue?vue&type=template&id=f3e2f572 */ "./assets/components/SvgIcons/SvgBike.vue?vue&type=template&id=f3e2f572");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_SvgBike_vue_vue_type_template_id_f3e2f572__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgBike.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/SvgIcons/SvgDelete.vue":
/*!**************************************************!*\
  !*** ./assets/components/SvgIcons/SvgDelete.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgDelete_vue_vue_type_template_id_9b6f52de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgDelete.vue?vue&type=template&id=9b6f52de */ "./assets/components/SvgIcons/SvgDelete.vue?vue&type=template&id=9b6f52de");
/* harmony import */ var _SvgDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgDelete.vue?vue&type=script&lang=js */ "./assets/components/SvgIcons/SvgDelete.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SvgDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SvgDelete_vue_vue_type_template_id_9b6f52de__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgDelete.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/SvgIcons/SvgLogout.vue":
/*!**************************************************!*\
  !*** ./assets/components/SvgIcons/SvgLogout.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgLogout_vue_vue_type_template_id_2b60def0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgLogout.vue?vue&type=template&id=2b60def0 */ "./assets/components/SvgIcons/SvgLogout.vue?vue&type=template&id=2b60def0");
/* harmony import */ var _SvgLogout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgLogout.vue?vue&type=script&lang=js */ "./assets/components/SvgIcons/SvgLogout.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SvgLogout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SvgLogout_vue_vue_type_template_id_2b60def0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgLogout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/SvgIcons/SvgMap.vue":
/*!***********************************************!*\
  !*** ./assets/components/SvgIcons/SvgMap.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgMap_vue_vue_type_template_id_3c2ebe34__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgMap.vue?vue&type=template&id=3c2ebe34 */ "./assets/components/SvgIcons/SvgMap.vue?vue&type=template&id=3c2ebe34");
/* harmony import */ var _SvgMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgMap.vue?vue&type=script&lang=js */ "./assets/components/SvgIcons/SvgMap.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SvgMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SvgMap_vue_vue_type_template_id_3c2ebe34__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgMap.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/SvgIcons/SvgPrice.vue":
/*!*************************************************!*\
  !*** ./assets/components/SvgIcons/SvgPrice.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgPrice_vue_vue_type_template_id_d7ca0c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgPrice.vue?vue&type=template&id=d7ca0c5a */ "./assets/components/SvgIcons/SvgPrice.vue?vue&type=template&id=d7ca0c5a");
/* harmony import */ var _SvgPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgPrice.vue?vue&type=script&lang=js */ "./assets/components/SvgIcons/SvgPrice.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SvgPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SvgPrice_vue_vue_type_template_id_d7ca0c5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgPrice.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/components/SvgIcons/SvgTrophy.vue":
/*!**************************************************!*\
  !*** ./assets/components/SvgIcons/SvgTrophy.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgTrophy_vue_vue_type_template_id_2efe66d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgTrophy.vue?vue&type=template&id=2efe66d4 */ "./assets/components/SvgIcons/SvgTrophy.vue?vue&type=template&id=2efe66d4");
/* harmony import */ var _SvgTrophy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgTrophy.vue?vue&type=script&lang=js */ "./assets/components/SvgIcons/SvgTrophy.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Edu_Documents_emt_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SvgTrophy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SvgTrophy_vue_vue_type_template_id_2efe66d4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/components/SvgIcons/SvgTrophy.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/App.vue?vue&type=script&lang=js":
/*!************************************************!*\
  !*** ./assets/App.vue?vue&type=script&lang=js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/FavouriteStops.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./assets/components/BusApp/FavouriteStops.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FavouriteStops_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FavouriteStops_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FavouriteStops.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/FavouriteStops.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/MostVisited.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/BusApp/MostVisited.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MostVisited_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MostVisited_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MostVisited.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/MostVisited.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/TheMenu.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./assets/components/BusApp/TheMenu.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/ThePlans.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./assets/components/BusApp/ThePlans.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThePlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThePlans_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ThePlans.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/ThePlans.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/TheUserData.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/BusApp/TheUserData.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheUserData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheUserData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheUserData.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheUserData.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/BusApp/TransportPrices.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./assets/components/BusApp/TransportPrices.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransportPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransportPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransportPrices.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TransportPrices.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Forum/ForumCategories.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./assets/components/Forum/ForumCategories.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumCategories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumCategories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumCategories.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Forum/ForumHomePage.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./assets/components/Forum/ForumHomePage.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumHomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumHomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumHomePage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumHomePage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Forum/ForumMenu.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./assets/components/Forum/ForumMenu.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Forum/ForumNewPost.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/Forum/ForumNewPost.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumNewPost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumNewPost_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumNewPost.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumNewPost.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Forum/ForumSavedPosts.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./assets/components/Forum/ForumSavedPosts.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSavedPosts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSavedPosts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumSavedPosts.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSavedPosts.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/Forum/ForumSearch.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/components/Forum/ForumSearch.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumSearch.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSearch.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/SvgIcons/SvgDelete.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgDelete.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgDelete.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgDelete.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/SvgIcons/SvgLogout.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgLogout.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgLogout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/SvgIcons/SvgMap.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgMap.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgMap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgMap.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/SvgIcons/SvgPrice.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgPrice.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgPrice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgPrice.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/components/SvgIcons/SvgTrophy.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgTrophy.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgTrophy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgTrophy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgTrophy.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgTrophy.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/App.vue?vue&type=template&id=5bcdaf03":
/*!******************************************************!*\
  !*** ./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=5bcdaf03 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03");


/***/ }),

/***/ "./assets/components/BusApp/FavouriteStops.vue?vue&type=template&id=4fef0d0b":
/*!***********************************************************************************!*\
  !*** ./assets/components/BusApp/FavouriteStops.vue?vue&type=template&id=4fef0d0b ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FavouriteStops_vue_vue_type_template_id_4fef0d0b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FavouriteStops_vue_vue_type_template_id_4fef0d0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FavouriteStops.vue?vue&type=template&id=4fef0d0b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/FavouriteStops.vue?vue&type=template&id=4fef0d0b");


/***/ }),

/***/ "./assets/components/BusApp/MostVisited.vue?vue&type=template&id=1f7a9834":
/*!********************************************************************************!*\
  !*** ./assets/components/BusApp/MostVisited.vue?vue&type=template&id=1f7a9834 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MostVisited_vue_vue_type_template_id_1f7a9834__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MostVisited_vue_vue_type_template_id_1f7a9834__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MostVisited.vue?vue&type=template&id=1f7a9834 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/MostVisited.vue?vue&type=template&id=1f7a9834");


/***/ }),

/***/ "./assets/components/BusApp/TheMenu.vue?vue&type=template&id=fc6ddd06":
/*!****************************************************************************!*\
  !*** ./assets/components/BusApp/TheMenu.vue?vue&type=template&id=fc6ddd06 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheMenu_vue_vue_type_template_id_fc6ddd06__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheMenu_vue_vue_type_template_id_fc6ddd06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheMenu.vue?vue&type=template&id=fc6ddd06 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheMenu.vue?vue&type=template&id=fc6ddd06");


/***/ }),

/***/ "./assets/components/BusApp/ThePlans.vue?vue&type=template&id=d9515088":
/*!*****************************************************************************!*\
  !*** ./assets/components/BusApp/ThePlans.vue?vue&type=template&id=d9515088 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThePlans_vue_vue_type_template_id_d9515088__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThePlans_vue_vue_type_template_id_d9515088__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ThePlans.vue?vue&type=template&id=d9515088 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/ThePlans.vue?vue&type=template&id=d9515088");


/***/ }),

/***/ "./assets/components/BusApp/TheUserData.vue?vue&type=template&id=0f073033":
/*!********************************************************************************!*\
  !*** ./assets/components/BusApp/TheUserData.vue?vue&type=template&id=0f073033 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheUserData_vue_vue_type_template_id_0f073033__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheUserData_vue_vue_type_template_id_0f073033__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheUserData.vue?vue&type=template&id=0f073033 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TheUserData.vue?vue&type=template&id=0f073033");


/***/ }),

/***/ "./assets/components/BusApp/TransportPrices.vue?vue&type=template&id=0c805260":
/*!************************************************************************************!*\
  !*** ./assets/components/BusApp/TransportPrices.vue?vue&type=template&id=0c805260 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransportPrices_vue_vue_type_template_id_0c805260__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransportPrices_vue_vue_type_template_id_0c805260__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransportPrices.vue?vue&type=template&id=0c805260 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/BusApp/TransportPrices.vue?vue&type=template&id=0c805260");


/***/ }),

/***/ "./assets/components/Forum/ForumCategories.vue?vue&type=template&id=227e80b8":
/*!***********************************************************************************!*\
  !*** ./assets/components/Forum/ForumCategories.vue?vue&type=template&id=227e80b8 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumCategories_vue_vue_type_template_id_227e80b8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumCategories_vue_vue_type_template_id_227e80b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumCategories.vue?vue&type=template&id=227e80b8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumCategories.vue?vue&type=template&id=227e80b8");


/***/ }),

/***/ "./assets/components/Forum/ForumHomePage.vue?vue&type=template&id=c09e1ed4":
/*!*********************************************************************************!*\
  !*** ./assets/components/Forum/ForumHomePage.vue?vue&type=template&id=c09e1ed4 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumHomePage_vue_vue_type_template_id_c09e1ed4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumHomePage_vue_vue_type_template_id_c09e1ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumHomePage.vue?vue&type=template&id=c09e1ed4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumHomePage.vue?vue&type=template&id=c09e1ed4");


/***/ }),

/***/ "./assets/components/Forum/ForumMenu.vue?vue&type=template&id=b238ad32":
/*!*****************************************************************************!*\
  !*** ./assets/components/Forum/ForumMenu.vue?vue&type=template&id=b238ad32 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumMenu_vue_vue_type_template_id_b238ad32__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumMenu_vue_vue_type_template_id_b238ad32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumMenu.vue?vue&type=template&id=b238ad32 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumMenu.vue?vue&type=template&id=b238ad32");


/***/ }),

/***/ "./assets/components/Forum/ForumNewPost.vue?vue&type=template&id=4830da08":
/*!********************************************************************************!*\
  !*** ./assets/components/Forum/ForumNewPost.vue?vue&type=template&id=4830da08 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumNewPost_vue_vue_type_template_id_4830da08__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumNewPost_vue_vue_type_template_id_4830da08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumNewPost.vue?vue&type=template&id=4830da08 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumNewPost.vue?vue&type=template&id=4830da08");


/***/ }),

/***/ "./assets/components/Forum/ForumSavedPosts.vue?vue&type=template&id=3dce5b14":
/*!***********************************************************************************!*\
  !*** ./assets/components/Forum/ForumSavedPosts.vue?vue&type=template&id=3dce5b14 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSavedPosts_vue_vue_type_template_id_3dce5b14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSavedPosts_vue_vue_type_template_id_3dce5b14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumSavedPosts.vue?vue&type=template&id=3dce5b14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSavedPosts.vue?vue&type=template&id=3dce5b14");


/***/ }),

/***/ "./assets/components/Forum/ForumSearch.vue?vue&type=template&id=aa7d9da0":
/*!*******************************************************************************!*\
  !*** ./assets/components/Forum/ForumSearch.vue?vue&type=template&id=aa7d9da0 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSearch_vue_vue_type_template_id_aa7d9da0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForumSearch_vue_vue_type_template_id_aa7d9da0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForumSearch.vue?vue&type=template&id=aa7d9da0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/Forum/ForumSearch.vue?vue&type=template&id=aa7d9da0");


/***/ }),

/***/ "./assets/components/SvgIcons/SvgBike.vue?vue&type=template&id=f3e2f572":
/*!******************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgBike.vue?vue&type=template&id=f3e2f572 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgBike_vue_vue_type_template_id_f3e2f572__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgBike_vue_vue_type_template_id_f3e2f572__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgBike.vue?vue&type=template&id=f3e2f572 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgBike.vue?vue&type=template&id=f3e2f572");


/***/ }),

/***/ "./assets/components/SvgIcons/SvgDelete.vue?vue&type=template&id=9b6f52de":
/*!********************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgDelete.vue?vue&type=template&id=9b6f52de ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgDelete_vue_vue_type_template_id_9b6f52de__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgDelete_vue_vue_type_template_id_9b6f52de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgDelete.vue?vue&type=template&id=9b6f52de */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgDelete.vue?vue&type=template&id=9b6f52de");


/***/ }),

/***/ "./assets/components/SvgIcons/SvgLogout.vue?vue&type=template&id=2b60def0":
/*!********************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgLogout.vue?vue&type=template&id=2b60def0 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogout_vue_vue_type_template_id_2b60def0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgLogout_vue_vue_type_template_id_2b60def0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgLogout.vue?vue&type=template&id=2b60def0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgLogout.vue?vue&type=template&id=2b60def0");


/***/ }),

/***/ "./assets/components/SvgIcons/SvgMap.vue?vue&type=template&id=3c2ebe34":
/*!*****************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgMap.vue?vue&type=template&id=3c2ebe34 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgMap_vue_vue_type_template_id_3c2ebe34__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgMap_vue_vue_type_template_id_3c2ebe34__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgMap.vue?vue&type=template&id=3c2ebe34 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgMap.vue?vue&type=template&id=3c2ebe34");


/***/ }),

/***/ "./assets/components/SvgIcons/SvgPrice.vue?vue&type=template&id=d7ca0c5a":
/*!*******************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgPrice.vue?vue&type=template&id=d7ca0c5a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgPrice_vue_vue_type_template_id_d7ca0c5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgPrice_vue_vue_type_template_id_d7ca0c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgPrice.vue?vue&type=template&id=d7ca0c5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgPrice.vue?vue&type=template&id=d7ca0c5a");


/***/ }),

/***/ "./assets/components/SvgIcons/SvgTrophy.vue?vue&type=template&id=2efe66d4":
/*!********************************************************************************!*\
  !*** ./assets/components/SvgIcons/SvgTrophy.vue?vue&type=template&id=2efe66d4 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgTrophy_vue_vue_type_template_id_2efe66d4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgTrophy_vue_vue_type_template_id_2efe66d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgTrophy.vue?vue&type=template&id=2efe66d4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/components/SvgIcons/SvgTrophy.vue?vue&type=template&id=2efe66d4");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_dist_exportHelper_js-node_modules_vue_dist_vue_esm-bundler_js","vendors-node_modules_axios_lib_axios_js","assets_styles_app_css","assets_styles_app_css-assets_components_BusApp_TheHeader_vue-assets_components_Messages_Confi-a04abb","assets_components_BusApp_BikeTime_vue-assets_components_BusApp_BusTime_vue-assets_components_-6a595f"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUN0QnNEO0FBQ1Y7QUFDTDs7QUFFdEQsQ0FBNkc7QUFDN0csaUNBQWlDLGtIQUFlLENBQUMsNkVBQU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdUQ7QUFDVjtBQUNMOztBQUV2RCxDQUE2RztBQUM3RyxpQ0FBaUMsa0hBQWUsQ0FBQyw4RUFBTSxhQUFhLGdGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3RCNks7Ozs7Ozs7Ozs7Ozs7OztBQ0F1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDQUg7Ozs7Ozs7Ozs7Ozs7OztBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7QUNBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUc7Ozs7Ozs7Ozs7Ozs7OztBQ0FJOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUY7Ozs7Ozs7Ozs7Ozs7OztBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7QUNBRzs7Ozs7Ozs7Ozs7Ozs7O0FDQUc7Ozs7Ozs7Ozs7Ozs7OztBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7QUNBRjs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FIOzs7Ozs7Ozs7Ozs7Ozs7QUNBRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9GYXZvdXJpdGVTdG9wcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL01vc3RWaXNpdGVkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVBsYW5zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlVXNlckRhdGEudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UcmFuc3BvcnRQcmljZXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtQ2F0ZWdvcmllcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1Ib21lUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1NZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bU5ld1Bvc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtU2F2ZWRQb3N0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1TZWFyY2gudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0RlbGV0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3ZnSWNvbnMvU3ZnTG9nb3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdNYXAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z1ByaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdUcm9waHkudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0Jpa2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzg5ZGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL0Zhdm91cml0ZVN0b3BzLnZ1ZT8yMGI1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9Nb3N0VmlzaXRlZC52dWU/ZjE0YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlTWVudS52dWU/MTZlNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlUGxhbnMudnVlPzU3MTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVVzZXJEYXRhLnZ1ZT8wZWI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UcmFuc3BvcnRQcmljZXMudnVlP2NjZmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1DYXRlZ29yaWVzLnZ1ZT8xNjFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtSG9tZVBhZ2UudnVlPzVjNzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1NZW51LnZ1ZT8zMGNhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtTmV3UG9zdC52dWU/YzMzMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bVNhdmVkUG9zdHMudnVlPzkzMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1TZWFyY2gudnVlPzM0ZTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3ZnSWNvbnMvU3ZnQmlrZS52dWU/YWJhMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdEZWxldGUudnVlPzVlZGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3ZnSWNvbnMvU3ZnTG9nb3V0LnZ1ZT8wNTZkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z01hcC52dWU/YjQyNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdQcmljZS52dWU/ZTQ5OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdUcm9waHkudnVlP2E1MzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/MTE5MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvRmF2b3VyaXRlU3RvcHMudnVlP2EzZjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL01vc3RWaXNpdGVkLnZ1ZT8yY2NiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVNZW51LnZ1ZT83MjhhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVQbGFucy52dWU/YTA2NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlVXNlckRhdGEudnVlP2NiMmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RyYW5zcG9ydFByaWNlcy52dWU/MzM1YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bUNhdGVnb3JpZXMudnVlPzEyYmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1Ib21lUGFnZS52dWU/ZTE4YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bU1lbnUudnVlP2IwYzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1OZXdQb3N0LnZ1ZT85MmY5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtU2F2ZWRQb3N0cy52dWU/OGM5MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bVNlYXJjaC52dWU/MWU2OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdEZWxldGUudnVlPzNlODYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3ZnSWNvbnMvU3ZnTG9nb3V0LnZ1ZT9kYTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z01hcC52dWU/YTk4OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdQcmljZS52dWU/Y2E3OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdUcm9waHkudnVlP2NlNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/NWUwYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvRmF2b3VyaXRlU3RvcHMudnVlPzk3YjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL01vc3RWaXNpdGVkLnZ1ZT81OWE1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVNZW51LnZ1ZT9hYWIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVQbGFucy52dWU/MTVkNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVGhlVXNlckRhdGEudnVlPzkyNjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RyYW5zcG9ydFByaWNlcy52dWU/MmMyYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bUNhdGVnb3JpZXMudnVlP2RlNGYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1Ib21lUGFnZS52dWU/MDUzMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bU1lbnUudnVlPzY1Y2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1OZXdQb3N0LnZ1ZT9jZDg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtU2F2ZWRQb3N0cy52dWU/NTk0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bVNlYXJjaC52dWU/N2E2YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdCaWtlLnZ1ZT85MWY3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0RlbGV0ZS52dWU/NDFkMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdMb2dvdXQudnVlPzVlZWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU3ZnSWNvbnMvU3ZnTWFwLnZ1ZT9mZDg2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z1ByaWNlLnZ1ZT8wZjc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z1Ryb3BoeS52dWU/YTMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbndpbmRvdy5fX1ZVRV9PUFRJT05TX0FQSV9fID0gdHJ1ZTtcbndpbmRvdy5fX1ZVRV9QUk9EX0RFVlRPT0xTX18gPSBmYWxzZTtcblxuY3JlYXRlQXBwKEFwcCkubW91bnQoJyNhcHAnKSIsIjx0ZW1wbGF0ZT5cbiAgPHRoZS1oZWFkZXI+PC90aGUtaGVhZGVyPlxuICA8dGhlLW1lbnUgQGNoYW5nZS10YWI9XCJjaGFuZ2VUYWJcIj48L3RoZS1tZW51PlxuICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04IG1kOm10LTE2XCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJzZWxlY3RlZFRhYlwiID48L2NvbXBvbmVudD5cblxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFRoZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9UaGVIZWFkZXIudnVlXCI7XG5pbXBvcnQgVGhlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9UaGVNZW51LnZ1ZVwiO1xuaW1wb3J0IEJ1c1RpbWUgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvQnVzVGltZS52dWVcIjtcbmltcG9ydCBUaGVVc2VyRGF0YSBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9UaGVVc2VyRGF0YS52dWVcIjtcbmltcG9ydCBUaGVQbGFucyBmcm9tIFwiLi9jb21wb25lbnRzL0J1c0FwcC9UaGVQbGFucy52dWVcIjtcbmltcG9ydCBUcmFuc3BvcnRQcmljZXMgZnJvbSBcIi4vY29tcG9uZW50cy9CdXNBcHAvVHJhbnNwb3J0UHJpY2VzLnZ1ZVwiO1xuaW1wb3J0IEJpa2VUaW1lIGZyb20gXCIuL2NvbXBvbmVudHMvQnVzQXBwL0Jpa2VUaW1lLnZ1ZVwiO1xuaW1wb3J0IEZhdm91cml0ZVN0b3BzIGZyb20gXCIuL2NvbXBvbmVudHMvQnVzQXBwL0Zhdm91cml0ZVN0b3BzLnZ1ZVwiO1xuaW1wb3J0IE1vc3RWaXNpdGVkIGZyb20gXCIuL2NvbXBvbmVudHMvQnVzQXBwL01vc3RWaXNpdGVkLnZ1ZVwiO1xuaW1wb3J0IEZvcnVtSG9tZVBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3J1bS9Gb3J1bUhvbWVQYWdlLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7QnVzVGltZSwgVGhlTWVudSwgVGhlSGVhZGVyLCBUaGVVc2VyRGF0YSwgVGhlUGxhbnMsIFRyYW5zcG9ydFByaWNlcywgQmlrZVRpbWUsIEZhdm91cml0ZVN0b3BzLCBNb3N0VmlzaXRlZCxGb3J1bUhvbWVQYWdlfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZFRhYjogJ2J1cy10aW1lJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczp7XG4gICAgY2hhbmdlVGFiKHRhYikge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRUYWIpO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDBcIj5cclxuICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBweS04XCI+VHVzIHBhcmFkYXMgZmF2b3JpdGFzPC9oMj5cclxuICAgIDxkaXYgdi1pZj1cImRhdGFFeGlzdHNcIiBjbGFzcz1cIm1heC13LTd4bCBteC1hdXRvIHB5LTYgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIGJvcmRlci1jb2xsYXBzZSBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTIgdGV4dC1sZWZ0XCI+Q29kaWdvIGRlIGxhIHBhcmFkYTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LWxlZnQgaGlkZGVuIGxnOmJsb2NrXCI+Tm9tYnJlIGRlIGxhIHBhcmFkYTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5Ob21icmUgcGVyc29uYWxpemFkbzwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5BdXRvYnVzZXMgcXVlIHBhcmFuIGFoaTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LWxlZnQgaGlkZGVuIGxnOmJsb2NrXCI+TnVtZXJvIGRlIHZlY2VzIHF1ZSBoYXMgdmlzaXRhZG8gbGEgcGFyYWRhPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yIHRleHQtbGVmdFwiPjwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keSBjbGFzcz1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgPHRyIHYtZm9yPVwic3RvcCBpbiBzdG9wc0FycmF5XCIgOmtleT1cInN0b3Auc3RvcElkXCI+XHJcbiAgICAgICAgICAgIDx0ZWxlcG9ydCB2LWlmPVwiYXNrQ29uZmlybVwiIHRvPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxjb25maXJtLW1lc3NhZ2UgOm1lc3NhZ2U9XCInRXN0w6FzIHNlZ3VybyBkZSBxdWUgcXVpZXJlcyBib3JyYXIgbGEgcGFyYWRhICcgK2NvbmZpcm1TdG9wSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsb3NlLWVycm9yPVwidGhpcy5hc2tDb25maXJtPWZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImRlbGV0ZVN0b3AoY29uZmlybVN0b3BJZClcIiBjbGFzcz1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0zIHJvdW5kZWQgaG92ZXI6YmctcmVkLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj5TSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIHB5LTEgcHgtMyBtbC00IHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCIgQGNsaWNrPVwidGhpcy5hc2tDb25maXJtPWZhbHNlXCI+Tk88L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2NvbmZpcm0tbWVzc2FnZT5cclxuICAgICAgICAgICAgPC90ZWxlcG9ydD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt7IHN0b3Auc3RvcElkIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMiBoaWRkZW4gbGc6YmxvY2tcIj57eyBzdG9wLnN0b3BOYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt7IHN0b3AuY3VzdG9tTmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiYnVzIGluIHN0b3AuYnVzZXNcIiBjbGFzcz1cImJnLWJsdWUtMjAwIHJvdW5kZWQtZnVsbCBweS0xIHB4LTNcIj57eyBidXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTIgaGlkZGVuIGxnOmJsb2NrXCI+e3sgc3RvcC50aW1lc1Zpc2l0ZWQgfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjb25maXJtRGVsZXRlU3RvcChzdG9wLnN0b3BJZClcIiBjbGFzcz1cImJnLWdyYXktMjAwIGhvdmVyOmJnLWdyYXktMzAwIHJvdW5kZWQtZnVsbCBwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmctZGVsZXRlIGNsYXNzPVwidy02IGgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS04XCI+XHJcbiAgICAgIDxwPkF1biBubyB0aWVuZXMgcGFyYWRhcyBmYXZvcml0YXM8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTdmdEZWxldGUgZnJvbSBcIi4uL1N2Z0ljb25zL1N2Z0RlbGV0ZS52dWVcIjtcclxuaW1wb3J0IENvbmZpcm1NZXNzYWdlIGZyb20gXCIuLi9NZXNzYWdlcy9Db25maXJtTWVzc2FnZS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7Q29uZmlybU1lc3NhZ2UsIFN2Z0RlbGV0ZX0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFFeGlzdHM6IG51bGwsXHJcbiAgICAgIHN0b3BzQXJyYXk6IFtdLFxyXG4gICAgICBhc2tDb25maXJtOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuZ2V0RmF2b3VyaXRlU3RvcHMoKVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZ2V0RmF2b3VyaXRlU3RvcHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXNrRm9yVXNlckZhdm91cml0ZXMnKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdG9wc0FycmF5KTtcclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RvcHNBcnJheSAhPT0gJ0VtcHR5Jykge1xyXG4gICAgICAgIHRoaXMuc3RvcHNBcnJheSA9IHJlc3BvbnNlLmRhdGEuc3RvcHNBcnJheVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuc3RvcHNBcnJheSlcclxuICAgICAgICB0aGlzLmRhdGFFeGlzdHMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29uZmlybURlbGV0ZVN0b3Aoc3RvcElkKSB7XHJcbiAgICAgIHRoaXMuYXNrQ29uZmlybSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY29uZmlybVN0b3BJZCA9IHN0b3BJZDtcclxuICAgIH0sXHJcbiAgICBhc3luYyBkZWxldGVTdG9wKHN0b3ApIHtcclxuICAgICAgZGVsZXRlIHRoaXMuc3RvcHNBcnJheVtzdG9wXTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3RvcHNBcnJheSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICB0aGlzLmRhdGFFeGlzdHMgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhzdG9wKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9yZW1vdmVGYXZvdXJpdGUnLCB7XHJcbiAgICAgICAgJ2J1c0NvZGUnOiBzdG9wXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuYXNrQ29uZmlybSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBwLTQgbWItMTBcIj5cclxuICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBcIj5Ub3AgMTAgcGFyYWRhcyBtw6FzIHZpc2l0YWRhczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwidy1mdWxsIHRhYmxlLWF1dG8gbXQtMlwiPlxyXG4gICAgICA8dGhlYWQgY2xhc3M9XCJiZy1ncmF5LTIwMFwiPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweS0yIHB4LTRcIj5Dw7NkaWdvIGRlIHBhcmFkYTwvdGg+XHJcbiAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweS0yIHB4LTRcIj5WZWNlcyB2aXNpdGFkYTwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIDx0Ym9keT5cclxuICAgICAgPHRyIHYtZm9yPVwic3RvcCBpbiBzdG9wc0FycmF5XCIgOmtleT1cInN0b3Auc3RvcElkXCI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweS0yIHB4LTRcIj57eyBzdG9wLnN0b3BJZCB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweS0yIHB4LTRcIj57eyBzdG9wLnRpbWVzVmlzaXRlZCB9fTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuZ2V0TW9zdFZpc2l0ZWQoKTtcclxuICB9LFxyXG4gIGRhdGEoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0b3BzQXJyYXk6W11cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgYXN5bmMgZ2V0TW9zdFZpc2l0ZWQoKSB7XHJcbiAgICAgY29uc29sZS5sb2coJ2xvIGxsYW1vJylcclxuICAgICAgY29uc3QgcmVzcG9uc2U9YXdhaXQgYXhpb3MuZ2V0KCcvZ2V0TW9zdFZpc2l0ZWQnKTtcclxuICAgICAgdGhpcy5zdG9wc0FycmF5PShyZXNwb25zZS5kYXRhLnN0b3BzQXJyYXkpXHJcbiAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5zdG9wc0FycmF5KVxyXG4gICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuIDwhLS0gPG1lbnUgY2xhc3M9XCJiZy1ncmF5LTEwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgIDxidXR0b24gIEBjbGljaz1cImNoYW5nZVRhYignYnVzLXRpbWUnKVwiPlBhcmFkYTxzdmctYnVzLz48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiY2hhbmdlVGFiKCdmYXZvdXJpdGUtc3RvcHMnKVwiPk1pcyBzaXRpb3M8c3ZnLXN0YXIvPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiAgQGNsaWNrPVwiY2hhbmdlVGFiKCdmb3J1bS1ob21lLXBhZ2UnKVwiPkZvcm88c3ZnLWZvcnVtLz48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gICBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3RoZS11c2VyLWRhdGEnKVwiPk1pIHBlcmZpbDxzdmctdXNlci8+PC9idXR0b24+XG4gICAgICA8YnV0dG9uICBAY2xpY2s9XCJjaGFuZ2VUYWIoJ3RoZS1wbGFucycpXCI+UGxhbm9zIGRlIG1ldHJvPHN2Zy1tYXAvPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiAgQGNsaWNrPVwiY2hhbmdlVGFiKCd0cmFuc3BvcnQtcHJpY2VzJylcIj5QcmVjaW9zIHkgdGFyaWZhczxzdmctcHJpY2UvPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ2Jpa2UtdGltZScpXCI+Q29uc3VsdGEgdHUgcGFyYWRhIGRlIGJpY2lNQUQ8c3ZnLWJpa2UvPjwvYnV0dG9uPlxuXG5cblxuICAgICAgPGJ1dHRvbiAgQGNsaWNrPVwiY2hhbmdlVGFiKCdtb3N0LXZpc2l0ZWQnKVwiPlBhcmFkYXMgbWFzIHZpc2l0YWRhcyA8c3ZnLXRyb3BoeS8+IDwvYnV0dG9uPlxuXG4gICAgICA8YSBocmVmPVwiL2xvZ291dFwiIGNsYXNzPVwibXItMiBmbGV4LTEgaG92ZXI6YmctZ3JheS00MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcm91bmRlZC1tZCBweC00IHB5LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgYmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGJsb2NrIHRleHQtY2VudGVyXCI+Q2VycmFyIHNlc2nDs248c3ZnLWxvZ291dC8+PC9hPlxuICAgIDwvZGl2PlxuICA8L21lbnU+LS0+XG4gPG5hdiBjbGFzcz1cImJnLWdyYXktMTAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZ1wiPlxuXG4gICAgPCEtLWhhbWJ1cmd1ZXIgYnV0dG9uLS0+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNCBweS0zIG1kOnB5LTQgbWQ6aGlkZGVuXCI+XG5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJibG9jayBcIiBAY2xpY2s9XCJzaG93TW9iaWxlTWVudSA9ICFzaG93TW9iaWxlTWVudVwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNiBmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuXG48IS0tQ2F0ZWdvcmllcyBmb3IgdGhlIGhhbWJ1cmd1ZXIgbWVudS0tPlxuICAgIDxkaXYgdi1zaG93PVwiIXNob3dNb2JpbGVNZW51XCIgY2xhc3M9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1yLTIgIGhvdmVyOmJnLWdyYXktNTAwIGZsZXgtMSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgcmVsYXRpdmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdiZy1ncmF5LTUwMCc6IGlzVGFiQWN0aXZlKCdidXMtdGltZScpLCAnYmctZ3JheS00MDAnOiAhaXNUYWJBY3RpdmUoJ2J1cy10aW1lJykgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUYWJNb2JpbGUoJ2J1cy10aW1lJylcIlxuICAgICAgICA+XG4gICAgICAgICAgQ29uc3VsdGEgdHUgcGFyYWRhIGRlIGF1dG9idXM8c3ZnLWJ1cyBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgbXQtMSBtci0xXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSByZWxhdGl2ZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JnLWdyYXktNTAwJzogaXNUYWJBY3RpdmUoJ2Zhdm91cml0ZS1zdG9wcycpLCAnYmctZ3JheS00MDAnOiAhaXNUYWJBY3RpdmUoJ2Zhdm91cml0ZS1zdG9wcycpIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiTW9iaWxlKCdmYXZvdXJpdGUtc3RvcHMnKVwiXG4gICAgICAgID5cbiAgICAgICAgICBNaXMgc2l0aW9zPHN2Zy1zdGFyLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSByZWxhdGl2ZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2JnLWdyYXktNTAwJzogaXNUYWJBY3RpdmUoJ2ZvcnVtLWhvbWUtcGFnZScpLCAnYmctZ3JheS00MDAnOiAhaXNUYWJBY3RpdmUoJ2ZvcnVtLWhvbWUtcGFnZScpIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiTW9iaWxlKCdmb3J1bS1ob21lLXBhZ2UnKVwiXG4gICAgICAgID5Gb3JvPHN2Zy1mb3J1bS8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1yLTIgIGhvdmVyOmJnLWdyYXktNTAwIGZsZXgtMSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgcmVsYXRpdmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdiZy1ncmF5LTUwMCc6IGlzVGFiQWN0aXZlKCd0aGUtdXNlci1kYXRhJyksICdiZy1ncmF5LTQwMCc6ICFpc1RhYkFjdGl2ZSgndGhlLXVzZXItZGF0YScpIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiTW9iaWxlKCd0aGUtdXNlci1kYXRhJylcIlxuICAgICAgICA+TWkgcGVyZmlsPHN2Zy11c2VyLz5cbiAgICAgICAgPC9idXR0b24+XG5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1yLTIgIGhvdmVyOmJnLWdyYXktNTAwIGZsZXgtMSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgcmVsYXRpdmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdiZy1ncmF5LTUwMCc6IGlzVGFiQWN0aXZlKCd0aGUtcGxhbnMnKSwgJ2JnLWdyYXktNDAwJzogIWlzVGFiQWN0aXZlKCd0aGUtcGxhbnMnKSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYk1vYmlsZSgndGhlLXBsYW5zJylcIlxuICAgICAgICA+UGxhbm9zIGRlIG1ldHJvPHN2Zy1tYXAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSByZWxhdGl2ZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwieyAnYmctZ3JheS01MDAnOiBpc1RhYkFjdGl2ZSgndHJhbnNwb3J0LXByaWNlcycpLCAnYmctZ3JheS00MDAnOiAhaXNUYWJBY3RpdmUoJ3RyYW5zcG9ydC1wcmljZXMnKSB9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiTW9iaWxlKCd0cmFuc3BvcnQtcHJpY2VzJylcIlxuICAgICAgICAgID5QcmVjaW9zIHkgdGFyaWZhczxzdmctcHJpY2UvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1yLTIgIGhvdmVyOmJnLWdyYXktNTAwIGZsZXgtMSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgcmVsYXRpdmUgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdiZy1ncmF5LTUwMCc6IGlzVGFiQWN0aXZlKCdiaWtlLXRpbWUnKSwgJ2JnLWdyYXktNDAwJzogIWlzVGFiQWN0aXZlKCdiaWtlLXRpbWUnKSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYk1vYmlsZSgnYmlrZS10aW1lJylcIlxuICAgICAgICA+Q29uc3VsdGEgdHUgcGFyYWRhIGRlIGJpY2lNQUQ8c3ZnLWJpa2UvPlxuICAgICAgICA8L2J1dHRvbj5cblxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGVcbiAgICAgICAgICAgIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFxuICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHJlbGF0aXZlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnYmctZ3JheS01MDAnOiBpc1RhYkFjdGl2ZSgnbW9zdC12aXNpdGVkJyksICdiZy1ncmF5LTQwMCc6ICFpc1RhYkFjdGl2ZSgnbW9zdC12aXNpdGVkJykgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUYWJNb2JpbGUoJ21vc3QtdmlzaXRlZCcpXCJcbiAgICAgICAgPlBhcmFkYXMgbWFzIHZpc2l0YWRhcyA8c3ZnLXRyb3BoeS8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YSBocmVmPVwiL2xvZ291dFwiIGNsYXNzPVwibXItMiAgaG92ZXI6YmctZ3JheS01MDAgZmxleC0xIHRleHQtd2hpdGVcbiAgICAgICAgICAgIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFxuICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHJlbGF0aXZlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgYmctZ3JheS00MDBcIj5cbiAgICAgICAgICBDZXJyYXIgc2VzacOzbjxzdmctbG9nb3V0Lz48L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiB2LXNob3c9XCJzaG93TW9iaWxlTWVudVwiIGNsYXNzPVwibWQ6aGlkZGVuXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJweC0yIHB0LTIgcGItM1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYignYnVzLXRpbWUnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5Db25zdWx0YSB0dSBwYXJhZGEgZGUgYXV0b2J1czwvc3Bhbj5cbiAgICAgICAgICA8c3ZnLWJ1cyBjbGFzcz1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYignZmF2b3VyaXRlLXN0b3BzJylcIlxuICAgICAgICA+XG4gICAgICAgICAgTWlzIHNpdGlvczxzdmctc3Rhci8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYignZm9ydW0taG9tZS1wYWdlJylcIlxuICAgICAgICA+XG4gICAgICAgICAgRm9ybzxzdmctZm9ydW0vPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYigndGhlLXVzZXItZGF0YScpXCJcbiAgICAgICAgPlxuICAgICAgICAgIE1pIHBlcmZpbDxzdmctdXNlci8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiKCd0aGUtcGxhbnMnKVwiXG4gICAgICAgID5cbiAgICAgICAgICBQbGFub3MgZGUgbWV0cm88c3ZnLW1hcC8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCB0ZXh0LWxlZnQgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVRhYigndHJhbnNwb3J0LXByaWNlcycpXCJcbiAgICAgICAgPlxuICAgICAgICAgIFByZWNpb3MgeSB0YXJpZmFzPHN2Zy1wcmljZS8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHRleHQtbGVmdCBweS0yIHB4LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS00MDBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGFiKCdtb3N0LXZpc2l0ZWQnKVwiXG4gICAgICAgID5cbiAgICAgICAgICBQYXJhZGFzIG1hcyB2aXNpdGFkYXMgPHN2Zy10cm9waHkvPlxuICAgICAgICA8L2J1dHRvbj5cblxuXG5cbiAgICAgICAgPGEgaHJlZj1cIi9sb2dvdXRcIiAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgdGV4dC1sZWZ0IHB5LTIgcHgtNCByb3VuZGVkLW1kIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIGhvdmVyOmJnLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1ncmF5LTQwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBDZXJyYXIgc2VzacOzbjxzdmctbG9nb3V0Lz48L2E+XG5cblxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3ZnQnVzIGZyb20gXCIuLi9TdmdJY29ucy9TdmdCdXMudnVlXCI7XG5pbXBvcnQgU3ZnU3RhciBmcm9tIFwiLi4vU3ZnSWNvbnMvU3ZnU3RhckVtcHR5LnZ1ZVwiO1xuaW1wb3J0IFN2Z0ZvcnVtIGZyb20gXCIuLi9TdmdJY29ucy9TdmdGb3J1bS52dWVcIjtcbmltcG9ydCBTdmdVc2VyIGZyb20gXCIuLi9TdmdJY29ucy9TdmdVc2VyLnZ1ZVwiO1xuaW1wb3J0IFN2Z0xvZ291dCBmcm9tIFwiLi4vU3ZnSWNvbnMvU3ZnTG9nb3V0LnZ1ZVwiO1xuaW1wb3J0IFN2Z01hcCBmcm9tIFwiLi4vU3ZnSWNvbnMvU3ZnTWFwLnZ1ZVwiO1xuaW1wb3J0IFN2Z1ByaWNlIGZyb20gXCIuLi9TdmdJY29ucy9TdmdQcmljZS52dWVcIjtcbmltcG9ydCBTdmdCaWtlIGZyb20gXCIuLi9TdmdJY29ucy9TdmdCaWtlLnZ1ZVwiO1xuaW1wb3J0IFN2Z1Ryb3BoeSBmcm9tIFwiLi4vU3ZnSWNvbnMvU3ZnVHJvcGh5LnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cblxuICBjb21wb25lbnRzOiB7U3ZnVHJvcGh5LCBTdmdCaWtlLCBTdmdQcmljZSwgU3ZnTWFwLCBTdmdMb2dvdXQsIFN2Z1VzZXIsIFN2Z0ZvcnVtLCBTdmdTdGFyLCBTdmdCdXN9LFxuICBtZXRob2RzOiB7XG4gICAgY2hhbmdlVGFiKHRhYikge1xuICAgICAgdGhpcy5zaG93TW9iaWxlTWVudSA9ICF0aGlzLnNob3dNb2JpbGVNZW51XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UtdGFiJywgdGFiKVxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG4gICAgfSxcbiAgICBjaGFuZ2VUYWJNb2JpbGUodGFiKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UtdGFiJywgdGFiKVxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93TW9iaWxlTWVudTogZmFsc2UsXG4gICAgICBhY3RpdmVUYWI6IG51bGwsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlzVGFiQWN0aXZlKCkge1xuICAgICAgcmV0dXJuICh0YWIpID0+IHRoaXMuYWN0aXZlVGFiID09PSB0YWI7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiB2LWlmPVwicGxhbnNcIj5cbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgcHktOFwiPlBsYW5vcyBkZSB0cmFuc3BvcnRlPC9oMj5cbiAgICA8dWwgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBtZDpmbGV4LXJvd1wiPlxuICAgICAgPGxpIHYtZm9yPVwiKHBsYW4sIGluZGV4KSBpbiBwbGFuc1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwibS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkIGJvcmRlci0yIGJvcmRlci1yZWQtNDAwIHctODAgaC04MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbTpteC1hdXRvXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGQgbWItNFwiPnt7aW5kZXggfX08L2gzPlxuICAgICAgICAgIDxpbWcgOnNyYz1cInBsYW5cIiBjbGFzcz1cImgtNDggb2JqZWN0LWNvbnRhaW4gbWItNFwiPlxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidmlld0ltYWdlKHBsYW4pXCIgY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICBWaWV3IGZ1bGwgc2l6ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG5cblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5hc2tGb3JJbWFnZXMoKVxuICB9LCBtZXRob2RzOiB7XG4gICAgYXN5bmMgYXNrRm9ySW1hZ2VzKCkge1xuICAgICAgYXhpb3MuZ2V0KCcvcGxhbnMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgdGhpcy5wbGFucyA9IChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGFucylcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXdJbWFnZShwbGFuKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBsYW47XG4gICAgfVxuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYW5zOiBudWxsXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuIiwiPHRlbXBsYXRlPlxuPGRpdj5cbiAgPGgyIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTJcIj5UdSBwZXJmaWw8L2gyPlxuXG4gIDxkaXYgdi1pZj1cIm15RGF0YSAmJiAhY2hhbmdlICYmICFkZWxldGVBY2NvdW50XCIgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGlubGluZS1ibG9jayBcIj5cblxuICAgIDx0YWJsZSBjbGFzcz1cImJvcmRlci1jb2xsYXBzZSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHctZnVsbFwiPlxuXG4gICAgICA8dGhlYWQgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC1sZWZ0XCI+VXNlcm5hbWU6PC90aD5cbiAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC00IHB5LTIgdGV4dC1sZWZ0XCI+e3sgdXNlcm5hbWUgfX08L3RoPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC00IHB5LTIgZm9udC1ib2xkIHRleHQtbGVmdFwiPkZvdG8gZGUgcGVyZmlsOjwvdGg+XG4gICAgICAgIDx0aCBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtNCBweS0yIHRleHQtbGVmdFwiPlxuICAgICAgICAgIDxpbWcgOnNyYz1cInByb2ZpbGVQaWNcIiBhbHQ9XCJcIiBjbGFzcz1cInctNSBoLTVcIj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC1sZWZ0XCI+UG9zdHMgcHVibGljYWRvczo8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiB0ZXh0LWxlZnRcIj57eyBwb3N0c1B1Ymxpc2hlZH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LWxlZnRcIj5GZWNoYSBkZSBjcmVhY2lvbiBkZSBsYSBjdWVudGE6PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC00IHB5LTIgdGV4dC1sZWZ0XCI+e3sgZGF0ZUNyZWF0ZWQgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC00IHB5LTIgZm9udC1ib2xkIHRleHQtbGVmdFwiPlJvbDo8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cInRoaXMucm9sZT09PSdVJ1wiIGNsYXNzPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICBVc3VhcmlvXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICBBZG1pbmlzdHJhZG9yXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgdi1mb3I9XCJwb3N0IGluIHRoaXMucG9zdHNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC00IHB5LTIgdGV4dC1sZWZ0XCI+e3sgcG9zdC50aXRsZSB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtNCBweS0yIHRleHQtbGVmdFwiPnt7IHBvc3QuY2F0ZWdvcnkgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiB0ZXh0LWxlZnRcIj57eyBwb3N0LmRhdGUgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImRlbGV0ZVBvc3QocG9zdClcIiBjbGFzcz1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICBCb3JyYXIgcHVibGljYWNpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPHRmb290PlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgZm9yPVwicGljdHVyZVwiPlxuICAgICAgICAgICAgQ2FtYmlhciBmb3RvIGRlIHBlcmZpbFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtNCBweS0yXCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwicGljdHVyZVwiIHJlZj1cIm5ld1BpY3R1cmVcIiBhY2NlcHQ9XCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9naWYsaW1hZ2Uvd2VicFwiIGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBAaW5wdXQ9XCJjaGFuZ2VQaWN0dXJlXCI+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVBhc3N3b3JkXCI+XG4gICAgICAgICAgICBDYW1iaWFyIGNvbnRyYXNlw7FhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTQgcHktMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZUFjY291bnRNZXRob2RcIj5cbiAgICAgICAgICAgIEJvcnJhciBjdWVudGFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rmb290PlxuICAgIDwvdGFibGU+XG5cbiAgPC9kaXY+XG5cblxuICA8ZGl2IHYtaWY9XCJkZWxldGVBY2NvdW50XCIgaWQ9XCJEZWxldGVBY2NvdW50XCIgY2xhc3M9XCJtdC00XCI+XG4gICAgPGRpdiBpZD1cIkNhbmNlbEJ1dHRvblwiIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBtci0yXCIgQGNsaWNrPVwidGhpcy5kZWxldGVBY2NvdW50PWZhbHNlLHRoaXMuc2Vjb25kU3RlcERlbGV0ZUFjY291bnQ9ZmFsc2VcIj5DYW5jZWxhcjwvYnV0dG9uPlxuICAgICAgPGZvcm0gdi1pZj1cIiF0aGlzLnNlY29uZFN0ZXBEZWxldGVBY2NvdW50XCIgQHN1Ym1pdC5wcmV2ZW50PVwiY2hlY2tEZWxldGVBY2NvdW50UGFzc3dvcmRcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGlucHV0IGlkPVwiXCIgcmVmPVwiZGVsZXRlUGFzc3dvcmRcIiBuYW1lPVwiXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1emNhIHN1IGNvbnRyYXNlbmFcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgbXItMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPlNpZ3VpZW50ZSBwYXNvPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnV0dG9uIHYtZWxzZSBAY2xpY2s9XCJkZWxldGVBY2NvdW50TGFzU3RlcFwiIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPkVzdGFzIHNlZ3VybyBkZSBxdWUgcXVpZXJlcyBib3JyYXIgdHUgY3VlbnRhPzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuXG5cbiAgPGRpdiB2LWlmPVwiY2hhbmdlXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ0aGlzLmNoYW5nZT1mYWxzZTt0aGlzLm1pZGRsZVN0ZXA9ZmFsc2U7IHRoaXMubGFzdFN0ZXA9ZmFsc2VcIj5DYW5jZWxcbiAgICA8L2J1dHRvbj5cblxuXG4gICAgPGRpdiB2LWlmPVwiZmluYWxcIj5cbiAgICAgIDxoMyBjbGFzcz1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC00XCI+Q2FtYmlvIGRlIGNvbnRyYXNlbmE8L2gzPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgbXQtNFwiIGZvcj1cImN1cnJlbnRQYXNzd29yZFwiPkludHJvZHV6Y2Egc3UgY29udHJhc2VuYSBhY3R1YWw8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiY3VycmVudFBhc3N3b3JkXCIgcmVmPVwicGFzc0lucHV0XCIgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yXCIgdHlwZT1cInBhc3N3b3JkXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBtdC00XCIgQGNsaWNrPVwic2Vjb25kU3RlcFwiPlNpZ3VpZW50ZSBwYXNvPC9idXR0b24+XG4gICAgPC9kaXY+XG5cblxuICA8ZGl2IHYtaWY9XCJsYXN0U3RlcFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIG10LTRcIiBmb3I9XCJwYXNzd29yZFwiPkNvbnRyYXNlw7FhPC9sYWJlbD5cbiAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJjaGVja1Bhc3N3b3JkXCIgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yXCIgbmFtZT1cImNoZWNrUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJibG9jayBtdC00XCIgZm9yPVwicGFzc3dvcmRSZXBlYXRcIj5SZXBpdGEgc3UgY29udHJhc2XDsWE8L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkUmVwZWF0XCIgdi1tb2RlbD1cInBhc3N3b3JkUmVwZWF0XCIgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yXCIgbmFtZT1cInBhc3N3b3JkUmVwZWF0XCIgdHlwZT1cInBhc3N3b3JkXCI+XG4gICAgPGJ1dHRvbiB2LWlmPVwic2FtZVBhc3N3b3JkXCIgY2xhc3M9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIG10LTRcIiBAY2xpY2s9XCJjaGFuZ2VGaW5hbFBhc3N3b3JkXCI+Q2FtYmlhciBjb250cmFzZcOxYTwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDx0ZWxlcG9ydCB0bz1cImJvZHlcIj5cbiAgICA8ZXJyb3ItbWVzc2FnZSB2LWlmPVwic2hvd0Vycm9yTWVzc2FnZVwiIG1lc3NhZ2U9XCJMYSBjb250cmFzZW5hIG5vIGNvaW5jaWRlXCJcbiAgICAgICAgICAgICAgICAgICBAY2xvc2UtZXJyb3I9XCJzaG93RXJyb3JNZXNzYWdlPWZhbHNlXCIvPlxuICAgIDxlcnJvci1tZXNzYWdlIHYtaWY9XCJ3cm9uZ0ZpbGVQaWNcIiBtZXNzYWdlPVwiRWwgdGlwbyBkZSBpbWFnZW4gbm8gZXMgdmFsaWRvIHBvciBmYXZvciBpbnRlbnRlIG90cm9cIlxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1lcnJvcj1cIndyb25nRmlsZVBpYz1mYWxzZVwiLz5cblxuICAgIDxlcnJvci1tZXNzYWdlIHYtaWY9XCJzdWNjZXNzXCIgbWVzc2FnZT1cIkxhIGNvbnRyYXNlbmEgc2UgaGEgY2FtYmlhZG8gY29ycmVjdGFtZW50ZVwiXG4gICAgICAgICAgICAgICAgICAgQGNsb3NlLWVycm9yPVwic3VjY2Vzcz1mYWxzZVwiLz5cbiAgICA8ZXJyb3ItbWVzc2FnZSBtZXNzYWdlPVwiU2UgbGUgaGEgZW52aWFkbyB1biBjb3JyZW8gcGFyYSBxdWUgcHVlZGEgYm9ycmFyIGxhIGN1ZW50YVwiIHYtaWY9XCJmaW5hbERlbGV0ZU1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1lcnJvcj1cImZpbmFsRGVsZXRlTWVzc2FnZT1mYWxzZSwgdGhpcy5kZWxldGVBY2NvdW50PWZhbHNlLHRoaXMuc2Vjb25kU3RlcERlbGV0ZUFjY291bnQ9ZmFsc2VcIi8+XG5cblxuXG4gICAgPGNvbmZpcm0tbWVzc2FnZSB2LWlmPVwiZGVsZXRlZFBvc3QhPT1udWxsXCIgOm1lc3NhZ2U9XCInRXN0w6FzIHNlZ3VybyBkZSBxdWUgcXVpZXJlcyBib3JyYXIgbGEgcHVibGljYWNpb24gJyArZGVsZXRlZFBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgQGNsb3NlLWVycm9yPVwidGhpcy5kZWxldGVkUG9zdD1udWxsXCI+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cImRlbGV0ZVVzZXJDb21taXRcIj5TSTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1sLThcIiBAY2xpY2s9XCJ0aGlzLmRlbGV0ZWRQb3N0PW51bGxcIj5OTzwvYnV0dG9uPlxuICAgIDwvY29uZmlybS1tZXNzYWdlPlxuICA8L3RlbGVwb3J0PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi4vTWVzc2FnZXMvRXJyb3JNZXNzYWdlLnZ1ZVwiO1xuaW1wb3J0IENvbmZpcm1NZXNzYWdlIGZyb20gXCIuLi9NZXNzYWdlcy9Db25maXJtTWVzc2FnZS52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7Q29uZmlybU1lc3NhZ2UsIEVycm9yTWVzc2FnZX0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG15RGF0YTogZmFsc2UsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwcm9maWxlUGljOiAnJyxcbiAgICAgIHBhc3NJbnB1dDogJycsXG4gICAgICBtaWRkbGVTdGVwOiBmYWxzZSxcbiAgICAgIHNob3dFcnJvck1lc3NhZ2U6IGZhbHNlLFxuICAgICAgY2hhbmdlOiBmYWxzZSxcbiAgICAgIGxhc3RTdGVwOiBmYWxzZSxcbiAgICAgIGZpbmFsOiB0cnVlLFxuICAgICAgY2hlY2tQYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZFJlcGVhdDogJycsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG5ld1BpY3R1cmU6ICcnLFxuICAgICAgd3JvbmdGaWxlUGljOiBmYWxzZSxcbiAgICAgIGRlbGV0ZUFjY291bnQ6IGZhbHNlLFxuICAgICAgc2Vjb25kU3RlcERlbGV0ZUFjY291bnQ6IGZhbHNlLFxuICAgICAgZmluYWxEZWxldGVNZXNzYWdlOmZhbHNlLFxuICAgICAgcG9zdHM6bnVsbCxcbiAgICAgIGRlbGV0ZWRQb3N0Om51bGwsXG4gICAgICBkZWxldGVkUG9zdElkOm51bGwsXG4gICAgICBwb3N0c1B1Ymxpc2hlZDpudWxsLFxuICAgICAgZGF0ZUNyZWF0ZWQ6bnVsbCxcbiAgICAgIHJvbGU6bnVsbFxuXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNhbWVQYXNzd29yZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcGVhdClcbiAgICAgIGlmICh0aGlzLmNoZWNrUGFzc3dvcmQgPT0gdGhpcy5wYXNzd29yZFJlcGVhdFxuICAgICAgICAgICYmIHRoaXMuY2hlY2tQYXNzd29yZCAhPSAnJyAmJiB0aGlzLnBhc3N3b3JkUmVwZWF0ICE9ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gIHRoaXMuZ2V0UG9zdHNQdWJsaXNoZWQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZldGNoRGF0YSgpIHtcbiAgICAgIGF4aW9zLmdldCgnL3VzZXJEYXRhJylcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgIC8vIFNldCBkYXRhIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSByZXNwb25zZS5kYXRhLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVQaWMgPSByZXNwb25zZS5kYXRhLnByb2ZpbGVQaWN0dXJlO1xuICAgICAgICAgICAgdGhpcy5wb3N0c1B1Ymxpc2hlZD1yZXNwb25zZS5kYXRhLnBvc3RzUHVibGlzaGVkXG4gICAgICAgICAgICB0aGlzLmRhdGVDcmVhdGVkPXJlc3BvbnNlLmRhdGEuZGF0ZUNyZWF0ZWRcbiAgICAgICAgICAgIHRoaXMucm9sZT1yZXNwb25zZS5kYXRhLnJvbGVcbiAgICAgICAgICAgIHRoaXMubXlEYXRhID0gdHJ1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGRlbGV0ZVVzZXJDb21taXQoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdsbyBxdWllcmUgYm9ycmFyJylcblxuICAgICAgdGhpcy5wb3N0cyA9IHRoaXMucG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5pZCAhPT0gdGhpcy5kZWxldGVkUG9zdElkKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGF4aW9zLnBvc3QoJy9kZWxldGVQb3N0Jywge1xuICAgICAgICBpZDp0aGlzLmRlbGV0ZWRQb3N0SWQsXG5cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuXG5cbiAgICB9LFxuICAgIGRlbGV0ZVBvc3QocG9zdCkge1xuICAgICAgY29uc29sZS5sb2cocG9zdClcbiAgICAgIHRoaXMuZGVsZXRlZFBvc3Q9cG9zdC50aXRsZTtcbiAgICAgIHRoaXMuZGVsZXRlZFBvc3RJZD1wb3N0LmlkXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRlbGV0ZWRQbGFuKVxuICAgIH0sXG4gICBhc3luYyBnZXRQb3N0c1B1Ymxpc2hlZCgpe1xuICAgICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0ICBheGlvcy5wb3N0KCcvZ2V0UG9zdHNQdWJsaXNoZWRCeVVzZXInKVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgIHRoaXMucG9zdHM9cmVzcG9uc2UuZGF0YS5wb3N0c1xuICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnBvc3RzKVxuICAgIH0sXG4gICAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgICB0aGlzLmNoYW5nZSA9IHRydWVcbiAgICAgIHRoaXMuZmluYWwgPSB0cnVlXG4gICAgfSxcbiAgICBhc3luYyBzZWNvbmRTdGVwKCkge1xuICAgICAgdGhpcy5wYXNzSW5wdXQgPSB0aGlzLiRyZWZzLnBhc3NJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFzc0lucHV0KVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvY2hlY2tQYXNzd29yZCcsIHtcbiAgICAgICAgJ3Bhc3N3b3JkJzogdGhpcy5wYXNzSW5wdXRcbiAgICAgIH0pXG4gICAgICBsZXQgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YS5pc1Bhc3N3b3JkQ29ycmVjdFxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2J1bScpXG4gICAgICAgIHRoaXMubGFzdFN0ZXAgPSB0cnVlXG4gICAgICAgIHRoaXMuZmluYWwgPSBmYWxzZVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1pZGRsZVN0ZXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UgPSB0cnVlXG4gICAgICAgIHRoaXMuJHJlZnMucGFzc0lucHV0LnZhbHVlID0gJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGNoYW5nZUZpbmFsUGFzc3dvcmQoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jaGFuZ2VQJywge1xuICAgICAgICBwYXNzd29yZDogdGhpcy5jaGVja1Bhc3N3b3JkXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWVcbiAgICAgIHRoaXMuY2hhbmdlID0gZmFsc2VcbiAgICAgIHRoaXMubGFzdFN0ZXAgPSBmYWxzZVxuICAgIH0sXG4gICAgYXN5bmMgY2hhbmdlUGljdHVyZSgpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9ICh0aGlzLiRyZWZzLm5ld1BpY3R1cmUuZmlsZXNbMF0udHlwZSlcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVOYW1lKVxuICAgICAgaWYgKGZpbGVOYW1lID09ICdpbWFnZS9qcGVnJyB8fCBmaWxlTmFtZSA9PSAnaW1hZ2UvcG5nJyB8fFxuICAgICAgICAgIGZpbGVOYW1lID09ICdpbWFnZS9naWYnIHx8IGZpbGVOYW1lID09ICdpbWFnZS93ZWJwJykge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2ZpbGVQaWMnLCB0aGlzLiRyZWZzLm5ld1BpY3R1cmUuZmlsZXNbMF0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcm9maWxlJywgZm9ybURhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3VjY2VzcyA9IHJlc3BvbnNlLmRhdGEuc3VjY2Vzc1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgIHRoaXMucHJvZmlsZVBpYyA9IHJlc3BvbnNlLmRhdGEubmV3UGljdHVyZSArICc/dD0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53cm9uZ0ZpbGVQaWMgPSB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWxldGVBY2NvdW50TWV0aG9kKCkge1xuICAgICAgY29uc29sZS5sb2coMClcbiAgICAgIHRoaXMuZGVsZXRlQWNjb3VudCA9IHRydWVcbiAgICB9LFxuICAgIGFzeW5jIGNoZWNrRGVsZXRlQWNjb3VudFBhc3N3b3JkKCkge1xuICAgICAgdGhpcy5wYXNzSW5wdXQgPSB0aGlzLiRyZWZzLmRlbGV0ZVBhc3N3b3JkLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2codGhpcy5wYXNzSW5wdXQpXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jaGVja1Bhc3N3b3JkJywge1xuICAgICAgICAncGFzc3dvcmQnOiB0aGlzLnBhc3NJbnB1dFxuICAgICAgfSlcbiAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5kYXRhLmlzUGFzc3dvcmRDb3JyZWN0XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKDApXG4gICAgICAgIHRoaXMuc2Vjb25kU3RlcERlbGV0ZUFjY291bnQgPSB0cnVlXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSA9IHRydWVcbiAgICAgICAgdGhpcy4kcmVmcy5kZWxldGVQYXNzd29yZC52YWx1ZSA9ICcnXG4gICAgICB9XG4gICAgfSxcbiAgIGFzeW5jIGRlbGV0ZUFjY291bnRMYXNTdGVwKCl7XG4gICAgIHRoaXMuZmluYWxEZWxldGVNZXNzYWdlPXRydWU7XG4gICAgIGNvbnNvbGUubG9nKCdGYWx0YSBwb3IgaGFjZXIgZWwgZW52aWFyIGNvcnJlbyBkZXNkZSBlbCBzZXJ2ZXIgeSB0b2RhIGxhIGxvZ2ljYSByZXN0YW50ZScpXG4gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3NlbmREZWxldGVFbWFpbCcpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBwLTQgbWItMTBcIj5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBweS04IFwiPlByZWNpb3MgeSB0YXJpZmFzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidy1mdWxsIHRhYmxlLWF1dG9cIj5cbiAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHktMiBweC00XCI+QWJvbm88L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweS0yIHB4LTRcIj5QcmVjaW88L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyIHYtZm9yPVwicGxhbiBpbiBwbGFuc1wiIDprZXk9XCJwbGFuLmlkXCI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB5LTIgcHgtNFwiPnt7cGxhbi50aXRsZX19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS00MDAgcHktMiBweC00XCI+e3twbGFuLnByaWNlfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlRyYW5zcG9ydFByaWNlc1wiLFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZFBsYW5zKCk7XG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIGFzeW5jIGxvYWRQbGFucygpe1xuICAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGF4aW9zLmdldCgnL2xvYWRBbGxQbGFucycpXG5jb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIHRoaXMucGxhbnM9cmVzcG9uc2UuZGF0YS5wbGFuc1xuICAgIH1cbiAgfSxcbiAgZGF0YSgpe1xuICAgIHJldHVybntcbiAgICAgIHBsYW5zOm51bGxcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2ICB2LWlmPVwic2hvd0NhdGVnb3JpZXNcIj5cclxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1maXhlZCB3LWZ1bGxcIj5cclxuICAgIDx0Ym9keT5cclxuICAgIDx0ciB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0ZWdvcnkuaWRcIiBjbGFzcz1cImJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMjAwXCI+XHJcbiAgICAgIDx0ZCBjbGFzcz1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCIgPlxyXG5cclxuXHJcbiAgICAgICAgPGEgOmhyZWY9XCInL3Nob3cvJyArIGNhdGVnb3J5Lm5hbWUgKyAnLycgKyBjYXRlZ29yeS5pZFwiIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPnt7Y2F0ZWdvcnkubmFtZX19PC9hPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57eyBjYXRlZ29yeS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRm9ydW1DYXRlZ29yaWVzXCIsXHJcbiAgcHJvcHM6WydjYXRlZ29yaWVzJ10sXHJcbiAgZGF0YSgpe1xyXG4gICAgcmV0dXJue1xyXG4gICAgICBzaG93Q2F0ZWdvcmllczp0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsIiAgPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInctbWF4XCI+XHJcblxyXG4gICAgICA8Zm9ydW0tbWVudSBAY2hhbmdlLXRhYj1cImNoYW5nZVRhYlwiIC8+XHJcbiAgICAgIDxjb21wb25lbnQgOmlzPVwic2VsZWN0ZWRUYWJcIiA6Y2F0ZWdvcmllcz1cImNhdGVnb3JpZXNcIiAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcblxyXG5cclxuICA8c2NyaXB0PlxyXG5pbXBvcnQgRm9ydW1NZW51IGZyb20gXCIuL0ZvcnVtTWVudS52dWVcIjtcclxuaW1wb3J0IEZvcnVtQ2F0ZWdvcmllcyBmcm9tIFwiLi9Gb3J1bUNhdGVnb3JpZXMudnVlXCI7XHJcbmltcG9ydCBGb3J1bU5ld1Bvc3QgZnJvbSBcIi4vRm9ydW1OZXdQb3N0LnZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4uL01lc3NhZ2VzL0Vycm9yTWVzc2FnZS52dWVcIjtcclxuaW1wb3J0IEZvcnVtU2VhcmNoIGZyb20gXCIuL0ZvcnVtU2VhcmNoLnZ1ZVwiO1xyXG5pbXBvcnQgRm9ydW1TYXZlZFBvc3RzIGZyb20gXCIuL0ZvcnVtU2F2ZWRQb3N0cy52dWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRm9ydW1Ib21lUGFnZVwiLFxyXG4gIGNvbXBvbmVudHM6IHtGb3J1bU1lbnUsRm9ydW1DYXRlZ29yaWVzLEZvcnVtTmV3UG9zdCxFcnJvck1lc3NhZ2UsIEZvcnVtU2VhcmNoLEZvcnVtU2F2ZWRQb3N0c30sXHJcbiAgZGF0YSgpe1xyXG4gICAgcmV0dXJue1xyXG4gICAgICBzZWxlY3RlZFRhYjonZm9ydW0tY2F0ZWdvcmllcycsXHJcbiAgICAgIGNhdGVnb3JpZXM6bnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBjaGFuZ2VUYWIodGFiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWI7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRUYWIpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpe1xyXG4gICAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgYXhpb3MuZ2V0KCcvYWxsQ2F0ZWdvcmllcycpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB0aGlzLmNhdGVnb3JpZXM9cmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgbXQtM1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJtci0yIGZsZXgtMSBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBiZy1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ2ZvcnVtLW5ldy1wb3N0JylcIj4rPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJtci0yIGZsZXgtMSBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLW1kIHB4LTQgcHktMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBiZy1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBAY2xpY2s9XCJjaGFuZ2VUYWIoJ2ZvcnVtLWNhdGVnb3JpZXMnKVwiPkZvcm88L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTIgZmxleC0xIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGJnLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIEBjbGljaz1cImNoYW5nZVRhYignZm9ydW0tc2VhcmNoJylcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTIgZmxleC0xIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbWQgcHgtNCBweS0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGJnLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIEBjbGljaz1cImNoYW5nZVRhYignZm9ydW0tc2F2ZWQtcG9zdHMnKVwiPlB1YmxpY2FjaW9uZXMgZ3VhcmRhZGFzPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJGb3J1bU1lbnVcIixcclxuICBtZXRob2RzOntcclxuICAgIGNoYW5nZVRhYih0YWIpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLXRhYicsIHRhYilcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LTYgXCI+XHJcbiAgICA8Zm9ybSBjbGFzcz1cImJnLWJsYWNrIGJnLW9wYWNpdHktOTAgc2hhZG93LWxnIHJvdW5kZWQtbGcgcHgtOCBwdC02IHBiLTggbWItNCAgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCB3LWZ1bGxcIlxyXG4gICAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PVwibmV3UG9zdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtd2hpdGUgZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJ0aXRsZVwiPlTDrXR1bG88L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInRpdGxlXCIgcmVmPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cImJnLXdoaXRlIGJnLW9wYWNpdHktNzAgc2hhZG93IGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtd2hpdGUgZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJib2R5XCI+Q3VlcnBvIGRlbCBwb3N0PC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJib2R5XCIgcmVmPVwiYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctd2hpdGUgYmctb3BhY2l0eS03MCBzaGFkb3cgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCIgbmFtZT1cImJvZHlcIiByZXF1aXJlZCByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICBmb3I9XCJwaWN0dXJlXCI+XHJcbiAgICAgICAgICBBbmFkaXIgaW1hZ2VuZXMgYSB0dSBwdWJsaWNhY2lvblxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwicGljdHVyZVwiIHJlZj1cIm5ld1BpY3R1cmVcIiBhY2NlcHQ9XCJpbWFnZS9qcGVnLGltYWdlL3BuZyxpbWFnZS9naWYsaW1hZ2Uvd2VicFwiIGNsYXNzPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgbXVsdGlwbGU9XCJ0cnVlXCIgbmFtZT1cImltYWdlc1tdXCIgdHlwZT1cImZpbGVcIiBAY2hhbmdlPVwicHJpbnRcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdGV4dC13aGl0ZSBmb250LWJvbGQgbWItMlwiIGZvcj1cImNhdGVnb3J5XCI+Q2F0ZWdvcsOtYTwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgcmVmPVwic2VsZWN0ZWRDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXdoaXRlIGJnLW9wYWNpdHktNzAgc2hhZG93IGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHZhbHVlPVwiXCI+U2VsZWNjaW9uYSB1bmEgY2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0ZWdvcnkuaWRcIiA6dmFsdWU9XCJjYXRlZ29yeS5pZFwiPnt7IGNhdGVnb3J5Lm5hbWUgfX08L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBwb3N0XCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZm9ybT5cclxuICAgIDx0ZWxlcG9ydCB0bz1cImJvZHlcIj5cclxuICAgICAgPGVycm9yLW1lc3NhZ2Ugdi1pZj1cInN1Y2Nlc3NcIiBtZXNzYWdlPVwiRWwgcG9zdCBzZSBoYSBjcmVhZG8gY29ycmVjdGFtZW50ZVwiIEBjbG9zZS1lcnJvcj1cInN1Y2Nlc3M9ZmFsc2VcIi8+XHJcbiAgICA8L3RlbGVwb3J0PlxyXG4gIDwvZGl2PlxyXG4gIDxpbWcgOnNyYz1cInRoaXMuaW1nXCIgYWx0PVwiXCI+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuLi9NZXNzYWdlcy9FcnJvck1lc3NhZ2UudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge0Vycm9yTWVzc2FnZX0sXHJcbiAgcHJvcHM6IFsnY2F0ZWdvcmllcyddLFxyXG4gIG5hbWU6IFwiRm9ydW1OZXdQb3N0XCIsXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RlZENhdGVnb3J5OiBudWxsLFxyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgaW1nOm51bGxcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIG5ld1Bvc3QoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgY29uc29sZS5sb2codGhpcy4kcmVmcy50aXRsZS52YWx1ZSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKClcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB0aGlzLiRyZWZzLnRpdGxlLnZhbHVlKVxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2JvZHknLCB0aGlzLiRyZWZzLmJvZHkudmFsdWUpXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnknLCB0aGlzLiRyZWZzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWUpXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy4kcmVmcy5uZXdQaWN0dXJlLmZpbGVzKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZXNbXScsIGZpbGUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL25ld1Bvc3QnLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgdGhpcy5zdWNjZXNzID0gcmVzcG9uc2UuZGF0YS5zdWNjZXNzXHJcbiAgICAgIHRoaXMuJHJlZnMudGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgICB0aGlzLiRyZWZzLmJvZHkudmFsdWUgPSAnJ1xyXG4gICAgfSxcclxuICAgIHByaW50KCkge1xyXG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMuJHJlZnMubmV3UGljdHVyZS5maWxlcztcclxuICAgICAgY29uc29sZS5sb2coZmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGgyIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHB5LThcIiB2LWlmPVwicG9zdHM9PT1udWxsIHx8IHBvc3RzLmxlbmd0aD09MFwiID5ObyBoYXkgbmFkYTwvaDI+XHJcbiAgPGgyIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHB5LThcIiB2LWVsc2U+VHVzIHBvc3RzIGZhdm9yaXRvczwvaDI+XHJcbiAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byBib3JkZXItY29sbGFwc2UgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCB3LWZ1bGxcIiB2LWVsc2UgPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgPHRyID5cclxuICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yIHRleHQtbGVmdFwiPkVubGFjZTwvdGg+XHJcbiAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5UaXR1bG88L3RoPlxyXG4gICAgICA8dGggY2xhc3M9XCJweC00IHB5LTIgdGV4dC1sZWZ0XCI+VXN1YXJpbzwvdGg+XHJcbiAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5DYXRlZ29yaWE8L3RoPlxyXG4gICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2xhc3M9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgIDx0ciB2LWZvcj1cInBvc3QgaW4gcG9zdHNcIiA6a2V5PVwicG9zdC5wb3N0SWRcIj5cclxuICAgICA8dGQ+XHJcblxyXG4gICAgICAgPGEgOmhyZWY9XCInL3JlYWQvJytwb3N0LmNhdGVnb3J5KycvJytwb3N0LnRpdGxlKycvJytwb3N0LnBvc3RJZFwiID5WaXNpdGFyIGVsIHBvc3Q8L2E+XHJcbiAgICAgPC90ZD5cclxuXHJcbiAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57e3Bvc3QudGl0bGV9fTwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57e3Bvc3QudXNlcm5hbWV9fTwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTIgaGlkZGVuIGxnOmJsb2NrXCI+e3twb3N0LmNhdGVnb3J5fX08L3RkPlxyXG4gICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJkZWxldGVQb3N0KHBvc3QpXCIgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1yZWQtNTAwXCI+XHJcbiAgICAgICAgICBRdWl0YXIgZGUgZmF2c1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuXHJcblxyXG4gIDxjb25maXJtLW1lc3NhZ2Ugdi1pZj1cImRlbGV0ZWRQb3N0IT09bnVsbFwiIDptZXNzYWdlPVwiJ0VzdMOhcyBzZWd1cm8gZGUgcXVlIHF1aWVyZXMgYm9ycmFyIGxhIHB1YmxpY2FjaW9uICcgK2RlbGV0ZWRQb3N0XCJcclxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1lcnJvcj1cInRoaXMuZGVsZXRlZFBvc3Q9bnVsbFwiPlxyXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJkZWxldGVVc2VyQ29tbWl0XCI+U0k8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtbC04XCIgQGNsaWNrPVwidGhpcy5kZWxldGVkUG9zdD1udWxsXCI+Tk88L2J1dHRvbj5cclxuICA8L2NvbmZpcm0tbWVzc2FnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvbmZpcm1NZXNzYWdlIGZyb20gXCIuLi9NZXNzYWdlcy9Db25maXJtTWVzc2FnZS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkZvcnVtU2F2ZWRQb3N0c1wiLFxyXG4gIGNvbXBvbmVudHM6IHtDb25maXJtTWVzc2FnZX0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZ2V0U2F2ZWRQb3N0cygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvZ2V0U2F2ZWRQb3N0cycpXHJcblxyXG5cclxuXHJcbiAgICAgIHRoaXMucG9zdHMgPSByZXNwb25zZS5kYXRhLnBvc3RzXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucG9zdHMpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZGVsZXRlVXNlckNvbW1pdCgpe1xyXG4gICAgICBjb25zb2xlLmxvZygnbG8gcXVpZXJlIGJvcnJhcicpXHJcblxyXG4gICAgICB0aGlzLnBvc3RzID0gdGhpcy5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9PSB0aGlzLmRlbGV0ZWRQb3N0SWQpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGF4aW9zLnBvc3QoJy9kZWxldGVTYXZlZFBvc3QnLCB7XHJcbiAgICAgICAgaWQ6dGhpcy5kZWxldGVkUG9zdElkLFxyXG5cclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlUG9zdChwb3N0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3QpXHJcbiAgICAgIHRoaXMuZGVsZXRlZFBvc3Q9cG9zdC50aXRsZTtcclxuICAgICAgdGhpcy5kZWxldGVkUG9zdElkPXBvc3QuaWRcclxuICAgICAgY29uc29sZS5sb2codGhpcy5kZWxldGVkUGxhbilcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldFNhdmVkUG9zdHMoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3N0cylcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogbnVsbCxcclxuICAgICAgZGVsZXRlZFBvc3Q6bnVsbCxcclxuICAgICAgZGVsZXRlZFBvc3RJZDpudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJteS04IG14LWF1dG8gdy1mdWxsIG1heC13LW1kXCI+XHJcbiAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzZWFyY2hGb3JQb3N0c1wiIGNsYXNzPVwiZmxleFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2VhcmNoXCIgY2xhc3M9XCJzci1vbmx5XCI+QnVzY2Fkb3I8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgcmVxdWlyZWQgaWQ9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWwgcHktMiBweC00IGZsZXgtMSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCIgcGxhY2Vob2xkZXI9XCJCdXNjYXIuLi5cIiByZWY9XCJxdWVyeVwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImZsZXgtc2hyaW5rLTAgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgdGV4dC13aGl0ZSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZC1yXCI+XHJcbiAgICAgICAgQnVzY2FyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxkaXYgdi1pZj1cInJlc3VsdHMgIT09IG51bGxcIiBjbGFzcz1cIm10LThcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwidy1mdWxsIGJvcmRlci1jb2xsYXBzZSB0YWJsZS1hdXRvXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0ciBjbGFzcz1cImJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgPHRoIGNsYXNzPVwicHktMiBweC0zXCI+VGl0dWxvPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cInB5LTIgcHgtM1wiPkZlY2hhIGRlIGNyZWFjaW9uPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cInB5LTIgcHgtM1wiPkF1dG9yPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzcz1cInB5LTIgcHgtM1wiPkNhdGVnb3JpYTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBjbGFzcz1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBmb250LWxpZ2h0XCI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwicmVzdWx0IGluIHJlc3VsdHNcIiA6a2V5PVwicmVzdWx0LmlkXCIgY2xhc3M9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0xMDBcIj5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTIgcHgtM1wiPjxhIDpocmVmPVwiJy9yZWFkLycrcmVzdWx0LmNhdGVnb3J5KycvJytyZXN1bHQudGl0bGUrJy8nK3Jlc3VsdC5pZFwiPnt7IHJlc3VsdC50aXRsZSB9fTwvYT48L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzPVwicHktMiBweC0zXCI+e3sgcmVzdWx0LmRhdGVfY3JlYXRlZCB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJweS0yIHB4LTNcIj57eyByZXN1bHQuYXV0aG9yIH19PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTIgcHgtM1wiPnt7IHJlc3VsdC5jYXRlZ29yeSB9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiRm9ydW1TZWFyY2hcIixcclxuICBtZXRob2RzOntcclxuICAgIGFzeW5jIHNlYXJjaEZvclBvc3RzKCl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBheGlvcy5wb3N0KCcvc2VhcmNoUG9zdHMnLCB7XHJcbiAgICAgICAgcXVlcnk6dGhpcy4kcmVmcy5xdWVyeS52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgdGhpcy5yZXN1bHRzPXJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCl7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIHF1ZXJ5Om51bGwsXHJcbiAgICAgIHJlc3VsdHM6bnVsbFxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPHN2ZyB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIgdmlld0JveD1cIjAgLTAuNSAyMSAyMVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbD1cIiMwMDAwMDBcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHRpdGxlPmRlbGV0ZSBbIzE0ODddPC90aXRsZT4gPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+IDxkZWZzPiA8L2RlZnM+IDxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj4gPGcgaWQ9XCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNzkuMDAwMDAwLCAtMzYwLjAwMDAwMClcIiBmaWxsPVwiIzAwMDAwMFwiPiA8ZyBpZD1cImljb25zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMClcIj4gPHBhdGggZD1cIk0xMzAuMzUsMjE2IEwxMzIuNDUsMjE2IEwxMzIuNDUsMjA4IEwxMzAuMzUsMjA4IEwxMzAuMzUsMjE2IFogTTEzNC41NSwyMTYgTDEzNi42NSwyMTYgTDEzNi42NSwyMDggTDEzNC41NSwyMDggTDEzNC41NSwyMTYgWiBNMTI4LjI1LDIxOCBMMTM4Ljc1LDIxOCBMMTM4Ljc1LDIwNiBMMTI4LjI1LDIwNiBMMTI4LjI1LDIxOCBaIE0xMzAuMzUsMjA0IEwxMzYuNjUsMjA0IEwxMzYuNjUsMjAyIEwxMzAuMzUsMjAyIEwxMzAuMzUsMjA0IFogTTEzOC43NSwyMDQgTDEzOC43NSwyMDAgTDEyOC4yNSwyMDAgTDEyOC4yNSwyMDQgTDEyMywyMDQgTDEyMywyMDYgTDEyNi4xNSwyMDYgTDEyNi4xNSwyMjAgTDE0MC44NSwyMjAgTDE0MC44NSwyMDYgTDE0NCwyMDYgTDE0NCwyMDQgTDEzOC43NSwyMDQgWlwiIGlkPVwiZGVsZXRlLVsjMTQ4N11cIj4gPC9wYXRoPiA8L2c+IDwvZz4gPC9nPiA8L2c+PC9zdmc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJTdmdEZWxldGVcIlxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG5cbjxkZWZzPlxuPC9kZWZzPlxuICAgIDxnIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS40MDY1OTM0MDY1OTM0MDE2IDEuNDA2NTkzNDA2NTkzNDAxNikgc2NhbGUoMi44MSAyLjgxKVwiID5cblx0PHBhdGggZD1cIk0gNjkuMzEzIDU0LjQ0MiBjIC0wLjM5NyAwIC0wLjc5OCAtMC4xMTggLTEuMTQ3IC0wLjM2MyBjIC0wLjkwNCAtMC42MzYgLTEuMTIyIC0xLjg4MyAtMC40ODcgLTIuNzg2IGwgMTAuMTE4IC0xNC4zOTkgTCA2Ny42NzkgMjIuNDk1IGMgLTAuNjM1IC0wLjkwNCAtMC40MTcgLTIuMTUxIDAuNDg3IC0yLjc4NiBjIDAuOTA0IC0wLjYzNyAyLjE1MSAtMC40MTcgMi43ODYgMC40ODYgbCAxMC45MjYgMTUuNTQ5IGMgMC40ODQgMC42OSAwLjQ4NCAxLjYxIDAgMi4zIEwgNzAuOTUyIDUzLjU5MiBDIDcwLjU2MyA1NC4xNDYgNjkuOTQzIDU0LjQ0MiA2OS4zMTMgNTQuNDQyIHpcIiBzdHlsZT1cInN0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBmaWxsOiByZ2IoMCwwLDApOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7XCIgdHJhbnNmb3JtPVwiIG1hdHJpeCgxIDAgMCAxIDAgMCkgXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIC8+XG4gICAgICA8cGF0aCBkPVwiTSA1Ny42OTMgMzAuMDkyIGMgMS4xMDQgMCAyIC0wLjg5NiAyIC0yIFYgMiBjIDAgLTEuMTA0IC0wLjg5NiAtMiAtMiAtMiBIIDkuNzU5IEMgOS43NDYgMCA5LjczNSAwLjAwMyA5LjcyMiAwLjAwNCBDIDkuNjg1IDAuMDA0IDkuNjQ4IDAuMDEyIDkuNjExIDAuMDE1IGMgLTAuMTIyIDAuMDA5IC0wLjI0IDAuMDI3IC0wLjM1NCAwLjA1NyBDIDkuMjExIDAuMDgzIDkuMTY4IDAuMDk4IDkuMTI0IDAuMTEzIEMgOS4wMTEgMC4xNTEgOC45MDMgMC4xOTggOC44IDAuMjU1IEMgOC43NzUgMC4yNjkgOC43NDcgMC4yNzQgOC43MjMgMC4yODkgYyAtMC4wMTIgMC4wMDcgLTAuMDIgMC4wMTggLTAuMDMxIDAuMDI1IGMgLTAuMTMgMC4wODMgLTAuMjUyIDAuMTc3IC0wLjM2IDAuMjg3IEMgOC4zMTMgMC42MiA4LjI5OSAwLjY0MyA4LjI4MSAwLjY2MiBDIDguMTk2IDAuNzU3IDguMTIgMC44NTkgOC4wNTMgMC45NjkgQyA4LjAyOSAxLjAwOSA4LjAwOCAxLjA1IDcuOTg3IDEuMDkxIEMgNy45MzUgMS4xOTIgNy44OTMgMS4yOTcgNy44NTggMS40MDcgQyA3Ljg0NSAxLjQ0OSA3LjgzIDEuNDg5IDcuODIgMS41MzIgQyA3Ljc4MyAxLjY4MyA3Ljc1OSAxLjgzOCA3Ljc1OSAyIHYgNjkuNzg3IGMgMCAwLjE3IDAuMDI4IDAuMzMzIDAuMDY4IDAuNDkgYyAwLjAxMSAwLjA0MyAwLjAyNSAwLjA4MyAwLjAzOSAwLjEyNCBjIDAuMDQgMC4xMjMgMC4wOTEgMC4yMzkgMC4xNTIgMC4zNSBjIDAuMDE5IDAuMDMzIDAuMDM0IDAuMDY4IDAuMDU0IDAuMSBjIDAuMDg2IDAuMTM1IDAuMTg1IDAuMjYgMC4zIDAuMzcxIGMgMC4wMjIgMC4wMjEgMC4wNDcgMC4wMzcgMC4wNyAwLjA1OCBjIDAuMTAyIDAuMDkgMC4yMTQgMC4xNjkgMC4zMzMgMC4yMzcgYyAwLjAyMSAwLjAxMiAwLjAzNyAwLjAzIDAuMDU4IDAuMDQyIGwgMzEuMDE2IDE2LjIxMyBDIDQwLjEzOSA4OS45MjUgNDAuNDU3IDkwIDQwLjc3NSA5MCBjIDAuMzU5IDAgMC43MTggLTAuMDk3IDEuMDM2IC0wLjI4OSBjIDAuNTk4IC0wLjM2MiAwLjk2NCAtMS4wMTIgMC45NjQgLTEuNzExIFYgNzMuNzg3IGggMTQuOTE4IGMgMS4xMDQgMCAyIC0wLjg5NiAyIC0yIFYgNDUgYyAwIC0xLjEwNCAtMC44OTYgLTIgLTIgLTIgcyAtMiAwLjg5NiAtMiAyIHYgMjQuNzg3IEggNDIuNzc1IFYgMTguMjEzIGMgMCAtMC43NDUgLTAuNDE0IC0xLjQyOCAtMS4wNzQgLTEuNzcyIEwgMTcuOTAyIDQgaCAzNy43OTEgdiAyNC4wOTIgQyA1NS42OTMgMjkuMTk2IDU2LjU4OSAzMC4wOTIgNTcuNjkzIDMwLjA5MiB6IE0gMzguNzc1IDg0LjY5OCBMIDExLjc1OSA3MC41NzYgViA1LjMwMiBsIDI3LjAxNiAxNC4xMjIgViA4NC42OTggelwiIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYigwLDAsMCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgbWF0cml4KDEgMCAwIDEgMCAwKSBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNIDgwLjI0MSAzOC44OTQgSCA0Ny41MzYgYyAtMS4xMDQgMCAtMiAtMC44OTYgLTIgLTIgcyAwLjg5NiAtMiAyIC0yIGggMzIuNzA1IGMgMS4xMDQgMCAyIDAuODk2IDIgMiBTIDgxLjM0NiAzOC44OTQgODAuMjQxIDM4Ljg5NCB6XCIgc3R5bGU9XCJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogcmdiKDAsMCwwKTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cIiBtYXRyaXgoMSAwIDAgMSAwIDApIFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPlxuPC9nPlxuPC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlN2Z0xvZ291dFwiXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxzdmcgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZD1cIk0xOS45IDQuMDkwMDFDMTkuNjU3NiAzLjkyODk1IDE5LjM3ODkgMy44MzA4OCAxOS4wODkgMy44MDQ2OUMxOC43OTkyIDMuNzc4NSAxOC41MDczIDMuODI1MDEgMTguMjQgMy45NDAwMUwxNC42NyA1LjQ3MDAxTDkuOTIgMy40NzAwMUM5LjczMzM4IDMuMzkwOCA5LjUzMjczIDMuMzQ5OTggOS4zMyAzLjM0OTk4QzkuMTI3MjcgMy4zNDk5OCA4LjkyNjYxIDMuMzkwOCA4Ljc0IDMuNDcwMDFMNC4zOCA1LjMxMDAxQzQuMDQwMTIgNS40NTc4NCAzLjc1MTUxIDUuNzAyODMgMy41NTA0NiA2LjAxNDE5QzMuMzQ5NCA2LjMyNTU2IDMuMjQ0ODcgNi42ODk0MSAzLjI1IDcuMDYwMDFWMTguMzFDMy4yNDgxNiAxOC42MjYyIDMuMzI0ODYgMTguOTM4IDMuNDczMjEgMTkuMjE3MkMzLjYyMTU3IDE5LjQ5NjUgMy44MzY5NCAxOS43MzQ1IDQuMSAxOS45MUM0LjM0MjQgMjAuMDcxMSA0LjYyMTE0IDIwLjE2OTEgNC45MTA5OSAyMC4xOTUzQzUuMjAwODQgMjAuMjIxNSA1LjQ5MjY1IDIwLjE3NSA1Ljc2IDIwLjA2TDkuMzMgMTguNTNMMTQuMDggMjAuNTNDMTQuMjY2MSAyMC42MTA5IDE0LjQ2NzEgMjAuNjUxNyAxNC42NyAyMC42NUMxNC44NzI3IDIwLjY0OTggMTUuMDczMyAyMC42MDkgMTUuMjYgMjAuNTNMMTkuNjIgMTguNjZDMTkuOTU5OSAxOC41MTIyIDIwLjI0ODUgMTguMjY3MiAyMC40NDk1IDE3Ljk1NThDMjAuNjUwNiAxNy42NDQ1IDIwLjc1NTEgMTcuMjgwNiAyMC43NSAxNi45MVY1LjY5MDAxQzIwLjc1MTggNS4zNzM4IDIwLjY3NTEgNS4wNjIwNyAyMC41MjY4IDQuNzgyODFDMjAuMzc4NCA0LjUwMzU2IDIwLjE2MzEgNC4yNjU1IDE5LjkgNC4wOTAwMVpNMTAuMDggNS4wOTAwMUwxMy45MiA2LjczMDAxVjE4Ljg2TDEwLjA4IDE3LjIyVjUuMDkwMDFaTTUuMTcgMTguNjhDNS4xMzE5OSAxOC43MDIgNS4wODg4OCAxOC43MTM1IDUuMDQ1IDE4LjcxMzVDNS4wMDExMSAxOC43MTM1IDQuOTU4IDE4LjcwMiA0LjkyIDE4LjY4QzQuODY0MjEgMTguNjQxIDQuODE5MzIgMTguNTg4MyA0Ljc4OTU3IDE4LjUyNzFDNC43NTk4MiAxOC40NjU4IDQuNzQ2MiAxOC4zOTggNC43NSAxOC4zM1Y3LjA2MDAxQzQuNzQ4NzcgNi45ODAxNiA0Ljc3MjA5IDYuOTAxODYgNC44MTY4IDYuODM1NjlDNC44NjE1MSA2Ljc2OTUyIDQuOTI1NDYgNi43MTg2NyA1IDYuNjkwMDFMOC41OCA1LjE0MDAxVjE3LjIyTDUuMTcgMTguNjhaTTE5LjI1IDE2Ljk0QzE5LjI1MzcgMTcuMDE2NSAxOS4yMzQ4IDE3LjA5MjMgMTkuMTk1NyAxNy4xNTgxQzE5LjE1NjUgMTcuMjIzOSAxOS4wOTg5IDE3LjI3NjcgMTkuMDMgMTcuMzFMMTUuNDIgMTguODZWNi43ODAwMUwxOC44MyA1LjMyMDAxQzE4Ljg2OCA1LjI5ODA3IDE4LjkxMTEgNS4yODY1MiAxOC45NTUgNS4yODY1MkMxOC45OTg5IDUuMjg2NTIgMTkuMDQyIDUuMjk4MDcgMTkuMDggNS4zMjAwMUMxOS4xMzU4IDUuMzU5MDYgMTkuMTgwNyA1LjQxMTcgMTkuMjEwNCA1LjQ3Mjk1QzE5LjI0MDIgNS41MzQyIDE5LjI1MzggNS42MDIwMyAxOS4yNSA1LjY3MDAxVjE2Ljk0WlwiIGZpbGw9XCIjMDAwMDAwXCI+PC9wYXRoPiA8L2c+PC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlN2Z01hcFwiXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxzdmcgZmlsbD1cIiMwMDAwMDBcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAzMDcuMzE4IDMwNy4zMThcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHdpZHRoPVwiMzJweFwiIGhlaWdodD1cIjMycHhcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPGc+IDxnPiA8cGF0aCBkPVwiTTM0LjYzMywwdjMwNy4zMThsNDQuNjU3LTM2LjA1N2wzNy4xNjQsMjkuOTk5bDM3LjE3OS0zMGwzNy4xNjYsMjkuOTk5bDM3LjE5NC0zMC4wMDFsNDQuNjkyLDM2LjA1VjBIMzQuNjMzeiBNMjU3LjY4NiwyNzUuOTM4bC0yOS42OTItMjMuOTVsLTM3LjE5LDI5Ljk5OWwtMzcuMTY4LTMwLjAwMWwtMzcuMTc5LDMwbC0zNy4xNjgtMzAuMDAxbC0yOS42NTUsMjMuOTQzVjE1aDIwOC4wNTN2MjYwLjkzOCBIMjU3LjY4NnpcIj48L3BhdGg+IDxwYXRoIGQ9XCJNMTY0Ljc5OSwxODcuNjY2YzIwLjEzOSwwLDM4LjQ2NS0xMC4zMDEsNDkuMDIzLTI3LjU1NGwtMTIuNzk1LTcuODNjLTcuODExLDEyLjc2NC0yMS4zNTQsMjAuMzg0LTM2LjIyOSwyMC4zODQgYy0xNi44NzMsMC0zMS40NzgtOS44ODUtMzguMzM0LTI0LjE2OEgxNTYuMnYtMTVoLTMzLjc1M2MtMC4wODYtMS4wOTktMC4xNDMtMi4yMDYtMC4xNDMtMy4zMjZjMC0xLjEyMSwwLjA1Ny0yLjIyOCwwLjE0My0zLjMyNyBIMTU2LjJ2LTE1aC0yOS43MzVjNi44NTYtMTQuMjgyLDIxLjQ2MS0yNC4xNjcsMzguMzMzLTI0LjE2N2MxNC44NzUsMCwyOC40MTgsNy42MiwzNi4yMjksMjAuMzg0bDEyLjc5NS03LjgzIGMtMTAuNTU5LTE3LjI1My0yOC44ODUtMjcuNTU0LTQ5LjAyMy0yNy41NTRjLTI1LjI5NCwwLTQ2LjgxMSwxNi40MjctNTQuNDgxLDM5LjE2N0g5My4xNXYxNWgxNC4yNTggYy0wLjA2MywxLjEwMi0wLjEwMywyLjIxLTAuMTAzLDMuMzI3czAuMDQsMi4yMjUsMC4xMDMsMy4zMjZIOTMuMTV2MTVoMTcuMTY3QzExNy45ODgsMTcxLjIzOSwxMzkuNTA0LDE4Ny42NjYsMTY0Ljc5OSwxODcuNjY2elwiPjwvcGF0aD4gPHJlY3QgeD1cIjkzLjE1XCIgeT1cIjIwNi42MTdcIiB3aWR0aD1cIjExNC4yNzRcIiBoZWlnaHQ9XCIxNVwiPjwvcmVjdD4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8L2c+IDwvZz48L3N2Zz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU3ZnUHJpY2VcIlxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxzdmcgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgY2xhc3M9XCJpY29uXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiIzAwMDAwMFwiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNNDU0LjUgNjc1LjVsLTMyLjQgMTA3LjloMTgxLjhMNTc0LjUgNjc4XCIgZmlsbD1cIiNGQkJBMjJcIj48L3BhdGg+PHBhdGggZD1cIk01MTAuMSA2ODIuM2MyMTUuMSAwIDIxNS4xLTE2NS4yIDIxNS4xLTE2NS4yVjE5Ny40SDMwMC45djMxOS43czAgMTY1LjIgMjE1LjEgMTY1LjJoLTUuOXpcIiBmaWxsPVwiI0ZCQkEyMlwiPjwvcGF0aD48cGF0aCBkPVwiTTUxNS40IDc4My40aDkxLjFzODkuNSAyLjMgODkuNSA4MC44SDMzMi40YzAtNzguNiA4OS41LTgwLjggODkuNS04MC44SDUxM1wiIGZpbGw9XCIjQzA0OTMxXCI+PC9wYXRoPjxwYXRoIGQ9XCJNODE2LjUgMzgzLjhWMjU5LjNjMC0xMS4yLTktMjAuMi0yMC4yLTIwLjJoLTUwLjl2LTQxLjdjMC0xMS4yLTktMjAuMi0yMC4yLTIwLjJIMzAwLjljLTExLjIgMC0yMC4yIDktMjAuMiAyMC4ydjQxLjdoLTUwLjljLTExLjIgMC0yMC4yIDktMjAuMiAyMC4ydjEyNC41YzAgMS4yLTAuNyA0Mi4yIDI3LjIgNzAuOSAxMS43IDEyIDI2LjUgMTkuOSA0My45IDIzLjh2MzguNmMwIDEuNiAyLjEgMTM1LjcgMTQ3LjggMTc0LjdsLTIxLjggNzIuN2MtMzkgNS43LTk0LjUgMzEuMi05NC41IDk5LjcgMCAxMS4yIDkgMjAuMiAyMC4yIDIwLjJINjk2YzExLjIgMCAyMC4yLTkgMjAuMi0yMC4yIDAtNjkuNi01Ny4yLTk0LjctOTYuNi05OS45bC0yMC40LTcyLjljMTQ0LjEtMzkuNiAxNDYuMi0xNzIuNyAxNDYuMi0xNzQuM3YtMzguNmMxNy40LTMuOSAzMi4xLTExLjggNDMuOS0yMy44IDI3LjktMjguNyAyNy4yLTY5LjcgMjcuMi03MC45eiBtLTU1MC44IDQyLjdjLTE2LTE2LjQtMTUuOC00MS45LTE1LjgtNDIuMVYyNzkuNmgzMC43djE1Ni43Yy01LjctMi40LTEwLjgtNS42LTE0LjktOS44eiBtMzM4LjIgMzc3LjFjMC4xIDAgMC4xIDAgMCAwaDJjNi4yIDAuMiA1NCAzIDY2LjggNDAuNGgtMzE3YzEyLjgtMzcuNCA2MC41LTQwLjIgNjYuMi00MC40aDE4MnogbS0xNTQuNi00MC40bDE5LjEtNjMuNmMxMi41IDEuNiAyNS45IDIuNSA0MC4xIDIuOCAwLjUgMCAxLjEgMC4xIDEuNiAwLjFoNS45YzAuNSAwIDEuMSAwIDEuNi0wLjEgMTQuOS0wLjMgMjguOC0xLjMgNDEuOS0zbDE3LjkgNjMuOUg0NDkuM3pNNzA1IDUxN2MtMC4xIDUuOS0zLjUgMTQzLjYtMTkxLjkgMTQ1LTE3LjYtMC4xLTMzLjYtMS40LTQ4LjEtMy43LTEuNS0wLjktMy0xLjctNC43LTIuMi0zLjItMC45LTYuMy0xLTkuNC0wLjQtMTI3LjEtMjcuMy0xMjkuNy0xMzMuNS0xMjkuOC0xMzguNlYyMTcuNkg3MDVWNTE3eiBtNTUuMy05MC41Yy00LjEgNC4yLTkuMSA3LjQtMTUgOS44VjI3OS41SDc3NnYxMDQuOGMwLjEgMC4zIDAuMyAyNS44LTE1LjcgNDIuMnpcIiBmaWxsPVwiIzIxMUYxRVwiPjwvcGF0aD48cGF0aCBkPVwiTTQ0Ni43IDQ0OS41bC0xMS4yIDY1LjJjLTEgNS43IDEuNCAxMS40IDYgMTQuOCA0LjcgMy40IDEwLjggMy44IDE2IDEuMWw1OC41LTMwLjggNTguNSAzMC44YzIuMiAxLjIgNC42IDEuNyA3LjEgMS43IDMuMSAwIDYuMy0xIDguOS0yLjkgNC43LTMuNCA3LTkuMSA2LTE0LjhsLTExLjItNjUuMiA0Ny40LTQ2LjJjNC4xLTQgNS42LTEwLjEgMy44LTE1LjUtMS44LTUuNS02LjUtOS41LTEyLjItMTAuM0w1NTkgMzY4bC0yOS4zLTU5LjNjLTIuNi01LjItNy44LTguNC0xMy42LTguNHMtMTEgMy4zLTEzLjYgOC40TDQ3My4yIDM2OGwtNjUuNSA5LjVjLTUuNyAwLjgtMTAuNCA0LjgtMTIuMiAxMC4zLTEuOCA1LjUtMC4zIDExLjUgMy44IDE1LjVsNDcuNCA0Ni4yeiBtMzguOC01Mi42YzQuOS0wLjcgOS4yLTMuOCAxMS40LTguM2wxOS4yLTM4LjkgMTkuMiAzOC45YzIuMiA0LjUgNi41IDcuNiAxMS40IDguM2w0MyA2LjItMzEuMSAzMC4zYy0zLjYgMy41LTUuMiA4LjUtNC40IDEzLjRsNy4zIDQyLjgtMzguNC0yMC4yYy00LjQtMi4zLTkuNy0yLjMtMTQuMSAwbC0zOC40IDIwLjIgNy4zLTQyLjhjMC44LTQuOS0wLjgtOS45LTQuNC0xMy40bC0zMS4xLTMwLjMgNDMuMS02LjJ6XCIgZmlsbD1cIiMyMTFGMUVcIj48L3BhdGg+PC9nPjwvc3ZnPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiU3ZnVHJvcGh5XCJcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbjxzdmcgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIC0xNS41IDEwNTUgMTA1NVwiIGNsYXNzPVwiaWNvblwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIiMwMDAwMDBcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTM1NC42MTQwNTQgNDMwLjM2NDMxOGw2Ny45MTM0OSAxMzguNDYwMTM1IDMzLjk2NDU4MS0yMy41MTAzMjQtNDcuMDIwNjQ4LTExMi4zMzIzMjh6TTYzNi43Mzc5NDMgNDA0LjI1MjE4NWw3OC4zNjc3NDYgMjIyLjAzMTUgMzkuMTgzODc0LTEwLjQzODU4NC02Ny45MTM0OS0yMzUuMTAzMjR6XCIgZmlsbD1cIiNDMEVBRkZcIj48L3BhdGg+PHBhdGggZD1cIk0zMzUuMDIyMTE3IDc2Ny4zNDU2MjljLTcwLjU3Nzk5MyAwLTEyOC4wMDU4NzgtNTcuNDI3ODg1LTEyOC4wMDU4NzctMTI4LjAwNTg3N3M1Ny40Mjc4ODUtMTI4LjAwNTg3OCAxMjguMDA1ODc3LTEyOC4wMDU4NzhjMy43NDU5NzggMCA3LjQ2MDYwOSAwLjE3MjQwOSAxMS4xMTI1NDcgMC40NzAyMDcgOC42MjA0NTIgMC43MzY2NTcgMTUuMDE1MjYgOC4zMzgzMjggMTQuMjk0Mjc3IDE2Ljk1ODc4LTAuNzM2NjU3IDguNjIwNDUyLTguMzY5Njc1IDE0Ljk5OTU4Ny0xNi45NTg3OCAxNC4yOTQyNzdhOTYuNzg0MTY3IDk2Ljc4NDE2NyAwIDAgMC0xMDUuMTA2ODIyIDk2LjI5ODI4N2MwIDUzLjI5MDA2OCA0My4zNTMwMzggOTYuNjU4Nzc5IDk2LjY1ODc3OCA5Ni42NTg3NzlhOTYuNzUyODIgOTYuNzUyODIgMCAwIDAgOTUuMzI2NTI4LTExMi43NTU1MTQgMTUuNjczNTQ5IDE1LjY3MzU0OSAwIDEgMSAzMC45MDgyMzktNS4xNzIyNzFjMS4xNzU1MTYgNi45NzQ3MjkgMS43NTU0MzggMTQuMTIxODY4IDEuNzU1NDM3IDIxLjI2OTAwNiAwIDcwLjU3Nzk5My01Ny40MTIyMTEgMTI3Ljk5MDIwNC0xMjcuOTkwMjA0IDEyNy45OTAyMDR6TTcwOS44NzA3MjQgNzY3LjM0NTYyOWMtNzYuMzQ1ODU5IDAtMTM4LjQ0NDQ2MS02Mi4xMTQyNzYtMTM4LjQ0NDQ2Mi0xMzguNDQ0NDYxYTEzNy42NjA3ODQgMTM3LjY2MDc4NCAwIDAgMSA1My4zODQxMDktMTA5LjI0NDYzOSAxNS42NTc4NzYgMTUuNjU3ODc2IDAgMSAxIDE5LjI2Mjc5MyAyNC43MTcxODcgMTA2LjUwMTc2OCAxMDYuNTAxNzY4IDAgMCAwLTQxLjI5OTgwMyA4NC41Mjc0NTIgMTA3LjIwNzA3OCAxMDcuMjA3MDc4IDAgMCAwIDEwNy4wOTczNjMgMTA3LjA5NzM2MyAxMDcuMjA3MDc4IDEwNy4yMDcwNzggMCAwIDAgMTA3LjA5NzM2My0xMDcuMDk3MzYzIDEwNy4wNjYwMTYgMTA3LjA2NjAxNiAwIDAgMC00Ny4yNDAwNzgtODguODIyMDA0IDE1LjY3MzU0OSAxNS42NzM1NDkgMCAwIDEgMTcuNTU0Mzc1LTI1Ljk4Njc0NSAxMzguMzk3NDQxIDEzOC4zOTc0NDEgMCAwIDEgNjEuMDMyODAxIDExNC43OTMwNzVjMC4wMTU2NzQgNzYuMzYxNTMyLTYyLjA5ODYwMyAxMzguNDYwMTM1LTEzOC40NDQ0NjEgMTM4LjQ2MDEzNXpcIiBmaWxsPVwiIzFGODdERFwiPjwvcGF0aD48cGF0aCBkPVwiTTQxOC42MDkxNTYgNTkxLjM0NzM0NGExNS42ODkyMjMgMTUuNjg5MjIzIDAgMCAxLTE0LjQ5ODAzMy05LjczMzI3NWwtNTYuMDE3MjY1LTEzNi44NzcxMDZoLTI3LjQ0NDM4NWExNS42NzM1NDkgMTUuNjczNTQ5IDAgMCAxIDAtMzEuMzQ3MDk5aDEyOC4wMDU4NzdhMTUuNjczNTQ5IDE1LjY3MzU0OSAwIDAgMSAwIDMxLjM0NzA5OWgtMTAuOTg3MTU4bDM2Ljk0MjU1NiA5NC4yNzYzOTlhMTUuNjczNTQ5IDE1LjY3MzU0OSAwIDAgMS01LjIxOTI5MiAxOC4yNzUzNTlsLTQxLjQwOTUxNyAzMC45NTUyNmExNS42NDIyMDIgMTUuNjQyMjAyIDAgMCAxLTkuMzcyNzgzIDMuMTAzMzYzeiBtLTM2LjY0NDc1OC0xNDYuNjEwMzgxbDQzLjQ3ODQyNiAxMDYuMjY2NjY1IDE1LjYyNjUyOC0xMS42NzY3OTUtMzcuMDY3OTQ0LTk0LjU4OTg3SDM4MS45NjQzOTh6XCIgZmlsbD1cIiMxRjg3RERcIj48L3BhdGg+PHBhdGggZD1cIk0zMzUuMDM3NzkxIDY1NS4wMjg5NzVhMTUuNjU3ODc2IDE1LjY1Nzg3NiAwIDAgMS05LjE4NDctMjguMzg0Nzk4bDMwOS41NTI2LTIyMy4zNDgwNzlhMTUuNjg5MjIzIDE1LjY4OTIyMyAwIDAgMSAxOC4zMzgwNTMgMjUuNDIyNDk4bC0zMDkuNTUyNiAyMjMuMzQ4MDc4YTE1LjY1Nzg3NiAxNS42NTc4NzYgMCAwIDEtOS4xNTMzNTMgMi45NjIzMDF6TTYxMy4yMjc2MTkgMzQ1LjQ3NjM3NWgtNzguMzY3NzQ3YTE1LjY3MzU0OSAxNS42NzM1NDkgMCAwIDEgMC0zMS4zNDcwOTloNzguMzY3NzQ3YTE1LjY3MzU0OSAxNS42NzM1NDkgMCAwIDEgMCAzMS4zNDcwOTl6XCIgZmlsbD1cIiMxRjg3RERcIj48L3BhdGg+PHBhdGggZD1cIk03MTUuMTA1Njg5IDY1MS4xMTA1ODdhMTUuNjEwODU1IDE1LjYxMDg1NSAwIDAgMS0xNC45NjgyMzktMTEuMDQ5ODUybC0xMDguOTQ2ODQyLTM1Mi4wNTkyNjZoLTEwMy4zODI3MzFhMTUuNjczNTQ5IDE1LjY3MzU0OSAwIDAgMSAwLTMxLjM0NzA5OGgxMTQuOTM0MTM3YTE1LjY3MzU0OSAxNS42NzM1NDkgMCAwIDEgMTQuOTY4MjQgMTEuMDQ5ODUybDM0LjE2ODMzNyAxMTAuNDA0NDgyIDMwLjgyOTg3Mi0xMC4yODE4NDlhMTUuNzM2MjQ0IDE1LjczNjI0NCAwIDAgMSAxOS45MDU0MDcgMTAuMTQwNzg3bDc0LjQ0OTM2IDIzNS4xMDMyNGExNS42NzM1NDkgMTUuNjczNTQ5IDAgMCAxLTkuNDM1NDc3IDE5LjQwMzg1NGwtNDcuMDIwNjQ4IDE3LjYzMjc0M2ExNS40NTQxMiAxNS40NTQxMiAwIDAgMS01LjUwMTQxNiAxLjAwMzEwN3ogbS01My45NDgzNTctMjQzLjA0OTczbDYzLjk5NTEwMiAyMDYuODU5NTA1IDE3LjUzODcwMi02LjU2NzIxNy02NS4xNTQ5NDQtMjA1Ljc0NjY4My0xNi4zNzg4NiA1LjQ1NDM5NXpcIiBmaWxsPVwiIzFGODdERFwiPjwvcGF0aD48L2c+PC9zdmc+XG4gIDwvdGVtcGxhdGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YmNkYWYwM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzViY2RhZjAzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNWJjZGFmMDMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Zhdm91cml0ZVN0b3BzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZmVmMGQwYlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Zhdm91cml0ZVN0b3BzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXZvdXJpdGVTdG9wcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL0Zhdm91cml0ZVN0b3BzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI0ZmVmMGQwYlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzRmZWYwZDBiJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNGZlZjBkMGInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Zhdm91cml0ZVN0b3BzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZmVmMGQwYlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0ZmVmMGQwYicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTW9zdFZpc2l0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmN2E5ODM0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9zdFZpc2l0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vc3RWaXNpdGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9CdXNBcHAvTW9zdFZpc2l0ZWQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjFmN2E5ODM0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWY3YTk4MzQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxZjdhOTgzNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTW9zdFZpc2l0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmN2E5ODM0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzFmN2E5ODM0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9UaGVNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYzZkZGQwNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVNZW51LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJmYzZkZGQwNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2ZjNmRkZDA2JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZmM2ZGRkMDYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZU1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZjNmRkZDA2XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2ZjNmRkZDA2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9UaGVQbGFucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDk1MTUwODhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaGVQbGFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlUGxhbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL0J1c0FwcC9UaGVQbGFucy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZDk1MTUwODhcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkOTUxNTA4OCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2Q5NTE1MDg4JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVQbGFucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDk1MTUwODhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZDk1MTUwODgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1RoZVVzZXJEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjA3MzAzM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZVVzZXJEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UaGVVc2VyRGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvQnVzQXBwL1RoZVVzZXJEYXRhLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwZjA3MzAzM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzBmMDczMDMzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMGYwNzMwMzMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZVVzZXJEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjA3MzAzM1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwZjA3MzAzMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVHJhbnNwb3J0UHJpY2VzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzgwNTI2MFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RyYW5zcG9ydFByaWNlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVHJhbnNwb3J0UHJpY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9CdXNBcHAvVHJhbnNwb3J0UHJpY2VzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwYzgwNTI2MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzBjODA1MjYwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMGM4MDUyNjAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RyYW5zcG9ydFByaWNlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGM4MDUyNjBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMGM4MDUyNjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZvcnVtQ2F0ZWdvcmllcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjI3ZTgwYjhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Gb3J1bUNhdGVnb3JpZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZvcnVtQ2F0ZWdvcmllcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1DYXRlZ29yaWVzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIyMjdlODBiOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzIyN2U4MGI4JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMjI3ZTgwYjgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZvcnVtQ2F0ZWdvcmllcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjI3ZTgwYjhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMjI3ZTgwYjgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZvcnVtSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwOWUxZWQ0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9ydW1Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9ydW1Ib21lUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxFZHVcXFxcRG9jdW1lbnRzXFxcXGVtdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1Ib21lUGFnZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiYzA5ZTFlZDRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdjMDllMWVkNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2MwOWUxZWQ0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb3J1bUhvbWVQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMDllMWVkNFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdjMDllMWVkNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRm9ydW1NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMjM4YWQzMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZvcnVtTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9ydW1NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bU1lbnUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImIyMzhhZDMyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYjIzOGFkMzInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdiMjM4YWQzMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRm9ydW1NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMjM4YWQzMlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdiMjM4YWQzMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRm9ydW1OZXdQb3N0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODMwZGEwOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZvcnVtTmV3UG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9ydW1OZXdQb3N0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bU5ld1Bvc3QudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQ4MzBkYTA4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDgzMGRhMDgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc0ODMwZGEwOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRm9ydW1OZXdQb3N0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODMwZGEwOFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0ODMwZGEwOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRm9ydW1TYXZlZFBvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGNlNWIxNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZvcnVtU2F2ZWRQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9ydW1TYXZlZFBvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bVNhdmVkUG9zdHMudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjNkY2U1YjE0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnM2RjZTViMTQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczZGNlNWIxNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRm9ydW1TYXZlZFBvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGNlNWIxNFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczZGNlNWIxNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRm9ydW1TZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFhN2Q5ZGEwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9ydW1TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZvcnVtU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bVNlYXJjaC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiYWE3ZDlkYTBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdhYTdkOWRhMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2FhN2Q5ZGEwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb3J1bVNlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWE3ZDlkYTBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignYWE3ZDlkYTAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N2Z0Jpa2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzZTJmNTcyXCJcbmNvbnN0IHNjcmlwdCA9IHt9XG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdCaWtlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJmM2UyZjU3MlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2YzZTJmNTcyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZjNlMmY1NzInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N2Z0Jpa2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzZTJmNTcyXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2YzZTJmNTcyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdmdEZWxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTliNmY1MmRlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3ZnRGVsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdmdEZWxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0RlbGV0ZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiOWI2ZjUyZGVcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc5YjZmNTJkZScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzliNmY1MmRlJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdmdEZWxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTliNmY1MmRlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzliNmY1MmRlJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdmdMb2dvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiNjBkZWYwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3ZnTG9nb3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdmdMb2dvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z0xvZ291dC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMmI2MGRlZjBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyYjYwZGVmMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzJiNjBkZWYwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdmdMb2dvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiNjBkZWYwXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzJiNjBkZWYwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdmdNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMmViZTM0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3ZnTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdmdNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z01hcC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2MyZWJlMzRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczYzJlYmUzNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNjMmViZTM0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdmdNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMmViZTM0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzNjMmViZTM0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdmdQcmljZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDdjYTBjNWFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdmdQcmljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3ZnUHJpY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWR1XFxcXERvY3VtZW50c1xcXFxlbXRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9jb21wb25lbnRzL1N2Z0ljb25zL1N2Z1ByaWNlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJkN2NhMGM1YVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2Q3Y2EwYzVhJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZDdjYTBjNWEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N2Z1ByaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kN2NhMGM1YVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdkN2NhMGM1YScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vU3ZnVHJvcGh5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZWZlNjZkNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N2Z1Ryb3BoeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3ZnVHJvcGh5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdVxcXFxEb2N1bWVudHNcXFxcZW10XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvY29tcG9uZW50cy9TdmdJY29ucy9TdmdUcm9waHkudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjJlZmU2NmQ0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMmVmZTY2ZDQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcyZWZlNjZkNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3ZnVHJvcGh5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZWZlNjZkNFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcyZWZlNjZkNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0Zhdm91cml0ZVN0b3BzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0Zhdm91cml0ZVN0b3BzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9zdFZpc2l0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9zdFZpc2l0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVQbGFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVQbGFucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZVVzZXJEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZVVzZXJEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vVHJhbnNwb3J0UHJpY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RyYW5zcG9ydFByaWNlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZvcnVtQ2F0ZWdvcmllcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bUNhdGVnb3JpZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bUhvbWVQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZvcnVtSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bU1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRm9ydW1NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRm9ydW1OZXdQb3N0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZvcnVtTmV3UG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZvcnVtU2F2ZWRQb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bVNhdmVkUG9zdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bVNlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bVNlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N2Z0RlbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdEZWxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdMb2dvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3ZnTG9nb3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3ZnTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N2Z01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N2Z1ByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N2Z1ByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3ZnVHJvcGh5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N2Z1Ryb3BoeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViY2RhZjAzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRmF2b3VyaXRlU3RvcHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmZWYwZDBiXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9zdFZpc2l0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmN2E5ODM0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vVGhlTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmM2ZGRkMDZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVQbGFucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDk1MTUwODhcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVVc2VyRGF0YS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYwNzMwMzNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UcmFuc3BvcnRQcmljZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjODA1MjYwXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRm9ydW1DYXRlZ29yaWVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjdlODBiOFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZvcnVtSG9tZVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwOWUxZWQ0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRm9ydW1NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMjM4YWQzMlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZvcnVtTmV3UG9zdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDgzMGRhMDhcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Gb3J1bVNhdmVkUG9zdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkY2U1YjE0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRm9ydW1TZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFhN2Q5ZGEwXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3ZnQmlrZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjNlMmY1NzJcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdEZWxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTliNmY1MmRlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3ZnTG9nb3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjYwZGVmMFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N2Z01hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MyZWJlMzRcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdQcmljZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDdjYTBjNWFcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdmdUcm9waHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlZmU2NmQ0XCIiXSwibmFtZXMiOlsiQXBwIiwiY3JlYXRlQXBwIiwid2luZG93IiwiX19WVUVfT1BUSU9OU19BUElfXyIsIl9fVlVFX1BST0RfREVWVE9PTFNfXyIsIm1vdW50IiwiVGhlSGVhZGVyIiwiVGhlTWVudSIsIkJ1c1RpbWUiLCJUaGVVc2VyRGF0YSIsIlRoZVBsYW5zIiwiVHJhbnNwb3J0UHJpY2VzIiwiQmlrZVRpbWUiLCJGYXZvdXJpdGVTdG9wcyIsIk1vc3RWaXNpdGVkIiwiRm9ydW1Ib21lUGFnZSIsImNvbXBvbmVudHMiLCJkYXRhIiwic2VsZWN0ZWRUYWIiLCJtZXRob2RzIiwiY2hhbmdlVGFiIiwidGFiIiwiY29uc29sZSIsImxvZyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImF4aW9zIiwiU3ZnRGVsZXRlIiwiQ29uZmlybU1lc3NhZ2UiLCJkYXRhRXhpc3RzIiwic3RvcHNBcnJheSIsImFza0NvbmZpcm0iLCJtb3VudGVkIiwiZ2V0RmF2b3VyaXRlU3RvcHMiLCJfdGhpcyIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXQiLCJjb25maXJtRGVsZXRlU3RvcCIsInN0b3BJZCIsImNvbmZpcm1TdG9wSWQiLCJkZWxldGVTdG9wIiwiX3RoaXMyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwb3N0IiwiZ2V0TW9zdFZpc2l0ZWQiLCJTdmdCdXMiLCJTdmdTdGFyIiwiU3ZnRm9ydW0iLCJTdmdVc2VyIiwiU3ZnTG9nb3V0IiwiU3ZnTWFwIiwiU3ZnUHJpY2UiLCJTdmdCaWtlIiwiU3ZnVHJvcGh5Iiwic2hvd01vYmlsZU1lbnUiLCIkZW1pdCIsImFjdGl2ZVRhYiIsImNoYW5nZVRhYk1vYmlsZSIsImNvbXB1dGVkIiwiaXNUYWJBY3RpdmUiLCJhc2tGb3JJbWFnZXMiLCJwbGFucyIsInZpZXdJbWFnZSIsInBsYW4iLCJsb2NhdGlvbiIsImhyZWYiLCJFcnJvck1lc3NhZ2UiLCJteURhdGEiLCJ1c2VybmFtZSIsInByb2ZpbGVQaWMiLCJwYXNzSW5wdXQiLCJtaWRkbGVTdGVwIiwic2hvd0Vycm9yTWVzc2FnZSIsImNoYW5nZSIsImxhc3RTdGVwIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkUmVwZWF0Iiwic3VjY2VzcyIsIm5ld1BpY3R1cmUiLCJ3cm9uZ0ZpbGVQaWMiLCJkZWxldGVBY2NvdW50Iiwic2Vjb25kU3RlcERlbGV0ZUFjY291bnQiLCJmaW5hbERlbGV0ZU1lc3NhZ2UiLCJwb3N0cyIsImRlbGV0ZWRQb3N0IiwiZGVsZXRlZFBvc3RJZCIsInBvc3RzUHVibGlzaGVkIiwiZGF0ZUNyZWF0ZWQiLCJyb2xlIiwic2FtZVBhc3N3b3JkIiwiZmV0Y2hEYXRhIiwiZ2V0UG9zdHNQdWJsaXNoZWQiLCJwcm9maWxlUGljdHVyZSIsImRlbGV0ZVVzZXJDb21taXQiLCJmaWx0ZXIiLCJpZCIsImRlbGV0ZVBvc3QiLCJ0aXRsZSIsImRlbGV0ZWRQbGFuIiwiX3RoaXMzIiwiY2hhbmdlUGFzc3dvcmQiLCJzZWNvbmRTdGVwIiwiX3RoaXM0IiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCIkcmVmcyIsImlzUGFzc3dvcmRDb3JyZWN0IiwiY2hhbmdlRmluYWxQYXNzd29yZCIsIl90aGlzNSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicGFzc3dvcmQiLCJjaGFuZ2VQaWN0dXJlIiwiX3RoaXM2IiwiX2NhbGxlZTUiLCJmaWxlTmFtZSIsImZvcm1EYXRhIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiZmlsZXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhlYWRlcnMiLCJEYXRlIiwiZ2V0VGltZSIsImRlbGV0ZUFjY291bnRNZXRob2QiLCJjaGVja0RlbGV0ZUFjY291bnRQYXNzd29yZCIsIl90aGlzNyIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiZGVsZXRlUGFzc3dvcmQiLCJkZWxldGVBY2NvdW50TGFzU3RlcCIsIl90aGlzOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwibG9hZFBsYW5zIiwicHJvcHMiLCJzaG93Q2F0ZWdvcmllcyIsIkZvcnVtTWVudSIsIkZvcnVtQ2F0ZWdvcmllcyIsIkZvcnVtTmV3UG9zdCIsIkZvcnVtU2VhcmNoIiwiRm9ydW1TYXZlZFBvc3RzIiwiY2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIm8iLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsInMiLCJuIiwiZSIsIl9lIiwiZiIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJzdGVwIiwiX2UyIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwiYXJyIiwibGVuIiwiYXJyMiIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJpbWciLCJuZXdQb3N0IiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJmaWxlIiwiYm9keSIsInByaW50IiwiZ2V0U2F2ZWRQb3N0cyIsInNlYXJjaEZvclBvc3RzIiwicXVlcnkiLCJyZXN1bHRzIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF90aGVfaGVhZGVyIiwiX2NvbXBvbmVudF90aGVfbWVudSIsIm9uQ2hhbmdlVGFiIiwiJG9wdGlvbnMiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVCbG9jayIsIl9yZXNvbHZlRHluYW1pY0NvbXBvbmVudCIsIiRkYXRhIiwiX2hvaXN0ZWRfMTgiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfVGVsZXBvcnQiLCJ0byIsIl9jb21wb25lbnRfY29uZmlybV9tZXNzYWdlIiwibWVzc2FnZSIsIl9jdHgiLCJvbkNsb3NlRXJyb3IiLCJfY2FjaGUiLCIkZXZlbnQiLCJvbkNsaWNrIiwiX2hvaXN0ZWRfOCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfaG9pc3RlZF85Iiwic3RvcE5hbWUiLCJfaG9pc3RlZF8xMCIsImN1c3RvbU5hbWUiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiYnVzZXMiLCJidXMiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwidGltZXNWaXNpdGVkIiwiX2hvaXN0ZWRfMTUiLCJfY29tcG9uZW50X3N2Z19kZWxldGUiLCJfaG9pc3RlZF8xNyIsIl9ob2lzdGVkXzE5Iiwidmlld0JveCIsImQiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NvbXBvbmVudF9zdmdfYnVzIiwiX2NvbXBvbmVudF9zdmdfc3RhciIsIl9jb21wb25lbnRfc3ZnX2ZvcnVtIiwiX2NvbXBvbmVudF9zdmdfdXNlciIsIl9jb21wb25lbnRfc3ZnX21hcCIsIl9jb21wb25lbnRfc3ZnX3ByaWNlIiwiX2NvbXBvbmVudF9zdmdfYmlrZSIsIl9jb21wb25lbnRfc3ZnX3Ryb3BoeSIsIl9jb21wb25lbnRfc3ZnX2xvZ291dCIsImluZGV4Iiwic3JjIiwicmVmIiwicGxhY2Vob2xkZXIiLCJhbHQiLCJfaG9pc3RlZF8xNiIsImNhdGVnb3J5IiwiX2hvaXN0ZWRfMjAiLCJkYXRlIiwiX2hvaXN0ZWRfMjEiLCJfaG9pc3RlZF8yMiIsIl9ob2lzdGVkXzIzIiwiX2hvaXN0ZWRfMjQiLCJhY2NlcHQiLCJvbklucHV0IiwiX2hvaXN0ZWRfMjUiLCJfaG9pc3RlZF8yNiIsIl9ob2lzdGVkXzI3IiwiX2hvaXN0ZWRfMjgiLCJvblN1Ym1pdCIsIl93aXRoTW9kaWZpZXJzIiwiX2hvaXN0ZWRfMjkiLCJfaG9pc3RlZF8zMCIsIl9ob2lzdGVkXzMxIiwiX2hvaXN0ZWRfMzIiLCJfaG9pc3RlZF8zMyIsIl9ob2lzdGVkXzM0IiwiX2hvaXN0ZWRfMzUiLCJfaG9pc3RlZF8zNiIsIl9ob2lzdGVkXzM3IiwiX2hvaXN0ZWRfMzgiLCJfY29tcG9uZW50X2Vycm9yX21lc3NhZ2UiLCJwcmljZSIsIiRwcm9wcyIsImRlc2NyaXB0aW9uIiwiX2NvbXBvbmVudF9mb3J1bV9tZW51IiwicmVxdWlyZWQiLCJjb2xzIiwicm93cyIsImRpc2FibGVkIiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsInBvc3RJZCIsImRhdGVfY3JlYXRlZCIsImF1dGhvciIsIndpZHRoIiwiaGVpZ2h0IiwidmVyc2lvbiIsInhtbG5zIiwiZmlsbCIsInN0eWxlIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==