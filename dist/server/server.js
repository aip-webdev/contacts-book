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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar CssBaseline_1 = __importDefault(__webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\"));\r\nvar styles_1 = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ./styles/theme */ \"./src/styles/theme.ts\"));\r\nvar HomePage_1 = __importDefault(__webpack_require__(/*! ./shared/Pages/HomePage/HomePage */ \"./src/shared/Pages/HomePage/HomePage.tsx\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar context_1 = __webpack_require__(/*! ./context */ \"./src/context/index.tsx\");\r\nvar SignInPage_1 = __webpack_require__(/*! ./shared/Pages/SignInPage */ \"./src/shared/Pages/SignInPage/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar SignUpPage_1 = __webpack_require__(/*! ./shared/Pages/SignUpPage */ \"./src/shared/Pages/SignUpPage/index.ts\");\r\nvar RequiredAuth_1 = __webpack_require__(/*! ./shared/Components/RequiredAuth */ \"./src/shared/Components/RequiredAuth.tsx\");\r\nvar useAuthData_1 = __importDefault(__webpack_require__(/*! ./hooks/useAuthData */ \"./src/hooks/useAuthData.ts\"));\r\nvar NoMatchPage_1 = __webpack_require__(/*! ./shared/Pages/NoMatchPage */ \"./src/shared/Pages/NoMatchPage/index.ts\");\r\nvar useUsersData_1 = __importDefault(__webpack_require__(/*! ./hooks/useUsersData */ \"./src/hooks/useUsersData.ts\"));\r\nfunction AppComponent() {\r\n    var isAuth = (0, useAuthData_1.default)();\r\n    var _a = (0, useUsersData_1.default)(), users = _a.users, error = _a.error, loading = _a.loading;\r\n    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.default },\r\n        react_1.default.createElement(CssBaseline_1.default, null),\r\n        react_1.default.createElement(react_router_dom_1.Routes, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(RequiredAuth_1.RequiredAuth, null,\r\n                    react_1.default.createElement(HomePage_1.default, null)) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/signin', element: react_1.default.createElement(SignInPage_1.SignInPage, null) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', element: react_1.default.createElement(SignUpPage_1.SignUpPage, null) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(NoMatchPage_1.NoMatchPage, null) }))));\r\n}\r\nexports.App = (0, root_1.hot)(function () {\r\n    return (react_1.default.createElement(context_1.AppProvider, null,\r\n        react_1.default.createElement(AppComponent, null)));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/context/actions/index.ts":
/*!**************************************!*\
  !*** ./src/context/actions/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createNewUser = exports.CREATE_NEW_USER = exports.logout = exports.LOGOUT = exports.login = exports.LOGIN = exports.fetchUsersFailure = exports.FETCH_USERS_FAILURE = exports.fetchUsersSuccess = exports.FETCH_USERS_SUCCESS = exports.fetchUsers = exports.FETCH_USERS = void 0;\r\nexports.FETCH_USERS = 'FETCH_USERS';\r\nfunction fetchUsers() {\r\n    return {\r\n        type: exports.FETCH_USERS,\r\n        payload: {\r\n            users: [],\r\n            loading: true,\r\n            error: false\r\n        }\r\n    };\r\n}\r\nexports.fetchUsers = fetchUsers;\r\nexports.FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';\r\nfunction fetchUsersSuccess(users) {\r\n    return {\r\n        type: exports.FETCH_USERS_SUCCESS,\r\n        payload: {\r\n            users: users,\r\n            loading: false,\r\n            error: false\r\n        }\r\n    };\r\n}\r\nexports.fetchUsersSuccess = fetchUsersSuccess;\r\nexports.FETCH_USERS_FAILURE = 'FETCH_USER_FAILURE';\r\nfunction fetchUsersFailure() {\r\n    return {\r\n        type: exports.FETCH_USERS_FAILURE,\r\n        payload: {\r\n            users: [],\r\n            loading: false,\r\n            error: true\r\n        }\r\n    };\r\n}\r\nexports.fetchUsersFailure = fetchUsersFailure;\r\nexports.LOGIN = 'LOGIN';\r\nfunction login() {\r\n    return {\r\n        type: exports.LOGIN,\r\n        payload: true\r\n    };\r\n}\r\nexports.login = login;\r\nexports.LOGOUT = 'LOGOUT';\r\nfunction logout() {\r\n    return {\r\n        type: exports.LOGOUT,\r\n        payload: false\r\n    };\r\n}\r\nexports.logout = logout;\r\nexports.CREATE_NEW_USER = 'CREATE_NEW_USER';\r\nfunction createNewUser(user) {\r\n    return {\r\n        type: exports.CREATE_NEW_USER,\r\n        payload: [user]\r\n    };\r\n}\r\nexports.createNewUser = createNewUser;\r\n\n\n//# sourceURL=webpack:///./src/context/actions/index.ts?");

/***/ }),

/***/ "./src/context/index.tsx":
/*!*******************************!*\
  !*** ./src/context/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useAppDispatch = exports.useAppState = exports.AppProvider = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/context/reducers/index.ts\");\r\n// @ts-ignore\r\nvar AppStateContext = react_1.default.createContext();\r\n// @ts-ignore\r\nvar AppDispatchContext = react_1.default.createContext();\r\nfunction AppProvider(_a) {\r\n    var children = _a.children;\r\n    var initState = {\r\n        usersData: {\r\n            users: [],\r\n            error: false,\r\n            loading: false\r\n        },\r\n        isAuth: false\r\n    };\r\n    var _b = react_1.default.useReducer(reducers_1.rootReducer, initState), state = _b[0], dispatch = _b[1];\r\n    return (react_1.default.createElement(AppStateContext.Provider, { value: state },\r\n        react_1.default.createElement(AppDispatchContext.Provider, { value: dispatch }, children)));\r\n}\r\nexports.AppProvider = AppProvider;\r\nfunction useAppState() {\r\n    return react_1.default.useContext(AppStateContext);\r\n}\r\nexports.useAppState = useAppState;\r\nfunction useAppDispatch() {\r\n    return react_1.default.useContext(AppDispatchContext);\r\n}\r\nexports.useAppDispatch = useAppDispatch;\r\n\n\n//# sourceURL=webpack:///./src/context/index.tsx?");

/***/ }),

/***/ "./src/context/reducers/index.ts":
/*!***************************************!*\
  !*** ./src/context/reducers/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar actions_1 = __webpack_require__(/*! ../actions */ \"./src/context/actions/index.ts\");\r\nvar usersDataReducer_1 = __webpack_require__(/*! ./usersDataReducer */ \"./src/context/reducers/usersDataReducer.ts\");\r\nvar usersReducer_1 = __webpack_require__(/*! ./usersReducer */ \"./src/context/reducers/usersReducer.ts\");\r\n//@ts-ignore\r\nvar rootReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.FETCH_USERS:\r\n        case actions_1.FETCH_USERS_SUCCESS:\r\n        case actions_1.FETCH_USERS_FAILURE:\r\n            return (0, ramda_1.merge)(state, { usersData: (0, usersDataReducer_1.usersDataReducer)(state.usersData, action) });\r\n        case actions_1.CREATE_NEW_USER:\r\n            var usData = (0, ramda_1.merge)(state.usersData, { users: (0, usersReducer_1.usersReducer)(state.usersData.users, action), loading: false, error: false });\r\n            return (0, ramda_1.merge)(state, { usersData: usData, isAuth: true });\r\n        case actions_1.LOGIN:\r\n        case actions_1.LOGOUT:\r\n            return (0, ramda_1.merge)(state, { isAuth: action.payload });\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/context/reducers/index.ts?");

/***/ }),

/***/ "./src/context/reducers/usersDataReducer.ts":
/*!**************************************************!*\
  !*** ./src/context/reducers/usersDataReducer.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usersDataReducer = void 0;\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar usersDataReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case \"FETCH_USERS\":\r\n            return (0, ramda_1.merge)(state, { loading: true });\r\n        case \"FETCH_USERS_SUCCESS\":\r\n            return (0, ramda_1.merge)(state, { loading: action.payload.loading, users: action.payload.users });\r\n        case \"FETCH_USER_FAILURE\":\r\n            return (0, ramda_1.merge)(state, action.payload);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.usersDataReducer = usersDataReducer;\r\n\n\n//# sourceURL=webpack:///./src/context/reducers/usersDataReducer.ts?");

/***/ }),

/***/ "./src/context/reducers/usersReducer.ts":
/*!**********************************************!*\
  !*** ./src/context/reducers/usersReducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usersReducer = void 0;\r\nvar usersReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case \"CREATE_NEW_USER\":\r\n            return __spreadArray(__spreadArray([], state, true), action.payload, true);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.usersReducer = usersReducer;\r\n\n\n//# sourceURL=webpack:///./src/context/reducers/usersReducer.ts?");

/***/ }),

/***/ "./src/hooks/useAppStore.ts":
/*!**********************************!*\
  !*** ./src/hooks/useAppStore.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useAppStore = void 0;\r\nvar context_1 = __webpack_require__(/*! ../context */ \"./src/context/index.tsx\");\r\nvar useAppStore = function () { return [(0, context_1.useAppState)(), (0, context_1.useAppDispatch)()]; };\r\nexports.useAppStore = useAppStore;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useAppStore.ts?");

/***/ }),

/***/ "./src/hooks/useAuthData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useAuthData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useAppStore_1 = __webpack_require__(/*! ./useAppStore */ \"./src/hooks/useAppStore.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../context/actions */ \"./src/context/actions/index.ts\");\r\nvar useAuthData = function () {\r\n    var _a = (0, useAppStore_1.useAppStore)(), state = _a[0], dispatch = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        var isAuth = JSON.parse(localStorage.getItem('isAuth'));\r\n        if (!!isAuth) {\r\n            isAuth ? dispatch((0, actions_1.login)()) : dispatch((0, actions_1.logout)());\r\n        }\r\n    }, []);\r\n    (0, react_1.useEffect)(function () {\r\n        localStorage.setItem('isAuth', JSON.stringify(state.isAuth));\r\n    }, [state.isAuth]);\r\n    return state.isAuth;\r\n};\r\nexports.default = useAuthData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useAuthData.ts?");

/***/ }),

/***/ "./src/hooks/useUsersData.ts":
/*!***********************************!*\
  !*** ./src/hooks/useUsersData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar actions_1 = __webpack_require__(/*! ../context/actions */ \"./src/context/actions/index.ts\");\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useAppStore_1 = __webpack_require__(/*! ./useAppStore */ \"./src/hooks/useAppStore.ts\");\r\nvar useUsersData = function () {\r\n    var _a = (0, useAppStore_1.useAppStore)(), _b = _a[0], usersData = _b.usersData, isAuth = _b.isAuth, dispatch = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        try {\r\n            dispatch((0, actions_1.fetchUsers)());\r\n            var users = JSON.parse(localStorage.getItem('users'));\r\n            if (users && users.length > usersData.users.length) {\r\n                dispatch((0, actions_1.fetchUsersSuccess)(users));\r\n            }\r\n            else\r\n                dispatch((0, actions_1.fetchUsersSuccess)([]));\r\n        }\r\n        catch (e) {\r\n            dispatch((0, actions_1.fetchUsersFailure)());\r\n        }\r\n    }, []);\r\n    (0, react_1.useEffect)(function () {\r\n        if (usersData.loading)\r\n            return;\r\n        try {\r\n            //async action\r\n            localStorage.setItem('users', JSON.stringify(usersData.users));\r\n        }\r\n        catch (e) {\r\n            dispatch((0, actions_1.fetchUsersFailure)());\r\n        }\r\n    }, [usersData.users]);\r\n    return __assign({}, usersData);\r\n};\r\nexports.default = useUsersData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUsersData.ts?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charSet=\\\"utf-8\\\"/>\\n        <link rel=\\\"icon\\\" href=\\\"/img-src/favicon.ico\\\"/>\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"/>\\n        <meta name=\\\"theme-color\\\" content=\\\"#000000\\\"/>\\n        <link rel=\\\"apple-touch-icon\\\" href=\\\"/img-src/logo192.png\\\"/>\\n        <link rel=\\\"manifest\\\" href=\\\"/img-src/manifest.json\\\"/>\\n        <title>Auth in reactApp</title>\\n    </head>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <body>\\n        <div id=\\\"root\\\">\".concat(content, \"</div>\\n    </body>\\n    </html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar server_2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar IS_DEV = \"development\" !== 'production';\r\nvar PORT = IS_DEV ? process.env.PORT || 4000 : process.env.PORT || 3000;\r\nvar app = (0, express_1.default)();\r\nif (!IS_DEV) {\r\n    app.use((0, compression_1.default)());\r\n    app.use((0, helmet_1.default)({\r\n        contentSecurityPolicy: false,\r\n    }));\r\n}\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.use('/img-src', express_1.default.static('./dist/img-src'));\r\napp.get('*', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url }, (0, App_1.App)()))))];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\napp.listen(PORT, function () {\r\n    if (IS_DEV) {\r\n        console.log(\"Server started on http://localhost:\".concat(PORT));\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Components/AuthForm/AuthForm.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Components/AuthForm/AuthForm.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthForm = void 0;\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar validateEmail_1 = __webpack_require__(/*! ../../../utils/validateEmail */ \"./src/utils/validateEmail.js\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Container_1 = __importDefault(__webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/AuthForm/styles.ts\"));\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar AuthForm = function (_a) {\r\n    var children = _a.children, authUser = _a.authUser;\r\n    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];\r\n    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1];\r\n    var _d = (0, react_1.useState)({ errorMail: false, errorMailText: '' }), _e = _d[0], errorMail = _e.errorMail, errorMailText = _e.errorMailText, setErrorMail = _d[1];\r\n    var _f = (0, react_1.useState)({ errorPass: false, errorPassText: '' }), _g = _f[0], errorPass = _g.errorPass, errorPassText = _g.errorPassText, setErrorPass = _f[1];\r\n    var _h = (0, react_1.useState)(children), childWithProps = _h[0], setChildWithProps = _h[1];\r\n    var _j = (0, react_1.useState)(), user = _j[0], setUser = _j[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setUser((0, generateRandomIndex_1.addStringId)({ email: email, password: password }));\r\n    }, [email, password]);\r\n    function handleClick(_a) {\r\n        var id = _a.id, email = _a.email, password = _a.password;\r\n        if (!email) {\r\n            setErrorMail({ errorMail: true, errorMailText: 'Enter your e-mail' });\r\n            if (!password) {\r\n                setErrorPass({ errorPass: true, errorPassText: 'Enter your password' });\r\n                return;\r\n            }\r\n            return;\r\n        }\r\n        if (!password) {\r\n            setErrorPass({ errorPass: true, errorPassText: 'Enter your password' });\r\n            return;\r\n        }\r\n        if (!(0, validateEmail_1.validateEmail)(email)) {\r\n            setErrorMail({ errorMail: true, errorMailText: 'Incorrect e-mail' });\r\n            return;\r\n        }\r\n        if (password.length < 6) {\r\n            setErrorPass({ errorPass: true, errorPassText: 'The password must contain at least 6 characters' });\r\n            return;\r\n        }\r\n        if (errorPass || errorMail)\r\n            return;\r\n        else {\r\n            var res = authUser({ id: id, email: email, password: password });\r\n            if (!!res) {\r\n                res.type === 'mailError' ?\r\n                    setErrorMail({ errorMail: true, errorMailText: res.message }) :\r\n                    setErrorPass({ errorPass: true, errorPassText: res.message });\r\n            }\r\n            else {\r\n                setEmail('');\r\n                setPassword('');\r\n            }\r\n        }\r\n    }\r\n    var handleChangeLogin = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setEmail(value);\r\n        if (value === '')\r\n            setErrorMail({ errorMail: false, errorMailText: '' });\r\n        else if ((0, validateEmail_1.validateEmail)(value))\r\n            setErrorMail({ errorMail: false, errorMailText: '' });\r\n    };\r\n    var handleChangePassword = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setPassword(value);\r\n        if (value === '')\r\n            setErrorPass({ errorPass: false, errorPassText: '' });\r\n        else if (value.length >= 6)\r\n            setErrorPass({ errorPass: false, errorPassText: '' });\r\n    };\r\n    (0, react_1.useEffect)(function () {\r\n        if (!children)\r\n            return;\r\n        try {\r\n            (function () { return __awaiter(void 0, void 0, void 0, function () {\r\n                return __generator(this, function (_a) {\r\n                    return [2 /*return*/, react_1.default.Children.map(children, function (child) {\r\n                            if (react_1.default.isValidElement(child)) {\r\n                                return react_1.default.cloneElement(child, __assign(__assign({}, ramda_1.props), { handleClick: function (user) { return handleClick(user); }, inputError: errorMail && errorPass, user: user }));\r\n                            }\r\n                            return child;\r\n                        })];\r\n                });\r\n            }); })()\r\n                .then(function (res) {\r\n                setChildWithProps(res);\r\n            });\r\n        }\r\n        catch (e) {\r\n            console.log(e);\r\n        }\r\n    }, [children, errorMail && errorPass, user]);\r\n    return (react_1.default.createElement(Container_1.default\r\n    // @ts-ignore\r\n    , { \r\n        // @ts-ignore\r\n        sx: styles_1.default.container },\r\n        react_1.default.createElement(material_1.Box\r\n        // @ts-ignore\r\n        , { \r\n            // @ts-ignore\r\n            sx: styles_1.default.box, component: 'form', autoComplete: \"off\" },\r\n            react_1.default.createElement(material_1.TextField, { error: errorMail, \r\n                // @ts-ignore\r\n                sx: styles_1.default.input, id: \"outlined-required\", label: \"E-mail\", type: \"email\", autoComplete: \"username\", helperText: errorMailText, value: email, onChange: function (e) { return handleChangeLogin(e); } }),\r\n            react_1.default.createElement(material_1.TextField, { error: errorPass, \r\n                // @ts-ignore\r\n                sx: styles_1.default.input, id: \"outlined-password-input\", label: \"Password\", type: \"password\", autoComplete: \"current-password\", helperText: errorPassText, value: password, onChange: function (e) { return handleChangePassword(e); } }),\r\n            !!childWithProps && childWithProps)));\r\n};\r\nexports.AuthForm = AuthForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AuthForm/AuthForm.tsx?");

/***/ }),

/***/ "./src/shared/Components/AuthForm/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/Components/AuthForm/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AuthForm */ \"./src/shared/Components/AuthForm/AuthForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AuthForm/index.ts?");

/***/ }),

/***/ "./src/shared/Components/AuthForm/styles.ts":
/*!**************************************************!*\
  !*** ./src/shared/Components/AuthForm/styles.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles = {\r\n    container: {\r\n        display: 'grid',\r\n        placeItems: 'center',\r\n        height: '100vh',\r\n    },\r\n    box: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n        backgroundColor: '#0d4379',\r\n        padding: '70px',\r\n        borderRadius: '3%',\r\n        width: '344px',\r\n        height: '460px',\r\n        boxShadow: '0 0 12px rgb(0 0 0 / 50%)',\r\n    },\r\n    input: {\r\n        marginBottom: '2rem',\r\n        '& .MuiInputLabel-root': {\r\n            color: 'rgba(214, 209, 209, 0.75)',\r\n        },\r\n        '& .MuiOutlinedInput-notchedOutline': {\r\n            color: 'rgba(214, 209, 209, 0.75)',\r\n            borderColor: 'rgba(214, 209, 209, 0.75)',\r\n            borderWidth: '1.5px'\r\n        },\r\n        '& .Mui-focused *': {\r\n            color: 'rgba(214, 209, 209, 1)',\r\n        },\r\n        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .Mui-focused .MuiInputBase-root': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .MuiOutlinedInput-input:focus': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        }\r\n    },\r\n};\r\nexports.default = styles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AuthForm/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/RequiredAuth.tsx":
/*!************************************************!*\
  !*** ./src/shared/Components/RequiredAuth.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RequiredAuth = void 0;\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useAppStore_1 = __webpack_require__(/*! ../../hooks/useAppStore */ \"./src/hooks/useAppStore.ts\");\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction RequiredAuth(_a) {\r\n    var children = _a.children;\r\n    var state = (0, useAppStore_1.useAppStore)()[0];\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!state.isAuth) {\r\n            navigate(\"/signin\");\r\n        }\r\n    }, []);\r\n    return children;\r\n}\r\nexports.RequiredAuth = RequiredAuth;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/RequiredAuth.tsx?");

/***/ }),

/***/ "./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignInBtnGroup = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar Send_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Send */ \"@mui/icons-material/Send\"));\r\nvar HowToRegOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/HowToRegOutlined */ \"@mui/icons-material/HowToRegOutlined\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/SignInBtnGroup/styles.ts\"));\r\nfunction SignInBtnGroup(props) {\r\n    var inputError = props.inputError, handleClick = props.handleClick, user = props.user;\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    return (react_1.default.createElement(\"div\", { \r\n        // @ts-ignore\r\n        style: styles_1.default.block },\r\n        react_1.default.createElement(material_1.Button, { sx: styles_1.default.firstButton, disabled: inputError, variant: \"contained\", endIcon: react_1.default.createElement(Send_1.default, null), onClick: function () { return handleClick && handleClick(user); } }, \"Sign in\"),\r\n        react_1.default.createElement(\"span\", { style: styles_1.default.span }, \"New to this site?\"),\r\n        react_1.default.createElement(material_1.Button, { sx: styles_1.default.secondButton, onClick: function () { return navigate(\"/signup\"); }, variant: \"outlined\", endIcon: react_1.default.createElement(HowToRegOutlined_1.default, null) }, \"Create account\")));\r\n}\r\nexports.SignInBtnGroup = SignInBtnGroup;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx?");

/***/ }),

/***/ "./src/shared/Components/SignInBtnGroup/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Components/SignInBtnGroup/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SignInBtnGroup */ \"./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignInBtnGroup/index.ts?");

/***/ }),

/***/ "./src/shared/Components/SignInBtnGroup/styles.ts":
/*!********************************************************!*\
  !*** ./src/shared/Components/SignInBtnGroup/styles.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles = {\r\n    block: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n    },\r\n    firstButton: {\r\n        color: '#0d4379',\r\n        backgroundColor: 'rgba(214, 209, 209, 0.75)',\r\n        '&:hover': {\r\n            backgroundColor: 'rgba(214, 209, 209, 0.75)',\r\n            boxShadow: '0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)',\r\n        }\r\n    },\r\n    secondButton: {\r\n        color: 'rgba(214, 209, 209, 0.85)',\r\n        borderColor: 'rgba(214, 209, 209, 0.85)',\r\n        '&:hover': {\r\n            color: 'rgba(214, 209, 209, 1)',\r\n            borderColor: 'rgba(214, 209, 209, 1)'\r\n        },\r\n        padding: '6px 0',\r\n        width: '100%',\r\n    },\r\n    span: {\r\n        fontSize: '1 rem',\r\n        color: 'rgba(214, 209, 209, 0.75)',\r\n        margin: '15px auto 7px',\r\n    }\r\n};\r\nexports.default = styles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignInBtnGroup/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignUpBtnGroup = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar Send_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Send */ \"@mui/icons-material/Send\"));\r\nvar ArrowForwardOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/ArrowForwardOutlined */ \"@mui/icons-material/ArrowForwardOutlined\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/SignUpBtnGroup/styles.ts\"));\r\nvar SignUpBtnGroup = function (props) {\r\n    var inputError = props.inputError, handleClick = props.handleClick, user = props.user;\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(material_1.Button, { sx: styles_1.default.firstButton, disabled: inputError, variant: \"contained\", onClick: function () { return handleClick && handleClick(user); }, endIcon: react_1.default.createElement(Send_1.default, null) }, \"Create account\"),\r\n        react_1.default.createElement(\"span\", { style: styles_1.default.span }, \"Already have an account?\"),\r\n        react_1.default.createElement(material_1.Button, { sx: styles_1.default.secondButton, onClick: function () { return navigate(\"/signin\"); }, variant: \"outlined\", endIcon: react_1.default.createElement(ArrowForwardOutlined_1.default, null) }, \"Sign in\")));\r\n};\r\nexports.SignUpBtnGroup = SignUpBtnGroup;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx?");

/***/ }),

/***/ "./src/shared/Components/SignUpBtnGroup/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Components/SignUpBtnGroup/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SignUpBtnGroup */ \"./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignUpBtnGroup/index.ts?");

/***/ }),

/***/ "./src/shared/Components/SignUpBtnGroup/styles.ts":
/*!********************************************************!*\
  !*** ./src/shared/Components/SignUpBtnGroup/styles.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles = {\r\n    block: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n    },\r\n    firstButton: {\r\n        color: '#0d4379',\r\n        backgroundColor: 'rgba(214, 209, 209, 0.75)',\r\n        '&:hover': {\r\n            backgroundColor: 'rgba(214, 209, 209, 0.75)',\r\n            boxShadow: '0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)',\r\n        }\r\n    },\r\n    secondButton: {\r\n        color: 'rgba(214, 209, 209, 0.85)',\r\n        borderColor: 'rgba(214, 209, 209, 0.85)',\r\n        '&:hover': {\r\n            color: 'rgba(214, 209, 209, 1)',\r\n            borderColor: 'rgba(214, 209, 209, 1)'\r\n        },\r\n        padding: '6px 0',\r\n        width: '100%',\r\n    },\r\n    span: {\r\n        fontSize: '1 rem',\r\n        color: 'rgba(214, 209, 209, 0.75)',\r\n        margin: '15px auto 7px',\r\n    }\r\n};\r\nexports.default = styles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignUpBtnGroup/styles.ts?");

/***/ }),

/***/ "./src/shared/Pages/HomePage/HomePage.tsx":
/*!************************************************!*\
  !*** ./src/shared/Pages/HomePage/HomePage.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar AppBar_1 = __importDefault(__webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\"));\r\nvar Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\"));\r\nvar Toolbar_1 = __importDefault(__webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\"));\r\nvar LogoutOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/LogoutOutlined */ \"@mui/icons-material/LogoutOutlined\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar Search_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Search */ \"@mui/icons-material/Search\"));\r\nvar useAppStore_1 = __webpack_require__(/*! ../../../hooks/useAppStore */ \"./src/hooks/useAppStore.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../../context/actions */ \"./src/context/actions/index.ts\");\r\nvar Typography_1 = __importDefault(__webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\"));\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar FormControl_1 = __importDefault(__webpack_require__(/*! @mui/material/FormControl */ \"@mui/material/FormControl\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Pages/HomePage/styles.ts\"));\r\nfunction HomePage() {\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var _a = (0, useAppStore_1.useAppStore)(), state = _a[0], dispatch = _a[1];\r\n    var _b = (0, react_1.useState)(''), search = _b[0], setSearch = _b[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (!state.isAuth) {\r\n            navigate(\"/signin\");\r\n        }\r\n    }, []);\r\n    function handleClick() {\r\n        dispatch((0, actions_1.logout)());\r\n        navigate(\"/signin\");\r\n    }\r\n    var handleChangeSearchField = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setSearch(value);\r\n        //filter list\r\n    };\r\n    return (React.createElement(Box_1.default, { sx: styles_1.default.box },\r\n        React.createElement(AppBar_1.default, { position: 'static', sx: styles_1.default.appBar },\r\n            React.createElement(Toolbar_1.default, { sx: styles_1.default.toolbar },\r\n                React.createElement(FormControl_1.default\r\n                // @ts-ignore\r\n                , { \r\n                    // @ts-ignore\r\n                    sx: styles_1.default.formControl, variant: \"outlined\" },\r\n                    React.createElement(material_1.TextField\r\n                    // @ts-ignore\r\n                    , { \r\n                        // @ts-ignore\r\n                        sx: styles_1.default.textField, id: \"search\", label: \"Search\", color: 'info', type: \"text\", value: search, onChange: function (e) { return handleChangeSearchField(e); } }),\r\n                    React.createElement(Search_1.default\r\n                    // @ts-ignore\r\n                    , { \r\n                        // @ts-ignore\r\n                        sx: styles_1.default.searchIcon })),\r\n                React.createElement(material_1.Button, { sx: styles_1.default.button, onClick: handleClick, variant: 'outlined', endIcon: React.createElement(LogoutOutlined_1.default, null) }, \"Logout\"))),\r\n        React.createElement(Typography_1.default, { sx: { marginTop: '40px' }, variant: 'h2', component: 'h2', align: 'center' }, \"lists\")));\r\n}\r\nexports.default = HomePage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/HomePage/HomePage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/HomePage/styles.ts":
/*!*********************************************!*\
  !*** ./src/shared/Pages/HomePage/styles.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar styles = {\r\n    total: {\r\n        marginBottom: '5rem',\r\n        color: colors_1.default.darkGray,\r\n        alignSelf: 'center'\r\n    },\r\n    appBar: {\r\n        backgroundColor: '#0d4379'\r\n    },\r\n    box: {\r\n        display: 'grid',\r\n        placeItems: 'center',\r\n        color: 'rgba(0, 0, 0, 0.6)'\r\n    },\r\n    button: {\r\n        color: 'rgba(214, 209, 209, 0.85)',\r\n        borderColor: 'rgba(214, 209, 209, 0.85)',\r\n        '&:hover': {\r\n            color: 'rgba(214, 209, 209, 1)',\r\n            borderColor: 'rgba(214, 209, 209, 1)'\r\n        }\r\n    },\r\n    formControl: {\r\n        width: '20vw',\r\n        margin: '0',\r\n        position: 'relative'\r\n    },\r\n    searchIcon: {\r\n        color: 'rgba(214, 209, 209, 0.75)',\r\n        position: 'absolute',\r\n        right: '5%',\r\n        top: '50%',\r\n        transform: 'translateY(-50%)'\r\n    },\r\n    textField: {\r\n        '& .MuiInputLabel-root': {\r\n            color: 'rgba(214, 209, 209, 0.75)',\r\n        },\r\n        '& .MuiOutlinedInput-notchedOutline': {\r\n            color: 'rgba(214, 209, 209, 0.75)',\r\n            borderColor: 'rgba(214, 209, 209, 0.75)',\r\n            borderWidth: '1.5px'\r\n        },\r\n        '& .Mui-focused *': {\r\n            color: 'rgba(214, 209, 209, 1)',\r\n        },\r\n        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .Mui-focused .MuiInputBase-root': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {\r\n            borderColor: 'rgba(214, 209, 209, 1)',\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .MuiOutlinedInput-input': {\r\n            paddingRight: '35px'\r\n        }\r\n    },\r\n    toolbar: {\r\n        padding: '1% 10%',\r\n        display: 'flex',\r\n        alignItems: 'center',\r\n        justifyContent: 'space-between'\r\n    }\r\n};\r\nexports.default = styles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/HomePage/styles.ts?");

/***/ }),

/***/ "./src/shared/Pages/NoMatchPage/NoMatchPage.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Pages/NoMatchPage/NoMatchPage.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NoMatchPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Container_1 = __importDefault(__webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Pages/NoMatchPage/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction NoMatchPage() {\r\n    return (react_1.default.createElement(Container_1.default\r\n    // @ts-ignore\r\n    , { \r\n        // @ts-ignore\r\n        sx: styles_1.default.container },\r\n        react_1.default.createElement(material_1.Typography, { variant: 'h2', component: 'h1', align: 'center' },\r\n            \"PAGE NOT FOUND\",\r\n            react_1.default.createElement(material_1.Typography, { variant: 'h6', component: 'p' },\r\n                \"Go to the \",\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: '/' }, \"home page\")))));\r\n}\r\nexports.NoMatchPage = NoMatchPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NoMatchPage/NoMatchPage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/NoMatchPage/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Pages/NoMatchPage/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NoMatchPage */ \"./src/shared/Pages/NoMatchPage/NoMatchPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NoMatchPage/index.ts?");

/***/ }),

/***/ "./src/shared/Pages/NoMatchPage/styles.ts":
/*!************************************************!*\
  !*** ./src/shared/Pages/NoMatchPage/styles.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles = {\r\n    container: {\r\n        color: 'rgba(0, 0, 0, 0.6)',\r\n        display: 'grid',\r\n        placeItems: 'center',\r\n        height: '100vh',\r\n    },\r\n};\r\nexports.default = styles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NoMatchPage/styles.ts?");

/***/ }),

/***/ "./src/shared/Pages/SignInPage/SignInPage.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Pages/SignInPage/SignInPage.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignInPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar AuthForm_1 = __webpack_require__(/*! ../../Components/AuthForm */ \"./src/shared/Components/AuthForm/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../../context/actions */ \"./src/context/actions/index.ts\");\r\nvar useAppStore_1 = __webpack_require__(/*! ../../../hooks/useAppStore */ \"./src/hooks/useAppStore.ts\");\r\nvar SignInBtnGroup_1 = __webpack_require__(/*! ../../Components/SignInBtnGroup */ \"./src/shared/Components/SignInBtnGroup/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction SignInPage() {\r\n    var _a = (0, useAppStore_1.useAppStore)(), _b = _a[0], _c = _b.usersData, users = _c.users, loading = _c.loading, error = _c.error, isAuth = _b.isAuth, dispatch = _a[1];\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (isAuth) {\r\n            navigate(\"/\");\r\n        }\r\n    }, []);\r\n    function auth(user) {\r\n        if (loading || error)\r\n            return;\r\n        var usersArr = Array();\r\n        if (users) {\r\n            usersArr = Array.of.apply(Array, users);\r\n        }\r\n        var filterUsersByEmail = usersArr.filter(function (someUser) { return someUser.email === user.email; });\r\n        var filterUsersByPassword = filterUsersByEmail.filter(function (someUser) { return someUser.password === user.password; });\r\n        if (filterUsersByEmail.length === 0) {\r\n            return { type: 'mailError', message: 'Account with this address is not registered' };\r\n        }\r\n        if (filterUsersByPassword.length === 0) {\r\n            return { type: 'mailPassword', message: 'Wrong password' };\r\n        }\r\n        else {\r\n            dispatch((0, actions_1.login)());\r\n            navigate(\"/\");\r\n        }\r\n    }\r\n    return (react_1.default.createElement(AuthForm_1.AuthForm, { authUser: auth },\r\n        react_1.default.createElement(SignInBtnGroup_1.SignInBtnGroup, null)));\r\n}\r\nexports.SignInPage = SignInPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/SignInPage/SignInPage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/SignInPage/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Pages/SignInPage/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SignInPage */ \"./src/shared/Pages/SignInPage/SignInPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/SignInPage/index.ts?");

/***/ }),

/***/ "./src/shared/Pages/SignUpPage/SignUpPage.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Pages/SignUpPage/SignUpPage.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignUpPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar useAppStore_1 = __webpack_require__(/*! ../../../hooks/useAppStore */ \"./src/hooks/useAppStore.ts\");\r\nvar AuthForm_1 = __webpack_require__(/*! ../../Components/AuthForm */ \"./src/shared/Components/AuthForm/index.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../../context/actions */ \"./src/context/actions/index.ts\");\r\nvar SignUpBtnGroup_1 = __webpack_require__(/*! ../../Components/SignUpBtnGroup */ \"./src/shared/Components/SignUpBtnGroup/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction SignUpPage() {\r\n    var _a = (0, useAppStore_1.useAppStore)(), _b = _a[0], _c = _b.usersData, users = _c.users, loading = _c.loading, error = _c.error, isAuth = _b.isAuth, dispatch = _a[1];\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (isAuth) {\r\n            navigate(\"/\");\r\n        }\r\n    }, []);\r\n    function createUser(user) {\r\n        if (loading || error)\r\n            return;\r\n        try {\r\n            var usersArr = Array();\r\n            if (users) {\r\n                usersArr = Array.of.apply(Array, users);\r\n            }\r\n            var duplicate = usersArr.filter(function (someUser) { return someUser.email === user.email; });\r\n            if (duplicate.length > 0)\r\n                return { type: 'mailError', message: 'An account with this address has already been registered' };\r\n            dispatch((0, actions_1.createNewUser)(user));\r\n            navigate(\"/\");\r\n        }\r\n        catch (e) {\r\n            console.log(e);\r\n        }\r\n    }\r\n    return (react_1.default.createElement(AuthForm_1.AuthForm, { authUser: createUser },\r\n        react_1.default.createElement(SignUpBtnGroup_1.SignUpBtnGroup, null)));\r\n}\r\nexports.SignUpPage = SignUpPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/SignUpPage/SignUpPage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/SignUpPage/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Pages/SignUpPage/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SignUpPage */ \"./src/shared/Pages/SignUpPage/SignUpPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/SignUpPage/index.ts?");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\r\nvar theme = (0, styles_1.createTheme)({\r\n    components: {\r\n        MuiCssBaseline: {\r\n            styleOverrides: {\r\n                body: {\r\n                    backgroundColor: '#e1f0ff',\r\n                }\r\n            }\r\n        }\r\n    }\r\n});\r\nexports.default = theme;\r\n\n\n//# sourceURL=webpack:///./src/styles/theme.ts?");

/***/ }),

/***/ "./src/utils/enums/colors.ts":
/*!***********************************!*\
  !*** ./src/utils/enums/colors.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors = {\r\n    red: '#F9423A',\r\n    lime: '#D0DF00',\r\n    blue: '#00A7B5',\r\n    darkGray: '#3B3A3C',\r\n    mdGray: '#4f4e4e',\r\n    gray: '#898B8D',\r\n    gallery: '#EDEDED'\r\n};\r\nexports.default = colors;\r\n\n\n//# sourceURL=webpack:///./src/utils/enums/colors.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.addStringId = exports.assignId = exports.generateRandomString = void 0;\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = (0, ramda_1.assoc)('id', (0, exports.generateRandomString)());\r\nvar addStringId = function (_a) {\r\n    var obj = __rest(_a, []);\r\n    return (0, ramda_1.merge)(__assign({}, obj), { id: \"\".concat(Math.random().toString(36).substring(2, 15)) });\r\n};\r\nexports.addStringId = addStringId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "./src/utils/validateEmail.js":
/*!************************************!*\
  !*** ./src/utils/validateEmail.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.validateEmail = void 0;\r\nfunction validateEmail(email) {\r\n    return !!email.match(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/);\r\n}\r\nexports.validateEmail = validateEmail;\r\n\n\n//# sourceURL=webpack:///./src/utils/validateEmail.js?");

/***/ }),

/***/ "@mui/icons-material/ArrowForwardOutlined":
/*!***********************************************************!*\
  !*** external "@mui/icons-material/ArrowForwardOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/ArrowForwardOutlined\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/ArrowForwardOutlined%22?");

/***/ }),

/***/ "@mui/icons-material/HowToRegOutlined":
/*!*******************************************************!*\
  !*** external "@mui/icons-material/HowToRegOutlined" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/HowToRegOutlined\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/HowToRegOutlined%22?");

/***/ }),

/***/ "@mui/icons-material/LogoutOutlined":
/*!*****************************************************!*\
  !*** external "@mui/icons-material/LogoutOutlined" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/LogoutOutlined\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/LogoutOutlined%22?");

/***/ }),

/***/ "@mui/icons-material/Search":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Search" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/Search\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/Search%22?");

/***/ }),

/***/ "@mui/icons-material/Send":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Send" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/Send\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/Send%22?");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material\");\n\n//# sourceURL=webpack:///external_%22@mui/material%22?");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/AppBar\");\n\n//# sourceURL=webpack:///external_%22@mui/material/AppBar%22?");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Box\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Box%22?");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Container\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Container%22?");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/CssBaseline\");\n\n//# sourceURL=webpack:///external_%22@mui/material/CssBaseline%22?");

/***/ }),

/***/ "@mui/material/FormControl":
/*!********************************************!*\
  !*** external "@mui/material/FormControl" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/FormControl\");\n\n//# sourceURL=webpack:///external_%22@mui/material/FormControl%22?");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Toolbar%22?");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Typography\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Typography%22?");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/styles\");\n\n//# sourceURL=webpack:///external_%22@mui/material/styles%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ramda\");\n\n//# sourceURL=webpack:///external_%22ramda%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/server%22?");

/***/ })

/******/ });