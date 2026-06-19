# Folder Structure

This project is a Next.js 15 logistics marketing website built with React 19, TypeScript, Material UI, Tailwind CSS, Iconify, Leaflet, and Recharts.

The actual app lives inside the `growve_logistic_website/` directory.

## Top-Level Layout

```text
growve_logistic_website/
├── public/
├── src/
│   ├── @core/
│   ├── app/
│   ├── components/
│   ├── layouts/
│   ├── utils/
│   └── views/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Root Files

| Path | Purpose |
| --- | --- |
| `package.json` | Project metadata, npm scripts, dependencies, and dev dependencies. |
| `package-lock.json` | Locked dependency versions. |
| `next.config.ts` | Next.js configuration. Currently enables React strict mode. |
| `tsconfig.json` | TypeScript configuration and path aliases. |
| `eslint.config.mjs` | ESLint configuration for code quality. |
| `postcss.config.mjs` | PostCSS/Tailwind CSS processing configuration. |
| `next-env.d.ts` | Next.js generated TypeScript declarations. |
| `tsconfig.tsbuildinfo` | TypeScript incremental build cache. |
| `.next/` | Generated Next.js build/dev output. Do not edit manually. |
| `node_modules/` | Installed npm packages. Do not edit manually. |

## Path Aliases

The project uses these aliases from `tsconfig.json`:

```ts
@/* -> ./src/*
@core/* -> ./src/@core/*
```

Example:

```ts
import LandingLayout from '@/layouts/LandingLayout'
import theme from '@/@core/theme'
```

## Source Folder

```text
src/
├── @core/
│   └── theme/
├── app/
│   ├── about/
│   ├── services/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── landing/
│   └── logo/
├── layouts/
├── utils/
│   └── providers/
└── views/
    ├── landing/
    └── services/
```

## `src/app`

This folder uses the Next.js App Router. Files here define URL routes, global app setup, metadata, fonts, and route-level entry points.

| Path | Purpose |
| --- | --- |
| `src/app/layout.tsx` | Root app shell. Loads fonts, metadata, viewport settings, MUI cache provider, color scheme script, and global theme provider. |
| `src/app/page.tsx` | Home route `/`. Wraps `LandingView` in `LandingLayout`. |
| `src/app/about/page.tsx` | About route `/about`. Currently renders placeholder about content inside `LandingLayout`. |
| `src/app/services/[slug]/page.tsx` | Dynamic service route such as `/services/smart-courier-allocation`. Looks up the matching view from `SERVICE_PAGES`. |
| `src/app/globals.css` | Global CSS and Tailwind/global style setup. |

### Routing Pattern

Route files stay thin. They mainly choose the layout and import a page-level view from `src/views`.

For example, the home page:

```text
src/app/page.tsx
└── src/layouts/LandingLayout.tsx
    └── src/views/landing/LandingView.tsx
```

Dynamic service pages are controlled by `SERVICE_PAGES` in:

```text
src/components/landing/data/landing.data.ts
```

To add a new service page:

1. Create the service view under `src/views/services/<service-name>/`.
2. Add the service metadata to `SERVICES`.
3. Register the route component in `SERVICE_PAGES`.

## `src/layouts`

Layouts wrap route content with shared page chrome.

| Path | Purpose |
| --- | --- |
| `src/layouts/LandingLayout.tsx` | Shared public website layout. Adds navbar, page content, FAQ section, CTA section, and footer. |

Current layout order:

```text
LandingNavbar
page content
FaqSection
CtaSection
LandingFooter
```

## `src/views`

Views are page-level compositions. They assemble sections and feature-specific components into full pages.

```text
views/
├── landing/
│   └── LandingView.tsx
└── services/
    ├── ndr-recovery/
    │   └── NdrRecoveryService.tsx
    └── service-allocation/
        ├── SmartCourierAllocationView.tsx
        ├── ServiceHero.tsx
        ├── DecisionEngineSection.tsx
        ├── ManualRoutingSection.tsx
        ├── Decisionintelligence.tsx
        ├── StatsCard.tsx
        ├── CourierRankingCard.tsx
        └── DecisionSignalCard.tsx.tsx
```

Use `views` for screens that represent a full page or a major service page. Smaller reusable UI pieces should live in `components`.

## `src/components`

This folder contains reusable UI used by layouts and views.

```text
components/
├── landing/
│   ├── data/
│   ├── sections/
│   │   └── problems-section/
│   ├── ui/
│   ├── LandingFooter.tsx
│   ├── LandingNavbar.tsx
│   └── ServicesMegaMenu.tsx
└── logo/
    └── TruckLogo.tsx
```

### `src/components/landing`

Landing-specific shared components.

| Path | Purpose |
| --- | --- |
| `LandingNavbar.tsx` | Main public navigation. |
| `LandingFooter.tsx` | Public website footer. |
| `ServicesMegaMenu.tsx` | Service dropdown/mega menu. |
| `data/landing.data.ts` | Central landing and service data, nav links, section copy, service list, and service page registry. |

### `src/components/landing/sections/problems-section`

Home page and public marketing sections.

Important section components include:

```text
HeroSection.tsx
FeatureCardsSection.tsx
Logisticshero.tsx
AdvantageSection.tsx
PlatformSection.tsx
OnePlatformSection.tsx
SalesChannelView.tsx
TrackingSection.tsx
EverythingSection.tsx
FaqSection.tsx
CtaSection.tsx
```

Supporting visual/card components include:

```text
HeroDashboard.tsx
LaptopMockup.tsx
StoreIntegrationShowcase.tsx
ActiveShipmentsCard.tsx
LiveTrackingCard.tsx
NDRBreakdownCard.tsx
RevenueCard.tsx
ShipmentMap.tsx.tsx
Shipmenttrackinghero.tsx
```

Note: this directory name currently says `problems-section`, but it contains more than problem-specific sections. It is the main home/landing section folder today.

### `src/components/landing/ui`

Small reusable landing UI primitives:

```text
BrandLogo.tsx
PrimaryCta.tsx
SecondaryCta.tsx
SectionHeading.tsx
```

Use this folder for small repeated landing UI pieces that are not full page sections.

## `src/@core`

Core design system and theme configuration.

```text
@core/
└── theme/
    ├── index.ts
    ├── colorSchemes.ts
    ├── typography.ts
    ├── tokens/
    │   └── typography.tokens.ts
    └── types/
        └── typography.d.ts
```

| Path | Purpose |
| --- | --- |
| `theme/index.ts` | Creates the MUI theme, color schemes, typography, shape, and component overrides. |
| `theme/colorSchemes.ts` | Light and dark color scheme values. |
| `theme/typography.ts` | MUI typography configuration. |
| `theme/tokens/typography.tokens.ts` | Typography token source. |
| `theme/types/typography.d.ts` | TypeScript theme typography type extensions. |

## `src/utils`

Shared utilities and app-level constants.

```text
utils/
├── constant.ts
└── providers/
    └── MuiThemeProvider.tsx
```

| Path | Purpose |
| --- | --- |
| `constant.ts` | Shared app URLs and section IDs. |
| `providers/MuiThemeProvider.tsx` | Client-side MUI `ThemeProvider` and `CssBaseline` wrapper. |

## `public`

Static assets served directly from the site root.

```text
public/
└── images/
    ├── Logo1.png
    ├── footer-logo.png
    ├── hero_bg.png
    ├── image-4.png
    ├── laptop-latest-1.png
    ├── laptop-latest.png
    ├── laptop.png
    ├── logo-design.png
    ├── logo.png
    ├── logo2.png
    ├── map.png
    ├── phone-image.png
    ├── salesview.png
    ├── smart_allocation.png
    ├── truck-logo.png
    └── truck.png
```

Images are referenced with root-relative paths such as:

```ts
'/images/phone-image.png'
```

## Where To Add New Code

| Task | Recommended location |
| --- | --- |
| Add a new route | `src/app/<route>/page.tsx` |
| Add a full page view | `src/views/<feature>/` |
| Add a service page | `src/views/services/<service-slug>/` and register it in `SERVICE_PAGES` |
| Add landing page copy/data | `src/components/landing/data/landing.data.ts` |
| Add a reusable landing section | `src/components/landing/sections/problems-section/` |
| Add a small reusable landing component | `src/components/landing/ui/` |
| Add shared website layout chrome | `src/layouts/` |
| Add theme tokens or MUI overrides | `src/@core/theme/` |
| Add shared constants | `src/utils/constant.ts` |
| Add static images | `public/images/` |

## Current Notes

- The project directory is named `growve_logistic_website`, while the npm package name is `growve-logistic-website`.
- Some filenames have double extensions, such as `ShipmentMap.tsx.tsx` and `DecisionSignalCard.tsx.tsx`. They work as files, but renaming them later would improve consistency.
- The `problems-section` folder currently contains most landing sections, not only problem-related sections.
- `SERVICE_PAGES` currently registers `smart-courier-allocation` and `ndr-recovery-automation`. Other services exist in the menu data but are commented out or not yet implemented as route views.
- `.next/`, `node_modules/`, and `tsconfig.tsbuildinfo` are generated/cache outputs and should not be edited directly.
