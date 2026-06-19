import {
    Box,
    Typography
} from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/* Figma cluster is authored at 364 × 254px; it sits centered inside a */
/* wider gray panel. Each tile's `icon` is either an image path (/...)  */
/* or an Iconify logo name.                                            */
const STAGE_W = 364;
const STAGE_H = 254;
const TILE = 59.26; // tile size from Figma

const TILES = [
    { left: 0, top: 130.5, glow: "#C3EBFF", icon: "/images/penguin.png" },
    { left: 76.19, top: 91.71, glow: "#FFDCC0", icon: "/images/magento.png" },
    { left: 152.37, top: 53.61, glow: "#B9E0FF", icon: "/images/windows.png" },
    { left: 152.37, top: 129.8, glow: "#E9FFBF", icon: "/images/shopify.png" },
    { left: 228.56, top: 91.71, glow: "#FFD9D9", icon: "/images/amazon.png" },
    { left: 304.75, top: 53.61, glow: "#DDC5FF", icon: "/images/woocommerce.png" },
];

// Decorative fade tiles that blend the cluster into the surface.
const FADES = [
    { left: 76.19, top: 15.52, gradient: "linear-gradient(0deg, white 0%, rgba(255,255,255,0) 100%)" },
    { left: 76.19, top: 167.89, gradient: "linear-gradient(180deg, white 0%, rgba(255,255,255,0) 100%)" },
    { left: 228.56, top: 15.52, gradient: "linear-gradient(0deg, white 0%, rgba(255,255,255,0) 100%)" },
    { left: 228.56, top: 167.89, gradient: "linear-gradient(180deg, white 0%, rgba(255,255,255,0) 100%)" },
    { left: 304.75, top: 129.8, gradient: "linear-gradient(90deg, white 0%, rgba(255,255,255,0) 100%)" },
    { left: 0, top: 54.6, gradient: "linear-gradient(270deg, white 0%, rgba(255,255,255,0) 100%)" },
];

export default function ConnectedEcosystem() {
    return (
        <Box className="landing-section bg-white py-24">
            <Box className='landing-container'>
                <Box
                    className="
                        grid
                        lg:grid-cols-2
                        gap-10
                        items-center
                    "
                >
                    {/* LEFT CONTENT */}

                    <Box sx={{ maxWidth: 540 }}>
                        <Typography
                            sx={{
                                fontSize: 12,
                                letterSpacing: "3.6px",
                                fontWeight: 700,
                                color: "#8D8A94",
                                mb: 2
                            }}
                        >
                            CONNECTED ECOSYSTEM
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 38,
                                    md: 48
                                },
                                lineHeight: 1.1,
                                fontWeight: 500,
                                fontFamily: "var(--font-dai-banna), serif",
                                mb: 3,
                                color: '#000000'
                            }}
                        >
                            Your sales channels, connected {' '}
                            <Box
                                component="span"
                                sx={{
                                    color: "#8D8A94",
                                    fontWeight: 500
                                }}
                            >
                                in one place.
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                color: "#6D6B77",
                                fontSize: 16,
                                lineHeight: "28px",
                                maxWidth: 500,
                            }}
                        >
                            Bring Amazon, Shopify, WooCommerce, Magento,
                            and other sales channels into a single logistics
                            workflow built for scale.
                        </Typography>
                    </Box>

                    {/* RIGHT GRAPHIC — wide gray panel with centered channel cluster */}

                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            minHeight: { xs: 240, md: 300 },
                            borderRadius: "16px",
                            background: "#F5F5F6",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            "@keyframes glowPulse": {
                                "0%, 100%": { opacity: 0.55, transform: "translate(-50%, -50%) scale(1)" },
                                "50%": { opacity: 0.85, transform: "translate(-50%, -50%) scale(1.12)" },
                            },
                            "@keyframes floatY": {
                                "0%, 100%": { transform: "translateY(0)" },
                                "50%": { transform: "translateY(-6px)" },
                            },
                        }}
                    >
                        {/* Center glow */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: 260,
                                height: 220,
                                borderRadius: "9999px",
                                background: "rgba(255,255,255,0.65)",
                                filter: "blur(60px)",
                                transform: "translate(-50%, -50%)",
                                animation: "glowPulse 5s ease-in-out infinite",
                                zIndex: 0,
                            }}
                        />

                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: STAGE_W,
                                aspectRatio: `${STAGE_W} / ${STAGE_H}`,
                                "& > *": { position: "absolute" },
                            }}
                        >
                            {/* Decorative fade tiles */}
                            {FADES.map((f, i) => (
                                <Box
                                    key={`fade-${i}`}
                                    sx={{
                                        left: `${(f.left / STAGE_W) * 100}%`,
                                        top: `${(f.top / STAGE_H) * 100}%`,
                                        width: `${(TILE / STAGE_W) * 100}%`,
                                        height: `${(TILE / STAGE_H) * 100}%`,
                                        borderRadius: "12px",
                                        background: f.gradient,
                                        zIndex: 1,
                                        animation: "floatY 2s ease-in-out infinite",
                                        animationDelay: `${i * 0.35}s`,
                                    }}
                                />
                            ))}

                            {/* Icon tiles */}
                            {TILES.map((tile, i) => {
                                const isImage = tile.icon.startsWith("/") || tile.icon.startsWith("http");
                                return (
                                    <Box
                                        key={`tile-${i}`}
                                        sx={{
                                            left: `${(tile.left / STAGE_W) * 100}%`,
                                            top: `${(tile.top / STAGE_H) * 100}%`,
                                            width: `${(TILE / STAGE_W) * 100}%`,
                                            height: `${(TILE / STAGE_H) * 100}%`,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            zIndex: 2,
                                            animation: "floatY 2s ease-in-out infinite",
                                            animationDelay: `${i * 0.35}s`,
                                        }}
                                    >
                                        {/* brand-colored glow behind the logo */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                width: "62%",
                                                height: "62%",
                                                borderRadius: "9999px",
                                                background: tile.glow,
                                                filter: "blur(11px)",
                                                opacity: 0.9,
                                                transform: "translateY(16%)",
                                            }}
                                        />
                                        {/* logo — image path or Iconify name */}
                                        <Box
                                            sx={{
                                                position: "relative",
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                "& svg, & img": { width: "100%", height: "100%", objectFit: "contain" },
                                            }}
                                        >
                                            {isImage ? (
                                                <Image
                                                    src={tile.icon}
                                                    alt=""
                                                    fill
                                                    sizes="100px"
                                                    style={{ objectFit: "contain" }}
                                                />
                                            ) : (
                                                <Icon icon={tile.icon} width="100%" height="100%" />
                                            )}
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
