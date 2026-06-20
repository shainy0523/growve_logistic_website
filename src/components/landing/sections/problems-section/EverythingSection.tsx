import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import SectionHeading from '../../ui/SectionHeading'
import { EVERYTHING, SERVICES } from '../../data/landing.data'
import Image from 'next/image'
import Link from 'next/link'


function CenterCard() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',

        background: 'linear-gradient(134deg, #000000 0%, #666666 100%)',

        border: '1px solid #717171',
        borderRadius: '12px',

        p: '20px',
        minHeight: 248,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        transform: 'rotate(0deg)',
        transition: 'transform 0.3s ease',

        boxShadow: '-8px 5px 20px rgba(0,0,0,0.30)',
        cursor: 'pointer',

        color: '#FFF',
        '&:hover': {
          transform: 'rotate(-3deg)',
        },
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 180,
          height: 180,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(251,201,66,.18) 0%, rgba(251,201,66,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <Box>
        <Image
          src="/images/footer-logo.png"
          width={125}
          height={40}
          alt="Growve"
        />
      </Box>

      {/* Content */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: '"var(--font-dai-banna)", serif',
              fontSize: '22px',
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            {EVERYTHING.centerCard.title}
          </Typography>

          <Icon icon='mdi:truck-fast-outline' fontSize={30} color='white' />
        </Box>

        <Typography
          sx={{
            color: '#ACABC1',
            fontSize: '14px',
            lineHeight: '21px',
            maxWidth: 260,
          }}
        >
          {EVERYTHING.centerCard.description}
        </Typography>
      </Box>
    </Box>
  )
}

interface EverythingSectionProps {
  /** Card titles to drop (e.g. the page you're already on). */
  excludeTitles?: string[]
  /** Render the dark "Explore the Growve Platform" center card. */
  showCenterCard?: boolean
}

export default function EverythingSection({
  excludeTitles = [],
  showCenterCard = true,
}: EverythingSectionProps = {}) {
  // Render 3x3 grid; insert CenterCard at position [1,1] (index 4 in DOM order).
  // On a service page, drop the page's own card (and any others passed in).
  const allCards = excludeTitles.length
    ? EVERYTHING.cards.filter((card) => !excludeTitles.includes(card.title))
    : EVERYTHING.cards

  // Resolve lazily at render time — `SERVICES` lives in the same data module
  // that imports the service views, so reading it at module load would hit a
  // circular-import race where `SERVICES` is still undefined.
  const hrefFor = (title: string) => {
    const slug = SERVICES.find((service) => service.title === title)?.slug
    return slug ? `/services/${slug}` : undefined
  }

  return (
    <Box className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={EVERYTHING.eyebrow}
          title={EVERYTHING.titleLeading}
          accent={EVERYTHING.titleAccent}
          subtitle={EVERYTHING.subtitle}
          size='md'
        />

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {allCards.slice(0, 1).map((card) => (
            <FeatureCard key={card.title} title={card.title} description={card.description} href={hrefFor(card.title)} />
          ))}
          {showCenterCard && (
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <CenterCard />
            </Box>
          )}
          {allCards.slice(1).map((card) => (
            <FeatureCard key={card.title} title={card.title} description={card.description} href={hrefFor(card.title)} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export function FeatureCard({ title, description, href }: { title: string; description: string; href?: string }) {
  return (
    <Box
      {...(href ? { component: Link, href } : {})}
      sx={{
        fontFamily: 'Nunito Sans',
        backgroundColor: 'var(--surface-muted)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        p: { xs: 2.5, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: 220,
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        transform: 'scale(1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 'var(--shadow-soft)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
        <Typography className='text-[1.2rem]!' variant='Heading/H5-Bold' sx={{
          color: 'var(--text-strong)',
          fontFamily: 'var(--font-dai-banna), sans-serif',
          fontWeight: 500,
        }}>
          {title}
        </Typography>
        <Icon icon='mdi:arrow-right' fontSize={18} color='#1F1F1F' />
      </Box>
      <Typography className='text-[.8rem]!' variant='Body/S-Regular' sx={{ color: 'var(--text-secondary)', lineHeight: 1.6, mt: 'auto' }}>
        {description}
      </Typography>
    </Box>
  )
}
