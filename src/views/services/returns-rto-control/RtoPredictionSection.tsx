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
}

const NDR_ROWS = [
  { label: 'NDRs detected', value: '7', pct: 30 },
  { label: 'Customers reached', value: '4', pct: 44 },
  { label: 'Responses captured', value: '3', pct: 22 },
  { label: 'Re-attempts won', value: '5', pct: 88 },
  { label: 'RTO prevented (₹)', value: '₹4,636', pct: 67 },
]

const FEATURES = [
  {
    icon: 'mdi:chart-bell-curve-cumulative',
    title: 'Per order RTO scoring',
    body: 'A predicted return probability on every order, from value, destination and customer history.',
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'COD & address verification',
    body: 'Risky COD orders are confirmed and addresses validated before dispatch — or held.',
  },
  {
    icon: 'mdi:backup-restore',
    title: 'Reverse logistics control',
    body: 'Track returns and RTO end to end, with reverse pickups and refunds handled automatically.',
  },
]

function NdrRecoveryPanel() {
  return (
    <Box sx={{ borderRadius: '12px', bgcolor: t.white, outline: '1px solid #EAEAEC', outlineOffset: '-1px', p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black }}>NDR recovery last 30 days</Typography>
        <Box sx={{ px: 1.25, py: 0.5, borderRadius: '6px', bgcolor: '#FEF2D2' }}>
          <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 11, color: '#000' }}>18 open NDRs</Typography>
        </Box>
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

export default function RtoPredictionSection() {
  return (
    <Box className="py-20" sx={{ bgcolor: '#F5F5F6' }}>
      <Box className="landing-container">
        {/* Top row: copy + panel */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: t.subtitle, mb: 2 }}>
              RTO Prediction
            </Typography>
            <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 28, md: 38 }, lineHeight: 1.15, color: t.black, maxWidth: 440 }}>
              Predict the return before you ship.
            </Typography>
            <Typography sx={{ mt: 2.5, fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.55, color: t.secondary, maxWidth: 460 }}>
              Every order gets a predicted RTO risk from COD value, destination history and customer behaviour —
              so you can hold, confirm, or force prepaid before the label is even printed.
            </Typography>
          </Box>

          <NdrRecoveryPanel />
        </Box>

        {/* Feature columns */}
        <Box sx={{ mt: { xs: 6, md: 9 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {FEATURES.map((f) => (
            <Box key={f.title} sx={{ flex: 1 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '10px', bgcolor: t.white, outline: '1px solid #EAEAEC', outlineOffset: '-1px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Icon icon={f.icon} fontSize={22} color="#1F1F1F" />
              </Box>
              <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 20, color: t.black, mb: 1 }}>{f.title}</Typography>
              <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>{f.body}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
