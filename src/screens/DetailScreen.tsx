import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
	Dimensions,
	Image,
	StyleSheet,
	View,
	ScrollView,
	Text,
	ActivityIndicator,
} from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import useMovieDetails from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({ route, navigation }: Props) => {
	const movie = route.params
	const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

	const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<View style={styles.imageBorder}>
					<Image source={{ uri }} style={styles.posterImage} />
				</View>
			</View>

			<View style={styles.marginContainer}>
				<Text style={styles.subTitle}>{movie.original_title}</Text>
				<Text style={styles.title}>{movie.title}</Text>
			</View>

			{isLoading ? (
				<ActivityIndicator size="large" color="#0000ff" />
			) : (
				<MovieDetails movieFull={movieFull!} cast={cast} />
			)}

			{/* Boton para cerrar */}
			<View style={styles.backBtn}>
				<TouchableOpacity onPress={() => navigation.pop()}>
					<Icon color="white" name="arrow-back-outline" size={40} />
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

export default DetailScreen

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeight * 0.7,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,

		elevation: 9,
	},
	imageBorder: {
		flex: 1,
		overflow: 'hidden',
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
	},
	posterImage: {
		flex: 1,
	},
	marginContainer: {
		marginTop: 20,
		marginHorizontal: 20,
		rowGap: 5,
	},
	subTitle: {
		fontSize: 18,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	backBtn: {
		position: 'absolute',
		top: 10,
		left: 10,
		fontSize: 40,
	},
})
