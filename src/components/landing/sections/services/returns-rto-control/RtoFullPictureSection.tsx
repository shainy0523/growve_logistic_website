'use client'

import { Box, Typography } from '@mui/material'
import { motion, type Variants } from 'framer-motion'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const body = 'Nunito Sans, sans-serif'

/* ---- dynamic data ---- */

const totalRtoOrders = '1,000'

type ReasonRow = {
  label: string
  color: string
  products: string
  percent: number
}

const rtoReasons: ReasonRow[] = [
  { label: 'Customer refused / RTO request', color: '#FBC942', products: '110 products', percent: 11 },
  { label: '3 failed delivery attempts', color: '#FDEAB7', products: '80 products', percent: 8 },
  { label: 'Address undeliverable', color: '#000000', products: '70 products', percent: 7 },
  { label: 'Shipment damaged', color: '#6D6B77', products: '60 products', percent: 6 },
  { label: 'Other / unknown', color: '#EBEBED', products: '680 products', percent: 68 },
]

type FinancialRow = {
  title: string
  subtitle: string
  value: string
}

const rtoRate = {
  value: '6.2%',
  note: 'Target <5% · Industry avg 8–12%',
}

const financialRows: FinancialRow[] = [
  { title: 'Forward shipping cost', subtitle: 'per returned order wasted', value: '₹1116' },
  { title: 'Reverse logistics cost', subtitle: 'COD recovery + handling', value: '₹1488' },
  { title: 'Total RTO liability', subtitle: 'Estimated this period', value: '₹2604' },
]

/* ---- shared animation config ---- */

// once: false → animations replay every time the section scrolls back into view
const viewport = { once: true, amount: 0.4 } as const

// container that staggers its animated children into view
const rowGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

// individual row: fade + slide up
const rowItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

// stacked-bar segment: grow horizontally from the left
const barSegment: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ---- components ---- */

function ReasonBreakdownCard() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      sx={{
        flex: { xs: '1 1 100%', md: '1 1 0' },
        minWidth: 0,
        p: '12.91px',
        background: '#FEFEFE',
        borderRadius: '9.69px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12.91px',
      }}
    >
      {/* header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3.23px', pb: '3.23px' }}>
        <Typography sx={{ color: '#000', fontFamily: body, fontSize: '12.91px', fontWeight: 700, lineHeight: '15.5px' }}>
          RTO reason breakdown
        </Typography>
        <Typography sx={{ color: '#8D8A94', fontFamily: body, fontSize: '9.69px', fontWeight: 600, lineHeight: '12.59px' }}>
          Why shipments are being returned
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '19.37px' }}>
        {/* total */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Typography sx={{ color: '#757575', fontFamily: body, fontSize: '11.3px', fontWeight: 400, lineHeight: '14.12px' }}>
            Total RTO Orders
          </Typography>
          <Typography sx={{ color: 'rgba(0,0,0,0.2)', fontFamily: body, fontSize: '19.37px', fontWeight: 700, lineHeight: '21.31px' }}>
            {totalRtoOrders}
          </Typography>
        </Box>

        {/* stacked bar */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={rowGroup}
          sx={{
            height: '37.94px',
            overflow: 'hidden',
            borderRadius: '6.46px',
            display: 'flex',
            alignItems: 'center',
            gap: '3.23px',
          }}
        >
          {rtoReasons.map((r) => (
            <Box
              key={r.label}
              component={motion.div}
              variants={barSegment}
              sx={{
                flex: `${r.percent} 1 0`,
                alignSelf: 'stretch',
                background: r.color,
                transformOrigin: 'left center',
              }}
            />
          ))}
        </Box>

        {/* legend rows */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={rowGroup}
          sx={{ display: 'flex', flexDirection: 'column', gap: '12.91px', py: '6.46px' }}
        >
          {rtoReasons.map((r) => (
            <Box
              key={r.label}
              component={motion.div}
              variants={rowItem}
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Box sx={{ flex: '1 1 0', minWidth: 0, display: 'flex', alignItems: 'center', gap: '6.46px' }}>
                <Box sx={{ width: '8.07px', height: '8.07px', borderRadius: '4.84px', background: r.color, flexShrink: 0 }} />
                <Typography sx={{ color: '#444050', fontFamily: body, fontSize: '11.3px', fontWeight: 600, lineHeight: '14.12px' }}>
                  {r.label}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '106.54px',
                  px: '1.61px',
                  py: '3.23px',
                  background: '#F5F5F6',
                  borderRadius: '3.23px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '6.46px',
                  flexShrink: 0,
                }}
              >
                <Typography sx={{ color: '#6D6B77', fontFamily: body, fontSize: '9.69px', fontWeight: 400, lineHeight: '12.59px' }}>
                  {r.products}
                </Typography>
                <Typography sx={{ color: '#000', fontFamily: body, fontSize: '9.69px', fontWeight: 700, lineHeight: '12.59px' }}>
                  {r.percent}%
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

function FinancialImpactCard() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      sx={{
        width: { xs: '100%', md: '305.9px' },
        flexShrink: 0,
        p: '12.91px',
        background: '#FFF',
        borderRadius: '9.69px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12.91px',
      }}
    >
      {/* header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3.23px', pb: '3.23px' }}>
        <Typography sx={{ color: '#000', fontFamily: body, fontSize: '12.91px', fontWeight: 700, lineHeight: '15.5px' }}>
          RTO financial impact
        </Typography>
        <Typography sx={{ color: '#8D8A94', fontFamily: body, fontSize: '9.69px', fontWeight: 600, lineHeight: '12.59px' }}>
          Cost of returns this period
        </Typography>
      </Box>

      <Box
        component={motion.div}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={rowGroup}
        sx={{ display: 'flex', flexDirection: 'column', gap: '12.91px', pb: '6.46px' }}
      >
        {/* rate */}
        <Box component={motion.div} variants={rowItem} sx={{ display: 'flex', flexDirection: 'column', gap: '4.84px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6.46px' }}>
            <Typography sx={{ color: '#444050', fontFamily: body, fontSize: '8.07px', fontWeight: 600, lineHeight: '10.49px' }}>
              Current RTO rate
            </Typography>
            <Typography sx={{ color: '#E64449', fontFamily: body, fontSize: '16.14px', fontWeight: 700, lineHeight: '19.37px' }}>
              {rtoRate.value}
            </Typography>
          </Box>
          <Typography sx={{ color: '#8D8A94', fontFamily: body, fontSize: '8.07px', fontWeight: 400, lineHeight: '10.49px' }}>
            {rtoRate.note}
          </Typography>
        </Box>

        <Box sx={{ height: 0, borderTop: '0.81px solid #EAEAEC' }} />

        {/* cost rows */}
        {financialRows.map((row) => (
          <Box
            key={row.title}
            component={motion.div}
            variants={rowItem}
            sx={{
              p: '12.91px',
              background: '#F5F5F6',
              borderRadius: '9.69px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '9.69px',
            }}
          >
            <Box sx={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3.23px', pb: '3.23px' }}>
              <Typography sx={{ color: '#444050', fontFamily: body, fontSize: '9.69px', fontWeight: 600, lineHeight: '12.59px' }}>
                {row.title}
              </Typography>
              <Typography sx={{ color: '#8D8A94', fontFamily: body, fontSize: '9.69px', fontWeight: 400, lineHeight: '12.59px' }}>
                {row.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                px: '8.07px',
                py: '4.84px',
                background: '#FFF',
                borderRadius: '6.46px',
                border: '0.81px solid #E1E1E4',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <Typography sx={{ color: '#000', fontFamily: body, fontSize: '9.69px', fontWeight: 600, lineHeight: '9.69px', textAlign: 'center' }}>
                {row.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function RtoFullPictureSection() {
  return (
    <Box
      sx={{
        background: '#FFF',
        overflow: 'hidden',
        pt: { xs: '80px', md: '144px' },
        pb: '100px',
      }}
    >
      <Box
        className="landing-container"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}
      >
        {/* heading */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          sx={{ width: '100%' }}
        >
          <SectionHeading
            variant="light"
            align="center"
            size="lg"
            eyebrow="the full picture"
            title={"Why orders come\nback — and"}
            accent="what it costs."
            subtitle={"The same RTO breakdown and liability your finance\nteam sees inside Growve."}
          />
        </Box>

        {/* dashboard card */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          sx={{
            width: '100%',
            // maxWidth: 1052,
            px: '16px',
            py: '48px',
            background: '#F5F5F6',
            overflow: 'hidden',
            borderRadius: '12px',
            border: '1px solid #EAEAEC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'stretch',
              gap: '16.14px',
              width: '100%',
              maxWidth: 950,
            }}
          >
            <ReasonBreakdownCard />
            <FinancialImpactCard />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
