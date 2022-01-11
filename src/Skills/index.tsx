import { Box, Stack, Grid, Card } from '@mui/material';
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
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   alignSelf: 'center',
      //   backgroundColor: 'primary.200',
      //   height: '90vh',
      //   paddingX: '2.8rem',
      // }}
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
          // marginX: '2.8rem',
          // marginTop: '-62rem',
          marginBottom: '2.8rem',
          // boxShadow: 'shadow.main',
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
