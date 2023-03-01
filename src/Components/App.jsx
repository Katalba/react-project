import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import HomeSection from './HomeSection/HomeSection';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

import { ToastContainer } from 'react-toastify';
import CartT from './Cart/Cart'
import { CarritoProvider } from './Context/CartContext';




const App = () => {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/CartT' element={<CartT />} />
          </Routes>
          <ToastContainer />
        </CarritoProvider>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;



