import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FOOTER } from './data/landing.data'
import { SECTION_IDS } from '@/utils/constant'
import Image from 'next/image'

const linkSx = {
  fontSize: '0.7125rem',
  color: 'var(--text-on-dark-muted)',
  fontWeight: 400,
  textDecoration: 'none',
  transition: 'color 0.15s ease',
  '&:hover': { color: 'var(--brand-primary)' },
}

const columnTitleSx = {
  letterSpacing: '0.24em',
  color: 'var(--brand-primary)',
  textTransform: 'uppercase' as const,
}

export default function LandingFooter() {
  return (
    <Box
      component='footer'
      id={SECTION_IDS.FOOTER}
      sx={{
        backgroundColor: 'var(--surface-dark)',
        color: 'var(--text-on-dark)',
        pt: { xs: 6, md: 9 },
        pb: 3,
      }}
    >
      <Box className='landing-container'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'minmax(220px, 1.2fr) 1.1fr 1.4fr 0.9fr' },
            gap: { xs: 5, md: 6 },
            pb: { xs: 5, md: 7 },
          }}
        >
          <Box className='flex flex-col'>
            <Image
              src='/images/footer-logo.png'
              width={120}
              height={40}
              alt='footer-logo'
            />
            <Typography
              variant='Body/S-Regular'
              sx={{ mt: 1, color: 'var(--text-on-dark-muted)', lineHeight: 1.6, maxWidth: 240 }}
            >
              {FOOTER.tagline}
            </Typography>
          </Box>

          <Box>
            <Typography variant='Body/XS-SemiBold' sx={columnTitleSx}>
              SERVICES
            </Typography>
            <Box className='mt-3' sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {FOOTER.services.map((s) => (
                <Box key={s} component={Link} href='#' sx={linkSx}>
                  {s}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant='Body/XS-SemiBold' sx={columnTitleSx}>
              OFFICE
            </Typography>
            <Box className='mt-2' sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
              <Typography variant='Body/S-Regular' sx={{ ...linkSx, lineHeight: 1.6, maxWidth: 280 }}>
                {FOOTER.office.address}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography variant='Body/S-Regular' sx={linkSx}>
                  Email: {FOOTER.office.email}
                </Typography>
                <Typography variant='Body/S-Regular' sx={linkSx}>
                  {FOOTER.office.phone}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant='Body/XS-SemiBold' sx={columnTitleSx}>
              NAVIGATE
            </Typography>
            <Box className='mt-2' sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {FOOTER.navigate.map((n) => (
                <Box key={n.label} component={Link} href={n.href} sx={linkSx}>
                  {n.label}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Typography variant='Body/S-Regular' sx={{ color: 'rgba(255,255,255,0.55)' }}>
            {FOOTER.copyright}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {FOOTER.legal.map((l, i) => (
              <Box key={l.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box component={Link} href={l.href} sx={{ ...linkSx, color: 'rgba(255,255,255,0.55)' }}>
                  {l.label}
                </Box>
                {i < FOOTER.legal.length - 1 && (
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.35)' }} />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
