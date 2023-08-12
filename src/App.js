import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
