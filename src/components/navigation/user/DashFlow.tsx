import './DashFlow.css';

import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';

import DesktopNav from './desktop/DesktopNav';
import LayoutContent from '../../layout/body/LayoutContent';
import LayoutFooter from '../../layout/footer/LayoutFooter';
import LayoutHeader from '../../layout/header/LayoutHeader';
import { Menu } from '@mui/icons-material';
import MobileNav from '@components/navigation/user/mobile/MobileNav';
import SidebarLeftLayout from '../../layout/sidebarLeft/SidebarLayout';
import SidebarRightLayout from '@components/layout/sidebarRight/SidebarLayout';

// We'll be needing a 3-column, flex: column layout
// Which should give us a LeftSidebar(NavSidebar), LayoutContent and RightSideBar
// Use MUI grid layout system
// Best to also implement custom theme and theme overides here
function DashFlow() {
  const theme = useTheme();
  return (
    // <div className="page dash-layout">
    //   {/* You might want to use this layout header component to implement the mui
    // 	Appbar component which would serve as the Navigation for mobile (XS) screens
    // 	*/}
    //   {/* <LayoutHeader /> */}
    //   {/* This sidebarlayout component should implement a nice sidebar navigation or
    //   mui sidedrawer navigation */}
    //   <SidebarLeftLayout />
    //   <LayoutContent />
    //   <SidebarRightLayout />

    //   {/* <LayoutFooter /> */}
    // </div>
    // height="100%"
    <Box sx={{ flexGrow: 1, height: '100%', background: theme.palette.background.default }}>
      {/* // Removed spacing={2} height="100%" */}
      <Grid container alignItems="stretch" justifyContent="center" spacing={2} height="100%" direction="column">
        {/* IMPLEMENT TOP NAVBAR/APPBAR HERE */}
        {/* This grid item should be hidden on large screens of md and above 
		You don't have to create a grid for it since it'll be absolutely positioned. 
		*/}
        {/* <Grid
          item
          //   xs={12}
          xs={1}
          //   md={2}
          container
          alignItems="stretch"
          display={{ xs: 'block', md: 'none' }}
        >
          <Grid item xs={12}>
            <Box bgcolor="primary.light">
              <LayoutHeader />
            </Box>
          </Grid>
        </Grid> */}
        {/* display={{ xs: 'none', md: 'block' }} */}

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
            {/* <Grid item xs={12}> 
            bgcolor="primary.light"
            */}
            <Box>
              {/* <SidebarLeftLayout /> */}
              <DesktopNav />
              {/* <DesktopNav2 /> */}
            </Box>
            {/* </Grid> */}
          </Grid>

          {/* Removed sm={7.5} */}
          {/* Content  Grid 
          xs={12} md={7.5}
          */}
          <Grid container item md alignItems="stretch">
            {/* insert Menu Icon here */}
            <Box
              // bgcolor="secondary"
              width="100%"
              //   sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}
              display={{ xs: 'block', md: 'none' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                <Typography variant="h4">SmartCity</Typography>
                {/* <SideDrawer /> */}
                <MobileNav />
              </Box>
            </Box>
            {/* Content Box 
            bgcolor="secondary.main"
            */}
            <Box width="100%" sx={{ marginX: '2rem' }}>
              <LayoutContent />
            </Box>
          </Grid>
          {/* xs={12} md={2.5} */}
          <Grid item xs={12} md={2.5} container direction="column" alignItems="stretch">
            {/* <Grid item xs={12}> 
            bgcolor="primary.dark"
            */}
            <Box bgcolor="primary.dark">
              <SidebarRightLayout />
            </Box>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashFlow;
