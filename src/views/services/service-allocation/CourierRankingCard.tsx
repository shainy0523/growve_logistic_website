import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import Image from 'next/image'
const couriers = [
    {
        name: 'Delhivery',
        cost: 48,
        deliveryRate: 98.2,
        score: 72,
        progress: 92,
        // logoBg: '#000',
        image:'/images/common/delhivery.svg'
    },
    {
        name: 'DTDC',
        cost: 48,
        deliveryRate: 93.1,
        score: 74,
        progress: 72,
        // logoBg: '#07287F',
        image:'/images/common/dtdc.svg'
    },
    {
        name: 'Shadowfax',
        cost: 48,
        deliveryRate: 96.6,
        score: 72,
        progress: 55,
        // logoBg: '#000',
        image:'/images/common/shadowfox.svg'
    },
    {
        name: 'Xpressbees',
        cost: 48,
        deliveryRate: 88.4,
        score: 78,
        progress: 38,
        // logoBg: '#07287F',
        image:'/images/common/xpressbees.svg'
    },
    {
        name: 'Amazon',
        cost: 48,
        deliveryRate: 84.3,
        score: 66,
        progress: 22,
        // logoBg: '#231F20',
        image:'/images/common/amazon.svg'
    },
    {
        name: 'Ekart',
        cost: 48,
        deliveryRate: 79.1,
        score: 68,
        progress: 12,
        // logoBg: '#F5F5F5',
        image:'/images/common/ekart.svg'
    },
]

export default function CourierRankingCard() {
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: '#FFF',
                p: 2,
                borderRadius: '12px',
                boxShadow: '0px 24px 144px rgba(225,225,228,0.24)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                }}
            >
                {couriers.map(courier => {
                    const positive = courier.deliveryRate >= 90

                    return (
                        <Box
                            key={courier.name}
                            sx={{
                                p: 2,
                                borderRadius: '8px',
                                border: '1px solid #E1E1E4',
                                bgcolor: '#FFF',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        md: '120px minmax(0,1fr) 80px 80px',
                                    },
                                    gap: 2,
                                    alignItems: 'center',
                                }}
                            >
                                {/* Logo */}
                                <Box
                                    sx={{
                                        width: 118,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: '6px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={courier.image}
                                            alt={courier.name}
                                            width={30}
                                            height={30}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            color: '#000',
                                        }}
                                    >
                                        {courier.name}
                                    </Typography>
                                </Box>

                                {/* Cost + Progress */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        minWidth: 0,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '11px',
                                            color: '#444050',
                                            mb: 0.75,
                                        }}
                                    >
                                        ₹{courier.cost} Avg. Per Cost
                                    </Typography>

                                    <Box
                                        sx={{
                                            height: 6,
                                            borderRadius: 999,
                                            overflow: 'hidden',
                                            bgcolor: '#E1E1E4',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: '100%',
                                                width: `${courier.progress}%`,
                                                bgcolor: '#FBC942',
                                                borderRadius: 999,
                                            }}
                                        />
                                    </Box>
                                </Box>

                                {/* Delivery Rate */}
                                <Box
                                    sx={{
                                        width: 80,
                                        textAlign: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 10,
                                            color: '#737682',
                                            mb: 0.25,
                                        }}
                                    >
                                        Delivery Rate
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: 0.5,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 11,
                                                fontWeight: 700,
                                                color: positive
                                                    ? '#24B364'
                                                    : '#E64449',
                                            }}
                                        >
                                            {courier.deliveryRate}%
                                        </Typography>

                                        <Box
                                            sx={{
                                                width: 14,
                                                height: 14,
                                                borderRadius: '50%',
                                                bgcolor: positive
                                                    ? '#CBF2DC'
                                                    : '#FFE2E3',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Icon
                                                icon={
                                                    positive
                                                        ? 'mdi:arrow-up'
                                                        : 'mdi:arrow-down'
                                                }
                                                width={8}
                                                height={8}
                                                color={
                                                    positive
                                                        ? '#24B364'
                                                        : '#E64449'
                                                }
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Score */}
                                <Box
                                    sx={{
                                        width: 80,
                                        textAlign: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 10,
                                            color: '#737682',
                                            mb: 0.25,
                                        }}
                                    >
                                        Value Score
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: '#000',
                                        }}
                                    >
                                        {courier.score}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}