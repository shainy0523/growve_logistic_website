'use client'

import { Box, Typography } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const t = {
  black: '#000000',
  white: '#FFFFFF',
  secondary: '#6D6B77',
}

const FEATURES = [
  {
    title: 'Verify COD orders before they ship',
    body: 'Auto confirm risky COD orders over WhatsApp — unconfirmed ones are held, not dispatched into an RTO.',
    image: '/images/return_rto/feature_cod.svg',
  },
  {
    title: 'Auto approve and route returns',
    body: 'Eligible returns are approved, a reverse pickup is booked, and refunds release on pickup — no manual tickets.',
    image: '/images/return_rto/feature_returns.svg',
  },
  {
    title: "Block the risk you've seen before",
    body: 'Turn repeat RTO pincodes and serial returners into rules — force prepaid or confirmation automatically.',
    image: '/images/return_rto/feature_rules.svg',
  },
]

function FeatureCard({ title, body: text, image }: { title: string; body: string; image: string }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
      }}
    >
      {/* Preview panel */}
      <Box
        sx={{
          height: 310,
          borderRadius: '12px',
          bgcolor: '#F5F5F6',
          outline: '1px solid #EAEAEC',
          outlineOffset: '-1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block' }}
        />
      </Box>

      {/* Copy */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 20, color: t.black, lineHeight: 1.25 }}>{title}</Typography>
        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>{text}</Typography>
      </Box>
    </Box>
  )
}

export default function ReturnsIntelligenceSection() {
  return (
    <Box sx={{ bgcolor: t.white }} className="py-20">
      <Box className="landing-container">
        {/* Gradient card — heading + board image */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px',
            background: 'linear-gradient(180deg, #FEEEC3 0%, #FFFFFF 100%)',
            pt: '40px',
            px: '20px',
            pb: 0,
          }}
        >
          <SectionHeading
            variant="light"
            align="center"
            size="lg"
            eyebrow="Decision Intelligence"
            title={"Uncover what's\nreally driving"}
            accent="your returns."
            subtitle="Filter every return and RTO by reason, pincode, courier or value — and act on them from one board."
          />

          {/* Returns & RTO control board */}
          <Box
            component="img"
            src="/images/return_rto/rto_table.svg"
            alt="Returns & RTO control board"
            sx={{
              display: 'block',
              width: '100%',
              maxWidth: 900,
              mx: 'auto',
              mt: { xs: 4, md: 5 },
              height: 'auto',
            }}
          />
        </Box>

        {/* Feature cards */}
        <Box sx={{ mt: 2.5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.5 }}>
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} title={f.title} body={f.body} image={f.image} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
