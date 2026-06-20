import { Box } from '@mui/material'
import ServiceHero from '../service-allocation/ServiceHero'
import MeasureCompareSection from './MeasureCompareSection'
import TrackingHandledSection from '../shipment-tracking/TrackingHandledSection'
import ProactiveBandSection from './ProactiveBandSection'

const TRACK_METRIC_CARDS = [
  {
    title: 'Carrier scorecards, live',
    description:
      'Delivery, first-attempt, transit, RTO and cost ranked across every courier — updated continuously, never exported.',
  },
  {
    title: 'Catch problems before they cost you',
    description:
      'Automatic anomaly alerts the moment RTO, NDR or transit drift the wrong way — so you act before margin leaks.',
  },
  {
    title: 'One source of truth',
    description:
      'The same numbers for ops, finance and leadership — scheduled and shared, so no one reconciles spreadsheets.',
  },
]
import DataToolsSection from './DataToolsSection'
import OnePlatformSection from './OnePlatformSection'
import ImageContainer from '@/components/common/ImageContainer'

const PerformanceAnalyticsView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero */}
      <Box
        sx={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 100%)' }}
        className="pt-15! pb-15"
      >
        <Box className="landing-container pt-10! pb-5">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ServiceHero
              badge="Performance Analytics"
              title="One dashboard for every"
              accent="logistics decision."
              description="Delivery, NDR, RTO and cost — measured live across every courier, zone and channel. No exports, no setup, no report-building."
            />
            <ImageContainer
              src="/images/services/Table.png"
              alt="Live courier comparison — delivery rate and value score per carrier"
              width={470}
              height={440}
              priority
            />
          </Box>
        </Box>
      </Box>

      <MeasureCompareSection />
      <TrackingHandledSection
        section="features"
        features={TRACK_METRIC_CARDS}
        heading={{
          eyebrow: 'What you can track',
          title: 'Track every metric\n',
          accent: 'that moves your margin.',
          subtitle:
            'Every metric that decides whether an order delivers, returns or eats your margin — measured live across courier, zone and channel.',
        }}
      />
      <ProactiveBandSection />
      <DataToolsSection />
      <OnePlatformSection />
    </Box>
  )
}

export default PerformanceAnalyticsView
