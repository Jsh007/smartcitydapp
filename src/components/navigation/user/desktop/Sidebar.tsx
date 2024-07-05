// import './SidebarNav.css';

import { Box, useTheme } from '@mui/material';
import React, { createContext, useState } from 'react';

import Avatar from '@features/auth/templates/avatars/Avatar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Logout } from '@mui/icons-material';
import { SidebarContext } from '@app/context/SidebarContext';
import ThemeSwitcher from '@components/togglers/ThemeSwitcher';
import { useNavigate } from 'react-router-dom';

// This is equivalent to the Sidebar component from  previous projects
// It should contains the layout (Header, content/links and footer) of the sidebarNav
// It should wrap the sidebarLinks whereever they are defined
// It's also here you create context
//  SidebarContextType

// SidebarProps
function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  // const {username, email} = useAuth();
  // const [sendLogout] = useSendLogoutMutation();
  const navigate = useNavigate();
  // const userInitals = username?.substring(0, 2).toLocaleUpperCase();
  const userInitals = 'Joshua'?.substring(0, 2).toLocaleUpperCase();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Removed: bg-gray-50
    // Allow MUI to automatically apply colors or you manually apply mui color with useTheme
    <Box component={'aside'} className="h-screen desktop-menu" sx={{ background: theme.custom.navbar.background }}>
      {/* style={{ paddingTop: '4rem' }} */}
      <nav className="h-full flex flex-col lg:border-r shadow-sm">
        {/* Header */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/images/gtx-stream-logo1.png"
            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
            alt=""
          />
          {/* Desktop menu Icon */}
          <button
            onClick={() => {
              setExpanded((curr) => !curr);
            }}
            className="max-sm:hidden p-1.5 rounded-lg bg-gray-900 hover:bg-gray-600"
          >
            {expanded ? <ChevronLeftIcon sx={{ color: 'white' }} /> : <ChevronRightIcon sx={{ color: 'white' }} />}
          </button>
        </div>
        {/* Links For Desktop  View */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 max-sm:hidden">{children}</ul>

          {/* Theme Switcher */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%' }}>
            <ThemeSwitcher />
          </Box>
        </SidebarContext.Provider>
        {/* Footer */}
        <div className="border-t border-b flex p-3 sidebar-userinfo">
          <Avatar initials={userInitals} borderRadius={8} width={50} height={50} background="#313138" />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
          >
            <div className="leading-4">
              {/* <h4 className='font-semibold text-gray-100'> {username} </h4>
							<span className='text-xs text-gray-100'> {email} </span> */}
            </div>
            {/* <MoreVertical size={20} className='text-gray-600' /> */}
            <Logout
              className="text-gray-400 cursor-pointer"
              onClick={async (e) => {
                // const result = await sendLogout(null);

                navigate('/');
              }}
            />
          </div>
        </div>
      </nav>
    </Box>
  );
}

export default Sidebar;
