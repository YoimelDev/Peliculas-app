import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface'

interface MoviesState {
	moviesNow: Movie[]
	popularMovies: Movie[]
	topRated: Movie[]
	upcoming: Movie[]
}

const useMovies = () => {
	const [isLoading, setIsLoading] = useState(true)

	const [moviesState, setMoviesState] = useState<MoviesState>({
		moviesNow: [],
		popularMovies: [],
		topRated: [],
		upcoming: [],
	})

	const getMovies = async () => {
		const nowPlayingPromise =
			movieDB.get<MovieDBMoviesResponse>('/now_playing')
		const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular')
		const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated')
		const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming')

		const response = await Promise.all([
			nowPlayingPromise,
			popularPromise,
			topRatedPromise,
			upcomingPromise,
		])

		setMoviesState({
			moviesNow: response[0].data.results,
			popularMovies: response[1].data.results,
			topRated: response[2].data.results,
			upcoming: response[3].data.results,
		})

		setIsLoading(false)
	}

	useEffect(() => {
		// Now_playing
		getMovies()
	}, [])

	return {
		...moviesState,
		isLoading,
	}
}

export default useMovies
