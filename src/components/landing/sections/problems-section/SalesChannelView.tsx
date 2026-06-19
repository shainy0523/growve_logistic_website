import {
    Box,
    Container,
    Typography,
    Paper,
    Avatar
} from "@mui/material";

import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Image from "next/image";

const nodes = [
    {
        top: "12%",
        left: "35%",
        bg: "#02CBFF",
        icon: <StorefrontIcon sx={{ color: "#fff", fontSize: 18 }} />
    },
    {
        top: "50%",
        left: "35%",
        bg: "#95BF46",
        icon: <ShoppingBagIcon sx={{ color: "#fff", fontSize: 18 }} />
    },
    {
        top: "28%",
        left: "65%",
        bg: "#FFFFFF",
        border: "#666",
        icon: <ShoppingCartIcon sx={{ color: "#333", fontSize: 18 }} />
    },
    {
        top: "12%",
        left: "82%",
        bg: "#674399",
        icon: <LanguageIcon sx={{ color: "#fff", fontSize: 18 }} />
    },
    {
        top: "42%",
        left: "5%",
        bg: "#FF2B2F",
        icon: <Inventory2Icon sx={{ color: "#fff", fontSize: 18 }} />
    },
    {
        top: "28%",
        left: "18%",
        bg: "#F37C20",
        icon: <StorefrontIcon sx={{ color: "#fff", fontSize: 18 }} />
    }
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
                                color:'#000000'
                            }}
                        >
                            Your sales channels, connected {' '}
                            <Box
                                component="span"
                                sx={{
                                    color: "#8D8A94",
                                    fontWeight:500
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

                    {/* RIGHT GRAPHIC */}

                    <Box
                        sx={{
                            position: "relative",
                            height: {
                                xs: 200,
                                md: 220
                            },
                            borderRadius: "16px",
                            background: "#F5F5F6",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {/* Glow Effect */}

                        <Box
                            sx={{
                                position: "absolute",
                                width: 200,
                                height: 200,
                                borderRadius: "50%",
                                background:
                                    "rgba(255,255,255,0.8)",
                                filter: "blur(100px)",
                                zIndex: 0
                            }}
                        />

                        <Image
                            src="/images/salesview.png"
                            alt="Sales Channels"
                            fill
                            style={{
                                objectFit: "contain",
                                zIndex: 1
                            }}
                            priority
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}