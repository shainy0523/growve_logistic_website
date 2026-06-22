'use client'

import { Box, Typography, LinearProgress } from '@mui/material'
import { Icon } from '@iconify/react'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const t = {
  black: '#000000',
  white: '#FFFFFF',
  secondary: '#6D6B77',
  subtitle: '#8D8A94',
  secDark: '#737682',
  yellow: '#FBC942',
  success: '#28C76F',
}

function ActiveShipmentsCard() {
  return (
    <Box sx={{ width: 280, borderRadius: '12px', bgcolor: t.white, p: 2.5, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black }}>Active Shipments</Typography>
        <Icon icon="mdi:dots-horizontal" fontSize={18} color={t.secDark} />
      </Box>
      <Typography sx={{ fontFamily: display, fontWeight: 600, fontSize: 30, color: t.black, lineHeight: 1.1 }}>1,284</Typography>
      <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.secDark }}>shipments</Typography>
      <Box sx={{ mt: 1, display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1, py: 0.25, borderRadius: '6px', bgcolor: '#CBF2DC' }}>
        <Icon icon="mdi:arrow-top-right" fontSize={14} color={t.success} />
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 11, color: '#0E7C42' }}>+8.7% from last week</Typography>
      </Box>
    </Box>
  )
}

function TrackingCard() {
  return (
    <Box sx={{ width: 320, borderRadius: '12px', bgcolor: t.white, p: 2.5, boxShadow: '0 16px 40px rgba(0,0,0,0.10)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black }}>#TN29A78463</Typography>
        <Box sx={{ display: 'flex', gap: 0.75 }}>
          <Box sx={{ px: 1, py: 0.25, borderRadius: '6px', bgcolor: '#FEF2D2' }}>
            <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 10, color: '#000' }}>In Transit</Typography>
          </Box>
          <Box sx={{ px: 1, py: 0.25, borderRadius: '6px', bgcolor: '#CBF2DC' }}>
            <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 10, color: '#0E7C42' }}>On Time</Typography>
          </Box>
        </Box>
      </Box>

      {/* route */}
      <Box sx={{ display: 'flex', gap: 1.25 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', border: `2px solid ${t.yellow}` }} />
          <Box sx={{ flex: 1, width: 2, my: 0.5, background: `repeating-linear-gradient(${t.yellow}, ${t.yellow} 3px, transparent 3px, transparent 6px)` }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: t.yellow }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 1.5 }}>
            <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 13, color: t.black }}>Chennai, TN, IND</Typography>
            <Typography sx={{ fontFamily: body, fontWeight: 500, fontSize: 11, color: t.secDark }}>May 12, 2026 – 08:00 AM</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 13, color: t.black }}>Mumbai, MH, IND</Typography>
            <Typography sx={{ fontFamily: body, fontWeight: 500, fontSize: 11, color: t.secDark }}>May 15, 2026 – 11:00 AM (estimated)</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid #EAEAEC', display: 'flex', alignItems: 'center', gap: 1.25 }}>
        <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: '#FEF2D2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon icon="mdi:account" fontSize={18} color="#A07A12" />
        </Box>
        <Box>
          <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 12, color: t.black }}>Arjun Patel</Typography>
          <Typography sx={{ fontFamily: body, fontWeight: 500, fontSize: 11, color: t.secDark }}>Blue Dart Express</Typography>
        </Box>
      </Box>
    </Box>
  )
}

const QUARTERS = [
  { label: 'Q1', value: '₹67,396', pct: 67 },
  { label: 'Q2', value: '₹80,899', pct: 81 },
  { label: 'Q3', value: '₹48,822', pct: 49 },
  { label: 'Q4', value: '₹60,113', pct: 60 },
]

function RevenueCard() {
  return (
    <Box sx={{ width: 340, borderRadius: '12px', bgcolor: t.white, p: 2.5, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
      <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black }}>Shipping Revenue This Year</Typography>
      <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
        <Box>
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.secDark }}>Total Revenue</Typography>
          <Typography sx={{ fontFamily: display, fontWeight: 600, fontSize: 26, color: t.black, lineHeight: 1.1 }}>₹2,57,230</Typography>
        </Box>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 11, color: t.success }}>81% from Target Revenue</Typography>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {QUARTERS.map((q) => (
          <Box key={q.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.secDark, width: 18 }}>{q.label}</Typography>
            <Box sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={q.pct}
                sx={{ height: 8, borderRadius: 10, bgcolor: '#F0F0F1', '& .MuiLinearProgress-bar': { bgcolor: t.yellow, borderRadius: 10 } }}
              />
            </Box>
            <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 11, color: t.black, width: 56, textAlign: 'right' }}>{q.value}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 1.5, display: 'flex', justifyContent: 'space-between' }}>
        {['₹0', '₹25K', '₹50K', '₹75K', '₹100K'].map((x) => (
          <Typography key={x} sx={{ fontFamily: body, fontWeight: 500, fontSize: 9, color: t.subtitle }}>{x}</Typography>
        ))}
      </Box>
    </Box>
  )
}

export default function RtoOriginSection() {
  return (
    <Box className="py-20" sx={{ bgcolor: t.white }}>
      <Box className="landing-container">
        {/* Heading */}
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: t.subtitle, mb: 2 }}>
            RTO Intelligence
          </Typography>
          <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 32, md: 44 }, lineHeight: 1.1, color: t.black }}>
            Know exactly where your
            <br />
            <Box component="span" sx={{ color: t.subtitle }}>RTO comes from.</Box>
          </Typography>
          <Typography sx={{ mt: 3, fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: t.secondary, maxWidth: 560, mx: 'auto' }}>
            The pincodes, lanes and customers quietly draining your COD margins — ranked by what they cost you.
          </Typography>
        </Box>

        {/* Visual panel */}
        <Box
          sx={{
            borderRadius: '16px',
            bgcolor: '#F5F5F6',
            outline: '1px solid #EAEAEC',
            outlineOffset: '-1px',
            p: { xs: 3, md: 6 },
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <ActiveShipmentsCard />
            <TrackingCard />
          </Box>
          <RevenueCard />
        </Box>
      </Box>
    </Box>
  )
}
