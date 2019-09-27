const mongoose = require('mongoose');
const config = require('config');
const dbConnection = config.get('mongoURI');

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