import { Box, Card, CardContent, Typography, Grid, Stack } from '@mui/material';
import Image from 'material-ui-image';
// import Avatar from '../assets/avatar.jpg';

const AboutMe = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '2.8rem',
          backgroundColor: 'primary.main',
        }}
      >
        <Card sx={{ height: '100%', width: '150rem', marginX: '2.8rem' }}>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingY: '2.8rem',
              color: 'primary.400',
            }}
          >
            <Grid
              container
              spacing='3.2rem'
              alignItems='stretch'
              sx={{ marginX: '2rem' }}
            >
              <Grid item xs={12} md={6}>
                <Image src='http://loremflickr.com/300/200' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction='column' sx={{ paddingRight: '23rem' }}>
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      textTransform: 'uppercase',
                      color: 'primary.600',
                      fontWeight: '400',
                      fontFamily: 'Roboto, sans-serif',
                      letterSpacing: '0.12rem',
                      marginBottom: '1.2rem',
                    }}
                  >
                    Hello everybody, I am
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '4.8rem',
                      textTransform: 'uppercase',
                      color: 'primary.600',
                      fontWeight: '500',
                      lineHeight: '4.8rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    Viktor Sheverdin
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.6rem',
                      textTransform: 'uppercase',
                      color: 'primary.600',
                      fontWeight: '500',
                      lineHeight: '1.6rem',
                      marginBottom: '2rem',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    Front-End Engineer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.6rem',
                      color: 'primary.400',
                      fontWeight: '400',
                      lineHeight: '1.8rem',
                      marginBottom: '4rem',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {`Main area of expertise is automation and full stack
                    development. Currently working with Houle IT team deploying
                    various custom scripts and applications to automate tasks
                    and enhance business processes. Focus is on maintaining
                    custom system that connects on Microsoft API for Skype,
                    Outlook, and AD.                    
                    
                    As well as that, I work with SCCM and
                    Carbon Black security systems and end-user support. I am an
                    avid full-stack developer at heart, with a passion for
                    learning and implementing the latest JavaScript frameworks
                    to improve usability of web builds.`}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default AboutMe;
