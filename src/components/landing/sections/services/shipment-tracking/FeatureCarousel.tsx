"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface CarouselFeature {
  title: string;
  description: string;
  image?: string;
}

interface FeatureCarouselProps {
  features: CarouselFeature[];
  /** Seconds for one full loop of the track. */
  speed?: number;
}

export default function FeatureCarousel({
  features,
  speed = 30,
}: FeatureCarouselProps) {
  const [paused, setPaused] = useState(false);

  // Duplicate the list so the track can loop seamlessly.
  const track = [...features, ...features];

  return (
    <Box
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        overflow: "hidden",
        width: "100%",
        // Soft fade on both edges.
        maskImage:
          "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          gap: "20px",
          width: "max-content",
          animation: `feature-marquee ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          "@keyframes feature-marquee": {
            from: { transform: "translateX(0)" },
            // Track is duplicated, so -50% lands exactly on the loop point.
            to: { transform: "translateX(-50%)" },
          },
        }}
      >
        {track.map((feature, i) => (
          <FeatureCard key={`${feature.title}-${i}`} feature={feature} />
        ))}
      </Box>
    </Box>
  );
}

function FeatureCard({ feature }: { feature: CarouselFeature }) {
  return (
    <Box
      sx={{
        flex: "0 0 auto",
        width: { xs: 280, md: 300 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "pointer",
      }}
    >
      {/* Image — rendered at its natural width/height */}
      <Box
        sx={{
          borderRadius: "12px",
          // border: "1px solid #EAEAEC",
          // bgcolor: "#F5F5F6",
          overflow: "hidden",
        }}
      >
        {feature.image && (
          <Image
            src={feature.image}
            alt={feature.title}
            width={300}
            height={290}
            sizes="300px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        )}
      </Box>

      {/* Copy */}
      <Box>
        <Typography
          sx={{
            fontFamily: "Dai Banna SIL, serif",
            fontSize: "20px",
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
    </Box>
  );
}
