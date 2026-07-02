import Image from 'next/image'
import type { CSSProperties } from 'react'

export interface LazyBackgroundImageProps {
  /** Public path, e.g. "/images/return_rto/rto_banner.jpg". */
  src: string
  /** Empty string is fine for decorative backgrounds. */
  alt?: string
  /** How the image fills its container. Defaults to 'cover'. */
  objectFit?: CSSProperties['objectFit']
  /** Focal point, e.g. 'center', '50% 50%'. Defaults to 'center'. */
  objectPosition?: CSSProperties['objectPosition']
  /** Eagerly load above-the-fold visuals (heroes). Off by default → lazy. */
  priority?: boolean
  /** Responsive `sizes` hint for next/image. Defaults to full viewport width. */
  sizes?: string
}

/**
 * Drop-in replacement for a CSS `background-image` on a positioned
 * (`position: relative`) container. Renders an absolutely-positioned
 * `next/image` with `fill` BEHIND the container's other children, so it
 * lazy-loads by default and gets Next.js image optimisation — something a
 * plain CSS background can never do.
 *
 * Usage: put this as the FIRST child of a `position: relative` Box that
 * previously carried the `backgroundImage`, and remove that background.
 */
export default function LazyBackgroundImage({
  src,
  alt = '',
  objectFit = 'cover',
  objectPosition = 'center',
  priority = false,
  sizes = '100vw',
}: LazyBackgroundImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      style={{ objectFit, objectPosition, zIndex: 0 }}
    />
  )
}
