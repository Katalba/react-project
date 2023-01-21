import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <header>
      <Navbar/>
      <ItemListContainer greeting="Welcome to Valkiria"/>
    </header>
  );
}

export default App;
