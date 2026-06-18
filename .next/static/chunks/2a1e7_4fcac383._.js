(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/growve_logistic_website/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/styled-engine/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$useTheme$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/useTheme/useTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function createBox() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { themeId, defaultTheme, defaultClassName = 'MuiBox-root', generateClassName } = options;
    const BoxRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('div', {
        shouldForwardProp: (prop)=>prop !== 'theme' && prop !== 'sx' && prop !== 'as'
    })(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const Box = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Box(inProps, ref) {
        const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$useTheme$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultTheme);
        const { className, component = 'div', ...other } = inProps;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoxRoot, {
            as: component,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
            theme: themeId ? theme[themeId] || theme : theme,
            ...other
        });
    });
    return Box;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript) <export default as createBox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createBox$2f$createBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createBox$2f$createBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript)");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs [app-client] (ecmascript) <export default as unstable_ClassNameGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ClassNameGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs [app-client] (ecmascript)");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>generateUtilityClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
function generateUtilityClasses(componentName, slots) {
    let globalStatePrefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Mui';
    const result = {};
    slots.forEach((slot)=>{
        result[slot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(componentName, slot, globalStatePrefix);
    });
    return result;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/Box/boxClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
;
const boxClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiBox', [
    'root'
]);
const __TURBOPACK__default__export__ = boxClasses;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createBox$2f$createBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createBox$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript) <export default as createBox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ClassNameGenerator$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs [app-client] (ecmascript) <export default as unstable_ClassNameGenerator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/createTheme.mjs [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/identifier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$boxClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/Box/boxClasses.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])();
const Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createBox$2f$createBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createBox$3e$__["createBox"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    defaultTheme,
    defaultClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$boxClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root,
    generateClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_ClassNameGenerator$3e$__["unstable_ClassNameGenerator"].generate
});
("TURBOPACK compile-time truthy", 1) ? Box.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * @ignore
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Box;
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */ /**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */ __turbopack_context__.s([
    "default",
    ()=>composeClasses
]);
function composeClasses(slots, getUtilityClass) {
    let classes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : undefined;
    const output = {};
    for(const slotName in slots){
        const slot = slots[slotName];
        let buffer = '';
        let start = true;
        for(let i = 0; i < slot.length; i += 1){
            const value = slot[i];
            if (value) {
                buffer += (start === true ? '' : ' ') + getUtilityClass(value);
                start = false;
                if (classes && classes[value]) {
                    buffer += ' ' + classes[value];
                }
            }
        }
        output[slotName] = buffer;
    }
    return output;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useId.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useId$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useId/useId.mjs [app-client] (ecmascript)");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useId$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useId.mjs [app-client] (ecmascript) <export default as unstable_useId>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_useId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useId.mjs [app-client] (ecmascript)");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/slotShouldForwardProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// copied from @mui/system/createStyled
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const __TURBOPACK__default__export__ = slotShouldForwardProp;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/rootShouldForwardProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$slotShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/slotShouldForwardProp.mjs [app-client] (ecmascript)");
;
const rootShouldForwardProp = (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$slotShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop) && prop !== 'classes';
const __TURBOPACK__default__export__ = rootShouldForwardProp;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/getDisplayName/getDisplayName.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getDisplayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/react-is/index.js [app-client] (ecmascript)");
;
function getFunctionComponentName(Component) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch(Component.$$typeof){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForwardRef"]:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Memo"]:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/system/preprocessStyles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>preprocessStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/styled-engine/index.mjs [app-client] (ecmascript) <locals>");
;
function preprocessStyles(input) {
    const { variants, ...style } = input;
    const result = {
        variants,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(style),
        isProcessed: true
    };
    // Not supported on styled-components
    if (result.style === style) {
        return result;
    }
    if (variants) {
        variants.forEach((variant)=>{
            if (typeof variant.style !== 'function') {
                variant.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style);
            }
        });
    }
    return result;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/system/createStyled/createStyled.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createStyled,
    "shouldForwardProp",
    ()=>shouldForwardProp,
    "systemDefaultTheme",
    ()=>systemDefaultTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/styled-engine/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$isObjectEmpty$2f$isObjectEmpty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$deepmerge$2f$deepmerge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/deepmerge/deepmerge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$capitalize$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/capitalize/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$getDisplayName$2f$getDisplayName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/getDisplayName/getDisplayName.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createTheme$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/createTheme/createTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$preprocessStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/preprocessStyles.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const systemDefaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createTheme$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function shallowLayer(serialized, layerName) {
    if (layerName && serialized && typeof serialized === 'object' && serialized.styles && !serialized.styles.startsWith('@layer') // only add the layer if it is not already there.
    ) {
        serialized.styles = "@layer ".concat(layerName, "{").concat(String(serialized.styles), "}");
    }
    return serialized;
}
function defaultOverridesResolver(slot) {
    if (!slot) {
        return null;
    }
    return (_props, styles)=>styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
    props.theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$isObjectEmpty$2f$isObjectEmpty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style, layerName) {
    /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */ const resolvedStyle = typeof style === 'function' ? style(props) : style;
    if (Array.isArray(resolvedStyle)) {
        return resolvedStyle.flatMap((subStyle)=>processStyle(props, subStyle, layerName));
    }
    if (Array.isArray(resolvedStyle === null || resolvedStyle === void 0 ? void 0 : resolvedStyle.variants)) {
        let rootStyle;
        if (resolvedStyle.isProcessed) {
            rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
        } else {
            const { variants, ...otherStyles } = resolvedStyle;
            rootStyle = layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(otherStyles), layerName) : otherStyles;
        }
        return processStyleVariants(props, resolvedStyle.variants, [
            rootStyle
        ], layerName);
    }
    if (resolvedStyle === null || resolvedStyle === void 0 ? void 0 : resolvedStyle.isProcessed) {
        return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle.style), layerName) : resolvedStyle.style;
    }
    return layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants) {
    let results = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], layerName = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : undefined;
    let mergedState; // We might not need it, initialized lazily
    variantLoop: for(let i = 0; i < variants.length; i += 1){
        const variant = variants[i];
        if (typeof variant.props === 'function') {
            mergedState !== null && mergedState !== void 0 ? mergedState : mergedState = {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            if (!variant.props(mergedState)) {
                continue;
            }
        } else {
            for(const key in variant.props){
                var _props_ownerState;
                if (props[key] !== variant.props[key] && ((_props_ownerState = props.ownerState) === null || _props_ownerState === void 0 ? void 0 : _props_ownerState[key]) !== variant.props[key]) {
                    continue variantLoop;
                }
            }
        }
        if (typeof variant.style === 'function') {
            mergedState !== null && mergedState !== void 0 ? mergedState : mergedState = {
                ...props,
                ...props.ownerState,
                ownerState: props.ownerState
            };
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style(mergedState)), layerName) : variant.style(mergedState));
        } else {
            results.push(layerName ? shallowLayer((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_serializeStyles"])(variant.style), layerName) : variant.style);
        }
    }
    return results;
}
function createStyled() {
    let input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { themeId, defaultTheme = systemDefaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    function styleAttachTheme(props) {
        attachTheme(props, themeId, defaultTheme);
    }
    const styled = function(tag) {
        let inputOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        // If `tag` is already a styled component, filter out the `sx` style function
        // to prevent unnecessary styles generated by the composite components.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["internal_mutateStyles"])(tag, (styles)=>styles.filter((style)=>style !== __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]));
        const { name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)), ...options } = inputOptions;
        const layerName = componentName && componentName.startsWith('Mui') || !!componentSlot ? 'components' : 'custom';
        // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
        const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
        const skipSx = inputSkipSx || false;
        let shouldForwardPropOption = shouldForwardProp;
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        if (componentSlot === 'Root' || componentSlot === 'root') {
            shouldForwardPropOption = rootShouldForwardProp;
        } else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        } else if (isStringTag(tag)) {
            // for string (html) tag, preserve the behavior in emotion & styled-components.
            shouldForwardPropOption = undefined;
        }
        const defaultStyledResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(tag, {
            shouldForwardProp: shouldForwardPropOption,
            label: generateStyledLabel(componentName, componentSlot),
            ...options
        });
        const transformStyle = (style)=>{
            // - On the server Emotion doesn't use React.forwardRef for creating components, so the created
            //   component stays as a function. This condition makes sure that we do not interpolate functions
            //   which are basically components used as a selectors.
            // - `style` could be a styled component from a babel plugin for component selectors, This condition
            //   makes sure that we do not interpolate them.
            if (style.__emotion_real === style) {
                return style;
            }
            if (typeof style === 'function') {
                return function styleFunctionProcessor(props) {
                    return processStyle(props, style, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$deepmerge$2f$deepmerge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(style)) {
                const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$preprocessStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(style);
                return function styleObjectProcessor(props) {
                    if (!serialized.variants) {
                        return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
                    }
                    return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : undefined);
                };
            }
            return style;
        };
        const muiStyledResolver = function() {
            for(var _len = arguments.length, expressionsInput = new Array(_len), _key = 0; _key < _len; _key++){
                expressionsInput[_key] = arguments[_key];
            }
            const expressionsHead = [];
            const expressionsBody = expressionsInput.map(transformStyle);
            const expressionsTail = [];
            // Preprocess `props` to set the scoped theme value.
            // This must run before any other expression.
            expressionsHead.push(styleAttachTheme);
            if (componentName && overridesResolver) {
                expressionsTail.push(function styleThemeOverrides(props) {
                    var _theme_components_componentName, _theme_components;
                    const theme = props.theme;
                    const styleOverrides = (_theme_components = theme.components) === null || _theme_components === void 0 ? void 0 : (_theme_components_componentName = _theme_components[componentName]) === null || _theme_components_componentName === void 0 ? void 0 : _theme_components_componentName.styleOverrides;
                    if (!styleOverrides) {
                        return null;
                    }
                    const resolvedStyleOverrides = {};
                    // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
                    // eslint-disable-next-line guard-for-in
                    for(const slotKey in styleOverrides){
                        resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? 'theme' : undefined);
                    }
                    return overridesResolver(props, resolvedStyleOverrides);
                });
            }
            if (componentName && !skipVariantsResolver) {
                expressionsTail.push(function styleThemeVariants(props) {
                    var _theme_components_componentName, _theme_components;
                    const theme = props.theme;
                    const themeVariants = theme === null || theme === void 0 ? void 0 : (_theme_components = theme.components) === null || _theme_components === void 0 ? void 0 : (_theme_components_componentName = _theme_components[componentName]) === null || _theme_components_componentName === void 0 ? void 0 : _theme_components_componentName.variants;
                    if (!themeVariants) {
                        return null;
                    }
                    return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? 'theme' : undefined);
                });
            }
            if (!skipSx) {
                expressionsTail.push(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            }
            // This function can be called as a tagged template, so the first argument would contain
            // CSS `string[]` values.
            if (Array.isArray(expressionsBody[0])) {
                const inputStrings = expressionsBody.shift();
                // We need to add placeholders in the tagged template for the custom functions we have
                // possibly added (attachTheme, overrides, variants, and sx).
                const placeholdersHead = new Array(expressionsHead.length).fill('');
                const placeholdersTail = new Array(expressionsTail.length).fill('');
                let outputStrings;
                // prettier-ignore
                {
                    outputStrings = [
                        ...placeholdersHead,
                        ...inputStrings,
                        ...placeholdersTail
                    ];
                    outputStrings.raw = [
                        ...placeholdersHead,
                        ...inputStrings.raw,
                        ...placeholdersTail
                    ];
                }
                // The only case where we put something before `attachTheme`
                expressionsHead.unshift(outputStrings);
            }
            const expressions = [
                ...expressionsHead,
                ...expressionsBody,
                ...expressionsTail
            ];
            const Component = defaultStyledResolver(...expressions);
            if (tag.muiName) {
                Component.muiName = tag.muiName;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                Component.displayName = generateDisplayName(componentName, componentSlot, tag);
            }
            return Component;
        };
        if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
        }
        return muiStyledResolver;
    };
    return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
    if (componentName) {
        return "".concat(componentName).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$capitalize$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(componentSlot || ''));
    }
    return "Styled(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$getDisplayName$2f$getDisplayName$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tag), ")");
}
function generateStyledLabel(componentName, componentSlot) {
    let label;
    if ("TURBOPACK compile-time truthy", 1) {
        if (componentName) {
            // TODO v6: remove `lowercaseFirstLetter()` in the next major release
            // For more details: https://github.com/mui/material-ui/pull/37908
            label = "".concat(componentName, "-").concat(lowercaseFirstLetter(componentSlot || 'Root'));
        }
    }
    return label;
}
// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
    if (!string) {
        return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createStyled$2f$createStyled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/createStyled/createStyled.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/defaultTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/identifier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/rootShouldForwardProp.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$createStyled$2f$createStyled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    defaultTheme: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$defaultTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    rootShouldForwardProp: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = styled;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals>");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/system/memoTheme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unstable_memoTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$preprocessStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/preprocessStyles.mjs [app-client] (ecmascript)");
;
/* eslint-disable @typescript-eslint/naming-convention */ // We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
const arg = {
    theme: undefined
};
function unstable_memoTheme(styleFn) {
    let lastValue;
    let lastTheme;
    return function styleMemoized(props) {
        let value = lastValue;
        if (value === undefined || props.theme !== lastTheme) {
            arg.theme = props.theme;
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$preprocessStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(styleFn(arg));
            lastValue = value;
            lastTheme = props.theme;
        }
        return value;
    };
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/system/memoTheme.mjs [app-client] (ecmascript) <export default as unstable_memoTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_memoTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/memoTheme.mjs [app-client] (ecmascript)");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_memoTheme$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/system/memoTheme.mjs [app-client] (ecmascript) <export default as unstable_memoTheme>");
;
const memoTheme = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$system$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_memoTheme$3e$__["unstable_memoTheme"];
const __TURBOPACK__default__export__ = memoTheme;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/refType/refType.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)");
;
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof propValue === 'function' && !isClassComponent(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (propValue === __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
        warningHint = 'Did you accidentally provide a React.Fragment instead?';
    }
    if (warningHint !== undefined) {
        // #host-reference
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ __turbopack_context__.s([
    "default",
    ()=>isFocusVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useForkRef/useForkRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useForkRef() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useForkRef.useCallback[refEffect]": (instance)=>{
            const cleanups = refs.map({
                "useForkRef.useCallback[refEffect].cleanups": (ref)=>{
                    if (ref == null) {
                        return null;
                    }
                    if (typeof ref === 'function') {
                        const refCallback = ref;
                        const refCleanup = refCallback(instance);
                        return typeof refCleanup === 'function' ? refCleanup : ({
                            "useForkRef.useCallback[refEffect].cleanups": ()=>{
                                refCallback(null);
                            }
                        })["useForkRef.useCallback[refEffect].cleanups"];
                    }
                    ref.current = instance;
                    return ({
                        "useForkRef.useCallback[refEffect].cleanups": ()=>{
                            ref.current = null;
                        }
                    })["useForkRef.useCallback[refEffect].cleanups"];
                }
            }["useForkRef.useCallback[refEffect].cleanups"]);
            return ({
                "useForkRef.useCallback[refEffect]": ()=>{
                    cleanups.forEach({
                        "useForkRef.useCallback[refEffect]": (refCleanup)=>refCleanup === null || refCleanup === void 0 ? void 0 : refCleanup()
                    }["useForkRef.useCallback[refEffect]"]);
                }
            })["useForkRef.useCallback[refEffect]"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useCallback[refEffect]"], refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForkRef.useMemo": ()=>{
            if (refs.every({
                "useForkRef.useMemo": (ref)=>ref == null
            }["useForkRef.useMemo"])) {
                return null;
            }
            return ({
                "useForkRef.useMemo": (value)=>{
                    if (cleanupRef.current) {
                        cleanupRef.current();
                        cleanupRef.current = undefined;
                    }
                    if (value != null) {
                        cleanupRef.current = refEffect(value);
                    }
                }
            })["useForkRef.useMemo"];
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useForkRef.useMemo"], refs);
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useForkRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useForkRef/useForkRef.mjs [app-client] (ecmascript)");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useEventCallback/useEventCallback.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs [app-client] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useEventCallback.useEnhancedEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useEnhancedEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "useEventCallback.useRef": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return(// @ts-expect-error hide `this`
            (0, ref.current)(...args));
        }
    }["useEventCallback.useRef"]).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useEventCallback.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useEventCallback$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useEventCallback/useEventCallback.mjs [app-client] (ecmascript)");
'use client';
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useEventCallback$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFocusableWhenDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useFocusableWhenDisabled(parameters) {
    const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    // we can't explicitly assign `undefined` to any of these props because it
    // would otherwise prevent subsequently merged props from setting them
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFocusableWhenDisabled.useMemo[props]": ()=>{
            const additionalProps = {
                // allow Tabbing away from focusableWhenDisabled elements
                onKeyDown (event) {
                    if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
                        event.preventDefault();
                    }
                }
            };
            if (!composite) {
                additionalProps.tabIndex = tabIndexProp;
                if (!isNativeButton && disabled) {
                    additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
                }
            }
            if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
                additionalProps['aria-disabled'] = disabled;
            }
            if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
                additionalProps.disabled = disabled;
            }
            return additionalProps;
        }
    }["useFocusableWhenDisabled.useMemo[props]"], [
        composite,
        disabled,
        focusableWhenDisabled,
        isFocusableComposite,
        isNonFocusableComposite,
        isNativeButton,
        tabIndexProp
    ]);
    return props;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/useButtonBase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useButtonBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useFocusableWhenDisabled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs [app-client] (ecmascript)");
'use client';
;
;
const EMPTY = {};
function useButtonBase(parameters) {
    const { nativeButton, nativeButtonProp, internalNativeButton = nativeButton, allowInferredHostMismatch = false, disabled, type, hasFormAction = false, tabIndex = 0, focusableWhenDisabled: focusableWhenDisabledParam, stopEventPropagation = false, onBeforeKeyDown, onBeforeKeyUp } = parameters;
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const focusableWhenDisabled = focusableWhenDisabledParam === true;
    const focusableWhenDisabledProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useFocusableWhenDisabled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        focusableWhenDisabled,
        disabled,
        isNativeButton: nativeButton,
        tabIndex
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useButtonBase.useEffect": ()=>{
                const root = rootRef.current;
                if (root == null) {
                    return;
                }
                const isButtonTag = root.tagName === 'BUTTON';
                if (nativeButtonProp !== undefined) {
                    if (nativeButtonProp && !isButtonTag) {
                        const message = 'MUI: A component that acts as a button expected a native <button> because the ' + '`nativeButton` prop is true. Rendering a non-<button> removes native button ' + 'semantics, which can impact forms and accessibility. Render a real <button> ' + 'or set `nativeButton` to `false`.';
                        console.error(message);
                    }
                    if (!nativeButtonProp && isButtonTag) {
                        const message = 'MUI: A component that acts as a button expected a non-<button> because the `nativeButton` ' + 'prop is false. Rendering a <button> keeps native behavior while additionally applies ' + 'non-native attributes and handlers, which can add unintended extra attributes (such ' + 'as `role` or `aria-disabled`). Render a non-<button> such as <div>, or set ' + '`nativeButton` to `true`.';
                        console.error(message);
                    }
                    return;
                }
                if (allowInferredHostMismatch) {
                    return;
                }
                // warn when expecting a native <button> element but a non-string `component` prop resolved to a non-button element
                if (internalNativeButton && !isButtonTag) {
                    const message = 'MUI: A component rendering a native <button> resolved to a non-<button> element, ' + 'but `nativeButton={false}` was not specified and the resolved root is a non-<button>. ' + 'When rendering a custom component, set `nativeButton={false}` explicitly or render a <button> element.';
                    console.error(message);
                }
                // warn when expecting a non-button but a non-string `component` prop resolved to a native <button> element
                if (!internalNativeButton && isButtonTag) {
                    const message = 'MUI: A component that acts as a non-native button resolved to a native <button> element, ' + 'but `nativeButton={true}` was not specified. ' + 'When rendering a custom component, set `nativeButton={true}` explicitly or render a non-<button> element.';
                    console.error(message);
                }
            }
        }["useButtonBase.useEffect"], [
            allowInferredHostMismatch,
            internalNativeButton,
            nativeButtonProp
        ]);
    }
    // A helper for event handlers to determine whether to use browser-defined keyboard activation
    // for native elements like <button> and <a href>, or synthesize Enter/Space clicks for non-native
    // elements like `<div role="button">`.
    // This is UNSAFE TO USE outside of event handers, e.g. in render.
    const hasNativeKeyboardActivation = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButtonBase.useCallback[hasNativeKeyboardActivation]": ()=>{
            const root = rootRef.current;
            if (root == null) {
                return nativeButton;
            }
            if (root.tagName === 'BUTTON') {
                return true;
            }
            // Although this hook is not intended for links, this check is for
            // backward compatibility with `<ButtonBase href="#" />` since ButtonBase
            // uses the returned event handlers.
            return Boolean(root.tagName === 'A' && root.href);
        }
    }["useButtonBase.useCallback[hasNativeKeyboardActivation]"], [
        nativeButton
    ]);
    const buttonProps = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useButtonBase.useMemo[buttonProps]": ()=>{
            const resolvedButtonProps = focusableWhenDisabled ? {} : {
                tabIndex: disabled ? -1 : tabIndex
            };
            if (nativeButton) {
                resolvedButtonProps.type = type === undefined && !hasFormAction ? 'button' : type;
                if (!focusableWhenDisabled) {
                    resolvedButtonProps.disabled = disabled;
                }
            } else {
                resolvedButtonProps.role = 'button';
                if (!focusableWhenDisabled && disabled) {
                    resolvedButtonProps['aria-disabled'] = disabled;
                }
            }
            if (focusableWhenDisabled) {
                return {
                    ...resolvedButtonProps,
                    ...focusableWhenDisabledProps
                };
            }
            return resolvedButtonProps;
        }
    }["useButtonBase.useMemo[buttonProps]"], [
        disabled,
        focusableWhenDisabled,
        focusableWhenDisabledProps,
        hasFormAction,
        nativeButton,
        tabIndex,
        type
    ]);
    const getButtonProps = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButtonBase.useCallback[getButtonProps]": function() {
            let externalProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY;
            const { onClick: externalOnClick, onKeyDown: externalOnKeyDown, onKeyUp: externalOnKeyUp, ...otherExternalProps } = externalProps;
            const handleClick = {
                "useButtonBase.useCallback[getButtonProps].handleClick": (event)=>{
                    if (stopEventPropagation) {
                        event.stopPropagation();
                    }
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnClick === null || externalOnClick === void 0 ? void 0 : externalOnClick(event);
                }
            }["useButtonBase.useCallback[getButtonProps].handleClick"];
            const handleKeyDown = {
                "useButtonBase.useCallback[getButtonProps].handleKeyDown": (event)=>{
                    if (focusableWhenDisabled) {
                        focusableWhenDisabledProps.onKeyDown(event);
                    }
                    if (disabled) {
                        return;
                    }
                    onBeforeKeyDown === null || onBeforeKeyDown === void 0 ? void 0 : onBeforeKeyDown(event);
                    externalOnKeyDown === null || externalOnKeyDown === void 0 ? void 0 : externalOnKeyDown(event);
                    if (event.target !== event.currentTarget || hasNativeKeyboardActivation()) {
                        return;
                    }
                    if (event.key === ' ') {
                        event.preventDefault();
                        return;
                    }
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        event.currentTarget.click();
                    }
                }
            }["useButtonBase.useCallback[getButtonProps].handleKeyDown"];
            const handleKeyUp = {
                "useButtonBase.useCallback[getButtonProps].handleKeyUp": (event)=>{
                    if (disabled) {
                        return;
                    }
                    onBeforeKeyUp === null || onBeforeKeyUp === void 0 ? void 0 : onBeforeKeyUp(event);
                    externalOnKeyUp === null || externalOnKeyUp === void 0 ? void 0 : externalOnKeyUp(event);
                    if (event.target === event.currentTarget && !hasNativeKeyboardActivation() && event.key === ' ' && !event.defaultPrevented) {
                        event.currentTarget.click();
                    }
                }
            }["useButtonBase.useCallback[getButtonProps].handleKeyUp"];
            return {
                ...buttonProps,
                ...otherExternalProps,
                onClick: handleClick,
                onKeyDown: handleKeyDown,
                onKeyUp: handleKeyUp
            };
        }
    }["useButtonBase.useCallback[getButtonProps]"], [
        buttonProps,
        disabled,
        focusableWhenDisabled,
        focusableWhenDisabledProps,
        hasNativeKeyboardActivation,
        onBeforeKeyDown,
        onBeforeKeyUp,
        stopEventPropagation
    ]);
    return {
        getButtonProps,
        rootRef
    };
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyRipple",
    ()=>LazyRipple,
    "default",
    ()=>useLazyRipple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs [app-client] (ecmascript)");
'use client';
;
;
;
class LazyRipple {
    /** React ref to the ripple instance */ /** If the ripple component should be mounted */ /** Promise that resolves when the ripple component is mounted */ /** If the ripple component has been mounted */ /** React state hook setter */ static create() {
        return new LazyRipple();
    }
    static use() {
        /* eslint-disable */ const ripple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(LazyRipple.create).current;
        const [shouldMount, setShouldMount] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
        ripple.shouldMount = shouldMount;
        ripple.setShouldMount = setShouldMount;
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](ripple.mountEffect, [
            shouldMount
        ]);
        /* eslint-enable */ return ripple;
    }
    mount() {
        if (!this.mounted) {
            this.mounted = createControlledPromise();
            this.shouldMount = true;
            this.setShouldMount(this.shouldMount);
        }
        return this.mounted;
    }
    /* Ripple API */ start() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.start(...args);
        });
    }
    stop() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.stop(...args);
        });
    }
    pulsate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.pulsate(...args);
        });
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "mountEffect", ()=>{
            if (this.shouldMount && !this.didMount) {
                if (this.ref.current !== null) {
                    this.didMount = true;
                    this.mounted.resolve();
                }
            }
        });
        this.ref = {
            current: null
        };
        this.mounted = null;
        this.didMount = false;
        this.shouldMount = false;
        this.setShouldMount = null;
    }
}
function useLazyRipple() {
    return LazyRipple.use();
}
function createControlledPromise() {
    let resolve;
    let reject;
    const p = new Promise((resolveFn, rejectFn)=>{
        resolve = resolveFn;
        reject = rejectFn;
    });
    p.resolve = resolve;
    p.reject = reject;
    return p;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_tagged_template_literal
]);
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useOnMount/useOnMount.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useTimeout/useTimeout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeout",
    ()=>Timeout,
    "default",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useOnMount$2f$useOnMount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useOnMount/useOnMount.mjs [app-client] (ecmascript)");
'use client';
;
;
;
class Timeout {
    static create() {
        return new Timeout();
    }
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentId", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "clear", ()=>{
            if (this.currentId !== null) {
                clearTimeout(this.currentId);
                this.currentId = null;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "disposeEffect", ()=>{
            return this.clear;
        });
    }
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Timeout.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useOnMount$2f$useOnMount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/useTheme.mjs [app-client] (ecmascript) <export default as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/useTheme.mjs [app-client] (ecmascript)");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/Ripple.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useTimeout$2f$useTimeout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useTimeout/useTimeout.mjs [app-client] (ecmascript)");
/**
 * @ignore - internal component.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Ripple(props) {
    const { className, classes, pulsate = false, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout } = props;
    const [leaving, setLeaving] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const exitTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useTimeout$2f$useTimeout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const exitTimerStartedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const onExitedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](onExited);
    onExitedRef.current = onExited;
    const hasExitedCallback = onExited != null;
    const rippleClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
    };
    const childClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
        setLeaving(true);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Ripple.useEffect": ()=>{
            if (!inProp && hasExitedCallback) {
                if (!exitTimerStartedRef.current) {
                    exitTimerStartedRef.current = true;
                    exitTimer.start(timeout, {
                        "Ripple.useEffect": ()=>{
                            var _onExitedRef_current;
                            exitTimerStartedRef.current = false;
                            (_onExitedRef_current = onExitedRef.current) === null || _onExitedRef_current === void 0 ? void 0 : _onExitedRef_current.call(onExitedRef);
                        }
                    }["Ripple.useEffect"]);
                }
            } else {
                exitTimerStartedRef.current = false;
                exitTimer.clear();
            }
        }
    }["Ripple.useEffect"], [
        exitTimer,
        hasExitedCallback,
        inProp,
        timeout
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: rippleClassName,
        style: rippleStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className: childClassName
        })
    });
}
("TURBOPACK compile-time truthy", 1) ? Ripple.propTypes = {
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore - controlled by TouchRipple
   */ in: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore - controlled by TouchRipple
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */ pulsate: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Diameter of the ripple.
   */ rippleSize: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Horizontal position of the ripple center.
   */ rippleX: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Vertical position of the ripple center.
   */ rippleY: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Exit delay.
   */ timeout: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number.isRequired
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Ripple;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTouchRippleUtilityClass",
    ()=>getTouchRippleUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getTouchRippleUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTouchRipple', slot);
}
const touchRippleClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
]);
const __TURBOPACK__default__export__ = touchRippleClasses;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/transitions/useReducedMotion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs [app-client] (ecmascript)");
'use client';
;
;
const MEDIA_QUERY = '(prefers-reduced-motion: reduce)';
const REDUCED_MOTION_DURATION = 0;
const REDUCED_MOTION_DELAY = '0ms';
const NOOP = ()=>{};
const getDefaultSnapshot = ()=>false;
const getReducedMotionSnapshot = ()=>true;
const subscribeNoop = ()=>NOOP;
/**
 * Subscribes to the OS reduced-motion media query only when the theme mode needs it.
 * React 17 reads the media query after mount, matching useMediaQuery's fallback path.
 */ function useReducedMotionMediaQueryOld(enabled) {
    const [queryState, setQueryState] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "useReducedMotionMediaQueryOld.useState": ()=>({
                enabled,
                matches: enabled ? null : false
            })
    }["useReducedMotionMediaQueryOld.useState"]);
    let matches = queryState.matches;
    if (queryState.enabled !== enabled) {
        matches = null;
        if (!enabled) {
            matches = false;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useReducedMotionMediaQueryOld.useEnhancedEffect": ()=>{
            const setResolvedMatches = {
                "useReducedMotionMediaQueryOld.useEnhancedEffect.setResolvedMatches": (nextMatches)=>{
                    setQueryState({
                        "useReducedMotionMediaQueryOld.useEnhancedEffect.setResolvedMatches": (previousState)=>{
                            if (previousState.enabled === enabled && previousState.matches === nextMatches) {
                                return previousState;
                            }
                            return {
                                enabled,
                                matches: nextMatches
                            };
                        }
                    }["useReducedMotionMediaQueryOld.useEnhancedEffect.setResolvedMatches"]);
                }
            }["useReducedMotionMediaQueryOld.useEnhancedEffect.setResolvedMatches"];
            if (!enabled) {
                if (queryState.enabled) {
                    setResolvedMatches(false);
                }
                return undefined;
            }
            if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
                setResolvedMatches(false);
                return undefined;
            }
            const mediaQueryList = window.matchMedia(MEDIA_QUERY);
            const update = {
                "useReducedMotionMediaQueryOld.useEnhancedEffect.update": ()=>{
                    setResolvedMatches(mediaQueryList.matches);
                }
            }["useReducedMotionMediaQueryOld.useEnhancedEffect.update"];
            update();
            mediaQueryList.addEventListener('change', update);
            return ({
                "useReducedMotionMediaQueryOld.useEnhancedEffect": ()=>{
                    mediaQueryList.removeEventListener('change', update);
                }
            })["useReducedMotionMediaQueryOld.useEnhancedEffect"];
        }
    }["useReducedMotionMediaQueryOld.useEnhancedEffect"], [
        enabled,
        queryState.enabled
    ]);
    return matches;
}
// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
const maybeReactUseSyncExternalStore = safeReact.useSyncExternalStore;
/**
 * React 18+ can read the media query during client renders, so newly mounted
 * transitions do not start from the SSR-safe reduced-motion default.
 */ function useReducedMotionMediaQueryNew(enabled) {
    const getServerSnapshot = enabled ? getReducedMotionSnapshot : getDefaultSnapshot;
    const [getSnapshot, subscribe] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useReducedMotionMediaQueryNew.useMemo": ()=>{
            if (!enabled || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
                return [
                    getDefaultSnapshot,
                    subscribeNoop
                ];
            }
            const mediaQueryList = window.matchMedia(MEDIA_QUERY);
            return [
                {
                    "useReducedMotionMediaQueryNew.useMemo": ()=>mediaQueryList.matches
                }["useReducedMotionMediaQueryNew.useMemo"],
                {
                    "useReducedMotionMediaQueryNew.useMemo": (notify)=>{
                        mediaQueryList.addEventListener('change', notify);
                        return ({
                            "useReducedMotionMediaQueryNew.useMemo": ()=>{
                                mediaQueryList.removeEventListener('change', notify);
                            }
                        })["useReducedMotionMediaQueryNew.useMemo"];
                    }
                }["useReducedMotionMediaQueryNew.useMemo"]
            ];
        }
    }["useReducedMotionMediaQueryNew.useMemo"], [
        enabled
    ]);
    return maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
const useReducedMotionMediaQuery = maybeReactUseSyncExternalStore !== undefined ? useReducedMotionMediaQueryNew : useReducedMotionMediaQueryOld;
function useReducedMotion(mode, disablePrefersReducedMotion) {
    const prefersReducedMotion = useReducedMotionMediaQuery(!disablePrefersReducedMotion && mode === 'system');
    const shouldReduceMotion = !disablePrefersReducedMotion && (mode === 'always' || mode === 'system' && prefersReducedMotion !== false);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useReducedMotion.useMemo": ()=>({
                shouldReduceMotion,
                getTransitionTiming (timing) {
                    if (!shouldReduceMotion) {
                        return timing;
                    }
                    return {
                        duration: REDUCED_MOTION_DURATION,
                        delay: REDUCED_MOTION_DELAY
                    };
                }
            })
    }["useReducedMotion.useMemo"], [
        shouldReduceMotion
    ]);
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/TouchRipple.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELAY_RIPPLE",
    ()=>DELAY_RIPPLE,
    "TouchRippleRipple",
    ()=>TouchRippleRipple,
    "TouchRippleRoot",
    ()=>TouchRippleRoot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useOnMount$2f$useOnMount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useOnMount/useOnMount.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useTimeout$2f$useTimeout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/useTimeout/useTimeout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/useTheme.mjs [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$Ripple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/Ripple.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useEventCallback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$useReducedMotion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/transitions/useReducedMotion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    &.",
        " {\n      animation-name: ",
        ";\n      animation-duration: ",
        "ms;\n      animation-timing-function: ",
        ";\n    }\n\n    &.",
        " {\n      animation-duration: ",
        "ms;\n    }\n\n    & .",
        " {\n      animation-name: ",
        ";\n      animation-duration: ",
        "ms;\n      animation-timing-function: ",
        ";\n    }\n\n    & .",
        " {\n      animation-name: ",
        ";\n      animation-duration: 2500ms;\n      animation-timing-function: ",
        ";\n      animation-iteration-count: infinite;\n      animation-delay: 200ms;\n    }\n  "
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      @media (prefers-reduced-motion: no-preference) {\n        ",
        "\n      }\n    "
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  opacity: 0;\n  position: absolute;\n\n  &.",
        " {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n\n  /*\n   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same\n   * element with equal specificity, so the later rule wins. 'child' must come\n   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus\n   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so\n   * it relies on this static 'opacity: 0' to disappear on blur instead of\n   * lingering until removal.\n   */\n  & .",
        " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .",
        " {\n    opacity: 0;\n  }\n\n  & .",
        " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n  }\n\n  ",
        "\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
;
;
;
;
;
;
;
;
;
;
;
;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const EMPTY_OBJ = {};
const EMPTY_ARRAY = [];
const NOOP = ()=>{};
/**
 * Keep the same DOM order TouchRipple had when it used react-transition-group:
 * exiting ripples stay in place, and new ripples are inserted before the final
 * group of ripples that are waiting for their exit animation to finish.
 *
 * @param {number[]} prevOrder The previous DOM order, including ripples that may be exiting.
 * @param {number[]} nextActiveKeys The ripples that should still be treated as active.
 * @returns {number[]} The next DOM order, preserving the position of exiting ripples where possible.
 */ function mergeRippleOrder(prevOrder, nextActiveKeys) {
    const nextKeySet = new Set(nextActiveKeys);
    const nextKeysPending = new Map();
    let pendingKeys = [];
    for (const prevKey of prevOrder){
        if (nextKeySet.has(prevKey)) {
            if (pendingKeys.length > 0) {
                nextKeysPending.set(prevKey, pendingKeys);
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    const nextOrder = [];
    for (const nextKey of nextActiveKeys){
        const pendingBefore = nextKeysPending.get(nextKey);
        if (pendingBefore) {
            nextOrder.push(...pendingBefore);
        }
        nextOrder.push(nextKey);
    }
    nextOrder.push(...pendingKeys);
    return nextOrder;
}
/**
 * Calculate where the ripple should start and how large it must be to cover the host element.
 *
 * @param {object} params
 * @param {object} params.event The mouse or touch event that started the ripple.
 * @param {HTMLElement | null} params.element The host element used for measurements. Tests pass `null`.
 * @param {boolean} params.center If `true`, start the ripple from the center of the host element.
 * @returns {{ rippleX: number, rippleY: number, rippleSize: number }} The ripple position and size.
 */ function computeRippleState(param) {
    let { event, element, center } = param;
    const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
    };
    let rippleX;
    let rippleY;
    if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
    } else {
        const { clientX, clientY } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
    }
    let rippleSize;
    if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
        // Mobile Chrome can skip this animation for even pixel sizes.
        if (rippleSize % 2 === 0) {
            rippleSize += 1;
        }
    } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    return {
        rippleX,
        rippleY,
        rippleSize
    };
}
const enterKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_templateObject());
const exitKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_templateObject1());
const pulsateKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_templateObject2());
function getAnimationStyles(theme) {
    if (theme.motion.reducedMotion === 'always') {
        return null;
    }
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])(_templateObject3(), __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rippleVisible, enterKeyframe, DURATION, theme.transitions.easing.easeInOut, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ripplePulsate, theme.transitions.duration.shorter, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childLeaving, exitKeyframe, DURATION, theme.transitions.easing.easeInOut, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childPulsate, pulsateKeyframe, theme.transitions.easing.easeInOut);
    if (theme.motion.reducedMotion === 'system') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])(_templateObject4(), styles);
    }
    return styles;
}
const TouchRippleRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiTouchRipple',
    slot: 'Root'
})({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
});
const TouchRippleRipple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$Ripple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
})(_templateObject5(), __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rippleVisible, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].child, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childLeaving, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childPulsate, (param)=>{
    let { theme } = param;
    return getAnimationStyles(theme);
});
/**
 * @ignore - internal component.
 */ const TouchRipple = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function TouchRipple(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiTouchRipple'
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$useReducedMotion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme.motion.reducedMotion, false);
    const { center: centerProp = false, classes = EMPTY_OBJ, className, ...other } = props;
    // Store ripples as data so we can keep exiting ripples mounted until their
    // exit animation ends. Ripple calls onExited when it is safe to remove one.
    const [rippleState, setRippleState] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        items: EMPTY_ARRAY,
        order: EMPTY_ARRAY
    });
    const ripples = rippleState.items;
    const nextKey = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const rippleCallback = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const mountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useOnMount$2f$useOnMount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TouchRipple.TouchRipple.useOnMount": ()=>{
            mountedRef.current = true;
            return ({
                "TouchRipple.TouchRipple.useOnMount": ()=>{
                    mountedRef.current = false;
                }
            })["TouchRipple.TouchRipple.useOnMount"];
        }
    }["TouchRipple.TouchRipple.useOnMount"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TouchRipple.TouchRipple.useEffect": ()=>{
            if (rippleCallback.current) {
                rippleCallback.current();
                rippleCallback.current = null;
            }
        }
    }["TouchRipple.TouchRipple.useEffect"], [
        ripples
    ]);
    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$useTimeout$2f$useTimeout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // Holds delayed touch-start work until the delay expires or touchend forces it to run.
    const startTimerCommit = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const container = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const handleExited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TouchRipple.TouchRipple.useEventCallback[handleExited]": (key)=>{
            if (!mountedRef.current) {
                return;
            }
            setRippleState({
                "TouchRipple.TouchRipple.useEventCallback[handleExited]": (prevState)=>{
                    const nextItems = prevState.items.filter({
                        "TouchRipple.TouchRipple.useEventCallback[handleExited].nextItems": (ripple)=>ripple.key !== key
                    }["TouchRipple.TouchRipple.useEventCallback[handleExited].nextItems"]);
                    const nextOrder = mergeRippleOrder(prevState.order.filter({
                        "TouchRipple.TouchRipple.useEventCallback[handleExited].nextOrder": (rippleKey)=>rippleKey !== key
                    }["TouchRipple.TouchRipple.useEventCallback[handleExited].nextOrder"]), nextItems.filter({
                        "TouchRipple.TouchRipple.useEventCallback[handleExited].nextOrder": (ripple)=>!ripple.exiting
                    }["TouchRipple.TouchRipple.useEventCallback[handleExited].nextOrder"]).map({
                        "TouchRipple.TouchRipple.useEventCallback[handleExited].nextOrder": (ripple)=>ripple.key
                    }["TouchRipple.TouchRipple.useEventCallback[handleExited].nextOrder"]));
                    return {
                        items: nextItems,
                        order: nextOrder
                    };
                }
            }["TouchRipple.TouchRipple.useEventCallback[handleExited]"]);
        }
    }["TouchRipple.TouchRipple.useEventCallback[handleExited]"]);
    const startCommit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TouchRipple.TouchRipple.useEventCallback[startCommit]": (params)=>{
            const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
            const key = nextKey.current;
            nextKey.current += 1;
            setRippleState({
                "TouchRipple.TouchRipple.useEventCallback[startCommit]": (prevState)=>{
                    const nextItems = [
                        ...prevState.items,
                        {
                            key,
                            pulsate,
                            rippleX,
                            rippleY,
                            rippleSize,
                            exiting: false
                        }
                    ];
                    return {
                        items: nextItems,
                        order: mergeRippleOrder(prevState.order, nextItems.filter({
                            "TouchRipple.TouchRipple.useEventCallback[startCommit]": (ripple)=>!ripple.exiting
                        }["TouchRipple.TouchRipple.useEventCallback[startCommit]"]).map({
                            "TouchRipple.TouchRipple.useEventCallback[startCommit]": (ripple)=>ripple.key
                        }["TouchRipple.TouchRipple.useEventCallback[startCommit]"]))
                    };
                }
            }["TouchRipple.TouchRipple.useEventCallback[startCommit]"]);
            rippleCallback.current = cb;
        }
    }["TouchRipple.TouchRipple.useEventCallback[startCommit]"]);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TouchRipple.TouchRipple.useEventCallback[start]": function() {
            let event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_OBJ, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : EMPTY_OBJ, cb = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NOOP;
            const { pulsate = false, center = centerProp || options.pulsate, fakeElement = false // Used only by tests.
             } = options;
            if ((event === null || event === void 0 ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
                ignoringMouseDown.current = false;
                return;
            }
            if ((event === null || event === void 0 ? void 0 : event.type) === 'touchstart') {
                ignoringMouseDown.current = true;
            }
            const element = fakeElement ? null : container.current;
            const { rippleX, rippleY, rippleSize } = computeRippleState({
                event,
                element,
                center
            });
            // Delay touch ripples so scroll gestures do not flash a ripple.
            if (event === null || event === void 0 ? void 0 : event.touches) {
                // Ignore extra touchstart events from multi-touch. There is only one
                // delayed start callback to clear on unmount.
                if (startTimerCommit.current === null) {
                    startTimerCommit.current = ({
                        "TouchRipple.TouchRipple.useEventCallback[start]": ()=>{
                            startCommit({
                                pulsate,
                                rippleX,
                                rippleY,
                                rippleSize,
                                cb
                            });
                        }
                    })["TouchRipple.TouchRipple.useEventCallback[start]"];
                    startTimer.start(DELAY_RIPPLE, {
                        "TouchRipple.TouchRipple.useEventCallback[start]": ()=>{
                            if (startTimerCommit.current) {
                                startTimerCommit.current();
                                startTimerCommit.current = null;
                            }
                        }
                    }["TouchRipple.TouchRipple.useEventCallback[start]"]);
                }
            } else {
                startCommit({
                    pulsate,
                    rippleX,
                    rippleY,
                    rippleSize,
                    cb
                });
            }
        }
    }["TouchRipple.TouchRipple.useEventCallback[start]"]);
    const pulsate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TouchRipple.TouchRipple.useEventCallback[pulsate]": ()=>{
            start(EMPTY_OBJ, {
                pulsate: true
            });
        }
    }["TouchRipple.TouchRipple.useEventCallback[pulsate]"]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TouchRipple.TouchRipple.useEventCallback[stop]": (event, cb)=>{
            startTimer.clear();
            // If touch ends before the delay finishes, show the ripple now and stop it
            // on the next tick so the user still gets feedback.
            if ((event === null || event === void 0 ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
                startTimer.start(0, {
                    "TouchRipple.TouchRipple.useEventCallback[stop]": ()=>{
                        stop(event, cb);
                    }
                }["TouchRipple.TouchRipple.useEventCallback[stop]"]);
                return;
            }
            startTimerCommit.current = null;
            setRippleState({
                "TouchRipple.TouchRipple.useEventCallback[stop]": (prevState)=>{
                    const firstActiveIndex = prevState.items.findIndex({
                        "TouchRipple.TouchRipple.useEventCallback[stop].firstActiveIndex": (ripple)=>!ripple.exiting
                    }["TouchRipple.TouchRipple.useEventCallback[stop].firstActiveIndex"]);
                    if (firstActiveIndex === -1) {
                        return prevState;
                    }
                    const nextItems = prevState.items.slice();
                    nextItems[firstActiveIndex] = {
                        ...nextItems[firstActiveIndex],
                        exiting: true
                    };
                    return {
                        items: nextItems,
                        order: mergeRippleOrder(prevState.order, nextItems.filter({
                            "TouchRipple.TouchRipple.useEventCallback[stop]": (ripple)=>!ripple.exiting
                        }["TouchRipple.TouchRipple.useEventCallback[stop]"]).map({
                            "TouchRipple.TouchRipple.useEventCallback[stop]": (ripple)=>ripple.key
                        }["TouchRipple.TouchRipple.useEventCallback[stop]"]))
                    };
                }
            }["TouchRipple.TouchRipple.useEventCallback[stop]"]);
            rippleCallback.current = cb;
        }
    }["TouchRipple.TouchRipple.useEventCallback[stop]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "TouchRipple.TouchRipple.useImperativeHandle": ()=>({
                pulsate,
                start,
                stop
            })
    }["TouchRipple.TouchRipple.useImperativeHandle"], [
        pulsate,
        start,
        stop
    ]);
    const rippleByKey = new Map(ripples.map((ripple)=>[
            ripple.key,
            ripple
        ]));
    const orderedRipples = rippleState.order.map((rippleKey)=>rippleByKey.get(rippleKey)).filter(Boolean);
    // Keep the old react-transition-group DOM order:
    // exiting ripples stay in place, and new ripples are inserted before the
    // final group waiting for its exit animation to finish.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TouchRippleRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root, classes.root, className),
        ref: container,
        ...other,
        children: orderedRipples.map((ripple)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TouchRippleRipple, {
                classes: {
                    ripple: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.ripple, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ripple),
                    rippleVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.rippleVisible, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rippleVisible),
                    ripplePulsate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.ripplePulsate, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ripplePulsate),
                    child: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.child, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].child),
                    childLeaving: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.childLeaving, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childLeaving),
                    childPulsate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.childPulsate, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$touchRippleClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].childPulsate)
                },
                timeout: reducedMotion.shouldReduceMotion ? 0 : DURATION,
                pulsate: ripple.pulsate,
                rippleX: ripple.rippleX,
                rippleY: ripple.rippleY,
                rippleSize: ripple.rippleSize,
                in: !ripple.exiting,
                onExited: ()=>handleExited(ripple.key)
            }, ripple.key))
    });
});
("TURBOPACK compile-time truthy", 1) ? TouchRipple.propTypes = {
    /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */ center: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = TouchRipple;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getButtonBaseUtilityClass",
    ()=>getButtonBaseUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getButtonBaseUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButtonBase', slot);
}
const buttonBaseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButtonBase', [
    'root',
    'disabled',
    'focusVisible'
]);
const __TURBOPACK__default__export__ = buttonBaseClasses;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/ButtonBase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonBaseRoot",
    ()=>ButtonBaseRoot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$refType$2f$refType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/refType/refType.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$elementTypeAcceptingRef$2f$elementTypeAcceptingRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$isFocusVisible$2f$isFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useForkRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useEventCallback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$useButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/useButtonBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$useLazyRipple$2f$useLazyRipple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$TouchRipple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/TouchRipple.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$buttonBaseClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { disabled, focusVisible, focusVisibleClassName, suppressFocusVisible, classes } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            focusVisible && !suppressFocusVisible && 'focusVisible'
        ]
    };
    const composedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$buttonBaseClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonBaseUtilityClass"], classes);
    if (focusVisible && !suppressFocusVisible && focusVisibleClassName) {
        composedClasses.root += " ".concat(focusVisibleClassName);
    }
    return composedClasses;
};
const ButtonBaseRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('button', {
    name: 'MuiButtonBase',
    slot: 'Root'
})({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.
    },
    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$buttonBaseClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
    },
    '@media print': {
        colorAdjust: 'exact'
    }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */ const ButtonBase = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function ButtonBase(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiButtonBase'
    });
    const { action, centerRipple = false, children, className, component = 'button', disabled = false, disableRipple = false, disableTouchRipple = false, focusRipple = false, focusVisibleClassName, /* eslint-disable react/prop-types */ // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled, // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible = false, // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: internalNativeButtonProp, /* eslint-enable react/prop-types */ LinkComponent = 'a', nativeButton: nativeButtonProp, onBlur, onClick: onClickProp, onContextMenu, onDragLeave, onFocus, onFocusVisible, onKeyDown: onKeyDownProp, onKeyUp: onKeyUpProp, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, tabIndex = 0, TouchRippleProps, touchRippleRef, type, ...other } = props;
    const isLink = Boolean(other.href || other.to);
    const hasFormAction = Boolean(other.formAction);
    let ComponentProp = component;
    if (ComponentProp === 'button' && isLink) {
        ComponentProp = LinkComponent;
    }
    const internalNativeButton = typeof ComponentProp === 'string' ? ComponentProp === 'button' : internalNativeButtonProp !== null && internalNativeButtonProp !== void 0 ? internalNativeButtonProp : false;
    const nativeButton = nativeButtonProp !== null && nativeButtonProp !== void 0 ? nativeButtonProp : internalNativeButton;
    const ripple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$useLazyRipple$2f$useLazyRipple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleRippleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ripple.ref, touchRippleRef);
    const [focusVisible, setFocusVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    if ((disabled || suppressFocusVisible) && focusVisible) {
        setFocusVisible(false);
    }
    const handleBeforeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyDown]": (event)=>{
            // Check if key is already down to avoid repeats being counted as multiple activations
            if (focusRipple && !event.repeat && focusVisible && event.key === ' ') {
                ripple.stop(event, {
                    "ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyDown]": ()=>{
                        ripple.start(event);
                    }
                }["ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyDown]"]);
            }
        }
    }["ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyDown]"]);
    const handleBeforeKeyUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyUp]": (event)=>{
            // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
            // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
            if (focusRipple && event.key === ' ' && focusVisible && !event.defaultPrevented) {
                ripple.stop(event, {
                    "ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyUp]": ()=>{
                        ripple.pulsate(event);
                    }
                }["ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyUp]"]);
            }
        }
    }["ButtonBase.ButtonBase.useEventCallback[handleBeforeKeyUp]"]);
    const { getButtonProps, rootRef: buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$useButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        nativeButton,
        nativeButtonProp,
        internalNativeButton,
        allowInferredHostMismatch: isLink || typeof ComponentProp === 'string',
        disabled,
        type,
        hasFormAction,
        tabIndex,
        onBeforeKeyDown: handleBeforeKeyDown,
        onBeforeKeyUp: handleBeforeKeyUp
    });
    const { onClick, onKeyDown, onKeyUp, ...buttonProps } = getButtonProps({
        onClick: onClickProp,
        onKeyDown: onKeyDownProp,
        onKeyUp: onKeyUpProp
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](action, {
        "ButtonBase.ButtonBase.useImperativeHandle": ()=>({
                focusVisible: ({
                    "ButtonBase.ButtonBase.useImperativeHandle": ()=>{
                        setFocusVisible(true);
                        buttonRef.current.focus();
                    }
                })["ButtonBase.ButtonBase.useImperativeHandle"]
            })
    }["ButtonBase.ButtonBase.useImperativeHandle"], [
        buttonRef
    ]);
    const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
    __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ButtonBase.ButtonBase.useEffect": ()=>{
            if (focusVisible && focusRipple && !disableRipple) {
                ripple.pulsate();
            }
        }
    }["ButtonBase.ButtonBase.useEffect"], [
        disableRipple,
        focusRipple,
        focusVisible,
        ripple
    ]);
    const handleMouseDown = useRippleHandler(ripple, 'start', onMouseDown, disableTouchRipple);
    const handleContextMenu = useRippleHandler(ripple, 'stop', onContextMenu, disableTouchRipple);
    const handleDragLeave = useRippleHandler(ripple, 'stop', onDragLeave, disableTouchRipple);
    const handleMouseUp = useRippleHandler(ripple, 'stop', onMouseUp, disableTouchRipple);
    const handleMouseLeave = useRippleHandler(ripple, 'stop', {
        "ButtonBase.ButtonBase.useRippleHandler[handleMouseLeave]": (event)=>{
            if (focusVisible) {
                event.preventDefault();
            }
            if (onMouseLeave) {
                onMouseLeave(event);
            }
        }
    }["ButtonBase.ButtonBase.useRippleHandler[handleMouseLeave]"], disableTouchRipple);
    const handleTouchStart = useRippleHandler(ripple, 'start', onTouchStart, disableTouchRipple);
    const handleTouchEnd = useRippleHandler(ripple, 'stop', onTouchEnd, disableTouchRipple);
    const handleTouchMove = useRippleHandler(ripple, 'stop', onTouchMove, disableTouchRipple);
    const handleBlur = useRippleHandler(ripple, 'stop', {
        "ButtonBase.ButtonBase.useRippleHandler[handleBlur]": (event)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$isFocusVisible$2f$isFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event.target)) {
                setFocusVisible(false);
            }
            if (onBlur) {
                onBlur(event);
            }
        }
    }["ButtonBase.ButtonBase.useRippleHandler[handleBlur]"], false);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ButtonBase.ButtonBase.useEventCallback[handleFocus]": (event)=>{
            // Fix for https://github.com/facebook/react/issues/7769
            if (!buttonRef.current) {
                buttonRef.current = event.currentTarget;
            }
            if (!suppressFocusVisible && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$isFocusVisible$2f$isFocusVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event.target)) {
                setFocusVisible(true);
                if (onFocusVisible) {
                    onFocusVisible(event);
                }
            }
            if (onFocus) {
                onFocus(event);
            }
        }
    }["ButtonBase.ButtonBase.useEventCallback[handleFocus]"]);
    const linkProps = {};
    if (isLink) {
        linkProps.tabIndex = disabled ? -1 : tabIndex;
        if (disabled) {
            linkProps['aria-disabled'] = disabled;
        }
        linkProps.type = type;
    }
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref, buttonRef);
    const ownerState = {
        ...props,
        centerRipple,
        component,
        disabled,
        disableRipple,
        disableTouchRipple,
        focusRipple,
        suppressFocusVisible,
        tabIndex,
        focusVisible
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ButtonBaseRoot, {
        as: ComponentProp,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        onBlur: handleBlur,
        onClick: onClick,
        onContextMenu: handleContextMenu,
        onFocus: handleFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onDragLeave: handleDragLeave,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        ref: handleRef,
        ...isLink ? linkProps : buttonProps,
        ...other,
        children: [
            children,
            enableTouchRipple ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$TouchRipple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: handleRippleRef,
                center: centerRipple,
                ...TouchRippleProps
            }) : null
        ]
    });
});
function useRippleHandler(ripple, rippleAction, eventCallback) {
    let skipRippleAction = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRippleHandler.useEventCallback": (event)=>{
            if (eventCallback) {
                eventCallback(event);
            }
            if (!skipRippleAction) {
                ripple[rippleAction](event);
            }
            return true;
        }
    }["useRippleHandler.useEventCallback"]);
}
("TURBOPACK compile-time truthy", 1) ? ButtonBase.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */ action: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$refType$2f$refType$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */ centerRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$elementTypeAcceptingRef$2f$elementTypeAcceptingRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */ disableTouchRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */ focusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ formAction: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * @ignore
   */ href: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .any,
    /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */ LinkComponent: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Whether the custom component is expected to render a native `<button>` element
   * when passing a React component to the `component` or `slots` prop.
   */ nativeButton: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ onBlur: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onClick: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onContextMenu: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onDragLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */ onFocusVisible: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyDown: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onKeyUp: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onMouseDown: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onMouseLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onMouseUp: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onTouchEnd: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onTouchMove: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onTouchStart: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * @default 0
   */ tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Props applied to the `TouchRipple` element.
   */ TouchRippleProps: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * A ref that points to the `TouchRipple` element.
   */ touchRippleRef: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
            current: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].shape({
                pulsate: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                start: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired,
                stop: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func.isRequired
            })
        })
    ]),
    /**
   * The HTML [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#type)
   * attribute applied to `button` and `a` elements.
   * Ignored when rendering non-native buttons.
   * @default 'button'
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = ButtonBase;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$capitalize$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/capitalize/capitalize.mjs [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$capitalize$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */ __turbopack_context__.s([
    "default",
    ()=>createSimplePaletteValueFilter
]);
function hasCorrectMainProperty(obj) {
    return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */ function checkSimplePaletteColorValues(obj) {
    let additionalPropertiesToCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (!hasCorrectMainProperty(obj)) {
        return false;
    }
    for (const value of additionalPropertiesToCheck){
        if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
            return false;
        }
    }
    return true;
}
function createSimplePaletteValueFilter() {
    let additionalPropertiesToCheck = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return (param)=>{
        let [, value] = param;
        return value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
    };
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/reducedMotion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultStyles",
    ()=>defaultStyles,
    "resolveReducedMotionStyles",
    ()=>resolveReducedMotionStyles
]);
const defaultStyles = {
    transition: 'none'
};
function resolveReducedMotionStyles(reducedMotion, styles) {
    if (reducedMotion === 'always') {
        return styles;
    }
    if (reducedMotion === 'system') {
        return {
            '@media (prefers-reduced-motion: reduce)': styles
        };
    }
    return null;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReducedMotionStyles",
    ()=>getReducedMotionStyles,
    "getTransitionChildStyle",
    ()=>getTransitionChildStyle,
    "getTransitionProps",
    ()=>getTransitionProps,
    "getTransitionStyles",
    ()=>getTransitionStyles,
    "getTranslateOffsets",
    ()=>getTranslateOffsets,
    "normalizedTransitionCallback",
    ()=>normalizedTransitionCallback,
    "reflow",
    ()=>reflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$reducedMotion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/reducedMotion.mjs [app-client] (ecmascript)");
;
const reflow = (node)=>node.scrollTop;
const DEFAULT_TRANSLATE_OFFSET = {
    offsetX: 0,
    offsetY: 0
};
const EMPTY_STYLE = {};
const DEFAULT_TRANSITION_PROPS = [
    'all'
];
const EMPTY_OPTIONS = {};
const transformOffsetIndexes = {
    matrix: [
        4,
        5
    ],
    matrix3d: [
        12,
        13
    ],
    translate: [
        0,
        1
    ],
    translate3d: [
        0,
        1
    ],
    translateX: [
        0,
        null
    ],
    translateY: [
        null,
        0
    ]
};
function parseTranslateValue(value) {
    const parsedValue = parseFloat(value !== null && value !== void 0 ? value : '');
    return Number.isNaN(parsedValue) ? 0 : parsedValue;
}
function parseTransform(transform) {
    const match = transform.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
    if (!match) {
        return null;
    }
    return {
        type: match[1],
        values: match[2].split(',').map(parseTranslateValue)
    };
}
function getTranslateOffsetValue(values, index) {
    return index === null ? 0 : values[index] || 0;
}
function getTranslateOffsets(transform) {
    if (!transform || transform === 'none') {
        return DEFAULT_TRANSLATE_OFFSET;
    }
    const parsedTransform = parseTransform(transform);
    if (!parsedTransform) {
        return DEFAULT_TRANSLATE_OFFSET;
    }
    const { type, values } = parsedTransform;
    const offsetIndexes = transformOffsetIndexes[type];
    if (!offsetIndexes) {
        return DEFAULT_TRANSLATE_OFFSET;
    }
    return {
        offsetX: getTranslateOffsetValue(values, offsetIndexes[0]),
        offsetY: getTranslateOffsetValue(values, offsetIndexes[1])
    };
}
function normalizedTransitionCallback(nodeRef, callback) {
    return (maybeIsAppearing)=>{
        if (callback) {
            const node = nodeRef.current;
            // Enter callbacks receive isAppearing; exit callbacks do not.
            if (maybeIsAppearing === undefined) {
                callback(node);
            } else {
                callback(node, maybeIsAppearing);
            }
        }
    };
}
function getTransitionChildStyle(state, inProp, baseStyles, hiddenStyles, styleProp, childStyle) {
    const base = state === 'exited' && !inProp ? hiddenStyles : baseStyles[state] || baseStyles.exited;
    return styleProp || childStyle ? {
        ...base,
        ...styleProp,
        ...childStyle
    } : base;
}
function getTransitionProps(props, options) {
    const { timeout, easing, style = EMPTY_STYLE } = props;
    var _style_transitionDuration, _style_transitionTimingFunction;
    return {
        duration: (_style_transitionDuration = style.transitionDuration) !== null && _style_transitionDuration !== void 0 ? _style_transitionDuration : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
        easing: (_style_transitionTimingFunction = style.transitionTimingFunction) !== null && _style_transitionTimingFunction !== void 0 ? _style_transitionTimingFunction : typeof easing === 'object' ? easing[options.mode] : easing,
        delay: style.transitionDelay
    };
}
function getReducedMotionStyles(theme, styles) {
    var _theme_motion;
    const resolvedStyles = styles !== null && styles !== void 0 ? styles : __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$reducedMotion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultStyles"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$reducedMotion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveReducedMotionStyles"])((_theme_motion = theme.motion) === null || _theme_motion === void 0 ? void 0 : _theme_motion.reducedMotion, resolvedStyles);
}
function getTransitionStyles(theme) {
    let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_TRANSITION_PROPS, options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_OPTIONS;
    var _theme_transitions_create, _theme_transitions;
    const transition = (_theme_transitions = theme.transitions) === null || _theme_transitions === void 0 ? void 0 : (_theme_transitions_create = _theme_transitions.create) === null || _theme_transitions_create === void 0 ? void 0 : _theme_transitions_create.call(_theme_transitions, props, options);
    const reducedMotionStyles = getReducedMotionStyles(theme);
    if (transition === undefined) {
        return reducedMotionStyles !== null && reducedMotionStyles !== void 0 ? reducedMotionStyles : EMPTY_STYLE;
    }
    const transitionStyles = {
        transition
    };
    return reducedMotionStyles ? {
        ...transitionStyles,
        ...reducedMotionStyles
    } : transitionStyles;
}
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCircularProgressUtilityClass",
    ()=>getCircularProgressUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getCircularProgressUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCircularProgress', slot);
}
const circularProgressClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiCircularProgress', [
    'root',
    'determinate',
    'indeterminate',
    'colorPrimary',
    'colorSecondary',
    'svg',
    'track',
    'circle',
    'circleDisableShrink'
]);
const __TURBOPACK__default__export__ = circularProgressClasses;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetWarningFlags",
    ()=>resetWarningFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$circularProgressClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: -126px;\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        animation: ",
        " 1.4s linear infinite;\n      "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        animation: ",
        " 1.4s ease-in-out infinite;\n      "
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
;
;
;
;
;
;
;
;
;
;
;
;
;
const SIZE = 44;
let warnedMinMaxWithoutVariant = false;
let warnedInvalidMinMaxValue = false;
function resetWarningFlags() {
    warnedMinMaxWithoutVariant = false;
    warnedInvalidMinMaxValue = false;
}
const circularRotateKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_templateObject());
const circularDashKeyframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"])(_templateObject1());
// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const rotateAnimation = typeof circularRotateKeyframe !== 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])(_templateObject2(), circularRotateKeyframe) : null;
const dashAnimation = typeof circularDashKeyframe !== 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])(_templateObject3(), circularDashKeyframe) : null;
const useUtilityClasses = (ownerState)=>{
    const { classes, variant, color, disableShrink } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            "color".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color))
        ],
        svg: [
            'svg'
        ],
        track: [
            'track'
        ],
        circle: [
            'circle',
            disableShrink && 'circleDisableShrink'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$circularProgressClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCircularProgressUtilityClass"], classes);
};
const CircularProgressRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles["color".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.color))]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    const reducedMotionAnimationStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        animation: 'none'
    });
    return {
        display: 'inline-block',
        variants: [
            {
                props: {
                    variant: 'determinate'
                },
                style: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'transform')
                }
            },
            {
                props: {
                    variant: 'indeterminate'
                },
                style: rotateAnimation || {
                    animation: "".concat(circularRotateKeyframe, " 1.4s linear infinite")
                }
            },
            ...reducedMotionAnimationStyles ? [
                {
                    props: {
                        variant: 'indeterminate'
                    },
                    style: reducedMotionAnimationStyles
                }
            ] : [],
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            })
        ]
    };
}));
const CircularProgressSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg'
})({
    display: 'block' // Keeps the progress centered
});
const CircularProgressCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.circle,
            ownerState.disableShrink && styles.circleDisableShrink
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    const reducedMotionAnimationStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReducedMotionStyles"])(theme, {
        animation: 'none'
    });
    return {
        stroke: 'currentColor',
        variants: [
            {
                props: {
                    variant: 'determinate'
                },
                style: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, 'stroke-dashoffset')
                }
            },
            {
                props: {
                    variant: 'indeterminate'
                },
                style: {
                    // Some default value that looks fine while waiting for the animation to kick in.
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.variant === 'indeterminate' && !ownerState.disableShrink;
                },
                style: dashAnimation || {
                    // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
                    animation: "".concat(circularDashKeyframe, " 1.4s ease-in-out infinite")
                }
            },
            ...reducedMotionAnimationStyles ? [
                {
                    props: (param)=>{
                        let { ownerState } = param;
                        return ownerState.variant === 'indeterminate' && !ownerState.disableShrink;
                    },
                    style: reducedMotionAnimationStyles
                }
            ] : []
        ]
    };
}));
const CircularProgressTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('circle', {
    name: 'MuiCircularProgress',
    slot: 'Track'
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        stroke: 'currentColor',
        opacity: (theme.vars || theme).palette.action.activatedOpacity
    };
}));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */ const CircularProgress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function CircularProgress(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCircularProgress'
    });
    var _props_min;
    const { className, color = 'primary', disableShrink = false, enableTrackSlot = false, min: minProp, max: maxProp, size = 40, style, thickness = 3.6, value = (_props_min = props.min) !== null && _props_min !== void 0 ? _props_min : 0, variant = 'indeterminate', ...other } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedMinMaxWithoutVariant && variant === 'indeterminate' && (minProp !== undefined || maxProp !== undefined)) {
            console.warn("MUI: You have provided the `min` or `max` props with an 'indeterminate' variant. These props will have no effect.");
            warnedMinMaxWithoutVariant = true;
        }
    }
    const min = minProp !== null && minProp !== void 0 ? minProp : 0;
    const max = maxProp !== null && maxProp !== void 0 ? maxProp : 100;
    const ownerState = {
        ...props,
        color,
        disableShrink,
        size,
        thickness,
        value,
        variant,
        enableTrackSlot
    };
    const classes = useUtilityClasses(ownerState);
    const circleStyle = {};
    const rootStyle = {};
    const rootProps = {};
    if (variant === 'determinate') {
        const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
        if ("TURBOPACK compile-time truthy", 1) {
            if (!warnedInvalidMinMaxValue && (value < min || value > max || min >= max)) {
                console.error("MUI: The min, max, and value props in CircularProgress should be numbers where min < max and min <= value <= max. Received min=".concat(min, ", max=").concat(max, ", value=").concat(value, "."));
                warnedInvalidMinMaxValue = true;
            }
        }
        const range = max - min;
        circleStyle.strokeDasharray = circumference.toFixed(3);
        circleStyle.strokeDashoffset = range > 0 ? "".concat(((max - value) / range * circumference).toFixed(3), "px") : "".concat(circumference.toFixed(3), "px"); // empty-state fallback when range is invalid
        rootStyle.transform = 'rotate(-90deg)';
        rootProps['aria-valuenow'] = value;
        rootProps['aria-valuemin'] = min;
        rootProps['aria-valuemax'] = max;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CircularProgressRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        style: {
            width: size,
            height: size,
            ...rootStyle,
            ...style
        },
        ownerState: ownerState,
        ref: ref,
        role: "progressbar",
        ...rootProps,
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(CircularProgressSVG, {
            className: classes.svg,
            ownerState: ownerState,
            viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE),
            children: [
                enableTrackSlot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CircularProgressTrack, {
                    className: classes.track,
                    ownerState: ownerState,
                    cx: SIZE,
                    cy: SIZE,
                    r: (SIZE - thickness) / 2,
                    fill: "none",
                    strokeWidth: thickness,
                    "aria-hidden": "true"
                }) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CircularProgressCircle, {
                    className: classes.circle,
                    style: circleStyle,
                    ownerState: ownerState,
                    cx: SIZE,
                    cy: SIZE,
                    r: (SIZE - thickness) / 2,
                    fill: "none",
                    strokeWidth: thickness
                })
            ]
        })
    });
});
("TURBOPACK compile-time truthy", 1) ? CircularProgress.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'primary',
            'secondary',
            'error',
            'info',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */ disableShrink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool, (props)=>{
        if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
            return new Error('MUI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
        }
        return null;
    }),
    /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */ enableTrackSlot: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The maximum value for the progress indicator for the determinate variant.
   * @default 100
   */ max: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The minimum value for the progress indicator for the determinate variant.
   * @default 0
   */ min: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The thickness of the circle.
   * @default 3.6
   */ thickness: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The value of the progress indicator for the determinate variant.
   * Value between `min` and `max`.
   * @default props.min ?? 0
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'determinate',
        'indeterminate'
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = CircularProgress;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/Button/buttonClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getButtonUtilityClass",
    ()=>getButtonUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getButtonUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButton', slot);
}
const buttonClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiButton', [
    'root',
    'text',
    'outlined',
    'contained',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd'
]);
const __TURBOPACK__default__export__ = buttonClasses;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonGroup/ButtonGroupContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * @ignore - internal component.
 */ const ButtonGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    ButtonGroupContext.displayName = 'ButtonGroupContext';
}
const __TURBOPACK__default__export__ = ButtonGroupContext;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
 * @ignore - internal component.
 */ const ButtonGroupButtonContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) {
    ButtonGroupButtonContext.displayName = 'ButtonGroupButtonContext';
}
const __TURBOPACK__default__export__ = ButtonGroupButtonContext;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$resolveProps$2f$resolveProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/resolveProps/resolveProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useId$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/useId.mjs [app-client] (ecmascript) <export default as unstable_useId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/rootShouldForwardProp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonBase/ButtonBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/Button/buttonClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonGroup$2f$ButtonGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonGroup/ButtonGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonGroup$2f$ButtonGroupButtonContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/transitions/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { color, disableElevation, fullWidth, size, variant, loading, loadingPosition, classes } = ownerState;
    const slots = {
        root: [
            'root',
            loading && 'loading',
            variant,
            "size".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size)),
            "color".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color)),
            disableElevation && 'disableElevation',
            fullWidth && 'fullWidth',
            loading && "loadingPosition".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(loadingPosition))
        ],
        startIcon: [
            'icon',
            'startIcon'
        ],
        endIcon: [
            'icon',
            'endIcon'
        ],
        loadingIndicator: [
            'loadingIndicator'
        ],
        loadingWrapper: [
            'loadingWrapper'
        ]
    };
    const composedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonUtilityClass"], classes);
    return {
        ...classes,
        // forward the focused, disabled, etc. classes to the ButtonBase
        ...composedClasses
    };
};
const commonIconStyles = [
    {
        props: {
            size: 'small'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 18
            }
        }
    },
    {
        props: {
            size: 'medium'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 20
            }
        }
    },
    {
        props: {
            size: 'large'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 22
            }
        }
    }
];
const ButtonRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$rootShouldForwardProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop) || prop === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles["size".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.size))],
            ownerState.color === 'inherit' && styles.colorInherit,
            ownerState.disableElevation && styles.disableElevation,
            ownerState.fullWidth && styles.fullWidth,
            ownerState.loading && styles.loading
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
    return {
        ...theme.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, [
            'background-color',
            'box-shadow',
            'border-color',
            'color'
        ], {
            duration: theme.transitions.duration.short
        }),
        '&:hover': {
            textDecoration: 'none'
        },
        ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
            color: (theme.vars || theme).palette.action.disabled
        },
        variants: [
            {
                props: {
                    variant: 'contained'
                },
                style: {
                    color: "var(--variant-containedColor)",
                    backgroundColor: "var(--variant-containedBg)",
                    boxShadow: (theme.vars || theme).shadows[2],
                    '&:hover': {
                        boxShadow: (theme.vars || theme).shadows[4],
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            boxShadow: (theme.vars || theme).shadows[2]
                        }
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[8]
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible)]: {
                        boxShadow: (theme.vars || theme).shadows[6]
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                        color: (theme.vars || theme).palette.action.disabled,
                        boxShadow: (theme.vars || theme).shadows[0],
                        backgroundColor: (theme.vars || theme).palette.action.disabledBackground
                    }
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    padding: '5px 15px',
                    border: '1px solid currentColor',
                    borderColor: "var(--variant-outlinedBorder, currentColor)",
                    backgroundColor: "var(--variant-outlinedBg)",
                    color: "var(--variant-outlinedColor)",
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                        border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
                    }
                }
            },
            {
                props: {
                    variant: 'text'
                },
                style: {
                    padding: '6px 8px',
                    color: "var(--variant-textColor)",
                    backgroundColor: "var(--variant-textBg)"
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--variant-textColor': (theme.vars || theme).palette[color].main,
                        '--variant-outlinedColor': (theme.vars || theme).palette[color].main,
                        '--variant-outlinedBorder': theme.alpha((theme.vars || theme).palette[color].main, 0.5),
                        '--variant-containedColor': (theme.vars || theme).palette[color].contrastText,
                        '--variant-containedBg': (theme.vars || theme).palette[color].main,
                        '@media (hover: hover)': {
                            '&:hover': {
                                '--variant-containedBg': (theme.vars || theme).palette[color].dark,
                                '--variant-textBg': theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity),
                                '--variant-outlinedBorder': (theme.vars || theme).palette[color].main,
                                '--variant-outlinedBg': theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
                            }
                        }
                    }
                };
            }),
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit',
                    borderColor: 'currentColor',
                    '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
                    '@media (hover: hover)': {
                        '&:hover': {
                            '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
                            '--variant-textBg': theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity),
                            '--variant-outlinedBg': theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity)
                        }
                    }
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'text'
                },
                style: {
                    padding: '4px 5px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'text'
                },
                style: {
                    padding: '8px 11px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'outlined'
                },
                style: {
                    padding: '3px 9px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'outlined'
                },
                style: {
                    padding: '7px 21px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'contained'
                },
                style: {
                    padding: '4px 10px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'contained'
                },
                style: {
                    padding: '8px 22px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    disableElevation: true
                },
                style: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].focusVisible)]: {
                        boxShadow: 'none'
                    },
                    '&:active': {
                        boxShadow: 'none'
                    },
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disabled)]: {
                        boxShadow: 'none'
                    }
                }
            },
            {
                props: {
                    fullWidth: true
                },
                style: {
                    width: '100%'
                }
            },
            {
                props: {
                    loadingPosition: 'center'
                },
                style: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, [
                        'background-color',
                        'box-shadow',
                        'border-color'
                    ], {
                        duration: theme.transitions.duration.short
                    }),
                    ["&.".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$buttonClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loading)]: {
                        color: 'transparent'
                    }
                }
            }
        ]
    };
}));
const ButtonStartIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.startIcon,
            ownerState.loading && styles.startIconLoadingStart
        ];
    }
})((param)=>{
    let { theme } = param;
    return {
        display: 'inherit',
        alignItems: 'center',
        marginRight: 8,
        marginLeft: -4,
        '&::before': {
            content: '"\\200b"',
            width: 0,
            overflow: 'hidden'
        },
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    marginLeft: -2
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    loading: true
                },
                style: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, [
                        'opacity'
                    ], {
                        duration: theme.transitions.duration.short
                    }),
                    opacity: 0
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    loading: true,
                    fullWidth: true
                },
                style: {
                    marginRight: -8
                }
            },
            ...commonIconStyles
        ]
    };
});
const ButtonEndIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.endIcon,
            ownerState.loading && styles.endIconLoadingEnd
        ];
    }
})((param)=>{
    let { theme } = param;
    return {
        display: 'inherit',
        marginRight: -4,
        marginLeft: 8,
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    marginRight: -2
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    loading: true
                },
                style: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$transitions$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])(theme, [
                        'opacity'
                    ], {
                        duration: theme.transitions.duration.short
                    }),
                    opacity: 0
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    loading: true,
                    fullWidth: true
                },
                style: {
                    marginLeft: -8
                }
            },
            ...commonIconStyles
        ]
    };
});
const ButtonLoadingIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'LoadingIndicator'
})((param)=>{
    let { theme } = param;
    return {
        display: 'none',
        position: 'absolute',
        visibility: 'visible',
        variants: [
            {
                props: {
                    loading: true
                },
                style: {
                    display: 'flex'
                }
            },
            {
                props: {
                    loadingPosition: 'start'
                },
                style: {
                    left: 14
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    size: 'small'
                },
                style: {
                    left: 10
                }
            },
            {
                props: {
                    variant: 'text',
                    loadingPosition: 'start'
                },
                style: {
                    left: 6
                }
            },
            {
                props: {
                    loadingPosition: 'center'
                },
                style: {
                    left: '50%',
                    transform: 'translate(-50%)',
                    color: (theme.vars || theme).palette.action.disabled
                }
            },
            {
                props: {
                    loadingPosition: 'end'
                },
                style: {
                    right: 14
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    size: 'small'
                },
                style: {
                    right: 10
                }
            },
            {
                props: {
                    variant: 'text',
                    loadingPosition: 'end'
                },
                style: {
                    right: 6
                }
            },
            {
                props: {
                    loadingPosition: 'start',
                    fullWidth: true
                },
                style: {
                    position: 'relative',
                    left: -10
                }
            },
            {
                props: {
                    loadingPosition: 'end',
                    fullWidth: true
                },
                style: {
                    position: 'relative',
                    right: -10
                }
            }
        ]
    };
});
const ButtonLoadingIconPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiButton',
    slot: 'LoadingIconPlaceholder'
})({
    display: 'inline-block',
    width: '1em',
    height: '1em'
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(inProps, ref) {
    // props priority: `inProps` > `contextProps` > `themeDefaultProps`
    const contextProps = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonGroup$2f$ButtonGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const buttonGroupButtonContextPositionClassName = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$ButtonGroup$2f$ButtonGroupButtonContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const resolvedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$resolveProps$2f$resolveProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(contextProps, inProps);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: resolvedProps,
        name: 'MuiButton'
    });
    const { children, color = 'primary', component = 'button', className, disabled = false, disableElevation = false, disableFocusRipple = false, endIcon: endIconProp, focusVisibleClassName, fullWidth = false, id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, loadingPosition = 'center', size = 'medium', startIcon: startIconProp, type, variant = 'text', ...other } = props;
    const loadingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useId$3e$__["unstable_useId"])(idProp);
    const loadingIndicator = loadingIndicatorProp !== null && loadingIndicatorProp !== void 0 ? loadingIndicatorProp : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-labelledby": loadingId,
        color: "inherit",
        size: 16
    });
    const ownerState = {
        ...props,
        color,
        component,
        disabled,
        disableElevation,
        disableFocusRipple,
        fullWidth,
        loading,
        loadingIndicator,
        loadingPosition,
        size,
        type,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const startIcon = (startIconProp || loading && loadingPosition === 'start') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonStartIcon, {
        className: classes.startIcon,
        ownerState: ownerState,
        children: startIconProp || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonLoadingIconPlaceholder, {
            className: classes.loadingIconPlaceholder,
            ownerState: ownerState
        })
    });
    const endIcon = (endIconProp || loading && loadingPosition === 'end') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonEndIcon, {
        className: classes.endIcon,
        ownerState: ownerState,
        children: endIconProp || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonLoadingIconPlaceholder, {
            className: classes.loadingIconPlaceholder,
            ownerState: ownerState
        })
    });
    const positionClassName = buttonGroupButtonContextPositionClassName || '';
    const loader = typeof loading === 'boolean' ? /*#__PURE__*/ // use plain HTML span to minimize the runtime overhead
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: classes.loadingWrapper,
        style: {
            display: 'contents'
        },
        children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ButtonLoadingIndicator, {
            className: classes.loadingIndicator,
            ownerState: ownerState,
            children: loadingIndicator
        })
    }) : null;
    // Don't forward the 'root' classes to the ButtonBase, as they will get duplicated with the one passed to the className prop.
    const { root, ...forwardedClasses } = classes;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(ButtonRoot, {
        ownerState: ownerState,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(contextProps.className, classes.root, className, positionClassName),
        component: component,
        disabled: disabled || loading,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.focusVisible, focusVisibleClassName),
        ref: ref,
        internalNativeButton: true,
        type: type,
        id: loading ? loadingId : idProp,
        ...other,
        classes: forwardedClasses,
        children: [
            startIcon,
            loadingPosition !== 'end' && loader,
            children,
            loadingPosition === 'end' && loader,
            endIcon
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? Button.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'primary',
            'secondary',
            'success',
            'error',
            'info',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, no elevation is used.
   * @default false
   */ disableElevation: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */ disableFocusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Element placed after the children.
   */ endIcon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * @ignore
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */ fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */ href: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * @ignore
   */ id: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */ loading: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */ loadingIndicator: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */ loadingPosition: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'center',
        'end',
        'start'
    ]),
    /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'small',
            'medium',
            'large'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * Element placed before the children.
   */ startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * @ignore
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The variant to use.
   * @default 'text'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'contained',
            'outlined',
            'text'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Projects/growve_logistic_website/node_modules/@iconify/react/dist/iconify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon,
    "InlineIcon",
    ()=>InlineIcon,
    "_api",
    ()=>_api,
    "addAPIProvider",
    ()=>addAPIProvider,
    "addCollection",
    ()=>addCollection,
    "addIcon",
    ()=>addIcon,
    "buildIcon",
    ()=>iconToSVG,
    "calculateSize",
    ()=>calculateSize,
    "getIcon",
    ()=>getIcon,
    "iconLoaded",
    ()=>iconLoaded,
    "listIcons",
    ()=>listIcons,
    "loadIcon",
    ()=>loadIcon,
    "loadIcons",
    ()=>loadIcons,
    "replaceIDs",
    ()=>replaceIDs,
    "setCustomIconLoader",
    ()=>setCustomIconLoader,
    "setCustomIconsLoader",
    ()=>setCustomIconsLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
/**
* Resolve icon set icons
*
* Returns parent icon for each icon
*/ function getIconsTree(data, names) {
    const icons = data.icons;
    const aliases = data.aliases || Object.create(null);
    const resolved = Object.create(null);
    function resolve(name) {
        if (icons[name]) return resolved[name] = [];
        if (!(name in resolved)) {
            resolved[name] = null;
            const parent = aliases[name] && aliases[name].parent;
            const value = parent && resolve(parent);
            if (value) resolved[name] = [
                parent
            ].concat(value);
        }
        return resolved[name];
    }
    Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
    return resolved;
}
/**
* Default values for dimensions
*/ const defaultIconDimensions = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
});
/**
* Default values for transformations
*/ const defaultIconTransformations = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
});
/**
* Default values for all optional IconifyIcon properties
*/ const defaultIconProps = Object.freeze({
    ...defaultIconDimensions,
    ...defaultIconTransformations
});
/**
* Default values for all properties used in ExtendedIconifyIcon
*/ const defaultExtendedIconProps = Object.freeze({
    ...defaultIconProps,
    body: "",
    hidden: false
});
/**
* Merge transformations
*/ function mergeIconTransformations(obj1, obj2) {
    const result = {};
    if (!obj1.hFlip !== !obj2.hFlip) result.hFlip = true;
    if (!obj1.vFlip !== !obj2.vFlip) result.vFlip = true;
    const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
    if (rotate) result.rotate = rotate;
    return result;
}
/**
* Merge icon and alias
*
* Can also be used to merge default values and icon
*/ function mergeIconData(parent, child) {
    const result = mergeIconTransformations(parent, child);
    for(const key in defaultExtendedIconProps)if (key in defaultIconTransformations) {
        if (key in parent && !(key in result)) result[key] = defaultIconTransformations[key];
    } else if (key in child) result[key] = child[key];
    else if (key in parent) result[key] = parent[key];
    return result;
}
/**
* Get icon data, using prepared aliases tree
*/ function internalGetIconData(data, name, tree) {
    const icons = data.icons;
    const aliases = data.aliases || Object.create(null);
    let currentProps = {};
    function parse(name$1) {
        currentProps = mergeIconData(icons[name$1] || aliases[name$1], currentProps);
    }
    parse(name);
    tree.forEach(parse);
    return mergeIconData(data, currentProps);
}
/**
* Extract icons from an icon set
*
* Returns list of icons that were found in icon set
*/ function parseIconSet(data, callback) {
    const names = [];
    if (typeof data !== "object" || typeof data.icons !== "object") return names;
    if (data.not_found instanceof Array) data.not_found.forEach((name)=>{
        callback(name, null);
        names.push(name);
    });
    const tree = getIconsTree(data);
    for(const name in tree){
        const item = tree[name];
        if (item) {
            callback(name, internalGetIconData(data, name, item));
            names.push(name);
        }
    }
    return names;
}
/**
* Optional properties
*/ const optionalPropertyDefaults = {
    provider: "",
    aliases: {},
    not_found: {},
    ...defaultIconDimensions
};
/**
* Check props
*/ function checkOptionalProps(item, defaults) {
    for(const prop in defaults)if (prop in item && typeof item[prop] !== typeof defaults[prop]) return false;
    return true;
}
/**
* Validate icon set, return it as IconifyJSON on success, null on failure
*
* Unlike validateIconSet(), this function is very basic.
* It does not throw exceptions, it does not check metadata, it does not fix stuff.
*/ function quicklyValidateIconSet(obj) {
    if (typeof obj !== "object" || obj === null) return null;
    const data = obj;
    if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") return null;
    if (!checkOptionalProps(obj, optionalPropertyDefaults)) return null;
    const icons = data.icons;
    for(const name in icons){
        const icon = icons[name];
        if (!name || typeof icon.body !== "string" || !checkOptionalProps(icon, defaultExtendedIconProps)) return null;
    }
    const aliases = data.aliases || Object.create(null);
    for(const name in aliases){
        const icon = aliases[name];
        const parent = icon.parent;
        if (!name || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(icon, defaultExtendedIconProps)) return null;
    }
    return data;
}
/**
* Storage by provider and prefix
*/ const dataStorage = Object.create(null);
/**
* Create new storage
*/ function newStorage(provider, prefix) {
    return {
        provider,
        prefix,
        icons: Object.create(null),
        missing: /* @__PURE__ */ new Set()
    };
}
/**
* Get storage for provider and prefix
*/ function getStorage(provider, prefix) {
    const providerStorage = dataStorage[provider] || (dataStorage[provider] = Object.create(null));
    return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
/**
* Add icon set to storage
*
* Returns array of added icons
*/ function addIconSet(storage, data) {
    if (!quicklyValidateIconSet(data)) return [];
    return parseIconSet(data, (name, icon)=>{
        if (icon) storage.icons[name] = icon;
        else storage.missing.add(name);
    });
}
/**
* Add icon to storage
*/ function addIconToStorage(storage, name, icon) {
    try {
        if (typeof icon.body === "string") {
            storage.icons[name] = {
                ...icon
            };
            return true;
        }
    } catch (err) {}
    return false;
}
/**
* List available icons
*/ function listIcons(provider, prefix) {
    let allIcons = [];
    const providers = typeof provider === "string" ? [
        provider
    ] : Object.keys(dataStorage);
    providers.forEach((provider$1)=>{
        const prefixes = typeof provider$1 === "string" && typeof prefix === "string" ? [
            prefix
        ] : Object.keys(dataStorage[provider$1] || {});
        prefixes.forEach((prefix$1)=>{
            const storage = getStorage(provider$1, prefix$1);
            allIcons = allIcons.concat(Object.keys(storage.icons).map((name)=>(provider$1 !== "" ? "@" + provider$1 + ":" : "") + prefix$1 + ":" + name));
        });
    });
    return allIcons;
}
/**
* Expression to test part of icon name.
*
* Used when loading icons from Iconify API due to project naming convension.
* Ignored when using custom icon sets - convension does not apply.
*/ const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
/**
* Convert string icon name to IconifyIconName object.
*/ const stringToIcon = function(value, validate, allowSimpleName) {
    let provider = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    const colonSeparated = value.split(":");
    if (value.slice(0, 1) === "@") {
        if (colonSeparated.length < 2 || colonSeparated.length > 3) return null;
        provider = colonSeparated.shift().slice(1);
    }
    if (colonSeparated.length > 3 || !colonSeparated.length) return null;
    if (colonSeparated.length > 1) {
        const name$1 = colonSeparated.pop();
        const prefix = colonSeparated.pop();
        const result = {
            provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
            prefix,
            name: name$1
        };
        return validate && !validateIconName(result) ? null : result;
    }
    const name = colonSeparated[0];
    const dashSeparated = name.split("-");
    if (dashSeparated.length > 1) {
        const result = {
            provider,
            prefix: dashSeparated.shift(),
            name: dashSeparated.join("-")
        };
        return validate && !validateIconName(result) ? null : result;
    }
    if (allowSimpleName && provider === "") {
        const result = {
            provider,
            prefix: "",
            name
        };
        return validate && !validateIconName(result, allowSimpleName) ? null : result;
    }
    return null;
};
/**
* Check if icon is valid.
*
* This function is not part of stringToIcon because validation is not needed for most code.
*/ const validateIconName = (icon, allowSimpleName)=>{
    if (!icon) return false;
    return !!((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
/**
* Allow storing icons without provider or prefix, making it possible to store icons like "home"
*/ let simpleNames = false;
function allowSimpleNames(allow) {
    if (typeof allow === "boolean") simpleNames = allow;
    return simpleNames;
}
/**
* Get icon data
*
* Returns:
* - IconifyIcon on success, object directly from storage so don't modify it
* - null if icon is marked as missing (returned in `not_found` property from API, so don't bother sending API requests)
* - undefined if icon is missing in storage
*/ function getIconData(name) {
    const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
    if (icon) {
        const storage = getStorage(icon.provider, icon.prefix);
        const iconName = icon.name;
        return storage.icons[iconName] || (storage.missing.has(iconName) ? null : void 0);
    }
}
/**
* Add one icon
*/ function addIcon(name, data) {
    const icon = stringToIcon(name, true, simpleNames);
    if (!icon) return false;
    const storage = getStorage(icon.provider, icon.prefix);
    if (data) return addIconToStorage(storage, icon.name, data);
    else {
        storage.missing.add(icon.name);
        return true;
    }
}
/**
* Add icon set
*/ function addCollection(data, provider) {
    if (typeof data !== "object") return false;
    if (typeof provider !== "string") provider = data.provider || "";
    if (simpleNames && !provider && !data.prefix) {
        let added = false;
        if (quicklyValidateIconSet(data)) {
            data.prefix = "";
            parseIconSet(data, (name, icon)=>{
                if (addIcon(name, icon)) added = true;
            });
        }
        return added;
    }
    const prefix = data.prefix;
    if (!validateIconName({
        prefix,
        name: "a"
    })) return false;
    const storage = getStorage(provider, prefix);
    return !!addIconSet(storage, data);
}
/**
* Check if icon data is available
*/ function iconLoaded(name) {
    return !!getIconData(name);
}
/**
* Get full icon
*/ function getIcon(name) {
    const result = getIconData(name);
    return result ? {
        ...defaultIconProps,
        ...result
    } : result;
}
/**
* Default icon customisations values
*/ const defaultIconSizeCustomisations = Object.freeze({
    width: null,
    height: null
});
const defaultIconCustomisations = Object.freeze({
    ...defaultIconSizeCustomisations,
    ...defaultIconTransformations
});
/**
* Regular expressions for calculating dimensions
*/ const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
    if (ratio === 1) return size;
    precision = precision || 100;
    if (typeof size === "number") return Math.ceil(size * ratio * precision) / precision;
    if (typeof size !== "string") return size;
    const oldParts = size.split(unitsSplit);
    if (oldParts === null || !oldParts.length) return size;
    const newParts = [];
    let code = oldParts.shift();
    let isNumber = unitsTest.test(code);
    while(true){
        if (isNumber) {
            const num = parseFloat(code);
            if (isNaN(num)) newParts.push(code);
            else newParts.push(Math.ceil(num * ratio * precision) / precision);
        } else newParts.push(code);
        code = oldParts.shift();
        if (code === void 0) return newParts.join("");
        isNumber = !isNumber;
    }
}
function splitSVGDefs(content) {
    let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "defs";
    let defs = "";
    const index = content.indexOf("<" + tag);
    while(index >= 0){
        const start = content.indexOf(">", index);
        const end = content.indexOf("</" + tag);
        if (start === -1 || end === -1) break;
        const endEnd = content.indexOf(">", end);
        if (endEnd === -1) break;
        defs += content.slice(start + 1, end).trim();
        content = content.slice(0, index).trim() + content.slice(endEnd + 1);
    }
    return {
        defs,
        content
    };
}
/**
* Merge defs and content
*/ function mergeDefsAndContent(defs, content) {
    return defs ? "<defs>" + defs + "</defs>" + content : content;
}
/**
* Wrap SVG content, without wrapping definitions
*/ function wrapSVGContent(body, start, end) {
    const split = splitSVGDefs(body);
    return mergeDefsAndContent(split.defs, start + split.content + end);
}
/**
* Check if value should be unset. Allows multiple keywords
*/ const isUnsetKeyword = (value)=>value === "unset" || value === "undefined" || value === "none";
/**
* Get SVG attributes and content from icon + customisations
*
* Does not generate style to make it compatible with frameworks that use objects for style, such as React.
* Instead, it generates 'inline' value. If true, rendering engine should add verticalAlign: -0.125em to icon.
*
* Customisations should be normalised by platform specific parser.
* Result should be converted to <svg> by platform specific parser.
* Use replaceIDs to generate unique IDs for body.
*/ function iconToSVG(icon, customisations) {
    const fullIcon = {
        ...defaultIconProps,
        ...icon
    };
    const fullCustomisations = {
        ...defaultIconCustomisations,
        ...customisations
    };
    const box = {
        left: fullIcon.left,
        top: fullIcon.top,
        width: fullIcon.width,
        height: fullIcon.height
    };
    let body = fullIcon.body;
    [
        fullIcon,
        fullCustomisations
    ].forEach((props)=>{
        const transformations = [];
        const hFlip = props.hFlip;
        const vFlip = props.vFlip;
        let rotation = props.rotate;
        if (hFlip) if (vFlip) rotation += 2;
        else {
            transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
            transformations.push("scale(-1 1)");
            box.top = box.left = 0;
        }
        else if (vFlip) {
            transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
            transformations.push("scale(1 -1)");
            box.top = box.left = 0;
        }
        let tempValue;
        if (rotation < 0) rotation -= Math.floor(rotation / 4) * 4;
        rotation = rotation % 4;
        switch(rotation){
            case 1:
                tempValue = box.height / 2 + box.top;
                transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
                break;
            case 2:
                transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
                break;
            case 3:
                tempValue = box.width / 2 + box.left;
                transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
                break;
        }
        if (rotation % 2 === 1) {
            if (box.left !== box.top) {
                tempValue = box.left;
                box.left = box.top;
                box.top = tempValue;
            }
            if (box.width !== box.height) {
                tempValue = box.width;
                box.width = box.height;
                box.height = tempValue;
            }
        }
        if (transformations.length) body = wrapSVGContent(body, "<g transform=\"" + transformations.join(" ") + "\">", "</g>");
    });
    const customisationsWidth = fullCustomisations.width;
    const customisationsHeight = fullCustomisations.height;
    const boxWidth = box.width;
    const boxHeight = box.height;
    let width;
    let height;
    if (customisationsWidth === null) {
        height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
        width = calculateSize(height, boxWidth / boxHeight);
    } else {
        width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
        height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    }
    const attributes = {};
    const setAttr = (prop, value)=>{
        if (!isUnsetKeyword(value)) attributes[prop] = value.toString();
    };
    setAttr("width", width);
    setAttr("height", height);
    const viewBox = [
        box.left,
        box.top,
        boxWidth,
        boxHeight
    ];
    attributes.viewBox = viewBox.join(" ");
    return {
        attributes,
        viewBox,
        body
    };
}
/**
* IDs usage:
*
* id="{id}"
* xlink:href="#{id}"
* url(#{id})
*
* From SVG animations:
*
* begin="0;{id}.end"
* begin="{id}.end"
* begin="{id}.click"
*/ /**
* Regular expression for finding ids
*/ const regex = /\sid="(\S+)"/g;
/**
* New random-ish prefix for ids
*
* Do not use dash, it cannot be used in SVG 2 animations
*/ const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
/**
* Counter for ids, increasing with every replacement
*/ let counter = 0;
/**
* Replace IDs in SVG output with unique IDs
*/ function replaceIDs(body) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : randomPrefix;
    const ids = [];
    let match;
    while(match = regex.exec(body))ids.push(match[1]);
    if (!ids.length) return body;
    const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    ids.forEach((id)=>{
        const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
        const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        body = body.replace(new RegExp("([#;\"])(" + escapedID + ")([\")]|\\.[a-z])", "g"), "$1" + newID + suffix + "$3");
    });
    body = body.replace(new RegExp(suffix, "g"), "");
    return body;
}
/**
* Local storate types and entries
*/ const storage = Object.create(null);
/**
* Set API module
*/ function setAPIModule(provider, item) {
    storage[provider] = item;
}
/**
* Get API module
*/ function getAPIModule(provider) {
    return storage[provider] || storage[""];
}
/**
* Create full API configuration from partial data
*/ function createAPIConfig(source) {
    let resources;
    if (typeof source.resources === "string") resources = [
        source.resources
    ];
    else {
        resources = source.resources;
        if (!(resources instanceof Array) || !resources.length) return null;
    }
    const result = {
        resources,
        path: source.path || "/",
        maxURL: source.maxURL || 500,
        rotate: source.rotate || 750,
        timeout: source.timeout || 5e3,
        random: source.random === true,
        index: source.index || 0,
        dataAfterTimeout: source.dataAfterTimeout !== false
    };
    return result;
}
/**
* Local storage
*/ const configStorage = Object.create(null);
/**
* Redundancy for API servers.
*
* API should have very high uptime because of implemented redundancy at server level, but
* sometimes bad things happen. On internet 100% uptime is not possible.
*
* There could be routing problems. Server might go down for whatever reason, but it takes
* few minutes to detect that downtime, so during those few minutes API might not be accessible.
*
* This script has some redundancy to mitigate possible network issues.
*
* If one host cannot be reached in 'rotate' (750 by default) ms, script will try to retrieve
* data from different host. Hosts have different configurations, pointing to different
* API servers hosted at different providers.
*/ const fallBackAPISources = [
    "https://api.simplesvg.com",
    "https://api.unisvg.com"
];
const fallBackAPI = [];
while(fallBackAPISources.length > 0)if (fallBackAPISources.length === 1) fallBackAPI.push(fallBackAPISources.shift());
else if (Math.random() > .5) fallBackAPI.push(fallBackAPISources.shift());
else fallBackAPI.push(fallBackAPISources.pop());
configStorage[""] = createAPIConfig({
    resources: [
        "https://api.iconify.design"
    ].concat(fallBackAPI)
});
/**
* Add custom config for provider
*/ function addAPIProvider(provider, customConfig) {
    const config = createAPIConfig(customConfig);
    if (config === null) return false;
    configStorage[provider] = config;
    return true;
}
/**
* Get API configuration
*/ function getAPIConfig(provider) {
    return configStorage[provider];
}
/**
* List API providers
*/ function listAPIProviders() {
    return Object.keys(configStorage);
}
const detectFetch = ()=>{
    let callback;
    try {
        callback = fetch;
        if (typeof callback === "function") return callback;
    } catch (err) {}
};
/**
* Fetch function
*/ let fetchModule = detectFetch();
/**
* Set custom fetch() function
*/ function setFetch(fetch$1) {
    fetchModule = fetch$1;
}
/**
* Get fetch() function. Used by Icon Finder Core
*/ function getFetch() {
    return fetchModule;
}
/**
* Calculate maximum icons list length for prefix
*/ function calculateMaxLength(provider, prefix) {
    const config = getAPIConfig(provider);
    if (!config) return 0;
    let result;
    if (!config.maxURL) result = 0;
    else {
        let maxHostLength = 0;
        config.resources.forEach((item)=>{
            const host = item;
            maxHostLength = Math.max(maxHostLength, host.length);
        });
        const url = prefix + ".json?icons=";
        result = config.maxURL - maxHostLength - config.path.length - url.length;
    }
    return result;
}
/**
* Should query be aborted, based on last HTTP status
*/ function shouldAbort(status) {
    return status === 404;
}
/**
* Prepare params
*/ const prepare = (provider, prefix, icons)=>{
    const results = [];
    const maxLength = calculateMaxLength(provider, prefix);
    const type = "icons";
    let item = {
        type,
        provider,
        prefix,
        icons: []
    };
    let length = 0;
    icons.forEach((name, index)=>{
        length += name.length + 1;
        if (length >= maxLength && index > 0) {
            results.push(item);
            item = {
                type,
                provider,
                prefix,
                icons: []
            };
            length = name.length;
        }
        item.icons.push(name);
    });
    results.push(item);
    return results;
};
/**
* Get path
*/ function getPath(provider) {
    if (typeof provider === "string") {
        const config = getAPIConfig(provider);
        if (config) return config.path;
    }
    return "/";
}
/**
* Load icons
*/ const send = (host, params, callback)=>{
    if (!fetchModule) {
        callback("abort", 424);
        return;
    }
    let path = getPath(params.provider);
    switch(params.type){
        case "icons":
            {
                const prefix = params.prefix;
                const icons = params.icons;
                const iconsList = icons.join(",");
                const urlParams = new URLSearchParams({
                    icons: iconsList
                });
                path += prefix + ".json?" + urlParams.toString();
                break;
            }
        case "custom":
            {
                const uri = params.uri;
                path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
                break;
            }
        default:
            callback("abort", 400);
            return;
    }
    let defaultError = 503;
    fetchModule(host + path).then((response)=>{
        const status = response.status;
        if (status !== 200) {
            setTimeout(()=>{
                callback(shouldAbort(status) ? "abort" : "next", status);
            });
            return;
        }
        defaultError = 501;
        return response.json();
    }).then((data)=>{
        if (typeof data !== "object" || data === null) {
            setTimeout(()=>{
                if (data === 404) callback("abort", data);
                else callback("next", defaultError);
            });
            return;
        }
        setTimeout(()=>{
            callback("success", data);
        });
    }).catch(()=>{
        callback("next", defaultError);
    });
};
/**
* Export module
*/ const fetchAPIModule = {
    prepare,
    send
};
/**
* Remove callback
*/ function removeCallback(storages, id) {
    storages.forEach((storage)=>{
        const items = storage.loaderCallbacks;
        if (items) storage.loaderCallbacks = items.filter((row)=>row.id !== id);
    });
}
/**
* Update all callbacks for provider and prefix
*/ function updateCallbacks(storage) {
    if (!storage.pendingCallbacksFlag) {
        storage.pendingCallbacksFlag = true;
        setTimeout(()=>{
            storage.pendingCallbacksFlag = false;
            const items = storage.loaderCallbacks ? storage.loaderCallbacks.slice(0) : [];
            if (!items.length) return;
            let hasPending = false;
            const provider = storage.provider;
            const prefix = storage.prefix;
            items.forEach((item)=>{
                const icons = item.icons;
                const oldLength = icons.pending.length;
                icons.pending = icons.pending.filter((icon)=>{
                    if (icon.prefix !== prefix) return true;
                    const name = icon.name;
                    if (storage.icons[name]) icons.loaded.push({
                        provider,
                        prefix,
                        name
                    });
                    else if (storage.missing.has(name)) icons.missing.push({
                        provider,
                        prefix,
                        name
                    });
                    else {
                        hasPending = true;
                        return true;
                    }
                    return false;
                });
                if (icons.pending.length !== oldLength) {
                    if (!hasPending) removeCallback([
                        storage
                    ], item.id);
                    item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
                }
            });
        });
    }
}
/**
* Unique id counter for callbacks
*/ let idCounter = 0;
/**
* Add callback
*/ function storeCallback(callback, icons, pendingSources) {
    const id = idCounter++;
    const abort = removeCallback.bind(null, pendingSources, id);
    if (!icons.pending.length) return abort;
    const item = {
        id,
        icons,
        callback,
        abort
    };
    pendingSources.forEach((storage)=>{
        (storage.loaderCallbacks || (storage.loaderCallbacks = [])).push(item);
    });
    return abort;
}
/**
* Check if icons have been loaded
*/ function sortIcons(icons) {
    const result = {
        loaded: [],
        missing: [],
        pending: []
    };
    const storage = Object.create(null);
    icons.sort((a, b)=>{
        if (a.provider !== b.provider) return a.provider.localeCompare(b.provider);
        if (a.prefix !== b.prefix) return a.prefix.localeCompare(b.prefix);
        return a.name.localeCompare(b.name);
    });
    let lastIcon = {
        provider: "",
        prefix: "",
        name: ""
    };
    icons.forEach((icon)=>{
        if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) return;
        lastIcon = icon;
        const provider = icon.provider;
        const prefix = icon.prefix;
        const name = icon.name;
        const providerStorage = storage[provider] || (storage[provider] = Object.create(null));
        const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
        let list;
        if (name in localStorage.icons) list = result.loaded;
        else if (prefix === "" || localStorage.missing.has(name)) list = result.missing;
        else list = result.pending;
        const item = {
            provider,
            prefix,
            name
        };
        list.push(item);
    });
    return result;
}
/**
* Convert icons list from string/icon mix to icons and validate them
*/ function listToIcons(list) {
    let validate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, simpleNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const result = [];
    list.forEach((item)=>{
        const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames) : item;
        if (icon) result.push(icon);
    });
    return result;
}
/**
* Default RedundancyConfig for API calls
*/ const defaultConfig = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: false,
    dataAfterTimeout: false
};
/**
* Send query
*/ function sendQuery(config, payload, query, done) {
    const resourcesCount = config.resources.length;
    const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
    let resources;
    if (config.random) {
        let list = config.resources.slice(0);
        resources = [];
        while(list.length > 1){
            const nextIndex = Math.floor(Math.random() * list.length);
            resources.push(list[nextIndex]);
            list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
        }
        resources = resources.concat(list);
    } else resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
    const startTime = Date.now();
    let status = "pending";
    let queriesSent = 0;
    let lastError;
    let timer = null;
    let queue = [];
    let doneCallbacks = [];
    if (typeof done === "function") doneCallbacks.push(done);
    /**
	* Reset timer
	*/ function resetTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    /**
	* Abort everything
	*/ function abort() {
        if (status === "pending") status = "aborted";
        resetTimer();
        queue.forEach((item)=>{
            if (item.status === "pending") item.status = "aborted";
        });
        queue = [];
    }
    /**
	* Add / replace callback to call when execution is complete.
	* This can be used to abort pending query implementations when query is complete or aborted.
	*/ function subscribe(callback, overwrite) {
        if (overwrite) doneCallbacks = [];
        if (typeof callback === "function") doneCallbacks.push(callback);
    }
    /**
	* Get query status
	*/ function getQueryStatus() {
        return {
            startTime,
            payload,
            status,
            queriesSent,
            queriesPending: queue.length,
            subscribe,
            abort
        };
    }
    /**
	* Fail query
	*/ function failQuery() {
        status = "failed";
        doneCallbacks.forEach((callback)=>{
            callback(void 0, lastError);
        });
    }
    /**
	* Clear queue
	*/ function clearQueue() {
        queue.forEach((item)=>{
            if (item.status === "pending") item.status = "aborted";
        });
        queue = [];
    }
    /**
	* Got response from module
	*/ function moduleResponse(item, response, data) {
        const isError = response !== "success";
        queue = queue.filter((queued)=>queued !== item);
        switch(status){
            case "pending":
                break;
            case "failed":
                if (isError || !config.dataAfterTimeout) return;
                break;
            default:
                return;
        }
        if (response === "abort") {
            lastError = data;
            failQuery();
            return;
        }
        if (isError) {
            lastError = data;
            if (!queue.length) if (!resources.length) failQuery();
            else execNext();
            return;
        }
        resetTimer();
        clearQueue();
        if (!config.random) {
            const index = config.resources.indexOf(item.resource);
            if (index !== -1 && index !== config.index) config.index = index;
        }
        status = "completed";
        doneCallbacks.forEach((callback)=>{
            callback(data);
        });
    }
    /**
	* Execute next query
	*/ function execNext() {
        if (status !== "pending") return;
        resetTimer();
        const resource = resources.shift();
        if (resource === void 0) {
            if (queue.length) {
                timer = setTimeout(()=>{
                    resetTimer();
                    if (status === "pending") {
                        clearQueue();
                        failQuery();
                    }
                }, config.timeout);
                return;
            }
            failQuery();
            return;
        }
        const item = {
            status: "pending",
            resource,
            callback: (status$1, data)=>{
                moduleResponse(item, status$1, data);
            }
        };
        queue.push(item);
        queriesSent++;
        timer = setTimeout(execNext, config.rotate);
        query(resource, payload, item.callback);
    }
    setTimeout(execNext);
    return getQueryStatus;
}
/**
* Redundancy instance
*/ function initRedundancy(cfg) {
    const config = {
        ...defaultConfig,
        ...cfg
    };
    let queries = [];
    /**
	* Remove aborted and completed queries
	*/ function cleanup() {
        queries = queries.filter((item)=>item().status === "pending");
    }
    /**
	* Send query
	*/ function query(payload, queryCallback, doneCallback) {
        const query$1 = sendQuery(config, payload, queryCallback, (data, error)=>{
            cleanup();
            if (doneCallback) doneCallback(data, error);
        });
        queries.push(query$1);
        return query$1;
    }
    /**
	* Find instance
	*/ function find(callback) {
        return queries.find((value)=>{
            return callback(value);
        }) || null;
    }
    const instance = {
        query,
        find,
        setIndex: (index)=>{
            config.index = index;
        },
        getIndex: ()=>config.index,
        cleanup
    };
    return instance;
}
function emptyCallback$1() {}
const redundancyCache = Object.create(null);
/**
* Get Redundancy instance for provider
*/ function getRedundancyCache(provider) {
    if (!redundancyCache[provider]) {
        const config = getAPIConfig(provider);
        if (!config) return;
        const redundancy = initRedundancy(config);
        const cachedReundancy = {
            config,
            redundancy
        };
        redundancyCache[provider] = cachedReundancy;
    }
    return redundancyCache[provider];
}
/**
* Send API query
*/ function sendAPIQuery(target, query, callback) {
    let redundancy;
    let send;
    if (typeof target === "string") {
        const api = getAPIModule(target);
        if (!api) {
            callback(void 0, 424);
            return emptyCallback$1;
        }
        send = api.send;
        const cached = getRedundancyCache(target);
        if (cached) redundancy = cached.redundancy;
    } else {
        const config = createAPIConfig(target);
        if (config) {
            redundancy = initRedundancy(config);
            const moduleKey = target.resources ? target.resources[0] : "";
            const api = getAPIModule(moduleKey);
            if (api) send = api.send;
        }
    }
    if (!redundancy || !send) {
        callback(void 0, 424);
        return emptyCallback$1;
    }
    return redundancy.query(query, send, callback)().abort;
}
function emptyCallback() {}
/**
* Function called when new icons have been loaded
*/ function loadedNewIcons(storage) {
    if (!storage.iconsLoaderFlag) {
        storage.iconsLoaderFlag = true;
        setTimeout(()=>{
            storage.iconsLoaderFlag = false;
            updateCallbacks(storage);
        });
    }
}
/**
* Check icon names for API
*/ function checkIconNamesForAPI(icons) {
    const valid = [];
    const invalid = [];
    icons.forEach((name)=>{
        (name.match(matchIconName) ? valid : invalid).push(name);
    });
    return {
        valid,
        invalid
    };
}
/**
* Parse loader response
*/ function parseLoaderResponse(storage, icons, data) {
    function checkMissing() {
        const pending = storage.pendingIcons;
        icons.forEach((name)=>{
            if (pending) pending.delete(name);
            if (!storage.icons[name]) storage.missing.add(name);
        });
    }
    if (data && typeof data === "object") try {
        const parsed = addIconSet(storage, data);
        if (!parsed.length) {
            checkMissing();
            return;
        }
    } catch (err) {
        console.error(err);
    }
    checkMissing();
    loadedNewIcons(storage);
}
/**
* Handle response that can be async
*/ function parsePossiblyAsyncResponse(response, callback) {
    if (response instanceof Promise) response.then((data)=>{
        callback(data);
    }).catch(()=>{
        callback(null);
    });
    else callback(response);
}
/**
* Load icons
*/ function loadNewIcons(storage, icons) {
    if (!storage.iconsToLoad) storage.iconsToLoad = icons;
    else storage.iconsToLoad = storage.iconsToLoad.concat(icons).sort();
    if (!storage.iconsQueueFlag) {
        storage.iconsQueueFlag = true;
        setTimeout(()=>{
            storage.iconsQueueFlag = false;
            const { provider, prefix } = storage;
            const icons$1 = storage.iconsToLoad;
            delete storage.iconsToLoad;
            if (!icons$1 || !icons$1.length) return;
            const customIconLoader = storage.loadIcon;
            if (storage.loadIcons && (icons$1.length > 1 || !customIconLoader)) {
                parsePossiblyAsyncResponse(storage.loadIcons(icons$1, prefix, provider), (data)=>{
                    parseLoaderResponse(storage, icons$1, data);
                });
                return;
            }
            if (customIconLoader) {
                icons$1.forEach((name)=>{
                    const response = customIconLoader(name, prefix, provider);
                    parsePossiblyAsyncResponse(response, (data)=>{
                        const iconSet = data ? {
                            prefix,
                            icons: {
                                [name]: data
                            }
                        } : null;
                        parseLoaderResponse(storage, [
                            name
                        ], iconSet);
                    });
                });
                return;
            }
            const { valid, invalid } = checkIconNamesForAPI(icons$1);
            if (invalid.length) parseLoaderResponse(storage, invalid, null);
            if (!valid.length) return;
            const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
            if (!api) {
                parseLoaderResponse(storage, valid, null);
                return;
            }
            const params = api.prepare(provider, prefix, valid);
            params.forEach((item)=>{
                sendAPIQuery(provider, item, (data)=>{
                    parseLoaderResponse(storage, item.icons, data);
                });
            });
        });
    }
}
/**
* Load icons
*/ const loadIcons = (icons, callback)=>{
    const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
    const sortedIcons = sortIcons(cleanedIcons);
    if (!sortedIcons.pending.length) {
        let callCallback = true;
        if (callback) setTimeout(()=>{
            if (callCallback) callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
        });
        return ()=>{
            callCallback = false;
        };
    }
    const newIcons = Object.create(null);
    const sources = [];
    let lastProvider, lastPrefix;
    sortedIcons.pending.forEach((icon)=>{
        const { provider, prefix } = icon;
        if (prefix === lastPrefix && provider === lastProvider) return;
        lastProvider = provider;
        lastPrefix = prefix;
        sources.push(getStorage(provider, prefix));
        const providerNewIcons = newIcons[provider] || (newIcons[provider] = Object.create(null));
        if (!providerNewIcons[prefix]) providerNewIcons[prefix] = [];
    });
    sortedIcons.pending.forEach((icon)=>{
        const { provider, prefix, name } = icon;
        const storage = getStorage(provider, prefix);
        const pendingQueue = storage.pendingIcons || (storage.pendingIcons = /* @__PURE__ */ new Set());
        if (!pendingQueue.has(name)) {
            pendingQueue.add(name);
            newIcons[provider][prefix].push(name);
        }
    });
    sources.forEach((storage)=>{
        const list = newIcons[storage.provider][storage.prefix];
        if (list.length) loadNewIcons(storage, list);
    });
    return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
/**
* Load one icon using Promise
*/ const loadIcon = (icon)=>{
    return new Promise((fulfill, reject)=>{
        const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
        if (!iconObj) {
            reject(icon);
            return;
        }
        loadIcons([
            iconObj || icon
        ], (loaded)=>{
            if (loaded.length && iconObj) {
                const data = getIconData(iconObj);
                if (data) {
                    fulfill({
                        ...defaultIconProps,
                        ...data
                    });
                    return;
                }
            }
            reject(icon);
        });
    });
};
/**
* Set custom loader for multiple icons
*/ function setCustomIconsLoader(loader, prefix, provider) {
    getStorage(provider || "", prefix).loadIcons = loader;
}
/**
* Set custom loader for one icon
*/ function setCustomIconLoader(loader, prefix, provider) {
    getStorage(provider || "", prefix).loadIcon = loader;
}
/**
* Convert IconifyIconCustomisations to FullIconCustomisations, checking value types
*/ function mergeCustomisations(defaults, item) {
    const result = {
        ...defaults
    };
    for(const key in item){
        const value = item[key];
        const valueType = typeof value;
        if (key in defaultIconSizeCustomisations) {
            if (value === null || value && (valueType === "string" || valueType === "number")) result[key] = value;
        } else if (valueType === typeof result[key]) result[key] = key === "rotate" ? value % 4 : value;
    }
    return result;
}
const separator = /[\s,]+/;
/**
* Apply "flip" string to icon customisations
*/ function flipFromString(custom, flip) {
    flip.split(separator).forEach((str)=>{
        const value = str.trim();
        switch(value){
            case "horizontal":
                custom.hFlip = true;
                break;
            case "vertical":
                custom.vFlip = true;
                break;
        }
    });
}
/**
* Get rotation value
*/ function rotateFromString(value) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const units = value.replace(/^-?[0-9.]*/, "");
    function cleanup(value$1) {
        while(value$1 < 0)value$1 += 4;
        return value$1 % 4;
    }
    if (units === "") {
        const num = parseInt(value);
        return isNaN(num) ? 0 : cleanup(num);
    } else if (units !== value) {
        let split = 0;
        switch(units){
            case "%":
                split = 25;
                break;
            case "deg":
                split = 90;
        }
        if (split) {
            let num = parseFloat(value.slice(0, value.length - units.length));
            if (isNaN(num)) return 0;
            num = num / split;
            return num % 1 === 0 ? cleanup(num) : 0;
        }
    }
    return defaultValue;
}
/**
* Generate <svg>
*/ function iconToHTML(body, attributes) {
    let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
    for(const attr in attributes)renderAttribsHTML += " " + attr + "=\"" + attributes[attr] + "\"";
    return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + renderAttribsHTML + ">" + body + "</svg>";
}
/**
* Encode SVG for use in url()
*
* Short alternative to encodeURIComponent() that encodes only stuff used in SVG, generating
* smaller code.
*/ function encodeSVGforURL(svg) {
    return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
/**
* Generate data: URL from SVG
*/ function svgToData(svg) {
    return "data:image/svg+xml," + encodeSVGforURL(svg);
}
/**
* Generate url() from SVG
*/ function svgToURL(svg) {
    return "url(\"" + svgToData(svg) + "\")";
}
let policy;
/**
* Attempt to create policy
*/ function createPolicy() {
    try {
        policy = window.trustedTypes.createPolicy("iconify", {
            createHTML: (s)=>s
        });
    } catch (err) {
        policy = null;
    }
}
/**
* Clean up value for innerHTML assignment
*
* This code doesn't actually clean up anything.
* It is intended be used with Iconify icon data, which has already been validated
*/ function cleanUpInnerHTML(html) {
    if (policy === void 0) createPolicy();
    return policy ? policy.createHTML(html) : html;
}
const defaultExtendedIconCustomisations = {
    ...defaultIconCustomisations,
    inline: false
};
/**
 * Default SVG attributes
 */ const svgDefaults = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlnsXlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': true,
    'role': 'img'
};
/**
 * Style modes
 */ const commonProps = {
    display: 'inline-block'
};
const monotoneProps = {
    backgroundColor: 'currentColor'
};
const coloredProps = {
    backgroundColor: 'transparent'
};
// Dynamically add common props to variables above
const propsToAdd = {
    Image: 'var(--svg)',
    Repeat: 'no-repeat',
    Size: '100% 100%'
};
const propsToAddTo = {
    WebkitMask: monotoneProps,
    mask: monotoneProps,
    background: coloredProps
};
for(const prefix in propsToAddTo){
    const list = propsToAddTo[prefix];
    for(const prop in propsToAdd){
        list[prefix + prop] = propsToAdd[prop];
    }
}
/**
 * Default values for customisations for inline icon
 */ const inlineDefaults = {
    ...defaultExtendedIconCustomisations,
    inline: true
};
/**
 * Fix size: add 'px' to numbers
 */ function fixSize(value) {
    return value + (value.match(/^[-0-9.]+$/) ? 'px' : '');
}
/**
 * Render icon
 */ const render = (// Icon must be validated before calling this function
icon, // Partial properties
props, // Icon name
name)=>{
    // Get default properties
    const defaultProps = props.inline ? inlineDefaults : defaultExtendedIconCustomisations;
    // Get all customisations
    const customisations = mergeCustomisations(defaultProps, props);
    // Check mode
    const mode = props.mode || 'svg';
    // Create style
    const style = {};
    const customStyle = props.style || {};
    // Create SVG component properties
    const componentProps = {
        ...mode === 'svg' ? svgDefaults : {}
    };
    if (name) {
        const iconName = stringToIcon(name, false, true);
        if (iconName) {
            const classNames = [
                'iconify'
            ];
            const props = [
                'provider',
                'prefix'
            ];
            for (const prop of props){
                if (iconName[prop]) {
                    classNames.push('iconify--' + iconName[prop]);
                }
            }
            componentProps.className = classNames.join(' ');
        }
    }
    // Get element properties
    for(let key in props){
        const value = props[key];
        if (value === void 0) {
            continue;
        }
        switch(key){
            // Properties to ignore
            case 'icon':
            case 'style':
            case 'children':
            case 'onLoad':
            case 'mode':
            case 'ssr':
            case 'fallback':
                break;
            // Forward ref
            case '_ref':
                componentProps.ref = value;
                break;
            // Merge class names
            case 'className':
                componentProps[key] = (componentProps[key] ? componentProps[key] + ' ' : '') + value;
                break;
            // Boolean attributes
            case 'inline':
            case 'hFlip':
            case 'vFlip':
                customisations[key] = value === true || value === 'true' || value === 1;
                break;
            // Flip as string: 'horizontal,vertical'
            case 'flip':
                if (typeof value === 'string') {
                    flipFromString(customisations, value);
                }
                break;
            // Color: copy to style
            case 'color':
                style.color = value;
                break;
            // Rotation as string
            case 'rotate':
                if (typeof value === 'string') {
                    customisations[key] = rotateFromString(value);
                } else if (typeof value === 'number') {
                    customisations[key] = value;
                }
                break;
            // Remove aria-hidden
            case 'ariaHidden':
            case 'aria-hidden':
                if (value !== true && value !== 'true') {
                    delete componentProps['aria-hidden'];
                }
                break;
            // Copy missing property if it does not exist in customisations
            default:
                if (defaultProps[key] === void 0) {
                    componentProps[key] = value;
                }
        }
    }
    // Generate icon
    const item = iconToSVG(icon, customisations);
    const renderAttribs = item.attributes;
    // Inline display
    if (customisations.inline) {
        style.verticalAlign = '-0.125em';
    }
    if (mode === 'svg') {
        // Add style
        componentProps.style = {
            ...style,
            ...customStyle
        };
        // Add icon stuff
        Object.assign(componentProps, renderAttribs);
        // Counter for ids based on "id" property to render icons consistently on server and client
        let localCounter = 0;
        let id = props.id;
        if (typeof id === 'string') {
            // Convert '-' to '_' to avoid errors in animations
            id = id.replace(/-/g, '_');
        }
        // Add icon stuff
        componentProps.dangerouslySetInnerHTML = {
            __html: cleanUpInnerHTML(replaceIDs(item.body, id ? ()=>id + 'ID' + localCounter++ : 'iconifyReact'))
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('svg', componentProps);
    }
    // Render <span> with style
    const { body, width, height } = icon;
    const useMask = mode === 'mask' || (mode === 'bg' ? false : body.indexOf('currentColor') !== -1);
    // Generate SVG
    const html = iconToHTML(body, {
        ...renderAttribs,
        width: width + '',
        height: height + ''
    });
    // Generate style
    componentProps.style = {
        ...style,
        '--svg': svgToURL(html),
        'width': fixSize(renderAttribs.width),
        'height': fixSize(renderAttribs.height),
        ...commonProps,
        ...useMask ? monotoneProps : coloredProps,
        ...customStyle
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('span', componentProps);
};
/**
 * Initialise stuff
 */ // Enable short names
allowSimpleNames(true);
// Set API module
setAPIModule('', fetchAPIModule);
/**
 * Browser stuff
 */ if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    const _window = window;
    // Load icons from global "IconifyPreload"
    if (_window.IconifyPreload !== void 0) {
        const preload = _window.IconifyPreload;
        const err = 'Invalid IconifyPreload syntax.';
        if (typeof preload === 'object' && preload !== null) {
            (preload instanceof Array ? preload : [
                preload
            ]).forEach((item)=>{
                try {
                    if (// Check if item is an object and not null/array
                    typeof item !== 'object' || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
                    typeof item.icons !== 'object' || typeof item.prefix !== 'string' || // Add icon set
                    !addCollection(item)) {
                        console.error(err);
                    }
                } catch (e) {
                    console.error(err);
                }
            });
        }
    }
    // Set API from global "IconifyProviders"
    if (_window.IconifyProviders !== void 0) {
        const providers = _window.IconifyProviders;
        if (typeof providers === 'object' && providers !== null) {
            for(let key in providers){
                const err = 'IconifyProviders[' + key + '] is invalid.';
                try {
                    const value = providers[key];
                    if (typeof value !== 'object' || !value || value.resources === void 0) {
                        continue;
                    }
                    if (!addAPIProvider(key, value)) {
                        console.error(err);
                    }
                } catch (e) {
                    console.error(err);
                }
            }
        }
    }
}
function IconComponent(props) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!props.ssr);
    const [abort, setAbort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Get initial state
    function getInitialState(mounted) {
        if (mounted) {
            const name = props.icon;
            if (typeof name === 'object') {
                // Icon as object
                return {
                    name: '',
                    data: name
                };
            }
            const data = getIconData(name);
            if (data) {
                return {
                    name,
                    data
                };
            }
        }
        return {
            name: ''
        };
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialState(!!props.ssr));
    // Cancel loading
    function cleanup() {
        const callback = abort.callback;
        if (callback) {
            callback();
            setAbort({});
        }
    }
    // Change state if it is different
    function changeState(newState) {
        if (JSON.stringify(state) !== JSON.stringify(newState)) {
            cleanup();
            setState(newState);
            return true;
        }
    }
    // Update state
    function updateState() {
        var _a;
        const name = props.icon;
        if (typeof name === 'object') {
            // Icon as object
            changeState({
                name: '',
                data: name
            });
            return;
        }
        // New icon or got icon data
        const data = getIconData(name);
        if (changeState({
            name,
            data
        })) {
            if (data === undefined) {
                // Load icon, update state when done
                const callback = loadIcons([
                    name
                ], updateState);
                setAbort({
                    callback
                });
            } else if (data) {
                // Icon data is available: trigger onLoad callback if present
                (_a = props.onLoad) === null || _a === void 0 ? void 0 : _a.call(props, name);
            }
        }
    }
    // Mounted state, cleanup for loader
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconComponent.useEffect": ()=>{
            setMounted(true);
            return cleanup;
        }
    }["IconComponent.useEffect"], []);
    // Icon changed or component mounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconComponent.useEffect": ()=>{
            if (mounted) {
                updateState();
            }
        }
    }["IconComponent.useEffect"], [
        props.icon,
        mounted
    ]);
    // Render icon
    const { name, data } = state;
    if (!data) {
        return props.children ? props.children : props.fallback ? props.fallback : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])('span', {});
    }
    return render({
        ...defaultIconProps,
        ...data
    }, props, name);
}
/**
 * Block icon
 *
 * @param props - Component properties
 */ const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>IconComponent({
        ...props,
        _ref: ref
    }));
/**
 * Inline icon (has negative verticalAlign that makes it behave like icon font)
 *
 * @param props - Component properties
 */ const InlineIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>IconComponent({
        inline: true,
        ...props,
        _ref: ref
    }));
/**
 * Internal API
 */ const _api = {
    getAPIConfig,
    setAPIModule,
    sendAPIQuery,
    setFetch,
    getFetch,
    listAPIProviders
};
;
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        'image/webp'
    ],
    maximumDiskCacheSize: undefined,
    maximumResponseBody: 50000000,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: undefined,
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === 'w' ? w : i + 1) + kind).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        var _c_qualities;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        var _config_localPatterns;
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if ((style == null ? void 0 : style.position) && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if ((style == null ? void 0 : style.width) && style.width !== '100%') {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if ((style == null ? void 0 : style.height) && style.height !== '100%') {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" is missing required "width" property.'), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".'), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" is missing required "height" property.'), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".'), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.'), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error('Image with src "' + src + '" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.'), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(',') + "."), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error('Image with src "' + src + '" has both "priority" and "loading=\'lazy\'" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".'), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
            }
        }
        if (qualityInt && qualityInt !== 75 && !config.qualities) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using quality "' + qualityInt + '" which is not configured in images.qualities. This config will be required starting in Next.js 16.' + "\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities");
        }
        if (src.startsWith('/') && src.includes('?') && (!(config == null ? void 0 : (_config_localPatterns = config.localPatterns) == null ? void 0 : _config_localPatterns.length) || config.localPatterns.length === 1 && config.localPatterns[0].pathname === '/_next/static/media/**')) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using a query string which is not configured in images.localPatterns. This config will be required starting in Next.js 16.' + "\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns");
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error('Image with src "' + src + '" has "placeholder=\'blur\'" property but is missing the "blurDataURL" property.\n        Possible solutions:\n          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image\n          - Change the "src" property to a static import with one of the supported file types: ' + VALID_BLUR_EXT.join(',') + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url'), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width");
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?' + "\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13");
            }
        }
        if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    var _entry_element;
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || '';
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && !lcpImage.priority && lcpImage.placeholder === 'empty' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.' + "\nRead more: https://nextjs.org/docs/api-reference/next/image#priority");
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && (blurDataURL == null ? void 0 : blurDataURL.startsWith('/'))) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                priority,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: isLazy ? 'lazy' : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    var _headManager_mountedInstances;
                    headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AmpStateContext", {
    enumerable: true,
    get: function() {
        return AmpStateContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const AmpStateContext = _react.default.createContext({});
if ("TURBOPACK compile-time truthy", 1) {
    AmpStateContext.displayName = 'AmpStateContext';
} //# sourceMappingURL=amp-context.shared-runtime.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/amp-mode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isInAmpMode", {
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
});
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _ampcontextsharedruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/amp-context.shared-runtime.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _ampmode = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/amp-mode.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset")
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport"));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? '<script> tag with src="' + c.props['src'] + '"' : "inline <script>";
                (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props['href'] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = 'ImageConfigContext';
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
                }
                return false;
            };
            function picomatch(t, e) {
                let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = "[^".concat(e, "]");
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = "(?:".concat(r, "|$)");
            const p = "(?:^|".concat(r, ")");
            const l = "".concat(n, "{1,2}").concat(c);
            const f = "(?!".concat(n, ")");
            const A = "(?!".concat(p).concat(l, ")");
            const _ = "(?!".concat(n, "{0,1}").concat(c, ")");
            const R = "(?!".concat(l, ")");
            const E = "[^.".concat(r, "]");
            const h = "".concat(i, "*?");
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: "[".concat(e, "]"),
                QMARK: u,
                STAR: "".concat(u, "*?"),
                DOTS_SLASH: "".concat(n, "{1,2}(?:[").concat(e, "]|$)"),
                NO_DOT: "(?!".concat(n, ")"),
                NO_DOTS: "(?!(?:^|[".concat(e, "])").concat(n, "{1,2}(?:[").concat(e, "]|$))"),
                NO_DOT_SLASH: "(?!".concat(n, "{0,1}(?:[").concat(e, "]|$))"),
                NO_DOTS_SLASH: "(?!".concat(n, "{1,2}(?:[").concat(e, "]|$))"),
                QMARK_NO_DOT: "[^.".concat(e, "]"),
                START_ANCHOR: "(?:^|[".concat(e, "])"),
                END_ANCHOR: "(?:[".concat(e, "]|$)"),
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: "))".concat(t.STAR, ")")
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = "[".concat(t.join("-"), "]");
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>"Missing ".concat(t, ': "').concat(e, '" - use "\\\\').concat(e, '" to match literal characters');
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError("Input length: ".concat(l, ", exceeds maximum allowed length: ").concat(p));
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>"(".concat(_, "(?:(?!").concat(L).concat(t.dot ? y : h, ").)*?)");
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = "(".concat(k, ")");
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = function() {
                    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
                    return t[m.index + e];
                };
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = function() {
                    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = ")$))".concat(s);
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = ")".concat(u, ")").concat(s, ")");
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : "\\".concat(t);
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = "\\".concat(G);
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = "\\".concat(G);
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = "\\".concat(G);
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: "\\".concat(G)
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: "\\".concat(G)
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = "/".concat(G);
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = "(".concat(_).concat(e, "|").concat(B.value, ")");
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = "\\".concat(G);
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = "\\".concat(G);
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = "(?:".concat(n.output);
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = "(?:".concat(n.output);
                            B.type = "globstar";
                            B.output = "".concat(globstar(u)).concat(b, "|").concat(b).concat(t, ")");
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = "(?:^|".concat(b, "|").concat(globstar(u)).concat(b, ")");
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: "".concat(b, "?")
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError("Input length: ".concat(a, ", exceeds maximum allowed length: ").concat(r));
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = "(".concat($, ")");
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return "(".concat(C, "(?:(?!").concat(h).concat(t.dot ? f : i, ").)*?)");
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return "".concat(g).concat(l).concat($);
                        case ".*":
                            return "".concat(i).concat(l).concat($);
                        case "*.*":
                            return "".concat(g).concat($).concat(i).concat(l).concat($);
                        case "*/*":
                            return "".concat(g).concat($).concat(p).concat(l).concat(b).concat($);
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return "(?:".concat(g).concat(globstar(u)).concat(p, ")?").concat(b).concat(l).concat($);
                        case "**/*.*":
                            return "(?:".concat(g).concat(globstar(u)).concat(p, ")?").concat(b).concat($).concat(i).concat(l).concat($);
                        case "**/.*":
                            return "(?:".concat(g).concat(globstar(u)).concat(p, ")?").concat(i).concat(l).concat($);
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += "".concat(p, "?");
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = function(t, e) {
                let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = function(u) {
                    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = function(t, e, u) {
                let { glob: n, posix: o } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = function(t, e) {
                let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = "".concat(s, "(?:").concat(t.output, ")").concat(r);
                if (t && t.negated === true) {
                    a = "^(?!".concat(a, ").*$");
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = function(t) {
                let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return "".concat(t.slice(0, o), "\\").concat(t.slice(o));
            };
            e.removePrefix = function(t) {
                let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = function(t) {
                let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = "".concat(n, "(?:").concat(t, ")").concat(o);
                if (e.negated === true) {
                    s = "(?:^(?!".concat(s, ").*$)");
                }
                return s;
            };
            e.basename = function(t) {
                let { windows: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Projects/growve_logistic_website/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    var _pattern_pathname;
    if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern)), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    var _pattern_pathname;
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const DEFAULT_Q = 75;
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    var _config_qualities;
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error("Next Image Optimization requires " + missingValues.join(', ') + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
                src,
                width,
                quality
            })), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error("Invalid src prop (" + src + ") on `next/image` does not match `images.localPatterns` configured in your `next.config.js`\n" + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\n' + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host"), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (quality && config.qualities && !config.qualities.includes(quality)) {
            throw Object.defineProperty(new Error("Invalid quality prop (" + quality + ") on `next/image` does not match `images.qualities` configured in your `next.config.js`\n" + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-qualities"), "__NEXT_ERROR_CODE", {
                value: "E623",
                enumerable: false,
                configurable: true
            });
        }
    }
    const q = quality || ((_config_qualities = config.qualities) == null ? void 0 : _config_qualities.reduce((prev, cur)=>Math.abs(cur - DEFAULT_Q) < Math.abs(prev - DEFAULT_Q) ? cur : prev)) || DEFAULT_Q;
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + q + (src.startsWith('/_next/static/media/') && ("TURBOPACK compile-time value", false) ? "TURBOPACK unreachable" : '');
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 16),
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", false),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", [])
});
if (typeof window === 'undefined') {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img == null ? void 0 : img.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                        } else {
                            (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(',') + ".");
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles \'width: "auto"\' or \'height: "auto"\' to maintain the aspect ratio.');
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error('Image is missing required "src" property:', img);
            }
            if (img.getAttribute('alt') === null) {
                console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        var _c_qualities;
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.priority ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 16),
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/Projects/growve_logistic_website/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Projects/growve_logistic_website/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/Typography/typographyClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypographyUtilityClass",
    ()=>getTypographyUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs [app-client] (ecmascript)");
;
;
function getTypographyUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClass$2f$generateUtilityClass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTypography', slot);
}
const typographyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom'
]);
const __TURBOPACK__default__export__ = typographyClasses;
}),
"[project]/Projects/growve_logistic_website/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypographyRoot",
    ()=>TypographyRoot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/utils/composeClasses/composeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/styles/styled.mjs [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/memoTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/capitalize.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$typographyClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/@mui/material/Typography/typographyClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const useUtilityClasses = (ownerState)=>{
    const { align, gutterBottom, noWrap, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            ownerState.align !== 'inherit' && "align".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(align)),
            gutterBottom && 'gutterBottom',
            noWrap && 'noWrap'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$utils$2f$composeClasses$2f$composeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$typographyClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypographyUtilityClass"], classes);
};
const TypographyRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.variant && styles[ownerState.variant],
            ownerState.align !== 'inherit' && styles["align".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ownerState.align))],
            ownerState.noWrap && styles.noWrap,
            ownerState.gutterBottom && styles.gutterBottom
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$memoTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    var _theme_palette;
    return {
        margin: 0,
        variants: [
            {
                props: {
                    variant: 'inherit'
                },
                style: {
                    // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
                    font: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: 'inherit'
                }
            },
            ...Object.entries(theme.typography).filter((param)=>{
                let [variant, value] = param;
                return variant !== 'inherit' && value && typeof value === 'object';
            }).map((param)=>{
                let [variant, value] = param;
                return {
                    props: {
                        variant
                    },
                    style: value
                };
            }),
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$createSimplePaletteValueFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(((_theme_palette = theme.palette) === null || _theme_palette === void 0 ? void 0 : _theme_palette.text) || {}).filter((param)=>{
                let [, value] = param;
                return typeof value === 'string';
            }).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color: "text".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$utils$2f$capitalize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(color))
                    },
                    style: {
                        color: (theme.vars || theme).palette.text[color]
                    }
                };
            }),
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.align !== 'inherit';
                },
                style: {
                    textAlign: 'var(--Typography-textAlign)'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.noWrap;
                },
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.gutterBottom;
                },
                style: {
                    marginBottom: '0.35em'
                }
            }
        ]
    };
}));
const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
};
const Typography = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Typography(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiTypography'
    });
    const { color, align = 'inherit', className, component, gutterBottom = false, noWrap = false, variant = 'body1', variantMapping = defaultVariantMapping, ...other } = props;
    const ownerState = {
        ...props,
        align,
        color,
        className,
        component,
        gutterBottom,
        noWrap,
        variant,
        variantMapping
    };
    const Component = component || variantMapping[variant] || defaultVariantMapping[variant] || 'span';
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TypographyRoot, {
        as: Component,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ...other,
        ownerState: ownerState,
        style: {
            ...align !== 'inherit' && {
                '--Typography-textAlign': align
            },
            ...other.style
        }
    });
});
("TURBOPACK compile-time truthy", 1) ? Typography.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Set the text-align on the component.
   * @default 'inherit'
   */ align: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'center',
        'inherit',
        'justify',
        'left',
        'right'
    ]),
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'primary',
            'secondary',
            'success',
            'error',
            'info',
            'warning',
            'textPrimary',
            'textSecondary',
            'textDisabled'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */ gutterBottom: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */ noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * Applies the theme typography styles.
   * @default 'body1'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
            'body1',
            'body2',
            'button',
            'caption',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'inherit',
            'overline',
            'subtitle1',
            'subtitle2'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */ variantMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve_logistic_website$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .object
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Typography;
}),
]);

//# sourceMappingURL=2a1e7_4fcac383._.js.map