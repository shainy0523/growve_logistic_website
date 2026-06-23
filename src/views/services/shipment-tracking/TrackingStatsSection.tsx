import { Box, Typography } from "@mui/material";

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
        <Box
          sx={{
            maxWidth: 1000,
            mx: "auto",
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: "#9191A8",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              mb: 2.5,
            }}
          >
            TRACKING WITHOUT BLIND SPOTS
          </Typography>

          <Typography
            sx={{
              fontFamily: "Dai Banna SIL, serif",
              fontSize: {
                xs: "34px",
                md: "48px",
              },
              lineHeight: 1.1,
              fontWeight: 500,
              color: "#FFF",
            }}
          >
            Most tracking tools show status.
            <br />
            <Box
              component="span"
              sx={{
                color: "#9191A8",
              }}
            >
              Growve shows what needs action.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 760,
              mx: "auto",
              fontSize: "16px",
              lineHeight: "23px",
              color: "#ACABC1",
            }}
          >
            See every shipment, delay, and delivery exception in real time. Stop
            chasing courier portals and get complete visibility from pickup to
            doorstep.
          </Typography>
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
