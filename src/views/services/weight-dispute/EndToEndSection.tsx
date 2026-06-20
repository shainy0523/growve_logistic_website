import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Typography } from '@mui/material'

const STEPS = [
    {
        title: 'Capture weight & dimensions',
        description: 'At packing, from the Weight Scanner or your scale.',
    },
    {
        title: 'Lock the charged weight',
        description: 'Every courier weight reading is recorded against the order.',
    },
    {
        title: 'Detect discrepancies',
        description: 'Declared vs charged compared on every shipment.',
    },
    {
        title: 'File with evidence',
        description: 'Scan, photo and dims auto-attached to the dispute.',
    },
]

export default function EndToEndSection() {
    return (
        <Box
            sx={{
                py: '100px',
            }}
        >
            <Box className="landing-container">
                <SectionHeading
                    eyebrow="END TO END"
                    title="From scan to settled — without"
                    accent="manual checks."
                    subtitle="Growve captures the real weight once, then handles detection, evidence and the dispute on its own."
                    variant="light"
                    align="center"
                    size="lg"
                />

                <Box
                    sx={{
                        mt: { xs: 6, md: 6 },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1.1fr' },
                        gap: { xs: 5, md: 8 },
                        alignItems: 'center',
                    }}
                >
                    {/* Steps list */}
                    <Box>
                        {STEPS.map((step) => (
                            <Box
                                key={step.title}
                                sx={{
                                    py: 2.5,
                                    borderBottom: '1px solid #EAEAEC',
                                    '&:first-of-type': { pt: 0 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'var(--font-dai-banna)',
                                        fontSize: '22px',
                                        fontWeight: 500,
                                        lineHeight: '28px',
                                        color: '#000',
                                        mb: 1,
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        color: '#6D6B77',
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Carrier comparison */}
                    <Box
                        sx={{
                            border:'1px solid #EAEAEC',
                            borderRadius: '12px',
                            bgcolor: '#F1F1F2',
                            pt: { xs: 3, md: 10 },
                            pl: { xs: 1, md: 5 },
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/weight_dispute/carrier_comparison.svg"
                            alt="Carrier Comparison"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderTopLeftRadius: '18px',
                                boxShadow: '0 20px 50px rgba(17,17,26,0.08)',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
