'use client'

import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const body = 'Nunito Sans, sans-serif'

// Coded version of the first "Detect & reason-code" NDR shipment card
// (replaces /images/Recover1.svg).
export default function RecoverCard1() {
    return (
        <Box
            sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                border: '1px solid #EAEAEC',
                borderRadius:'12px'
            }}
        >
            {/* Shipment card */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 300,
                    bgcolor: '#F5F5F6',
                    border: '1px solid #FFFFFF',
                    borderRadius: '10px',
                    p: 1.75,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                }}
            >
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#FFFFFF',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon icon="mdi:package-variant-closed" fontSize={17} color="#FBC942" />
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 12, lineHeight: '15px', color: '#000' }}>
                                    #GRV-51002
                                </Typography>
                                <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 9.5, lineHeight: '12px', color: '#6D6B77' }}>
                                    FedEx
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mt: 0.25 }}>
                                <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                                    Reason:
                                </Typography>
                                <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 10, lineHeight: '13px', color: '#000' }}>
                                    Customer Unavailable
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* NDR badge */}
                    <Box
                        sx={{
                            px: 0.875,
                            py: 0.375,
                            bgcolor: '#FFD4D5',
                            borderRadius: '8px',
                        }}
                    >
                        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 9.5, lineHeight: '12px', color: '#000' }}>
                            NDR
                        </Typography>
                    </Box>
                </Box>

                {/* Progress track */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 0.25 }}>
                    {/* Start node (active) */}
                    <Box
                        sx={{
                            width: 9,
                            height: 9,
                            borderRadius: '9999px',
                            bgcolor: '#FEF2D2',
                            outline: '1.75px solid #FBC942',
                            flexShrink: 0,
                            '@keyframes recoverNodePulse': {
                                '0%, 100%': { boxShadow: '0 0 0 0 rgba(251,201,66,0.5)' },
                                '50%': { boxShadow: '0 0 0 4px rgba(251,201,66,0)' },
                            },
                            animation: 'recoverNodePulse 4s ease-in-out infinite',
                        }}
                    />

                    {/* Track with animated fill + arrow riding its edge */}
                    <Box sx={{ position: 'relative', flex: 1, height: 16, display: 'flex', alignItems: 'center' }}>
                        {/* Base (pending) line */}
                        <Box sx={{ position: 'absolute', inset: 'auto 0', height: 3.5, borderRadius: 2, bgcolor: '#E1E1E4' }} />
                        {/* Animated yellow fill */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                height: 3.5,
                                borderRadius: 2,
                                bgcolor: '#FBC942',
                                '@keyframes recoverFill': {
                                    '0%': { width: '8%' },
                                    '50%': { width: '72%' },
                                    '100%': { width: '8%' },
                                },
                                width: '8%',
                                animation: 'recoverFill 4s ease-in-out infinite',
                            }}
                        />
                        {/* Arrow rides the leading edge of the fill */}
                        <Box
                            component="img"
                            src="/images/ndr/navigation-arrow.svg"
                            alt=""
                            sx={{
                                position: 'absolute',
                                width: 16,
                                height: 16,
                                top: 0,
                                transform: 'translateX(-50%)',
                                '@keyframes recoverArrowTravel': {
                                    '0%': { left: '8%' },
                                    '50%': { left: '72%' },
                                    '100%': { left: '8%' },
                                },
                                left: '8%',
                                animation: 'recoverArrowTravel 4s ease-in-out infinite',
                            }}
                        />
                    </Box>

                    {/* End node (pending) */}
                    <Box
                        sx={{
                            width: 9,
                            height: 9,
                            borderRadius: '9999px',
                            bgcolor: '#FFFFFF',
                            outline: '1.75px solid #E1E1E4',
                            flexShrink: 0,
                        }}
                    />
                </Box>

                {/* Origin / Destination */}
                <Box sx={{ display: 'flex', gap: 4, mt: 0.5 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                            Origin
                        </Typography>
                        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, lineHeight: '15px', color: '#000' }}>
                            Lower Parel, Mumbai
                        </Typography>
                        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                            Mar 20, 2036 – 10:00 AM
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                            Destination
                        </Typography>
                        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, lineHeight: '15px', color: '#000' }}>
                            New Delhi, India
                        </Typography>
                        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                            Mar 23 – 03:00 PM (ETA)
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
