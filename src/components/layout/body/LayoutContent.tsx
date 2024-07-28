import './LayoutContent.css';

import { Box, Grid } from '@mui/material';

import { Outlet } from 'react-router-dom';
import ProfileHeader from '../header/ProfileHeader';
import React from 'react';

function LayoutBody() {
  // Remove class names; content-container
  return (
    // height={'100vh'}
    // marginX={{ md: '2rem' }} marginY={{ md: '2rem' }}
    <Box className="layout-root" marginX={{ md: '2rem' }} marginY={{ xs: '2rem', md: '2rem' }}>
      <Grid container direction={'column'} alignItems={'stretch'} gap={3}>
        <Grid item xs={12}>
          <ProfileHeader />
        </Grid>
        {/* xs */}
        <Grid item xs={12}>
          {/* <Box component={'div'} className="outlet-wrapper">b */}
          <Outlet />
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default LayoutBody;
