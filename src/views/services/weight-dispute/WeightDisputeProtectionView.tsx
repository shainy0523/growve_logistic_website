import { Box } from '@mui/material'
import Image from 'next/image'
import ServiceHero from '../service-allocation/ServiceHero'
import EndToEndSection from './EndToEndSection'
import LeakageSection from './LeakageSection'
import WhatsInsideSection from './WhatsInsideSection'
import WeightScannerSection from './WeightScannerSection'
import WeightMattersSection from './WeightMattersSection'
import TrackingSection from './WeightTracking'
import WeightOnePlatformSection from './WeightOnePlatformSection'

const WeightDisputeProtectionView = () => {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 100%)',
                    py: { xs: '40px', md: '100px' },
                    overflow: 'hidden',
                }}
            >
                <Box
                    className="landing-container"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        justifyContent: 'space-between',
                        gap: { xs: '32px', md: '48px' },
                    }}
                >
                    {/* LEFT */}
                    <Box
                        sx={{
                            maxWidth: '502px',
                            flex: { xs: '1 1 100%', md: '0 0 auto' },
                        }}
                    >
                        <ServiceHero
                            badge="Weight Dispute Protection"
                            title="Stop paying for weight"
                            accent="you didn't ship."
                            description="Capture true weight at source, catch every courier overcharge automatically, and auto-file disputes before the window closes — so inflated weight slabs stop quietly draining your margin."
                        />
                    </Box>

                    {/* RIGHT */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', md: '900px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: { xs: '1 1 100%', md: '1 1 auto' },
                            minWidth: 0,
                        }}
                    >
                        <Image
                            src="/images/weight_dispute/weight_dispute_hero.svg"
                            alt="Weight dispute dashboard"
                            width={500}
                            height={460}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '12px',
                                boxShadow: '0px 10px 20px rgba(0,0,0,0.12)',
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box>
                <EndToEndSection />
            </Box>
            <Box className="bg-[#000000]">
                <LeakageSection />
            </Box>
            <Box>
                <WhatsInsideSection />
            </Box>
            <Box>
                <WeightMattersSection />
            </Box>
            <Box>
                <TrackingSection/>
            </Box>
            <Box>
                <WeightOnePlatformSection />
            </Box>
        </>
    )
}

export default WeightDisputeProtectionView;
