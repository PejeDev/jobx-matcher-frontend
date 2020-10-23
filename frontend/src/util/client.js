import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://dfe2ffb1f53b.ngrok.io/api/v1"
});

export default client;