import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	const isInputError = inputValue.includes("@")

	const checkValue = () => {
		if(!isInputError) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			Laissez-nous votre mail :
			<div className='lmj-footer-elem'>
			<input type="email"  
			value={inputValue} onBlur={checkValue}
			onChange={(e) => setInputValue(e.target.value)}/>
			<button type='submit' onClick={() => alert(inputValue)}>Send</button>
			</div>
		</footer>
	)
}

export default Footer