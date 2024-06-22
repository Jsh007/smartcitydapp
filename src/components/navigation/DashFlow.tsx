import './DashFlow.css';

import LayoutContent from '../layout/body/LayoutContent';
import LayoutFooter from '../layout/footer/LayoutFooter';
import LayoutHeader from '../layout/header/LayoutHeader';
import React from 'react';
import SidebarLeftLayout from '../layout/sidebarLeft/SidebarLayout';
import SidebarRightLayout from '@components/layout/sidebarRight/SidebarLayout';

// We'll be needing a 3-column, flex: column layout
// Which should give us a LeftSidebar(NavSidebar), LayoutContent and RightSideBar
// Use MUI grid layout system
// Best to also implement custom theme and theme overides here
function DashFlow() {
  return (
    <div className="page dash-layout">
      {/* <LayoutHeader /> */}
      <SidebarLeftLayout />
      <LayoutContent />
      <SidebarRightLayout />

      {/* <LayoutFooter /> */}
    </div>
  );
}

export default DashFlow;
