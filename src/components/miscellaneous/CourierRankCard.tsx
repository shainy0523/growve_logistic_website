import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'

export type CourierStatus = 'Good' | 'Attention' | 'Failed'

interface CourierRankCardProps {
  /** Courier logo/icon — pass an <Icon/>, <Image/>, or any node. Falls back to the name's initial. */
  icon?: ReactNode
  /** Courier partner name, e.g. "Delhivery". */
  name: string
  /** Rank label, e.g. "Rank #3". */
  rank: string
  /** Drives the status pill colour + label. */
  status: CourierStatus
  /** Background of the icon tile (default black). */
  iconBg?: string
  /** Extra styles merged onto the card wrapper. */
  sx?: SxProps<Theme>
}

const STATUS_DOT: Record<CourierStatus, string> = {
  Good: '#28C76F',
  Attention: '#FF9F43',
  Failed: '#EA5455',
}

export default function CourierRankCard({
  icon,
  name,
  rank,
  status,
  iconBg = '#000',
  sx,
}: CourierRankCardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        p: '16px',
        bgcolor: '#FFF',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        ...sx,
      }}
    >
      <Box
        sx={{
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          borderRadius: '8px',
        }}
      >
        {/* Icon tile */}
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '8px',
            bgcolor: iconBg,
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon ?? (
            <Typography sx={{ color: '#FFF', fontSize: 14, fontWeight: 800 }}>
              {name.charAt(0)}
            </Typography>
          )}
        </Box>

        {/* Name + rank */}
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Nunito Sans, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '17.5px',
            }}
          >
            {name}
          </Typography>
          <Box sx={{ py: '2px' }}>
            <Typography
              sx={{
                color: '#737682',
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                lineHeight: '15.6px',
              }}
            >
              {rank}
            </Typography>
          </Box>
        </Box>

        {/* Status pill */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            px: '10px',
            py: '4px',
            bgcolor: '#F5F5F6',
            borderRadius: '18px',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '9999px',
              bgcolor: STATUS_DOT[status],
            }}
          />
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Nunito Sans, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              lineHeight: '15.6px',
            }}
          >
            {status}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
