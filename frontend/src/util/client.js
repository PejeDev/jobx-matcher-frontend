import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://api-jobx.pejedev.xyz/api/v1"
});

export default client;
