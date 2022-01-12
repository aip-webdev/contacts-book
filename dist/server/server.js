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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar styles_1 = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ./styles/theme */ \"./src/styles/theme.ts\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar RequiredAuth_1 = __webpack_require__(/*! ./shared/Components/RequiredAuth */ \"./src/shared/Components/RequiredAuth.tsx\");\r\nvar NoMatchPage_1 = __webpack_require__(/*! ./shared/Pages/NoMatchPage */ \"./src/shared/Pages/NoMatchPage/index.ts\");\r\nvar ContactsPage_1 = __webpack_require__(/*! ./shared/Pages/ContactsPage */ \"./src/shared/Pages/ContactsPage/index.ts\");\r\nvar SignInPage_1 = __webpack_require__(/*! ./shared/Pages/SignInPage */ \"./src/shared/Pages/SignInPage/index.ts\");\r\nvar SignUpPage_1 = __webpack_require__(/*! ./shared/Pages/SignUpPage */ \"./src/shared/Pages/SignUpPage/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Components/Header */ \"./src/shared/Components/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Components/Content */ \"./src/shared/Components/Content/index.ts\");\r\nvar Loading_1 = __webpack_require__(/*! ./shared/Components/Loading */ \"./src/shared/Components/Loading/index.ts\");\r\nvar Layout = function () {\r\n    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setLoading(false);\r\n    });\r\n    if (loading) {\r\n        return (react_1.default.createElement(Loading_1.Loading, null));\r\n    }\r\n    else {\r\n        return (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null,\r\n                react_1.default.createElement(react_router_dom_1.Outlet, null))));\r\n    }\r\n};\r\nvar AppRouter = function () {\r\n    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.default },\r\n        react_1.default.createElement(material_1.CssBaseline, null),\r\n        react_1.default.createElement(react_router_dom_1.Routes, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(Layout, null) },\r\n                react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(react_router_dom_1.Navigate, { to: \"/contacts\" }) }),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/contacts', element: react_1.default.createElement(RequiredAuth_1.RequiredAuth, null,\r\n                        react_1.default.createElement(ContactsPage_1.ContactsPage, null)) })),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/signin', element: react_1.default.createElement(SignInPage_1.SignInPage, null) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', element: react_1.default.createElement(SignUpPage_1.SignUpPage, null) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"*\", element: react_1.default.createElement(NoMatchPage_1.NoMatchPage, null) }))));\r\n};\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppRouter, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useEventListenerAction.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useEventListenerAction.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useEventListenerAction = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useEventListenerAction = function (eventType, eventAction, hookDeps) {\r\n    (0, react_1.useEffect)(function () {\r\n        window.addEventListener(eventType, eventAction);\r\n        return function () { return window.removeEventListener(eventType, eventAction); };\r\n    }, [eventAction, eventType, hookDeps]);\r\n};\r\nexports.useEventListenerAction = useEventListenerAction;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useEventListenerAction.ts?");

/***/ }),

/***/ "./src/hooks/useMediaSize.ts":
/*!***********************************!*\
  !*** ./src/hooks/useMediaSize.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useMediaSize = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useWindowSize_1 = __webpack_require__(/*! ./useWindowSize */ \"./src/hooks/useWindowSize.ts\");\r\nvar useMediaSize = function () {\r\n    var width = (0, useWindowSize_1.useWindowSize)().width;\r\n    var _a = (0, react_1.useState)({\r\n        isSm: true,\r\n        isMd: true,\r\n        isLg: true,\r\n        isXl: true,\r\n    }), mediaPoint = _a[0], setMediaPoint = _a[1];\r\n    var isSm = mediaPoint.isSm, isMd = mediaPoint.isMd, isLg = mediaPoint.isLg, isXl = mediaPoint.isXl;\r\n    (0, react_1.useEffect)(function () {\r\n        if (width < 640) {\r\n            setMediaPoint({\r\n                isSm: true,\r\n                isMd: false,\r\n                isLg: false,\r\n                isXl: false,\r\n            });\r\n        }\r\n        else if (width < 1040) {\r\n            setMediaPoint({\r\n                isSm: false,\r\n                isMd: true,\r\n                isLg: false,\r\n                isXl: false,\r\n            });\r\n        }\r\n        else if (width < 1440) {\r\n            setMediaPoint({\r\n                isSm: false,\r\n                isMd: false,\r\n                isLg: true,\r\n                isXl: false,\r\n            });\r\n        }\r\n        else {\r\n            setMediaPoint({\r\n                isSm: false,\r\n                isMd: false,\r\n                isLg: false,\r\n                isXl: true,\r\n            });\r\n        }\r\n    }, [width]);\r\n    return mediaPoint;\r\n};\r\nexports.useMediaSize = useMediaSize;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useMediaSize.ts?");

/***/ }),

/***/ "./src/hooks/useMouseEventAction.ts":
/*!******************************************!*\
  !*** ./src/hooks/useMouseEventAction.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useMouseEventAction = void 0;\r\nvar useEventListenerAction_1 = __webpack_require__(/*! ./useEventListenerAction */ \"./src/hooks/useEventListenerAction.ts\");\r\nvar useMouseEventAction = function (_a) {\r\n    var action = _a.action, ref = _a.ref;\r\n    (0, useEventListenerAction_1.useEventListenerAction)('click', function (e) {\r\n        var _a;\r\n        if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            action();\r\n        }\r\n    }, []);\r\n};\r\nexports.useMouseEventAction = useMouseEventAction;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useMouseEventAction.ts?");

/***/ }),

/***/ "./src/hooks/useWindowSize.ts":
/*!************************************!*\
  !*** ./src/hooks/useWindowSize.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useWindowSize = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useEventListenerAction_1 = __webpack_require__(/*! ./useEventListenerAction */ \"./src/hooks/useEventListenerAction.ts\");\r\nvar useWindowSize = function () {\r\n    var _a = (0, react_1.useState)({ height: 0, width: 0 }), size = _a[0], setSize = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setSize({ height: window.innerHeight, width: window.innerWidth });\r\n    }, []);\r\n    (0, useEventListenerAction_1.useEventListenerAction)('resize', function () {\r\n        return setSize({ height: window.innerHeight, width: window.innerWidth });\r\n    });\r\n    return size;\r\n};\r\nexports.useWindowSize = useWindowSize;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useWindowSize.ts?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charSet=\\\"utf-8\\\"/>\\n        <link rel=\\\"icon\\\" href=\\\"/img-src/favicon.ico\\\"/>\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"/>\\n        <meta name=\\\"theme-color\\\" content=\\\"#000000\\\"/>\\n        <link rel=\\\"apple-touch-icon\\\" href=\\\"/img-src/logo192.png\\\"/>\\n        <link rel=\\\"manifest\\\" href=\\\"/img-src/manifest.json\\\"/>\\n        <title>Contacts</title>\\n    </head>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <body>\\n        <div id=\\\"root\\\">\".concat(content, \"</div>\\n        <div id=\\\"modal\\\"></div>\\n    </body>\\n    </html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a, _b;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar server_2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar IS_DEV = \"development\" !== 'production';\r\nvar PORT = IS_DEV ? (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000 : (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 3005;\r\nvar reqHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url }, (0, App_1.App)()))));\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nvar app = (0, express_1.default)();\r\nif (!IS_DEV) {\r\n    app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));\r\n    app.use((0, compression_1.default)());\r\n}\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.use('/img-src', express_1.default.static('./dist/img-src'));\r\napp.get('*', reqHandler);\r\napp.listen(PORT, function () {\r\n    IS_DEV && console.log(\"Server started on http://localhost:\".concat(PORT, \" \"));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Components/AddingButton/AddingButton.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Components/AddingButton/AddingButton.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AddingButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_material_1 = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/AddingButton/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nexports.AddingButton = react_1.default.memo(function (_a) {\r\n    var onClickAddingBtn = _a.onClickAddingBtn, classname = _a.classname;\r\n    var classes = (0, styles_1.default)();\r\n    return (react_1.default.createElement(material_1.Button, { type: 'button', className: classname !== null && classname !== void 0 ? classname : classes.addingBtn, onClick: onClickAddingBtn },\r\n        react_1.default.createElement(icons_material_1.Check, null)));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AddingButton/AddingButton.tsx?");

/***/ }),

/***/ "./src/shared/Components/AddingButton/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Components/AddingButton/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AddingButton */ \"./src/shared/Components/AddingButton/AddingButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AddingButton/index.ts?");

/***/ }),

/***/ "./src/shared/Components/AddingButton/styles.ts":
/*!******************************************************!*\
  !*** ./src/shared/Components/AddingButton/styles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    addingBtn: {\r\n        backgroundColor: 'transparent',\r\n        border: 'none',\r\n        color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        marginLeft: '20px',\r\n        width: '40px',\r\n        '&:hover': {\r\n            backgroundColor: colors_1.default.black03,\r\n            borderRadius: '50% !important',\r\n        }\r\n    },\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AddingButton/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/AuthForm/AuthForm.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Components/AuthForm/AuthForm.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Container_1 = __importDefault(__webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/AuthForm/styles.ts\"));\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar validateEmail_1 = __webpack_require__(/*! ../../../utils/validateEmail */ \"./src/utils/validateEmail.js\");\r\nexports.AuthForm = react_1.default.memo(function (_a) {\r\n    var children = _a.children, authUser = _a.authUser;\r\n    var classes = (0, styles_1.default)();\r\n    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];\r\n    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1];\r\n    var _d = (0, react_1.useState)({ errorMail: false, errorMailText: '' }), _e = _d[0], errorMail = _e.errorMail, errorMailText = _e.errorMailText, setErrorMail = _d[1];\r\n    var _f = (0, react_1.useState)({ errorPass: false, errorPassText: '' }), _g = _f[0], errorPass = _g.errorPass, errorPassText = _g.errorPassText, setErrorPass = _f[1];\r\n    var _h = (0, react_1.useState)(children), childWithProps = _h[0], setChildWithProps = _h[1];\r\n    var _j = (0, react_1.useState)(), user = _j[0], setUser = _j[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setUser((0, generateRandomIndex_1.addStringId)({ email: email, password: password }));\r\n    }, [email, password]);\r\n    function handleClick(_a) {\r\n        var id = _a.id, email = _a.email, password = _a.password;\r\n        if (!email) {\r\n            setErrorMail({ errorMail: true, errorMailText: 'Enter your e-mail' });\r\n            if (!password) {\r\n                setErrorPass({ errorPass: true, errorPassText: 'Enter your password' });\r\n                return;\r\n            }\r\n            return;\r\n        }\r\n        if (!password) {\r\n            setErrorPass({ errorPass: true, errorPassText: 'Enter your password' });\r\n            return;\r\n        }\r\n        if (!(0, validateEmail_1.validateEmail)(email)) {\r\n            setErrorMail({ errorMail: true, errorMailText: 'Incorrect e-mail' });\r\n            return;\r\n        }\r\n        if (password.length < 6) {\r\n            setErrorPass({ errorPass: true, errorPassText: 'The password must contain at least 6 characters' });\r\n            return;\r\n        }\r\n        if (errorPass || errorMail)\r\n            return;\r\n        else {\r\n            var res = authUser({ id: id, email: email, password: password });\r\n            if (!!res) {\r\n                res.type === 'mailError' ?\r\n                    setErrorMail({ errorMail: true, errorMailText: res.message }) :\r\n                    setErrorPass({ errorPass: true, errorPassText: res.message });\r\n            }\r\n            else {\r\n                setEmail('');\r\n                setPassword('');\r\n            }\r\n        }\r\n    }\r\n    var handleChangeLogin = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setEmail(value);\r\n        if (value === '')\r\n            setErrorMail({ errorMail: false, errorMailText: '' });\r\n        else if ((0, validateEmail_1.validateEmail)(value))\r\n            setErrorMail({ errorMail: false, errorMailText: '' });\r\n    };\r\n    var handleChangePassword = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setPassword(value);\r\n        if (value === '')\r\n            setErrorPass({ errorPass: false, errorPassText: '' });\r\n        else if (value.length >= 6)\r\n            setErrorPass({ errorPass: false, errorPassText: '' });\r\n    };\r\n    (0, react_1.useEffect)(function () {\r\n        if (!children)\r\n            return;\r\n        try {\r\n            (function () { return __awaiter(void 0, void 0, void 0, function () {\r\n                return __generator(this, function (_a) {\r\n                    return [2 /*return*/, react_1.default.Children.map(children, function (child) {\r\n                            if (react_1.default.isValidElement(child)) {\r\n                                return react_1.default.cloneElement(child, __assign(__assign({}, ramda_1.props), { handleClick: function (user) { return handleClick(user); }, inputError: errorMail && errorPass, user: user }));\r\n                            }\r\n                            return child;\r\n                        })];\r\n                });\r\n            }); })()\r\n                .then(function (res) {\r\n                setChildWithProps(res);\r\n            });\r\n        }\r\n        catch (e) {\r\n            console.log(e);\r\n        }\r\n    }, [children, errorMail && errorPass, user]);\r\n    return (react_1.default.createElement(Container_1.default, { className: classes.container },\r\n        react_1.default.createElement(material_1.Box, { className: classes.box, component: 'form', autoComplete: \"off\" },\r\n            react_1.default.createElement(material_1.TextField, { error: errorMail, className: classes.input, id: \"outlined-required\", label: \"E-mail\", type: \"email\", autoComplete: \"email\", variant: 'outlined', helperText: errorMailText, value: email, onChange: function (e) { return handleChangeLogin(e); } }),\r\n            react_1.default.createElement(material_1.TextField, { error: errorPass, className: classes.input, id: \"outlined-password-input\", label: \"Password\", type: \"password\", autoComplete: \"current-password\", helperText: errorPassText, value: password, onChange: function (e) { return handleChangePassword(e); } }),\r\n            !!childWithProps && childWithProps)));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AuthForm/AuthForm.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    container: {\r\n        display: 'grid !important',\r\n        placeItems: 'center',\r\n        height: '100vh',\r\n        padding: '0 !important'\r\n    },\r\n    box: {\r\n        width: '320px',\r\n        height: '460px',\r\n        display: 'flex',\r\n        padding: '62px',\r\n        boxShadow: '0 0 12px rgb(0 0 0 / 50%)',\r\n        fontWeight: '500',\r\n        borderRadius: '3%',\r\n        flexDirection: 'column',\r\n        backgroundColor: '#124559',\r\n        minWidth: '320px'\r\n    },\r\n    input: {\r\n        marginBottom: '2rem !important',\r\n        '& .MuiInputLabel-root, .MuiOutlinedInput-root': {\r\n            color: colors_1.default.pistachioLT,\r\n            '&.Mui-focused': {\r\n                color: colors_1.default.pistachioL,\r\n                borderColor: colors_1.default.pistachioLT,\r\n            }\r\n        },\r\n        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {\r\n            color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            borderWidth: '1.5px !important',\r\n            '&:-webkit-autofill': {\r\n                '-webkit-box-shadow': \"0 0 0 100px \".concat(colors_1.default.pine, \" inset\"),\r\n                '-webkit-text-fill-color': \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            }\r\n        },\r\n        '& input:webkit-autofill': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\")\r\n        },\r\n        '& .Mui-focused .MuiOutlinedInput-notchedOutline, fieldset, .MuiOutlinedInput-input': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderWidth: '1.7px'\r\n        },\r\n    },\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/AuthForm/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/ButtonOutlined/ButtonOutlined.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/ButtonOutlined/ButtonOutlined.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ButtonOutlined = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/ButtonOutlined/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nexports.ButtonOutlined = react_1.default.memo(function (props) {\r\n    var isSm = (0, useMediaSize_1.useMediaSize)().isSm;\r\n    var classes = (0, styles_1.default)();\r\n    var btnIcon = props.btnIcon, onClick = props.onClick, text = props.text, _a = props.btnClassName, btnClassName = _a === void 0 ? classes.button : _a;\r\n    return (react_1.default.createElement(material_1.Button, { className: btnClassName, onClick: onClick, variant: 'outlined', endIcon: btnIcon }, !isSm && text));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ButtonOutlined/ButtonOutlined.tsx?");

/***/ }),

/***/ "./src/shared/Components/ButtonOutlined/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Components/ButtonOutlined/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ButtonOutlined */ \"./src/shared/Components/ButtonOutlined/ButtonOutlined.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ButtonOutlined/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ButtonOutlined/styles.ts":
/*!********************************************************!*\
  !*** ./src/shared/Components/ButtonOutlined/styles.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    button: (_a = {\r\n            padding: '10px 18px 10px 10px !important',\r\n            color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            border: \"1.5px \".concat(colors_1.default.pistachioLT, \" solid !important\"),\r\n            '&:hover': {\r\n                color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n                border: \"1.7px \".concat(colors_1.default.pistachioL, \" solid !important\"),\r\n            }\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            padding: '10px 20px !important',\r\n            minWidth: '108px !important',\r\n        },\r\n        _a)\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ButtonOutlined/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/Contact/Contact.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Components/Contact/Contact.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Contact = void 0;\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar LetterAvatar_1 = __webpack_require__(/*! ../LetterAvatar */ \"./src/shared/Components/LetterAvatar/index.ts\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/Contact/styles.ts\"));\r\nvar RemoveButton_1 = __webpack_require__(/*! ../RemoveButton */ \"./src/shared/Components/RemoveButton/index.ts\");\r\nexports.Contact = react_1.default.memo(function (_a) {\r\n    var contact = _a.contact, onClickRemoveBtn = _a.onClickRemoveBtn;\r\n    var id = contact.id, email = contact.email, name = contact.name, lastName = contact.lastName, tel = contact.tel, group = contact.group;\r\n    var classes = (0, styles_1.default)();\r\n    var handleClickBtn = function () {\r\n        onClickRemoveBtn(contact);\r\n    };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(material_1.Grid, { spacing: 2, container: true, direction: \"row\", justifyContent: \"space-between\", alignItems: \"center\", sx: { margin: '0 -1em 1em !important', } },\r\n            react_1.default.createElement(material_1.Grid, { item: true, xs: 2, md: 1 },\r\n                react_1.default.createElement(LetterAvatar_1.LetterAvatar, { firstName: name, lastname: lastName && lastName })),\r\n            react_1.default.createElement(material_1.Grid, { item: true, xs: true },\r\n                react_1.default.createElement(material_1.Typography, { className: classes.title }, name)),\r\n            lastName && react_1.default.createElement(material_1.Grid, { item: true, xs: true },\r\n                react_1.default.createElement(material_1.Typography, { className: classes.title }, lastName)),\r\n            react_1.default.createElement(material_1.Grid, { item: true, xs: true },\r\n                react_1.default.createElement(material_1.Typography, { className: classes.title },\r\n                    react_1.default.createElement(\"a\", { href: \"mailto:\".concat(email) }, email))),\r\n            tel && react_1.default.createElement(material_1.Grid, { item: true, xs: true },\r\n                react_1.default.createElement(material_1.Typography, { className: classes.title },\r\n                    react_1.default.createElement(\"a\", { href: \"tel:\".concat(tel) }, tel))),\r\n            react_1.default.createElement(material_1.Grid, { item: true, xs: 2, md: 1 },\r\n                react_1.default.createElement(RemoveButton_1.RemoveButton, { onClickRemoveBtn: handleClickBtn }))),\r\n        react_1.default.createElement(material_1.Divider, null)));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Contact/Contact.tsx?");

/***/ }),

/***/ "./src/shared/Components/Contact/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Components/Contact/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Contact */ \"./src/shared/Components/Contact/Contact.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Contact/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Contact/styles.ts":
/*!*************************************************!*\
  !*** ./src/shared/Components/Contact/styles.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    title: (_a = {\r\n            color: colors_1.default.pine08,\r\n            fontSize: '1rem !important',\r\n            fontWeight: '600 !important',\r\n            letterSpacing: '0.015em  !important',\r\n            margin: '0 0 1px 0 !important',\r\n            alignSelf: 'center'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            fontSize: '1.1rem !important',\r\n            fontWeight: '500  !important',\r\n            letterSpacing: '0.015em  !important',\r\n        },\r\n        _a),\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Contact/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/AddingContact/AddingContact.tsx":
/*!****************************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/AddingContact/AddingContact.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AddingContact = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/ContactsTabs/AddingContact/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar RemoveButton_1 = __webpack_require__(/*! ../../RemoveButton */ \"./src/shared/Components/RemoveButton/index.ts\");\r\nvar AddingButton_1 = __webpack_require__(/*! ../../AddingButton */ \"./src/shared/Components/AddingButton/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar TransparentSelect_1 = __webpack_require__(/*! ../../TransparentSelect */ \"./src/shared/Components/TransparentSelect/index.ts\");\r\nexports.AddingContact = react_1.default.memo(function (_a) {\r\n    var groupNames = _a.groupNames, onClickAddingBtn = _a.onClickAddingBtn;\r\n    var _b = (0, react_1.useState)('all'), groupName = _b[0], setGroupName = _b[1];\r\n    var _c = (0, react_1.useState)({ name: '', lastName: '', email: '', tel: '' }), contactFields = _c[0], setContactFields = _c[1];\r\n    var _d = (0, react_1.useState)(false), isVisibleContactInputs = _d[0], setIsVisibleContactInputs = _d[1];\r\n    var classes = (0, styles_1.default)();\r\n    var handleInputChange = function (e, key) {\r\n        var _a;\r\n        var _b;\r\n        // @ts-ignore\r\n        var value = (_b = e.target) === null || _b === void 0 ? void 0 : _b.value;\r\n        setContactFields(__assign(__assign({}, contactFields), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n    var handleClickAddingButton = function () {\r\n        onClickAddingBtn((0, generateRandomIndex_1.addStringId)(__assign(__assign({}, contactFields), { group: groupName })));\r\n        setIsVisibleContactInputs(false);\r\n        setContactFields({ name: '', lastName: '', email: '', tel: '' });\r\n        setGroupName('all');\r\n    };\r\n    return (react_1.default.createElement(material_1.Stack, { className: classes.stack },\r\n        !isVisibleContactInputs &&\r\n            react_1.default.createElement(material_1.Button, { className: classes.openInputFieldsButton, onClick: function () { return setIsVisibleContactInputs(true); } }, \"+\"),\r\n        isVisibleContactInputs &&\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(TransparentSelect_1.TransparentSelect, { labelName: 'Group name', list: groupNames, onChangeSelect: setGroupName }),\r\n                Object.keys(contactFields).map(function (key, index) {\r\n                    return (react_1.default.createElement(material_1.TextField, { key: index + key, \"aria-pressed\": true, className: classes.tabInput, type: 'text', placeholder: \"Add \".concat(key), value: Object.values(contactFields)[index], onBlur: function () {\r\n                            var _a;\r\n                            return setContactFields(__assign(__assign({}, contactFields), (_a = {}, _a[key] = \"\".concat(Object.values(contactFields)[index].trim()), _a)));\r\n                        }, onClick: function () {\r\n                            var _a;\r\n                            return setContactFields(__assign(__assign({}, contactFields), (_a = {}, _a[key] = \" \".concat(Object.values(contactFields)[index].trim()), _a)));\r\n                        }, onChange: function (e) { return handleInputChange(e, key); } }));\r\n                }),\r\n                react_1.default.createElement(AddingButton_1.AddingButton, { classname: classes.addingBtn, onClickAddingBtn: handleClickAddingButton }),\r\n                react_1.default.createElement(RemoveButton_1.RemoveButton, { classname: classes.removeBtn, onClickRemoveBtn: function () { return setIsVisibleContactInputs(false); } }))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/AddingContact/AddingContact.tsx?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/AddingContact/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/AddingContact/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AddingContact */ \"./src/shared/Components/ContactsTabs/AddingContact/AddingContact.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/AddingContact/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/AddingContact/styles.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/AddingContact/styles.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a, _b, _c, _d;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    addingBtn: (_a = {\r\n            backgroundColor: 'transparent',\r\n            border: 'none',\r\n            color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n            width: '50px',\r\n            // @ts-ignore\r\n            position: 'absolute !important',\r\n            bottom: '0 !important',\r\n            right: '30% !important'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            marginLeft: '10px',\r\n            position: 'relative !important',\r\n            bottom: 'initial !important',\r\n            right: 'initial !important',\r\n            '&:hover': {\r\n                backgroundColor: colors_1.default.black03,\r\n                borderRadius: '50% !important',\r\n            }\r\n        },\r\n        _a),\r\n    openInputFieldsButton: {\r\n        color: \"\".concat(colors_1.default.pine08, \" !important\"),\r\n        minWidth: '40px !important',\r\n        boxShadow: '2px 1px 2px 1px rgba(18, 69, 89, 0.9)',\r\n        borderRadius: '50% !important',\r\n        height: '40px',\r\n        fontWeight: '700 !important',\r\n        padding: '0 !important',\r\n        textAlign: 'center',\r\n        lineHeight: '40px !important',\r\n        margin: '0 !important',\r\n        transition: 'all 0.25s linear !important',\r\n        '&:hover': {\r\n            boxShadow: '2px 1px 2px 1px rgba(18, 69, 89, 0.9) inset',\r\n        },\r\n    },\r\n    removeBtn: (_b = {\r\n            // @ts-ignore\r\n            position: 'absolute !important',\r\n            bottom: '4% !important',\r\n            left: '24% !important'\r\n        },\r\n        _b[theme_1.default.breakpoints.up('md')] = {\r\n            position: 'relative !important',\r\n            bottom: 'initial !important',\r\n            left: 'initial !important',\r\n        },\r\n        _b.lineHeight = '40px',\r\n        _b.border = 'none !important',\r\n        _b.margin = '0 !important',\r\n        _b.padding = '0 !important',\r\n        _b.color = \"\".concat(colors_1.default.pine, \" !important\"),\r\n        _b.backgroundColor = \"transparent !important\",\r\n        _b.textAlign = \"center\",\r\n        _b['&:hover'] = {\r\n            color: \"\".concat(colors_1.default.red, \" !important\"),\r\n        },\r\n        _b),\r\n    stack: (_c = {\r\n            display: 'flex !important',\r\n            position: 'relative',\r\n            margin: '0 0 1em 0',\r\n            flexFlow: 'column wrap !important',\r\n            alignContent: 'flex-start',\r\n            justifyContent: 'flex-start',\r\n            alignItems: 'flex-start'\r\n        },\r\n        _c[theme_1.default.breakpoints.up('md')] = {\r\n            margin: '0 1em 1em 0',\r\n            justifyContent: 'space-between !important',\r\n            flexFlow: 'row nowrap !important',\r\n            alignItems: 'baseline !important',\r\n            alignSelf: 'center',\r\n        },\r\n        _c),\r\n    tabInput: {\r\n        backgroundImage: 'none !important',\r\n        backgroundColor: 'transparent!important',\r\n        color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        opacity: '1',\r\n        '& .MuiOutlinesInput-root': {\r\n            opacity: '1',\r\n        },\r\n        '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {\r\n            color: colors_1.default.pine,\r\n            border: 'none',\r\n            display: 'inline-flex',\r\n            justifyContent: 'center',\r\n            alignItems: 'center',\r\n            fontWeight: '700',\r\n            fontSize: '1rem',\r\n            height: '1rem',\r\n            lineHeight: '1.5',\r\n            padding: '0',\r\n        },\r\n        '& input[placeholder]': (_d = {\r\n                color: colors_1.default.pine,\r\n                margin: '0 0 0.5em 0'\r\n            },\r\n            _d[theme_1.default.breakpoints.up('md')] = {\r\n                textAlign: 'center',\r\n                display: 'inline-flex',\r\n                justifyContent: 'center',\r\n                alignItems: 'center',\r\n                fontWeight: '700',\r\n                fontSize: '1rem',\r\n                lineHeight: '1.5',\r\n                margin: '0',\r\n            },\r\n            _d)\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/AddingContact/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/AddingTab/AddingTab.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/AddingTab/AddingTab.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AddingTab = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/ContactsTabs/AddingTab/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar useMouseEventAction_1 = __webpack_require__(/*! ../../../../hooks/useMouseEventAction */ \"./src/hooks/useMouseEventAction.ts\");\r\nvar ContactsTabs_1 = __webpack_require__(/*! ../ContactsTabs */ \"./src/shared/Components/ContactsTabs/ContactsTabs.tsx\");\r\nvar AddingButton_1 = __webpack_require__(/*! ../../AddingButton */ \"./src/shared/Components/AddingButton/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nexports.AddingTab = react_1.default.memo(function (props) {\r\n    var ref = (0, react_1.useRef)(null);\r\n    var classes = (0, styles_1.default)();\r\n    var contact = props.contact, onClickAddingBtn = props.onClickAddingBtn;\r\n    var _a = react_1.default.useState(''), newGroupVal = _a[0], setNewGroupVal = _a[1];\r\n    var _b = props.contact, id = _b.id, contactsList = _b.contactsList, contactsGroups = _b.contactsGroups;\r\n    var _c = (0, useMediaSize_1.useMediaSize)(), isSm = _c.isSm, isMd = _c.isMd;\r\n    (0, useMouseEventAction_1.useMouseEventAction)({ action: function () { return setNewGroupVal(''); }, ref: ref });\r\n    var handleTabInputChange = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setNewGroupVal(value);\r\n    };\r\n    var handleClickAddingBtn = function () {\r\n        onClickAddingBtn(newGroupVal.trim().toLowerCase());\r\n        setNewGroupVal('');\r\n    };\r\n    var handleKeyPressAddingBtn = function (e) {\r\n        if (e.key === 'Enter') {\r\n            onClickAddingBtn(newGroupVal.trim().toLowerCase());\r\n            setNewGroupVal('');\r\n            // @ts-ignore\r\n            ref.current !== null && ref.current.focus();\r\n        }\r\n    };\r\n    return (react_1.default.createElement(material_1.Tab, __assign({ ref: ref, className: classes.addingTab, onClick: function () { return setNewGroupVal(\" \".concat(newGroupVal.trim())); }, label: react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(material_1.TextField, { \"aria-pressed\": true, className: classes.tabInput, type: 'text', placeholder: 'Add group', value: newGroupVal, onKeyPress: function (e) { return handleKeyPressAddingBtn(e); }, onChange: function (e) { return handleTabInputChange(e); } }),\r\n            newGroupVal && react_1.default.createElement(AddingButton_1.AddingButton, { onClickAddingBtn: handleClickAddingBtn })) }, (0, ContactsTabs_1.a11yProps)(isSm, contactsGroups.length))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/AddingTab/AddingTab.tsx?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/AddingTab/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/AddingTab/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AddingTab */ \"./src/shared/Components/ContactsTabs/AddingTab/AddingTab.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/AddingTab/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/AddingTab/styles.ts":
/*!****************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/AddingTab/styles.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a, _b;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    addingTab: (_a = {},\r\n        _a[theme_1.default.breakpoints.down('md')] = {\r\n            maxWidth: '170px !important'\r\n        },\r\n        _a.padding = '0 29px !important',\r\n        _a.color = \"\".concat(colors_1.default.pine, \" !important\"),\r\n        _a.opacity = '1 !important',\r\n        _a),\r\n    tabInput: (_b = {\r\n            width: 'auto',\r\n            minWidth: '130px !important',\r\n            maxWidth: '200px !important'\r\n        },\r\n        _b[theme_1.default.breakpoints.up('md')] = {\r\n            minWidth: '100%',\r\n            maxWidth: '100%',\r\n            opacity: '1',\r\n        },\r\n        _b['& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input'] = {\r\n            color: colors_1.default.pine,\r\n            border: 'none',\r\n            display: 'inline-flex',\r\n            justifyContent: 'center',\r\n            alignItems: 'center',\r\n            fontWeight: '700',\r\n            fontSize: '1rem',\r\n            height: '1rem',\r\n            lineHeight: '1.5',\r\n            padding: '0',\r\n        },\r\n        _b['& input:-internal-autofill-selected'] = {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            backgroundColor: \"transparent !important\",\r\n        },\r\n        _b['& input[placeholder]'] = {\r\n            color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n            backgroundColor: \"transparent !important\",\r\n            display: 'inline-flex',\r\n            justifyContent: 'center',\r\n            alignItems: 'center',\r\n            fontWeight: '700',\r\n            fontSize: '1rem',\r\n            lineHeight: '1.5',\r\n            textAlign: 'center',\r\n        },\r\n        _b)\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/AddingTab/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/ContactsTabs.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/ContactsTabs.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ContactsTabs = exports.a11yProps = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/ContactsTabs/styles.ts\"));\r\nvar TabPanel_1 = __webpack_require__(/*! ./TabPanel */ \"./src/shared/Components/ContactsTabs/TabPanel/index.ts\");\r\nvar Contact_1 = __webpack_require__(/*! ../Contact */ \"./src/shared/Components/Contact/index.ts\");\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar AddingTab_1 = __webpack_require__(/*! ./AddingTab */ \"./src/shared/Components/ContactsTabs/AddingTab/index.ts\");\r\nvar Loading_1 = __webpack_require__(/*! ../Loading */ \"./src/shared/Components/Loading/index.ts\");\r\nvar AddingContact_1 = __webpack_require__(/*! ./AddingContact */ \"./src/shared/Components/ContactsTabs/AddingContact/index.ts\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar icons_material_1 = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\r\nvar store_1 = __importDefault(__webpack_require__(/*! ../../../store */ \"./src/store/index.ts\"));\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar shallow_1 = __importDefault(__webpack_require__(/*! zustand/shallow */ \"zustand/shallow\"));\r\nvar a11yProps = function (isSm, index) { return (isSm ?\r\n    {\r\n        id: \"vertical-tab-\".concat(index),\r\n        'aria-controls': \"vertical-tabpanel-\".concat(index),\r\n    } :\r\n    {\r\n        id: \"simple-tab-\".concat(index),\r\n        'aria-controls': \"simple-tabpanel-\".concat(index),\r\n    }); };\r\nexports.a11yProps = a11yProps;\r\nexports.ContactsTabs = react_1.default.memo(function () {\r\n    var _a = (0, react_1.useState)(0), value = _a[0], setValue = _a[1];\r\n    var _b = (0, react_1.useState)(''), search = _b[0], setSearch = _b[1];\r\n    var _c = (0, react_1.useState)(), data = _c[0], setData = _c[1];\r\n    var isSm = (0, useMediaSize_1.useMediaSize)().isSm;\r\n    var classes = (0, styles_1.default)();\r\n    var authUserId = (0, store_1.default)(function (state) { return state.authUserId; }, shallow_1.default);\r\n    var contacts = (0, store_1.default)(function (state) { return state.contacts; }, shallow_1.default);\r\n    var searchField = (0, store_1.default)(function (state) { return state.searchField; }, shallow_1.default);\r\n    var addNewContact = (0, store_1.default)(function (state) { return state.addNewContact; });\r\n    var addNewGroup = (0, store_1.default)(function (state) { return state.addNewGroup; });\r\n    var removeContact = (0, store_1.default)(function (state) { return state.removeContact; });\r\n    var removeGroup = (0, store_1.default)(function (state) { return state.removeGroup; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (!contacts || !contacts || contacts.length === 0)\r\n            return;\r\n        var contactData = (0, ramda_1.find)((0, ramda_1.propEq)('id', authUserId))(contacts);\r\n        !!contactData && setData(contactData);\r\n    }, [contacts]);\r\n    (0, react_1.useEffect)(function () {\r\n        if (!!searchField && !!data) {\r\n            var contactData = __assign(__assign({}, data), { contactsList: data.contactsList.filter(function (contact) {\r\n                    return !searchField ? true : !!Object.values(contact)\r\n                        .find(function (value) { return value.includes(searchField); });\r\n                }) });\r\n            !!data && setData(contactData);\r\n        }\r\n    }, [searchField]);\r\n    if (!data)\r\n        return (react_1.default.createElement(Loading_1.Loading, null));\r\n    var id = data.id, contactsList = data.contactsList, contactsGroups = data.contactsGroups;\r\n    var handleChange = function (event, newValue) {\r\n        setValue(newValue);\r\n    };\r\n    var handleClickAddingContactBtn = function (contact) {\r\n        addNewContact(id, contact);\r\n    };\r\n    var handleClickAddingTabBtn = function (groupName) {\r\n        addNewGroup(id, groupName);\r\n    };\r\n    var handleClickRemoveContactBtn = function (contact) {\r\n        removeContact(id, contact);\r\n    };\r\n    // @ts-ignore\r\n    var handleClickRemoveTabBtn = function (groupName, e) {\r\n        e.stopPropagation();\r\n        removeGroup(id, groupName);\r\n    };\r\n    return (react_1.default.createElement(material_1.Box, { className: classes.box },\r\n        react_1.default.createElement(material_1.Tabs, { orientation: isSm ? 'horizontal' : 'vertical', variant: 'scrollable', value: value, onChange: handleChange, \"aria-label\": 'Groups', className: classes.tabs },\r\n            contactsGroups.map(function (groupName, index) {\r\n                return react_1.default.createElement(material_1.Tab, __assign({ className: classes.tab, key: index, label: groupName === 'all' ? groupName :\r\n                        react_1.default.createElement(react_1.default.Fragment, null,\r\n                            groupName,\r\n                            react_1.default.createElement(icons_material_1.Close, { onClick: function (e) { return handleClickRemoveTabBtn(groupName, e); }, className: classes.closeTabButton })) }, (0, exports.a11yProps)(isSm, index)));\r\n            }),\r\n            react_1.default.createElement(AddingTab_1.AddingTab, { contact: data, onClickAddingBtn: handleClickAddingTabBtn })),\r\n        contactsGroups.map((function (groupName, index) {\r\n            return react_1.default.createElement(TabPanel_1.TabPanel, { key: index, value: value, index: index },\r\n                react_1.default.createElement(AddingContact_1.AddingContact, { groupNames: contactsGroups, onClickAddingBtn: handleClickAddingContactBtn }),\r\n                groupName === 'all' && !search && contactsList.length > 0 && contactsList\r\n                    .map(function (contact) {\r\n                    return react_1.default.createElement(Contact_1.Contact, { key: contact.id, contact: contact, onClickRemoveBtn: handleClickRemoveContactBtn });\r\n                }),\r\n                groupName !== 'all' && contactsList.length > 0 && contactsList\r\n                    .filter(function (contact) { return contact.group === groupName; })\r\n                    .map(function (contact) {\r\n                    return react_1.default.createElement(Contact_1.Contact, { key: contact.id, contact: contact, onClickRemoveBtn: handleClickRemoveContactBtn });\r\n                }));\r\n        }))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/ContactsTabs.tsx?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/TabPanel/TabPanel.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/TabPanel/TabPanel.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TabPanel = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Box_1 = __importDefault(__webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/ContactsTabs/TabPanel/styles.ts\"));\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nexports.TabPanel = react_1.default.memo(function (props) {\r\n    var children = props.children, value = props.value, index = props.index, other = __rest(props, [\"children\", \"value\", \"index\"]);\r\n    var classes = (0, styles_1.default)();\r\n    var isSm = (0, useMediaSize_1.useMediaSize)().isSm;\r\n    var a11yProps = function (isSm, index) { return (isSm ?\r\n        {\r\n            id: \"simple-tabpanel-\".concat(index),\r\n            'aria-labelledby': \"simple-tab-\".concat(index)\r\n        } :\r\n        {\r\n            id: \"vertical-tabpanel-\".concat(index),\r\n            'aria-labelledby': \"vertical-tab-\".concat(index)\r\n        }); };\r\n    return (react_1.default.createElement(\"div\", __assign({ className: classes.tabPanel, role: \"tabpanel\", hidden: value !== index }, a11yProps(isSm, index), other), value === index && (react_1.default.createElement(Box_1.default, { className: classes.box }, children))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/TabPanel/TabPanel.tsx?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/TabPanel/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/TabPanel/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TabPanel */ \"./src/shared/Components/ContactsTabs/TabPanel/TabPanel.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/TabPanel/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/TabPanel/styles.ts":
/*!***************************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/TabPanel/styles.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    box: (_a = {\r\n            padding: '1em'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            padding: '1em 1em 0 1em',\r\n        },\r\n        _a),\r\n    tabPanel: {\r\n        flex: '1 1 auto',\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/TabPanel/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ContactsTabs */ \"./src/shared/Components/ContactsTabs/ContactsTabs.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/index.ts?");

/***/ }),

/***/ "./src/shared/Components/ContactsTabs/styles.ts":
/*!******************************************************!*\
  !*** ./src/shared/Components/ContactsTabs/styles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a, _b, _c;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    box: (_a = {\r\n            backgroundColor: colors_1.default.pistachioL,\r\n            display: 'flex',\r\n            flexDirection: 'column',\r\n            height: 'calc(100vh - 65px)',\r\n            flexGrow: '1',\r\n            '& a': {\r\n                textDecoration: \"none\",\r\n                color: 'rgba(18, 69, 89, 0.8)'\r\n            }\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            flexDirection: 'row',\r\n        },\r\n        _a['&::-webkit-scrollbar'] = {\r\n            paddingRight: '10px',\r\n            width: '7px',\r\n            height: '4px',\r\n            zIndex: 100,\r\n            backgroundColor: colors_1.default.pistachioLT,\r\n        },\r\n        _a['&::-webkit-scrollbar-track'] = {\r\n            borderRadius: '10px',\r\n            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.4)',\r\n            backgroundColor: colors_1.default.pistachioL,\r\n        },\r\n        _a['&::-webkit-scrollbar-thumb'] = {\r\n            borderRadius: '10px',\r\n            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.4)',\r\n            backgroundColor: colors_1.default.pistachioLT,\r\n        },\r\n        _a['&::-webkit-scrollbar-thumb:hover'] = {\r\n            borderRadius: '3px',\r\n            backgroundColor: colors_1.default.pine\r\n        },\r\n        _a),\r\n    closeTabButton: (_b = {\r\n            top: '50%',\r\n            color: '#124559 !important',\r\n            right: '-3%',\r\n            // @ts-ignore\r\n            position: 'absolute !important',\r\n            transform: 'translateY(-50%)',\r\n            backgroundColor: 'transparent !important'\r\n        },\r\n        _b[theme_1.default.breakpoints.up('md')] = {\r\n            right: '1%',\r\n        },\r\n        _b),\r\n    tabs: (_c = {\r\n            borderRight: 1,\r\n            borderColor: colors_1.default.pine,\r\n            padding: '0.5em 1em'\r\n        },\r\n        _c[theme_1.default.breakpoints.up('md')] = {\r\n            minWidth: '180px',\r\n            maxWidth: '180px',\r\n        },\r\n        _c[theme_1.default.breakpoints.up('lg')] = {\r\n            minWidth: '230px',\r\n            maxWidth: '260px',\r\n        },\r\n        _c[theme_1.default.breakpoints.up('xl')] = {\r\n            minWidth: '260px',\r\n            maxWidth: '260px',\r\n        },\r\n        _c['& .Mui-selected'] = {\r\n            color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        },\r\n        _c['& .MuiTabs-indicator'] = {\r\n            backgroundColor: colors_1.default.pine07\r\n        },\r\n        _c['& .MuiButtonBase-root'] = {\r\n            color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n            fontWeight: '700 !important',\r\n            fontSize: ' 1rem !important',\r\n            lineHeight: '1.5 !important',\r\n            display: 'inline-flex',\r\n            flexDirection: 'row',\r\n            '& .MuiOutlinedInput-root': {\r\n                opacity: '1',\r\n                color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n                backgroundColor: \"transparent !important\",\r\n            },\r\n        },\r\n        _c),\r\n    tab: {\r\n        position: 'relative'\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/ContactsTabs/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/Content/Content.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Components/Content/Content.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/Content/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nexports.Content = react_1.default.memo(function (_a) {\r\n    var children = _a.children;\r\n    var classes = (0, styles_1.default)();\r\n    return (react_1.default.createElement(material_1.Box, { className: classes.content }, children));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Components/Content/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Components/Content/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Components/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Content/styles.ts":
/*!*************************************************!*\
  !*** ./src/shared/Components/Content/styles.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    content: (_a = {\r\n            minWidth: ' 320px',\r\n            maxWidth: '639px',\r\n            paddingTop: '65px',\r\n            height: '100vh',\r\n            margin: '0 auto'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            minWidth: '640px',\r\n            maxWidth: '999px',\r\n        },\r\n        _a[theme_1.default.breakpoints.up('lg')] = {\r\n            minWidth: '1000px',\r\n            maxWidth: '1399px',\r\n        },\r\n        _a[theme_1.default.breakpoints.up('xl')] = {\r\n            minWidth: '1400px',\r\n            maxWidth: '1400px',\r\n        },\r\n        _a)\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Content/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Components/Header/Header.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/Header/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar SearchField_1 = __webpack_require__(/*! ../SearchField */ \"./src/shared/Components/SearchField/index.ts\");\r\nvar ButtonOutlined_1 = __webpack_require__(/*! ../ButtonOutlined */ \"./src/shared/Components/ButtonOutlined/index.ts\");\r\nvar LogoutOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/LogoutOutlined */ \"@mui/icons-material/LogoutOutlined\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useMediaSize_1 = __webpack_require__(/*! ../../../hooks/useMediaSize */ \"./src/hooks/useMediaSize.ts\");\r\nvar ContactsOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/ContactsOutlined */ \"@mui/icons-material/ContactsOutlined\"));\r\nvar store_1 = __importDefault(__webpack_require__(/*! ../../../store */ \"./src/store/index.ts\"));\r\nexports.Header = react_1.default.memo(function () {\r\n    var isSm = (0, useMediaSize_1.useMediaSize)().isSm;\r\n    var classes = (0, styles_1.default)();\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var isAuth = (0, store_1.default)(function (state) { return state.isAuth; });\r\n    var logout = (0, store_1.default)(function (state) { return state.logout; });\r\n    var searchField = (0, store_1.default)(function (state) { return state.searchField; });\r\n    var setSearchValue = (0, store_1.default)(function (state) { return state.setSearchValue; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (!isAuth) {\r\n            navigate('/signin');\r\n        }\r\n    }, []);\r\n    var handleChangeSearchField = function (e) {\r\n        var _a;\r\n        // @ts-ignore\r\n        var value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;\r\n        setSearchValue(value);\r\n    };\r\n    var handleClick = function () {\r\n        logout();\r\n    };\r\n    return (react_1.default.createElement(material_1.AppBar, { position: 'static', className: classes.appBar },\r\n        react_1.default.createElement(material_1.Toolbar, { className: classes.toolbar },\r\n            !isSm && react_1.default.createElement(material_1.Typography, { className: classes.title },\r\n                react_1.default.createElement(ContactsOutlined_1.default, { className: classes.title__icon }),\r\n                \"Contacts\"),\r\n            react_1.default.createElement(SearchField_1.SearchField, { searchTextVal: searchField, handler: function (e) { return handleChangeSearchField(e); } }),\r\n            react_1.default.createElement(react_router_dom_1.Link, { className: classes.link, to: '/signin' },\r\n                react_1.default.createElement(ButtonOutlined_1.ButtonOutlined, { onClick: handleClick, text: 'Logout', btnIcon: react_1.default.createElement(LogoutOutlined_1.default, null) })))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Components/Header/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Components/Header/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Components/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Header/styles.ts":
/*!************************************************!*\
  !*** ./src/shared/Components/Header/styles.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    '& .MuiPaper-root': {\r\n        backgroundColor: colors_1.default.pine,\r\n        minHeight: '65px',\r\n        maxHeight: '65px',\r\n        position: 'fixed',\r\n        width: '100vw',\r\n    },\r\n    appBar: {\r\n        backgroundColor: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        minHeight: '65px',\r\n        maxHeight: '65px',\r\n        // @ts-ignore\r\n        position: 'fixed !important',\r\n        width: '100vw',\r\n        zIndex: 1000\r\n    },\r\n    link: {\r\n        textDecoration: 'none',\r\n    },\r\n    toolbar: (_a = {\r\n            height: 'inherit',\r\n            display: 'flex',\r\n            alignItems: 'center',\r\n            justifyContent: 'space-between',\r\n            minWidth: '320px',\r\n            padding: '0 10px !important',\r\n            width: '100vw',\r\n            margin: '0 auto'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('xl')] = {\r\n            width: '1400px',\r\n        },\r\n        _a),\r\n    title: {\r\n        color: colors_1.default.pistachioLT,\r\n        fontSize: '1.35rem !important',\r\n        fontWeight: '500 !important',\r\n        letterSpacing: '0.08em !important',\r\n        minWidth: '20vw',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        cursor: 'none',\r\n    },\r\n    title__icon: {\r\n        marginRight: '5px'\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Header/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/LetterAvatar/LetterAvatar.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Components/LetterAvatar/LetterAvatar.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LetterAvatar = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar stringToColor = function (string) {\r\n    var hash = 0;\r\n    var i;\r\n    for (i = 0; i < string.length; i += 1) {\r\n        hash = string.charCodeAt(i) + ((hash << 5) - hash);\r\n    }\r\n    var color = '#';\r\n    for (i = 0; i < 3; i += 1) {\r\n        var value = (hash >> (i * 8)) & 0xff;\r\n        color += \"00\".concat(value.toString(16)).substr(-2);\r\n    }\r\n    return color;\r\n};\r\nvar stringAvatar = function (name) { return ({\r\n    sx: {\r\n        bgcolor: stringToColor(name),\r\n    },\r\n    children: \"\".concat(name.split(' ')[0][0]).concat(name.split(' ')[1][0]),\r\n}); };\r\nexports.LetterAvatar = React.memo(function (_a) {\r\n    var _b = _a.firstName, firstName = _b === void 0 ? '' : _b, _c = _a.lastname, lastname = _c === void 0 ? '' : _c;\r\n    return (React.createElement(material_1.Avatar, __assign({}, stringAvatar(\"\".concat(firstName, \" \").concat(lastname)))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/LetterAvatar/LetterAvatar.tsx?");

/***/ }),

/***/ "./src/shared/Components/LetterAvatar/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Components/LetterAvatar/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./LetterAvatar */ \"./src/shared/Components/LetterAvatar/LetterAvatar.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/LetterAvatar/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Loading/Loading.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Components/Loading/Loading.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Loading = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CircularProgress_1 = __importDefault(__webpack_require__(/*! @mui/material/CircularProgress */ \"@mui/material/CircularProgress\"));\r\nvar Modal_1 = __webpack_require__(/*! ../Modal */ \"./src/shared/Components/Modal/index.ts\");\r\nexports.Loading = react_1.default.memo(function () {\r\n    return (react_1.default.createElement(Modal_1.Modal, null,\r\n        react_1.default.createElement(CircularProgress_1.default, { disableShrink: true })));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Loading/Loading.tsx?");

/***/ }),

/***/ "./src/shared/Components/Loading/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Components/Loading/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Loading */ \"./src/shared/Components/Loading/Loading.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Loading/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Modal/Modal.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Components/Modal/Modal.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Modal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useMouseEventAction_1 = __webpack_require__(/*! ../../../hooks/useMouseEventAction */ \"./src/hooks/useMouseEventAction.ts\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/Modal/styles.ts\"));\r\nexports.Modal = react_1.default.memo(function (_a) {\r\n    var children = _a.children;\r\n    var _b = (0, react_1.useState)(), node = _b[0], setNode = _b[1];\r\n    var classes = (0, styles_1.default)();\r\n    var ref = (0, react_1.useRef)(null);\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        setNode((_a = document.querySelector('#modal')) !== null && _a !== void 0 ? _a : undefined);\r\n    }, []);\r\n    (0, useMouseEventAction_1.useMouseEventAction)({ action: function () { return navigate(-1); }, ref: ref });\r\n    if (!node) {\r\n        return null;\r\n    }\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: classes.modalBack },\r\n        react_1.default.createElement(\"div\", { ref: ref, className: classes.modal }, children)), node);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Modal/Modal.tsx?");

/***/ }),

/***/ "./src/shared/Components/Modal/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Components/Modal/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Modal */ \"./src/shared/Components/Modal/Modal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Modal/index.ts?");

/***/ }),

/***/ "./src/shared/Components/Modal/styles.ts":
/*!***********************************************!*\
  !*** ./src/shared/Components/Modal/styles.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a, _b;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    modalBack: (_a = {\r\n            position: 'absolute',\r\n            top: '0',\r\n            bottom: '0',\r\n            width: '100%',\r\n            backgroundColor: 'rgba(0, 0, 0, 0.2)',\r\n            display: 'grid',\r\n            placeItems: 'center',\r\n            zIndex: '10000',\r\n            height: 'max-content'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            height: '100%',\r\n            paddingTop: '190px',\r\n        },\r\n        _a),\r\n    modal: (_b = {\r\n            backgroundColor: 'white',\r\n            minWidth: '320px',\r\n            maxWidth: '320px',\r\n            padding: '45px 25px',\r\n            position: 'relative'\r\n        },\r\n        _b[theme_1.default.breakpoints.up('md')] = {\r\n            maxWidth: '100vw',\r\n        },\r\n        _b)\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/Modal/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/RemoveButton/RemoveButton.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Components/RemoveButton/RemoveButton.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RemoveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/RemoveButton/styles.ts\"));\r\nvar icons_material_1 = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nexports.RemoveButton = react_1.default.memo(function (_a) {\r\n    var onClickRemoveBtn = _a.onClickRemoveBtn, classname = _a.classname;\r\n    var classes = (0, styles_1.default)();\r\n    return (react_1.default.createElement(material_1.Button, { type: 'button', className: classname !== null && classname !== void 0 ? classname : classes.removeBtn, onClick: onClickRemoveBtn, startIcon: react_1.default.createElement(icons_material_1.CancelPresentation, null) }));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/RemoveButton/RemoveButton.tsx?");

/***/ }),

/***/ "./src/shared/Components/RemoveButton/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Components/RemoveButton/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./RemoveButton */ \"./src/shared/Components/RemoveButton/RemoveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/RemoveButton/index.ts?");

/***/ }),

/***/ "./src/shared/Components/RemoveButton/styles.ts":
/*!******************************************************!*\
  !*** ./src/shared/Components/RemoveButton/styles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    removeBtn: {\r\n        lineHeight: '40px',\r\n        border: 'none !important',\r\n        margin: '0 !important',\r\n        padding: '0 !important',\r\n        color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        backgroundColor: \"transparent !important\",\r\n        textAlign: \"center\",\r\n        '&:hover': {\r\n            color: \"\".concat(colors_1.default.red, \" !important\"),\r\n        },\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/RemoveButton/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/RequiredAuth.tsx":
/*!************************************************!*\
  !*** ./src/shared/Components/RequiredAuth.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RequiredAuth = void 0;\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar store_1 = __importDefault(__webpack_require__(/*! ../../store */ \"./src/store/index.ts\"));\r\nvar shallow_1 = __importDefault(__webpack_require__(/*! zustand/shallow */ \"zustand/shallow\"));\r\nexports.RequiredAuth = react_1.default.memo(function (_a) {\r\n    var children = _a.children;\r\n    var isAuth = (0, store_1.default)(function (state) { return state.isAuth; }, shallow_1.default);\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!isAuth) {\r\n            navigate(\"/signin\");\r\n        }\r\n    }, []);\r\n    return children;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/RequiredAuth.tsx?");

/***/ }),

/***/ "./src/shared/Components/SearchField/SearchField.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Components/SearchField/SearchField.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchField = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/SearchField/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar Search_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Search */ \"@mui/icons-material/Search\"));\r\nexports.SearchField = react_1.default.memo(function (props) {\r\n    var handler = props.handler, searchTextVal = props.searchTextVal;\r\n    var classes = (0, styles_1.default)();\r\n    return (react_1.default.createElement(material_1.FormControl, { className: classes.formControl, variant: \"outlined\" },\r\n        react_1.default.createElement(material_1.TextField, { className: classes.textField, id: \"search\", label: \"Search\", color: 'info', type: \"text\", value: searchTextVal, onChange: handler }),\r\n        react_1.default.createElement(Search_1.default, { className: classes.searchIcon })));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SearchField/SearchField.tsx?");

/***/ }),

/***/ "./src/shared/Components/SearchField/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/Components/SearchField/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchField */ \"./src/shared/Components/SearchField/SearchField.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SearchField/index.ts?");

/***/ }),

/***/ "./src/shared/Components/SearchField/styles.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Components/SearchField/styles.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    formControl: {\r\n        minWidth: '140px !important',\r\n        margin: '0 auto 0 0 !important',\r\n        position: 'relative',\r\n        minHeight: '50px',\r\n    },\r\n    textField: {\r\n        '& .MuiInputLabel-root, .MuiOutlinedInput-root': {\r\n            color: colors_1.default.pistachioLT,\r\n            '&.Mui-focused': {\r\n                color: colors_1.default.pistachioL,\r\n                borderColor: colors_1.default.pistachioLT,\r\n            }\r\n        },\r\n        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {\r\n            color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            borderWidth: '1.5px !important',\r\n            '&:-webkit-autofill': {\r\n                '-webkit-box-shadow': \"0 0 0 100px \".concat(colors_1.default.pine, \" inset\"),\r\n                '-webkit-text-fill-color': \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            }\r\n        },\r\n        '& input:webkit-autofill': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\")\r\n        },\r\n        '& .Mui-focused .MuiOutlinedInput-notchedOutline, fieldset, .MuiOutlinedInput-input': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderWidth: '1.7px',\r\n        },\r\n        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderWidth: '1.7px'\r\n        },\r\n        '& .MuiOutlinedInput-input': {\r\n            paddingRight: '35px'\r\n        }\r\n    },\r\n    searchIcon: {\r\n        color: colors_1.default.pistachioLT,\r\n        position: 'absolute',\r\n        right: '5%',\r\n        top: '50%',\r\n        transform: 'translateY(-50%)'\r\n    },\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SearchField/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignInBtnGroup = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar Send_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Send */ \"@mui/icons-material/Send\"));\r\nvar HowToRegOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/HowToRegOutlined */ \"@mui/icons-material/HowToRegOutlined\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/SignInBtnGroup/styles.ts\"));\r\nexports.SignInBtnGroup = react_1.default.memo(function (props) {\r\n    var classes = (0, styles_1.default)();\r\n    var inputError = props.inputError, handleClick = props.handleClick, user = props.user;\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    return (react_1.default.createElement(\"div\", { className: classes.block },\r\n        react_1.default.createElement(material_1.Button, { className: classes.firstButton, disabled: inputError, variant: \"contained\", endIcon: react_1.default.createElement(Send_1.default, null), onClick: function () { return handleClick && handleClick(user); } }, \"Sign in\"),\r\n        react_1.default.createElement(\"span\", { className: classes.span }, \"New to this site?\"),\r\n        react_1.default.createElement(material_1.Button, { className: classes.secondButton, onClick: function () { return navigate(\"/signup\"); }, variant: \"outlined\", endIcon: react_1.default.createElement(HowToRegOutlined_1.default, null) }, \"Create account\")));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignInBtnGroup/SignInBtnGroup.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    block: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n    },\r\n    firstButton: {\r\n        color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        backgroundColor: \"\".concat(colors_1.default.pistachio, \" !important\"),\r\n        '&:hover': {\r\n            backgroundColor: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            boxShadow: '0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)',\r\n        }\r\n    },\r\n    secondButton: {\r\n        color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n        borderColor: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n        '&:hover': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioL, \" !important\")\r\n        },\r\n        padding: '6px 0',\r\n        width: '100%',\r\n    },\r\n    span: {\r\n        fontSize: '1 rem',\r\n        color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n        margin: '15px auto 15px',\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignInBtnGroup/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignUpBtnGroup = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar Send_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/Send */ \"@mui/icons-material/Send\"));\r\nvar ArrowForwardOutlined_1 = __importDefault(__webpack_require__(/*! @mui/icons-material/ArrowForwardOutlined */ \"@mui/icons-material/ArrowForwardOutlined\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/SignUpBtnGroup/styles.ts\"));\r\nexports.SignUpBtnGroup = react_1.default.memo(function (props) {\r\n    var inputError = props.inputError, handleClick = props.handleClick, user = props.user;\r\n    var classes = (0, styles_1.default)();\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(material_1.Button, { className: classes.firstButton, disabled: inputError, variant: \"contained\", onClick: function () { return handleClick && handleClick(user); }, endIcon: react_1.default.createElement(Send_1.default, null) }, \"Create account\"),\r\n        react_1.default.createElement(\"span\", { className: classes.span }, \"Already have an account?\"),\r\n        react_1.default.createElement(material_1.Button, { className: classes.secondButton, onClick: function () { return navigate(\"/signin\"); }, variant: \"outlined\", endIcon: react_1.default.createElement(ArrowForwardOutlined_1.default, null) }, \"Sign in\")));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignUpBtnGroup/SignUpBtnGroup.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    block: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n    },\r\n    firstButton: {\r\n        color: \"\".concat(colors_1.default.pine, \" !important\"),\r\n        backgroundColor: \"\".concat(colors_1.default.pistachio, \" !important\"),\r\n        '&:hover': {\r\n            backgroundColor: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n            boxShadow: '0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)',\r\n        }\r\n    },\r\n    secondButton: {\r\n        color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n        borderColor: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n        '&:hover': {\r\n            color: \"\".concat(colors_1.default.pistachioL, \" !important\"),\r\n            borderColor: \"\".concat(colors_1.default.pistachioL, \" !important\")\r\n        },\r\n        padding: '6px 0',\r\n        width: '100%',\r\n    },\r\n    span: {\r\n        fontSize: '1 rem',\r\n        color: \"\".concat(colors_1.default.pistachioLT, \" !important\"),\r\n        margin: '15px auto 15px',\r\n    }\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/SignUpBtnGroup/styles.ts?");

/***/ }),

/***/ "./src/shared/Components/TransparentSelect/TransparentSelect.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/Components/TransparentSelect/TransparentSelect.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TransparentSelect = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Components/TransparentSelect/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nexports.TransparentSelect = react_1.default.memo(function (_a) {\r\n    var labelName = _a.labelName, list = _a.list, onChangeSelect = _a.onChangeSelect;\r\n    var classes = (0, styles_1.default)();\r\n    var _b = (0, react_1.useState)(list[0]), value = _b[0], setValue = _b[1];\r\n    var handleChange = function (e) {\r\n        // @ts-ignore\r\n        var value = e.target.value;\r\n        setValue(value);\r\n        onChangeSelect(value);\r\n    };\r\n    return (react_1.default.createElement(material_1.FormControl, { className: classes.formControl, variant: \"standard\" },\r\n        react_1.default.createElement(material_1.InputLabel, { id: \"demo-simple-select-standard-label\" }, \"Group name\"),\r\n        react_1.default.createElement(material_1.Select, { labelId: \"demo-simple-select-standard-label\", id: \"demo-simple-select-standard\", value: value, onChange: function (e) { return handleChange(e); }, label: labelName }, list.map(function (item, index) {\r\n            return (react_1.default.createElement(material_1.MenuItem, { key: index, value: item }, item.toUpperCase()));\r\n        }))));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/TransparentSelect/TransparentSelect.tsx?");

/***/ }),

/***/ "./src/shared/Components/TransparentSelect/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Components/TransparentSelect/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TransparentSelect */ \"./src/shared/Components/TransparentSelect/TransparentSelect.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/TransparentSelect/index.ts?");

/***/ }),

/***/ "./src/shared/Components/TransparentSelect/styles.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Components/TransparentSelect/styles.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme_1 = __importDefault(__webpack_require__(/*! ../../../styles/theme */ \"./src/styles/theme.ts\"));\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    formControl: (_a = {\r\n            color: colors_1.default.pine,\r\n            flex: '1 0 auto',\r\n            // @ts-ignore\r\n            position: 'absolute !important',\r\n            bottom: '0'\r\n        },\r\n        _a[theme_1.default.breakpoints.up('md')] = {\r\n            bottom: 'initial',\r\n            // @ts-ignore\r\n            position: 'relative !important',\r\n        },\r\n        _a['& #demo-simple-select-standard-label'] = {\r\n            color: colors_1.default.pine,\r\n        },\r\n        _a)\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Components/TransparentSelect/styles.ts?");

/***/ }),

/***/ "./src/shared/Pages/ContactsPage/ContactsPage.tsx":
/*!********************************************************!*\
  !*** ./src/shared/Pages/ContactsPage/ContactsPage.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ContactsPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Pages/ContactsPage/styles.ts\"));\r\nvar ContactsTabs_1 = __webpack_require__(/*! ../../Components/ContactsTabs */ \"./src/shared/Components/ContactsTabs/index.ts\");\r\nvar ContactsPage = function () {\r\n    var classes = (0, styles_1.default)();\r\n    return (react_1.default.createElement(material_1.Box, { className: classes.box },\r\n        react_1.default.createElement(ContactsTabs_1.ContactsTabs, null)));\r\n};\r\nexports.ContactsPage = ContactsPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/ContactsPage/ContactsPage.tsx?");

/***/ }),

/***/ "./src/shared/Pages/ContactsPage/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Pages/ContactsPage/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ContactsPage */ \"./src/shared/Pages/ContactsPage/ContactsPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/ContactsPage/index.ts?");

/***/ }),

/***/ "./src/shared/Pages/ContactsPage/styles.ts":
/*!*************************************************!*\
  !*** ./src/shared/Pages/ContactsPage/styles.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    box: {\r\n        color: colors_1.default.black06,\r\n        fontWeight: '500'\r\n    },\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/ContactsPage/styles.ts?");

/***/ }),

/***/ "./src/shared/Pages/NoMatchPage/NoMatchPage.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Pages/NoMatchPage/NoMatchPage.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NoMatchPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar styles_1 = __importDefault(__webpack_require__(/*! ./styles */ \"./src/shared/Pages/NoMatchPage/styles.ts\"));\r\nvar material_1 = __webpack_require__(/*! @mui/material */ \"@mui/material\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction NoMatchPage() {\r\n    var classes = (0, styles_1.default)();\r\n    return (react_1.default.createElement(material_1.Container, { className: classes.container },\r\n        react_1.default.createElement(material_1.Typography, { variant: 'h2', component: 'h1', align: 'center' },\r\n            \"PAGE NOT FOUND\",\r\n            react_1.default.createElement(material_1.Typography, { variant: 'h6', component: 'p' },\r\n                \"Go to the \",\r\n                react_1.default.createElement(react_router_dom_1.Link, { to: '/contacts' }, \"your page\")))));\r\n}\r\nexports.NoMatchPage = NoMatchPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NoMatchPage/NoMatchPage.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../../../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar styles_1 = __webpack_require__(/*! @mui/styles */ \"@mui/styles\");\r\nvar useStyles = (0, styles_1.makeStyles)({\r\n    container: {\r\n        color: colors_1.default.black06,\r\n        display: 'grid',\r\n        placeItems: 'center',\r\n        height: '100vh',\r\n    },\r\n});\r\nexports.default = useStyles;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/NoMatchPage/styles.ts?");

/***/ }),

/***/ "./src/shared/Pages/SignInPage/SignInPage.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Pages/SignInPage/SignInPage.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignInPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar AuthForm_1 = __webpack_require__(/*! ../../Components/AuthForm */ \"./src/shared/Components/AuthForm/index.ts\");\r\nvar SignInBtnGroup_1 = __webpack_require__(/*! ../../Components/SignInBtnGroup */ \"./src/shared/Components/SignInBtnGroup/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar store_1 = __importDefault(__webpack_require__(/*! ../../../store */ \"./src/store/index.ts\"));\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar SignInPage = function () {\r\n    var _a = (0, store_1.default)(function (s) { return [s.users, s.loading, s.error, s.isAuth, s.login]; }), users = _a[0], loading = _a[1], error = _a[2], isAuth = _a[3], login = _a[4];\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var auth = function (user) {\r\n        if (loading || error)\r\n            return;\r\n        var someUser = (0, ramda_1.find)((0, ramda_1.propEq)('email', user.email))(users);\r\n        if (!someUser) {\r\n            return { type: 'mailError', message: 'Account with this address is not registered' };\r\n        }\r\n        if (someUser.password !== user.password) {\r\n            return { type: 'mailPassword', message: 'Wrong password' };\r\n        }\r\n        else {\r\n            login(someUser.id);\r\n            navigate(\"/contacts\");\r\n        }\r\n    };\r\n    return (isAuth ? react_1.default.createElement(react_router_dom_1.Navigate, { to: '/contacts' }) :\r\n        react_1.default.createElement(AuthForm_1.AuthForm, { authUser: auth },\r\n            react_1.default.createElement(SignInBtnGroup_1.SignInBtnGroup, null)));\r\n};\r\nexports.SignInPage = SignInPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/SignInPage/SignInPage.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SignUpPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar AuthForm_1 = __webpack_require__(/*! ../../Components/AuthForm */ \"./src/shared/Components/AuthForm/index.ts\");\r\nvar SignUpBtnGroup_1 = __webpack_require__(/*! ../../Components/SignUpBtnGroup */ \"./src/shared/Components/SignUpBtnGroup/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar store_1 = __importDefault(__webpack_require__(/*! ../../../store */ \"./src/store/index.ts\"));\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar SignUpPage = function () {\r\n    var _a = (0, store_1.default)(function (s) { return [s.users, s.loading, s.error, s.isAuth, s.login, s.createNewUser, s.addNewContactData]; }), users = _a[0], loading = _a[1], error = _a[2], isAuth = _a[3], login = _a[4], createNewUser = _a[5], addNewContactData = _a[6];\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var createUser = function (user) {\r\n        if (loading || error)\r\n            return;\r\n        try {\r\n            var contact = (0, generateRandomIndex_1.addStringId)({\r\n                email: 'some@gmail.com',\r\n                name: 'Name',\r\n                lastName: 'Lastname',\r\n                tel: '88002000600',\r\n                group: 'all'\r\n            });\r\n            var duplicate = (0, ramda_1.find)((0, ramda_1.propEq)('email', user.email))(users);\r\n            if (!!duplicate)\r\n                return {\r\n                    type: 'mailError',\r\n                    message: 'An account with this address has already been registered'\r\n                };\r\n            createNewUser(user);\r\n            addNewContactData({\r\n                id: user.id,\r\n                contactsList: [contact],\r\n                contactsGroups: ['all']\r\n            });\r\n            login(user.id);\r\n            navigate(\"/contacts\");\r\n        }\r\n        catch (e) {\r\n            console.log(e);\r\n        }\r\n    };\r\n    return (isAuth ? react_1.default.createElement(react_router_dom_1.Navigate, { to: '/contacts' }) :\r\n        react_1.default.createElement(AuthForm_1.AuthForm, { authUser: createUser },\r\n            react_1.default.createElement(SignUpBtnGroup_1.SignUpBtnGroup, null)));\r\n};\r\nexports.SignUpPage = SignUpPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pages/SignUpPage/SignUpPage.tsx?");

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

/***/ "./src/store/actions/addNewContact.ts":
/*!********************************************!*\
  !*** ./src/store/actions/addNewContact.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar contactsDataById_1 = __importDefault(__webpack_require__(/*! ../selectors/contactsDataById */ \"./src/store/selectors/contactsDataById.ts\"));\r\nvar addNewContact = function (set, get) { return ({\r\n    addNewContact: function (id, contact) {\r\n        var contactData = (0, contactsDataById_1.default)(id, get().contacts);\r\n        var newContactsData = __assign(__assign({}, contactData), { contactsList: (0, ramda_1.append)(contact, contactData.contactsList) });\r\n        return set(function (prev) { return ({\r\n            contacts: (0, ramda_1.update)((0, ramda_1.indexOf)(contactData, prev.contacts), newContactsData, prev.contacts)\r\n        }); });\r\n    }\r\n}); };\r\nexports.default = addNewContact;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/addNewContact.ts?");

/***/ }),

/***/ "./src/store/actions/addNewContactData.ts":
/*!************************************************!*\
  !*** ./src/store/actions/addNewContactData.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar addNewContactData = function (set) { return ({\r\n    addNewContactData: function (contactData) {\r\n        return set(function (prev) { return ({\r\n            contacts: (0, ramda_1.append)(contactData, prev.contacts)\r\n        }); });\r\n    }\r\n}); };\r\nexports.default = addNewContactData;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/addNewContactData.ts?");

/***/ }),

/***/ "./src/store/actions/addNewGroup.ts":
/*!******************************************!*\
  !*** ./src/store/actions/addNewGroup.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar contactsDataById_1 = __importDefault(__webpack_require__(/*! ../selectors/contactsDataById */ \"./src/store/selectors/contactsDataById.ts\"));\r\nvar addNewGroup = function (set, get) { return ({\r\n    addNewGroup: function (id, groupName) {\r\n        var contactData = (0, contactsDataById_1.default)(id, get().contacts);\r\n        var newContactsData = __assign(__assign({}, contactData), { contactsGroups: (0, ramda_1.uniq)((0, ramda_1.append)(groupName, contactData.contactsGroups)) });\r\n        return set(function (prev) { return ({\r\n            contacts: (0, ramda_1.update)((0, ramda_1.indexOf)(contactData, prev.contacts), newContactsData, prev.contacts)\r\n        }); });\r\n    }\r\n}); };\r\nexports.default = addNewGroup;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/addNewGroup.ts?");

/***/ }),

/***/ "./src/store/actions/createNewUser.ts":
/*!********************************************!*\
  !*** ./src/store/actions/createNewUser.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar createNewUser = function (set) { return ({\r\n    createNewUser: function (user) {\r\n        return set(function (prev) { return ({\r\n            users: (0, ramda_1.append)(user, prev.users)\r\n        }); });\r\n    }\r\n}); };\r\nexports.default = createNewUser;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/createNewUser.ts?");

/***/ }),

/***/ "./src/store/actions/login.ts":
/*!************************************!*\
  !*** ./src/store/actions/login.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar login = function (set) { return ({\r\n    login: function (id) {\r\n        return set(function (prev) {\r\n            return (0, ramda_1.mergeDeepRight)(prev, { isAuth: true, authUserId: id });\r\n        });\r\n    }\r\n}); };\r\nexports.default = login;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/login.ts?");

/***/ }),

/***/ "./src/store/actions/logout.ts":
/*!*************************************!*\
  !*** ./src/store/actions/logout.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar logout = function (set) { return ({\r\n    logout: function () {\r\n        return set(function (prev) {\r\n            return (0, ramda_1.mergeDeepRight)(prev, { isAuth: false, authUserId: '' });\r\n        });\r\n    }\r\n}); };\r\nexports.default = logout;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/logout.ts?");

/***/ }),

/***/ "./src/store/actions/removeContact.ts":
/*!********************************************!*\
  !*** ./src/store/actions/removeContact.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar contactsDataById_1 = __importDefault(__webpack_require__(/*! ../selectors/contactsDataById */ \"./src/store/selectors/contactsDataById.ts\"));\r\nvar removeContact = function (set, get) { return ({\r\n    removeContact: function (id, contact) {\r\n        var contactData = (0, contactsDataById_1.default)(id, get().contacts);\r\n        var newContactsData = __assign(__assign({}, contactData), { contactsList: (0, ramda_1.without)([contact], contactData.contactsList) });\r\n        return set(function (prev) { return ({\r\n            contacts: (0, ramda_1.update)((0, ramda_1.indexOf)(contactData, prev.contacts), newContactsData, prev.contacts)\r\n        }); });\r\n    }\r\n}); };\r\nexports.default = removeContact;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/removeContact.ts?");

/***/ }),

/***/ "./src/store/actions/removeGroup.ts":
/*!******************************************!*\
  !*** ./src/store/actions/removeGroup.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar contactsDataById_1 = __importDefault(__webpack_require__(/*! ../selectors/contactsDataById */ \"./src/store/selectors/contactsDataById.ts\"));\r\nvar removeGroup = function (set, get) { return ({\r\n    removeGroup: function (id, groupName) {\r\n        var contactData = (0, contactsDataById_1.default)(id, get().contacts);\r\n        var newContactsData = __assign(__assign({}, contactData), { contactsGroups: (0, ramda_1.without)([groupName], contactData.contactsGroups) });\r\n        return set(function (prev) { return ({\r\n            contacts: (0, ramda_1.update)((0, ramda_1.indexOf)(contactData, prev.contacts), newContactsData, prev.contacts)\r\n        }); });\r\n    }\r\n}); };\r\nexports.default = removeGroup;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/removeGroup.ts?");

/***/ }),

/***/ "./src/store/actions/setSearchValue.ts":
/*!*********************************************!*\
  !*** ./src/store/actions/setSearchValue.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ramda_1 = __webpack_require__(/*! ramda */ \"ramda\");\r\nvar setSearchValue = function (set) { return ({\r\n    setSearchValue: function (searchValue) {\r\n        return set(function (prev) {\r\n            return (0, ramda_1.mergeDeepRight)(prev, { searchField: searchValue });\r\n        });\r\n    }\r\n}); };\r\nexports.default = setSearchValue;\r\n\n\n//# sourceURL=webpack:///./src/store/actions/setSearchValue.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar zustand_1 = __importDefault(__webpack_require__(/*! zustand */ \"zustand\"));\r\nvar login_1 = __importDefault(__webpack_require__(/*! ./actions/login */ \"./src/store/actions/login.ts\"));\r\nvar logout_1 = __importDefault(__webpack_require__(/*! ./actions/logout */ \"./src/store/actions/logout.ts\"));\r\nvar createNewUser_1 = __importDefault(__webpack_require__(/*! ./actions/createNewUser */ \"./src/store/actions/createNewUser.ts\"));\r\nvar addNewGroup_1 = __importDefault(__webpack_require__(/*! ./actions/addNewGroup */ \"./src/store/actions/addNewGroup.ts\"));\r\nvar removeGroup_1 = __importDefault(__webpack_require__(/*! ./actions/removeGroup */ \"./src/store/actions/removeGroup.ts\"));\r\nvar addNewContact_1 = __importDefault(__webpack_require__(/*! ./actions/addNewContact */ \"./src/store/actions/addNewContact.ts\"));\r\nvar removeContact_1 = __importDefault(__webpack_require__(/*! ./actions/removeContact */ \"./src/store/actions/removeContact.ts\"));\r\nvar addNewContactData_1 = __importDefault(__webpack_require__(/*! ./actions/addNewContactData */ \"./src/store/actions/addNewContactData.ts\"));\r\nvar setSearchValue_1 = __importDefault(__webpack_require__(/*! ./actions/setSearchValue */ \"./src/store/actions/setSearchValue.ts\"));\r\nvar useStore = (0, zustand_1.default)(function (set, get) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ users: [{\r\n            id: \"someId1\",\r\n            email: \"some1@gmail.com\",\r\n            password: \"somePass1\"\r\n        }], contacts: [\r\n        {\r\n            id: \"someId1\",\r\n            contactsList: [\r\n                {\r\n                    id: \"someContactID1\",\r\n                    name: \"Name1\",\r\n                    lastName: \"Lastname1\",\r\n                    email: \"contact1@gmail.com\",\r\n                    tel: \"+71111111111\",\r\n                    group: \"all\"\r\n                },\r\n                {\r\n                    id: \"someContactID2\",\r\n                    name: \"Name2\",\r\n                    lastName: \"Lastname2\",\r\n                    email: \"contact2@gmail.com\",\r\n                    tel: \"+72222222222\",\r\n                    group: \"friends\"\r\n                },\r\n                {\r\n                    id: \"someContactID3\",\r\n                    name: \"Name3\",\r\n                    lastName: \"Lastname3\",\r\n                    email: \"contact3@gmail.com\",\r\n                    tel: \"+73333333333\",\r\n                    group: \"all\"\r\n                },\r\n                {\r\n                    id: \"someContactID4\",\r\n                    name: \"Name4\",\r\n                    lastName: \"Lastname4\",\r\n                    email: \"contact4@gmail.com\",\r\n                    tel: \"+74444444444\",\r\n                    group: \"friends\"\r\n                },\r\n                {\r\n                    id: \"someContactID5\",\r\n                    name: \"Name5\",\r\n                    lastName: \"Lastname5\",\r\n                    email: \"contact5@gmail.com\",\r\n                    tel: \"+75555555555\",\r\n                    group: \"all\"\r\n                },\r\n                {\r\n                    id: \"someContactID6\",\r\n                    name: \"Name6\",\r\n                    lastName: \"Lastname6\",\r\n                    email: \"contact6@gmail.com\",\r\n                    tel: \"+76666666666\",\r\n                    group: \"friends\"\r\n                },\r\n                {\r\n                    id: \"someContactID7\",\r\n                    name: \"Name7\",\r\n                    lastName: \"Lastname7\",\r\n                    email: \"contact7@gmail.com\",\r\n                    tel: \"+77777777777\",\r\n                    group: \"all\"\r\n                },\r\n                {\r\n                    id: \"someContactID8\",\r\n                    name: \"Name8\",\r\n                    lastName: \"Lastname8\",\r\n                    email: \"contact8@gmail.com\",\r\n                    tel: \"+788888888888\",\r\n                    group: \"friends\"\r\n                },\r\n                {\r\n                    id: \"someContactID9\",\r\n                    name: \"Name9\",\r\n                    lastName: \"Lastname9\",\r\n                    email: \"contact9@gmail.com\",\r\n                    tel: \"+79999999999\",\r\n                    group: \"all\"\r\n                }\r\n            ],\r\n            contactsGroups: [\r\n                \"all\",\r\n                \"friends\"\r\n            ]\r\n        }\r\n    ], error: false, loading: false, isAuth: false, authUserId: '', searchField: '' }, (0, login_1.default)(set)), (0, logout_1.default)(set)), (0, createNewUser_1.default)(set)), (0, addNewGroup_1.default)(set, get)), (0, removeGroup_1.default)(set, get)), (0, addNewContact_1.default)(set, get)), (0, removeContact_1.default)(set, get)), (0, addNewContactData_1.default)(set)), (0, setSearchValue_1.default)(set))); });\r\nexports.default = useStore;\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "./src/store/selectors/contactsDataById.ts":
/*!*************************************************!*\
  !*** ./src/store/selectors/contactsDataById.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar contactsDataById = function (id, contacts) {\r\n    return contacts.find(function (contactData) { return contactData.id === id; });\r\n};\r\nexports.default = contactsDataById;\r\n\n\n//# sourceURL=webpack:///./src/store/selectors/contactsDataById.ts?");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar styles_1 = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\r\nvar colors_1 = __importDefault(__webpack_require__(/*! ../utils/enums/colors */ \"./src/utils/enums/colors.ts\"));\r\nvar theme = (0, styles_1.createTheme)({\r\n    breakpoints: {\r\n        values: {\r\n            xs: 0,\r\n            sm: 320,\r\n            md: 640,\r\n            lg: 1040,\r\n            xl: 1440\r\n        }\r\n    },\r\n    components: {\r\n        MuiCssBaseline: {\r\n            styleOverrides: {\r\n                body: {\r\n                    overflowX: 'hidden',\r\n                    fontWeight: '400',\r\n                    color: colors_1.default.pistachioLT,\r\n                    backgroundColor: colors_1.default.pistachio,\r\n                    width: '100vw',\r\n                    overflow: 'hidden'\r\n                },\r\n            }\r\n        }\r\n    },\r\n});\r\nexports.default = theme;\r\n\n\n//# sourceURL=webpack:///./src/styles/theme.ts?");

/***/ }),

/***/ "./src/utils/enums/colors.ts":
/*!***********************************!*\
  !*** ./src/utils/enums/colors.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar colors = {\r\n    pineLight: '#598392',\r\n    pine: '#124559',\r\n    pine08: 'rgba(18, 69, 89, 0.8)',\r\n    pine07: 'rgba(18, 69, 89, 0.7)',\r\n    darkBlue: '#00042b',\r\n    pistachio: '#aec3b0',\r\n    pistachioL: '#eff8d4',\r\n    pistachioLT: 'hsl(80,15%,77%)',\r\n    red: '#dd1b1b',\r\n    black06: 'rgba(0, 0, 0, 0.6)',\r\n    black03: 'rgba(0, 0, 0, 0.3)',\r\n};\r\nexports.default = colors;\r\n\n\n//# sourceURL=webpack:///./src/utils/enums/colors.ts?");

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

/***/ "@mui/icons-material":
/*!**************************************!*\
  !*** external "@mui/icons-material" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material%22?");

/***/ }),

/***/ "@mui/icons-material/ArrowForwardOutlined":
/*!***********************************************************!*\
  !*** external "@mui/icons-material/ArrowForwardOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/ArrowForwardOutlined\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/ArrowForwardOutlined%22?");

/***/ }),

/***/ "@mui/icons-material/ContactsOutlined":
/*!*******************************************************!*\
  !*** external "@mui/icons-material/ContactsOutlined" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/ContactsOutlined\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/ContactsOutlined%22?");

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

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Box\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Box%22?");

/***/ }),

/***/ "@mui/material/CircularProgress":
/*!*************************************************!*\
  !*** external "@mui/material/CircularProgress" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/CircularProgress\");\n\n//# sourceURL=webpack:///external_%22@mui/material/CircularProgress%22?");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Container\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Container%22?");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/styles\");\n\n//# sourceURL=webpack:///external_%22@mui/material/styles%22?");

/***/ }),

/***/ "@mui/styles":
/*!******************************!*\
  !*** external "@mui/styles" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/styles\");\n\n//# sourceURL=webpack:///external_%22@mui/styles%22?");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

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

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zustand\");\n\n//# sourceURL=webpack:///external_%22zustand%22?");

/***/ }),

/***/ "zustand/shallow":
/*!**********************************!*\
  !*** external "zustand/shallow" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zustand/shallow\");\n\n//# sourceURL=webpack:///external_%22zustand/shallow%22?");

/***/ })

/******/ });