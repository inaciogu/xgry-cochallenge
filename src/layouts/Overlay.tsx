import { Box } from '@mui/material'

export default function Overlay() {
  return (
    <Box
      position="absolute"
      display="flex"
      width={{ md: '40%', xs: '100%' }}
      height="119%"
      left={0}
      top={0}
      sx={{
        background:
          'linear-gradient(180deg, rgba(47, 72, 88, 0.5) 0%, rgba(47, 72, 88, 0) 58.84%);',
        backdropFilter: 'blur(10px)',
        transform: 'matrix(0, 1, 1, 0, 0)',
      }}
    />
  )
}
