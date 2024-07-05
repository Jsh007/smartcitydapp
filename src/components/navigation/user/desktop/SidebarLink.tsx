import { Box, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';
import { SidebarContext } from '@app/context/SidebarContext';
import { SidebarLinkProps } from '@apptypes/propTypes';
import { useContext } from 'react';
import { useDesktopLinkStyles } from 'src/theme/tssStyles';

export function SidebarLink({ icon, label, active, alert, link }: SidebarLinkProps) {
  const { expanded } = useContext(SidebarContext)!;
  const theme = useTheme();
  const { classes, cx } = useDesktopLinkStyles({
    color: active ? theme.custom.navbar.activeTextColor : theme.custom.navbar.textColor,
    background: active ? theme.custom.navbar.activeMenuBg : '',
  });

  return (
    <Link to={link}>
      <Box
        component={'li'}
        className={`relative flex items-center py-2 px-3 my-1
       font-medium rounded-md cursor-pointer ${cx(classes.root)}`}
      >
        {icon}

        <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{label}</span>

        {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-sky-400 ${expanded ? '' : 'top-2'}`}></div>}
        {!expanded && (
          <Box
            className={`
			absolute left-full rounded-md px-2 py-1 ml-6
			bg-gray-200 text-gray-700 text-sm
			invisible opacity-20 -translate-x-3 transition-all
			group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
		`}
          >
            {label}
          </Box>
        )}
      </Box>
    </Link>
  );
}

export default SidebarLink;
