'use client'

import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import EverythingSection from '@/components/landing/sections/problems-section/EverythingSection'
import RtoHero from '../../../components/landing/sections/services/returns-rto-control/RtoHero'
import ReturnsIntelligenceSection from '../../../components/landing/sections/services/returns-rto-control/ReturnsIntelligenceSection'
import RtoPredictionSection from '../../../components/landing/sections/services/returns-rto-control/RtoPredictionSection'
import ReturnsUnderControlBanner from '../../../components/landing/sections/services/returns-rto-control/ReturnsUnderControlBanner'
import RtoFullPictureSection from '../../../components/landing/sections/services/returns-rto-control/RtoFullPictureSection'

/** Fades + slides each section up as it scrolls into view. */
function Reveal({ children }: { children: ReactNode }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </Box>
  )
}

const ReturnsRtoControlView = () => {
  return (
    <>
      {/* Hero renders immediately (above the fold) */}
      <RtoHero />

      <Reveal>
        <ReturnsIntelligenceSection />
      </Reveal>
      <Reveal>
        <ReturnsUnderControlBanner />
      </Reveal>
      <Reveal>
        <RtoFullPictureSection />
      </Reveal>
      <Reveal>
        <RtoPredictionSection />
      </Reveal>

      {/* "Returns & RTO Control is one part of the loop." — reuses the shared platform grid */}
      <Reveal>
        <Box>
          <EverythingSection
            eyebrow='One platform'
            title={'Returns & RTO Control is one\npart'}
            accent='of the loop.'
            subtitle={'Allocation, tracking, returns and analytics — every stage of the order\njourney, on one platform.'}
            excludeTitles={["Returns & RTO Control", "Smart Courier Allocation"]} showCenterCard={false} />
        </Box>
      </Reveal>
    </>
  )
}

export default ReturnsRtoControlView
