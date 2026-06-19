import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ImpactCard from './ImpactCard'
import SectionHeading from '@/components/landing/ui/SectionHeading'

const IMPACT_STATS = [
    {
        value: '40%',
        title: 'Fewer RTOs',
        description:
            'Orders recovered before they return to origin.',
    },
    {
        value: '65%',
        title: 'NDR recovery rate',
        description:
            'Failed deliveries turned into successful ones.',
    },
    {
        value: '3×',
        title: 'Faster resolution',
        description:
            'From failed attempt to re-attempt scheduled.',
    },
    {
        value: '90%',
        title: 'Automated outreach',
        description:
            'Customer contact handled without an agent.',
    },
]

export default function NDRImpactSection() {
    return (
        <Box className='landing-container'
            sx={{
                py: { xs: 10, md: '100px' },
            }}
        >
            {/* Heading */}
            <Box
                sx={{
                    maxWidth: 900,
                    mx: 'auto',
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                <SectionHeading
                    variant="dark"
                    align="center"
                    size="lg"
                    eyebrow="THE IMPACT"
                    title="Failed deliveries,"
                    accent="turned around."
                    subtitle="NDR recovery isn't just about saving orders. It reduces return costs, improves delivery rates, and protects your COD profitability at scale."
                />
            </Box>

            {/* Cards */}
            <Box className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {IMPACT_STATS.map(item => (
                    <ImpactCard
                        key={item.title}
                        value={item.value}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </Box>
        </Box>
    )
}