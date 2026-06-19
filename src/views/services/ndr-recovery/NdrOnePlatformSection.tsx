import { FeatureCard } from '@/components/landing/sections/problems-section/EverythingSection'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import Box from '@mui/material/Box'

const PLATFORM_FEATURES = [
  {
    title: 'Real-Time Shipment Tracking',
    description:
      'Track every shipment milestone from pickup to final delivery through a unified tracking experience.',
  },
  {
    title: 'Weight Dispute Protection',
    description:
      'Identify billing discrepancies, monitor weight changes, and prevent unnecessary courier charges.',
  },
  {
    title: 'Performance Analytics',
    description:
      'Measure courier performance, delivery rates, transit times, NDR trends, and operational efficiency.',
  },
  {
    title: 'Marketplace Integrations',
    description:
      'Connect stores and marketplaces to sync orders, inventory, tracking updates, and shipment data automatically.',
  },
  {
    title: 'Billing & Reconciliation',
    description:
      'Manage shipping costs, invoices, wallet transactions, and courier billing from one place.',
  },
  {
    title: 'NDR Recovery Automation',
    description:
      'Recover failed deliveries automatically through intelligent workflows, customer outreach, and retry recommendations.',
  },
]

export default function NdrOnePlatformSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: '100px' },
      }}
      className="landing-container"
    >
      <SectionHeading
        eyebrow="ONE PLATFORM"
        title="NDR recovery works better"
        accent="when connected to everything else."
        subtitle="Recovery is most effective when allocation, tracking, returns, billing, and analytics work together. Manage the complete shipment lifecycle from a single platform."
        // subtitleWidth={850}
      />

      <Box
        sx={{
          mt: 6,
        }}
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
        "
      >
        {PLATFORM_FEATURES.map(item => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  )
}