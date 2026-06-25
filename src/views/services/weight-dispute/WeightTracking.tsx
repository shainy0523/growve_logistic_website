import Box from '@mui/material/Box'
import { SECTION_IDS } from '@/utils/constant'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import RecoveryChart from './RecoveryChart'

export default function TrackingSection() {
  return (
    <Box id={SECTION_IDS.TRACKING} className='landing-section' sx={{ backgroundColor: 'var(--surface-page)' }}>
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={'Why it matters'}
          title={'A few rupees per shipment'}
          accent={'\nadds up fast.'}
          subtitle={"Unchecked weight overcharges scale straight with your volume.This is what you'd leave on the table in a year."}
          size='md'
        />
        <Box className='pt-12'>
          <RecoveryChart />
        </Box>
      </Box>
    </Box>
  )
}
