import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'

interface Props {
	title?: string
	movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {
	return (
		<View style={{ height: 250 }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
			<FlatList
				data={movies}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }: any) => (
					<MoviePoster movie={item} width={140} height={200} />
				)}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	)
}

export default HorizontalSlider
