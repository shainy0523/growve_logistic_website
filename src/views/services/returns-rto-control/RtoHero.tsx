'use client'

import { Box, Typography, InputBase, Button } from '@mui/material'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

export default function RtoHero() {
  return (
    <Box
      sx={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 80%)' }}
      className="pt-15! pb-15"
    >
      <Box className="landing-container pt-10! pb-5">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* LEFT — copy + email capture */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2.5 }}>
            {/* Badge */}
            <Box
              sx={{
                px: '19.81px',
                py: '9.91px',
                bgcolor: '#FFF',
                borderRadius: '61.91px',
                border: '1.24px solid #E1E1E4',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box sx={{ p: '4px', bgcolor: '#FEF6E1', borderRadius: '999px', display: 'flex' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '999px', bgcolor: '#FBC942' }} />
              </Box>
              <Typography sx={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', lineHeight: '15.6px', color: '#000', letterSpacing: '0.04em' }}>
                Returns &amp; RTO Control
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              component="h1"
              sx={{
                fontFamily: display,
                fontSize: { xs: '36px', md: '54px' },
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#000',
                maxWidth: 560,
              }}
            >
              A single view of every{' '}
              <Box component="span" sx={{ color: '#8D8A94' }}>
                return and RTO.
              </Box>
            </Typography>

            {/* Description */}
            <Typography sx={{ maxWidth: 520, color: '#6D6B77', fontFamily: body, fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
              Predict RTO risk, verify COD orders before dispatch, and control returns end to end — so fewer
              orders come back, and the ones that do cost far less.
            </Typography>

            {/* Email capture */}
            <Box
              sx={{
                mt: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                pt: '4px',
                pb: '4px',
                pl: '12px',
                pr: '6px',
                borderRadius: '8px',
                bgcolor: '#FFFFFF',
                border: 'none',
                width: '100%',
                maxWidth: 349,
              }}
            >
              <InputBase
                placeholder="What's your work email?"
                sx={{
                  flex: 1,
                  p: '2px',
                  fontFamily: body,
                  fontSize: 12,
                  lineHeight: '15.6px',
                  color: '#000',
                  '& input::placeholder': { color: '#6D6B77', opacity: 1 },
                }}
              />
              <Button
                disableElevation
                variant="contained"
                sx={{
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  fontFamily: body,
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: '12px',
                  bgcolor: '#999CA6',
                  color: '#FFF',
                  borderRadius: '6px',
                  px: '10px',
                  py: '10px',
                  minWidth: 0,
                  '&:hover': { bgcolor: '#8A8D97' },
                }}
              >
                Get started for free
              </Button>
            </Box>
          </Box>

          {/* RIGHT — RTO card with floating COD-confirmed card */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 502,
              mx: 'auto',
              p: '20px',
            }}
          >
            {/* main RTO order card */}
            <Box
              component="img"
              src="/images/return_rto/rto_shipment_tracking.svg"
              alt="RTO prediction order card"
              sx={{
                width: '95%',
                height: 'auto',
                display: 'block',
                mt: {
                  md: '80px',
                  xs:'60px',
                },
              }}
            />
            {/* floating COD-confirmed card, overlapping top-right */}
            <Box
              component="img"
              src="/images/return_rto/rto_card.svg"
              alt="COD confirmed"
              sx={{
                position: 'absolute',
                top: '45px',
                right: {
                  xs:'-10px',
                  md: '-25px'
                },
                width: '50%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.10))',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}