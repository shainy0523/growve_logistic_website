import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import NDRBreakdownCard from '@/components/landing/sections/problems-section/NDRBreakdownCard'

const CARDS = [
  {
    title: 'Export to Excel & Google Sheets',
    description:
      'Every view exports clean and structured — drop it straight into the models your team already runs.',
  },
  {
    title: 'Stream it to your BI or warehouse',
    description:
      'Pipe every metric to your stack through the API or a managed connector — millions of data points, one query away.',
  },
]

export default function DataToolsSection() {
  return (
    <Box className="landing-container" sx={{ py: { xs: 8, md: 12.5 } }}>
      <SectionHeading
        eyebrow="Your data, your tools"
        title="All your data."
        accent="Right where you work."
        subtitle="Export it, pipe it, or query it — every metric leaves Growve in the shape your team already works in."
      />

      <Box
        sx={{
          mt: { xs: 5, md: 7 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        {CARDS.map((card, i) => (
          <Box
            key={card.title}
            sx={{
              background: 'linear-gradient(180deg, #FDEAB7 0%, #FFFBF0 100%)',
              borderRadius: 'var(--radius-lg)',
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: 450,
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="Heading/H4-Bold"
              sx={{
                color: 'var(--text-strong)',
                fontFamily: 'var(--font-dai-banna), sans-serif',
                fontWeight: 500,
              }}
            >
              {card.title}
            </Typography>
            <Typography variant="Body/S-Regular" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {card.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              {i === 0 ? (
                <NDRBreakdownCard />
              ) : (
                <Image
                  src="/images/mobile.svg"
                  alt="Growve Dashboard"
                  width={300}
                  height={400}
                  style={{
                    paddingTop: '1rem',
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
  )
}
