import { FeatureCard } from '@/components/landing/sections/problems-section/EverythingSection'
import SectionHeading from '@/components/landing/ui/SectionHeading'
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
            <SectionHeading
                eyebrow="WHAT'S INSIDE"
                title="Cut the busywork from"
                accent="capture, detection, dispute, and recovery."
                subtitle="Every step from the packing table to your courier invoice is handled in one place — no spreadsheets, no manual filing."
            />

            <Box
                sx={{ mt: 6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
                {INSIDE_FEATURES.map(item => (
                    <FeatureCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </Box>
        </Box>
    )
}
