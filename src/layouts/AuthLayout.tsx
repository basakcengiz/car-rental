import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
   return (
      <>
         <img src="/src/assets/authImg.jpg" alt="" className="w-2/4 h-screen max-md:hidden"></img>
         <Outlet />
      </>
   );
};

export default AuthLayout;
