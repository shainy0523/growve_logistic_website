import { Box } from '@mui/material'
import React from 'react'
import ServiceHero from '../../components/landing/sections/services/service-allocation/ServiceHero'
import HowWeWork from '../../components/landing/sections/about/HowWeWork'
import OperatingPrinciples from '../../components/landing/sections/about/OperatingPrinciples'
import CareersSection from '../../components/landing/sections/about/CareersSection'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'
import BuiltForIndia from '@/components/landing/sections/about/BuiltForIndia'

const AboutView = () => {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 100%)",
                    py: { xs: "40px", md: "120px" },
                    overflow: "hidden",
                }}
            >
                <Box
                    className="landing-container"
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "flex-start" },
                        justifyContent: "space-between",
                        gap: { xs: "32px", md: "50px" },
                    }}
                >
                    {/* LEFT */}
                    <Box
                        sx={{
                            maxWidth: "502px",
                            flex: { xs: "1 1 100%", md: "0 0 auto" },
                        }}
                    >
                        <ServiceHero
                            badge="Live across India"
                            title="Building the logistics layer for"
                            accent="India's next brands."
                            description="Growve is a new post-purchase operating system for Indian D2C and ecommerce. Everything that happens after checkout — courier choice, failed deliveries, returns, weight overcharges and COD reconciliation — becomes software that decides correctly on every shipment, on its own."
                            primaryButton='See the Platform'
                        />
                    </Box>

                    {/* RIGHT */}
                    <Box
                        sx={{
                            maxWidth: { xs: "100%", md: "600px" },
                            width: "100%",
                            marginTop: {
                                xs: '5rem',
                                md: 0,
                            },
                            cursor: 'pointer',
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                height: "445px",
                                px: "20px",
                                py: "24px",
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "12px",
                                outline: "1px solid #EAEAEC",
                                outlineOffset: "-1px",
                                background:
                                    "lightgray url(/images/about/about_hero.jpg) 50% / cover no-repeat",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "20px",
                            }}
                        >
                            {/* dark gradient overlay bottom for caption legibility */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(203deg, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.85) 100%)",
                                    pointerEvents: "none",
                                }}
                            />
                            {/* yellow blur glow top-right */}
                            <Box
                                sx={{
                                    width: "234px",
                                    height: "234px",
                                    left: "251px",
                                    top: "12px",
                                    position: "absolute",
                                    background: "#FBC942",
                                    borderRadius: "9999px",
                                    filter: "blur(170.6px)",
                                }}
                            />

                            {/* badges row */}
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-flex",
                                    justifyContent: {
                                        md: "flex-start",
                                        xs: "center",
                                    },
                                    alignItems: "flex-start",
                                    flexWrap: {
                                        md: "nowrap",
                                        xs: "wrap",
                                    },
                                    gap: {
                                        md: "12px",
                                        xs: "8px",
                                    }
                                }}
                            >
                                {["Built in Mumbai", "Shipping across India", "Founded 2026"].map(
                                    (label) => (
                                        <Box
                                            key={label}
                                            sx={{
                                                // height: "25px",
                                                py: "4px",
                                                pl: "5px",
                                                pr: "8px",
                                                background: "rgba(245, 245, 246, 0.20)",
                                                backdropFilter: "blur(8px)",
                                                WebkitBackdropFilter: "blur(8px)",
                                                boxShadow:
                                                    "0px 1px 2px rgba(0, 0, 0, 0.20), inset 0px 1px 0px rgba(255, 255, 255, 0.4), inset 0px -1px 0px rgba(255, 255, 255, 0.4)",
                                                borderRadius: "15px",
                                                display: "inline-flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                gap: "4px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: "8px",
                                                    height: "8px",
                                                    background:
                                                        "#FCD468",
                                                    borderRadius: "9999px",
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    color: "#ffffff",
                                                    fontSize: "12px",
                                                    fontFamily: "Nunito Sans",
                                                    fontWeight: 600,
                                                    lineHeight: "14.3px",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {label}
                                            </Box>
                                        </Box>
                                    )
                                )}
                            </Box>

                            {/* bottom-left caption */}
                            <Box
                                sx={{
                                    left: "30px",
                                    top: "376px",
                                    position: "absolute",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    gap: "4px",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: "#ffff",
                                        fontSize: "16px",
                                        fontFamily: "Nunito Sans",
                                        fontWeight: 700,
                                        lineHeight: "19.2px",
                                    }}
                                >
                                    One platform, every shipment
                                </Box>
                                <Box
                                    sx={{
                                        color: "#ACAAB1",
                                        fontSize: "12px",
                                        fontFamily: "Nunito Sans",
                                        fontWeight: 400,
                                        lineHeight: "15.6px",
                                    }}
                                >
                                    Allocate&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Recover&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Reconcile
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Built for India */}
            <BuiltForIndia />
            {/* How we work */}
            <HowWeWork />
            {/* Operating principles */}
            <OperatingPrinciples />
            {/* Careers */}
            <CareersSection />
            <EverythingSection
                eyebrow="What we're building"
                title={'One platform for\n everything'}
                accent='after checkout.'
                subtitle='The work that used to need a stack of tools and a full ops team — handled as a single system.'
                excludeTitles={["Real-Time Shipment Tracking", "Weight Dispute Protection"]}
                showCenterCard={false} />
        </>
    )
}

export default AboutView
