# Contact Keeper

Contact Keeper is a MERN (MongoDB, Express.js, React.js, Node.js) Application that manages your contacts. It has user authentication through JWTs. 

## Installation

Clone this repo and npm install the package.json

```bash
git clone https://github.com/christianarty/Contact-keeper.git
cd Contact-keeper/
npm install
```
Now before you start the server there are a few things that need to be initalized
1. I use the package `config` and I use that for global access to keys and secrets and db connection
   * Create a folder called `config` at the root level and within it create a file called `default.json` and another called `db.js`
   * Within `default.json`, create `mongoURI` & `jwtSecret` properties with your mongoDB connection URI and your own jwtSecret, respectively and export the module
   * Within `db.js`, import mongoose and establish a connection with your db and export the module
This code should look like this:
```javascript
//default.json
{
  "mongoURI": \<ENTER MONGODB_CONNECTION_STRING_HERE\>,
  "jwtSecret": \<ENTER_YOUR_SECRET_HERE\>
}

//db.js
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
```
In the near future, I will include a generic version of my config into the repository, but as of right now, this initialization is necessary for the application to run on your computer locally. 

After that initalization, you can run the dev server using:
```bash
npm run server
```
or the soon-to-be production npm command:
```bash
npm run start
```

## Technologies Used in this project:
* React.js
* Express.js
* MongoDB
* Node.js
* JWT (__for authentication__)

## Status
The backend is still being built, but close to being done. The frontend still needs to be developed. So as of right now, only api calls through postman (or whatever else you use) can be sent. More progress is being made on this project daily so, I'll keep this section updated.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

