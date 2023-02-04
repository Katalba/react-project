import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
      <div className="nav_bar">
        <Navbar />
      </div>
      <header>
        <img className="image" src="./img/carousel-3.webp" alt="img-incio" width="100%" />
        <ItemListContainer/>
        <ItemDetailContainer/>
      </header>

    </>
  );
}

export default App;



