import { Stack } from '@mui/material';
import Header from '../Header';
import AboutMe from '../aboutMe';
import Skills from '../Skills';

const Layout = () => {
  return (
    <Stack direction='column'>
      <Header />
      <AboutMe />
      <Skills />
    </Stack>
  );
};

export default Layout;
