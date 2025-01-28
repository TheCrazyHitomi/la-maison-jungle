import monstera from "../images/monstera.jpg"
import lyrata from "../images/lyrata.jpg"
import pothos from "../images/pothos.jpg"
import succulent from "../images/succulent.jpg"
import olivier from '../images/olivier.jpg'
import basil from '../images/basil.jpg'
import mint from '../images/mint.jpg'
import calathea from '../images/calathea.jpg'
import cactus from '../images/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: false,
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: true,
		light: 1,
		water: 2,
		cover: pothos,
		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
        isBestSale: false,
        isSpecialOffer: true,
		light: 2,
		water: 3,
		cover: calathea,
		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: true,
		light: 3,
		water: 1,
		cover: olivier,
		price: 30
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '6uo',
        isBestSale: false,
		light: 2,
		water: 1,
		cover: cactus,
		price: 6
	},
	{
		name: 'basilic',
		category: 'extérieur',
		id: '7ie',
        isBestSale: true,
        isSpecialOffer: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 5
	},
	{
		name: 'menthe',
		category: 'extérieur',
		id: '8fp',
        isBestSale: true,
        isSpecialOffer: true,
		light: 2,
		water: 1,
		cover: mint,
		price: 4
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: true,
		light: 2,
		water: 1,
		cover: succulent,
		price: 8
	}
]