import type { CSSProperties } from 'react'

type CustomVariant = CSSProperties

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'Heading/H1-ExtraBold': CustomVariant
    'Heading/H2-Bold': CustomVariant
    'Heading/H3-Bold': CustomVariant
    'Heading/H4-Bold': CustomVariant
    'Heading/H5-Bold': CustomVariant
    'Heading/H5-SemiBold': CustomVariant
    'Button/L-SemiBold': CustomVariant
    'Button/M-SemiBold': CustomVariant
    'Button/S-SemiBold': CustomVariant
    'Button/XS-SemiBold': CustomVariant
    'Body/L-Regular': CustomVariant
    'Body/M-Bold': CustomVariant
    'Body/M-SemiBold': CustomVariant
    'Body/M-Regular': CustomVariant
    'Body/S-Bold': CustomVariant
    'Body/S-SemiBold': CustomVariant
    'Body/S-Regular': CustomVariant
    'Body/XS-Bold': CustomVariant
    'Body/XS-SemiBold': CustomVariant
    'Body/XS-Regular': CustomVariant
    'Body/Caption/M-Bold': CustomVariant
    'Body/Caption/M-SemiBold': CustomVariant
    'Body/Caption/M-Regular': CustomVariant
    'Body/Caption/S-SemiBold': CustomVariant
    'Body/Caption/S-Regular': CustomVariant
    'Body/Caption/XS-Regular': CustomVariant
    'Display/Hero': CustomVariant
    'Display/Section': CustomVariant
  }
  type TypographyVariantsOptions = Partial<TypographyVariants>
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'Heading/H1-ExtraBold': true
    'Heading/H2-Bold': true
    'Heading/H3-Bold': true
    'Heading/H4-Bold': true
    'Heading/H5-Bold': true
    'Heading/H5-SemiBold': true
    'Button/L-SemiBold': true
    'Button/M-SemiBold': true
    'Button/S-SemiBold': true
    'Button/XS-SemiBold': true
    'Body/L-Regular': true
    'Body/M-Bold': true
    'Body/M-SemiBold': true
    'Body/M-Regular': true
    'Body/S-Bold': true
    'Body/S-SemiBold': true
    'Body/S-Regular': true
    'Body/XS-Bold': true
    'Body/XS-SemiBold': true
    'Body/XS-Regular': true
    'Body/Caption/M-Bold': true
    'Body/Caption/M-SemiBold': true
    'Body/Caption/M-Regular': true
    'Body/Caption/S-SemiBold': true
    'Body/Caption/S-Regular': true
    'Body/Caption/XS-Regular': true
    'Display/Hero': true
    'Display/Section': true
  }
}
