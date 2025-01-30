import { plantList } from "../datas/plantList.jsx"
import { Categories } from "./Categories.jsx"
import { useState } from "react"

import PlantItem from "./plantItem.jsx"
import BestSales from "./bestSales.jsx"
import SpecialOffer from "./specialOffer.jsx"

import "../styles/shoppingList.css"


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

        const [selectedCategory, setSelectedCategory] = useState("")

        

	return (
		<div className="lmj-hero">
			<Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            
			<ul className='lmj-plant-list' >
                {plantList.map(({ id, cover, name, water, light, price, category}) => 
                    !selectedCategory || selectedCategory === category ? (
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
                ) : null
            )}

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