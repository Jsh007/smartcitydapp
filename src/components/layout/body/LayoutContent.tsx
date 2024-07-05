import './LayoutContent.css';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ProfileHeader from '../header/ProfileHeader';
import React from 'react';

function LayoutBody() {
  // Remove class names; content-container
  return (
    <Box className="content-container">
      <ProfileHeader />
      <Box className="outlet-wrapper">
        <Outlet />
      </Box>
    </Box>
  );
}

export default LayoutBody;
