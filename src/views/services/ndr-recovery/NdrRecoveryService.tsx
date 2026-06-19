import { Box } from '@mui/material'
import React from 'react'
import ServiceHero from '../service-allocation/ServiceHero'
import NDRImpactSection from './NDRImpactSection'
import AIRecoverySection from './AIRecoverySection'
import NdrOnePlatformSection from './NdrOnePlatformSection'
import Image from 'next/image'
import RecoverSection from './RecoverSection'

const NdrRecoveryAutomationView = () => {
    return (
        <>
            {/* <Box sx={{
                backgroundColor: '#F5F5F6',
            }} className='pt-15! pb-15'>
                <Box className="landing-container pt-10! pb-5">
                    <Box className='grid grid-cols-2 md:gir-cols-1 gap-15 h-150'>
                        <ServiceHero
                            badge='NDR Recovery Automation'
                            title='Recover failed deliveries before'
                            accent='they become returns.'
                            description='Automatically detect NDR orders, trigger customer outreach, collect delivery preferences, and re-attempt shipments before they turn into RTOs.'
                        />
                        <Box
                            sx={{
                                width: '100%',
                                minWidth:1024,
                                maxWidth: '747px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/images/Ndr_hero.svg"
                                alt="NDR Dashboard"
                                width={747}
                                height={0}
                                priority
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box> */}

            <Box
                sx={{
                    backgroundColor: '#F5F5F6',
                    py: '100px',
                    overflow: 'hidden',
                }}
            >
                <Box
                    className="landing-container"
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '48px',
                    }}
                >
                    {/* LEFT */}
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '502px',
                            flexShrink: 0,
                        }}
                    >
                        <ServiceHero
                            badge="NDR Recovery Automation"
                            title="Recover failed deliveries before"
                            accent="they become returns."
                            description="Automatically detect NDR orders, trigger customer outreach, collect delivery preferences, and re-attempt shipments before they turn into RTOs."
                        />
                    </Box>

                    {/* RIGHT */}
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '900px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Image
                            src="/images/Ndr_hero.svg"
                            alt="NDR Dashboard"
                            width={747}
                            height={460}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box>
                <RecoverSection/>
            </Box>
            <Box className='bg-[#000000]'>
                <NDRImpactSection />
            </Box>
            <Box>
                <AIRecoverySection />
            </Box>
            <Box>
                <NdrOnePlatformSection />
            </Box>
        </>
    )
}

export default NdrRecoveryAutomationView
