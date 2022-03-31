import { Box, Stack, Grid } from '@mui/material';
import { AboutMyself, ProgressBar, SkillsAchivements } from '../../components';

const Skills = () => {
  const achivementList = [
    { name: 'JavaScript', score: 90 },
    { name: 'react', score: 90 },
    { name: 'CSS', score: 70 },
    { name: 'TypeScript', score: 60 },
    { name: 'Redux', score: 50 },
    { name: 'React Router', score: 50 },
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
          width: '70%',
          marginBottom: '2.8rem',
        }}
      >
        <Grid container sx={{ height: '100%' }} columnSpacing={'3rem'}>
          <Grid item sm={12} md={12} lg={7}>
            <Stack
              direction='column'
              spacing='2rem'
              sx={{ marginRight: '5rem', width: '100%' }}
            >
              <AboutMyself />
              <SkillsAchivements />
            </Stack>
          </Grid>
          <Grid item sm={12} md={12} lg={5}>
            <Stack direction='column'>
              {achivementList.map(({ score, name }) => {
                return (
                  <Box sx={{ marginBottom: '2rem' }}>
                    <ProgressBar completedPercentage={score} skillName={name} />
                  </Box>
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
