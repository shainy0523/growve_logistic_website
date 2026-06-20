import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

interface Carrier {
  name: string
  volume: number
  deliveryRate: number
  logoBg: string
}

const CARRIERS: Carrier[] = [
  { name: 'Delhivery', volume: 60, deliveryRate: 96.2, logoBg: '#000' },
  { name: 'DTDC', volume: 34, deliveryRate: 93.1, logoBg: '#07287F' },
  { name: 'BlueDart', volume: 30, deliveryRate: 88.4, logoBg: '#1B3A6B' },
  { name: 'Shadowfax', volume: 25, deliveryRate: 84.8, logoBg: '#000' },
  { name: 'Xpressbees', volume: 20, deliveryRate: 98.2, logoBg: '#07287F' },
  { name: 'Amazon', volume: 12, deliveryRate: 82.3, logoBg: '#231F20' },
  { name: 'Ekart', volume: 8, deliveryRate: 79.2, logoBg: '#F5C518' },
]

export default function CarrierComparisonCard() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#FFF',
        p: 2,
        borderRadius: '12px',
        border: '1px solid #EAEAEC',
        boxShadow: '0px 24px 144px rgba(225,225,228,0.24)',
      }}
    >
      <Typography
        sx={{
          fontSize: '13px',
          fontWeight: 700,
          color: '#000',
          mb: 1.5,
          px: 0.5,
        }}
      >
        Carrier Comparison
      </Typography>

      {/* Header row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '110px minmax(0,1fr) 90px',
          gap: 2,
          px: 1,
          pb: 1,
          mb: 0.5,
          borderBottom: '1px solid #EAEAEC',
        }}
      >
        <Typography sx={{ fontSize: 10, fontWeight: 600, color: '#737682' }}>
          Carrier
        </Typography>
        <Typography sx={{ fontSize: 10, fontWeight: 600, color: '#737682' }}>
          Volume Share
        </Typography>
        <Typography
          sx={{ fontSize: 10, fontWeight: 600, color: '#737682', textAlign: 'right' }}
        >
          Delivery Rate
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        {CARRIERS.map(carrier => {
          const positive = carrier.deliveryRate >= 90

          return (
            <Box
              key={carrier.name}
              sx={{
                display: 'grid',
                gridTemplateColumns: '110px minmax(0,1fr) 90px',
                gap: 2,
                alignItems: 'center',
                px: 1,
                py: 0.75,
                borderRadius: '8px',
                '&:hover': { bgcolor: '#F5F5F6' },
              }}
            >
              {/* Carrier */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '6px',
                    bgcolor: carrier.logoBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Typography sx={{ color: '#FFF', fontSize: 9, fontWeight: 800 }}>
                    {carrier.name[0]}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#000',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {carrier.name}
                </Typography>
              </Box>

              {/* Volume Share */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    flex: 1,
                    height: 6,
                    borderRadius: 999,
                    overflow: 'hidden',
                    bgcolor: '#E1E1E4',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      width: `${carrier.volume}%`,
                      bgcolor: '#FBC942',
                      borderRadius: 999,
                    }}
                  />
                </Box>
                <Typography
                  sx={{ fontSize: 11, fontWeight: 600, color: '#444050', width: 30, textAlign: 'right' }}
                >
                  {carrier.volume}%
                </Typography>
              </Box>

              {/* Delivery Rate */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: positive ? '#24B364' : '#E64449',
                  }}
                >
                  {carrier.deliveryRate}%
                </Typography>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    bgcolor: positive ? '#CBF2DC' : '#FFE2E3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    icon={positive ? 'mdi:arrow-up' : 'mdi:arrow-down'}
                    width={8}
                    height={8}
                    color={positive ? '#24B364' : '#E64449'}
                  />
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
