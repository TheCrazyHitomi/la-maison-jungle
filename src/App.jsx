// import './CSS/App.css'
import Banner from './components/banner'
import Cart from './components/cart'
import Footer from './components/footer'
import ShoppingList from './components/ShoppingList'
import "./styles/App.css"

function App() {
  return (
    <>
      <Banner/>
      <div className='lmj-main'>
      <Cart/>
      <ShoppingList/>
      </div>
      <Footer/>
    </>
  )
}

export default App
