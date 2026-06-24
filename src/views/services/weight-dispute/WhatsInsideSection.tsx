import SectionHeading from '@/components/landing/ui/SectionHeading'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

const INSIDE_FEATURES = [
    {
        title: 'Capture true weight at source',
        description:
            "Verified weight and dimensions recorded at packing — no more relying on the courier's number.",
    },
    {
        title: 'Detect every discrepancy automatically',
        description:
            'Declared vs charged compared on each shipment — overcharges flagged the moment the courier bills.',
    },
    {
        title: 'Auto file disputes before the window closes',
        description:
            'Every flagged charge becomes a dispute with evidence attached — filed in time, every time.',
    },
    {
        title: 'Recover and reconcile to your invoice',
        description:
            'Recovered amounts are tracked and tied back to each courier invoice, so nothing slips.',
    },
]

export default function WhatsInsideSection() {
    return (
        <Box
            sx={{
                py: { xs: 10, md: '100px' },
            }}
            className="landing-container"
        >
            <Box className='pb-15'>
                <SectionHeading
                    eyebrow="WHAT'S INSIDE"
                    title="Cut the busywork from capture, detection,"
                    accent=" dispute, and recovery."
                    subtitle="Every step from the packing table to your courier invoice is handled in one place — no spreadsheets, no manual filing."
                />

                <Box
                    sx={{ mt: 6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {INSIDE_FEATURES.map((item,index) => (
                        <Box key={item?.title}>
                            <Box
                                sx={{
                                    border: '1px solid #EAEAEC',
                                    borderRadius: '12px',
                                    bgcolor: '#F1F1F2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    // p: { xs: 4, md: 6 },
                                    height: {
                                        xs: 315,
                                        md:400,
                                    },
                                    // pl: { xs: 3, md: 5 },
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`/images/weight_dispute/weight_dispute${index+1}.svg`}
                                    alt="Carrier Comparison"
                                    sx={{
                                        width: '350px',
                                        height: 'auto',
                                        display: 'block',
                                        // borderTopLeftRadius: '18px',
                                        // boxShadow: '0 20px 50px rgba(17,17,26,0.08)',
                                    }}
                                />
                            </Box>
                            <Box className='pt-6'>
                                <Typography className='text-[1.2rem]!' variant='Heading/H5-Bold' sx={{
                                    color: 'var(--text-strong)',
                                    fontFamily: 'var(--font-dai-banna), sans-serif',
                                    fontWeight: 500,
                                }}>
                                    {item?.title}
                                </Typography>
                                <Typography className='text-[.8rem]! pt-1 pb-5' sx={{ color: 'var(--text-secondary)', lineHeight: 1.6, mt: 'auto' }}>
                                    {item?.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
