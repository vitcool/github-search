import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import SimpleBottomNavigation from 'components/BottomNavigation';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: '1 1 auto', overflow: 'auto', pb: '56px' }}>
        <Outlet />
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
};

export default Layout;
