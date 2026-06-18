module.exports = [
"[project]/.next-internal/server/app/services/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/views/services/service-allocation/CourierRankingCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourierRankingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-rsc] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-rsc] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@iconify/react/dist/iconify.js [app-rsc] (ecmascript)");
;
;
;
const couriers = [
    {
        name: 'Delhivery',
        cost: 48,
        deliveryRate: 98.2,
        score: 72,
        progress: 92,
        logoBg: '#000'
    },
    {
        name: 'DTDC',
        cost: 48,
        deliveryRate: 93.1,
        score: 74,
        progress: 72,
        logoBg: '#07287F'
    },
    {
        name: 'Shadowfax',
        cost: 48,
        deliveryRate: 96.6,
        score: 72,
        progress: 55,
        logoBg: '#000'
    },
    {
        name: 'Xpressbees',
        cost: 48,
        deliveryRate: 88.4,
        score: 78,
        progress: 38,
        logoBg: '#07287F'
    },
    {
        name: 'Amazon',
        cost: 48,
        deliveryRate: 84.3,
        score: 66,
        progress: 22,
        logoBg: '#231F20'
    },
    {
        name: 'Ekart',
        cost: 48,
        deliveryRate: 79.1,
        score: 68,
        progress: 12,
        logoBg: '#F5F5F5'
    }
];
function CourierRankingCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: '100%',
            bgcolor: '#FFF',
            p: 2,
            borderRadius: '12px',
            boxShadow: '0px 24px 144px rgba(225,225,228,0.24)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5
            },
            children: couriers.map((courier)=>{
                const positive = courier.deliveryRate >= 90;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        p: 2,
                        borderRadius: '8px',
                        border: '1px solid #E1E1E4',
                        bgcolor: '#FFF'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 118,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            width: 30,
                                            height: 30,
                                            borderRadius: '6px',
                                            bgcolor: courier.logoBg,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: {
                                                color: '#FFF',
                                                fontSize: 10,
                                                fontWeight: 800
                                            },
                                            children: courier.name[0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            color: '#000'
                                        },
                                        children: courier.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    flex: 1,
                                    minWidth: 220
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            fontSize: '11px',
                                            color: '#444050',
                                            mb: 0.75
                                        },
                                        children: [
                                            "₹",
                                            courier.cost,
                                            " Avg. Per Cost"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            height: 6,
                                            borderRadius: 999,
                                            overflow: 'hidden',
                                            bgcolor: '#E1E1E4'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                height: '100%',
                                                width: `${courier.progress}%`,
                                                bgcolor: '#FBC942',
                                                borderRadius: 999
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                            lineNumber: 160,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 80,
                                    textAlign: 'center',
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            fontSize: 10,
                                            color: '#737682',
                                            mb: 0.25
                                        },
                                        children: "Delivery Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 0.5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    color: positive ? '#24B364' : '#E64449'
                                                },
                                                children: [
                                                    courier.deliveryRate,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    width: 14,
                                                    height: 14,
                                                    borderRadius: '50%',
                                                    bgcolor: positive ? '#CBF2DC' : '#FFE2E3',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Icon"], {
                                                    icon: positive ? 'mdi:arrow-up' : 'mdi:arrow-down',
                                                    width: 8,
                                                    height: 8,
                                                    color: positive ? '#24B364' : '#E64449'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                lineNumber: 172,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 80,
                                    textAlign: 'center',
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            fontSize: 10,
                                            color: '#737682',
                                            mb: 0.25
                                        },
                                        children: "Value Score"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 248,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: '#000'
                                        },
                                        children: courier.score
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                                lineNumber: 241,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                        lineNumber: 85,
                        columnNumber: 15
                    }, this)
                }, courier.name, false, {
                    fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
                    lineNumber: 76,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/services/service-allocation/CourierRankingCard.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/services/service-allocation/SmartCourierAllocationView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-rsc] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$services$2f$service$2d$allocation$2f$CourierRankingCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/services/service-allocation/CourierRankingCard.tsx [app-rsc] (ecmascript)");
;
;
;
const SmartCourierAllocationView = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "landing-container pt-15!",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "grid grid-cols-2 md:gir-cols-1 gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$services$2f$service$2d$allocation$2f$CourierRankingCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/services/service-allocation/SmartCourierAllocationView.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/views/services/service-allocation/SmartCourierAllocationView.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/views/services/service-allocation/SmartCourierAllocationView.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SmartCourierAllocationView;
}),
"[project]/src/components/landing/data/landing.data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADVANTAGE",
    ()=>ADVANTAGE,
    "CTA",
    ()=>CTA,
    "EVERYTHING",
    ()=>EVERYTHING,
    "FAQ",
    ()=>FAQ,
    "FEATURE_CARDS",
    ()=>FEATURE_CARDS,
    "FOOTER",
    ()=>FOOTER,
    "HERO",
    ()=>HERO,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "ONE_PLATFORM",
    ()=>ONE_PLATFORM,
    "PLATFORM",
    ()=>PLATFORM,
    "SERVICES",
    ()=>SERVICES,
    "SERVICE_PAGES",
    ()=>SERVICE_PAGES,
    "TRACKING",
    ()=>TRACKING
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$services$2f$service$2d$allocation$2f$SmartCourierAllocationView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/services/service-allocation/SmartCourierAllocationView.tsx [app-rsc] (ecmascript)");
;
const NAV_LINKS = [
    {
        label: 'Problems',
        href: '/'
    },
    {
        label: 'Services',
        href: '/services',
        hasMenu: true
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
const SERVICES = [
    {
        slug: 'smart-courier-allocation',
        title: 'Smart Courier Allocation',
        description: 'Choose the best courier automatically.',
        icon: 'mdi:truck-fast-outline'
    },
    {
        slug: 'returns-rto-control',
        title: 'Returns & RTO Control',
        description: 'Reduce returns and recover orders.',
        icon: 'mdi:backup-restore'
    },
    {
        slug: 'shipment-tracking',
        title: 'Real-Time Shipment Tracking',
        description: 'Track every shipment in real time.',
        icon: 'mdi:map-marker-path'
    },
    {
        slug: 'weight-dispute-protection',
        title: 'Weight Dispute Protection',
        description: 'Prevent incorrect courier charges.',
        icon: 'mdi:scale-balance'
    },
    {
        slug: 'performance-analytics',
        title: 'Performance Analytics',
        description: 'Monitor logistics performance metrics.',
        icon: 'mdi:chart-line'
    },
    {
        slug: 'marketplace-integrations',
        title: 'Marketplace Integrations',
        description: 'Connect stores and sales channels.',
        icon: 'mdi:store-outline'
    },
    {
        slug: 'billing-reconciliation',
        title: 'Billing & Reconciliation',
        description: 'Manage invoices and payments.',
        icon: 'mdi:receipt-text-outline'
    },
    {
        slug: 'ndr-recovery-automation',
        title: 'NDR Recovery Automation',
        description: 'Recover failed deliveries automatically.',
        icon: 'mdi:refresh-auto'
    }
];
const SERVICE_PAGES = {
    'smart-courier-allocation': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$services$2f$service$2d$allocation$2f$SmartCourierAllocationView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
};
const HERO = {
    badge: 'NOW LIVE ACROSS INDIA',
    titleLeading: 'Smarter logistics.',
    titleSecondary: 'Built for',
    titleAccent: 'modern businesses.',
    subtitle: 'Automate courier selection, recover failed deliveries, track every order in real time, and gain complete visibility into shipping performance — all from a single platform.',
    primaryCta: 'Get Started',
    secondaryCta: 'See how it works'
};
const FEATURE_CARDS = [
    {
        icon: 'mdi:truck-fast-outline',
        title: 'Smart Multi-Courier',
        description: 'Automatically choose the best courier based on cost, delivery performance & serviceability.'
    },
    {
        icon: 'mdi:check-decagram-outline',
        title: 'NDR Recovery',
        description: 'Recover failed deliveries through automated customer outreach & intelligent retry workflows.'
    },
    {
        icon: 'mdi:medical-bag',
        title: 'Returns & RTO Control',
        description: 'Reduce return losses with complete visibility into return reasons.'
    },
    {
        icon: 'mdi:eye-outline',
        title: 'Real-Time Visibility',
        description: 'Track every shipment milestone from pickup to final delivery in one place.'
    }
];
const ADVANTAGE = {
    eyebrow: 'THE GROWVE ADVANTAGE',
    titleLeading: 'Stop reacting to shipping problems Start',
    titleAccent: ' preventing them.',
    subtitle: 'Growve helps teams identify delivery risks, recover failed shipments, and stay ahead of operational issues before they impact customers or revenue.',
    cards: [
        {
            title: 'Catch delivery issues before they become returns.',
            description: 'Monitor NDR trends, delivery exceptions, customer availability issues, and courier performance in real time. Take action before failed deliveries turn into costly RTOs.'
        },
        {
            title: 'Manage shipments from anywhere.',
            description: 'Access shipment performance, delivery updates, order activity, and business metrics through a mobile-first experience designed for teams on the move.'
        }
    ],
    marquee: [
        '27,000+ PIN CODES',
        '15+ COURIER PARTNERS',
        'REAL-TIME TRACKING',
        'PHOTO PROOF OF DELIVERY',
        'WEIGHT DISPUTE PROTECTION',
        'SMART COURIER ALLOCATION',
        'RETURNS MANAGEMENT'
    ],
    ndrChart: {
        title: 'NDR reason breakdown',
        caption: '18 open NDRs · take action before auto-RTO triggers',
        rows: [
            {
                label: 'Customer not available',
                count: 7,
                percent: 30
            },
            {
                label: 'Wrong address / not found',
                count: 4,
                percent: 44
            },
            {
                label: 'Customer refused delivery',
                count: 3,
                percent: 22
            },
            {
                label: 'Phone not reachable',
                count: 5,
                percent: 88
            },
            {
                label: 'Door locked / no one home',
                count: 6,
                percent: 67
            }
        ]
    },
    mobileMetrics: {
        title: 'All Orders',
        cards: [
            {
                label: 'Total Revenue',
                value: '₹ 19,000',
                delta: '0.7%',
                note: 'Days 90 this week'
            },
            {
                label: 'Successful Deliveries',
                value: '94.2%',
                delta: '0.7%',
                note: 'Up by 0.7% this week'
            },
            {
                label: 'Average Delivery Time',
                value: '2.3 Days',
                delta: '0.7%',
                note: 'Up by 0.7% this week'
            },
            {
                label: 'RTO / Failed Delivery Rate',
                value: '3.8%',
                delta: '0.7%',
                note: 'Up by 0.7% this week'
            }
        ]
    }
};
const PLATFORM = {
    eyebrow: 'THE PLATFORM',
    titleLeading: 'Built for teams that',
    titleAccent: 'ship at scale.',
    subtitle: 'Connect your sales channels, automate logistics workflows, and manage operations from a single platform designed for growing businesses.',
    cards: [
        {
            title: 'Connect marketplaces & stores in minutes.',
            description: 'Automatically sync orders, inventory updates, and shipment activity across all connected sales channels.',
            preview: 'mobile'
        },
        {
            title: 'Manage every order from one workspace.',
            description: 'Create shipments, monitor statuses, coordinate fulfillment, and keep operations moving from a single dashboard.',
            preview: 'laptop'
        }
    ],
    callout: {
        eyebrow: 'THE GROWVE ADVANTAGE',
        titleLeading: "Logistics shouldn't require five",
        titleAccent: 'different tools.',
        subtitle: 'Built to help growing brands streamline execution, improve delivery outcomes, and stay focused on what matters most.'
    }
};
const ONE_PLATFORM = {
    eyebrow: 'CORE CAPABILITIES',
    titleLeading: 'One platform. Every',
    titleAccent: 'shipment workflow.',
    subtitle: 'Manage shipments, monitor performance, recover failed deliveries, and optimize operations from a unified logistics workspace.',
    topCards: [
        {
            title: 'Centralized Shipment Management',
            description: 'Create, manage, and monitor shipments from a single dashboard designed to keep operations organized at every stage.'
        },
        {
            title: 'Real-Time Operational Insights',
            description: 'Track delivery performance, transit times, shipment volume, and courier efficiency with live logistics analytics.'
        }
    ],
    listCards: [
        {
            title: 'Smart Courier Allocation',
            items: [
                'Compare multiple courier partners',
                'Select the most efficient service',
                'Optimize delivery performance'
            ]
        },
        {
            title: 'NDR and Delivery Recovery',
            items: [
                'Identify failed delivery attempts',
                'Trigger recovery workflows',
                'Reduce avoidable RTO losses'
            ]
        },
        {
            title: 'Returns Management',
            items: [
                'Monitor return requests',
                'Streamline reverse pickups',
                'Improve post-delivery operations'
            ]
        }
    ]
};
const TRACKING = {
    eyebrow: 'REAL-TIME VISIBILITY',
    titleLeading: 'Track every shipment. Understand',
    titleAccent: 'every outcome.',
    subtitle: 'From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data.',
    activeShipments: {
        value: '1,284',
        label: 'shipments',
        delta: '+8.7% from last week'
    },
    revenue: {
        value: '₹2,57,230',
        label: 'Total Revenue',
        target: '83% From Target Revenue'
    },
    shipment: {
        id: '#TN29A78463',
        status: 'In Transit',
        note: 'On Time',
        from: {
            city: 'Chennai, TN, IND',
            stamp: 'May 12, 2026 — 08:00 AM'
        },
        to: {
            city: 'Mumbai, MH, IND',
            stamp: 'May 15, 2026 — 11:00 AM (estimated)'
        },
        courier: {
            name: 'Arjun Patel',
            company: 'Blue Dart Express'
        }
    }
};
const EVERYTHING = {
    eyebrow: 'CORE CAPABILITIES',
    titleLeading: 'Everything you need',
    titleAccent: 'to run logistics efficiently.',
    subtitle: 'From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data.',
    cards: [
        {
            title: 'Smart Courier Allocation',
            description: 'Choose the best courier for every shipment based on delivery performance, cost, serviceability, and historical success rates.'
        },
        {
            title: 'Returns & RTO Control',
            description: 'Reduce return losses with complete visibility into return reasons, RTO trends, and recovery opportunities.'
        },
        {
            title: 'Real-Time Shipment Tracking',
            description: 'Track every shipment milestone from pickup to final delivery through a unified tracking experience.'
        },
        {
            title: 'Weight Dispute Protection',
            description: 'Identify billing discrepancies, monitor weight changes, and prevent unnecessary courier charges.'
        },
        {
            title: 'Performance Analytics',
            description: 'Measure courier performance, delivery rates, transit times, NDR trends, and operational efficiency.'
        },
        {
            title: 'Marketplace Integrations',
            description: 'Connect stores and marketplaces to sync orders, inventory, tracking updates, and shipment data automatically.'
        },
        {
            title: 'Billing & Reconciliation',
            description: 'Manage shipping costs, invoices, wallet transactions, and courier billing from one place.'
        },
        {
            title: 'NDR Recovery Automation',
            description: 'Recover failed deliveries automatically through intelligent workflows, customer outreach, and retry recommendations.'
        }
    ],
    centerCard: {
        title: 'Explore the Growve Platform',
        description: 'Discover the tools that power smarter shipping operations.'
    }
};
const FAQ = {
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    titleLeading: 'Questions and',
    titleAccent: 'Answers',
    subtitle: 'Learn how Growve helps you streamline shipping operations, automate workflows, and manage logistics from a single platform.',
    items: [
        {
            question: 'How quickly can I get started with Growve?',
            answer: 'You can sign up, connect your sales channels, and book your first shipment in under 15 minutes. Our onboarding flow walks you through every step.'
        },
        {
            question: 'Which platforms does Growve support?',
            answer: 'Growve integrates with Shopify, WooCommerce, Amazon, Flipkart, Magento, and other major marketplaces and storefronts via direct APIs.'
        },
        {
            question: 'How does courier selection work?',
            answer: 'Smart Courier Allocation evaluates cost, transit time, serviceability, NDR history, and SLA performance for every shipment in real time.'
        },
        {
            question: 'Can I track all shipments in one place?',
            answer: 'Yes — all shipments across every connected courier appear in a unified dashboard with live milestones, ETAs, and exception alerts.'
        },
        {
            question: 'How does Growve help reduce RTOs?',
            answer: 'NDR Recovery workflows automatically contact customers, reschedule deliveries, and confirm addresses before a shipment turns into an RTO.'
        },
        {
            question: 'What insights and reports are available?',
            answer: 'Performance analytics cover delivery rate, first-attempt success, transit times, NDR trends, courier comparison, and cost per shipment.'
        },
        {
            question: 'Do you offer customer support?',
            answer: 'Yes — every Growve account includes email and in-app support, with priority support available on growth and enterprise plans.'
        },
        {
            question: 'Can Growve scale with my business?',
            answer: 'From a few hundred shipments to millions per month, the Growve platform is built for high-volume operations with enterprise-grade reliability.'
        }
    ]
};
const CTA = {
    eyebrow: 'GET STARTED TODAY',
    titleLeading: 'Ready to Growve',
    titleAccent: 'Logistics',
    subtitle: 'Set up your account, connect your store, and go live instantly. No complex setup, no delays — just faster logistics from day one.',
    primary: 'Get Started',
    secondary: 'Book a Demo'
};
const FOOTER = {
    tagline: 'Built by e-commerce sellers shipping 35K+ orders/month. Courier aggregation & fulfillment for Indian sellers.',
    services: [
        'Smart Courier Allocation',
        'Returns & RTO Control',
        'Real-Time Shipment Tracking',
        'Weight Dispute Protection',
        'Performance Analytics',
        'Marketplace Integrations',
        'Billing & Reconciliation',
        'NDR Recovery Automation'
    ],
    office: {
        address: 'Unit no. 404, Filix Tower, LBS Marg, Oppo. Asian Paints, Sonapur, Bhandup West, Mumbai, Maharashtra 400078',
        email: 'admin@growve.in',
        phone: '+91 86525 92752'
    },
    navigate: [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'About',
            href: '#platform'
        },
        {
            label: 'Contact',
            href: '#footer'
        },
        {
            label: 'Track',
            href: '#tracking'
        }
    ],
    legal: [
        {
            label: 'Privacy Policy',
            href: '#'
        },
        {
            label: 'Terms of service',
            href: '#'
        }
    ],
    copyright: '© 2026 Growve Logistics. All rights reserved.'
};
}),
"[project]/src/layouts/LandingLayout.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/layouts/LandingLayout.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/layouts/LandingLayout.tsx <module evaluation>", "default");
}),
"[project]/src/layouts/LandingLayout.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/layouts/LandingLayout.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/layouts/LandingLayout.tsx", "default");
}),
"[project]/src/layouts/LandingLayout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$LandingLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/layouts/LandingLayout.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$LandingLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/layouts/LandingLayout.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$LandingLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2f$data$2f$landing$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing/data/landing.data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$LandingLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/LandingLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function ServicePage({ params }) {
    const { slug } = await params;
    const Component = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2f$data$2f$landing$2e$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVICE_PAGES"][slug];
    if (!Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$LandingLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {}, void 0, false, {
            fileName: "[project]/src/app/services/[slug]/page.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c8b18e35._.js.map