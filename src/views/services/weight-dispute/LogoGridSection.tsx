import { Box, Typography } from '@mui/material'

type LogoItem = {
    id: number
    image: string
    alt?: string
}

type LogoGridSectionProps = {
    eyebrow?: string
    title?: string
    description?: string
    logos?: LogoItem[]
}

const defaultLogos: LogoItem[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    image: `/images/weight_dispute/services${i + 1}.svg`,
    alt: 'Courier partner',
}))

export default function LogoGridSection({
    eyebrow = 'Built for India',
    title = "Works with every courier's weight slab and volumetric formula.",
    description = "Each partner's slabs and volumetric rules are built in — so every dispute is filed the way that courier expects, with no manual setup.",
    logos = defaultLogos,
}: LogoGridSectionProps) {
    return (
        <Box sx={{ bgcolor: '#FFF', py: { xs: 10, md: '100px' } }}>
            <Box className="landing-container">
                <Box
                    sx={{
                        position: 'relative',
                        minHeight: { xs: 'auto', md: 350 },
                        p: { xs: 2, md: 2.5 },
                        borderRadius: '12px',
                        bgcolor: '#F5F5F6',
                        border: '1px solid #EAEAEC',
                        outlineOffset: '-1px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '1fr .5fr'
                        },
                        gap: { xs: 3, md: 0 },
                        alignItems: 'center'
                    }}
                >
                    {/* Left copy */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', md: 400 },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 600,
                                lineHeight: '15.6px',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                color: '#8D8A94',
                            }}
                        >
                            {eyebrow}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'var(--font-dai-banna)',
                                fontSize: '24px',
                                fontWeight: 500,
                                color: '#000',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#6D6B77' }}>
                            {description}
                        </Typography>
                    </Box>

                    {/* Logo cards — 2 cols on mobile, 4 cols on desktop */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'repeat(3,1fr)',
                                md: 'repeat(4,1fr)',
                            },
                            gap: 2,
                            justifyContent:'center',
                            alignContent: 'center',
                            px: {
                                xs:1,
                                md:5,
                            },
                        }}
                    >
                        {logos.map((logo) => (
                            <Box
                                key={logo.id}
                                sx={{
                                    width: 100,
                                    bgcolor: '#FFF',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 1,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={logo.image}
                                    alt={logo.alt ?? 'Courier partner'}
                                    sx={{ maxWidth: '80px', maxHeight: '80px', width: 'auto', height: 'auto' }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
