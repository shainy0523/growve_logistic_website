import FeatureSplitSection from './FeatureSplitSection'

const FEATURES: SplitFeature[] = [
  {
    icon: 'mdi:whatsapp',
    role: 'scroll',
    title: 'Keep customers updated automatically',
    description:
      'Every milestone is pushed to the customer on WhatsApp and SMS — no manual messages, fewer support tickets.',
    images: ['/images/card1.png', '/images/card2.png', '/images/card3.png'],
    direction: 'left',
  },
  {
    icon: 'mdi:account-arrow-right-outline',
    role: 'static',
    title: 'Route exceptions to the right team',
    description:
      'Stuck or delayed shipments are assigned automatically, so the right person is already on it.',
    image:'/images/services/carrier-comparison-large.png',
  },
]

export default function OneViewSection() {
  return (
    <FeatureSplitSection
      eyebrow="One View"
      title="Every shipment and every status,"
      accent="in one place."
      features={FEATURES}
      reverse
      bgcolor="#fff"
    />
  )
}
