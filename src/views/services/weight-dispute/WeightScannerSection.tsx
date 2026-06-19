import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const READINGS = [
    { label: 'Weight', value: '0.840 kg' },
    { label: 'Length', value: '24 cm' },
    { label: 'Breadth', value: '18 cm' },
    { label: 'Height', value: '10 cm' },
]

export default function WeightScannerSection() {
    return (
        <Box
            sx={{
                py: { xs: 10, md: '100px' },
                bgcolor: '#F5F5F6',
            }}
        >
            <Box
                className="landing-container"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 6, md: '64px' },
                }}
            >
                {/* LEFT — copy */}
                <Box sx={{ width: '100%', maxWidth: 480, flexShrink: 0 }}>
                    <SectionHeading
                        eyebrow="AT THE SOURCE"
                        title="Introducing Weight Scanner."
                        subtitle="Capture verified weight and dimensions at packing in one tap. That reading becomes the source of truth every dispute is built on."
                        variant="light"
                        align="left"
                        size="lg"
                    />
                </Box>

                {/* RIGHT — scanner mock */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 520,
                        bgcolor: '#FFF',
                        borderRadius: '16px',
                        border: '1px solid #EAEAEC',
                        boxShadow: '0px 24px 60px rgba(0,0,0,0.08)',
                        p: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 3,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '10px',
                                    bgcolor: '#FEF6E1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon icon="material-symbols:scale-outline" fontSize={22} color="#1F1F1F" />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#000' }}>
                                    Weight Scanner
                                </Typography>
                                <Typography sx={{ fontSize: 12, color: '#6D6B77' }}>
                                    Order #TN29A78463
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.75,
                                px: 1.25,
                                py: 0.5,
                                borderRadius: '999px',
                                bgcolor: '#E9F7EF',
                            }}
                        >
                            <Box sx={{ width: 7, height: 7, borderRadius: '999px', bgcolor: '#22A565' }} />
                            <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#22A565' }}>
                                Verified
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 1.5,
                        }}
                    >
                        {READINGS.map(reading => (
                            <Box
                                key={reading.label}
                                sx={{
                                    bgcolor: '#F5F5F6',
                                    borderRadius: '10px',
                                    p: 2,
                                }}
                            >
                                <Typography sx={{ fontSize: 12, color: '#6D6B77', mb: 0.5 }}>
                                    {reading.label}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Dai Banna SIL',
                                        fontSize: 22,
                                        fontWeight: 500,
                                        color: '#000',
                                    }}
                                >
                                    {reading.value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2,
                            py: 1.5,
                            borderRadius: '10px',
                            bgcolor: '#FEF6E1',
                        }}
                    >
                        <Icon icon="material-symbols:photo-camera-outline-rounded" fontSize={18} color="#1F1F1F" />
                        <Typography sx={{ fontSize: 13, color: '#1F1F1F', fontWeight: 500 }}>
                            Scan & photo attached as dispute evidence
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
