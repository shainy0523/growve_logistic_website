import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const STEPS = [
    {
        icon: 'material-symbols:scale-outline',
        title: 'Capture weight & dimensions',
        description: 'At packing, from the Weight Scanner or your scale.',
    },
    {
        icon: 'material-symbols:lock-outline',
        title: 'Lock the charged weight',
        description: 'Every courier weight reading is recorded against the order.',
    },
    {
        icon: 'material-symbols:compare-arrows-rounded',
        title: 'Detect discrepancies',
        description: 'Declared vs charged compared on every shipment.',
    },
    {
        icon: 'material-symbols:gavel-rounded',
        title: 'File with evidence',
        description: 'Scan, photo and dims auto-attached to the dispute.',
    },
]

export default function EndToEndSection() {
    return (
        <Box
            sx={{
                py: '100px',
                bgcolor: '#FFF',
            }}
        >
            <Box className="landing-container">
                <SectionHeading
                    eyebrow="END TO END"
                    title="From scan to settled —"
                    accent="without manual checks."
                    subtitle="Growve captures the real weight once, then handles detection, evidence and the dispute on its own."
                    variant="light"
                    align="center"
                    size="lg"
                />

                <Box
                    sx={{
                        mt: 6,
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2,1fr)',
                            md: 'repeat(4,1fr)',
                        },
                        gap: '20px',
                    }}
                >
                    {STEPS.map((step, index) => (
                        <Box
                            key={step.title}
                            sx={{
                                position: 'relative',
                                borderRadius: '15px',
                                backgroundColor: '#F5F5F6',
                                border: '1px solid #EAEAEC',
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                minHeight: 220,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: '12px',
                                    bgcolor: '#FEF6E1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon icon={step.icon} fontSize={24} color="#1F1F1F" />
                            </Box>

                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-dai-banna)',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    lineHeight: '28px',
                                    color: '#000',
                                    mt: 'auto',
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

                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 24,
                                    fontFamily: 'var(--font-dai-banna)',
                                    fontSize: '32px',
                                    fontWeight: 500,
                                    color: '#E1E1E4',
                                    lineHeight: 1,
                                }}
                            >
                                {`0${index + 1}`}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
