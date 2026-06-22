'use client'

import { Box, Typography } from '@mui/material'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  secondary: '#6D6B77',
  subtitle: '#8D8A94',
}

interface SectionHeadProps {
  eyebrow: string
  title: string
  accent?: string
  subtitle?: string
  variant?: 'light' | 'dark'
}

/** Centered eyebrow + two-line heading + subtitle, matching the Figma section headers. */
export function SectionHead({ eyebrow, title, accent, subtitle, variant = 'light' }: SectionHeadProps) {
  const titleColor = variant === 'dark' ? COLORS.white : COLORS.black
  const accentColor = variant === 'dark' ? '#9191A8' : COLORS.subtitle
  const eyebrowColor = variant === 'dark' ? 'rgba(255,255,255,0.55)' : COLORS.subtitle
  const subColor = variant === 'dark' ? 'rgba(255,255,255,0.65)' : COLORS.secondary

  return (
    <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: { xs: 5, md: 7 } }}>
      <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: eyebrowColor, mb: 2 }}>
        {eyebrow}
      </Typography>
      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 30, md: 42 }, lineHeight: 1.12, color: titleColor }}>
        {title}
        {accent && (
          <>
            <br />
            <Box component="span" sx={{ color: accentColor }}>{accent}</Box>
          </>
        )}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 3, fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: subColor, maxWidth: 620, mx: 'auto' }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}

/** The repeated "Real-Time Shipment Tracking" caption shown under each showcase card. */
export function TrackingCaption({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const titleColor = variant === 'dark' ? COLORS.white : COLORS.black
  const bodyColor = variant === 'dark' ? 'rgba(255,255,255,0.6)' : COLORS.secondary
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 20, color: titleColor, lineHeight: 1.25 }}>
        Real-Time Shipment Tracking
      </Typography>
      <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: bodyColor }}>
        Track every shipment milestone from pickup to final delivery through a unified tracking experience.
      </Typography>
    </Box>
  )
}
