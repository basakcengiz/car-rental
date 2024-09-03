import Grid from '@mui/material/Grid2';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Grid container>
      <Grid size={{ md: 6 }}>
        <img src="/src/assets/authImg.jpg" alt="" className="h-screen max-md:hidden w-full"></img>
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
