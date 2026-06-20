'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import BrandLogo from './ui/BrandLogo'
import { NAV_LINKS, SERVICES } from './data/landing.data'
import { APP_URLS } from '@/utils/constant'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ServicesMegaMenu from './ServicesMegaMenu'
import PrimaryCta from './ui/PrimaryCta'

export default function LandingNavbar() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  // Close the mobile drawer when the viewport grows to desktop
  useEffect(() => {
    if (isDesktop && mobileOpen) {
      closeMobile()
    }
  }, [isDesktop, mobileOpen])

  return (
    <Box
      component='header'
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <Box
        className='landing-container'
        sx={{
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Link href={'/'} aria-label='Growve Logistics home'>
          <BrandLogo size={36} />
        </Link>

        {/* Desktop nav */}
        <Box
          component='nav'
          sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          className='items-center gap-3 rounded-xl border border-black/10 bg-[#F5F5F6] p-1 backdrop-blur-[30px]'
        >
          {NAV_LINKS.map(item => {
            const isServices = item.label === 'Services'

            return (
              <Box
                key={item.label}
                sx={{
                  position: 'relative',
                  height: '100%',
                  cursor:'pointer'
                }}
              >
                {isServices ? (
                  <Box
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      disableRipple
                      endIcon={<Icon icon='mdi:chevron-down' fontSize={14} />}
                      className='!min-w-0 !rounded-lg !px-4 !py-1.5 !text-sm !font-semibold !text-black'
                    >
                      Services
                    </Button>

                    {servicesOpen && <ServicesMegaMenu />}
                  </Box>
                ) : (
                  <Button
                    component={Link}
                    href={item.href}
                    disableRipple
                    className='!min-w-0 !rounded-lg !px-4 !py-1.5 !text-sm !font-semibold !text-black'
                  >
                    {item.label}
                  </Button>
                )}
              </Box>
            )
          })}
        </Box>

        {/* Right side: CTAs + mobile hamburger */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Button
            component='a'
            href={APP_URLS.LOGIN}
            sx={{
              color: 'var(--text-strong)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'none',
              display: { xs: 'none', sm: 'inline-flex' },
              '&:hover': { backgroundColor: 'transparent', color: 'var(--text-primary)' },
            }}
          >
            Sign Up
          </Button>
          <Box sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
            <PrimaryCta
              component="a"
              href={APP_URLS.SIGNUP}
            >
              Get Started
            </PrimaryCta>
          </Box>

          {/* Hamburger — mobile only */}
          <IconButton
            aria-label='Open menu'
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: 'var(--text-strong)',
            }}
          >
            <Icon icon='mdi:menu' fontSize={26} />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={closeMobile}
        keepMounted
        sx={{ display: { xs: 'block', md: 'none' } }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '82%', sm: 360 },
              maxWidth: 400,
              p: 2.5,
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        {/* Drawer header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          <Link href='/' aria-label='Growve Logistics home' onClick={closeMobile}>
            <BrandLogo size={32} variant='dark'/>
          </Link>
          <IconButton aria-label='Close menu' onClick={closeMobile}>
            <Icon icon='mdi:close' fontSize={24} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 1 }} />

        {/* Nav links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          {NAV_LINKS.map(item => {
            const isServices = item.label === 'Services'

            if (isServices) {
              return (
                <Box key={item.label}>
                  <Button
                    fullWidth
                    disableRipple
                    onClick={() => setMobileServicesOpen(open => !open)}
                    endIcon={
                      <Icon
                        icon='mdi:chevron-down'
                        fontSize={18}
                        style={{
                          transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform .2s ease',
                        }}
                      />
                    }
                    sx={{
                      justifyContent: 'space-between',
                      px: 1.5,
                      py: 1.5,
                      color: 'var(--text-on-dark)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                  >
                    {item.label}
                  </Button>

                  <Collapse in={mobileServicesOpen} timeout='auto' unmountOnExit>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pb: 1 }}>
                      {SERVICES.map(service => (
                        <Box
                          key={service.slug}
                          component={Link}
                          href={`/services/${service.slug}`}
                          onClick={closeMobile}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            px: 1.5,
                            py: 1,
                            ml: 1,
                            borderRadius: '10px',
                            textDecoration: 'none',
                            '&:hover': { bgcolor: '#F5F5F6' },
                          }}
                        >
                          <Box
                            sx={{
                              width: 34,
                              height: 34,
                              flexShrink: 0,
                              bgcolor: 'var(--surface-dark)',
                              borderRadius: '9px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon icon={service.icon!} width={18} height={18} color='var(--text-on-dark)' />
                          </Box>
                          <Typography sx={{ fontSize: 14, fontWeight: 600, color: 'var(--text-on-dark)' }}>
                            {service.title}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              )
            }

            return (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                onClick={closeMobile}
                fullWidth
                disableRipple
                sx={{
                  justifyContent: 'flex-start',
                  px: 1.5,
                  py: 1.5,
                  color: 'var(--text-on-dark)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            )
          })}
        </Box>

        <Divider sx={{ my: 1.5 }} />

        {/* Drawer CTAs */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            component='a'
            href={APP_URLS.LOGIN}
            onClick={closeMobile}
            fullWidth
            sx={{
              color: 'var(--text-on-dark)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textTransform: 'none',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              py: 1,
            }}
          >
            Sign Up
          </Button>
          <PrimaryCta
            component='a'
            href={APP_URLS.SIGNUP}
            onClick={closeMobile}
            sx={{
              width: '100%',
              height: 44,
              backgroundColor: '#FBC942',
              color: '#1F1F1F',
              '&:hover': { backgroundColor: '#FBC942', color: '#1F1F1F' },
            }}
          >
            Get Started
          </PrimaryCta>
        </Box>
      </Drawer>
    </Box>
  )
}
