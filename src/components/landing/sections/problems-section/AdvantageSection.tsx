import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import SectionHeading from '../../ui/SectionHeading'
import { ADVANTAGE } from '../../data/landing.data'
import { SECTION_IDS } from '@/utils/constant'
import NDRBreakdownCard from './NDRBreakdownCard'
import Image from 'next/image'

function MobileMetrics() {
  const { title, cards } = ADVANTAGE.mobileMetrics
  return (
    <Box
      sx={{
        position: 'relative',
        width: 280,
        height: 540,
        backgroundColor: '#1F1F1F',
        borderRadius: '36px',
        p: 1.25,
        boxShadow: 'var(--shadow-card)',
        mt: 3,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 90,
          height: 22,
          backgroundColor: '#000',
          borderRadius: '999px',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          height: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          pt: 4,
          px: 1.5,
          pb: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.25 }}>
          <Typography sx={{ fontSize: '0.625rem', color: 'var(--text-strong)', fontWeight: 700 }}>9:41</Typography>
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', color: 'var(--text-strong)' }}>
            <Icon icon='mdi:signal' fontSize={11} />
            <Icon icon='mdi:wifi' fontSize={11} />
            <Icon icon='mdi:battery' fontSize={12} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Image
            src='/images/logo.png'
            width={30}
            height={30}
            alt='logo' />
          <Typography sx={{ fontWeight: 800, fontSize: '0.8125rem', color: 'var(--text-strong)' }}>{title}</Typography>
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: '6px',
              backgroundColor: 'var(--surface-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-strong)',
            }}
          >
            <Icon icon='mdi:plus' fontSize={12} />
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
          {cards.map((c) => (
            <Box
              key={c.label}
              sx={{
                backgroundColor: '#FFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.375,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-yellow-opacity-main)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon icon='mdi:trending-up' fontSize={9} color='#B5870A' />
                </Box>
                <Typography sx={{ fontSize: '0.5rem', fontWeight: 600, color: 'var(--text-subtitle)' }}>
                  {c.label}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--text-strong)' }}>{c.value}</Typography>
              <Typography sx={{ fontSize: '0.5rem', color: 'var(--text-subtitle)' }}>
                Up by{' '}
                <Box component='span' sx={{ color: 'var(--color-success-dark)', fontWeight: 700 }}>
                  {c.delta}
                </Box>{' '}
                this week
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 'auto', borderTop: '1px solid var(--border-subtle)', pt: 1.25, display: 'flex', gap: 0.5 }}>
          <Box
            sx={{
              backgroundColor: '#1F1F1F',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.5625rem',
              px: 1,
              py: 0.5,
              borderRadius: '6px',
            }}
          >
            All (150)
          </Box>
          {['New (35)', 'Ready to Ship (15)', 'Ma'].map((t) => (
            <Box
              key={t}
              sx={{
                color: 'var(--text-subtitle)',
                fontWeight: 600,
                fontSize: '0.5625rem',
                px: 1,
                py: 0.5,
              }}
            >
              {t}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default function AdvantageSection() {
  return (
    <Box id={SECTION_IDS.ADVANTAGE} className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={ADVANTAGE.eyebrow}
          title={ADVANTAGE.titleLeading}
          accent={ADVANTAGE.titleAccent}
          subtitle={ADVANTAGE.subtitle}
          size='md'
        />

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {ADVANTAGE.cards.map((card, i) => (
            <Box
              key={card.title}
              sx={{
                background:
                  'linear-gradient(180deg, #FDEAB7 0%, #FFFBF0 100%)',
                borderRadius: 'var(--radius-lg)',
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: 450,
                overflow: 'hidden'
              }}
            >
              <Typography variant='Heading/H4-Bold' sx={{
                color: 'var(--text-strong)',
                fontFamily: 'var(--font-dai-banna), sans-serif',
                fontWeight:500
              }}>
                {card.title}
              </Typography>
              <Typography variant='Body/S-Regular' sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {card.description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                {i === 0 ? <NDRBreakdownCard /> : (
                  <Image
                    src="/images/mobile.svg"
                    alt="Growve Dashboard"
                    width={300}
                    height={400}
                    style={{
                      paddingTop:'1rem',
                      width: '300px',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
      {/* Marquee */}
      <Box
        sx={{
          mt: { xs: 5, md: 7 },
          overflow: 'hidden',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          py: 2,
          bgcolor: '#F5F5F6'
        }}
      >
        <Box
          className='marquee-track'
          sx={{
            display: 'flex',
            width: 'max-content',
            minWidth: '100%',
            gap: 5,
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {[...ADVANTAGE.marquee, ...ADVANTAGE.marquee].map((label, idx) => (
            <Box key={`${label}-${idx}`} sx={{ display: 'inline-flex', alignItems: 'center', gap: 2.5 }}>
              <Box style={{ width: 5.66, height: 5.66, transform: 'rotate(135deg)', transformOrigin: 'top left', background: 'var(--Misc-bg-black, black)' }} />
              <Typography variant='Body/XS-SemiBold' sx={{ letterSpacing: '0.22em', color: 'var(--text-strong)' }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
