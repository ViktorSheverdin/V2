import { Stack } from '@mui/material';
import Header from './Pages/Header';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';

const App = () => {
  return (
    <Stack
      direction='column'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'primary.200',
      }}
    >
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
    </Stack>
  );
};

export default App;
