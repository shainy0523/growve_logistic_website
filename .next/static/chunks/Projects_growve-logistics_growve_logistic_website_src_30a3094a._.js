(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/colorSchemes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "darkColorScheme",
    ()=>darkColorScheme,
    "lightColorScheme",
    ()=>lightColorScheme
]);
const lightColorScheme = {
    palette: {
        primary: {
            main: '#FBC942',
            light: '#FEF1A7',
            dark: '#e8b42c',
            contrastText: '#1F1F1F'
        },
        secondary: {
            main: '#757575',
            light: '#9E9E9E',
            dark: '#333333',
            contrastText: '#ffffff'
        },
        success: {
            main: '#28C76F',
            light: '#CBF2DC',
            dark: '#24B364',
            contrastText: '#fff'
        },
        error: {
            main: '#F04A4A',
            light: '#FFA3A3',
            dark: '#B81515',
            contrastText: '#fff'
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF'
        },
        text: {
            primary: '#1F1F1F',
            secondary: '#6D6B77',
            disabled: '#9ca3af'
        },
        divider: '#EAEAEC'
    }
};
const darkColorScheme = {
    palette: {
        primary: {
            main: '#FBC942',
            light: '#FEF1A7',
            dark: '#e8b42c',
            contrastText: '#1F1F1F'
        },
        secondary: {
            main: '#9E9E9E',
            light: '#BDBDBD',
            dark: '#616161',
            contrastText: '#ffffff'
        },
        success: {
            main: '#28C76F',
            light: '#CBF2DC',
            dark: '#24B364',
            contrastText: '#fff'
        },
        error: {
            main: '#F04A4A',
            light: '#FFA3A3',
            dark: '#B81515',
            contrastText: '#fff'
        },
        background: {
            default: '#0B0B0F',
            paper: '#18181E'
        },
        text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255,255,255,0.65)',
            disabled: 'rgba(255,255,255,0.4)'
        },
        divider: 'rgba(255,255,255,0.08)'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/tokens/typography.tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Typography tokens mirrored from the Growve design system in Figma.
 * Token naming matches the Figma variable IDs (e.g. "Heading/H1-ExtraBold").
 */ __turbopack_context__.s([
    "typographyTokens",
    ()=>typographyTokens
]);
const typographyTokens = {
    fontFamily: {
        primary: "'Nunito Sans', var(--font-primary), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        serif: "var(--font-serif), 'Playfair Display', Georgia, 'Times New Roman', serif"
    },
    // Heading
    'Heading/H1-ExtraBold': {
        fontSize: '2.5rem',
        lineHeight: 1.1,
        fontWeight: 800
    },
    'Heading/H2-Bold': {
        fontSize: '1.75rem',
        lineHeight: 1.1,
        fontWeight: 700
    },
    'Heading/H3-Bold': {
        fontSize: '1.5rem',
        lineHeight: 1.1,
        fontWeight: 700
    },
    'Heading/H4-Bold': {
        fontSize: '1.25rem',
        lineHeight: 1.2,
        fontWeight: 700
    },
    'Heading/H5-Bold': {
        fontSize: '1rem',
        lineHeight: 1.2,
        fontWeight: 700
    },
    'Heading/H5-SemiBold': {
        fontSize: '1rem',
        lineHeight: 1.2,
        fontWeight: 600
    },
    // Button
    'Button/L-SemiBold': {
        fontSize: '1rem',
        lineHeight: 1,
        fontWeight: 600,
        textTransform: 'none'
    },
    'Button/M-SemiBold': {
        fontSize: '0.875rem',
        lineHeight: 1,
        fontWeight: 600,
        textTransform: 'none'
    },
    'Button/S-SemiBold': {
        fontSize: '0.75rem',
        lineHeight: 1,
        fontWeight: 600,
        textTransform: 'none'
    },
    'Button/XS-SemiBold': {
        fontSize: '0.6875rem',
        lineHeight: 1,
        fontWeight: 600,
        textTransform: 'none'
    },
    // Body
    'Body/L-Regular': {
        fontSize: '1rem',
        lineHeight: 1.25,
        fontWeight: 400
    },
    'Body/M-Bold': {
        fontSize: '0.875rem',
        lineHeight: 1.25,
        fontWeight: 700
    },
    'Body/M-SemiBold': {
        fontSize: '0.875rem',
        lineHeight: 1.25,
        fontWeight: 600
    },
    'Body/M-Regular': {
        fontSize: '0.875rem',
        lineHeight: 1.25,
        fontWeight: 400
    },
    'Body/S-Bold': {
        fontSize: '0.75rem',
        lineHeight: 1.3,
        fontWeight: 700
    },
    'Body/S-SemiBold': {
        fontSize: '0.75rem',
        lineHeight: 1.3,
        fontWeight: 600
    },
    'Body/S-Regular': {
        fontSize: '0.75rem',
        lineHeight: 1.3,
        fontWeight: 400
    },
    'Body/XS-Bold': {
        fontSize: '0.6875rem',
        lineHeight: 1.3,
        fontWeight: 700
    },
    'Body/XS-SemiBold': {
        fontSize: '0.6875rem',
        lineHeight: 1.3,
        fontWeight: 600
    },
    'Body/XS-Regular': {
        fontSize: '0.6875rem',
        lineHeight: 1.3,
        fontWeight: 400
    },
    // Caption
    'Body/Caption/M-Bold': {
        fontSize: '0.625rem',
        lineHeight: 1.3,
        fontWeight: 700
    },
    'Body/Caption/M-SemiBold': {
        fontSize: '0.625rem',
        lineHeight: 1.3,
        fontWeight: 600
    },
    'Body/Caption/M-Regular': {
        fontSize: '0.625rem',
        lineHeight: 1.3,
        fontWeight: 400
    },
    'Body/Caption/S-SemiBold': {
        fontSize: '0.5625rem',
        lineHeight: 1.3,
        fontWeight: 600
    },
    'Body/Caption/S-Regular': {
        fontSize: '0.5625rem',
        lineHeight: 1.3,
        fontWeight: 400
    },
    'Body/Caption/XS-Regular': {
        fontSize: '0.5rem',
        lineHeight: 1.3,
        fontWeight: 400
    },
    // Display (marketing serif headings)
    'Display/Hero': {
        fontSize: '4rem',
        lineHeight: 1.05,
        fontWeight: 700
    },
    'Display/Section': {
        fontSize: '2.75rem',
        lineHeight: 1.1,
        fontWeight: 700
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/typography.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/tokens/typography.tokens.ts [app-client] (ecmascript)");
;
const typography = (fontFamily)=>{
    const font = fontFamily !== null && fontFamily !== void 0 ? fontFamily : __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"].fontFamily.primary;
    const serifFont = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"].fontFamily.serif;
    const withFont = (token)=>({
            fontFamily: font,
            letterSpacing: 0,
            ...token
        });
    const withSerif = (token)=>({
            fontFamily: serifFont,
            letterSpacing: 0,
            ...token
        });
    return {
        fontFamily: font,
        fontSize: 14,
        // Standard MUI variants
        h1: withSerif(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Display/Hero']),
        h2: withSerif(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Display/Section']),
        h3: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H3-Bold']),
        h4: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H4-Bold']),
        h5: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H5-Bold']),
        h6: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H5-SemiBold']),
        body1: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/L-Regular']),
        body2: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/M-Regular']),
        subtitle1: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H5-Bold']),
        subtitle2: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H5-SemiBold']),
        button: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Button/M-SemiBold']),
        caption: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/M-Regular']),
        overline: withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/XS-Regular']),
        // Heading
        'Heading/H1-ExtraBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H1-ExtraBold']),
        'Heading/H2-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H2-Bold']),
        'Heading/H3-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H3-Bold']),
        'Heading/H4-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H4-Bold']),
        'Heading/H5-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H5-Bold']),
        'Heading/H5-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Heading/H5-SemiBold']),
        // Button
        'Button/L-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Button/L-SemiBold']),
        'Button/M-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Button/M-SemiBold']),
        'Button/S-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Button/S-SemiBold']),
        'Button/XS-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Button/XS-SemiBold']),
        // Body
        'Body/L-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/L-Regular']),
        'Body/M-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/M-Bold']),
        'Body/M-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/M-SemiBold']),
        'Body/M-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/M-Regular']),
        'Body/S-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/S-Bold']),
        'Body/S-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/S-SemiBold']),
        'Body/S-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/S-Regular']),
        'Body/XS-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/XS-Bold']),
        'Body/XS-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/XS-SemiBold']),
        'Body/XS-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/XS-Regular']),
        // Caption
        'Body/Caption/M-Bold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/M-Bold']),
        'Body/Caption/M-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/M-SemiBold']),
        'Body/Caption/M-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/M-Regular']),
        'Body/Caption/S-SemiBold': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/S-SemiBold']),
        'Body/Caption/S-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/S-Regular']),
        'Body/Caption/XS-Regular': withFont(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Body/Caption/XS-Regular']),
        // Display
        'Display/Hero': withSerif(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Display/Hero']),
        'Display/Section': withSerif(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"]['Display/Section'])
    };
};
const __TURBOPACK__default__export__ = typography;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/node_modules/@mui/material/styles/createTheme.mjs [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/colorSchemes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/tokens/typography.tokens.ts [app-client] (ecmascript)");
;
;
;
;
const font = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$tokens$2f$typography$2e$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typographyTokens"].fontFamily.primary;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme'
    },
    colorSchemes: {
        light: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightColorScheme"],
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkColorScheme"]
    },
    typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(font),
    shape: {
        borderRadius: 8
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*, *::before, *::after': {
                    boxSizing: 'border-box'
                },
                html: {
                    height: '100%',
                    scrollBehavior: 'smooth'
                },
                body: {
                    height: '100%',
                    margin: 0
                },
                a: {
                    color: 'inherit',
                    textDecoration: 'none'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 600,
                    fontFamily: "'Nunito Sans', var(--font-primary), sans-serif",
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    lineHeight: 1,
                    padding: '10px 22px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                sizeLarge: {
                    padding: '12px 28px',
                    fontSize: '1rem'
                },
                sizeSmall: {
                    padding: '6px 14px',
                    fontSize: '0.75rem'
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        }
    }
});
const __TURBOPACK__default__export__ = theme;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/growve-logistics/growve_logistic_website/src/utils/providers/MuiThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MuiThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/node_modules/@mui/material/styles/ThemeProvider.mjs [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/node_modules/@mui/material/CssBaseline/CssBaseline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/growve-logistics/growve_logistic_website/src/@core/theme/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function MuiThemeProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$src$2f40$core$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$growve$2d$logistics$2f$growve_logistic_website$2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Projects/growve-logistics/growve_logistic_website/src/utils/providers/MuiThemeProvider.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/growve-logistics/growve_logistic_website/src/utils/providers/MuiThemeProvider.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = MuiThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "MuiThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_growve-logistics_growve_logistic_website_src_30a3094a._.js.map