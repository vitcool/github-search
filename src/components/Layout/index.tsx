import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import BottomNavigation from 'components/Layout/components/BottomNavigation';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container
        sx={{ flex: '1 1 auto', overflow: 'auto', pb: '56px' }}
        maxWidth="md"
      >
        <Outlet />
      </Container>
      <Box sx={{ flexShrink: 0 }}>
        <BottomNavigation />
      </Box>
    </Box>
  );
};

export default Layout;
