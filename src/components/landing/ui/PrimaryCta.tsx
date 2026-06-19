'use client'

import Button, { type ButtonProps } from '@mui/material/Button'
import { Icon } from '@iconify/react'

type PrimaryCtaProps = ButtonProps & {
  withArrow?: boolean
}

const CTA_SX = {
  height: 34,
  minHeight: 34,

  borderRadius: '8px',

  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'none',

  px: 2.5,
  py: 0,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  lineHeight: 1,

  '& .MuiButton-endIcon': {
    marginLeft: '6px',
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .MuiButton-endIcon svg': {
    width: 16,
    height: 16,
    display: 'block',
  },
}

export default function PrimaryCta({
  withArrow = true,
  children,
  sx,
  ...rest
}: PrimaryCtaProps) {
  return (
    <Button
      variant='contained'
      endIcon={
        withArrow ? (
          <Icon
            icon='mdi:arrow-right'
            width={16}
            height={16}
          />
        ) : undefined
      }
      sx={{
        ...CTA_SX,

        backgroundColor: '#1F1F1F',
        color: '#FFFFFF',

        boxShadow: 'none',

        '&:hover': {
          backgroundColor: '#FBC942',
          color: '#1F1F1F',
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
