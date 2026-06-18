/**
 * Typography tokens mirrored from the Growve design system in Figma.
 * Token naming matches the Figma variable IDs (e.g. "Heading/H1-ExtraBold").
 */
export const typographyTokens = {
  fontFamily: {
    primary: "'Nunito Sans', var(--font-primary), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    serif: "var(--font-serif), 'Playfair Display', Georgia, 'Times New Roman', serif",
  },

  // Heading
  'Heading/H1-ExtraBold': { fontSize: '2.5rem',  lineHeight: 1.1, fontWeight: 800 },
  'Heading/H2-Bold':      { fontSize: '1.75rem', lineHeight: 1.1, fontWeight: 700 },
  'Heading/H3-Bold':      { fontSize: '1.5rem',  lineHeight: 1.1, fontWeight: 700 },
  'Heading/H4-Bold':      { fontSize: '1.25rem', lineHeight: 1.2, fontWeight: 700 },
  'Heading/H5-Bold':      { fontSize: '1rem',    lineHeight: 1.2, fontWeight: 700 },
  'Heading/H5-SemiBold':  { fontSize: '1rem',    lineHeight: 1.2, fontWeight: 600 },

  // Button
  'Button/L-SemiBold':  { fontSize: '1rem',      lineHeight: 1, fontWeight: 600, textTransform: 'none' as const },
  'Button/M-SemiBold':  { fontSize: '0.875rem',  lineHeight: 1, fontWeight: 600, textTransform: 'none' as const },
  'Button/S-SemiBold':  { fontSize: '0.75rem',   lineHeight: 1, fontWeight: 600, textTransform: 'none' as const },
  'Button/XS-SemiBold': { fontSize: '0.6875rem', lineHeight: 1, fontWeight: 600, textTransform: 'none' as const },

  // Body
  'Body/L-Regular':   { fontSize: '1rem',      lineHeight: 1.25, fontWeight: 400 },
  'Body/M-Bold':      { fontSize: '0.875rem',  lineHeight: 1.25, fontWeight: 700 },
  'Body/M-SemiBold':  { fontSize: '0.875rem',  lineHeight: 1.25, fontWeight: 600 },
  'Body/M-Regular':   { fontSize: '0.875rem',  lineHeight: 1.25, fontWeight: 400 },
  'Body/S-Bold':      { fontSize: '0.75rem',   lineHeight: 1.3,  fontWeight: 700 },
  'Body/S-SemiBold':  { fontSize: '0.75rem',   lineHeight: 1.3,  fontWeight: 600 },
  'Body/S-Regular':   { fontSize: '0.75rem',   lineHeight: 1.3,  fontWeight: 400 },
  'Body/XS-Bold':     { fontSize: '0.6875rem', lineHeight: 1.3,  fontWeight: 700 },
  'Body/XS-SemiBold': { fontSize: '0.6875rem', lineHeight: 1.3,  fontWeight: 600 },
  'Body/XS-Regular':  { fontSize: '0.6875rem', lineHeight: 1.3,  fontWeight: 400 },

  // Caption
  'Body/Caption/M-Bold':     { fontSize: '0.625rem',  lineHeight: 1.3, fontWeight: 700 },
  'Body/Caption/M-SemiBold': { fontSize: '0.625rem',  lineHeight: 1.3, fontWeight: 600 },
  'Body/Caption/M-Regular':  { fontSize: '0.625rem',  lineHeight: 1.3, fontWeight: 400 },
  'Body/Caption/S-SemiBold': { fontSize: '0.5625rem', lineHeight: 1.3, fontWeight: 600 },
  'Body/Caption/S-Regular':  { fontSize: '0.5625rem', lineHeight: 1.3, fontWeight: 400 },
  'Body/Caption/XS-Regular': { fontSize: '0.5rem',    lineHeight: 1.3, fontWeight: 400 },

  // Display (marketing serif headings)
  'Display/Hero':    { fontSize: '4rem',    lineHeight: 1.05, fontWeight: 700 },
  'Display/Section': { fontSize: '2.75rem', lineHeight: 1.1,  fontWeight: 700 },
} as const
