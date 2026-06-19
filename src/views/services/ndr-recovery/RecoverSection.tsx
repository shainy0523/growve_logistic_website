import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const STEPS = [
    {
        title: 'Detect & reason-code',
        description:
            'The instant a courier logs an NDR, Growve pulls it in, normalises the reason across all 25+ couriers, and drops it into the recovery queue. No CSV exports, no morning-after surprises.',
    },
    {
        title: 'Contact the customer',
        description:
            "A branded WhatsApp message goes out in minutes with one-tap options — re-deliver, fix address, reschedule. SMS and IVR cover anyone WhatsApp can't reach.",
    },
    {
        title: 'Recover & re-attempt',
        description:
            "The customer's choice is validated for serviceability and pushed straight back to the courier. The shipment is rescheduled and tracked to delivery — fully closed-loop.",
    },
]

const RecoverSection = () => {
    return (
        <Box
            sx={{
                py: '100px',
                bgcolor: '#FFF',
            }}
        >
            <Box className="landing-container">
                <SectionHeading
                    eyebrow="HOW IT WORKS"
                    title="Detect. Contact."
                    accent="Recover."
                    subtitle="Every failed delivery follows a structured recovery workflow — from detection and customer outreach to re-attempt scheduling and successful delivery."
                    variant="light"
                    align="center"
                    size="lg"
                />

                <Box
                    sx={{
                        mt: 6,
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3,1fr)',
                        },
                        gap: '20px',
                    }}
                >
                    {STEPS.map((step, index) => (
                        <Box
                            key={step.title}
                            sx={{
                                borderRadius: '12px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#F5F5F6',
                            }}
                        >
                            {/* SVG CARD */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '377 / 313',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={`/images/Recover${index + 1}.svg`}
                                    alt={step.title}
                                    fill
                                    priority
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>

                            {/* CONTENT */}
                            <Box
                                sx={{
                                    // mt: 1,
                                    px: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Dai Banna SIL',
                                        fontSize: '20px',
                                        fontWeight: 500,
                                        lineHeight: '30px',
                                        color: '#000',
                                        mb: 1.5,
                                        mt: 3,
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        lineHeight: '28px',
                                        color: '#6D6B77',
                                        maxWidth: 340,
                                        mx: 'auto',
                                        mb: 2,
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default RecoverSection
