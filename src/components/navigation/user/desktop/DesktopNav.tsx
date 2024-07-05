// import './SidebarLayout.css';

import { Diamond, Home, Logout, Person, Redeem } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import React from 'react';
import Sidebar from './Sidebar';
import { SidebarLink } from './SidebarLink';

// import {useSendLogoutMutation} from '@/features/auth/authApiSlice';

// This is the equivalent of SidebarLayout from previous project
function DesktopNav() {
  const navigate = useNavigate();
  // const [sendLogout] = useSendLogoutMutation();
  const handleLogout = async () => {
    // const result = await sendLogout(null);
    navigate('/');
  };

  const currentPath = useLocation();

  return (
    <Sidebar>
      <SidebarLink icon={<Home />} label="Dashboard" active={currentPath.pathname === '/dash'} link="/dash" />
      <SidebarLink
        icon={<Person />}
        label="My Profile"
        active={currentPath.pathname === '/dash/profiles'}
        link="/dash/profiles"
      />
      <SidebarLink
        icon={<Diamond />}
        label="My Tasks"
        active={currentPath.pathname === '/dash/tasks'}
        link="/dash/tasks"
      />
      <SidebarLink
        icon={<Redeem />}
        label="My Tokens"
        active={currentPath.pathname === '/dash/tokens'}
        link="/dash/tokens"
      />
      <SidebarLink
        icon={<Redeem />}
        label="My Bonuses"
        active={currentPath.pathname === '/dash/bonuses'}
        link="/dash/bonuses"
      />
      <SidebarLink
        icon={<Redeem />}
        label="Referrals"
        active={currentPath.pathname === '/dash/referrals'}
        link="/dash/referrals"
      />
      <SidebarLink
        icon={<Redeem />}
        label="Claims"
        active={currentPath.pathname === '/dash/claims'}
        link="/dash/claims"
      />
      <SidebarLink
        icon={<Redeem />}
        label="Earnings"
        active={currentPath.pathname === '/dash/earnings'}
        link="/dash/earnings"
      />
      <SidebarLink
        icon={<Redeem />}
        label="Alert"
        active={currentPath.pathname === '/dash/alerts'}
        link="/dash/alerts"
      />

      {/* <li
					className='lg:hidden md:hidden logout-link cursor-pointer text-gray-900'
					onClick={handleLogout}>
					<Logout fontSize='medium' /> <span>Logout</span>
				</li> */}
    </Sidebar>
  );
}

export default DesktopNav;
