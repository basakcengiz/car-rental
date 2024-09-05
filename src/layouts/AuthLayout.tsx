import Grid from '@mui/material/Grid2';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
   return (
      <Grid container>
         <Grid size={{ md: 6 }}>
            <img src="/src/assets/authImg.jpg" alt="" className="w-full h-screen max-md:hidden"></img>
         </Grid>
         <Grid size={{ xs: 12, md: 6 }}>
            <Outlet />
         </Grid>
      </Grid>
   );
};

export default AuthLayout;
