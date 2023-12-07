const fortuneButton = document.querySelector('#fortune-button')
const adviceContainer = document.querySelector('.advice')
const historyContainer = document.querySelector('.advice-history')

// console.log('DOM', fortuneButton, adviceContainer);




fortuneButton.addEventListener('click', async () => {
	// förbered request (URL, inställningar)
	// skicka request
	// vänta på svar
	// omvandla svar till JS-objekt (via JSON)
	// visa datan vi fick
	const url = 'https://api.adviceslip.com/advice'
	try {
		const response = await fetch(url)
		const data = await response.json()

		console.log('Data from API:', data);
		// Datans format: " { slip: { advice, id } } "
		adviceContainer.innerText = data.slip.advice

		const element = document.createElement('li')
		element.innerText = `${data.slip.id}: ${data.slip.advice}`

		// historyContainer.append(element) - om man vill lägga till sist
		const first = historyContainer.children[0]
		// Alternativ med queryselector: .advice-history > :first-child
		historyContainer.insertBefore(element, first)
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