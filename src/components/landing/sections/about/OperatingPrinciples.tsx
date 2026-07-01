import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React from 'react'

const stats = [
    {
        value: '1000+',
        title: 'Merchant conversations',
        description: 'Real operational feedback shapes every product decision.',
    },
    {
        value: '25+',
        title: 'Integrated couriers',
        description: 'Connect with leading courier partners through one platform.',
    },
    {
        value: '27k+',
        title: 'Serviceable pincodes',
        description: 'Deliver confidently across cities, towns, and remote regions.',
    },
]

const principles = [
    {
        icon: 'material-symbols:warehouse-outline',
        title: 'Built with operators',
        description:
            'Our team works closely with warehouses and logistics teams to understand how shipping actually works before building solutions.',
    },
    {
        icon: 'ic:outline-auto-awesome',
        title: 'Product before promises',
        description:
            'We focus on solving operational problems with reliable software instead of adding features for marketing.',
    },
    {
        icon: 'ic:round-insights',
        title: 'Improve every shipment',
        description:
            'Every release is driven by customer feedback, shipping data, & lessons learned from millions of logistics events.',
    },
]

const OperatingPrinciples = () => {
    return (
        <Box
            sx={{
                background: '#000000',
                overflow: 'hidden',
                py: { xs: '60px', md: '100px' },
            }}
        >
            <Box
                className="landing-container"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '48px',
                }}
            >
                {/* Heading block */}
                <Box sx={{ width: '100%' }}>
                    <SectionHeading
                        variant="dark"
                        align="center"
                        size="lg"
                        eyebrow="Our operating principles"
                        title="Built for operators,"
                        accent={"not\n presentations."}
                        subtitle="Every decision we make starts on the warehouse floor—not in a boardroom. We spend time with merchants, logistics teams, and courier partner."
                    />
                </Box>

                {/* Stats row */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                        gap: '20px',
                    }}
                >
                    {stats.map((stat) => (
                        <Box
                            key={stat.value}
                            sx={{
                                flex: '1 1 0',
                                p: '24px',
                                background: '#18181E',
                                borderRadius: '8px',
                                outline: '1px solid #44485E',
                                outlineOffset: '-1px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                            }}
                        >
                            <Box
                                sx={{
                                    color: '#ffffff',
                                    fontSize: '28px',
                                    fontFamily: 'Nunito Sans',
                                    fontWeight: 700,
                                    lineHeight: '30.8px',
                                }}
                            >
                                {stat.value}
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Box
                                    sx={{
                                        color: '#CFCDE4',
                                        fontSize: '20px',
                                        fontFamily: 'Dai Banna SIL',
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.title}
                                </Box>
                                <Box
                                    sx={{
                                        color: '#ACABC1',
                                        fontSize: '14px',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 400,
                                        lineHeight: '21px',
                                    }}
                                >
                                    {stat.description}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Principle cards */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                        gap: '20px',
                    }}
                >
                    {principles.map((principle) => (
                        <Box
                            key={principle.title}
                            sx={{
                                flex: '1 1 0',
                                pt: '20px',
                                pb: '28px',
                                px: '20px',
                                background: '#18181E',
                                borderRadius: '12px',
                                outline: '1px solid #3F3A1F',
                                outlineOffset: '-1px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '28px',
                            }}
                        >
                            <Box
                                sx={{
                                    p: '10px',
                                    background: '#000000',
                                    borderRadius: '10px',
                                    outline: '1px solid #212333',
                                    outlineOffset: '-1px',
                                    display: 'inline-flex',
                                    alignSelf: 'flex-start',
                                }}
                            >
                                <Icon
                                    icon={principle.icon}
                                    color="#FBC942"
                                    width={20}
                                    height={20}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Box
                                    sx={{
                                        color: '#ffffff',
                                        fontSize: '22px',
                                        fontFamily: 'Dai Banna SIL',
                                        fontWeight: 500,
                                    }}
                                >
                                    {principle.title}
                                </Box>
                                <Box
                                    sx={{
                                        color: '#ACABC1',
                                        fontSize: '14px',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 400,
                                        lineHeight: '21px',
                                    }}
                                >
                                    {principle.description}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default OperatingPrinciples
