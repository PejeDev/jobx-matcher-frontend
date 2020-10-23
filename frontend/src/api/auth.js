import client from '../util/client';

export default {
	login: async (user) => {
		try {
			let response = await  client.post("/auth/login", user);
			return response.data;
		} catch (error) {
			throw error.Error;
		}
	},

	register: async (user) => {
		try {
			let response = await client.post("/auth/register", user);
			return response.body;
		} catch (error) {
			throw error.Error;
		}
	}
};