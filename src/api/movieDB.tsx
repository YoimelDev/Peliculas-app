import axios from 'axios'

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: 'f5991bc1f5d354547b586411a3815295',
		language: 'es-ES',
	},
})

export default movieDB
