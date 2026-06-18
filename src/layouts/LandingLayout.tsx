'use client'

import LandingFooter from '@/components/landing/LandingFooter'
import LandingNavbar from '@/components/landing/LandingNavbar'
import CtaSection from '@/components/landing/sections/problems-section/CtaSection'
import FaqSection from '@/components/landing/sections/problems-section/FaqSection'
import Box from '@mui/material/Box'

interface Props {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'var(--surface-page)',
      }}
    >
      <LandingNavbar />

      <main>{children}</main>

      <FaqSection />
      <CtaSection />
      <LandingFooter />
    </Box>
  )
}