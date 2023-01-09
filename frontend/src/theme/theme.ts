import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc6b03',
      dark: '#333333',
    },
    secondary: {
      main: '#03fcf4',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    allVariants: {
      color: '#ffffff',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#333333',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#ffffff',
        },
      },
    },
  },
});

export default theme;
