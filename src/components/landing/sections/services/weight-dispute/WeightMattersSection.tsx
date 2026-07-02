'use client'

import { Box } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import LazyBackgroundImage from '@/components/common/LazyBackgroundImage'

export default function WeightMattersSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 'auto', md: 580 },
        py: { xs: '60px', md: '100px' },
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {/* lazy-loaded background image */}
      <LazyBackgroundImage
        src="/images/weight_dispute/weight_dispute_banner.png"
        objectFit="fill"
      />

      {/* left-to-transparent gradient for text legibility */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: { xs: '100%', md: 745 },
          background:
            'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 50%)',
          pointerEvents: 'none',
        }}
      />

      <Box className="landing-container" sx={{ position: 'relative' }}>
        <Box sx={{ width: '100%', maxWidth: 465 }}>
          <SectionHeading
            variant="dark"
            align="left"
            size="md"
            eyebrow="Revenue recovery automated"
            title={'Every overcharge leaves a trail. Growve finds it automatically.'}
            subtitle="Capture actual shipment weight at source, compare it against courier billing, and flag discrepancies before they eat into your margins. Every mismatch is detected, documented, and ready for dispute."
          />
        </Box>
      </Box>
    </Box>
  )
}
