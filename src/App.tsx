import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { useState } from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
/* import FAQ from './components/FAQ/FAQ'; */
import BookCar from './components/BookCar/BookCar';

function App() {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <>
      {drawer ? <Drawer setDrawer={setDrawer} /> : <Header setDrawer={setDrawer} />}
      <Home />
      <BookCar />
      {/*       <FAQ /> */}
      <Footer />
    </>
  );
}

export default App;
