import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://jobx-matcher.shiaai.xyz/api/v1"
});

export default client;
