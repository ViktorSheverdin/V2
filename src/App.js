import { Stack } from '@mui/material';
import Header from './Pages/Header';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';

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
      <Projects />
      <Footer />
    </Stack>
  );
};

export default App;
