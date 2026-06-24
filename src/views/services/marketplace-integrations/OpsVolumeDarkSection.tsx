'use client'

import { Box, Typography } from '@mui/material'
import { SectionHead, TrackingCaption } from './_shared'
import ImageContainer from '@/components/common/ImageContainer'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const STATS = [
  {
    value: '1 in 3',
    title: 'Routed on habit',
    body: 'Orders sent to a default courier with no view of its success rate on that lane.',
  },
  {
    value: '₹120+',
    title: 'Wasted per misroute',
    body: 'A wrong courier means failed attempts, reverse freight, and avoidable RTO.',
  },
]

export default function OpsVolumeDarkSection() {
  return (
    <Box sx={{ bgcolor: '#000000' }} className="py-24">
      <Box className="landing-container">
        <SectionHead
          variant="dark"
          eyebrow="Why teams switch"
          title="Built for ops teams that"
          accent={"\nship at volume."}
          subtitle="From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
          {/* LEFT — stat cards + tracking caption */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
              {STATS.map((s) => (
                <Box
                  key={s.title}
                  sx={{
                    borderRadius: '14px',
                    bgcolor: '#18181E',
                    outline: '1px solid rgba(255,255,255,0.08)',
                    outlineOffset: '-1px',
                    p: 3,
                  }}
                >
                  <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 32, color: '#FBC942', lineHeight: 1.1, mb: 1.25 }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: '#FFFFFF', mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
                    {s.body}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ maxWidth: 420 }}>
              <TrackingCaption variant="dark" />
            </Box>
          </Box>

          {/* RIGHT — carrier comparison showcase */}
          <ImageContainer
            src="/images/services/carrier-comparison-large.png"
            alt="Carrier comparison"
            width={472}
            height={368}
            maxWidth={540}
            rounded={12}
            sx={{ boxShadow: '0 24px 48px rgba(0,0,0,0.4)', borderRadius: '12px', overflow: 'hidden' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
