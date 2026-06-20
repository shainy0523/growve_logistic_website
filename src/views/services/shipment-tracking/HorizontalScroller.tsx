'use client'

import { ReactNode } from 'react'
import { Box } from '@mui/material'
import { keyframes } from '@mui/system'
import CourierRankCard, {
  CourierStatus,
} from '@/components/miscellaneous/CourierRankCard'

export interface CourierItem {
  name: string
  rank: string
  status: CourierStatus
  icon?: ReactNode
  iconBg?: string
}

interface HorizontalScrollerProps {
  /** Courier cards to scroll. Defaults to a representative set. */
  couriers?: CourierItem[]
  /** Seconds for one full loop. Lower = faster. */
  speed?: number
}

const DEFAULT_COURIERS: CourierItem[] = [
  { name: 'Delhivery', rank: 'Rank #1', status: 'Good', iconBg: '#000' },
  { name: 'DTDC', rank: 'Rank #2', status: 'Good', iconBg: '#07287F' },
  { name: 'BlueDart', rank: 'Rank #3', status: 'Attention', iconBg: '#0174B7' },
  { name: 'Shadowfax', rank: 'Rank #4', status: 'Attention', iconBg: '#000' },
  { name: 'Xpressbees', rank: 'Rank #5', status: 'Failed', iconBg: '#07287F' },
  { name: 'Amazon', rank: 'Rank #6', status: 'Failed', iconBg: '#231F20' },
  { name: 'Ekart', rank: 'Rank #7', status: 'Good', iconBg: '#F5C518' },
]

const scrollX = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`

function MarqueeRow({
  items,
  reverse,
  speed,
}: {
  items: CourierItem[]
  reverse: boolean
  speed: number
}) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const loop = [...items, ...items]

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        // Fade items as they enter/leave the edges; keep the centre crisp.
        maskImage:
          'linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)',
        '&:hover .hs-track': { animationPlayState: 'paused' },
      }}
    >
      <Box
        className="hs-track"
        sx={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          animation: `${scrollX} ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        {loop.map((courier, index) => (
          <Box key={`${courier.name}-${index}`} sx={{ width: 264, flexShrink: 0 }}>
            <CourierRankCard
              name={courier.name}
              rank={courier.rank}
              status={courier.status}
              icon={courier.icon}
              iconBg={courier.iconBg}
              sx={{
                border: '1px solid #EAEAEC',
                boxShadow: '0px 8px 24px rgba(0,0,0,0.04)',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function HorizontalScroller({
  couriers = DEFAULT_COURIERS,
  speed = 30,
}: HorizontalScrollerProps) {
  // Bottom row uses a reversed order for visual variety.
  const bottomRow = [...couriers].reverse()

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      {/* Top row: scrolls left → right */}
      <MarqueeRow items={couriers} reverse speed={speed} />
      {/* Bottom row: scrolls right → left */}
      <MarqueeRow items={bottomRow} reverse={false} speed={speed} />
    </Box>
  )
}
