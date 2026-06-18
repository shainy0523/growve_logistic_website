import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'

interface MetricCardProps {
  label: string
  value: string
  delta: string
  deltaPositive?: boolean
}

function MetricCard({ label, value, delta, deltaPositive = true }: MetricCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        minWidth: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'var(--text-subtitle)' }}>
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: '4px',
            backgroundColor: 'var(--color-yellow-opacity-main)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon icon='mdi:chart-line-variant' fontSize={10} color='#B5870A' />
        </Box>
        <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--text-subtitle)' }}>
          {label}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-strong)', lineHeight: 1.1 }}>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
          vs Last Period
        </Typography>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25 }}>
          <Typography
            variant='Body/Caption/M-SemiBold'
            sx={{ color: deltaPositive ? 'var(--color-success-dark)' : 'var(--color-error)' }}
          >
            {delta}
          </Typography>
          <Icon
            icon={deltaPositive ? 'mdi:arrow-up' : 'mdi:arrow-down'}
            fontSize={10}
            color={deltaPositive ? '#24B364' : '#E64449'}
          />
        </Box>
      </Box>
    </Box>
  )
}

interface CourierCardProps {
  name: string
  status: 'Good' | 'Attention' | 'Critical'
  deliveryRate: string
  firstAttempt: string
  transitTime: string
  rtoRate: string
  ndr: string
  volume: string
}

const STATUS_COLOR: Record<CourierCardProps['status'], { fg: string; bg: string }> = {
  Good: { fg: '#24B364', bg: '#EEFBF3' },
  Attention: { fg: '#B5870A', bg: '#FEF6E1' },
  Critical: { fg: '#E64449', bg: '#FFE2E3' },
}

function CourierCard(p: CourierCardProps) {
  const statusStyle = STATUS_COLOR[p.status]
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        minWidth: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: '6px',
              backgroundColor: '#1F1F1F',
              color: '#FBC942',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.625rem',
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            {p.name[0]}
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--text-strong)', display: 'block' }}>
              {p.name}
            </Typography>
            <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
              FedEx
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            px: 0.875,
            py: 0.25,
            borderRadius: '999px',
            backgroundColor: statusStyle.bg,
          }}
        >
          <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: statusStyle.fg }} />
          <Typography variant='Body/Caption/M-SemiBold' sx={{ color: statusStyle.fg }}>
            {p.status}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.625 }}>
        <Stat label='Delivery Rate' value={p.deliveryRate} />
        <Stat label='First Attempt:' value={p.firstAttempt} barPct={parseFloat(p.firstAttempt)} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, pt: 0.5, borderTop: '1px solid var(--border-subtle)' }}>
        <MiniStat label='Transit Time' value={p.transitTime} />
        <MiniStat label='RTO Rate' value={p.rtoRate} />
        <MiniStat label='NDR Open' value={p.ndr} />
        <MiniStat label='Volume Share' value={p.volume} />
      </Box>
    </Box>
  )
}

function Stat({ label, value, barPct }: { label: string; value: string; barPct?: number }) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
        <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
          {label}
        </Typography>
        <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--text-strong)' }}>
          {value}
        </Typography>
      </Box>
      {barPct !== undefined && (
        <Box sx={{ width: '100%', height: 4, backgroundColor: 'var(--surface-soft)', borderRadius: 2 }}>
          <Box sx={{ width: `${barPct}%`, height: '100%', backgroundColor: 'var(--brand-primary)', borderRadius: 2 }} />
        </Box>
      )}
    </Box>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)', display: 'block' }}>
        {label}
      </Typography>
      <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--text-strong)' }}>
        {value}
      </Typography>
    </Box>
  )
}

const SIDEBAR_ITEMS = [
  { icon: 'mdi:view-dashboard-outline', label: 'Dashboard', active: true },
  { icon: 'mdi:truck-outline', label: 'Shipments' },
  { icon: 'mdi:keyboard-return', label: 'Returns' },
  { icon: 'mdi:alert-octagon-outline', label: 'NDR' },
  { icon: 'mdi:wallet-outline', label: 'Wallet & Payments' },
  { icon: 'mdi:map-marker-path', label: 'Shipment Tracking' },
  { icon: 'mdi:chart-bar', label: 'Analytics' },
  { icon: 'mdi:scale-balance', label: 'Weight Scanner' },
  { icon: 'mdi:receipt-text-outline', label: 'Invoices & Billing' },
]

const TABLE_ROWS = [
  { name: 'Delhivery', vol: 60, dr: '96.2%', fa: '91.4%', tt: '2.1 Days', rto: '2.8%', cost: '₹48', status: 'Good' as const },
  { name: 'DTDC',      vol: 34, dr: '93.1%', fa: '88.2%', tt: '3 Days',   rto: '4.1%', cost: '₹38', status: 'Good' as const },
  { name: 'BlueDart',  vol: 30, dr: '88.4%', fa: '84.1%', tt: '3.6 Days', rto: '7.2%', cost: '₹32', status: 'Attention' as const },
  { name: 'Shadowfax', vol: 26, dr: '84.6%', fa: '81.4%', tt: '4.2 Days', rto: '9.1%', cost: '₹28', status: 'Attention' as const },
]

export default function HeroDashboard() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1100,
        mx: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          backgroundColor: '#0B0B0F',
          color: '#FFFFFF',
          p: 2,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pb: 1, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '6px',
              backgroundColor: 'var(--brand-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1F1F1F',
              fontWeight: 800,
              fontSize: '0.75rem',
            }}
          >
            G
          </Box>
          <Box>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.06em' }}>
              GROWVE
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600, fontSize: '0.5rem', letterSpacing: '0.18em' }}>
              LOGISTICS
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.75, px: 0.5 }}>
          <Box sx={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--brand-primary)' }} />
          <Box>
            <Typography sx={{ color: '#FFFFFF', fontSize: '0.6875rem', fontWeight: 700 }}>Vinayak Lad</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.5625rem' }}>Admin</Typography>
          </Box>
        </Box>

        {SIDEBAR_ITEMS.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '0.6875rem',
              fontWeight: item.active ? 700 : 500,
              color: item.active ? '#1F1F1F' : 'rgba(255,255,255,0.7)',
              backgroundColor: item.active ? 'var(--brand-primary)' : 'transparent',
              borderRadius: '6px',
              px: 1,
              py: 0.625,
            }}
          >
            <Icon icon={item.icon} fontSize={14} />
            {item.label}
          </Box>
        ))}

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', mt: 1, pt: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <SidebarFoot icon='mdi:cog-outline' label='Setup & Manage' />
          <SidebarFoot icon='mdi:bell-outline' label='Notification' badge='5' />
          <SidebarFoot icon='mdi:tune-variant' label='Settings' />
        </Box>
      </Box>

      {/* Main */}
      <Box sx={{ p: { xs: 2, md: 2.5 }, display: 'flex', flexDirection: 'column', gap: 1.75, backgroundColor: '#FFFFFF' }}>
        {/* Toolbar */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Box>
            <Typography sx={{ color: 'var(--text-strong)', fontWeight: 800, fontSize: '1rem' }}>Dashboard</Typography>
            <Typography variant='Body/Caption/M-Regular' sx={{ color: 'var(--text-subtitle)' }}>
              Wednesday, 8 April 2026 · Last refreshed 12:10
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Pill>Domestic</Pill>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, backgroundColor: 'var(--surface-muted)', p: 0.375, borderRadius: 'var(--radius-md)' }}>
              <PillButton active>7 Days</PillButton>
              <PillButton>30 Days</PillButton>
              <PillButton>Quarter</PillButton>
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                backgroundColor: '#1F1F1F',
                color: '#FFFFFF',
                px: 1.25,
                py: 0.5,
                borderRadius: 'var(--radius-md)',
                fontSize: '0.6875rem',
                fontWeight: 700,
              }}
            >
              <Icon icon='mdi:plus' fontSize={12} />
              Create Order
            </Box>
            <Pill>₹ 0.00</Pill>
          </Box>
        </Box>

        {/* Metrics */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }, gap: 1 }}>
          <MetricCard label='Delivery Success Rate' value='91.4%' delta='+0.8pp' />
          <MetricCard label='First Attempt Delivery' value='84.2%' delta='+1.3pp' />
          <MetricCard label='Avg Transit Time' value='3.4 days' delta='+0.2%' />
          <MetricCard label='NDR Pending' value='24' delta='SLA: 4 at Risk' deltaPositive={false} />
          <MetricCard label='RTO Rate' value='6.2%' delta='+4.57%' deltaPositive={false} />
        </Box>

        {/* Courier cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 1 }}>
          <CourierCard name='Delhivery' status='Good' deliveryRate='96.2%' firstAttempt='91.4%' transitTime='2.1 Days' rtoRate='2.8%' ndr='04' volume='34%' />
          <CourierCard name='DTDC' status='Attention' deliveryRate='93.1%' firstAttempt='88.2%' transitTime='3.0 Days' rtoRate='4.1%' ndr='06' volume='22%' />
          <CourierCard name='Xpressbees' status='Attention' deliveryRate='88.4%' firstAttempt='83.1%' transitTime='3.6 days' rtoRate='7.2%' ndr='08' volume='24%' />
          <CourierCard name='Ekart' status='Critical' deliveryRate='79.1%' firstAttempt='74.2%' transitTime='4.8 days' rtoRate='12.4%' ndr='04' volume='8%' />
        </Box>

        {/* Carrier comparison */}
        <Box sx={{ borderTop: '1px solid var(--border-subtle)', pt: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Typography sx={{ color: 'var(--text-strong)', fontWeight: 700, fontSize: '0.875rem' }}>
              Carrier Comparison
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Pill>All</Pill>
              <Pill>Courier: All</Pill>
            </Box>
          </Box>
          <Box
            component='table'
            sx={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.6875rem',
              '& th, & td': { py: 0.875, px: 1, textAlign: 'left' },
              '& th': { color: 'var(--text-subtitle)', fontWeight: 600, borderBottom: '1px solid var(--border-subtle)' },
              '& td': { borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-primary)' },
            }}
          >
            <Box component='thead'>
              <Box component='tr'>
                <Box component='th'>Carrier</Box>
                <Box component='th'>Volume Share</Box>
                <Box component='th'>Delivery Rate</Box>
                <Box component='th'>First Attempt</Box>
                <Box component='th'>Avg. Transit</Box>
                <Box component='th'>RTO Rate</Box>
                <Box component='th'>Cost/Shipment</Box>
                <Box component='th'>Status</Box>
              </Box>
            </Box>
            <Box component='tbody'>
              {TABLE_ROWS.map((r) => (
                <Box component='tr' key={r.name}>
                  <Box component='td'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '4px',
                          backgroundColor: '#1F1F1F',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon icon='mdi:truck-fast' fontSize={11} color='#FBC942' />
                      </Box>
                      <Typography variant='Body/Caption/M-SemiBold' sx={{ color: 'var(--text-strong)' }}>
                        {r.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Box component='td'>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 60, height: 4, backgroundColor: 'var(--surface-soft)', borderRadius: 2 }}>
                        <Box sx={{ width: `${r.vol}%`, height: '100%', backgroundColor: 'var(--brand-primary)', borderRadius: 2 }} />
                      </Box>
                      <Typography variant='Body/Caption/M-SemiBold'>{r.vol}%</Typography>
                    </Box>
                  </Box>
                  <Box component='td'>{r.dr}</Box>
                  <Box component='td'>{r.fa}</Box>
                  <Box component='td'>{r.tt}</Box>
                  <Box component='td'>{r.rto}</Box>
                  <Box component='td'>{r.cost}</Box>
                  <Box component='td'>
                    <StatusPill status={r.status} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        px: 1,
        py: 0.5,
        fontSize: '0.6875rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </Box>
  )
}

function PillButton({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <Box
      sx={{
        px: 1.25,
        py: 0.5,
        borderRadius: '6px',
        fontSize: '0.6875rem',
        fontWeight: 700,
        backgroundColor: active ? '#1F1F1F' : 'transparent',
        color: active ? '#FFFFFF' : 'var(--text-primary)',
        cursor: 'default',
      }}
    >
      {children}
    </Box>
  )
}

function SidebarFoot({ icon, label, badge }: { icon: string; label: string; badge?: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: '0.6875rem',
        color: 'rgba(255,255,255,0.7)',
        px: 1,
        py: 0.5,
      }}
    >
      <Icon icon={icon} fontSize={14} />
      <Box sx={{ flex: 1 }}>{label}</Box>
      {badge && (
        <Box
          sx={{
            backgroundColor: 'var(--brand-primary)',
            color: '#1F1F1F',
            fontWeight: 700,
            fontSize: '0.5625rem',
            borderRadius: '999px',
            px: 0.625,
            py: 0.125,
          }}
        >
          {badge}
        </Box>
      )}
    </Box>
  )
}

function StatusPill({ status }: { status: 'Good' | 'Attention' | 'Critical' }) {
  const s = STATUS_COLOR[status]
  return (
    <Box
      sx={{
        display: 'inline-flex',
        px: 0.875,
        py: 0.25,
        borderRadius: '999px',
        backgroundColor: s.bg,
        color: s.fg,
        fontSize: '0.6875rem',
        fontWeight: 700,
      }}
    >
      {status}
    </Box>
  )
}
