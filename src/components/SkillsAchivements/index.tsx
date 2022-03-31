import { Box, Stack } from '@mui/material';
import AchivementBox from '../AchivementBox';
import { SkillsList } from './SkillsList';

const SkillsAchivements = () => {
  return (
    <Stack
      direction='row'
      sx={{ width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {SkillsList.map(({ img, amount, description }) => {
        return (
          <Box sx={{ paddingRight: '2rem', paddingBottom: '2rem' }}>
            <AchivementBox
              icon={img}
              amount={amount}
              description={description}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default SkillsAchivements;
