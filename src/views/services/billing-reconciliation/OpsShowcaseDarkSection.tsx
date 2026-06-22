'use client'

import { Box } from '@mui/material'
import { SectionHead, TrackingCaption } from './_shared'
import ImageContainer from '@/components/common/ImageContainer'

export default function OpsShowcaseDarkSection() {
  return (
    <Box sx={{ bgcolor: '#000000' }} className="py-24">
      <Box className="landing-container">
        <SectionHead
          variant="dark"
          eyebrow="Why teams switch"
          title="Built for ops teams that"
          accent="ship at volume."
          subtitle="From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data."
        />

        {/* Two offset showcase cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 10 } }}>
          {/* row 1 — caption left, card right */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.8fr 1.2fr' }, gap: { xs: 3, md: 6 }, alignItems: 'center' }}>
            <Box sx={{ maxWidth: 360 }}>
              <TrackingCaption variant="dark" />
            </Box>
            <ImageContainer
              src="/images/services/carrier-comparison-large.png"
              alt="Carrier comparison"
              width={472}
              height={368}
              maxWidth={520}
              rounded={12}
              sx={{ boxShadow: '0 24px 48px rgba(0,0,0,0.4)', borderRadius: '12px', overflow: 'hidden' }}
            />
          </Box>

          {/* row 2 — card left, caption right */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: { xs: 3, md: 6 }, alignItems: 'center' }}>
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <ImageContainer
                src="/images/services/carrier-comparison-1.png"
                alt="Carrier comparison"
                width={469}
                height={388}
                maxWidth={520}
                rounded={12}
                sx={{ boxShadow: '0 24px 48px rgba(0,0,0,0.4)', borderRadius: '12px', overflow: 'hidden' }}
              />
            </Box>
            <Box sx={{ order: { xs: 1, md: 2 }, maxWidth: 360 }}>
              <TrackingCaption variant="dark" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
