import { Box } from '@mui/material'
import React from 'react'
import ServiceHero from '../service-allocation/ServiceHero'

const NdrRecoveryAutomationView = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#F5F5F6',
            }} className='pt-15! pb-15'>
                <Box className="landing-container pt-10! pb-5">
                    <Box className='grid grid-cols-2 md:gir-cols-1 gap-10'>
                        <ServiceHero
                            badge='NDR Recovery Automation'
                            title='Recover failed deliveries before'
                            accent='they become returns.'
                            description='Automatically detect NDR orders, trigger customer outreach, collect delivery preferences, and re-attempt shipments before they turn into RTOs.'
                        />
                        <Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default NdrRecoveryAutomationView
