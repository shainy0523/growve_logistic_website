import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React from 'react'

const points = [
    'Every major Indian courier, scored on the lanes you actually ship.',
    'Weight slabs and volumetric rules built in, courier by courier.',
    'COD treated as a first-class problem, not an afterthought.',
]

const BuiltForIndia = () => {
    return (
        <Box
            sx={{
                background: '#ffff',
                overflow: 'hidden',
                py: { xs: '60px', md: '100px' },
            }}
        >
            <Box
                className="landing-container"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'stretch', md: 'flex-start' },
                    gap: { xs: '32px', md: '50px' },
                }}
            >
                {/* LEFT — white card with image fading into the edges */}
                <Box
                    sx={{
                        flex: '1 1 0',
                        height: '445px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        outline: '1px solid #EAEAEC',
                        outlineOffset: '-2px',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* sharp image */}
                    <Box
                        component="img"
                        src="/images/about/about_truck.jpg"
                        alt="Logistics truck in motion"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px',
                        }}
                    />
                    {/* soft white frame — 20px blurred inset border */}
                    <Box
                        aria-hidden
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            boxShadow: 'inset 0 0 40px 7px #ffffff',
                        }}
                    />
                </Box>

                {/* RIGHT — copy */}
                <Box
                    sx={{
                        flex: '1 1 0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <Box
                        sx={{
                            color: '#8D8A94',
                            fontSize: '12px',
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            lineHeight: '15.6px',
                            letterSpacing: '3.6px',
                        }}
                    >
                        Built for India
                    </Box>

                    <Box
                        sx={{
                            fontSize: { xs: '32px', md: '48px' },
                            fontFamily: 'Dai Banna SIL',
                            fontWeight: 500,
                            lineHeight: 1.1,
                        }}
                    >
                        <Box component="span" sx={{ color: '#000000' }}>
                            Designed around how{' '}
                        </Box>
                        <Box
                            component="span"
                            sx={{ color: '#8D8A94' }}
                        >
                            India really ships.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            color: '#6D6B77',
                            fontSize: '14px',
                            fontFamily: 'Nunito Sans',
                            fontWeight: 400,
                            lineHeight: '20.16px',
                            pb: '8px',
                        }}
                    >
                        COD-heavy carts. Tier-2 and tier-3 pincodes. A dozen couriers, each with
                        different slabs, surcharges and success rates on every lane. Growve is built
                        for that reality — not a Western playbook bolted on top of it.
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {points.map((point) => (
                            <Box
                                key={point}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                }}
                            >
                                <Icon icon='si:double-arrow-right-fill' color='#BD8125' />
                                <Box
                                    sx={{
                                        color: '#444050',
                                        fontSize: '14px',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        lineHeight: '17.5px',
                                    }}
                                >
                                    {point}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BuiltForIndia
