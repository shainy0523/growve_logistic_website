import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  accent?: string
  subtitle?: string
  variant?: 'light' | 'dark'
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg'
}

const TITLE_SIZE_MAP = {
  sm: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
  md: { xs: '2rem',    sm: '2.5rem', md: '2.75rem' },
  lg: { xs: '2.25rem', sm: '2.75rem', md: '3rem' },
} as const

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  variant = 'light',
  align = 'center',
  size = 'md',
}: SectionHeadingProps) {
  const eyebrowColor = variant === 'dark' ? 'rgba(255,255,255,0.55)' : 'var(--text-subtitle)'
  const titleColor = variant === 'dark' ? 'var(--text-on-dark)' : 'var(--text-strong)'
  const accentColor = variant === 'dark' ? '#9191A8' : '#B5B0BC'
  const subtitleColor = variant === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)'
  // const formattedTitle =
  // title.length > 25
  //   ? `${title.slice(0, 30)}\n${title.slice(25)}`
  //   : title


  return (
    <Box sx={{ textAlign: align, mx: align === 'center' ? 'auto' : 0 }}>
      {eyebrow && (
        <Typography
          component='div'
          variant='Body/XS-SemiBold'
          sx={{
            whiteSpace: 'pre-line',
            letterSpacing: '0.32em',
            color: eyebrowColor,
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        component='h2'
        variant='Display/Section'
        sx={{
          fontSize: TITLE_SIZE_MAP[size],
          lineHeight: 1.1,
          fontWeight:500,
          letterSpacing: '-0.01em',
          color: titleColor,
          whiteSpace: "pre-line",
          fontFamily: "var(--font-dai-banna)"
        }}
      >
        {title}
        <br/>
        {accent && (
          <>
            {' '}
            <Box component='span' sx={{ color: accentColor }}>
              {accent}
            </Box>
          </>
        )}
      </Typography>

      {subtitle && (
        <Typography
          component='p'
          sx={{
            mt: 3,
            color: subtitleColor,
            maxWidth: 620,
            lineHeight:1.5,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
