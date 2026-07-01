import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const CARDS = [
    {
        icon: 'material-symbols:location-on-outline',
        title: 'Serviceability-first',
        description:
            "Every decision starts with who can actually deliver to the pincode — COD, fragile, oversized — so you never allocate to a courier that can't service the destination.",
    },
    {
        icon: 'material-symbols:sell-outline',
        title: 'Rate intelligence',
        description:
            'Pre-negotiated rates across all couriers, compared per weight slab and zone, so you always ship on the cheapest option that still clears your quality bar.',
    },
    {
        icon: 'material-symbols:keyboard-return',
        title: 'RTO-aware scoring',
        description:
            'The engine weighs return-to-origin risk by lane, courier and payment mode — because the cheapest courier is worthless if the order comes back.',
    },
]

export default function DecisionEngineSection() {
    return (
        <Box sx={{ py: { xs: '60px', md: '100px' }, bgcolor: '#000', overflow: 'hidden' }}>
            <Box
                className="landing-container"
                sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
            >
                {/* Heading */}
                <SectionHeading
                    variant="dark"
                    align="center"
                    size="lg"
                    eyebrow="Built for Indian logistics"
                    title={"Allocation built\nfor the"}
                    accent="way India ships."
                    subtitle="Every shipment is evaluated across cost, coverage, delivery performance, and return risk to automatically choose the courier that delivers the best outcome."
                />

                {/* Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                        gap: '20px',
                    }}
                >
                    {CARDS.map(card => (
                        <Box
                            key={card.title}
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                pt: '20px',
                                pb: '28px',
                                px: '20px',
                                bgcolor: '#18181E',
                                borderRadius: '12px',
                                outline: '1px solid #3F3A1F',
                                outlineOffset: '-1px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '28px',
                            }}
                        >
                            {/* icon badge */}
                            <Box
                                sx={{
                                    p: '10px',
                                    bgcolor: '#000',
                                    borderRadius: '10px',
                                    outline: '1px solid #212333',
                                    outlineOffset: '-1px',
                                    display: 'inline-flex',
                                    alignSelf: 'flex-start',
                                }}
                            >
                                <Icon icon={card.icon} width={20} height={20} color="#FBC942" />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography
                                    sx={{
                                        fontFamily: display,
                                        fontSize: '22px',
                                        fontWeight: 500,
                                        lineHeight: 1.2,
                                        color: '#FFF',
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: body,
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        lineHeight: '21px',
                                        color: '#ACABC1',
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
