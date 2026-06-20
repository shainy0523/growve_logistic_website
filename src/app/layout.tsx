import type { Metadata, Viewport } from 'next'
import { Nunito_Sans, Playfair_Display, Dai_Banna_SIL } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import MuiThemeProvider from '@/utils/providers/MuiThemeProvider'
import './globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-primary',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const daiBannaSil = Dai_Banna_SIL({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dai-banna',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://growvelogistics.com'),
  title: {
    default: 'Growve Logistics — Ship Smarter, Recover Faster, Grow Bigger',
    template: '%s | Growve Logistics',
  },
  description:
    'Automate courier selection, recover failed deliveries, and track every order in real time — all from a single logistics platform built for growing e-commerce brands in India.',
  keywords: [
    'logistics platform',
    'courier aggregator',
    'shipping automation',
    'NDR recovery',
    'failed delivery recovery',
    'order tracking',
    'ecommerce shipping India',
    'weight dispute protection',
    'multi-carrier shipping',
    'last mile delivery',
  ],
  authors: [{ name: 'Growve Logistics' }],
  creator: 'Growve Logistics',
  publisher: 'Growve Logistics',
  category: 'Logistics',
  icons: {
    icon: '/images/wesite-logo.png',
    shortcut: '/images/wesite-logo.png',
    apple: '/images/wesite-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://growvelogistics.com',
    siteName: 'Growve Logistics',
    title: 'Growve Logistics — Ship Smarter, Recover Faster, Grow Bigger',
    description:
      'Automate courier selection, recover failed deliveries, and track every order in real time — all from a single logistics platform built for growing e-commerce brands in India.',
    images: [
      {
        url: '/images/wesite-logo.png',
        width: 1200,
        height: 630,
        alt: 'Growve Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growve Logistics — Ship Smarter, Recover Faster, Grow Bigger',
    description:
      'Automate courier selection, recover failed deliveries, and track every order in real time — all from a single logistics platform built for growing e-commerce brands in India.',
    images: ['/images/wesite-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={`${nunitoSans.variable} ${playfairDisplay.variable} ${daiBannaSil.variable}`}>
      <body suppressHydrationWarning>
        <InitColorSchemeScript attribute='data-mui-color-scheme' defaultMode='light' />
        <AppRouterCacheProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
