export type SidebarContextType = {
  expanded: boolean;
  menuOpen?: boolean;
};

export enum IThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export type IThemeContext = {
  themeMode: IThemeMode;
  switchThemeMode: (mode: IThemeMode) => void;
};
