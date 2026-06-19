import { Box, Typography } from '@mui/material'

interface ImpactCardProps {
  value: string
  title: string
  description: string
}

export default function ImpactCard({
  value,
  title,
  description,
}: ImpactCardProps) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: '#18181E',
        borderRadius: '8px',
        border: '1px solid #44485E',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: '28px',
            lineHeight: '30.8px',
            fontWeight: 700,
            color: '#FFF',
          }}
        >
          {value}
        </Typography>

        <Box>
          <Typography
            sx={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              fontWeight: 500,
              color: '#CFCDE4',
              mb: 1,
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
      </Box>
    </Box>
  )
}