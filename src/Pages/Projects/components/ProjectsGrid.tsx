import { Grid } from '@mui/material';
import { ProjectsList } from './ProjectsList';
import ProjectContent from './ProjectContent';

const ProjectsGrid = ({ filters }) => {
  const filteredProjects: any =
    typeof filters !== 'undefined' && filters.length === 0
      ? ProjectsList
      : ProjectsList.reduce((result: any, project: any) => {
          if (project.technology.some((tech: any) => filters?.includes(tech))) {
            result.push(project);
          }
          return result;
        }, []);

  return (
    <Grid container spacing={'2.8rem'} sx={{ width: '100%' }}>
      {filteredProjects.map((project, i) => {
        return (
          <Grid key={i} item xs={'auto'}>
            <ProjectContent project={project} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectsGrid;
