import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import theme from '../../config/material-theme';

const FontAwesomeIconModified = ({ icon }) => {
  return (
    <FontAwesomeIcon
      size='2x'
      icon={icon}
      style={{
        color: `${theme.palette.primary.main}`,
      }}
    />
  );
};

export const SkillsList = [
  {
    img: <FontAwesomeIconModified icon={faGithub} />,
    amount: '39',
    description: 'Github Repositories',
  },
  {
    img: <FontAwesomeIconModified icon={faCode} />,
    amount: '9',
    description: 'React Deployed Projects',
  },
  {
    img: <FontAwesomeIconModified icon={faReact} />,
    amount: '3',
    description: 'Years of React Experience',
  },
];
