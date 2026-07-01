import { Box } from "@mui/material"
import ServiceHero from "../../../components/landing/sections/services/service-allocation/ServiceHero"
import DecisionEngineSection from "../../../components/landing/sections/services/service-allocation/DecisionEngineSection"
import DecisionIntelligence from "../../../components/landing/sections/services/service-allocation/Decisionintelligence"
import HowItWorksSection from "../../../components/landing/sections/services/service-allocation/HowItWorksSection"
import IntelligentSelectionBanner from "../../../components/landing/sections/services/service-allocation/IntelligentSelectionBanner"
import SmartSavingsSection from "../../../components/landing/sections/services/service-allocation/SmartSavingsSection"
import EverythingSection from "@/components/landing/sections/problems-section/EverythingSection"


const SmartCourierAllocationView = () => {
  return (
    <>
      {/* the smart allocation hero section */}
      <Box sx={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 80%)',
      }} className='pt-15! pb-15'>
        <Box className="landing-container pt-10! pb-5">
          <Box className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
            <ServiceHero
              badge='Smart Courier Allocation'
              title='Pick the right courier for'
              accent='every single order.'
              description='Growve scores every available courier on cost, performance, serviceability, transit time, and RTO risk — then routes each shipment to the one most likely to deliver it. Automatically, in milliseconds.'
            />
            <Box
              component='img'
              src='/images/smart_allocation/smart_alloc_hero.svg'
              alt='Smart courier allocation dashboard'
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <DecisionEngineSection />
      </Box>
      <Box>
        <DecisionIntelligence />
      </Box>
      <Box>
        <HowItWorksSection />
      </Box>
      <Box>
        <IntelligentSelectionBanner />
      </Box>
      <Box>
        <SmartSavingsSection />
      </Box>
      <EverythingSection
        eyebrow='One platform'
        title={'Smart Courier\nAllocation is one part'}
        accent='of the loop.'
        subtitle={'Allocation, tracking, returns and analytics — every stage of the order\njourney, on one platform.'}
        excludeTitles={["Returns & RTO Control", "Smart Courier Allocation"]} showCenterCard={false} />
    </>
  )
}

export default SmartCourierAllocationView
