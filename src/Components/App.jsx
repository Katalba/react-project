import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import HomeSection from './HomeSection/HomeSection';
const App = () => {
  return (
    <>

      <Navbar />
      <HomeSection/>
      <ItemListContainer />
      <ItemDetailContainer />

    </>
  );
}

export default App;



