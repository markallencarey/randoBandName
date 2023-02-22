//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//Packages
//Context
//Constants
//Navigation
//Components
//Functions
import { getWord } from '../../Functions/getWord'
//Screens
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../../Styles/Index'

export const Home = ({ navigation }) => {
	const [adjInfo, setAdjInfo] = useState({})
	const [nounInfo, setNounInfo] = useState({})
	const [bandName, setBandName] = useState('')

	const pressGetWord = () => {
		// 	if (adjInfo.type !== 'adjective') {
		// 		console.log('adj type is NOT adjective')
		// 	} else {
		// 		console.log('adj type IS adjective')
		// 	}
		// })

		if (nounInfo.type !== 'noun') {
			getWord().then(nounRes => {
				setNounInfo(nounRes)

				if (nounInfo.type !== 'noun') {
					console.log('noun type is NOT noun')
					pressGetWord()
				}
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
				<TouchableOpacity style={styles.navBtn} onPress={pressGetWord}>
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
