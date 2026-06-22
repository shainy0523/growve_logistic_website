'use client'

import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const body = 'Nunito Sans, sans-serif'
const display = 'var(--font-dai-banna), sans-serif'

type Channel = {
    name: string
    subtitle: string
    icon: string
    tileBg: string
    iconColor: string
    status: string
    dot: string
    faded?: boolean
}

// Top row — bleeds off the left edge (Figma: left -187, top 164)
const TOP_ROW: Channel[] = [
    {
        name: 'DTDC',
        subtitle: 'Rank #1',
        icon: 'mdi:truck-fast',
        tileBg: '#07287F',
        iconColor: '#FFFFFF',
        status: 'Scheduled',
        dot: '#FF9F43',
        faded: true,
    },
    {
        name: 'WhatsApp',
        subtitle: '10:47 AM',
        icon: 'mdi:whatsapp',
        tileBg: 'linear-gradient(180deg, #28C76F 0%, #08851D 100%)',
        iconColor: '#FFFFFF',
        status: 'Delivered',
        dot: '#28C76F',
    },
]

// Bottom row (Figma: left 20, top 254)
const BOTTOM_ROW: Channel[] = [
    {
        name: 'SMS',
        subtitle: '10:49 AM',
        icon: 'mdi:message-text',
        tileBg: 'linear-gradient(180deg, #4A9BD4 0%, #26506E 100%)',
        iconColor: '#FFFFFF',
        status: 'Opened',
        dot: '#FBC942',
    },
    {
        name: 'IVR Call',
        subtitle: 'Delivered 10:53 AM',
        icon: 'mdi:phone-in-talk',
        tileBg: 'linear-gradient(180deg, #000000 0%, #8D8A94 100%)',
        iconColor: '#FFFFFF',
        status: 'Critical',
        dot: '#FF7074',
        faded: true,
    },
]

function ChannelCard({ c }: { c: Channel }) {
    return (
        <Box
            sx={{
                width: 279.25,
                flexShrink: 0,
                p: 2,
                borderRadius: '12px',
                bgcolor: '#FFFFFF',
                opacity: c.faded ? 0.34 : 1,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.25,
            }}
        >
            {/* Logo tile */}
            <Box
                sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: c.tileBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0px 0px 4px rgba(255,255,255,0.6) inset',
                }}
            >
                <Icon icon={c.icon} fontSize={20} color={c.iconColor} />
            </Box>

            {/* Name + subtitle */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, lineHeight: '17.5px', color: '#000' }}>
                    {c.name}
                </Typography>
                <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, lineHeight: '15.6px', color: '#737682' }}>
                    {c.subtitle}
                </Typography>
            </Box>

            {/* Status pill */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1.25,
                    py: 0.5,
                    borderRadius: '18px',
                    bgcolor: '#F5F5F6',
                    flexShrink: 0,
                }}
            >
                <Box sx={{ width: 8, height: 8, borderRadius: '9999px', bgcolor: c.dot }} />
                <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, lineHeight: '15.6px', color: '#000' }}>
                    {c.status}
                </Typography>
            </Box>
        </Box>
    )
}

export default function ChannelFallbackCard() {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: 400,
                borderRadius: '12px',
                bgcolor: '#F5F5F6',
                outline: '1px solid #EAEAEC',
                outlineOffset: '-1px',
                overflow: 'hidden',
            }}
        >
            {/* Copy */}
            <Box sx={{ position: 'absolute', left: 24, top: 24, width: 468, maxWidth: 'calc(100% - 48px)' }}>
                <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 24, lineHeight: 1.2, color: '#000', mb: 1.5 }}>
                    Reach customers where they are
                </Typography>
                <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: '21px', color: '#6D6B77' }}>
                    WhatsApp first, with SMS and IVR fallback — in the customer&apos;s language.
                </Typography>
            </Box>

            {/* Top row — marquee scrolling left */}
            <Box
                sx={{
                    position: 'absolute',
                    left: -187,
                    top: 164,
                    display: 'flex',
                    width: 'max-content',
                    gap: 2.5,
                    pr: 2.5,
                    '@keyframes channelMarqueeLeft': {
                        from: { transform: 'translateX(0)' },
                        to: { transform: 'translateX(-50%)' },
                    },
                    animation: 'channelMarqueeLeft 18s linear infinite',
                    '&:hover': { animationPlayState: 'paused' },
                }}
            >
                {[...TOP_ROW, ...TOP_ROW].map((c, i) => (
                    <ChannelCard key={`${c.name}-${i}`} c={c} />
                ))}
            </Box>

            {/* Bottom row — marquee scrolling right */}
            <Box
                sx={{
                    position: 'absolute',
                    left: -187,
                    top: 254,
                    display: 'flex',
                    width: 'max-content',
                    gap: 2.5,
                    pr: 2.5,
                    '@keyframes channelMarqueeRight': {
                        from: { transform: 'translateX(-50%)' },
                        to: { transform: 'translateX(0)' },
                    },
                    animation: 'channelMarqueeRight 18s linear infinite',
                    '&:hover': { animationPlayState: 'paused' },
                }}
            >
                {[...BOTTOM_ROW, ...BOTTOM_ROW].map((c, i) => (
                    <ChannelCard key={`${c.name}-${i}`} c={c} />
                ))}
            </Box>
        </Box>
    )
}
