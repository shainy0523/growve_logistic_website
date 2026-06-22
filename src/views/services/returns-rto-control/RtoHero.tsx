'use client'

import { Box, Typography, InputBase, Button } from '@mui/material'
import Image from 'next/image'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

type Courier = {
  name: string
  logo?: string
  color: string
  rate: string
  score: number
}

// Brand logo assets (in /public/images/common)
const LOGOS: Record<string, string> = {
  Delhivery: '/images/common/delhivery.svg',
  DTDC: '/images/common/dtdc.svg',
  Shadowfax: '/images/common/shadowfox.svg',
  Xpressbees: '/images/common/xpressbees.svg',
  Amazon: '/images/common/amazon.svg',
  Ekart: '/images/common/ekart.svg',
}

const COURIERS: Courier[] = [
  { name: 'Delhivery', color: '#1A1A1A', rate: '98.2%', score: 72 },
  { name: 'DTDC', color: '#07287F', rate: '93.1%', score: 74 },
  { name: 'Shadowfax', color: '#1A1A1A', rate: '96.6%', score: 72 },
  { name: 'Xpressbees', color: '#07287F', rate: '88.4%', score: 78 },
  { name: 'Amazon', color: '#231F20', rate: '84.3%', score: 66 },
  { name: 'Ekart', color: '#0F4C81', rate: '79.1%', score: 68 },
]

function BrandTile({ courier, size = 32 }: { courier: Courier; size?: number }) {
  const logo = LOGOS[courier.name]
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: `${size * 0.25}px`,
        bgcolor: logo ? '#FFFFFF' : courier.color,
        outline: '1px solid #EAEAEC',
        outlineOffset: '-1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        fontFamily: body,
        fontWeight: 700,
        fontSize: size * 0.42,
        color: '#fff',
      }}
    >
      {logo ? (
        <Image src={logo} alt={courier.name} width={size} height={size} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ) : (
        courier.name[0]
      )}
    </Box>
  )
}

function CourierValueRow({ courier }: { courier: Courier }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        p: 1.25,
        borderRadius: '10px',
        bgcolor: '#FFFFFF',
        outline: '1px solid #EAEAEC',
        outlineOffset: '-1px',
      }}
    >
      <BrandTile courier={courier} />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 13, color: '#000', lineHeight: 1.2 }}>
          {courier.name}
        </Typography>
        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: '#8D8A94' }}>
          ₹48 Avg. Per Cost
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'right' }}>
        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 10, color: '#8D8A94' }}>
          Delivery Rate
        </Typography>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 13, color: '#000' }}>
          {courier.rate}
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          px: 1.25,
          py: 0.75,
          borderRadius: '8px',
          bgcolor: '#FEF2D2',
          minWidth: 52,
        }}
      >
        <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 9, color: '#8D8A94', lineHeight: 1.2 }}>
          Value Score
        </Typography>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 15, color: '#000', lineHeight: 1.2 }}>
          {courier.score}
        </Typography>
      </Box>
    </Box>
  )
}

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
            gap: { xs: 6, md: 8 },
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
                gap: 1,
                p: '6px',
                pl: 2,
                borderRadius: '10px',
                bgcolor: '#FFFFFF',
                border: '1px solid #E1E1E4',
                width: '100%',
                maxWidth: 440,
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
              }}
            >
              <InputBase
                placeholder="What's your work email?"
                sx={{ flex: 1, fontFamily: body, fontSize: 14, color: '#000', minWidth: 160 }}
              />
              <Button
                disableElevation
                variant="contained"
                sx={{
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  fontFamily: body,
                  fontWeight: 600,
                  fontSize: 14,
                  bgcolor: '#1F1F1F',
                  color: '#FFF',
                  borderRadius: '8px',
                  px: 2.5,
                  height: 40,
                  '&:hover': { bgcolor: '#FBC942', color: '#1F1F1F' },
                }}
              >
                Get started for free
              </Button>
            </Box>
          </Box>

          {/* RIGHT — courier value-score card */}
          <Box
            sx={{
              borderRadius: '16px',
              bgcolor: '#F5F5F6',
              outline: '1px solid #EAEAEC',
              outlineOffset: '-1px',
              p: { xs: 2, md: 2.5 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1.25,
              boxShadow: '0 24px 48px rgba(0,0,0,0.06)',
            }}
          >
            {COURIERS.map((c) => (
              <CourierValueRow key={c.name} courier={c} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
