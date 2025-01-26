import { plantList } from "../datas/plantList.jsx"
import "../styles/plantItem.css"
import PlantItem from "./plantItem.jsx"
import BestSales from "./bestSales.jsx"
import SpecialOffer from "./specialOffer.jsx"


const ShoppingList = () =>{
    
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

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list' >
            {plantList.map(({ id, cover, name, water, light}) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
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