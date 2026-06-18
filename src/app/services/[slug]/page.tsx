import { SERVICE_PAGES } from '@/components/landing/data/landing.data'
import LandingLayout from '@/layouts/LandingLayout'
import { notFound } from 'next/navigation'

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const Component =
    SERVICE_PAGES[slug as keyof typeof SERVICE_PAGES]

  if (!Component) {
    notFound()
  }

    return (
        <LandingLayout>
            <Component />
      </LandingLayout>
  )
}