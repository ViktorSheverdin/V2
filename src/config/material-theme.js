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
      main: '#766dff',
      200: '#f7f7f7',
      300: '#E0E0DE',
      400: '#6f6e89',
      500: '#e1e1e1',
      600: '#191933',
      700: '#777',
    },
    secondary: {
      main: '#88f3ff',
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
  shadows: {
    shadow: {
      main: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 12px 24px 0px',
    },
  },
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
    MuiPaper: {
      variants: [
        {
          props: { variant: 'hoverable' },
          style: {
            boxShadow: '0px 12px 50px rgba(80, 41, 239, 0.04)',
            '&:hover': {
              boxShadow: '0px 12px 30px rgba(37, 15, 127, 0.08)',
            },
          },
        },
      ],
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
