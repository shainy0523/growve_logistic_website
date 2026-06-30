import { Icon } from '@iconify/react'
import { Box, Button } from '@mui/material'
import React from 'react'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import PrimaryCta from '@/components/landing/ui/PrimaryCta'

const tags = ['Engineering', 'Operations', 'Product', 'Support', 'Design']

const CareersSection = () => {
    return (
        <Box
            sx={{
                background: 'var(--Misc-bg-white, white)',
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
                {/* LEFT — image card with badge */}
                <Box
                    sx={{
                        flex: '1 1 0',
                        height: '445px',
                        px: '20px',
                        py: '24px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        outline: '1px solid #EAEAEC',
                        outlineOffset: '-1px',
                        background:
                            'lightgray url(/images/about/about_containers.png) 50% / cover no-repeat',
                    }}
                >
                    {/* dark gradient overlay bottom for badge legibility */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(203deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.6) 100%)',
                            pointerEvents: 'none',
                        }}
                    />
                    {/* bottom-left badge */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '24px',
                            bottom: '24px',
                            py: '4px',
                            pl: '5px',
                            pr: '8px',
                            background: 'rgba(245, 245, 246, 0.20)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            boxShadow:
                                '0px 1px 2px rgba(0, 0, 0, 0.20), inset 0px 1px 0px rgba(255, 255, 255, 0.4), inset 0px -1px 0px rgba(255, 255, 255, 0.4)',
                            borderRadius: '15px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '8px',
                                height: '8px',
                                background: '#FCD468',
                                borderRadius: '9999px',
                            }}
                        />
                        <Box
                            sx={{
                                color: '#ffffff',
                                fontSize: '11px',
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                lineHeight: '14.3px',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Small team · high ownership
                        </Box>
                    </Box>
                </Box>

                {/* RIGHT — copy */}
                <Box
                    sx={{
                        flex: '1 1 0',
                        alignSelf: { md: 'stretch' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '64px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <SectionHeading
                            variant="light"
                            align="left"
                            size="lg"
                            eyebrow="Careers"
                            title="Come build the rails of"
                            accent="commerce."
                            subtitle="We're a small team, hiring deliberately across engineering, operations, product and support. If you like hard problems with real-world weight, you'll fit right in."
                        />

                        {/* role tags */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '12px',
                            }}
                        >
                            {tags.map((tag) => (
                                <Box
                                    key={tag}
                                    sx={{
                                        px: '12px',
                                        py: '8px',
                                        borderRadius: '8px',
                                        outline: '1px solid #E1E1E4',
                                        outlineOffset: '-1px',
                                        color: '#000000',
                                        fontSize: '12px',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        lineHeight: '12px',
                                    }}
                                >
                                    {tag}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* CTAs */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>

                        <PrimaryCta>
                            See the Platform
                        </PrimaryCta>
                        <Button
                            disableElevation
                            sx={{
                                px: '16px',
                                py: '10px',
                                background: '#EBEBED',
                                borderRadius: '8px',
                                color: '#000000',
                                fontSize: '14px',
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                textTransform: 'none',
                                '&:hover': { background: '#e0e0e2' },
                            }}
                        >
                            See how it works
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CareersSection
