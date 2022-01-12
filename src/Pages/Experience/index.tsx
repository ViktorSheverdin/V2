import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import theme from '../../config/material-theme';

const Experience = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.200',
        paddingY: '12rem',
        backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
      }}
    >
      <Box
        sx={{
          width: '60%',
          marginBottom: '2.8rem',
        }}
      >
        <Stack
          direction='column'
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Stack direction='row' spacing='1rem'>
            <Button
              variant={isSelected ? 'contained' : 'outlined'}
              onClick={(e) => {
                if (isSelected !== true) {
                  setIsSelected(!isSelected);
                }
              }}
            >
              <Typography>Experience</Typography>
            </Button>
            <Button
              variant={isSelected ? 'outlined' : 'contained'}
              onClick={(e) => {
                if (isSelected !== false) {
                  setIsSelected(!isSelected);
                }
              }}
            >
              <Typography>Education</Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Experience;
