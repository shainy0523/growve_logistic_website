'use client'

import { Box, Typography } from '@mui/material'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

export default function IntelligentSelectionBanner() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 'auto', md: 580 },
        py: { xs: '60px', md: '100px' },
        background: '#000',
        backgroundImage: 'url(/images/smart_allocation/smart_alloc_banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {/* left-to-transparent gradient for text legibility */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: { xs: '100%', md: 1246 },
          background:
            'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box className="landing-container" sx={{ position: 'relative' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: 465,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Typography
            sx={{
              color: '#9191A8',
              fontFamily: body,
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: '15.6px',
              letterSpacing: '3.6px',
            }}
          >
            Intelligent courier selection
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: '#FFF',
              fontFamily: display,
              fontSize: { xs: '32px', md: '40px' },
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            Allocation that thinks before
            <br />
            every shipment moves.
          </Typography>

          <Typography
            sx={{
              color: '#ACABC1',
              fontFamily: body,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '23.04px',
            }}
          >
            Every order is analysed against real-world courier performance, pricing, destination
            coverage, and operational risk. Growve automatically selects the courier most likely to
            deliver successfully.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
