'use client';

import {
    Box,
    Typography,
    Paper,
} from '@mui/material';
import SectionHeading from '@/components/landing/ui/SectionHeading';
import ChannelFallbackCard from './ChannelFallbackCard';

export default function AutomationSection() {
    return (
        <Box
            component="section"
            className="py-10! my-15! bg-white landing-container"
        >
            {/* Heading */}
            <SectionHeading
                eyebrow="IN YOUR CONTROL"
                title="Automation that"
                accent="follows your playbook."
                subtitle="Set recovery rules once and let Growve execute them automatically. Every NDR follows the right workflow based on reason, value, courier, payment mode, and customer response."
                variant="light"
                align="center"
                size="lg"
            />

            {/* Main Grid */}
            <Box
                sx={{
                    display: 'grid',
                    gap: 3,
                }}
            >
                {/* Large Card */}
                <Paper
                    elevation={0}
                    sx={{
                        bgcolor: '#F5F5F6',
                        border: '1px solid #EAEAEC',
                        borderRadius: 1,
                        p: 2,
                        overflow: 'hidden',
                        mt: 5,
                    }}
                >
                    <Box>
                        {/* Content */}
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    color: '#000000'
                                }}
                            >
                                Recovery rules, your way
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#6D6B77',
                                    fontSize: 13,
                                    lineHeight: 1.5,
                                    maxWidth: 900,
                                }}
                            >
                                Build custom recovery workflows for every NDR
                                scenario. Define how orders should be handled
                                based on delivery failure reasons, order value,
                                courier partner, COD amount, or serviceability
                                conditions.
                            </Typography>
                        </Box>

                        {/* Rule Builder UI */}
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 5,
                                pb:2,
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/automation.svg"
                                alt="automation"
                                sx={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    height: 'auto',
                                    display: 'block',
                                }}
                            />
                        </Box>
                    </Box>
                </Paper>

                {/* Bottom Cards */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2,1fr)',
                        },
                        gap: 3,
                    }}
                >
                    {/* Communication Card */}
                    <ChannelFallbackCard />

                    {/* Team Card */}
                    <Paper
                        elevation={0}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            bgcolor: '#F5F5F6',
                            border: '1px solid #EAEAEC',
                            borderRadius: 1,
                            p: 2,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                mb: 1,
                                color: '#000000'
                            }}
                        >
                            Your team stays in the loop
                        </Typography>

                        <Typography
                            sx={{
                                color: '#6D6B77',
                                mb: 4,
                                fontSize: 13,
                            }}
                        >
                            Hand any order to an agent, request a callback,
                            or pause automation without losing context.
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                position: 'relative',

                                height: 240,
                                pt: 5,
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/automation_order.svg"
                                alt="automation"
                                sx={{
                                    position: 'absolute',
                                    right: '-3rem',
                                    top: '10%',
                                    width: '100%',
                                    maxWidth: '600px',
                                    height: 'auto',
                                    display: 'block',
                                }}
                            />
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}