import { Box, Typography } from '@mui/material'
import DecisionSignalCard from './DecisionSignalCard.tsx'

const SIGNALS = [
    {
        title: 'Cost Efficiency',
        description: 'Find the lowest cost courier without compromising delivery.',
        badge: 'Cost',
        icon: 'mdi:currency-inr',
    },
    {
        title: 'Delivery Performance',
        description: 'Historical success rates by courier and lane.',
        badge: 'Success',
        icon: 'mdi:truck-check',
    },
    {
        title: 'Transit Time',
        description: 'Choose faster couriers where speed matters.',
        badge: 'Speed',
        icon: 'mdi:clock-outline',
    },
    {
        title: 'Serviceability',
        description: 'Validate pin-code coverage before routing.',
        badge: 'Coverage',
        icon: 'mdi:map-marker-check',
    },
    {
        title: 'RTO Risk',
        description: 'Reduce failed deliveries and return costs.',
        badge: 'Risk',
        icon: 'mdi:shield-alert-outline',
    },
    {
        title: 'Weight Accuracy',
        description: 'Avoid courier disputes and overcharges.',
        badge: 'Protection',
        icon: 'mdi:scale-balance',
    },
]

export default function DecisionEngineSection() {
    return (
        <Box
            sx={{
                py: { xs: 10, md: '100px' },
                bgcolor: '#18181E',
            }}
        >
            <Box className="landing-container">

                {/* Heading */}

                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: 900,
                        mx: 'auto',
                        mb: 10,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '3.6px',
                            textTransform: 'uppercase',
                            color: '#9191A8',
                            mb: 2.5,
                        }}
                    >
                        The Decision Engine
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'var(--font-dai-banna),serif',
                            fontSize: {
                                xs: '34px',
                                md: '48px',
                            },
                            lineHeight: 1.1,
                            color: '#FFF',
                            mb: 3,
                        }}
                    >
                        Six signals, One score.
                        <br />
                        The best Courier, every time.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '16px',
                            lineHeight: '23px',
                            color: '#ACABC1',
                        }}
                    >
                        Connect your sales channels, automate logistics workflows,
                        and manage operations from a single platform designed for
                        growing businesses.
                    </Typography>
                </Box>

                {/* Content */}

                <Box className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT */}

                    <Box className="flex flex-col gap-5">
                        {SIGNALS.map(item => (
                            <DecisionSignalCard
                                key={item.title}
                                {...item}
                            />
                        ))}
                    </Box>

                    {/* RIGHT */}

                    <Box
                        sx={{
                            background:
                                'linear-gradient(180deg,#FDEAB7 0%,#FFFBF0 100%)',
                            borderRadius: '14px',
                            px: { xs: 3, md: 3.5 },
                            py: { xs: 5, md: 6 },
                            minHeight: '300px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    letterSpacing: '3.6px',
                                    textTransform: 'uppercase',
                                    color: '#8D8A94',
                                    mb: 3,
                                }}
                            >
                                The Growve Advantage
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-dai-banna), sans-serif',
                                    fontSize: {
                                        xs: '34px',
                                        md: '48px',
                                    },
                                    color: '#000000',
                                    lineHeight: 1.1,
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                Logistics shouldn&apos;t
                                <br />
                                require five{' '}
                                <Box
                                    component="span"
                                    sx={{ color: '#8D8A94' }}
                                >
                                    different tools.
                                </Box>
                            </Typography>

                            <Typography
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    lineHeight: '23px',
                                    color: '#6D6B77',
                                    maxWidth: 650,
                                    mx: 'auto',
                                }}
                            >
                                Built to help growing brands streamline execution,
                                improve<br />
                                delivery outcomes,<br /> and stay focused on what
                                matters most.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}