import './LayoutContent.css';

import { Box, Grid } from '@mui/material';

import { Outlet } from 'react-router-dom';
import ProfileHeader from '../header/ProfileHeader';
import React from 'react';

function LayoutBody() {
  // Remove class names; content-container
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <ProfileHeader />
        </Grid>
        <Grid item xs={12}>
          <Box className="outlet-wrapper">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LayoutBody;
