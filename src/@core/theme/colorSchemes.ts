import type { ColorSystemOptions } from '@mui/material/styles'

export const lightColorScheme: ColorSystemOptions = {
  palette: {
    primary: {
      main: '#FBC942',
      light: '#FEF1A7',
      dark: '#e8b42c',
      contrastText: '#1F1F1F',
    },
    secondary: {
      main: '#757575',
      light: '#9E9E9E',
      dark: '#333333',
      contrastText: '#ffffff',
    },
    success: {
      main: '#28C76F',
      light: '#CBF2DC',
      dark: '#24B364',
      contrastText: '#fff',
    },
    error: {
      main: '#F04A4A',
      light: '#FFA3A3',
      dark: '#B81515',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F1F1F',
      secondary: '#6D6B77',
      disabled: '#9ca3af',
    },
    divider: '#EAEAEC',
  },
}

export const darkColorScheme: ColorSystemOptions = {
  palette: {
    primary: {
      main: '#FBC942',
      light: '#FEF1A7',
      dark: '#e8b42c',
      contrastText: '#1F1F1F',
    },
    secondary: {
      main: '#9E9E9E',
      light: '#BDBDBD',
      dark: '#616161',
      contrastText: '#ffffff',
    },
    success: {
      main: '#28C76F',
      light: '#CBF2DC',
      dark: '#24B364',
      contrastText: '#fff',
    },
    error: {
      main: '#F04A4A',
      light: '#FFA3A3',
      dark: '#B81515',
      contrastText: '#fff',
    },
    background: {
      default: '#0B0B0F',
      paper: '#18181E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.65)',
      disabled: 'rgba(255,255,255,0.4)',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
}
