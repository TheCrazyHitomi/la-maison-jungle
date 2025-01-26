const SpecialOffer = (props) =>{
    const {isSpecialOffer} = props

        return isSpecialOffer && <div className="lmj-sales"> Soldes</div>
    }


export default SpecialOffer