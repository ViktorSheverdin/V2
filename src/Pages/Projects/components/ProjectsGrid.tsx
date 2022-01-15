import { Grid, Stack, Typography } from '@mui/material';
import { ProjectsList } from './ProjectsList';

const ProjectsGrid = (filters) => {
  let filter: any = ['React'];

  // const filteredProjects = ProjectsList.map((project) => {
  //   if (project.technology.some((tech) => filter.includes(tech))) {
  //     return project;
  //   }
  // });

  const filteredProjects: any =
    typeof filter !== 'undefined' && filter.length === 0
      ? ProjectsList
      : ProjectsList.reduce((result: any, project: any) => {
          if (project.technology.some((tech: any) => filter?.includes(tech))) {
            result.push(project);
          }
          return result;
        }, []);
  console.log(filteredProjects);

  return (
    <Grid container spacing={'2.8rem'}>
      {/* {ProjectsList.map((project) => { */}
      {filteredProjects.map((project) => {
        return (
          <Grid item xs={4}>
            <Stack
              sx={{
                backgroundImage: `url(https://media.gettyimages.com/photos/closeup-of-robin-bird-perched-on-a-stone-in-nature-picture-id1302079405?s=2048x2048)`,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                minHeight: '29rem',
              }}
            >
              <Typography>{project.name}</Typography>
              <Typography>{project.name}</Typography>
              <Typography>{project.name}</Typography>
              <Typography>{project.name}</Typography>
              <Typography>{project.name}</Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectsGrid;
