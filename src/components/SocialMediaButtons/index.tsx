import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import theme from '../../config/material-theme';

const socialMediaList = [
  {
    href: 'https://www.linkedin.com/in/viktor-sheverdin-4062b674/',
    icon: faLinkedinIn,
  },
  {
    href: 'https://github.com/ViktorSheverdin/',
    icon: faGithub,
  },
  {
    href: 'https://www.instagram.com/viktor.sheverdin/',
    icon: faInstagram,
  },
];

const ModifiedButton = ({ href, icon }) => {
  return (
    <Button
      variant='contained'
      href={href}
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
      <FontAwesomeIcon size='2x' icon={icon} />
    </Button>
  );
};

const SocialMediaButtons = () => {
  return (
    <>
      {socialMediaList.map(({ href, icon }) => {
        return <ModifiedButton href={href} icon={icon} />;
      })}
    </>
  );
};

export default SocialMediaButtons;
