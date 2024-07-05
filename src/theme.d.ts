import { ThemeOptions } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  // Defined theme for custom Navbar
  interface Theme {
    custom: {
      navbar: {
        background: string;
        textColor: string;
        iconColor: string;
        activeMenuBg: string;
        activeTextColor: string;
      };

      specialButton: {
        fill: {
          startColor: string;
          midColor: string;
          stopColor: string;
        };
        stroke: {
          startColor: string;
          midColor: string;
          stopColor: string;
        };
      };

      baseGradient: {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
      };

      welcome: {
        color: string;
      };
    };
  }

  //   // Define theme for special  button
  //   interface Theme {
  //     custom: {

  //     };
  //   }

  interface ThemeOptions {
    custom: {
      navbar: {
        background: CSSProperties['color'];
        textColor: CSSProperties['color'];
        iconColor: CSSProperties['color'];
        activeMenuBg: CSSProperties['color'];
        activeTextColor: CSSProperties['color'];
      };
      specialButton: {
        fill: {
          startColor: CSSProperties['color'];
          midColor: CSSProperties['color'];
          stopColor: CSSProperties['color'];
        };
        stroke: {
          startColor: CSSProperties['color'];
          midColor: CSSProperties['color'];
          stopColor: CSSProperties['color'];
        };
      };
      baseGradient: {
        color1: CSSProperties['color'];
        color2: CSSProperties['color'];
        color3: CSSProperties['color'];
        color4: CSSProperties['color'];
        color5: CSSProperties['color'];
      };
      welcome: {
        color: CSSProperties['color'];
      };
    };
  }

  //   interface Theme {
  //     palette: {
  //       background: {
  //         navsidebar: string;
  //       };
  //     };
  //   }

  //   interface ThemeOptions {
  //     palette: {
  //       background: {
  //         navsidebar: CSSProperties['color'];
  //       };
  //     };
  //   }
}
