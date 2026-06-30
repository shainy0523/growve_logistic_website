'use client'

import { Box } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const principles = [
    {
        title: 'We win only when customers win',
        description:
            'Our incentives are tied to your outcomes — lower costs, fewer failures, faster deliveries.',
    },
    {
        title: 'Infrastructure, not middleman',
        description:
            'We build the rails you ship on, rather than inserting ourselves between you and your couriers.',
    },
    {
        title: 'Automate the boring',
        description:
            'If a decision can be made from rules and data, software should make it — instantly, accurately, and at any volume.',
    },
    {
        title: 'Earn trust every single day',
        description:
            'Reliability is a daily promise. Every shipment is a chance to keep it.',
    },
    {
        title: 'Stay close to the brands we serve',
        description:
            'We spend time on the warehouse floor so the product reflects how shipping actually works.',
    },
]

const HowWeWork = () => {
    const [active, setActive] = useState(2)

    return (
        <Box
            sx={{
                background: 'white',
                overflow: 'hidden',
                py: { xs: '60px', md: '100px' },
            }}
        >
            <Box
                className="landing-container"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '48px',
                }}
            >
                {/* Heading */}
                <SectionHeading
                    variant="light"
                    align="center"
                    size="lg"
                    eyebrow="How we work"
                    title={"A few things we\nwon't"}
                    accent="compromise on."
                    subtitle="Shipping gets harder as a brand grows. Our job is to make sure it never becomes the reason growth slows — and we hold our own team to the same bar."
                />

                {/* Body */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: '50px',
                    }}
                >
                    {/* LEFT — accordion list */}
                    <Box
                        sx={{
                            flex: '1 1 0',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        {principles.map((principle, index) => {
                            const isActive = index === active
                            return (
                                <Box
                                    key={principle.title}
                                    onMouseEnter={() => setActive(index)}
                                    onClick={() => setActive(index)}
                                    sx={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                        pb: isActive ? '20px' : 2,
                                        borderBottom: isActive
                                            ? '2px solid #000000'
                                            : '1px solid #EAEAEC',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: isActive ? '#000000' : '#8D8A94',
                                            fontSize: '24px',
                                            fontFamily: 'var(--font-dai-banna)',
                                            fontWeight: 500,
                                            transition: 'color 0.25s ease',
                                        }}
                                    >
                                        {principle.title}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateRows: isActive ? '1fr' : '0fr',
                                            opacity: isActive ? 1 : 0,
                                            transition:
                                                'grid-template-rows 0.3s ease, opacity 0.3s ease',
                                        }}
                                    >
                                        <Box sx={{ overflow: 'hidden' }}>
                                            <Box
                                                sx={{
                                                    color: '#6D6B77',
                                                    fontSize: '14px',
                                                    fontFamily: 'Nunito Sans',
                                                    fontWeight: 400,
                                                    lineHeight: '21px',
                                                }}
                                            >
                                                {principle.description}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>

                    {/* RIGHT — image card */}
                    <Box
                        sx={{
                            flex: '1 1 0',
                            width: '100%',
                            height: '445px',
                            p: '20px',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            outline: '1px solid #EAEAEC',
                            outlineOffset: '-1px',
                            background:
                                'lightgray url(/images/about/about_how_we_work.svg) 50% / cover no-repeat',
                        }}
                    >
                        {/* dark gradient overlay for caption legibility */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(203deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.7) 100%)',
                                pointerEvents: 'none',
                            }}
                        />
                        {/* caption bottom-left */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '24px',
                                bottom: '24px',
                                color: '#ffffff',
                                fontSize: '16px',
                                fontFamily: 'Nunito Sans',
                                fontWeight: 700,
                                lineHeight: '19.2px',
                            }}
                        >
                            Operators and engineers,
                            <br />
                            obsessed with the last mile.
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HowWeWork
