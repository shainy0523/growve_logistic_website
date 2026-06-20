import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import HorizontalScroller from "./HorizontalScroller";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
// import StaticImageComponent from './StaticImageComponent'

export interface SplitFeature {
  icon?: string;
  role?: "scroll" | "static";
  title: string;
  description: string;
  images?: string[];
  image?: string;
  direction?: "left" | "right" | "top" | "bottom";
}

interface FeatureSplitSectionProps {
  eyebrow: string;
  title: string;
  accent?: string;
  features: SplitFeature[];
  reverse?: boolean;
  bgcolor?: string;
}

export default function FeatureSplitSection({
  eyebrow,
  title,
  accent,
  features,
  bgcolor = "#FFF",
}: FeatureSplitSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12.5 },
        bgcolor,
      }}
    >
      <Box className="landing-container">
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: "#8D8A94",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            {eyebrow}
          </Typography>

          <Typography
          component={"div"}
            sx={{
              fontFamily: "Dai Banna SIL, serif",
              fontSize: {
                xs: "34px",
                md: "48px",
              },
              lineHeight: 1.1,
              fontWeight: 500,
              color: "#000",
            }}
          >
            {title}{" "}
            {accent && (
              <Box
                component="div"
                sx={{
                  color: "#8D8A94",
                }}
              >
                <span style={{ color: "#000" }}>keeps</span> {accent}
              </Box>
            )}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#6D6B77",
              fontSize: "16px",
              lineHeight: "23px",
            }}
          >
            Description
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,1fr)",
            },
            gap: 2.5,
          }}
        >
          {features.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                minHeight: 525,
                bgcolor: "#F5F5F6",
                borderRadius: "12px",
                border: "1px solid #EAEAEC",
                p: 2.5,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Text */}
              <Box>
                {/* {feature.icon && (
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px',
                      bgcolor:'#FEF6E1',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      mb:2
                    }}
                  >
                    <Icon
                      icon={feature.icon}
                      width={22}
                      height={22}
                      color="#E8B42C"
                    />
                  </Box>
                )} */}

                <Typography
                  sx={{
                    fontFamily: "Dai Banna SIL",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#000",
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#6D6B77",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>

              {/* Visual area */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                }}
              >
                {feature.role === "scroll" && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <HorizontalScroller />
                  </Box>
                )}

                {feature.role === "static" && feature.image && (
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      width: "75%",
                      height: "auto",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={420}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "16px 0px 0px 0px",
                        boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
