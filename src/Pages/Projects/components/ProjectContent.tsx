import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import theme from '../../../config/material-theme';
import ProjectDetailsModal from '../../../components/Modals/ProjectDetailsModal';

const HoverDisplay = ({ project }) => {
  return (
    <Stack
      direction='column'
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 999,
      }}
    >
      <Typography
        sx={{ position: 'relative', fontSize: '2rem', fontWeight: '700' }}
      >
        {project.name}
      </Typography>
      <Stack
        direction='row'
        sx={{
          position: 'relative',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {project.technologies.map((tech, i) => {
          return (
            <Typography
              sx={{
                position: 'relative',
                fontSize: '1.6rem',
                fontWeight: '400',
                marginTop: '0.8rem',
              }}
            >
              {tech} {project.technologies.length - i > 1 ? '/ ' : ''}{' '}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
};

const ProjectContent = ({ project }) => {
  const [parentHover, setParentHover] = useState(false);
  const [openProjectDetailsModal, setOpenProjectDetailsModal] = useState(false);
  return (
    <>
      <Box
        onMouseEnter={() => {
          setParentHover(true);
        }}
        onMouseLeave={() => {
          setParentHover(false);
        }}
        onClick={(e) => {
          e.preventDefault();
          setOpenProjectDetailsModal(true);
        }}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          margin: 0,
          cursor: parentHover ? 'pointer' : '',
        }}
      >
        {parentHover && <HoverDisplay project={project} />}

        <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
          <img src={project.img} alt='img' height='100%' width='100%' />
        </Box>
      </Box>
      <ProjectDetailsModal
        open={openProjectDetailsModal}
        onClose={() => setOpenProjectDetailsModal(false)}
        project={project}
      />
    </>
  );
};

export default ProjectContent;
