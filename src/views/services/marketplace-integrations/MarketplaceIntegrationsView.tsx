import MarketplaceHero from './MarketplaceHero'
import GrowveAdvantageSection from './GrowveAdvantageSection'
import OpsVolumeDarkSection from './OpsVolumeDarkSection'
import OpsMiniCardsSection from './OpsMiniCardsSection'
import MarketplaceTestimonialSection from './MarketplaceTestimonialSection'
import CompareCourierSection from './CompareCourierSection'
import TrackingGridSection from './TrackingGridSection'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'

const MarketplaceIntegrationsView = () => {
  return (
    <>
      <MarketplaceHero />
      <GrowveAdvantageSection />
      <OpsVolumeDarkSection />
      <OpsMiniCardsSection />
      <MarketplaceTestimonialSection />
      <CompareCourierSection />
      <TrackingGridSection />

      {/* "Marketplace Integrations is one part of the loop." — reuses the shared platform grid */}
      <EverythingSection excludeTitles={["Marketplace Integrations", "NDR Recovery Automation"]} showCenterCard={false} />
    </>
  )
}

export default MarketplaceIntegrationsView
