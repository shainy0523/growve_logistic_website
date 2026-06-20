import { Box, Typography } from '@mui/material'

export default function WeightScannerSection() {
    return (
        <Box sx={{ bgcolor: '#FFF', py: { xs: '40px', md: '60px' } }}>
            <Box
                className="landing-container"
                sx={{
                    position: 'relative',
                    minHeight: { xs: 'auto', md: 409 },
                    p: { xs: 2, md: 2.5 },
                    borderRadius: '12px',
                    bgcolor: '#F5F5F6',
                    border: '1px solid #EAEAEC',
                    outlineOffset: '-1px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 3, md: 0 },
                    justifyContent: 'center',
                }}
            >
                {/* Left copy */}
                <Box sx={{ maxWidth: { xs: '100%', md: 338 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontWeight: 600,
                            lineHeight: '15.6px',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: '#8D8A94',
                        }}
                    >
                        At the source
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-dai-banna)',
                            fontSize: '24px',
                            fontWeight: 500,
                            color: '#000',
                        }}
                    >
                        Introducing Weight Scanner.
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#6D6B77' }}>
                        Capture verified weight and dimensions at packing in one tap. That reading becomes the source
                        of truth every dispute is built on.
                    </Typography>
                </Box>

                {/* Comparison image — stacks below on mobile, overflows right on desktop */}
                <Box
                    component="img"
                    src="/images/weight_dispute/carrier_comparison.svg"
                    alt="Carrier Comparison"
                    sx={{
                        position: { xs: 'static', md: 'absolute' },
                        left: { md: 583 },
                        top: { md: -36 },
                        width: { xs: '100%', md: 600 },
                        maxWidth: 'none',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '12px',
                    }}
                />
            </Box>
        </Box>
    )
}
