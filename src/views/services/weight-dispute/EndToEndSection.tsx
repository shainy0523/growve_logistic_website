'use client'

import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Chip, Collapse, Typography } from '@mui/material'
import { useState } from 'react'

const STEPS = [
    {
        title: 'Capture weight & dimensions',
        description: 'At packing, from the Weight Scanner or your scale.',
    },
    {
        title: 'Lock the charged weight',
        description: 'Every courier weight reading is recorded against the order.',
    },
    {
        title: 'Detect the discrepancies',
        description: 'Declared vs charged compared on every shipment.',
    },
    {
        title: 'File the dispute with evidence',
        description: 'Scan, photo and dims auto-attached to the dispute.',
    },
    {
        title:'Detect discrepancRecover and reconcile to invoice.ies',
        description: 'Scan, photo and dims auto-attached to the dispute.',
    }
]

export default function EndToEndSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Box
            sx={{
                py: '100px',
            }}
        >
            <Box className="landing-container">
                <SectionHeading
                    eyebrow="END TO END"
                    title={"From scan to\nsettled — without"}
                    accent="manual checks."
                    subtitle="Growve captures the real weight once, then handles detection, evidence and the dispute on its own."
                    variant="light"
                    align="center"
                    size="lg"
                />

                <Box
                    sx={{
                        mt: { xs: 6, md: 6 },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1.1fr' },
                        gap: { xs: 5, md: 8 },
                        alignItems: 'center',
                    }}
                >
                    {/* Steps list */}
                    <Box>
                        {STEPS.map((step, index) => {
                            const isActive = activeIndex === index
                            return (
                                <Box
                                    key={step.title}
                                    onClick={() => setActiveIndex(index)}
                                    sx={{
                                        py: 2.5,
                                        cursor: 'pointer',
                                        borderBottom: isActive
                                            ? '2px solid #000'
                                            : '1px solid #EAEAEC',
                                        '&:first-of-type': { pt: 0 },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'var(--font-dai-banna)',
                                            fontSize: '22px',
                                            fontWeight: 500,
                                            lineHeight: '28px',
                                            color: isActive ? '#000' : '#8D8A94',
                                            transition: 'color 0.2s ease',
                                        }}
                                    >
                                        {step.title}
                                    </Typography>
                                    <Collapse in={isActive} timeout="auto" unmountOnExit>
                                        <Typography
                                            sx={{
                                                mt: 1,
                                                fontSize: '14px',
                                                lineHeight: '22px',
                                                color: '#6D6B77',
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                    </Collapse>
                                </Box>
                            )
                        })}
                    </Box>

                    {/* Carrier comparison */}
                    <Box
                        sx={{
                            minHeight:'450px',
                            border:'1px solid #EAEAEC',
                            borderRadius: '12px',
                            bgcolor: '#F1F1F2',
                            p: { xs: 3, md: 10 },
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection:'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Chip
                            size='small'
                            label='Overcharged Auto-Flagged'
                            sx={{
                                color: '#00A7BC',
                                bgcolor: '#EBF9FB',
                                borderRadius: '12px',
                                fontWeight: 600,
                                mb: 4,
                                p:.5,
                            }}
                        />
                        <Box
                            component="img"
                            src="/images/weight_dispute/carrier_comparison.svg"
                            alt="Carrier Comparison"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '12px',
                                boxShadow: '0 20px 50px rgba(17,17,26,0.08)',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
