'use strict';
const DataTypes = require('sequelize').DataTypes;
const Database = require.main.require('./config/database');

const Job = Database.define('Job', {
	organization: {
		type: DataTypes.STRING,

	},
	picture: {
		type: DataTypes.STRING,

	},
	reason: {
		type: DataTypes.STRING,

	},
	objective: {
		type: DataTypes.STRING,

	},
	currency: {
		type: DataTypes.STRING,

	},
	compensation_min: {
		type: DataTypes.DOUBLE,
	},
	compensation_max: {
		type: DataTypes.DOUBLE,
	},
	location: {
		type: DataTypes.STRING,

	}
});

module.exports = Job;
