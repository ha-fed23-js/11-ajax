const button = document.querySelector('#fetch-button')
const pResults = document.querySelector('#fetch-results')

// Använd console.log för att kontrollera innehållet i variabler
// console.log('Fungerar DOM? ', button, pResults);

button.addEventListener('click', () => {
	// förbered request (URL, inställningar)
	// skicka request
	// vänta på svar
	// omvandla svar till JS-objekt (via JSON)
	// visa datan vi fick

	const url = 'https://forverkliga.se/JavaScript/api/simple.php'
	const response = fetch(url)

	console.log('Skickade request till URL, fick', response);
})