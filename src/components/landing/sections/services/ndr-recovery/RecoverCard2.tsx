'use client'

import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const body = 'Nunito Sans, sans-serif'

// Types out `text` one character at a time after `startDelay` ms.
// Re-runs whenever `playKey` changes (used to replay each loop).
function Typewriter({ text, startDelay = 150, speed = 26, playKey }: { text: string; startDelay?: number; speed?: number; playKey: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)
        let interval: ReturnType<typeof setInterval>
        const start = setTimeout(() => {
            interval = setInterval(() => {
                setCount((c) => {
                    if (c >= text.length) {
                        clearInterval(interval)
                        return c
                    }
                    return c + 1
                })
            }, speed)
        }, startDelay)
        return () => {
            clearTimeout(start)
            clearInterval(interval)
        }
    }, [text, startDelay, speed, playKey])

    // Render the full text so wrapping/size stay fixed; the untyped tail is
    // transparent and revealed character-by-character.
    return (
        <>
            {text.slice(0, count)}
            <Box component="span" sx={{ color: 'transparent' }} aria-hidden>
                {text.slice(count)}
            </Box>
        </>
    )
}

// One block that fades/slides in when `show` is true.
function Reveal({ show, children, sx }: { show: boolean; children: React.ReactNode; sx?: object }) {
    return (
        <Box
            sx={{
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}

// Coded version of the second "Contact the customer" WhatsApp chat card
// (replaces /images/Recover2.svg). Messages + chips fade/slide in on a loop.
export default function RecoverCard2() {
    // step: 0 = nothing, 1 = incoming bubble typing, 2 = reply typing, 3 = chips.
    // cycle re-keys the Typewriters so they re-type each loop.
    const [step, setStep] = useState(0)
    const [cycle, setCycle] = useState(0)

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = []
        timers.push(setTimeout(() => setStep(1), 400)) // incoming appears + types (~2.5s)
        timers.push(setTimeout(() => setStep(2), 3200)) // reply appears + types (~0.8s)
        timers.push(setTimeout(() => setStep(3), 4400)) // chips appear
        timers.push(
            setTimeout(() => {
                setStep(0)
                setCycle((c) => c + 1) // restart the loop
            }, 7000),
        )
        return () => timers.forEach(clearTimeout)
    }, [cycle])

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
                flexDirection: 'column',
            }}
        >
            {/* Chat body */}
            <Box
                sx={{
                    flex: 1,
                    px: 2,
                    py: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 1,
                    overflow: 'hidden',
                }}
            >
                {/* Day divider */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ px: 0.75, py: 0.375, bgcolor: '#F5F5F6', borderRadius: '5px' }}>
                        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                            Today, July 22
                        </Typography>
                    </Box>
                </Box>

                {/* Incoming message */}
                <Reveal show={step >= 1} sx={{ display: 'flex', gap: 1 }}>
                    <Box
                        sx={{
                            width: 26,
                            height: 26,
                            borderRadius: '9999px',
                            bgcolor: '#FBC942',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Image
                                  src='/images/logo2.png'
                                  alt='Growve'
                                  width={19}
                                  height={19}
                                  style={{ objectFit: 'contain' }}
                                />
                    </Box>
                    <Box sx={{ minWidth: 0 }}>
                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#F5F5F6',
                                borderRadius: '2px 8px 8px 8px',
                            }}
                        >
                            <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 9.5, lineHeight: '12.5px', color: '#000' }}>
                                {step >= 1 && (
                                    <Typewriter
                                        text="Hi Vinayak, we tried delivering your Lumora order today but couldn't reach you. When works best?"
                                        playKey={cycle}
                                    />
                                )}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77', mt: 0.375 }}>
                            08:10 AM
                        </Typography>
                    </Box>
                </Reveal>

                {/* Outgoing reply */}
                <Reveal show={step >= 2} sx={{ display: 'flex', justifyContent: 'flex-end', pl: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#FDEAB7',
                                borderRadius: '8px 2px 8px 8px',
                            }}
                        >
                            <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 9.5, lineHeight: '12.5px', color: '#000' }}>
                                {step >= 2 && <Typewriter text="Try tomorrow evening please" playKey={cycle} />}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.375, mt: 0.375 }}>
                            <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 8.5, lineHeight: '11px', color: '#6D6B77' }}>
                                08:12 AM
                            </Typography>
                            <Icon icon="mdi:check-all" fontSize={11} color="#000000" />
                        </Box>
                    </Box>
                </Reveal>

                {/* Quick-reply chips */}
                <Reveal show={step >= 3} sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        <Box sx={{ px: 1, py: 0.75, bgcolor: '#FBC942', borderRadius: '6px' }}>
                            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 9.5, lineHeight: 1, color: '#000' }}>
                                Re-attempt tomorrow
                            </Typography>
                        </Box>
                        <Box sx={{ px: 1, py: 0.75, bgcolor: '#FFFBF0', borderRadius: '6px', outline: '0.79px solid #FDEAB7', outlineOffset: '-0.79px' }}>
                            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 9.5, lineHeight: 1, color: '#000' }}>
                                Change address
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ px: 1, py: 0.75, borderRadius: '6px', outline: '0.79px solid #E1E1E4', outlineOffset: '-0.79px', alignSelf: 'flex-start' }}>
                        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 9.5, lineHeight: 1, color: '#000' }}>
                            Cancel
                        </Typography>
                    </Box>
                </Reveal>
            </Box>
        </Box>
    )
}
