import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box } from '@mui/material'
import LazyBackgroundImage from '@/components/common/LazyBackgroundImage'

export default function WeightMattersSection() {
    return (
      <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',

              minHeight: {
                xs: 500,
                md: 580,
              },

              display: 'flex',
              alignItems: 'center',

              pl: {
                xs: 3,
                sm: 5,
                md:6,
                lg: '305px',
              },

              py: {
                xs: 10,
                md: '100px',
              },
            }}
          >
            {/* lazy-loaded background image */}
            <LazyBackgroundImage src="/images/weight_dispute/weight_dispute_banner.png" />

            {/* Gradient overlay for text legibility */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background:
                  'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 70.75%)',
                pointerEvents: 'none',
              }}
            />

            {/* Content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
      
                width: '100%',
                maxWidth: '465px',
              }}
            >
              <SectionHeading
                variant="dark"
                align="left"
                eyebrow="RECOVERY IN THE AGE OF AI"
                title="Your recovery engine gets smarter with every NDR."
                subtitle="Growve continuously learns from recovery outcomes. It identifies which channels, timings, and messages work best for different NDR reasons and prioritizes actions that maximize successful deliveries."
              //   subtitleWidth={465}
              />
            </Box>
          </Box>
    )
}
