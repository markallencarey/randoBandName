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
	const [word1Info, setWord1Info] = useState({})
	console.log('file: Home.js -> line 20 -> Home -> word1Info', word1Info)
	const [word2Info, setWord2Info] = useState({})
	console.log('file: Home.js -> line 22 -> Home -> word2Info', word2Info)
	const [bandName, setBandName] = useState('')
	console.log('file: Home.js -> line 24 -> Home -> bandName', bandName)

	const pressGetBandName = () => {
		if (word1Info.type !== 'adjective') {
			getBandName().then(word => {
				setWord1Info(word)
			})
		}

		if (word2Info.type !== 'noun') {
			getBandName().then(word => {
				setWord2Info(word)
			})
		}

		setBandName(`The ${word1Info?.word} ${word2Info?.word}s`)
	}

	const resetBandName = () => {
		setWord1Info({})
		setWord2Info({})
		setBandName('')
	}

	useEffect(() => console.log('word1Info', word1Info.word, word1Info.type), [word1Info])
	useEffect(() => console.log('word2Info', word2Info.word, word2Info.type), [word2Info])

	return (
		<View style={styles.content}>
			<View style={styles.titleView}>
				<Text style={styles.h2}>Random Band Name Generator</Text>
				<TouchableOpacity style={styles.navBtn} onPress={pressGetBandName}>
					<Text style={styles.body}>Get Band Name</Text>
				</TouchableOpacity>
				<View style={styles.word1Info}>
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
	word1Info: {
		marginTop: Misc.padding * 2,
	},
})
