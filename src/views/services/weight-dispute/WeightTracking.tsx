import Box from '@mui/material/Box'
import { SECTION_IDS } from '@/utils/constant'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Typography } from '@mui/material'

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
        {/* <ShipmentTrackingHero/> */}
        <Box className='pt-12'
        >
          <Box
            component='img'
            src='/images/weight_dispute/what_it_matters.svg'
            alt='what is matters'
            sx={{width: '100%', height: 'auto' }}
          />           
        </Box>
      </Box>
    </Box>
  )
}
