import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Typography } from '@mui/material'
import RecoveryAnalyticsSection from './RecoveryAnalyticsSection'

interface CarrierRow {
    name: string
    value: number
}

const CARRIER_ROWS: CarrierRow[] = [
    { name: 'Delhivery', value: 60 },
    { name: 'DTDC', value: 34 },
    { name: 'BlueDart', value: 30 },
]

const CARDS = [
    {
        title: 'Recovery performance by courier',
        description:
            'The failure is captured in real time, reason normalised, and queued for recovery automatically.',
        metric: 'Recovery Rate',
    },
    {
        title: 'Revenue impact',
        description:
            'The buyer picks an option in one tap; the preference and any address fix are validated instantly.',
        metric: 'Volume Share',
    },
    {
        title: 'Recovery rate trend',
        description:
            'Growve pushes the new slot to the courier, tracks it to the door, and closes the loop — RTO avoided.',
        metric: 'Volume Share',
    },
]

function CarrierComparisonMock({ metric }: { metric: string }) {
    return (
        <Box
            sx={{
                bgcolor: '#FFF',
                border: '1px solid #EAEAEC',
                borderRadius: '12px',
                p: 2,
                // fade the mock into the card
                maskImage: 'linear-gradient(180deg, #000 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(180deg, #000 55%, transparent 100%)',
            }}
        >
            <Typography
                sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#000',
                    mb: 1.5,
                }}
            >
                Carrier Comparison
            </Typography>

            {/* Table header */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pb: 1,
                    borderBottom: '1px solid #F0F0F2',
                }}
            >
                <Typography sx={{ fontSize: 11, color: '#9A98A4' }}>Carrier</Typography>
                <Typography sx={{ fontSize: 11, color: '#9A98A4' }}>{metric}</Typography>
            </Box>

            {/* Rows */}
            {CARRIER_ROWS.map(row => (
                <Box
                    key={row.name}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 1.25,
                        borderBottom: '1px solid #F5F5F6',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            sx={{
                                width: 18,
                                height: 18,
                                borderRadius: '5px',
                                bgcolor: '#1F1F1F',
                                color: '#FFF',
                                fontSize: 10,
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {row.name[0]}
                        </Box>
                        <Typography sx={{ fontSize: 12, color: '#1F1F1F' }}>{row.name}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            sx={{
                                width: 56,
                                height: 6,
                                borderRadius: '999px',
                                bgcolor: '#F0F0F2',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    width: `${row.value}%`,
                                    height: '100%',
                                    borderRadius: '999px',
                                    bgcolor: '#FBC942',
                                }}
                            />
                        </Box>
                        <Typography sx={{ fontSize: 12, color: '#6D6B77', width: 26, textAlign: 'right' }}>
                            {row.value}%
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default function EndToEndRecoverySection() {
    return (
        <Box sx={{ py: { xs: 10, md: '100px' }, bgcolor: '#FFF' }}>
            <Box className="landing-container">
                <SectionHeading
                    eyebrow="END TO END"
                    title="From first failed attempt"
                    accent="to successful delivery."
                    subtitle="Every recovery step is automated and connected. Orders move seamlessly from NDR detection to customer confirmation, re-attempt scheduling, and final delivery."
                    variant="light"
                    align="center"
                    size="lg"
                />

                <Box
                    sx={{
                        mt: 6,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: '20px',
                    }}
                >
                    {CARDS.map(card => (
                        <Box
                            key={card.title}
                            sx={{
                                borderRadius: '16px',
                                border: '1px solid #EAEAEC',
                                bgcolor: '#F5F5F6',
                                p: 2.5,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <CarrierComparisonMock metric={card.metric} />

                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-dai-banna)',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    lineHeight: '28px',
                                    color: '#000',
                                    mt: 3,
                                    mb: 1.5,
                                }}
                            >
                                {card.title}
                            </Typography>

                            <Typography sx={{ fontSize: 14, lineHeight: '22px', color: '#6D6B77' }}>
                                {card.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <RecoveryAnalyticsSection />
        </Box>
    )
}
