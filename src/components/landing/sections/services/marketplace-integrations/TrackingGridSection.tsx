'use client'

import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { SectionHead } from './_shared'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const CARDS = Array.from({ length: 6 })

export default function TrackingGridSection() {
  return (
    <Box sx={{ bgcolor: '#F5F5F6' }} className="py-24">
      <Box className="landing-container">
        <SectionHead
          eyebrow="Why teams switch"
          title="Built for ops teams that"
          accent={"\nship at volume."}
          subtitle="From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {CARDS.map((_, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: '14px',
                bgcolor: '#FFFFFF',
                outline: '1px solid #EAEAEC',
                outlineOffset: '-1px',
                p: 3,
              }}
            >
              <Box sx={{ width: 40, height: 40, borderRadius: '10px', bgcolor: '#FEF2D2', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Icon icon="mdi:map-marker-path" fontSize={22} color="#1F1F1F" />
              </Box>
              <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 20, color: '#000', mb: 1 }}>
                Real-Time Shipment Tracking
              </Typography>
              <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: '#6D6B77' }}>
                Track every shipment milestone from pickup to final delivery through a unified tracking experience.
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
