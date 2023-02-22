import axios from 'axios'

export const getWord = async () => {

	let wordObj = {}

	const ninjaURL = 'https://api.api-ninjas.com/v1/randomword?X_API_KEY='
	const ninjaKey = 'aOoTxtqClrbowL/7cGnhow==EVkkdHt9D40wFZxu'

	const ninjaReq = ninjaURL + ninjaKey

	const ninjaConfig = {
		headers: {
			"X-Api-Key": ninjaKey
		}
	}

	const dictURL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
	const dictKey = '6f9e1d71-aefe-4ac4-b934-9478aa4a3369'
	const dictReq = word => dictURL + word + '?key=' + dictKey

	const thesURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
	const thesKey = '185b3e8d-f421-4145-8de9-7192be454205'
	const thesReq = word => thesURL + word + '?key=' + thesKey

	await axios
		.get(ninjaURL, ninjaConfig)
		.then(async res => {
			const ninjaRes = res?.data?.word

			wordObj = { ...wordObj, word: ninjaRes, ninjaURL: ninjaReq, dictURL: dictReq(ninjaRes), thesURL: thesReq(ninjaRes) }

			await axios
				.get(dictReq(ninjaRes))
				.then(async res2 => {
					
					const dictRes = res2?.data[0]

					await axios.get(thesReq(ninjaRes)).then(res3 => {
						const thesRes = res3.data
						const synonyms = thesRes[0]?.meta?.syns[0]

						wordObj = { ...wordObj, definition: dictRes.shortdef[0], type: dictRes.fl, synonyms: synonyms }
						})
						.catch(e => console.log('error: ', e))
				})
				.catch(e => console.log('error: ', e))
		})
		.catch(e => console.log('error: ', e))
	
	return wordObj
}
