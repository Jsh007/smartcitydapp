import { AppDarkTheme, AppLightTheme } from 'src/theme/theme';
import { FunctionComponent, PropsWithChildren, createContext, useEffect, useState } from 'react';
import { IThemeContext, IThemeMode } from '@apptypes/stateTypes';
import { Theme, ThemeProvider, useMediaQuery } from '@mui/material';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export const ThemeContext = createContext<IThemeContext | null>(null);

// Enable TSS support
export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const ThemeContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.SYSTEM);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);

  // Get user's device theme
  const SYSTEMTHEME = useMediaQuery('(prefers-color-scheme: dark)') ? IThemeMode.DARK : IThemeMode.LIGHT;

  // Get existing theme prefs
  useEffect(() => {
    const themeFromPref = getThemeModeFromPref();
    setThemeMode(themeFromPref);
  }, []);

  // Update ThemeMode accordingly
  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case IThemeMode.DARK:
        setTheme(AppDarkTheme);
        break;
      case IThemeMode.SYSTEM:
        switch (SYSTEMTHEME) {
          case IThemeMode.LIGHT:
            setTheme(AppLightTheme);
            break;
          case IThemeMode.DARK:
            setTheme(AppDarkTheme);
            break;
        }
        break;
      default:
        setTheme(AppLightTheme);
        break;
    }
  }, [themeMode]);

  const getThemeModeFromPref = (): IThemeMode => {
    const themeModeFromPref = localStorage.getItem('themeMode') as IThemeMode;
    if (themeModeFromPref) {
      return themeModeFromPref;
    }
    return IThemeMode.SYSTEM;
  };

  const setThemeModeToPref = (mode: IThemeMode) => {
    localStorage.setItem('themeMode', mode);
  };

  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
    setThemeModeToPref(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
