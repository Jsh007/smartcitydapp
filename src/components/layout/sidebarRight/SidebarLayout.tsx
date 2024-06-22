import './SidebarLayout.css';

import { Diamond, Home, Logout, Person, Redeem } from '@mui/icons-material';
// import {Home, Users} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function SidebarLayout() {
  const navigate = useNavigate();
  // const [sendLogout] = useSendLogoutMutation();
  const handleLogout = async () => {
    // const result = await sendLogout(null);
    // navigate('/');
    console.log('logout!');
  };

  const currentPath = useLocation();

  return (
    <div className="sidebar">
      <h2>Right Sidebar</h2>
    </div>
  );
}

export default SidebarLayout;
