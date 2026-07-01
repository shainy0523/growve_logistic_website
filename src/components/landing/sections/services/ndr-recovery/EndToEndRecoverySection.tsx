import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Typography } from '@mui/material'
import RecoveryAnalyticsSection from './RecoveryAnalyticsSection'

const CARDS = [
    {
        image: '/images/ndr/recovery_1.svg',
        title: 'Fake-attempt detection',
        description:
            'When a courier logs a delivery that never happened, Growve cross-checks GPS, timing and contact history, flags it, and raises the dispute on your behalf.',
    },
    {
        image: '/images/ndr/recovery_2.svg',
        title: 'Address intelligence',
        description:
            'Incomplete or wrong addresses are validated and auto-corrected against pincode & geocode data before the re-attempt so it lands the second time.',
    },
    {
        image: '/images/ndr/recovery_3.svg',
        title: 'Self-serve rescheduling',
        description:
            "Buyers get a branded page to pick their own delivery slot or fix their address — no agent, no phone tag. It's the highest-converting recovery channel there is.",
    },
]

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
                        gap: '30px',
                    }}
                >
                    {CARDS.map(card => (
                        <Box
                            key={card.title}
                            sx={{
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* card mock visual */}
                            <Box
                                component="img"
                                src={card.image}
                                alt={card.title}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '12px',
                                }}
                            />

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

                            <Typography sx={{ fontSize: 14, lineHeight: '21px', color: '#6D6B77' }}>
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
