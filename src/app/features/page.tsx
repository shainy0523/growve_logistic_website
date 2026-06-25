import { SERVICES } from '@/components/landing/data/landing.data'
import { redirect } from 'next/navigation'

export default function FeaturesPage() {
  // No standalone overview page — land on the first feature.
  redirect(`/features/${SERVICES[0].slug}`)
}
