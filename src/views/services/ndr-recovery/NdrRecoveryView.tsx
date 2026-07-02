import { Box } from "@mui/material";
import React from "react";
import ServiceHero from "../../../components/landing/sections/services/service-allocation/ServiceHero";
import Image from "next/image";
import EverythingSection from "@/components/landing/sections/problems-section/EverythingSection";
import NDRImpactSection from "@/components/landing/sections/services/ndr-recovery/NDRImpactSection";
import RecoverSection from "@/components/landing/sections/services/ndr-recovery/RecoverSection";
import AutomationSection from "@/components/landing/sections/services/ndr-recovery/AutomationSection";
import AIRecoverySection from "@/components/landing/sections/services/ndr-recovery/AIRecoverySection";
import EndToEndRecoverySection from "@/components/landing/sections/services/ndr-recovery/EndToEndRecoverySection";

const NdrRecoveryAutomationView = () => {
  return (
    <>
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
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: "40px", md: "48px" },
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              flexShrink: 0,
            }}
          >
            <ServiceHero
              badge="NDR Recovery Automation"
              title="Recover failed deliveries before"
              accent="they become returns."
              description="Automatically detect NDR orders, trigger customer outreach, collect delivery preferences, and re-attempt shipments before they turn into RTOs."
            />
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              flexGrow: 1,
              minWidth: 0,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mr: { xs: 0, md: "calc(50% - 50vw)" },
            }}
          >
            <Image
              src="/images/ndr/Ndr_hero.svg"
              alt="NDR Dashboard"
              width={900}
              height={204}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box className="bg-[#000000]">
        <NDRImpactSection />
      </Box>
      <Box>
        <RecoverSection />
      </Box>
      <Box>
        <AutomationSection />
      </Box>
      <Box>
        <AIRecoverySection />
      </Box>
      <Box>
        <EndToEndRecoverySection />
      </Box>
      <Box>
        <EverythingSection
          eyebrow='One platform'
          title={'NDR recovery works better\nwhen connected to'}
          accent='everything else.'
          subtitle='Recovery is most effective when allocation, tracking, returns, billing, and analytics work together. Manage the complete shipment lifecycle from a single platform.'
          excludeTitles={[
            "NDR Recovery Automation",
            "Billing & Reconciliation",
          ]}
          showCenterCard={false}
        />
      </Box>
    </>
  );
};

export default NdrRecoveryAutomationView;
