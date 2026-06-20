import { FeatureCard } from '@/components/landing/sections/problems-section/EverythingSection'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import Box from '@mui/material/Box'

const PLATFORM_FEATURES = [
  {
    title: 'Smart Courier Allocation',
    description:
      'Choose the best courier for every shipment based on delivery performance, cost, serviceability, and historical success rates.',
  },
  {
    title: 'Returns & RTO Control',
    description:
      'Reduce return losses with complete visibility into return reasons, RTO trends, and recovery opportunities.',
  },
  {
    title: 'Real-Time Shipment Tracking',
    description:
      'Follow every order from pickup to doorstep with live, courier-agnostic tracking and proactive status updates.',
  },
  {
    title: 'Weight Dispute Protection',
    description:
      'Identify billing discrepancies, monitor weight changes, and prevent unnecessary courier charges.',
  },
  {
    title: 'Marketplace Integrations',
    description:
      'Connect stores and marketplaces to sync orders, inventory, tracking updates, and shipment data automatically.',
  },
  {
    title: 'NDR Recovery Automation',
    description:
      'Recover failed deliveries automatically through intelligent workflows, customer outreach, and retry recommendations.',
  },
]

export default function OnePlatformSection() {
  return (
    <Box sx={{ py: { xs: 10, md: '100px' } }} className="landing-container">
      <SectionHeading
        eyebrow="One Platform"
        title="Performance Analytics is one"
        accent="part of the loop."
        subtitle="Allocation, tracking, returns and analytics — every stage of the order journey, on one platform."
      />

      <Box sx={{ mt: 6 }} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {PLATFORM_FEATURES.map(item => (
          <FeatureCard key={item.title} title={item.title} description={item.description} />
        ))}
      </Box>
    </Box>
  )
}
