import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  Button,
} from '@mui/material';
import Image from 'material-ui-image';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
const AboutMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-62rem',
        backgroundColor: 'primary.100',
      }}
    >
      <Card
        sx={{
          maxHeight: '76rem',
          height: '76rem',
          width: '162rem',
          marginX: '2.8rem',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingY: '2.8rem',
            color: 'primary.400',
          }}
        >
          <Grid container alignItems='stretch' sx={{ marginX: '2rem' }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginTop: '-14rem' }}>
                <Image
                  src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                  style={{
                    width: '100%',
                    height: 'auto !important',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ paddingLeft: '12rem', alignSelf: 'center' }}
            >
              <Stack
                direction='column'
                sx={{ alignContent: 'center', justifyContent: 'center' }}
              >
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
                    lineHeight: '2.2rem',
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
                  sx={{ paddingTop: '2rem' }}
                >
                  <Button
                    variant='contained'
                    endIcon={<FontAwesomeIcon size='2x' icon={faLinkedinIn} />}
                    sx={{ width: '2rem', height: '2rem' }}
                  ></Button>

                  <Button
                    variant='contained'
                    endIcon={<FontAwesomeIcon size='2x' icon={faGithub} />}
                    sx={{ width: '2rem', height: '2rem' }}
                  ></Button>
                  <Button
                    variant='contained'
                    endIcon={<FontAwesomeIcon size='2x' icon={faInstagram} />}
                    sx={{ width: '2rem', height: '2rem' }}
                  ></Button>
                  <Button
                    variant='contained'
                    endIcon={<FontAwesomeIcon size='2x' icon={faFacebook} />}
                    sx={{ width: '2rem', height: '2rem' }}
                  ></Button>
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
