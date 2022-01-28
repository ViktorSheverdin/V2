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
      {hover && (
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
    </Stack>
  );
};

export default ProjectContent;
