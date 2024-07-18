import './SidebarLayout.css';

import { Box, Card, Grid, Typography } from '@mui/material';
import { Diamond, Home, Logout, Person, Redeem } from '@mui/icons-material';
// import {Home, Users} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function SidebarLayout() {
  const navigate = useNavigate();
  // const [sendLogout] = useSendLogoutMutation();
  const handleLogout = async () => {
    // const result = await sendLogout(null);
    // navigate('/');
    console.log('logout!');
  };

  const currentPath = useLocation();
  // removed classes sidebar
  return (
    <Box marginTop={{ md: '2rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Card
            component={'div'}
            elevation={0}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380 }}
          >
            <WalletMultiButton style={{ borderRadius: 30 }} />
          </Card>
        </Grid>

        <Grid item xs={12} md={12}>
          <Card
            component={'div'}
            elevation={0}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 250 }}
          >
            <h2>Token Earnings box</h2>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SidebarLayout;
