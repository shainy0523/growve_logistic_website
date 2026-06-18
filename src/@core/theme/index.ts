import { createTheme } from '@mui/material/styles'
import { lightColorScheme, darkColorScheme } from './colorSchemes'
import typography from './typography'
import { typographyTokens } from './tokens/typography.tokens'

const font = typographyTokens.fontFamily.primary

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-mui-color-scheme' },
  colorSchemes: {
    light: lightColorScheme,
    dark: darkColorScheme,
  },
  typography: typography(font),
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { height: '100%', scrollBehavior: 'smooth' },
        body: { height: '100%', margin: 0 },
        a: { color: 'inherit', textDecoration: 'none' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          fontFamily: "'Nunito Sans', var(--font-primary), sans-serif",
          textTransform: 'none',
          fontSize: '0.875rem',
          lineHeight: 1,
          padding: '10px 22px',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        sizeLarge: { padding: '12px 28px', fontSize: '1rem' },
        sizeSmall: { padding: '6px 14px', fontSize: '0.75rem' },
        contained: { boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
  },
})

export default theme
