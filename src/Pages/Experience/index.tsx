import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import theme from '../../config/material-theme';
import ExperienceField from './components/ExperienceField';
import { WorkExperience } from './components/WorkExperience';
import { EducationExperience } from './components/EducationExperience';

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
              sx={{ '&:hover': { color: 'inherit' } }}
            >
              <Typography sx={{ color: 'inherit' }}>Experience</Typography>
            </Button>
            <Button
              variant={isSelected ? 'outlined' : 'contained'}
              onClick={(e) => {
                if (isSelected !== false) {
                  setIsSelected(!isSelected);
                }
              }}
              sx={{ '&:hover': { color: 'inherit' } }}
            >
              <Typography sx={{ color: 'inherit' }}>Education</Typography>
            </Button>
          </Stack>
          <Box
            sx={{
              '&:before': {
                content: '""',
                height: '100%',
                width: '5px',
                background: 'hsla(0,0%,100%,.2)',
                top: '2rem',
                left: '49.5%',
                position: 'absolute',
              },
              position: 'relative',
            }}
          >
            {isSelected
              ? WorkExperience.map((experience) => {
                  return (
                    <ExperienceField
                      from={experience.from}
                      to={experience.to}
                      title={experience.title}
                      company={experience.company}
                      city={experience.city}
                    />
                  );
                })
              : EducationExperience.map((experience) => {
                  return (
                    <ExperienceField
                      from={experience.from}
                      to={experience.to}
                      title={experience.title}
                      company={experience.company}
                      city={experience.city}
                    />
                  );
                })}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Experience;
