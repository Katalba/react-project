import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
      <div className="nav_bar">
        <Navbar />
      </div>
      <header>
        <img className="image" src="./img/carousel-3.webp" alt="img-incio" width="100%" />
        <ItemListContainer shop={"comprar ahora"} />
      </header>

    </>
  );
}

export default App;



