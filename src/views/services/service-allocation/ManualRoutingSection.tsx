import { Box, Typography } from '@mui/material'
import StatsCard from './StatsCard'

const STATS = [
  {
    value: '1 in 3',
    title: 'Routed on habit',
    description:
      'Orders sent to a default courier with no view of its success rate on that lane.',
  },
  {
    value: '₹120+',
    title: 'Wasted per misroute',
    description:
      'A wrong courier means failed attempts, reverse freight, and avoidable RTO.',
  },
  {
    value: '15 min',
    title: 'Lost per batch',
    description:
      'Ops teams comparing rate cards and serviceability by hand, order after order.',
  },
]

export default function ManualRoutingSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12.5 },
        overflow: 'hidden',
        bgcolor: '#FFF',
      }}
    >
      <Box className='landing-container'>
        {/* Heading */}

        <Box
          sx={{
            maxWidth: 900,
            mx: 'auto',
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: '#8D8A94',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              mb: 2.5,
            }}
          >
            The Cost Of Manual Routing
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Dai Banna SIL, sans-serif',
              fontSize: {
                xs: '34px',
                md: '48px',
              },
              lineHeight: 1.1,
              fontWeight: 500,
              color: '#000',
            }}
          >
            Picking couriers by habit is quietly
            <br />
            <Box
              component='span'
              sx={{
                color: '#8D8A94',
              }}
            >
              losing you money.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 760,
              mx: 'auto',
              fontSize: '16px',
              lineHeight: '23px',
              color: '#6D6B77',
            }}
          >
            Default couriers, fixed rules, and gut calls ignore the
            signals that actually decide whether an order is delivered
            — or returned at your expense.
          </Typography>
        </Box>

        {/* Cards */}

        <Box className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {STATS.map(card => (
            <StatsCard
              key={card.title}
              value={card.value}
              title={card.title}
              description={card.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}