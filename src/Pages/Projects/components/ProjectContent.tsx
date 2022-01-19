import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import theme from '../../../config/material-theme';

const ProjectContent = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <Stack
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      sx={{
        '&:hover': {
          cursor: 'pointer',
          backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
        },
        backgroundImage: project.img,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        height: '31rem',
        maxHeight: '31rem',
        width: '37.6rem',
        maxWidth: '37.6rem',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {hover && (
        <Stack direction='column'>
          <Typography sx={{ fontSize: '2rem', fontWeight: '700' }}>
            {project.name}
          </Typography>
          <Stack
            direction='row'
            sx={{
              alignContent: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {project.technology.map((tech, i) => {
              return (
                <Typography
                  sx={{
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
      )}
      {/* <Typography>{project.name}</Typography>
    <Typography>{project.name}</Typography>
    <Typography>{project.name}</Typography>
    <Typography>{project.name}</Typography>
    <Typography>{project.name}</Typography> */}
    </Stack>
  );
};

export default ProjectContent;
