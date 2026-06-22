import FeatureSplitSection, { SplitFeature } from './FeatureSplitSection'

const FEATURES: SplitFeature[] = [
  {
    role: 'static',
    title: 'Always know where your shipments are',
    description:
      "Complete visibility from dispatch to delivery. Know where every shipment is, what stage it's in, and when it's expected to arrive. Get instant updates on delays, delivery exceptions, and critical events across all courier partners.",
    image: '/images/shipment_tracking/shipment_visibility.svg',
  },
  {
    role: 'static',
    title: 'Tracking events, piped into your stack',
    description:
      'Every status change fires a webhook into your CRM, helpdesk and messaging tools through one tracking API — no polling, no courier-by-courier integrations to maintain.',
    image: '/images/shipment_tracking/tracking_events.svg',
  },
]

export default function ShipmentVisibilitySection() {
  return (
    <FeatureSplitSection
      eyebrow="Full visibility"
      title="Every shipment, every event,"
      accent="in real time."
      features={FEATURES}
      bgcolor="#FFF"
    />
  )
}
