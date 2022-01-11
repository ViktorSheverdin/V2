import { Box, Typography } from '@mui/material';
import theme from '../../config/material-theme';
const ProgressBar = ({ completedPercentage, skillName }) => {
  return (
    <>
      <Typography
        sx={{
          textTransform: 'capitalize',
          fontWeight: '600',
          marginY: '1rem',
        }}
      >
        {skillName} {completedPercentage}%
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '2rem',
          width: '100%',
          backgroundColor: 'primary.200',
          borderRadius: '5rem',
          margin: 0,
          borderColor: 'primary.300',
          borderWidth: '0.1rem',
          borderStyle: 'solid',
        }}
      >
        <Box
          sx={{
            height: '1rem',
            width: '95%',
            backgroundColor: 'primary.300',
            borderRadius: '5rem',
            margin: 0,
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${completedPercentage}%`,
              transition: 'width 1s ease-in-out',
              backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
              borderRadius: 'inherit',
              textAlign: 'right',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProgressBar;
