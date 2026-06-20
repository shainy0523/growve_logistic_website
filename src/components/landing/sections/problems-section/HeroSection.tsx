'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PrimaryCta from '../../ui/PrimaryCta'
import SecondaryCta from '../../ui/SecondaryCta'
import { HERO } from '../../data/landing.data'
import { APP_URLS, SECTION_IDS } from '@/utils/constant'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <Box
      id={SECTION_IDS.HOME}
      className='pt-10 mr-8! ml-8! mt-4! rounded-[20px]!'
      sx={{
        position: 'relative',
        overflow: 'hidden',

        backgroundImage: 'url(/images/hero_bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <Box className='landing-container' sx={{ position: 'relative', zIndex: 1 }}>
        {/* Live badge */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              px: '20px',
              py: '10px',
              bgcolor: '#FFFFFF',
              borderRadius: '62px',
              border: '1px solid #E1E1E4',
              boxShadow: '0px 24px 34px rgba(255,255,255,0.10)'
            }}
          >
            <Box
              sx={{
                p: '4px',
                bgcolor: '#FEF6E1',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#FBC942',
                  animation: 'pulse 2s infinite',

                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      opacity: 1
                    },
                    '50%': {
                      transform: 'scale(1.3)',
                      opacity: 0.7
                    },
                    '100%': {
                      transform: 'scale(1)',
                      opacity: 1
                    }
                  }
                }}
              />
            </Box>

            <Typography
              sx={{
                color: '#000',
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '15.6px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}
            >
              {HERO.badge}
            </Typography>
          </Box>
        </Box>

        {/* Headline */}
        <Typography
          component='h1'
          sx={{
            textAlign: 'center',
            fontFamily: 'var(--font-dai-banna), sans-serif',
            fontWeight: 500,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            maxWidth: 1080,
            mx: 'auto',
          }}
        >
          {HERO.titleLeading}
          <br />
          {HERO.titleSecondary}{' '}
          <Box component='span' sx={{ color: '#B5B0BC', fontWeight: 500 }}>
            {HERO.titleAccent}
          </Box>
        </Typography>

        {/* Subtitle */}
        <Typography
          // variant='Body/M-Regular'
          sx={{
            textAlign: 'center',
            color: 'var(--text-secondary)',
            mt: 3,
            maxWidth: 850,
            mx: 'auto',
          }}
        >
          {HERO.subtitle}
        </Typography>

        {/* CTAs */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <PrimaryCta component='a' href={APP_URLS.SIGNUP}>
            {HERO.primaryCta}
          </PrimaryCta>
          <SecondaryCta
            component='a'
            href={`#${SECTION_IDS.PLATFORM}`}
          // startIcon={<Icon icon='mdi:play-circle-outline' fontSize={16} />}
          >
            {HERO.secondaryCta}
          </SecondaryCta>
        </Box>

        {/* Dashboard mockup */}
        <Box sx={{ mt: { xs: 5, md: 7 }, px: { xs: 0, md: 2 } }}>
          {/* <HeroDashboard /> */}
          <Image
            src="/images/hero.svg"
            alt="Growve Platform"
            width={1052}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
