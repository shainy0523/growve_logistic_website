import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import { SECTION_IDS } from '@/utils/constant'
import { TRACKING } from '@/components/landing/data/landing.data'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import ShipmentTrackingHero from '@/components/landing/sections/problems-section/Shipmenttrackinghero'

function ActiveShipmentsPill() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: { xs: 12, md: 24 },
        top: { xs: 60, md: 90 },
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        p: 1.25,
        display: 'flex',
        alignItems: 'center',
        gap: 1.25,
        zIndex: 2,
        minWidth: 180,
      }}
    >
      <Box>
        <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
          Active Shipments
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
          <Typography sx={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-strong)' }}>
            {TRACKING.activeShipments.value}
          </Typography>
          <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
            {TRACKING.activeShipments.label}
          </Typography>
        </Box>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25, mt: 0.25 }}>
          <Icon icon='mdi:arrow-top-right' fontSize={10} color='#24B364' />
          <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--color-success-dark)' }}>
            {TRACKING.activeShipments.delta}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: '10px',
          backgroundColor: 'var(--brand-primary)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon icon='mdi:truck-fast-outline' fontSize={20} color='#1F1F1F' />
      </Box>
    </Box>
  )
}

function RevenueCard() {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: { xs: 12, md: 32 },
        top: { xs: 12, md: 24 },
        width: { xs: 220, md: 280 },
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        p: 2,
        zIndex: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
        <Typography variant='Body/S-Bold' sx={{ color: 'var(--text-strong)' }}>
          Shipping Revenue
        </Typography>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25, backgroundColor: 'var(--surface-muted)', px: 1, py: 0.375, borderRadius: '6px' }}>
          <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--text-primary)' }}>
            This Year
          </Typography>
          <Icon icon='mdi:chevron-down' fontSize={10} />
        </Box>
      </Box>

      <Box sx={{ position: 'relative', height: 80, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <Box
          sx={{
            width: 140,
            height: 70,
            borderRadius: '140px 140px 0 0',
            background: 'conic-gradient(from 270deg at 50% 100%, var(--brand-primary) 0deg, var(--brand-primary) 240deg, var(--surface-soft) 240deg)',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: '14px 14px 0 14px',
              borderRadius: '140px 140px 0 0',
              backgroundColor: '#FFFFFF',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
              Total Revenue
            </Typography>
            <Typography sx={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-strong)' }}>
              {TRACKING.revenue.value}
            </Typography>
            <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
              {TRACKING.revenue.target}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        {[
          { label: 'Tier 1', val: 64 },
          { label: 'Tier 2', val: 50, dark: true },
          { label: 'Tier 3', val: 30 },
          { label: 'Tier 4', val: 20 },
        ].map((r) => (
          <Box key={r.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ flex: 1, height: 6, backgroundColor: 'var(--surface-soft)', borderRadius: 3, overflow: 'hidden' }}>
              <Box
                sx={{
                  width: `${r.val}%`,
                  height: '100%',
                  backgroundColor: r.dark ? '#1F1F1F' : 'var(--brand-primary)',
                  borderRadius: 3,
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, color: 'var(--color-success-dark)' }}>
              <Icon icon='mdi:menu-up' fontSize={10} />
              <Typography variant='Body/Caption/M-SemiBold'>2.4%</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

function ShipmentCard() {
  const s = TRACKING.shipment
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        p: 2.5,
        width: '100%',
        maxWidth: 560,
        mx: 'auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
        <Box>
          <Typography variant='Body/M-Bold' sx={{ color: 'var(--text-strong)' }}>
            {s.id}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <Box
              sx={{
                display: 'inline-flex',
                px: 1,
                py: 0.25,
                borderRadius: '999px',
                backgroundColor: 'var(--color-yellow-opacity-main)',
                color: '#B5870A',
              }}
            >
              <Typography variant='Body/Caption/M-SemiBold'>{s.status}</Typography>
            </Box>
            <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--color-success-dark)' }}>
              {s.note}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
            Courier:
          </Typography>
          <Typography variant='Body/S-SemiBold' sx={{ color: 'var(--text-strong)' }}>
            {s.courier.name}
          </Typography>
          <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
            {s.courier.company}
          </Typography>
        </Box>
      </Box>

      {/* Progress */}
      <Box sx={{ position: 'relative', mt: 2.5 }}>
        <Box sx={{ height: 4, backgroundColor: 'var(--surface-soft)', borderRadius: 2, position: 'relative' }}>
          <Box sx={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '55%', backgroundColor: 'var(--brand-primary)', borderRadius: 2 }} />
        </Box>
        <Box sx={{ position: 'absolute', left: 0, top: -6, width: 16, height: 16, borderRadius: '50%', backgroundColor: 'var(--brand-primary)', border: '2px solid #FFFFFF' }} />
        <Box
          sx={{
            position: 'absolute',
            left: '55%',
            top: -10,
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'var(--brand-primary)',
            color: '#1F1F1F',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #FFFFFF',
          }}
        >
          <Icon icon='mdi:truck-fast' fontSize={12} />
        </Box>
        <Box sx={{ position: 'absolute', right: 0, top: -6, width: 16, height: 16, borderRadius: '50%', backgroundColor: 'var(--surface-soft)', border: '2px solid #FFFFFF' }} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mt: 3 }}>
        <Box>
          <Typography variant='Body/S-SemiBold' sx={{ color: 'var(--text-strong)' }}>
            {s.from.city}
          </Typography>
          <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
            {s.from.stamp}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant='Body/S-SemiBold' sx={{ color: 'var(--text-strong)' }}>
            {s.to.city}
          </Typography>
          <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
            {s.to.stamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default function TrackingSection() {
  return (
    <Box id={SECTION_IDS.TRACKING} className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={'Why it matters'}
          title={'A few rupees per shipment'}
          accent={'adds up fast.'}
          subtitle={"Unchecked weight overcharges scale straight with your volume.This is what you'd leave on the table in a year."}
          size='md'
        />
          <ShipmentTrackingHero/>
      </Box>
    </Box>
  )
}
