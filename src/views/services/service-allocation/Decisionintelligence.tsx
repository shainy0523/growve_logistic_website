
import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Chip,
  Checkbox,
  LinearProgress,
  Avatar,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { ArrowDropDown, UnfoldMore, Tune } from "@mui/icons-material";

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

interface StatusBadgeProps {
  label: string
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
function BrandTile({ name, color, size = 36 }: any) {
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
      className="flex items-center gap-1 rounded-[18px] px-2.5 py-1"
      sx={{ bgcolor: s.bg }}
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

// Filled status badge (used inside the comparison table)
function StatusBadge({ label }:StatusBadgeProps) {
   const s =
    STATUS[label as StatusVariant] ??
    STATUS.Good
  return (
    <Chip
      label={label}
      sx={{
        height: 20,
        borderRadius: "9px",
        bgcolor: s.bg,
        "& .MuiChip-label": { px: 1, py: 0 },
        fontFamily: body,
        fontWeight: 600,
        fontSize: 11,
        color: t.black,
      }}
    />
  );
}

// Floating courier summary card (left feature card)
function CourierCard({ name, color, rank, status, faded }:any) {
  return (
    <Box
      className="w-[279px] rounded-xl p-4"
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
    <Box className="flex flex-col items-center gap-5 text-center">
      <Typography
        sx={{
          fontFamily: body,
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "3.6px",
          textTransform: "uppercase",
          color: t.subtitle,
        }}
      >
        Decision Intelligence
      </Typography>

      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 48, lineHeight: 1.1, color: t.black }}>
        Every allocation.
        <br />
        Backed by <Box component="span" sx={{ color: t.subtitle }}>real delivery data.</Box>
      </Typography>

      <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 16, lineHeight: 1.44, color: t.secondary, maxWidth: 760 }}>
        Growve evaluates cost, delivery performance, serviceability, transit time, and RTO risk before
        selecting a courier. Every decision is transparent, measurable, and optimized for success.
      </Typography>
    </Box>
  );
}

const RISK_COURIER_GROUPS = [
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
      className="relative flex-1 overflow-hidden rounded-xl"
      sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
    >
      <Box className="absolute left-5 top-5 w-[476px]">
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
const CARRIERS = [
  { name: "Delhivery", color: "#1A1A1A", share: 60, rate: "96.2%", first: "91.4%", transit: "2.1 Days", rto: "2.8%", cost: "₹48", status: "Good" },
  { name: "DTDC", color: "#07287F", share: 34, rate: "93.1%", first: "88.2%", transit: "3 Days", rto: "4.1%", cost: "₹38", status: "Good" },
  { name: "BlueDart", color: "#0174B7", share: 30, rate: "88.4%", first: "84.1%", transit: "3.6 Days", rto: "7.2%", cost: "₹32", status: "Attention" },
  { name: "Shadowfax", color: "#1A1A1A", share: 25, rate: "84.8%", first: "81.4%", transit: "4.2 Days", rto: "9.1%", cost: "₹28", status: "Attention" },
  { name: "Xpressbees", color: "#07287F", share: 20, rate: "98.2%", first: "79.9%", transit: "4.8 Days", rto: "12.4%", cost: "₹26", status: "Critical" },
  { name: "Amazon", color: "#231F20", share: 12, rate: "82.3%", first: "76.1%", transit: "5 Days", rto: "4.8%", cost: "₹34", status: "Critical" },
  { name: "Ekart", color: "#0F4C81", share: 8, rate: "79.2%", first: "91.9%", transit: "5.2 Days", rto: "8.9%", cost: "₹44", status: "Good" },
];

const HEAD = ["Carrier", "Volume Share", "Delivery Rate", "First Attempt", "Avg. Transit", "RTO Rate", "Cost/Shipment", "Status"];

const headCellSx = {
  fontFamily: body,
  fontSize: 10,
  fontWeight: 400,
  color: t.black,
  border: 0,
  borderBottom: `1px solid ${t.secMain}`,
  py: 1.75,
  whiteSpace: "nowrap",
};
const bodyCellSx = {
  fontFamily: body,
  fontSize: 11,
  color: t.black,
  border: 0,
  borderBottom: `1px solid ${t.secMain}`,
  py: 1.75,
};

function FilterChip({ label }:any) {
  return (
    <Box
      className="flex items-center gap-1 rounded-lg px-2.5 py-1.5"
      sx={{ outline: `1px solid ${t.secMain}`, outlineOffset: "-1px" }}
    >
      <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.black }}>{label}</Typography>
      <ArrowDropDown sx={{ fontSize: 16, color: t.black }} />
    </Box>
  );
}

function ComparisonCard() {
  return (
    <Box
      className="relative flex-1 overflow-hidden rounded-xl p-5"
      sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
    >
      <Typography sx={{ fontFamily: display, fontWeight: 500, fontSize: 22, color: t.black, mb: 2 }}>
        Compare Every Courier, Instantly
      </Typography>
      <Typography sx={{ fontFamily: body, fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: t.secondary }}>
        Evaluate delivery rates, volume share, transit times, and performance before allocation.
      </Typography>

      {/* floating table panel */}
      <Box className="absolute left-11 top-[157px] w-[1177px] rounded-xl p-4" sx={{ bgcolor: t.white }}>
        <Box className="mb-4 flex items-center justify-between">
          <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 16, color: t.black }}>
            Carrier Comparison
          </Typography>
          <Box className="flex items-center gap-3">
            <FilterChip label="All" />
            <FilterChip label="Courier: All" />
            <Box className="rounded-lg p-1.5" sx={{ bgcolor: t.secLight }}>
              <Tune sx={{ fontSize: 16, color: t.textPrimary }} />
            </Box>
          </Box>
        </Box>

        <Table size="small" sx={{ "& td, & th": { px: 1.25 } }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" sx={{ ...headCellSx, width: 12 }}>
                <Checkbox size="small" sx={{ p: 0, "& svg": { fontSize: 14 } }} />
              </TableCell>
              {HEAD.map((h) => (
                <TableCell key={h} sx={headCellSx}>
                  <Box className="flex items-center gap-0.5">
                    {h}
                    <UnfoldMore sx={{ fontSize: 12, color: t.black }} />
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {CARRIERS.map((c, i) => (
              <TableRow key={c.name} sx={i === CARRIERS.length - 1 ? { "& td": { borderBottom: 0 } } : undefined}>
                <TableCell padding="checkbox" sx={bodyCellSx}>
                  <Checkbox size="small" sx={{ p: 0, "& svg": { fontSize: 14 } }} />
                </TableCell>
                <TableCell sx={bodyCellSx}>
                  <Box className="flex items-center gap-2">
                    <BrandTile name={c.name} color={c.color} size={20} />
                    <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.black }}>
                      {c.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={bodyCellSx}>
                  <Box className="flex items-center gap-1.5">
                    <Box sx={{ width: 70 }}>
                      <LinearProgress
                        variant="determinate"
                        value={c.share}
                        sx={{
                          height: 6,
                          borderRadius: 10,
                          bgcolor: t.secLight,
                          "& .MuiLinearProgress-bar": { bgcolor: t.yellow, borderRadius: 10 },
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 11, color: t.black }}>
                      {c.share}%
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ ...bodyCellSx, fontWeight: 400 }}>{c.rate}</TableCell>
                <TableCell sx={{ ...bodyCellSx, fontWeight: 400 }}>{c.first}</TableCell>
                <TableCell sx={{ ...bodyCellSx, fontWeight: 600 }}>{c.transit}</TableCell>
                <TableCell sx={{ ...bodyCellSx, fontWeight: 600 }}>{c.rto}</TableCell>
                <TableCell sx={{ ...bodyCellSx, fontWeight: 600 }}>{c.cost}</TableCell>
                <TableCell sx={bodyCellSx}>
                  <StatusBadge label={c.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
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
        className="relative h-[244px] overflow-hidden rounded-xl"
        sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
      >
        <svg viewBox="0 0 337 244" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="blkFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(128,128,128,0.20)" />
              <stop offset="100%" stopColor="rgba(128,128,128,0)" />
            </linearGradient>
            <linearGradient id="ylwFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(251,201,66,0.20)" />
              <stop offset="100%" stopColor="rgba(251,201,66,0)" />
            </linearGradient>
          </defs>

          {/* "Without Allocation" — higher cost line */}
          <path d="M-9 70 L66 64 L66 200 L-9 200 Z" fill="url(#blkFade)" />
          <path d="M-9 70 L66 64" stroke={t.black} strokeWidth="2" fill="none" />
          <circle cx="66" cy="64" r="5" fill={t.black} stroke="#fff" strokeWidth="1" />
          <text x="66" y="50" textAnchor="middle" fontFamily="Nunito Sans" fontSize="10" fontWeight="600" fill={t.textPrimary}>₹82</text>

          {/* "With Growve" — lower cost line */}
          <path d="M97 100 L172 90 L172 200 L97 200 Z" fill="url(#ylwFade)" />
          <path d="M97 100 L172 90" stroke={t.yellow} strokeWidth="2" fill="none" />
          <circle cx="172" cy="90" r="5" fill={t.yellow} stroke="#fff" strokeWidth="1" />
          <text x="172" y="80" textAnchor="middle" fontFamily="Nunito Sans" fontSize="10" fontWeight="600" fill={t.textPrimary}>₹69</text>

          <text x="55" y="220" textAnchor="middle" fontFamily="Nunito Sans" fontSize="10" fill={t.secDark}>Without Allocation</text>
          <text x="163" y="220" textAnchor="middle" fontFamily="Nunito Sans" fontSize="10" fontWeight="600" fill={t.textPrimary}>With Growve</text>
        </svg>
      </Box>

      <CardCaption title="Reduce Freight Costs" body="Balance cost and delivery success to lower shipping expenses without sacrificing performance." />
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Card 4 — Continuously Improves Allocation (gauge)                       */
/* ----------------------------------------------------------------------- */
function AccuracyCard() {
  const pct = 93;
  const r = 90;
  const c = 2 * Math.PI * r;
  return (
    <Box className="flex flex-1 flex-col gap-5">
      <Box
        className="relative flex h-[244px] items-center justify-center rounded-xl"
        sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
      >
        <Box className="relative flex h-[174px] w-[267px] items-center justify-center rounded-xl" sx={{ bgcolor: t.white }}>
          <svg width="170" height="170" viewBox="0 0 204 204" className="absolute">
            <defs>
              <linearGradient id="gaugeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF9DD" />
                <stop offset="55%" stopColor={t.yellow} />
                <stop offset="100%" stopColor={t.yellow} />
              </linearGradient>
            </defs>
            <circle cx="102" cy="102" r={r} fill="none" stroke="#E1E1E1" strokeWidth="24" />
            <circle
              cx="102"
              cy="102"
              r={r}
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="24"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - pct / 100)}
              transform="rotate(-90 102 102)"
            />
          </svg>
          <Box className="z-10 flex flex-col items-center gap-1">
            <Typography sx={{ fontFamily: body, fontSize: 10, color: "#757575" }}>Accuracy</Typography>
            <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 24, color: t.black }}>{pct}%</Typography>
            <Typography sx={{ fontFamily: body, fontSize: 10, color: "#757575" }}>6 Month Allocation</Typography>
          </Box>
        </Box>
      </Box>

      <CardCaption title="Continuously Improves Allocation" body="The engine learns from shipment outcomes and improves routing decisions over time." />
    </Box>
  );
}

/* ----------------------------------------------------------------------- */
/* Card 5 — Auto-Reassigns When Routes Fail                                */
/* ----------------------------------------------------------------------- */
function ReassignRow({ title, id, status }:any) {
  return (
    <Box className="w-[279px] rounded-xl p-4" sx={{ bgcolor: t.white }}>
      <Box className="flex items-start gap-2.5">
        <Box className="flex-1">
          <Typography sx={{ fontFamily: body, fontWeight: 700, fontSize: 14, color: t.black, lineHeight: 1.25 }}>
            {title}
          </Typography>
          <Typography sx={{ fontFamily: body, fontWeight: 600, fontSize: 12, color: t.secDark }}>{id}</Typography>
        </Box>
        <DotPill label={status} variant={status} />
      </Box>
    </Box>
  );
}

function ReassignCard() {
  return (
    <Box className="flex flex-1 flex-col gap-5">
      <Box
        className="relative h-[244px] overflow-hidden rounded-xl"
        sx={{ bgcolor: t.bgLight, outline: `1px solid ${t.divider}`, outlineOffset: "-1px" }}
      >
        <Box className="absolute left-[29px] top-[42px] flex flex-col gap-5">
          <ReassignRow title="Original Allocation" id="#GRV-48231" status="Failed" />
          <ReassignRow title="Auto Reassigned" id="#GRV-48231-A1" status="Assigned" />
        </Box>
      </Box>

      <CardCaption title="Auto-Reassigns When Routes Fail" body="Detects serviceability issues and automatically switches shipments to better-performing couriers." />
    </Box>
  );
}

/* shared caption used by the three bottom cards */
function CardCaption({ title, body: text }:any) {
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
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-[194px] py-[100px]"
      sx={{ bgcolor: t.white }}
    >
      <Heading />

      <Box className="flex flex-col gap-5">
        {/* row 1 */}
        <Box className="flex h-[409px] gap-5">
          <RiskCard />
          <ComparisonCard />
        </Box>

        {/* row 2 */}
        <Box className="flex items-stretch gap-5">
          <FreightCard />
          <AccuracyCard />
          <ReassignCard />
        </Box>
      </Box>
    </Box>
  );
}