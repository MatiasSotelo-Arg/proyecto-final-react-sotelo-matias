
import './App.scss'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { getData } from './services/firebase'
import Checkout from './components/Checkout/Checkout'
import OrderDetails from './components/OrderDetails/OrderDetails'


getData();

function App() {
  
  return (
    <>  
      <CartProvider>
        <BrowserRouter>

          <NavBar/>

          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/marca/:itemMarca' element={<ItemListContainer/>}/>
            <Route path='/carrito' element={<Checkout/>}/>
            <Route path='/orden-confirmada/:orderid' element={<OrderDetails/>}/>
            <Route path='*' element={<h3>Error: 404</h3>}/> 
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
