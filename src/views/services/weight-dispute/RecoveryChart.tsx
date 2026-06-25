'use client'

import { Box, Typography } from '@mui/material'

type Bar = {
    value: string
    volume: string
    note: string
    /** Height of the bar as a percentage of the tallest bar (0-100). */
    heightPct: number
    highlight?: boolean
}

const BARS: Bar[] = [
    { value: '₹0.2L', volume: '1,000 / mo', note: 'If undisputed', heightPct: 22 },
    { value: '₹1.1L', volume: '5,000 / mo', note: 'If undisputed', heightPct: 48 },
    { value: '₹4.3L', volume: '20,000 / mo', note: 'If undisputed', heightPct: 83 },
    {
        value: '₹10.8L',
        volume: '50,000+ / mo',
        note: 'Recovered with Growve',
        heightPct: 100,
        highlight: true,
    },
]

const CHART_HEIGHT = 240
const CYCLE = 4 // seconds per full loop

export default function RecoveryChart() {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                bgcolor: '#F5F5F6',
                borderRadius: '12px',
                outline: '1px solid #EAEAEC',
                outlineOffset: '-1px',
                overflow: 'hidden',
                p: { xs: 3, md: 15 },
                // Bars grow up, hold, then shrink back — looping forever.
                '@keyframes growBar': {
                    '0%': { height: '0%' },
                    '30%': { height: 'var(--bar-h)' },
                    '70%': { height: 'var(--bar-h)' },
                    '100%': { height: '0%' },
                },
                '@keyframes fadeUp': {
                    '0%': { opacity: 0, transform: 'translateY(6px)' },
                    '30%, 70%': { opacity: 1, transform: 'translateY(0)' },
                    '100%': { opacity: 0, transform: 'translateY(6px)' },
                },
                '@keyframes popDot': {
                    '0%': { opacity: 0, transform: 'translateX(-50%) scale(0)' },
                    '30%, 70%': { opacity: 1, transform: 'translateX(-50%) scale(1)' },
                    '100%': { opacity: 0, transform: 'translateX(-50%) scale(0)' },
                },
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: { xs: 2, md: 4 },
                    alignItems: 'flex-end',
                }}
            >
                {BARS.map((bar, index) => (
                    <Box
                        key={bar.volume}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* Bar with value label on top */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: CHART_HEIGHT,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    '--bar-h': `${bar.heightPct}%`,
                                    height: '0%',
                                    borderTop: bar.highlight
                                        ? '2px solid #BD8125'
                                        : '2px solid #000',
                                    background: bar.highlight
                                        ? 'linear-gradient(180deg, #FBC942 0%, rgba(251,201,66,0) 100%)'
                                        : 'linear-gradient(180deg, rgba(128,128,128,0.20) 0%, rgba(128,128,128,0) 100%)',
                                    animation: `growBar ${CYCLE}s ease-in-out infinite`,
                                    animationDelay: `${index * 0.15}s`,
                                }}
                            >
                                {/* Value label above the bar */}
                                <Typography
                                    sx={{
                                        position: 'absolute',
                                        top: -28,
                                        left: 0,
                                        right: 0,
                                        textAlign: 'center',
                                        color: '#000',
                                        fontFamily: 'var(--font-primary)',
                                        fontSize: { xs: 14, md: 16 },
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                        opacity: 0,
                                        animation: `fadeUp ${CYCLE}s ease-in-out infinite`,
                                        animationDelay: `${index * 0.15}s`,
                                    }}
                                >
                                    {bar.value}
                                </Typography>

                                {/* Marker dot for the highlighted bar */}
                                {bar.highlight && (
                                    <Box
                                        component="span"
                                        sx={{
                                            position: 'absolute',
                                            top: -6,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 10,
                                            height: 10,
                                            borderRadius: '9999px',
                                            bgcolor: '#BD8125',
                                            border: '1px solid #FEFEFE',
                                            opacity: 0,
                                            animation: `popDot ${CYCLE}s ease-in-out infinite`,
                                            animationDelay: `${index * 0.15}s`,
                                        }}
                                    />
                                )}
                            </Box>
                        </Box>

                        {/* Volume + note below the baseline */}
                        <Typography
                            sx={{
                                mt: 1,
                                textAlign: 'center',
                                color: '#444050',
                                fontFamily: 'var(--font-primary)',
                                fontSize: { xs: 11, md: 13 },
                                fontWeight: 600,
                                lineHeight: 1.3,
                            }}
                        >
                            {bar.volume}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: '#8D8A94',
                                fontFamily: 'var(--font-primary)',
                                fontSize: { xs: 10, md: 12 },
                                fontWeight: 400,
                                lineHeight: 1.3,
                            }}
                        >
                            {bar.note}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
