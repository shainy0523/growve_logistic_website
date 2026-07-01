'use client'

import { Box, Typography } from '@mui/material'
import { keyframes } from '@mui/system'
import { Icon } from '@iconify/react'

// infinite "live data" pulse for the chart columns
const pulse = keyframes`
  0%   { transform: scaleY(1); }
  30%  { transform: scaleY(0.9); }
  65%  { transform: scaleY(1.04); }
  100% { transform: scaleY(1); }
`

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const t = {
  black: '#000000',
  white: '#FFFFFF',
  secondary: '#6D6B77',
  subtitle: '#8D8A94',
  primary: '#444050',
  secDark: '#737682',
  yellow: '#FBC942',
  success: '#24B364',
}

/* ---- chart data (dynamic) ---- */

type Point = { month: string; value: number } // value in thousands

const CHART_MAX = 4 // top of Y axis (K)
const Y_TICKS = ['4K', '3K', '2K', '1K', '0K']

const CHART_POINTS: Point[] = [
  { month: 'Jan', value: 1.94 },
  { month: 'Feb', value: 2.31 },
  { month: 'Mar', value: 1.73 },
  { month: 'Apr', value: 2.23 },
  { month: 'May', value: 2.9 },
  { month: 'Jun', value: 2.66 },
  { month: 'Jul', value: 3.22 },
  { month: 'Aug', value: 3.61 },
]

const HIGHLIGHT_INDEX = 4 // May
const HIGHLIGHT = { label: 'May 2026', value: '3,124' }

/* ---- features (dynamic) ---- */

const FEATURES = [
  {
    icon: 'material-symbols:psychology-outline',
    title: 'Per-order RTO scoring',
    body: 'A predicted return probability on every order, from value, destination and customer history.',
  },
  {
    icon: 'material-symbols:verified-outline',
    title: 'COD & address verification',
    body: 'Risky COD orders are confirmed and addresses validated before dispatch — or held.',
  },
  {
    icon: 'material-symbols:assignment-return-outline-rounded',
    title: 'Reverse logistics control',
    body: 'Track returns and RTO end to end, with reverse pickups and refunds handled automatically.',
  },
]

/* ---- line chart ---- */

function RiskColumnChart() {
  const PLOT_H = 176 // px height of the plotting area

  return (
    <Box sx={{ display: 'flex', flex: 1, minHeight: 0, gap: 1 }}>
      {/* Y axis labels */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: PLOT_H,
          pb: '18px',
        }}
      >
        {Y_TICKS.map((label) => (
          <Typography key={label} sx={{ fontFamily: body, fontSize: 10, color: t.secDark, lineHeight: '13px' }}>
            {label}
          </Typography>
        ))}
      </Box>

      {/* plot + x labels */}
      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ position: 'relative', height: PLOT_H }}>
          {/* dashed gridlines */}
          {Y_TICKS.map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: `${(i / (Y_TICKS.length - 1)) * 100}%`,
                borderTop: '1px dashed #EBEBED',
              }}
            />
          ))}

          {/* columns */}
          <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
            {CHART_POINTS.map((p, i) => {
              const isHighlight = i === HIGHLIGHT_INDEX
              return (
                <Box
                  key={p.month}
                  sx={{
                    flex: 1,
                    height: `${(p.value / CHART_MAX) * 100}%`,
                    transformOrigin: 'bottom center',
                    animation: `${pulse} 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.18}s`,
                    position: 'relative',
                    borderTop: `2px solid ${t.black}`,
                    background: isHighlight
                      ? 'linear-gradient(180deg, #FBC942 0%, #FFFBF0 100%)'
                      : 'linear-gradient(180deg, rgba(128,128,128,0.2) 0%, rgba(128,128,128,0) 100%)',
                  }}
                >
                  {isHighlight && (
                    <>
                      {/* dot on the top edge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -1,
                          left: '50%',
                          width: 12,
                          height: 12,
                          borderRadius: '999px',
                          bgcolor: t.primary,
                          border: `2px solid ${t.white}`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                      {/* tooltip */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translate(-50%, calc(-100% - 12px))',
                          p: 1,
                          bgcolor: '#FEF2D2',
                          borderRadius: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 0.5,
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          zIndex: 1,
                        }}
                      >
                        <Typography sx={{ fontFamily: body, fontSize: 10, color: t.subtitle, lineHeight: '13px' }}>
                          {HIGHLIGHT.label}
                        </Typography>
                        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.primary, lineHeight: '17.5px' }}>
                          {HIGHLIGHT.value}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              )
            })}
          </Box>
        </Box>

        {/* X axis labels */}
        <Box sx={{ display: 'flex', mt: 1 }}>
          {CHART_POINTS.map((p) => (
            <Typography
              key={p.month}
              sx={{ flex: 1, textAlign: 'center', fontFamily: body, fontSize: 10, color: t.secDark, lineHeight: '13px' }}
            >
              {p.month}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function RiskChartCard() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: t.white,
        borderRadius: '12px',
        p: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
      }}
    >
      {/* header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 16, color: t.black, lineHeight: '19.2px' }}>
          RTO risk · incoming COD orders
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '3px', bgcolor: '#EBEBED', border: '1px solid #E1E1E4' }} />
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.black, lineHeight: '12px' }}>
            high-risk zone
          </Typography>
        </Box>
      </Box>

      {/* metric */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 24, color: t.primary, lineHeight: '26.4px' }}>
          4,352
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            px: 0.5,
            py: 0.25,
            borderRadius: '10px',
            bgcolor: '#DDF6E8',
          }}
        >
          <Icon icon="tabler:arrow-up-right" fontSize={12} color={t.success} />
          <Typography sx={{ fontFamily: body, fontSize: 10, color: t.success, lineHeight: '13px' }}>+8.7%</Typography>
        </Box>
      </Box>

      <RiskColumnChart />
    </Box>
  )
}

export default function RtoPredictionSection() {
  return (
    <Box className="py-20" sx={{ bgcolor: t.white }}>
      <Box className="landing-container" sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {/* hero card: copy + chart */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            bgcolor: '#F5F5F6',
            outline: '1px solid #EAEAEC',
            outlineOffset: '-1px',
            p: { xs: '24px', md: '40px' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* copy */}
          <Box sx={{ width: { xs: '100%', md: 338 }, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              sx={{
                fontFamily: body,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: t.subtitle,
                lineHeight: '15.6px',
              }}
            >
              RTO prediction
            </Typography>
            <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 24, color: t.black, lineHeight: 1.2 }}>
              Predict the return before you ship.
            </Typography>
            <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: '21px', color: t.secondary }}>
              Every order gets a predicted RTO risk from COD value, destination history and customer behaviour — so
              you can hold, confirm, or force prepaid before the label is even printed.
            </Typography>
          </Box>

          {/* chart */}
          <Box sx={{ flex: 1, minWidth: 0, width: '100%', maxWidth: { md: 532 } }}>
            <RiskChartCard />
          </Box>
        </Box>

        {/* feature columns */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 2.5 } }}>
          {FEATURES.map((f) => (
            <Box key={f.title} sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  bgcolor: '#EBEBED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon icon={f.icon} fontSize={20} color={t.primary} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 22, color: t.black }}>
                  {f.title}
                </Typography>
                <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: '21px', color: t.secondary }}>
                  {f.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
