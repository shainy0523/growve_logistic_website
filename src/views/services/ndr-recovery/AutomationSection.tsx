'use client';

import {
    Box,
    Typography,
    Paper,
    Chip,
    Stack,
    Divider,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import SectionHeading from '@/components/landing/ui/SectionHeading';
import Image from 'next/image';

const ruleSteps = [
    {
        title: 'Trigger',
        value: 'Customer Unavailable',
        badge: 'NDR marked by courier',
    },
    {
        title: 'Action',
        value: 'Send WhatsApp message',
        badge: 'Auto',
    },
    {
        title: 'Action',
        value: 'Wait for response',
        badges: ['Responded', 'No response'],
    },
];

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
                        borderRadius: 3,
                        p: 4,
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
                        {/* <Paper
                            elevation={0}
                            sx={{
                                bgcolor: '#fff',
                                borderRadius: 3,
                                p: 3,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#808390',
                                    mb: 3,
                                }}
                            >
                                Rule Builder
                            </Typography>

                            <Stack spacing={3}>
                                {ruleSteps.map((item, index) => (
                                    <Box key={index}>
                                        <Box className="flex gap-4">
                                            <Box
                                                sx={{
                                                    width: 36,
                                                    height: 36,
                                                    bgcolor: '#FBC942',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <SettingsIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: '#fff',
                                                    }}
                                                />
                                            </Box>

                                            <Box className='flex-1'>
                                                <Typography
                                                    sx={{
                                                        fontSize: 12,
                                                        color: '#6D6B77',
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>

                                                <Box className="flex flex-wrap items-center gap-2 mt-1">
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {item.value}
                                                    </Typography>

                                                    {item.badge && (
                                                        <Chip
                                                            label={item.badge}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: '#FEF6E1',
                                                            }}
                                                        />
                                                    )}

                                                    {item.badges?.map(tag => (
                                                        <Chip
                                                            key={tag}
                                                            label={tag}
                                                            size="small"
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>

                                        {index !== ruleSteps.length - 1 && (
                                            <Divider sx={{ mt: 3 }} />
                                        )}
                                    </Box>
                                ))}
                            </Stack>
                        </Paper> */}
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                pt:5,
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
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: '#F5F5F6',
                            border: '1px solid #EAEAEC',
                            borderRadius: 3,
                            p: 4,
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
                            Reach customers where they are
                        </Typography>

                        <Typography
                            sx={{
                                color: '#6D6B77',
                                mb: 4,
                                fontSize:13,
                            }}
                        >
                            WhatsApp first, with SMS and IVR fallback —
                            in the customer's language.
                        </Typography>

                        <Stack spacing={2}>
                            {[
                                {
                                    icon: <WhatsAppIcon />,
                                    name: 'WhatsApp',
                                    status: 'Delivered',
                                },
                                {
                                    icon: <SmsIcon />,
                                    name: 'SMS',
                                    status: 'Opened',
                                },
                                {
                                    icon: <CallIcon />,
                                    name: 'IVR Call',
                                    status: 'Critical',
                                },
                            ].map(item => (
                                <Paper
                                    key={item.name}
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                    }}
                                >
                                    <Box className="flex justify-between items-center">
                                        <Box className="flex items-center gap-3">
                                            {item.icon}
                                            <Typography sx={{ fontWeight: 700 }}>
                                                {item.name}
                                            </Typography>
                                        </Box>

                                        <Chip
                                            size="small"
                                            label={item.status}
                                        />
                                    </Box>
                                </Paper>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Team Card */}
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: '#F5F5F6',
                            border: '1px solid #EAEAEC',
                            borderRadius: 3,
                            p: 4,
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
                                fontSize:13,
                            }}
                        >
                            Hand any order to an agent, request a callback,
                            or pause automation without losing context.
                        </Typography>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                bgcolor: '#fff',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                }}
                            >
                                #GRV-51002
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#6D6B77',
                                    mb: 2,
                                }}
                            >
                                Customer Unavailable
                            </Typography>

                            <Chip
                                label="Re-Attempting"
                                size="small"
                                color="warning"
                            />
                        </Paper>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}