'use client'

import { Box, Typography, LinearProgress } from '@mui/material'
import { SectionHead } from './_shared'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const t = {
  black: '#000000',
  white: '#FFFFFF',
  secondary: '#6D6B77',
  subtitle: '#8D8A94',
  secDark: '#737682',
  yellow: '#FBC942',
}

const NDR_ROWS = [
  { label: 'Customer not available', value: '7', pct: 30 },
  { label: 'Wrong address / not found', value: '4', pct: 44 },
  { label: 'Customer refused delivery', value: '3', pct: 22 },
  { label: 'Phone not reachable', value: '5', pct: 88 },
  { label: 'Door locked / no one home', value: '6', pct: 67 },
]

const METRICS = [
  { label: 'All Orders', value: '₹ 19,000', note: '90 Days' },
  { label: 'Successful Deliveries', value: '94.2%', note: 'Up by 8.7% this week' },
  { label: 'Average Delivery Time', value: '2.3 Days', note: 'Up by 8.7% this week' },
  { label: 'RTO / Failed Delivery Rate', value: '3.8%', note: 'Up by 8.7% this week' },
]

const FEATURES = [
  {
    title: 'Catch delivery issues before they become returns.',
    body: 'Monitor NDR trends, delivery exceptions, customer availability issues, and courier performance in real time. Take action before failed deliveries turn into costly RTOs.',
  },
  {
    title: 'Manage shipments from anywhere.',
    body: 'Access shipment performance, delivery updates, order activity, and business metrics through a mobile-first experience designed for teams on the move.',
  },
]

function NdrBreakdownPanel() {
  return (
    <Box sx={{ borderRadius: '12px', bgcolor: t.white, outline: '1px solid #EAEAEC', outlineOffset: '-1px', p: 3 }}>
      <Box sx={{ mb: 2.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black }}>NDR reason breakdown</Typography>
        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.subtitle, mt: 0.5 }}>
          18 open NDRs — take action before auto RTO triggers
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NDR_ROWS.map((r) => (
          <Box key={r.label}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.75 }}>
              <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 13, color: t.secDark }}>{r.label}</Typography>
              <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 13, color: t.black }}>{r.value}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ flex: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={r.pct}
                  sx={{ height: 8, borderRadius: 10, bgcolor: '#F0F0F1', '& .MuiLinearProgress-bar': { bgcolor: t.yellow, borderRadius: 10 } }}
                />
              </Box>
              <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 11, color: t.secDark, width: 36, textAlign: 'right' }}>{r.pct}%</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

function MetricsCard() {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        bgcolor: t.white,
        outline: '1px solid #EAEAEC',
        outlineOffset: '-1px',
        p: 3,
        boxShadow: '0 24px 48px rgba(0,0,0,0.06)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black }}>9:41</Typography>
        <Box sx={{ px: 1.25, py: 0.5, borderRadius: '6px', bgcolor: '#FEF2D2' }}>
          <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 11, color: '#000' }}>This week</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
        {METRICS.map((m) => (
          <Box key={m.label} sx={{ borderRadius: '12px', bgcolor: '#F5F5F6', p: 2 }}>
            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.subtitle, mb: 0.75 }}>{m.label}</Typography>
            <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 22, color: t.black, lineHeight: 1.1 }}>{m.value}</Typography>
            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 10, color: '#28C76F', mt: 0.75 }}>{m.note}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function GrowveAdvantageSection() {
  return (
    <Box className="py-24" sx={{ bgcolor: '#F5F5F6' }}>
      <Box className="landing-container">
        <SectionHead
          eyebrow="The Growve Advantage"
          title={"Stop reacting to shipping\nproblems."}
          accent="Start preventing them."
          subtitle="Growve helps teams identify delivery risks, recover failed shipments, and stay ahead of operational issues before they impact customers or revenue."
        />

        {/* Two showcase rows */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 10 } }}>
          {/* row 1 — copy left, NDR panel right */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box sx={{ maxWidth: 440 }}>
              <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 24, md: 30 }, lineHeight: 1.2, color: t.black, mb: 2 }}>
                {FEATURES[0].title}
              </Typography>
              <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.55, color: t.secondary }}>
                {FEATURES[0].body}
              </Typography>
            </Box>
            <NdrBreakdownPanel />
          </Box>

          {/* row 2 — metrics card left, copy right */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <MetricsCard />
            </Box>
            <Box sx={{ order: { xs: 1, md: 2 }, maxWidth: 440 }}>
              <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 24, md: 30 }, lineHeight: 1.2, color: t.black, mb: 2 }}>
                {FEATURES[1].title}
              </Typography>
              <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.55, color: t.secondary }}>
                {FEATURES[1].body}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
