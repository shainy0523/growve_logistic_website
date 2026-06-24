import { Box } from "@mui/material";
import Image from "next/image";
import ServiceHero from "../service-allocation/ServiceHero";
import EndToEndSection from "./EndToEndSection";
import LeakageSection from "./LeakageSection";
import WhatsInsideSection from "./WhatsInsideSection";
import WeightMattersSection from "./WeightMattersSection";
import TrackingSection from "./WeightTracking";
import EverythingSection from "@/components/landing/sections/problems-section/EverythingSection";
import LogoGridSection from "./LogoGridSection";

const WeightDisputeProtectionView = () => {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 100%)",
          py: { xs: "40px", md: "120px" },
          overflow: "hidden",
        }}
      >
        <Box
          className="landing-container"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: "32px", md: "48px" },
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              maxWidth: "502px",
              flex: { xs: "1 1 100%", md: "0 0 auto" },
            }}
          >
            <ServiceHero
              badge="Weight Dispute Protection"
              title="Stop paying for weight"
              accent="you didn't ship."
              description="Capture true weight at source, catch every courier overcharge automatically, and auto-file disputes before the window closes — so inflated weight slabs stop quietly draining your margin."
            />
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "800px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: { xs: "1 1 100%", md: "1 1 auto" },
              minWidth: 0,
              backgroundColor: '#EBEBED',
              borderRadius: '12px',
              position: 'relative',
              py: {
                xs: 3, md: 6
              },
              px: 3,
              marginTop: {
                xs: '5rem',
                md: 0,
              }
            }}
          >
            <Image
              src="/images/weight_dispute/weight_dispute_hero.svg"
              alt="Weight dispute dashboard"
              width={300}
              height={360}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.12)",
                position: 'relative',
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: {
                  xs: "-70px",
                  md: "-85px",
                },
                right: {
                  xs: "-15px",
                  md: "-70px",
                },
                width: {
                  xs: 230,
                  md: 320,
                },
              }}
            >
              <Image
                src="/images/weight_dispute/weight_dispute_overlay.svg"
                alt="Weight dispute dashboard"
                width={350}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  boxShadow: '0px 5px 20px rgba(0,0,0,.1)',
                  borderRadius: '12px'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <EndToEndSection />
      </Box>
      <Box className="bg-[#000000]">
        <LeakageSection />
      </Box>
      <Box>
        <WhatsInsideSection />
      </Box>
      <Box>
        <WeightMattersSection />
      </Box>
      <Box>
        <LogoGridSection />
      </Box>
      <Box>
        <TrackingSection />
      </Box>
      <Box>
        <EverythingSection
          eyebrow='One platform'
          title={'Weight Dispute Protection is one\npart'}
          accent='of the loop.'
          subtitle='Allocation, tracking, returns and analytics — every stage of the order journey, on one platform.'
          excludeTitles={[
            "Weight Dispute Protection",
            "Billing & Reconciliation",
          ]}
          showCenterCard={false}
        />
      </Box>
    </>
  );
};

export default WeightDisputeProtectionView;
