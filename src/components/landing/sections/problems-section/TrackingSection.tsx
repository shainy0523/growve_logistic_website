import Box from '@mui/material/Box'
import SectionHeading from '../../ui/SectionHeading'
import { TRACKING } from '../../data/landing.data'
import { SECTION_IDS } from '@/utils/constant'
import ShipmentTrackingHero from './Shipmenttrackinghero'

export default function TrackingSection() {
  return (
    <Box id={SECTION_IDS.TRACKING} className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={TRACKING.eyebrow}
          title={TRACKING.titleLeading}
          accent={TRACKING.titleAccent}
          subtitle={TRACKING.subtitle}
          size='md'
        />
          <ShipmentTrackingHero/>
      </Box>
    </Box>
  )
}
