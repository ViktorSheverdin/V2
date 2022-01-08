import { Stack, Box } from '@mui/material';
import Header from '../Header';
import AboutMe from '../aboutMe';
import Skills from '../Skills';

const Layout = () => {
  return (
    <Stack
      direction='column'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'primary.200',
        // alignItems: 'center',
      }}
    >
      <Header />
      <AboutMe />
      <Skills />
    </Stack>
  );
};

export default Layout;
