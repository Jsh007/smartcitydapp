import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
  useTheme,
} from '@mui/material';
import { Close, Home, Lock, VerifiedUser } from '@mui/icons-material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import NavLink from '@components/navigation/user/mobile/NavLink';
import ThemeSwitcher from '@components/togglers/mobile/ThemeSwitcher';

const pages = ['Products', 'Services', 'ABoutUs', 'ContactUs'];
const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const currentPath = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // const result = await sendLogout(null);

    navigate('/');
  };

  return (
    <>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="secondary" />
      </IconButton>
      {/* sx={{ backgroundColor: theme.palette.background.default }} */}
      <Box>
        <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              background: theme.palette.background.default,
            }}
          >
            {/* onClick={() => setOpenDrawer(!openDrawer)} */}
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
              {/* <MenuIcon color="secondary" /> */}
              <Close color="secondary" fontSize="large" />
            </IconButton>
          </Box>
          <Box
            width="300px"
            height="100%"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingY: '30px',
              background: theme.palette.background.default,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              {/* Ensure to use the color prop rather than the sx prop. The later overrides the theme */}
              <NavLink
                label="Dashboard"
                link="/dash"
                icon={<Home />}
                active={currentPath.pathname === '/dash'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="My Profile"
                link="/dash/profiles"
                active={currentPath.pathname === '/dash/profiles'}
                icon={<Lock />}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="My Task"
                link="/dash/tasks"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/tasks'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="My Tokens"
                link="/dash/tokens"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/tokens'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="My Bonuses"
                link="/dash/bonuses"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/bonuses'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="Referrals"
                link="/dash/referrals"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/referrals'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="Claims"
                link="/dash/claims"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/claims'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="Earnings"
                link="/dash/earnings"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/earnings'}
                clickHandler={() => setOpenDrawer(false)}
              />
              <NavLink
                label="Alert"
                link="/dash/alerts"
                icon={<VerifiedUser />}
                active={currentPath.pathname === '/dash/alerts'}
                clickHandler={() => setOpenDrawer(false)}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%' }}>
              <ThemeSwitcher />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%' }}>
              <IconButton sx={{ color: 'white' }} onClick={handleLogout}>
                <Typography component={'h4'} sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginRight: '0.3rem' }}>
                  Logout
                </Typography>
                <ExitToAppIcon color="secondary" />
              </IconButton>
            </Box>
          </Box>
        </Drawer>
      </Box>

      {/* <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            // Abstract this into a DrawLink component which should
            // accept; Icon: ReactNode, Label, Link and active
            // If difficult to style, reuse existing sideBarlink
            <ListItemButton key={index}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>{page}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer> */}
    </>
  );
};

export default MobileNav;
