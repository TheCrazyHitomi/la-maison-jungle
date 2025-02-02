import CareScale from "./careScale"
import "../styles/plantItem.css"
import PropTypes from 'prop-types'


function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

const PlantItem =({id, name, cover, water, light, price}) => {

    return (
            <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)} >
                <div className="lmj-plant-item-cover">
                <div className="lmj-plant-price">{price}€</div>
                <img className="lmj-plant-cover" src={cover} alt={`${name} cover`} />
                </div>
                <div className="lmj-plant-info">
                    {name}
                    <div>
                        <CareScale careType="water" scaleValue ={water} />
                        <CareScale careType="light" scaleValue ={light} />
                    </div>
                </div>
            </li>
    )
};



PlantItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    water: PropTypes.number.isRequired,
    light: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}

export default PlantItem


