import { Box, Typography } from "@mui/material";
import FeatureCarousel from "./FeatureCarousel";

const FEATURES = [
  {
    title: "Live map tracking",
    description: "Watch every shipment move in real time, courier agnostic.",
    image: '/images/shipment_tracking/tracking1.svg'
  },
  {
    title: "Proactive customer updates",
    description:
      'Customers get every status automatically — no "where is my order?"',
    image: '/images/shipment_tracking/tracking2.svg'
  },
  {
    title: "Instant exception alerts",
    description:
      "Delays and stuck shipments surface before they become failures.",
    image: '/images/shipment_tracking/tracking3.svg'
  },
  {
    title: "Branded tracking page",
    description: "A tracking page in your brand, not the courier’s.",
    image: '/images/shipment_tracking/tracking4.svg'
  },
];

interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface HeadingContent {
  eyebrow: string;
  /** Supports `\n` for manual line breaks. */
  title: string;
  /** Greyed trailing text, rendered inline after the title. */
  accent?: string;
  /** Supports `\n` for manual line breaks. */
  subtitle: string;
}

const DEFAULT_HEADING: HeadingContent = {
  eyebrow: "why teams switch",
  title: "Tracking is handled for you — from\npickup ",
  accent: "to doorstep.",
  subtitle:
    "Live location, proactive updates, and exception alerts on\nevery shipment, across every courier.",
};

interface TrackingHandledSectionProps {
  /**
   * Which block to render. Omit to render the whole section
   * (heading + feature cards + carrier comparison).
   */
  section?: "features" | "carrier";
  /** Override the default feature cards. */
  features?: Feature[];
  /**
   * Override the heading copy. When provided, the heading renders even
   * alongside a specific `section` (e.g. `section="features"`).
   */
  heading?: HeadingContent;
}

export default function TrackingHandledSection({
  section,
  features = FEATURES,
  heading,
}: TrackingHandledSectionProps = {}) {
  const showAll = !section;
  const showFeatures = showAll || section === "features";
  const showCarrier = showAll || section === "carrier";
  const showHeading = showAll || !!heading;
  const headingContent = heading ?? DEFAULT_HEADING;

  return (
    <Box sx={{ py: { xs: 8, md: 12.5 }, bgcolor: "#FFF" }}>
      <Box className="landing-container">
        {/* Heading */}
        {showHeading && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              mb: 6,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#8D8A94",
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "15.6px",
                  letterSpacing: "3.6px",
                  textTransform: "uppercase",
                }}
              >
                {headingContent.eyebrow}
              </Typography>

              <Typography
                component="h2"
                sx={{
                  textAlign: "center",
                  fontFamily: "Dai Banna SIL, serif",
                  fontSize: { xs: "34px", md: "48px" },
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "#000",
                  whiteSpace: "pre-line",
                }}
              >
                {headingContent.title}
                {headingContent.accent && (
                  <Box component="span" sx={{ color: "#8D8A94" }}>
                    {headingContent.accent}
                  </Box>
                )}
              </Typography>
            </Box>

            <Typography
              sx={{
                textAlign: "center",
                color: "#6D6B77",
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "23.04px",
                whiteSpace: "pre-line",
              }}
            >
              {headingContent.subtitle}
            </Typography>
          </Box>
        )}

        {/* Feature carousel — autoplays, pauses on hover */}
        {showFeatures && <FeatureCarousel features={features} />}

        {/* Exceptions, caught early */}
        {showCarrier && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              py: {
                xs: '24px',
                md: '70px'
              },
              px:'24px',
              bgcolor: "#F5F5F6",
              borderRadius: "12px",
              border: "1px solid #EAEAEC",
              overflow: "hidden",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "32px", md: "40px" },
              alignItems: "center",
              justifyContent: "space-between",
              marginBlock: section === 'carrier' ?'-5rem':'4rem'
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "338px" },
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#8D8A94",
                  textTransform: "uppercase",
                  letterSpacing: "3.6px",
                }}
              >
                Exceptions, caught early
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: 500,
                  color: "#000000",
                  fontFamily: "Dai Banna SIL, serif",
                }}
              >
                Never lose a shipment in transit.
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#6D6B77",
                  lineHeight: "21px",
                }}
              >
                Growve watches every shipment against its SLA and flags delays,
                stuck parcels and misroutes the moment they happen — so you act
                before the customer ever notices.
              </Typography>
            </Box>

            {/* Right Side Card */}
            <Box
              sx={
                section === "carrier"
                  ? {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    height: "100%",
                    width: "auto",
                    overflow: "hidden",
                    boxShadow: "none",
                  }
                  : {
                    flex: 1,
                    maxWidth: { xs: "100%", md: 520 },
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
                  }
              }
            >
              <Box
                component="img"
                src={
                  section === "carrier"
                    ? "/images/shipment_tracking/shipment_icons.svg"
                    : "/images/shipment_tracking/shipment_transit.svg"
                }
                alt={
                  section === "carrier"
                    ? "Live courier comparison across carriers"
                    : "Exception alert — shipment stuck at hub before SLA breach"
                }
                sx={
                  section === "carrier"
                    ? { height: "100%", width: "auto", display: "block" }
                    : { width: "100%", height: "auto", display: "block" }
                }
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box >
  );
}
