import { Theme, colors, createTheme, responsiveFontSizes } from '@mui/material';

export const AppLightTheme: Theme = responsiveFontSizes(
  createTheme({
    custom: {
      navbar: {
        background: '#FFFFFF',
        textColor: '#101010',
        iconColor: '#878787',
        activeMenuBg: '#000000',
        activeTextColor: '#FFFFFF',
      },
      specialButton: {
        fill: {
          startColor: 'rgba(249, 190, 78, 1)',
          midColor: 'rgba(222, 183, 108, 1)',
          stopColor: 'rgba(238, 180, 67, 1)',
        },
        stroke: {
          startColor: 'rgba(114, 57, 234, 1)',
          midColor: 'rgba(212, 215, 245, 0.75)',
          stopColor: 'rgba(178, 185, 237, 0.5)',
        },
      },
      baseGradient: {
        color1: 'rgba(114, 57, 234, 1)',
        color2: 'rgba(178, 185, 237, 1)',
        color3: 'rgba(178, 185, 237, 0.5)',
        color4: 'rgba(245, 246, 253, 1)',
        color5: 'rgba(212, 215, 245, 0.75)',
      },
      welcome: {
        color: '#26304A',
      },
      // status:{
      //   success:{
      //     color:
      //     background:
      //   },
      //   failure:{
      //     color:
      //     background:
      //   }
      // }
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#1443C3',
        light: '#94B3F9',
        // light: 'rgba(22,93,255,0.3)',
        // dark: ''
        contrastText: '#F5F5F5',
      },
      secondary: {
        main: '#7239EA',
        // light: 'rgba(114, 57, 234, 0.4)',
        // light: '#C2ACEF',
        light: '#DDD1F6',
        // light: '#9D8BC4',
        // dark: '#878787',
        dark: '#39177E',
        // contrastText: '#F5F5F5'
        // dark: ''
      },
      success: {
        main: '#1FD931',
        dark: '#1FB26A',
      },
      warning: {
        main: '#FF3D00',
        dark: '#FC390E',
      },
      background: {
        default: '#F0EEF4',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#2E2C3A',
      },
    },
    typography: {
      h1: {
        fontWeight: 600,
        fontSize: '5rem',
      },
      h2: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.2rem',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#2E2C3A',
            fontFamily: "'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 15,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontVariant: 'small-caps',
          },
        },
      },
    },
  }),
);

export const AppDarkTheme: Theme = responsiveFontSizes(
  createTheme({
    custom: {
      navbar: {
        background: '#101010',
        // textColor: '#F5F5F5',
        textColor: '#FFFFFF',
        iconColor: '#F5F5F5',
        activeMenuBg: '#2E2C3A',
        // activeTextColor: '#101010',
        activeTextColor: '#FFFFFF',
      },
      specialButton: {
        fill: {
          startColor: 'rgba(216, 164, 63, 1)',
          midColor: 'rgba(222, 183, 108, 1)',
          stopColor: 'rgba(203, 135, 4, 1)',
        },
        stroke: {
          startColor: 'rgba(114, 57, 234, 1)',
          midColor: 'rgba(212, 215, 245, 0.75)',
          stopColor: 'rgba(178, 185, 237, 0.5)',
        },
      },
      baseGradient: {
        color1: 'rgba(114, 57, 234, 1)',
        color2: 'rgba(178, 185, 237, 1)',
        color3: 'rgba(178, 185, 237, 0.5)',
        color4: 'rgba(245, 246, 253, 1)',
        color5: 'rgba(212, 215, 245, 0.75)',
      },
      welcome: {
        color: '#165DFF',
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#165DFF',
        light: '#3564CF',
        // light: 'rgba(22, 93, 255, 0.8)',
        // light: '#94B3FB',
        // contrastText:'#26304A'
      },
      secondary: {
        main: '#B2B9ED',
        light: '#D5E2FF',
        dark: '#494F7B',
        // dark: 'rgba(178, 185, 237, 0.6)',
        // contrastText: '#2E2C3A'
      },
      success: {
        main: '#1FD931',
        dark: '#1FB26A',
      },
      warning: {
        main: '#FF3D00',
        dark: '#FC390E',
      },
      background: {
        default: '#1B1A22',
        paper: '#2E2C3A',
      },
      text: {
        primary: '#F5F5F5',
      },
    },
    typography: {
      h1: {
        fontWeight: 600,
        fontSize: '5rem',
      },
      h2: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.2rem',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#F5F5F5',
            fontFamily: "'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 15,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontVariant: 'small-caps',
          },
        },
      },
    },
  }),
);

// let theme = createTheme({
//   palette: {
//     primary: {
//       // main: colors.blue[500]
//       main: '#1443C3',
//     },
//     secondary: {
//       main: colors.amber[500],
//     },
//   },
// });

// export default responsiveFontSizes(theme);
