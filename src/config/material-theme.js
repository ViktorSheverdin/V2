import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  //START OF COLORS
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#5029ef',
      200: '#eaf0fe',
      300: '#dfe5f3',
      400: '#6f6e89',
      500: '#250f7f',
      600: '#191933',
      700: '#f7f9ff',
    },
    secondary: {
      main: '#09f5a2',
    },
    common: {
      300: '#292954',
      400: '#6e65a0',
    },
    white: {
      main: '#ffffff',
    },
    black: {
      main: '#000000',
    },
    success: {
      main: '#09f5a2',
    },
    info: {
      main: '#20cbfe',
    },
    alert: {
      main: '#ffbc17',
    },
    warning: {
      main: '#f17b25',
    },
    error: {
      main: '#f14949',
    },
    text: {
      primary: '#191933',
    },
  },
  //END OF COLORS
});

const theme = createTheme({
  ...globalTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: globalTheme.palette.primary[700],
        },
        html: {
          fontSize: '62.5%',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '2.0rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          lineHeight: '2.2rem',
          fontWeight: '400',
          color: globalTheme.palette.primary[600],
          paddingTop: '0.2rem',
        },
      },
    },
  },
});
export default theme;
