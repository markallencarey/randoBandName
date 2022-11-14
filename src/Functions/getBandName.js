import axios from 'axios'

export const getBandName = async () => {
	console.log('')
	console.log('running getBandName')

	const typesList = ['noun', 'verb', 'adjective', 'adverb']
	const type = typesList[Math.floor(Math.random() * typesList.length)]

	const apiNinjaURL = 'https://api.api-ninjas.com/v1/randomword?X_API_KEY='
	const apiNinjaKey = 'aOoTxtqClrbowL/7cGnhow==EVkkdHt9D40wFZxu'

	const requestURL = type ? apiNinjaURL + apiNinjaKey + '&type=' + type : apiNinjaURL + apiNinjaKey

	await axios
		.get(requestURL)
		.then(res => {
			console.log(requestURL)
			console.log('type:', type, res.data)
		})
		.catch(e => console.log('error: ', e))

	// for (let i = 5; i > 0; i--) {
	// 	console.log(`...${i}`)
	// 	await new Promise(resolve => setTimeout(resolve, 500))
	// }

	console.log('finished running getBandName')
	console.log('')
}
