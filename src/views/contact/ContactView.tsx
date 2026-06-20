'use client'

import { Controller, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import SectionHeading from '@/components/landing/ui/SectionHeading'
import PrimaryCta from '@/components/landing/ui/PrimaryCta'

interface ContactDetail {
  /** Image asset from /public/icons/contact. Falls back to `icon` when absent. */
  image?: string
  icon?: string
  title: string
  value: string
}

interface ContactFormValues {
  name: string
  business: string
  phone: string
  email: string
  role: string
  shipments: string
  notes: string
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    image: '/icons/contact/Warehouse.png',
    title: 'Company',
    value: 'Growve Retail and Management Services Pvt. Ltd.',
  },
  {
    image: '/icons/contact/Warehouse.png',
    title: 'Fulfillment Hubs',
    value: 'Delhi (Active) • Mumbai (Launching)',
  },
  {
    image: '/icons/contact/mail_outline.png',
    title: 'Email',
    value: 'contact@growvelogistics.com',
  },
  {
    image: '/icons/contact/Phone enabled.png',
    title: 'Phone',
    value: '+91 98765 43210',
  },
  {
    image: '/icons/contact/language.png',
    title: 'Website',
    value: 'growvelogistics.com',
  },
]

const I_AM_A_OPTIONS = [
  'D2C / ecommerce brand',
  'Marketplace seller',
  'Aggregator / 3PL',
  'Logistics partner',
  'Other',
]

const MONTHLY_SHIPMENT_OPTIONS = [
  'Less than 100',
  '100 – 500',
  '500 – 2,000',
  '2,000 – 5,000',
  '5,000+',
]

// Shared look for every input — muted rounded fields with black text.
const FIELD_SX = {
  '& .MuiInputBase-root': {
    backgroundColor: 'var(--surface-muted)',
    borderRadius: '8px',
    fontSize: 13,
    color: 'var(--text-strong)',
  },
  '& .MuiInputBase-input': { color: 'var(--text-strong)' },
  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  '& .MuiInputBase-input::placeholder': {
    color: 'var(--text-secondary)',
    opacity: 1,
  },
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <Typography
      component='label'
      sx={{ display: 'block', mb: 0.75, fontSize: 11, fontWeight: 600, color: 'var(--text-primary)' }}
    >
      {label}{' '}
      {required && <Box component='span' sx={{ color: 'var(--color-error-main, #FF4C51)' }}>*</Box>}
    </Typography>
  )
}

export default function ContactView() {
  const { control, handleSubmit, reset } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      business: '',
      phone: '',
      email: '',
      role: '',
      shipments: '',
      notes: '',
    },
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log('Contact form submitted', data)
    reset()
  }

  return (
    <Box>
      {/* Hero + form band */}
      <Box
        sx={{
          background: `
            radial-gradient(circle at 12% 18%, rgba(0, 186, 255, 0.15) 0%, rgba(0, 186, 255, 0) 45%),
            radial-gradient(circle at 85% 22%, rgba(255, 234, 0, 0.12) 0%, rgba(255, 234, 0, 0) 45%),
            radial-gradient(circle at 70% 85%, rgba(232, 168, 21, 0.1) 0%, rgba(232, 168, 21, 0) 50%),
            rgba(249, 249, 255, 1)
          `,
        }}
        className='pt-15! pb-15'
      >
        <Box className='landing-container pt-10! pb-5'>
          <SectionHeading
            eyebrow='Get Started'
            title='Ready to ship smarter?'
            subtitle="Whether you're doing 50 orders a month or 5,000 — you get the same rates, tools, and support we use for our own 35K+ shipments."
            size='lg'
          />

          <Box
            sx={{
              mt: { xs: 5, md: 8 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'start',
            }}
          >
            {/* Contact details */}
            <Box>
              {CONTACT_DETAILS.map((detail, i) => (
                <Box
                  key={detail.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    py: 2.5,
                    borderBottom:
                      i < CONTACT_DETAILS.length - 1 ? '1px solid var(--divider)' : 'none',
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      p: 1.25,
                      backgroundColor: '#ffc400',
                      borderRadius: '12px',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {detail.image ? (
                      <Image src={detail.image} alt={detail.title} width={20} height={20} />
                    ) : (
                      <Icon icon={detail.icon!} fontSize={20} color='var(--color-yellow-dark, #BD8125)' />
                    )}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-dai-banna), serif',
                        fontSize: 20,
                        fontWeight: 500,
                        color: 'var(--text-strong)',
                        lineHeight: 1.3,
                      }}
                    >
                      {detail.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: 'var(--text-subtitle)', lineHeight: 1.5 }}>
                      {detail.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Form card */}
            <Box
              component='form'
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                backgroundColor: 'var(--surface-paper, #FFFFFF)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                p: { xs: 2.5, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, color: 'var(--text-strong)' }}>
                  Start Shipping With Us
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600, color: 'var(--text-subtitle)' }}>
                  Tell us about your business and we&apos;ll be in touch.
                </Typography>
              </Box>

              <Box sx={{ height: '1px', backgroundColor: 'var(--divider)' }} />

              {/* Name + Business */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <Box>
                  <FieldLabel label='Your Name' required />
                  <Controller
                    name='name'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField {...field} fullWidth size='small' placeholder='Enter full name' sx={FIELD_SX} />
                    )}
                  />
                </Box>
                <Box>
                  <FieldLabel label='Business Name' />
                  <Controller
                    name='business'
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size='small'
                        placeholder='Enter brand or company name'
                        sx={FIELD_SX}
                      />
                    )}
                  />
                </Box>
              </Box>

              {/* Phone + Email */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <Box>
                  <FieldLabel label='Phone (WhatsApp)' required />
                  <Controller
                    name='phone'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size='small'
                        placeholder='Enter phone number'
                        slotProps={{
                          input: {
                            startAdornment: (
                              <Typography sx={{ fontSize: 13, color: 'var(--text-primary)', mr: 1, whiteSpace: 'nowrap' }}>
                                +91
                              </Typography>
                            ),
                          },
                        }}
                        sx={FIELD_SX}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <FieldLabel label='Email' required />
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField {...field} fullWidth size='small' type='email' placeholder='you@brand.com' sx={FIELD_SX} />
                    )}
                  />
                </Box>
              </Box>

              {/* I Am a */}
              <Box>
                <FieldLabel label='I Am a' required />
                <Controller
                  name='role'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      size='small'
                      slotProps={{ select: { displayEmpty: true } }}
                      sx={FIELD_SX}
                    >
                      <MenuItem value='' disabled>
                        Select One
                      </MenuItem>
                      {I_AM_A_OPTIONS.map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Box>

              {/* Monthly Shipments */}
              <Box>
                <FieldLabel label='Monthly Shipments' />
                <Controller
                  name='shipments'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      size='small'
                      slotProps={{ select: { displayEmpty: true } }}
                      sx={FIELD_SX}
                    >
                      <MenuItem value='' disabled>
                        Less than 100
                      </MenuItem>
                      {MONTHLY_SHIPMENT_OPTIONS.map(option => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Box>

              {/* Notes */}
              <Box>
                <FieldLabel label='Anything else? (optional)' />
                <Controller
                  name='notes'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      minRows={3}
                      placeholder='Tell us about your business, products, or needs, etc.....'
                      sx={FIELD_SX}
                    />
                  )}
                />
              </Box>

              <PrimaryCta type='submit' sx={{ width: '100%', height: 44 }}>
                Submit
              </PrimaryCta>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
