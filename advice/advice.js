import { addToHistory } from './updateUi.js'
import { getAdvice } from './ajax.js'

const fortuneButton = document.querySelector('#fortune-button')
const adviceContainer = document.querySelector('.advice')
const historyContainer = document.querySelector('.advice-history')
// Kontrollera att vi hittar DOM-elementen med console.log
// console.log('DOM', fortuneButton, adviceContainer, historyContainer);



fortuneButton.addEventListener('click', async () => {
	// förbered request (URL, inställningar)
	// skicka request
	// vänta på svar
	// omvandla svar till JS-objekt (via JSON)
	// visa datan vi fick
	try {
		const slip = await getAdvice()
		adviceContainer.innerText = slip.advice
		addToHistory(slip, historyContainer)
	}
	catch(error) {
		console.log('An error occurred! ' + error.message);
	}
})
/*
const exempel = {
	slip: {
		advice: 'When...',
		id: 105
	}
}

*/

// Vad kan gå fel när vi skickar ett request? (AJAX)
// - fel URL, hittar inte ens servern
// - fel URL, servern hittar inte resursen
// - fel URL, servern skickar något annat
// - servern är överbelastad -> svaret dröjer, eller kommer inte alls
// - inget internet eller servern är offline