import MarketplaceHero from '@/components/landing/sections/services/marketplace-integrations/MarketplaceHero'
import GrowveAdvantageSection from '@/components/landing/sections/services/marketplace-integrations/GrowveAdvantageSection'
import OpsVolumeDarkSection from '@/components/landing/sections/services/marketplace-integrations/OpsVolumeDarkSection'
import OpsMiniCardsSection from '@/components/landing/sections/services/marketplace-integrations/OpsMiniCardsSection'
import MarketplaceTestimonialSection from '@/components/landing/sections/services/marketplace-integrations/MarketplaceTestimonialSection'
import CompareCourierSection from '@/components/landing/sections/services/marketplace-integrations/CompareCourierSection'
import TrackingGridSection from '@/components/landing/sections/services/marketplace-integrations/TrackingGridSection'
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
