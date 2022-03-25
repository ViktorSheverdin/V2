import { Stack } from '@mui/material';
import { AboutMe, Experience, Footer, Header, Projects, Skills } from './Pages';

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
