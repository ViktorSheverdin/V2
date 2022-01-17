import { Grid, Stack, Typography } from '@mui/material';
import { ProjectsList } from './ProjectsList';

const ProjectsGrid = ({ filters }) => {
  // const filteredProjects = ProjectsList.map((project) => {
  //   if (project.technology.some((tech) => filter.includes(tech))) {
  //     return project;
  //   }
  // });

  const filteredProjects: any =
    typeof filters !== 'undefined' && filters.length === 0
      ? ProjectsList
      : ProjectsList.reduce((result: any, project: any) => {
          if (project.technology.some((tech: any) => filters?.includes(tech))) {
            result.push(project);
          }
          return result;
        }, []);
  console.log(filteredProjects);

  return (
    <Grid container spacing={'2.8rem'}>
      {/* {ProjectsList.map((project) => { */}
      {filteredProjects.map((project) => {
        console.log(project.imgURL);
        return (
          <Grid item xs={'auto'}>
            <Stack
              sx={{
                backgroundImage: `url(${project.imgURL})`,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                minHeight: '21rem',
                minWidth: '27.6rem',
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
