import { plantList } from "../datas/plantList.jsx"
import "../styles/shoppingList.css"
import PlantItem from "./plantItem.jsx"
import BestSales from "./bestSales.jsx"
import SpecialOffer from "./specialOffer.jsx"


const ShoppingList = ({cart,setCart}) =>{
    
    // const categorie = plantList.reduce((acc, plant) =>{
    //     if(!acc[plant.category]){
    //         acc[plant.category] = [];
    //     }
    //     acc[plant.category].push(plant);
    //     return acc;
    // }, {});
    
    // console.log(categorie);
                                /*
                                Résultat :
                                {
                                    classique: [{...}, {...}, {...}, {...}],
                                    exterieur: [{...},{...},{...}],
                                    plante grasse: [{...},{...}]
                                }
                                */


    const categories = plantList.reduce(
        (acc, plant) => 
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        )
        console.log(categories)

        function addToCart(name,price) {
            const currentPlantAdded = cart.find((plant) => plant.name === name)
            if (currentPlantAdded) {
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )
                setCart([
                    ...cartFilteredCurrentPlant,
                    {name, price, amount: currentPlantAdded.amount +1 }
                ])
            } else {
                setCart([...cart, {name, price, amount :1}])
            }
        }

	return (
		<div className="lmj-hero">
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list' >
            {plantList.map(({ id, cover, name, water, light, price}) => (
                <div key={id}>
					<PlantItem
						id={id}
						cover={cover}
						name={name}
                        price={price}
						water={water}
						light={light}
					/>
                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                </div>
            ))}

			</ul>
		</div>
	)
}


export default ShoppingList


// {plant.isBestSale && <span> 🔥</span>} 
// {/* {plant.isBestSale ? <span> 🔥</span> : null}  */}
// <BestSales isBestSale={plant?.isBestSale}/>
// {/* {plant.isSpecialOffer && <div className="lmj-sales"> Soldes</div>} */}
// <SpecialOffer isSpecialOffer={plant?.isSpecialOffer}/>