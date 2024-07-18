import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material';
import { Close, Home, Lock, VerifiedUser } from '@mui/icons-material';
import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import NavLink from '@components/navigation/affiliate/mobile/NavLink';
import ThemeSwitcher from '@components/togglers/ThemeSwitcher';

const pages = ['Products', 'Services', 'ABoutUs', 'ContactUs'];
const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="secondary" />
      </IconButton>

      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          {/* onClick={() => setOpenDrawer(!openDrawer)} */}
          <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
            {/* <MenuIcon color="secondary" /> */}
            <Close color="secondary" fontSize="large" />
          </IconButton>
        </Box>
        <Box
          width="300px"
          height="100%"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingY: '30px' }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}
          >
            {/* Ensure to use the color prop rather than the sx prop. The later overrides the theme */}
            <NavLink
              icon={<Home sx={{ color: '#878787' }} />}
              label="Dashboard"
              link="/affiliatedash"
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="My Profile"
              link="/affiliatedash/profiles"
              icon={<Lock sx={{ color: '#878787' }} />}
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="My Task"
              link="/affiliatedash/tasks"
              icon={<VerifiedUser sx={{ color: '#878787' }} />}
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="My Tokens"
              link="/affiliatedash/tokens"
              icon={<VerifiedUser sx={{ color: '#878787' }} />}
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="Referrals"
              link="/affiliatedash/referrals"
              icon={<VerifiedUser />}
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="Claims"
              link="/affiliatedash/claims"
              icon={<VerifiedUser />}
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="Earnings"
              link="/affiliatedash/earnings"
              icon={<VerifiedUser />}
              clickHandler={() => setOpenDrawer(false)}
            />
            <NavLink
              label="Alert"
              link="/affiliatedash/alerts"
              icon={<VerifiedUser />}
              clickHandler={() => setOpenDrawer(false)}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%' }}>
            <ThemeSwitcher />
          </Box>
        </Box>
      </Drawer>
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
