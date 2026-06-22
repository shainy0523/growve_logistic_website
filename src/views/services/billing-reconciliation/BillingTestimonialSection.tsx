'use client'

import { Box, Typography } from '@mui/material'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

export default function BillingTestimonialSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #0B0B0F 0%, #1A1A1E 60%, #2A2620 100%)',
      }}
      className="py-24"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,201,66,0.18) 0%, rgba(251,201,66,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box className="landing-container" sx={{ position: 'relative' }}>
        <Box sx={{ maxWidth: 760 }}>
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', mb: 2.5 }}>
            Eyebrow
          </Typography>
          <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 24, md: 34 }, lineHeight: 1.35, color: '#FFFFFF' }}>
            Automatically contact customers, collect delivery preferences, and schedule reattempts before orders
            turn into RTOs.
          </Typography>
          <Typography sx={{ mt: 3, fontFamily: body, fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
            1 line description
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
