'use client'

import { Controller, useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import PrimaryCta from '@/components/landing/ui/PrimaryCta'
import FindUsView from './FindUsView'

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
    icon: 'material-symbols:business-center-outline-sharp',
    title: 'Company',
    value: 'Growve Retail and Management Services Pvt. Ltd.',
  },
  {
    icon: 'material-symbols:warehouse-outline',
    title: 'Fulfillment Hubs',
    value: 'Delhi (Active) • Mumbai (Launching)',
  },
  {
    icon: 'material-symbols:mail-outline',
    title: 'Email',
    value: 'contact@growvelogistics.com',
  },
  {
    icon: 'mdi:phone-outline',
    title: 'Phone',
    value: '+91 98765 43210',
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

// Shared look for every input — muted rounded fields with strong text.
const FIELD_SX = {
  '& .MuiInputBase-root': {
    backgroundColor: 'var(--surface-muted, #F5F5F6)',
    borderRadius: '8px',
    fontSize: 12,
    color: 'var(--text-primary, #444050)',
  },
  '& .MuiInputBase-input': { color: 'var(--text-primary, #444050)' },
  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
  '& .MuiInputBase-input::placeholder': {
    color: 'var(--text-secondary, #6D6B77)',
    opacity: 1,
  },
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <Typography
      component='label'
      sx={{ display: 'block', mb: 0.75, fontSize: 11, fontWeight: 600, color: 'var(--text-primary, #444050)' }}
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
    <>
      <Box
        component='section'
        sx={{
          backgroundColor: 'var(--surface-muted, #F5F5F6)',
          overflow: 'hidden',
          py: { xs: 6, md: 12.5 },
        }}
      >
        <Box className='landing-container'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '.7fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'stretch',
            }}
          >
            {/* ── Left: heading + contact detail cards ── */}
            <Box
              sx={{
                py: 1.5,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '3.6px',
                    lineHeight: '15.6px',
                    color: 'var(--text-subtitle, #8D8A94)',
                  }}
                >
                  Get Started
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-dai-banna), serif',
                    fontSize: 40,
                    fontWeight: 500,
                    lineHeight: 1.1,
                  }}
                >
                  <Box component='span' sx={{ color: 'var(--misc-bg-black, #000)' }}>
                    Ready to ship{' '}
                  </Box>
                  <Box component='span' sx={{ color: 'var(--text-subtitle, #8D8A94)' }}>
                    smarter?
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: '20.16px',
                    color: 'var(--text-secondary, #6D6B77)',
                    pb: 1,
                  }}
                >
                  Whether you ship 50 or 5,000 orders a month, Growve gives you better rates, smarter
                  tools, &amp; dedicated support.
                </Typography>
              </Box>

              {CONTACT_DETAILS.map(detail => (
                <Box
                  key={detail.title}
                  sx={{
                    px: 2.5,
                    py: 3,
                    backgroundColor: 'var(--surface-paper, #FFF)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      p: 1,
                      backgroundColor: '#FEF6E1',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {detail.image ? (
                      <Image src={detail.image} alt={detail.title} width={18} height={18} />
                    ) : (
                      <Icon icon={detail.icon!} fontSize={18} color='#BD8125' />
                    )}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-dai-banna), serif',
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: '20px',
                        color: 'var(--misc-bg-black, #000)',
                      }}
                    >
                      {detail.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, lineHeight: '15.6px', color: 'var(--color-secondary-dark, #737682)' }}
                    >
                      {detail.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* ── Right: form card ── */}
            <Box
              component='form'
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                backgroundColor: 'var(--surface-paper, #FFF)',
                border: '1px solid var(--border-subtle, #EAEAEC)',
                boxShadow: '0px 24px 120px rgba(225, 225, 228, 0.24)',
                borderRadius: '12px',
                px: 2.5,
                pt: 2.5,
                pb: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, color: 'var(--misc-bg-black, #000)' }}>
                  Start Shipping With Us
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600, color: 'var(--text-subtitle, #8D8A94)' }}>
                  Tell us about your business and we&apos;ll be in touch.
                </Typography>
              </Box>

              <Box sx={{ height: '1px', backgroundColor: 'var(--divider, #EAEAEC)' }} />

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
                    rules={{
                      required: true,
                      pattern: { value: /^\d{10}$/, message: 'Enter a valid 10-digit number' },
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        onChange={e => field.onChange(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        fullWidth
                        size='small'
                        type='tel'
                        placeholder='Enter phone number'
                        slotProps={{
                          htmlInput: { inputMode: 'numeric', maxLength: 10 },
                          input: {
                            startAdornment: (
                              <Box sx={{ borderRight: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: 0.5, mr: 1, whiteSpace: 'nowrap' }}>
                                <Box
                                  component='span'
                                  sx={{
                                    width: 20,
                                    height: 16,
                                    borderRadius: '2px',
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    display: 'inline-flex',
                                  }}
                                >
                                  <Icon icon='flagpack:in' width={20} height={16} />
                                </Box>
                                <Typography sx={{ fontSize: 12, color: 'var(--text-primary, #444050)' }}>
                                  +91
                                </Typography>
                                <Icon icon='mdi:chevron-down' color='#444050' className='pr-1 w-4 h-4' />
                              </Box>
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

              <PrimaryCta type='submit' sx={{ width: '100%', height: 40, my: 1.5 }}>
                Submit
              </PrimaryCta>
            </Box>
          </Box>
        </Box>
      </Box>
      <FindUsView />
    </>
  )
}
