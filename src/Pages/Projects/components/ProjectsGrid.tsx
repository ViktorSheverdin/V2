import { Grid } from '@mui/material';
import { ProjectsList } from './ProjectsList';
import ProjectContent from './ProjectContent';

const ProjectsGrid = ({ filters }) => {
  const filteredProjects: any =
    typeof filters !== 'undefined' && filters.length === 0
      ? ProjectsList
      : ProjectsList.reduce((result: any, project: any) => {
          if (
            project.technologies.some((tech: any) => filters?.includes(tech))
          ) {
            result.push(project);
          }
          return result;
        }, []);

  return (
    <Grid
      container
      direction={'row'}
      spacing={'2.8rem'}
      sx={{
        width: filteredProjects.length < 3 ? '66.7%' : '100%',
        // width: '100%',
        alignSelf: 'center',
      }}
    >
      {filteredProjects.map((project, i) => {
        return (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            lg={filteredProjects.length < 3 ? 6 : 4}
            // lg={4}
            // sx={{ width: filteredProjects.length < 3 ? '66.7%' : '100%' }}
          >
            <ProjectContent project={project} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectsGrid;
