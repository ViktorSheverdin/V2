import { Stack, Box, Card, CardContent } from '@mui/material';

const Layout = () => {
  return (
    <Stack direction='column'>
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
    </Stack>
  );
};

export default Layout;
