import './DashFlow.css';

import { Box, Card, Grid, IconButton, Typography, useTheme } from '@mui/material';

import DesktopNav from './desktop/DesktopNav';
import LayoutContent from '../../layout/body/LayoutContent';
import LayoutFooter from '../../layout/footer/LayoutFooter';
import LayoutHeader from '../../layout/header/LayoutHeader';
import { Menu } from '@mui/icons-material';
import MobileNav from '@components/navigation/user/mobile/MobileNav';
import SidebarLeftLayout from '../../../chest/sidebarLeft/SidebarLayout';
import SidebarRightLayout from '@components/layout/sidebars/user/sidebarRight/SidebarLayout';

// We'll be needing a 3-column, flex: column layout
// Which should give us a LeftSidebar(NavSidebar), LayoutContent and RightSideBar
// Use MUI grid layout system
// Best to also implement custom theme and theme overides here
function DashFlow() {
  const theme = useTheme();
  return (
    <Box
      sx={{ flexGrow: 1, height: '100%', background: theme.palette.background.default }}
      paddingRight={{ xs: '1rem', md: '2rem' }}
      paddingLeft={{ xs: '1rem', md: '0' }}
      // paddingX={{ xs: '1rem', md: '0' }}
    >
      {/* // Removed spacing={2} height="100%" */}
      <Grid container alignItems="stretch" justifyContent="center" spacing={2} height="100%" direction="column">
        {/* IMPLEMENT TOP NAVBAR/APPBAR HERE */}
        {/* This grid item should be hidden on large screens of md and above 
		You don't have to create a grid for it since it'll be absolutely positioned. 
		*/}
        {/* Content Grid wrapper */}
        <Grid
          item
          //   xs={12}
          //   xs={11}
          xs
          //   md={2}
          container
          //   direction="column"
          alignItems="stretch"
          //   display={{ xs: 'none', md: 'block' }}
        >
          <Grid
            item
            // xs={12}
            md={`auto`}
            // md={2}
            // md
            container
            direction="column"
            alignItems="stretch"
            display={{ xs: 'none', md: 'block', lg: 'block' }}
          >
            {/* <SidebarLeftLayout /> */}
            <DesktopNav />
            {/* <DesktopNav2 /> */}

            {/* </Grid> */}
          </Grid>

          {/* Removed sm={7.5} */}
          {/* Content  Grid 
          xs={12} md={7.5}
          */}
          <Grid container item md alignItems="stretch">
            <Box
              // bgcolor="secondary"
              width="100%"
              //   sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}
              display={{ xs: 'block', md: 'none' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                {/* <Typography variant="h4">SmartCity</Typography> */}

                <MobileNav />
              </Box>
            </Box>

            <Box width="100%" marginX={{ md: '2rem' }} marginTop={{ md: '2rem' }}>
              <LayoutContent />
            </Box>
          </Grid>
          {/* xs={12} md={2.5} */}
          <Grid item xs={12} md={2.5} container direction="column" alignItems="stretch">
            <SidebarRightLayout />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashFlow;
