'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

interface Shipment {
  trackingId?: string
  status?: string
  onTime?: boolean
  courierName?: string
  courierCompany?: string
  originCity?: string
  originDate?: string
  destCity?: string
  destDate?: string
  progressPct?: number
}

const DEFAULTS: Required<Shipment> = {
  trackingId: 'TN29A78463',
  status: 'In Transit',
  onTime: true,
  courierName: 'Arjun Patel',
  courierCompany: 'Blue Dart Express',
  originCity: 'Chennai, TN, IND',
  originDate: 'May 12, 2026 – 08:00 AM',
  destCity: 'Mumbai, MH, IND',
  destDate: 'May 15, 2026 – 11:00 AM',
  progressPct: 50,
}

const FONT = "'Nunito Sans', var(--font-primary), sans-serif"

export default function LiveTrackingCard(props: Shipment) {
  const s = { ...DEFAULTS, ...props }
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setProgress(s.progressPct), 400)
    return () => clearTimeout(t)
  }, [s.progressPct])

  return (
    <div
      style={{
        // root em base — all child em values scale with container size
        fontSize: 'clamp(10px, 0.97vw, 16px)',
        background: '#ffffff',
        borderRadius: 14,
        padding: '0.57em 0.86em 0.71em',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.71em',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: FONT,
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
          <span style={{ fontSize: '1em', fontWeight: 700, color: '#111827', letterSpacing: -0.2 }}>
            #{s.trackingId}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.29em' }}>
            <span
              style={{
                fontSize: '0.71em',
                fontWeight: 600,
                background: '#fef3dc',
                color: '#b45309',
                borderRadius: 5,
                padding: '0.14em 0.57em',
                whiteSpace: 'nowrap',
              }}
            >
              {s.status}
            </span>
            {s.onTime && (
              <span style={{ fontSize: '0.79em', color: '#6b7280' }}>On Time</span>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: '0.71em', color: '#9ca3af', marginBottom: '0.14em' }}>Courier:</div>
          <div style={{ fontSize: '0.86em', fontWeight: 700, color: '#111827' }}>{s.courierName}</div>
          <div style={{ fontSize: '0.71em', color: '#9ca3af', marginTop: '0.07em' }}>{s.courierCompany}</div>
        </div>
      </div>

      {/* Progress track */}
      <div className='relative flex items-center' style={{ paddingTop: '0.86em', paddingBottom: '0.86em' }}>
        {/* Gray full track */}
        <div
          style={{
            position: 'absolute', left: 0, right: 0, height: 3,
            background: '#e5e7eb', borderRadius: 2,
          }}
        />
        {/* Filled orange portion */}
        <div
          style={{
            position: 'absolute', left: 0, width: `${progress}%`, height: 3,
            background: '#f5a623', borderRadius: 2,
            transition: 'width 1.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        {/* Origin dot */}
        <div
          style={{
            position: 'absolute', left: 0, width: '0.86em', height: '0.86em',
            borderRadius: '50%', background: '#f5a623',
            boxShadow: '0 0 0 3px rgba(245,166,35,0.2)', zIndex: 2,
          }}
        />
        {/* Moving truck */}
        <div
          style={{
            position: 'absolute',
            left: `${progress}%`,
            transform: 'translateX(-50%)',
            width: '2em', height: '2em', borderRadius: '50%',
            background: '#f5a623',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 0 5px rgba(245,166,35,0.15)',
            zIndex: 3,
            transition: 'left 1.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <Icon icon='mdi:truck' color='#ffffff' width='1.07em' height='1.07em' />
        </div>
        {/* Destination dot */}
        <div
          style={{
            position: 'absolute', right: 0, width: '0.86em', height: '0.86em',
            borderRadius: '50%', background: '#fff',
            border: '2.5px solid #d1d5db', zIndex: 2, boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Locations */}
      <div className='flex justify-between items-start' style={{ paddingLeft: '0.14em', paddingRight: '0.14em' }}>
        <div>
          <div style={{ fontSize: '0.93em', fontWeight: 700, color: '#111827' }}>{s.originCity}</div>
          <div style={{ fontSize: '0.71em', color: '#9ca3af', marginTop: '0.14em' }}>{s.originDate}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.93em', fontWeight: 700, color: '#111827' }}>{s.destCity}</div>
          <div style={{ fontSize: '0.71em', color: '#9ca3af', marginTop: '0.14em' }}>{s.destDate}</div>
          <div style={{ fontSize: '0.71em', color: '#9ca3af' }}>(estimated)</div>
        </div>
      </div>
    </div>
  )
}
