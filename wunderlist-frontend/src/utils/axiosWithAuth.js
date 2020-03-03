import axios from 'axios';

export const axiosWithAuth = () => {
	const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');

	return axios.create({
		baseURL: 'https://wunderlist7.herokuapp.com/',
		headers: {
			Authorization: AUTH_TOKEN,
			'Content-Type': 'application/json'
		}
	});
};
