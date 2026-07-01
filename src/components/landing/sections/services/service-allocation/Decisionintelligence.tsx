
import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import SectionHeading from "@/components/landing/ui/SectionHeading";

/* ----------------------------------------------------------------------- */
/* Design tokens (mirrors the Figma variable set)                          */
/* ----------------------------------------------------------------------- */
const t = {
  black: "#000000",
  white: "#FFFFFF",
  subtitle: "#8D8A94",
  secondary: "#6D6B77",
  bgLight: "#F5F5F6",
  divider: "#EAEAEC",
  secMain: "#E1E1E4",
  secLight: "#EBEBED",
  secDark: "#737682",
  textPrimary: "#444050",
  success: "#28C76F",
  successBg: "#CBF2DC",
  warning: "#FF9F43",
  error: "#FF4C51",
  errorLight: "#FF7074",
  errorBg: "#FFD4D5",
  yellow: "#FBC942",
  yellowBg: "#FEF2D2",
};

const display = 'var(--font-dai-banna), sans-serif';
const body = 'Nunito Sans, sans-serif';

/* status -> dot + filled-badge palette */
const STATUS = {
  Good: {
    dot: '#28C76F',
    bg: '#CBF2DC',
  },
  Attention: {
    dot: '#FF9F43',
    bg: '#FEF2D2',
  },
  Critical: {
    dot: '#FF7074',
    bg: '#FFD4D5',
  },
  Failed: {
    dot: '#FF7074',
    bg: '#FFD4D5',
  },
  Assigned: {
    dot: '#28C76F',
    bg: '#CBF2DC',
  },
} as const

type StatusVariant = keyof typeof STATUS

interface DotPillProps {
  label: string
  variant: StatusVariant
}

/* ----------------------------------------------------------------------- */
/* Small reusable pieces                                                   */
/* ----------------------------------------------------------------------- */

// Brand logo assets (in /public/images/common)
const BRAND_LOGOS: Record<string, string> = {
  delhivery: "/images/common/delhivery.svg",
  dtdc: "/images/common/dtdc.svg",
  shadowfax: "/images/common/shadowfox.svg",
  xpressbees: "/images/common/xpressbees.svg",
  amazon: "/images/common/amazon.svg",
  ekart: "/images/common/ekart.svg",
};

// Brand logo tile — uses the real brand asset when available,
// otherwise falls back to a colored letter tile (e.g. BlueDart).
function BrandTile({ name, color, size = 36 }: { name: string; color: string; size?: number }) {
  const logo = BRAND_LOGOS[name?.toLowerCase()];

  if (logo) {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: `${size * 0.22}px`,
          bgcolor: t.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={logo}
          alt={name}
          width={size}
          height={size}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    );
  }

  return (
    <Avatar
      variant="rounded"
      sx={{
        width: size,
        height: size,
        bgcolor: color,
        borderRadius: `${size * 0.22}px`,
        fontFamily: body,
        fontWeight: 700,
        fontSize: size * 0.4,
        color: "#fff",
      }}
    >
      {name[0]}
    </Avatar>
  );
}

// Pill with a colored dot + label (used on the floating courier cards)
function DotPill({ label, variant }: DotPillProps) {
  const s = STATUS[variant]

  return (
    <Box
      className="flex items-center gap-1 rounded-[12px] px-2.5 py-1"
      sx={{ bgcolor: '#F5F5F6' }}
    >
      <Box
        className="h-2 w-2 rounded-full"
        sx={{ bgcolor: s.dot }}
      />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 12,
          color: t.black,
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

// Floating courier summary card (left feature card)
function CourierCard({ name, color, rank, status, faded }: { name: string; color: string; rank: number; status: StatusVariant; faded?: boolean }) {
  return (
    <Box
      className="w-[279px] rounded-[12px] p-4"
      sx={{ bgcolor: t.white, opacity: faded ? 0.34 : 1 }}
    >
      <Box className="flex items-start gap-2.5">
        <BrandTile name={name} color={color} />
        <Box className="flex-1">
          <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black, lineHeight: 1.25 }}>
            {name}
          </Typography>
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.secDark }}>
            Rank #{rank}
          </Typography>
        </Box>
        <DotPill label={status} variant={status} />
      </Box>
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Section heading                                                         */
/* ----------------------------------------------------------------------- */
function Heading() {
  return (
    <SectionHeading
      variant="light"
      align="center"
      size="lg"
      eyebrow="Decision Intelligence"
      title={"Every allocation.\nBacked by"}
      accent="real delivery data."
      subtitle={"Growve evaluates cost, delivery performance, serviceability, transit time, and RTO\nrisk before selecting a courier. Every decision is transparent, measurable, and optimized for success."}
    />
  );
}

type CourierCardData = { name: string; color: string; rank: number; status: StatusVariant; faded?: boolean };

const RISK_COURIER_GROUPS: { position: { left: string; top: string }; cards: CourierCardData[] }[] = [
  { position: { left: "-187px", top: "164px" }, cards: [
    { name: "DTDC", color: "#07287F", rank: 1, status: "Attention", faded: true },
    { name: "Delhivery", color: "#1A1A1A", rank: 1, status: "Good" },
  ] },
  { position: { left: "5px", top: "254px" }, cards: [
    { name: "Xpressbees", color: "#07287F", rank: 3, status: "Attention" },
    { name: "Ekart", color: "#0F4C81", rank: 4, status: "Critical", faded: true },
  ] },
];

/* ----------------------------------------------------------------------- */
/* Card 1 — Avoids Risky Courier Choices                                   */
/* ----------------------------------------------------------------------- */
function RiskCard() {
  return (
    <Box
      className="relative h-[400px] overflow-hidden rounded-[12px] lg:h-auto lg:flex-1"
      sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
    >
      <Box className="absolute left-5 right-5 top-5 max-w-[476px]">
        <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 22, color: t.black, mb: 2 }}>
          Avoids Risky Courier Choices
        </Typography>
        <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>
          Orders with higher return probability are automatically routed to safer delivery partners.
        </Typography>
      </Box>

      {/* scattered courier cards (top row bleeds off the left edge) */}
      {RISK_COURIER_GROUPS.map((group, idx) => (
        <Box
          key={idx}
          className="absolute flex gap-5"
          sx={{
            left: idx === 0 ? group.position.left : "-187px",
            top: group.position.top,
            width: "max-content",
            pr: "20px",
            // Upper group (idx 0) marquees left, lower group (idx 1) marquees right
            '@keyframes courierMarqueeLeft': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-50%)' },
            },
            '@keyframes courierMarqueeRight': {
              from: { transform: 'translateX(-50%)' },
              to: { transform: 'translateX(0)' },
            },
            animation: `${idx === 0 ? 'courierMarqueeLeft' : 'courierMarqueeRight'} 18s linear infinite`,
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {[...group.cards, ...group.cards].map((card, i) => (
            <CourierCard
              key={`${card.name}-${i}`}
              name={card.name}
              color={card.color}
              rank={card.rank}
              status={card.status}
              faded={card.faded}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Card 2 — Compare Every Courier, Instantly (data table)                  */
/* ----------------------------------------------------------------------- */
function ComparisonCard() {
  return (
    <Box
      className="relative h-[400px] overflow-hidden rounded-[12px] p-5 lg:h-auto lg:flex-1"
      sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}` }}
    >
      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 22, color: t.black, mb: 2 }}>
        Compare Every Courier, Instantly
      </Typography>
      <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>
        Evaluate delivery rates, volume share, transit times, and performance before allocation.
      </Typography>

      {/* floating comparison panel (bleeds to the right; scales up with the card) */}
      <Box
        component="img"
        src="/images/smart_allocation/smart_carrier_compare.svg"
        alt="Carrier comparison table"
        className="absolute left-5 top-[160px] w-[1177px] max-w-[220%] sm:left-11 md:max-w-[160%] lg:max-w-none"
        sx={{ display: 'block', height: 'auto' }}
      />
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Card 3 — Reduce Freight Costs (mini line chart)                         */
/* ----------------------------------------------------------------------- */
function FreightCard() {
  return (
    <Box className="flex flex-1 flex-col gap-5">
      <Box
        component="img"
        src="/images/smart_allocation/frieght_card.svg"
        alt="Reduce freight costs comparison"
        className="w-full overflow-hidden rounded-[12px]"
        sx={{ display: 'block', objectFit: 'cover'}}
      />

      <CardCaption title="Reduce Freight Costs" body="Balance cost and delivery success to lower shipping expenses without sacrificing performance." />
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Card 4 — Continuously Improves Allocation (gauge)                       */
/* ----------------------------------------------------------------------- */
function AccuracyCard() {
  return (
    <Box className="flex flex-1 flex-col gap-5">
      <Box
        component="img"
        src="/images/smart_allocation/accuracy_card.svg"
        alt="Allocation accuracy gauge"
        className="w-full overflow-hidden rounded-[12px]"
        sx={{ display: 'block', objectFit: 'cover', height:'auto' }}
      />

      <CardCaption title="Continuously Improves Allocation" body="The engine learns from shipment outcomes and improves routing decisions over time." />
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Card 5 — Auto-Reassigns When Routes Fail                                */
/* ----------------------------------------------------------------------- */
function ReassignCard() {
  return (
    <Box className="flex flex-1 flex-col gap-5">
      <Box
        component="img"
        src="/images/smart_allocation/reassign_card.svg"
        alt="Auto-reassign allocation flow"
        className="w-full overflow-hidden rounded-[12px]"
        sx={{ display: 'block', objectFit: 'cover'}}
      />

      <CardCaption title="Auto-Reassigns When Routes Fail" body="Detects serviceability issues and automatically switches shipments to better-performing couriers." />
    </Box>
  );
}

/* shared caption used by the three bottom cards */
function CardCaption({ title, body: text }: { title: string; body: string }) {
  return (
    <Box className="flex flex-col gap-2">
      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 22, color: t.black }}>{title}</Typography>
      <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>
        {text}
      </Typography>
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Root                                                                    */
/* ----------------------------------------------------------------------- */
export default function DecisionIntelligence() {
  return (
    <Box
      className="mx-auto flex w-full landing-container flex-col gap-12 px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-[194px] lg:py-[100px]"
      sx={{ bgcolor: t.white }}
    >
      <Heading />

      <Box className="flex flex-col gap-5">
        {/* row 1 */}
        <Box className="flex flex-col gap-5 lg:h-[409px] lg:flex-row">
          <RiskCard />
          <ComparisonCard />
        </Box>

        {/* row 2 */}
        <Box className="flex flex-col items-stretch gap-5 md:flex-row">
          <FreightCard />
          <AccuracyCard />
          <ReassignCard />
        </Box>
      </Box>
    </Box>
  );
}