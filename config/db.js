require('dotenv').config();
const mongoose = require('mongoose');
const dbConnection = process.env.MONGO_URI

const connectToDB = async () => {
	console.log('Attempting to connect to:', dbConnection);

	try {
		await mongoose.connect(dbConnection, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
		console.log('MongoDB Connected');
	} catch (err) {
		console.error('MongoDB connection error:', err.message);
		console.error('Full error:', err);
		process.exit(1);
	}
	mongoose.connection.on('error', (err) => {
		console.error('MongoDB connection error:', err);
	});
};

module.exports = connectToDB;



