'use client'

import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { FAQ } from '../../data/landing.data'
import { SECTION_IDS } from '@/utils/constant'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Box
      id={SECTION_IDS.FAQ}
      className="w-full px-6 md:px-24 py-[100px]"
      sx={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F5F5F6 100%)'
      }}
    >
      <Box className="max-w-[1052px] mx-auto flex flex-col items-center gap-[78px]">
        {/* Header */}

        <Box className="flex flex-col items-center gap-6 text-center">
          <Typography
            sx={{
              color: '#8D8A94',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3.6px',
              lineHeight: '15.6px'
            }}
          >
            {FAQ.eyebrow}
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontFamily: '"Dai Banna SIL", serif',
              fontSize: {
                xs: '36px',
                md: '48px'
              },
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#000'
            }}
          >
            {FAQ.titleLeading}{' '}
            <Box component="span" sx={{ color: '#8D8A94' }}>
              {FAQ.titleAccent}
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              color: '#6D6B77',
              fontSize: 16,
              lineHeight: '23px'
            }}
          >
            {FAQ.subtitle}
          </Typography>
        </Box>

        {/* FAQ */}

        <Box className="w-full max-w-[718px]">
          {FAQ.items.map((item, index) => {
            const expanded = openIndex === index

            return (
              <Box
                key={item.question}
                sx={{
                  borderBottom:
                    index !== FAQ.items.length - 1
                      ? '1px solid #EAEAEC'
                      : 'none'
                }}
              >
                <Box
                  component="button"
                  type="button"
                  onClick={() =>
                    setOpenIndex(expanded ? null : index)
                  }
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 2,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: '19.2px',
                      color: '#000'
                    }}
                  >
                    {item.question}
                  </Typography>

                  <Icon
                    className='text-black'
                    icon="mdi:chevron-down"
                    width={18}
                    style={{
                      transition: 'transform .25s ease',
                      transform: expanded
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)'
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    overflow: 'hidden',
                    maxHeight: expanded ? 200 : 0,
                    opacity: expanded ? 1 : 0,
                    transition:
                      'max-height .3s ease, opacity .3s ease'
                  }}
                >
                  <Typography
                    sx={{
                      pb: 2,
                      color: '#6D6B77',
                      fontSize: 14,
                      lineHeight: '24px',
                      ml:1
                    }}
                  >
                    {item.answer}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}