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
	return (
		<View style={styles.content}>
			<View style={styles.titleView}>
				<Text style={styles.h2}>Random Band Name Generator</Text>
			</View>
			<View style={styles.navRow}>
				<TouchableOpacity style={styles.navBtn} onPress={getBandName}>
					<Text style={styles.body}>Get Band Name</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		...Containers.content,
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
	},
	titleView: {
		// backgroundColor: 'red',
		width: Window.width * 0.6,
	},
})
