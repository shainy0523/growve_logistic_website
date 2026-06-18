import { Box, Typography } from '@mui/material'

interface StatsCardProps {
  value: string
  title: string
  description: string
}

export default function StatsCard({
  value,
  title,
  description,
}: StatsCardProps) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: '#F5F5F6',
        borderRadius: '8px',
        border: '1px solid #EAEAEC',
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
          color: '#000',
        }}
      >
        {value}
      </Typography>

      <Box>
        <Typography
          sx={{
            fontFamily: 'Dai Banna SIL, sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            color: '#444050',
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '21px',
            color: '#6D6B77',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}