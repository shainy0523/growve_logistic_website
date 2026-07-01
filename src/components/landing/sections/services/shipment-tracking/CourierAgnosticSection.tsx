import FeatureSplitSection from './FeatureSplitSection'

const FEATURES = [
  {
    icon: 'mdi:transit-connection-variant',
    title: 'One tracking layer over every courier',
    description:
      'A single normalised view across all 25+ courier partners — so every shipment looks the same no matter who carries it.',
  },
  {
    icon: 'mdi:sync',
    title: 'Statuses normalised automatically',
    description:
      'Courier-specific scans are mapped to a consistent set of milestones your team and customers can rely on.',
  },
]

export default function CourierAgnosticSection() {
  return (
    <FeatureSplitSection
      eyebrow="Courier-Agnostic"
      title="Tracks across every courier,"
      accent="automatically."
      features={FEATURES}
      bgcolor="#FFF"
    />
  )
}
