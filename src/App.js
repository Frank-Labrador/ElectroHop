import './App.css';
import NavbBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <div className='Nav'>
      <NavbBar />
      </div>
      <ItemListConteiner greeting={'Bienvenido a tu tiendita fachera'}/>
    </div>

    
  );
}

export default App;
