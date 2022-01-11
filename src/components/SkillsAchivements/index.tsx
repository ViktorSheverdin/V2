import { Stack } from '@mui/material';
import AchivementBox from '../AchivementBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import theme from '../../config/material-theme';

const SkillsAchivements = () => {
  return (
    <Stack direction='row' spacing='2.8rem'>
      <AchivementBox
        icon={
          <FontAwesomeIcon
            size='2x'
            icon={faGithub}
            style={{
              color: `${theme.palette.primary.main}`,
            }}
          />
        }
        amount={39}
        description={'Github Repositories'}
      />
      <AchivementBox
        icon={
          <FontAwesomeIcon
            size='2x'
            icon={faGithub}
            style={{
              color: `${theme.palette.primary.main}`,
            }}
          />
        }
        amount={9}
        description={'React/Node.js Projects'}
      />
      <AchivementBox
        icon={
          <FontAwesomeIcon
            size='2x'
            icon={faGithub}
            style={{
              color: `${theme.palette.primary.main}`,
            }}
          />
        }
        amount={3}
        description={'Researches published'}
      />
    </Stack>
  );
};

export default SkillsAchivements;
