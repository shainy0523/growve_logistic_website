'use client'

import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
} from 'recharts'
import { Icon } from '@iconify/react'

const REVENUE_DATA = [
  { quarter: 'Q1', value: 67390, display: '₹67,390', highlight: false },
  { quarter: 'Q2', value: 84899, display: '₹84,899', highlight: true  },
  { quarter: 'Q3', value: 98922, display: '₹98,922', highlight: false },
  { quarter: 'Q4', value: 98113, display: '₹98,113', highlight: false },
]

const FONT = "'Nunito Sans', var(--font-primary), sans-serif"

// ─── SVG Semicircle Gauge ────────────────────────────────────────────────────
// viewBox + width="100%" means all coordinates & text scale with container width

function SemiCircleGauge({ percent, totalRevenue }: { percent: number; totalRevenue: string }) {
  const [animated, setAnimated] = useState(0)

  const cx = 100, cy = 100, r = 68, sw = 13
  const totalLen = Math.PI * r

  useEffect(() => {
    const t = setTimeout(() => setAnimated(percent), 350)
    return () => clearTimeout(t)
  }, [percent])

  const offset = totalLen * (1 - animated / 100)

  return (
    <svg
      viewBox='0 0 200 108'
      style={{ width: '100%', overflow: 'visible' }}
      aria-label={`Revenue gauge: ${percent}% of target`}
    >
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill='none' stroke='#e5e7eb' strokeWidth={sw} strokeLinecap='round'
      />
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill='none' stroke='#FBC942' strokeWidth={sw} strokeLinecap='round'
        strokeDasharray={totalLen} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1)' }}
      />
      {/* SVG text is in user-units; viewBox scaling makes them auto-responsive */}
      <text x={cx} y={60} textAnchor='middle' fontSize={8} fontWeight={400} fill='#9ca3af' fontFamily={FONT}>
        Total Revenue
      </text>
      <text x={cx} y={77} textAnchor='middle' fontSize={16} fontWeight={700} fill='#111827' fontFamily={FONT}>
        {totalRevenue}
      </text>
      <text x={cx} y={90} textAnchor='middle' fontSize={7.5} fontWeight={400} fill='#6b7280' fontFamily={FONT}>
        {percent}% from Target Revenue
      </text>
    </svg>
  )
}

// ─── Custom bar label ────────────────────────────────────────────────────────

function BarValueLabel(props: Record<string, unknown>) {
  const { x, y, width, height, value, index } = props as {
    x: number; y: number; width: number; height: number; value: string; index: number
  }
  const isHighlight = REVENUE_DATA[index]?.highlight
  if ((width as number) < 28) return null

  return (
    <text
      x={(x as number) + 7}
      y={(y as number) + (height as number) / 2}
      dominantBaseline='middle'
      fontSize={9}
      fill={isHighlight ? '#ffffff' : '#6b7280'}
      fontFamily={FONT}
    >
      {value}
    </text>
  )
}

// ─── Revenue Card ────────────────────────────────────────────────────────────

export default function RevenueCard({
  totalRevenue = '₹473,265',
  targetPercent = 81,
}: {
  totalRevenue?: string
  targetPercent?: number
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      style={{
        // root em base
        fontSize: 'clamp(10px, 0.97vw, 16px)',
        background: '#ffffff',
        borderRadius: 14,
        padding: '0.71em 0.86em 0.57em',
        boxShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.15em',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: FONT,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.57em' }}>
        <span style={{ fontSize: '0.93em', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Shipping Revenue
        </span>
        <div className='bg-gray-100 rounded-md p-1 flex justify-center items-center gap-1' style={{ flexShrink: 0 }}>
          {/* <span style={{ fontWeight: 500, fontSize: '0.7em', color: '#000' }}>This Year</span> */}
          <Icon icon='mdi:chevron-down' width='0.8em' className='text-black' />
        </div>
      </div>

      {/* Gauge — SVG auto-scales with container width */}
      <SemiCircleGauge percent={targetPercent} totalRevenue={totalRevenue} />

      {/* Bar chart */}
      {mounted && (
        <ResponsiveContainer width='100%' height={110}>
          <BarChart
            layout='vertical'
            data={REVENUE_DATA}
            margin={{ top: 0, right: 6, bottom: 0, left: 0 }}
            barSize={11}
            barCategoryGap='28%'
          >
            <XAxis
              type='number'
              domain={[0, 100000]}
              tickFormatter={(v) => v === 0 ? '$0' : `$${v / 1000}K`}
              tick={{ fontSize: '0.54em', fill: '#808390', fontFamily: FONT }}
              tickLine={false}
              axisLine={false}
              tickCount={5}
            />
            <YAxis
              type='category'
              dataKey='quarter'
              width={22}
              tick={{ fontSize: '0.71em', fill: '#808390', fontFamily: FONT }}
              tickLine={false}
              axisLine={false}
            />
            <Bar
              dataKey='value'
              barSize={15}
              radius={[0, 3, 3, 0]}
              isAnimationActive
              animationBegin={500}
              animationDuration={1400}
              animationEasing='ease-out'
            >
              {REVENUE_DATA.map((entry, i) => (
                <Cell key={i} fill={entry.highlight ? '#000000' : '#e5e7eb'} />
              ))}
              <LabelList dataKey='display' content={BarValueLabel as never} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
