"use client"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import { FEATURE_CARDS } from '../../data/landing.data'
import { motion } from 'framer-motion';

export default function FeatureCardsSection() {
  return (
    <Box className='landing-container' sx={{ py: { xs: 6, md: 15 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 2.5,
        }}
      >
        {FEATURE_CARDS.map((card, index) => (
          <Box component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.3,
              delay: index * 0.15,
            }}
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
                color: 'var(--text-strong)',
                pb:1,
              }}
            >
              <Icon icon={card.icon} fontSize={25} />
            </Box>
            <Typography
              sx={{
                color: 'var(--text-strong)',
                fontFamily: 'var(--font-dai-banna), sans-serif',
                fontWeight:500,
               }}>
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
