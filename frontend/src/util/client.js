import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://2db50937ef93.ngrok.io/api/v1"
});

export default client;