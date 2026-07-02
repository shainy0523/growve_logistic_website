'use client'

import { Box } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import LazyBackgroundImage from '@/components/common/LazyBackgroundImage'

export default function AIRecoverySection() {
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
        src="/images/ndr/ndrbg.jpg"
        objectFit="fill"
        objectPosition="right bottom"
      />

      {/* left-to-transparent gradient for text legibility */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: { xs: '100%', md: 745 },
          background:
            'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 80%)',
          pointerEvents: 'none',
        }}
      />

      <Box className="landing-container" sx={{ position: 'relative' }}>
        <Box sx={{ width: '100%', maxWidth: 465 }}>
          <SectionHeading
            variant="dark"
            align="left"
            size="md"
            eyebrow="Recovery in the age of AI"
            title={'Your recovery engine gets\nsmarter with every NDR.'}
            subtitle="Growve continuously learns from recovery outcomes. It identifies which channels, timings, and messages work best for different NDR reasons and prioritizes actions that maximize successful deliveries."
          />
        </Box>
      </Box>
    </Box>
  )
}
