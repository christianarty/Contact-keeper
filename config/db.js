require('dotenv').config();
const mongoose = require('mongoose');
const dbConnection = process.env.MONGO_URI

const connectToDB = async () => {
	try {
		await mongoose.connect(dbConnection, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectToDB;