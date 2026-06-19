import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Icon } from '@iconify/react'
import SectionHeading from '../../ui/SectionHeading'
import { PLATFORM } from '../../data/landing.data'
import { SECTION_IDS } from '@/utils/constant'
import StoreIntegrationShowcase from './StoreIntegrationShowcase'
import LaptopMockup from './LaptopMockup'
import Image from 'next/image'

// function LaptopMockup() {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: 300,
//         borderRadius: 'var(--radius-lg)',
//         background: 'linear-gradient(180deg, #1A1A20 0%, #0B0B0F 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         p: 2,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           background:
//             'radial-gradient(ellipse at 70% 30%, rgba(251,201,66,0.10) 0%, transparent 50%)',
//           pointerEvents: 'none',
//         }}
//       />
//       <Box
//         sx={{
//           width: '90%',
//           maxWidth: 380,
//           backgroundColor: '#FFFFFF',
//           borderRadius: 'var(--radius-md)',
//           boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
//           overflow: 'hidden',
//           position: 'relative',
//           zIndex: 1,
//         }}
//       >
//         <Box sx={{ height: 16, backgroundColor: '#1F1F1F', display: 'flex', alignItems: 'center', gap: 0.5, px: 0.75 }}>
//           {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
//             <Box key={c} sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c }} />
//           ))}
//         </Box>
//         <Box sx={{ display: 'grid', gridTemplateColumns: '60px 1fr', backgroundColor: '#FFFFFF' }}>
//           <Box sx={{ backgroundColor: '#0B0B0F', height: 150, p: 0.75, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
//             {[true, false, false, false, false, false].map((active, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   height: 12,
//                   borderRadius: '4px',
//                   backgroundColor: active ? 'var(--brand-primary)' : 'rgba(255,255,255,0.08)',
//                 }}
//               />
//             ))}
//           </Box>
//           <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
//             <Box sx={{ display: 'flex', gap: 0.5 }}>
//               {[1, 2, 3].map((n) => (
//                 <Box key={n} sx={{ flex: 1, height: 22, backgroundColor: 'var(--surface-muted)', borderRadius: '4px' }} />
//               ))}
//             </Box>
//             <Box
//               sx={{
//                 flex: 1,
//                 backgroundColor: 'var(--surface-muted)',
//                 borderRadius: '4px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'var(--brand-primary)',
//               }}
//             >
//               <Icon icon='mdi:package-variant-closed' fontSize={36} />
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

export default function PlatformSection() {
  return (
    <Box
      id={SECTION_IDS.PLATFORM}
      sx={{ backgroundColor: 'var(--surface-dark)', color: 'var(--text-on-dark)', py: { xs: 8, md: 12 } }}
    >
      <Box className='landing-container'>
        <SectionHeading
          eyebrow={PLATFORM.eyebrow}
          title={PLATFORM.titleLeading}
          accent={PLATFORM.titleAccent}
          subtitle={PLATFORM.subtitle}
          variant='dark'
          size='md'
        />

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            alignItems: 'stretch',
            gap:4
          }}
        >
          {PLATFORM.cards.map((card, i) => (
            <Box
              key={card.title}
              sx={{
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  // width: "100%",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </Box>

              <Box className="p-2 mt-6">
                <Typography
                  variant="Heading/H4-Bold"
                  sx={{
                    color: "var(--text-on-dark)",
                    fontFamily: 'var(--font-dai-banna), sans-serif',
                    fontWeight:500,
                   }}
                >
                  {card.title}
                </Typography>

                <Typography
                  className="text-[.75rem]! max-w-[500px] pt-1"
                  sx={{
                    color: "var(--text-on-dark-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Yellow callout */}
        <Box
          sx={{
            mt: 8,
            px: { xs: 3, md: 3.5 },
            py: 6,
            borderRadius: '14px',
            background:
              'linear-gradient(180deg, #FDEAB7 0%, #FFFBF0 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SectionHeading
            eyebrow={PLATFORM.callout.eyebrow}
            title={PLATFORM.callout.titleLeading}
            accent={PLATFORM.callout.titleAccent}
            subtitle={PLATFORM.callout.subtitle}
            size='md'
          />
        </Box>
      </Box>
    </Box>
  )
}
