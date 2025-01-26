
const CareScale = ({ scaleValue, careType }) => {
    
    // const {scaleValue, careType} = props
    // ***** On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // ***** const scaleValue = props.scaleValue et
    // ***** const careType = props.careType


    const range = [1, 2, 3]
    
    const scaleType = careType === "light" ? "🌞" : "💧"

    const handleClick=(e)=> {
        e.stopPropagation()
        // console.log(scaleValue)
        
        const careRange = {
            1:"peu", 
            2:"modérément", 
            3:"beaucoup"
        }

        const careScaleType = careType === "light" ? "de lumière" : "d'arrosage"
        const careRangeType = careRange[scaleValue]
    
        alert(`Cette plante requiert ${careRangeType} ${careScaleType}`)
    }

    
    return (
        <>
        <div role="button" style={{cursor:"pointer"}}
        onClick={(e) => handleClick(e)} 
        >
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}

        </div>
                </>

    )
}

export default CareScale



// ************* autre façon de procéder *************



// // Ici, il s'agit d'une manière de faire.
// //Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions


// const quantityLabel = {
// 	1: 'peu',
// 	2: 'modérément',
// 	3: 'beaucoup'
// }

// function CareScale({ scaleValue, careType }) {
// 	const range = [1, 2, 3]
// 	const scaleType =
// 		careType === 'light' ? (
// 			<img src={Sun} alt='sun-icon' />
// 		) : (
// 			<img src={Water} alt='water-icon' />
// 		)

// 	return (
// 		<div
// 			onClick={() =>
// 				alert(
// 					`Cette plante requiert ${quantityLabel[scaleValue]} ${
// 						careType === 'light' ? 'de lumière' : "d'arrosage"
// 					}`
// 				)
// 			}
// 		>
// 			{range.map((rangeElem) =>
// 				scaleValue >= rangeElem ? (
// 					<span key={rangeElem.toString()}>{scaleType}</span>
// 				) : null
// 			)}
// 		</div>
// 	)
// }

// export default CareScale