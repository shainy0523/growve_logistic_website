import { Box, Typography } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

/* ------------------------------------------------------------------ */
/* Reusable cards                                                     */
/* ------------------------------------------------------------------ */

type LaneCardData = { title: string; description: string; image: string }

// Row-1 card: heading block on top + a wide image panel below
function LaneCard({ title, description, image }: LaneCardData) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        position: 'relative',
        bgcolor: '#F5F5F6',
        borderRadius: '12px',
        outline: '1px solid #EAEAEC',
        outlineOffset: '-1px',
        overflow: 'hidden',
        p: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        minHeight: { md: 409 },
      }}
    >
      <Box sx={{ maxWidth: 468, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography sx={{ fontFamily: display, fontSize: '22px', fontWeight: 500, color: '#000' }}>{title}</Typography>
        <Typography sx={{ fontFamily: body, fontSize: '14px', lineHeight: '21px', color: '#6D6B77' }}>
          {description}
        </Typography>
      </Box>

      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ display: 'block', width: '100%', maxWidth: 300, mx: 'auto',mt:3, height: 'auto' }}
      />
    </Box>
  )
}

type SavingsCardData = { title: string; description: string; image: string }

// Row-2 card: image visual box (fixed height) + caption below
function CaptionedCard({ title, description, image }: SavingsCardData) {
  return (
    <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Box
        sx={{
          height: 280,
          position: 'relative',
          bgcolor: '#F5F5F6',
          borderRadius: '12px',
          outline: '1px solid #EAEAEC',
          outlineOffset: '-1px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: '20px',
        }}
      >
        <Box component="img" src={image} alt={title} sx={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography sx={{ fontFamily: display, fontSize: '22px', fontWeight: 500, color: '#000' }}>{title}</Typography>
        <Typography sx={{ fontFamily: body, fontSize: '14px', lineHeight: '21px', color: '#6D6B77' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Data — swap the `image` paths for the real assets                  */
/* ------------------------------------------------------------------ */

const LANE_CARDS: LaneCardData[] = [
  {
    title: 'Catch overpriced lanes',
    description:
      'The engine constantly compares what each courier charges on every lane and routes around the expensive ones — automatically.',
    image: '/images/smart_allocation/savings_lane_compare.svg',
  },
  {
    title: 'Right courier, every weight slab',
    description:
      "A courier that's cheapest at 0.5 kg may be costliest at 2 kg. The engine recalculates the real billed cost for every shipment's actual weight.",
    image: '/images/smart_allocation/savings_weight_slab.svg',
  },
]

const SAVINGS_CARDS: SavingsCardData[] = [
  {
    title: 'Negotiated rates, built in',
    description:
      "Ship on Growve's pre-negotiated courier rates from order one — no volume commitments per courier.",
    image: '/images/smart_allocation/savings_rate.svg',
  },
  {
    title: 'No idle premium',
    description: 'Stop overpaying for premium couriers on lanes where a standard service performs just as well.',
    image: '/images/smart_allocation/savings_service_tier.svg',
  },
  {
    title: 'RTO cost avoided',
    description:
      'Every avoided return saves the full round-trip plus restocking — the biggest hidden line in shipping.',
    image: '/images/smart_allocation/savings_rto.svg',
  },
]

/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */

export default function SmartSavingsSection() {
  return (
    <Box sx={{ bgcolor: '#FFF', overflow: 'hidden', pt: { xs: '80px', md: '144px' }, pb: '100px' }}>
      <Box className="landing-container" sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <SectionHeading
          variant="light"
          align="center"
          size="lg"
          eyebrow="Found on every order"
          title={'Every shipment finds\nthe smartest'}
          accent="route to savings."
          subtitle="Growve continuously compares courier pricing, serviceability, weight slabs, and return risk to uncover hidden savings on every shipment."
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Row 1 — two lane cards */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', gap: '20px' }}>
            {LANE_CARDS.map((c) => (
              <LaneCard key={c.title} {...c} />
            ))}
          </Box>

          {/* Row 2 — three captioned cards */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', gap: '20px' }}>
            {SAVINGS_CARDS.map((c) => (
              <CaptionedCard key={c.title} {...c} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
