import {
  Box,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { SERVICES } from './data/landing.data'
import { Icon } from '@iconify/react'

export default function ServicesMegaMenu() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 50,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1052,
        bgcolor: '#fff',
        borderBottomLeftRadius: '14px',
        borderBottomRightRadius: '14px',
        border: '1px solid #EAEAEC',
        boxShadow: '0px 50px 120px rgba(0,0,0,0.10)',
        p: 5,
        zIndex: 1200,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -50,
          left: 0,
          right: 0,
          height: 50
        }
      }}
    >
      <Typography
        sx={{
          mb: 3,
          color: '#8D8A94',
          fontSize: 12,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.3em'
        }}
      >
        Services
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1
        }}
      >
        {SERVICES.map(service => (
          <Box
            key={service.slug}
            component={Link}
            href={`/services/${service.slug}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 1,
              borderRadius: '14px',
              textDecoration: 'none',
              transition: 'all .2s ease',
              cursor: 'pointer',

              '&:hover': {
                bgcolor: '#F5F5F6',

                '& .service-icon-wrapper': {
                  bgcolor: '#000',
                },

                '& .service-icon': {
                  color: '#FFFFFF !important',
                },
              },
            }}
          >
            <Box
              className="service-icon-wrapper"
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#EBEBED',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .2s ease',
              }}
            >
              <Icon
                className="service-icon"
                icon={service.icon!}
                width={20}
                height={20}
                color="#444050"
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#000',
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  mt: 0.25,
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#737682',
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}