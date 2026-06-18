import { Box } from "@mui/material"
import CourierRankingCard from "./CourierRankingCard"
import ServiceHero from "./ServiceHero"
import ManualRoutingSection from "./ManualRoutingSection"
import DecisionEngineSection from "./DecisionEngineSection"
import DecisionIntelligence from "./Decisionintelligence"


const SmartCourierAllocationView = () => {
  return (
    <>
      {/* the smart allocation hero section */}
      <Box sx={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 80%)',
      }} className='pt-15! pb-15'>
        <Box className="landing-container pt-10! pb-5">
          <Box className='grid grid-cols-2 md:gir-cols-1 gap-10'>
            <ServiceHero
              badge='Smart Courier Allocation'
              title='Pick the right courier for'
              accent='every single order.'
              description='Growve scores every available courier on cost, performance, serviceability, transit time, and RTO risk — then routes each shipment to the one most likely to deliver it. Automatically, in milliseconds.'
            />
            <CourierRankingCard />
          </Box>
        </Box>
      </Box>

      <Box>
        <ManualRoutingSection/>
      </Box>
      <Box>
        <DecisionEngineSection/>
      </Box>
      <Box>
        <DecisionIntelligence/>
      </Box>
    </>
  )
}

export default SmartCourierAllocationView
