import { Box, Typography } from "@mui/material";
import Image from "next/image";

const FEATURES = [
  {
    title: "Live map tracking",
    description: "Watch every shipment move in real time, courier agnostic.",
  },
  {
    title: "Proactive customer updates",
    description:
      'Customers get every status automatically — no "where is my order?"',
  },
  {
    title: "Instant exception alerts",
    description:
      "Delays and stuck shipments surface before they become failures.",
  },
  {
    title: "Branded tracking page",
    description: "A tracking page in your brand, not the courier’s.",
  },
];

interface TrackingHandledSectionProps {
  /**
   * Which block to render. Omit to render the whole section
   * (heading + feature cards + carrier comparison).
   */
  section?: "features" | "carrier";
}

export default function TrackingHandledSection({
  section,
}: TrackingHandledSectionProps = {}) {
  const showAll = !section;
  const showFeatures = showAll || section === "features";
  const showCarrier = showAll || section === "carrier";

  return (
    <Box sx={{ py: { xs: 8, md: 12.5 }, bgcolor: "#FFF" }}>
      <Box className="landing-container">
        {/* Heading */}
        {showAll && (
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
              why teams switch
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
              }}
            >
              Tracking is handled for you — from
              <br />
              pickup{" "}
              <Box component="span" sx={{ color: "#8D8A94" }}>
                to doorstep.
              </Box>
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
            }}
          >
            Live location, proactive updates, and exception alerts on
            <br />
            every shipment, across every courier.
          </Typography>
        </Box>
        )}

        {/* Feature cards */}
        {showFeatures && (
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Carrier comparison preview */}
              <Box
                sx={{
                  position: "relative",
                  height: 220,
                  borderRadius: "12px",
                  border: "1px solid #EAEAEC",
                  bgcolor: "#F5F5F6",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/services/carrier-section.png"
                  alt="Carrier comparison dashboard preview"
                  width={301}
                  height={223}
                  style={{
                    position: "absolute",
                    right: "0px",
                    bottom: "0px",
                    width: "88%",
                    height: "auto",
                    borderRadius: "12px 0px 0px 0px",
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
                  }}
                />
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
          ))}
        </Box>
        )}

        {/* Carrier Comparison Table */}
        {showCarrier && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 409,
            p: "20px",
            bgcolor: "#F5F5F6",
            borderRadius: "12px",
            border: "1px solid #EAEAEC",
            overflow: "hidden",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            top: "5rem",
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              width: "338px",
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
                fontSize: "24px",
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
              stuck parcels and misroutes the moment they happen.
            </Typography>
          </Box>

          {/* Right Side Image / Table */}
          <Box
            sx={{
              position: "absolute",
              left: "55%",
              // top: '25px',
              width: "700px",
              height: "360px",
              bgcolor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src="/images/services/carrier-comparison.png"
              alt="Carrier comparison table"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Box>
        )}
      </Box>
    </Box>
  );
}
