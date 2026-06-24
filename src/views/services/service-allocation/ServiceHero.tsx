'use client'

import { Box, Typography } from '@mui/material'
import PrimaryCta from '@/components/landing/ui/PrimaryCta'
import SecondaryCta from '@/components/landing/ui/SecondaryCta'

interface ServiceHeroProps {
  badge: string
  title: string
  accent: string
  description: string
  primaryButton?: string
  secondaryButton?: string
}

export default function ServiceHero({
  badge,
  title,
  accent,
  description,
  primaryButton = 'Get Started',
  secondaryButton = 'See how it works',
}: ServiceHeroProps) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
      }}
    >
      {/* Badge */}
      <Box
        sx={{
          px: '19.81px',
          py: '9.91px',
          bgcolor: '#FFF',
          borderRadius: '61.91px',
          border: '1.24px solid #E1E1E4',
          boxShadow: '0px 24px 34px rgba(255,255,255,0.10)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          sx={{
            p: '4px',
            bgcolor: '#FEF6E1',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '999px',
              bgcolor: '#FBC942',
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 500,
            textTransform: 'uppercase',
            lineHeight: '15.6px',
            color: '#000',
            letterSpacing: '0.04em',
          }}
        >
          {badge}
        </Typography>
      </Box>

      {/* Heading */}
      <Typography
        component='h1'
        sx={{
          fontFamily: 'var(--font-dai-banna), sans-serif',
          fontSize: {
            xs: '36px',
            md: '54px',
          },
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: '#000',
          maxWidth: '900px',
          whiteSpace:'pre-line'
        }}
      >
        {title}{' '}
        <Box
          component='span'
          sx={{
            color: '#8D8A94',
          }}
        >
          {accent}
        </Box>
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          maxWidth: '720px',
          color: '#6D6B77',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '23.04px',
          pb: 1,
        }}
      >
        {description}
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <PrimaryCta>
          {primaryButton}
        </PrimaryCta>

        <SecondaryCta>
          {secondaryButton}
          </SecondaryCta>
      </Box>
    </Box>
  )
}