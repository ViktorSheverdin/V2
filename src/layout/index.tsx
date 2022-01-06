import { Stack, Box, Card, CardContent } from '@mui/material';
import AboutMe from '../aboutMe';

const Layout = () => {
  return (
    <Stack direction='column'>
      <AboutMe />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '2.8rem',
          backgroundColor: 'primary.main',
        }}
      >
        <Card sx={{ height: '100%' }}>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingY: '2.8rem',
              color: 'primary.400',
            }}
          >
            This is about me
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};

export default Layout;
