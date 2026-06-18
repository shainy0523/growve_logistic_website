import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import SectionHeading from '../../ui/SectionHeading'
import { ONE_PLATFORM } from '../../data/landing.data'
import { SECTION_IDS } from '@/utils/constant'
import Image from 'next/image'
import TruckLogo from '@/components/logo/TruckLogo'

function TruckVisual() {
  return (
   <Box
  sx={{
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 220,
  }}
>
  {/* Truck */}

  <Box
    sx={{
      position: 'absolute',
      bottom: -20,
      left: 120,
      width: 460,
      zIndex: 1
    }}
  >
    <Image
      src="/images/truck.png"
      alt="truck"
      width={460}
      height={320}
      style={{
        width: '100%',
        height: 'auto'
      }}
    />
  </Box>

  {/* Logo */}

  <Box
    sx={{
      position: 'absolute',
      right: 80,
      top: 5,
      zIndex: 10,
      opacity: 0.15,
      pointerEvents: 'none'
    }}
  >
    <TruckLogo/>
  </Box>
</Box>
  );
}

function InsightsVisual() {
  const metrics = [
    {
      label: 'Delivery Success Rate',
      value: '91.4%',
      delta: '+0.8pp'
    },
    {
      label: 'First Attempt Delivery',
      value: '84.2%',
      delta: '+1.2pp'
    },
    {
      label: 'Avg Transit Time',
      value: '3.4 days',
      delta: '+0.2'
    }
  ];

  return (
    <Box
      sx={{
        flex: 1,
        position: 'relative',
        minHeight: 180,
        mt: 'auto'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: -145,
          bottom: 0,
          display: 'flex',
          gap: 2
        }}
      >
        {metrics.map((m, index) => (
          <Box
            key={m.label}
            sx={{
              width: index === 1 ? 240 : 220,
              bgcolor: '#FFF',
              borderRadius: '12px',
              p: 2,
              boxShadow: '0px 1px 2px rgba(0,0,0,0.04)',
              border: '1px solid #F1F1F1'
            }}
          >
            {/* Header */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '6px',
                  bgcolor: '#FBC942',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon
                  icon="mdi:clock-outline"
                  fontSize={16}
                  color="white"
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#6D6B77'
                }}
              >
                {m.label}
              </Typography>
            </Box>

            {/* Value */}

            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                color: '#111',
                lineHeight: 1
              }}
            >
              {m.value}
            </Typography>

            {/* Footer */}

            <Box
              sx={{
                mt: 1.5,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  color: '#8D8A94'
                }}
              >
                vs Last Period
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#24B364'
                  }}
                >
                  {m.delta}
                </Typography>

                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: '#CBF2DC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon
                    icon="mdi:arrow-top-right"
                    fontSize={10}
                    color="#24B364"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function OnePlatformSection() {
  return (
    <Box id={SECTION_IDS.CAPABILITIES} className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={ONE_PLATFORM.eyebrow}
          title={ONE_PLATFORM.titleLeading}
          accent={ONE_PLATFORM.titleAccent}
          subtitle={ONE_PLATFORM.subtitle}
          size='md'
        />

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {ONE_PLATFORM.topCards.map((card, i) => (
            <Box
              key={card.title}
              sx={{
                backgroundColor: 'var(--surface-muted)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                minHeight: 320,
                overflow:'hidden'
              }}
            >
              <Box className='flex flex-col'
                sx={{
                  p: { xs: 2.5, md: 3 }
                }}
              >
                <Typography variant="Heading/H4-Bold" className='text-black'>
                  {card.title}
                </Typography>

                <Typography
                  variant="Body/S-Regular"
                  sx={{
                    mt: 2,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {card.description}
                </Typography>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  position: 'relative'
                }}
              >
                {i === 0 ? <TruckVisual /> : <InsightsVisual />}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: 2.5,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {ONE_PLATFORM.listCards.map((card) => (
            <Box
              key={card.title}
              sx={{
                backgroundColor: 'var(--surface-muted)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                p: { xs: 2.5, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant='Heading/H5-Bold' sx={{ color: 'var(--text-strong)' }}>
                {card.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {card.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'var(--text-secondary)' }}>
                    <Icon icon='mdi:check' fontSize={14} color='#FBC942' />
                    <Typography variant='Body/S-Regular'>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
