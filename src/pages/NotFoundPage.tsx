import { Typography, Container, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { Routes } from 'constants/common';

const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center">
        404
      </Typography>
      <Typography variant="h5" align="center">
        Page not found
      </Typography>
      <Typography variant="body1" align="center">
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Grid container justifyContent="center">
        <Grid item sx={{ mt: '40px' }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={Routes.HOME}
          >
            Go to Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFoundPage;
