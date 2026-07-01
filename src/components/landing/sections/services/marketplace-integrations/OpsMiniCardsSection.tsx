'use client'

import { Box } from '@mui/material'
import { SectionHead, TrackingCaption } from './_shared'
import ImageContainer from '@/components/common/ImageContainer'

const IMAGES = [
  '/images/services/carrier-comparison-1.png',
  '/images/services/carrier-comparison-2.png',
  '/images/services/carrier-comparison-3.png',
]

export default function OpsMiniCardsSection() {
  return (
    <Box sx={{ bgcolor: '#FFFFFF' }} className="py-20">
      <Box className="landing-container">
        <SectionHead
          eyebrow="Why teams switch"
          title="Built for ops teams that"
          accent={"\nship at volume."}
          subtitle="From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {IMAGES.map((src) => (
            <Box key={src} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <ImageContainer
                src={src}
                alt="Carrier comparison"
                width={469}
                height={388}
                rounded={12}
                sx={{ border: '1px solid #EAEAEC', borderRadius: '12px', overflow: 'hidden' }}
              />
              <TrackingCaption />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
