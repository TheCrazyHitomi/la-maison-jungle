import { useEffect, useState } from "react";
import "../styles/cart.css"

// const totalPanier = Number(monstera + lierre + bouquet);
// console.log(totalPanier);

const Cart = ({cart, setCart}) => {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);
	// useEffect(() => {
	// 	if (total > 0)
	// 	alert(`J'aurai ${total}€ à payer 💸`)
	// }, [total])
	
	
	return isOpen ? (
		<div className="lmj-cart">
			<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier : 🛒</h2>
			{/* <div className="lmj-article"> */}
	
				{cart.map(({name, price, amount}, index) => (
					<div key={`${name}-${index}`}>
						{name} {price}€ x {amount}
					</div>
				))}
			{/* </div> */}

			<h3>Total : {total}€</h3>

			<button className="lmj-cart-button" onClick={() =>setCart([])}>Vider le panier</button>
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