import FeatureSplitSection, { SplitFeature } from './FeatureSplitSection'

const FEATURES: SplitFeature[] = [
  {
    icon: 'mdi:whatsapp',
    role: 'scroll',
    title: 'One clean timeline across every courier',
    description:
      "Growve translates each courier's raw scan codes into a single normalised status — so a cryptic \"EvtFlag 7\" reads as \"Out for delivery\" on every shipment, every partner.",
    images: '/images/shipment_tracking/shipment_frame.svg',
    direction: 'left',
  },
  {
    icon: 'mdi:account-arrow-right-outline',
    role: 'static',
    title: 'Route exceptions to the right team',
    description:
      'Stuck or delayed shipments are assigned automatically, so the right person is already on it.',
    image:'/images/shipment_tracking/shipment_tracking.svg',
  },
]

export default function KeepInformedSection() {
  return (
    <FeatureSplitSection
      eyebrow="Built-in intelligence"
      title="Tracking that"
      accent="understands shipping."
      features={FEATURES}
      bgcolor="#FFF"
    />
  )
}
