import Box from '@mui/material/Box'
import Image from 'next/image'

interface BrandLogoProps {
  size?: number
  variant?: 'dark' | 'light'
  showText?: boolean
}

export default function BrandLogo({ size = 35, variant = 'light', showText = true }: BrandLogoProps) {
  // 'dark' = placed on a dark background → light text; 'light' = on a light surface → dark text
  const textColor = variant === 'dark' ? '#FFFFFF' : '#1F1F1F'
  const taglineColor = variant === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-subtitle)'

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '8px',
          backgroundColor: '#FBC942',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Image
          src='/images/logo2.png'
          alt='Growve'
          width={30}
          height={30}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>

      {showText && (
        <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <Box
            component='span'
            sx={{
              color: textColor,
              fontWeight: 800,
              fontSize: '1.0625rem',
              letterSpacing: '0.05em',
            }}
          >
            GROWVE
          </Box>
          <Box
            component='span'
            sx={{
              color: taglineColor,
              fontWeight: 600,
              fontSize: '0.5625rem',
              letterSpacing: '0.24em',
              marginTop: '3px',
            }}
          >
            LOGISTICS
          </Box>
        </Box>
      )}
    </Box>
  )
}
