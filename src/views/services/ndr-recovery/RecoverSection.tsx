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
                                bgcolor: '#F5F5F6',
                                border: '1px solid #EAEAEC',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* VISUAL AREA */}
                            <Box
                                sx={{
                                    height: 280,
                                    bgcolor: '#FFF',
                                    borderBottom: '1px solid #EAEAEC',
                                    p: 2.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {index === 0 && <Image
                                    src='/images/Recover1.svg'
                                    width={300}
                                    height={300}
                                    alt='recover1' />}
                                {index === 1 && <Image
                                    src='/images/Recover2.svg'
                                    width={300}
                                    height={300}
                                    alt='recover1' />}
                                {index === 2 && <Image
                                    src='/images/Recover3.svg'
                                    width={300}
                                    height={300}
                                    alt='recover1' />}
                            </Box>

                            {/* CONTENT */}
                            <Box
                                sx={{
                                    px: 2.5,
                                    pb: 3,
                                    pt: 3,
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        fontFamily: 'Dai Banna SIL',
                                        fontSize: '22px',
                                        fontWeight: 500,
                                        color: '#000',
                                        mb: 1,
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        lineHeight: '21px',
                                        color: '#6D6B77',
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
