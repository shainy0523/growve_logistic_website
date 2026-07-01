import { Box, Typography } from '@mui/material'

interface MetricRow {
    label: string
    value: string
    percent: number
}

const METRICS: MetricRow[] = [
    { label: 'NDRs detected', value: '7', percent: 30 },
    { label: 'Customers reached', value: '4', percent: 44 },
    { label: 'Responses captured', value: '3', percent: 22 },
    { label: 'Re-attempts won', value: '5', percent: 88 },
    { label: 'RTO prevented (₹)', value: '₹4,636', percent: 67 },
]

export default function RecoveryAnalyticsSection() {
    return (
        <Box sx={{ py: { xs: 10, md: '100px' }, bgcolor: '#FFF' }}>
            <Box className="landing-container">
                <Box
                    sx={{
                        bgcolor: '#F5F5F6',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        p: { xs: 3, md: 6 },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
                        alignItems: 'center',
                        gap: { xs: 5, md: 7 },
                    }}
                >
                    {/* LEFT — copy */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.32em',
                                textTransform: 'uppercase',
                                color: '#9A98A4',
                                mb: 2.5,
                            }}
                        >
                            RECOVERY ANALYTICS
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                fontFamily: 'var(--font-dai-banna)',
                                fontSize: { xs: '1.75rem', md: '2.125rem' },
                                fontWeight: 500,
                                lineHeight: 1.2,
                                letterSpacing: '-0.01em',
                                color: '#000',
                            }}
                        >
                            Track every recovery.
                            <br />
                            Measure every outcome.
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,
                                color: '#6D6B77',
                                fontSize: 15,
                                lineHeight: 1.7,
                                maxWidth: 400,
                            }}
                        >
                            Monitor recovery performance in real time. Understand why deliveries
                            fail, which couriers drive the highest RTOs, and how much revenue is
                            being saved through automated recovery.
                        </Typography>
                    </Box>

                    {/* RIGHT — chart card, flush to the panel's right edge on md+ */}
                    <Box
                        sx={{
                            bgcolor: '#FFF',
                            border: '1px solid #EFEFF1',
                            // round left corners only; right side sits flush against the panel edge
                            borderRadius: { xs: '16px', md: '16px 0 0 16px' },
                            p: { xs: 2.5, md: 3.5 },
                            boxShadow: '0px 24px 60px rgba(0,0,0,0.06)',
                            // cancel the panel's right padding so the card sticks to the right edge
                            mr: { md: -6 },
                        }}
                    >
                        <Typography sx={{ fontSize: 16, fontWeight: 700, color: '#000' }}>
                            NDR recovery · last 30 days
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: '#9A98A4', mb: 3.5 }}>
                            18 open NDRs · take action before auto-RTO triggers
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.75 }}>
                            {METRICS.map(row => (
                                <Box
                                    key={row.label}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr auto auto 2.1fr',
                                        alignItems: 'center',
                                        columnGap: 1.5,
                                    }}
                                >
                                    <Typography sx={{ fontSize: 13, color: '#2A2A30' }}>
                                        {row.label}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: '#1F1F1F',
                                            textAlign: 'right',
                                            minWidth: 48,
                                        }}
                                    >
                                        {row.value}
                                    </Typography>

                                    {/* Divider */}
                                    <Box
                                        sx={{
                                            width: '1px',
                                            height: 34,
                                            bgcolor: '#E2E2E4',
                                            justifySelf: 'center',
                                        }}
                                    />

                                    {/* Bar */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: 22,
                                            borderRadius: '5px',
                                            bgcolor: '#ECECEE',
                                            overflow: 'hidden',
                                            // faint vertical gridlines every 20%
                                            backgroundImage:
                                                'repeating-linear-gradient(to right, rgba(0,0,0,0.045) 0 1px, transparent 1px 20%)',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: `${row.percent}%`,
                                                bgcolor: '#E7C24A',
                                                borderRadius: '5px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                pl: 1,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 10.5,
                                                    fontWeight: 600,
                                                    color: 'rgba(255,255,255,0.95)',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {row.percent}%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
