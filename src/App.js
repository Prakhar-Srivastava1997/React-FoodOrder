import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './HookStore/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true)
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }

  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <Meals/>
      </CartProvider>
    </div>
  );
}

export default App;
