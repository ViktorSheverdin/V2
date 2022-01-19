import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import theme from '../../config/material-theme';

const SocialMediaButtons = () => {
  return (
    <>
      <Button
        variant='contained'
        href='https://www.linkedin.com/in/viktor-sheverdin-4062b674/'
        target='_blank'
        sx={{
          '&:hover': {
            backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
          },
          maxWidth: '4rem',
          maxHeight: '4rem',
          minWidth: '4rem',
          minHeight: '4rem',
          backgroundColor: 'primary.main',
        }}
      >
        <FontAwesomeIcon size='2x' icon={faLinkedinIn} />
      </Button>

      <Button
        variant='contained'
        href='https://github.com/ViktorSheverdin/'
        target='_blank'
        sx={{
          '&:hover': {
            backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
          },
          maxWidth: '4rem',
          maxHeight: '4rem',
          minWidth: '4rem',
          minHeight: '4rem',
          backgroundColor: 'primary.main',
        }}
      >
        <FontAwesomeIcon size='2x' icon={faGithub} />
      </Button>
      <Button
        variant='contained'
        href='https://www.instagram.com/viktor.sheverdin/'
        target='_blank'
        sx={{
          '&:hover': {
            backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
          },
          maxWidth: '4rem',
          maxHeight: '4rem',
          minWidth: '4rem',
          minHeight: '4rem',
          backgroundColor: 'primary.main',
        }}
      >
        <FontAwesomeIcon size='2x' icon={faInstagram} />
      </Button>
      <Button
        variant='contained'
        href='https://www.facebook.com/viktor.sheverdin'
        target='_blank'
        sx={{
          '&:hover': {
            backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
          },
          maxWidth: '4rem',
          maxHeight: '4rem',
          minWidth: '4rem',
          minHeight: '4rem',
          backgroundColor: 'primary.main',
        }}
      >
        <FontAwesomeIcon size='2x' icon={faFacebook} />
      </Button>
    </>
  );
};
export default SocialMediaButtons;
