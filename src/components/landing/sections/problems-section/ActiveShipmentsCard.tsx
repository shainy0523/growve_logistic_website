'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

interface Props {
  target?: number
  percentageChange?: string
  trendDirection?: 'up' | 'down'
  trendLabel?: string
}

function useAnimatedCounter(target: number, duration = 2000) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number>(undefined)
  const startRef = useRef<number>(undefined)

  useEffect(() => {
    startRef.current = undefined
    const step = (ts: number) => {
      if (startRef.current === undefined) startRef.current = ts
      const progress = Math.min((ts - startRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [target, duration])

  return value
}

export default function ActiveShipmentsCard({
  target = 1284,
  percentageChange = '+8.7%',
  trendDirection = 'up',
  trendLabel = 'from last week',
}: Props) {
  const count = useAnimatedCounter(target)

  return (
    <div
      className='rounded-[14px] bg-white flex flex-col box-border font-["DM_Sans"] shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(255,255,255,0.3)]'
      style={{
        // root em base — all child em values scale with this
        fontSize: 'clamp(10px, 0.97vw, 16px)',
        padding: '0.57em 0.86em',
        gap: '0.5em',
      }}
    >
      <span style={{ fontSize: '0.7em', fontWeight: 600, color: '#737682', letterSpacing: 0.1 }}>
        Active Shipments
      </span>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4em' }}>
          <span
            style={{
              fontSize: '1.4em',
              fontWeight: 700,
              color: '#111827',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: -0.5,
            }}
          >
            {count.toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '0.7em', color: '#737682', fontWeight: 400 }}>shipments</span>
        </div>

        <div
          style={{
            background: '#f5a623',
            borderRadius: '0.36em',
            width: '1.8em',
            height: '1.8em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 4px 10px rgba(245,166,35,0.3)',
          }}
        >
          <Icon icon='mdi:truck-delivery' color='#ffffff' width='1.1em' height='1.1em' />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35em' }}>
        <Icon
          icon={trendDirection === 'up' ? 'mdi:arrow-up-circle' : 'mdi:arrow-down-circle'}
          color={trendDirection === 'up' ? '#10b981' : '#ef4444'}
          width='0.75em'
          height='0.75em'
        />
        <span style={{ fontSize: '0.79em', fontWeight: 600, color: trendDirection === 'up' ? '#10b981' : '#ef4444' }}>
          {percentageChange}
        </span>
        <span style={{ fontSize: '0.65em', color: '#737682' }}>{trendLabel}</span>
      </div>
    </div>
  )
}
