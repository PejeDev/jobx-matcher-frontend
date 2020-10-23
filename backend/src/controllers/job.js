const db = require('../models');
const jwt = require('jsonwebtoken');
const api = require('../api/torre')
const Job = db.Job;

let controller = {

	getOffers: async (req, res) => {
		try {
			let token = req.headers['authorization'].split(' ')[1];
			let offset = req.params.offset || 0;
			let user = jwt.decode(token);
			let jobs = await api.jobSearch(offset, user.torre_user);
			let offers = jobs.results;
			return res.status(200).json(offers);

		} catch (e) {
			return res.status(500).json({ error: `${e}` });
		}
	},

}
module.exports = controller;
