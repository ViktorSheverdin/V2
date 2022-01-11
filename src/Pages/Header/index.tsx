import { Box } from '@mui/system';
import theme from '../../config/material-theme';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '76rem',
        backgroundImage: `linear-gradient(90deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
      }}
    ></Box>
  );
};

export default Header;
