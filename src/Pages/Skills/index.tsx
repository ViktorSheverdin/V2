import { Box, Stack, Grid } from '@mui/material';
import AboutMyself from '../../components/AboutMyself';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

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
        paddingY: '12rem',
      }}
    >
      <Box
        sx={{
          width: '60%',
          marginBottom: '2.8rem',
          height: '70vh',
        }}
      >
        <Grid container sx={{ height: '100%' }} columnSpacing={'1rem'}>
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
    </Box>
  );
};
export default Skills;
