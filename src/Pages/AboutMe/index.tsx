import { Box, Card, Grid, CardContent, Typography, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '../../assets/img/avatar.jpg';
import { SocialMediaButtons } from '../../components';

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.200',
      }}
    >
      <Card
        sx={{
          width: '162rem',
          marginX: '2.8rem',
          marginTop: '-62rem',
          marginBottom: '2.8rem',
          boxShadow: 'shadow.main',
        }}
      >
        <CardContent
          sx={{
            paddingY: '2.8rem',
            color: 'primary.400',
          }}
        >
          <Grid container alignItems='stretch' sx={{ marginX: '2rem' }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Box>
                <img
                  src={Avatar}
                  alt='img'
                  height='100%'
                  width='100%'
                  style={{ paddingRight: '2rem' }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ paddingLeft: '1rem', alignSelf: 'center' }}
            >
              <Stack
                direction='column'
                sx={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  maxWidth: '55rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.8rem',
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
                    fontWeight: '700',
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
                    fontSize: '2rem',
                    color: 'primary.400',
                    fontWeight: '400',
                    lineHeight: '2.5rem',
                    marginBottom: '4rem',
                    whiteSpace: 'pre-line',
                    paddingRight: '2rem',
                  }}
                >
                  I am a Front-End engineer, and for the last several years I
                  have been creating elegant solutions for an astonishing UI
                  experience, and implementing best code practices for an easy
                  implementation and scalability.
                </Typography>
                <Stack direction='row'>
                  <PhoneIcon fontSize='large' />
                  <Typography
                    sx={{ paddingLeft: '1rem', paddingBottom: '1.5rem' }}
                  >
                    (778) 919-8507
                  </Typography>{' '}
                </Stack>
                <Stack direction='row'>
                  <EmailIcon fontSize='large' />
                  <Typography
                    sx={{ paddingLeft: '1rem', paddingBottom: '1.5rem' }}
                  >
                    viktor.sheverdin@gmail.com
                  </Typography>
                </Stack>
                <Stack direction='row'>
                  <HomeIcon fontSize='large' />
                  <Typography
                    sx={{ paddingLeft: '1rem', paddingBottom: '1.5rem' }}
                  >
                    Burnaby, BC
                  </Typography>
                </Stack>
                <Stack
                  direction='row'
                  spacing={'1rem'}
                  sx={{
                    paddingTop: '2rem',
                  }}
                >
                  <SocialMediaButtons />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default AboutMe;
