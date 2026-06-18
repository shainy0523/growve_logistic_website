import type { Theme } from '@mui/material/styles'
import { typographyTokens } from './tokens/typography.tokens'

const typography = (fontFamily?: string): Theme['typography'] => {
  const font = fontFamily ?? typographyTokens.fontFamily.primary
  const serifFont = typographyTokens.fontFamily.serif

  const withFont = <T extends object>(token: T) => ({ fontFamily: font, letterSpacing: 0, ...token })
  const withSerif = <T extends object>(token: T) => ({ fontFamily: serifFont, letterSpacing: 0, ...token })

  return {
    fontFamily: font,
    fontSize: 14,

    // Standard MUI variants
    h1:        withSerif(typographyTokens['Display/Hero']),
    h2:        withSerif(typographyTokens['Display/Section']),
    h3:        withFont(typographyTokens['Heading/H3-Bold']),
    h4:        withFont(typographyTokens['Heading/H4-Bold']),
    h5:        withFont(typographyTokens['Heading/H5-Bold']),
    h6:        withFont(typographyTokens['Heading/H5-SemiBold']),
    body1:     withFont(typographyTokens['Body/L-Regular']),
    body2:     withFont(typographyTokens['Body/M-Regular']),
    subtitle1: withFont(typographyTokens['Heading/H5-Bold']),
    subtitle2: withFont(typographyTokens['Heading/H5-SemiBold']),
    button:    withFont(typographyTokens['Button/M-SemiBold']),
    caption:   withFont(typographyTokens['Body/Caption/M-Regular']),
    overline:  withFont(typographyTokens['Body/Caption/XS-Regular']),

    // Heading
    'Heading/H1-ExtraBold': withFont(typographyTokens['Heading/H1-ExtraBold']),
    'Heading/H2-Bold':      withFont(typographyTokens['Heading/H2-Bold']),
    'Heading/H3-Bold':      withFont(typographyTokens['Heading/H3-Bold']),
    'Heading/H4-Bold':      withFont(typographyTokens['Heading/H4-Bold']),
    'Heading/H5-Bold':      withFont(typographyTokens['Heading/H5-Bold']),
    'Heading/H5-SemiBold':  withFont(typographyTokens['Heading/H5-SemiBold']),

    // Button
    'Button/L-SemiBold':  withFont(typographyTokens['Button/L-SemiBold']),
    'Button/M-SemiBold':  withFont(typographyTokens['Button/M-SemiBold']),
    'Button/S-SemiBold':  withFont(typographyTokens['Button/S-SemiBold']),
    'Button/XS-SemiBold': withFont(typographyTokens['Button/XS-SemiBold']),

    // Body
    'Body/L-Regular':   withFont(typographyTokens['Body/L-Regular']),
    'Body/M-Bold':      withFont(typographyTokens['Body/M-Bold']),
    'Body/M-SemiBold':  withFont(typographyTokens['Body/M-SemiBold']),
    'Body/M-Regular':   withFont(typographyTokens['Body/M-Regular']),
    'Body/S-Bold':      withFont(typographyTokens['Body/S-Bold']),
    'Body/S-SemiBold':  withFont(typographyTokens['Body/S-SemiBold']),
    'Body/S-Regular':   withFont(typographyTokens['Body/S-Regular']),
    'Body/XS-Bold':     withFont(typographyTokens['Body/XS-Bold']),
    'Body/XS-SemiBold': withFont(typographyTokens['Body/XS-SemiBold']),
    'Body/XS-Regular':  withFont(typographyTokens['Body/XS-Regular']),

    // Caption
    'Body/Caption/M-Bold':     withFont(typographyTokens['Body/Caption/M-Bold']),
    'Body/Caption/M-SemiBold': withFont(typographyTokens['Body/Caption/M-SemiBold']),
    'Body/Caption/M-Regular':  withFont(typographyTokens['Body/Caption/M-Regular']),
    'Body/Caption/S-SemiBold': withFont(typographyTokens['Body/Caption/S-SemiBold']),
    'Body/Caption/S-Regular':  withFont(typographyTokens['Body/Caption/S-Regular']),
    'Body/Caption/XS-Regular': withFont(typographyTokens['Body/Caption/XS-Regular']),

    // Display
    'Display/Hero':    withSerif(typographyTokens['Display/Hero']),
    'Display/Section': withSerif(typographyTokens['Display/Section']),
  } as Theme['typography']
}

export default typography
