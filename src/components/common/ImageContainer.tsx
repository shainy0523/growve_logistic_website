import Box from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'
import Image from 'next/image'
import type { CSSProperties } from 'react'

export interface ImageContainerProps {
  /** Public path (e.g. "/images/services/Table.png") or an imported static image. */
  src: string
  alt: string
  /**
   * Intrinsic aspect-ratio hint required by next/image (in px).
   * These do NOT pin a fixed render size — the image stays fluid via the
   * `width: 100%` / `height: auto` style below; they only preserve the ratio
   * and reserve space to avoid layout shift.
   */
  width: number
  height: number
  /** Eagerly load above-the-fold visuals (hero images). */
  priority?: boolean
  /** Cap the rendered width; the image stays fluid below it. */
  maxWidth?: number | string
  /** Horizontal alignment of the image within its container. */
  align?: 'flex-start' | 'center' | 'flex-end'
  /** Corner radius (number is treated as px). */
  rounded?: number | string
  /** How the image scales within its box. */
  objectFit?: CSSProperties['objectFit']
  /** Responsive `sizes` hint for next/image to pick the right source width. */
  sizes?: string
  /** Extra styles merged onto the wrapper Box. */
  sx?: SxProps<Theme>
  className?: string
}

/**
 * Thin, reusable wrapper around `next/image` for marketing visuals.
 * Centres the image, keeps it fully fluid, and exposes the few knobs
 * (alignment, radius, max width, fit) most sections actually need.
 */
export default function ImageContainer({
  src,
  alt,
  width,
  height,
  priority = false,
  maxWidth = '100%',
  align = 'center',
  rounded,
  objectFit = 'contain',
  sizes,
  sx,
  className,
}: ImageContainerProps) {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: align,
        alignItems: 'center',
        ...sx,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        style={{
          width: '100%',
          maxWidth,
          height: 'auto',
          objectFit,
          display: 'block',
          borderRadius: typeof rounded === 'number' ? `${rounded}px` : rounded,
        }}
      />
    </Box>
  )
}
