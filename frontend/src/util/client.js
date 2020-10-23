import axios from 'axios';

const client = axios.create({
	headers: {
		"Access-Control-Allow-Origin": "*"
	},
	baseURL: "https://jobmatcher.loca.lt/api/v1"
});

export default client;