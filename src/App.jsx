// import './CSS/App.css'
import { useState, useEffect } from 'react'
import Banner from './components/banner'
import Cart from './components/cart'
import Footer from './components/footer'
import ShoppingList from './components/ShoppingList'
import "./styles/App.css"

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
      return storedCart ? JSON.parse(storedCart) : []
  })

  
  // useEffect(() => {
  //   const storedCart = localStorage.getItem('cart')
  //     console.log("Valeur récupérée du localStorage :", storedCart);
  //     if (storedCart) {
  //       setCart(JSON.parse(storedCart))
  //     }
  //   },[]);

    useEffect(() => {
      console.log("Mise à jour du localStorage :", cart);
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

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
