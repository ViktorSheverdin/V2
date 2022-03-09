import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import theme from '../../../config/material-theme';
import ProjectDetailsModal from '../../../components/Modals/ProjectDetailsModal';

const HoverDisplay = ({
  project,
  openProjectDetailsModal,
  setOpenProjectDetailsModal,
}) => {
  return (
    <>
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
          {project.technology.map((tech, i) => {
            return (
              <Typography
                sx={{
                  position: 'relative',
                  fontSize: '1.6rem',
                  fontWeight: '400',
                  marginTop: '0.8rem',
                }}
              >
                {tech} {project.technology.length - i > 1 ? '/ ' : ''}{' '}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

const ProjectContent = ({ project }) => {
  const [parentHover, setParentHover] = useState(false);
  const [openProjectDetailsModal, setOpenProjectDetailsModal] = useState(false);
  console.log(parentHover);
  return (
    <>
      <Stack
        onMouseOver={(e) => {
          e.preventDefault();
          setParentHover(true);
        }}
        onMouseOut={(e) => {
          e.preventDefault();
          setParentHover(false);
        }}
        onClick={() => setOpenProjectDetailsModal(true)}
        sx={{
          position: 'relative',
          width: '100%',
          margin: 0,
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <img
          src={project.img}
          alt='img'
          style={{
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        />
        {parentHover && (
          <HoverDisplay
            project={project}
            openProjectDetailsModal={openProjectDetailsModal}
            setOpenProjectDetailsModal={setOpenProjectDetailsModal}
          />
        )}
      </Stack>
      <ProjectDetailsModal
        open={openProjectDetailsModal}
        onClose={() => setOpenProjectDetailsModal(false)}
      />
    </>
  );
};

export default ProjectContent;
