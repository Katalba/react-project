import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
const App = () => {
  return (
    <>
      <div className="nav_bar">
        <Navbar />
      </div>
      <header>
        <img className="image" src="./img/carousel-3.webp" alt="img-incio" width="100%" />
        
      </header>

    </>
  );
}

export default App;



