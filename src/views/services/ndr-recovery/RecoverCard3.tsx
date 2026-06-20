'use client'

import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const body = 'Nunito Sans, sans-serif'

// One stacked "Re-attempt scheduled" success card.
type Responsive = number | { xs?: number; sm?: number; md?: number }

function StatusCard({ left, top, opacity, show, blank }: { left: Responsive; top: Responsive; opacity: number; show: boolean; blank?: boolean }) {
    return (
        <Box
            sx={{
                position: 'absolute',
                left,
                top,
                // Wide card whose right edge runs off the container (Figma overflow look)
                width: 'calc(100% + 40px)',
                maxWidth: 'none',
                opacity: show ? opacity : 0,
                transform: show ? 'scale(1)' : 'scale(1.12)',
                transition: 'opacity 0.45s ease, transform 0.45s ease',
                bgcolor: '#EEFBF3',
                border: '1px solid #CBF2DC',
                borderRadius: '8px',
                p: 1.5,
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                minHeight: 58,
            }}
        >
            {blank ? null : (
                <>
                    {/* Check badge */}
                    <Box
                        sx={{
                            p: 0.75,
                            bgcolor: '#FFFFFF',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Icon icon="mdi:check-circle" fontSize={16} color="#28C76F" />
                    </Box>

                    {/* Text */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 13, lineHeight: '17px', color: '#000' }}>
                            Re-attempt scheduled
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.25 }}>
                            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, lineHeight: '15px', color: '#737682' }}>
                                RTO avoided
                            </Typography>
                            <Box sx={{ width: 3, height: 3, borderRadius: '9999px', bgcolor: '#737682' }} />
                            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, lineHeight: '15px', color: '#737682' }}>
                                Tue 4pm
                            </Typography>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    )
}

// Coded version of the third "Recover & re-attempt" stacked success card
// (replaces /images/Recover3.svg). Cards appear one by one, then fade out and loop.
export default function RecoverCard3() {
    // step: 0 = none, 1 = back, 2 = middle, 3 = front.
    const [step, setStep] = useState(0)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        const run = () => {
            const timers: ReturnType<typeof setTimeout>[] = []
            timers.push(setTimeout(() => setStep(1), 200)) // back
            timers.push(setTimeout(() => setStep(2), 500)) // middle
            timers.push(setTimeout(() => setStep(3), 800)) // front
            timers.push(setTimeout(() => setStep(0), 2000)) // fade all out
            timer = setTimeout(run, 2000) // restart loop
            return () => timers.forEach(clearTimeout)
        }
        const cleanup = run()
        return () => {
            cleanup()
            clearTimeout(timer)
        }
    }, [])

    return (
        <Box
            sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: '#FFFFFF',
                border: '1px solid #EAEAEC',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 120, md: 130 } }}>
                {/* Back card (blank) — appears last */}
                <StatusCard left={{ xs: 72, md: 82 }} top={50} opacity={0.4} show={step >= 3} blank />
                {/* Middle card (blank) */}
                <StatusCard left={{ xs: 56, md: 66 }} top={35} opacity={0.7} show={step >= 2} blank />
                {/* Front card — appears first */}
                <StatusCard left={{ xs: 40, md: 50 }} top={20} opacity={1} show={step >= 1} />
            </Box>
        </Box>
    )
}
