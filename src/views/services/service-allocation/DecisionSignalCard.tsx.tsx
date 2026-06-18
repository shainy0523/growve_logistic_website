import { Box, Chip, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

interface DecisionSignalCardProps {
  title: string
  description: string
  badge: string
  icon: string
}

export default function DecisionSignalCard({
  title,
  description,
  badge,
  icon,
}: DecisionSignalCardProps) {
  return (
    <Box
      sx={{
        p: '20px',
        bgcolor: '#18181E',
        border: '1px solid #44485E',
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '10px',
            border: '1px solid #7F753B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon
            icon={icon}
            width={20}
            height={20}
            color="#FBC942"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              color: '#CFCDE4',
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '21px',
              color: '#ACABC1',
            }}
          >
            {description}
          </Typography>
        </Box>

        <Chip
          label={badge}
          sx={{
            bgcolor: '#000',
            color: '#E2B53C',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            height: 24,
          }}
        />
      </Box>
    </Box>
  )
}