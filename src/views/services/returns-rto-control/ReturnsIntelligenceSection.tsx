'use client'

import {
  Box,
  Typography,
  Chip,
  Checkbox,
  LinearProgress,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
import { ArrowDropDown, UnfoldMore, Tune } from '@mui/icons-material'
import Image from 'next/image'

const display = 'var(--font-dai-banna), sans-serif'
const body = 'Nunito Sans, sans-serif'

const t = {
  black: '#000000',
  white: '#FFFFFF',
  secondary: '#6D6B77',
  subtitle: '#8D8A94',
  secMain: '#E1E1E4',
  secLight: '#EBEBED',
  textPrimary: '#444050',
  yellow: '#FBC942',
}

const STATUS: Record<string, { bg: string; dot: string }> = {
  Good: { bg: '#CBF2DC', dot: '#28C76F' },
  Attention: { bg: '#FEF2D2', dot: '#FF9F43' },
  Critical: { bg: '#FFD4D5', dot: '#FF7074' },
}

const LOGOS: Record<string, string> = {
  Delhivery: '/images/common/delhivery.svg',
  DTDC: '/images/common/dtdc.svg',
  Shadowfax: '/images/common/shadowfox.svg',
  Xpressbees: '/images/common/xpressbees.svg',
  Amazon: '/images/common/amazon.svg',
  Ekart: '/images/common/ekart.svg',
}

const CARRIERS = [
  { name: 'Delhivery', color: '#1A1A1A', share: 60, rate: '96.2%', first: '91.4%', transit: '2.1 Days', rto: '2.8%', cost: '₹48', status: 'Good' },
  { name: 'DTDC', color: '#07287F', share: 34, rate: '93.1%', first: '88.2%', transit: '3 Days', rto: '4.1%', cost: '₹38', status: 'Good' },
  { name: 'BlueDart', color: '#0174B7', share: 30, rate: '88.4%', first: '84.1%', transit: '3.6 Days', rto: '7.2%', cost: '₹32', status: 'Attention' },
  { name: 'Shadowfax', color: '#1A1A1A', share: 25, rate: '84.8%', first: '81.4%', transit: '4.2 Days', rto: '9.1%', cost: '₹28', status: 'Attention' },
  { name: 'Xpressbees', color: '#07287F', share: 20, rate: '98.2%', first: '79.9%', transit: '4.8 Days', rto: '12.4%', cost: '₹26', status: 'Critical' },
  { name: 'Amazon', color: '#231F20', share: 12, rate: '82.3%', first: '76.1%', transit: '5 Days', rto: '4.8%', cost: '₹34', status: 'Critical' },
  { name: 'Ekart', color: '#0F4C81', share: 8, rate: '79.2%', first: '91.9%', transit: '5.2 Days', rto: '8.9%', cost: '₹44', status: 'Good' },
]

const HEAD = ['Carrier', 'Volume Share', 'Delivery Rate', 'First Attempt', 'Avg. Transit', 'RTO Rate', 'Cost/Shipment', 'Status']

const headCellSx = {
  fontFamily: body,
  fontSize: 10,
  fontWeight: 400,
  color: t.black,
  border: 0,
  borderBottom: `1px solid ${t.secMain}`,
  py: 1.5,
  whiteSpace: 'nowrap' as const,
}
const bodyCellSx = {
  fontFamily: body,
  fontSize: 11,
  color: t.black,
  border: 0,
  borderBottom: `1px solid ${t.secMain}`,
  py: 1.5,
}

const FEATURES = [
  {
    title: 'Verify COD orders before they ship',
    body: 'Auto confirm risky COD orders over WhatsApp — unconfirmed ones are held, not dispatched into an RTO.',
  },
  {
    title: 'Auto approve and route returns',
    body: 'Eligible returns are approved, a reverse pickup is booked, and refunds release on pickup — no manual tickets.',
  },
  {
    title: "Block the risk you've seen before",
    body: 'Turn repeat RTO pincodes and serial returners into rules — force prepaid or confirmation automatically.',
  },
]

function BrandTile({ name, color, size = 20 }: { name: string; color: string; size?: number }) {
  const logo = LOGOS[name]
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: `${size * 0.25}px`,
        bgcolor: logo ? t.white : color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        fontFamily: body,
        fontWeight: 700,
        fontSize: size * 0.45,
        color: '#fff',
      }}
    >
      {logo ? (
        <Image src={logo} alt={name} width={size} height={size} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ) : (
        name[0]
      )}
    </Box>
  )
}

function StatusBadge({ label }: { label: string }) {
  const s = STATUS[label] ?? STATUS.Good
  return (
    <Chip
      label={label}
      sx={{
        height: 20,
        borderRadius: '9px',
        bgcolor: s.bg,
        '& .MuiChip-label': { px: 1, py: 0 },
        fontFamily: body,
        fontWeight: 600,
        fontSize: 11,
        color: t.black,
      }}
    />
  )
}

function FilterChip({ label }: { label: string }) {
  return (
    <Box
      className="flex items-center gap-1 rounded-lg px-2.5 py-1.5"
      sx={{ outline: `1px solid ${t.secMain}`, outlineOffset: '-1px' }}
    >
      <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.black }}>{label}</Typography>
      <ArrowDropDown sx={{ fontSize: 16, color: t.black }} />
    </Box>
  )
}

function ComparisonPanel() {
  return (
    <Box sx={{ borderRadius: '16px', bgcolor: t.white, p: { xs: 2, md: 3 }, boxShadow: '0 24px 48px rgba(0,0,0,0.06)', overflowX: 'auto' }}>
      <Box className="mb-4 flex items-center justify-between" sx={{ minWidth: 760 }}>
        <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 16, color: t.black }}>Carrier Comparison</Typography>
        <Box className="flex items-center gap-3">
          <FilterChip label="All" />
          <FilterChip label="Courier: All" />
          <Box className="rounded-lg p-1.5" sx={{ bgcolor: t.secLight }}>
            <Tune sx={{ fontSize: 16, color: t.textPrimary }} />
          </Box>
        </Box>
      </Box>

      <Table size="small" sx={{ minWidth: 760, '& td, & th': { px: 1.25 } }}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" sx={{ ...headCellSx, width: 12 }}>
              <Checkbox size="small" sx={{ p: 0, '& svg': { fontSize: 14 } }} />
            </TableCell>
            {HEAD.map((h) => (
              <TableCell key={h} sx={headCellSx}>
                <Box className="flex items-center gap-0.5">
                  {h}
                  <UnfoldMore sx={{ fontSize: 12, color: t.black }} />
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {CARRIERS.map((c, i) => (
            <TableRow key={c.name} sx={i === CARRIERS.length - 1 ? { '& td': { borderBottom: 0 } } : undefined}>
              <TableCell padding="checkbox" sx={bodyCellSx}>
                <Checkbox size="small" sx={{ p: 0, '& svg': { fontSize: 14 } }} />
              </TableCell>
              <TableCell sx={bodyCellSx}>
                <Box className="flex items-center gap-2">
                  <BrandTile name={c.name} color={c.color} />
                  <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.black }}>{c.name}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={bodyCellSx}>
                <Box className="flex items-center gap-1.5">
                  <Box sx={{ width: 70 }}>
                    <LinearProgress
                      variant="determinate"
                      value={c.share}
                      sx={{
                        height: 6,
                        borderRadius: 10,
                        bgcolor: t.secLight,
                        '& .MuiLinearProgress-bar': { bgcolor: t.yellow, borderRadius: 10 },
                      }}
                    />
                  </Box>
                  <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.black }}>{c.share}%</Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ ...bodyCellSx, fontWeight: 400 }}>{c.rate}</TableCell>
              <TableCell sx={{ ...bodyCellSx, fontWeight: 400 }}>{c.first}</TableCell>
              <TableCell sx={{ ...bodyCellSx, fontWeight: 600 }}>{c.transit}</TableCell>
              <TableCell sx={{ ...bodyCellSx, fontWeight: 600 }}>{c.rto}</TableCell>
              <TableCell sx={{ ...bodyCellSx, fontWeight: 600 }}>{c.cost}</TableCell>
              <TableCell sx={bodyCellSx}>
                <StatusBadge label={c.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

function FeatureCard({ title, body: text }: { title: string; body: string }) {
  return (
    <Box
      sx={{
        flex: 1,
        borderRadius: '12px',
        bgcolor: t.white,
        outline: '1px solid #EAEAEC',
        outlineOffset: '-1px',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 20, color: t.black, lineHeight: 1.25 }}>{title}</Typography>
      <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>{text}</Typography>
    </Box>
  )
}

export default function ReturnsIntelligenceSection() {
  return (
    <Box sx={{ bgcolor: '#FEF6E1' }} className="py-20">
      <Box className="landing-container">
        {/* Heading */}
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: t.subtitle, mb: 2 }}>
            Decision Intelligence
          </Typography>
          <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: { xs: 32, md: 44 }, lineHeight: 1.1, color: t.black }}>
            Uncover what&apos;s
            <br />
            <Box component="span" sx={{ color: t.subtitle }}>really driving your returns.</Box>
          </Typography>
          <Typography sx={{ mt: 3, fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.5, color: t.secondary, maxWidth: 560, mx: 'auto' }}>
            Filter every return and RTO by reason, pincode, courier or value — and act on them from one board.
          </Typography>
        </Box>

        <ComparisonPanel />

        {/* Feature cards */}
        <Box sx={{ mt: 2.5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.5 }}>
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} title={f.title} body={f.body} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
