'use client'

import { Box } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'

export default function LiveTrackingMapSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 580,
        bgcolor: '#000',
        overflow: 'hidden',

        backgroundImage: 'url(/images/services/rise-up.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 90%',
        backgroundRepeat: 'no-repeat',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',

        px: {
          xs: 3,
          md: '194px',
        },

        py: '100px',
        gap: 6,
      }}
    >

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: {
            xs: '100%',
            md: '1246px',
          },
          height: 600,
          background:
            'linear-gradient(270deg, rgba(0,0,0,0) 0%, #000 100%)',
        }}
      />


      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: {
            xs: '100%',
            md: 465,
          },
        }}
      >
        <SectionHeading
          eyebrow="Tracking Without Blind Spots"
          title="Know where every shipment is."
          accent="The moment it moves."
          subtitle="Growve continuously monitors shipment movement across carriers. Get live status updates, delivery milestones, and exception alerts from pickup to doorstep delivery."
          variant="dark"
          size="md"
          align="left"
        />
      </Box>

    </Box>
  )
}