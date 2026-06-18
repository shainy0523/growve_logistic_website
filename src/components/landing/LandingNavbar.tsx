'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Icon } from '@iconify/react'
import BrandLogo from './ui/BrandLogo'
import { NAV_LINKS } from './data/landing.data'
import { APP_URLS } from '@/utils/constant'
import { useState } from 'react'
import ServicesMegaMenu from './ServicesMegaMenu'
import PrimaryCta from './ui/PrimaryCta'

export default function LandingNavbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
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

        <Box
          component='nav'
          className='hidden md:inline-flex items-center gap-3 rounded-xl border border-black/10 bg-[#F5F5F6] p-1 backdrop-blur-[30px]'
        >
          {NAV_LINKS.map(item => {
            const isServices = item.label === 'Services'

            return (
              <Box
                key={item.label}
                sx={{
                  position: 'relative',
                  height: '100%'
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
          {/* <Button
            component='a'
            href={APP_URLS.SIGNUP}
            endIcon={<Icon icon='mdi:arrow-right' fontSize={16} />}
            sx={{
              backgroundColor: '#1F1F1F',
              color: '#FFFFFF',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'none',
              px: 2.25,
              py: 1.125,
              borderRadius: '8px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#000', boxShadow: 'none' },
            }}
          > */}
          <PrimaryCta
            component="a"
            href={APP_URLS.SIGNUP}
          >
            Get Started
          </PrimaryCta>
          {/* </Button> */}
        </Box>
      </Box>
    </Box>
  )
}
