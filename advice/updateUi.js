import { state } from "./data.js"

function addToHistory(slip, historyContainer) {
	// lägg till slip till history-arrayen
	// uppdatera DOM-listan <ol>  (rendera)

	state.history.unshift(slip)   // använd push i stället om vi vill lägga till sist

	// Vi väljer att rensa och lägga till alla element igen
	historyContainer.innerHTML = ''
	state.history.forEach(item => {
		// Varje item ska vara ett "slip-objekt"
		const element = document.createElement('li')
		element.innerText = `${item.id}: ${item.advice}`
		historyContainer.append(element)
	})
}

export { addToHistory }
