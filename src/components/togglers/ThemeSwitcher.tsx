import { IThemeContext, IThemeMode } from '@apptypes/stateTypes';
import { MouseEvent, useContext, useState } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { SidebarContext } from '@app/context/SidebarContext';
import { ThemeContext } from '@app/context/ThemeContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ThemeSwitcher() {
  // const [alignment, setAlignment] = useState('System');
  const { themeMode, switchThemeMode } = useContext(ThemeContext) as IThemeContext;
  const { expanded } = useContext(SidebarContext)!;

  // const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
  //   // console.log(newAlignment);
  //   setAlignment(newAlignment);
  // };
  const handleThemeChange = (event: MouseEvent<HTMLElement>, mode: IThemeMode) => {
    switchThemeMode(mode);
    // console.log(mode);
    // setAlignment(newAlignment);
  };
  // console.log(themeMode);
  return (
    <ToggleButtonGroup
      color="primary"
      orientation={expanded ? 'horizontal' : 'vertical'}
      value={themeMode}
      exclusive
      onChange={handleThemeChange}
      aria-label="theme"
    >
      <ToggleButton value={IThemeMode.DARK}>
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value={IThemeMode.SYSTEM}>
        <SettingsBrightnessIcon />
      </ToggleButton>
      <ToggleButton value={IThemeMode.LIGHT}>
        <LightModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
