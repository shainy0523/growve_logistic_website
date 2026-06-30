import LandingLayout from '@/layouts/LandingLayout'
import AboutView from '@/views/about/AboutView'
import React from 'react'

const page = () => {
    return (
        <LandingLayout>
            <AboutView/>
        </LandingLayout>
    )
}

export default page
