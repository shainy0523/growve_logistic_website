'use client'

import { Box, Typography } from '@mui/material'
import ImageContainer from '@/components/common/ImageContainer'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

export default function CompareCourierSection() {
  return (
    <Box sx={{ bgcolor: '#FFFFFF' }} className="py-20">
      <Box className="landing-container">
        <Box
          sx={{
            position: 'relative',
            borderRadius: '16px',
            bgcolor: '#F5F5F6',
            outline: '1px solid #EAEAEC',
            outlineOffset: '-1px',
            p: { xs: 3, md: 6 },
            overflow: 'hidden',
          }}
        >
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8D8A94', mb: 2 }}>
            Why teams switch
          </Typography>
          <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 24, md: 30 }, lineHeight: 1.2, color: '#000', maxWidth: 420, mb: 1.5 }}>
            Compare Every Courier, Instantly
          </Typography>
          <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: '#6D6B77', maxWidth: 420, mb: 4 }}>
            Evaluate delivery rates, volume share, transit times, and performance before allocation.
          </Typography>

          <ImageContainer
            src="/images/services/carrier-comparison-large.png"
            alt="Carrier comparison"
            width={472}
            height={368}
            maxWidth={520}
            align="flex-end"
            rounded={12}
            sx={{ borderRadius: '12px', overflow: 'hidden' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
