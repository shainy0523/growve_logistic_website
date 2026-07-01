import { Box, Typography } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

type Step = {
  step: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    step: 'STEP 1',
    title: 'Order arrives',
    description: 'Orders sync instantly with destination, weight, and COD details.',
  },
  {
    step: 'STEP 2',
    title: 'Couriers scored',
    description: 'Every serviceable courier is scored live across all six signals against this exact order.',
  },
  {
    step: 'STEP 3',
    title: 'Best one selected',
    description: 'The highest-scoring courier is assigned automatically — or held for review.',
  },
  {
    step: 'STEP 4',
    title: 'Outcome learned',
    description: 'The delivery result feeds back into your success history, sharpening the next allocation.',
  },
]

function StepCard({ step, title, description }: Step) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        p: '24px',
        bgcolor: '#F8F7FA',
        borderRadius: '8px',
        outline: '1px solid #EAEAEC',
        outlineOffset: '-1px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      {/* step badge */}
      <Box
        sx={{
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          px: '5px',
          py: '3px',
          bgcolor: '#FFF',
          borderRadius: '9px',
        }}
      >
        <Box sx={{ width: 8, height: 8, borderRadius: '999px', bgcolor: '#FCD468' }} />
        <Typography sx={{ fontFamily: body, fontSize: '11px', fontWeight: 600, lineHeight: '14.3px', color: '#BD8125' }}>
          {step}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography sx={{ fontFamily: display, fontSize: '20px', fontWeight: 500, color: '#444050' }}>
          {title}
        </Typography>
        <Typography sx={{ fontFamily: body, fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#6D6B77' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default function HowItWorksSection() {
  return (
    <Box sx={{ bgcolor: '#FFF', overflow: 'hidden', pt: { xs: '60px', md: '100px' }, pb: { xs: '80px', md: '144px' } }}>
      <Box className="landing-container" sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <SectionHeading
          variant="light"
          align="center"
          size="lg"
          eyebrow="how it works"
          title={'From order to\nallocation in'}
          accent="four steps."
          subtitle={"No rules to maintain, no rate cards to compare. Connect\nonce and every order routes itself."}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: { sm: 'wrap', lg: 'nowrap' },
            alignItems: 'stretch',
            gap: '20px',
          }}
        >
          {STEPS.map(s => (
            <StepCard key={s.step} {...s} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
