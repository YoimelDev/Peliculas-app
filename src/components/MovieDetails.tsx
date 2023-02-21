import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import CastItem from './CastItem'

interface Props {
	movieFull: MovieFull
	cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})

	return (
		<>
			{/* Detalles */}
			<View style={{ marginHorizontal: 20 }}>
				<View style={{ flexDirection: 'row', gap: 5 }}>
					<Icon name="star-outline" color="grey" size={16} />
					<Text>{movieFull.vote_average}</Text>
					<Text>
						{' '}
						- {movieFull.genres.map(g => g.name).join(', ')}
					</Text>
				</View>

				{/* Historia */}
				<View>
					<Text
						style={{
							fontSize: 23,
							marginTop: 10,
							fontWeight: 'bold',
						}}
					>
						Historia
					</Text>
					<Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
				</View>

				{/* Presupuesto */}
				<View>
					<Text
						style={{
							fontSize: 23,
							marginTop: 10,
							fontWeight: 'bold',
						}}
					>
						Presupuesto
					</Text>
					<Text style={{ fontSize: 16 }}>
						{formatter.format(movieFull.budget)}
					</Text>
				</View>
			</View>

			{/* Casting */}
			<View style={{ marginTop: 10, marginHorizontal: 20 }}>
				<Text
					style={{
						fontSize: 23,
						marginTop: 10,
						fontWeight: 'bold',
					}}
				>
					Actores
				</Text>

				<FlatList
					style={{ marginVertical: 10 }}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={cast}
					renderItem={({ item }) => <CastItem actor={item} />}
					keyExtractor={item => item.id.toString()}
				/>
			</View>
		</>
	)
}

export default MovieDetails
