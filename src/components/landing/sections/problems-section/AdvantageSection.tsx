import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SectionHeading from '../../ui/SectionHeading'
import { ADVANTAGE } from '../../data/landing.data'
import { SECTION_IDS } from '@/utils/constant'
import NDRBreakdownCard from './NDRBreakdownCard'
import Image from 'next/image'

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
                gap: .5,
                height: 450,
                overflow: 'hidden'
              }}
            >
              <Typography variant='Heading/H4-Bold' sx={{
                fontSize: '24px',
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
                      paddingTop:'1.5rem',
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
