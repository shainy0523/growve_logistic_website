import FeatureSplitSection, { SplitFeature } from './FeatureSplitSection'

const FEATURES: SplitFeature[] = [
  {
    icon: 'mdi:whatsapp',
    role: 'scroll',
    title: 'Always know where your shipments are',
    description:
      "Complete visibility from dispatch to delivery. Know where every shipment is, what stage it's in, and when it's expected to arrive. Get instant updates on delays, delivery exceptions, and critical events across all courier partners.",
    images: ['/images/card1.png', '/images/card2.png', '/images/card3.png'],
    direction: 'left',
  },
  {
    icon: 'mdi:account-arrow-right-outline',
    role: 'static',
    title: 'Tracking events, piped into your stack',
    description:
      'Every status change fires a webhook into your CRM, helpdesk and messaging tools through one tracking API — no polling, no courier-by-courier integrations to maintain.',
    image: '/images/services/carrier-comparison-large.png',
  },
]

export default function OneViewSection() {
  return (
    <FeatureSplitSection
      eyebrow="Closed loop"
      title={"Every delivery,\nproven and "}
      accent="plugged in."
      features={FEATURES}
      reverse
      bgcolor="#fff"
    />
  )
}
