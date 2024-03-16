import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'


import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavbBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='cart' element={<Cart/>} />
        <Route path= '/checkout' element = {<checkout />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
