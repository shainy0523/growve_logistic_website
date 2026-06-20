import { Box } from "@mui/material";
import Image from "next/image";
import ServiceHero from "../service-allocation/ServiceHero";
import EndToEndSection from "./EndToEndSection";
import LeakageSection from "./LeakageSection";
import WhatsInsideSection from "./WhatsInsideSection";
import WeightScannerSection from "./WeightScannerSection";
import WeightMattersSection from "./WeightMattersSection";
import WeightOnePlatformSection from "./WeightOnePlatformSection";
import EverythingSection from "@/components/landing/sections/problems-section/EverythingSection";

const WeightDisputeProtectionView = () => {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          backgroundColor: "#F5F5F6",
          py: "100px",
          overflow: "hidden",
        }}
      >
        <Box
          className="landing-container"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "502px",
              flexShrink: 0,
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
              width: "100%",
              maxWidth: "900px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/hero.png"
              alt="Weight dispute dashboard"
              width={747}
              height={460}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
                boxShadow: "0px 24px 60px rgba(0,0,0,0.12)",
              }}
            />
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
        <WeightScannerSection />
      </Box>
      <Box>
        <WeightMattersSection />
      </Box>
      <Box>
        <EverythingSection
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
