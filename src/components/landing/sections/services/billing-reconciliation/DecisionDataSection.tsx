'use client'

import { Box } from '@mui/material'
import { SectionHead, TrackingCaption } from './_shared'
import ImageContainer from '@/components/common/ImageContainer'

const IMAGES = [
  { src: '/images/services/carrier-comparison-large.png', w: 472, h: 368 },
  { src: '/images/services/carrier-comparison-1.png', w: 469, h: 388 },
  { src: '/images/services/carrier-comparison-2.png', w: 469, h: 388 },
  { src: '/images/services/carrier-comparison-3.png', w: 469, h: 388 },
]

export default function DecisionDataSection() {
  return (
    <Box sx={{ bgcolor: '#FFFFFF' }} className="py-20">
      <Box className="landing-container">
        <SectionHead
          eyebrow="Decision Intelligence"
          title="Every allocation."
          accent="Backed by real delivery data."
          subtitle="Growve evaluates cost, delivery performance, serviceability, transit time, and RTO risk before selecting a courier. Every decision is transparent, measurable, and optimized for success."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: { xs: 4, md: 5 } }}>
          {IMAGES.map((img) => (
            <Box key={img.src} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <ImageContainer
                src={img.src}
                alt="Carrier comparison"
                width={img.w}
                height={img.h}
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
