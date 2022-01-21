import { Box, Stack, Typography, Link } from '@mui/material';
const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black.main',
        paddingY: '12rem',
      }}
    >
      <Box
        sx={{
          width: '60%',
          marginBottom: '2.8rem',
        }}
      >
        <Stack
          direction='row'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Stack direction='column' sx={{ maxWidth: '57rem' }}>
            <Typography sx={{ color: 'white.main' }}>About Me</Typography>
            <Typography
              sx={{
                color: 'primary.700',
                marginTop: '3.5rem',

                whiteSpace: 'pre-line',
              }}
            >
              {` MERN stack (MongoDB, Express, React.js, Node,js), Full-Stack
              development focusing my interest mainly on Front-End development
              and intend to use this knowledge to serve as a valuable asset for
              Front-End developer.
              
              Copyright © All rights reserved | This template is made with  by Viktor Sheverdin`}
            </Typography>
          </Stack>
          <Stack
            direction='column'
            sx={{
              maxWidth: '17rem',
              marginRight: '10rem',
              marginLeft: '4rem',
            }}
          >
            <Typography sx={{ color: 'white.main' }}>Follow Me</Typography>
            <Typography sx={{ color: 'primary.700', marginTop: '3.5rem' }}>
              Let's be social
            </Typography>
            <Stack
              direction='row'
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                marginTop: '1rem',
              }}
            >
              <Link
                href='https://www.linkedin.com/in/viktor-sheverdin-4062b674/'
                sx={{ color: 'secondary.200', paddingRight: '1rem' }}
              >
                LinkedIn
              </Link>
              <Link
                href='https://github.com/ViktorSheverdin/'
                sx={{ color: 'secondary.200', paddingRight: '1rem' }}
              >
                Github
              </Link>
              <Link
                href='https://www.instagram.com/viktor.sheverdin/'
                sx={{ color: 'secondary.200', paddingRight: '1rem' }}
              >
                Instagram
              </Link>
              <Link
                href='https://www.facebook.com/viktor.sheverdin'
                sx={{ color: 'secondary.200', paddingRight: '1rem' }}
              >
                Facebook
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
