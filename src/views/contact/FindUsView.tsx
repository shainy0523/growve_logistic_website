'use client'

import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'

interface StreetView {
  // Camera coordinates (the `@LAT,LNG` in a Google Maps URL) + heading (yaw).
  lat: number
  lng: number
  heading?: number
}

interface OfficeLocation {
  id: string
  line1: string
  line2: string
  query: string
  // Optional road-level Street View; falls back to a roadmap when absent.
  sv?: StreetView
}

// Selectable office locations. Add more entries here — each becomes a card on
// the left, and clicking it updates the right panel.
const LOCATIONS: OfficeLocation[] = [
  {
    id: 'mumbai',
    line1: 'Filix Towers, Unit no. 404',
    line2: 'Bhandup West, Mumbai, Maharashtra 400078',
    query: 'Filix Towers, Bhandup West, Mumbai, Maharashtra 400078',
    sv: { lat: 19.1594471, lng: 72.9375253, heading: 0 },
  },
]

type MapMode = 'street' | 'satellite'

// Roadmap zoom (z param) bounds.
const MIN_ZOOM = 4
const MAX_ZOOM = 20
const DEFAULT_ZOOM = 16

// Street-view zoom level (0 = level wide view, higher = zoomed in).
const MIN_FOV = 0
const MAX_FOV = 3
const DEFAULT_FOV = 0

const directionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`

// Keyless Google Maps embed — `t` = m (roadmap) / k (satellite), `z` sets zoom.
function buildMap(query: string, type: 'm' | 'k', zoom: number) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    query,
  )}&t=${type}&z=${zoom}&ie=UTF8&iwloc=&output=embed`
}

// Road-level Street View — cbp = zoom,heading,0,pitch,fov. pitch 0 = level.
function buildStreetView(sv: StreetView, fov: number) {
  return `https://maps.google.com/maps?q=&layer=c&cbll=${sv.lat},${sv.lng}&cbp=${fov},${sv.heading ?? 0},0,0,0&output=svembed`
}

// Shared frame for both map panels.
const PANEL_SX = {
  position: 'relative' as const,
  flex: '1 1 0',
  width: '100%',
  aspectRatio: '510.86 / 445',
  backgroundColor: 'var(--surface-muted, #F5F5F6)',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid var(--divider, #EAEAEC)',
}

// The iframe is grown past the panel so Google's own zoom buttons (bottom-right)
// and attribution sit below the clipped area — leaving only our overlay zoom.
const MAP_IFRAME_SX = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  width: '100%',
  height: 'calc(100% + 124px)',
  border: 0,
}

// Square zoom button — the container handles the outer rounding.
function MapControl({
  icon,
  dark = false,
  onClick,
  disabled = false,
  label,
  round,
}: {
  icon: string
  dark?: boolean
  onClick?: () => void
  disabled?: boolean
  label: string
  round?: 'top' | 'bottom'
}) {
  return (
    <Box
      component='button'
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      sx={{
        p: 0.75,
        border: 0,
        borderTopLeftRadius: round === 'top' ? '8px' : 0,
        borderTopRightRadius: round === 'top' ? '8px' : 0,
        borderBottomLeftRadius: round === 'bottom' ? '8px' : 0,
        borderBottomRightRadius: round === 'bottom' ? '8px' : 0,
        display: 'flex',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        backgroundColor: dark ? 'var(--misc-bg-black, #000)' : 'var(--surface-paper, #FFF)',
        color: dark ? '#FFF' : 'var(--text-primary, #444050)',
        transition: 'background-color 0.15s ease',
        '&:hover': disabled ? {} : { backgroundColor: dark ? '#222' : '#F2F2F4' },
      }}
    >
      <Icon icon={icon} width={16} height={16} />
    </Box>
  )
}

// Selectable address card overlaid on the left map.
function LocationCard({
  location,
  selected,
  onSelect,
}: {
  location: OfficeLocation
  selected: boolean
  onSelect: () => void
}) {
  return (
    <Box
      onClick={onSelect}
      role='button'
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      sx={{
        p: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0px 24px 120px rgba(68, 64, 80, 0.24)',
        borderRadius: '10px',
        transition: 'outline-color 0.15s ease',
      }}
    >
      {/* Pin marker */}
      <Box sx={{ flexShrink: 0, width: 30, display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            p: '5px',
            display: 'flex',
            borderRadius: '999px',
            background: 'linear-gradient(180deg, #FFF9DD 0%, #FBC942 55%, #E2AB15 100%)',
            boxShadow: '0px 21px 22px rgba(251, 201, 66, 0.24)',
            outline: '5px solid rgba(251, 201, 66, 0.44)',
          }}
        >
          <Icon icon='mdi:map-marker' width={20} height={20} color='#FFF' />
        </Box>
      </Box>

      <Box sx={{ flex: '1 1 0', minWidth: 0 }}>
        <Typography
          sx={{
            fontFamily: 'var(--font-dai-banna), serif',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '20px',
            color: 'var(--misc-bg-black, #000)',
          }}
        >
          {location.line1}
        </Typography>
        <Typography
          sx={{ fontSize: 12, lineHeight: '15.6px', color: 'var(--color-secondary-dark, #737682)' }}
        >
          {location.line2}
        </Typography>
      </Box>

      {/* Quick actions — stopPropagation so they don't trigger selection. */}
      <Box
        component='a'
        href={directionsUrl(location.query)}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Get directions'
        onClick={e => e.stopPropagation()}
        sx={{
          flexShrink: 0,
          p: 1,
          display: 'flex',
          backgroundColor: 'var(--surface-paper, #FFF)',
          borderRadius: '8px',
          color: '#BD8125',
        }}
      >
        <Icon icon='material-symbols:open-in-new-sharp' width={18} height={18} />
      </Box>
      <Box
        component='a'
        href={directionsUrl(location.query)}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Open in maps'
        onClick={e => e.stopPropagation()}
        sx={{
          flexShrink: 0,
          p: 1,
          display: 'flex',
          backgroundColor: 'var(--surface-paper, #FFF)',
          borderRadius: '8px',
          color: '#BD8125',
        }}
      >
        <Icon icon='material-symbols:directions-outline-sharp' width={18} height={18} />
      </Box>
    </Box>
  )
}

export default function FindUsView() {
  const [selectedId, setSelectedId] = useState(LOCATIONS[0].id)
  const [mode, setMode] = useState<MapMode>('street')
  const [zoom, setZoom] = useState(DEFAULT_ZOOM)
  const [fov, setFov] = useState(DEFAULT_FOV)
  const rightPanelRef = useRef<HTMLDivElement>(null)

  const selected = LOCATIONS.find(l => l.id === selectedId) ?? LOCATIONS[0]
  // Street view only applies in "Map" mode when the location has SV data.
  const isStreet = mode === 'street' && !!selected.sv

  const leftSrc = buildMap(selected.query, 'm', DEFAULT_ZOOM)
  const rightSrc = isStreet
    ? buildStreetView(selected.sv!, fov)
    : buildMap(selected.query, mode === 'satellite' ? 'k' : 'm', zoom)
  const rightKey = `${selected.id}-${mode}-${isStreet ? `sv${fov}` : `z${zoom}`}`

  // Zoom drives the street-view level (higher = closer) or the map z.
  const zoomIn = () =>
    isStreet ? setFov(f => Math.min(MAX_FOV, f + 1)) : setZoom(z => Math.min(MAX_ZOOM, z + 1))
  const zoomOut = () =>
    isStreet ? setFov(f => Math.max(MIN_FOV, f - 1)) : setZoom(z => Math.max(MIN_ZOOM, z - 1))
  const zoomInDisabled = isStreet ? fov >= MAX_FOV : zoom >= MAX_ZOOM
  const zoomOutDisabled = isStreet ? fov <= MIN_FOV : zoom <= MIN_ZOOM

  const toggleFullscreen = () => {
    const el = rightPanelRef.current
    if (!el) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      el.requestFullscreen?.()
    }
  }

  return (
    <Box
      component='section'
      sx={{
        backgroundColor: 'var(--surface-paper, #FFF)',
        overflow: 'hidden',
        py: { xs: 6, md: 12.5 },
      }}
    >
      <Box className='landing-container' sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {/* ── Heading ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2.5, textAlign: 'center' }}>
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
            Find Us
          </Typography>
          <Typography
            sx={{
              fontFamily: 'var(--font-dai-banna), serif',
              fontSize: { xs: 30, md: 40 },
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            <Box component='span' sx={{ color: 'var(--misc-bg-black, #000)' }}>
              Drop by the{' '}
            </Box>
            <Box component='span' sx={{ color: 'var(--text-subtitle, #8D8A94)' }}>
              Growve Logistics office.
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: '20.16px',
              color: 'var(--text-secondary, #6D6B77)',
              maxWidth: 520,
              pb: 1,
            }}
          >
            Have questions or want to discuss your logistics needs? Drop by our office—we&apos;re
            always happy to connect.
          </Typography>
        </Box>

        {/* ── Two map panels ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2.5,
          }}
        >
          {/* Panel 1 — roadmap of the selected location + selectable cards */}
          <Box sx={PANEL_SX}>
            <Box
              component='iframe'
              key={`left-${selected.id}`}
              title={`${selected.line1} — map`}
              src={leftSrc}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              sx={MAP_IFRAME_SX}
            />

            <Box
              sx={{
                position: 'absolute',
                left: { xs: 16, md: 40 },
                right: { xs: 16, md: 40 },
                bottom: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              {LOCATIONS.map(location => (
                <LocationCard
                  key={location.id}
                  location={location}
                  selected={location.id === selectedId}
                  onSelect={() => {
                    // Clicking a location shows its panoramic (street) view.
                    setSelectedId(location.id)
                    setMode('street')
                    setFov(DEFAULT_FOV)
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Panel 2 — street view / satellite of the selected location */}
          <Box ref={rightPanelRef} sx={PANEL_SX}>
            <Box
              component='iframe'
              key={rightKey}
              title={`${selected.line1} — ${isStreet ? 'street view' : 'map'}`}
              src={rightSrc}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              sx={MAP_IFRAME_SX}
            />


            {/* Map / Satellite toggle (top-left) */}
            <Box
              sx={{
                position: 'absolute',
                left: 24,
                top: 24,
                zIndex: 2,
                display: 'inline-flex',
                gap: '1px',
                backgroundColor: 'var(--surface-paper, #FFF)',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(68, 64, 80, 0.12)',
              }}
            >
              {([
                { value: 'street', label: 'Map' },
                { value: 'satellite', label: 'Satellite' },
              ] as const).map(opt => {
                const active = mode === opt.value
                return (
                  <Box
                    key={opt.value}
                    component='button'
                    type='button'
                    onClick={() => setMode(opt.value)}
                    aria-pressed={active}
                    sx={{
                      px: 1.5,
                      py: 1,
                      border: 0,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: active
                        ? 'var(--color-yellow-main, #FBC942)'
                        : 'var(--surface-paper, #FFF)',
                      color: 'var(--misc-bg-black, #000)',
                      fontFamily: 'inherit',
                      fontSize: 12,
                      fontWeight: 600,
                      lineHeight: '12px',
                      transition: 'background-color 0.15s ease',
                    }}
                  >
                    {opt.label}
                  </Box>
                )
              })}
            </Box>

            {/* Fullscreen (top-right) */}
            <Box
              component='button'
              type='button'
              onClick={toggleFullscreen}
              aria-label='Toggle fullscreen'
              sx={{
                position: 'absolute',
                right: 24,
                top: 24,
                zIndex: 2,
                p: 1,
                border: 0,
                cursor: 'pointer',
                display: 'flex',
                backgroundColor: 'var(--surface-paper, #FFF)',
                borderRadius: '8px',
                color: 'var(--text-primary, #444050)',
                boxShadow: '0px 4px 12px rgba(68, 64, 80, 0.12)',
                '&:hover': { backgroundColor: '#F2F2F4' },
              }}
            >
              <Icon icon='mdi:fullscreen' width={18} height={18} />
            </Box>

            {/* Custom zoom controls (bottom-right). Cover Google's built-in
                zoom underneath so only this overlay is visible. */}
            <Box
              sx={{
                position: 'absolute',
                right: 24,
                bottom: 24,
                zIndex: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                backgroundColor: 'var(--surface-paper, #FFF)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(68, 64, 80, 0.12)',
              }}
            >
              <MapControl
                icon='mdi:plus'
                dark
                round='top'
                label='Zoom in'
                disabled={zoomInDisabled}
                onClick={zoomIn}
              />
              <MapControl
                icon='mdi:minus'
                round='bottom'
                label='Zoom out'
                disabled={zoomOutDisabled}
                onClick={zoomOut}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
