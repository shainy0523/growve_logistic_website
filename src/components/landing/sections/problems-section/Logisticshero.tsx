'use client'
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const STEPS = [
    {
        time: "09:20 AM",
        date: "Apr 03",
        title: "Picked Up",
        place: "Mumbai, Maharashtra, India",
        done: true,
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8 12 3 3 8l9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" />
            </svg>
        ),
    },
    {
        time: "12:45 PM",
        date: "Apr 03",
        title: "In Transit",
        place: "Raipur, Chhattisgarh",
        done: true,
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 16V7a1 1 0 0 1 1-1h9v10" /><path d="M13 9h4l3 3v4h-7z" />
                <circle cx="6.5" cy="17.5" r="1.7" /><circle cx="16.5" cy="17.5" r="1.7" />
            </svg>
        ),
    },
    {
        time: "03:30 PM",
        date: "Apr 05",
        title: "Out for Delivery",
        place: "Guwahati, Assam",
        done: true,
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
        ),
    },
    {
        time: "04:00 PM",
        date: "Apr 05",
        title: "Delivered",
        place: "Guwahati, Assam",
        done: true,
        isLast: true,
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
            </svg>
        ),
    },
];

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

export default function LogisticsHero() {
    const [blink, setBlink] = useState(true);
    const [planePos, setPlanePos] = useState(0);

    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink(b => !b), 800);
        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        let frame: number;
        let start: DOMHighResTimeStamp | null = null;

        const duration = 5000;

        const animate = (ts: DOMHighResTimeStamp) => {
            if (start === null) start = ts;

            const t = ((ts - start) % duration) / duration;

            setPlanePos(t);

            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, []);

    const start = {
        x: 600 * 0.157,
        y: 660 * 0.652,
    };

    const end = {
        x: 600 * 0.807,
        y: 660 * 0.382,
    };

    const cp1 = {
        x: start.x + 120,
        y: start.y - 180,
    };

    const cp2 = {
        x: end.x - 120,
        y: end.y - 120,
    };

    // Cubic bezier: Mumbai (190,430) → Guwahati (430,160)
    const cubicBezier = (t: number) => {
        const mt = 1 - t;

        const x =
            mt ** 3 * start.x +
            3 * mt ** 2 * t * cp1.x +
            3 * mt * t ** 2 * cp2.x +
            t ** 3 * end.x;

        const y =
            mt ** 3 * start.y +
            3 * mt ** 2 * t * cp1.y +
            3 * mt * t ** 2 * cp2.y +
            t ** 3 * end.y;

        const dx =
            3 * mt ** 2 * (cp1.x - start.x) +
            6 * mt * t * (cp2.x - cp1.x) +
            3 * t ** 2 * (end.x - cp2.x);

        const dy =
            3 * mt ** 2 * (cp1.y - start.y) +
            6 * mt * t * (cp2.y - cp1.y) +
            3 * t ** 2 * (end.y - cp2.y);

        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

        return { x, y, angle };
    };

    const plane = cubicBezier(planePos);
    const planeOpacity = planePos < 0.08 ? planePos / 0.08 : planePos > 0.92 ? (1 - planePos) / 0.08 : 1;

    return (
        <Box
            style={{
                fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
                background: "#ffffff",
                minHeight: "100vh",
                color: "#1F1D26",
                WebkitFontSmoothing: "antialiased",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;1,500&family=Nunito+Sans:wght@400;600;700;800&display=swap');
                @keyframes rise { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
                @keyframes pulse { 0%,100%{transform:scale(1);opacity:.85} 50%{transform:scale(1.6);opacity:0} }
                .rise-1 { animation: rise 0.7s ease both; }
                .rise-2 { animation: rise 0.8s ease 0.08s both; }
                .rise-3 { animation: rise 0.85s ease 0.14s both; }
                .rise-4 { animation: rise 1s ease 0.2s both; }
                .pulse-ring { animation: pulse 2.6s ease-in-out infinite; }
                .pulse-ring-delay { animation: pulse 2.6s ease-in-out 0.6s infinite; }
            `}
            </style>

            <div style={{ maxWidth: 1100, margin: "8rem auto", padding: "80px 32px 0" }}>

                {/* ── Hero copy ── */}
                <div className="rise-1" style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase", color: "#A6A4AE" }}>
                        End-to-end operations
                    </div>
                    <h1 style={{ fontFamily: "Dai Banna SIL, serif", fontWeight: 500, fontSize: "clamp(28px,4.6vw,44px)", lineHeight: 1.28, letterSpacing: "-0.005em", margin: 0, color: "#1F1D26" }}>
                        From pickup to delivery. And<br />
                        everything{" "}
                        <span style={{ color: "#B9B7C1" }}>in between.</span>
                    </h1>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: "#6D6B77", maxWidth: 420, margin: 0 }}>
                        Manage every stage of the shipment lifecycle through a single logistics operating system.
                    </p>
                </div>

                {/* ── Badges ── */}
                <div className="rise-2" style={{ margin: "32px auto 16px", display: "flex", justifyContent: "center", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    {/* Shipment ID badge — MUI Chip style */}
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        borderRadius: 20, fontSize: 11, fontWeight: 700, padding: "5px 12px",
                        background: "#F4F3F6", color: "#1F1D26",
                        boxShadow: "0 1px 2px rgba(40,38,60,0.06)",
                    }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28C76F", display: "inline-block" }} />
                        Shipment #GWVE23945876
                    </span>

                    {/* Live badge */}
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        borderRadius: 20, fontSize: 11, fontWeight: 700, padding: "5px 12px",
                        background: "#EEFBF3", color: "#1F9D58",
                    }}>
                        Live
                    </span>
                </div>

                {/* ── Tracking Card — MUI Paper / dark surface ── */}
                <div className="rise-3" style={{
                    width: "min(380px, 100%)",
                    margin: "0 auto 64px",
                    background: "#15141A",
                    borderRadius: 18,
                    padding: "16px 18px 6px",
                    boxShadow: "0 8px 32px rgba(40,38,60,0.22)",
                }}>
                    {STEPS.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                            {/* Time */}
                            <div style={{ width: 54, flexShrink: 0, textAlign: "right", paddingTop: 1 }}>
                                <div style={{ fontSize: 11, fontWeight: 700, color: "#E7E5F1" }}>{step.time}</div>
                                <div style={{ fontSize: 9, color: "#82808C", marginTop: 1 }}>{step.date}</div>
                            </div>

                            {/* Rail */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                                {/* Node — MUI Avatar style */}
                                <div style={{
                                    width: 22, height: 22, borderRadius: "50%",
                                    background: step.isLast ? "#28C76F" : "#FBC942",
                                    color: step.isLast ? "#fff" : "#15141A",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, fontWeight: 700,
                                }}>
                                    {step.isLast ? <CheckIcon /> : step.icon}
                                </div>
                                {!step.isLast && (
                                    <div style={{ width: 1, flex: 1, background: "rgba(255,255,255,0.12)", minHeight: 18 }} />
                                )}
                            </div>

                            {/* Body */}
                            <div style={{ flex: 1, padding: "0 0 16px" }}>
                                <div style={{ fontSize: 12.5, fontWeight: 700, color: "#E7E5F1" }}>{step.title}</div>
                                <div style={{ fontSize: 11, color: "#82808C", marginTop: 1 }}>{step.place}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Map Section ── */}
                <div
                    className="rise-4"
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 800,
                        margin: "-80px auto",
                        aspectRatio: "800/825"
                    }}
                >
                    {/* MAP IMAGE */}
                    <img
                        src="/images/map.png"
                        alt="India Map"
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />

                    {/* ROUTE + PLANE */}
                    <svg
                        viewBox="0 0 600 660"
                        preserveAspectRatio="xMidYMid meet"
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 2
                        }}
                    >
                        {/* <path
                            d="M190,430 C260,398 300,310 430,160"
                            fill="none"
                            stroke="#B9B7C1"
                            strokeWidth="1.6"
                            strokeDasharray="1 8"
                            strokeLinecap="round"
                        /> */}
                        <path
                            d={`
                                M ${start.x},${start.y}
                                C ${cp1.x},${cp1.y}
                                ${cp2.x},${cp2.y}
                                ${end.x},${end.y}
                            `}
                            fill="none"
                            stroke="#B9B7C1"
                            strokeWidth="1.6"
                            strokeDasharray="1 8"
                            strokeLinecap="round"
                        />
                        <foreignObject
                            x={plane.x - 12}
                            y={plane.y - 12}
                            width="24"
                            height="24"
                            opacity={planeOpacity}
                        >
                            <div
                                style={{
                                    width: 24,
                                    height: 24,
                                    transform: `rotate(${plane.angle + 45}deg)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Icon
                                    icon="mdi:airplane"
                                    width={24}
                                    height={24}
                                    color="#3A3743"
                                />
                            </div>
                        </foreignObject>
                    </svg>

                    {/* PICKUP PIN */}
                    <div
                        style={{
                            position: "absolute",
                            left: "13.7%",
                            top: "61.2%",
                            transform: "translate(-50%,-50%)",
                            width: 66,
                            height: 66,
                            borderRadius: "50%",
                            background: "rgba(251,201,66,0.20)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 3,
                            animation: "ripple 2s infinite"
                        }}
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                background: "#FFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    background: "#FBC942"
                                }}
                            />
                        </div>
                    </div>

                    {/* DELIVERY PIN */}
                    <div
                        style={{
                            position: "absolute",
                            left: "75.7%",
                            top: "35.2%",
                            transform: "translate(-50%,-50%)",
                            width: 66,
                            height: 66,
                            borderRadius: "50%",
                            background: "rgba(40,199,111,0.20)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 3,
                            animation: "ripple 2s infinite",
                            animationDelay:'1s'
                        }}
                    >
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                background: "#FFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    background: "#28C76F"
                                }}
                            />
                        </div>
                    </div>

                    {/* PICKUP CARD */}
                    <div
                        style={{
                            position: "absolute",
                            left: "-40px",
                            top: "72%",
                            background: "#FFF",
                            borderRadius: 12,
                            padding: 16,
                            width: 220,
                            boxShadow: "0px 32px 34px rgba(202,202,202,0.30)",
                            zIndex: 4,
                            border:'1px solid #F5F5F6'
                        }}
                    >
                        <Box className='flex gap-2 items-center'>
                            <Box className='w-9 h-9 flex items-center justify-center bg-[#FBC942] rounded-[12px]!'>
                                <Icon className="text-white" icon={'grommet-icons:package'} width={20} height={20} />
                            </Box>
                            <Box>
                                <Typography className="text-[14px]! font-semibold!">Pickup</Typography>
                                <Typography className="text-[12px]!">Mumbai, Maharashtra</Typography>
                            </Box>
                        </Box>
                    </div>

                    {/* DELIVERED CARD */}
                    <div
                        style={{
                            position: "absolute",
                            right: "-35px",
                            top: "45%",
                            background: "#FFFFFF",
                            borderRadius: 12,
                            padding: 16,
                            width: 220,
                            boxShadow: "0px 32px 34px rgba(202,202,202,0.30)",
                            zIndex: 4,
                            border:'1px solid #F5F5F6'
                        }}
                    >
                        <Box className='flex gap-2 items-center'>
                            <Box className='w-9 h-9 flex items-center justify-center bg-[#28C76F] rounded-[12px]!'>
                                <Icon className="text-white" icon={'material-symbols:check-circle-outline'} width={20} height={20} />
                            </Box>
                            <Box>
                                <Typography className="text-[14px]! font-semibold!">Delivered</Typography>
                                <Typography className="text-[12px]!">Guwahati, Assam</Typography>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}