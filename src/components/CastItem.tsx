import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
	actor: Cast
}

const CastItem = ({ actor }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

	return (
		<View style={styles.container}>
			{actor.profile_path && (
				<Image
					source={{ uri }}
					style={{ width: 50, height: 50, borderRadius: 10 }}
				/>
			)}

			<View style={styles.actorInfo}>
				<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
					{actor.name}
				</Text>
				<Text>{actor.character}</Text>
			</View>
		</View>
	)
}

export default CastItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 10,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,

		elevation: 9,
	},
	actorInfo: {
		paddingHorizontal: 15,
		justifyContent: 'center',
	},
})
