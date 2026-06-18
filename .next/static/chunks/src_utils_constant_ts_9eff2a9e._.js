(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/constant.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_URLS",
    ()=>APP_URLS,
    "SECTION_IDS",
    ()=>SECTION_IDS
]);
const APP_URLS = {
    LOGIN: 'https://app.growve.in/login',
    SIGNUP: 'https://app.growve.in/register',
    BOOK_DEMO: 'mailto:admin@growve.in?subject=Book%20a%20demo'
};
const SECTION_IDS = {
    HOME: 'home',
    ADVANTAGE: 'advantage',
    PLATFORM: 'platform',
    CAPABILITIES: 'capabilities',
    TRACKING: 'tracking',
    FAQ: 'faq',
    CTA: 'cta',
    FOOTER: 'footer'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_utils_constant_ts_9eff2a9e._.js.map