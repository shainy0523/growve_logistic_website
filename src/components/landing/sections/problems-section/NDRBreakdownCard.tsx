import { Box, Typography } from '@mui/material'

const ndrData = [
  { label: 'Customer not available', count: 7, percentage: 30 },
  { label: 'Wrong address / not found', count: 4, percentage: 44 },
  { label: 'Customer refused delivery', count: 3, percentage: 22 },
  { label: 'Phone not reachable', count: 5, percentage: 88 },
  { label: 'Door locked / no one home', count: 6, percentage: 67 },
]

export default function NDRBreakdownCard() {
  return (
    <Box
      sx={{
        width: 400,
        bgcolor: '#FFF',
        borderRadius: '12px',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Header */}

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '17.5px',
            color: '#000',
          }}
        >
          NDR reason breakdown
        </Typography>

        <Typography
          sx={{
            mt: '4px',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '15.6px',
            color: '#8D8A94',
          }}
        >
          18 open NDRs · take action before auto-RTO triggers
        </Typography>
      </Box>

      {/* Body */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {ndrData.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: 'grid',
              gridTemplateColumns: '152px 24px 1fr',
              alignItems: 'center',
              columnGap: '20px',
            }}
          >
            {/* Reason */}

            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '15.6px',
                color: '#444050',
              }}
            >
              {item.label}
            </Typography>

            {/* Count */}

            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '15.6px',
                color: '#000',
                textAlign: 'center',
              }}
            >
              {item.count}
            </Typography>

            {/* Chart */}

            <Box
              sx={{
                position: 'relative',
                height: '20px',
                borderLeft: '1px solid #E4E4E8',
                pl: '12px',
              }}
            >
              {/* Grid Lines */}

              {[25, 50, 75, 100].map((x) => (
                <Box
                  key={x}
                  sx={{
                    position: 'absolute',
                    top: -8,
                    bottom: -8,
                    left: `${x}%`,
                    // borderLeft: '1px dashed #E7E7EB',
                    zIndex: 0,
                  }}
                />
              ))}

              {/* Track */}

              <Box
                sx={{
                  position: 'relative',
                  height: '20px',
                  width: '100%',
                  bgcolor: '#EBEBED',
                  overflow: 'hidden',
                  zIndex: 1,
                }}
              >
                {/* Fill */}

                <Box
                  sx={{
                    width: `${item.percentage}%`,
                    height: '100%',
                    bgcolor: '#FBC942',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    px: '8px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '8px',
                      fontWeight: 700,
                      lineHeight: '10.4px',
                      color: '#FFF',
                    }}
                  >
                    {item.percentage}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}