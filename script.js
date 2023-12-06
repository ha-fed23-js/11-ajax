const button = document.querySelector('#fetch-button')
const pResults = document.querySelector('#fetch-results')

// Använd console.log för att kontrollera innehållet i variabler
// console.log('Fungerar DOM? ', button, pResults);

button.addEventListener('click', async () => {
	// förbered request (URL, inställningar)
	// skicka request
	// vänta på svar
	// omvandla svar till JS-objekt (via JSON)
	// visa datan vi fick

	const url = 'https://api.chucknorris.io/jokes/random'
	const response = await fetch(url)

	console.log('Skickade request till URL, fick', response);
	if( response.status === 200 ) {
		console.log('Jippi, request lyckades');
	} else {
		console.log('Request misslyckades med felkod: ' + response.status);
		return
	}

	const data = await response.json()
	console.log('Data från servern', data);
	pResults.innerText = data.value
})


// Quick suggestions heter listan som poppar upp medan man skriver
// CORS = Cross-Origin Resource Sharing