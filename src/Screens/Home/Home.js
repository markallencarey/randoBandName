//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//Packages
//Context
//Constants
//Navigation
//Components
//Functions
import { getBandName } from '../../Functions/getBandName'
//Screens
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../../Styles/Index'

export const Home = ({ navigation }) => {
	const [adjInfo, setAdjInfo] = useState({})
	// console.log('file: Home.js -> line 20 -> Home -> adjInfo', adjInfo)
	const [nounInfo, setNounInfo] = useState({})
	// console.log('file: Home.js -> line 22 -> Home -> nounInfo', nounInfo)
	const [bandName, setBandName] = useState('')
	// console.log('file: Home.js -> line 24 -> Home -> bandName', bandName)

	// const pressGetBandName = () => {
	// 	// if (adjInfo.type !== 'adjective') {
	// 	getBandName().then(adj => {
	// 		console.log('file: Home.js -> line 29 -> getBandName -> word', adj.word)
	// 		// setAdjInfo(adj).then(() => {
	// 		// 	if (nounInfo.type !== 'noun') {
	// 		// 		getBandName().then(noun => {
	// 		// 			// console.log('file: Home.js -> line 36 -> getBandName -> word', word.word)
	// 		// 			setNounInfo(noun).then(() => {
	// 		// 				setBandName(`The ${adjInfo.word} ${nounInfo.word}s`)
	// 		// 			})
	// 		// 		})
	// 		// 	}
	// 		// })
	// 	})
	// 	// }
	// }

	const pressGetBandName = () => {
		console.log('')
		console.log('START pressGetBandName()')

		console.log('line 49 -> adjInfo.type', adjInfo.type)
		if (adjInfo.type !== 'adjective') {
			getBandName().then(adjRes => {
				console.log('file: Home.js -> line 51 -> getBandName -> adjRes', adjRes)
				setAdjInfo(adjRes)

				// if (adjRes.type === 'adjective') {
				// 	console.log('adjective')
				// } else {
				// 	console.log('not adjective')
				// }

				console.log('')
				console.log('END pressGetBandName()')
				console.log('')
			})
		}
	}

	const resetBandName = () => {
		setAdjInfo({})
		setNounInfo({})
		setBandName('')
	}

	useEffect(() => console.log('line 73 -> adjInfo', adjInfo.word, adjInfo.type), [adjInfo])
	useEffect(() => console.log('line 74 -> nounInfo', nounInfo.word, nounInfo.type), [nounInfo])

	return (
		<View style={styles.content}>
			<View style={styles.titleView}>
				<Text style={styles.h2}>Random Band Name Generator</Text>
				<TouchableOpacity style={styles.navBtn} onPress={pressGetBandName}>
					<Text style={styles.body}>Get Band Name</Text>
				</TouchableOpacity>
				<View style={styles.adjInfo}>
					<Text style={styles.h2}>{bandName}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.resetBtn} onPress={resetBandName}>
				<Text style={styles.body}>Reset</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		...Containers.content,
		// backgroundColor: 'red',
		justifyContent: 'space-between',
	},
	h2: {
		...Fonts.h2,
		textAlign: 'center',
	},
	body: {
		...Fonts.body,
	},
	navRow: {
		flexDirection: 'row',
		marginTop: Misc.padding * 2,
	},
	navBtn: {
		...Buttons.transparent,
		marginHorizontal: Misc.margin,
		marginTop: Misc.padding * 2,
	},
	resetBtn: {
		...Buttons.transparent,
		marginHorizontal: Misc.margin,
		marginBottom: Misc.padding,
		// marginTop: Misc.padding * 2,
	},
	titleView: {
		width: Window.width * 0.6,
	},
	adjInfo: {
		marginTop: Misc.padding * 2,
	},
})
