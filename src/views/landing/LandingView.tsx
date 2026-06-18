import Box from '@mui/material/Box'
import HeroSection from '@/components/landing/sections/problems-section/HeroSection'
import FeatureCardsSection from '@/components/landing/sections/problems-section/FeatureCardsSection'
import AdvantageSection from '@/components/landing/sections/problems-section/AdvantageSection'
import PlatformSection from '@/components/landing/sections/problems-section/PlatformSection'
import OnePlatformSection from '@/components/landing/sections/problems-section/OnePlatformSection'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'
import LogisticsHero from '@/components/landing/sections/problems-section/Logisticshero'
import TrackingSection from '@/components/landing/sections/problems-section/TrackingSection'
import ConnectedEcosystem from '@/components/landing/sections/problems-section/SalesChannelView'

export default function LandingView() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'var(--surface-page)' }}>
      <main className='w-full'>
        <HeroSection />
        <FeatureCardsSection />
        <LogisticsHero />
        <AdvantageSection />
        <PlatformSection />
        <OnePlatformSection />
        <ConnectedEcosystem />
        <TrackingSection />
        <EverythingSection />       
      </main>
    </Box>
  )
}
