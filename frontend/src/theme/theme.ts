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
      main: green.A200,
      dark: green.A700
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#4caf50',
          },
        },
      },
    },
    MuiTable:{
      styleOverrides: {
        stickyHeader: {
          backgroundColor: "#222222",
        },
        root: {
          backgroundColor: "#222222",
        },
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#222222",
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#222222",
        },
        root: {
          padding: 16,
          // textAlign: 'center',
          '&:last-child': {
            textAlign: 'center',
          },
          borderBottom: '1px solid #555555',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorInherit: {
          '&$selected': {
            color: '#fc6b03',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#fc6b03',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#fc6b03",
        },
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#fc6b03'
        },
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#222222'
        },
      }
    }
  },
});

export default theme;
