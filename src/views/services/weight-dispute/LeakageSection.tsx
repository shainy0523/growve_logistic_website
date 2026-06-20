import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import ImpactCard from '../ndr-recovery/ImpactCard'

const IMPACT_STATS = [
    {
        value: '92%',
        title: 'Disputes won',
        description: 'Of flagged overcharges recovered, with evidence attached.',
    },
    {
        value: '₹1.4L',
        title: 'Recovered / month',
        description: 'Typical recovery for a mid-size COD brand.',
    },
    {
        value: '3×',
        title: 'Faster filing',
        description: 'Disputes raised within minutes, not at month-end.',
    },
]

const FEATURE_TILES = [
    {
        icon: 'material-symbols:speaker-notes-outline-sharp',
        title: 'Window guard',
        description: "Files every dispute before the courier's claim window closes.",
    },
    {
        icon: 'material-symbols:speaker-notes-outline-sharp',
        title: 'Slab-aware',
        description: "Knows each courier's weight slabs and volumetric formula.",
    },
    {
        icon: 'material-symbols:speaker-notes-outline-sharp',
        title: 'Auto evidence',
        description: 'Attaches the scan, photo and dimensions as proof, automatically.',
    },
]

export default function LeakageSection() {
    return (
        <Box
            className="landing-container"
            sx={{
                py: { xs: 10, md: '100px' },
                px: { xs: 3, md: 12 },
            }}
        >
            {/* Heading */}
            <Box
                sx={{
                    maxWidth: 900,
                    mx: 'auto',
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                <SectionHeading
                    variant="dark"
                    align="center"
                    size="lg"
                    eyebrow="THE LEAKAGE YOU CAN'T SEE"
                    title="Less overbilling. Less checking."
                    accent="Less leakage."
                    subtitle="What automated weight protection does to the charges you'd otherwise just pay."
                />
            </Box>

            {/* Stats */}
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {IMPACT_STATS.map(item => (
                    <ImpactCard
                        key={item.title}
                        value={item.value}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </Box>

            {/* Feature tiles */}
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-5" sx={{ mt: 2.5 }}>
                {FEATURE_TILES.map(item => (
                    <Box
                        key={item.title}
                        sx={{
                            p: 3,
                            bgcolor: '#18181E',
                            borderRadius: '8px',
                            border: '1px solid #44485E',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 35,
                                height: 35,
                                borderRadius: '10px',
                                border:'1px solid #7F753B',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon icon={item.icon} fontSize={18} color="#FBC942" />
                        </Box>

                        <Typography
                            sx={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#CFCDE4',
                            }}
                        >
                            {item.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '14px',
                                lineHeight: '21px',
                                color: '#ACABC1',
                            }}
                        >
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
