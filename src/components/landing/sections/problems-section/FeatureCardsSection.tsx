import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import { FEATURE_CARDS } from '../../data/landing.data'

export default function FeatureCardsSection() {
  return (
    <Box className='landing-container' sx={{ pt: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 2.5,
        }}
      >
        {FEATURE_CARDS.map((card) => (
          <Box
            key={card.title}
            sx={{
              backgroundColor: 'var(--surface-muted)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              p: { xs: 2.5, md: 3 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-soft)',
              },
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-strong)',
              }}
            >
              <Icon icon={card.icon} fontSize={18} />
            </Box>
            <Typography variant='Heading/H5-Bold' sx={{ color: 'var(--text-strong)' }}>
              {card.title}
            </Typography>
            <Typography variant='Body/S-Regular' sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
