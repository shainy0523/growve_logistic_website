import { Box } from '@mui/material'
import SectionHeading from '@/components/landing/ui/SectionHeading'

export default function ProactiveBandSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        minHeight: { xs: 520, md: 640 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-end', md: 'center' },
        alignItems: 'flex-start',
        px: { xs: 3, md: '194px' },
        py: { xs: 5, md: '100px' },
        backgroundImage: 'url(/images/services/proactive-band.png)',
        backgroundSize: 'cover',
        backgroundPosition: { xs: 'center', md: 'center right' },
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0B0B0F',
      }}
    >
      {/* Readability overlay — darkens the side the copy sits on */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(11,11,15,0.35) 0%, rgba(11,11,15,0.85) 100%)',
            md: 'linear-gradient(270deg, rgba(0,0,0,0) 0%, #000 100%)',
          },
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1, width: { xs: '100%', md: 620 } }}>
        <SectionHeading
          eyebrow="Fewer RTOs, automatically"
          title="Automatically contact customers, collect delivery preferences,"
          accent="and schedule reattempts before orders turn into RTOs."
          subtitle="Every at-risk shipment is worked the moment it stalls — no manual follow-ups, no orders slipping silently into returns."
          variant="dark"
          size="md"
          align="left"
        />
      </Box>
    </Box>
  )
}
