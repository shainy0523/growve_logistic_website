'use client'

import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import {
    Search,
    LocalShipping,
    ArrowDropDown,
    TrendingUp,
    Navigation,
} from "@mui/icons-material";

/* ----------------------------------------------------------------------- */
/* Tokens                                                                  */
/* ----------------------------------------------------------------------- */
const t = {
    black: "#000000",
    white: "#FFFFFF",
    bgLight: "#F5F5F6",
    divider: "#EAEAEC",
    secLight: "#EBEBED",
    secMain: "#E1E1E4",
    secDark: "#737682",
    secColor: "#808390",
    secDarker: "#CFD0D5",
    grayMain: "#CDCBD0",
    textPrimary: "#444050",
    yellow: "#FBC942",
    yellowBadge: "#FDEAB7",
    yellowSoft: "#FEEEC3",
    successBg: "#CBF2DC",
    successDark: "#24B364",
};
const body = "'Nunito Sans', sans-serif";

/* ----------------------------------------------------------------------- */
/* Tracking card (main map card)                                           */
/* ----------------------------------------------------------------------- */
function StylizedMap() {
    // self-contained street-map backdrop replacing the Figma placeholder image
    return (
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 389 366"
            preserveAspectRatio="xMidYMid slice"
        >
            <rect width="389" height="366" fill="#E9EAEC" />

            {/* water (left river) */}
            <path d="M0 0 H64 C52 90, 78 170, 46 250 C36 305, 58 338, 38 366 H0 Z" fill="#C5DEEA" />

            {/* park */}
            <rect x="150" y="250" width="74" height="56" rx="6" fill="#D8E8CF" />

            {/* city blocks */}
            <g fill="#F1F2F3">
                <rect x="92" y="18" width="104" height="80" rx="3" />
                <rect x="208" y="14" width="86" height="70" rx="3" />
                <rect x="306" y="18" width="74" height="92" rx="3" />
                <rect x="96" y="118" width="92" height="82" rx="3" />
                <rect x="306" y="132" width="74" height="90" rx="3" />
                <rect x="240" y="150" width="58" height="40" rx="3" />
                <rect x="98" y="300" width="118" height="56" rx="3" />
                <rect x="240" y="312" width="140" height="48" rx="3" />
            </g>

            {/* streets */}
            <g stroke="#FFFFFF" strokeWidth="7" fill="none" strokeLinecap="round">
                <path d="M78 108 H389" />
                <path d="M68 228 H389" />
                <path d="M90 0 V366" />
                <path d="M204 0 V366" />
                <path d="M300 0 V366" />
            </g>

            {/* highway (orange, casing + fill) */}
            <path
                d="M58 150 C 158 150, 198 250, 318 250 C 358 250, 380 240, 389 234"
                stroke="#EE9A4D"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M58 150 C 158 150, 198 250, 318 250 C 358 250, 380 240, 389 234"
                stroke="#FBC07A"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
            />

            {/* route to the pin: black travelled segment + yellow remaining */}
            <path d="M55 213 H205" stroke={t.black} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M205 205 H389" stroke={t.yellow} strokeWidth="3.5" fill="none" strokeLinecap="round" />

            {/* highway shields */}
            <g>
                <rect x="76" y="150" width="22" height="15" rx="3" fill="#2D6CDF" />
                <text x="87" y="161" fill="#fff" fontFamily="Nunito Sans" fontSize="8" fontWeight="700" textAnchor="middle">280</text>
                <rect x="296" y="240" width="22" height="15" rx="3" fill="#2D6CDF" />
                <text x="307" y="251" fill="#fff" fontFamily="Nunito Sans" fontSize="8" fontWeight="700" textAnchor="middle">280</text>
            </g>

            {/* street labels */}
            <g fill="#A9ABB2" fontFamily="Nunito Sans" fontWeight="600">
                <text x="118" y="60" fontSize="9">GANPATRAO MARG</text>
                <text x="118" y="278" fontSize="9">SHIVNERI ROAD</text>
                <text x="246" y="336" fontSize="9">TAMIL ROAD</text>
                <text x="250" y="120" fontSize="9">V.O.C ROAD</text>
            </g>
        </svg>
    );
}

function ZoomButton({ children, divider }: any) {
    return (
        <Box
            className="flex items-center justify-center p-[5px]"
            sx={{ bgcolor: t.white, borderBottom: divider ? `1px solid ${t.secLight}` : "none" }}
        >
            {children}
        </Box>
    );
}

function TrackingDetail() {
    return (
        <Box
            className="flex flex-col gap-[18px] self-stretch rounded-[10px] p-3.5"
            sx={{ bgcolor: t.white, boxShadow: "0px 3.5px 10.5px rgba(0,0,0,0.10)" }}
        >
            {/* header */}
            <Box className="flex items-start justify-between">
                <Box className="flex flex-col gap-1.5">
                    <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 12.5, color: t.black }}>
                        #TN29A78463
                    </Typography>
                    <Box className="flex items-center gap-1">
                        <Chip
                            label="In Transit"
                            sx={{
                                height: "auto",
                                borderRadius: "15px",
                                bgcolor: t.yellowBadge,
                                "& .MuiChip-label": { px: 1, py: 0.25 },
                                fontFamily: body,
                                fontWeight: 400,
                                fontSize: 8.75,
                                color: t.black,
                            }}
                        />
                        <Typography sx={{ fontFamily: body, fontSize: 8.75, color: t.secColor }}>On Time</Typography>
                    </Box>
                </Box>

                <Box className="flex w-[77px] flex-col gap-0.5">
                    <Typography sx={{ fontFamily: body, fontSize: 8.75, color: t.secColor }}>Courier:</Typography>
                    <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 10.5, color: t.black }}>
                        Arjun Patel
                    </Typography>
                    <Typography sx={{ fontFamily: body, fontSize: 8.75, color: t.secColor }}>
                        Blue Dart Express
                    </Typography>
                </Box>
            </Box>

            {/* progress track */}
            <Box className="relative flex items-center" sx={{ height: 14 }}>
                <Box className="absolute left-0 right-0 h-[3.5px]" sx={{ bgcolor: t.secDarker }} />
                {/* filled portion */}
                <Box className="absolute left-0 h-[3.5px] w-[78%]" sx={{ bgcolor: t.yellow }} />
                {/* start dot */}
                <Box
                    className="absolute left-0 flex items-center justify-center rounded-full p-[2px]"
                    sx={{ bgcolor: t.white, outline: `1px solid ${t.yellow}` }}
                >
                    <Box className="h-3 w-3 rounded-full" sx={{ bgcolor: t.yellow }} />
                </Box>
                {/* truck node */}
                <Box
                    className="absolute flex items-center justify-center rounded-full p-1"
                    sx={{ left: "calc(78% - 11px)", bgcolor: t.yellow }}
                >
                    <LocalShipping sx={{ fontSize: 12, color: t.white }} />
                </Box>
                {/* end dot */}
                <Box
                    className="absolute right-0 flex items-center justify-center rounded-full p-[2px]"
                    sx={{ bgcolor: t.white, outline: `1px solid ${t.secDarker}` }}
                >
                    <Box className="h-3 w-3 rounded-full" sx={{ bgcolor: t.secLight }} />
                </Box>
            </Box>

            {/* origin / destination */}
            <Box className="flex items-center justify-between">
                <Box className="flex flex-col gap-0.5">
                    <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12.5, color: t.black }}>
                        Chennai, TN, IND
                    </Typography>
                    <Typography sx={{ fontFamily: body, fontSize: 8.75, color: t.secColor }}>
                        May 12, 2026 – 08:00 AM
                    </Typography>
                </Box>
                <Box className="flex flex-col items-end gap-0.5">
                    <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12.5, color: t.black }}>
                        Mumbai, MH, IND
                    </Typography>
                    <Typography sx={{ fontFamily: body, fontSize: 8.75, color: t.secColor, textAlign: "right" }}>
                        May 15, 2026 – 11:00 AM (estimated)
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

function TrackingCard() {
    return (
        <Box
            className="absolute left-[72px] top-[57px] flex h-[387px] w-[410px] flex-col rounded-[10px] p-[10px]"
            sx={{ bgcolor: t.white }}
        >
            <Box
                className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[7px] p-[9px]"
                sx={{ bgcolor: t.secLight }}
            >
                <StylizedMap />

                {/* navigation pin */}
                <Box
                    className="absolute z-[1] flex items-center justify-center rounded-full"
                    sx={{
                        left: 188,
                        top: 150,
                        width: 30,
                        height: 30,
                        bgcolor: t.yellow,
                        boxShadow: "0px 0px 12px rgba(254,70,70,0.45)",
                        border: `2px solid ${t.white}`,
                    }}
                >
                    <Navigation sx={{ fontSize: 15, color: t.white, transform: "rotate(35deg)" }} />
                </Box>

                {/* top controls */}
                <Box className="relative z-10 flex items-start justify-between">
                    <Box
                        className="flex w-[222px] items-center rounded-[8px] p-[2px]"
                        sx={{ bgcolor: t.white, boxShadow: "0px 3.5px 10.5px rgba(0,0,0,0.10)" }}
                    >
                        <Typography
                            className="flex-1 px-[9px] py-[7px]"
                            sx={{ fontFamily: body, fontSize: 10.5, color: t.secColor }}
                        >
                            Search by Tracking ID…
                        </Typography>
                        <Box className="flex items-center justify-center p-[5px]">
                            <Search sx={{ fontSize: 14, color: t.textPrimary }} />
                        </Box>
                    </Box>

                    {/* <Box
            className="flex flex-col overflow-hidden rounded-[7px]"
            sx={{ bgcolor: t.white, boxShadow: "0px 3.5px 7px rgba(0,0,0,0.12)" }}
          >
            <ZoomButton divider>
              <Add sx={{ fontSize: 14, color: t.black }} />
            </ZoomButton>
            <ZoomButton>
              <Remove sx={{ fontSize: 14, color: t.black }} />
            </ZoomButton>
          </Box> */}
                </Box>

                {/* bottom detail */}
                <Box className="relative z-10">
                    <TrackingDetail />
                </Box>
            </Box>
        </Box>
    );
}

/* ----------------------------------------------------------------------- */
/* Shipping Revenue widget (donut + bar chart)                             */
/* ----------------------------------------------------------------------- */
const BARS = [
    { label: "Q1", value: 67396, highlight: false },
    { label: "Q2", value: 80899, highlight: true },
    { label: "Q1", value: 48822, highlight: false },
    { label: "Q1", value: 60113, highlight: false },
];
const X_AXIS = ["₹0", "₹25K", "₹50K", "₹75K", "₹100K"];
const MAX = 100000;

/* gauge arc helpers — angles measured clockwise from 12 o'clock */
type Point = {
    x: number
    y: number
}

const round = (n: number) => Number(n.toFixed(2))

const polar = (
  cx: number,
  cy: number,
  r: number,
  angle: number
): Point => {
  const rad = ((angle - 90) * Math.PI) / 180

  return {
    x: round(cx + r * Math.cos(rad)),
    y: round(cy + r * Math.sin(rad)),
  }
}

const arcPath = (
    cx: number,
    cy: number,
    r: number,
    start: number,
    end: number
) => {
    const s = polar(cx, cy, r, start)
    const e = polar(cx, cy, r, end)

    const largeArcFlag =
        end - start <= 180 ? 0 : 1

    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${e.x} ${e.y}`
}


function RevenueCard() {
    //   const pct = 81;
    //   // gauge: 280° sweep with an 80° gap at the bottom
    //   const START = 220;
    //   const SWEEP = 280;
    //   const valueEnd = (START + SWEEP * (pct / 100)) % 360;

    const progress = 81

    const START = 270
    const SWEEP = 180

    const valueEnd = START + (SWEEP * progress) / 100

    return (
        <Box
            className="absolute left-[375px] top-0 flex w-[178px] flex-col gap-2.5 rounded-[7px] px-[9.5px] pb-[8px] pt-[9.5px]"
            sx={{ bgcolor: t.white, boxShadow: "0px 8px 44px #B6B6B6" }}
        >
            {/* header */}
            <Box className="flex items-center justify-between">
                <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 9.5, color: t.black }}>
                    Shipping Revenue
                </Typography>
                <Box className="flex items-center rounded-[5px] px-1.5 py-[3.5px]" sx={{ bgcolor: t.secLight }}>
                    <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 7, color: t.black }}>
                        This Year
                    </Typography>
                    <ArrowDropDown sx={{ fontSize: 9, color: t.black }} />
                </Box>
            </Box>

            {/* gauge */}
            <Box
                className="relative flex items-center justify-center"
                sx={{ height: 90 }}
            >
                <svg
                    width="200"
                    height="100"
                    viewBox="0 0 180 100"
                >
                    {/* Track */}
                    <path
                        d={arcPath(90, 84, 62, START, START + SWEEP)}
                        fill="none"
                        stroke={t.secMain}
                        strokeWidth="16"
                        strokeLinecap="round"
                    />

                    {/* Progress */}
                    <path
                        d={arcPath(90, 84, 62, START, valueEnd)}
                        fill="none"
                        stroke={t.yellow}
                        strokeWidth="16"
                        strokeLinecap="round"
                    />
                </svg>

                <Box
                    className="absolute left-0 right-0 flex flex-col items-center"
                    sx={{ top: 42 }}
                >
                    <Typography
                        sx={{
                            fontFamily: body,
                            fontSize: 7,
                            color: t.secColor,
                        }}
                    >
                        Total Revenue
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: body,
                            fontWeight: 700,
                            fontSize: 12,
                            color: t.black,
                            lineHeight: 1.1,
                            paddingBlock: .5
                        }}
                    >
                        ₹2,57,230
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: body,
                            fontSize: 7,
                            color: t.secColor,
                        }}
                    >
                        81% from Target Revenue
                    </Typography>
                </Box>
            </Box>

            {/* horizontal bar chart */}
            <Box className="flex flex-col gap-2.5 pt-2.5" sx={{ borderTop: `1px solid ${t.bgLight}` }}>
                {BARS.map((b, i) => {
                    const p = (b.value / MAX) * 100;
                    const grow = keyframes`
            from { width: ${(p * 0.45).toFixed(2)}%; }
            to   { width: ${p.toFixed(2)}%; }
          `;
                    return (
                        <Box key={i} className="flex items-center gap-1.5">
                            <Typography sx={{ width: 12, fontFamily: body, fontSize: 6, color: t.secColor }}>
                                {b.label}
                            </Typography>
                            <Box
                                className="relative flex-1 overflow-hidden rounded-[2px]!"
                                sx={{ height: 13, bgcolor: t.bgLight }}
                            >
                                <Box
                                    className="flex h-full items-center rounded-[2px]!"
                                    sx={{
                                        width: `${p}%`,
                                        bgcolor: b.highlight ? t.black : t.grayMain,
                                        animation: `${grow} 1.8s ease-in-out ${i * 0.18}s infinite alternate`,
                                        "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                                    }}
                                >
                                    <Typography
                                        sx={{ pl: 0.75, fontFamily: body, fontWeight: 700, fontSize: 6, color: t.white, whiteSpace: "nowrap" }}
                                    >
                                        ₹{b.value.toLocaleString("en-IN")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
                {/* x axis */}
                <Box className="flex items-center gap-1.5">
                    <Box sx={{ width: 12 }} />
                    <Box className="flex flex-1 justify-between">
                        {X_AXIS.map((x) => (
                            <Typography key={x} sx={{ fontFamily: body, fontSize: 6.5, color: t.secColor }}>
                                {x}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

/* ----------------------------------------------------------------------- */
/* Active Shipments stat card                                              */
/* ----------------------------------------------------------------------- */
function ActiveShipmentsCard() {
    return (
        <Box
            className="absolute left-0 top-[188px] flex w-[190px] items-center gap-1.5 rounded-[8px] py-[11px] pl-[11px] pr-[17px]"
            sx={{ bgcolor: t.white, boxShadow: "0px 8px 44px #B6B6B6" }}
        >
            <Box className="flex flex-1 flex-col gap-[7px]">
                <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 8.5, color: t.secDark }}>
                    Active Shipments
                </Typography>
                <Box className="flex items-baseline gap-[3px]">
                    <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 19.5, color: t.black, lineHeight: 1 }}>
                        1,284
                    </Typography>
                    <Typography sx={{ fontFamily: body, fontSize: 8.5, color: t.secDark }}>shipments</Typography>
                </Box>
                <Box className="flex items-center gap-1">
                    <Box className="flex items-center gap-[3px]">
                        <Avatar sx={{ width: 12, height: 12, bgcolor: t.successBg }}>
                            <TrendingUp sx={{ fontSize: 8, color: t.successDark }} />
                        </Avatar>
                        <Typography sx={{ fontFamily: body, fontSize: 7, color: t.successDark }}>+8.7%</Typography>
                    </Box>
                    <Typography sx={{ fontFamily: body, fontSize: 7, color: t.secDark }}>from last week</Typography>
                </Box>
            </Box>

            <Box className="flex items-center justify-center rounded-[5.5px] p-[7px]" sx={{ bgcolor: t.yellow }}>
                <LocalShipping sx={{ fontSize: 15, color: t.white }} />
            </Box>
        </Box>
    );
}

/* ----------------------------------------------------------------------- */
/* Root                                                                    */
/* ----------------------------------------------------------------------- */
export default function ShipmentTrackingHero() {
    return (
        <Box
            className="flex h-[540px] w-[1052px] max-w-full flex-col items-center justify-start gap-5 overflow-hidden rounded-xl px-4 py-12 mx-auto mt-10!"
            sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
        >
            <Box className="relative h-[444px] w-[553px]">
                <TrackingCard />
                <RevenueCard />
                <ActiveShipmentsCard />
            </Box>
        </Box>
    );
}