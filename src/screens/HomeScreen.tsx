import React, { useContext } from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import useMovies from '../hooks/useMovies'

import MoviePoster from '../components/MoviePoster'
import HorizontalSlider from '../components/HorizontalSlider'
import GradientBackground from '../components/GradientBackground'
import { getImageColors } from '../helpers/getColors'
import { GradientContext } from '../context/GradientContex'
import { useEffect } from 'react'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {
	const { moviesNow, popularMovies, topRated, upcoming, isLoading } =
		useMovies()

	const { setMainColors } = useContext(GradientContext)

	const getPosterColors = async (index: number) => {
		const movie = moviesNow[index]
		const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

		const [primary = 'green', secondary = 'orange'] = await getImageColors(
			uri
		)

		setMainColors({ primary, secondary })
	}

	useEffect(() => {
		if (moviesNow.length > 0) {
			getPosterColors(0)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moviesNow])

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator color="red" size={100} />
			</View>
		)
	}

	return (
		<GradientBackground>
			<ScrollView>
				<View style={{ marginTop: 10 }}>
					{/* Carousel Principal */}
					<View style={{ height: 440 }}>
						<Carousel
							data={moviesNow}
							renderItem={({ item }: any) => (
								<MoviePoster movie={item} />
							)}
							sliderWidth={windowWidth}
							itemWidth={300}
							inactiveSlideOpacity={0.9}
							onSnapToItem={index => getPosterColors(index)}
						/>
					</View>

					{/* Peliculas populares */}
					<HorizontalSlider title="En cine" movies={moviesNow} />
					<HorizontalSlider
						title="Populares"
						movies={popularMovies}
					/>
					<HorizontalSlider title="Top Rated" movies={topRated} />
					<HorizontalSlider title="Upcoming" movies={upcoming} />
				</View>
			</ScrollView>
		</GradientBackground>
	)
}

export default HomeScreen
