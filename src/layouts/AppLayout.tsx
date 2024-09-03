import { useState } from 'react';

import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const AppLayout = () => {
   const [drawer, setDrawer] = useState<boolean>(false);
   return (
      <>
         {drawer ? <Drawer setDrawer={setDrawer} /> : <Header setDrawer={setDrawer} />}
         <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={11}
            containerStyle={{
               top: 80,
            }}
            toastOptions={{
               className: '',
               duration: 3000,
               style: {
                  background: '#202D3D',
                  color: '#fff',
                  fontSize: '15px',
               },
            }}
         />
         <Outlet />
      </>
   );
};

export default AppLayout;
