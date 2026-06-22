import { Box } from '@mui/material'
import ImageContainer from '@/components/common/ImageContainer'
import ServiceHero from '../service-allocation/ServiceHero'
import TrackingHandledSection from './TrackingHandledSection'
import TrackingStatsSection from './TrackingStatsSection'
import KeepInformedSection from './KeepInformedSection'
import OneViewSection from './OneViewSection'
import LiveTrackingMapSection from './LiveTrackingMapSection'
import ShipmentVisibilitySection from './ShipmentVisibilitySection'
import CourierAgnosticSection from './CourierAgnosticSection'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'

const RealTimeShipmentTrackingView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6.25 }}>
      {/* Hero */}
      <Box
        sx={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 80%)' }}
        className="pt-15! pb-15"
      >
        <Box className="landing-container pt-10! pb-5">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ServiceHero
              badge="Real-Time Shipment Tracking"
              title="Know where every order is"
              accent="— in real time."
              description="Live tracking across every courier, proactive customer updates, and instant exception alerts — so your team stops chasing statuses and your customers stop asking."
            />
            <Box className='relative inline-block w-full'>
              <Box
                component='img'
                src='/images/shipment_tracking/card_shipment.svg'
                alt='shipment tracking'
                className='relative z-10 block w-full h-auto'
              />
              <Box
                component='img'
                src='/images/shipment_tracking/basemap.svg'
                alt=''
                aria-hidden
                className='absolute bottom-0 right-0 z-10 w-1/2 h-auto max-w-[50%]'
              />
            </Box>
            {/* <ImageContainer
              src="/images/services/Table.png"
              alt="Live courier comparison — delivery rate and value score per carrier"
              width={470}
              height={440}
              priority
            /> */}
          </Box>
        </Box>
      </Box>

      <TrackingHandledSection />
      <TrackingStatsSection />
      <KeepInformedSection />
      <OneViewSection />
      {/* <ShipmentVisibilitySection /> */}
      <LiveTrackingMapSection />
      <TrackingHandledSection section='carrier' />
      {/* <CourierAgnosticSection /> */}
      <EverythingSection
        excludeTitles={['Real-Time Shipment Tracking', 'Billing & Reconciliation']}
        showCenterCard={false}
      />
    </Box>
  )
}

export default RealTimeShipmentTrackingView
