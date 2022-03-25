import React from 'react';
import { Box, Typography } from '@mui/material';

const TechnologyDisplay = ({ technology }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.300',
        borderRadius: '0.4rem',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.6rem',
          lineHeight: '1.6rem',
          fontWeight: '600',
          color: 'primary.600',
          marginY: '0.5rem',
          marginX: '1rem',
        }}
      >
        {technology}
      </Typography>
    </Box>
  );
};

export default TechnologyDisplay;
