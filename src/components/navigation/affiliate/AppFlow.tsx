import { Outlet } from 'react-router-dom';
import React from 'react';

/*
This component wraps all navigaton routes and allows for naviigating between them
*/

function AppFlow() {
  return <Outlet />;
}

export default AppFlow;
