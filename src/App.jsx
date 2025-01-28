// import './CSS/App.css'
import { useState } from 'react'
import Banner from './components/banner'
import Cart from './components/cart'
import Footer from './components/footer'
import ShoppingList from './components/ShoppingList'
import "./styles/App.css"

function App() {
  const [cart, setCart] = useState([])
  return (
    <>
      <Banner/>
      <div className='lmj-main'>
      <Cart cart={cart} setCart={setCart}/>
      <ShoppingList cart={cart} setCart={setCart}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
