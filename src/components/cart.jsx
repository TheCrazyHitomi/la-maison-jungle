import "../styles/cart.css"

const monsteraPrice = 8;
const ivyPrice = 10;
const bouquetPrice = 15;
// const totalPanier = Number(monstera + lierre + bouquet);
// console.log(totalPanier);

const Cart = () => {
	return (
		<div className="lmj-cart">
            <h2>Panier : 🛒</h2>
			<ul>
				<li> Monstera : {monsteraPrice} €</li>
				<li> Lierre : {ivyPrice} €</li>
				<li> Bouquet de fleurs : {bouquetPrice} €</li>
			</ul>
			<p>TOTAL : {monsteraPrice + ivyPrice + bouquetPrice} €</p>
		</div>
	);
};

export default Cart