import { Box, Typography } from '@mui/material'

interface StatsCardProps {
  value: string
  title: string
  description: string
  variant?: 'light' | 'dark'
}

export default function StatsCard({
  value,
  title,
  description,
  variant = 'light',
}: StatsCardProps) {
  const dark = variant === 'dark'

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: dark ? '#1F1F1F' : '#F5F5F6',
        borderRadius: '8px',
        border: `1px solid ${dark ? '#2E2E38' : '#EAEAEC'}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        height: '100%',
      }}
    >
      <Typography
        sx={{
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '30.8px',
          color: dark ? '#FFF' : '#000',
        }}
      >
        {value}
      </Typography>

      <Box>
        <Typography
          sx={{
            fontFamily: 'var(--font-dai-banna), sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            color: dark ? '#FFFFFF' : '#444050',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '21px',
            color: dark ? '#ACABC1' : '#6D6B77',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}