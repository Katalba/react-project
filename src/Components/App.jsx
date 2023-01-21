import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <header>
      <img className='image' src="img/INICIO.webp" width="100%" alt="inicio"/>
      <Navbar/>
      <ItemListContainer greeting={"Welcome to Valkiria"}/>
    </header>
  );
}

export default App;
