import Box from '@mui/material/Box'
import { SECTION_IDS } from '@/utils/constant'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import ShipmentTrackingHero from '@/components/landing/sections/problems-section/Shipmenttrackinghero'

export default function TrackingSection() {
  return (
    <Box id={SECTION_IDS.TRACKING} className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={'Why it matters'}
          title={'A few rupees per shipment'}
          accent={'adds up fast.'}
          subtitle={"Unchecked weight overcharges scale straight with your volume.This is what you'd leave on the table in a year."}
          size='md'
        />
          <ShipmentTrackingHero/>
      </Box>
    </Box>
  )
}
