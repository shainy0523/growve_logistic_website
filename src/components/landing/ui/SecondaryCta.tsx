'use client'

import Button, { type ButtonProps } from '@mui/material/Button'

const CTA_SX = {
  height: 36,
  minHeight: 36,

  borderRadius: '8px',

  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'none',

  px: 2,
  py: 0,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 1,
}

interface SecondaryCtaProps extends ButtonProps {
  bgColor?: string
  hoverColor?: string
}

export default function SecondaryCta({
  children,
  sx,
  bgColor = '#EBEBED',
  hoverColor = '#FAFAFB',
  ...rest
}: SecondaryCtaProps) {
  return (
    <Button
      variant='outlined'
      sx={{
        ...CTA_SX,

        backgroundColor: bgColor,
        color: '#1F1F1F',
        borderColor:'transparent',

        boxShadow: 'none',

        '&:hover': {
          backgroundColor: hoverColor,
          boxShadow: 'none',
        },

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}