import { Box } from '@mui/material'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'
import RtoHero from './RtoHero'
import ReturnsIntelligenceSection from './ReturnsIntelligenceSection'
import RtoTestimonialSection from './RtoTestimonialSection'
import RtoOriginSection from './RtoOriginSection'
import RtoPredictionSection from './RtoPredictionSection'

const ReturnsRtoControlView = () => {
  return (
    <>
      <RtoHero />
      <ReturnsIntelligenceSection />
      <RtoTestimonialSection />
      <RtoOriginSection />
      <RtoPredictionSection />

      {/* "Returns & RTO Control is one part of the loop." — reuses the shared platform grid */}
      <Box>
        <EverythingSection excludeTitles={["Returns & RTO Control","NDR Recovery Automation"]} showCenterCard={false} />
      </Box>
    </>
  )
}

export default ReturnsRtoControlView
