import { Box, Stack, Grid } from '@mui/material';
import AboutMyself from '../components/AboutMyself';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Skills = () => {
  const skills = [
    { name: 'react', score: 90 },
    { name: 'JavaScript', score: 90 },
    { name: 'CSS', score: 70 },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.200',
        height: '90vh',
        marginTop: '10rem',
      }}
    >
      <Grid container sx={{ width: '70%' }} columnSpacing={'15rem'}>
        <Grid item xs={12} md={6}>
          <AboutMyself />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction='column'>
            {skills.map((skill) => {
              return (
                <ProgressBar
                  completedPercentage={skill.score}
                  skillName={skill.name}
                />
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Skills;
