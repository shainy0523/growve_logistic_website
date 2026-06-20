import NdrRecoveryAutomationView from "@/views/services/ndr-recovery/NdrRecoveryView"
import SmartCourierAllocationView from "@/views/services/service-allocation/SmartCourierAllocationView"
import WeightDisputeProtectionView from "@/views/services/weight-dispute/WeightDisputeProtectionView"
import RealTimeShipmentTrackingView from "@/views/services/shipment-tracking/RealTimeShipmentTrackingView"
import PerformanceAnalyticsView from "@/views/services/performance-analytics/PerformanceAnalyticsView"


export interface NavLink {
  label: string
  href: string
  hasMenu?: boolean
}

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Problems',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    hasMenu: true,
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const SERVICES = [
  {
    slug: 'smart-courier-allocation',
    title: 'Smart Courier Allocation',
    description: 'Choose the best courier automatically.',
    icon: 'material-symbols:route-outline',
  },
  {
    slug: 'returns-rto-control',
    title: 'Returns & RTO Control',
    description: 'Reduce returns and recover orders.',
    icon: 'material-symbols:assignment-return-outline-rounded',
  },
  {
    slug: 'shipment-tracking',
    title: 'Real-Time Shipment Tracking',
    description: 'Track every shipment in real time.',
    icon: 'material-symbols:location-searching-rounded',
  },
  {
    slug: 'weight-dispute-protection',
    title: 'Weight Dispute Protection',
    description: 'Prevent incorrect courier charges.',
    icon: 'material-symbols:scale-outline',
  },
  {
    slug: 'performance-analytics',
    title: 'Performance Analytics',
    description: 'Monitor logistics performance metrics.',
    icon: 'material-symbols:analytics-outline',
  },
  {
    slug: 'marketplace-integrations',
    title: 'Marketplace Integrations',
    description: 'Connect stores and sales channels.',
    icon: 'material-symbols:storefront-outline',
  },
  {
    slug: 'billing-reconciliation',
    title: 'Billing & Reconciliation',
    description: 'Manage invoices and payments.',
    icon: 'material-symbols:receipt-long-outline',
  },
  {
    slug: 'ndr-recovery-automation',
    title: 'NDR Recovery Automation',
    description: 'Recover failed deliveries automatically.',
    icon: 'material-symbols:sync-outline',
  },
]

export const SERVICE_PAGES = {
  'smart-courier-allocation': SmartCourierAllocationView,
  // 'returns-rto-control': ReturnsRtoControlView,
  'shipment-tracking': RealTimeShipmentTrackingView,
  'weight-dispute-protection': WeightDisputeProtectionView,
  'performance-analytics': PerformanceAnalyticsView,
  // 'marketplace-integrations': MarketplaceIntegrationsView,
  // 'billing-reconciliation': BillingReconciliationView,
  'ndr-recovery-automation': NdrRecoveryAutomationView,
}

export const HERO = {
  badge: 'NOW LIVE ACROSS INDIA',
  titleLeading: 'Smarter logistics.',
  titleSecondary: 'Built for',
  titleAccent: 'modern businesses.',
  subtitle:
    'Automate courier selection, recover failed deliveries, track every order in real time, and gain complete visibility into shipping performance — all from a single platform.',
  primaryCta: 'Get Started',
  secondaryCta: 'See how it works',
}

export const FEATURE_CARDS = [
  {
    icon: 'material-symbols:local-shipping-outline-rounded',
    title: 'Smart Multi-Courier',
    description: 'Automatically choose the best courier based on cost, delivery performance & serviceability.',
  },
  {
    icon: 'material-symbols:published-with-changes',
    title: 'NDR Recovery',
    description: 'Recover failed deliveries through automated customer outreach & intelligent retry workflows.',
  },
  {
    icon: 'material-symbols:assignment-return-outline',
    title: 'Returns & RTO Control',
    description: 'Reduce return losses with complete visibility into return reasons.',
  },
  {
    icon: 'material-symbols:travel-explore-rounded',
    title: 'Real-Time Visibility',
    description: 'Track every shipment milestone from pickup to final delivery in one place.',
  },
] as const

export const ADVANTAGE = {
  eyebrow: 'THE GROWVE ADVANTAGE',
  titleLeading: 'Stop reacting to shipping problems Start',
  titleAccent: ' preventing them.',
  subtitle:
    'Growve helps teams identify delivery risks, recover failed shipments, and stay ahead of operational issues before they impact customers or revenue.',
  cards: [
    {
      title: 'Catch delivery issues before they become returns.',
      description:
        'Monitor NDR trends, delivery exceptions, customer availability issues, and courier performance in real time. Take action before failed deliveries turn into costly RTOs.',
    },
    {
      title: 'Manage shipments from anywhere.',
      description:
        'Access shipment performance, delivery updates, order activity, and business metrics through a mobile-first experience designed for teams on the move.',
    },
  ],
  marquee: [
    '27,000+ PIN CODES',
    '15+ COURIER PARTNERS',
    'REAL-TIME TRACKING',
    'PHOTO PROOF OF DELIVERY',
    'WEIGHT DISPUTE PROTECTION',
    'SMART COURIER ALLOCATION',
    'RETURNS MANAGEMENT',
  ],
  ndrChart: {
    title: 'NDR reason breakdown',
    caption: '18 open NDRs · take action before auto-RTO triggers',
    rows: [
      { label: 'Customer not available', count: 7, percent: 30 },
      { label: 'Wrong address / not found', count: 4, percent: 44 },
      { label: 'Customer refused delivery', count: 3, percent: 22 },
      { label: 'Phone not reachable', count: 5, percent: 88 },
      { label: 'Door locked / no one home', count: 6, percent: 67 },
    ],
  },
  mobileMetrics: {
    title: 'All Orders',
    cards: [
      { label: 'Total Revenue', value: '₹ 19,000', delta: '0.7%', note: 'Days 90 this week' },
      { label: 'Successful Deliveries', value: '94.2%', delta: '0.7%', note: 'Up by 0.7% this week' },
      { label: 'Average Delivery Time', value: '2.3 Days', delta: '0.7%', note: 'Up by 0.7% this week' },
      { label: 'RTO / Failed Delivery Rate', value: '3.8%', delta: '0.7%', note: 'Up by 0.7% this week' },
    ],
  },
}

export const PLATFORM = {
  eyebrow: 'THE PLATFORM',
  titleLeading: 'Built for teams that',
  titleAccent: 'ship at scale.',
  subtitle:
    'Connect your sales channels, automate logistics workflows, and manage operations from a single platform designed for growing businesses.',
  cards: [
    {
      title: 'Connect marketplaces & stores in minutes.',
      image:'/images/phone-image.png',
      description: 'Automatically sync orders, inventory updates, and shipment activity across all connected sales channels.',
      preview: 'mobile',
    },
    {
      title: 'Manage every order from one workspace.',
      image:'/images/image-4.png',
      description: 'Create shipments, monitor statuses, coordinate fulfillment, and keep operations moving from a single dashboard.',
      preview: 'laptop',
    },
  ],
  callout: {
    eyebrow: 'THE GROWVE ADVANTAGE',
    titleLeading: "Logistics shouldn't require five",
    titleAccent: 'different tools.',
    subtitle:
      'Built to help growing brands streamline execution, improve delivery outcomes, and stay focused on what matters most.',
  },
} as const

export const ONE_PLATFORM = {
  eyebrow: 'CORE CAPABILITIES',
  titleLeading: 'One platform. Every',
  titleAccent: 'shipment workflow.',
  subtitle:
    'Manage shipments, monitor performance, recover failed deliveries, and optimize operations from a unified logistics workspace.',
  topCards: [
    {
      title: 'Centralized Shipment Management',
      description: 'Create, manage, and monitor shipments from a single dashboard designed to keep operations organized at every stage.',
    },
    {
      title: 'Real-Time Operational Insights',
      description: 'Track delivery performance, transit times, shipment volume, and courier efficiency with live logistics analytics.',
    },
  ],
  listCards: [
    {
      title: 'Smart Courier Allocation',
      items: ['Compare multiple courier partners', 'Select the most efficient service', 'Optimize delivery performance'],
    },
    {
      title: 'NDR and Delivery Recovery',
      items: ['Identify failed delivery attempts', 'Trigger recovery workflows', 'Reduce avoidable RTO losses'],
    },
    {
      title: 'Returns Management',
      items: ['Monitor return requests', 'Streamline reverse pickups', 'Improve post-delivery operations'],
    },
  ],
}

export const TRACKING = {
  eyebrow: 'REAL-TIME VISIBILITY',
  titleLeading: 'Track every shipment. Understand',
  titleAccent: 'every outcome.',
  subtitle:
    'From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data.',
  activeShipments: { value: '1,284', label: 'shipments', delta: '+8.7% from last week' },
  revenue: { value: '₹2,57,230', label: 'Total Revenue', target: '83% From Target Revenue' },
  shipment: {
    id: '#TN29A78463',
    status: 'In Transit',
    note: 'On Time',
    from: { city: 'Chennai, TN, IND', stamp: 'May 12, 2026 — 08:00 AM' },
    to: { city: 'Mumbai, MH, IND', stamp: 'May 15, 2026 — 11:00 AM (estimated)' },
    courier: { name: 'Arjun Patel', company: 'Blue Dart Express' },
  },
}

export const EVERYTHING = {
  eyebrow: 'CORE CAPABILITIES',
  titleLeading: 'Everything you need',
  titleAccent: 'to run logistics efficiently.',
  subtitle:
    'From pickup to delivery, get complete visibility into shipment movement, courier performance, and business-critical logistics data.',
  cards: [
    {
      title: 'Smart Courier Allocation',
      description: 'Choose the best courier for every shipment based on delivery performance, cost, serviceability, and historical success rates.',
    },
    {
      title: 'Returns & RTO Control',
      description: 'Reduce return losses with complete visibility into return reasons, RTO trends, and recovery opportunities.',
    },
    {
      title: 'Real-Time Shipment Tracking',
      description: 'Track every shipment milestone from pickup to final delivery through a unified tracking experience.',
    },
    {
      title: 'Weight Dispute Protection',
      description: 'Identify billing discrepancies, monitor weight changes, and prevent unnecessary courier charges.',
    },
    {
      title: 'Performance Analytics',
      description: 'Measure courier performance, delivery rates, transit times, NDR trends, and operational efficiency.',
    },
    {
      title: 'Marketplace Integrations',
      description: 'Connect stores and marketplaces to sync orders, inventory, tracking updates, and shipment data automatically.',
    },
    {
      title: 'Billing & Reconciliation',
      description: 'Manage shipping costs, invoices, wallet transactions, and courier billing from one place.',
    },
    {
      title: 'NDR Recovery Automation',
      description: 'Recover failed deliveries automatically through intelligent workflows, customer outreach, and retry recommendations.',
    },
  ],
  centerCard: {
    title: 'Explore the Growve Platform',
    description: 'Discover the tools that power smarter shipping operations.',
  },
}

export const FAQ = {
  eyebrow: 'FREQUENTLY ASKED QUESTIONS',
  titleLeading: 'Questions and',
  titleAccent: 'Answers',
  subtitle:
    'Learn how Growve helps you streamline shipping operations, automate workflows, and manage logistics from a single platform.',
  items: [
    {
      question: 'How quickly can I get started with Growve?',
      answer:
        'You can sign up, connect your sales channels, and book your first shipment in under 15 minutes. Our onboarding flow walks you through every step.',
    },
    {
      question: 'Which platforms does Growve support?',
      answer:
        'Growve integrates with Shopify, WooCommerce, Amazon, Flipkart, Magento, and other major marketplaces and storefronts via direct APIs.',
    },
    {
      question: 'How does courier selection work?',
      answer:
        'Smart Courier Allocation evaluates cost, transit time, serviceability, NDR history, and SLA performance for every shipment in real time.',
    },
    {
      question: 'Can I track all shipments in one place?',
      answer:
        'Yes — all shipments across every connected courier appear in a unified dashboard with live milestones, ETAs, and exception alerts.',
    },
    {
      question: 'How does Growve help reduce RTOs?',
      answer:
        'NDR Recovery workflows automatically contact customers, reschedule deliveries, and confirm addresses before a shipment turns into an RTO.',
    },
    {
      question: 'What insights and reports are available?',
      answer:
        'Performance analytics cover delivery rate, first-attempt success, transit times, NDR trends, courier comparison, and cost per shipment.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes — every Growve account includes email and in-app support, with priority support available on growth and enterprise plans.',
    },
    {
      question: 'Can Growve scale with my business?',
      answer:
        'From a few hundred shipments to millions per month, the Growve platform is built for high-volume operations with enterprise-grade reliability.',
    },
  ],
}

export const CTA = {
  eyebrow: 'GET STARTED TODAY',
  titleLeading: 'Ready to Growve',
  titleAccent: 'Logistics',
  subtitle:
    'Set up your account, connect your store, and go live instantly. No complex setup, no delays — just faster logistics from day one.',
  primary: 'Get Started',
  secondary: 'Book a Demo',
}

export const FOOTER = {
  tagline:
    'Built by e-commerce sellers shipping 35K+ orders/month. Courier aggregation & fulfillment for Indian sellers.',
  services: [
    'Smart Courier Allocation',
    'Returns & RTO Control',
    'Real-Time Shipment Tracking',
    'Weight Dispute Protection',
    'Performance Analytics',
    'Marketplace Integrations',
    'Billing & Reconciliation',
    'NDR Recovery Automation',
  ],
  office: {
    address:
      'Unit no. 404, Filix Tower, LBS Marg, Oppo. Asian Paints, Sonapur, Bhandup West, Mumbai, Maharashtra 400078',
    email: 'admin@growve.in',
    phone: '+91 86525 92752',
  },
  navigate: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#platform' },
    { label: 'Contact', href: '#footer' },
    { label: 'Track', href: '#tracking' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of service', href: '#' },
  ],
  copyright: '© 2026 Growve Logistics. All rights reserved.',
}
