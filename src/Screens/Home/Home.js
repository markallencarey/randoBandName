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
	const [adjInfo, setAdjInfo] = useState()
	const [nounInfo, setNounInfo] = useState()
	const [bandName, setBandName] = useState()

	const getAdj = () => {
		getWord().then(adjRes => {
			if (adjRes.type === 'adjective') {
				adjRes.word = adjRes.word[0].toUpperCase() + adjRes.word.slice(1).toLowerCase()
				setAdjInfo(adjRes)
			} else {
				getAdj()
			}
		})
	}

	const getNoun = () => {
		getWord().then(nounRes => {
			if (nounRes.type === 'noun') {
				nounRes.word = nounRes.word[0].toUpperCase() + nounRes.word.slice(1).toLowerCase()
				setNounInfo(nounRes)
			} else {
				getNoun()
			}
		})
	}

	// const getName = async () => {
	// 	await getAdj()
	// 	await getNoun()
	// }

	const pressGetWord = () => {
		getAdj()
		getNoun()

		if (adjInfo && nounInfo) {
			setBandName(`The ${adjInfo.word} ${nounInfo.word}s`)
		}
	}

	const resetBandName = () => {
		setAdjInfo()
		setNounInfo()
		setBandName('')
	}

	useEffect(() => console.log('line 73 -> adjInfo', adjInfo?.word, adjInfo?.type), [adjInfo])
	useEffect(() => console.log('line 74 -> nounInfo', nounInfo?.word, nounInfo?.type), [nounInfo])
	useEffect(() => console.log('line 74 -> bandName', bandName), [bandName])

	return (
		<View style={styles.content}>
			<View style={styles.titleView}>
				<Text style={styles.h2}>Random Band Name Generator</Text>
				<TouchableOpacity style={styles.navBtn} onPress={pressGetWord}>
					<Text style={styles.body}>Get Band Name</Text>
				</TouchableOpacity>
				<View style={styles.adjInfo}>{adjInfo && nounInfo ? <Text style={styles.h2}>{bandName}</Text> : null}</View>
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
	},
	titleView: {
		width: Window.width * 0.6,
	},
	adjInfo: {
		marginTop: Misc.padding * 2,
	},
})
