import { Box, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';
import React from 'react';
import { useMobileLinkStyles } from 'src/theme/tssStyles';

function NavLink({ label, link, icon, active, clickHandler }) {
  const theme = useTheme();
  const { classes, cx } = useMobileLinkStyles({
    color: active ? theme.custom.navbar.activeTextColor : theme.custom.navbar.textColor,
    background: active ? theme.custom.navbar.activeMenuBg : '',
  });
  return (
    <Link to={link} style={{ width: '100%' }} onClick={clickHandler}>
      <Box
        component={'li'}
        className={` ${cx(classes.root)}`}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          //   paddingTop: 2,
          //   paddingBottom: 2,
          padding: '10px 20px',
          borderRadius: '0.375rem',
          margin: 4,
          // marginTop: 4,
          // marginBottom: 4,
          //   width: '100%',
          boxSizing: 'border-box',
          // color: '#2E2C3A',
        }}
        // sx={{
        //   color: theme.custom.navbar.textColor,
        // }}
      >
        <Box sx={{ marginRight: 1 }}>{icon}</Box>
        <span>{label}</span>
      </Box>
    </Link>
  );
}

export default NavLink;
