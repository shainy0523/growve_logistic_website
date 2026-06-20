import { Box, Typography } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import ImageContainer from '@/components/common/ImageContainer'

interface Row {
  eyebrow: string
  title: string
  description: string
  image: string
}

const ROWS: Row[] = [
  {
    eyebrow: 'Pre-built, not assembled',
    title: 'No setup. No dashboards to build.',
    description:
      'The moment your couriers are connected, every metric is live — delivery rate, first-attempt, NDR, RTO and cost per shipment, all pre-built.',
    image: '/images/services/carrier-comparison-1.png',
  },
  {
    eyebrow: 'Answers, not exports',
    title: 'Turn questions into answers.',
    description:
      'Ask any question about your operation — by courier, zone, channel or SKU — and get the answer in a click, not a spreadsheet.',
    image: '/images/services/carrier-comparison-2.png',
  },
  {
    eyebrow: 'One shared number',
    title: 'Share the insight where decisions happen.',
    description:
      'One number ops and finance both trust — from delivery performance to the rupee cost of every return.',
    image: '/images/services/carrier-comparison-3.png',
  },
]

export default function MeasureCompareSection() {
  return (
    <Box className="landing-container" sx={{ py: { xs: 8, md: 12.5 } }}>
      <SectionHeading
        eyebrow="Built for decisions"
        title="Measure. Compare."
        accent="Act. Instantly."
        subtitle="Ask any question about your operation — by courier, zone, channel or SKU — and get the answer in a click, not a spreadsheet."
      />

      <Box sx={{ mt: { xs: 6, md: 9 }, display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 10 } }}>
        {ROWS.map((row, i) => {
          const tableFirst = i % 2 === 1
          return (
            <Box
              key={row.title}
              sx={{
                display: 'grid',
                // Keep the image column the same width on both sides — swap the
                // template per row so the image never jumps size when it flips.
                gridTemplateColumns: {
                  xs: '1fr',
                  md: tableFirst ? '1fr 0.8fr' : '0.8fr 1fr',
                },
                gap: { xs: 3, md: 6 },
                alignItems: 'center',
              }}
            >
              {/* Copy */}
              <Box
                sx={{
                  order: { xs: 0, md: tableFirst ? 2 : 0 },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--text-subtitle)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                  }}
                >
                  {row.eyebrow}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-dai-banna), serif',
                    fontSize: { xs: 22, md: 26 },
                    fontWeight: 500,
                    color: 'var(--text-strong)',
                    lineHeight: 1.2,
                  }}
                >
                  {row.title}
                </Typography>
                <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {row.description}
                </Typography>
              </Box>

              {/* Table preview */}
              <Box
                sx={{
                  order: { xs: 1, md: tableFirst ? 0 : 1 },
                  bgcolor: 'var(--surface-muted)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--divider)',
                  minHeight: { xs: 'auto', md: 360 },
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  overflow: 'hidden',
                  pt:{ xs:2, md:6 }
                }}
              >
                <ImageContainer
                  src={row.image}
                  alt={`${row.title} — carrier comparison`}
                  width={700}
                  height={420}
                  maxWidth="90%"
                  align="flex-end"
                  rounded="var(--radius-lg) 0 0 var(--radius-lg)"
                  sx={{ alignItems: 'flex-end' }}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
