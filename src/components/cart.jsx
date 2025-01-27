import { useState } from "react";
import "../styles/cart.css"
import { use } from "react";

const monsteraPrice = 8;
const ivyPrice = 10;
const bouquetPrice = 15;
// const totalPanier = Number(monstera + lierre + bouquet);
// console.log(totalPanier);

const Cart = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [cart, setCart] = useState(0)

	return isOpen ? (
		<div className="lmj-cart">
			<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier : 🛒</h2>
			<div className="lmj-article">
			<div>
				<div>
					Monstera : {monsteraPrice}€
				</div>
				<div>
				quantité : {cart}
				</div>
			</div>
			<button className="lmj-cart-Button" onClick={()=> setCart(cart + 1)}>Ajouter</button>
			</div>
			<h3>Total : {monsteraPrice * cart}€</h3>

			<button className="lmj-cart-button" onClick={() =>setCart(0)}>Vider le panier</button>
			{/* <ul>
				<li> Monstera : {monsteraPrice} €</li>
				<li> Lierre : {ivyPrice} €</li>
				<li> Bouquet de fleurs : {bouquetPrice} €</li>
			</ul>
			<p>TOTAL : {monsteraPrice + ivyPrice + bouquetPrice} €</p> */}
		</div>
	) : (
		<div className="lmj-cart-closed">
			<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
		</div>
	)
};

export default Cart