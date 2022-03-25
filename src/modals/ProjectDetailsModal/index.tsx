import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { TechnologyDisplay } from '../../components';

const ProjectDetailsModal = ({ open, onClose, project }) => {
  console.log(project);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      // maxWidth='sm'
      scroll='body'
    >
      <DialogContent>
        <Stack direction='column'>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '2.75rem',
              lineHeight: '2rem',
              color: 'primary.600',
            }}
          >
            {project.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '1.6rem',
              lineHeight: '1.4rem',
              color: 'primary.400',
              marginTop: '1rem',
            }}
          >
            {project.shortDescription}
          </Typography>
          <Box sx={{ width: '100%', height: 'auto', marginTop: '2rem' }}>
            <img src={project.img} alt='img' height='100%' width='100%' />
          </Box>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '2.5rem',
              lineHeight: '2.5rem',
              color: 'primary.600',
              marginTop: '2rem',
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '1.4rem',
              lineHeight: '1.4rem',
              color: 'primary.400',
              marginTop: '1rem',
            }}
          >
            {project.description}
          </Typography>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '2.5rem',
              lineHeight: '2.5rem',
              color: 'primary.600',
              marginTop: '1rem',
            }}
          >
            Technologies
          </Typography>
          <Stack direction={'row'} spacing='1rem' sx={{ marginTop: '1rem' }}>
            {project.technologies.map((technology) => {
              return <TechnologyDisplay technology={technology} />;
            })}
          </Stack>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '2.5rem',
              lineHeight: '2.5rem',
              color: 'primary.600',
              marginTop: '1rem',
            }}
          >
            Github
          </Typography>
          <Link
            sx={{
              fontWeight: '400',
              fontSize: '1.4rem',
              lineHeight: '1.4rem',
              color: 'primary.400',
              marginTop: '1rem',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            {project.github}
          </Link>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant={'outlined'}
          sx={{
            width: '100%',
          }}
          href={project.demoURL}
          target='_blank'
        >
          {' '}
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1.5rem',
              lineHeight: '1.5rem',
              color: 'primary.600',
            }}
          >
            Open Project
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDetailsModal;
