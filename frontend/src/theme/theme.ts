import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc6b03',
      dark: '#fc6b0377',
    },
    secondary: {
      main: '#03fcf4',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    allVariants: {
      color: '#ffffff'
    },
  }
});

export default theme;
