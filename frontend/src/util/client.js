import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "http://127.0.0.1:7000/api/v1"
});

export default client;