import { Box, Typography, Stack } from '@mui/material';

const AchivementBox = ({ icon, amount, description }) => {
  return (
    <Stack
      direction='column'
      spacing='1rem'
      sx={{
        width: '16rem',
        height: '16rem',
        borderColor: 'primary.500',
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        borderRadius: '1rem',
        padding: '2rem',
      }}
    >
      <Box>{icon}</Box>
      <Typography sx={{ fontSize: '2.4rem', fontWeight: '700' }}>
        {amount}
      </Typography>
      <Typography sx={{ color: 'primary.700' }}>{description}</Typography>
    </Stack>
  );
};

export default AchivementBox;
