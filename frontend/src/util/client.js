import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "http://192.168.0.17:7000/api/v1"
});

export default client;