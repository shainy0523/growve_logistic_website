import { Box, Typography } from "@mui/material";
import SectionHeading from "@/components/landing/ui/SectionHeading";

const STATS = [
  {
    value: "98.7%",
    title: "Tracking coverage",
    description:
      "Every shipment is monitored across carriers with live updates and status sync.",
  },
  {
    value: "3 hrs",
    title: "Faster issue detection",
    description:
      "Spot delays, stuck shipments, and delivery exceptions before customers complain.",
  },
  {
    value: "Real-time",
    title: "Exception alerts",
    description:
      "Get notified instantly when a shipment is delayed, failed, misrouted, or requires attention.",
  },
  {
    value: "One view",
    title: "Across all couriers",
    description:
      "Track Delhivery, DTDC, Blue Dart, XpressBees, and others from a single dashboard.",
  },
];

export default function TrackingStatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12.5 },
        overflow: "hidden",
        bgcolor: "#000000",
      }}
    >
      <Box className="landing-container">
        {/* Heading */}
        <Box sx={{ maxWidth: 1000, mx: "auto", mb: 6 }}>
          <SectionHeading
            variant="dark"
            align="center"
            eyebrow="TRACKING WITHOUT BLIND SPOTS"
            title={"Most tracking tools show status.\nGrowve shows"}
            accent=" what needs action."
            subtitle="See every shipment, delay, and delivery exception in real time. Stop chasing courier portals and get complete visibility from pickup to doorstep."
          />
        </Box>

        {/* Cards */}
        <Box
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-5
          "
        >
          {STATS.map((card) => (
            <Box
              key={card.title}
              sx={{
                p: "24px",
                bgcolor: "#18181E",
                borderRadius: "8px",
                border: "1px solid #44485E",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Value */}
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: "30.8px",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  {card.value}
                </Typography>

                {/* Text */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#CFCDE4",
                      fontSize: "20px",
                      fontWeight: 500,
                      fontFamily: "Dai Banna SIL, serif",
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#ACABC1",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
