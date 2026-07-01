import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import ImpactCard from '@/components/landing/sections/services/ndr-recovery/ImpactCard'

const IMPACT_STATS = [
    {
        value: '92%',
        title: 'Disputes Recovered',
        description: 'Successful recoveries backed by scan data, shipment records, and courier evidence.',
    },
    {
        value: '₹1.4L',
        title: 'Revenue Recovered',
        description: 'Average monthly savings reclaimed from billing discrepancies and weight disputes.',
    },
    {
        value: '3×',
        title: 'Faster Resolution',
        description: 'Disputes are raised automatically while recovery opportunities still exist.',
    },
]

const FEATURE_TILES = [
    {
        icon: 'mdi:access-time',
        title: 'Window guard',
        description: "Never miss a claim deadline. Growve monitors courier dispute windows automatically.",
    },
    {
        icon: 'material-symbols:scale-outline',
        title: 'Courier-aware validation',
        description: "Weight checks adapt to each courier's slab structure and billing logic.",
    },
    {
        icon: 'material-symbols:fact-check-outline-rounded',
        title: 'Auto evidence',
        description: 'Scan, dimension, and billing data attached automatically.',
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
                    eyebrow="Less overbilling. Less checking. Less leakage."
                    title="Catch overcharges before they"
                    accent="become losses."
                    subtitle="Growve compares declared, scanned, and billed weights automatically — identifying discrepancies and filing disputes before recovery windows close."
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
                                border: '1px solid #212333',
                                bgcolor:'#000000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon icon={item.icon} fontSize={18} color="#FBC942" />
                        </Box>

                        <Typography
                            sx={{
                                fontFamily: 'var(--font-dai-banna)',
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
