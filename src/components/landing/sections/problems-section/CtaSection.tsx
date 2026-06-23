import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import PrimaryCta from '../../ui/PrimaryCta'
import SecondaryCta from '../../ui/SecondaryCta'

export default function CtaSection() {
  return (
    <Box
      className="w-full overflow-hidden flex flex-col items-center justify-center gap-6 px-6 md:px-24 py-[100px]"
      sx={{
        background: `
          linear-gradient(
            45deg,
            rgba(228,191,18,0.2) 17%,
            rgba(212,183,49,0.2) 41%,
            rgba(247,241,209,0.2) 50%,
            rgba(251,239,181,0.2) 56%,
            rgba(246,222,113,0.2) 75%,
            rgba(255,220,62,0.2) 85%
          ),
          #fff
        `
      }}
    >
      {/* Content */}
      <Box className="w-full flex flex-col items-center gap-10">
        {/* Logo */}
        <Box className="relative w-[60px] h-[60px]">
          <Box
            className="absolute -top-1 -left-1 w-[68px] h-[68px] flex items-center justify-center"
            sx={{
              bgcolor: '#000',
              borderRadius: '22px'
            }}
          >
            <Image
              src='/images/logo-design.png'
              width={50}
              height={50}
              alt='footer-logo' />
          </Box>
        </Box>

        {/* Heading Content */}
        <Box className="max-w-[1052px] flex flex-col items-center gap-6">
          <Box className="flex flex-col items-center gap-5 text-center">
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '3.6px',
                textTransform: 'uppercase',
                color: '#8D8A94'
              }}
            >
              GET STARTED TODAY
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: '"var(--font-dai-banna)", serif',
                fontSize: {
                  xs: '36px',
                  md: '48px'
                },
                fontWeight: 500,
                lineHeight: 1.2,
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Ready to Growve{' '}
              <Box
                component="span"
                sx={{
                  color: '#8D8A94'
                }}
              >
                Logistics
              </Box>
            </Typography>
          </Box>

          <Typography
            className="text-center"
            sx={{
              maxWidth: 550,
              color: '#6D6B77',
              fontSize: 16,
              lineHeight: '23px'
            }}
          >
            Set up your account, connect your store, and go live instantly.
            No complex setup, no delays—just faster logistics from day one.
          </Typography>
        </Box>
      </Box>

      {/* CTA Buttons */}
      <Box className="flex flex-col sm:flex-row items-center gap-4">
        <PrimaryCta
          component="a"
        >
          Get Started
        </PrimaryCta>
        <SecondaryCta
          component='a'
          bgColor='#FFFFFF'
        // startIcon={<Icon icon='mdi:play-circle-outline' fontSize={16} />}
        >
          Book a Demo
        </SecondaryCta>
      </Box>
    </Box>
  )
}
