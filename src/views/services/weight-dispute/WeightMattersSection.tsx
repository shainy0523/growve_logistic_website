import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function WeightMattersSection() {
    return (
        <Box
            sx={{
                py: { xs: 10, md: '100px' },
                bgcolor: '#FFF',
            }}
        >
            <Box className="landing-container">
                <SectionHeading
                    eyebrow="WHY IT MATTERS"
                    title="A few rupees per shipment"
                    accent="adds up fast."
                    subtitle="Unchecked weight overcharges scale straight with your volume. This is what you'd leave on the table in a year."
                    variant="light"
                    align="center"
                    size="lg"
                />

                <Box
                    sx={{
                        mt: 6,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src="/images/hero.png"
                        alt="Shipping revenue and recovery dashboard"
                        width={1100}
                        height={680}
                        style={{
                            width: '100%',
                            maxWidth: 1000,
                            height: 'auto',
                            display: 'block',
                            borderRadius: '16px',
                            border: '1px solid #EAEAEC',
                            boxShadow: '0px 24px 60px rgba(0,0,0,0.10)',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}
